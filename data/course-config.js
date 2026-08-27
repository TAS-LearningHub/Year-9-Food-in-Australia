(function () {
  "use strict";

  window.FOOD_AUSTRALIA_COURSE = Object.freeze({
    id: "yr9-food-in-australia-2026",
    schemaVersion: 1,
    storagePrefix: "yr9-food-in-australia:v1:",
    title: "Year 9 Food in Australia",
    subtitle: "Foodie Adventures",
    cohort: "Stage 5 · ten-week learning course",
    syllabusBasis: "Food Technology Years 7–10 Syllabus (2019)",
    sourceMapVersion: "1.1",
    buildState: "published-course",
    publicationState: "published",
    mainMenuUrl: "https://stevencowell.github.io/Main-Page/",
    expectedCounts: Object.freeze({
      foundationRoutes: 18,
      modules: 10,
      theorySections: 30,
      formativeQuestions: 300,
      writtenResponses: 30,
      presentations: 10,
      appliedActivities: 10,
      puzzles: 10,
      folioCards: 12,
      substantiveVisuals: 32,
      photoLikeVisuals: 16,
      explanatoryVisuals: 16
    }),
    qa: Object.freeze({
      supportedWidthFloor: 320,
      viewports: Object.freeze([320, 390, 768, 1440]),
      responsiveRoutes: Object.freeze(["index.html", "modules/module-03.html"])
    }),
    modules: Object.freeze([
      { id: 1, code: "01", title: "Safety first", weeks: "Week 1", route: "modules/module-01.html", summary: "Use hazard, hygiene and readiness thinking before any practical begins.", presentation: "module-01-safety-first.pptx" },
      { id: 2, code: "02", title: "Native foods and nutrition", weeks: "Week 2", route: "modules/module-02.html", summary: "Connect Country, respectful research, fair nutrition comparison and purposeful modification.", presentation: "module-02-native-foods-nutrition.pptx" },
      { id: 3, code: "03", title: "Cultural Knowledge and ICIP", weeks: "Week 3", route: "modules/module-03.html", summary: "Research living, place-based knowledge with authority, permission and acknowledgement in view.", presentation: "module-03-cultural-knowledge-icip.pptx" },
      { id: 4, code: "04", title: "Food systems, missions and nutrition", weeks: "Week 4", route: "modules/module-04.html", summary: "Read food-history evidence critically and explain change without erasing context or agency.", presentation: "module-04-food-systems-missions-nutrition.pptx" },
      { id: 5, code: "05", title: "Colonisation, settlement and migration", weeks: "Week 5", route: "modules/module-05.html", summary: "Trace disruption, technology, migration, continuity and adaptation through evidence.", presentation: "module-05-colonisation-settlement-migration.pptx" },
      { id: 6, code: "06", title: "Multicultural influences", weeks: "Week 6", route: "modules/module-06.html", summary: "Investigate changing Australian cuisine without reducing cultures to stereotypes.", presentation: "module-06-multicultural-influences.pptx" },
      { id: 7, code: "07", title: "Fusion food design", weeks: "Week 7", route: "modules/module-07.html", summary: "Develop a purposeful, researched and respectful fusion concept, then defend the decisions.", presentation: "module-07-fusion-food-design.pptx" },
      { id: 8, code: "08", title: "Food production and processing", weeks: "Week 8", route: "modules/module-08.html", summary: "Explain how technologies and processing change food properties, systems and trade-offs.", presentation: "module-08-food-production-processing.pptx" },
      { id: 9, code: "09", title: "Food choice and advertising", weeks: "Week 9", route: "modules/module-09.html", summary: "Analyse interacting influences, advertising techniques and ethical persuasive choices.", presentation: "module-09-food-choice-advertising.pptx" },
      { id: 10, code: "10", title: "Synthesis and assessment readiness", weeks: "Week 10", route: "modules/module-10.html", summary: "Build evidence-based conclusions, select strong work and reflect on changed thinking.", presentation: "module-10-synthesis-assessment-readiness.pptx" }
    ]),
    routes: Object.freeze([
      { id: "course", path: "index.html", kind: "course" },
      { id: "module-01", path: "modules/module-01.html", kind: "module" },
      { id: "module-02", path: "modules/module-02.html", kind: "module" },
      { id: "module-03", path: "modules/module-03.html", kind: "module" },
      { id: "module-04", path: "modules/module-04.html", kind: "module" },
      { id: "module-05", path: "modules/module-05.html", kind: "module" },
      { id: "module-06", path: "modules/module-06.html", kind: "module" },
      { id: "module-07", path: "modules/module-07.html", kind: "module" },
      { id: "module-08", path: "modules/module-08.html", kind: "module" },
      { id: "module-09", path: "modules/module-09.html", kind: "module" },
      { id: "module-10", path: "modules/module-10.html", kind: "module" },
      { id: "activities", path: "activities.html", kind: "course-resource" },
      { id: "puzzles", path: "busy-work.html", kind: "course-resource" },
      { id: "videos", path: "videos.html", kind: "course-resource" },
      { id: "folio", path: "folio.html", kind: "student-evidence" },
      { id: "assessment", path: "assessment.html", kind: "controlled-boundary" },
      { id: "teacher", path: "teacher-resources.html", kind: "teacher-resource" },
      { id: "sources", path: "sources.html", kind: "source-boundary" }
    ])
  });
})();
