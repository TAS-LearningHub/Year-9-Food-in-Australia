(function () {
  "use strict";

  const records = [
    {
      sectionId: "m01-s01", moduleId: 1, title: "Hazard-control judgement",
      helpAnchor: "m01-s01-help-2", activityId: "activity-m01", 
      prompt: "A new food-room scenario contains several possible hazards. Explain the hazard → possible harm → risk → control pathway, then justify which control should be prioritised and why.",
      scaffold: ["The hazard is … and it could cause …", "The risk matters because the likelihood and consequence are …", "The priority control is … because it directly changes …"],
      lookFors: ["separates hazard from risk", "matches a control to the scenario", "keeps action within student authority"]
    },
    {
      sectionId: "m01-s02", moduleId: 1, title: "Contamination-chain decision",
      helpAnchor: "m01-s02-help-1", activityId: "activity-m01",
      prompt: "Trace a new contamination chain from source to food. Decide where one teacher-approved control would have the strongest preventive effect and justify your decision.",
      scaffold: ["The possible source is …", "Transfer could occur when …", "The strongest interruption point is … because …"],
      lookFors: ["traces contacts in order", "identifies a realistic interruption point", "explains prevention rather than relying on appearance"]
    },
    {
      sectionId: "m01-s03", moduleId: 1, title: "Readiness protects a system",
      helpAnchor: "m01-s03-help-1", activityId: "activity-m01",
      prompt: "Explain how one readiness decision before a practical could protect more than one person, food item, piece of equipment or part of the wider food-room system.",
      scaffold: ["The readiness clue is …", "My decision would be …", "This protects more than one part of the system because …"],
      lookFors: ["uses a specific readiness clue", "shows connected consequences", "does not invent permission or local procedure"]
    },
    {
      sectionId: "m02-s01", moduleId: 2, title: "Source, place and respectful explanation",
      helpAnchor: "m02-s01-help-1", activityId: "activity-m02",
      prompt: "When researching a native food, justify why source identity and the place connected with the knowledge affect both the accuracy and respectfulness of your explanation.",
      scaffold: ["The source identifies …", "The place or context matters because …", "I would limit my explanation by …"],
      lookFors: ["recognises diversity of Peoples and Country", "links authority to accuracy", "keeps claims within source limits"]
    },
    {
      sectionId: "m02-s02", moduleId: 2, title: "Qualified nutrition claim",
      helpAnchor: "m02-s02-help-2", activityId: "activity-m02",
      prompt: "Use a supplied, fairly matched nutrition table to make one evidence-based comparison. Then add a limitation showing what the data cannot establish.",
      scaffold: ["On the matched basis, the data show …", "This supports the claim that …", "However, the table cannot show …"],
      lookFors: ["uses the same comparison basis", "makes a narrow claim", "states a genuine limitation"]
    },
    {
      sectionId: "m02-s03", moduleId: 2, title: "Purposeful modification justification",
      helpAnchor: "m02-s03-help-1", activityId: "activity-m02",
      prompt: "Justify a proposed food modification by linking its purpose, supporting evidence, respectful use of the ingredient and predicted effects on food function. Identify what a fair trial would need to test.",
      scaffold: ["The design purpose is …", "The change is supported by … and respects context by …", "A fair trial would hold … constant and observe …"],
      lookFors: ["connects change to purpose", "identifies provenance or cultural-context evidence", "predicts more than taste alone"]
    },
    {
      sectionId: "m03-s01", moduleId: 3, title: "Responsible source decision",
      helpAnchor: "m03-s01-help-1", activityId: "activity-m03",
      prompt: "Decide whether a supplied source is responsible enough for a school explanation. Justify the decision using creator identity, Country or Community context, purpose, authority and stated limits.",
      scaffold: ["The source clearly identifies …", "Its authority or limit is …", "I would use, link, pause or replace it because …"],
      lookFors: ["checks all source metadata", "distinguishes access from permission", "chooses a proportionate action"]
    },
    {
      sectionId: "m03-s02", moduleId: 3, title: "Resource-care reasoning",
      helpAnchor: "m03-s02-help-2", activityId: "activity-m03",
      prompt: "Explain why a responsible decision about a food resource must consider place, timing, permission and renewal rather than availability alone.",
      scaffold: ["Availability tells us … but not …", "Place and timing matter because …", "Permission and renewal change the decision by …"],
      lookFors: ["links the four considerations", "avoids claiming harvesting authority", "recognises living place-based knowledge"]
    },
    {
      sectionId: "m03-s03", moduleId: 3, title: "ICIP-aware research pathway",
      helpAnchor: "m03-s03-help-2", activityId: "activity-m03",
      prompt: "Explain why a chosen source is appropriate to use and how your proposed research action respects its authority, context, reuse conditions and acknowledgement needs.",
      scaffold: ["I can verify the source's …", "The proposed use is within or beyond its stated purpose because …", "To respect uncertainty, I would …"],
      lookFors: ["separates attribution from permission", "uses source-specific evidence", "pauses or links when authority is unclear"]
    },
    {
      sectionId: "m04-s01", moduleId: 4, title: "Evaluate a claim about historical roles",
      helpAnchor: "m04-s01-help-1", activityId: "activity-m04",
      prompt: "Evaluate how reliable a supplied historical statement about food roles is. Explain what it can support, what perspective or context is missing and how the claim should be limited.",
      scaffold: ["The statement directly claims …", "Its creator, place, time and purpose affect reliability because …", "A defensible limited conclusion is …"],
      lookFors: ["tests rather than accepts the observer", "identifies a missing perspective", "avoids universal gender or role claims"]
    },
    {
      sectionId: "m04-s02", moduleId: 4, title: "Changing access and nutrition",
      helpAnchor: "m04-s02-help-2", activityId: "activity-m04",
      prompt: "Use supplied historical evidence to explain one nutritional implication of changing food access. Identify one limitation that prevents the explanation becoming too broad or blaming people for constrained choices.",
      scaffold: ["In this sourced context, access changed when …", "A possible nutrition implication is … because …", "The conclusion is limited by …"],
      lookFors: ["builds an evidence chain", "focuses on systems and access", "qualifies health or nutrition inference"]
    },
    {
      sectionId: "m04-s03", moduleId: 4, title: "Confidence in a historical source",
      helpAnchor: "m04-s03-help-1", activityId: "activity-m04",
      prompt: "Judge how much confidence a supplied historical source deserves for one specific food-history claim. Distinguish direct evidence, inference, corroboration and missing perspectives.",
      scaffold: ["The source directly shows or states …", "I infer …, but this needs checking against …", "My confidence is … because …"],
      lookFors: ["separates observation and inference", "uses corroboration meaningfully", "states uncertainty precisely"]
    },
    {
      sectionId: "m05-s01", moduleId: 5, title: "Connected effects of colonisation",
      helpAnchor: "m05-s01-help-2", activityId: "activity-m05",
      prompt: "Explain two connected, source-supported effects of colonisation on food systems in a specified context. Include one example of continuity, adaptation or revitalisation and qualify the conclusion.",
      scaffold: ["In the identified place and period, … changed …", "This affected …, which in turn …", "Alongside disruption, the evidence also shows …"],
      lookFors: ["uses a connected causal chain", "includes continuity or adaptation", "does not treat colonisation as one universal event"]
    },
    {
      sectionId: "m05-s02", moduleId: 5, title: "Technology in historical context",
      helpAnchor: "m05-s02-help-1", activityId: "activity-m05",
      prompt: "Compare two supplied food technologies in one historical context. Judge which had the greater effect on food access by weighing the constraint addressed, system change, benefit and trade-off.",
      scaffold: ["Technology A addressed … by …", "Technology B changed … but involved …", "In this context, … had the greater effect because …"],
      lookFors: ["compares against common criteria", "recognises trade-offs", "limits judgement to the supplied context"]
    },
    {
      sectionId: "m05-s03", moduleId: 5, title: "Migration influence pathway",
      helpAnchor: "m05-s03-help-1", activityId: "activity-m05",
      prompt: "Use one sourced migration example to explain three mechanisms through which people and knowledge influenced Australian food habits. Show adaptation without assuming every group followed the same pathway.",
      scaffold: ["The sourced example identifies …", "One mechanism of influence was …", "This changed wider habits through …, although …"],
      lookFors: ["moves beyond naming dishes", "links mechanisms to evidence", "acknowledges origins and variation"]
    },
    {
      sectionId: "m06-s01", moduleId: 6, title: "Cuisine as a changing system",
      helpAnchor: "m06-s01-help-2", activityId: "activity-m06",
      prompt: "Argue why a fixed list of famous foods cannot fully represent contemporary Australian cuisine. Use evidence about interacting influences, diversity and continuing change.",
      scaffold: ["A fixed list can show … but misses …", "The evidence shows that … influences …", "A more accurate representation would …"],
      lookFors: ["defines cuisine beyond dishes", "explains interaction", "recognises variation among contexts"]
    },
    {
      sectionId: "m06-s02", moduleId: 6, title: "Credible cultural food research",
      helpAnchor: "m06-s02-help-2", activityId: "activity-m06",
      prompt: "Justify why a selected set of sources is credible and varied enough to support a careful conclusion about one bounded cultural food context.",
      scaffold: ["My question is bounded by …", "Source A contributes … while Source B contributes …", "Together they support …, but not …"],
      lookFors: ["narrows place, time or context", "uses complementary sources", "does not treat one person or nation as uniform"]
    },
    {
      sectionId: "m06-s03", moduleId: 6, title: "Method for a sensory purpose",
      helpAnchor: "m06-s03-help-1", activityId: "activity-m06",
      prompt: "Select a preparation or cooking method for a stated sensory purpose and constraint. Justify the choice using ingredient properties, heat transfer and observable effects.",
      scaffold: ["The intended observable result is …", "This method may produce it because …", "The constraint or context changes the decision by …"],
      lookFors: ["starts with the desired result", "explains mechanism", "avoids claiming a method is universally best"]
    },
    {
      sectionId: "m07-s01", moduleId: 7, title: "Criteria for purposeful fusion",
      helpAnchor: "m07-s01-help-1", activityId: "activity-m07",
      prompt: "Develop and justify criteria for a purposeful, respectful fusion concept: user and purpose, researched influences, reason for combining elements, acknowledgement and cultural context.",
      scaffold: ["The intended user and purpose are …", "Each influence belongs because …", "Respectful development would require …"],
      lookFors: ["uses functional design reasons", "acknowledges cultural context", "distinguishes change from unsupported authenticity claims"]
    },
    {
      sectionId: "m07-s02", moduleId: 7, title: "Research that changed the design",
      helpAnchor: "m07-s02-help-2", activityId: "activity-m07",
      prompt: "Identify the three pieces of evidence that most changed a proposed food concept. Justify how each affected a specific design decision and why less relevant information was excluded.",
      scaffold: ["Evidence item 1 changed … because …", "This was stronger than personal preference because …", "I excluded … because it did not inform …"],
      lookFors: ["connects evidence to decisions", "distinguishes evidence and preference", "selects rather than stockpiles sources"]
    },
    {
      sectionId: "m07-s03", moduleId: 7, title: "Defend and test a concept",
      helpAnchor: "m07-s03-help-1", activityId: "activity-m07",
      prompt: "Defend the strongest decision in an annotated concept and identify the first assumption that should be tested through evidence, prototyping or feedback. Keep practical approval separate.",
      scaffold: ["The feature is intended to …", "It supports the purpose because …", "The first uncertain assumption is …, so I would test or confirm …"],
      lookFors: ["uses the annotation reasoning chain", "identifies uncertainty", "does not imply practical permission"]
    },
    {
      sectionId: "m08-s01", moduleId: 8, title: "Judge a food-system technology",
      helpAnchor: "m08-s01-help-2", activityId: "activity-m08",
      prompt: "Compare two technologies in a supplied food-system context and judge which had the larger effect. Explain the problem, mechanism, benefit, trade-off and limits of the judgement.",
      scaffold: ["The system problem was …", "Technology A changed … while Technology B changed …", "I judge … had the larger effect here because …, although …"],
      lookFors: ["explains system mechanisms", "weighs benefits and trade-offs", "does not rank by newness"]
    },
    {
      sectionId: "m08-s02", moduleId: 8, title: "Processing evidence chain",
      helpAnchor: "m08-s02-help-1", activityId: "activity-m08",
      prompt: "Explain a supplied processing example using the chain action → property change → observable evidence → product effect. State whether physical, chemical or combined change is most plausible.",
      scaffold: ["The processing action is …", "This changes … through …", "The observable evidence is … and it affects the product by …"],
      lookFors: ["names observable evidence", "proposes an appropriate mechanism", "connects change to product quality"]
    },
    {
      sectionId: "m08-s03", moduleId: 8, title: "Method recommendation with trade-off",
      helpAnchor: "m08-s03-help-1", activityId: "activity-m08",
      prompt: "Recommend a method for a stated food purpose. Compare alternatives using common criteria, explain one important trade-off and identify any practical requirement that still needs teacher confirmation.",
      scaffold: ["The product purpose and criteria are …", "Compared with …, this method is more suitable because …", "The trade-off or teacher-controlled requirement is …"],
      lookFors: ["uses common comparison criteria", "links prediction to purpose", "records an honest teacher-confirm item"]
    },
    {
      sectionId: "m09-s01", moduleId: 9, title: "Interacting food-choice influences",
      helpAnchor: "m09-s01-help-2", activityId: "activity-m09",
      prompt: "Explain how two influences may interact in a fictional food decision. Identify the scenario evidence supporting the explanation and one extra piece of information that could test it.",
      scaffold: ["The first plausible influence is … because the scenario shows …", "It may interact with … by …", "To test this explanation, I would need …"],
      lookFors: ["uses two influence categories", "separates evidence from assumption", "avoids moral or health judgement"]
    },
    {
      sectionId: "m09-s02", moduleId: 9, title: "Evaluate advertising evidence",
      helpAnchor: "m09-s02-help-2", activityId: "activity-m09",
      prompt: "Evaluate how convincingly a supplied advertisement supports its main claim. Separate observed techniques, inferred audience effects and the quality of evidence provided.",
      scaffold: ["I observe …", "For the stated audience, this may …", "The main claim is … and the evidence is convincing or limited because …"],
      lookFors: ["separates observation and inference", "tests a precise claim", "does not treat popularity or appeal as proof"]
    },
    {
      sectionId: "m09-s03", moduleId: 9, title: "Ethical persuasive concept",
      helpAnchor: "m09-s03-help-1", activityId: "activity-m09",
      prompt: "Justify three ethical choices in a concept food message and identify one claim or design decision that still needs stronger evidence. Do not represent a generated visual as proof of a real product.",
      scaffold: ["My message persuades through …", "The factual wording stays within the evidence by …", "Before use, I still need evidence or permission for …"],
      lookFors: ["keeps appeal and accuracy together", "avoids misleading imagery or endorsement", "identifies a real evidence gap"]
    },
    {
      sectionId: "m10-s01", moduleId: 10, title: "Careful food-diary conclusion",
      helpAnchor: "m10-s01-help-2", activityId: "activity-m10",
      prompt: "Use a supplied fictional diary to explain one pattern, show how two influences may interact, and identify two limitations affecting confidence. Keep the analysis private, neutral and non-diagnostic.",
      scaffold: ["Within the recorded period, the diary shows …", "This may reflect an interaction between … and … because …", "Confidence is limited by … and …"],
      lookFors: ["stays with recorded evidence", "uses qualified causal language", "identifies two meaningful limitations"]
    },
    {
      sectionId: "m10-s02", moduleId: 10, title: "Change and continuity explanation",
      helpAnchor: "m10-s02-help-2", activityId: "activity-m10",
      prompt: "Using responsible sources from at least two unit domains, explain how two factors interacted to shape change and continuity in Australian food practices. Qualify the conclusion to its evidence.",
      scaffold: ["My claim is …", "Evidence from … shows …, while evidence from … shows …", "The factors reinforced, limited or changed each other by …; however …"],
      lookFors: ["uses claim-evidence-reasoning", "explains interaction and continuity", "keeps cultural and historical claims source-bounded"]
    },
    {
      sectionId: "m10-s03", moduleId: 10, title: "Course synthesis and reflection",
      helpAnchor: "m10-s03-help-1", activityId: "activity-m10",
      prompt: "Make one clear claim about your learning, support it with two carefully selected examples, explain how your thinking changed and identify one specific next step. State how any saved or exported copy will be used only as your teacher directs.",
      scaffold: ["I can now explain …", "The strongest evidence is … because …", "My thinking changed when …; next I will …"],
      lookFors: ["selects rather than accumulates evidence", "explains change in thinking", "keeps export separate from submission"]
    }
  ].map(function (record) {
    return Object.freeze(Object.assign({
      id: `evidence-${record.sectionId}`,
      theoryRoute: `modules/module-${String(record.moduleId).padStart(2, "0")}.html#${record.sectionId}`,
      recordLabel: "Formative learning evidence",
      storageKey: `formative-evidence:${record.sectionId}`,
      minimumWords: 90,
      statusLanguage: "Saved on this device · not submitted",
      assessmentBoundary: "This capstone is formative learning evidence. It is not a formal assessment response, teacher-observed practical evidence or proof of submission."
    }, record));
  });

  window.FOOD_AUSTRALIA_EVIDENCE = Object.freeze({
    schemaVersion: 1,
    courseId: "yr9-food-in-australia-2026",
    summaryStorageKey: "formative-evidence-summary:v1",
    exportTitle: "Year 9 Food in Australia — formative learning evidence",
    boundary: "Saved, printed or exported evidence remains student-controlled formative work until the teacher gives a separate submission direction.",
    records: Object.freeze(records)
  });
})();
