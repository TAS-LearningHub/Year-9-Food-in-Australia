(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_ACTIVITIES;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  if (!data || !storage) return;

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"]/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[character];
    });
  }

  function courseHref(value) {
    const path = String(value || "");
    if (!path || /^(?:[a-z]+:|#|\/)/i.test(path)) return path;
    const prefix = document.body.dataset.courseRoot === ".." ? "../" : "";
    return `${prefix}${path.replace(/^\.\//, "")}`;
  }

  function byId(activityId) {
    return data.activities.find(function (activity) { return activity.id === activityId; });
  }

  function defaultState(activity) {
    const orders = {};
    activity.tasks.filter(function (task) { return task.type === "sequence"; }).forEach(function (task) {
      orders[task.id] = task.items.map(function (item) { return item.id; }).reverse();
    });
    return { schemaVersion: data.schemaVersion, activityId: activity.id, responses: {}, checked: {}, orders: orders, updatedAt: null };
  }

  function readState(activity) {
    const state = storage.read(activity.storageKey, null);
    if (!state || state.schemaVersion !== data.schemaVersion || state.activityId !== activity.id) return defaultState(activity);
    state.responses = state.responses || {};
    state.checked = state.checked || {};
    state.orders = state.orders || {};
    activity.tasks.filter(function (task) { return task.type === "sequence"; }).forEach(function (task) {
      const ids = task.items.map(function (item) { return item.id; });
      if (!Array.isArray(state.orders[task.id]) || state.orders[task.id].slice().sort().join("|") !== ids.slice().sort().join("|")) state.orders[task.id] = ids.reverse();
    });
    return state;
  }

  function saveState(activity, state) {
    state.updatedAt = new Date().toISOString();
    const saved = storage.write(activity.storageKey, state);
    window.dispatchEvent(new CustomEvent("food-australia-progress"));
    return saved;
  }

  function taskComplete(task, state) {
    if (task.type === "choice") return Boolean(state.responses[task.id]);
    if (task.type === "classification") {
      const response = state.responses[task.id] || {};
      return task.items.every(function (item) { return Boolean(response[item.id]); });
    }
    if (task.type === "sequence") return Array.isArray(state.orders[task.id]);
    return false;
  }

  function taskCorrectCount(task, state) {
    if (task.type === "choice") {
      const choice = task.choices.find(function (item) { return item.id === state.responses[task.id]; });
      return choice && choice.correct ? 1 : 0;
    }
    if (task.type === "classification") {
      const response = state.responses[task.id] || {};
      return task.items.filter(function (item) { return response[item.id] === item.answer; }).length;
    }
    if (task.type === "sequence") {
      const order = state.orders[task.id] || [];
      return task.correctOrder.filter(function (itemId, index) { return order[index] === itemId; }).length;
    }
    return 0;
  }

  function taskTotal(task) {
    if (task.type === "choice") return 1;
    if (task.type === "classification") return task.items.length;
    if (task.type === "sequence") return task.items.length;
    return 0;
  }

  function renderClassification(activity, task, state) {
    const response = state.responses[task.id] || {};
    const checked = Boolean(state.checked[task.id]);
    return `<section class="activity-task" data-task-id="${escapeHtml(task.id)}"><h3>${escapeHtml(task.prompt)}</h3><div class="classification-grid">${task.items.map(function (item) {
      const chosen = response[item.id] || "";
      const isCorrect = chosen === item.answer;
      return `<div class="classification-item"><label for="${escapeHtml(activity.id)}-${escapeHtml(task.id)}-${escapeHtml(item.id)}">${escapeHtml(item.text)}</label><select id="${escapeHtml(activity.id)}-${escapeHtml(task.id)}-${escapeHtml(item.id)}" data-classify-item="${escapeHtml(item.id)}"><option value="">Choose…</option>${task.categories.map(function (category) { return `<option value="${escapeHtml(category.id)}" ${chosen === category.id ? "selected" : ""}>${escapeHtml(category.label)}</option>`; }).join("")}</select>${checked && chosen ? `<p class="item-feedback ${isCorrect ? "success" : "review"}">${escapeHtml(isCorrect ? item.feedback : `Review this classification. ${item.feedback}`)}</p>` : ""}</div>`;
    }).join("")}</div><button type="button" data-check-task>${checked ? "Check again" : "Check classifications"}</button><p role="status" class="task-status">${checked ? `${taskCorrectCount(task, state)} of ${taskTotal(task)} decisions align with the evidence. Review each explanation.` : "Choices save on this device as you work."}</p></section>`;
  }

  function renderChoice(activity, task, state) {
    const chosen = state.responses[task.id] || "";
    const checked = Boolean(state.checked[task.id]);
    const choice = task.choices.find(function (item) { return item.id === chosen; });
    return `<section class="activity-task" data-task-id="${escapeHtml(task.id)}"><h3>${escapeHtml(task.prompt)}</h3><fieldset><legend class="visually-hidden">Choose one response</legend>${task.choices.map(function (item) { return `<label class="choice-row"><input type="radio" name="${escapeHtml(activity.id)}-${escapeHtml(task.id)}" value="${escapeHtml(item.id)}" ${chosen === item.id ? "checked" : ""}> <span>${escapeHtml(item.text)}</span></label>`; }).join("")}</fieldset><button type="button" data-check-task>${checked ? "Check again" : "Check decision"}</button>${checked && choice ? `<div class="feedback ${choice.correct ? "success" : "review"}" tabindex="-1" data-task-feedback><strong>${choice.correct ? "Sound decision." : "Reconsider this choice."}</strong> ${escapeHtml(choice.feedback)}</div>` : `<p role="status" class="task-status">Choose a response, then check your reasoning.</p>`}</section>`;
  }

  function renderSequence(activity, task, state) {
    const order = state.orders[task.id];
    const checked = Boolean(state.checked[task.id]);
    const itemMap = Object.fromEntries(task.items.map(function (item) { return [item.id, item]; }));
    return `<section class="activity-task" data-task-id="${escapeHtml(task.id)}"><h3>${escapeHtml(task.prompt)}</h3><p>Use the arrow buttons to arrange the stages. The same controls work with keyboard or touch.</p><ol class="sequence-list">${order.map(function (itemId, index) {
      return `<li><span>${escapeHtml(itemMap[itemId].text)}</span><span class="sequence-controls"><button type="button" class="button-secondary" data-move="up" data-item-id="${escapeHtml(itemId)}" ${index === 0 ? "disabled" : ""} aria-label="Move ${escapeHtml(itemMap[itemId].text)} earlier">↑</button><button type="button" class="button-secondary" data-move="down" data-item-id="${escapeHtml(itemId)}" ${index === order.length - 1 ? "disabled" : ""} aria-label="Move ${escapeHtml(itemMap[itemId].text)} later">↓</button></span></li>`;
    }).join("")}</ol><button type="button" data-check-task>${checked ? "Check again" : "Check order"}</button>${checked ? `<div class="feedback ${taskCorrectCount(task, state) === taskTotal(task) ? "success" : "review"}" tabindex="-1" data-task-feedback><strong>${taskCorrectCount(task, state) === taskTotal(task) ? "The reasoning sequence is sound." : `${taskCorrectCount(task, state)} of ${taskTotal(task)} stages are in position.`}</strong> ${escapeHtml(task.feedback)}</div>` : ""}</section>`;
  }

  function renderTask(activity, task, state) {
    if (task.type === "classification") return renderClassification(activity, task, state);
    if (task.type === "sequence") return renderSequence(activity, task, state);
    return renderChoice(activity, task, state);
  }

  function bindTask(root, activity, task, state) {
    const taskRoot = root.querySelector(`[data-task-id="${task.id}"]`);
    taskRoot.querySelectorAll("[data-classify-item]").forEach(function (select) {
      select.addEventListener("change", function () {
        state.responses[task.id] = state.responses[task.id] || {};
        state.responses[task.id][select.dataset.classifyItem] = select.value;
        state.checked[task.id] = false;
        saveState(activity, state);
        render(root, activity, select.dataset.classifyItem);
      });
    });
    taskRoot.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        state.responses[task.id] = radio.value;
        state.checked[task.id] = false;
        saveState(activity, state);
        render(root, activity);
      });
    });
    taskRoot.querySelectorAll("[data-move]").forEach(function (button) {
      button.addEventListener("click", function () {
        const order = state.orders[task.id];
        const index = order.indexOf(button.dataset.itemId);
        const target = button.dataset.move === "up" ? index - 1 : index + 1;
        if (target < 0 || target >= order.length) return;
        [order[index], order[target]] = [order[target], order[index]];
        state.checked[task.id] = false;
        saveState(activity, state);
        render(root, activity);
        const moved = root.querySelector(`[data-task-id="${task.id}"] [data-item-id="${button.dataset.itemId}"][data-move="${button.dataset.move}"]`);
        if (moved) moved.focus();
      });
    });
    taskRoot.querySelector("[data-check-task]").addEventListener("click", function () {
      if (!taskComplete(task, state)) {
        const status = taskRoot.querySelector(".task-status");
        if (status) status.textContent = "Complete each decision before checking.";
        return;
      }
      state.checked[task.id] = true;
      saveState(activity, state);
      render(root, activity);
      root.querySelector(`[data-task-id="${task.id}"] [data-task-feedback]`)?.focus();
    });
  }

  function render(root, activity) {
    const state = readState(activity);
    const checkedTasks = activity.tasks.filter(function (task) { return state.checked[task.id]; }).length;
    const shouldOpen = Boolean(root.open || window.location.hash === "#" + root.id);
    root.classList.add("applied-activity");
    root.dataset.mounted = "true";
    root.innerHTML = [
      `<summary><span>Module ${activity.moduleId} · ${escapeHtml(activity.title)}</span><small>${checkedTasks} of ${activity.tasks.length} tasks checked</small></summary><div class="activity-body">`,
      `<header><p class="eyebrow">${escapeHtml(activity.recordLabel)}</p><h2>${escapeHtml(activity.title)}</h2><p><strong>Mechanic:</strong> ${escapeHtml(activity.mechanic)}</p><p>${escapeHtml(activity.purpose)}</p><p>${escapeHtml(activity.instructions)}</p></header>`,
      activity.tasks.map(function (task) { return renderTask(activity, task, state); }).join(""),
      `<details class="low-tech" open><summary>Printable / low-tech version</summary><p>${escapeHtml(activity.lowTech)}</p></details>`,
      `<div class="activity-actions"><a class="button-secondary" href="${escapeHtml(courseHref(activity.helpRoute))}">Review theory help</a><a class="button-secondary" href="${escapeHtml(courseHref(`modules/module-${String(activity.moduleId).padStart(2, "0")}.html#module-review`))}">Open Module ${String(activity.moduleId).padStart(2, "0")} quizzes and long responses</a><a class="button-secondary" href="${escapeHtml(courseHref(activity.evidenceDestination))}">Continue to folio card</a><button type="button" class="button-secondary" data-reset-activity>Reset this activity</button></div>`,
      `<p class="save-state" role="status">${checkedTasks} of ${activity.tasks.length} tasks checked · ${state.updatedAt ? "work saved on this device" : "not started"}</p>`,
      `<p class="evidence-boundary"><strong>${escapeHtml(activity.recordLabel)}.</strong> ${escapeHtml(data.recordBoundary)}</p></div>`
    ].join("");
    root.open = shouldOpen;
    activity.tasks.forEach(function (task) { bindTask(root, activity, task, state); });
    root.querySelector("[data-reset-activity]").addEventListener("click", function () {
      if (!window.confirm("Reset only this activity on this browser?")) return;
      storage.remove(activity.storageKey);
      render(root, activity);
      window.dispatchEvent(new CustomEvent("food-australia-progress"));
    });
  }

  function status(activityId) {
    const activity = byId(activityId);
    if (!activity) return { checkedTasks: 0, totalTasks: 0, complete: false, started: false };
    const state = readState(activity);
    const checkedTasks = activity.tasks.filter(function (task) { return Boolean(state.checked[task.id]); }).length;
    return {
      checkedTasks: checkedTasks,
      totalTasks: activity.tasks.length,
      complete: checkedTasks === activity.tasks.length,
      started: Boolean(state.updatedAt)
    };
  }

  function isComplete(activityId) {
    return status(activityId).complete;
  }

  function updateBankProgress() {
    const root = document.querySelector("[data-activity-bank-progress]");
    if (!root) return;
    const complete = data.activities.filter(function (activity) { return isComplete(activity.id); }).length;
    root.querySelector("[data-activity-count]").textContent = complete + " of " + data.activities.length;
    root.querySelector("[data-activity-progress]").style.width = Math.round((complete / data.activities.length) * 100) + "%";
  }

  function openHashTarget() {
    if (!window.location.hash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (!target || !target.matches("[data-activity-id]")) return;
    target.open = true;
    if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
    window.setTimeout(function () {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    }, 80);
  }

  function mount(root, activityId) {
    const activity = byId(activityId || root.dataset.activityId);
    if (!activity) {
      root.innerHTML = '<p role="alert">This Applied Learning Activity could not be loaded.</p>';
      return false;
    }
    render(root, activity);
    return true;
  }

  function mountAll(scope) {
    (scope || document).querySelectorAll("[data-activity-id]").forEach(function (root) { mount(root, root.dataset.activityId); });
    updateBankProgress();
    openHashTarget();
  }

  window.addEventListener("food-australia-progress", updateBankProgress);
  window.addEventListener("hashchange", openHashTarget);
  window.FOOD_AUSTRALIA_ACTIVITY_RUNTIME = Object.freeze({ mount, mountAll, byId, status, isComplete, updateBankProgress });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { mountAll(document); });
  else mountAll(document);
})();
