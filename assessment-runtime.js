(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_ASSESSMENT;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  if (!data || !storage) return;

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"]/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[character];
    });
  }

  function readPlan() {
    const saved = storage.read(data.planner.storageKey, null);
    const plan = { schemaVersion: data.schemaVersion, courseId: data.courseId, version: data.version, fields: {}, updatedAt: null };
    if (saved && saved.schemaVersion === data.schemaVersion && saved.courseId === data.courseId) {
      data.planner.fields.forEach(function (field) { plan.fields[field.id] = String(saved.fields?.[field.id] || ""); });
      plan.updatedAt = saved.updatedAt || null;
    }
    return plan;
  }

  function savePlan(plan) {
    plan.updatedAt = new Date().toISOString();
    return storage.write(data.planner.storageKey, plan);
  }

  function render(root) {
    const plan = readPlan();
    root.innerHTML = [
      `<section class="assessment-boundary" aria-labelledby="unit-status"><p class="eyebrow">${escapeHtml(data.status)}</p><h2 id="unit-status">${escapeHtml(data.unitBoundary.heading)}</h2><p>${escapeHtml(data.unitBoundary.statement)}</p><p><strong>What to do:</strong> ${escapeHtml(data.unitBoundary.studentAction)}</p><p><strong>Notification acknowledgement:</strong> ${escapeHtml(data.unitBoundary.acknowledgement)}</p></section>`,
      `<section><h2>Current Year 9 Food Technology schedule context</h2><p>This is the full course-level schedule recorded in the 2026 booklet. None of these rows is relabelled as a Food in Australia task.</p><div class="schedule-wrap"><table><thead><tr><th scope="col">Task</th><th scope="col">Nature/name</th><th scope="col">Due</th><th scope="col">Outcomes</th><th scope="col">Weighting</th><th scope="col">Notification status</th></tr></thead><tbody>${data.schedule.map(function (row) { return `<tr><th scope="row" data-label="Task">${escapeHtml(row.task)}</th><td data-label="Nature/name">${escapeHtml(row.nature)}</td><td data-label="Due">${escapeHtml(row.due)}</td><td data-label="Outcomes">${escapeHtml(row.outcomes)}</td><td data-label="Weighting">${escapeHtml(row.weighting)}</td><td data-label="Notification status">${escapeHtml(row.notification)}</td></tr>`; }).join("")}</tbody></table></div><p class="source-note">Source: <a href="${escapeHtml(data.source.hubUrl)}">WWHS Assessment Handbooks hub</a> · verified ${escapeHtml(data.source.retrievedAt)}. ${escapeHtml(data.source.note)}</p></section>`,
      `<section><h2>How to read a task when your teacher issues one</h2><ol class="orientation-steps">${data.orientationSteps.map(function (step) { return `<li><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`; }).join("")}</ol></section>`,
      `<section class="planner"><h2>${escapeHtml(data.planner.title)}</h2><p>${escapeHtml(data.planner.intro)}</p>${data.planner.fields.map(function (field) { return `<label for="assessment-${escapeHtml(field.id)}">${escapeHtml(field.label)}</label><textarea id="assessment-${escapeHtml(field.id)}" rows="4" data-plan-field="${escapeHtml(field.id)}">${escapeHtml(plan.fields[field.id] || "")}</textarea><p class="field-help">${escapeHtml(field.help)}</p>`; }).join("")}<div class="planner-actions"><button type="button" data-print>Print this orientation page</button><button type="button" class="button-secondary" data-reset>Reset this local planner</button></div><p role="status" data-plan-status>${plan.updatedAt ? "Planner loaded from this browser · not submitted" : "Start when you have a current teacher-issued task — autosave is on"}</p><p class="evidence-boundary">${escapeHtml(data.planner.boundary)}</p></section>`,
      `<section><h2>Archived task exception</h2><p>These sources were used only to identify conflicts. Their task details are deliberately excluded from student instructions.</p><div class="exception-grid">${data.archivedExceptions.map(function (item) { return `<article><h3>${escapeHtml(item.source)}</h3><p><strong>${escapeHtml(item.status)}</strong></p><p>${escapeHtml(item.reason)}</p></article>`; }).join("")}</div></section>`,
      `<section><h2>Source and confirmation status</h2><dl class="status-list">${data.staffStatus.map(function (item) { return `<div><dt>${escapeHtml(item.domain)}</dt><dd><strong>${escapeHtml(item.status)}</strong> — ${escapeHtml(item.detail)}</dd></div>`; }).join("")}</dl><p><strong>Orientation version:</strong> ${escapeHtml(data.version)}</p></section>`
    ].join("");

    let timer = null;
    root.querySelectorAll("[data-plan-field]").forEach(function (field) {
      field.addEventListener("input", function () {
        plan.fields[field.dataset.planField] = field.value;
        root.querySelector("[data-plan-status]").textContent = "Saving…";
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { root.querySelector("[data-plan-status]").textContent = savePlan(plan) ? "Saved on this device · not submitted" : "Could not save — copy your plan before leaving"; }, 250);
      });
    });
    root.querySelector("[data-print]").addEventListener("click", function () { window.print(); });
    root.querySelector("[data-reset]").addEventListener("click", function () {
      if (!window.confirm("Reset only this local orientation planner?")) return;
      storage.remove(data.planner.storageKey);
      render(root);
      root.querySelector("[data-plan-status]").textContent = "Local planner reset.";
    });
  }

  function mount(root) { if (!root) return false; render(root); return true; }
  window.FOOD_AUSTRALIA_ASSESSMENT_RUNTIME = Object.freeze({ mount, readPlan });
  function autoMount() { document.querySelectorAll("[data-assessment-root]").forEach(mount); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", autoMount);
  else autoMount();
})();
