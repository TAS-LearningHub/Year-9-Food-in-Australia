(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_CHECKS;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  if (!data || !storage) return;

  function bySection(sectionId) {
    return data.checks.find(function (check) { return check.sectionId === sectionId; });
  }

  function bankForSection(sectionId) {
    const parts = [window.FOOD_AUSTRALIA_QUESTION_BANK_PART_A, window.FOOD_AUSTRALIA_QUESTION_BANK_PART_B];
    for (const part of parts) {
      if (part && Array.isArray(part[sectionId])) return part[sectionId];
    }
    const original = bySection(sectionId);
    return original ? [{ prompt: original.prompt, choices: original.choices }] : [];
  }

  function recordName(sectionId, questionIndex) {
    return questionIndex === 0
      ? data.shared.namespace + ":" + sectionId
      : data.shared.namespace + ":" + sectionId + ":q" + (questionIndex + 1);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" })[character];
    });
  }

  function courseHref(value) {
    const path = String(value || "");
    if (!path || /^(?:[a-z]+:|#|\/)/i.test(path)) return path;
    const prefix = document.body.dataset.courseRoot === ".." ? "../" : "";
    return prefix + path.replace(/^\.\//, "");
  }

  function readAnswer(sectionId, questionIndex) {
    return storage.read(recordName(sectionId, questionIndex), {});
  }

  function announceProgress() {
    window.dispatchEvent(new CustomEvent("food-australia-progress"));
  }

  function helpHref(check) {
    return courseHref(check.theoryRoute.split("#")[0] + "#" + check.helpAnchor);
  }

  function feedbackHtml(check, choice) {
    const lead = choice.correct ? "Correct — keep going." : "Not yet.";
    const help = choice.correct ? "" : ' <a href="' + escapeHtml(helpHref(check)) + '">Review ' + escapeHtml(check.helpLabel) + "</a>.";
    return "<strong>" + lead + "</strong> " + escapeHtml(choice.feedback) + help;
  }

  function questionHtml(check, question, questionIndex) {
    const saved = readAnswer(check.sectionId, questionIndex);
    const selected = saved.selectedChoice || "";
    const choice = question.choices.find(function (item) { return item.id === selected; });
    const checked = Boolean(saved.checked && choice);
    const options = question.choices.map(function (item) {
      return '<label class="option"><input type="radio" name="' + escapeHtml(check.sectionId) + "-q" + (questionIndex + 1) + '" value="' + escapeHtml(item.id) + '" ' + (selected === item.id ? "checked" : "") + "> <span>" + escapeHtml(item.text) + "</span></label>";
    }).join("");
    return '<fieldset class="question" data-question-index="' + questionIndex + '"><legend>' + (questionIndex + 1) + ". " + escapeHtml(question.prompt) + "</legend>" + options +
      '<button type="button" class="button secondary compact check-one" data-check-answer>Check answer</button>' +
      '<p class="feedback ' + (checked ? (choice.correct ? "good" : "try") : "") + '" aria-live="polite" data-question-feedback>' + (checked ? feedbackHtml(check, choice) : "") + "</p></fieldset>";
  }

  function render(root, check) {
    const questions = bankForSection(check.sectionId);
    root.classList.add("learning-check");
    root.dataset.mounted = "true";
    root.innerHTML =
      '<p class="eyebrow">' + escapeHtml(data.shared.recordLabel) + "</p>" +
      "<h3>" + escapeHtml(check.title) + " — check your understanding</h3>" +
      "<p>Answer all ten questions. Check each answer for immediate feedback, and return to the exact theory help when you need another look.</p>" +
      '<p class="check-help"><a href="' + escapeHtml(helpHref(check)) + '">Review ' + escapeHtml(check.helpLabel) + "</a></p>" +
      '<div class="question-list">' + questions.map(function (question, index) { return questionHtml(check, question, index); }).join("") + "</div>" +
      '<div class="check-actions"><button type="button" class="button secondary compact" data-check-reset>Reset these ten questions</button></div>' +
      '<p class="evidence-boundary"><strong>' + escapeHtml(data.shared.recordLabel) + ".</strong> " + escapeHtml(data.shared.boundary) + "</p>";

    root.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        const fieldset = radio.closest("[data-question-index]");
        const questionIndex = Number(fieldset.dataset.questionIndex);
        storage.write(recordName(check.sectionId, questionIndex), {
          schemaVersion: data.schemaVersion,
          sectionId: check.sectionId,
          questionIndex: questionIndex,
          selectedChoice: radio.value,
          checked: false,
          updatedAt: new Date().toISOString()
        });
        const feedback = fieldset.querySelector("[data-question-feedback]");
        feedback.className = "feedback";
        feedback.textContent = "Choice saved — check when ready.";
        announceProgress();
      });
    });

    root.querySelectorAll("[data-check-answer]").forEach(function (button) {
      button.addEventListener("click", function () {
        const fieldset = button.closest("[data-question-index]");
        const questionIndex = Number(fieldset.dataset.questionIndex);
        const selectedRadio = fieldset.querySelector('input[type="radio"]:checked');
        const feedback = fieldset.querySelector("[data-question-feedback]");
        if (!selectedRadio) {
          feedback.className = "feedback try";
          feedback.textContent = "Choose an answer, then check again.";
          return;
        }
        storage.write(recordName(check.sectionId, questionIndex), {
          schemaVersion: data.schemaVersion,
          sectionId: check.sectionId,
          questionIndex: questionIndex,
          selectedChoice: selectedRadio.value,
          checked: true,
          updatedAt: new Date().toISOString()
        });
        const question = questions[questionIndex];
        const choice = question.choices.find(function (item) { return item.id === selectedRadio.value; });
        feedback.className = "feedback " + (choice.correct ? "good" : "try");
        feedback.innerHTML = feedbackHtml(check, choice);
        feedback.setAttribute("tabindex", "-1");
        feedback.focus();
        announceProgress();
      });
    });

    root.querySelector("[data-check-reset]").addEventListener("click", function () {
      if (!window.confirm("Reset only these ten formative questions? This cannot be undone.")) return;
      questions.forEach(function (_, index) { storage.remove(recordName(check.sectionId, index)); });
      render(root, check);
      const first = root.querySelector('input[type="radio"]');
      if (first) first.focus();
      announceProgress();
    });
  }

  function mount(root, sectionId) {
    const check = bySection(sectionId || root.dataset.checkSection);
    if (!check) {
      root.innerHTML = '<p role="alert">This formative check could not be loaded.</p>';
      return false;
    }
    render(root, check);
    return true;
  }

  function mountAll(scope) {
    (scope || document).querySelectorAll("[data-check-section]").forEach(function (root) {
      mount(root, root.dataset.checkSection);
    });
  }

  function sectionCorrectCount(sectionId) {
    return bankForSection(sectionId).reduce(function (total, question, index) {
      const saved = readAnswer(sectionId, index);
      const selected = question.choices.find(function (choice) { return choice.id === saved.selectedChoice; });
      return total + Number(Boolean(saved.checked && selected && selected.correct));
    }, 0);
  }

  window.FOOD_AUSTRALIA_CHECK_RUNTIME = Object.freeze({ mount: mount, mountAll: mountAll, bySection: bySection, bankForSection: bankForSection, sectionCorrectCount: sectionCorrectCount });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { mountAll(document); });
  else mountAll(document);
})();
