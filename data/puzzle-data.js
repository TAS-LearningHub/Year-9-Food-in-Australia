(function () {
  "use strict";

  window.FOOD_AUSTRALIA_PUZZLES = Object.freeze({
    schemaVersion: 1,
    storageNamespace: "puzzles:v1",
    puzzles: Object.freeze([
      {
        id: "puzzle-01", moduleId: 1, title: "Hazard-control decision", mechanic: "Best-fit choice",
        theoryRoute: "modules/module-01.html#m01-s01",
        prompt: "Which chain keeps hazard, risk and control in the correct jobs?",
        type: "choice", answer: 0,
        options: [
          "Damaged lead = hazard; possible shock = harm; likelihood and consequence = risk; stop and tell the teacher = control",
          "Damaged lead = risk; an apron = complete control; repair it yourself = safe action",
          "Being delayed = hazard; rushing = control; equipment condition = unimportant"
        ],
        reflection: "Create a different fictional food-room scenario and explain its hazard → harm → risk → control chain."
      },
      {
        id: "puzzle-02", moduleId: 2, title: "Respectful source pathway", mechanic: "Reasoning sequence",
        theoryRoute: "modules/module-02.html#m02-s01",
        prompt: "Place the research moves in a responsible order.",
        type: "order",
        items: ["Identify the source creator and place", "Check authority, purpose and limits", "Compare the claim with suitable evidence", "Write a specific, qualified explanation"],
        correctOrder: [0, 1, 2, 3],
        reflection: "Explain why naming a native food without naming the source and place can weaken both accuracy and respect."
      },
      {
        id: "puzzle-03", moduleId: 3, title: "ICIP metadata detector", mechanic: "Select all that apply",
        theoryRoute: "modules/module-03.html#m03-s03",
        prompt: "Which details help you decide whether and how a cultural source may be used?",
        type: "multi", answers: [0, 1, 2, 3],
        options: ["Creator or organisation", "Country or Community context", "Public purpose and reuse conditions", "Acknowledgement guidance", "How high it appeared in a search result"],
        reflection: "A source has no creator or reuse statement. Describe the safest research action and why."
      },
      {
        id: "puzzle-04", moduleId: 4, title: "Historical claim builder", mechanic: "Reasoning sequence",
        theoryRoute: "modules/module-04.html#m04-s03",
        prompt: "Build a careful historical-source explanation.",
        type: "order",
        items: ["Identify origin, audience and purpose", "Separate direct observation from interpretation", "Cross-check with another relevant perspective", "Make and qualify the conclusion"],
        correctOrder: [0, 1, 2, 3],
        reflection: "Write one sentence explaining why an old photograph is evidence but not a complete account."
      },
      {
        id: "puzzle-05", moduleId: 5, title: "Migration influence mechanism", mechanic: "Best-fit choice",
        theoryRoute: "modules/module-05.html#m05-s03",
        prompt: "Which pathway explains influence without erasing people or variation?",
        type: "choice", answer: 1,
        options: [
          "A dish became popular, so its origins and different uses no longer matter",
          "People and knowledge shaped ingredients, businesses or methods; adaptation and uneven uptake affected wider habits",
          "Every migrant community followed the same pathway and every household changed at once"
        ],
        reflection: "Choose one sourced example and name two mechanisms through which it could influence wider food habits."
      },
      {
        id: "puzzle-06", moduleId: 6, title: "Stereotype-resistant research", mechanic: "Select all that apply",
        theoryRoute: "modules/module-06.html#m06-s02",
        prompt: "Which features make a cultural food question more careful and researchable?",
        type: "multi", answers: [0, 1, 2, 4],
        options: ["A named place or context", "A clear time frame", "More than one credible source", "One person expected to represent a whole culture", "Language that expects variation"],
        reflection: "Repair the broad question ‘What does this culture eat?’ by adding place, time, context and room for variation."
      },
      {
        id: "puzzle-07", moduleId: 7, title: "Purposeful fusion logic", mechanic: "Reasoning sequence",
        theoryRoute: "modules/module-07.html#m07-s01",
        prompt: "Order the decisions behind a defensible fusion concept.",
        type: "order",
        items: ["Define the intended user and purpose", "Research the influences and context", "Explain the functional reason for each element", "Identify what needs testing or teacher confirmation"],
        correctOrder: [0, 1, 2, 3],
        reflection: "Explain why novelty alone is not a strong reason to combine two food ideas."
      },
      {
        id: "puzzle-08", moduleId: 8, title: "Technology trade-off test", mechanic: "Best-fit choice",
        theoryRoute: "modules/module-08.html#m08-s03",
        prompt: "Which recommendation uses technology evidence well?",
        type: "choice", answer: 2,
        options: [
          "Choose the newest method because newer always means better",
          "Choose the fastest method without checking the product purpose",
          "Compare methods against the same purpose and criteria, explain predicted effects and a trade-off, then note practical controls still requiring teacher confirmation"
        ],
        reflection: "Name one food-processing benefit and one connected trade-off that should be weighed together."
      },
      {
        id: "puzzle-09", moduleId: 9, title: "Advertisement evidence decoder", mechanic: "Select all that apply",
        theoryRoute: "modules/module-09.html#m09-s02",
        prompt: "Which moves belong in a fair analysis of a food advertisement?",
        type: "multi", answers: [0, 1, 2, 3],
        options: ["Describe visible or audible techniques", "Identify the intended audience", "Separate likely effect from proven fact", "Ask what evidence supports the main claim", "Treat popularity as proof that every claim is true"],
        reflection: "Rewrite one exaggerated fictional food claim so it remains persuasive but becomes supportable."
      },
      {
        id: "puzzle-10", moduleId: 10, title: "Synthesis sorter", mechanic: "Reasoning sequence",
        theoryRoute: "modules/module-10.html#m10-s03",
        prompt: "Order the parts of a strong final explanation.",
        type: "order",
        items: ["Make a clear, bounded claim", "Select relevant attributed evidence", "Explain how the evidence supports the claim", "Qualify limits and uncertainty", "Reflect on changed thinking and a next step"],
        correctOrder: [0, 1, 2, 3, 4],
        reflection: "Name two different pieces of course evidence you would select and explain what each one demonstrates."
      }
    ])
  });
})();
