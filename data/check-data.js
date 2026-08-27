(function () {
  "use strict";

  const shared = Object.freeze({
    recordLabel: "Formative learning evidence",
    feedbackTiming: "Feedback appears only after you check your answer.",
    boundary: "These checks support learning. They are not formal assessment, proof of submission, teacher observation or a mark.",
    namespace: "formative-checks:v1"
  });

  const checks = [
    {
      id: "check-m01-s01", sectionId: "m01-s01", moduleId: 1, title: "From hazard to control",
      theoryRoute: "modules/module-01.html#m01-s01", helpAnchor: "m01-s01-help-1", helpLabel: "Hazard or risk?",
      prompt: "A frayed electrical lead is noticed before a food practical. Which statement correctly separates the hazard, risk and control?",
      choices: [
        { id: "a", text: "The frayed lead is the hazard; the chance and seriousness of harm form the risk; stopping and telling the teacher is an immediate control.", correct: true, feedback: "Correct. You identified the source of harm, judged risk separately and chose an action within student authority." },
        { id: "b", text: "The frayed lead is the risk; wearing an apron removes the hazard.", correct: false, feedback: "Not quite. The lead is the hazard, and an apron does not control an electrical fault. Match the control to the specific source of harm." },
        { id: "c", text: "The hazard is being late; the control is to repair the lead quickly.", correct: false, feedback: "No. A student must not repair damaged equipment. Stop, keep clear and seek the teacher." }
      ]
    },
    {
      id: "check-m01-s02", sectionId: "m01-s02", moduleId: 1, title: "Hygiene breaks the contamination chain",
      theoryRoute: "modules/module-01.html#m01-s02", helpAnchor: "m01-s02-help-1", helpLabel: "Find the chain",
      prompt: "A hand touches a phone, then a clean utensil, then ready-to-eat food. What is the strongest analysis?",
      choices: [
        { id: "a", text: "Trace the possible transfer through each contact and interrupt it using the teacher-approved hygiene process before food handling continues.", correct: true, feedback: "Correct. A contamination chain is understood by tracing what touched what and placing a control before the next transfer." },
        { id: "b", text: "The food is safe because the utensil looked clean.", correct: false, feedback: "Appearance cannot show every biological, chemical, physical or allergen contamination risk." },
        { id: "c", text: "Gloves would make all earlier contact irrelevant.", correct: false, feedback: "Gloves can also transfer contamination. They do not erase the chain or replace hand hygiene." }
      ]
    },
    {
      id: "check-m01-s03", sectionId: "m01-s03", moduleId: 1, title: "Ready before you begin",
      theoryRoute: "modules/module-01.html#m01-s03", helpAnchor: "m01-s03-help-2", helpLabel: "When should I ask?",
      prompt: "A method is clear, but a piece of equipment appears damaged. What should happen next?",
      choices: [
        { id: "a", text: "Stop and ask the teacher before using, testing or moving ahead with that equipment.", correct: true, feedback: "Correct. Readiness includes equipment condition and permission, not just understanding the method." },
        { id: "b", text: "Test it briefly because the method has already been read.", correct: false, feedback: "Reading the method does not authorise a student to test equipment that appears faulty." },
        { id: "c", text: "Complete the checklist and begin because the checklist gives permission.", correct: false, feedback: "A checklist supports memory; it never replaces teacher instruction or local approval." }
      ]
    },
    {
      id: "check-m02-s01", sectionId: "m02-s01", moduleId: 2, title: "Country, identity and respectful language",
      theoryRoute: "modules/module-02.html#m02-s01", helpAnchor: "m02-s01-help-1", helpLabel: "Is my wording too broad?",
      prompt: "Which research sentence is most accurate and respectful?",
      choices: [
        { id: "a", text: "This named Aboriginal-authored source explains the food knowledge it is authorised to share in its identified place and context.", correct: true, feedback: "Correct. The claim stays with the named source, place and limits of the evidence." },
        { id: "b", text: "Aboriginal people across Australia traditionally ate the same native foods.", correct: false, feedback: "This collapses many Peoples, Countries and food traditions into one unsupported claim." },
        { id: "c", text: "Because a plant is native, anyone may harvest it anywhere.", correct: false, feedback: "Native origin does not establish access, permission, safety or cultural authority." }
      ]
    },
    {
      id: "check-m02-s02", sectionId: "m02-s02", moduleId: 2, title: "Compare nutrition evidence fairly",
      theoryRoute: "modules/module-02.html#m02-s02", helpAnchor: "m02-s02-help-1", helpLabel: "Can these data be compared?",
      prompt: "Before comparing the iron values of two foods, which check matters most?",
      choices: [
        { id: "a", text: "Confirm the exact food and preparation state, the same nutrient and a matching basis such as per 100 g.", correct: true, feedback: "Correct. A matched basis makes the numerical comparison meaningful while still requiring a limited claim." },
        { id: "b", text: "Choose the larger number even if one value is per serve and the other is per 100 g.", correct: false, feedback: "Different bases can make the larger number misleading; standardise the comparison first." },
        { id: "c", text: "Use one nutrient value to decide which whole food is healthier.", correct: false, feedback: "One nutrient cannot support a total health ranking of two foods." }
      ]
    },
    {
      id: "check-m02-s03", sectionId: "m02-s03", moduleId: 2, title: "Modify with a reason",
      theoryRoute: "modules/module-02.html#m02-s03", helpAnchor: "m02-s03-help-2", helpLabel: "Is my trial fair?",
      prompt: "Which plan would produce the clearest evidence about a proposed ingredient modification?",
      choices: [
        { id: "a", text: "Change one planned factor, keep important conditions comparable and record effects against the stated purpose.", correct: true, feedback: "Correct. A controlled comparison makes it easier to connect an observed effect to the intended change." },
        { id: "b", text: "Change the ingredient, method and serving size together, then judge by appearance alone.", correct: false, feedback: "Several simultaneous changes make the cause of any result unclear, and appearance alone may not match the design purpose." },
        { id: "c", text: "Assume that adding more of a native ingredient always improves flavour and respectfulness.", correct: false, feedback: "Quantity does not guarantee quality or respectful use; identity, provenance, context and evidence still matter." }
      ]
    },
    {
      id: "check-m03-s01", sectionId: "m03-s01", moduleId: 3, title: "Cultural Knowledge is living, local and owned",
      theoryRoute: "modules/module-03.html#m03-s01", helpAnchor: "m03-s01-help-1", helpLabel: "Can I use this source?",
      prompt: "Which source check best supports responsible use of Cultural Knowledge in a school explanation?",
      choices: [
        { id: "a", text: "Identify the creator, Country or Community context, public purpose, authority and stated limits before deciding how to use it.", correct: true, feedback: "Correct. These checks test whether the source is appropriate for the specific educational use." },
        { id: "b", text: "Use anything searchable online as long as its URL is listed.", correct: false, feedback: "Public access and attribution do not automatically establish cultural authority or reuse permission." },
        { id: "c", text: "Treat old knowledge as ownerless because it predates copyright.", correct: false, feedback: "Cultural Knowledge remains connected to living Communities, relationships and responsibilities." }
      ]
    },
    {
      id: "check-m03-s02", sectionId: "m03-s02", moduleId: 3, title: "Seasons, cycles and caring for resources",
      theoryRoute: "modules/module-03.html#m03-s02", helpAnchor: "m03-s02-help-2", helpLabel: "What can I learn from a calendar?",
      prompt: "What is a responsible conclusion from a public Aboriginal seasonal calendar?",
      choices: [
        { id: "a", text: "It can show relationships among local indicators, timing, decisions and care in the identified context, but it does not grant harvesting permission.", correct: true, feedback: "Correct. The learning stays connected to place and does not turn public information into permission." },
        { id: "b", text: "It proves that all Australian places have the same seasons.", correct: false, feedback: "Seasonal patterns and indicators vary by Country and Community." },
        { id: "c", text: "It is a set of historical ideas no longer used today.", correct: false, feedback: "Aboriginal land and sea management is living, contemporary expertise." }
      ]
    },
    {
      id: "check-m03-s03", sectionId: "m03-s03", moduleId: 3, title: "Research, permission and ICIP",
      theoryRoute: "modules/module-03.html#m03-s03", helpAnchor: "m03-s03-help-2", helpLabel: "When unsure",
      prompt: "A source names no creator or Community and gives no reuse conditions. What is the best next step?",
      choices: [
        { id: "a", text: "Pause, seek context or teacher guidance, and prefer linking or a clearer authorised source rather than guessing permission.", correct: true, feedback: "Correct. Uncertainty is a reason to narrow or change the use, not to invent authority." },
        { id: "b", text: "Copy it because school work is automatically exempt from all reuse responsibilities.", correct: false, feedback: "School use does not remove ICIP, copyright or contextual responsibilities." },
        { id: "c", text: "Change the colours so the cultural material becomes a new work.", correct: false, feedback: "A cosmetic change does not remove the source, meaning or responsibilities." }
      ]
    },
    {
      id: "check-m04-s01", sectionId: "m04-s01", moduleId: 4, title: "Roles, knowledge and responsibility",
      theoryRoute: "modules/module-04.html#m04-s01", helpAnchor: "m04-s01-help-1", helpLabel: "How do I analyse a historical claim?",
      prompt: "One historical observer describes food roles in one place. Which conclusion is defensible?",
      choices: [
        { id: "a", text: "The account may offer evidence about that setting, but its creator, purpose, time, place and missing perspectives limit broader conclusions.", correct: true, feedback: "Correct. You can use the source without treating one observation as universal or neutral." },
        { id: "b", text: "The account proves that the same roles existed in every Community.", correct: false, feedback: "One source cannot establish a universal pattern across diverse Peoples and contexts." },
        { id: "c", text: "Different responsibilities show that one group had more value.", correct: false, feedback: "Different roles may involve different knowledge and skills; they do not establish a ranking of people." }
      ]
    },
    {
      id: "check-m04-s02", sectionId: "m04-s02", moduleId: 4, title: "Introduced rations and nutrition",
      theoryRoute: "modules/module-04.html#m04-s02", helpAnchor: "m04-s02-help-2", helpLabel: "How do I avoid blame?",
      prompt: "Which explanation avoids blaming people for changes in food patterns?",
      choices: [
        { id: "a", text: "Explain how policy, disrupted access to Country, available supplies and living conditions shaped realistic choices in the sourced context.", correct: true, feedback: "Correct. This focuses on systems and evidence rather than pretending every change was freely chosen." },
        { id: "b", text: "Assume people preferred introduced rations because they accepted them.", correct: false, feedback: "Receiving available food does not prove free preference when systems and access constrain choices." },
        { id: "c", text: "Attribute later health outcomes to one introduced ingredient.", correct: false, feedback: "Complex health patterns cannot be reduced to one ingredient without strong evidence." }
      ]
    },
    {
      id: "check-m04-s03", sectionId: "m04-s03", moduleId: 4, title: "Read historical food sources critically",
      theoryRoute: "modules/module-04.html#m04-s03", helpAnchor: "m04-s03-help-1", helpLabel: "How do I judge a source?",
      prompt: "A photograph shows one food-related scene. What can a careful researcher claim?",
      choices: [
        { id: "a", text: "Describe what is directly visible, investigate creator and context, and separate later interpretation from what the image itself supports.", correct: true, feedback: "Correct. A photograph is selected evidence, not a complete or neutral record of the whole situation." },
        { id: "b", text: "The photograph proves the complete experience of everyone present.", correct: false, feedback: "One selected moment cannot reveal every experience, cause or missing perspective." },
        { id: "c", text: "Its age makes it automatically reliable.", correct: false, feedback: "Age does not remove the need to examine purpose, context, evidence and limitations." }
      ]
    },
    {
      id: "check-m05-s01", sectionId: "m05-s01", moduleId: 5, title: "Colonisation changed food access",
      theoryRoute: "modules/module-05.html#m05-s01", helpAnchor: "m05-s01-help-1", helpLabel: "Build the chain",
      prompt: "Which structure best explains a colonisation-related food-system change?",
      choices: [
        { id: "a", text: "A specific evidenced change, its direct food-system effect, a supported consequence, and evidence of continuity or adaptation where available.", correct: true, feedback: "Correct. This causal chain is specific, evidence-bounded and avoids telling only a story of loss." },
        { id: "b", text: "A claim that the same event and effects occurred everywhere at once.", correct: false, feedback: "Timing, form and effects differed across places, Communities and periods." },
        { id: "c", text: "A claim that Cultural Knowledge disappeared completely.", correct: false, feedback: "Disruption was profound, but knowledge and practices were also maintained, adapted and revitalised." }
      ]
    },
    {
      id: "check-m05-s02", sectionId: "m05-s02", moduleId: 5, title: "Settler food constraints and technology",
      theoryRoute: "modules/module-05.html#m05-s02", helpAnchor: "m05-s02-help-1", helpLabel: "How do I explain a technology?",
      prompt: "Which analysis of a historical food technology is strongest?",
      choices: [
        { id: "a", text: "Identify the context and constraint, explain what changed in the system, then weigh a benefit against a trade-off.", correct: true, feedback: "Correct. Technology matters through the problem it addresses, the mechanism of change and its consequences." },
        { id: "b", text: "Call it better because it was newer.", correct: false, feedback: "Newness does not establish suitability; technologies can create benefits and limitations." },
        { id: "c", text: "Assume one invention immediately changed everyone's diet.", correct: false, feedback: "Access, cost, infrastructure, place and time affect how widely a technology changes practice." }
      ]
    },
    {
      id: "check-m05-s03", sectionId: "m05-s03", moduleId: 5, title: "Migration changed Australian food habits",
      theoryRoute: "modules/module-05.html#m05-s03", helpAnchor: "m05-s03-help-1", helpLabel: "How do I explain migration's influence?",
      prompt: "Which explanation goes beyond simply naming a migrant-associated dish?",
      choices: [
        { id: "a", text: "Trace how people, knowledge, ingredients, growing, businesses or adaptation affected wider habits in a specific evidenced example.", correct: true, feedback: "Correct. This explains a mechanism of influence while keeping the conclusion within the source context." },
        { id: "b", text: "Say migrants added foods and all Australians then ate them in the same way.", correct: false, feedback: "This overgeneralises both migration experiences and Australian food habits." },
        { id: "c", text: "Treat popularity as proof that a food has no continuing cultural history.", correct: false, feedback: "Popularity does not erase origins, people or knowledge connected with a food." }
      ]
    },
    {
      id: "check-m06-s01", sectionId: "m06-s01", moduleId: 6, title: "Contemporary Australian cuisine keeps changing",
      theoryRoute: "modules/module-06.html#m06-s01", helpAnchor: "m06-s01-help-1", helpLabel: "Look beyond dishes",
      prompt: "Which evidence set best represents changing contemporary Australian cuisine?",
      choices: [
        { id: "a", text: "Evidence about ingredients, methods, businesses, technologies, social habits and meanings across varied contexts.", correct: true, feedback: "Correct. Cuisine is a changing system of practices and meanings, not only a list of famous dishes." },
        { id: "b", text: "One fixed top-ten list presented as representative of everyone.", correct: false, feedback: "A fixed list hides variation among households, Communities, regions and circumstances." },
        { id: "c", text: "Only restaurant menus, treated as everyday household evidence.", correct: false, feedback: "Restaurant menus represent one commercial setting and cannot stand for all everyday food habits." }
      ]
    },
    {
      id: "check-m06-s02", sectionId: "m06-s02", moduleId: 6, title: "Research one food culture without stereotyping",
      theoryRoute: "modules/module-06.html#m06-s02", helpAnchor: "m06-s02-help-1", helpLabel: "Is my question too broad?",
      prompt: "Which research question is most likely to avoid stereotyping?",
      choices: [
        { id: "a", text: "How do three credible sources describe weekday meal practices in a named place and time, and what variation do they show?", correct: true, feedback: "Correct. The question is bounded, allows comparison and expects variation rather than one national truth." },
        { id: "b", text: "What food does this whole culture eat?", correct: false, feedback: "The question is too broad and assumes one uniform food pattern." },
        { id: "c", text: "Can one classmate explain their entire culture to us?", correct: false, feedback: "No student should be expected to represent an entire culture or disclose personal information." }
      ]
    },
    {
      id: "check-m06-s03", sectionId: "m06-s03", moduleId: 6, title: "Ingredients, flavours and methods work together",
      theoryRoute: "modules/module-06.html#m06-s03", helpAnchor: "m06-s03-help-1", helpLabel: "How do I justify a method?",
      prompt: "What makes a method justification useful?",
      choices: [
        { id: "a", text: "Link the desired observable result to ingredient properties, preparation and heat transfer, within the available evidence and context.", correct: true, feedback: "Correct. The method is justified by how it may create the intended result, not by its name alone." },
        { id: "b", text: "Choose the fastest method because faster is always better.", correct: false, feedback: "Speed is only one possible constraint and may not produce the intended sensory result." },
        { id: "c", text: "Name a cultural method without explaining context or effects.", correct: false, feedback: "A method name alone does not explain its function, evidence or cultural context." }
      ]
    },
    {
      id: "check-m07-s01", sectionId: "m07-s01", moduleId: 7, title: "Fusion needs a purpose",
      theoryRoute: "modules/module-07.html#m07-s01", helpAnchor: "m07-s01-help-1", helpLabel: "Ask why it belongs",
      prompt: "Which rationale describes purposeful fusion design?",
      choices: [
        { id: "a", text: "Each influence is researched and contributes deliberately to the user, purpose, sensory result, structure or meaning, with appropriate acknowledgement.", correct: true, feedback: "Correct. Purpose, research and reasoning distinguish design from a random or token combination." },
        { id: "b", text: "The combination is good because it is unusual.", correct: false, feedback: "Novelty alone does not establish function, respect or suitability." },
        { id: "c", text: "Adding one stereotyped symbol makes the concept culturally authentic.", correct: false, feedback: "Cultural symbols are not decorative proof of authenticity and may require authority and context." }
      ]
    },
    {
      id: "check-m07-s02", sectionId: "m07-s02", moduleId: 7, title: "Research before you design",
      theoryRoute: "modules/module-07.html#m07-s02", helpAnchor: "m07-s02-help-1", helpLabel: "Do I need this source?",
      prompt: "Which research note belongs in a design evidence set?",
      choices: [
        { id: "a", text: "A credible source or observation that changes or supports a named design decision.", correct: true, feedback: "Correct. Relevant evidence has a clear job in the decision trail." },
        { id: "b", text: "An interesting fact with no connection to the user, purpose, product or constraint.", correct: false, feedback: "Interesting information can still be unnecessary if it does not inform a decision." },
        { id: "c", text: "A personal preference presented as proof that every user will agree.", correct: false, feedback: "Preference can matter, but it is not evidence about every user's needs or likely response." }
      ]
    },
    {
      id: "check-m07-s03", sectionId: "m07-s03", moduleId: 7, title: "Annotate a safe, feasible concept",
      theoryRoute: "modules/module-07.html#m07-s03", helpAnchor: "m07-s03-help-1", helpLabel: "How do I write a strong annotation?",
      prompt: "Which annotation shows the strongest design reasoning?",
      choices: [
        { id: "a", text: "It names the feature, predicts its contribution, connects that contribution to purpose, and flags evidence or teacher confirmation still needed.", correct: true, feedback: "Correct. The annotation communicates a decision and its limits rather than pretending the idea is already approved." },
        { id: "b", text: "It lists ingredient names beside a neat drawing.", correct: false, feedback: "Labels identify parts, but they do not explain intended effects, purpose or uncertainty." },
        { id: "c", text: "It states that all equipment will be available because the design uses it.", correct: false, feedback: "A concept cannot grant equipment access or practical approval; those are teacher-controlled facts." }
      ]
    },
    {
      id: "check-m08-s01", sectionId: "m08-s01", moduleId: 8, title: "Food technology changes systems",
      theoryRoute: "modules/module-08.html#m08-s01", helpAnchor: "m08-s01-help-2", helpLabel: "Look for trade-offs",
      prompt: "Which judgement about food technology is best supported?",
      choices: [
        { id: "a", text: "Its value depends on the problem, context, mechanism, benefits and trade-offs, including access and resource needs.", correct: true, feedback: "Correct. Technology should be analysed as a system change, not ranked by age alone." },
        { id: "b", text: "Newer technology is always better and replaces older methods.", correct: false, feedback: "Different methods can remain useful for different users, places and purposes." },
        { id: "c", text: "Food technology only changes production speed.", correct: false, feedback: "It can also affect labour, safety, storage, scale, access, quality and resource use." }
      ]
    },
    {
      id: "check-m08-s02", sectionId: "m08-s02", moduleId: 8, title: "Processing changes food properties",
      theoryRoute: "modules/module-08.html#m08-s02", helpAnchor: "m08-s02-help-1", helpLabel: "Go beyond 'it cooked'",
      prompt: "Which explanation best describes evidence of processing?",
      choices: [
        { id: "a", text: "Name an observable change, propose a supported physical or chemical mechanism, and explain its effect on product quality.", correct: true, feedback: "Correct. The reasoning connects action, property change, observation and product effect." },
        { id: "b", text: "Say only that the food cooked, because all changes are chemical.", correct: false, feedback: "Processing can involve physical change, chemical change or both; observable evidence helps distinguish them." },
        { id: "c", text: "Treat all browning as proof of burning.", correct: false, feedback: "Browning reactions can create desirable colour, aroma and flavour; context and evidence matter." }
      ]
    },
    {
      id: "check-m08-s03", sectionId: "m08-s03", moduleId: 8, title: "Choose a method for the purpose",
      theoryRoute: "modules/module-08.html#m08-s03", helpAnchor: "m08-s03-help-1", helpLabel: "How do I justify a method choice?",
      prompt: "What should a recommendation compare before choosing a food-processing method?",
      choices: [
        { id: "a", text: "The product purpose, predicted observable effects, common criteria, constraints, trade-offs and any teacher-controlled requirements.", correct: true, feedback: "Correct. A fair comparison uses the same criteria and keeps practical approval separate from design reasoning." },
        { id: "b", text: "Only which method is fastest.", correct: false, feedback: "Speed alone may ignore product quality, energy, skill, equipment and the intended result." },
        { id: "c", text: "Only which method sounds healthiest in general.", correct: false, feedback: "No method is universally best; suitability depends on purpose, food properties and conditions." }
      ]
    },
    {
      id: "check-m09-s01", sectionId: "m09-s01", moduleId: 9, title: "Food choices have interacting influences",
      theoryRoute: "modules/module-09.html#m09-s01", helpAnchor: "m09-s01-help-2", helpLabel: "Evidence or assumption?",
      prompt: "A fictional student buys a familiar snack near the station after sport. Which analysis is most careful?",
      choices: [
        { id: "a", text: "Several physiological, psychological, social or economic influences may interact; use the supplied clues and state what further evidence is needed.", correct: true, feedback: "Correct. This forms an evidence-based possibility without judging the person or claiming one cause." },
        { id: "b", text: "Habit is the only possible cause.", correct: false, feedback: "One decision can involve hunger, familiarity, time, price, access and social context together." },
        { id: "c", text: "The choice proves the student has poor values.", correct: false, feedback: "Food-choice analysis explains influences; it should not become a moral judgement about a person." }
      ]
    },
    {
      id: "check-m09-s02", sectionId: "m09-s02", moduleId: 9, title: "Decode a food advertisement",
      theoryRoute: "modules/module-09.html#m09-s02", helpAnchor: "m09-s02-help-2", helpLabel: "Does the claim have evidence?",
      prompt: "An advertisement uses bright colours and says a product is 'the ultimate choice'. What is the best analysis?",
      choices: [
        { id: "a", text: "Describe the visible technique, infer its possible effect for a stated audience, and test any factual claim against actual evidence.", correct: true, feedback: "Correct. Observation, inference and evidence are kept separate." },
        { id: "b", text: "Bright colour always causes the same response, so the claim is proven.", correct: false, feedback: "Colour effects depend on context and audience, and visual appeal does not prove a factual claim." },
        { id: "c", text: "All advertising lies, so no further analysis is needed.", correct: false, feedback: "Individual claims should be examined rather than assumed true or false." }
      ]
    },
    {
      id: "check-m09-s03", sectionId: "m09-s03", moduleId: 9, title: "Persuade without misleading",
      theoryRoute: "modules/module-09.html#m09-s03", helpAnchor: "m09-s03-help-1", helpLabel: "How do I test a persuasive claim?",
      prompt: "Which design choice keeps a food message persuasive without misleading its audience?",
      choices: [
        { id: "a", text: "Use creative layout, imagery and a call to action while keeping factual wording within the evidence and avoiding implied endorsements.", correct: true, feedback: "Correct. Persuasion can be strong without exaggerating what evidence proves." },
        { id: "b", text: "Make the main claim false, then hide a correction in tiny text.", correct: false, feedback: "A disclaimer does not repair a misleading overall impression." },
        { id: "c", text: "Use a generated image as proof of the real product's qualities.", correct: false, feedback: "A generated image is a creative representation, not evidence of a real product." }
      ]
    },
    {
      id: "check-m10-s01", sectionId: "m10-s01", moduleId: 10, title: "Analyse a food diary without judgement",
      theoryRoute: "modules/module-10.html#m10-s01", helpAnchor: "m10-s01-help-2", helpLabel: "Qualify the conclusion",
      prompt: "A one-day fictional diary shows two rushed meals. Which conclusion matches the evidence?",
      choices: [
        { id: "a", text: "Within this recorded day, time pressure may have influenced the choices; more days and context would be needed to identify a typical pattern.", correct: true, feedback: "Correct. The statement uses the clue but qualifies the period, cause and confidence." },
        { id: "b", text: "This person always chooses poorly because they cannot manage time.", correct: false, feedback: "One self-reported day cannot prove a typical pattern, cause or character judgement." },
        { id: "c", text: "Two events occurring together prove that one caused the other.", correct: false, feedback: "Association can suggest a possible relationship but does not prove cause." }
      ]
    },
    {
      id: "check-m10-s02", sectionId: "m10-s02", moduleId: 10, title: "Explain change with evidence",
      theoryRoute: "modules/module-10.html#m10-s02", helpAnchor: "m10-s02-help-1", helpLabel: "Facts or explanation?",
      prompt: "What turns a list of historical food facts into an explanation?",
      choices: [
        { id: "a", text: "A clear claim, relevant attributed evidence, reasoning that connects evidence to the claim, and a qualification matching the limits.", correct: true, feedback: "Correct. Reasoning shows why the evidence matters and how factors interact." },
        { id: "b", text: "Adding as many unrelated facts as possible.", correct: false, feedback: "Relevant connected evidence is stronger than a long list with no reasoning." },
        { id: "c", text: "Choosing one cause and ignoring continuity or variation.", correct: false, feedback: "Australian food change involves interacting factors and can include continuity, resistance and adaptation." }
      ]
    },
    {
      id: "check-m10-s03", sectionId: "m10-s03", moduleId: 10, title: "Select, reflect and present evidence",
      theoryRoute: "modules/module-10.html#m10-s03", helpAnchor: "m10-s03-help-1", helpLabel: "How do I choose my strongest evidence?",
      prompt: "Which evidence selection shows the strongest reflection?",
      choices: [
        { id: "a", text: "A small relevant example, an explanation of what it demonstrates, how evidence or feedback changed thinking, and one specific next step.", correct: true, feedback: "Correct. The evidence has a purpose and the reflection explains development rather than merely rating performance." },
        { id: "b", text: "Every saved response, with no explanation, because more pages are always stronger.", correct: false, feedback: "Volume does not replace relevance, context and explanation." },
        { id: "c", text: "A polished layout presented as proof that the work was submitted.", correct: false, feedback: "Presentation helps communication, but saving or exporting is not submission and does not replace reasoning." }
      ]
    }
  ];

  window.FOOD_AUSTRALIA_CHECKS = Object.freeze({ schemaVersion: 1, shared, checks: Object.freeze(checks) });
})();
