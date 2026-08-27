(function () {
  "use strict";

  const q = (id, prompt, options, correctIndex, feedback) => {
    if (options.length !== 3 || feedback.length !== 3 || !Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 2) {
      throw new Error(`Invalid question record: ${id}`);
    }
    const match = id.match(/^m(\d{2})-s(\d{2})-q(\d{2})$/);
    if (!match) throw new Error(`Invalid question id: ${id}`);
    const [, moduleNumber, sectionNumber, questionNumber] = match.map(Number);
    const answerPatterns = ["abcabcabc", "acbacbacb", "bacbacbac", "bcabcabca", "cabcabcab", "cbacbacba"];
    const desiredIndex = questionNumber === 1
      ? correctIndex
      : ["a", "b", "c"].indexOf(answerPatterns[(moduleNumber * 3 + sectionNumber) % answerPatterns.length][questionNumber - 2]);
    const shift = (correctIndex - desiredIndex + 3) % 3;
    const ordered = options.map((text, index) => ({ text, feedback: feedback[index], correct: index === correctIndex }));
    const rotated = ordered.slice(shift).concat(ordered.slice(0, shift));
    return Object.freeze({
      id,
      prompt,
      choices: Object.freeze(rotated.map((choice, index) => Object.freeze({
        id: ["a", "b", "c"][index],
        text: choice.text,
        correct: choice.correct,
        feedback: choice.feedback
      })))
    });
  };

  window.FOOD_AUSTRALIA_QUESTION_BANK_PART_B = Object.freeze({
    "m06-s01": Object.freeze([
      q("m06-s01-q01", "Which evidence set best represents changing contemporary Australian cuisine?", [
        "Evidence about ingredients, methods, businesses, technologies, social habits and meanings across varied contexts.",
        "One fixed top-ten list presented as representative of everyone.",
        "Only restaurant menus, treated as everyday household evidence."
      ], 0, [
        "Correct. Cuisine is a changing system of practices and meanings, not only a list of famous dishes.",
        "A fixed list hides variation among households, Communities, regions and circumstances.",
        "Restaurant menus represent one commercial setting and cannot stand for all everyday food habits."
      ]),
      q("m06-s01-q02", "Why is a study of cuisine incomplete if it records only famous dishes?", [
        "Because famous dishes are never eaten in everyday life.",
        "Because cuisine also includes ingredients, methods, habits, businesses, meanings and social contexts.",
        "Because cuisine should be defined only by agricultural output."
      ], 1, [
        "Famous dishes may be part of cuisine; the problem is treating them as the whole picture.",
        "Correct. Cuisine includes everyday practices and contexts as well as recognisable dishes.",
        "Production is one influence, but cuisine also includes preparation, eating, sharing and meaning."
      ]),
      q("m06-s01-q03", "A family changes an established dish because a familiar ingredient is unavailable in their new location. Which process is most clearly shown?", [
        "Adoption, because nothing about the established idea has changed.",
        "Fusion, because every ingredient change combines two food traditions.",
        "Adaptation, because the food idea is being adjusted to suit a different context."
      ], 2, [
        "Adoption means using an established food, ingredient or method; this example includes a deliberate change.",
        "An ingredient substitution does not automatically create fusion between food traditions.",
        "Correct. Adaptation changes a food or method in response to context, access or preference."
      ]),
      q("m06-s01-q04", "A neighbourhood has a community bakery, several family-run food businesses, regional produce and app-based delivery. What is the strongest interpretation?", [
        "Migration, regional production, business practices and technology may interact in the area's changing food culture.",
        "The newest business alone defines what everyone in the neighbourhood eats.",
        "Delivery technology has removed the cultural origins of the foods sold there."
      ], 0, [
        "Correct. The evidence supports several connected influences rather than one defining cause.",
        "One business cannot represent every household, community or food practice in the area.",
        "A new way of ordering food does not erase the histories and cultural connections of that food."
      ]),
      q("m06-s01-q05", "What can a restaurant menu responsibly show in an investigation of contemporary cuisine?", [
        "The exact everyday diet of every household in the surrounding region.",
        "Foods offered in one commercial setting, which can be compared with other kinds of evidence.",
        "Proof that the menu's most popular dish has become culturally ownerless."
      ], 1, [
        "A restaurant menu cannot establish what all households usually prepare or eat.",
        "Correct. It is useful but limited evidence from a particular place, time and commercial context.",
        "Popularity or sale in Australia does not remove a food's origins or cultural connections."
      ]),
      q("m06-s01-q06", "Which claim best recognises variation in Australian food habits?", [
        "Most households follow the same national diet once migration occurs.",
        "Regional food supply determines every person's choices in that region.",
        "Food habits can differ with place, access, family traditions, culture, time, income and personal choice."
      ], 2, [
        "Migration contributes to change, but households and communities do not become uniform.",
        "Regional supply can influence choice, but it does not determine every decision.",
        "Correct. The claim recognises several influences and avoids treating Australia as one food pattern."
      ]),
      q("m06-s01-q07", "A dish becomes widely popular in Australia. Which conclusion stays within the evidence?", [
        "Popularity may show adoption into everyday life, while the dish's cultural origins and history still matter.",
        "Popularity proves that the dish originated independently in Australia.",
        "Popularity means every community now gives the dish the same meaning."
      ], 0, [
        "Correct. Adoption and popularity can occur without erasing origin, context or varied meanings.",
        "Where a dish is popular does not by itself establish where or how it originated.",
        "Communities and households may understand, prepare and value the same food differently."
      ]),
      q("m06-s01-q08", "How could online ordering technology influence contemporary food habits?", [
        "It guarantees that every user can access the same foods at the same cost.",
        "It may change how food businesses reach customers and how some people order meals, alongside other influences.",
        "It proves that cooking methods and family traditions no longer affect food choices."
      ], 1, [
        "Access, cost and availability still vary, so a universal guarantee is not supported.",
        "Correct. Technology can change part of the food system without acting as the only influence.",
        "Technology can interact with traditions and methods; it does not automatically replace them."
      ]),
      q("m06-s01-q09", "An evidence card describes a café using regional produce, a migrated cooking idea and app delivery. Why might it fit more than one category?", [
        "Because evidence categories are meaningless and should never be used.",
        "Because the strongest category should replace all other influences.",
        "Because one food practice can involve ingredients, business, technology and cultural influence at the same time."
      ], 2, [
        "Categories can help organise evidence when their limits and overlaps are recognised.",
        "Choosing one label would hide the interacting influences shown in the evidence.",
        "Correct. Overlap is expected when cuisine is understood as a connected, changing system."
      ]),
      q("m06-s01-q10", "Which conclusion is best qualified for a study based on three food businesses in one suburb?", [
        "These businesses show several influences operating in this suburb, but they cannot represent all Australian food habits.",
        "These businesses prove what contemporary Australian cuisine means to every household.",
        "The most photographed business should be treated as the national example."
      ], 0, [
        "Correct. The conclusion describes the evidence and clearly states its limits.",
        "A small local sample cannot support a claim about every household or community.",
        "Visibility or popularity does not make one business representative of a nation."
      ])
    ]),

    "m06-s02": Object.freeze([
      q("m06-s02-q01", "Which research question is most likely to avoid stereotyping?", [
        "How do three credible sources describe weekday meal practices in a named place and time, and what variation do they show?",
        "What food does this whole culture eat?",
        "Can one classmate explain their entire culture to us?"
      ], 0, [
        "Correct. The question is bounded, allows comparison and expects variation rather than one national truth.",
        "The question is too broad and assumes one uniform food pattern.",
        "No student should be expected to represent an entire culture or disclose personal information."
      ]),
      q("m06-s02-q02", "Which revision turns a broad topic such as 'Japanese food' into a more responsible research question?", [
        "Which Japanese dish is the most authentic?",
        "What evidence describes everyday home meals in one named contemporary Japanese community or region?",
        "Why do Japanese people all prefer the same ingredients?"
      ], 1, [
        "This still seeks one ranking and gives no place, time, community or evidence boundary.",
        "Correct. It narrows the context and asks what evidence can actually support.",
        "The wording begins with an unsupported stereotype about a diverse population."
      ]),
      q("m06-s02-q03", "Which source would be strongest for explaining the cultural context of a food practice?", [
        "An advertisement selling a product with no creator or context information.",
        "A search-result snippet repeated by several unsourced websites.",
        "A credible source created by, or developed with, the people whose food culture is being discussed."
      ], 2, [
        "An advertisement may show marketing, but it does not establish cultural context or authority.",
        "Repeated unsourced wording is not the same as independent, credible evidence.",
        "Correct. Community-created or community-informed evidence is better positioned to explain its own context."
      ]),
      q("m06-s02-q04", "Why should an important cultural-food claim be cross-checked?", [
        "Comparing credible sources can test the claim, reveal variation and expose limits in one account.",
        "Cross-checking makes every source equally reliable.",
        "Cross-checking allows a researcher to remove any evidence that complicates the first conclusion."
      ], 0, [
        "Correct. Complementary sources can strengthen or qualify what the evidence supports.",
        "Sources still differ in authority, purpose, context and relevance after comparison.",
        "Responsible research keeps relevant complexity rather than filtering it out."
      ]),
      q("m06-s02-q05", "What is the main limitation of using restaurant menus alone to describe a cultural food pattern?", [
        "Menus cannot contain any useful evidence about food.",
        "Menus show one commercial setting and may not represent everyday household, regional or ceremonial practices.",
        "Menus prove that customers cook the same dishes at home."
      ], 1, [
        "Menus can be useful evidence when their commercial context and limits are stated.",
        "Correct. A menu reveals what is offered in one setting, not a complete cultural diet.",
        "Buying or seeing a dish on a menu does not prove how households cook or eat."
      ]),
      q("m06-s02-q06", "Why can food practices vary within a diaspora?", [
        "Because migration removes every earlier cultural connection.",
        "Because a diaspora is required to keep all food practices unchanged.",
        "Because place, generation, access, family, belief, migration experience and preference can shape practices differently."
      ], 2, [
        "People can maintain, adapt and develop cultural connections after migration.",
        "Food practices can continue and change; no single response is required of everyone.",
        "Correct. The explanation recognises diversity within a cultural or national background."
      ]),
      q("m06-s02-q07", "A student asks a classmate to explain 'what their culture eats'. What is the best response?", [
        "Use credible sources instead; no classmate should be expected to represent a whole culture or share personal information.",
        "Ask the classmate to list every traditional dish so the research is complete.",
        "Treat the classmate's preference as proof of a national food pattern."
      ], 0, [
        "Correct. Research responsibility includes protecting students and avoiding representative burden.",
        "One person cannot supply a complete account of a diverse culture and should not be pressured to do so.",
        "A personal preference is not evidence about an entire nation, culture or diaspora."
      ]),
      q("m06-s02-q08", "Why distinguish everyday food from ceremonial or special-occasion food?", [
        "Because special-occasion foods have no cultural meaning.",
        "Because the frequency, purpose and context of a food practice affect what conclusion the evidence supports.",
        "Because only everyday food belongs in a study of culture."
      ], 1, [
        "Special-occasion foods may carry important meaning; the issue is identifying their context accurately.",
        "Correct. A food used for a particular occasion should not be presented as an everyday pattern without evidence.",
        "Both everyday and special-occasion practices can be relevant when their roles are clearly described."
      ]),
      q("m06-s02-q09", "Which note is an assumption rather than evidence?", [
        "A community-authored source identifies the practice in a named place and context.",
        "Two credible sources describe different household uses of the ingredient.",
        "The dish looks unfamiliar to me, so people in that culture probably eat it every day."
      ], 2, [
        "This is attributed evidence with a clear scope.",
        "This is comparative evidence that also reveals variation.",
        "Correct. Personal unfamiliarity cannot establish how often other people eat a food."
      ]),
      q("m06-s02-q10", "Which conclusion best matches evidence from three sources about one community in one period?", [
        "The sources suggest this pattern in the named context, while other communities, regions or periods may differ.",
        "The pattern defines the entire national cuisine for all time.",
        "Any differences between the sources should be ignored so the conclusion sounds certain."
      ], 0, [
        "Correct. The conclusion is useful and appropriately limited to the evidence studied.",
        "A bounded source set cannot support a universal claim across a nation and all periods.",
        "Differences may reveal variation or source limits and should be examined, not hidden."
      ])
    ]),

    "m06-s03": Object.freeze([
      q("m06-s03-q01", "What makes a method justification useful?", [
        "Link the desired observable result to ingredient properties, preparation and heat transfer, within the available evidence and context.",
        "Choose the fastest method because faster is always better.",
        "Name a cultural method without explaining context or effects."
      ], 0, [
        "Correct. The method is justified by how it may create the intended result, not by its name alone.",
        "Speed is only one possible constraint and may not produce the intended sensory result.",
        "A method name alone does not explain its function, evidence or cultural context."
      ]),
      q("m06-s03-q02", "Which statement best explains flavour?", [
        "Flavour is the amount of seasoning added to a food.",
        "Flavour is an overall experience involving taste, aroma and qualities such as texture and temperature.",
        "Flavour can be judged from colour alone."
      ], 1, [
        "Seasoning can influence flavour, but it is only one part of the experience.",
        "Correct. Flavour develops through interacting sensory qualities rather than taste alone.",
        "Colour may shape expectation, but it cannot reveal the complete flavour experience."
      ]),
      q("m06-s03-q03", "How can cutting an ingredient into smaller pieces affect later processing?", [
        "It guarantees a better result regardless of the method.",
        "It changes only the ingredient's name, not its behaviour.",
        "It increases exposed surface area, which can change how heat or other ingredients interact with it."
      ], 2, [
        "The result still depends on ingredient properties, conditions and the intended purpose.",
        "Preparation changes physical features that can affect processing behaviour.",
        "Correct. Size and surface area are preparation variables that can influence observable outcomes."
      ]),
      q("m06-s03-q04", "Which description most accurately identifies heat transfer during steaming?", [
        "Heat reaches the food mainly through steam and can produce different moisture and surface effects from dry-air methods.",
        "Heat reaches the food only through direct contact with a hot pan and fat.",
        "No heat transfer occurs because steam is not a cooking medium."
      ], 0, [
        "Correct. Steam transfers heat and can shape texture, moisture, colour and aroma.",
        "Direct contact and fat more closely describe methods such as stir-frying, not steaming.",
        "Steam carries thermal energy and is a recognised heat-transfer medium."
      ]),
      q("m06-s03-q05", "Why might stir-frying create different surface qualities from steaming?", [
        "Because stir-frying removes every form of moisture from food.",
        "Because hot direct contact and fat interact with the prepared ingredient differently from steam.",
        "Because the method name fixes the same result for every ingredient."
      ], 1, [
        "Stir-frying may affect moisture, but it does not automatically remove all moisture.",
        "Correct. The heat-transfer conditions and ingredient preparation help explain the different result.",
        "Ingredient properties, size, movement, conditions and context all influence the outcome."
      ]),
      q("m06-s03-q06", "Two cooks use the same named method but obtain different textures. Which explanation is strongest?", [
        "One result must be false because method names guarantee outcomes.",
        "Texture is unrelated to ingredients or preparation.",
        "Ingredient properties, preparation, conditions and heat transfer may have differed even though the method name was the same."
      ], 2, [
        "A method name describes an approach, not a guaranteed identical result.",
        "Texture can be strongly affected by ingredient structure, size, moisture and processing.",
        "Correct. Outcomes come from interacting variables rather than the label alone."
      ]),
      q("m06-s03-q07", "Which example describes a functional role rather than only a sensory quality?", [
        "An ingredient helps bind a mixture so it holds its intended structure.",
        "An ingredient contributes a fresh aroma.",
        "An ingredient creates a bright colour."
      ], 0, [
        "Correct. Binding changes how the food behaves, so it is a functional contribution.",
        "Aroma is a sensory quality, although an ingredient may have functional roles as well.",
        "Colour is a sensory quality, not by itself an explanation of food function."
      ]),
      q("m06-s03-q08", "What evidence would support a comparison of a steamed and stir-fried sample?", [
        "A claim that one method is culturally superior.",
        "Recorded observations of comparable qualities such as firmness, surface moisture, colour and aroma.",
        "A preference stated before either sample is examined."
      ], 1, [
        "The methods may have different cultural contexts, but superiority is not established by the comparison.",
        "Correct. Comparable observable evidence can support a careful explanation of processing effects.",
        "A prior preference is not observation of what the methods produced."
      ]),
      q("m06-s03-q09", "Why should a cultural cooking method be explained in context?", [
        "Because the method can be used only in its place of origin.",
        "Because method names are secret and cannot be discussed.",
        "Because traditions, resources, equipment and intended results help explain how and why the method is used."
      ], 2, [
        "Food methods can travel and adapt, but their origins and contexts should still be researched and acknowledged.",
        "The issue is accurate, respectful explanation, not a blanket claim of secrecy.",
        "Correct. Context prevents the method from being reduced to a label detached from its cultural meaning."
      ]),
      q("m06-s03-q10", "A fast method produces the wrong texture for the stated purpose. What is the best judgement?", [
        "The method may be efficient in time but unsuitable for the intended sensory result.",
        "The method is automatically best because it is fast.",
        "Texture should be ignored whenever time is measured."
      ], 0, [
        "Correct. Method choice requires a trade-off judgement against the actual purpose and constraints.",
        "Speed is one factor and does not override evidence about product quality.",
        "Texture may be a key criterion and must be considered alongside time."
      ])
    ]),

    "m07-s01": Object.freeze([
      q("m07-s01-q01", "Which rationale describes purposeful fusion design?", [
        "Each influence is researched and contributes deliberately to the user, purpose, sensory result, structure or meaning, with appropriate acknowledgement.",
        "The combination is good because it is unusual.",
        "Adding one stereotyped symbol makes the concept culturally authentic."
      ], 0, [
        "Correct. Purpose, research and reasoning distinguish design from a random or token combination.",
        "Novelty alone does not establish function, respect or suitability.",
        "Cultural symbols are not decorative proof of authenticity and may require authority and context."
      ]),
      q("m07-s01-q02", "What makes a food concept fusion rather than a random mixture?", [
        "It contains the greatest possible number of cultural references.",
        "It intentionally combines researched elements that work together for a stated user and purpose.",
        "It uses an unfamiliar product name."
      ], 1, [
        "More references can make a concept less coherent and increase the risk of tokenism.",
        "Correct. Intention, research and a design rationale give the combination a defensible purpose.",
        "A name does not explain how ingredients, methods, structure or meaning work together."
      ]),
      q("m07-s01-q03", "What should a designer establish before selecting cultural food influences?", [
        "A claim that the concept will be authentic.",
        "A guarantee that the concept can be cooked at school.",
        "The intended user and purpose the concept is meant to serve."
      ], 2, [
        "Authenticity cannot be claimed in advance without suitable evidence and context.",
        "A concept does not grant practical approval or establish local resources.",
        "Correct. User and purpose provide the basis for judging whether each influence belongs."
      ]),
      q("m07-s01-q04", "A concept adds a recognisable ingredient only to appear culturally different. Why is its rationale weak?", [
        "It gives no researched reason for the ingredient's sensory, functional or meaningful contribution.",
        "Every fusion concept must avoid ingredients from established food traditions.",
        "Recognisable ingredients can never be adapted."
      ], 0, [
        "Correct. The design uses cultural recognition as decoration instead of explaining a purposeful contribution.",
        "Fusion necessarily draws on food traditions; the issue is responsible research and reasoning.",
        "Adaptation can be creative and respectful when context, purpose and limits are considered."
      ]),
      q("m07-s01-q05", "Why is attribution alone not enough to guarantee respectful fusion design?", [
        "Because origins should never be acknowledged in food design.",
        "Because context, cultural meaning, restrictions, marketing and who benefits may also matter.",
        "Because attribution automatically gives practical permission."
      ], 1, [
        "Acknowledging sources and origins is an important part of responsible design.",
        "Correct. Respect involves the nature and effects of the use, not only naming a source.",
        "Attribution does not provide cultural authority, equipment access or practical approval."
      ]),
      q("m07-s01-q06", "When is an authenticity claim most defensible?", [
        "Whenever the designer uses a traditional-sounding name.",
        "Whenever a concept is popular with classmates.",
        "When credible evidence supports the claimed connection to an established tradition and context."
      ], 2, [
        "A name can create an impression but cannot prove cultural authenticity.",
        "Preference or popularity is not evidence of historical or cultural connection.",
        "Correct. Authenticity is a claim requiring appropriate evidence, not a decorative label."
      ]),
      q("m07-s01-q07", "Why should a designer consider recognition and commercial benefit when using cultural ideas?", [
        "Because respectful design considers who is acknowledged and who gains from the use of cultural influence.",
        "Because only commercial products need cultural research.",
        "Because a school concept automatically shares benefits fairly."
      ], 0, [
        "Correct. Marketing and benefit can affect whether cultural influence is used responsibly.",
        "Non-commercial and school concepts still require appropriate context, research and respect.",
        "A school setting does not automatically resolve questions of recognition, authority or benefit."
      ]),
      q("m07-s01-q08", "Which statement best distinguishes innovation from novelty?", [
        "Innovation means using the most unusual combination available.",
        "Innovation uses a purposeful, reasoned change to address a user or design need; novelty may only appear different.",
        "Innovation means copying an established dish without adaptation."
      ], 1, [
        "Unusualness alone does not show that the concept is useful, coherent or respectful.",
        "Correct. A design reason and intended benefit make the change more than surface novelty.",
        "Unchanged copying does not demonstrate a new response to the design purpose."
      ]),
      q("m07-s01-q09", "Which statement accurately describes adaptation in food design?", [
        "Adaptation erases the original influence and creates no responsibility to acknowledge it.",
        "Adaptation is always culturally unsafe.",
        "Adaptation changes an established idea for a new context while origin, meaning and evidence still need consideration."
      ], 2, [
        "Changing an idea does not erase its origins or the need for responsible attribution.",
        "Adaptation can be responsible or irresponsible depending on purpose, research, context and use.",
        "Correct. Creative change and cultural responsibility can operate together."
      ]),
      q("m07-s01-q10", "A well-researched fusion concept is complete on paper. What does that establish?", [
        "It establishes a reasoned concept, but practical work still needs teacher authorisation and confirmed conditions.",
        "It authorises any equipment and ingredients shown in the concept.",
        "It proves that the predicted sensory result will occur."
      ], 0, [
        "Correct. Design reasoning can be strong while practical feasibility and approval remain separate.",
        "A concept cannot grant access to equipment, ingredients or practical work.",
        "Predictions need prototyping and evidence; a drawing does not prove the outcome."
      ])
    ]),

    "m07-s02": Object.freeze([
      q("m07-s02-q01", "Which research note belongs in a design evidence set?", [
        "A credible source or observation that changes or supports a named design decision.",
        "An interesting fact with no connection to the user, purpose, product or constraint.",
        "A personal preference presented as proof that every user will agree."
      ], 0, [
        "Correct. Relevant evidence has a clear job in the decision trail.",
        "Interesting information can still be unnecessary if it does not inform a decision.",
        "Preference can matter, but it is not evidence about every user's needs or likely response."
      ]),
      q("m07-s02-q02", "What is the strongest starting point for design research?", [
        "Open as many general food pages as possible.",
        "Identify the design decision or question that needs evidence.",
        "Choose a final concept before checking its context or feasibility."
      ], 1, [
        "A large number of pages can still produce unfocused, irrelevant research.",
        "Correct. A decision-focused question helps determine what evidence and source type are needed.",
        "Early commitment can hide evidence that should change, narrow or reject the idea."
      ]),
      q("m07-s02-q03", "Which source pairing best matches two different design questions?", [
        "Use a recipe blog to establish both cultural authority and every technical food property.",
        "Use a product advertisement as independent proof of its own claims.",
        "Use a credible community-led source for cultural context and a reliable technical source for ingredient function."
      ], 2, [
        "A recipe blog may offer food ideas, but it may not have authority for cultural context or technical claims.",
        "An advertisement is interested communication and does not independently verify its claims.",
        "Correct. Different questions require sources with the appropriate authority and expertise."
      ]),
      q("m07-s02-q04", "What makes a five-source mini-evidence set useful?", [
        "Each source answers a design question or supports, rejects or refines a decision.",
        "All five sources repeat the same unsupported statement.",
        "The set contains the five longest pages available."
      ], 0, [
        "Correct. Relevance and contribution to decisions matter more than raw source count.",
        "Repetition does not provide independent support or reveal different evidence needs.",
        "Length does not establish credibility, relevance or usefulness."
      ]),
      q("m07-s02-q05", "Which judgement best evaluates research quality?", [
        "The student has many browser tabs, so the evidence must be strong.",
        "The sources are credible, relevant, varied where needed and connected to recorded decisions.",
        "The first search result agrees with the student's preference."
      ], 1, [
        "Tab count does not show whether sources are credible or used purposefully.",
        "Correct. Quality depends on authority, relevance and the evidence-to-decision link.",
        "Agreement with a preference is not a test of source quality."
      ]),
      q("m07-s02-q06", "Two credible sources disagree about an important design context. What should the researcher do?", [
        "Keep only the source that supports the preferred idea.",
        "Average the statements even if they describe different contexts.",
        "Compare their creators, purposes, contexts and evidence, then qualify the design decision if uncertainty remains."
      ], 2, [
        "Discarding inconvenient evidence creates confirmation bias and hides uncertainty.",
        "Statements about different contexts cannot be made equivalent by averaging them.",
        "Correct. Cross-checking includes understanding why credible accounts may differ and limiting the claim."
      ]),
      q("m07-s02-q07", "Which statement separates preference from design evidence?", [
        "I enjoy this flavour, but I still need evidence that the combination suits the stated user, purpose and product.",
        "I enjoy this flavour, so every intended user will prefer it.",
        "Preference is irrelevant and should never influence design."
      ], 0, [
        "Correct. Preference can be acknowledged without being treated as universal proof.",
        "One person's liking cannot establish the response of every user.",
        "Preferences can inform a design, but they should be distinguished from broader evidence."
      ]),
      q("m07-s02-q08", "Research shows that a proposed cultural reference is poorly understood and unnecessary to the purpose. What is the strongest design response?", [
        "Keep it because removing an early idea shows weakness.",
        "Remove or rethink it because good research can eliminate as well as support an idea.",
        "Use more decorative symbols so the reference looks clearer."
      ], 1, [
        "Changing a weak idea in response to evidence demonstrates stronger design judgement.",
        "Correct. Research is useful when it improves decisions, including deciding not to proceed.",
        "More decoration does not supply cultural understanding, authority or design purpose."
      ]),
      q("m07-s02-q09", "Why should reuse conditions be recorded during design research?", [
        "They show whether an idea is visually attractive.",
        "They guarantee that practical equipment will be available.",
        "They help determine whether information, images or cultural material may be used in the intended way."
      ], 2, [
        "Attractiveness is a design consideration, not evidence of permission or reuse rights.",
        "Source reuse conditions do not control local equipment or practical approval.",
        "Correct. Access to material does not automatically authorise copying, adapting or publishing it."
      ]),
      q("m07-s02-q10", "Cultural authority and practical feasibility remain unclear after research. What should happen?", [
        "Keep the idea conceptual, identify the unresolved questions and ask the teacher rather than inventing an answer.",
        "Assume permission because the project is educational.",
        "Carry out the practical first and research the concerns afterwards."
      ], 0, [
        "Correct. A source-safe design process makes uncertainty visible and stops before unauthorised action.",
        "Educational purpose does not create cultural authority or practical permission.",
        "Research and approval must precede any practical action that depends on them."
      ])
    ]),

    "m07-s03": Object.freeze([
      q("m07-s03-q01", "Which annotation shows the strongest design reasoning?", [
        "It names the feature, predicts its contribution, connects that contribution to purpose, and flags evidence or teacher confirmation still needed.",
        "It lists ingredient names beside a neat drawing.",
        "It states that all equipment will be available because the design uses it."
      ], 0, [
        "Correct. The annotation communicates a decision and its limits rather than pretending the idea is already approved.",
        "Labels identify parts, but they do not explain intended effects, purpose or uncertainty.",
        "A concept cannot grant equipment access or practical approval; those are teacher-controlled facts."
      ]),
      q("m07-s03-q02", "Which annotation improves most on the label 'sauce'?", [
        "Sauce — looks good.",
        "Sauce component intended to add moisture and contrasting flavour for the stated user and purpose.",
        "Sauce — exact quantity approved."
      ], 1, [
        "This adds an opinion but still does not explain a specific design contribution.",
        "Correct. It connects the component to predicted sensory roles and design purpose.",
        "A concept annotation cannot invent or approve a practical quantity."
      ]),
      q("m07-s03-q03", "What should an annotation about a crisp outer component explain?", [
        "Only the word 'crispy' in a larger font.",
        "That crispness will definitely occur without testing.",
        "The intended textural contrast and how the proposed preparation or method may contribute to it."
      ], 2, [
        "A larger label does not add reasoning about function, method or purpose.",
        "A concept contains a prediction that still needs prototyping and evidence.",
        "Correct. The annotation links a design feature, predicted effect and sensory purpose."
      ]),
      q("m07-s03-q04", "Why include success criteria on an annotated concept?", [
        "They provide later features against which a prototype can be judged.",
        "They guarantee that the practical will be approved.",
        "They replace the need for testing and feedback."
      ], 0, [
        "Correct. Criteria make the intended result testable rather than leaving success vague.",
        "Criteria support judgement; they do not grant permission, equipment or ingredients.",
        "A criterion becomes useful when evidence from testing or feedback is compared with it."
      ]),
      q("m07-s03-q05", "Which item should be flagged for teacher confirmation rather than invented on a concept sketch?", [
        "The intended sensory contrast.",
        "Equipment access, allergen requirements and practical conditions.",
        "The user and purpose stated in the design brief."
      ], 1, [
        "The designer can state a sensory intention as a prediction to test.",
        "Correct. These are local safety and feasibility facts outside a student's authority to assume.",
        "The authorised design purpose should guide the concept and can be communicated directly."
      ]),
      q("m07-s03-q06", "What does a detailed concept sketch not establish?", [
        "The designer's intended components and reasoning.",
        "The questions that still need evidence.",
        "A recipe, practical permission or proof that the proposed result will work."
      ], 2, [
        "A well-annotated sketch can communicate components, purpose and reasoning.",
        "Good annotations can make uncertainty and research needs visible.",
        "Correct. Practical approval and tested outcomes require evidence beyond the concept."
      ]),
      q("m07-s03-q07", "What is the purpose of prototyping a food concept?", [
        "To test predictions and gather evidence for judging and improving the design.",
        "To prove that every annotation was correct before testing began.",
        "To replace teacher direction about practical work."
      ], 0, [
        "Correct. A prototype turns design predictions into observable evidence for refinement.",
        "Testing may confirm, challenge or complicate predictions; it is not a formality.",
        "Any practical prototype still depends on teacher-authorised conditions."
      ]),
      q("m07-s03-q08", "How should cultural origins appear in an annotated concept?", [
        "As decorative claims added without sources.",
        "As appropriately attributed influences connected to evidence and the actual design decision.",
        "As a statement that the concept is authentic because it names a culture."
      ], 1, [
        "Unsupported decoration can stereotype or misrepresent cultural influence.",
        "Correct. Attribution and source context help make the design trail transparent and respectful.",
        "Naming a culture does not establish authenticity, authority or responsible use."
      ]),
      q("m07-s03-q09", "Which statement best describes a feasible concept?", [
        "A concept that uses every available idea, regardless of constraints.",
        "A concept that is guaranteed to work because it is attractive.",
        "A concept realistic enough to investigate within known constraints, with unresolved practical requirements clearly identified."
      ], 2, [
        "Ignoring constraints makes a concept less realistic and harder to evaluate.",
        "Appearance cannot prove function, safety, resources or practical success.",
        "Correct. Feasibility combines what is known with honest limits and confirmation needs."
      ]),
      q("m07-s03-q10", "Which evidence set would make an annotated concept easiest for another person to understand?", [
        "User and purpose, component roles, predicted sensory effects, source links, constraints, criteria and confirmation flags.",
        "A polished drawing with no explanation.",
        "An ingredient list copied from an unrelated recipe."
      ], 0, [
        "Correct. These elements communicate the reasoning, evidence, intended result and limits of the design.",
        "Visual polish supports communication but cannot replace explanation and evidence.",
        "Unrelated recipe content does not explain or authorise this concept."
      ])
    ]),

    "m08-s01": Object.freeze([
      q("m08-s01-q01", "Which judgement about food technology is best supported?", [
        "Its value depends on the problem, context, mechanism, benefits and trade-offs, including access and resource needs.",
        "Newer technology is always better and replaces older methods.",
        "Food technology only changes production speed."
      ], 0, [
        "Correct. Technology should be analysed as a system change, not ranked by age alone.",
        "Different methods can remain useful for different users, places and purposes.",
        "It can also affect labour, safety, storage, scale, access, quality and resource use."
      ]),
      q("m08-s01-q02", "Why is 'newer means better' a weak way to compare food technologies?", [
        "Because new technologies never produce useful change.",
        "Because suitability depends on the need, users, context, effects and trade-offs rather than age alone.",
        "Because only the oldest method can be culturally responsible."
      ], 1, [
        "New technologies can offer benefits; the problem is assuming those benefits apply in every context.",
        "Correct. A technology must be judged against the system problem and evidence of its consequences.",
        "Older methods are not automatically best either; context and authority still matter."
      ]),
      q("m08-s01-q03", "What does the mechanism of a food technology explain?", [
        "The year in which every user adopted it.",
        "Whether the technology looks modern.",
        "How the technology produces a particular change or effect in the food system."
      ], 2, [
        "Adoption dates require credible historical evidence and are different from explaining how something works.",
        "Appearance does not explain what part of the system changes or why.",
        "Correct. Mechanism connects the technology's operation with its effects."
      ]),
      q("m08-s01-q04", "Which set of questions analyses a food technology as part of a system?", [
        "What need does it address, how does it work, who uses it, what changes and what trade-off appears?",
        "Is it newer, more expensive and more complicated than an older method?",
        "Can one benefit be listed without examining any consequence?"
      ], 0, [
        "Correct. The questions connect purpose, mechanism, users, effects and trade-offs.",
        "Age, price and complexity alone do not reveal suitability or system impact.",
        "Benefits without context or trade-offs produce an incomplete judgement."
      ]),
      q("m08-s01-q05", "How do canning and refrigeration respond differently to perishability?", [
        "Both preserve food through exactly the same mechanism and resource needs.",
        "Canning processes and seals food, while refrigeration depends on maintaining a cold environment.",
        "Refrigeration permanently removes the need for appropriate storage conditions."
      ], 1, [
        "They address a related need but alter food and infrastructure in different ways.",
        "Correct. Their different mechanisms create different effects, requirements and trade-offs.",
        "Refrigerated food still depends on suitable conditions and a continuing cold system."
      ]),
      q("m08-s01-q06", "Which trade-off is relevant when analysing refrigeration in a supplied context?", [
        "It makes all foods identical in texture and shelf life.",
        "It always uses fewer resources than every other storage technology.",
        "It may help maintain desired food qualities but depends on cooling infrastructure and continuing energy access."
      ], 2, [
        "Different foods respond differently, and refrigeration does not create one standard outcome.",
        "Resource use must be investigated in context rather than assumed from the method name.",
        "Correct. The statement identifies both a possible benefit and a system requirement."
      ]),
      q("m08-s01-q07", "Why might an older and a newer food technology continue side by side?", [
        "They may solve different problems or suit different users, places, resources and desired qualities.",
        "People use older methods only because they do not understand progress.",
        "The newer technology must have failed completely."
      ], 0, [
        "Correct. Coexistence can reflect different purposes and contexts rather than a simple replacement sequence.",
        "This is an unsupported judgement about users and ignores evidence of suitability.",
        "A technology can be useful in one context without replacing every alternative."
      ]),
      q("m08-s01-q08", "Which statement responsibly describes Aboriginal and Torres Strait Islander food technologies?", [
        "They are relevant only as pre-1788 historical artefacts.",
        "They include living and continuing knowledge and practices for harvesting, processing, cooking, storage and caring for Country.",
        "They may be reproduced or practised whenever a public source mentions them."
      ], 1, [
        "This incorrectly places living cultures and technologies only in the past.",
        "Correct. The description recognises continuity, expertise and connection with Country.",
        "Public information does not automatically grant cultural authority, access or practical permission."
      ]),
      q("m08-s01-q09", "A timeline gives no source for the date a technology entered a community. What should a student do?", [
        "Estimate a date from the technology's appearance.",
        "Use the date because timelines are automatically authoritative.",
        "Find credible evidence or leave the date out and state the limitation rather than guessing."
      ], 2, [
        "Appearance cannot establish a reliable historical date or local adoption pattern.",
        "A timeline still needs identifiable evidence, authorship and context.",
        "Correct. Source limits should narrow the claim instead of being filled with invented history."
      ]),
      q("m08-s01-q10", "A remote context has limited continuous electricity but needs longer food storage. What is the strongest first step?", [
        "Compare suitable technologies against storage need, infrastructure, desired food qualities, resources and trade-offs.",
        "Choose refrigeration automatically because it is newer than canning.",
        "Choose the oldest method automatically because it uses no technology."
      ], 0, [
        "Correct. The context and common criteria must guide the comparison before any recommendation.",
        "Continuous energy access is a relevant constraint and cannot be ignored.",
        "Older methods are also technologies and still need evidence about suitability and resources."
      ])
    ]),

    "m08-s02": Object.freeze([
      q("m08-s02-q01", "Which explanation best describes evidence of processing?", [
        "Name an observable change, propose a supported physical or chemical mechanism, and explain its effect on product quality.",
        "Say only that the food cooked, because all changes are chemical.",
        "Treat all browning as proof of burning."
      ], 0, [
        "Correct. The reasoning connects action, property change, observation and product effect.",
        "Processing can involve physical change, chemical change or both; observable evidence helps distinguish them.",
        "Browning reactions can create desirable colour, aroma and flavour; context and evidence matter."
      ]),
      q("m08-s02-q02", "Which example is most clearly a physical change?", [
        "New aromas and colours form during a browning reaction.",
        "An ingredient is cut into smaller pieces, changing its size and surface area.",
        "Proteins develop a new set structure during heating."
      ], 1, [
        "Browning involves chemical changes that create new colour and aroma compounds.",
        "Correct. The form changes without this example requiring a new substance to form.",
        "Protein setting involves structural changes and is not simply a change of size or shape."
      ]),
      q("m08-s02-q03", "Which observation gives more useful evidence than saying 'the batter cooked'?", [
        "The recipe page was open during heating.",
        "The bowl was the same colour as the bench.",
        "The mixture changed from flowing to holding shape, while the surface developed colour and aroma."
      ], 2, [
        "Having a recipe present does not describe a property change in the food.",
        "Equipment colour is unrelated to the processing mechanism in this example.",
        "Correct. The observations identify changes in structure and surface qualities that can be explained."
      ]),
      q("m08-s02-q04", "What sequence best explains a heated batter becoming able to hold its shape?", [
        "Heating changes structures such as starch and protein, helping the mixture become less able to flow and better able to hold gas and shape.",
        "Heating changes only the batter's name from raw to cooked.",
        "Gas alone creates permanent structure without any surrounding mixture changing."
      ], 0, [
        "Correct. The explanation links processing conditions, structural mechanisms and observable behaviour.",
        "A label does not explain why flow and structure changed.",
        "Gas may expand or form, but the surrounding structure must develop to hold the result."
      ]),
      q("m08-s02-q05", "Which description of gelatinisation is most accurate at this level?", [
        "It is any change that makes food brown.",
        "It involves starch, moisture and heating conditions contributing to thickening and structure development.",
        "It is the cutting of starch-containing food into equal pieces."
      ], 1, [
        "Browning and starch gelatinisation are different processing mechanisms.",
        "Correct. The description connects the relevant material, conditions and observable effect.",
        "Cutting is a physical preparation change, not gelatinisation."
      ]),
      q("m08-s02-q06", "A heated surface becomes golden and develops a new aroma. Which conclusion is strongest?", [
        "The product is definitely burnt and unusable.",
        "Only a physical shape change has occurred.",
        "A browning reaction may be contributing colour and aroma; the full judgement needs context and evidence."
      ], 2, [
        "Browning can be desirable; colour alone does not prove burning or product failure.",
        "New colour and aroma may indicate chemical change, not merely reshaping.",
        "Correct. The claim identifies a plausible mechanism without overstating what the observation proves."
      ]),
      q("m08-s02-q07", "Why can one processing action involve physical and chemical changes together?", [
        "Heating can change moisture or state while also changing structures and forming new colours or aromas.",
        "Physical and chemical changes cannot occur in the same food.",
        "The category depends only on whether the food tastes good."
      ], 0, [
        "Correct. Several mechanisms can operate at the same time and produce different kinds of evidence.",
        "Food processing often combines changes in form, moisture, structure and composition.",
        "Personal liking does not classify the mechanism of a change."
      ]),
      q("m08-s02-q08", "Why do food manufacturers control processing variables?", [
        "To guarantee that every raw ingredient begins naturally identical.",
        "To improve consistency even though raw materials and conditions can vary.",
        "To make observation of the finished product unnecessary."
      ], 1, [
        "Natural raw materials can vary; control cannot make their starting states identical.",
        "Correct. Managing variables reduces unwanted variation and helps produce more predictable outcomes.",
        "Observation and quality evidence are still needed to judge the process and result."
      ]),
      q("m08-s02-q09", "Which statement avoids an overgeneralisation about processing and nutrition?", [
        "Processing always removes every useful nutrient.",
        "Processing always makes food nutritionally better.",
        "Processing has varied effects on structure, moisture, safety, shelf life and other qualities; nutrition claims need food-specific evidence."
      ], 2, [
        "Different processes and foods have different effects, so this universal claim is unsupported.",
        "No processing method produces one guaranteed nutritional outcome for every food.",
        "Correct. The statement stays within the section's evidence and requires specific support for nutrition claims."
      ]),
      q("m08-s02-q10", "Which reasoning chain is complete?", [
        "Processing action → property change or mechanism → observable evidence → effect on the intended product.",
        "Product name → personal opinion → unsupported health claim.",
        "Cooking time → assumption that every other variable stayed the same."
      ], 0, [
        "Correct. The chain explains what happened, why it may have happened and why the result matters.",
        "Opinion and an unsupported claim do not explain a processing mechanism.",
        "Time is one variable and cannot prove that ingredients, size, temperature or conditions were comparable."
      ])
    ]),

    "m08-s03": Object.freeze([
      q("m08-s03-q01", "What should a recommendation compare before choosing a food-processing method?", [
        "The product purpose, predicted observable effects, common criteria, constraints, trade-offs and any teacher-controlled requirements.",
        "Only which method is fastest.",
        "Only which method sounds healthiest in general."
      ], 0, [
        "Correct. A fair comparison uses the same criteria and keeps practical approval separate from design reasoning.",
        "Speed alone may ignore product quality, energy, skill, equipment and the intended result.",
        "No method is universally best; suitability depends on purpose, food properties and conditions."
      ]),
      q("m08-s03-q02", "What should be defined before comparing two cooking methods?", [
        "Which method the designer already prefers.",
        "The intended product result and the criteria that matter for that purpose.",
        "A universal ranking of all cooking methods."
      ], 1, [
        "Preference can be acknowledged, but it should not decide the comparison before evidence is considered.",
        "Correct. A common purpose and criteria make the comparison meaningful.",
        "Method suitability changes with food, user, context and constraints."
      ]),
      q("m08-s03-q03", "Which comparison is fairest?", [
        "Compare different ingredients, different purposes and different criteria, then choose the result you like.",
        "Compare one real result with an imagined result using no evidence.",
        "Keep the ingredient, purpose and context consistent while predicting or observing both methods against the same criteria."
      ], 2, [
        "Changing several foundations makes it unclear whether the method caused the difference.",
        "A fair judgement needs comparable evidence rather than one-sided imagination.",
        "Correct. Common conditions and criteria support a defensible method comparison."
      ]),
      q("m08-s03-q04", "Which pairing of method and heat-transfer medium is accurate?", [
        "Steaming mainly uses steam, while oven baking mainly uses hot dry air.",
        "Steaming mainly uses direct contact with fat, while baking uses cold water.",
        "All methods transfer heat in exactly the same way."
      ], 0, [
        "Correct. Different heat-transfer conditions can produce different moisture, surface and texture effects.",
        "These descriptions do not match the named methods.",
        "Water, steam, air, fat and direct contact can transfer heat differently."
      ]),
      q("m08-s03-q05", "Why must preparation be considered alongside the cooking method?", [
        "Preparation affects only appearance and never processing behaviour.",
        "Size, shape, surface area, mixing or marinating can change how the ingredient responds during cooking.",
        "Preparation makes the selected cooking method irrelevant."
      ], 1, [
        "Preparation can change heat exposure, moisture movement, structure and other outcomes.",
        "Correct. Final quality comes from interacting choices, not the cooking method alone.",
        "The method still matters; the point is that it interacts with preparation and ingredient properties."
      ]),
      q("m08-s03-q06", "Steaming better preserves moisture, while baking better develops the desired surface colour. What does this show?", [
        "One method has failed because all criteria should improve together.",
        "The methods are identical because both use heat.",
        "The choice involves a trade-off that must be judged against the priorities of the product purpose."
      ], 2, [
        "Methods can perform differently across criteria without either being universally unsuccessful.",
        "Shared use of heat does not mean the transfer conditions or effects are the same.",
        "Correct. A recommendation should explain which criterion matters most and what disadvantage is accepted."
      ]),
      q("m08-s03-q07", "Which judgement about efficiency is most careful?", [
        "Efficiency can involve time, energy, resources, skill and whether the method achieves the required result.",
        "The fastest method is always the most efficient.",
        "Efficiency can be measured without knowing the product purpose."
      ], 0, [
        "Correct. Efficiency is a contextual judgement rather than a synonym for speed.",
        "A fast method may waste resources or fail the key product criteria.",
        "A method cannot be judged efficient if the required outcome and constraints are unknown."
      ]),
      q("m08-s03-q08", "A comparison favours a method that requires unfamiliar equipment. What should the recommendation say?", [
        "The equipment is approved because the comparison favours the method.",
        "The design rationale can name the predicted benefit, but equipment access and safe use require teacher confirmation.",
        "The student should test the equipment privately before asking."
      ], 1, [
        "Design evidence does not grant access, permission or safety approval.",
        "Correct. The recommendation separates design reasoning from local practical authority.",
        "Students must not test unfamiliar or unauthorised equipment."
      ]),
      q("m08-s03-q09", "Why is service context relevant to method choice?", [
        "It determines which food every person will prefer.",
        "It removes the need to consider ingredient properties.",
        "The way a food will be presented, held or eaten can change which qualities and constraints matter."
      ], 2, [
        "A service context informs design but cannot guarantee individual preference.",
        "Ingredient properties still interact with preparation and heat transfer.",
        "Correct. Suitability depends partly on the real situation in which the result is intended to function."
      ]),
      q("m08-s03-q10", "Which final recommendation is best supported?", [
        "For the stated purpose, Method A is preferred because evidence predicts the priority texture and service qualities, although it trades off time; practical conditions remain to be confirmed.",
        "Method A is the best method for every food because it won this comparison.",
        "Method A should be used because its name sounds more advanced."
      ], 0, [
        "Correct. It links evidence to purpose, acknowledges a trade-off and preserves teacher-controlled conditions.",
        "A result from one context cannot support a universal ranking.",
        "A name does not provide evidence about product effects or suitability."
      ])
    ]),

    "m09-s01": Object.freeze([
      q("m09-s01-q01", "A fictional student buys a familiar snack near the station after sport. Which analysis is most careful?", [
        "Several physiological, psychological, social or economic influences may interact; use the supplied clues and state what further evidence is needed.",
        "Habit is the only possible cause.",
        "The choice proves the student has poor values."
      ], 0, [
        "Correct. This forms an evidence-based possibility without judging the person or claiming one cause.",
        "One decision can involve hunger, familiarity, time, price, access and social context together.",
        "Food-choice analysis explains influences; it should not become a moral judgement about a person."
      ]),
      q("m09-s01-q02", "Which set contains the four analytical influence categories used in this section?", [
        "Healthy, unhealthy, traditional and modern.",
        "Physiological, psychological, social and economic.",
        "Breakfast, lunch, dinner and snacks."
      ], 1, [
        "These are value-laden or vague labels, not the section's evidence categories.",
        "Correct. The four categories help organise possible influences while allowing overlap.",
        "Meal timing describes when food may be eaten, not why a choice may occur."
      ]),
      q("m09-s01-q03", "Which clue is most directly physiological?", [
        "A friend recommends a new café.",
        "A familiar package brings back a childhood memory.",
        "The person reports strong hunger after an active morning."
      ], 2, [
        "A friend's recommendation is mainly a social clue.",
        "Memory and familiarity are mainly psychological clues.",
        "Correct. Hunger is a body response that can influence food selection."
      ]),
      q("m09-s01-q04", "A person repeatedly chooses a food because it feels familiar and reminds them of earlier experiences. Which influence is most directly supported?", [
        "Psychological, because familiarity and memory can shape perception and choice.",
        "Economic, because every repeated choice is about price.",
        "Physiological, because memory proves a body need."
      ], 0, [
        "Correct. Familiarity and memory are ordinary psychological influences, not signs of irrationality.",
        "Price may matter, but no price clue is supplied in this example.",
        "A memory can influence choice without establishing hunger, allergy or another body response."
      ]),
      q("m09-s01-q05", "Which example most clearly shows a social influence?", [
        "The food is the only item affordable within a stated budget.",
        "The person joins a family meal that is part of an everyday routine.",
        "The person feels thirsty after exercise."
      ], 1, [
        "A budget clue is mainly economic, although other influences may also be present.",
        "Correct. Family and shared routines are social influences on food selection.",
        "Thirst is a physiological body response."
      ]),
      q("m09-s01-q06", "Why can limited time be analysed as an economic influence?", [
        "Because time pressure proves that a person dislikes cooking.",
        "Because every quick meal is inexpensive.",
        "Because time is a practical resource that can limit which choices are realistic."
      ], 2, [
        "Time pressure does not establish a person's preferences or character.",
        "Preparation time and price are different factors; a quick option is not automatically cheap.",
        "Correct. Economic influences include time, transport, availability, equipment and access as well as price."
      ]),
      q("m09-s01-q07", "A fictional student is hungry, has little time and buys the same lunch as friends. What is the strongest explanation?", [
        "Physiological, economic and social influences may be interacting in the decision.",
        "Only friendship matters because it appears last in the sentence.",
        "The clues prove what the student will choose every day."
      ], 0, [
        "Correct. Hunger, time and peers provide evidence for several overlapping influences.",
        "The order of clues does not establish that one influence replaces the others.",
        "One fictional decision cannot prove a stable everyday pattern."
      ]),
      q("m09-s01-q08", "A scenario gives no price information. Which statement stays closest to the evidence?", [
        "The choice was definitely made because it was cheapest.",
        "Cost may be relevant, but price evidence would be needed before making that claim.",
        "Economic influences cannot be considered unless a receipt is provided."
      ], 1, [
        "Without price or budget clues, this turns a possibility into an unsupported certainty.",
        "Correct. The analysis identifies a possible influence and the missing evidence needed to test it.",
        "Other economic clues such as time, access or transport may be present even without a receipt."
      ]),
      q("m09-s01-q09", "How should a real food diary be handled in a class learning activity?", [
        "Display names so classmates can compare personal choices.",
        "Rank the diary against other students' records.",
        "Keep it private, minimise personal details and follow teacher directions about any use or sharing."
      ], 2, [
        "Names and personal food information should not be exposed for a class comparison.",
        "The categories analyse influences; they are not a system for judging or ranking people.",
        "Correct. Food records are personal data and require a privacy-safe learning process."
      ]),
      q("m09-s01-q10", "Which statement responsibly treats culture as a social influence?", [
        "Cultural context may influence a choice, but it does not determine what every individual will eat.",
        "A person's culture can be identified from one lunch choice.",
        "Everyone from the same culture responds to food in the same way."
      ], 0, [
        "Correct. Culture can interact with family, access, preference and many other circumstances.",
        "One food choice cannot establish a person's identity, culture or usual practice.",
        "This is a stereotype that ignores individual, family, regional and contextual variation."
      ])
    ]),

    "m09-s02": Object.freeze([
      q("m09-s02-q01", "An advertisement uses bright colours and says a product is 'the ultimate choice'. What is the best analysis?", [
        "Describe the visible technique, infer its possible effect for a stated audience, and test any factual claim against actual evidence.",
        "Bright colour always causes the same response, so the claim is proven.",
        "All advertising lies, so no further analysis is needed."
      ], 0, [
        "Correct. Observation, inference and evidence are kept separate.",
        "Colour effects depend on context and audience, and visual appeal does not prove a factual claim.",
        "Individual claims should be examined rather than assumed true or false."
      ]),
      q("m09-s02-q02", "What is a target audience?", [
        "Every person who has ever seen the advertisement.",
        "The group the advertisement appears designed to reach.",
        "Only the people who already purchased the product."
      ], 1, [
        "An advertisement may be seen more widely than the group its design choices target.",
        "Correct. Audience clues help explain the language, imagery, placement and call to action.",
        "Existing customers may be included, but the target can also involve potential users or buyers."
      ]),
      q("m09-s02-q03", "Which statement is an observation rather than an inference?", [
        "The advertisement makes every viewer feel excited.",
        "The characters prove the product creates friendship.",
        "The slogan appears three times beside images of a group laughing."
      ], 2, [
        "This claims a universal audience effect that cannot be directly observed.",
        "The images may suggest social association, but they do not prove the product causes friendship.",
        "Correct. The statement records visible features before interpreting their possible effect."
      ]),
      q("m09-s02-q04", "An advertisement says 'everyone is choosing it' without supporting data. Which technique and issue are most relevant?", [
        "It uses social proof, but evidence is needed before popularity is treated as a factual claim.",
        "It uses heat transfer, so the claim can be accepted.",
        "It uses a disclaimer that proves popularity."
      ], 0, [
        "Correct. The message draws on other people's supposed choices, but the factual part still needs evidence.",
        "Heat transfer is a food-processing concept, not the persuasive technique shown.",
        "No disclaimer or evidence is provided, and a disclaimer would not itself prove popularity."
      ]),
      q("m09-s02-q05", "Which message is best described as a comparative claim?", [
        "Try it today.",
        "This product contains less added sugar than Product X, according to the stated current labels.",
        "A smiling character appears on the package."
      ], 1, [
        "This is a call to action rather than a comparison between products.",
        "Correct. It compares a named feature and identifies the evidence basis that would need checking.",
        "This is an observable design feature, not a comparative product claim."
      ]),
      q("m09-s02-q06", "What is the strongest way to check a nutrition claim in a current advertisement?", [
        "Assume the claim is accurate because the advertisement was expensive to produce.",
        "Ask whether the colours make the claim feel believable.",
        "Compare the exact claim with the current product label or an appropriate official source."
      ], 2, [
        "Production quality does not independently verify a nutrition statement.",
        "Visual persuasion can affect interpretation but cannot prove a factual claim.",
        "Correct. The evidence source must match the type and current wording of the claim."
      ]),
      q("m09-s02-q07", "An advertisement omits serving-size information beside a nutrition comparison. What is the best analysis?", [
        "Identify the missing basis and explain that the comparison cannot yet be checked fairly.",
        "Assume the omission was deliberately dishonest.",
        "Ignore the omission because advertisements never need evidence."
      ], 0, [
        "Correct. The analysis states what information is missing without inventing the producer's motive.",
        "The omission matters, but its reason cannot be known from the advertisement alone.",
        "A factual comparison still needs an appropriate and comparable evidence basis."
      ]),
      q("m09-s02-q08", "Why should colour be interpreted cautiously in advertising analysis?", [
        "Colour has no persuasive role in any advertisement.",
        "Its possible effect depends on audience, context and how it works with other features.",
        "Each colour always creates one fixed emotion in every viewer."
      ], 1, [
        "Colour can influence attention and interpretation, so it is worth analysing.",
        "Correct. A careful inference avoids universal claims about audience response.",
        "People and contexts vary, and colour does not operate separately from the rest of the message."
      ]),
      q("m09-s02-q09", "A student likes an advertisement. What can that reaction support?", [
        "Proof that the advertisement manipulated every viewer.",
        "Proof that every product claim is accurate.",
        "Evidence about that student's response, which can inform but not prove the advertisement's general effect."
      ], 2, [
        "One personal response cannot establish a universal process or effect.",
        "Liking creative execution is separate from checking factual claims.",
        "Correct. Personal reaction is useful when its scope is stated accurately."
      ]),
      q("m09-s02-q10", "Why does product popularity not prove a separate performance or health claim?", [
        "Popularity describes choices or awareness, while the separate claim requires evidence that directly tests it.",
        "Popular products are never advertised.",
        "A large audience automatically turns opinions into facts."
      ], 0, [
        "Correct. Social proof and factual evidence answer different questions.",
        "Popular products may be advertised extensively; this does not address claim validity.",
        "Audience size does not change the evidence required for a factual statement."
      ])
    ]),

    "m09-s03": Object.freeze([
      q("m09-s03-q01", "Which design choice keeps a food message persuasive without misleading its audience?", [
        "Use creative layout, imagery and a call to action while keeping factual wording within the evidence and avoiding implied endorsements.",
        "Make the main claim false, then hide a correction in tiny text.",
        "Use a generated image as proof of the real product's qualities."
      ], 0, [
        "Correct. Persuasion can be strong without exaggerating what evidence proves.",
        "A disclaimer does not repair a misleading overall impression.",
        "A generated image is a creative representation, not evidence of a real product."
      ]),
      q("m09-s03-q02", "How should the strength of a factual food claim be decided?", [
        "Make it as strong as possible, then search for evidence later.",
        "Keep it no stronger than the appropriate evidence that supports it.",
        "Base it on the designer's confidence."
      ], 1, [
        "Evidence should shape the claim before publication, not be used to rescue exaggeration later.",
        "Correct. Accurate scope is part of ethical persuasion.",
        "Confidence and enthusiasm do not replace an appropriate source."
      ]),
      q("m09-s03-q03", "Which element can add creative appeal without changing the truth of a supported claim?", [
        "An invented endorsement from an organisation.",
        "A hidden condition that changes what the claim means.",
        "Purposeful imagery, humour, rhythm, layout or a clear call to action."
      ], 2, [
        "An unauthorised endorsement creates a misleading impression of approval.",
        "Important conditions should be visible rather than concealed.",
        "Correct. Creative communication can strengthen attention while factual wording remains accurate."
      ]),
      q("m09-s03-q04", "Why can a tiny disclaimer fail to repair a false main claim?", [
        "The overall message can remain misleading even when a qualification appears elsewhere.",
        "Disclaimers are forbidden in every kind of communication.",
        "Small text automatically makes the main claim true."
      ], 0, [
        "Correct. Ethical judgement considers the overall impression, prominence and clarity of the message.",
        "A clear disclaimer can communicate a genuine limitation; it simply cannot rescue deception.",
        "Text size does not change whether a factual claim is supported."
      ]),
      q("m09-s03-q05", "How may a generated food image be used responsibly in a concept advertisement?", [
        "As proof of the real product's exact appearance and performance.",
        "As a clearly understood creative representation, not evidence of a real result.",
        "As evidence that the product has already been produced safely."
      ], 1, [
        "A generated image does not record an actual product or its tested qualities.",
        "Correct. Its role is concept communication, with factual claims supported separately.",
        "An image cannot establish production, teacher observation or practical safety."
      ]),
      q("m09-s03-q06", "Which message creates an unauthorised endorsement?", [
        "A call to action inviting the audience to learn more.",
        "A source note supporting a factual ingredient claim.",
        "A school or community logo used to imply approval when no approval has been given."
      ], 2, [
        "A call to action can be persuasive without claiming another organisation's support.",
        "A relevant source cue improves transparency when it accurately supports the claim.",
        "Correct. Visual identity can falsely suggest that an organisation recommends or approves the product."
      ]),
      q("m09-s03-q07", "What is the safest rule for cultural symbols in a food message?", [
        "Do not use them as decoration without appropriate context, understanding and permission.",
        "Use them whenever a cultural influence appears in the ingredient list.",
        "Change their colours so cultural authority is no longer relevant."
      ], 0, [
        "Correct. Cultural imagery is not a generic design resource and may carry specific meaning and authority.",
        "An ingredient connection does not automatically authorise cultural symbols.",
        "A cosmetic change does not remove meaning, origin or cultural responsibilities."
      ]),
      q("m09-s03-q08", "Which image choice represents a product most fairly?", [
        "An unrelated premium product shown as though it were the real item.",
        "An image or concept view whose status is clear and that does not hide important product conditions.",
        "A heavily altered image used as proof of qualities that were never observed."
      ], 1, [
        "Substituting another product creates a false impression about what is being promoted.",
        "Correct. Fair representation separates creative presentation from evidence about the product.",
        "Alteration cannot provide evidence for untested appearance or performance claims."
      ]),
      q("m09-s03-q09", "What is a call to action?", [
        "A factual claim that needs no evidence.",
        "A disclaimer hidden below an advertisement.",
        "A prompt encouraging the audience to take a stated next step."
      ], 2, [
        "A call to action may be persuasive, but any factual claim within it still needs support.",
        "A disclaimer explains a limitation; it is not the requested next action.",
        "Correct. It might invite the audience to visit, compare, ask or learn more."
      ]),
      q("m09-s03-q10", "A concept says 'the healthiest Australian snack', but the evidence supports only one named ingredient feature. What is the best repair?", [
        "Replace the broad claim with a narrower statement about the supported feature and keep creative appeal elsewhere.",
        "Keep the claim and add several exclamation marks.",
        "Hide 'results may vary' in tiny text while leaving the unsupported comparison unchanged."
      ], 0, [
        "Correct. The repaired message matches its claim to the available evidence.",
        "Punctuation increases emphasis, not factual support.",
        "A weak qualification cannot repair an unsupported and misleading main comparison."
      ])
    ]),

    "m10-s01": Object.freeze([
      q("m10-s01-q01", "A one-day fictional diary shows two rushed meals. Which conclusion matches the evidence?", [
        "Within this recorded day, time pressure may have influenced the choices; more days and context would be needed to identify a typical pattern.",
        "This person always chooses poorly because they cannot manage time.",
        "Two events occurring together prove that one caused the other."
      ], 0, [
        "Correct. The statement uses the clue but qualifies the period, cause and confidence.",
        "One self-reported day cannot prove a typical pattern, cause or character judgement.",
        "Association can suggest a possible relationship but does not prove cause."
      ]),
      q("m10-s01-q02", "Why is a food diary described as self-reported data?", [
        "Because a researcher secretly observes everything the person eats.",
        "Because the record depends on what the person notices, remembers and chooses to report.",
        "Because every entry has been independently verified."
      ], 1, [
        "A diary is normally supplied by the person, not created through secret observation.",
        "Correct. Self-reporting can provide useful clues while also creating limits in completeness and accuracy.",
        "Independent verification is not guaranteed and should not be assumed."
      ]),
      q("m10-s01-q03", "What can a one-day food diary reasonably establish?", [
        "The person's usual pattern over an entire year.",
        "A diagnosis of the person's health.",
        "What was reported during that day and possible influences suggested by the available context."
      ], 2, [
        "One day is too short to prove what is typical across a longer period.",
        "A classroom diary analysis cannot diagnose health and should not make medical judgements.",
        "Correct. The conclusion stays within the recorded period and treats explanations as possibilities."
      ]),
      q("m10-s01-q04", "Which approach protects privacy during a food-diary activity?", [
        "Use fictional or private local data, avoid names and sensitive details, and follow teacher directions about sharing.",
        "Publish identifiable diaries so students can compare personal habits.",
        "Collect health details even when they are unnecessary to the learning purpose."
      ], 0, [
        "Correct. Data minimisation and controlled use protect the learner while preserving the analytical task.",
        "Identifiable personal food information should not be exposed for class comparison.",
        "Sensitive information should not be collected without a clear, authorised need."
      ]),
      q("m10-s01-q05", "What does it mean to code a clue in a food diary?", [
        "Give the person a score for the quality of each food.",
        "Organise the clue into a useful influence category while recognising possible overlap.",
        "Replace the person's words with a stronger claim."
      ], 1, [
        "Coding is an analytical tool, not a moral or nutritional ranking of foods or people.",
        "Correct. Categories help organise evidence without proving one cause.",
        "The analysis should preserve what the evidence reports and avoid overstating it."
      ]),
      q("m10-s01-q06", "A diary records limited time and a quick meal on the same day. Which statement is most accurate?", [
        "Limited time definitely caused the meal choice.",
        "The two details are unrelated because diaries cannot support any analysis.",
        "The association suggests time may have influenced the choice, but more evidence is needed to establish cause or a usual pattern."
      ], 2, [
        "Co-occurrence supports a possibility, not proof of causation.",
        "Diaries can provide useful contextual clues when their limitations are acknowledged.",
        "Correct. The statement separates a supported association from a stronger causal claim."
      ]),
      q("m10-s01-q07", "Which phrase best signals a qualified conclusion?", [
        "Within this recorded period, the diary suggests that availability may have influenced some choices.",
        "The diary proves exactly why this person always eats this way.",
        "Everyone in the same situation would make the same choices."
      ], 0, [
        "Correct. The wording limits time, certainty and scope to match the evidence.",
        "A short self-reported record cannot prove cause or usual behaviour.",
        "The diary concerns one record and cannot predict every person's response."
      ]),
      q("m10-s01-q08", "A diary lists foods but gives no time, location, available choices or stated reasons. What is the strongest response?", [
        "Infer motives from the food names alone.",
        "Identify the missing context and limit any explanation of influences.",
        "Judge the person's self-control from the list."
      ], 1, [
        "Food names alone do not reveal the circumstances or motives behind a choice.",
        "Correct. Missing context is a limitation that should reduce the strength of the conclusion.",
        "Foods are not moral evidence about a person's character or worth."
      ]),
      q("m10-s01-q09", "When may a pattern be suggested within a diary?", [
        "When one event appears once and the analyst expects it to repeat.",
        "When an advertisement describes what people usually do.",
        "When a feature appears repeatedly in the recorded evidence, with the time period and limits clearly stated."
      ], 2, [
        "One event does not constitute a repeated pattern.",
        "An advertisement is not evidence of what this diary records.",
        "Correct. Repetition can support a cautious pattern claim within the available record."
      ]),
      q("m10-s01-q10", "Which comment analyses influences without judging the person?", [
        "The supplied clues suggest hunger, familiarity and limited time may have interacted in this choice.",
        "This choice proves the person is irresponsible.",
        "The food is bad, so the person made a bad decision."
      ], 0, [
        "Correct. It uses evidence categories, cautious language and no character judgement.",
        "A food choice cannot establish a person's character, and the evidence does not support this claim.",
        "Moral labels do not explain physiological, psychological, social or economic influences."
      ])
    ]),

    "m10-s02": Object.freeze([
      q("m10-s02-q01", "What turns a list of historical food facts into an explanation?", [
        "A clear claim, relevant attributed evidence, reasoning that connects evidence to the claim, and a qualification matching the limits.",
        "Adding as many unrelated facts as possible.",
        "Choosing one cause and ignoring continuity or variation."
      ], 0, [
        "Correct. Reasoning shows why the evidence matters and how factors interact.",
        "Relevant connected evidence is stronger than a long list with no reasoning.",
        "Australian food change involves interacting factors and can include continuity, resistance and adaptation."
      ]),
      q("m10-s02-q02", "What is the role of reasoning in a historical explanation?", [
        "It adds new facts that were not found in any source.",
        "It explains how and why the selected evidence supports the claim.",
        "It replaces the need to identify where evidence came from."
      ], 1, [
        "Reasoning interprets evidence; it should not invent information.",
        "Correct. It is the link that turns attributed facts into an argument.",
        "Evidence still needs attribution, context and an appropriate source."
      ]),
      q("m10-s02-q03", "Which sentence explains interaction between two factors?", [
        "Migration changed food practices. Technology changed food practices.",
        "Many events happened over time.",
        "In this context, migration contributed food knowledge while refrigeration changed access and storage, allowing some practices to develop in new settings."
      ], 2, [
        "The sentence names two factors but does not explain how their effects connect.",
        "This is too vague to identify factors, evidence or a relationship.",
        "Correct. It describes how the factors may have reinforced or altered each other's effects in a bounded context."
      ]),
      q("m10-s02-q04", "What does continuity mean in an explanation of changing food practices?", [
        "Some practices, meanings or connections continue even while other aspects change or adapt.",
        "Nothing has changed in any place or community.",
        "An older practice has disappeared completely."
      ], 0, [
        "Correct. Change and continuity can occur together rather than forming opposites.",
        "Continuity in one area does not mean the whole food system remains unchanged.",
        "Complete disappearance describes a loss, not continuity."
      ]),
      q("m10-s02-q05", "Why add a qualification to a historical conclusion?", [
        "To make the explanation sound uncertain even when evidence is complete.",
        "To limit the claim to the place, group, period or context the evidence actually supports.",
        "To introduce a new argument in the final sentence."
      ], 1, [
        "Qualification is purposeful accuracy, not uncertainty for its own sake.",
        "Correct. It prevents a bounded evidence set from becoming a universal story.",
        "A conclusion should draw together the supported argument, not add an unsupported claim."
      ]),
      q("m10-s02-q06", "Which use of evidence is culturally responsible?", [
        "Remove the creator and Community context so the evidence sounds universal.",
        "Use one public source as permission to repeat all cultural knowledge.",
        "Attribute the source, retain its place and context, and limit the claim to what it is authorised and able to show."
      ], 2, [
        "Removing context can misrepresent evidence and erase cultural authority.",
        "Public access does not grant permission for unrestricted cultural use or reproduction.",
        "Correct. Attribution, context and limits are essential to responsible historical explanation."
      ]),
      q("m10-s02-q07", "Which evidence choice is strongest for a claim about interacting change?", [
        "A small set of relevant attributed evidence that shows both factors and their connection.",
        "A long list of unrelated dates with no reasoning.",
        "One famous dish treated as proof of every Australian experience."
      ], 0, [
        "Correct. Relevance and explanatory connection matter more than volume.",
        "Dates can support an explanation, but a disconnected list does not show why they matter.",
        "One dish cannot represent varied histories, Communities, regions and food practices."
      ]),
      q("m10-s02-q08", "Which statement best recognises that Australian food change is uneven?", [
        "Every community adopted the same foods and technologies at the same time.",
        "Different people and places may experience continuity, disruption, resistance, adoption, adaptation and fusion differently.",
        "Once a new practice appears, all older practices disappear."
      ], 1, [
        "This creates an unsupported single national timeline.",
        "Correct. The statement allows varied pathways and simultaneous change and continuity.",
        "Existing practices may continue, resist, adapt or coexist with newer ones."
      ]),
      q("m10-s02-q09", "What should the conclusion of an evidence-based explanation do?", [
        "Introduce an interesting cause that was not discussed or sourced.",
        "Repeat every fact without stating an overall judgement.",
        "Draw together the supported claim, key reasoning and an appropriate qualification."
      ], 2, [
        "A new unsupported idea weakens the evidence trail and belongs in further research, not the conclusion.",
        "A conclusion should synthesise the argument rather than reproduce a list.",
        "Correct. It closes the reasoning while keeping the scope honest."
      ]),
      q("m10-s02-q10", "A student describes Factor A and Factor B in separate paragraphs but never connects them. What revision is most useful?", [
        "Explain whether the factors reinforced, limited or changed each other's effects in the evidenced context.",
        "Add a third factor without changing the reasoning.",
        "Remove all qualifications so the claim sounds stronger."
      ], 0, [
        "Correct. The revision turns parallel description into a comparison of interaction.",
        "More factors will not fix the missing relationship between the first two.",
        "Stronger wording cannot replace evidence or reasoning and may overstate the conclusion."
      ])
    ]),

    "m10-s03": Object.freeze([
      q("m10-s03-q01", "Which evidence selection shows the strongest reflection?", [
        "A small relevant example, an explanation of what it demonstrates, how evidence or feedback changed thinking, and one specific next step.",
        "Every saved response, with no explanation, because more pages are always stronger.",
        "A polished layout presented as proof that the work was submitted."
      ], 0, [
        "Correct. The evidence has a purpose and the reflection explains development rather than merely rating performance.",
        "Volume does not replace relevance, context and explanation.",
        "Presentation helps communication, but saving or exporting is not submission and does not replace reasoning."
      ]),
      q("m10-s03-q02", "What should guide the selection of evidence for a course synthesis?", [
        "Which files are largest.",
        "The learning claim or purpose each example needs to support.",
        "Whether every activity can be included regardless of relevance."
      ], 1, [
        "File size does not show what the work demonstrates about learning.",
        "Correct. Evidence is useful when it clearly supports a stated claim or goal.",
        "Including everything can hide the strongest evidence and burden the reader."
      ]),
      q("m10-s03-q03", "What does it mean to contextualise a saved response?", [
        "Change it so it appears to come from a different task.",
        "Remove its source and date so it looks universal.",
        "Explain where it came from, what it was trying to show and why it is relevant now."
      ], 2, [
        "Evidence should be represented honestly rather than reassigned to another context.",
        "Removing context makes the evidence harder to interpret and verify.",
        "Correct. Context helps the reader understand the evidence's purpose, scope and learning value."
      ]),
      q("m10-s03-q04", "Which sequence produces evidence-based reflection?", [
        "Earlier idea → evidence or feedback → changed understanding → specific next action.",
        "Final grade guess → praise → decorative layout.",
        "List of tasks → statement that everything went well."
      ], 0, [
        "Correct. The sequence shows what changed, why it changed and how learning will continue.",
        "A grade guess and praise do not explain learning development.",
        "A list and general rating provide no evidence of changed thinking."
      ]),
      q("m10-s03-q05", "Why can an earlier misconception be useful evidence?", [
        "It proves the learner should receive a lower mark.",
        "When paired with the evidence that corrected it, it can demonstrate how understanding developed.",
        "It should be hidden so the final folio looks perfect."
      ], 1, [
        "A formative reflection is not an automatic mark and should not turn learning into punishment.",
        "Correct. The change from an earlier idea to a better-supported explanation is evidence of learning.",
        "Removing the learning journey can weaken a reflection about development."
      ]),
      q("m10-s03-q06", "Which next step is specific enough to act on?", [
        "Do better next time.",
        "Try harder with evidence.",
        "Before accepting an important claim, cross-check it with another relevant perspective and record the source limit."
      ], 2, [
        "This does not identify what action will change or how success could be checked.",
        "This names a broad intention but no concrete strategy.",
        "Correct. The action is precise, connected to the learning and realistic to apply."
      ]),
      q("m10-s03-q07", "How should sources appear in a reflection when they changed the learner's understanding?", [
        "Acknowledge the relevant source and explain what evidence or perspective it contributed.",
        "Remove the source so the new understanding appears entirely original.",
        "List every source visited even when most did not affect the reflection."
      ], 0, [
        "Correct. Attribution strengthens the evidence trail and explains what informed the change.",
        "Erasing a source misrepresents how the understanding developed.",
        "A focused account of influential sources is clearer than an unfiltered browser history."
      ]),
      q("m10-s03-q08", "A folio has excellent visual layout but weak explanations. What is the best judgement?", [
        "The layout proves the learning without further evidence.",
        "Presentation helps communication, but the folio still needs relevant evidence and reasoning.",
        "Weak reasoning should be hidden behind more decoration."
      ], 1, [
        "Visual polish cannot establish what the learner understands or can explain.",
        "Correct. Design supports the reader but does not replace the intellectual work.",
        "Decoration does not repair missing evidence, context or reflection."
      ]),
      q("m10-s03-q09", "What does downloading an evidence copy from the website mean?", [
        "The work has automatically been submitted and assessed.",
        "The teacher has observed and verified every item.",
        "A local organisational copy has been created; sharing or submission still follows teacher directions."
      ], 2, [
        "Download, save, print and export functions do not create a submission.",
        "A website export cannot stand for teacher observation or verification.",
        "Correct. The tool preserves evidence but does not change its formative or device-local status."
      ]),
      q("m10-s03-q10", "Which statement best describes synthesis?", [
        "Bring relevant ideas and evidence together into a clear overall explanation that answers a purpose.",
        "Place every saved item in chronological order without interpreting it.",
        "Choose the most attractive item and treat it as the whole course."
      ], 0, [
        "Correct. Synthesis selects and connects evidence rather than merely collecting it.",
        "Chronology may help organise work, but without reasoning it does not create an overall explanation.",
        "One attractive item may be useful evidence but cannot automatically represent all learning."
      ])
    ])
  });
})();
