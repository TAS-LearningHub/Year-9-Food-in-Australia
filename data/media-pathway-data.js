(function () {
  "use strict";

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.keys(value).forEach(function (key) { deepFreeze(value[key]); });
    return Object.freeze(value);
  }

  window.FOOD_AUSTRALIA_MEDIA_PATHWAYS = deepFreeze({
    schemaVersion: "1.0.0",
    sourceBoundary: "source-map-v1.1",
    inheritedMediaCheckedDate: "2026-08-26",
    entries: [
      {
        moduleId: 1,
        sectionId: "m01-s01",
        sectionTitle: "From hazard to control",
        sectionRoute: "modules/module-01.html#m01-s01",
        evidenceRoute: "modules/module-01.html#learning-m01-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Hazard-to-control decision lab",
        channel: "Course theory and diagram",
        duration: "8–10 minutes",
        purpose: "Practise separating a hazard, possible harm, risk judgement and control before choosing an action.",
        before: "Write hazard, possible harm, risk and control in the order you expect a sound safety decision to follow; leave room to revise the sequence.",
        during: "Trace the four arrows in the decision-path diagram and annotate one fictional food-room situation without adding a local rule or risk rating.",
        after: "Justify the most proportionate control for the scenario and explain why a vague warning would leave the risk insufficiently addressed.",
        alternative: "Read ‘From hazard to control’, inspect the four-step diagram, sort one scenario into hazard → harm → risk → control, then complete the ten questions and written response.",
        notes: "Course-authored equivalent. Local procedures and teacher direction control practical action; the pathway does not authorise equipment use or repair.",
        visualAssets: [
          { assetId: "m01-s01-hazard-control-pathway", path: "assets/diagrams/m01-s01-hazard-control-pathway.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section summary and vocabulary, keeping hazard, risk and control as separate ideas.",
          "Use the diagram to label the source of harm, the possible consequence and the point where a control changes the situation.",
          "Test the proposed control against a second fictional scenario and mark any decision that would require the teacher.",
          "Open the exact learning activity, answer all ten checks and save the written justification on this device."
        ]
      },
      {
        moduleId: 1,
        sectionId: "m01-s02",
        sectionTitle: "Hygiene breaks the contamination chain",
        sectionRoute: "modules/module-01.html#m01-s02",
        evidenceRoute: "modules/module-01.html#learning-m01-s02",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "RUeVNCEDbCo",
        title: "Four Golden Rules of food safety",
        channel: "NSWFoodAuthority",
        duration: "1:46",
        purpose: "Notice how broad food-safety advice can be translated into specific contamination controls before practical work.",
        before: "Predict four actions a food-safety authority is likely to prioritise.",
        during: "Record each rule, the hazard it addresses and one specific control it suggests.",
        after: "Choose the rule most likely to break a contamination chain and justify your choice.",
        alternative: "Revisit ‘Hygiene breaks the contamination chain’. Build a four-row table with the headings source, transfer route, vulnerable food and control, then complete one realistic example for each row.",
        notes: "Short official NSW overview. Your teacher’s local food-room procedure still controls practical action.",
        visualAssets: [
          { assetId: "m01-s02-safe-separation", path: "assets/photos/m01-s02-safe-separation.png" },
          { assetId: "m01-s02-contamination-chain-controls", path: "assets/diagrams/m01-s02-contamination-chain-controls.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section explanation and identify the possible contamination source in a realistic example.",
          "Follow the transfer route through hands, tools or surfaces using the photograph and chain-control diagram.",
          "Place a specific separation, hand-hygiene, cleaning or approved sanitising control at each useful interruption point.",
          "Complete the section questions and write which control point would have the strongest preventive effect."
        ]
      },
      {
        moduleId: 1,
        sectionId: "m01-s03",
        sectionTitle: "Ready before you begin",
        sectionRoute: "modules/module-01.html#m01-s03",
        evidenceRoute: "modules/module-01.html#learning-m01-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Readiness evidence scan",
        channel: "Course theory and photograph",
        duration: "8–10 minutes",
        purpose: "Use visible evidence and the Read → Check → Ask → Set up routine to make a calm readiness decision.",
        before: "List three signs that could show a workspace is ready and two situations that should trigger a question or stop before food work begins.",
        during: "Scan the readiness photograph from left to right and sort each visible clue under Read, Check, Ask or Set up without assuming that appearance proves equipment is safe.",
        after: "Explain how one readiness decision could protect a person, the food and the wider workspace at the same time.",
        alternative: "Read ‘Ready before you begin’, complete a visual readiness scan, classify each clue as ready, ask teacher or stop, then finish the section checks and written explanation.",
        notes: "Course-authored equivalent. A checklist supports memory but does not replace instruction, permission or teacher-approved local procedures.",
        visualAssets: [
          { assetId: "m01-s03-practical-readiness", path: "assets/photos/m01-s03-practical-readiness.png" }
        ],
        nonVideoWorkflow: [
          "Read the authorised-readiness explanation and locate each point where uncertainty changes the next action.",
          "Inspect the photograph for evidence about hands, clothing, bench organisation, method and visible equipment condition.",
          "Create a three-column decision record: ready evidence, ask-teacher evidence and stop evidence.",
          "Use that record to answer the ten checks and save a response explaining the value of a staged start."
        ]
      },
      {
        moduleId: 2,
        sectionId: "m02-s01",
        sectionTitle: "Country, identity and respectful language",
        sectionRoute: "modules/module-02.html#m02-s01",
        evidenceRoute: "modules/module-02.html#learning-m02-s01",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "WQ8NiPKTavQ",
        title: "Bush Tucker Garden - Behind the News",
        channel: "Behind the News",
        duration: "3:10",
        purpose: "Identify who is speaking, where the food knowledge is located and how research or cultivation can be described without treating native foods as ownerless ingredients.",
        before: "What would make a story about native foods respectful, specific and evidence-based?",
        during: "Note the people, place, knowledge source and purpose described in the report.",
        after: "Write one careful sentence that names the source and place, then one question that would need local confirmation.",
        alternative: "Use ‘Country, identity and respectful language’. Create a source-and-place checklist, then apply it to one native-food claim from a teacher-approved source.",
        notes: "Public ABC education report. Do not turn the examples into permission to collect, prepare or use an ingredient.",
        visualAssets: [
          { assetId: "m02-s01-place-specific-knowledge", path: "assets/diagrams/m02-s01-place-specific-knowledge.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and identify the words that keep a food-knowledge statement connected to a named source and place.",
          "Use the diagram to check source identity, Country or place, public purpose, permission and uncertainty.",
          "Revise one broad fictional statement so it no longer treats Aboriginal and Torres Strait Islander food knowledge as a single national list.",
          "Complete the learning activity and save a source-bounded explanation that records what still needs local confirmation."
        ]
      },
      {
        moduleId: 2,
        sectionId: "m02-s02",
        sectionTitle: "Compare nutrition evidence fairly",
        sectionRoute: "modules/module-02.html#m02-s02",
        evidenceRoute: "modules/module-02.html#learning-m02-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Fair-comparison evidence audit",
        channel: "Course theory and photograph",
        duration: "9–11 minutes",
        purpose: "Check that a nutrition comparison uses the same nutrient, basis, units and preparation state before accepting a claim.",
        before: "Name the information you would need before deciding that one food contains more of a nutrient than another.",
        during: "Audit the comparison scene for food identity, matching basis, units, preparation state and missing evidence; mark every conclusion the image alone cannot support.",
        after: "Write one cautious nutrition claim and attach a limitation that prevents it becoming a claim about overall health value.",
        alternative: "Read ‘Compare nutrition evidence fairly’, apply the six-part comparison checklist to supplied or fictional data, separate support from hype, then complete the section evidence.",
        notes: "Course-authored equivalent. No nutrient values, health rankings or ‘superfood’ claims should be invented from the visual.",
        visualAssets: [
          { assetId: "m02-s02-fair-comparison", path: "assets/photos/m02-s02-fair-comparison.png" }
        ],
        nonVideoWorkflow: [
          "Read the explanation of a fair comparison and list the identity, unit, basis and preparation checks.",
          "Inspect the photograph only for what is directly visible, then pair it with teacher-supplied or fictional comparison data if available.",
          "Sort proposed claims into supported, incomplete or hype and write the missing evidence beside each incomplete claim.",
          "Answer the ten questions and save one evidence-based claim followed by an honest limitation."
        ]
      },
      {
        moduleId: 2,
        sectionId: "m02-s03",
        sectionTitle: "Modify with a reason",
        sectionRoute: "modules/module-02.html#m02-s03",
        evidenceRoute: "modules/module-02.html#learning-m02-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "One-change design loop",
        channel: "Course theory, photograph and diagram",
        duration: "10–12 minutes",
        purpose: "Connect a proposed ingredient change to a stated purpose, evidence need, functional prediction and fair evaluation.",
        before: "State one product quality you might want to change and explain why changing several variables at once would weaken the evidence.",
        during: "Follow the design-loop arrows and label each statement as purpose, source check, prediction, fair trial evidence or evaluation rather than treating a prediction as a result.",
        after: "Defend one proposed modification by naming its purpose, predicted effect and two pieces of evidence needed before any teacher-approved trial.",
        alternative: "Read ‘Modify with a reason’, trace purpose → source check → functional prediction → fair trial → evaluation, inspect the controlled-trial image, then submit the learning evidence.",
        notes: "Course-authored equivalent. It supplies design reasoning, not a recipe, quantity, harvesting direction, practical permission or cultural endorsement.",
        visualAssets: [
          { assetId: "m02-s03-controlled-trial", path: "assets/photos/m02-s03-controlled-trial.png" },
          { assetId: "m02-s03-modification-design-loop", path: "assets/diagrams/m02-s03-modification-design-loop.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and write a single, testable purpose for the imagined modification.",
          "Use the diagram to separate evidence already available from effects that are only predicted.",
          "Study the controlled-trial photograph and identify what would need to stay comparable for a fair evaluation.",
          "Complete the checks and save a source-safe proposal that flags every practical detail for teacher confirmation."
        ]
      },
      {
        moduleId: 3,
        sectionId: "m03-s01",
        sectionTitle: "Cultural Knowledge is living, local and owned",
        sectionRoute: "modules/module-03.html#m03-s01",
        evidenceRoute: "modules/module-03.html#learning-m03-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Authority-and-context relationship map",
        channel: "Course theory and diagram",
        duration: "9–11 minutes",
        purpose: "Recognise that responsible use of Cultural Knowledge depends on relationships among people, Country, authority, permission and purpose.",
        before: "Consider a public webpage containing cultural information: list what access to the page tells you and what it does not tell you about authority or reuse.",
        during: "Follow every connection in the knowledge-permission web and identify how removing one link changes whether a school explanation is responsible.",
        after: "Make a use, pause, link-only or find-another-source decision for a fictional source card and justify it without interpreting cultural content.",
        alternative: "Read ‘Cultural Knowledge is living, local and owned’, analyse the relationship web, audit a fictional source for identity, place, authority and purpose, then record a bounded source decision.",
        notes: "Course-authored equivalent. It uses neutral metadata and does not reproduce restricted knowledge, cultural motifs, invented Nation boundaries or implied permission.",
        visualAssets: [
          { assetId: "m03-s01-knowledge-permission-web", path: "assets/diagrams/m03-s01-knowledge-permission-web.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section with attention to the difference between information being visible and a person having authority to share or reuse it.",
          "Use the relationship web to annotate people, place, purpose, authority and permission around one fictional source record.",
          "Identify the missing relationship that creates the greatest uncertainty and choose a responsible next step.",
          "Finish the knowledge checks and save an explanation that keeps Cultural Knowledge living, local and owned."
        ]
      },
      {
        moduleId: 3,
        sectionId: "m03-s02",
        sectionTitle: "Seasons, cycles and caring for resources",
        sectionRoute: "modules/module-03.html#m03-s02",
        evidenceRoute: "modules/module-03.html#learning-m03-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Observation-to-renewal evidence cycle",
        channel: "Course theory and photograph",
        duration: "9–11 minutes",
        purpose: "Distinguish a visible environmental observation from a place-specific knowledge claim, then connect timing, permission, care and renewal.",
        before: "Write one environmental feature a photograph might show and one seasonal or cultural conclusion that the same photograph could not prove by itself.",
        during: "Inspect the seasonal-observation image for direct evidence, label every inference, and place only supported ideas into observation → decision → care → renewal.",
        after: "Explain why availability alone is not enough for a responsible resource decision and name the source or permission still required.",
        alternative: "Read ‘Seasons, cycles and caring for resources’, separate observation from inference in the image, build a general care cycle and complete the evidence response without inventing local knowledge.",
        notes: "Course-authored equivalent. The pathway is a general learning model, not an Aboriginal cultural calendar or a harvesting instruction.",
        visualAssets: [
          { assetId: "m03-s02-seasonal-observation", path: "assets/photos/m03-s02-seasonal-observation.png" }
        ],
        nonVideoWorkflow: [
          "Read the theory and highlight each reason seasonal knowledge depends on particular people, place, timing and responsibility.",
          "List only what is directly observable in the photograph before adding any cautious inference.",
          "Construct a general cycle that includes a permission checkpoint and a return from renewal to future observation.",
          "Complete the section activity and save an answer that states what evidence remains unknown."
        ]
      },
      {
        moduleId: 3,
        sectionId: "m03-s03",
        sectionTitle: "Research, permission and ICIP",
        sectionRoute: "modules/module-03.html#m03-s03",
        evidenceRoute: "modules/module-03.html#learning-m03-s03",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "4Is8g8PQ7YY",
        title: "What Is Indigenous Cultural & Intellectual Property?",
        channel: "Arts Law Centre of Australia",
        duration: "3:03",
        purpose: "Distinguish access, attribution and permission when researching Aboriginal and Torres Strait Islander Cultural Knowledge.",
        before: "Does finding material online mean you may copy or adapt it? Explain your starting view.",
        during: "Listen for examples of knowledge, cultural expression, ownership and responsibility.",
        after: "Explain why attribution can be necessary without being sufficient, then apply the idea to a food-research scenario.",
        alternative: "Use ‘Research, permission and ICIP’. Draw a decision path from find → check ownership → check permission → attribute → decide whether to use.",
        notes: "General legal and cultural orientation only. Local Community, AECG or Knowledge Holder guidance remains essential.",
        visualAssets: [
          { assetId: "m03-s03-icip-source-check", path: "assets/diagrams/m03-s03-icip-source-check.svg" }
        ],
        nonVideoWorkflow: [
          "Read the ICIP section and identify the separate jobs of access, authority, permission, attribution and context.",
          "Trace a fictional public source through the diagram from identification to the pause-if-unclear decision.",
          "Record whether to use, link, pause or replace the source and state the evidence behind that choice.",
          "Complete the questions and save a food-research example that does not treat attribution as automatic permission."
        ]
      },
      {
        moduleId: 4,
        sectionId: "m04-s01",
        sectionTitle: "Roles, knowledge and responsibility",
        sectionRoute: "modules/module-04.html#m04-s01",
        evidenceRoute: "modules/module-04.html#learning-m04-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Context-bound claim surgery",
        channel: "Course theory and written evidence",
        duration: "10–12 minutes",
        purpose: "Repair broad statements about food-related roles by adding source, place, time, perspective and evidence limits.",
        before: "Underline the words in a fictional role claim that make it sound universal, timeless or certain.",
        during: "Read the section closely and rebuild the claim through five columns: original wording, context, supporting evidence, missing perspective and justified limit.",
        after: "Present the revised claim beside one sentence explaining why the narrower version is more responsible and historically useful.",
        alternative: "Use the complete theory pathway: read the explanation and worked example, perform claim surgery on a fictional statement, answer the checks and save a revised evidence-bound claim.",
        notes: "Course-authored equivalent with no visual asset. It avoids invented cultural roles, gender assumptions and universal claims about Aboriginal and Torres Strait Islander Peoples.",
        visualAssets: [],
        nonVideoWorkflow: [
          "Read ‘Roles, knowledge and responsibility’ and list the questions needed before a role description can be treated as evidence.",
          "Annotate a fictional claim for universal language, unnamed place or time, absent source and missing perspective.",
          "Rewrite it so the source, context, degree of confidence and evidence limit are visible.",
          "Open the exact learning activity, complete all ten questions and save the revised claim with its justification."
        ]
      },
      {
        moduleId: 4,
        sectionId: "m04-s02",
        sectionTitle: "Introduced rations and nutrition",
        sectionRoute: "modules/module-04.html#m04-s02",
        evidenceRoute: "modules/module-04.html#learning-m04-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Access-to-nutrition pathway builder",
        channel: "Course theory and diagram",
        duration: "9–11 minutes",
        purpose: "Build a cautious causal explanation from imposed changes in access to possible nutrition implications without blaming individuals or universalising experience.",
        before: "Describe the difference between explaining a system constraint and blaming a person affected by that constraint.",
        during: "Trace two routes through the interacting food-system diagram and label each link as directly supported, possible or still requiring another source.",
        after: "Write one evidence-based access → availability → nutrition implication chain and attach a place, time or source limitation.",
        alternative: "Read ‘Introduced rations and nutrition’, use the system-change diagram to build and qualify a causal chain, then complete the section checks and written evidence.",
        notes: "Course-authored equivalent. It avoids universal ration lists, deficit framing, disease claims and invented statistics.",
        visualAssets: [
          { assetId: "m04-s02-interacting-food-system-changes", path: "assets/diagrams/m04-s02-interacting-food-system-changes.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and separate evidence about imposed food access from conclusions about individual choice or health.",
          "Follow two different arrow sequences in the diagram, recording what evidence would be needed at each connection.",
          "Add cautious terms where the relationship is possible rather than demonstrated for every Community.",
          "Answer the learning questions and save one supported implication plus a clear limitation."
        ]
      },
      {
        moduleId: 4,
        sectionId: "m04-s03",
        sectionTitle: "Read historical food sources critically",
        sectionRoute: "modules/module-04.html#m04-s03",
        evidenceRoute: "modules/module-04.html#learning-m04-s03",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "Azm-x5T12Ck",
        title: "Life on the Mission",
        channel: "Victorian Collections",
        duration: "6:21",
        purpose: "Listen to Aboriginal Elders’ memories, then separate lived testimony from your own inference about food access and daily life.",
        before: "What can a first-person memory reveal that a policy document may not?",
        during: "Record one direct observation, one context clue and one question the clip does not answer.",
        after: "Write a two-sentence source analysis: what this testimony supports and what it cannot establish on its own.",
        alternative: "Use ‘Read historical sources critically’. Apply the origin–purpose–evidence–limits frame to one teacher-provided historical source.",
        notes: "Contains Aboriginal Elders’ memories. Teacher preview and local cultural protocols apply; Aboriginal and Torres Strait Islander viewers should be advised that historical material may include people who have died.",
        visualAssets: [
          { assetId: "m04-s03-source-analysis-workspace", path: "assets/photos/m04-s03-source-analysis-workspace.png" }
        ],
        nonVideoWorkflow: [
          "Read the source-analysis section and identify origin, context, purpose, evidence and limitation as separate checks.",
          "Inspect the fictional workspace and distinguish what a source directly shows from an inference added by the researcher.",
          "Cross-check one claim against a second teacher-provided source or record why corroboration is not yet available.",
          "Complete the questions and save a two-sentence analysis stating both support and limit."
        ]
      },
      {
        moduleId: 5,
        sectionId: "m05-s01",
        sectionTitle: "Colonisation changed food access",
        sectionRoute: "modules/module-05.html#m05-s01",
        evidenceRoute: "modules/module-05.html#learning-m05-s01",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "pNb1ZiWEXdU",
        title: "Aboriginal food sources",
        channel: "Museums of History NSW",
        duration: "1:22",
        purpose: "Connect land access and colonisation with changes to food access, while questioning the scope and perspective of a short museum explanation.",
        before: "Predict one way restricted access to Country could affect a food system.",
        during: "Record the causal link the clip makes and the evidence or examples used.",
        after: "State the link in your own words, then identify one voice or detail needed for a fuller account.",
        alternative: "Use ‘Colonisation changed food access’. Build a cause → immediate change → longer effect chain and add one source-limit question.",
        notes: "Short museum source. Treat it as one account, not a complete or pan-Aboriginal history.",
        visualAssets: [
          { assetId: "m05-s01-disruption-continuity-pathways", path: "assets/diagrams/m05-s01-disruption-continuity-pathways.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and identify a specific colonial condition rather than treating colonisation as one undifferentiated event.",
          "Use the diagram to trace disruption alongside evidence of maintained, adapted or revitalised knowledge and practice.",
          "Add place, time and source qualifiers to the causal chain and record one perspective needed for a fuller account.",
          "Complete the checks and save a balanced explanation containing both change and continuity."
        ]
      },
      {
        moduleId: 5,
        sectionId: "m05-s02",
        sectionTitle: "Settler food constraints and technology",
        sectionRoute: "modules/module-05.html#m05-s02",
        evidenceRoute: "modules/module-05.html#learning-m05-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Technology-to-constraint comparison",
        channel: "Course theory and photograph",
        duration: "9–11 minutes",
        purpose: "Compare how historical food technologies could address particular supply, preservation, transport or storage constraints while creating trade-offs.",
        before: "Choose one food-access constraint and predict what a useful technology would need to change in the wider system.",
        during: "Inspect the food-access technologies image and connect each visible format to a possible constraint, marking dates, adoption and effectiveness as unknown unless a supplied source establishes them.",
        after: "Compare two technologies in one named historical context and justify which better addresses the stated constraint while acknowledging a trade-off.",
        alternative: "Read ‘Settler food constraints and technology’, map supply → processing or preservation → transport → storage → meal, compare two source-backed technologies and complete the section evidence.",
        notes: "Course-authored equivalent. The photograph does not establish dates, menus, quantities, safety or universal adoption, and the historical frame must recognise Aboriginal displacement.",
        visualAssets: [
          { assetId: "m05-s02-food-access-technologies", path: "assets/photos/m05-s02-food-access-technologies.png" }
        ],
        nonVideoWorkflow: [
          "Read the system explanation and define the particular access constraint before evaluating a technology.",
          "Use the image for observable form only, then pair each interpretation with evidence from a teacher-approved historical source.",
          "Build two constraint → technology → system effect → trade-off chains in the same context.",
          "Answer the checks and save a comparison that distinguishes evidence from inference."
        ]
      },
      {
        moduleId: 5,
        sectionId: "m05-s03",
        sectionTitle: "Migration changed Australian food habits",
        sectionRoute: "modules/module-05.html#m05-s03",
        evidenceRoute: "modules/module-05.html#learning-m05-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Migration influence mechanism map",
        channel: "Course theory and photograph",
        duration: "10–12 minutes",
        purpose: "Explain how people, knowledge, ingredients, businesses and adaptation can interact in one documented change to Australian food habits.",
        before: "Rank people, knowledge, ingredients, businesses and adaptation by how directly you think each can influence wider food habits, ready to revise the ranking.",
        during: "Use the ingredient-diversity image only for observable variety, then connect a teacher-approved community story to three mechanisms without assigning culture from appearance.",
        after: "Explain three connected mechanisms from that specific story and state why they cannot represent every migration experience.",
        alternative: "Read ‘Migration changed Australian food habits’, combine the people-and-system pathway with one credible community source, construct an influence map and complete the written evidence.",
        notes: "Course-authored equivalent. It avoids stereotypes, unnamed national generalisations and unsupported claims about the cultural origin of photographed foods.",
        visualAssets: [
          { assetId: "m05-s03-contemporary-ingredient-diversity", path: "assets/photos/m05-s03-contemporary-ingredient-diversity.png" }
        ],
        nonVideoWorkflow: [
          "Read the section and distinguish the mechanisms of carrying knowledge, gaining ingredients, creating businesses and adapting over time.",
          "Observe diversity in the photograph without inferring ownership, authenticity or a whole community’s habits.",
          "Map evidence from one named, teacher-approved story through at least three mechanisms to a bounded change in food habits.",
          "Complete the questions and save an explanation with a clear scope limitation."
        ]
      },
      {
        moduleId: 6,
        sectionId: "m06-s01",
        sectionTitle: "Contemporary Australian cuisine keeps changing",
        sectionRoute: "modules/module-06.html#m06-s01",
        evidenceRoute: "modules/module-06.html#learning-m06-s01",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "TKQUAxmlOpU",
        title: "The evolution of Chinese Australian cuisine | Belongings | ABC Australia",
        channel: "ABC Australia",
        duration: "6:22",
        purpose: "Trace how migration, ingredients, businesses and adaptation interact over time in one specific Australian food story.",
        before: "List two forces that might change a cuisine after migration.",
        during: "Capture one example each of continuity, adaptation and exchange.",
        after: "Explain why one community story can illuminate Australian cuisine without representing every Chinese Australian experience.",
        alternative: "Use ‘Contemporary Australian cuisine keeps changing’. Make a continuity–change–cause organiser for one teacher-approved community food story.",
        notes: "A specific Chinese Australian account. Avoid turning one story into a stereotype or a claim about all families or regions.",
        visualAssets: [
          { assetId: "m06-contemporary-food-network", path: "assets/photos/m06-contemporary-food-network.png" },
          { assetId: "m06-influence-network", path: "assets/diagrams/m06-influence-network.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and name the cultural, regional, technological, social, economic and environmental influences in its changing-system model.",
          "Use the photograph for observable coexistence and the network diagram for interactions, not for declaring a single national dish.",
          "Build a continuity–change–cause organiser from one documented community story and identify the limits of its scope.",
          "Complete the learning evidence with a claim that several influences can interact over time."
        ]
      },
      {
        moduleId: 6,
        sectionId: "m06-s02",
        sectionTitle: "Research one food culture without stereotyping",
        sectionRoute: "modules/module-06.html#m06-s02",
        evidenceRoute: "modules/module-06.html#learning-m06-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Research-funnel stereotype check",
        channel: "Course theory and diagram",
        duration: "10–12 minutes",
        purpose: "Turn a broad cultural assumption into a focused, answerable question supported by varied sources and a limited conclusion.",
        before: "Rewrite the phrase ‘people from this culture eat…’ as a research question that specifies place, time, people or setting.",
        during: "Move the question through the research funnel, recording how each source narrows, complicates or contradicts the emerging explanation.",
        after: "Write a bounded conclusion that names the evidence used, one variation it reveals and one claim the research cannot support.",
        alternative: "Read ‘Research one food culture without stereotyping’, use the funnel to narrow a question and cross-check varied sources, then answer the section questions and save the limited conclusion.",
        notes: "Course-authored equivalent. Research must use credible, teacher-approved sources and must not turn one family, dish, region or source into a whole-culture rule.",
        visualAssets: [
          { assetId: "m06-research-funnel", path: "assets/diagrams/m06-research-funnel.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and identify why country-wide or culture-wide food claims usually need narrowing.",
          "Use the funnel to specify the group, place, time, practice and research purpose before gathering evidence.",
          "Compare at least two credible sources and record agreement, variation, contradiction and missing voice.",
          "Complete the ten checks and save a conclusion whose scope is no broader than the evidence."
        ]
      },
      {
        moduleId: 6,
        sectionId: "m06-s03",
        sectionTitle: "Ingredients, flavours and methods work together",
        sectionRoute: "modules/module-06.html#m06-s03",
        evidenceRoute: "modules/module-06.html#learning-m06-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Method-to-property observation studio",
        channel: "Course theory and photograph",
        duration: "9–11 minutes",
        purpose: "Link a preparation or cooking method to heat transfer, observable property changes and a stated product purpose without confusing observation with prediction.",
        before: "Sort texture, aroma, colour and moisture into qualities that may be directly observed in an image and qualities that would still need other evidence.",
        during: "Compare the method-properties photograph and trace each proposed difference through method → heat transfer → property change, labelling every sensory prediction not directly tested.",
        after: "Recommend one method for a stated purpose and identify the untested quality or local constraint that keeps the recommendation conditional.",
        alternative: "Read ‘Ingredients, flavours and methods work together’, make a method–mechanism–property chain from the comparative image, then complete the questions and evidence response.",
        notes: "Course-authored equivalent. It does not authorise practical work, provide temperatures or times, or claim that an image can prove aroma, flavour or texture.",
        visualAssets: [
          { assetId: "m06-method-properties-comparison", path: "assets/photos/m06-method-properties-comparison.png" }
        ],
        nonVideoWorkflow: [
          "Read the section and separate ingredient function, flavour-building choice, method and observable food quality.",
          "Inspect colour, surface and apparent moisture in the photograph while marking aroma, flavour and texture as requiring other evidence.",
          "Build two causal chains that connect a method to heat transfer and then to a predicted product effect.",
          "Answer the checks and save a conditional method choice tied to a clear purpose."
        ]
      },
      {
        moduleId: 7,
        sectionId: "m07-s01",
        sectionTitle: "Fusion needs a purpose",
        sectionRoute: "modules/module-07.html#m07-s01",
        evidenceRoute: "modules/module-07.html#learning-m07-s01",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "l7RVXYUHCYQ",
        title: "Up for a laksa iced coffee? Enjoy some of these interesting laksa-inspired dishes",
        channel: "ABC Australia",
        duration: "2:16",
        purpose: "Test whether an unusual fusion idea has a clear sensory and cultural purpose rather than novelty alone.",
        before: "What makes a fusion idea purposeful rather than random?",
        during: "For each example, identify the familiar reference, the change and the intended experience.",
        after: "Select one idea and evaluate it against purpose, respect, sensory logic and feasibility.",
        alternative: "Use ‘Fusion needs a purpose’. Evaluate three imagined combinations with the same four criteria, then improve the weakest concept.",
        notes: "Use for design analysis, not as an instruction to prepare any shown item.",
        visualAssets: [
          { assetId: "m07-purposeful-fusion-workspace", path: "assets/photos/m07-purposeful-fusion-workspace.png" },
          { assetId: "m07-purposeful-fusion-pathways", path: "assets/diagrams/m07-purposeful-fusion-pathways.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and define user, purpose, evidence, respect, sensory logic and feasibility as separate design tests.",
          "Compare the random-mix and purposeful pathways, then inspect the neutral prototype without claiming cultural ownership or authenticity.",
          "Score three imagined concepts against the same criteria and repair the weakest reasoning.",
          "Complete the section evidence with a justified design decision and an explicit research gap."
        ]
      },
      {
        moduleId: 7,
        sectionId: "m07-s02",
        sectionTitle: "Research before you design",
        sectionRoute: "modules/module-07.html#m07-s02",
        evidenceRoute: "modules/module-07.html#learning-m07-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Evidence-to-design dossier",
        channel: "Course theory and photograph",
        duration: "10–12 minutes",
        purpose: "Translate a small set of credible evidence into specific design criteria, decisions and reasons rather than collecting disconnected facts.",
        before: "Choose one imagined food-design decision and write exactly what evidence would make that decision stronger, weaker or unnecessary.",
        during: "Trace the research cards, sketch and ingredient arrangement in the workspace, pairing each evidence type with the decision it could inform and rejecting unsupported leaps.",
        after: "Defend one design criterion with two complementary evidence sources and state the unresolved gap that could still change it.",
        alternative: "Read ‘Research before you design’, use the workspace to build a source → finding → criterion → decision dossier, then complete the section checks and justification.",
        notes: "Course-authored equivalent. Blank source cards are fictional and private-safe; students must use actual credible sources for factual or cultural claims.",
        visualAssets: [
          { assetId: "m07-evidence-to-design-workspace", path: "assets/photos/m07-evidence-to-design-workspace.png" }
        ],
        nonVideoWorkflow: [
          "Read the section and define the decision before searching so each source has a clear design job.",
          "Inspect the evidence-to-design workspace and label where evidence should alter, support or eliminate an idea.",
          "Create a four-column dossier for source, relevant finding, resulting criterion and resulting design decision.",
          "Complete the learning evidence with one well-supported criterion and one visible uncertainty."
        ]
      },
      {
        moduleId: 7,
        sectionId: "m07-s03",
        sectionTitle: "Annotate a safe, feasible concept",
        sectionRoute: "modules/module-07.html#m07-s03",
        evidenceRoute: "modules/module-07.html#learning-m07-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Five-job annotation clinic",
        channel: "Course theory and diagram",
        duration: "10–12 minutes",
        purpose: "Make a concept understandable by annotating visible features, sensory intentions, functional reasoning, evidence and questions requiring confirmation.",
        before: "Examine a plain concept sketch and list the questions a reader would still have if every label only named an ingredient or shape.",
        during: "Use the annotation map to add one note for each of five jobs, carefully separating an observation, prediction, evidence source and unresolved condition.",
        after: "Audit the annotated concept for hidden recipe, safety or permission claims and write the most important question to take to the teacher.",
        alternative: "Read ‘Annotate a safe, feasible concept’, apply the five-job map to a fictional concept, check every prediction and confirmation flag, then save the section evidence.",
        notes: "Course-authored equivalent. Annotations must not invent quantities, temperatures, equipment permissions, allergy controls or cultural endorsement.",
        visualAssets: [
          { assetId: "m07-concept-annotation-map", path: "assets/diagrams/m07-concept-annotation-map.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and distinguish a label that names a feature from an annotation that explains reasoning.",
          "Follow each arrow in the map and draft one visible-feature, sensory-intention, functional-reasoning, source and confirmation annotation.",
          "Check whether any prediction is presented as a proven result or any uncertainty has been hidden.",
          "Answer the ten questions and save the annotated reasoning plus one teacher-confirmation question."
        ]
      },
      {
        moduleId: 8,
        sectionId: "m08-s01",
        sectionTitle: "Food technology changes systems",
        sectionRoute: "modules/module-08.html#m08-s01",
        evidenceRoute: "modules/module-08.html#learning-m08-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Technology ripple-system analysis",
        channel: "Course theory, photograph and diagram",
        duration: "10–12 minutes",
        purpose: "Judge a food technology through its driver, mechanism, system effects, users, benefits and trade-offs in a named context.",
        before: "Choose a familiar food technology and identify the problem it appears designed to address before deciding whether it is beneficial.",
        during: "Trace one pathway through the ripple diagram and compare the visible treatment or storage formats, separating observable form from any safety, quality or superiority claim.",
        after: "Write a balanced judgement that identifies who benefits, one system effect, one trade-off and the context that could change the conclusion.",
        alternative: "Read ‘Food technology changes systems’, use the photograph and ripple map to build driver → mechanism → effects → benefit → trade-off, then complete the section evidence.",
        notes: "Course-authored equivalent. The image is not a preservation procedure and does not prove that a shown container or treatment is safe.",
        visualAssets: [
          { assetId: "m08-preservation-system-comparison", path: "assets/photos/m08-preservation-system-comparison.png" },
          { assetId: "m08-technology-system-ripples", path: "assets/diagrams/m08-technology-system-ripples.svg" }
        ],
        nonVideoWorkflow: [
          "Read the system-analysis frame and define the driver and mechanism before judging the technology’s age or novelty.",
          "Inspect the photograph for visible form and moisture only, then use the diagram to trace effects across labour, storage, transport, access or resources.",
          "Record a benefit and trade-off for a named user and context, including evidence still needed.",
          "Complete the checks and save a conclusion that explains why newer does not automatically mean better."
        ]
      },
      {
        moduleId: 8,
        sectionId: "m08-s02",
        sectionTitle: "Processing changes food properties",
        sectionRoute: "modules/module-08.html#m08-s02",
        evidenceRoute: "modules/module-08.html#learning-m08-s02",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "n9OS8yLF2Kc",
        title: "Clextral, New technology; new foods",
        channel: "CSIRO",
        duration: "3:08",
        purpose: "Observe how a processing technology is selected to change a food property while balancing quality and production goals.",
        before: "What properties might a manufacturer want to preserve or change during processing?",
        during: "Record the input, process, changed property and claimed benefit.",
        after: "Explain why ‘newer’ does not automatically mean ‘better’; judge the method against its stated purpose.",
        alternative: "Use ‘Processing changes properties’. Complete an input → process → property change → purpose chain for two processing methods.",
        notes: "CSIRO industry case study. Treat company claims as claims to analyse, not automatic proof of superiority.",
        visualAssets: [
          { assetId: "m08-processing-property-change", path: "assets/photos/m08-processing-property-change.png" }
        ],
        nonVideoWorkflow: [
          "Read the section and separate the processing action, observable change, proposed mechanism and product effect.",
          "Track whole, coarse and smooth chickpea forms in the photograph without inferring an unshown method or equipment setting.",
          "Build two input → process → property change → purpose chains and label claimed benefits that still need evidence.",
          "Complete the questions and save a mechanism-based explanation rather than a description alone."
        ]
      },
      {
        moduleId: 8,
        sectionId: "m08-s03",
        sectionTitle: "Choose a method for the purpose",
        sectionRoute: "modules/module-08.html#m08-s03",
        evidenceRoute: "modules/module-08.html#learning-m08-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Purpose-led method matrix",
        channel: "Course theory and diagram",
        duration: "9–11 minutes",
        purpose: "Compare two methods against the same qualitative criteria and constraints before selecting the one that best fits a stated product purpose.",
        before: "Define a product purpose and choose three criteria that would allow two methods to be compared fairly.",
        during: "Read across the method-comparison matrix one criterion at a time, marking each expected property as a prediction and each local constraint as needing teacher confirmation.",
        after: "Select a method for the purpose using two criteria, then name a trade-off and one condition that could reverse the choice.",
        alternative: "Read ‘Choose a method for the purpose’, apply the same criteria to both matrix columns, make a conditional choice and complete the section checks and justification.",
        notes: "Course-authored equivalent. The qualitative comparison does not provide practical permission, exact settings or guaranteed sensory results.",
        visualAssets: [
          { assetId: "m08-method-comparison-matrix", path: "assets/diagrams/m08-method-comparison-matrix.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and write a product purpose before looking at the method options.",
          "Use identical heat-transfer, moisture, colour, texture, service and constraint criteria for both methods.",
          "Distinguish predicted effects from observed evidence and add the most relevant teacher-controlled limitation.",
          "Finish the ten checks and save a method choice whose reasoning could be reconsidered if the purpose changes."
        ]
      },
      {
        moduleId: 9,
        sectionId: "m09-s01",
        sectionTitle: "Food choices have interacting influences",
        sectionRoute: "modules/module-09.html#m09-s01",
        evidenceRoute: "modules/module-09.html#learning-m09-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Four-lens influence investigation",
        channel: "Course theory and diagram",
        duration: "9–11 minutes",
        purpose: "Explain a food decision through interacting physiological, psychological, social and economic evidence without judging the person or ranking the influences.",
        before: "Write two different explanations for the same fictional food choice and identify what evidence would distinguish between them.",
        during: "Place each scenario clue in the four-lens diagram, use overlaps where evidence fits more than one influence and flag every assumption about the person.",
        after: "Explain how two influences interact in the decision and qualify the explanation with the missing evidence that prevents certainty.",
        alternative: "Read ‘Food choices have interacting influences’, classify a fictional scenario through all four lenses, examine overlaps and complete the written evidence without moral judgement.",
        notes: "Course-authored equivalent. The pathway analyses circumstances rather than labelling foods, bodies, families or financial situations as good or bad.",
        visualAssets: [
          { assetId: "m09-four-influence-lenses", path: "assets/diagrams/m09-four-influence-lenses.svg" }
        ],
        nonVideoWorkflow: [
          "Read the four influence definitions and distinguish evidence in the scenario from a personal assumption.",
          "Map each clue to one or more lenses and explain why overlap may be more accurate than a single category.",
          "Compare two possible explanations and state what additional context would make one better supported.",
          "Complete the learning activity and save a cautious, non-judgemental interaction explanation."
        ]
      },
      {
        moduleId: 9,
        sectionId: "m09-s02",
        sectionTitle: "Decode a food advertisement",
        sectionRoute: "modules/module-09.html#m09-s02",
        evidenceRoute: "modules/module-09.html#learning-m09-s02",
        outcome: "MATCHED",
        mode: "verified-video",
        id: "ZP1av_3sOCY",
        title: "Food Advertising - Behind the News",
        channel: "Behind the News",
        duration: "4:08",
        purpose: "Identify how visual scale, language and presentation can shape expectations about a food product.",
        before: "Name one way an advertisement can persuade without making a direct factual claim.",
        during: "Record the audience, technique, intended response and evidence actually provided.",
        after: "Rewrite one persuasive message so it remains appealing but is less likely to mislead.",
        alternative: "Use ‘Decode a food ad’. Apply the audience–technique–feeling–evidence frame to a teacher-approved advertisement or a fictional example.",
        notes: "Current availability and playback checked. Advertising examples remain objects for analysis, not endorsements.",
        visualAssets: [
          { assetId: "m09-fictional-advertising-frame", path: "assets/photos/m09-fictional-advertising-frame.png" }
        ],
        nonVideoWorkflow: [
          "Read the advertising section and separate observable production choices from inferred audience effects and factual claims.",
          "Inspect the fictional frame for scale, colour, lighting and framing without inventing a product benefit.",
          "Complete an audience → technique → possible response → evidence table for the fictional or teacher-approved advertisement.",
          "Answer the checks and save a revised message that is persuasive without implying unsupported proof."
        ]
      },
      {
        moduleId: 9,
        sectionId: "m09-s03",
        sectionTitle: "Persuade without misleading",
        sectionRoute: "modules/module-09.html#m09-s03",
        evidenceRoute: "modules/module-09.html#learning-m09-s03",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Truthful-persuasion proof check",
        channel: "Course theory and written evidence",
        duration: "10–12 minutes",
        purpose: "Audit a persuasive message so supported facts, creative appeal, overall impression, visible conditions and uncertainty remain distinguishable.",
        before: "Draft one appealing line for a fictional food product and circle every word that a reader might interpret as a factual claim.",
        during: "Read the theory and test the line through claim, evidence, overall impression and conditions, recording where design choices could imply more than the words state.",
        after: "Revise the message, add any necessary condition or evidence note and explain how the final version remains appealing without misleading the audience.",
        alternative: "Use the complete theory pathway: read the worked example, audit a fictional message, revise its wording and overall impression, then complete the checks and saved explanation.",
        notes: "Course-authored equivalent with no visual asset. It uses a fictional product and does not create or endorse health, nutrition or performance claims.",
        visualAssets: [],
        nonVideoWorkflow: [
          "Read ‘Persuade without misleading’ and identify the separate roles of evidence, creative appeal, conditions and overall impression.",
          "Mark the factual, emotional and ambiguous parts of a fictional message and list the evidence each factual part would require.",
          "Revise the wording and presentation description so uncertainty or conditions are visible rather than hidden.",
          "Complete all ten questions and save the final message with a short truthfulness rationale."
        ]
      },
      {
        moduleId: 10,
        sectionId: "m10-s01",
        sectionTitle: "Analyse a food diary without judgement",
        sectionRoute: "modules/module-10.html#m10-s01",
        evidenceRoute: "modules/module-10.html#learning-m10-s01",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Diary-evidence boundary trace",
        channel: "Course theory and diagram",
        duration: "9–11 minutes",
        purpose: "Use a short, private-safe diary as limited evidence about possible influences while separating observation, association, alternative explanation and unsupported cause.",
        before: "Divide a page into ‘can show’ and ‘cannot establish’ and place three possible food-diary conclusions on the appropriate side.",
        during: "Follow the evidence-to-conclusion diagram from anonymised observation through context and possible influence, adding an alternative explanation and limit before any conclusion.",
        after: "Write one cautious diary-based conclusion and name the missing context that stops it becoming a judgement or causal claim.",
        alternative: "Read ‘Analyse a food diary without judgement’, trace one fictional anonymised observation through the evidence pathway, then complete the questions and privacy-safe written response.",
        notes: "Course-authored equivalent. Use fictional or appropriately anonymised information; do not expose private student data or judge foods, bodies, families or circumstances.",
        visualAssets: [
          { assetId: "m10-evidence-to-conclusion", path: "assets/diagrams/m10-evidence-to-conclusion.svg" }
        ],
        nonVideoWorkflow: [
          "Read the section and define the difference between an observation, a possible association and a demonstrated cause.",
          "Use the diagram to add context, alternative explanation, evidence limit and privacy protection to one fictional diary entry.",
          "Remove identifying details and rewrite any judgemental wording as a neutral evidence statement.",
          "Complete the learning checks and save one appropriately limited conclusion."
        ]
      },
      {
        moduleId: 10,
        sectionId: "m10-s02",
        sectionTitle: "Explain change with evidence",
        sectionRoute: "modules/module-10.html#m10-s02",
        evidenceRoute: "modules/module-10.html#learning-m10-s02",
        outcome: "EXCEPTION",
        mode: "complete-non-video",
        id: null,
        title: "Claim–evidence–reasoning synthesis",
        channel: "Course theory and written evidence",
        duration: "11–13 minutes",
        purpose: "Build a balanced explanation of change and continuity by connecting a precise claim to responsible evidence, reasoning, interaction and limits.",
        before: "Choose one course idea about change or continuity and name the type of evidence that would genuinely test it rather than merely repeat it.",
        during: "Read the section and construct a five-part chain: bounded claim, relevant evidence, reasoning link, interacting influence or continuity, and source limitation.",
        after: "Write one synthesis paragraph, identify where the evidence is strongest and add the sentence that prevents the conclusion becoming too broad.",
        alternative: "Use the complete theory pathway: revisit two relevant course sections, build a claim–evidence–reasoning chain, test its scope and complete the ten questions and written synthesis.",
        notes: "Course-authored equivalent with no visual asset. It does not prescribe an assessment response or invent historical facts; students must use the authorised sources supplied in the course.",
        visualAssets: [],
        nonVideoWorkflow: [
          "Read ‘Explain change with evidence’ and choose a claim narrow enough to be tested by the available course sources.",
          "Select two relevant pieces of evidence from different sections and record their origin, contribution and limitation.",
          "Write the reasoning that connects evidence to claim, including interaction, continuity or uncertainty where relevant.",
          "Complete the exact learning activity and save a balanced synthesis paragraph with its scope limit."
        ]
      },
      {
        moduleId: 10,
        sectionId: "m10-s03",
        sectionTitle: "Select, reflect and present evidence",
        sectionRoute: "modules/module-10.html#m10-s03",
        evidenceRoute: "modules/module-10.html#learning-m10-s03",
        outcome: "EXCEPTION",
        mode: "inherited-deliberate-non-video",
        id: null,
        title: "A deliberate non-video pathway",
        channel: "Course reading",
        duration: "8–10 minutes",
        purpose: "Slow down, compare evidence and make a deliberate selection instead of watching another explanation.",
        before: "Choose two pieces of saved work that show different kinds of learning.",
        during: "Re-read ‘Select, reflect and present evidence’ and annotate each piece for decision, evidence, improvement and next step.",
        after: "Write a short curator statement explaining what you selected, what it proves and what you would improve.",
        alternative: "This is already the complete non-video pathway. Use your saved folio evidence or teacher-provided printed copies.",
        notes: "Intentional exception: a student’s own evidence is the most useful source for this synthesis task.",
        visualAssets: [
          { assetId: "m10-evidence-selection-workspace", path: "assets/photos/m10-evidence-selection-workspace.png" }
        ],
        nonVideoWorkflow: [
          "Read the reflection section and choose two saved items that demonstrate different decisions or kinds of understanding.",
          "Use the evidence-selection photograph as a triage model, keeping private material out of anything intended for public display.",
          "Annotate each item for decision, supporting evidence, change in thinking, improvement and next step.",
          "Complete the section checks and save a curator statement that claims only what the selected evidence can show."
        ]
      }
    ]
  });
})();
