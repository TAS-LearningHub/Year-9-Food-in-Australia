(function () {
  "use strict";

  const activities = [
    {
      id: "activity-m01", moduleId: 1, title: "Food-room decision lab", mechanic: "Scenario classification and control choice",
      sections: ["m01-s01", "m01-s02", "m01-s03"], lessonPlacement: "After the three safety explanations and before the module capstones",
      purpose: "Practise distinguishing hazards, possible harm and controls, then decide whether a situation is ready, needs teacher help or requires a stop.",
      helpRoute: "modules/module-01.html#m01-s01-help-1",
      instructions: "Classify each statement by the job it performs, then choose the safest response to the new scenario.",
      tasks: [
        { id: "parts", type: "classification", prompt: "Classify the parts of the risk pathway.", categories: [{ id: "hazard", label: "Hazard" }, { id: "harm", label: "Possible harm" }, { id: "control", label: "Control" }], items: [
          { id: "lead", text: "A damaged electrical lead", answer: "hazard", feedback: "This is a source of possible harm." },
          { id: "shock", text: "Electric shock or burn", answer: "harm", feedback: "This is what could happen if the hazard is not controlled." },
          { id: "stop", text: "Stop, keep clear and tell the teacher", answer: "control", feedback: "This changes exposure and keeps the decision within student authority." }
        ]},
        { id: "ready", type: "choice", prompt: "A clean-looking utensil was used after someone handled a phone. What is the best next decision?", choices: [
          { id: "continue", text: "Continue because no dirt is visible.", feedback: "Visible cleanliness does not prove that the contamination chain is controlled." },
          { id: "ask", text: "Pause and follow the teacher-approved hygiene process before the utensil or food is handled again.", correct: true, feedback: "This interrupts the possible transfer chain without inventing a local procedure." },
          { id: "repair", text: "Use damaged equipment to save time.", feedback: "Readiness requires stopping and seeking the teacher when equipment appears damaged." }
        ]}
      ],
      lowTech: "Print the three pathway statements as cards. Sort them, draw arrows between them and write one teacher-directed control beneath the chain."
    },
    {
      id: "activity-m02", moduleId: 2, title: "Native-food evidence detective", mechanic: "Claim sorting and fair-comparison repair",
      sections: ["m02-s01", "m02-s02", "m02-s03"], lessonPlacement: "After nutrition comparison and before the modification justification",
      purpose: "Practise keeping cultural and nutrition claims source-bounded and identifying the evidence a respectful modification needs.",
      helpRoute: "modules/module-02.html#m02-s02-help-1",
      instructions: "Sort each claim by evidence quality, then repair the comparison plan.",
      tasks: [
        { id: "claims", type: "classification", prompt: "How strong is each claim?", categories: [{ id: "supported", label: "Supported and bounded" }, { id: "incomplete", label: "Incomplete" }, { id: "hype", label: "Hype or overclaim" }], items: [
          { id: "country", text: "A named Aboriginal-authored source explains this food in its identified Country and public education context.", answer: "supported", feedback: "The creator, place and use are visible and the claim stays bounded." },
          { id: "iron", text: "Food A has more iron than Food B, but the table gives no serving basis.", answer: "incomplete", feedback: "The nutrient is named, but the comparison basis is missing." },
          { id: "healthiest", text: "This native food is the healthiest food in Australia.", answer: "hype", feedback: "Origin and one data point cannot support a total national ranking." }
        ]},
        { id: "trial", type: "choice", prompt: "Which modification trial gives the clearest evidence?", choices: [
          { id: "one", text: "Change one factor, hold important conditions steady and compare observations with the stated purpose.", correct: true, feedback: "A controlled comparison makes the effect of the intended change easier to interpret." },
          { id: "many", text: "Change several ingredients and methods together, then judge only by colour.", feedback: "Multiple changes and one observation cannot show which decision caused the result." },
          { id: "more", text: "Add as much as possible because more must be better.", feedback: "Quantity alone does not establish flavour, function or respectful use." }
        ]}
      ],
      lowTech: "Cut out the three claims and place them under Supported, Incomplete or Hype. Annotate what evidence would improve each weak claim."
    },
    {
      id: "activity-m03", moduleId: 3, title: "ICIP source-permission audit", mechanic: "Metadata audit and use-path decision",
      sections: ["m03-s01", "m03-s02", "m03-s03"], lessonPlacement: "Before students use any cultural source in their own explanation",
      purpose: "Practise checking identity, place, purpose, permission and renewal without reproducing Cultural Knowledge.",
      helpRoute: "modules/module-03.html#m03-s03-help-2",
      instructions: "Audit fictional source metadata only. Decide what is clear, then choose a responsible action.",
      tasks: [
        { id: "audit", type: "classification", prompt: "For this fictional source card, mark each detail as clear or unclear: it names an Aboriginal organisation, identifies Country, states 'public classroom viewing', asks users to link rather than copy, but gives no harvesting advice.", categories: [{ id: "clear", label: "Clear from metadata" }, { id: "unclear", label: "Not established" }], items: [
          { id: "creator", text: "Creator identity", answer: "clear", feedback: "The organisation is named." },
          { id: "place", text: "Country or place context", answer: "clear", feedback: "The card identifies Country." },
          { id: "copy", text: "Permission to copy the content", answer: "unclear", feedback: "The card says to link rather than copy." },
          { id: "harvest", text: "Permission to harvest a resource", answer: "unclear", feedback: "A public education source does not establish harvesting permission." }
        ]},
        { id: "action", type: "choice", prompt: "What is the most responsible school-use action?", choices: [
          { id: "link", text: "Link to the source, acknowledge the organisation and keep the explanation within its public purpose.", correct: true, feedback: "This follows the stated link-only condition and keeps cultural context visible." },
          { id: "copy", text: "Copy all material because a citation will create permission.", feedback: "Attribution and permission are different." },
          { id: "harvest", text: "Treat the source as permission to collect the resource.", feedback: "The source provides no harvesting authority." }
        ]}
      ],
      lowTech: "Use a blank audit grid with Creator, Country, Purpose, Reuse, Acknowledgement and Missing information. Do not copy cultural content into the grid."
    },
    {
      id: "activity-m04", moduleId: 4, title: "Historical claim surgery", mechanic: "Evidence-chain sequencing and confidence judgement",
      sections: ["m04-s01", "m04-s02", "m04-s03"], lessonPlacement: "After historical source reading and before the critical-source capstone",
      purpose: "Practise separating a source claim from inference and building a qualified access-to-nutrition chain.",
      helpRoute: "modules/module-04.html#m04-s03-help-1",
      instructions: "Put the reasoning stages into a defensible order, then choose the conclusion the evidence can support.",
      tasks: [
        { id: "chain", type: "sequence", prompt: "Build a careful historical explanation.", items: [
          { id: "source", text: "Identify creator, time, place, audience and purpose" },
          { id: "claim", text: "State exactly what the source directly supports" },
          { id: "crosscheck", text: "Cross-check with a relevant different perspective" },
          { id: "inference", text: "Explain a possible access or nutrition implication" },
          { id: "limit", text: "Qualify the conclusion and name missing evidence" }
        ], correctOrder: ["source", "claim", "crosscheck", "inference", "limit"], feedback: "Context and direct evidence come before inference; qualification belongs after the reasoning has been tested." },
        { id: "conclusion", type: "choice", prompt: "One ration record from one place lists limited supplied foods. Which conclusion is strongest?", choices: [
          { id: "bounded", text: "In this recorded context, restricted access and available supplies may have shaped diet; other places, experiences and evidence still need checking.", correct: true, feedback: "The statement uses the source while acknowledging systems, place and uncertainty." },
          { id: "all", text: "Every Community received the same food and made the same choices.", feedback: "One record cannot represent every Community or establish free choice." },
          { id: "cause", text: "One ingredient caused all later health outcomes.", feedback: "This makes an unsupported single-cause health claim." }
        ]}
      ],
      lowTech: "Write each reasoning stage on a strip, place the strips in order and add a red underline beneath the sentence that qualifies the conclusion."
    },
    {
      id: "activity-m05", moduleId: 5, title: "Change-pathway mapper", mechanic: "Constraint matching and migration influence mapping",
      sections: ["m05-s01", "m05-s02", "m05-s03"], lessonPlacement: "After the three change explanations and before the comparative capstones",
      purpose: "Practise tracing causes and mechanisms while retaining trade-offs, continuity and variation.",
      helpRoute: "modules/module-05.html#m05-s03-help-1",
      instructions: "Match each evidence clue to the analytical role it performs, then choose the strongest migration pathway.",
      tasks: [
        { id: "roles", type: "classification", prompt: "What job does each statement perform in a technology explanation?", categories: [{ id: "constraint", label: "Constraint" }, { id: "mechanism", label: "System change" }, { id: "tradeoff", label: "Trade-off" }], items: [
          { id: "distance", text: "Long distance between production and consumers", answer: "constraint", feedback: "This describes the problem the technology may address." },
          { id: "storage", text: "Longer storage changes when food can be distributed", answer: "mechanism", feedback: "This explains what changed in the system." },
          { id: "resource", text: "The process requires added energy, equipment or infrastructure", answer: "tradeoff", feedback: "This is a cost or limitation to weigh against the benefit." }
        ]},
        { id: "migration", type: "choice", prompt: "Which pathway best explains migration's influence on food habits?", choices: [
          { id: "path", text: "People and knowledge → ingredients, businesses or methods → adaptation in a specific context → wider habits, with origins acknowledged.", correct: true, feedback: "This explains mechanisms and variation rather than just naming a dish." },
          { id: "dish", text: "A migrant dish appeared and instantly became the same everywhere.", feedback: "This removes the people, pathways, adaptation and uneven uptake." },
          { id: "erase", text: "Popularity erased the food's cultural history.", feedback: "Wider use does not erase cultural origins." }
        ]}
      ],
      lowTech: "Draw a four-box pathway from people and knowledge to wider food habits. Add one trade-off or limitation and one continuity/adaptation note."
    },
    {
      id: "activity-m06", moduleId: 6, title: "Culture-research repair workshop", mechanic: "Question repair and sensory-method matching",
      sections: ["m06-s01", "m06-s02", "m06-s03"], lessonPlacement: "Before the independent cultural food investigation",
      purpose: "Practise narrowing cultural research and connecting methods with observable food purposes.",
      helpRoute: "modules/module-06.html#m06-s02-help-1",
      instructions: "Repair the broad research question, then match each claim with the evidence it needs.",
      tasks: [
        { id: "question", type: "choice", prompt: "Which question is best bounded for a short investigation?", choices: [
          { id: "bounded", text: "How do credible sources describe one meal practice in a named place and time, and what variation do they show?", correct: true, feedback: "The question is researchable, contextual and open to variation." },
          { id: "whole", text: "What does this entire culture eat?", feedback: "This assumes a huge and diverse group has one food pattern." },
          { id: "mate", text: "What can one classmate tell us about everyone in their culture?", feedback: "No student should be expected to represent an entire culture." }
        ]},
        { id: "method", type: "classification", prompt: "Match each statement to its evidence role.", categories: [{ id: "purpose", label: "Desired result" }, { id: "mechanism", label: "Method reasoning" }, { id: "context", label: "Cultural or practical context" }], items: [
          { id: "texture", text: "A crisp surface and moist centre", answer: "purpose", feedback: "This is an observable sensory target." },
          { id: "heat", text: "The heat-transfer pattern is predicted to change surface moisture and browning", answer: "mechanism", feedback: "This links method to an observable effect." },
          { id: "meaning", text: "The method has particular equipment, tradition and meaning in the sourced context", answer: "context", feedback: "Method meaning cannot be separated from cultural and practical context." }
        ]}
      ],
      lowTech: "Rewrite one broad question by adding a place, time and food context. Then draw arrows from Desired result to Method reasoning to Context."
    },
    {
      id: "activity-m07", moduleId: 7, title: "Fusion rationale studio", mechanic: "Rationale ranking and annotation labelling",
      sections: ["m07-s01", "m07-s02", "m07-s03"], lessonPlacement: "During concept development, before the written design defence",
      purpose: "Practise ranking design rationales and turning labels into evidence-aware annotations.",
      helpRoute: "modules/module-07.html#m07-s03-help-1",
      instructions: "Rank the rationales from strongest to weakest, then choose the annotation that communicates a decision and its uncertainty.",
      tasks: [
        { id: "rank", type: "sequence", prompt: "Rank these rationales from strongest to weakest.", items: [
          { id: "strong", text: "Research-informed combination for a named user and purpose, with functional reasons and cultural context" },
          { id: "middle", text: "A combination chosen for one stated sensory contrast but with cultural research still needed" },
          { id: "weak", text: "Random mixture described as authentic because it looks unusual" }
        ], correctOrder: ["strong", "middle", "weak"], feedback: "A strong rationale combines user, purpose, evidence, function and cultural context; an honest gap is stronger than an unsupported authenticity claim." },
        { id: "annotation", type: "choice", prompt: "Which annotation is most useful?", choices: [
          { id: "reason", text: "This feature is intended to add contrast for the named user; source evidence supports the idea, while allergen suitability and equipment access need teacher confirmation.", correct: true, feedback: "It identifies the feature, purpose, evidence and unresolved practical controls." },
          { id: "label", text: "Topping.", feedback: "A label names a part but does not explain what it contributes or why." },
          { id: "approved", text: "This drawing proves the practical is safe and approved.", feedback: "A concept cannot provide teacher approval or practical evidence." }
        ]}
      ],
      lowTech: "Number the three rationale cards from 1 to 3. Rewrite the weakest using User, Purpose, Evidence, Contribution and Confirm headings."
    },
    {
      id: "activity-m08", moduleId: 8, title: "Process-change investigator", mechanic: "Change classification and method decision",
      sections: ["m08-s01", "m08-s02", "m08-s03"], lessonPlacement: "After process explanation and before the method recommendation",
      purpose: "Practise connecting processing observations with mechanisms and selecting methods against a stated purpose.",
      helpRoute: "modules/module-08.html#m08-s02-help-2",
      instructions: "Classify the evidence, then choose the recommendation that weighs purpose and trade-offs.",
      tasks: [
        { id: "changes", type: "classification", prompt: "Classify the strongest interpretation of each fictional observation.", categories: [{ id: "physical", label: "Mainly physical" }, { id: "chemical", label: "Mainly chemical" }, { id: "combined", label: "Possible combination" }], items: [
          { id: "cut", text: "A food is cut into smaller pieces with no new substances described", answer: "physical", feedback: "Size and form changed." },
          { id: "aroma", text: "New browned colour and aroma develop during heating", answer: "chemical", feedback: "New colour and aroma can indicate chemical reactions." },
          { id: "bake", text: "Moisture changes while structure and browned compounds develop", answer: "combined", feedback: "Many food processes involve physical and chemical changes together." }
        ]},
        { id: "method", type: "choice", prompt: "Which method recommendation is strongest?", choices: [
          { id: "criteria", text: "Choose against the product purpose and common criteria, explain predicted effects and a trade-off, then confirm equipment and local controls with the teacher.", correct: true, feedback: "This makes a design recommendation without pretending it is practical approval." },
          { id: "fast", text: "Choose the fastest method in every situation.", feedback: "Speed may not meet the intended sensory result or other constraints." },
          { id: "new", text: "Choose the newest technology because it must be better.", feedback: "Newness does not settle benefits, trade-offs or access." }
        ]}
      ],
      lowTech: "Use three columns—Physical, Chemical, Both—to sort observation cards. Beneath them, compare two methods against Purpose, Effect, Constraint and Trade-off."
    },
    {
      id: "activity-m09", moduleId: 9, title: "Advertisement evidence decoder", mechanic: "Feature labelling and ethical claim repair",
      sections: ["m09-s01", "m09-s02", "m09-s03"], lessonPlacement: "After advertising analysis and before concept-message planning",
      purpose: "Practise separating observation, inference and evidence, then repair an unsupported persuasive claim.",
      helpRoute: "modules/module-09.html#m09-s02-help-1",
      instructions: "Label what the analysis is doing, then choose the ethical revision.",
      tasks: [
        { id: "labels", type: "classification", prompt: "Classify each statement about a fictional advertisement.", categories: [{ id: "observation", label: "Observation" }, { id: "inference", label: "Inference" }, { id: "evidence", label: "Evidence needed" }], items: [
          { id: "colour", text: "The headline uses large orange lettering", answer: "observation", feedback: "Another viewer could directly see this feature." },
          { id: "effect", text: "The colour may create energy for the intended youth audience", answer: "inference", feedback: "This interprets a possible audience effect." },
          { id: "claim", text: "Independent information would be needed to verify the product's factual performance claim", answer: "evidence", feedback: "Persuasive design does not prove a factual claim." }
        ]},
        { id: "repair", type: "choice", prompt: "A concept says 'guaranteed to make everyone healthier'. Which revision is most ethical?", choices: [
          { id: "honest", text: "Replace the health guarantee with an accurate, supportable product feature and keep the creative call to action.", correct: true, feedback: "The message can remain persuasive while its factual wording stays inside the evidence." },
          { id: "tiny", text: "Keep the guarantee and hide 'results may vary' in tiny text.", feedback: "A small disclaimer does not repair a misleading main impression." },
          { id: "image", text: "Use a generated before-and-after image as proof.", feedback: "A generated image is not evidence of a real result." }
        ]}
      ],
      lowTech: "Annotate a teacher-supplied advertisement using O for observation, I for inference and E? for evidence still needed. Rewrite one overclaim beneath it."
    },
    {
      id: "activity-m10", moduleId: 10, title: "Evidence triage and synthesis", mechanic: "Evidence triage and reasoning sequence",
      sections: ["m10-s01", "m10-s02", "m10-s03"], lessonPlacement: "Before the final course synthesis",
      purpose: "Practise selecting evidence for a purpose, qualifying diary conclusions and assembling claim–evidence–reasoning–qualification.",
      helpRoute: "modules/module-10.html#m10-s03-help-1",
      instructions: "Triage each evidence example, then order the parts of a responsible synthesis.",
      tasks: [
        { id: "triage", type: "classification", prompt: "What should happen to each possible evidence item?", categories: [{ id: "keep", label: "Keep" }, { id: "improve", label: "Improve" }, { id: "context", label: "Contextualise" }, { id: "leave", label: "Leave out" }], items: [
          { id: "reasoned", text: "A paragraph with a clear claim, attributed evidence and reasoning", answer: "keep", feedback: "It already demonstrates the intended learning." },
          { id: "vague", text: "A reflection that only says 'I did well'", answer: "improve", feedback: "Add evidence, what changed and a specific next step." },
          { id: "result", text: "An activity result with no explanation of what it demonstrates", answer: "context", feedback: "Add its purpose and what the result shows." },
          { id: "duplicate", text: "A decorative duplicate that adds no new evidence", answer: "leave", feedback: "More pages are not automatically stronger evidence." }
        ]},
        { id: "synthesis", type: "sequence", prompt: "Order the parts of an evidence-based synthesis.", items: [
          { id: "claim", text: "Make a clear, bounded claim" },
          { id: "evidence", text: "Select and attribute relevant evidence" },
          { id: "reason", text: "Explain how the evidence supports the claim and how factors interact" },
          { id: "qualify", text: "Qualify the conclusion and identify limitations" },
          { id: "reflect", text: "Explain how thinking changed and name a specific next step" }
        ], correctOrder: ["claim", "evidence", "reason", "qualify", "reflect"], feedback: "The sequence keeps evidence and reasoning connected before qualification and reflection." }
      ],
      lowTech: "Sort four evidence cards into Keep, Improve, Contextualise and Leave out. Then arrange the five synthesis headings and draft one sentence under each."
    }
  ].map(function (activity) {
    return Object.freeze(Object.assign({
      route: `activities.html#${activity.id}`,
      storageKey: `formative-activity:${activity.id}`,
      recordLabel: "Formative practice only",
      feedbackTiming: "Feedback appears after Check activity.",
      resetBoundary: "Reset affects only this activity on this browser.",
      evidenceDestination: `folio.html#folio-m${String(activity.moduleId).padStart(2, "0")}`
    }, activity));
  });

  window.FOOD_AUSTRALIA_ACTIVITIES = Object.freeze({
    schemaVersion: 1,
    courseId: "yr9-food-in-australia-2026",
    bankRoute: "activities.html",
    recordBoundary: "Formative practice only. Saved results are not formal assessment, folio submission, teacher-observed practical evidence or proof of achievement.",
    activities: Object.freeze(activities)
  });
})();
