(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_PUZZLES;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  const grid = document.querySelector("[data-puzzle-grid]");
  if (!data || !storage || !grid) return;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" })[character];
    });
  }

  function key(puzzle) {
    return data.storageNamespace + ":" + puzzle.id;
  }

  function read(puzzle) {
    return storage.read(key(puzzle), { answer: null, checked: false, correct: false, reflection: "" });
  }

  function controls(puzzle, saved) {
    if (puzzle.type === "choice") {
      return puzzle.options.map(function (option, index) {
        return '<label class="option"><input type="radio" name="' + puzzle.id + '" value="' + index + '" ' + (Number(saved.answer) === index ? "checked" : "") + "> <span>" + escapeHtml(option) + "</span></label>";
      }).join("");
    }
    if (puzzle.type === "multi") {
      const selected = Array.isArray(saved.answer) ? saved.answer : [];
      return puzzle.options.map(function (option, index) {
        return '<label class="option"><input type="checkbox" value="' + index + '" ' + (selected.includes(index) ? "checked" : "") + "> <span>" + escapeHtml(option) + "</span></label>";
      }).join("");
    }
    return puzzle.items.map(function (item, index) {
      const current = Array.isArray(saved.answer) ? Number(saved.answer[index]) : -1;
      return '<label class="puzzle-order-row"><span>' + escapeHtml(item) + '</span><select data-order-index="' + index + '"><option value="">Choose position</option>' +
        puzzle.items.map(function (_, position) { return '<option value="' + position + '" ' + (current === position ? "selected" : "") + ">" + (position + 1) + "</option>"; }).join("") +
        "</select></label>";
    }).join("");
  }

  function answerFrom(card, puzzle) {
    if (puzzle.type === "choice") {
      const selected = card.querySelector('input[type="radio"]:checked');
      return selected ? Number(selected.value) : null;
    }
    if (puzzle.type === "multi") {
      return Array.from(card.querySelectorAll('input[type="checkbox"]:checked')).map(function (input) { return Number(input.value); }).sort();
    }
    return Array.from(card.querySelectorAll("[data-order-index]")).map(function (select) { return select.value === "" ? -1 : Number(select.value); });
  }

  function correctAnswer(puzzle, answer) {
    if (puzzle.type === "choice") return answer === puzzle.answer;
    const expected = puzzle.type === "multi" ? puzzle.answers : puzzle.correctOrder;
    return Array.isArray(answer) && answer.length === expected.length && answer.every(function (value, index) { return value === expected[index]; });
  }

  function renderCard(puzzle) {
    const saved = read(puzzle);
    return '<details class="card puzzle-card" id="' + puzzle.id + '"><summary><span class="number">' + puzzle.moduleId + "</span><span><small>Module " +
      String(puzzle.moduleId).padStart(2, "0") + " · " + escapeHtml(puzzle.mechanic) + "</small>" + escapeHtml(puzzle.title) + '</span></summary><div class="puzzle-body"><p>' +
      escapeHtml(puzzle.prompt) + '</p><div class="puzzle-controls">' + controls(puzzle, saved) + '</div><div class="check-actions"><button type="button" data-check-puzzle>Check puzzle</button>' +
      '<a class="button secondary" href="' + escapeHtml(puzzle.theoryRoute) + '">Review exact theory</a></div><p class="feedback ' +
      (saved.checked ? (saved.correct ? "good" : "try") : "") + '" data-puzzle-feedback aria-live="polite">' +
      (saved.checked ? (saved.correct ? "Correct — the reasoning is in place." : "Not yet — use the exact theory link, then try again.") : "") +
      '</p><label for="' + puzzle.id + '-reflection"><strong>Transfer challenge:</strong> ' + escapeHtml(puzzle.reflection) + '</label><textarea id="' +
      puzzle.id + '-reflection" rows="5" data-puzzle-reflection>' + escapeHtml(saved.reflection) + '</textarea><p class="save-state" data-puzzle-save>' +
      (saved.reflection ? "Reflection saved on this device" : "Autosave is on") + "</p></div></details>";
  }

  grid.innerHTML = data.puzzles.map(renderCard).join("");

  function updateProgress() {
    const complete = data.puzzles.filter(function (puzzle) {
      const saved = read(puzzle);
      return saved.correct && String(saved.reflection || "").trim().length >= 20;
    }).length;
    document.querySelector("[data-puzzle-progress]").textContent = complete + " of " + data.puzzles.length + " complete";
    document.querySelector("[data-puzzle-fill]").style.width = Math.round((complete / data.puzzles.length) * 100) + "%";
  }

  grid.querySelectorAll(".puzzle-card").forEach(function (card) {
    const puzzle = data.puzzles.find(function (item) { return item.id === card.id; });
    card.querySelector("[data-check-puzzle]").addEventListener("click", function () {
      const saved = read(puzzle);
      const answer = answerFrom(card, puzzle);
      const correct = correctAnswer(puzzle, answer);
      storage.write(key(puzzle), { answer: answer, checked: true, correct: correct, reflection: saved.reflection || "", updatedAt: new Date().toISOString() });
      const feedback = card.querySelector("[data-puzzle-feedback]");
      feedback.className = "feedback " + (correct ? "good" : "try");
      feedback.textContent = correct ? "Correct — the reasoning is in place." : "Not yet — use the exact theory link, then try again.";
      updateProgress();
    });
    const reflection = card.querySelector("[data-puzzle-reflection]");
    let timer = null;
    reflection.addEventListener("input", function () {
      window.clearTimeout(timer);
      card.querySelector("[data-puzzle-save]").textContent = "Saving…";
      timer = window.setTimeout(function () {
        const saved = read(puzzle);
        saved.reflection = reflection.value;
        saved.updatedAt = new Date().toISOString();
        storage.write(key(puzzle), saved);
        card.querySelector("[data-puzzle-save]").textContent = "Reflection saved on this device";
        updateProgress();
      }, 250);
    });
  });

  document.querySelector("[data-puzzle-print]").addEventListener("click", function () { window.print(); });
  updateProgress();
})();
