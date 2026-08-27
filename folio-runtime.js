(function () {
  "use strict";

  const data = window.FOOD_AUSTRALIA_FOLIO;
  const storage = window.FOOD_AUSTRALIA_STORAGE;
  if (!data || !storage) return;

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"]/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[character];
    });
  }

  function emptyTextState() {
    const cards = {};
    data.cards.forEach(function (card) {
      cards[card.id] = { response: "", caption: "", updatedAt: null };
    });
    return { schemaVersion: data.schemaVersion, courseId: data.courseId, profile: { firstName: "", classGroup: "" }, cards: cards, updatedAt: null };
  }

  function emptyImageState() {
    return { schemaVersion: data.schemaVersion, courseId: data.courseId, images: {}, updatedAt: null };
  }

  function normaliseTextState(candidate) {
    const next = emptyTextState();
    if (!candidate || typeof candidate !== "object") return next;
    if (candidate.courseId && candidate.courseId !== data.courseId) return next;
    next.profile.firstName = String(candidate.profile?.firstName || candidate.studentName || "");
    next.profile.classGroup = String(candidate.profile?.classGroup || candidate.classGroup || "");
    const sourceCards = candidate.cards || {};
    data.cards.forEach(function (card) {
      const source = sourceCards[card.id] || {};
      next.cards[card.id] = {
        response: String(source.response || ""),
        caption: String(source.caption || ""),
        updatedAt: source.updatedAt || null
      };
    });
    next.updatedAt = candidate.updatedAt || null;
    return next;
  }

  function normaliseImageState(candidate) {
    const next = emptyImageState();
    if (!candidate || candidate.courseId !== data.courseId || !candidate.images) return next;
    data.cards.filter(function (card) { return card.allowImage; }).forEach(function (card) {
      const image = candidate.images[card.id];
      if (image && data.acceptedImageTypes.includes(image.type) && Number(image.size) <= data.maxImageBytes && /^data:image\/(jpeg|png|webp);base64,/.test(image.dataUrl || "")) next.images[card.id] = image;
    });
    next.updatedAt = candidate.updatedAt || null;
    return next;
  }

  function readStates() {
    let textState = storage.read(data.textStorageKey, null);
    if (!textState) textState = storage.read("folio:v1", null);
    return {
      text: normaliseTextState(textState),
      images: normaliseImageState(storage.read(data.imageStorageKey, null))
    };
  }

  function saveText(textState) {
    textState.updatedAt = new Date().toISOString();
    return storage.write(data.textStorageKey, textState);
  }

  function saveImages(imageState) {
    imageState.updatedAt = new Date().toISOString();
    return storage.write(data.imageStorageKey, imageState);
  }

  function hasEvidence(cardState) {
    return Boolean(cardState && cardState.response.trim().length >= 20);
  }

  function nextCard(states) {
    return data.cards.find(function (card) { return !hasEvidence(states.text.cards[card.id]); }) || null;
  }

  function progressText(states) {
    const started = data.cards.filter(function (card) { return hasEvidence(states.text.cards[card.id]); }).length;
    const next = nextCard(states);
    return `${started} of ${data.cards.length} cards have a considered response. ${next ? `Next useful action: ${next.title}.` : "Every card has a response; review captions and choose your strongest evidence."}`;
  }

  function progressSummary() {
    const states = readStates();
    const complete = data.cards.filter(function (card) { return hasEvidence(states.text.cards[card.id]); }).length;
    const next = nextCard(states);
    return Object.freeze({ complete: complete, total: data.cards.length, nextCardId: next ? next.id : null });
  }

  function announceProgress() {
    window.dispatchEvent(new CustomEvent("food-australia-progress"));
  }

  function renderCard(card, states, open) {
    const cardState = states.text.cards[card.id];
    const image = states.images.images[card.id];
    const responseId = `${card.id}-response`;
    const captionId = `${card.id}-caption`;
    return `<details class="folio-card" id="${escapeHtml(card.id)}" data-card-id="${escapeHtml(card.id)}" ${open ? "open" : ""}><summary><span>${escapeHtml(card.title)}</span><small>${hasEvidence(cardState) ? "Response saved" : "Not started"}</small></summary><div class="folio-card-body"><p><strong>Action:</strong> ${escapeHtml(card.action)}</p><p><strong>Why:</strong> ${escapeHtml(card.why)}</p><p><strong>Evidence to add:</strong> ${escapeHtml(card.evidence)}</p><p><a href="${escapeHtml(card.activityRoute)}">Practise the linked activity first</a></p><label for="${responseId}">${escapeHtml(card.prompt)}</label><textarea id="${responseId}" rows="8" data-field="response">${escapeHtml(cardState.response)}</textarea><details class="support"><summary>Sentence starters<span class="visually-hidden"> for ${escapeHtml(card.title)}</span></summary><ul>${card.starters.map(function (starter) { return `<li>${escapeHtml(starter)}</li>`; }).join("")}</ul></details><label for="${captionId}">${escapeHtml(card.caption)}</label><textarea id="${captionId}" rows="3" data-field="caption">${escapeHtml(cardState.caption)}</textarea>${card.allowImage ? `<div class="image-workspace"><label for="${card.id}-image">Optional image evidence</label><input id="${card.id}-image" type="file" accept="image/jpeg,image/png,image/webp" data-image-input><p class="field-help">JPEG, PNG or WebP up to 1.5 MB. It stays in this browser and is included in backup/evidence export.</p>${image ? `<figure><img src="${image.dataUrl}" alt="Student-selected evidence preview for ${escapeHtml(card.title)}"><figcaption>${escapeHtml(image.name)} · ${Math.round(image.size / 1024)} KB</figcaption></figure><button type="button" class="button-secondary" data-remove-image>Remove this image</button>` : ""}</div>` : ""}<p class="save-state" role="status" data-card-status>${cardState.updatedAt ? "Saved on this device · not submitted" : "Autosave is on"}</p><p class="source-note"><strong>Learning source:</strong> ${escapeHtml(card.source)}</p></div></details>`;
  }

  function updateOverview(root, states) {
    root.querySelector("[data-folio-progress]").textContent = progressText(states);
  }

  function bindCard(root, card, states) {
    const cardRoot = root.querySelector(`[data-card-id="${card.id}"]`);
    let saveTimer = null;
    cardRoot.querySelectorAll("textarea[data-field]").forEach(function (input) {
      input.addEventListener("input", function () {
        states.text.cards[card.id][input.dataset.field] = input.value;
        cardRoot.querySelector("[data-card-status]").textContent = "Saving…";
        window.clearTimeout(saveTimer);
        saveTimer = window.setTimeout(function () {
          states.text.cards[card.id].updatedAt = new Date().toISOString();
          const saved = saveText(states.text);
          cardRoot.querySelector("[data-card-status]").textContent = saved ? "Saved on this device · not submitted" : "Could not save — make a backup or copy your work";
          updateOverview(root, states);
          const summarySmall = cardRoot.querySelector("summary small");
          if (summarySmall) summarySmall.textContent = hasEvidence(states.text.cards[card.id]) ? "Response saved" : "Not started";
          if (saved) announceProgress();
        }, 250);
      });
    });
    const imageInput = cardRoot.querySelector("[data-image-input]");
    if (imageInput) imageInput.addEventListener("change", function () {
      const file = imageInput.files && imageInput.files[0];
      if (!file) return;
      const status = cardRoot.querySelector("[data-card-status]");
      if (!data.acceptedImageTypes.includes(file.type)) {
        status.textContent = "Image not added: choose a JPEG, PNG or WebP file.";
        imageInput.value = "";
        return;
      }
      if (file.size > data.maxImageBytes) {
        status.textContent = "Image not added: the file is larger than 1.5 MB.";
        imageInput.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = function () {
        states.images.images[card.id] = { name: file.name, type: file.type, size: file.size, dataUrl: reader.result, updatedAt: new Date().toISOString() };
        if (!saveImages(states.images)) {
          delete states.images.images[card.id];
          status.textContent = "Image could not be saved. Browser storage may be full.";
          return;
        }
        render(root);
        document.getElementById(card.id)?.scrollIntoView({ block: "start" });
      };
      reader.onerror = function () { status.textContent = "Image could not be read."; };
      reader.readAsDataURL(file);
    });
    cardRoot.querySelector("[data-remove-image]")?.addEventListener("click", function () {
      delete states.images.images[card.id];
      saveImages(states.images);
      render(root);
      document.getElementById(card.id)?.scrollIntoView({ block: "start" });
    });
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type: type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.setTimeout(function () { URL.revokeObjectURL(link.href); }, 500);
  }

  function backup(states) {
    const packageData = { kind: "food-in-australia-folio-backup", exportedAt: new Date().toISOString(), courseId: data.courseId, schemaVersion: data.schemaVersion, includesImages: true, text: states.text, images: states.images };
    download("food-in-australia-folio-backup.json", JSON.stringify(packageData, null, 2), "application/json;charset=utf-8");
  }

  function evidenceCopy(states) {
    const cards = data.cards.map(function (card) {
      const record = states.text.cards[card.id];
      const image = states.images.images[card.id];
      return `<section><h2>${escapeHtml(card.title)}</h2><p><strong>Task context:</strong> ${escapeHtml(card.action)}</p><p><strong>Prompt:</strong> ${escapeHtml(card.prompt)}</p><div class="response">${escapeHtml(record.response).replace(/\n/g, "<br>") || "No response saved."}</div><p><strong>Evidence caption:</strong> ${escapeHtml(record.caption) || "No caption saved."}</p>${image ? `<img src="${image.dataUrl}" alt="Student-selected evidence for ${escapeHtml(card.title)}"><p><small>${escapeHtml(image.name)}</small></p>` : ""}<p><small>${escapeHtml(card.source)}</small></p></section>`;
    }).join("");
    const html = `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><title>${escapeHtml(data.title)}</title><style>body{font:16px/1.5 Arial,sans-serif;max-width:900px;margin:40px auto;padding:0 20px}section{border-top:2px solid #315b52;padding:18px 0;break-inside:avoid}.boundary{padding:12px;background:#f3efe3}.response{white-space:normal}img{max-width:100%;max-height:480px;object-fit:contain}</style></head><body><h1>${escapeHtml(data.title)}</h1><p><strong>Student:</strong> ${escapeHtml(states.text.profile.firstName) || "Not entered"} · <strong>Class:</strong> ${escapeHtml(states.text.profile.classGroup) || "Not entered"}</p><p class="boundary">${escapeHtml(data.saveBoundary)}</p>${cards}</body></html>`;
    download("food-in-australia-folio-evidence-copy.html", html, "text/html;charset=utf-8");
  }

  function validateBackupObject(parsed) {
    if (!parsed || parsed.kind !== "food-in-australia-folio-backup" || parsed.courseId !== data.courseId || parsed.schemaVersion !== data.schemaVersion) throw new Error("wrong-course");
    return { text: normaliseTextState(parsed.text), images: normaliseImageState(parsed.images) };
  }

  function restore(root, file) {
    const status = root.querySelector("[data-global-status]");
    if (!file || file.size > 12000000 || (file.type && file.type !== "application/json")) {
      status.textContent = "Restore rejected: choose a JSON backup no larger than 12 MB.";
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const parsed = JSON.parse(reader.result);
        const validated = validateBackupObject(parsed);
        if (!saveText(validated.text) || !saveImages(validated.images)) throw new Error("save-failed");
        render(root);
        root.querySelector("[data-global-status]").textContent = "Backup restored on this browser · not submitted.";
        announceProgress();
      } catch (error) {
        status.textContent = error.message === "wrong-course" ? "Restore rejected: this is not a compatible Year 9 Food in Australia folio backup." : "Restore failed. The backup may be damaged or browser storage may be full.";
      }
    };
    reader.onerror = function () { status.textContent = "Restore failed: the file could not be read."; };
    reader.readAsText(file);
  }

  function render(root) {
    const states = readStates();
    const next = nextCard(states);
    const requestedId = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : "";
    const requested = data.cards.some(function (card) { return card.id === requestedId; }) ? requestedId : "";
    root.innerHTML = [
      `<section class="folio-orientation"><p>${escapeHtml(data.orientation)}</p><p class="evidence-boundary"><strong>Saved here is not submitted.</strong> ${escapeHtml(data.saveBoundary)}</p><p class="evidence-boundary"><strong>Image privacy:</strong> ${escapeHtml(data.imageBoundary)}</p></section>`,
      `<section class="folio-profile"><h2>Your local folio label</h2><div class="profile-grid"><label>First name or initials <input type="text" data-profile="firstName" value="${escapeHtml(states.text.profile.firstName)}" autocomplete="off"></label><label>Class group <input type="text" data-profile="classGroup" value="${escapeHtml(states.text.profile.classGroup)}" autocomplete="off"></label></div><p class="field-help">These details remain in this browser and appear in your downloaded evidence copy.</p></section>`,
      `<section class="folio-progress" aria-live="polite"><h2>Where to continue</h2><p data-folio-progress>${escapeHtml(progressText(states))}</p>${next ? `<a href="#${escapeHtml(next.id)}">Open next card</a>` : ""}</section>`,
      `<div class="folio-tools"><button type="button" data-backup>Download editable backup</button><label class="button-secondary file-button">Restore backup<input type="file" accept="application/json,.json" data-restore hidden></label><button type="button" class="button-secondary" data-export>Download evidence copy</button><button type="button" class="button-secondary" data-print>Print</button><button type="button" class="button-secondary" data-reset>Reset this folio</button></div><p class="save-state" role="status" data-global-status>${states.text.updatedAt ? "Folio loaded from this browser." : "No local folio work has been saved yet."}</p>`,
      `<div class="folio-card-list">${data.cards.map(function (card, index) { return renderCard(card, states, requested ? card.id === requested : card.id === next?.id || (!next && index === 0)); }).join("")}</div>`
    ].join("");

    let profileTimer = null;
    root.querySelectorAll("[data-profile]").forEach(function (input) {
      input.addEventListener("input", function () {
        states.text.profile[input.dataset.profile] = input.value;
        root.querySelector("[data-global-status]").textContent = "Saving…";
        window.clearTimeout(profileTimer);
        profileTimer = window.setTimeout(function () { root.querySelector("[data-global-status]").textContent = saveText(states.text) ? "Saved on this device · not submitted" : "Could not save local details"; }, 250);
      });
    });
    data.cards.forEach(function (card) { bindCard(root, card, states); });
    root.querySelector("[data-backup]").addEventListener("click", function () { backup(states); });
    root.querySelector("[data-export]").addEventListener("click", function () { evidenceCopy(states); });
    root.querySelector("[data-print]").addEventListener("click", function () { window.print(); });
    root.querySelector("[data-restore]").addEventListener("change", function (event) { restore(root, event.target.files && event.target.files[0]); });
    root.querySelector("[data-reset]").addEventListener("click", function () {
      if (window.prompt("Type RESET to remove this folio from this browser.") !== "RESET") {
        root.querySelector("[data-global-status]").textContent = "Reset cancelled.";
        return;
      }
      storage.remove(data.textStorageKey);
      storage.remove(data.imageStorageKey);
      storage.remove("folio:v1");
      render(root);
      root.querySelector("[data-global-status]").textContent = "Local folio text and images were reset.";
      announceProgress();
    });
    openHashTarget();
  }

  function openHashTarget() {
    if (!window.location.hash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (!target || !target.matches("[data-card-id]")) return;
    target.open = true;
    if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
    window.setTimeout(function () {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    }, 80);
  }

  function mount(root) {
    if (!root) return false;
    render(root);
    return true;
  }

  window.FOOD_AUSTRALIA_FOLIO_RUNTIME = Object.freeze({ mount, readStates, progressSummary, normaliseTextState, normaliseImageState, validateBackupObject });
  window.addEventListener("hashchange", openHashTarget);
  function autoMount() { document.querySelectorAll("[data-folio-root]").forEach(mount); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", autoMount);
  else autoMount();
})();
