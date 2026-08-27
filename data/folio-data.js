(function () {
  "use strict";

  const cards = [
    {
      id: "folio-m01", moduleId: 1, title: "Safety reasoning", action: "Explain one hazard-control or readiness decision.",
      why: "A safe decision is stronger when the control is matched to the particular risk and stays within student authority.",
      evidence: "A written decision trail; optional teacher-authorised image of a non-identifiable setup or student-created diagram.",
      prompt: "What clue did you notice, what could happen, what action was appropriate, and why was that action stronger than a vague warning?",
      caption: "What does your selected evidence prove about your decision-making?",
      starters: ["The clue I noticed was …", "The appropriate control was … because …", "I would stop and ask the teacher if …"],
      source: "Module 1 · m01-s01 to m01-s03", activityRoute: "activities.html#activity-m01", allowImage: true
    },
    {
      id: "folio-m02", moduleId: 2, title: "Nutrition evidence and respectful context", action: "Record one qualified nutrition comparison or modification decision.",
      why: "Fair comparisons and respectful source use prevent nutrition evidence becoming hype or cultural tokenism.",
      evidence: "A matched-data claim, limitation and source-context note.",
      prompt: "What does the evidence support, what does it not establish, and how did source identity or place affect the wording?",
      caption: "Which part of this evidence makes your claim fair and source-bounded?",
      starters: ["On the matched basis, the data show …", "This does not prove …", "I kept the cultural context visible by …"],
      source: "Module 2 · m02-s01 to m02-s03", activityRoute: "activities.html#activity-m02", allowImage: false
    },
    {
      id: "folio-m03", moduleId: 3, title: "Responsible source-use record", action: "Document one ICIP-aware source decision without copying cultural content.",
      why: "A strong research record shows why a source was suitable and what limits shaped its use.",
      evidence: "Creator, Country or Community context, purpose, reuse condition, acknowledgement and chosen action.",
      prompt: "Why did you use, link, pause or replace the source, and how did that decision respect authority and context?",
      caption: "What does the metadata record prove about your research process?",
      starters: ["The source identifies …", "Its stated limit is …", "I chose to … because …"],
      source: "Module 3 · m03-s01 to m03-s03", activityRoute: "activities.html#activity-m03", allowImage: false
    },
    {
      id: "folio-m04", moduleId: 4, title: "Historical-source judgement", action: "Evaluate one supplied historical food source for a specific claim.",
      why: "Historical evidence becomes useful when direct information, inference and missing perspectives are separated.",
      evidence: "A creator–purpose–context note, one supported claim, one limitation and a confidence judgement.",
      prompt: "What can this source support, what can it not support, and what other perspective or evidence would strengthen the conclusion?",
      caption: "How does the evidence show that your conclusion is careful rather than universal?",
      starters: ["The source directly shows or states …", "Its viewpoint matters because …", "My confidence is … because …"],
      source: "Module 4 · m04-s01 to m04-s03", activityRoute: "activities.html#activity-m04", allowImage: false
    },
    {
      id: "folio-m05", moduleId: 5, title: "Change, continuity and migration pathway", action: "Build one evidence-bounded explanation of food-system change.",
      why: "Connected pathways show mechanisms and continuity more accurately than a list of events or dishes.",
      evidence: "A causal or influence pathway with at least one qualification, continuity, adaptation or trade-off.",
      prompt: "How did the factors connect in the sourced context, and what variation or limitation prevents the explanation becoming universal?",
      caption: "Which link in your pathway is best supported by evidence?",
      starters: ["In this place and period …", "This changed …, which then …", "The evidence also shows continuity or adaptation through …"],
      source: "Module 5 · m05-s01 to m05-s03", activityRoute: "activities.html#activity-m05", allowImage: false
    },
    {
      id: "folio-m06", moduleId: 6, title: "Bounded cultural food investigation", action: "Record the research question, source set and one careful conclusion from a named context.",
      why: "A narrow question and complementary sources reveal variation without asking one person or dish to represent a culture.",
      evidence: "A bounded question, source roles and a conclusion with an explicit limit.",
      prompt: "Why were your sources credible and varied enough, and what conclusion can they support without stereotyping?",
      caption: "What does your source set prove about the quality of the investigation?",
      starters: ["My question is bounded by …", "These sources contribute different evidence because …", "They support … but not …"],
      source: "Module 6 · m06-s01 to m06-s03", activityRoute: "activities.html#activity-m06", allowImage: false
    },
    {
      id: "folio-m07", moduleId: 7, title: "Fusion concept reasoning", action: "Develop an annotated concept with a clear user, purpose and respectful research trail.",
      why: "A purposeful fusion concept explains why each influence belongs and what still needs testing or teacher confirmation.",
      evidence: "Written rationale plus an optional student-created concept sketch or annotation image.",
      prompt: "Which decision is strongest, what evidence supports it, and which assumption should be tested first?",
      caption: "What design decision does your concept image or written record prove?",
      starters: ["The intended user and purpose are …", "This element contributes … because …", "Before practical work, I still need to confirm …"],
      source: "Module 7 · m07-s01 to m07-s03", activityRoute: "activities.html#activity-m07", allowImage: true
    },
    {
      id: "folio-m08", moduleId: 8, title: "Process and method comparison", action: "Explain one processing change and recommend a method for a stated purpose.",
      why: "Method selection should connect observable evidence and product purpose while acknowledging trade-offs and local controls.",
      evidence: "Action–property–observation–effect chain and a comparison against common criteria; optional student-created diagram or authorised observation image.",
      prompt: "What changed, what evidence shows it, which method best fits the purpose, and what trade-off or teacher-confirm item remains?",
      caption: "How does the image or diagram support your processing explanation?",
      starters: ["The action changed …", "I observed …, which suggests …", "I recommend … for this purpose, although …"],
      source: "Module 8 · m08-s01 to m08-s03", activityRoute: "activities.html#activity-m08", allowImage: true
    },
    {
      id: "folio-m09", moduleId: 9, title: "Advertisement analysis", action: "Analyse a teacher-supplied or fictional advertisement without reproducing commercial media.",
      why: "Separating observation, inference and evidence helps reveal how persuasion works without assuming every audience responds the same way.",
      evidence: "One observed technique, possible audience effect, claim-evidence check and ethical judgement.",
      prompt: "How convincingly does the advertisement support its main claim, and which persuasive feature works without becoming misleading?",
      caption: "What analytical judgement does this record demonstrate?",
      starters: ["I observe …", "For this audience, it may …", "The claim is convincing or limited because …"],
      source: "Module 9 · m09-s01 to m09-s03", activityRoute: "activities.html#activity-m09", allowImage: false
    },
    {
      id: "folio-m10", moduleId: 10, title: "Food-diary analysis", action: "Analyse a fictional diary using neutral, qualified language.",
      why: "Food diaries offer clues but are short, self-reported records that cannot justify diagnosis or moral judgement.",
      evidence: "One observed pattern, two interacting influences and two evidence limitations.",
      prompt: "What does the recorded period show, what might explain it, and what prevents a stronger conclusion?",
      caption: "Which wording shows that your analysis stays close to the evidence?",
      starters: ["Within the recorded period …", "This may reflect … interacting with …", "Confidence is limited because …"],
      source: "Module 10 · m10-s01", activityRoute: "activities.html#activity-m10", allowImage: false
    },
    {
      id: "folio-ad-concept", moduleId: null, title: "Concept advertisement planning", action: "Plan an original, ethical food message as transferable design practice.",
      why: "This practice card develops audience, evidence and design reasoning without issuing the archived advertisement task as current assessment.",
      evidence: "Audience and purpose statement, supportable claim, persuasive choices, evidence gap and optional student-created concept image.",
      prompt: "What do you want the audience to notice, think or do, how will you persuade them honestly, and what claim or permission still needs checking?",
      caption: "What does your concept show about ethical persuasion and evidence?",
      starters: ["My intended audience and purpose are …", "The message uses … because …", "This factual claim is supported by …; I still need to check …"],
      source: "Modules 7 and 9 · transferable planning only; no current Food in Australia formal task", activityRoute: "activities.html#activity-m09", allowImage: true
    },
    {
      id: "folio-course-synthesis", moduleId: null, title: "Course synthesis", action: "Select evidence and explain how your understanding developed across the unit.",
      why: "A concise synthesis shows what evidence proves, how ideas connect and what you would improve next.",
      evidence: "One claim, two selected examples from different modules, reasoning, reflection and a specific next step.",
      prompt: "How have Australian food practices changed and continued through interacting cultural, historical, technological and food-choice factors, and how did your own thinking become more precise?",
      caption: "Why are these examples the strongest evidence for your learning claim?",
      starters: ["My overall claim is …", "Evidence from Module … and Module … shows …", "My thinking changed when …; next I will …"],
      source: "Module 10 · m10-s02 and m10-s03", activityRoute: "activities.html#activity-m10", allowImage: false
    }
  ];

  window.FOOD_AUSTRALIA_FOLIO = Object.freeze({
    schemaVersion: 1,
    courseId: "yr9-food-in-australia-2026",
    title: "Year 9 Food in Australia learning folio",
    orientation: "Use this folio to select and explain useful learning evidence. It is not a copy of every quiz or activity and it is not a formal task notification.",
    saveBoundary: "Text and optional images save only in this browser. A backup or evidence copy includes those images, but saving, downloading, printing or exporting is not submission. Share work only as your teacher directs.",
    imageBoundary: "Use only your own work or a teacher-authorised, non-identifiable image. Do not add faces, names, health information, cultural material without permission or commercial advertisements.",
    textStorageKey: "folio:text:v1",
    imageStorageKey: "folio:images:v1",
    maxImageBytes: 1500000,
    acceptedImageTypes: Object.freeze(["image/jpeg", "image/png", "image/webp"]),
    cards: Object.freeze(cards)
  });
})();
