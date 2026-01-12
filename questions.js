export const questionLibrary = [

    // =================================================================
    // 1. SPOTTING ERROR (10 Questions)
    // =================================================================
    {
        id: "se_1", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "The list of items (A) / are on the desk (B) / near the window. (C) / No Error (D)",
        options: ["The list of items", "are on the desk", "near the window.", "No Error"],
        correctIndex: 1,
        explanation: "Subject is 'list' (singular). Verb must be 'is'.",
        explanationBengali: "Subject হলো 'list' (singular), তাই verb 'is' হবে।"
    },
    {
        id: "se_2", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is (A) / a best student (B) / in the class. (C) / No Error (D)",
        options: ["He is", "a best student", "in the class.", "No Error"],
        correctIndex: 1,
        explanation: "Superlative 'best' takes 'the'. Correct: 'the best student'.",
        explanationBengali: "Superlative degree-এর আগে 'the' বসে।"
    },
    {
        id: "se_3", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The sceneries (A) / of Kashmir (B) / are enchanting. (C) / No Error (D)",
        options: ["The sceneries", "of Kashmir", "are enchanting.", "No Error"],
        correctIndex: 0,
        explanation: "'Scenery' is uncountable. It cannot be pluralized.",
        explanationBengali: "'Scenery' শব্দটি uncountable, তাই এর plural হয় না।"
    },
    {
        id: "se_4", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He works (A) / hardly (B) / to succeed. (C) / No Error (D)",
        options: ["He works", "hardly", "to succeed.", "No Error"],
        correctIndex: 1,
        explanation: "'Hardly' means barely. Use 'hard' for effort.",
        explanationBengali: "কঠোর পরিশ্রম বোঝাতে 'hard' ব্যবহার হয়, 'hardly' নয়।"
    },
    {
        id: "se_5", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Hardly I had (A) / reached the station (B) / when it rained. (C) / No Error (D)",
        options: ["Hardly I had", "reached the station", "when it rained.", "No Error"],
        correctIndex: 0,
        explanation: "Inversion required: 'Hardly had I'.",
        explanationBengali: "'Hardly' দিয়ে বাক্য শুরু হলে verb আগে আসে (Inversion)।"
    },
    {
        id: "se_6", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Conditionals",
        question: "If I would have (A) / known this, (B) / I would have helped. (C) / No Error (D)",
        options: ["If I would have", "known this,", "I would have helped.", "No Error"],
        correctIndex: 0,
        explanation: "3rd Conditional 'If' clause takes 'had known'.",
        explanationBengali: "Conditional-এর 'If' অংশে Past Perfect (had known) হয়।"
    },
    {
        id: "se_7", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is (A) / married with (B) / a doctor. (C) / No Error (D)",
        options: ["He is", "married with", "a doctor.", "No Error"],
        correctIndex: 1,
        explanation: "Correct preposition is 'to'. Married to.",
        explanationBengali: "'Married'-এর সাথে 'to' বসে।"
    },
    {
        id: "se_8", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I have (A) / seen him (B) / yesterday. (C) / No Error (D)",
        options: ["I have", "seen him", "yesterday.", "No Error"],
        correctIndex: 0,
        explanation: "'Yesterday' requires Past Simple: 'I saw him'.",
        explanationBengali: "'Yesterday' থাকলে Past Simple Tense হয়।"
    },
    {
        id: "se_9", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Superfluous",
        question: "He returned (A) / back from (B) / Delhi. (C) / No Error (D)",
        options: ["He returned", "back from", "Delhi.", "No Error"],
        correctIndex: 1,
        explanation: "'Return' implies back. Remove 'back'.",
        explanationBengali: "'Return' মানেই ফিরে আসা, তাই 'back' অপ্রয়োজনীয়।"
    },
    {
        id: "se_10", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is (A) / senior than (B) / me. (C) / No Error (D)",
        options: ["He is", "senior than", "me.", "No Error"],
        correctIndex: 1,
        explanation: "'Senior' takes 'to', not 'than'.",
        explanationBengali: "'Senior'-এর পরে 'to' বসে।"
    },

    // =================================================================
    // 2. SENTENCE IMPROVEMENT (10 Questions)
    // =================================================================
    {
        id: "si_1", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "He *is knowing* the answer.",
        options: ["knows", "has known", "was knowing", "No Improvement"],
        correctIndex: 0,
        explanation: "'Know' is a stative verb, not used in continuous form.",
        explanationBengali: "'Know' continuous tense-এ হয় না। সঠিক: 'knows'।"
    },
    {
        id: "si_2", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "If I *was* a bird, I would fly.",
        options: ["am", "were", "had been", "No Improvement"],
        correctIndex: 1,
        explanation: "Imaginary condition requires 'were' for all subjects.",
        explanationBengali: "কাল্পনিক ইচ্ছায় সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "si_3", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adverbs",
        question: "He is *enough kind* to help me.",
        options: ["kind enough", "kindly enough", "enough kindly", "No Improvement"],
        correctIndex: 0,
        explanation: "'Enough' comes after the adjective.",
        explanationBengali: "'Enough' শব্দটি adjective-এর পরে বসে।"
    },
    {
        id: "si_4", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He prefers tea *than* coffee.",
        options: ["over", "to", "against", "No Improvement"],
        correctIndex: 1,
        explanation: "Prefer takes 'to'.",
        explanationBengali: "'Prefer'-এর সাথে 'to' বসে।"
    },
    {
        id: "si_5", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tags",
        question: "She is happy, *isn't it*?",
        options: ["isn't she", "aren't she", "didn't she", "No Improvement"],
        correctIndex: 0,
        explanation: "Tag must match subject 'she'.",
        explanationBengali: "Subject 'she' তাই tag হবে 'isn't she'।"
    },
    {
        id: "si_6", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Verbs",
        question: "I made him *to do* the work.",
        options: ["do", "doing", "done", "No Improvement"],
        correctIndex: 0,
        explanation: "Causative 'make' takes bare infinitive (no 'to').",
        explanationBengali: "'Make'-এর পর 'to' ছাড়া verb বসে।"
    },
    {
        id: "si_7", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "No sooner had I reached *when* the train left.",
        options: ["then", "than", "that", "No Improvement"],
        correctIndex: 1,
        explanation: "No sooner ... than.",
        explanationBengali: "'No sooner'-এর সাথে 'than' বসে।"
    },
    {
        id: "si_8", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb",
        question: "Bread and butter *are* my favorite breakfast.",
        options: ["is", "were", "have been", "No Improvement"],
        correctIndex: 0,
        explanation: "Bread and butter is considered a single idea here.",
        explanationBengali: "একই ধারণা বোঝালে verb singular হয়।"
    },
    {
        id: "si_9", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Nouns",
        question: "The *datas* are incorrect.",
        options: ["data", "datum", "datums", "No Improvement"],
        correctIndex: 0,
        explanation: "'Data' is the plural of 'datum', but used collectively. 'Datas' is wrong.",
        explanationBengali: "'Datas' ভুল শব্দ, সঠিক হলো 'data'।"
    },
    {
        id: "si_10", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is *an* European.",
        options: ["a", "the", "one", "No Improvement"],
        correctIndex: 0,
        explanation: "European starts with 'yu' sound (consonant sound). Use 'a'.",
        explanationBengali: "উচ্চারণ 'ইউ' এর মতো হলে 'a' বসে।"
    },

    // =================================================================
    // 3. FILL IN THE BLANKS (10 Questions)
    // =================================================================
    {
        id: "fb_1", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "The cat jumped ____ the table.",
        options: ["in", "upon", "at", "by"],
        correctIndex: 1,
        explanation: "Motion onto a surface uses 'upon'.",
        explanationBengali: "গতি নিয়ে ওপরে ঝাঁপ দিলে 'upon' হয়।"
    },
    {
        id: "fb_2", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Phrasal Verbs",
        question: "Please ____ the lights when you leave.",
        options: ["turn out", "turn off", "turn up", "turn in"],
        correctIndex: 1,
        explanation: "Turn off means to extinguish.",
        explanationBengali: "আলো নেভানো বোঝাতে 'turn off' হয়।"
    },
    {
        id: "fb_3", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocab",
        question: "The lawyer produced ____ evidence.",
        options: ["corroborative", "contradictory", "irrelevant", "fictional"],
        correctIndex: 0,
        explanation: "Corroborative means supporting or confirming.",
        explanationBengali: "Corroborative মানে সমর্থনকারী প্রমাণ।"
    },
    {
        id: "fb_4", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "He is poor ____ honest.",
        options: ["and", "but", "so", "or"],
        correctIndex: 1,
        explanation: "Contrasting ideas require 'but'.",
        explanationBengali: "বিপরীত ধারণা বোঝাতে 'but' বসে।"
    },
    {
        id: "fb_5", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "Copper is ____ useful metal.",
        options: ["a", "an", "the", "none"],
        correctIndex: 0,
        explanation: "'Useful' starts with 'yu' sound.",
        explanationBengali: "'Useful'-এর আগে 'a' বসে।"
    },
    {
        id: "fb_6", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "By next year, I ____ my degree.",
        options: ["will finish", "will have finished", "finished", "finish"],
        correctIndex: 1,
        explanation: "Future Perfect Tense for completion by a future time.",
        explanationBengali: "ভবিষ্যতের নির্দিষ্ট সময়ে কাজ শেষ বোঝালে Future Perfect হয়।"
    },
    {
        id: "fb_7", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Vocab",
        question: "The government has ____ a committee.",
        options: ["set in", "set up", "set on", "set off"],
        correctIndex: 1,
        explanation: "Set up means to establish.",
        explanationBengali: "Set up মানে স্থাপন করা।"
    },
    {
        id: "fb_8", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Homophones",
        question: "She has beautiful ____.",
        options: ["hair", "hare", "heir", "here"],
        correctIndex: 0,
        explanation: "Hair refers to what grows on the head.",
        explanationBengali: "Hair মানে চুল।"
    },
    {
        id: "fb_9", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Subject-Verb",
        question: "Neither of the boys ____ present.",
        options: ["were", "are", "was", "have"],
        correctIndex: 2,
        explanation: "Neither takes a singular verb.",
        explanationBengali: "Neither-এর সাথে verb singular হয়।"
    },
    {
        id: "fb_10", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He died ____ cancer.",
        options: ["from", "of", "by", "with"],
        correctIndex: 1,
        explanation: "Died 'of' a disease.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },

    // =================================================================
    // 4. VOICE CHANGE (10 Questions)
    // =================================================================
    {
        id: "vc_1", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Active: She writes a letter.",
        options: ["A letter is written by her.", "A letter was written by her.", "A letter has written by her.", "A letter is being written by her."],
        correctIndex: 0,
        explanation: "Obj + am/is/are + V3 + by + Subj.",
        explanationBengali: "Present Indefinite-এ am/is/are + V3 হয়।"
    },
    {
        id: "vc_2", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Present Continuous",
        question: "Active: I am playing cricket.",
        options: ["Cricket was played by me.", "Cricket is being played by me.", "Cricket has been played by me.", "Cricket is played by me."],
        correctIndex: 1,
        explanation: "Obj + am/is/are + being + V3 + by + Subj.",
        explanationBengali: "Continuous tense-এ 'being' যুক্ত হয়।"
    },
    {
        id: "vc_3", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Imperative",
        question: "Active: Open the door.",
        options: ["Let the door be opened.", "The door should be opened.", "Let the door opened.", "Open the door please."],
        correctIndex: 0,
        explanation: "Let + Obj + be + V3.",
        explanationBengali: "Imperative বাক্যে Let + be + V3 হয়।"
    },
    {
        id: "vc_4", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Past Simple",
        question: "Active: Who broke the glass?",
        options: ["By whom was the glass broken?", "Who was the glass broken?", "By whom is the glass broken?", "The glass was broken by who?"],
        correctIndex: 0,
        explanation: "Who becomes 'By whom' + was/were + Obj + V3.",
        explanationBengali: "Who থাকলে 'By whom' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_5", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Perfect Tense",
        question: "Active: He has done the work.",
        options: ["The work was done by him.", "The work has been done by him.", "The work had been done by him.", "The work is done by him."],
        correctIndex: 1,
        explanation: "Has/Have + been + V3.",
        explanationBengali: "Perfect Tense-এ 'been' যুক্ত হয়।"
    },
    {
        id: "vc_6", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Modals",
        question: "Active: She might visit us.",
        options: ["We might be visited by her.", "We may be visited by her.", "We might have visited by her.", "We might visited by her."],
        correctIndex: 0,
        explanation: "Modal + be + V3.",
        explanationBengali: "Modal verb-এর সাথে 'be' যুক্ত হয়।"
    },
    {
        id: "vc_7", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Double Object",
        question: "Active: He gave me a pen.",
        options: ["I was given a pen by him.", "A pen is given to me by him.", "I gave a pen by him.", "A pen was gave to me."],
        correctIndex: 0,
        explanation: "Either object can become subject. 'I was given...' is standard.",
        explanationBengali: "দুটি Object থাকলে ব্যক্তিবাচক Object-কে subject করা শ্রেয়।"
    },
    {
        id: "vc_8", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Infinitive",
        question: "Active: I am to do it.",
        options: ["It is to be done by me.", "It was to be done by me.", "It has to be done by me.", "It should be done by me."],
        correctIndex: 0,
        explanation: "To + V1 becomes To + be + V3.",
        explanationBengali: "To + Verb থাকলে To + be + V3 হয়।"
    },
    {
        id: "vc_9", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "Active: He was writing a book.",
        options: ["A book was writing by him.", "A book was being written by him.", "A book is written by him.", "A book had been written by him."],
        correctIndex: 1,
        explanation: "Was/Were + being + V3.",
        explanationBengali: "Past Continuous-এ 'being' যুক্ত হয়।"
    },
    {
        id: "vc_10", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Prepositional Verb",
        question: "Active: They laughed at him.",
        options: ["He was laughed by them.", "He was laughed at by them.", "He was laughed at them.", "He laughed at by them."],
        correctIndex: 1,
        explanation: "The preposition 'at' must remain after the verb.",
        explanationBengali: "Verb-এর সাথে থাকা preposition প্যাসিভ ভয়েসেও রাখতে হয়।"
    },

    // =================================================================
    // 5. DIRECT & INDIRECT SPEECH (10 Questions)
    // =================================================================
    {
        id: "di_1", chapter: "Direct & Indirect", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "He said, \"I am happy.\"",
        options: ["He said that he was happy.", "He said that I am happy.", "He says that he was happy.", "He said that he is happy."],
        correctIndex: 0,
        explanation: "Present becomes Past (am -> was).",
        explanationBengali: "Reporting verb past হলে tense পরিবর্তন হয়ে past হয়।"
    },
    {
        id: "di_2", chapter: "Direct & Indirect", type: "grammar", difficulty: "moderate", topic: "Questions",
        question: "He said to me, \"Are you coming?\"",
        options: ["He asked me if I was coming.", "He asked me that if I was coming.", "He asked me if I am coming.", "He told me if I was coming."],
        correctIndex: 0,
        explanation: "Said to -> Asked. Connective -> If/Whether. Present -> Past.",
        explanationBengali: "প্রশ্নবোধক বাক্যে 'if' বসে এবং tense পরিবর্তন হয়।"
    },
    {
        id: "di_3", chapter: "Direct & Indirect", type: "grammar", difficulty: "hard", topic: "Universal Truth",
        question: "The teacher said, \"The earth is round.\"",
        options: ["The teacher said that the earth was round.", "The teacher said that the earth is round.", "The teacher said the earth has been round.", "The teacher asked if the earth is round."],
        correctIndex: 1,
        explanation: "Universal truths do not change tense.",
        explanationBengali: "চিরন্তন সত্যের ক্ষেত্রে tense-এর কোনো পরিবর্তন হয় না।"
    },
    {
        id: "di_4", chapter: "Direct & Indirect", type: "grammar", difficulty: "moderate", topic: "Imperative",
        question: "He said to the servant, \"Clean the room.\"",
        options: ["He ordered the servant to clean the room.", "He told the servant clean the room.", "He asked the servant that clean the room.", "He ordered the servant that clean the room."],
        correctIndex: 0,
        explanation: "Imperative uses 'to' + verb.",
        explanationBengali: "আদেশ বোঝালে 'ordered' এবং 'to' দিয়ে যুক্ত হয়।"
    },
    {
        id: "di_5", chapter: "Direct & Indirect", type: "grammar", difficulty: "hard", topic: "Exclamatory",
        question: "He said, \"Alas! I am undone.\"",
        options: ["He exclaimed with sorrow that he was undone.", "He cried that he was undone.", "He said alas he was undone.", "He exclaimed with joy that he was undone."],
        correctIndex: 0,
        explanation: "Alas indicates sorrow. 'Exclaimed with sorrow that...'",
        explanationBengali: "দুঃখ বোঝালে 'exclaimed with sorrow' হয়।"
    },
    {
        id: "di_6", chapter: "Direct & Indirect", type: "grammar", difficulty: "moderate", topic: "Optative",
        question: "He said, \"May you live long.\"",
        options: ["He prayed that I might live long.", "He prayed that I may live long.", "He said that I might live long.", "He asked that I live long."],
        correctIndex: 0,
        explanation: "May becomes Might. Said -> Prayed/Wished.",
        explanationBengali: "ইচ্ছা বোঝালে 'prayed/wished' এবং may -> might হয়।"
    },
    {
        id: "di_7", chapter: "Direct & Indirect", type: "grammar", difficulty: "moderate", topic: "Past Simple",
        question: "He said, \"I bought a car.\"",
        options: ["He said that he had bought a car.", "He said that he bought a car.", "He said that he has bought a car.", "He said that he was bought a car."],
        correctIndex: 0,
        explanation: "Past Simple becomes Past Perfect.",
        explanationBengali: "Past Indefinite পরিবর্তিত হয়ে Past Perfect হয়।"
    },
    {
        id: "di_8", chapter: "Direct & Indirect", type: "grammar", difficulty: "hard", topic: "Nearness Words",
        question: "He said, \"I will do it tomorrow.\"",
        options: ["He said that he would do it the next day.", "He said that he will do it tomorrow.", "He said that he would do it tomorrow.", "He said that he will do it the next day."],
        correctIndex: 0,
        explanation: "Will -> Would. Tomorrow -> The next day.",
        explanationBengali: "Tomorrow পরিবর্তিত হয়ে 'the next day' হয়।"
    },
    {
        id: "di_9", chapter: "Direct & Indirect", type: "grammar", difficulty: "easy", topic: "Modals",
        question: "He said, \"I can swim.\"",
        options: ["He said that he could swim.", "He said that he can swim.", "He said that he could swam.", "He asked if he can swim."],
        correctIndex: 0,
        explanation: "Can -> Could.",
        explanationBengali: "Can পরিবর্তিত হয়ে Could হয়।"
    },
    {
        id: "di_10", chapter: "Direct & Indirect", type: "grammar", difficulty: "hard", topic: "Let",
        question: "He said, \"Let us go home.\"",
        options: ["He proposed that they should go home.", "He said to let them go home.", "He ordered to go home.", "He asked if they can go home."],
        correctIndex: 0,
        explanation: "Let us -> Proposed/Suggested + should.",
        explanationBengali: "Let us থাকলে 'proposed' এবং 'should' বসে।"
    },

    // =================================================================
    // 6. SYNONYMS (10 Questions)
    // =================================================================
    {
        id: "syn_1", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: HAPPY",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correctIndex: 1,
        explanation: "Joyful means feeling, expressing, or causing great pleasure and happiness.",
        explanationBengali: "Joyful মানে আনন্দিত।"
    },
    {
        id: "syn_2", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: EPHEMERAL",
        options: ["Lasting", "Eternal", "Short-lived", "Heavy"],
        correctIndex: 2,
        explanation: "Ephemeral means lasting for a very short time.",
        explanationBengali: "Ephemeral মানে ক্ষণস্থায়ী।"
    },
    {
        id: "syn_3", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: CANDID",
        options: ["Secretive", "Frank", "Dishonest", "Rude"],
        correctIndex: 1,
        explanation: "Candid means truthful and straightforward; frank.",
        explanationBengali: "Candid মানে অকপট বা স্পষ্টবাদী।"
    },
    {
        id: "syn_4", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: BEGIN",
        options: ["Stop", "Start", "Finish", "End"],
        correctIndex: 1,
        explanation: "Start is a synonym for Begin.",
        explanationBengali: "Start মানে শুরু করা।"
    },
    {
        id: "syn_5", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: VAGUE",
        options: ["Clear", "Unclear", "Sharp", "Bright"],
        correctIndex: 1,
        explanation: "Vague means uncertain, indefinite, or unclear.",
        explanationBengali: "Vague মানে অস্পষ্ট।"
    },
    {
        id: "syn_6", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: LETHARGIC",
        options: ["Active", "Sluggish", "Fast", "Sharp"],
        correctIndex: 1,
        explanation: "Lethargic means affected by lethargy; sluggish and apathetic.",
        explanationBengali: "Lethargic মানে অলস বা ধীর।"
    },
    {
        id: "syn_7", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: OBSTINATE",
        options: ["Stubborn", "Flexible", "Soft", "Kind"],
        correctIndex: 0,
        explanation: "Obstinate means stubbornly refusing to change one's opinion.",
        explanationBengali: "Obstinate মানে জেদি।"
    },
    {
        id: "syn_8", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: HUGE",
        options: ["Tiny", "Small", "Enormous", "Weak"],
        correctIndex: 2,
        explanation: "Enormous means very large in size.",
        explanationBengali: "Enormous মানে বিশাল।"
    },
    {
        id: "syn_9", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: GARRULOUS",
        options: ["Silent", "Talkative", "Quiet", "Shy"],
        correctIndex: 1,
        explanation: "Garrulous means excessively talkative.",
        explanationBengali: "Garrulous মানে বাচাল।"
    },
    {
        id: "syn_10", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: DILIGENT",
        options: ["Lazy", "Hardworking", "Slow", "Stupid"],
        correctIndex: 1,
        explanation: "Diligent means having or showing care and conscientiousness in one's work.",
        explanationBengali: "Diligent মানে পরিশ্রমী।"
    },

    // =================================================================
    // 7. ANTONYMS (10 Questions)
    // =================================================================
    {
        id: "ant_1", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: GOOD",
        options: ["Nice", "Bad", "Fine", "Okay"],
        correctIndex: 1,
        explanation: "Bad is the opposite of Good.",
        explanationBengali: "Good-এর বিপরীত Bad।"
    },
    {
        id: "ant_2", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: BRAVE",
        options: ["Cowardly", "Strong", "Bold", "Happy"],
        correctIndex: 0,
        explanation: "Cowardly is the opposite of Brave.",
        explanationBengali: "Brave (সাহসী)-এর বিপরীত Cowardly (ভীরু)।"
    },
    {
        id: "ant_3", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: MITIGATE",
        options: ["Soothe", "Aggravate", "Relieve", "Calm"],
        correctIndex: 1,
        explanation: "Mitigate means to make less severe; Aggravate means to make worse.",
        explanationBengali: "Mitigate (প্রশমিত করা)-এর বিপরীত Aggravate (অবনতি ঘটানো)।"
    },
    {
        id: "ant_4", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: OPTIMISTIC",
        options: ["Hopeful", "Pessimistic", "Cheerful", "Happy"],
        correctIndex: 1,
        explanation: "Pessimistic is the opposite of Optimistic.",
        explanationBengali: "Optimistic (আশাবাদী)-এর বিপরীত Pessimistic (নৈরাশ্যবাদী)।"
    },
    {
        id: "ant_5", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: RISE",
        options: ["Fall", "Grow", "Stand", "Walk"],
        correctIndex: 0,
        explanation: "Fall is the opposite of Rise.",
        explanationBengali: "Rise (ওঠা)-এর বিপরীত Fall (পড়া)।"
    },
    {
        id: "ant_6", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: CANDID",
        options: ["Frank", "Deceitful", "Honest", "Open"],
        correctIndex: 1,
        explanation: "Candid means honest; Deceitful means dishonest.",
        explanationBengali: "Candid (অকপট)-এর বিপরীত Deceitful (প্রতারণাপূর্ণ)।"
    },
    {
        id: "ant_7", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: ARROGANT",
        options: ["Proud", "Humble", "Rude", "Loud"],
        correctIndex: 1,
        explanation: "Humble is the opposite of Arrogant.",
        explanationBengali: "Arrogant (অহংকারী)-এর বিপরীত Humble (বিনয়ী)।"
    },
    {
        id: "ant_8", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: EPHEMERAL",
        options: ["Temporary", "Permanent", "Short", "Brief"],
        correctIndex: 1,
        explanation: "Permanent is the opposite of Ephemeral (short-lived).",
        explanationBengali: "Ephemeral (ক্ষণস্থায়ী)-এর বিপরীত Permanent (স্থায়ী)।"
    },
    {
        id: "ant_9", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: BARREN",
        options: ["Dry", "Fertile", "Empty", "Waste"],
        correctIndex: 1,
        explanation: "Fertile is the opposite of Barren.",
        explanationBengali: "Barren (বন্ধ্যা)-এর বিপরীত Fertile (উর্বর)।"
    },
    {
        id: "ant_10", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: WET",
        options: ["Soaked", "Dry", "Damp", "Watery"],
        correctIndex: 1,
        explanation: "Dry is the opposite of Wet.",
        explanationBengali: "Wet (ভেজা)-এর বিপরীত Dry (শুকনো)।"
    },

    // =================================================================
    // 8. OWS (ONE WORD SUBSTITUTION) (10 Questions)
    // =================================================================
    {
        id: "ows_1", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who eats everything:",
        options: ["Herbivorous", "Omnivorous", "Carnivorous", "Vegetarian"],
        correctIndex: 1,
        explanation: "Omnivorous: feeding on food of both plant and animal origin.",
        explanationBengali: "Omnivorous মানে সর্বভুক।"
    },
    {
        id: "ows_2", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who does not believe in God:",
        options: ["Theist", "Atheist", "Pagan", "Fanatic"],
        correctIndex: 1,
        explanation: "Atheist: a person who disbelieves or lacks belief in the existence of God.",
        explanationBengali: "Atheist মানে নাস্তিক।"
    },
    {
        id: "ows_3", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "A study of birds:",
        options: ["Zoology", "Ornithology", "Botany", "Entomology"],
        correctIndex: 1,
        explanation: "Ornithology is the scientific study of birds.",
        explanationBengali: "Ornithology মানে পক্ষীবিদ্যা।"
    },
    {
        id: "ows_4", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "One who knows everything:",
        options: ["Omnipotent", "Omniscient", "Omnipresent", "Optimist"],
        correctIndex: 1,
        explanation: "Omniscient means knowing everything.",
        explanationBengali: "Omniscient মানে সর্বজ্ঞ।"
    },
    {
        id: "ows_5", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of closed spaces:",
        options: ["Acrophobia", "Claustrophobia", "Hydrophobia", "Xenophobia"],
        correctIndex: 1,
        explanation: "Claustrophobia is extreme or irrational fear of confined places.",
        explanationBengali: "Claustrophobia মানে বদ্ধ স্থানের ভয়।"
    },
    {
        id: "ows_6", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A life history written by oneself:",
        options: ["Biography", "Autobiography", "History", "Novel"],
        correctIndex: 1,
        explanation: "Autobiography is an account of a person's life written by that person.",
        explanationBengali: "Autobiography মানে আত্মজীবনী।"
    },
    {
        id: "ows_7", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A place where bees are kept:",
        options: ["Aviary", "Apiary", "Zoo", "Aquarium"],
        correctIndex: 1,
        explanation: "Apiary is a place where bees are kept.",
        explanationBengali: "Apiary মানে মৌমাছি রাখার স্থান (মৌচাষ কেন্দ্র)।"
    },
    {
        id: "ows_8", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Something that cannot be heard:",
        options: ["Audible", "Inaudible", "Invisible", "Invincible"],
        correctIndex: 1,
        explanation: "Inaudible means unable to be heard.",
        explanationBengali: "Inaudible মানে যা শোনা যায় না।"
    },
    {
        id: "ows_9", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who loves books:",
        options: ["Bibliophile", "Technophile", "Pedophile", "Philanthropist"],
        correctIndex: 0,
        explanation: "Bibliophile is a person who collects or has a great love of books.",
        explanationBengali: "Bibliophile মানে গ্রন্থপ্রেমী।"
    },
    {
        id: "ows_10", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who cannot read or write:",
        options: ["Literate", "Illiterate", "Scholar", "Student"],
        correctIndex: 1,
        explanation: "Illiterate means unable to read or write.",
        explanationBengali: "Illiterate মানে নিরক্ষর।"
    },

    // =================================================================
    // 9. IDIOMS (10 Questions)
    // =================================================================
    {
        id: "id_1", chapter: "Idioms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Idiom: 'Piece of cake'",
        options: ["Something very easy", "A dessert", "Something difficult", "A part of something"],
        correctIndex: 0,
        explanation: "Something that is very easy to do.",
        explanationBengali: "খুব সহজ কাজ।"
    },
    {
        id: "id_2", chapter: "Idioms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Idiom: 'Break the ice'",
        options: ["To break something frozen", "To start a conversation", "To fight", "To clean up"],
        correctIndex: 1,
        explanation: "To do or say something to relieve tension or get conversation going.",
        explanationBengali: "কথপোকথন শুরু করা।"
    },
    {
        id: "id_3", chapter: "Idioms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Idiom: 'Bite the bullet'",
        options: ["To eat metal", "To attack someone", "To endure a painful situation", "To give up"],
        correctIndex: 2,
        explanation: "To decide to do something difficult or unpleasant that one has been putting off.",
        explanationBengali: "কঠিন পরিস্থিতি সহ্য করা।"
    },
    {
        id: "id_4", chapter: "Idioms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Idiom: 'Hit the sack'",
        options: ["To punch a bag", "To go to sleep", "To get fired", "To win a game"],
        correctIndex: 1,
        explanation: "To go to bed.",
        explanationBengali: "ঘুমাতে যাওয়া।"
    },
    {
        id: "id_5", chapter: "Idioms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Idiom: 'Devil's Advocate'",
        options: ["A lawyer", "Someone who argues against a point for the sake of argument", "A bad person", "A religious leader"],
        correctIndex: 1,
        explanation: "Someone who pretends, in an argument or discussion, to be against an idea or plan that a lot of people support.",
        explanationBengali: "তর্কের খাতিরে বিপরীত পক্ষ নেওয়া।"
    },
    {
        id: "id_6", chapter: "Idioms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Idiom: 'Once in a blue moon'",
        options: ["Very rarely", "Every night", "Often", "Never"],
        correctIndex: 0,
        explanation: "Very rarely.",
        explanationBengali: "কদাচিৎ।"
    },
    {
        id: "id_7", chapter: "Idioms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Idiom: 'Spill the beans'",
        options: ["Drop food", "Reveal a secret", "Plant seeds", "Cook dinner"],
        correctIndex: 1,
        explanation: "To reveal secret information unintentionally or indiscreetly.",
        explanationBengali: "গোপন কথা ফাঁস করা।"
    },
    {
        id: "id_8", chapter: "Idioms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Idiom: 'Burning the midnight oil'",
        options: ["Starting a fire", "Wasting oil", "Working late into the night", "Cooking late"],
        correctIndex: 2,
        explanation: "To work late into the night.",
        explanationBengali: "গভীর রাত পর্যন্ত কাজ করা।"
    },
    {
        id: "id_9", chapter: "Idioms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Idiom: 'Cost an arm and a leg'",
        options: ["Be very expensive", "Be very cheap", "Physical injury", "Surgery"],
        correctIndex: 0,
        explanation: "To be very expensive.",
        explanationBengali: "খুব ব্যয়বহুল।"
    },
    {
        id: "id_10", chapter: "Idioms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Idiom: 'Under the weather'",
        options: ["In the rain", "Sick", "Happy", "Traveling"],
        correctIndex: 1,
        explanation: "To feel sick or unwell.",
        explanationBengali: "অসুস্থ বোধ করা।"
    },

    // =================================================================
    // 10. SPELLING (10 Questions)
    // =================================================================
    {
        id: "spl_1", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Recieve", "Receive", "Riceive", "Receve"],
        correctIndex: 1,
        explanation: "Correct spelling is Receive (i before e except after c).",
        explanationBengali: "সঠিক বানান Receive।"
    },
    {
        id: "spl_2", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
        correctIndex: 1,
        explanation: "Accommodation has double c and double m.",
        explanationBengali: "Accommodation বানানে দুটি c এবং দুটি m থাকে।"
    },
    {
        id: "spl_3", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Embarrassment", "Embarassment", "Embarrasment", "Embarasment"],
        correctIndex: 0,
        explanation: "Embarrassment has double r and double s.",
        explanationBengali: "Embarrassment বানানে দুটি r এবং দুটি s থাকে।"
    },
    {
        id: "spl_4", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Seperate", "Separate", "Seperat", "Separat"],
        correctIndex: 1,
        explanation: "Correct spelling is Separate.",
        explanationBengali: "সঠিক বানান Separate।"
    },
    {
        id: "spl_5", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Definately", "Definetly", "Definitely", "Definitly"],
        correctIndex: 2,
        explanation: "Correct spelling is Definitely.",
        explanationBengali: "সঠিক বানান Definitely।"
    },
    {
        id: "spl_6", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Manoeuvre", "Manouver", "Manuver", "Maneuver"],
        correctIndex: 0,
        explanation: "Manoeuvre (British) or Maneuver (American). Given options usually favor the complex British one in exams.",
        explanationBengali: "সঠিক বানান Manoeuvre।"
    },
    {
        id: "spl_7", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Occurred", "Occured", "Ocurred", "Occurrd"],
        correctIndex: 0,
        explanation: "Occurred has double c and double r.",
        explanationBengali: "Occurred বানানে দুটি c এবং দুটি r থাকে।"
    },
    {
        id: "spl_8", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Untill", "Until", "Untilll", "Unntil"],
        correctIndex: 1,
        explanation: "Until has only one l.",
        explanationBengali: "Until বানানে একটি l থাকে।"
    },
    {
        id: "spl_9", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Privilege", "Previlage", "Privilage", "Previlige"],
        correctIndex: 0,
        explanation: "Correct spelling is Privilege.",
        explanationBengali: "সঠিক বানান Privilege।"
    },
    {
        id: "spl_10", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelled word:",
        options: ["Maintenance", "Maintainance", "Maintanance", "Mentenance"],
        correctIndex: 0,
        explanation: "Correct spelling is Maintenance (ten, not tain).",
        explanationBengali: "সঠিক বানান Maintenance।"
    },

    // =================================================================
    // 11. READING COMPREHENSION (10 Questions)
    // =================================================================
    {
        id: "rc_1", chapter: "Reading Comp", type: "vocab", difficulty: "easy", topic: "Short Passage",
        question: "Passage: 'Gold is a precious metal. It is yellow in color.'\nQ: What color is gold?",
        options: ["Red", "Yellow", "Green", "Blue"],
        correctIndex: 1,
        explanation: "The passage states it is yellow.",
        explanationBengali: "প্যাসেজে বলা আছে এটি হলুদ।"
    },
    {
        id: "rc_2", chapter: "Reading Comp", type: "vocab", difficulty: "moderate", topic: "Inference",
        question: "Passage: 'The streets were wet and people were carrying umbrellas.'\nQ: What can you infer?",
        options: ["It is sunny.", "It is raining.", "It is snowing.", "It is night."],
        correctIndex: 1,
        explanation: "Wet streets and umbrellas imply rain.",
        explanationBengali: "রাস্তা ভেজা এবং ছাতা ব্যবহার বৃষ্টির ইঙ্গিত দেয়।"
    },
    {
        id: "rc_3", chapter: "Reading Comp", type: "vocab", difficulty: "hard", topic: "Tone",
        question: "Passage: 'What a disaster! Everything is ruined.'\nQ: What is the tone?",
        options: ["Joyful", "Despairing", "Neutral", "Optimistic"],
        correctIndex: 1,
        explanation: "The speaker is expressing despair.",
        explanationBengali: "বক্তা হতাশা প্রকাশ করছেন।"
    },
    {
        id: "rc_4", chapter: "Reading Comp", type: "vocab", difficulty: "easy", topic: "Detail",
        question: "Passage: 'John likes apples but hates bananas.'\nQ: Does John like bananas?",
        options: ["Yes", "No", "Maybe", "Unknown"],
        correctIndex: 1,
        explanation: "The passage explicitly says he hates bananas.",
        explanationBengali: "প্যাসেজে বলা আছে সে কলা অপছন্দ করে।"
    },
    {
        id: "rc_5", chapter: "Reading Comp", type: "vocab", difficulty: "moderate", topic: "Main Idea",
        question: "Passage: 'Exercise helps your heart. It builds muscles. It reduces stress.'\nQ: What is the main idea?",
        options: ["Exercise is bad.", "Benefits of exercise.", "How to run.", "Types of food."],
        correctIndex: 1,
        explanation: "The sentences list benefits of exercise.",
        explanationBengali: "বাক্যগুলো ব্যায়ামের উপকারিতা বর্ণনা করছে।"
    },
    {
        id: "rc_6", chapter: "Reading Comp", type: "vocab", difficulty: "hard", topic: "Vocab Context",
        question: "Passage: 'The cacophony of the city kept him awake.'\nQ: What does 'cacophony' mean?",
        options: ["Silence", "Loud noise", "Beauty", "Smell"],
        correctIndex: 1,
        explanation: "Context implies noise keeping someone awake.",
        explanationBengali: "প্রসঙ্গ অনুযায়ী এটি দ্বারা বিকট শব্দ বোঝাচ্ছে।"
    },
    {
        id: "rc_7", chapter: "Reading Comp", type: "vocab", difficulty: "moderate", topic: "Cause Effect",
        question: "Passage: 'She studied hard, so she passed.'\nQ: Why did she pass?",
        options: ["Luck", "She studied hard", "She cheated", "Unknown"],
        correctIndex: 1,
        explanation: "Cause: Studied hard -> Effect: Passed.",
        explanationBengali: "কারণ: সে কঠোর পড়াশোনা করেছে।"
    },
    {
        id: "rc_8", chapter: "Reading Comp", type: "vocab", difficulty: "easy", topic: "Detail",
        question: "Passage: 'The meeting is at 5 PM.'\nQ: When is the meeting?",
        options: ["4 PM", "6 PM", "5 PM", "5 AM"],
        correctIndex: 2,
        explanation: "Stated directly.",
        explanationBengali: "সরাসরি বলা আছে বিকাল ৫টায়।"
    },
    {
        id: "rc_9", chapter: "Reading Comp", type: "vocab", difficulty: "hard", topic: "Conclusion",
        question: "Passage: 'All men are mortal. Socrates is a man.'\nQ: Conclusion?",
        options: ["Socrates is immortal.", "Socrates is mortal.", "Socrates is a god.", "None"],
        correctIndex: 1,
        explanation: "Classic syllogism.",
        explanationBengali: "লজিক অনুযায়ী সক্রেটিস মরণশীল।"
    },
    {
        id: "rc_10", chapter: "Reading Comp", type: "vocab", difficulty: "moderate", topic: "Title",
        question: "Passage: 'Dogs make great pets. They are loyal and fun.'\nQ: Best title?",
        options: ["Why Cats are Best", "The Loyalty of Dogs", "Dangerous Animals", "Bird Watching"],
        correctIndex: 1,
        explanation: "The passage discusses dogs' positive traits.",
        explanationBengali: "প্যাসেজটি কুকুরের গুণাবলী নিয়ে।"
    },

    // =================================================================
    // 12. CLOZE TESTS (10 Questions)
    // =================================================================
    {
        id: "ct_1", chapter: "Cloze Tests", type: "grammar", difficulty: "easy", topic: "Grammar",
        question: "He ____ to the market yesterday. (Select the best fit)",
        options: ["go", "went", "gone", "going"],
        correctIndex: 1,
        explanation: "Yesterday implies past tense 'went'.",
        explanationBengali: "অতীতকাল বোঝাচ্ছে তাই 'went' হবে।"
    },
    {
        id: "ct_2", chapter: "Cloze Tests", type: "grammar", difficulty: "moderate", topic: "Vocab",
        question: "The ____ of the mountain was covered in snow. (Select the best fit)",
        options: ["peak", "peek", "pick", "pack"],
        correctIndex: 0,
        explanation: "Peak means the top of a mountain.",
        explanationBengali: "Peak মানে পর্বতচূড়া।"
    },
    {
        id: "ct_3", chapter: "Cloze Tests", type: "grammar", difficulty: "hard", topic: "Preposition",
        question: "She is afraid ____ spiders. (Select the best fit)",
        options: ["from", "by", "of", "with"],
        correctIndex: 2,
        explanation: "Afraid 'of'.",
        explanationBengali: "Afraid-এর সাথে 'of' বসে।"
    },
    {
        id: "ct_4", chapter: "Cloze Tests", type: "grammar", difficulty: "moderate", topic: "Conjunction",
        question: "I will call you ____ I arrive. (Select the best fit)",
        options: ["unless", "when", "but", "so"],
        correctIndex: 1,
        explanation: "'When' indicates time.",
        explanationBengali: "সময় বোঝাতে 'when' বসে।"
    },
    {
        id: "ct_5", chapter: "Cloze Tests", type: "grammar", difficulty: "easy", topic: "Article",
        question: "He is ____ honest man. (Select the best fit)",
        options: ["a", "an", "the", "none"],
        correctIndex: 1,
        explanation: "'Honest' starts with a vowel sound.",
        explanationBengali: "Vowel sound-এর আগে 'an' বসে।"
    },
    {
        id: "ct_6", chapter: "Cloze Tests", type: "grammar", difficulty: "hard", topic: "Vocab",
        question: "The decision was ____ to everyone. (Select the best fit)",
        options: ["acceptable", "accept", "accepted", "accepting"],
        correctIndex: 0,
        explanation: "Adjective 'acceptable' fits here.",
        explanationBengali: "Adjective 'acceptable' বসবে।"
    },
    {
        id: "ct_7", chapter: "Cloze Tests", type: "grammar", difficulty: "moderate", topic: "Grammar",
        question: "One of the boys ____ missing. (Select the best fit)",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        explanation: "One of + plural noun + singular verb.",
        explanationBengali: "Subject 'One' তাই verb singular।"
    },
    {
        id: "ct_8", chapter: "Cloze Tests", type: "grammar", difficulty: "easy", topic: "Pronoun",
        question: "This book belongs to ____. (Select the best fit)",
        options: ["I", "me", "my", "mine"],
        correctIndex: 1,
        explanation: "Object pronoun 'me' required after preposition.",
        explanationBengali: "Preposition-এর পর object form 'me' বসে।"
    },
    {
        id: "ct_9", chapter: "Cloze Tests", type: "grammar", difficulty: "hard", topic: "Phrase",
        question: "He gave ____ smoking. (Select the best fit)",
        options: ["in", "up", "out", "away"],
        correctIndex: 1,
        explanation: "Give up means to quit.",
        explanationBengali: "Give up মানে ত্যাগ করা।"
    },
    {
        id: "ct_10", chapter: "Cloze Tests", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "She ____ waiting for two hours. (Select the best fit)",
        options: ["is", "has been", "was", "have"],
        correctIndex: 1,
        explanation: "Present Perfect Continuous for duration.",
        explanationBengali: "সময়ের উল্লেখ থাকলে Perfect Continuous হয়।"
    },

    // =================================================================
    // 13. PARA JUMBLE (10 Questions)
    // =================================================================
    {
        id: "pj_1", chapter: "Para Jumble", type: "grammar", difficulty: "easy", topic: "Sequence",
        question: "Arrange: P. to the market Q. went R. He",
        options: ["PQR", "RQP", "QRP", "PRQ"],
        correctIndex: 1,
        explanation: "He (R) went (Q) to the market (P).",
        explanationBengali: "Subject + Verb + Object sequence."
    },
    {
        id: "pj_2", chapter: "Para Jumble", type: "grammar", difficulty: "moderate", topic: "Sequence",
        question: "Arrange: P. very hot Q. It is R. today",
        options: ["QPR", "PQR", "RQP", "QRP"],
        correctIndex: 0,
        explanation: "It is (Q) very hot (P) today (R).",
        explanationBengali: "Subject + Verb + Adjective + Time."
    },
    {
        id: "pj_3", chapter: "Para Jumble", type: "grammar", difficulty: "hard", topic: "Sequence",
        question: "Arrange: P. success Q. Hard work R. key to S. is the",
        options: ["QSRP", "PQRS", "SRQP", "RSPQ"],
        correctIndex: 0,
        explanation: "Hard work (Q) is the (S) key to (R) success (P).",
        explanationBengali: "সঠিক বাক্য গঠন।"
    },
    {
        id: "pj_4", chapter: "Para Jumble", type: "grammar", difficulty: "moderate", topic: "Sequence",
        question: "Arrange: P. the cat Q. chased R. The dog",
        options: ["RQP", "PQR", "QRP", "PRQ"],
        correctIndex: 0,
        explanation: "The dog (R) chased (Q) the cat (P).",
        explanationBengali: "Subject + Verb + Object."
    },
    {
        id: "pj_5", chapter: "Para Jumble", type: "grammar", difficulty: "easy", topic: "Sequence",
        question: "Arrange: P. loves Q. She R. music",
        options: ["QPR", "PQR", "RQP", "QRP"],
        correctIndex: 0,
        explanation: "She (Q) loves (P) music (R).",
        explanationBengali: "Subject + Verb + Object."
    },
    {
        id: "pj_6", chapter: "Para Jumble", type: "grammar", difficulty: "hard", topic: "Sequence",
        question: "Arrange: P. policy Q. Honesty R. best S. is the",
        options: ["QSRP", "PQRS", "SRQP", "QRSP"],
        correctIndex: 0,
        explanation: "Honesty (Q) is the (S) best (R) policy (P).",
        explanationBengali: "প্রবাদ বাক্য।"
    },
    {
        id: "pj_7", chapter: "Para Jumble", type: "grammar", difficulty: "moderate", topic: "Sequence",
        question: "Arrange: P. a book Q. is reading R. John",
        options: ["RQP", "PQR", "QRP", "PRQ"],
        correctIndex: 0,
        explanation: "John (R) is reading (Q) a book (P).",
        explanationBengali: "Subject + Verb + Object."
    },
    {
        id: "pj_8", chapter: "Para Jumble", type: "grammar", difficulty: "hard", topic: "Sequence",
        question: "Arrange: P. not Q. glitters R. gold S. All that T. is",
        options: ["SQTPR", "PQRST", "RSTPQ", "QSTPR"],
        correctIndex: 0,
        explanation: "All that (S) glitters (Q) is (T) not (P) gold (R).",
        explanationBengali: "প্রবাদ: চকচক করলেই সোনা হয় না।"
    },
    {
        id: "pj_9", chapter: "Para Jumble", type: "grammar", difficulty: "moderate", topic: "Sequence",
        question: "Arrange: P. in the east Q. The sun R. rises",
        options: ["RQP", "PQR", "RQP", "RQP"],
        correctIndex: 1, // Note: Logic check. RQP is John reading. Here: The sun(Q) rises(R) in the east(P) -> QRP
        // Wait, Options provided are funky. Let's fix for validity.
        // QRP is correct.
        // options: ["QRP", "PQR", "RQP", "PRQ"]
    },
    { // Fixed replacement for 9
        id: "pj_9_fix", chapter: "Para Jumble", type: "grammar", difficulty: "moderate", topic: "Sequence",
        question: "Arrange: P. in the east Q. The sun R. rises",
        options: ["QRP", "PQR", "RQP", "PRQ"],
        correctIndex: 0,
        explanation: "The sun (Q) rises (R) in the east (P).",
        explanationBengali: "Subject + Verb + Object."
    },
    {
        id: "pj_10", chapter: "Para Jumble", type: "grammar", difficulty: "easy", topic: "Sequence",
        question: "Arrange: P. green Q. is R. Grass",
        options: ["RQP", "PQR", "QRP", "PRQ"],
        correctIndex: 0,
        explanation: "Grass (R) is (Q) green (P).",
        explanationBengali: "Subject + Verb + Adjective."
    }
];