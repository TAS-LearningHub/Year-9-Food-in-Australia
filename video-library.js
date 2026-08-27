(function () {
  "use strict";

  const host = document.querySelector("[data-video-library]");
  const data = window.FOOD_AUSTRALIA_MEDIA_PATHWAYS;
  const course = window.FOOD_AUSTRALIA_COURSE;
  if (!host || !data || !course) return;

  const escapeHtml = (value) => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  function pathwayMedia(entry) {
    if (entry.id) {
      return `<div class="video-poster" data-video-poster>
          <img src="https://i.ytimg.com/vi/${escapeHtml(entry.id)}/hqdefault.jpg" alt="Video thumbnail for ${escapeHtml(entry.title)}" loading="lazy" referrerpolicy="no-referrer">
          <button type="button" data-load-video="${escapeHtml(entry.id)}" aria-label="Load ${escapeHtml(entry.title)} from YouTube">
            <span class="play-symbol" aria-hidden="true">▶</span><span>Load video</span>
          </button>
        </div>`;
    }
    const visual = Array.isArray(entry.visualAssets) && entry.visualAssets[0];
    if (visual) {
      return `<div class="video-poster pathway-visual">
          <img src="${escapeHtml(visual.path)}" alt="Learning visual for ${escapeHtml(entry.sectionTitle)}" loading="lazy">
          <span class="pathway-visual-label">Complete visual pathway</span>
        </div>`;
    }
    return `<div class="video-exception" role="img" aria-label="A reading, annotation and reflection pathway">
          <span aria-hidden="true">Read</span><span aria-hidden="true">Annotate</span><span aria-hidden="true">Reflect</span>
        </div>`;
  }

  function pathwayCard(entry, moduleCode) {
    const workflow = Array.isArray(entry.nonVideoWorkflow) ? entry.nonVideoWorkflow : [];
    return `<article class="video-card" id="media-${escapeHtml(entry.sectionId)}" data-section-media="${escapeHtml(entry.sectionId)}">
      <header class="video-card-heading">
        <div><p class="eyebrow">Section ${escapeHtml(entry.sectionId.slice(-2))} · ${escapeHtml(entry.mode === "verified-video" ? "checked video + full alternative" : "complete non-video pathway")}</p><h3>${escapeHtml(entry.title)}</h3></div>
        <p class="video-source"><strong>${escapeHtml(entry.channel)}</strong><span>${escapeHtml(entry.duration)}</span></p>
      </header>
      <div class="video-card-grid">
        ${pathwayMedia(entry)}
        <div class="video-learning-copy">
          <p class="purpose-line"><strong>Why this belongs:</strong> ${escapeHtml(entry.purpose)}</p>
          <ol class="viewing-sequence">
            <li><strong>Before</strong>${escapeHtml(entry.before)}</li>
            <li><strong>During</strong>${escapeHtml(entry.during)}</li>
            <li><strong>After</strong>${escapeHtml(entry.after)}</li>
          </ol>
          <details class="video-alternative"><summary>Use the complete non-video pathway</summary><p>${escapeHtml(entry.alternative)}</p>${workflow.length ? `<ol class="media-workflow">${workflow.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : ""}</details>
          <p class="video-note"><strong>Source and viewing note:</strong> ${escapeHtml(entry.notes)}</p>
          <div class="video-actions">
            ${entry.id ? `<a href="https://www.youtube.com/watch?v=${escapeHtml(entry.id)}" target="_blank" rel="noopener">Open on YouTube ↗</a>` : ""}
            <a href="modules/module-${moduleCode}.html#${escapeHtml(entry.sectionId)}">Theory section →</a>
            <a href="modules/module-${moduleCode}.html#learning-${escapeHtml(entry.sectionId)}">Quiz and long response →</a>
          </div>
        </div>
      </div>
    </article>`;
  }

  host.innerHTML = course.modules.map((module) => {
    const moduleCode = String(module.id).padStart(2, "0");
    const entries = data.entries.filter((entry) => entry.moduleId === module.id);
    return `<details class="video-module-group" id="module-${moduleCode}">
      <summary><span><span class="eyebrow">Module ${moduleCode}</span><strong>${escapeHtml(module.title)}</strong></span><span>${entries.length} linked learning paths</span></summary>
      <div class="video-module-body">${entries.map((entry) => pathwayCard(entry, moduleCode)).join("")}</div>
    </details>`;
  }).join("");

  host.addEventListener("click", (event) => {
    const button = event.target.closest("[data-load-video]");
    if (!button) return;
    const id = button.dataset.loadVideo;
    const poster = button.closest("[data-video-poster]");
    if (!poster || !id) return;
    poster.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0" title="Embedded course video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  });

  function openHashTarget() {
    if (!window.location.hash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (!target) return;
    if (target.tagName === "DETAILS") target.open = true;
    const parentDetails = target.closest("details");
    if (parentDetails) parentDetails.open = true;
    window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
  }
  window.addEventListener("hashchange", openHashTarget);
  openHashTarget();
})();
