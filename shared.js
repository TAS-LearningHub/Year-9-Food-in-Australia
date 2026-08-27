(function () {
  "use strict";

  const config = window.FOOD_AUSTRALIA_COURSE;
  const script = document.currentScript;
  const MAIN_MENU_URL = "https://stevencowell.github.io/Main-Page/";
  if (!config) {
    document.documentElement.dataset.configState = "missing";
    return;
  }

  function addFamilyNavigationStyles() {
    if (!script || document.querySelector("link[data-course-family-nav-styles]")) return;
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = new URL("course-family-navigation.css", script.src).href;
    stylesheet.dataset.courseFamilyNavStyles = "";
    document.head.append(stylesheet);
  }

  function normaliseCourseShell() {
    const header = document.querySelector("header.site-header");
    const inner = header?.querySelector(".header-inner, .nav-wrap");
    const brand = header?.querySelector(".brand");
    const mark = brand?.querySelector(".brand-mark");
    const legacyNav = document.querySelector("body > nav.site-nav") || header?.querySelector("nav.site-nav");
    if (!header || !inner || !brand || !legacyNav) return;

    const courseRoot = document.body.dataset.courseRoot === ".." ? "../" : "";
    const navigation = [
      { label: "Course", href: `${courseRoot}index.html`, route: "course" },
      { label: "Modules", href: `${courseRoot}index.html#modules`, route: "modules" },
      { label: "Activities", href: `${courseRoot}activities.html`, route: "activities" },
      { label: "Puzzles", href: `${courseRoot}busy-work.html`, route: "puzzles" },
      { label: "My folio", href: `${courseRoot}folio.html`, route: "folio" },
      { label: "Assessment", href: `${courseRoot}assessment.html`, route: "assessment" },
      { label: "Teacher resources", href: `${courseRoot}teacher-resources.html`, route: "teacher" },
      { label: "Main Menu", href: MAIN_MENU_URL, route: "main-menu", mainMenu: true }
    ];

    const links = navigation.map((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      link.dataset.navRoute = item.route;
      if (item.mainMenu) link.dataset.mainMenu = "";
      return link;
    });

    legacyNav.replaceChildren(...links);
    legacyNav.className = "course-family-nav__links";
    legacyNav.id = "site-nav";
    legacyNav.setAttribute("aria-label", "Course navigation");
    header.className = "course-family-nav screen-only";
    inner.className = "course-family-nav__inner";
    brand.className = "course-family-nav__brand";
    if (mark) mark.className = "course-family-nav__mark";
    inner.querySelector(".build-chip")?.remove();
    inner.querySelector(".nav-toggle")?.remove();
    inner.appendChild(legacyNav);
    document.documentElement.classList.add("has-course-family-nav");
  }

  addFamilyNavigationStyles();
  normaliseCourseShell();

  document.documentElement.dataset.courseId = config.id;
  document.documentElement.dataset.buildState = config.buildState;

  document.querySelectorAll("[data-course-title]").forEach((node) => {
    node.textContent = config.title;
  });
  document.querySelectorAll("[data-course-subtitle]").forEach((node) => {
    node.textContent = config.subtitle;
  });
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
  document.querySelectorAll("[data-main-menu]").forEach((link) => {
    link.href = MAIN_MENU_URL;
  });

  const currentPath = decodeURIComponent(window.location.pathname).replace(/\\/g, "/");
  document.querySelectorAll("[data-nav-route]").forEach((link) => {
    const navRoute = link.dataset.navRoute;
    const targetPath = decodeURIComponent(new URL(link.href, window.location.href).pathname).replace(/\\/g, "/");
    const isModule = currentPath.includes("/modules/module-");
    const isCurrent = navRoute === "modules"
      ? isModule || (targetPath === currentPath && window.location.hash === "#modules")
      : navRoute !== "main-menu" && targetPath === currentPath && !(navRoute === "course" && window.location.hash === "#modules");
    if (isCurrent) link.setAttribute("aria-current", "page");
  });

  const moduleGrid = document.querySelector("[data-module-grid]");
  if (moduleGrid) {
    const theory = window.FOOD_AUSTRALIA_THEORY?.sections || [];
    moduleGrid.innerHTML = config.modules.map((module) => {
      const titles = theory
        .filter((section) => section.moduleId === module.id)
        .sort((a, b) => a.sectionNumber - b.sectionNumber)
        .map((section) => section.title)
        .join(" · ");
      return `
      <article class="card module-card">
        <div class="number" aria-hidden="true">${module.code}</div>
        <div>
          <p class="module-stage">Module ${module.id} · ${module.weeks}</p>
          <h3>${module.title}</h3>
          <p>${titles}</p>
          <p class="module-card-progress" data-module-progress="${module.id}">0 of 30 questions correct · 0 of 3 long responses saved · activity not complete</p>
          <a href="${module.route}">Open Module ${module.id} <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
    }).join("");
  }

  function updateCourseProgress() {
    const root = document.querySelector("[data-course-progress]");
    const checkRuntime = window.FOOD_AUSTRALIA_CHECK_RUNTIME;
    const evidenceRuntime = window.FOOD_AUSTRALIA_EVIDENCE_RUNTIME;
    const activityRuntime = window.FOOD_AUSTRALIA_ACTIVITY_RUNTIME;
    const folioRuntime = window.FOOD_AUSTRALIA_FOLIO_RUNTIME;
    const theory = window.FOOD_AUSTRALIA_THEORY?.sections || [];
    if (!root || !checkRuntime || !evidenceRuntime || !activityRuntime || !folioRuntime || theory.length !== 30) return;

    const evidence = evidenceRuntime.collectSummary();
    const folio = folioRuntime.progressSummary();
    let totalCorrect = 0;
    let totalResponses = 0;
    let totalActivities = 0;
    let firstIncomplete = null;

    config.modules.forEach((module) => {
      const sections = theory.filter((section) => section.moduleId === module.id).sort((a, b) => a.sectionNumber - b.sectionNumber);
      let moduleCorrect = 0;
      let moduleResponses = 0;
      sections.forEach((section) => {
        const correct = checkRuntime.sectionCorrectCount(section.sectionId);
        const record = evidence.find((item) => item.sectionId === section.sectionId);
        const hasResponse = Boolean(record && record.response.trim());
        moduleCorrect += correct;
        moduleResponses += Number(hasResponse);
        if (!firstIncomplete && (correct < 10 || !hasResponse)) firstIncomplete = { module: module, section: section };
      });
      const activityId = `activity-m${module.code}`;
      const activityComplete = activityRuntime.isComplete(activityId);
      if (!firstIncomplete && !activityComplete) firstIncomplete = { module: module, activityId: activityId };
      totalCorrect += moduleCorrect;
      totalResponses += moduleResponses;
      totalActivities += Number(activityComplete);
      const status = document.querySelector(`[data-module-progress="${module.id}"]`);
      if (status) status.textContent = `${moduleCorrect} of 30 questions correct · ${moduleResponses} of 3 long responses saved · activity ${activityComplete ? "complete" : "not complete"}`;
    });

    if (!firstIncomplete && folio.nextCardId) firstIncomplete = { folioCardId: folio.nextCardId };
    root.querySelector("[data-course-progress-text]").textContent = `${totalCorrect} of 300 questions correct, ${totalResponses} of 30 long responses saved, ${totalActivities} of 10 activities complete and ${folio.complete} of ${folio.total} folio cards ${folio.complete === 1 ? "has" : "have"} a considered response on this device.`;
    root.querySelector("[data-course-progress-bar]").style.width = `${Math.round(((totalCorrect + totalResponses + totalActivities + folio.complete) / 352) * 100)}%`;
    const resume = root.querySelector("[data-course-resume]");
    if (firstIncomplete) {
      resume.href = firstIncomplete.section
        ? `${firstIncomplete.module.route}#learning-${firstIncomplete.section.sectionId}`
        : firstIncomplete.activityId
          ? `activities.html#${firstIncomplete.activityId}`
          : `folio.html#${firstIncomplete.folioCardId}`;
      resume.textContent = totalCorrect || totalResponses || totalActivities || folio.complete ? "Continue where I left off" : "Start Module 1";
    } else {
      resume.href = "folio.html";
      resume.textContent = "Review My Folio";
    }
  }

  window.addEventListener("food-australia-progress", updateCourseProgress);
  window.addEventListener("storage", updateCourseProgress);
  updateCourseProgress();
})();
