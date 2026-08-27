/*
 * Year 9 Food in Australia — expanded formative question bank, Modules 1–5.
 * Standalone merge-ready authoring fragment. It does not modify the current runtime.
 * Question 1 in every section reproduces the existing strong diagnostic check.
 */
(function () {
  "use strict";

  const optionIds = ["a", "b", "c"];
  const q = (_id, _type, prompt, correctIndex, optionTexts, feedback) => ({
    prompt,
    choices: optionTexts.map((text, index) => ({
      id: optionIds[index],
      text,
      correct: index === correctIndex,
      feedback: feedback[index]
    }))
  });

  const sections = [
    {
      sectionId: "m01-s01",
      moduleId: 1,
      title: "From hazard to control",
      theoryRoute: "modules/module-01.html#m01-s01",
      helpAnchor: "m01-s01-help-1",
      helpLabel: "Hazard or risk?",
      questions: [
        q("check-m01-s01", "diagnostic", "A frayed electrical lead is noticed before a food practical. Which statement correctly separates the hazard, risk and control?", 0, [
          "The frayed lead is the hazard; the chance and seriousness of harm form the risk; stopping and telling the teacher is an immediate control.",
          "The frayed lead is the risk; wearing an apron removes the hazard.",
          "The hazard is being late; the control is to repair the lead quickly."
        ], [
          "Correct. You identified the source of harm, judged risk separately and chose an action within student authority.",
          "Not quite. The lead is the hazard, and an apron does not control an electrical fault. Match the control to the specific source of harm.",
          "No. A student must not repair damaged equipment. Stop, keep clear and seek the teacher."
        ]),
        q("check-m01-s01-q02", "recall", "Which statement best defines risk?", 1, [
          "The object or condition that could cause harm.",
          "A judgement about how likely harm is and how serious it could be.",
          "Any instruction written on a classroom checklist."
        ], [
          "This defines a hazard, not risk. Risk considers the likelihood and possible seriousness of harm.",
          "Correct. Risk combines likelihood and possible consequence; it is different from the source of harm.",
          "A checklist may support a decision, but it does not define risk or replace judgement."
        ]),
        q("check-m01-s01-q03", "distinction", "A liquid spill lies across a walkway. Which item is the hazard?", 2, [
          "A person possibly slipping and being injured.",
          "Keeping people clear while the approved response is arranged.",
          "The liquid across the walkway."
        ], [
          "That is the possible harm. The hazard is the source that could cause it.",
          "That is a control because it changes exposure to the hazard.",
          "Correct. The spill is the source of possible harm, so it is the hazard."
        ]),
        q("check-m01-s01-q04", "scenario", "A hot surface may be touched accidentally. Which response is the most useful control statement?", 0, [
          "Prevent contact with the hot surface and follow the teacher-approved procedure before work continues.",
          "Tell everyone to be careful because heat is dangerous.",
          "Assume the risk is low if nobody has been hurt yet."
        ], [
          "Correct. The response names an action that reduces exposure and stays within approved procedures.",
          "The warning is too vague because it does not explain what will change to reduce the risk.",
          "No injury so far does not remove the hazard or establish that the risk is acceptable."
        ]),
        q("check-m01-s01-q05", "cause-effect", "Why is ‘be careful’ usually a weak control on its own?", 1, [
          "It always makes the possible consequence more serious.",
          "It does not specify an action that changes the hazardous situation or exposure.",
          "It identifies too many possible hazards at once."
        ], [
          "A vague warning does not necessarily change severity; its main weakness is failing to control the situation specifically.",
          "Correct. A useful control explains what action will reduce likelihood, consequence or both.",
          "The problem is not the number of hazards named; it is the lack of a matched action."
        ]),
        q("check-m01-s01-q06", "evidence-critique", "A response says, ‘Wear gloves to control any food-room hazard.’ What is the strongest critique?", 2, [
          "Gloves are never relevant in any situation.",
          "The response is strong because one protective item controls every risk.",
          "The control is not matched to a specific hazard, and gloves can create or transfer contamination too."
        ], [
          "That claim is too absolute. The issue is whether a control is suitable for the identified hazard.",
          "No single protective item controls every hazard; the response needs a specific hazard–control link.",
          "Correct. Controls must match the source of harm rather than being applied as a universal answer."
        ]),
        q("check-m01-s01-q07", "application", "Which situation most clearly requires a student to stop and seek teacher direction?", 0, [
          "Equipment appears damaged and the student is unsure whether it is safe to use.",
          "The student has identified a hazard and knows the approved control to apply.",
          "The student is writing a general definition of risk."
        ], [
          "Correct. Suspected damage and uncertainty are beyond student authority and require teacher direction.",
          "This may be managed within approved procedures; the key issue is not uncertainty or damaged equipment.",
          "Defining a concept does not create the immediate practical uncertainty described in the theory."
        ]),
        q("check-m01-s01-q08", "scenario", "A packaged ingredient has unclear allergen information. Which reasoning is safest and source-bound?", 1, [
          "Use a small amount because a smaller quantity removes the hazard.",
          "Stop and ask the teacher rather than guessing about the ingredient or local allergy process.",
          "Treat the packaging as safe because the ingredient has been used before."
        ], [
          "Reducing quantity does not resolve uncertain allergen information or authorise use.",
          "Correct. Unclear allergen information is a reason to pause and use the teacher-directed process.",
          "Past use does not establish current information, suitability or permission."
        ]),
        q("check-m01-s01-q09", "cause-effect", "How can a well-matched control reduce risk?", 2, [
          "By renaming the hazard so it sounds less serious.",
          "By proving that harm is impossible in every circumstance.",
          "By reducing the likelihood of harm, the possible consequence, or both."
        ], [
          "Changing the wording does not change the hazardous condition or exposure.",
          "Controls reduce risk; they do not usually prove that harm is impossible.",
          "Correct. A control works by changing likelihood, consequence or both in a way matched to the hazard."
        ]),
        q("check-m01-s01-q10", "application", "Which response forms the clearest hazard → harm → control chain?", 0, [
          "Sharp edge → possible cut → prevent use and follow the teacher-approved response.",
          "Possible cut → sharp edge → work more quickly.",
          "Danger → accident → be careful."
        ], [
          "Correct. It identifies the source, names the possible harm and selects a specific response within approved procedures.",
          "The hazard and harm are reversed, and speed does not control the sharp edge.",
          "These terms are too vague to show what causes harm or what action reduces the risk."
        ])
      ]
    },
    {
      sectionId: "m01-s02",
      moduleId: 1,
      title: "Hygiene breaks the contamination chain",
      theoryRoute: "modules/module-01.html#m01-s02",
      helpAnchor: "m01-s02-help-1",
      helpLabel: "Find the chain",
      questions: [
        q("check-m01-s02", "diagnostic", "A hand touches a phone, then a clean utensil, then ready-to-eat food. What is the strongest analysis?", 0, [
          "Trace the possible transfer through each contact and interrupt it using the teacher-approved hygiene process before food handling continues.",
          "The food is safe because the utensil looked clean.",
          "Gloves would make all earlier contact irrelevant."
        ], [
          "Correct. A contamination chain is understood by tracing what touched what and placing a control before the next transfer.",
          "Appearance cannot show every biological, chemical, physical or allergen contamination risk.",
          "Gloves can also transfer contamination. They do not erase the chain or replace hand hygiene."
        ]),
        q("check-m01-s02-q02", "recall", "Which list includes the four contamination categories described in the theory?", 1, [
          "Hot, cold, wet and dry.",
          "Biological, chemical, physical and allergen-related.",
          "Visible, invisible, serious and minor."
        ], [
          "These are conditions, not the four categories used to analyse contaminants.",
          "Correct. Contamination can be biological, chemical, physical or allergen-related.",
          "Visibility and seriousness may affect judgement, but they are not the four contaminant categories."
        ]),
        q("check-m01-s02-q03", "distinction", "Which statement correctly distinguishes cleaning from sanitising?", 2, [
          "Sanitising removes visible residue, while cleaning guarantees that all microorganisms are gone.",
          "They are two names for the same single step.",
          "Cleaning removes residue and dirt; sanitising follows cleaning when required and reduces microorganisms using the approved method."
        ], [
          "The actions are reversed, and neither ordinary step should be described as guaranteeing that all microorganisms are gone.",
          "They are related but different steps with different purposes.",
          "Correct. Cleaning prepares the surface, and sanitising is a separate approved step where required."
        ]),
        q("check-m01-s02-q04", "scenario", "A cloth contacts an uncooked ingredient area and then a ready-to-eat food area. What should the analysis begin with?", 0, [
          "Trace the cloth as a possible transfer link and interrupt the chain before the next contact.",
          "Judge the ready-to-eat area safe if no mark is visible.",
          "Focus only on whether the cloth smells clean."
        ], [
          "Correct. Following each contact reveals where the contamination chain can be broken.",
          "Contamination may not be visible, so appearance does not settle the question.",
          "Smell cannot establish whether biological, chemical, physical or allergen contamination has transferred."
        ]),
        q("check-m01-s02-q05", "cause-effect", "Why does separation protect ready-to-eat food?", 1, [
          "It makes every contaminated tool safe without further action.",
          "It prevents an uncooked ingredient or contaminated item from becoming the next link in a transfer chain.",
          "It changes biological contamination into harmless physical contamination."
        ], [
          "Separation prevents contact; it does not automatically make a contaminated item safe for reuse.",
          "Correct. Removing the contact pathway interrupts transfer before it reaches ready-to-eat food.",
          "Separation interrupts transfer; it does not transform one kind of contaminant into another."
        ]),
        q("check-m01-s02-q06", "evidence-critique", "A student says, ‘The bench looks clean, so sanitising could never be needed.’ What is wrong with this reasoning?", 2, [
          "A bench must always be sanitised before it can be cleaned.",
          "Visible residue is the only evidence that matters.",
          "Appearance does not reveal every contaminant, and the approved process determines whether sanitising follows cleaning."
        ], [
          "Cleaning comes before sanitising where sanitising is required, not the other way around.",
          "Microorganisms and allergens may be present without visible residue.",
          "Correct. Visual inspection cannot replace the approved cleaning and sanitising decision."
        ]),
        q("check-m01-s02-q07", "application", "A utensil has contacted an uncooked ingredient. Which plan offers two possible break points before it reaches ready-to-eat food?", 0, [
          "Keep the utensil separated, then clean and sanitise it if the approved procedure requires before reuse.",
          "Place it beside the ready-to-eat food and decide later whether contact occurred.",
          "Wipe it on a cloth and assume the chain has ended."
        ], [
          "Correct. Separation prevents the next contact, while the approved cleaning and sanitising process prepares the item for authorised reuse.",
          "This allows the transfer pathway to remain open instead of interrupting it early.",
          "The cloth may become another link, and wiping alone is not the approved cleaning process."
        ]),
        q("check-m01-s02-q08", "scenario", "A gloved hand touches a phone and then reaches for food. What is the strongest conclusion?", 1, [
          "The glove blocks contamination regardless of what it touches.",
          "The glove may now be part of the contamination chain, so the approved hygiene process must be reset before food handling.",
          "Only bare hands can transfer contamination."
        ], [
          "Gloves can carry contaminants between objects just as hands can.",
          "Correct. The contact event matters; wearing a glove does not erase the chain.",
          "Any contaminated hand covering can transfer material to food, tools or surfaces."
        ]),
        q("check-m01-s02-q09", "cause-effect", "Why are time and temperature decisions for perishable food kept within teacher-approved procedures?", 2, [
          "Because every perishable food follows one universal classroom rule.",
          "Because students can safely invent a limit if they know the food name.",
          "Because the correct decision depends on the approved local process and equipment rather than a guessed rule."
        ], [
          "The theory deliberately avoids claiming that one rule fits every food-room context.",
          "A food name alone does not authorise a student to invent a safety limit.",
          "Correct. Students should follow the verified procedure and seek direction when it is unclear."
        ]),
        q("check-m01-s02-q10", "application", "Which explanation best identifies a complete contamination-control decision?", 0, [
          "Name the possible source, trace each contact, select a break point and apply the approved control before transfer continues.",
          "Wait for visible spoilage, then decide whether any earlier contact mattered.",
          "Choose one hygiene product first and fit every situation to it."
        ], [
          "Correct. The reasoning connects the chain to a purposeful intervention rather than relying on appearance or habit.",
          "Visible change is not required for contamination to transfer or cause harm.",
          "Controls should be selected after identifying the pathway and must follow the approved method."
        ])
      ]
    },
    {
      sectionId: "m01-s03",
      moduleId: 1,
      title: "Ready before you begin",
      theoryRoute: "modules/module-01.html#m01-s03",
      helpAnchor: "m01-s03-help-2",
      helpLabel: "When should I ask?",
      questions: [
        q("check-m01-s03", "diagnostic", "A method is clear, but a piece of equipment appears damaged. What should happen next?", 0, [
          "Stop and ask the teacher before using, testing or moving ahead with that equipment.",
          "Test it briefly because the method has already been read.",
          "Complete the checklist and begin because the checklist gives permission."
        ], [
          "Correct. Readiness includes equipment condition and permission, not just understanding the method.",
          "Reading the method does not authorise a student to test equipment that appears faulty.",
          "A checklist supports memory; it never replaces teacher instruction or local approval."
        ]),
        q("check-m01-s03-q02", "recall", "What does practical readiness include?", 1, [
          "Beginning quickly and solving missing information while cooking.",
          "Preparing yourself, the workspace, the authorised method and your understanding before starting.",
          "Memorising every possible local rule without asking questions."
        ], [
          "A rushed start can hide missing information and create unsafe decisions later.",
          "Correct. Readiness brings personal, workspace, method and permission checks together before work begins.",
          "Some rules are local and teacher-controlled, so asking is part of readiness."
        ]),
        q("check-m01-s03-q03", "distinction", "What is the correct relationship between a checklist and permission?", 2, [
          "Completing the checklist automatically authorises every item of equipment.",
          "Permission replaces the need to read the authorised method.",
          "A checklist supports memory, while instruction and teacher approval still control what a student may do."
        ], [
          "A checklist cannot grant local equipment permission or prove competence.",
          "Permission and preparation work together; neither makes the method unnecessary.",
          "Correct. The checklist is a prompt, not an authority or assessment decision."
        ]),
        q("check-m01-s03-q04", "scenario", "Which sequence matches the calm staged start described in the theory?", 0, [
          "Read → Check → Ask → Set up.",
          "Set up → Test → Guess → Read.",
          "Ask → Begin → Repair → Check."
        ], [
          "Correct. This order identifies the method, visible readiness and unresolved questions before authorised setup.",
          "Testing and guessing are not appropriate responses to uncertainty, and reading comes too late.",
          "Students should not repair suspected faults, and beginning before checking defeats the readiness process."
        ]),
        q("check-m01-s03-q05", "cause-effect", "Why can a short readiness check improve efficiency?", 1, [
          "It guarantees that no issue can occur once work starts.",
          "It can reveal missing information, unclear permission or damaged equipment before these create delays.",
          "It allows students to skip the authorised method."
        ], [
          "Readiness reduces avoidable problems but cannot guarantee that nothing unexpected will happen.",
          "Correct. Finding an issue early supports a calmer response before practical work is underway.",
          "Reading the method is one of the central readiness steps, not something the check replaces."
        ]),
        q("check-m01-s03-q06", "evidence-critique", "A student argues, ‘I understand the method, so every part of the setup must be safe.’ What is missing?", 2, [
          "Nothing; method knowledge proves equipment condition and local permission.",
          "Only a faster setup is needed.",
          "Readiness also requires checks of personal preparation, workspace, visible equipment condition and unresolved local requirements."
        ], [
          "Understanding instructions does not prove that equipment is undamaged or that local permission is in place.",
          "Speed does not answer the missing safety and authority questions.",
          "Correct. Method knowledge is one part of readiness, not evidence for every other condition."
        ]),
        q("check-m01-s03-q07", "application", "A student needs to report an illness or allergy concern before practical work. Which response fits the theory?", 0, [
          "Use the school's teacher-directed process and wait for direction before continuing.",
          "Choose a personal workaround without telling anyone.",
          "Assume the concern is irrelevant if the method does not mention it."
        ], [
          "Correct. The local response is teacher-controlled, so the student should report the concern rather than invent a procedure.",
          "A private workaround may be unsafe and does not establish approval.",
          "An authorised method cannot cover every individual concern or local process."
        ]),
        q("check-m01-s03-q08", "scenario", "During the visible equipment check, what should a student do if an item appears normal?", 1, [
          "Dismantle it to prove there is no hidden fault.",
          "Continue only within the instruction and permission already provided, without treating the visual check as a guarantee.",
          "Assume appearance grants permission to use it for any purpose."
        ], [
          "Students should not dismantle or test equipment to investigate possible faults.",
          "Correct. A visible check supports readiness, but authorised use still depends on instruction and permission.",
          "Appearance does not extend the equipment's approved use or grant new authority."
        ]),
        q("check-m01-s03-q09", "cause-effect", "What should happen when a local rule about clothing, chemicals or equipment is unclear?", 2, [
          "Apply a rule remembered from another classroom.",
          "Let each group invent a reasonable procedure.",
          "Pause and ask the teacher because local requirements cannot be inferred safely."
        ], [
          "Another setting's procedure may not be authorised or suitable here.",
          "Reasonable-sounding guesses do not establish local approval.",
          "Correct. Uncertainty about a teacher-controlled requirement is a prompt to seek direction."
        ]),
        q("check-m01-s03-q10", "application", "Which plan best demonstrates readiness without claiming competence or permission?", 0, [
          "Review the method, check personal and workspace readiness, note visible concerns, ask about uncertainties, then set up only what is authorised.",
          "Tick every box, announce readiness and begin before the teacher can respond.",
          "Set up all available equipment so no decision is needed later."
        ], [
          "Correct. The plan uses the checklist as support while preserving teacher direction and equipment boundaries.",
          "Self-declaration and a completed checklist do not replace teacher approval or resolution of concerns.",
          "Setting up unneeded or unauthorised equipment increases uncertainty rather than demonstrating readiness."
        ])
      ]
    },
    {
      sectionId: "m02-s01",
      moduleId: 2,
      title: "Country, identity and respectful language",
      theoryRoute: "modules/module-02.html#m02-s01",
      helpAnchor: "m02-s01-help-1",
      helpLabel: "Is my wording too broad?",
      questions: [
        q("check-m02-s01", "diagnostic", "Which research sentence is most accurate and respectful?", 0, [
          "This named Aboriginal-authored source explains the food knowledge it is authorised to share in its identified place and context.",
          "Aboriginal people across Australia traditionally ate the same native foods.",
          "Because a plant is native, anyone may harvest it anywhere."
        ], [
          "Correct. The claim stays with the named source, place and limits of the evidence.",
          "This collapses many Peoples, Countries and food traditions into one unsupported claim.",
          "Native origin does not establish access, permission, safety or cultural authority."
        ]),
        q("check-m02-s01-q02", "recall", "Why should research avoid describing one Aboriginal or Torres Strait Islander food culture for all of Australia?", 1, [
          "Because food knowledge can only be discussed in private.",
          "Because Peoples, languages, Countries and food traditions are diverse and place-based.",
          "Because no public sources can ever be used for education."
        ], [
          "Some knowledge may be publicly shared for education; the key issue is authority, diversity and context.",
          "Correct. Broad claims erase the distinct Peoples, places and knowledge systems represented by source-specific evidence.",
          "Clearly authorised public educational sources can be suitable when used within their purpose and limits."
        ]),
        q("check-m02-s01-q03", "distinction", "Which description best reflects the meaning of Country in this section?", 2, [
          "A boundary line that automatically proves who may share cultural knowledge.",
          "A general synonym for any rural location.",
          "A Community-specific concept that can include land, waters, skies, living things, relationships, law, knowledge, responsibility and belonging."
        ], [
          "A mapped boundary does not establish cultural authority or permission.",
          "Country carries relationships and responsibilities that are not captured by a generic location label.",
          "Correct. The definition remains broad enough to recognise connections while noting that exact meanings are Community-specific."
        ]),
        q("check-m02-s01-q04", "scenario", "A source clearly identifies a Nation and describes one publicly shared food practice. Which student sentence is strongest?", 0, [
          "In this named source and context, the Nation describes the practice it has chosen to share publicly.",
          "This practice represents every Aboriginal Community in Australia.",
          "The place name means the student now has authority to add local details."
        ], [
          "Correct. The statement names the source context and does not expand beyond what was shared.",
          "One Nation's evidence cannot support a universal claim about diverse Peoples and Countries.",
          "Naming a place improves specificity but does not grant cultural authority or permission to invent details."
        ]),
        q("check-m02-s01-q05", "cause-effect", "What is a likely effect of using ‘bush tucker’ as a catch-all label without context?", 1, [
          "It automatically identifies the correct Nation and Language group.",
          "It can flatten distinct food traditions into one broad, decontextualised category.",
          "It proves that the foods described are available to harvest."
        ], [
          "The label does not establish group identity or source context.",
          "Correct. Familiar wording can still erase important differences among Peoples, places and food traditions.",
          "A label cannot establish access, safety, cultural permission or local availability."
        ]),
        q("check-m02-s01-q06", "evidence-critique", "A student uses a cultural map to name a Community and then claims permission to speak for it. What is the key flaw?", 2, [
          "Maps never contain useful information about place.",
          "Permission is unnecessary when a map is publicly available.",
          "A map may support location awareness, but it does not establish the student's cultural authority or permission."
        ], [
          "A credible map may support careful place awareness; the flaw is treating it as authority.",
          "Public availability does not remove the need for cultural authority and appropriate source use.",
          "Correct. Location evidence and permission are different questions."
        ]),
        q("check-m02-s01-q07", "application", "Which wording is most suitable when speaking broadly rather than about a specifically named group?", 0, [
          "Aboriginal and Torres Strait Islander Peoples are diverse, and food knowledge is connected to particular Countries and Communities.",
          "The Aboriginal culture has one traditional Australian diet.",
          "All native foods carry the same cultural meaning."
        ], [
          "Correct. The plural language recognises diversity and keeps knowledge connected to place.",
          "The singular wording creates an inaccurate universal culture and diet.",
          "Cultural meanings and uses vary; native origin alone cannot support this claim."
        ]),
        q("check-m02-s01-q08", "scenario", "A food name is associated online with a particular region, but the source does not name a Nation or Community. What should the student do?", 1, [
          "Guess the group from the nearest map label.",
          "Keep the claim at the level the credible source supports and find clearer evidence before naming a group.",
          "State that every nearby Community uses the food in the same way."
        ], [
          "A geographic guess can misidentify people and does not establish source authority.",
          "Correct. Specific names should come from credible evidence, not inference from location alone.",
          "Proximity does not prove shared practice, meaning or authority."
        ]),
        q("check-m02-s01-q09", "cause-effect", "Why does a food being native to Australia not establish harvesting permission?", 2, [
          "Because native foods have no relationship to place.",
          "Because all native foods are culturally restricted in exactly the same way.",
          "Because origin, land access, safety and cultural authority are separate matters that require appropriate evidence and direction."
        ], [
          "Native species and foods can be deeply place-connected; the problem is assuming origin equals permission.",
          "Restrictions and responsibilities vary, so a universal claim is not supported.",
          "Correct. Native status answers an origin question, not who may access, harvest or use something."
        ]),
        q("check-m02-s01-q10", "application", "Which revision best narrows the claim ‘Aboriginal people used this food everywhere’?", 0, [
          "The named Aboriginal-authored source describes this food use in its identified Country and public context.",
          "Most Aboriginal people probably used it, although the source covers one place.",
          "The food was used everywhere because it is native."
        ], [
          "Correct. The revision ties the claim to the creator, place and limits of the evidence.",
          "‘Probably’ does not solve the unsupported leap from one place to most Peoples.",
          "Native origin does not prove distribution, use or cultural meaning across Australia."
        ])
      ]
    },
    {
      sectionId: "m02-s02",
      moduleId: 2,
      title: "Compare nutrition evidence fairly",
      theoryRoute: "modules/module-02.html#m02-s02",
      helpAnchor: "m02-s02-help-1",
      helpLabel: "Can these data be compared?",
      questions: [
        q("check-m02-s02", "diagnostic", "Before comparing the iron values of two foods, which check matters most?", 0, [
          "Confirm the exact food and preparation state, the same nutrient and a matching basis such as per 100 g.",
          "Choose the larger number even if one value is per serve and the other is per 100 g.",
          "Use one nutrient value to decide which whole food is healthier."
        ], [
          "Correct. A matched basis makes the numerical comparison meaningful while still requiring a limited claim.",
          "Different bases can make the larger number misleading; standardise the comparison first.",
          "One nutrient cannot support a total health ranking of two foods."
        ]),
        q("check-m02-s02-q02", "recall", "What is a comparison basis in nutrition evidence?", 1, [
          "The cultural origin of the food being measured.",
          "A common unit such as per serving or per 100 g used to compare data fairly.",
          "A judgement that one whole food is better than another."
        ], [
          "Origin may matter to context, but it is not the common measurement unit used for the comparison.",
          "Correct. Matching the basis prevents unlike quantities from being treated as directly comparable.",
          "A comparison basis is a unit, not an overall health ranking."
        ]),
        q("check-m02-s02-q03", "distinction", "Which difference could make two nutrient values unsuitable for a direct comparison?", 2, [
          "Both sources identify the same nutrient and use the same unit.",
          "Both sources describe the same preparation state.",
          "One source describes a raw form while the other describes a differently prepared form."
        ], [
          "Matching nutrient and unit strengthens comparability rather than weakening it.",
          "A matching preparation state removes one source of unfair comparison.",
          "Correct. Preparation can change food composition, so the forms need to be checked before comparing."
        ]),
        q("check-m02-s02-q04", "scenario", "One source reports a nutrient per serve and another reports it per 100 g. What should happen first?", 0, [
          "Convert or find data on a matching basis before deciding which value is greater.",
          "Select whichever printed number is larger.",
          "Assume a serving is always exactly 100 g."
        ], [
          "Correct. A common basis is required before the numerical difference can support a fair claim.",
          "The larger printed number may reflect a different quantity rather than more of the nutrient.",
          "Serving sizes vary, so this assumption would create an unsupported comparison."
        ]),
        q("check-m02-s02-q05", "cause-effect", "Why can one high nutrient value not prove that a food is healthier overall?", 1, [
          "Because nutrient information is never useful.",
          "Because a whole food has a broader nutrient profile and health claims require more evidence than one number.",
          "Because the lower value is always healthier."
        ], [
          "Nutrition evidence is useful when claims match what the data can show.",
          "Correct. One result can support a limited nutrient comparison, not a total judgement about the food.",
          "Reversing the ranking still turns one value into an unsupported whole-food conclusion."
        ]),
        q("check-m02-s02-q06", "evidence-critique", "Which source would give the strongest basis for a nutrient comparison?", 2, [
          "An unattributed social-media claim saying a food is a superfood.",
          "A product slogan with no measurement basis or food form.",
          "An identifiable credible source that names the exact food, form, nutrient and comparison unit."
        ], [
          "The claim lacks identifiable evidence, measurement details and a limited conclusion.",
          "A slogan is persuasive language, not sufficient nutrition data.",
          "Correct. Those details allow the evidence and its limitations to be checked."
        ]),
        q("check-m02-s02-q07", "application", "Which conclusion best matches a fair comparison of two matched data sources?", 0, [
          "In these sources, Food A contains more of the reported nutrient on the same basis; this alone does not show it is healthier overall.",
          "Food A is the healthiest food because one nutrient value is higher.",
          "Food B has no nutritional value because its reported number is lower."
        ], [
          "Correct. The statement reports the supported difference and includes a clear limitation.",
          "A single nutrient cannot support a total health ranking.",
          "A lower result for one nutrient does not mean the food has no nutrition or value."
        ]),
        q("check-m02-s02-q08", "scenario", "Two foods have similar common names, but the sources identify different species. What is the careful response?", 1, [
          "Treat the names as proof that the nutrient profiles are identical.",
          "Record the exact identities and avoid a direct claim until evidence for comparable forms is available.",
          "Average the values because species differences do not matter."
        ], [
          "Similar common names do not establish identical species, forms or nutrient profiles.",
          "Correct. Exact food identity is one of the first checks in a fair comparison.",
          "Averaging unlike data would hide the identity problem rather than resolve it."
        ]),
        q("check-m02-s02-q09", "cause-effect", "What does describing a food as native to Australia establish about its nutrition?", 2, [
          "It proves the food prevents disease.",
          "It proves the food is healthier than every introduced food.",
          "It establishes origin, while any nutrition claim still requires evidence about the specific food and form."
        ], [
          "Disease prevention is a health claim requiring specific strong evidence, not a conclusion from origin.",
          "Origin does not create an automatic nutritional ranking.",
          "Correct. Native status and nutrient evidence answer different questions."
        ]),
        q("check-m02-s02-q10", "application", "Which audit would most improve a draft nutrition comparison?", 0, [
          "Check exact identity, preparation state, nutrient, basis, source credibility, claim strength and one important limitation.",
          "Replace all details with the word ‘healthy’.",
          "Keep only the largest number and remove the units."
        ], [
          "Correct. These checks make the evidence comparable and keep the conclusion within what it supports.",
          "A broad label removes the evidence and makes the claim harder to assess.",
          "Removing units destroys the comparison basis and can make the number misleading."
        ])
      ]
    },
    {
      sectionId: "m02-s03",
      moduleId: 2,
      title: "Modify with a reason",
      theoryRoute: "modules/module-02.html#m02-s03",
      helpAnchor: "m02-s03-help-2",
      helpLabel: "Is my trial fair?",
      questions: [
        q("check-m02-s03", "diagnostic", "Which plan would produce the clearest evidence about a proposed ingredient modification?", 0, [
          "Change one planned factor, keep important conditions comparable and record effects against the stated purpose.",
          "Change the ingredient, method and serving size together, then judge by appearance alone.",
          "Assume that adding more of a native ingredient always improves flavour and respectfulness."
        ], [
          "Correct. A controlled comparison makes it easier to connect an observed effect to the intended change.",
          "Several simultaneous changes make the cause of any result unclear, and appearance alone may not match the design purpose.",
          "Quantity does not guarantee quality or respectful use; identity, provenance, context and evidence still matter."
        ]),
        q("check-m02-s03-q02", "recall", "What should guide an ingredient modification before a trial is planned?", 1, [
          "The aim of adding as many new ingredients as possible.",
          "A clear purpose such as investigating flavour, texture, appearance, nutrition profile or cultural connection.",
          "The assumption that any change will improve the product."
        ], [
          "More changes can make both the design purpose and any observed cause unclear.",
          "Correct. The purpose gives the proposal a reason and provides criteria for later evaluation.",
          "A modification must be predicted and tested; improvement cannot be assumed."
        ]),
        q("check-m02-s03-q03", "distinction", "What is an ingredient's functional role?", 2, [
          "The cultural permission automatically created by buying it.",
          "The student's personal preference for the ingredient.",
          "The way it contributes to qualities such as structure, moisture, flavour, texture or cooking behaviour."
        ], [
          "Purchase does not establish cultural authority, and permission is not a food-function property.",
          "Preference may affect a design choice, but it does not define what the ingredient does in the product.",
          "Correct. Functional roles help predict effects beyond taste alone."
        ]),
        q("check-m02-s03-q04", "scenario", "A class is comparing a familiar base product with one approved ingredient change. Which trial design is fairest?", 0, [
          "Keep the important conditions comparable, change that one factor and record observations linked to the purpose.",
          "Change the method and several ingredients at the same time.",
          "Make only the modified version and rely on memory of the original."
        ], [
          "Correct. The controlled comparison makes the intended variable easier to connect with observed effects.",
          "Several simultaneous variables prevent a clear explanation of what caused the result.",
          "Without a comparable reference, differences may be based on memory rather than evidence."
        ]),
        q("check-m02-s03-q05", "cause-effect", "Why should a proposal predict more than a flavour change?", 1, [
          "Because flavour can never be affected by ingredients.",
          "Because an ingredient may also change structure, moisture, colour, texture or cooking behaviour.",
          "Because every ingredient produces exactly the same set of changes."
        ], [
          "Flavour is one valid possible effect; it is simply not the only one.",
          "Correct. Functional roles can create several connected product effects that should be anticipated and observed.",
          "The effects depend on the ingredient, product and conditions, so they are not universal."
        ]),
        q("check-m02-s03-q06", "evidence-critique", "A proposal says, ‘Adding more of this native ingredient will automatically make the product more respectful.’ What is the strongest critique?", 2, [
          "Respect depends only on flavour intensity.",
          "Any use of a native ingredient is automatically disrespectful.",
          "Respect also depends on accurate identity, provenance, authorised context, sourcing and claims that stay within the evidence."
        ], [
          "Flavour intensity does not establish cultural authority or responsible sourcing.",
          "That is another unsupported absolute claim; suitability depends on the particular source and context.",
          "Correct. Quantity alone cannot provide the evidence and relationships required for respectful use."
        ]),
        q("check-m02-s03-q07", "application", "Which pre-trial evidence set is most complete for proposing a native ingredient?", 0, [
          "Accurate identity, credible source and provenance, authorised cultural context, relevant safety and allergy information, availability and teacher approval.",
          "A photograph and the claim that the ingredient is popular.",
          "A student's guess about origin and a plan to seek approval after the trial."
        ], [
          "Correct. These checks keep the design evidence-based while leaving practical authority with the teacher.",
          "Popularity and appearance do not establish identity, provenance, cultural context or practical suitability.",
          "Identity and approval need to be resolved before practical testing, not guessed or deferred."
        ]),
        q("check-m02-s03-q08", "scenario", "One controlled trial produces a promising result. What is the most defensible conclusion?", 1, [
          "The modification will work in every recipe and situation.",
          "The result is evidence about this test and its conditions, but further trials would be needed for a broader claim.",
          "The result proves the ingredient has no other functional effects."
        ], [
          "One trial cannot establish a universal result across products and conditions.",
          "Correct. The conclusion values the evidence without extending it beyond the test performed.",
          "A promising result does not rule out changes to other product qualities."
        ]),
        q("check-m02-s03-q09", "cause-effect", "Why does changing the ingredient, method and serving size together weaken a trial?", 2, [
          "It guarantees the product will be unacceptable.",
          "It makes observations unnecessary.",
          "It becomes difficult to tell which changed factor caused each observed result."
        ], [
          "The issue is unclear causation, not a guaranteed quality outcome.",
          "More variables make careful observation and comparison more important, not unnecessary.",
          "Correct. A fair trial isolates one clear variable while holding important conditions consistent."
        ]),
        q("check-m02-s03-q10", "application", "Which evaluation best closes the modification design loop?", 0, [
          "Compare recorded observations with the original purpose and criteria, then identify what the evidence supports and what should change next.",
          "Declare success because the modified product looks different.",
          "Ignore the stated purpose and choose the version with the strongest flavour."
        ], [
          "Correct. Evaluation returns to the purpose, uses evidence and supports a reasoned next decision.",
          "Difference alone does not show that the modification met its intended purpose.",
          "Flavour intensity may not be the goal and cannot replace the agreed criteria."
        ])
      ]
    },
    {
      sectionId: "m03-s01",
      moduleId: 3,
      title: "Cultural Knowledge is living, local and owned",
      theoryRoute: "modules/module-03.html#m03-s01",
      helpAnchor: "m03-s01-help-1",
      helpLabel: "Can I use this source?",
      questions: [
        q("check-m03-s01", "diagnostic", "Which source check best supports responsible use of Cultural Knowledge in a school explanation?", 0, [
          "Identify the creator, Country or Community context, public purpose, authority and stated limits before deciding how to use it.",
          "Use anything searchable online as long as its URL is listed.",
          "Treat old knowledge as ownerless because it predates copyright."
        ], [
          "Correct. These checks test whether the source is appropriate for the specific educational use.",
          "Public access and attribution do not automatically establish cultural authority or reuse permission.",
          "Cultural Knowledge remains connected to living Communities, relationships and responsibilities."
        ]),
        q("check-m03-s01-q02", "recall", "Which statement best describes Aboriginal and Torres Strait Islander Cultural Knowledge?", 1, [
          "A fixed collection of historical facts with no present-day holders.",
          "Living knowledge connected to people, Country, language, practices, relationships and responsibilities.",
          "Any information about Australia that appears in a public search result."
        ], [
          "Cultural Knowledge remains living and connected to contemporary Communities and responsibilities.",
          "Correct. This recognises both the living nature of the knowledge and the relationships that govern it.",
          "A search result does not establish cultural identity, authority or context."
        ]),
        q("check-m03-s01-q03", "distinction", "What is the difference between public access and unrestricted cultural use?", 2, [
          "There is no difference once information appears online.",
          "Public access removes the need to identify the creator.",
          "A source may be publicly viewable while its cultural context, authority and reuse limits still matter."
        ], [
          "Availability does not remove rights, responsibilities or source conditions.",
          "Creator and authority checks become more important, not less, when deciding how to use a public source.",
          "Correct. Viewing information and having permission to reproduce or adapt it are different matters."
        ]),
        q("check-m03-s01-q04", "scenario", "A source is clearly attributed to an Aboriginal-led organisation and states that it was created for public education. What is the careful next step?", 0, [
          "Use it within its stated purpose and limits, keeping attribution and context with the explanation.",
          "Assume every item on the organisation's website can be copied and redesigned.",
          "Treat the organisation as speaking for all Aboriginal and Torres Strait Islander Peoples."
        ], [
          "Correct. Clear identity and public purpose support careful use, but the source's own limits still apply.",
          "Authority for one resource does not create blanket permission for every item or form of reuse.",
          "Authority is specific to people, knowledge and context, not universal representation."
        ]),
        q("check-m03-s01-q05", "cause-effect", "Why is an anonymous post making a broad cultural claim weak evidence?", 1, [
          "Anonymous sources are always factually false.",
          "Its creator, authority, place, purpose and limits cannot be checked reliably.",
          "Broad claims are stronger because they include more people."
        ], [
          "The issue is not automatic falsity; it is the lack of evidence needed to judge the claim responsibly.",
          "Correct. Missing context prevents a researcher from knowing how far or for what purpose the claim can be used.",
          "Including more people without evidence increases overgeneralisation rather than strength."
        ]),
        q("check-m03-s01-q06", "evidence-critique", "A student cites a source correctly and concludes that any adaptation is now permitted. What is the flaw?", 2, [
          "Attribution should never be used with Cultural Knowledge.",
          "Adaptation is permitted whenever a school audience is involved.",
          "Attribution identifies the source, but it does not replace permission, authority or the source's stated limits."
        ], [
          "Attribution is important when appropriate; it simply does not settle every reuse question.",
          "School use does not remove cultural responsibilities or reuse conditions.",
          "Correct. Credit and permission are connected but distinct decisions."
        ]),
        q("check-m03-s01-q07", "application", "A project seeks to include local Cultural Knowledge not covered by a clear public source. What is the responsible pathway?", 0, [
          "Pause and seek teacher-directed guidance involving the appropriate Community, AECG or Knowledge Holders.",
          "Fill the gap with details from a different Community.",
          "Invent a general version so no particular group is named."
        ], [
          "Correct. Local knowledge requires local authority and relationships, not a generated substitute.",
          "Knowledge from another Community cannot establish permission or accuracy for the local context.",
          "Removing names does not make invented cultural information respectful or reliable."
        ]),
        q("check-m03-s01-q08", "scenario", "One respected speaker discusses knowledge from their own Community. Which conclusion is defensible?", 1, [
          "The speaker's authority automatically extends to every Community and topic.",
          "Use the account within the speaker's stated Community, knowledge area and purpose rather than universalising it.",
          "The account is only historical because it concerns Cultural Knowledge."
        ], [
          "Authority is specific; one person cannot be assumed to speak for all Peoples or knowledge.",
          "Correct. The claim stays with the person, place and scope actually represented.",
          "Cultural Knowledge is living and may be part of contemporary practice and responsibility."
        ]),
        q("check-m03-s01-q09", "cause-effect", "Why should a researcher check why a cultural source was created?", 2, [
          "Purpose proves that every factual claim is complete.",
          "Purpose is only relevant for anonymous sources.",
          "Purpose helps show whether the information was intended for public learning and how it may appropriately be used."
        ], [
          "A clear purpose supports interpretation, but it does not prove completeness or remove other checks.",
          "Creator identity, purpose and authority matter for attributed sources too.",
          "Correct. Intended purpose is part of deciding whether a source fits the proposed educational use."
        ]),
        q("check-m03-s01-q10", "application", "Which source audit is most complete before using Cultural Knowledge?", 0, [
          "Identify creator, Country or Community, public purpose, authority, limits and the proposed use; pause if any essential context is unclear.",
          "Check only that the webpage loads and has a recent date.",
          "Count how many times the claim has been reposted."
        ], [
          "Correct. The audit focuses on relationships, authority and suitability rather than popularity or technical access.",
          "Availability and date do not establish who may speak or how knowledge may be reused.",
          "Repetition can spread a decontextualised claim without strengthening its authority."
        ])
      ]
    },
    {
      sectionId: "m03-s02",
      moduleId: 3,
      title: "Seasons, cycles and caring for resources",
      theoryRoute: "modules/module-03.html#m03-s02",
      helpAnchor: "m03-s02-help-2",
      helpLabel: "What can I learn from a calendar?",
      questions: [
        q("check-m03-s02", "diagnostic", "What is a responsible conclusion from a public Aboriginal seasonal calendar?", 0, [
          "It can show relationships among local indicators, timing, decisions and care in the identified context, but it does not grant harvesting permission.",
          "It proves that all Australian places have the same seasons.",
          "It is a set of historical ideas no longer used today."
        ], [
          "Correct. The learning stays connected to place and does not turn public information into permission.",
          "Seasonal patterns and indicators vary by Country and Community.",
          "Aboriginal land and sea management is living, contemporary expertise."
        ]),
        q("check-m03-s02-q02", "recall", "What can act as a seasonal indicator in place-based knowledge?", 1, [
          "Only the four imported calendar season names.",
          "Local signs such as flowering, animal behaviour, water conditions and weather.",
          "A universal date that applies across all Countries."
        ], [
          "The theory explains that seasonal knowledge may be organised through local ecological relationships rather than only four labels.",
          "Correct. These connected observations can signal changing conditions in a particular place.",
          "Indicators and timing vary by Country and Community, so one date cannot be universal."
        ]),
        q("check-m03-s02-q03", "distinction", "Which statement best distinguishes a cyclic pattern from a simple timetable?", 2, [
          "A cyclic pattern is random and has no relationship to observation.",
          "A timetable always provides cultural permission to act.",
          "A cyclic pattern can connect recurring ecological indicators, availability, renewal and responsibilities."
        ], [
          "Cyclic knowledge can reflect detailed observation and recurring relationships.",
          "A schedule does not establish cultural authority or permission.",
          "Correct. The cycle is understood through relationships and renewal, not merely dates on a page."
        ]),
        q("check-m03-s02-q04", "scenario", "A public calendar for one Country links a plant's flowering with animal activity. How should a student use it?", 0, [
          "Explain the relationship shown for that identified context and avoid applying it automatically elsewhere.",
          "Turn the indicators into a national harvesting schedule.",
          "Use it as instructions to perform any associated cultural practice."
        ], [
          "Correct. The explanation remains place-specific and within the calendar's public educational purpose.",
          "One Country's indicators do not establish a national seasonal pattern or permission.",
          "Learning about a relationship does not authorise culturally governed action."
        ]),
        q("check-m03-s02-q05", "cause-effect", "Why can caring for regeneration affect a resource decision?", 1, [
          "Because taking more always speeds up renewal.",
          "Because present use is connected to the resource's ability to recover and remain available in the future.",
          "Because regeneration is unrelated to availability."
        ], [
          "Greater taking does not automatically support renewal; the relationship requires evidence and authority.",
          "Correct. Care links a current decision with future resource health and responsibility.",
          "Regeneration directly concerns the renewal of living resources over time."
        ]),
        q("check-m03-s02-q06", "evidence-critique", "A generic chart labels one food ‘summer food across Australia’. What is the strongest criticism?", 2, [
          "Calendar seasons can never be mentioned in food research.",
          "A broad national claim is reliable if the chart is colourful.",
          "The claim lacks a specific Country, Community, source and local indicators, so it may erase important variation."
        ], [
          "Calendar labels may appear in a source; the issue is treating them as a complete universal system.",
          "Presentation quality does not establish evidence or cultural authority.",
          "Correct. Seasonal knowledge needs place-specific source context rather than a national catch-all."
        ]),
        q("check-m03-s02-q07", "application", "Which comparison would best show the strength of an Aboriginal-authored seasonal source?", 0, [
          "It identifies place and connects several local observations with timing, resource decisions and care.",
          "It uses the same four seasons for every region without explanation.",
          "It offers harvesting permission to anyone who reads it."
        ], [
          "Correct. The source explains relationships in a defined context rather than presenting a universal timetable.",
          "Uniform labels can hide locally meaningful indicators and variation.",
          "A public educational resource does not automatically grant access or harvesting permission."
        ]),
        q("check-m03-s02-q08", "scenario", "Students learn publicly shared information about controlled cultural burning. What may they conclude?", 1, [
          "They now have instructions and authority to carry it out.",
          "It is expert, place-specific land-care knowledge governed by Community authority, not a classroom permission to practise it.",
          "It belongs only to the past and has no contemporary role."
        ], [
          "Classroom learning does not grant practical or cultural authority.",
          "Correct. The conclusion recognises expertise, place and ongoing authority without converting learning into permission.",
          "Aboriginal land and sea management continues as contemporary practice."
        ]),
        q("check-m03-s02-q09", "cause-effect", "How can changing water conditions matter in a seasonal knowledge system?", 2, [
          "They prove every plant and animal responds in the same way.",
          "They remove the need to observe other indicators.",
          "They may form one local indicator that interacts with plants, animals, weather and resource decisions."
        ], [
          "Responses differ among species, places and conditions; a universal effect is unsupported.",
          "Seasonal reasoning can use several connected observations rather than one signal alone.",
          "Correct. The emphasis is on relationships among local indicators, not an isolated universal rule."
        ]),
        q("check-m03-s02-q10", "application", "Which conclusion is appropriately qualified after studying one seasonal calendar?", 0, [
          "This source shows how particular indicators guide decisions and care in its named context; more local evidence is needed elsewhere.",
          "The calendar proves one seasonal system applies throughout Australia.",
          "The calendar authorises students to collect every food it names."
        ], [
          "Correct. It states what the source supports and makes the geographical and authority limits visible.",
          "One source cannot represent all Countries, climates or Communities.",
          "Information about availability is not permission to harvest or access resources."
        ])
      ]
    },
    {
      sectionId: "m03-s03",
      moduleId: 3,
      title: "Research, permission and ICIP",
      theoryRoute: "modules/module-03.html#m03-s03",
      helpAnchor: "m03-s03-help-2",
      helpLabel: "When unsure",
      questions: [
        q("check-m03-s03", "diagnostic", "A source names no creator or Community and gives no reuse conditions. What is the best next step?", 0, [
          "Pause, seek context or teacher guidance, and prefer linking or a clearer authorised source rather than guessing permission.",
          "Copy it because school work is automatically exempt from all reuse responsibilities.",
          "Change the colours so the cultural material becomes a new work."
        ], [
          "Correct. Uncertainty is a reason to narrow or change the use, not to invent authority.",
          "School use does not remove ICIP, copyright or contextual responsibilities.",
          "A cosmetic change does not remove the source, meaning or responsibilities."
        ]),
        q("check-m03-s03-q02", "recall", "What does ICIP refer to in this section?", 1, [
          "A single copyright licence used by every Community.",
          "Rights and responsibilities connected with Indigenous cultural heritage, knowledge, expressions and practices.",
          "A rule that anything online may be reused for school."
        ], [
          "ICIP is broader than one uniform copyright licence and is shaped by relationships and protocols.",
          "Correct. The description recognises cultural rights and responsibilities beyond technical access.",
          "Online availability does not remove ICIP, permission or context requirements."
        ]),
        q("check-m03-s03-q03", "distinction", "Which statement correctly separates copyright and ICIP responsibilities?", 2, [
          "Following copyright automatically settles every cultural responsibility.",
          "ICIP matters only when a copyright symbol is present.",
          "Copyright rules and ICIP responsibilities can overlap, but ordinary copyright compliance does not replace cultural authority and context."
        ], [
          "Technical legal permission may not address cultural relationships, protocols or appropriate use.",
          "The absence or presence of a symbol does not determine whether cultural responsibilities exist.",
          "Correct. A careful researcher checks both relevant reuse rules and the cultural source context."
        ]),
        q("check-m03-s03-q04", "scenario", "Source A is an attributed Aboriginal-organisation education page; Source B is an untraceable repost. Which choice is strongest?", 0, [
          "Prefer Source A within its stated purpose and conditions, and do not copy Source B without clearer authority and context.",
          "Use Source B because reposting proves broad permission.",
          "Combine both sources so the weaker authority is cancelled out."
        ], [
          "Correct. Source A provides checkable identity and purpose, while Source B requires further context or replacement.",
          "Reposting can remove attribution and context; it does not prove permission.",
          "Adding an unclear source to a clear one does not repair the missing authority."
        ]),
        q("check-m03-s03-q05", "cause-effect", "Why can linking be safer than copying when reuse conditions are unclear?", 1, [
          "A link gives the student ownership of the source.",
          "It can direct readers to the original context without reproducing or redesigning material whose reuse is uncertain.",
          "A link removes the need to acknowledge the creator."
        ], [
          "A link does not transfer ownership or cultural authority.",
          "Correct. Linking preserves access to the original source while narrowing an unsupported reuse decision.",
          "Creators and context should still be identified appropriately."
        ]),
        q("check-m03-s03-q06", "evidence-critique", "A student says, ‘I named the creator, so permission no longer matters.’ What is wrong?", 2, [
          "Naming creators is disrespectful in every context.",
          "Permission matters only for commercial work.",
          "Attribution tells readers the source; it does not by itself authorise copying, adaptation or a new context."
        ], [
          "Appropriate attribution is often necessary; the problem is treating it as the only responsibility.",
          "School and non-commercial uses can still carry ICIP and reuse responsibilities.",
          "Correct. Permission and context must be checked separately from giving credit."
        ]),
        q("check-m03-s03-q07", "application", "A cultural infographic has no copyright symbol. Which decision follows the theory?", 0, [
          "Check creator, authority, purpose and reuse conditions; do not assume the missing symbol makes it free to adapt.",
          "Redesign it immediately because no symbol means no rights exist.",
          "Remove its cultural context so reuse becomes neutral."
        ], [
          "Correct. Rights and cultural responsibilities do not depend on a visible symbol alone.",
          "The absence of a symbol is not evidence of permission or cultural authority.",
          "Removing context can misrepresent the knowledge and does not resolve reuse rights."
        ]),
        q("check-m03-s03-q08", "scenario", "A student wants to reproduce cultural material in a school presentation. What should be checked?", 1, [
          "Only whether the presentation will receive a mark.",
          "Who created it, the Community or Country context, public purpose, reuse conditions and required acknowledgement.",
          "Whether changing the font will make the material original."
        ], [
          "Assessment status does not remove cultural or reuse responsibilities.",
          "Correct. These checks address both source authority and the proposed form of use.",
          "A design change does not remove the underlying source, meaning or rights."
        ]),
        q("check-m03-s03-q09", "cause-effect", "Why is changing colours insufficient to make cultural material a new independent work?", 2, [
          "Colour can never be changed in any school design.",
          "Only the file format determines cultural ownership.",
          "The cultural source, meaning and responsibilities remain even when surface appearance changes."
        ], [
          "The issue is not a universal ban on colour changes; it is whether adaptation is authorised and respectful.",
          "File format does not decide cultural rights, context or authority.",
          "Correct. Cosmetic alteration does not erase provenance or create permission."
        ]),
        q("check-m03-s03-q10", "application", "Which sequence is the strongest ICIP-aware research pathway?", 0, [
          "Identify source → check purpose and authority → check reuse conditions → attribute and contextualise → pause if unclear.",
          "Download → redesign → cite later → assume school permission.",
          "Choose the most attractive source → remove context → share broadly."
        ], [
          "Correct. The sequence makes authority, permission, attribution and uncertainty visible before use.",
          "This order treats technical access as permission and delays essential checks until after reuse.",
          "Appearance cannot replace authority, and removing context increases the risk of misuse."
        ])
      ]
    },
    {
      sectionId: "m04-s01",
      moduleId: 4,
      title: "Roles, knowledge and responsibility",
      theoryRoute: "modules/module-04.html#m04-s01",
      helpAnchor: "m04-s01-help-1",
      helpLabel: "How do I analyse a historical claim?",
      questions: [
        q("check-m04-s01", "diagnostic", "One historical observer describes food roles in one place. Which conclusion is defensible?", 0, [
          "The account may offer evidence about that setting, but its creator, purpose, time, place and missing perspectives limit broader conclusions.",
          "The account proves that the same roles existed in every Community.",
          "Different responsibilities show that one group had more value."
        ], [
          "Correct. You can use the source without treating one observation as universal or neutral.",
          "One source cannot establish a universal pattern across diverse Peoples and contexts.",
          "Different roles may involve different knowledge and skills; they do not establish a ranking of people."
        ]),
        q("check-m04-s01-q02", "recall", "What can food-related responsibilities include beyond obtaining food?", 1, [
          "Only physical strength and speed.",
          "Knowledge, skills, relationships, sharing and care for resources.",
          "A universal set of roles fixed for every Community."
        ], [
          "This reduces complex food systems to two qualities and ignores knowledge and relationships.",
          "Correct. Food systems can connect practical work with responsibilities, expertise and care.",
          "Responsibilities vary across people, Country, seasons, families and time."
        ]),
        q("check-m04-s01-q03", "distinction", "Which statement is a context-bound claim rather than a universal claim?", 2, [
          "The same food roles existed in every Aboriginal Community.",
          "One gender always held greater food knowledge.",
          "This source describes particular responsibilities among people observed in one named place and period."
        ], [
          "The wording applies one pattern to all Communities without evidence.",
          "Different responsibilities do not establish a universal hierarchy of knowledge.",
          "Correct. The statement tells readers how far the evidence can reasonably reach."
        ]),
        q("check-m04-s01-q04", "scenario", "A textbook presents a gender-linked food role as an unchanging rule. What is the best revision?", 0, [
          "Identify the source, place and period, describe only what it reports, and seek Aboriginal-led context about the responsibilities involved.",
          "Keep the rule but add ‘usually’ so it sounds less absolute.",
          "Remove all discussion of responsibilities because historical evidence is never useful."
        ], [
          "Correct. The revision preserves possible evidence while limiting the claim and addressing missing perspectives.",
          "A softening word does not repair missing context or unsupported universality.",
          "Historical evidence can be useful when its provenance, perspective and limits are analysed."
        ]),
        q("check-m04-s01-q05", "cause-effect", "Why might a colonial observer's description simplify food responsibilities?", 1, [
          "Because all first-hand observation is automatically false.",
          "Because the observer's assumptions and limited access could cause them to miss knowledge, relationships or reasons behind what they saw.",
          "Because people in the past had no specialised food knowledge."
        ], [
          "A source can contain useful evidence without being complete or neutral.",
          "Correct. Perspective shapes what is noticed, understood, recorded and omitted.",
          "This repeats a deficit assumption rather than analysing the observer's limits."
        ]),
        q("check-m04-s01-q06", "evidence-critique", "A response concludes that one group was more important because it had a different food role. What is the flaw?", 2, [
          "Importance can always be measured by the amount of food collected.",
          "Different roles prove identical skills and responsibilities.",
          "Difference does not establish a ranking; roles may involve distinct knowledge, skills, relationships and responsibilities."
        ], [
          "Quantity alone cannot establish cultural value or the knowledge connected to a responsibility.",
          "Roles may differ, so identical skills should not be assumed either.",
          "Correct. The evidence may show difference, but not superiority or lesser value."
        ]),
        q("check-m04-s01-q07", "application", "Which additional source would most directly address a missing-perspective problem in a colonial account?", 0, [
          "An Aboriginal-led or Community-led source connected to the Country and topic being studied.",
          "A second copy of the same observer's description.",
          "An unrelated account from another continent."
        ], [
          "Correct. A relevant Aboriginal-led perspective may add context or challenge the outsider's interpretation.",
          "Duplicating the same viewpoint does not add an independent or missing perspective.",
          "A distant unrelated source cannot clarify the particular people, place and responsibilities."
        ]),
        q("check-m04-s01-q08", "scenario", "A contemporary Community source describes responsibilities differently from an older outsider account. What should a researcher do?", 1, [
          "Reject the contemporary source because culture cannot change.",
          "Compare context, authority and purpose, recognising that culture is living and responsibilities can vary or adapt.",
          "Blend both into one universal rule."
        ], [
          "Culture is living, and present-day Community authority is not invalidated by difference from an old account.",
          "Correct. The difference may reveal change, perspective or the limits of the earlier source.",
          "Combining different contexts without qualification erases the evidence each source actually provides."
        ]),
        q("check-m04-s01-q09", "cause-effect", "How does naming the intended audience of a historical source improve analysis?", 2, [
          "It proves the source is unbiased.",
          "It removes the need to examine missing perspectives.",
          "It helps explain why the creator may have selected, framed or omitted particular information."
        ], [
          "Every source still requires analysis of viewpoint and purpose.",
          "Audience is one check among several and can make omissions more important to investigate.",
          "Correct. Creators shape accounts for particular readers and purposes."
        ]),
        q("check-m04-s01-q10", "application", "Which conclusion best uses a historical role account without overreaching?", 0, [
          "The account suggests this pattern in its stated context; its outsider perspective and missing Community voices limit wider claims.",
          "The account records the final rule for all Peoples and all periods.",
          "The account is useless because no source can ever support a qualified conclusion."
        ], [
          "Correct. It identifies both the evidence and the boundary on what can be concluded.",
          "One contextual account cannot establish a timeless universal rule.",
          "Critical analysis does not require discarding all evidence; it requires proportionate claims."
        ])
      ]
    },
    {
      sectionId: "m04-s02",
      moduleId: 4,
      title: "Introduced rations and nutrition",
      theoryRoute: "modules/module-04.html#m04-s02",
      helpAnchor: "m04-s02-help-2",
      helpLabel: "How do I avoid blame?",
      questions: [
        q("check-m04-s02", "diagnostic", "Which explanation avoids blaming people for changes in food patterns?", 0, [
          "Explain how policy, disrupted access to Country, available supplies and living conditions shaped realistic choices in the sourced context.",
          "Assume people preferred introduced rations because they accepted them.",
          "Attribute later health outcomes to one introduced ingredient."
        ], [
          "Correct. This focuses on systems and evidence rather than pretending every change was freely chosen.",
          "Receiving available food does not prove free preference when systems and access constrain choices.",
          "Complex health patterns cannot be reduced to one ingredient without strong evidence."
        ]),
        q("check-m04-s02-q02", "recall", "What was a ration in the historical systems described?", 1, [
          "Any food freely chosen from an unlimited market.",
          "Food or supplies distributed or controlled by an authority in a particular system.",
          "One universal menu used in every place and period."
        ], [
          "Ration systems involved authority and could constrain realistic choice.",
          "Correct. The definition keeps the distribution within its system and historical context.",
          "Foods, amounts, conditions and experiences varied, so there was no single universal ration list."
        ]),
        q("check-m04-s02-q03", "distinction", "Which claim correctly distinguishes a ration list from a complete account of people's diets?", 2, [
          "A ration list shows everything people ate and how consistently supplies arrived.",
          "A ration list proves that every listed food was freely preferred.",
          "A ration list records supplied items in a context but may not show other foods, consistency, needs, adaptations or realistic choice."
        ], [
          "Lists often omit access beyond the list, supply reliability and how people responded.",
          "Receiving controlled supplies is not evidence of free preference.",
          "Correct. The source can still be useful when its omissions and system limits are stated."
        ]),
        q("check-m04-s02-q04", "scenario", "Two historical ration lists come from different places and periods. What should a comparison do first?", 0, [
          "Identify who produced each list, where and when it applies, and whether the systems are actually comparable.",
          "Merge the lists into one typical ration for all Communities.",
          "Choose the longer list as proof of better nutrition."
        ], [
          "Correct. Provenance and context must be established before nutritional implications are compared.",
          "Combining different contexts creates a list that may never have existed.",
          "Length alone does not show supply, quantity, variety, nutrient balance or choice."
        ]),
        q("check-m04-s02-q05", "cause-effect", "How could disrupted access to Country affect food patterns?", 1, [
          "It guaranteed the same response in every Community.",
          "It could reduce access to existing food systems and make controlled or available supplies more influential in realistic choices.",
          "It made policy and living conditions irrelevant."
        ], [
          "Effects differed by place, people, policy and historical conditions.",
          "Correct. The explanation links a system change to constrained access without blaming individuals.",
          "Policy and living conditions were part of the systems shaping access and choice."
        ]),
        q("check-m04-s02-q06", "evidence-critique", "A paragraph says one introduced ingredient caused all later health outcomes. What is the strongest criticism?", 2, [
          "Historical foods can never be discussed nutritionally.",
          "Every ingredient has exactly the same effect.",
          "The claim ignores interacting systems, food patterns, access, living conditions and the limits of the evidence."
        ], [
          "Nutrition implications can be discussed cautiously when supported by evidence.",
          "Different foods and contexts vary; this replacement claim is also unsupported.",
          "Correct. Complex outcomes cannot be reduced to a single ingredient without strong causal evidence."
        ]),
        q("check-m04-s02-q07", "application", "Which nutrition analysis best considers the whole food pattern?", 0, [
          "Examine variety, nutrient groups, processing, access, availability and choice constraints, then state a limited implication.",
          "Label one food good and another bad without source context.",
          "Use one nutrient to rank every historical food system."
        ], [
          "Correct. This connects nutrition with the system conditions that shaped what was realistically available.",
          "Moral labels hide evidence and encourage blame rather than explanation.",
          "One nutrient cannot represent a complete food pattern or historical system."
        ]),
        q("check-m04-s02-q08", "scenario", "An official record lists supplies but includes no Aboriginal perspective. What would strengthen the investigation?", 1, [
          "Treat the official record as complete because an institution created it.",
          "Use relevant Aboriginal-authored or endorsed accounts alongside it to add experiences and context the record may omit.",
          "Replace evidence with a general assumption about what people felt."
        ], [
          "Institutional purpose can shape what was recorded and whose perspective is missing.",
          "Correct. Multiple relevant perspectives can reveal context without pretending any one source is complete.",
          "Feelings and experiences should come from evidence, not invention."
        ]),
        q("check-m04-s02-q09", "cause-effect", "Why does accepting an available ration not prove free preference?", 2, [
          "Preference can never influence a food decision.",
          "All rations were identical in every place.",
          "Policy, supply, restricted access, living conditions and other constraints may have limited realistic alternatives."
        ], [
          "Preference may matter, but it cannot be isolated without evidence about available choices.",
          "Historical ration systems varied, so this is an unsupported universal claim.",
          "Correct. A choice made under constraint cannot automatically be read as an unconstrained preference."
        ]),
        q("check-m04-s02-q10", "application", "Which final sentence is appropriately evidence-bounded?", 0, [
          "In this sourced context, reduced variety and constrained access may have had nutritional implications, but the list alone cannot prove individual intake or later disease.",
          "The list proves every person ate the same amount and developed the same outcome.",
          "Because the source is incomplete, no historical nutrition question can be investigated."
        ], [
          "Correct. It states a plausible supported implication and identifies what the evidence cannot show.",
          "A list does not establish individual amounts, uniform experience or direct health causation.",
          "Limitations narrow a conclusion; they do not make all investigation impossible."
        ])
      ]
    },
    {
      sectionId: "m04-s03",
      moduleId: 4,
      title: "Read historical food sources critically",
      theoryRoute: "modules/module-04.html#m04-s03",
      helpAnchor: "m04-s03-help-1",
      helpLabel: "How do I judge a source?",
      questions: [
        q("check-m04-s03", "diagnostic", "A photograph shows one food-related scene. What can a careful researcher claim?", 0, [
          "Describe what is directly visible, investigate creator and context, and separate later interpretation from what the image itself supports.",
          "The photograph proves the complete experience of everyone present.",
          "Its age makes it automatically reliable."
        ], [
          "Correct. A photograph is selected evidence, not a complete or neutral record of the whole situation.",
          "One selected moment cannot reveal every experience, cause or missing perspective.",
          "Age does not remove the need to examine purpose, context, evidence and limitations."
        ]),
        q("check-m04-s03-q02", "recall", "What information forms a source's provenance?", 1, [
          "Only whether the source is old.",
          "Where it came from, including creator, time, place and purpose.",
          "Whether the researcher agrees with its conclusion."
        ], [
          "Age is one possible detail, but provenance includes who created the source and why.",
          "Correct. Provenance helps a researcher judge what the source can reasonably support.",
          "Agreement is a response to evidence, not information about the source's origin."
        ]),
        q("check-m04-s03-q03", "distinction", "Which statement correctly compares primary and secondary sources?", 2, [
          "Primary sources are always unbiased; secondary sources are always opinions.",
          "Secondary sources cannot use primary evidence.",
          "Primary sources come from the period studied, while secondary sources interpret evidence later; both need critical analysis."
        ], [
          "Sources from the time still have creators, purposes, viewpoints and limits.",
          "Secondary sources often interpret primary and other evidence; their reasoning should be checked.",
          "Correct. Source type describes when and how it was created, not automatic reliability."
        ]),
        q("check-m04-s03-q04", "scenario", "A photograph's caption claims a meal was enjoyed by everyone shown. What can the image itself establish?", 0, [
          "Visible details of the selected scene, but not every person's feelings unless other evidence supports them.",
          "The exact feelings and experiences of all people present.",
          "That the caption writer witnessed and understood the whole event."
        ], [
          "Correct. The image can support observations, while emotional and contextual claims may be later inference.",
          "A still image cannot directly prove internal feelings or complete experience.",
          "The caption's provenance and relationship to the scene must be investigated rather than assumed."
        ]),
        q("check-m04-s03-q05", "cause-effect", "Why can cross-checking a claim strengthen an investigation?", 1, [
          "It guarantees certainty whenever two sources are present.",
          "Relevant independent evidence may corroborate, challenge or add context to the claim.",
          "It allows provenance checks to be skipped."
        ], [
          "Two sources can share the same weakness or leave the same uncertainty.",
          "Correct. Corroboration helps test a claim while still requiring judgement about each source.",
          "Every source still needs its creator, purpose, context and limits examined."
        ]),
        q("check-m04-s03-q06", "evidence-critique", "A student argues that two weak sources together prove a claim. What is missing?", 2, [
          "The sources only need to be the same age.",
          "Quantity automatically replaces relevance and credibility.",
          "Each source must provide relevant credible evidence; shared gaps or dependence can leave the claim uncertain."
        ], [
          "Matching age does not repair weak authority, missing context or unsupported inference.",
          "More sources do not help if they repeat the same unsupported information.",
          "Correct. Corroboration depends on evidence quality and independence, not a simple count."
        ]),
        q("check-m04-s03-q07", "application", "Which question best reveals a possible institutional bias in an official record?", 0, [
          "For whom and for what administrative, religious or government purpose was this record created?",
          "Is the document printed on old paper?",
          "Does the record use more words than an oral history?"
        ], [
          "Correct. Audience and purpose can explain what an institution selected, framed or omitted.",
          "Physical age may help date a source but does not identify its purpose or missing voices.",
          "Length does not establish perspective, authority or completeness."
        ]),
        q("check-m04-s03-q08", "scenario", "A primary source uses language that is now inappropriate. What is the best response?", 1, [
          "Repeat the wording without comment because primary sources are neutral.",
          "Analyse the historical wording and perspective carefully without adopting it as current respectful language.",
          "Assume the entire source contains no usable evidence."
        ], [
          "Primary sources reflect the viewpoints and language of their creators and periods.",
          "Correct. The source can be investigated while its harmful or outdated framing is made visible.",
          "Problematic wording is an important limitation, but it does not automatically erase every evidentiary detail."
        ]),
        q("check-m04-s03-q09", "cause-effect", "Why might an Aboriginal oral-history source and a colonial photograph answer different questions?", 2, [
          "Only written and visual sources can contain evidence.",
          "One source must be false if their emphases differ.",
          "Their creators, purposes, perspectives and forms may preserve different parts of an experience."
        ], [
          "Oral histories can provide authoritative evidence and context, including perspectives absent from official records.",
          "Difference can reveal viewpoint or complementary evidence rather than simple truth versus falsehood.",
          "Correct. Comparing what each source can show is stronger than forcing them into identical roles."
        ]),
        q("check-m04-s03-q10", "application", "Which conclusion shows strong historical source reasoning?", 0, [
          "Together the sources support this limited claim, while their provenance and missing perspectives leave these specific questions uncertain.",
          "The oldest source settles every question about the event.",
          "Because the sources differ, no conclusion of any kind is possible."
        ], [
          "Correct. It combines evidence with an explicit boundary on confidence and scope.",
          "Age does not make a source complete, neutral or automatically decisive.",
          "Differences can still support qualified conclusions and identify useful next questions."
        ])
      ]
    },
    {
      sectionId: "m05-s01",
      moduleId: 5,
      title: "Colonisation changed food access",
      theoryRoute: "modules/module-05.html#m05-s01",
      helpAnchor: "m05-s01-help-1",
      helpLabel: "Build the chain",
      questions: [
        q("check-m05-s01", "diagnostic", "Which structure best explains a colonisation-related food-system change?", 0, [
          "A specific evidenced change, its direct food-system effect, a supported consequence, and evidence of continuity or adaptation where available.",
          "A claim that the same event and effects occurred everywhere at once.",
          "A claim that Cultural Knowledge disappeared completely."
        ], [
          "Correct. This causal chain is specific, evidence-bounded and avoids telling only a story of loss.",
          "Timing, form and effects differed across places, Communities and periods.",
          "Disruption was profound, but knowledge and practices were also maintained, adapted and revitalised."
        ]),
        q("check-m05-s01-q02", "recall", "How is colonisation defined in this section?", 1, [
          "A single peaceful event with identical effects everywhere.",
          "A process involving the taking and control of land and the imposition of new systems, policies and authority.",
          "A food trend caused only by new ingredients."
        ], [
          "Colonisation was an ongoing process whose form, timing and effects differed across places.",
          "Correct. The definition identifies power, land and imposed systems rather than treating colonisation as a neutral arrival.",
          "Food-system change was connected to broader control of Country, policy, movement and environments."
        ]),
        q("check-m05-s01-q03", "distinction", "Which statement is a causal chain rather than a vague description?", 2, [
          "Colonisation changed everything.",
          "Food systems became different for everyone.",
          "In this source, restricted access to a resource area reduced access to particular foods, changing available choices."
        ], [
          "The statement names no specific cause, pathway, context or evidence.",
          "This is universal and does not explain how or where change occurred.",
          "Correct. It links an evidenced condition to a direct food-system effect and consequence."
        ]),
        q("check-m05-s01-q04", "scenario", "A source documents environmental change in one place. Which conclusion is strongest?", 0, [
          "Explain the food-system effects supported in that place and state what further evidence would be needed elsewhere.",
          "Assume every Community experienced the same effects at the same time.",
          "Ignore the source because local evidence can never matter."
        ], [
          "Correct. The claim remains useful and specific without being universalised.",
          "Effects depended on Country, Community, policy and historical circumstances.",
          "Local evidence can strongly support a local conclusion when its limits are visible."
        ]),
        q("check-m05-s01-q05", "cause-effect", "Why should continuity or adaptation be included when the evidence supports it?", 1, [
          "To minimise the disruption caused by colonisation.",
          "To avoid a deficit-only account and recognise maintained, adapted or revitalised knowledge and responsibilities.",
          "To claim that historical injustice no longer has effects."
        ], [
          "Recognising continuity does not reduce or excuse documented harm.",
          "Correct. A fuller explanation can hold disruption and continuing cultural strength together.",
          "Contemporary continuity does not erase dispossession or later consequences."
        ]),
        q("check-m05-s01-q06", "evidence-critique", "A source calls the process ‘settlement’ and describes land as empty. What should a critical reader notice?", 2, [
          "The wording proves no people or food systems were present.",
          "Word choice is irrelevant to historical perspective.",
          "The terms may reflect a colonial viewpoint that hides existing Peoples, Country relationships and food systems."
        ], [
          "The empty-land claim conflicts with the existence of Aboriginal Peoples and established relationships with Country.",
          "Language can frame events and omit power, dispossession or existing systems.",
          "Correct. Source terminology is evidence about perspective as well as a way of describing events."
        ]),
        q("check-m05-s01-q07", "application", "Which revision improves the claim ‘Colonisation changed Aboriginal food systems’?", 0, [
          "Name the specific colonial condition, trace the supported food-system consequence in its context and include continuity or adaptation if evidenced.",
          "Add ‘completely’ so the effect sounds stronger.",
          "Remove all qualifiers because change is already known."
        ], [
          "Correct. Specific cause, context, evidence and limits turn a broad claim into an explanation.",
          "‘Completely’ creates a deficit-only absolute claim that may contradict continuity evidence.",
          "Known broad change does not justify unsupported detail or universal effects."
        ]),
        q("check-m05-s01-q08", "scenario", "A contemporary native-food business is used as evidence that colonisation's effects have ended. What is the strongest response?", 1, [
          "Contemporary activity should be ignored when studying history.",
          "The business may show continuity or adaptation, but it does not erase dispossession, restricted access or other documented effects.",
          "Commercial success proves every Community has equal access to Country and resources."
        ], [
          "Contemporary evidence can be important when interpreted in context.",
          "Correct. Cultural continuity and ongoing historical consequences can both be true.",
          "One business cannot establish universal access, experience or justice."
        ]),
        q("check-m05-s01-q09", "cause-effect", "A source shows restricted access to one resource area. What further evidence would strengthen the next link in the chain?", 2, [
          "A general statement that all food disappeared.",
          "An unrelated account from a different place and period.",
          "Evidence about which foods or practices were affected, how access changed and how people responded."
        ], [
          "This leap is too broad and ignores other resources, responses and continuity.",
          "Distant evidence cannot automatically explain the specific local pathway.",
          "Correct. These details test the proposed connection rather than assuming it."
        ]),
        q("check-m05-s01-q10", "application", "Which final explanation best balances disruption and continuity?", 0, [
          "The source links restricted access to changed food choices in this place, while also documenting that knowledge was maintained and practices adapted.",
          "Colonisation caused identical total loss everywhere.",
          "Continuity proves there was no significant disruption."
        ], [
          "Correct. It presents an evidence-based pathway without erasing either harm or cultural agency.",
          "The universal and total claim goes beyond varied historical evidence.",
          "Maintaining knowledge under changed conditions does not mean the disruption was absent."
        ])
      ]
    },
    {
      sectionId: "m05-s02",
      moduleId: 5,
      title: "Settler food constraints and technology",
      theoryRoute: "modules/module-05.html#m05-s02",
      helpAnchor: "m05-s02-help-1",
      helpLabel: "How do I explain a technology?",
      questions: [
        q("check-m05-s02", "diagnostic", "Which analysis of a historical food technology is strongest?", 0, [
          "Identify the context and constraint, explain what changed in the system, then weigh a benefit against a trade-off.",
          "Call it better because it was newer.",
          "Assume one invention immediately changed everyone's diet."
        ], [
          "Correct. Technology matters through the problem it addresses, the mechanism of change and its consequences.",
          "Newness does not establish suitability; technologies can create benefits and limitations.",
          "Access, cost, infrastructure, place and time affect how widely a technology changes practice."
        ]),
        q("check-m05-s02-q02", "recall", "What is a food-system constraint?", 1, [
          "Proof that a technology will solve every problem.",
          "A factor such as distance, storage time, cost or unreliable supply that limits what can be done.",
          "A fixed menu eaten by every settler."
        ], [
          "A constraint identifies a limitation; it does not guarantee any solution's success.",
          "Correct. Naming the constraint helps explain why a particular technology mattered in context.",
          "Settler food patterns varied and cannot be reduced to one menu."
        ]),
        q("check-m05-s02-q03", "distinction", "Which sequence represents the connected food-supply system in this section?", 2, [
          "Meal → invention → universal adoption.",
          "Advertisement → preference → better technology.",
          "Supply → processing or preservation → transport → storage → meal."
        ], [
          "This skips the system stages and assumes instant adoption.",
          "Preference and promotion do not replace evidence about production, movement and storage.",
          "Correct. Technology can change one or several links in this pathway."
        ]),
        q("check-m05-s02-q04", "scenario", "A preservation technology allows a food to remain suitable for longer. Which analysis is most complete?", 0, [
          "It may improve storage and transport reliability while also changing qualities or requiring extra processing, energy or packaging.",
          "It is automatically better in every respect because storage is longer.",
          "It changes only the food's location and has no other effects."
        ], [
          "Correct. The analysis connects the access benefit with realistic trade-offs.",
          "Longer storage is one benefit, not proof that every consequence is positive.",
          "Preservation can affect texture, flavour, nutrients, energy use and packaging as well as location."
        ]),
        q("check-m05-s02-q05", "cause-effect", "Why might a useful invention change food habits unevenly?", 1, [
          "Because all households adopt technology at the same time.",
          "Because access can depend on cost, infrastructure, location, supply and the period being studied.",
          "Because usefulness removes every other constraint."
        ], [
          "Adoption is rarely immediate or universal, especially across different historical conditions.",
          "Correct. The invention's existence is not the same as widespread practical access.",
          "A technology may address one constraint while leaving or creating others."
        ]),
        q("check-m05-s02-q06", "evidence-critique", "A paragraph describes settlers adapting to ‘unused land’. What crucial context is missing?", 2, [
          "Only the brand names of imported foods.",
          "A list of every household appliance.",
          "Colonisation displaced Aboriginal Peoples and disrupted existing relationships, food systems and ecosystems."
        ], [
          "Brand details do not address the false empty-land framing.",
          "Appliance lists cannot repair the omission of existing Peoples and systems.",
          "Correct. Settler adaptation must remain connected to the wider colonial context."
        ]),
        q("check-m05-s02-q07", "application", "Which question best tests whether a technology was an improvement in context?", 0, [
          "What constraint did it address, who could access it, what changed, and what trade-offs followed?",
          "Was it invented later than the previous method?",
          "Did one person describe it as modern?"
        ], [
          "Correct. This tests mechanism, reach, benefit and cost rather than assuming progress.",
          "Later does not automatically mean more suitable, equitable or sustainable.",
          "A label is not evidence of performance or system consequences."
        ]),
        q("check-m05-s02-q08", "scenario", "Two technologies address different food-access constraints. How should they be compared?", 1, [
          "Choose the more recent one without examining the setting.",
          "Use the same criteria in a stated place and period, comparing system effects, access, benefits and trade-offs.",
          "Assume both changed every household immediately."
        ], [
          "Recency alone cannot show which technology better addressed the relevant constraint.",
          "Correct. Common criteria and historical context make the comparison defensible.",
          "Adoption depended on infrastructure, cost and circumstances and should not be universalised."
        ]),
        q("check-m05-s02-q09", "cause-effect", "How can transport infrastructure affect whether preservation technology changes diets?", 2, [
          "Preservation makes transport unnecessary.",
          "Infrastructure has no relationship to food availability.",
          "Longer storage helps only if supply routes and access can actually move the food to people."
        ], [
          "Preserved food still needs a pathway from producer or processor to consumers.",
          "Transport is a central food-supply link affecting reliability and reach.",
          "Correct. Technologies interact within systems rather than producing change alone."
        ]),
        q("check-m05-s02-q10", "application", "Which conclusion is strongest after studying one historical food technology?", 0, [
          "In this context it addressed the identified constraint by changing this system link, but access was uneven and the evidence shows these trade-offs.",
          "The invention improved all food systems for everyone.",
          "Technology alone explains every change in settler diets."
        ], [
          "Correct. The conclusion connects context, mechanism, reach and limitations.",
          "The universal claim ignores unequal access and possible disadvantages.",
          "Food habits were also shaped by place, wealth, work, supplies and colonial conditions."
        ])
      ]
    },
    {
      sectionId: "m05-s03",
      moduleId: 5,
      title: "Migration changed Australian food habits",
      theoryRoute: "modules/module-05.html#m05-s03",
      helpAnchor: "m05-s03-help-1",
      helpLabel: "How do I explain migration's influence?",
      questions: [
        q("check-m05-s03", "diagnostic", "Which explanation goes beyond simply naming a migrant-associated dish?", 0, [
          "Trace how people, knowledge, ingredients, growing, businesses or adaptation affected wider habits in a specific evidenced example.",
          "Say migrants added foods and all Australians then ate them in the same way.",
          "Treat popularity as proof that a food has no continuing cultural history."
        ], [
          "Correct. This explains a mechanism of influence while keeping the conclusion within the source context.",
          "This overgeneralises both migration experiences and Australian food habits.",
          "Popularity does not erase origins, people or knowledge connected with a food."
        ]),
        q("check-m05-s03-q02", "recall", "What can people bring through migration that influences food habits?", 1, [
          "Only completed dishes that never change.",
          "Knowledge, tastes, methods, celebrations, crops, products and business practices.",
          "One universal cuisine shared by all migrants."
        ], [
          "Migration can influence whole food systems, and foods may adapt to new circumstances.",
          "Correct. These influences can travel through homes, Communities, production and businesses.",
          "Migration experiences and cultural food traditions are diverse, not one cuisine."
        ]),
        q("check-m05-s03-q03", "distinction", "What does it mean to say food change is two-way?", 2, [
          "Migrants keep every food unchanged while established communities do nothing.",
          "All people adopt the same food at the same time.",
          "Migrants may adapt foods to new circumstances while established communities also adopt or reinterpret influences."
        ], [
          "Adaptation and exchange can occur, so influence is not a one-direction transfer of fixed dishes.",
          "Acceptance and adoption vary across people, places and time.",
          "Correct. Both arriving and established communities can shape how food habits develop."
        ]),
        q("check-m05-s03-q04", "scenario", "A family adapts a culturally specific dish because one ingredient is unavailable. Which interpretation is strongest?", 0, [
          "The change may be a practical adaptation; its meaning depends on context and whether cultural origins and knowledge remain acknowledged.",
          "Any adaptation is automatically disrespectful.",
          "The change proves the dish no longer has a cultural history."
        ], [
          "Correct. Availability can shape adaptation without automatically erasing cultural connection.",
          "Adaptation can occur for many practical and cultural reasons and must be judged in context.",
          "Changing one feature does not remove the origins, people or knowledge connected with a food."
        ]),
        q("check-m05-s03-q05", "cause-effect", "How can a migrant food business influence wider food habits?", 1, [
          "By proving every customer understands the food's cultural history.",
          "By making foods or ingredients more available and introducing them to customers, sometimes through context-specific adaptation.",
          "By making home and Community food knowledge irrelevant."
        ], [
          "Purchase or familiarity does not automatically create deep cultural understanding.",
          "Correct. Businesses can connect knowledge, supply and consumers within a broader influence pathway.",
          "Home and Community settings can remain important sources of knowledge and continuity."
        ]),
        q("check-m05-s03-q06", "evidence-critique", "A popular food is described as ‘just Australian now’ with no mention of its origins. What is missing?", 2, [
          "Popularity prevents any adaptation or reinterpretation.",
          "Foods can belong to only one place and never travel.",
          "Wider use does not erase the cultural history, people and knowledge that shaped the food."
        ], [
          "Popularity may encourage new adaptations; the issue is erasing attribution and history.",
          "Foods and knowledge can move and change through migration and exchange.",
          "Correct. Cultural origins remain relevant even when a food becomes familiar to wider groups."
        ]),
        q("check-m05-s03-q07", "application", "Which evidence pathway best explains a migration-related food influence?", 0, [
          "People and knowledge → home or Community practice → ingredient supply or business → adaptation → wider food habits.",
          "Dish name → instant national popularity → cultural origins disappear.",
          "Migration date → identical eating habits for all Australians."
        ], [
          "Correct. The pathway explains connected mechanisms rather than merely listing a food.",
          "Popularity is not instant or universal and does not erase cultural history.",
          "A date alone cannot explain diverse adoption, adaptation or access."
        ]),
        q("check-m05-s03-q08", "scenario", "A migrant-owned food business receives less acceptance despite strong products. Which factor could a careful source investigate?", 1, [
          "Assume the cuisine itself is the only cause.",
          "How policies, racism or unequal access affected which businesses and food influences were welcomed or marginalised.",
          "Conclude that all migrant businesses had the same experience."
        ], [
          "A single food characteristic cannot explain social acceptance without evidence.",
          "Correct. Social conditions can shape opportunities and acceptance within the food system.",
          "Experiences differ across groups, places and periods and should be source-bounded."
        ]),
        q("check-m05-s03-q09", "cause-effect", "Why is it inaccurate to describe multicultural food change as only recent?", 2, [
          "Because food habits never change over time.",
          "Because one migration group introduced every influence.",
          "Because migration has shaped Australian food habits across different historical periods."
        ], [
          "Food habits change through interacting cultural, social, technological and economic factors.",
          "Many migration experiences and communities have influenced food systems in different ways.",
          "Correct. The history is ongoing and extends beyond contemporary trends."
        ]),
        q("check-m05-s03-q10", "application", "Which conclusion best explains migration's influence without stereotyping?", 0, [
          "In this documented example, particular people and knowledge influenced supply, business and adaptation, contributing to these wider food-habit changes.",
          "Everyone from the named country cooks and eats the same food.",
          "One popular dish represents the full culture and migration experience."
        ], [
          "Correct. It names a mechanism, stays within the evidence and avoids turning a group into a single food stereotype.",
          "People within any nation or culture have diverse experiences and food habits.",
          "A dish cannot stand for every person, practice or historical pathway in a culture."
        ])
      ]
    }
  ];

  const bank = {};
  sections.forEach((section) => {
    bank[section.sectionId] = Object.freeze(section.questions.map((question) => Object.freeze({
      prompt: question.prompt,
      choices: Object.freeze(question.choices.map((choice) => Object.freeze(choice)))
    })));
  });

  window.FOOD_AUSTRALIA_QUESTION_BANK_PART_A = Object.freeze(bank);
})();
