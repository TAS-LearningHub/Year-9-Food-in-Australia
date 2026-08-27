(function () {
  "use strict";

  const config = window.FOOD_AUSTRALIA_COURSE;
  const theory = window.FOOD_AUSTRALIA_THEORY;
  const host = document.querySelector("[data-module-host]");
  if (!config || !theory || !host) return;

  const routeMatch = window.location.pathname.replace(/\\/g, "/").match(/module-(\d{2})\.html$/);
  const moduleId = Number(host.dataset.moduleId || (routeMatch && routeMatch[1]));
  const module = config.modules.find(function (item) { return item.id === moduleId; });
  const sections = theory.sections
    .filter(function (section) { return section.moduleId === moduleId; })
    .sort(function (a, b) { return a.sectionNumber - b.sectionNumber; });
  const mediaPathways = (window.FOOD_AUSTRALIA_MEDIA_PATHWAYS && window.FOOD_AUSTRALIA_MEDIA_PATHWAYS.entries) || [];
  const activityId = "activity-m" + String(moduleId).padStart(2, "0");
  const moduleActivity = window.FOOD_AUSTRALIA_ACTIVITY_RUNTIME && window.FOOD_AUSTRALIA_ACTIVITY_RUNTIME.byId(activityId);

  const modulePurposes = {
    1: "Make calm, specific safety and hygiene decisions before practical work begins.",
    2: "Explore native foods and compare nutrition evidence with respectful, careful language.",
    3: "Understand that Cultural Knowledge is living, local and owned, and learn a safe research process.",
    4: "Examine food roles, introduced rations and nutrition while reading historical sources critically.",
    5: "Trace how colonisation, settlement and migration changed food access, practices and identity.",
    6: "Investigate how migration and community knowledge continue to shape Australian food culture.",
    7: "Design a fusion food concept with a clear purpose, respectful research and practical reasoning.",
    8: "Explain how production and processing technologies change food properties and systems.",
    9: "Analyse the interacting influences behind food choices and decode persuasive advertising.",
    10: "Bring ideas and evidence together, then select and explain work that shows your learning."
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" })[character];
    });
  }

  if (!module || sections.length !== 3) {
    host.innerHTML = '<div class="wrap"><div class="notice danger" role="alert"><strong>Module data is incomplete.</strong> Return to the course page and let your teacher know.</div></div>';
    return;
  }

  function renderBlock(block) {
    if (block.type === "paragraph") return "<p>" + escapeHtml(block.text) + "</p>";
    if (block.type === "paragraphs") return block.content.map(function (text) { return "<p>" + escapeHtml(text) + "</p>"; }).join("");
    if (block.type === "subheading") return "<h3>" + escapeHtml(block.text) + "</h3>";
    if (block.type === "bullets") return "<ul>" + block.items.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>";
    if (block.type === "workedExample") {
      const workedContent = Array.isArray(block.steps)
        ? "<ol>" + block.steps.map(function (step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") + "</ol>"
        : (block.content || []).map(function (text) { return "<p>" + escapeHtml(text) + "</p>"; }).join("");
      return '<aside class="worked-example" aria-label="Worked example"><p class="component-label">Worked example</p><h3>' +
        escapeHtml(block.title) + "</h3>" + workedContent +
        (block.takeaway ? '<p class="example-takeaway"><strong>Key move:</strong> ' + escapeHtml(block.takeaway) + "</p>" : "") + "</aside>";
    }
    if (block.type === "vocabulary") {
      return '<aside class="vocabulary" aria-label="Key vocabulary"><p class="component-label">Words that matter</p><dl>' +
        block.items.map(function (item) { return "<div><dt>" + escapeHtml(item.term) + "</dt><dd>" + escapeHtml(item.meaning) + "</dd></div>"; }).join("") +
        "</dl></aside>";
    }
    if (block.type === "summary") {
      const rawSummary = block.items || block.content || [];
      const summaryItems = Array.isArray(rawSummary) ? rawSummary : [rawSummary];
      return '<aside class="section-summary" aria-label="Section summary"><p class="component-label">Keep these three ideas</p><ul>' +
        summaryItems.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul></aside>";
    }
    return "";
  }

  function sectionAssets(sectionId) {
    const visualData = window.FOOD_AUSTRALIA_VISUALS || {};
    const allAssets = visualData.assets || [];
    const placements = visualData.placements || [];
    if (!placements.length) return allAssets.filter(function (asset) { return asset.sectionId === sectionId; });
    return placements.filter(function (placement) { return placement.sectionId === sectionId; }).map(function (placement) {
      const asset = allAssets.find(function (item) { return item.assetId === placement.assetId; });
      return Object.assign({}, asset || {}, placement, { assetId: placement.placementId || placement.assetId });
    });
  }

  function renderVisuals(section) {
    const assets = sectionAssets(section.sectionId);
    return assets.map(function (asset) {
      const href = "../" + String(asset.path).replace(/^\.\//, "");
      const caption = asset.caption || asset.teachingPurpose || "Learning visual";
      return '<figure class="teaching-visual"><button class="visual-preview" type="button" data-open-visual data-visual-src="' +
        escapeHtml(href) + '" data-visual-alt="' + escapeHtml(asset.alt) + '" data-visual-caption="' + escapeHtml(caption) +
        '" aria-label="Open larger: ' + escapeHtml(asset.alt) + '"><img src="' + escapeHtml(href) + '" alt="' + escapeHtml(asset.alt) +
        '" loading="lazy"><span class="visual-open-label" aria-hidden="true">Open larger</span></button><figcaption>' +
        escapeHtml(caption) + (asset.notice ? '<span class="visual-notice">' + escapeHtml(asset.notice) + "</span>" : "") + "</figcaption></figure>";
    }).join("");
  }

  function renderHelp(section) {
    return '<div class="help-grid">' +
      section.helpAnchors.map(function (help, index) {
        const id = help.id || section.sectionId + "-help-" + (index + 1);
        return '<details class="help-card" id="' + escapeHtml(id) + '"><summary>' + escapeHtml(help.label) + "</summary><p>" + escapeHtml(help.text) + "</p></details>";
      }).join("") +
      '<details class="help-card misconception-card"><summary>Check common mix-ups</summary>' +
      section.misconceptions.map(function (item) {
        return '<div class="misconception"><p><strong>Mix-up:</strong> ' + escapeHtml(item.claim) + '</p><p><strong>Correction:</strong> ' + escapeHtml(item.correction) + "</p></div>";
      }).join("") + "</details></div>";
  }

  function renderVideo(section) {
    const mediaEntry = mediaPathways.find(function (item) { return item.sectionId === section.sectionId; });
    const exactEntry = Boolean(mediaEntry);
    const hasVideo = Boolean(mediaEntry && mediaEntry.id);
    const visual = sectionAssets(section.sectionId)[0];
    const hasVisual = Boolean(visual);
    const label = hasVideo ? "Watch and notice" : hasVisual ? "Look, read and notice" : "Read, trace and notice";
    const title = exactEntry
      ? mediaEntry.title
      : hasVisual ? "Use the section visual as evidence" : "Use the section evidence as a worked pathway";
    const purpose = exactEntry
      ? mediaEntry.purpose
      : hasVisual
        ? "Slow down and use the photograph or diagram beside this section to test the main idea before you answer the questions."
        : "Slow down and trace a claim, its supporting context and its limit through the section before you answer the questions.";
    const before = exactEntry ? mediaEntry.before : "Read the section and identify its central claim.";
    const during = exactEntry ? mediaEntry.during : hasVisual
      ? "Identify one visible detail, connect it to the theory, then explain what the visual cannot prove on its own."
      : "Identify one specific claim, the evidence or context that supports it, and one limit or question that keeps the conclusion careful.";
    const after = exactEntry ? mediaEntry.after : "Complete the ten checks and save the long response for this section.";
    const workflow = exactEntry && Array.isArray(mediaEntry.nonVideoWorkflow) ? mediaEntry.nonVideoWorkflow : [];
    const workflowHtml = workflow.length
      ? '<ol class="media-workflow">' + workflow.map(function (step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") + "</ol>"
      : "";
    let media = "";
    if (hasVideo) {
      media = '<div><div class="video-frame" data-video-frame><button type="button" class="video-launch" data-video-load="' + escapeHtml(mediaEntry.id) +
        '" aria-label="Play ' + escapeHtml(mediaEntry.title) + '"><img src="https://i.ytimg.com/vi/' + escapeHtml(mediaEntry.id) +
        '/hqdefault.jpg" alt="" loading="lazy"><span class="video-play" aria-hidden="true">▶</span><span class="video-launch-label">Play video</span></button></div>' +
        '<p class="video-fallback"><a href="https://www.youtube.com/watch?v=' + escapeHtml(mediaEntry.id) + '" target="_blank" rel="noopener">Open in YouTube ↗</a></p>' +
        '<details class="video-alternative"><summary>Use the complete non-video pathway</summary><p>' + escapeHtml(mediaEntry.alternative) + "</p>" + workflowHtml + "</details></div>";
    } else {
      const visualPath = visual ? "../" + String(visual.path).replace(/^\.\//, "") : "";
      media = '<div class="media-equivalent">' +
        (visualPath ? '<img src="' + escapeHtml(visualPath) + '" alt="' + escapeHtml(visual.alt) + '" loading="lazy">' : "") +
        '<p><strong>Complete pathway:</strong> ' + escapeHtml(exactEntry ? mediaEntry.alternative : hasVisual
          ? "Read the section, inspect its visual evidence and record a notice–connect–question response."
          : "Read the section and record a claim–evidence–limit response: state one claim, name its support, then add a careful limit or unanswered question.") + "</p>" +
        workflowHtml +
        '<a class="button secondary compact" href="#' + escapeHtml(section.sectionId) + '">Return to this theory section</a></div>';
    }
    return '<aside class="video-learning" aria-labelledby="media-' + escapeHtml(section.sectionId) + '"><div class="video-copy"><p class="eyebrow">' +
      label + '</p><h3 id="media-' + escapeHtml(section.sectionId) + '">' + escapeHtml(title) + "</h3><p>" + escapeHtml(purpose) +
      '</p><ol class="viewing-sequence"><li><strong>Before</strong>' + escapeHtml(before) + '</li><li><strong>During</strong>' + escapeHtml(during) +
      '</li><li><strong>After</strong>' + escapeHtml(after) + '</li></ol>' +
      (exactEntry ? '<p class="fine">' + escapeHtml(mediaEntry.channel) + " · " + escapeHtml(mediaEntry.duration) + "</p>" : '<p class="fine">Complete non-video learning pathway</p>') +
      (exactEntry && mediaEntry.notes ? '<p class="video-note"><strong>Source and viewing note:</strong> ' + escapeHtml(mediaEntry.notes) + "</p>" : "") +
      "</div>" + media + "</aside>";
  }

  function renderSection(section, index) {
    return '<section class="theory-block" id="' + escapeHtml(section.sectionId) + '"><header class="theory-heading"><div><p class="eyebrow">Section ' +
      (index + 1) + " of 3</p><h2>" + escapeHtml(section.title) + '</h2></div><p class="learning-purpose"><strong>Learning purpose</strong>' +
      escapeHtml(section.learningPurpose) + '</p></header><div class="theory-copy">' + section.blocks.map(renderBlock).join("") + "</div>" +
      renderHelp(section) + "</section>" + renderVisuals(section) + renderVideo(section) +
      '<details class="section-learning" id="learning-' + escapeHtml(section.sectionId) + '"><summary><span>Learning activity ' + moduleId + "." + (index + 1) + ' · Quiz and long response</span><strong>10 questions + long response</strong></summary><div class="section-learning-body"><p>Answer all ten questions for immediate feedback, then write the longer explanation. Both save only on this device.</p>' +
      '<div data-check-section="' + escapeHtml(section.sectionId) + '"></div><section class="section-evidence"><div data-evidence-section="' +
      escapeHtml(section.sectionId) + '"></div></section></div></details>';
  }

  function presentationHtml() {
    return '<aside class="module-presentation" aria-labelledby="module-presentation-title"><div><p class="eyebrow">Module presentation</p>' +
      '<h2 id="module-presentation-title">Learn with the slides</h2><p>This classroom-ready presentation explains the three named sections in this module. Use it for teacher-led learning or independent revision before the questions.</p>' +
      '<p class="fine">PowerPoint file · 8 slides · includes teaching notes</p></div><a class="button tomato presentation-download" href="../resources/presentations/' +
      escapeHtml(module.presentation) + '" download>Download Module ' + module.code + " PowerPoint</a></aside>";
  }

  function activityPathwayHtml() {
    return '<section class="module-activity-pathway" aria-labelledby="module-activity-title"><div><p class="eyebrow">Apply the three sections</p>' +
      '<h2 id="module-activity-title">' + escapeHtml(moduleActivity ? moduleActivity.title : "Module " + module.code + " applied activity") + '</h2><p>' +
      escapeHtml(moduleActivity ? moduleActivity.purpose : "Use the connected activity to rehearse this module's ideas before selecting evidence.") +
      '</p><p class="fine" data-module-activity-status>Activity not complete on this device</p></div><a class="button" href="../activities.html#' +
      escapeHtml(activityId) + '">Open Module ' + module.code + " activity</a></section>";
  }

  function moduleReviewChecklistHtml() {
    return '<section class="module-review-checklist" id="module-review" aria-labelledby="module-review-title"><div class="module-review-heading"><p class="eyebrow">Finish the module</p>' +
      '<h2 id="module-review-title">Module quizzes and long responses</h2><p>All three learning packages are included above, immediately after their matching theory section. Use this checklist to open each 10-question quiz and its long response. Your answers save only on this device.</p><p class="module-review-total" data-review-total aria-live="polite">0 of 30 quiz questions correct · 0 of 3 long responses saved</p></div>' +
      '<ol class="module-review-grid">' + sections.map(function (section, index) {
        return '<li><a class="module-review-link" href="#learning-' + escapeHtml(section.sectionId) + '"><span class="module-review-number">Quiz ' + moduleId + "." + (index + 1) + '</span><strong>' +
          escapeHtml(section.title) + '</strong><span>10 questions + long response</span><small data-review-status="' + escapeHtml(section.sectionId) + '">0 of 10 correct · response not saved</small></a></li>';
      }).join("") + '</ol><p class="evidence-boundary"><strong>Formative learning evidence.</strong> These quizzes and responses support learning; saving them is not submission or a formal assessment result.</p></section>';
  }

  const previous = config.modules.find(function (item) { return item.id === moduleId - 1; });
  const next = config.modules.find(function (item) { return item.id === moduleId + 1; });
  const previousHref = previous ? previous.route.replace("modules/", "") : "../index.html";
  const previousLabel = previous ? "← Module " + previous.code : "← Course home";
  const nextHref = next ? next.route.replace("modules/", "") : "../folio.html";
  const nextLabel = next ? "Module " + next.code + " →" : "Open My folio →";

  document.title = "Module " + module.code + ": " + module.title + " | " + config.title;
  host.innerHTML = '<div class="page-hero"><div class="wrap"><p class="eyebrow">Module ' + module.code + " of " + config.modules.length + " · " +
    escapeHtml(module.weeks) + "</p><h1>" + escapeHtml(module.title) + '</h1><p class="lede">' + escapeHtml(modulePurposes[moduleId]) +
    "</p></div></div>" +
    '<section class="module-course-section"><div class="wrap module-layout"><article class="module-main">' + presentationHtml() +
    '<div data-theory>' + sections.map(renderSection).join("") + "</div>" +
    activityPathwayHtml() +
    moduleReviewChecklistHtml() +
    '<div class="notice teacher"><strong>Teacher-controlled boundary.</strong> Your teacher confirms practical procedures, ingredients, equipment, allergies, timing, cultural consultation and any permission required before you act.</div>' +
    '<div class="actions"><a class="button secondary" data-previous href="' + escapeHtml(previousHref) + '">' + previousLabel +
    '</a><a class="button" data-next href="' + escapeHtml(nextHref) + '">' + nextLabel + "</a></div></article>" +
    '<aside class="module-aside card"><h2>In this module</h2><ol>' + sections.map(function (section) {
      return '<li><a href="#' + escapeHtml(section.sectionId) + '">' + escapeHtml(section.title) + "</a></li>";
    }).join("") + '</ol><h3>Your progress</h3><div class="progress-shell" aria-hidden="true"><div class="progress-bar" data-progress></div></div>' +
    '<p class="fine" data-progress-text>0 of 30 questions correct, 0 of 3 long responses saved and activity not complete on this device</p>' +
    '<a class="button secondary compact" data-resume href="#' + escapeHtml(sections[0].sectionId) + '">Continue where I left off</a><hr>' +
    '<h3>Quizzes and responses</h3><p class="fine">3 quizzes · 30 questions · 3 long responses</p><a class="button secondary compact" href="#module-review">Open module review checklist</a><hr>' +
    '<h3>Applied learning</h3><a class="button secondary compact" href="../activities.html#activity-m' + module.code + '">Open Module ' + module.code +
    ' activity</a><a class="button secondary compact" href="../busy-work.html#puzzle-' + module.code + '">Open Module ' + module.code +
    ' puzzle</a><a class="button secondary compact" href="../videos.html#module-' + module.code + '">Open video pathway</a>' +
    '<a class="button secondary compact" href="../folio.html#folio-m' + module.code + '">Open My folio</a>' +
    '<button class="button secondary compact" type="button" data-print-module>Print / Save PDF</button></aside></div></section>';

  window.FOOD_AUSTRALIA_CHECK_RUNTIME && window.FOOD_AUSTRALIA_CHECK_RUNTIME.mountAll(host);
  window.FOOD_AUSTRALIA_EVIDENCE_RUNTIME && window.FOOD_AUSTRALIA_EVIDENCE_RUNTIME.mountAll(host);

  const visualDialog = document.createElement("dialog");
  visualDialog.className = "visual-dialog";
  visualDialog.setAttribute("aria-labelledby", "visual-dialog-title");
  visualDialog.innerHTML = '<div class="visual-dialog-panel"><header class="visual-dialog-toolbar"><div><p class="component-label">Larger learning visual</p><h2 id="visual-dialog-title">Inspect the detail</h2><p data-visual-dialog-caption></p></div><button class="visual-dialog-close" type="button">Close <span aria-hidden="true">×</span></button></header><div class="visual-dialog-scroller" tabindex="0" aria-label="Scrollable larger visual"><img class="visual-dialog-image" alt=""></div></div>';
  document.body.append(visualDialog);
  let visualReturnTarget = null;
  const visualDialogImage = visualDialog.querySelector(".visual-dialog-image");
  const visualDialogCaption = visualDialog.querySelector("[data-visual-dialog-caption]");
  const visualDialogClose = visualDialog.querySelector(".visual-dialog-close");
  host.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-open-visual]");
    if (!trigger) return;
    visualReturnTarget = trigger;
    visualDialogImage.src = trigger.dataset.visualSrc || "";
    visualDialogImage.alt = trigger.dataset.visualAlt || "Learning visual";
    visualDialogCaption.textContent = (trigger.dataset.visualCaption || "Learning visual") + " Scroll within the panel to inspect small labels.";
    visualDialog.showModal();
    visualDialogClose.focus();
  });
  visualDialogClose.addEventListener("click", function () { visualDialog.close(); });
  visualDialog.addEventListener("click", function (event) { if (event.target === visualDialog) visualDialog.close(); });
  visualDialog.addEventListener("close", function () { if (visualReturnTarget && visualReturnTarget.isConnected) visualReturnTarget.focus(); });

  host.querySelectorAll("[data-video-load]").forEach(function (button) {
    button.addEventListener("click", function () {
      const id = button.dataset.videoLoad;
      const frame = button.closest("[data-video-frame]");
      const title = button.getAttribute("aria-label").replace(/^Play /, "");
      frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + escapeHtml(id) + '?autoplay=1&rel=0" title="' +
        escapeHtml(title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      frame.querySelector("iframe").focus();
    });
  });
  host.querySelector("[data-print-module]").addEventListener("click", function () { window.print(); });

  function updateProgress() {
    const checkRuntime = window.FOOD_AUSTRALIA_CHECK_RUNTIME;
    const evidenceRuntime = window.FOOD_AUSTRALIA_EVIDENCE_RUNTIME;
    const activityRuntime = window.FOOD_AUSTRALIA_ACTIVITY_RUNTIME;
    const correct = sections.reduce(function (total, section) {
      return total + (checkRuntime ? checkRuntime.sectionCorrectCount(section.sectionId) : 0);
    }, 0);
    const evidence = evidenceRuntime ? evidenceRuntime.collectSummary() : [];
    const responses = sections.reduce(function (total, section) {
      const record = evidence.find(function (item) { return item.sectionId === section.sectionId; });
      return total + Number(Boolean(record && record.response.trim()));
    }, 0);
    const activityComplete = Boolean(activityRuntime && activityRuntime.isComplete(activityId));
    const percent = Math.round(((correct + responses + Number(activityComplete)) / 34) * 100);
    host.querySelector("[data-progress]").style.width = percent + "%";
    host.querySelector("[data-progress-text]").textContent = correct + " of 30 questions correct, " + responses + " of 3 long responses saved and activity " + (activityComplete ? "complete" : "not complete") + " on this device";
    host.querySelector("[data-review-total]").textContent = correct + " of 30 quiz questions correct · " + responses + " of 3 long responses saved";
    host.querySelectorAll("[data-module-activity-status]").forEach(function (status) {
      status.textContent = activityComplete ? "Activity complete on this device" : "Activity not complete on this device";
    });
    sections.forEach(function (section) {
      const sectionCorrect = checkRuntime ? checkRuntime.sectionCorrectCount(section.sectionId) : 0;
      const record = evidence.find(function (item) { return item.sectionId === section.sectionId; });
      const responseSaved = Boolean(record && record.response.trim());
      const status = host.querySelector('[data-review-status="' + section.sectionId + '"]');
      if (status) status.textContent = sectionCorrect + " of 10 correct · response " + (responseSaved ? "saved" : "not saved");
    });
    const firstIncomplete = sections.find(function (section) {
      const record = evidence.find(function (item) { return item.sectionId === section.sectionId; });
      return (checkRuntime ? checkRuntime.sectionCorrectCount(section.sectionId) : 0) < 10 || !(record && record.response.trim());
    });
    const resume = host.querySelector("[data-resume]");
    resume.href = firstIncomplete ? "#learning-" + firstIncomplete.sectionId : activityComplete ? "../busy-work.html#puzzle-" + module.code : "../activities.html#" + activityId;
    resume.textContent = firstIncomplete ? "Continue where I left off" : activityComplete ? "Module complete — open the puzzle" : "Continue with the module activity";
  }

  window.addEventListener("food-australia-progress", updateProgress);
  updateProgress();

  function openHashTarget() {
    if (!window.location.hash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (!target) return;
    if (target.tagName === "DETAILS") target.open = true;
    if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
    window.setTimeout(function () {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    }, 80);
  }
  window.addEventListener("hashchange", openHashTarget);
  openHashTarget();
})();
