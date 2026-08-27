(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_EVIDENCE;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  if (!data || !storage) return;

  function bySection(sectionId) {
    return data.records.find(function (record) { return record.sectionId === sectionId; });
  }

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

  function wordCount(value) {
    const words = String(value || "").trim().match(/\S+/g);
    return words ? words.length : 0;
  }

  function readRecord(record) {
    const saved = storage.read(record.storageKey, null);
    if (!saved || saved.schemaVersion !== data.schemaVersion || saved.sectionId !== record.sectionId) {
      return { schemaVersion: data.schemaVersion, sectionId: record.sectionId, response: "", updatedAt: null };
    }
    return saved;
  }

  function saveRecord(record, response) {
    return storage.write(record.storageKey, {
      schemaVersion: data.schemaVersion,
      sectionId: record.sectionId,
      response: response,
      updatedAt: new Date().toISOString()
    });
  }

  function announceProgress() {
    window.dispatchEvent(new CustomEvent("food-australia-progress"));
  }

  function mount(root, sectionId) {
    const record = bySection(sectionId || root.dataset.evidenceSection);
    if (!record) {
      root.innerHTML = '<p role="alert">This formative evidence prompt could not be loaded.</p>';
      return false;
    }
    const saved = readRecord(record);
    const inputId = `${record.id}-response`;
    root.classList.add("capstone-evidence");
    root.dataset.mounted = "true";
    root.innerHTML = [
      `<p class="eyebrow">${escapeHtml(record.recordLabel)}</p>`,
      `<h3>${escapeHtml(record.title)}</h3>`,
      `<p>${escapeHtml(record.prompt)}</p>`,
      `<details><summary>What is this asking?</summary><p>Use these sentence starters to organise a complete response.</p><ul>${record.scaffold.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("")}</ul></details>`,
      `<details><summary>Before you finish, check for</summary><ul>${record.lookFors.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("")}</ul></details>`,
      `<label for="${inputId}">Your explanation</label>`,
      `<textarea id="${inputId}" rows="9" data-evidence-response>${escapeHtml(saved.response)}</textarea>`,
      `<div class="evidence-meta"><span data-word-count>${wordCount(saved.response)} words</span><span role="status" data-save-status>${saved.updatedAt ? "Saved on this device · not submitted" : "Start writing — autosave is on"}</span></div>`,
      `<div class="check-actions"><a class="button-secondary" href="${escapeHtml(courseHref(`${record.theoryRoute.split("#")[0]}#${record.helpAnchor}`))}">Open exact theory help</a><a class="button-secondary" href="${escapeHtml(courseHref(`activities.html#${record.activityId}`))}">Practise first</a><button type="button" class="button-secondary" data-evidence-reset>Reset this response</button></div>`,
      `<p class="evidence-boundary"><strong>${escapeHtml(record.recordLabel)}.</strong> ${escapeHtml(record.assessmentBoundary)}</p>`
    ].join("");

    const textarea = root.querySelector("[data-evidence-response]");
    const count = root.querySelector("[data-word-count]");
    const status = root.querySelector("[data-save-status]");
    let saveTimer = null;
    textarea.addEventListener("input", function () {
      count.textContent = `${wordCount(textarea.value)} words`;
      status.textContent = "Saving…";
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(function () {
        status.textContent = saveRecord(record, textarea.value) ? "Saved on this device · not submitted" : "Could not save — copy your response before leaving";
        announceProgress();
      }, 250);
    });
    root.querySelector("[data-evidence-reset]").addEventListener("click", function () {
      if (!window.confirm("Reset only this formative response? This cannot be undone.")) return;
      storage.remove(record.storageKey);
      textarea.value = "";
      count.textContent = "0 words";
      status.textContent = "This response was reset";
      textarea.focus();
      announceProgress();
    });
    return true;
  }

  function collectSummary() {
    return data.records.map(function (record) {
      const saved = readRecord(record);
      return {
        sectionId: record.sectionId,
        title: record.title,
        prompt: record.prompt,
        response: saved.response,
        updatedAt: saved.updatedAt,
        label: record.recordLabel
      };
    });
  }

  function downloadSummary() {
    const summary = collectSummary();
    const answered = summary.filter(function (item) { return item.response.trim(); });
    const body = answered.map(function (item) {
      return `<section><h2>${escapeHtml(item.sectionId.toUpperCase())} · ${escapeHtml(item.title)}</h2><p><strong>Prompt:</strong> ${escapeHtml(item.prompt)}</p><div class="response">${escapeHtml(item.response).replace(/\n/g, "<br>")}</div><p><small>${escapeHtml(item.label)} · ${item.updatedAt ? escapeHtml(new Date(item.updatedAt).toLocaleString("en-AU")) : "Not saved"}</small></p></section>`;
    }).join("");
    const html = `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><title>${escapeHtml(data.exportTitle)}</title><style>body{font-family:Arial,sans-serif;line-height:1.5;max-width:900px;margin:40px auto;padding:0 20px}section{break-inside:avoid;border-top:2px solid #315b52;padding:18px 0}.boundary{background:#f4f0dd;padding:12px}.response{white-space:normal}</style></head><body><h1>${escapeHtml(data.exportTitle)}</h1><p class="boundary">${escapeHtml(data.boundary)}</p>${body || "<p>No formative responses have been saved yet.</p>"}</body></html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "food-in-australia-formative-evidence.html";
    link.click();
    window.setTimeout(function () { URL.revokeObjectURL(link.href); }, 500);
  }

  function mountSummary(root) {
    const summary = collectSummary();
    const completed = summary.filter(function (item) { return item.response.trim(); }).length;
    root.innerHTML = `<p><strong>${completed} of ${summary.length}</strong> capstone responses have text saved on this device.</p><div class="check-actions"><button type="button" data-evidence-download>Download formative evidence copy</button><button type="button" class="button-secondary" data-evidence-print>Print current page</button></div><p class="evidence-boundary">${escapeHtml(data.boundary)}</p>`;
    root.querySelector("[data-evidence-download]").addEventListener("click", downloadSummary);
    root.querySelector("[data-evidence-print]").addEventListener("click", function () { window.print(); });
  }

  function mountAll(scope) {
    (scope || document).querySelectorAll("[data-evidence-section]").forEach(function (root) { mount(root, root.dataset.evidenceSection); });
    (scope || document).querySelectorAll("[data-evidence-summary]").forEach(mountSummary);
  }

  window.FOOD_AUSTRALIA_EVIDENCE_RUNTIME = Object.freeze({ mount, mountAll, bySection, collectSummary, downloadSummary, mountSummary });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { mountAll(document); });
  else mountAll(document);
})();
