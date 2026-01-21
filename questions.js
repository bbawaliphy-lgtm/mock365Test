export const questionLibrary = [


    {
        id: "se_1", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "The list of items (A) / are on the desk (B) / near the window. (C) / No Error (D)",
        options: ["The list of items", "are on the desk", "near the window.", "No Error"],
        correctIndex: 1,
        explanation: "The subject is 'list' (singular), not 'items'. Therefore, the verb should be 'is', not 'are'.",
        explanationBengali: "এখানে Subject হলো 'list' (singular), 'items' নয়। তাই verb 'are'-এর পরিবর্তে 'is' হবে।"
    },
    {
        id: "se_2", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "One of the boys (A) / have gone (B) / to the market. (C) / No Error (D)",
        options: ["One of the boys", "have gone", "to the market.", "No Error"],
        correctIndex: 1,
        explanation: "'One of' is followed by a plural noun but takes a SINGULAR verb. Correct: 'has gone'.",
        explanationBengali: "'One of'-এর পরে noun plural হলেও verb সবসময় singular হয়। তাই 'have'-এর বদলে 'has' হবে।"
    },
    {
        id: "se_3", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Neither the teacher (A) / nor the students (B) / is present. (C) / No Error (D)",
        options: ["Neither the teacher", "nor the students", "is present.", "No Error"],
        correctIndex: 2,
        explanation: "In 'Neither...nor', the verb agrees with the NEAREST subject ('students' -> plural). Correct: 'are present'.",
        explanationBengali: "'Neither...nor' যুক্ত বাক্যে verb তার নিকটতম subject অনুযায়ী হয়। এখানে 'students' plural, তাই 'are' হবে।"
    },
    {
        id: "se_4", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Bread and butter (A) / remain (B) / his favorite breakfast. (C) / No Error (D)",
        options: ["Bread and butter", "remain", "his favorite breakfast.", "No Error"],
        correctIndex: 1,
        explanation: "When two nouns refer to a single idea/dish, the verb is singular. Correct: 'remains'.",
        explanationBengali: "যখন দুটি noun একই ধারণা বা খাবার বোঝায়, তখন verb singular হয়। সঠিক: 'remains'।"
    },
    {
        id: "se_5", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "Many a student (A) / have passed (B) / the examination. (C) / No Error (D)",
        options: ["Many a student", "have passed", "the examination.", "No Error"],
        correctIndex: 1,
        explanation: "'Many a' is followed by a singular noun and a SINGULAR verb. Correct: 'has passed'.",
        explanationBengali: "'Many a'-এর পরে noun এবং verb উভয়ই singular হয়। সঠিক: 'has passed'।"
    },

    // --- SET 2: Nouns & Pronouns (Easy/Moderate) ---
    {
        id: "se_6", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Nouns",
        question: "Cattles (A) / are grazing (B) / in the field. (C) / No Error (D)",
        options: ["Cattles", "are grazing", "in the field.", "No Error"],
        correctIndex: 0,
        explanation: "'Cattle' is a collective noun that is already plural. There is no word like 'Cattles'.",
        explanationBengali: "'Cattle' শব্দটি নিজেই plural। 'Cattles' বলে কোনো শব্দ নেই।"
    },
    {
        id: "se_7", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The sceneries (A) / of Kashmir (B) / are enchanting. (C) / No Error (D)",
        options: ["The sceneries", "of Kashmir", "are enchanting.", "No Error"],
        correctIndex: 0,
        explanation: "'Scenery' is an uncountable noun and has no plural form. Correct: 'The scenery'.",
        explanationBengali: "'Scenery' একটি uncountable noun, এর plural হয় না। সঠিক: 'The scenery'।"
    },
    {
        id: "se_8", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Me and him (A) / went to (B) / the market. (C) / No Error (D)",
        options: ["Me and him", "went to", "the market.", "No Error"],
        correctIndex: 0,
        explanation: "Subject pronouns (I, He) must be used as the subject. Correct: 'He and I'.",
        explanationBengali: "Subject হিসেবে সর্বদা subjective pronoun (I, He, She) বসে। সঠিক: 'He and I'।"
    },
    {
        id: "se_9", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "Let you (A) / and I (B) / solve this problem. (C) / No Error (D)",
        options: ["Let you", "and I", "solve this problem.", "No Error"],
        correctIndex: 1,
        explanation: "'Let' is followed by objective pronouns (me, him, her). Correct: 'Let you and me'.",
        explanationBengali: "'Let'-এর পরে pronoun-এর objective form (me, us) বসে। সঠিক: 'you and me'।"
    },
    {
        id: "se_10", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Pronouns",
        question: "It was him (A) / who did (B) / the work. (C) / No Error (D)",
        options: ["It was him", "who did", "the work.", "No Error"],
        correctIndex: 0,
        explanation: "After 'It is/was', we use the subjective case. Correct: 'It was he'.",
        explanationBengali: "'It is' বা 'It was'-এর পরে pronoun-এর subjective form বসে। সঠিক: 'It was he'।"
    },

    // --- SET 3: Adjectives & Adverbs (Moderate/Hard) ---
    {
        id: "se_11", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Adjectives",
        question: "She is (A) / more taller (B) / than her sister. (C) / No Error (D)",
        options: ["She is", "more taller", "than her sister.", "No Error"],
        correctIndex: 1,
        explanation: "Double comparatives ('more taller') are incorrect. Use 'taller' alone.",
        explanationBengali: "Double comparative (more taller) ভুল। শুধু 'taller' হবে।"
    },
    {
        id: "se_12", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is (A) / senior than (B) / me by two years. (C) / No Error (D)",
        options: ["He is", "senior than", "me by two years.", "No Error"],
        correctIndex: 1,
        explanation: "Latin adjectives like 'senior', 'junior', 'superior' take 'to', not 'than'.",
        explanationBengali: "'Senior', 'junior', 'superior'-এর পরে 'than' না বসে 'to' বসে।"
    },
    {
        id: "se_13", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He works (A) / hardly (B) / to succeed in life. (C) / No Error (D)",
        options: ["He works", "hardly", "to succeed in life.", "No Error"],
        correctIndex: 1,
        explanation: "'Hardly' means 'scarcely/barely'. 'Hard' means 'with effort'. Correct: 'works hard'.",
        explanationBengali: "'Hardly' মানে কদাচিৎ। কঠোর পরিশ্রম বোঝাতে 'hard' ব্যবহার করতে হবে।"
    },
    {
        id: "se_14", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Adverbs",
        question: "He is (A) / enough kind (B) / to help me. (C) / No Error (D)",
        options: ["He is", "enough kind", "to help me.", "No Error"],
        correctIndex: 1,
        explanation: "'Enough' is placed AFTER the adjective it modifies. Correct: 'kind enough'.",
        explanationBengali: "'Enough' শব্দটি adjective-এর পরে বসে। সঠিক: 'kind enough'।"
    },
    {
        id: "se_15", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "Of the two sisters, (A) / she is (B) / the best. (C) / No Error (D)",
        options: ["Of the two sisters,", "she is", "the best.", "No Error"],
        correctIndex: 2,
        explanation: "When comparing TWO people, use the comparative degree ('better'), not superlative ('best').",
        explanationBengali: "দু'জনের মধ্যে তুলনা হলে comparative degree (better) হয়।"
    },

    // --- SET 4: Prepositions (Tricky) ---
    {
        id: "se_16", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is (A) / married with (B) / a doctor. (C) / No Error (D)",
        options: ["He is", "married with", "a doctor.", "No Error"],
        correctIndex: 1,
        explanation: "The correct preposition with 'married' is 'to'. Correct: 'married to'.",
        explanationBengali: "'Married'-এর সাথে preposition 'to' বসে, 'with' নয়।"
    },
    {
        id: "se_17", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is (A) / angry on (B) / me. (C) / No Error (D)",
        options: ["He is", "angry on", "me.", "No Error"],
        correctIndex: 1,
        explanation: "You are angry 'with' a person. Correct: 'angry with me'.",
        explanationBengali: "কারোর ওপর রাগ করলে 'angry with' হয়, 'on' নয়।"
    },
    {
        id: "se_18", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "The cat (A) / jumped (B) / on the table. (C) / No Error (D)",
        options: ["The cat", "jumped", "on the table.", "No Error"],
        correctIndex: 2,
        explanation: "For movement onto a surface, use 'upon'. 'On' suggests rest. Correct: 'upon the table'.",
        explanationBengali: "গতি নিয়ে কোনো কিছুর ওপরে ঝাঁপ দিলে 'upon' ব্যবহৃত হয়।"
    },
    {
        id: "se_19", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Prepositions",
        question: "Despite of (A) / working hard, (B) / he failed. (C) / No Error (D)",
        options: ["Despite of", "working hard,", "he failed.", "No Error"],
        correctIndex: 0,
        explanation: "'Despite' never takes 'of'. 'In spite of' takes 'of'. Correct: 'Despite working'.",
        explanationBengali: "'Despite'-এর পরে 'of' বসে না। কিন্তু 'In spite'-এর পরে 'of' বসে।"
    },
    {
        id: "se_20", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Prepositions",
        question: "He entered (A) / into the (B) / room. (C) / No Error (D)",
        options: ["He entered", "into the", "room.", "No Error"],
        correctIndex: 1,
        explanation: "'Enter' (meaning to go in) does not take 'into'. Correct: 'entered the room'.",
        explanationBengali: "'Enter'-এর পর 'into' বসে না (যখন প্রবেশ করা বোঝায়)।"
    },

    // --- SET 5: Tense (Common Errors) ---
    {
        id: "se_21", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I have (A) / seen him (B) / yesterday. (C) / No Error (D)",
        options: ["I have", "seen him", "yesterday.", "No Error"],
        correctIndex: 0,
        explanation: "Specific past time ('yesterday') requires Simple Past ('saw'), not Present Perfect.",
        explanationBengali: "অতীতের নির্দিষ্ট সময় (yesterday) থাকলে Simple Past Tense হয়। 'I saw him' সঠিক।"
    },
    {
        id: "se_22", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I am (A) / knowing (B) / him well. (C) / No Error (D)",
        options: ["I am", "knowing", "him well.", "No Error"],
        correctIndex: 1,
        explanation: "'Know' is a stative verb and is not used in continuous form. Correct: 'I know him'.",
        explanationBengali: "'Know' একটি Stative verb, এর continuous form হয় না। সঠিক: 'I know him'।"
    },
    {
        id: "se_23", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "It is time (A) / we go (B) / home. (C) / No Error (D)",
        options: ["It is time", "we go", "home.", "No Error"],
        correctIndex: 1,
        explanation: "'It is time' + subject is followed by the Past Simple tense. Correct: 'we went'.",
        explanationBengali: "'It is time'-এর পর subject থাকলে verb-এর Past form বসে।"
    },
    {
        id: "se_24", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "By the time (A) / he reaches home, (B) / the guests will leave. (C) / No Error (D)",
        options: ["By the time", "he reaches home,", "the guests will leave.", "No Error"],
        correctIndex: 2,
        explanation: "Action completed before a future time requires Future Perfect Tense. Correct: 'will have left'.",
        explanationBengali: "ভবিষ্যতের কোনো সময়ের মধ্যে কাজ শেষ বোঝালে Future Perfect Tense (will have left) হয়।"
    },
    {
        id: "se_25", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Conditionals",
        question: "If I would have (A) / known the truth, (B) / I would have told you. (C) / No Error (D)",
        options: ["If I would have", "known the truth,", "I would have told you.", "No Error"],
        correctIndex: 0,
        explanation: "In 3rd Conditional, the 'If' clause uses Past Perfect ('had known'). 'Would have' is never in the If-clause.",
        explanationBengali: "Third Conditional-এর 'If' অংশে Past Perfect Tense (had known) হয়, 'would have' নয়।"
    },

    // --- SET 6: Articles & Conjunctions ---
    {
        id: "se_26", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is (A) / a best student (B) / in the class. (C) / No Error (D)",
        options: ["He is", "a best student", "in the class.", "No Error"],
        correctIndex: 1,
        explanation: "Superlative adjectives take 'the'. Correct: 'the best student'.",
        explanationBengali: "Superlative degree-এর আগে always 'the' বসে।"
    },
    {
        id: "se_27", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "I saw (A) / an one-eyed (B) / man. (C) / No Error (D)",
        options: ["I saw", "an one-eyed", "man.", "No Error"],
        correctIndex: 1,
        explanation: "'One' starts with a consonant sound ('wa'), so use 'a'. Correct: 'a one-eyed'.",
        explanationBengali: "'One'-এর উচ্চারণ 'ওয়া' (consonant sound) দিয়ে শুরু, তাই 'a' বসবে।"
    },
    {
        id: "se_28", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "No sooner did (A) / I reach the station (B) / when the train left. (C) / No Error (D)",
        options: ["No sooner did", "I reach the station", "when the train left.", "No Error"],
        correctIndex: 2,
        explanation: "'No sooner' is always followed by 'than'. Correct: 'than the train left'.",
        explanationBengali: "'No sooner'-এর সাথে 'than' বসে, 'when' নয়।"
    },
    {
        id: "se_29", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Although he worked hard, (A) / but he (B) / failed. (C) / No Error (D)",
        options: ["Although he worked hard,", "but he", "failed.", "No Error"],
        correctIndex: 1,
        explanation: "'Although' is followed by a comma or 'yet', never 'but'.",
        explanationBengali: "'Although'-এর সাথে 'but' বসে না, শুধু কমা (,) অথবা 'yet' বসে।"
    },
    {
        id: "se_30", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Conjunctions",
        question: "Unless you do not (A) / work hard, (B) / you will fail. (C) / No Error (D)",
        options: ["Unless you do not", "work hard,", "you will fail.", "No Error"],
        correctIndex: 0,
        explanation: "'Unless' is already negative. Do not use 'not' with it. Correct: 'Unless you work'.",
        explanationBengali: "'Unless' নিজেই নেতিবাচক শব্দ, তাই এর সাথে 'not' বসে না।"
    },

    // --- SET 7: Superfluous & Inversion ---
    {
        id: "se_31", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Superfluous",
        question: "He returned (A) / back from (B) / Delhi yesterday. (C) / No Error (D)",
        options: ["He returned", "back from", "Delhi yesterday.", "No Error"],
        correctIndex: 1,
        explanation: "'Return' means to come back. 'Back' is superfluous. Remove 'back'.",
        explanationBengali: "'Return' মানেই ফিরে আসা। তাই 'back' শব্দটি অপ্রয়োজনীয় (Superfluous)।"
    },
    {
        id: "se_32", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Inversion",
        question: "Hardly I had (A) / reached the station (B) / when it began to rain. (C) / No Error (D)",
        options: ["Hardly I had", "reached the station", "when it began to rain.", "No Error"],
        correctIndex: 0,
        explanation: "Sentences starting with 'Hardly' require inversion (Verb before Subject). Correct: 'Hardly had I'.",
        explanationBengali: "'Hardly' দিয়ে বাক্য শুরু হলে Inversion হয়। সঠিক: 'Hardly had I'।"
    },
    {
        id: "se_33", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Never I have (A) / seen such (B) / a beautiful sight. (C) / No Error (D)",
        options: ["Never I have", "seen such", "a beautiful sight.", "No Error"],
        correctIndex: 0,
        explanation: "Starting with 'Never' requires inversion. Correct: 'Never have I'.",
        explanationBengali: "'Never' দিয়ে বাক্য শুরু হলে Inversion হয়। সঠিক: 'Never have I'।"
    },
    
    // --- SET 8: Question Tags ---
    {
        id: "se_34", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "He is coming, (A) / isn't it? (B) / (C) / No Error (D)",
        options: ["He is coming,", "isn't it?", "No Error"],
        correctIndex: 1,
        explanation: "The tag must match the subject ('He'). Correct: 'isn't he?'.",
        explanationBengali: "Subject 'He', তাই tag হবে 'isn't he?', 'isn't it' নয়।"
    },
    {
        id: "se_35", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Question Tags",
        question: "Everyone has come, (A) / hasn't he? (B) / (C) / No Error (D)",
        options: ["Everyone has come,", "hasn't he?", "No Error"],
        correctIndex: 1,
        explanation: "For 'Everyone', the tag pronoun is 'they', so the verb becomes plural. Correct: 'haven't they?'.",
        explanationBengali: "'Everyone' থাকলে tag-এ pronoun 'they' হয় এবং verb plural হয়। সঠিক: 'haven't they?'।"
    },

    // --- SET 9: Parallelism & Participles ---
    {
        id: "se_36", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Parallelism",
        question: "He likes (A) / swimming, reading (B) / and to run. (C) / No Error (D)",
        options: ["He likes", "swimming, reading", "and to run.", "No Error"],
        correctIndex: 2,
        explanation: "Items in a list must follow the same form. Use 'running' to match 'swimming' and 'reading'.",
        explanationBengali: "তালিকার সব শব্দের রূপ একই হতে হবে। বাকিগুলো Gerund (ing), তাই শেষেরটিও 'running' হবে।"
    },
    {
        id: "se_37", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Participles",
        question: "Being a rainy day, (A) / I decided (B) / to stay at home. (C) / No Error (D)",
        options: ["Being a rainy day,", "I decided", "to stay at home.", "No Error"],
        correctIndex: 0,
        explanation: "Dangling Participle. The subject 'I' is not the 'rainy day'. Add 'It'. Correct: 'It being a rainy day'.",
        explanationBengali: "Dangling Participle-এর ভুল। 'Being'-এর আগে Subject 'It' বসাতে হবে।"
    },

    // --- SET 10: Specific Words & Confusion ---
    {
        id: "se_38", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Confusing Words",
        question: "I laid (A) / under the tree (B) / for an hour. (C) / No Error (D)",
        options: ["I laid", "under the tree", "for an hour.", "No Error"],
        correctIndex: 0,
        explanation: "'Laid' is past of 'Lay' (put down). Past of 'Lie' (recline) is 'Lay'. Correct: 'I lay under'.",
        explanationBengali: "শুয়ে থাকা বোঝালে 'Lie'-এর Past tense 'Lay' হয়। 'Laid' মানে কিছু রাখা।"
    },
    {
        id: "se_39", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Nouns",
        question: "My hairs (A) / are (B) / black. (C) / No Error (D)",
        options: ["My hairs", "are", "black.", "No Error"],
        correctIndex: 0,
        explanation: "'Hair' (on the head) is uncountable. Correct: 'My hair is black'.",
        explanationBengali: "মাথার চুল বোঝাতে 'Hair' singular uncountable noun হিসেবে ব্যবহৃত হয়।"
    },
    {
        id: "se_40", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Possessive",
        question: "The table's leg (A) / has been (B) / broken. (C) / No Error (D)",
        options: ["The table's leg", "has been", "broken.", "No Error"],
        correctIndex: 0,
        explanation: "Apostrophe 's' is not used with non-living things. Correct: 'The leg of the table'.",
        explanationBengali: "অপ্রাণীবাচক শব্দের সাথে 's (apostrophe s) হয় না। সঠিক: 'The leg of the table'।"
    },
    { id: "se_41", chapter: "Spotting Error", difficulty: "easy", topic: "Subject-Verb", question: "The police (A) / has arrested (B) / the thief. (C) / No Error (D)", options: ["The police", "has arrested", "the thief.", "No Error"], correctIndex: 1, explanation: "'Police' is plural. Use 'have'.", explanationBengali: "'Police' শব্দটি Plural, তাই 'have' হবে।" },
    { id: "se_42", chapter: "Spotting Error", difficulty: "moderate", topic: "Adverbs", question: "He only died (A) / a week (B) / ago. (C) / No Error (D)", options: ["He only died", "a week", "ago.", "No Error"], correctIndex: 0, explanation: "Misplaced modifier. Correct: 'He died only a week ago'.", explanationBengali: "'Only' যাকে modify করে তার ঠিক আগে বসাতে হয়।" },
    { id: "se_43", chapter: "Spotting Error", difficulty: "easy", topic: "Preposition", question: "Divide this apple (A) / among (B) / two brothers. (C) / No Error (D)", options: ["Divide this apple", "among", "two brothers.", "No Error"], correctIndex: 1, explanation: "Use 'between' for two. 'Among' for more than two.", explanationBengali: "দু'জনের মধ্যে হলে 'between' হয়।" },
    { id: "se_44", chapter: "Spotting Error", difficulty: "hard", topic: "Noun", question: "He gave me (A) / two informations (B) / yesterday. (C) / No Error (D)", options: ["He gave me", "two informations", "yesterday.", "No Error"], correctIndex: 1, explanation: "'Information' is uncountable. Use 'pieces of information'.", explanationBengali: "'Information' uncountable, এর plural হয় না।" },
    { id: "se_45", chapter: "Spotting Error", difficulty: "moderate", topic: "Conjunction", question: "The reason why (A) / he failed is (B) / because he was lazy. (C) / No Error (D)", options: ["The reason why", "he failed is", "because he was lazy.", "No Error"], correctIndex: 2, explanation: "'The reason why' is followed by 'that', not 'because'.", explanationBengali: "'The reason why' থাকলে পরে 'that' বসে।" },
    { id: "se_46", chapter: "Spotting Error", difficulty: "easy", topic: "Pronoun", question: "One should (A) / keep (B) / his promises. (C) / No Error (D)", options: ["One should", "keep", "his promises.", "No Error"], correctIndex: 2, explanation: "Possessive of 'One' is 'One's'.", explanationBengali: "'One'-এর possessive form 'One's' হয়।" },
    { id: "se_47", chapter: "Spotting Error", difficulty: "hard", topic: "Verb", question: "I am looking (A) / forward to (B) / meet you. (C) / No Error (D)", options: ["I am looking", "forward to", "meet you.", "No Error"], correctIndex: 2, explanation: "'Look forward to' is followed by a Gerund (V+ing). Correct: 'meeting you'.", explanationBengali: "'Look forward to'-এর পরে verb+ing হয়।" },
    { id: "se_48", chapter: "Spotting Error", difficulty: "moderate", topic: "Articles", question: "The man is (A) / the only animal (B) / that can talk. (C) / No Error (D)", options: ["The man is", "the only animal", "that can talk.", "No Error"], correctIndex: 0, explanation: "When 'Man' means mankind, no article is used.", explanationBengali: "মানবজাতি বোঝালে 'Man'-এর আগে article বসে না।" },
    { id: "se_49", chapter: "Spotting Error", difficulty: "easy", topic: "Noun", question: "Five sheeps (A) / are grazing (B) / in the field. (C) / No Error (D)", options: ["Five sheeps", "are grazing", "in the field.", "No Error"], correctIndex: 0, explanation: "'Sheep' has same form in singular and plural. No 'Sheeps'.", explanationBengali: "'Sheep'-এর plural form 'Sheep'-ই হয়।" },
    { id: "se_50", chapter: "Spotting Error", difficulty: "hard", topic: "Subject-Verb", question: "More than one (A) / student have (B) / passed. (C) / No Error (D)", options: ["More than one", "student have", "passed.", "No Error"], correctIndex: 1, explanation: "'More than one' takes a singular noun and verb. Correct: 'has passed'.", explanationBengali: "'More than one'-এর পরে singular verb বসে।" },
    { id: "se_51", chapter: "Spotting Error", difficulty: "moderate", topic: "Preposition", question: "We discussed (A) / about the (B) / matter. (C) / No Error (D)", options: ["We discussed", "about the", "matter.", "No Error"], correctIndex: 1, explanation: "'Discuss' is transitive. Remove 'about'.", explanationBengali: "'Discuss'-এর পরে preposition বসে না।" },
    { id: "se_52", chapter: "Spotting Error", difficulty: "easy", topic: "Adjective", question: "This is the (A) / most unique (B) / thing. (C) / No Error (D)", options: ["This is the", "most unique", "thing.", "No Error"], correctIndex: 1, explanation: "'Unique' is absolute. Remove 'most'.", explanationBengali: "'Unique' নিজেই সর্বোচ্চ, তাই 'most' বসে না।" },
    { id: "se_53", chapter: "Spotting Error", difficulty: "hard", topic: "Verb", question: "Neither of them (A) / are (B) / going. (C) / No Error (D)", options: ["Neither of them", "are", "going.", "No Error"], correctIndex: 1, explanation: "'Neither of' takes a singular verb. Correct: 'is'.", explanationBengali: "'Neither of'-এর পরে verb singular হয়।" },
    { id: "se_54", chapter: "Spotting Error", difficulty: "moderate", topic: "Tense", question: "If I will go (A) / to Delhi, (B) / I will meet him. (C) / No Error (D)", options: ["If I will go", "to Delhi,", "I will meet him.", "No Error"], correctIndex: 0, explanation: "If-clause does not take future tense. Correct: 'If I go'.", explanationBengali: "'If' অংশে future tense বসে না।" },
    { id: "se_55", chapter: "Spotting Error", difficulty: "easy", topic: "Noun", question: "He gave me (A) / an advice. (B) / (C) / No Error (D)", options: ["He gave me", "an advice.", "No Error"], correctIndex: 1, explanation: "'Advice' is uncountable. Use 'a piece of advice'.", explanationBengali: "'Advice' uncountable, তাই 'an' বসে না।" },
    { id: "se_56", chapter: "Spotting Error", difficulty: "hard", topic: "Inversion", question: "Scarcely had (A) / I arrived than (B) / the train left. (C) / No Error (D)", options: ["Scarcely had", "I arrived than", "the train left.", "No Error"], correctIndex: 1, explanation: "'Scarcely' is followed by 'when', not 'than'.", explanationBengali: "'Scarcely'-এর সাথে 'when' বসে।" },
    { id: "se_57", chapter: "Spotting Error", difficulty: "moderate", topic: "Adverb", question: "He is (A) / too glad (B) / to see you. (C) / No Error (D)", options: ["He is", "too glad", "to see you.", "No Error"], correctIndex: 1, explanation: "'Too' implies negative. Use 'very glad'.", explanationBengali: "'Too' নেতিবাচক অর্থে বসে। এখানে 'very' হবে।" },
    { id: "se_58", chapter: "Spotting Error", difficulty: "easy", topic: "Preposition", question: "He sat (A) / besides (B) / me. (C) / No Error (D)", options: ["He sat", "besides", "me.", "No Error"], correctIndex: 1, explanation: "'Beside' means next to. 'Besides' means in addition to. Correct: 'Beside'.", explanationBengali: "পাশে বসা বোঝাতে 'Beside' হয়।" },
    { id: "se_59", chapter: "Spotting Error", difficulty: "hard", topic: "Subject-Verb", question: "The number of boys (A) / are (B) / fifty. (C) / No Error (D)", options: ["The number of boys", "are", "fifty.", "No Error"], correctIndex: 1, explanation: "'The number of' takes a singular verb. Correct: 'is'.", explanationBengali: "'The number of' থাকলে verb singular হয়।" },
    { id: "se_60", chapter: "Spotting Error", difficulty: "moderate", topic: "Pronoun", question: "Each of the (A) / boys have (B) / done his work. (C) / No Error (D)", options: ["Each of the", "boys have", "done his work.", "No Error"], correctIndex: 1, explanation: "'Each' takes a singular verb. Correct: 'has'.", explanationBengali: "'Each' থাকলে verb singular হয়।" },

// --- SET 11: MORE UNIQUE QUESTIONS (61-80) ---

    {
        id: "se_61", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The jury (A) / were divided (B) / in their opinion. (C) / No Error (D)",
        options: ["The jury", "were divided", "in their opinion.", "No Error"],
        correctIndex: 3,
        explanation: "When the jury is divided, we treat it as plural individuals. So 'were' is correct. No Error.",
        explanationBengali: "যখন Jury-র মতভেদ হয়, তখন তাদের আলাদা ব্যক্তি হিসেবে গণ্য করা হয়, তাই plural verb ঠিক আছে।"
    },
    {
        id: "se_62", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is (A) / addicted with (B) / smoking. (C) / No Error (D)",
        options: ["He is", "addicted with", "smoking.", "No Error"],
        correctIndex: 1,
        explanation: "The correct preposition is 'addicted to'.",
        explanationBengali: "'Addicted'-এর সাথে preposition 'to' বসে, 'with' নয়।"
    },
    {
        id: "se_63", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "Neither of the (A) / five boys (B) / is interesting. (C) / No Error (D)",
        options: ["Neither of the", "five boys", "is interesting.", "No Error"],
        correctIndex: 0,
        explanation: "'Neither' is used for two people. For more than two (five), use 'None'. Correct: 'None of the'.",
        explanationBengali: "দুইয়ের জন্য 'Neither' হয়। দুইয়ের বেশির (পাঁচজন) জন্য 'None' ব্যবহার করতে হবে।"
    },
    {
        id: "se_64", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "This is the (A) / most perfect (B) / example. (C) / No Error (D)",
        options: ["This is the", "most perfect", "example.", "No Error"],
        correctIndex: 1,
        explanation: "'Perfect' is an absolute adjective. It cannot be more or most. Remove 'most'.",
        explanationBengali: "'Perfect' শব্দটি নিজেই সম্পূর্ণ, এর আগে 'most' বা 'more' বসে না।"
    },
    {
        id: "se_65", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I have (A) / known him (B) / for two years. (C) / No Error (D)",
        options: ["I have", "known him", "for two years.", "No Error"],
        correctIndex: 3,
        explanation: "Present Perfect is correctly used with 'for' to show duration. No Error.",
        explanationBengali: "সময়ের ব্যাপ্তি বোঝাতে Present Perfect Tense সঠিক আছে। কোনো ভুল নেই।"
    },
    {
        id: "se_66", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Verbs",
        question: "He lay (A) / his luggage (B) / aside. (C) / No Error (D)",
        options: ["He lay", "his luggage", "aside.", "No Error"],
        correctIndex: 0,
        explanation: "'Lay' means to put something down. Past tense is 'Laid'. Correct: 'He laid his luggage'.",
        explanationBengali: "কোনো কিছু রাখা বোঝালে 'Lay'-এর Past tense 'Laid' হয়। 'Lay' হলো 'Lie' (শুয়ে থাকা)-এর Past tense।"
    },
    {
        id: "se_67", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Scarcely had (A) / he gone (B) / when a policeman knocked. (C) / No Error (D)",
        options: ["Scarcely had", "he gone", "when a policeman knocked.", "No Error"],
        correctIndex: 3,
        explanation: "'Scarcely...when' is the correct pair. The sentence structure is correct. No Error.",
        explanationBengali: "'Scarcely'-এর সাথে 'when' ব্যবহার করা হয়েছে, যা সঠিক। কোনো ভুল নেই।"
    },
    {
        id: "se_68", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is (A) / an honest (B) / man. (C) / No Error (D)",
        options: ["He is", "an honest", "man.", "No Error"],
        correctIndex: 3,
        explanation: "'Honest' starts with a vowel sound (O), so 'an' is correct. No Error.",
        explanationBengali: "'Honest'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' সঠিক।"
    },
    {
        id: "se_69", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Nouns",
        question: "My sister (A) / has read (B) / pages after pages of the Bible. (C) / No Error (D)",
        options: ["My sister", "has read", "pages after pages of the Bible.", "No Error"],
        correctIndex: 2,
        explanation: "When a noun is repeated after a preposition, it remains singular. Correct: 'page after page'.",
        explanationBengali: "Preposition-এর আগে ও পরে একই noun থাকলে তা singular হয়। সঠিক: 'page after page'।"
    },
    {
        id: "se_70", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He is (A) / very interesting (B) / to know the result. (C) / No Error (D)",
        options: ["He is", "very interesting", "to know the result.", "No Error"],
        correctIndex: 1,
        explanation: "'Interesting' describes a thing. A person feels 'interested'. Correct: 'very interested'.",
        explanationBengali: "কোনো ব্যক্তির অনুভূতি বোঝাতে 'interested' হয়, 'interesting' নয়।"
    },
    {
        id: "se_71", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "One must (A) / not boast of (B) / his own success. (C) / No Error (D)",
        options: ["One must", "not boast of", "his own success.", "No Error"],
        correctIndex: 2,
        explanation: "The possessive for 'One' is 'One's', not 'his'. Correct: 'one's own success'.",
        explanationBengali: "'One'-এর possessive form 'One's' হয়, 'his' নয়।"
    },
    {
        id: "se_72", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Superfluous",
        question: "The reason why (A) / he failed (B) / is because he was lazy. (C) / No Error (D)",
        options: ["The reason why", "he failed", "is because he was lazy.", "No Error"],
        correctIndex: 2,
        explanation: "'The reason why' is never followed by 'because'. Use 'that'. Correct: 'is that he was lazy'.",
        explanationBengali: "'The reason why' থাকলে পরে 'because' বসে না, 'that' বসে।"
    },
    {
        id: "se_73", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "The introduction of (A) / tea and coffee (B) / have not been without effect. (C) / No Error (D)",
        options: ["The introduction of", "tea and coffee", "have not been without effect.", "No Error"],
        correctIndex: 2,
        explanation: "The subject is 'Introduction' (singular), not 'tea and coffee'. Correct: 'has not been'.",
        explanationBengali: "আসল Subject হলো 'Introduction' (singular), তাই verb 'has' হবে।"
    },
    {
        id: "se_74", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "The dog (A) / ran (B) / besides the car. (C) / No Error (D)",
        options: ["The dog", "ran", "besides the car.", "No Error"],
        correctIndex: 2,
        explanation: "'Besides' means 'in addition to'. 'Beside' means 'next to'. Correct: 'beside the car'.",
        explanationBengali: "পাশাপাশি দৌড়ানো বোঝাতে 'beside' হবে, 'besides' (তাছাড়াও) নয়।"
    },
    {
        id: "se_75", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is (A) / the most (B) / strongest man here. (C) / No Error (D)",
        options: ["He is", "the most", "strongest man here.", "No Error"],
        correctIndex: 1,
        explanation: "'Strongest' is already superlative. 'Most' is superfluous. Correct: 'the strongest'.",
        explanationBengali: "Double superlative (most strongest) হয় না। শুধু 'strongest' হবে।"
    },
    {
        id: "se_76", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Conditionals",
        question: "Unless you (A) / do not apologize, (B) / I will not forgive you. (C) / No Error (D)",
        options: ["Unless you", "do not apologize,", "I will not forgive you.", "No Error"],
        correctIndex: 1,
        explanation: "'Unless' implies a negative condition. Do not use 'not' with it. Correct: 'Unless you apologize'.",
        explanationBengali: "'Unless'-এর সাথে 'not' বসে না। সঠিক: 'Unless you apologize'।"
    },
    {
        id: "se_77", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Verbs",
        question: "I am (A) / looking forward to (B) / meet you. (C) / No Error (D)",
        options: ["I am", "looking forward to", "meet you.", "No Error"],
        correctIndex: 2,
        explanation: "The phrase 'look forward to' is followed by a Gerund (V+ing). Correct: 'meeting you'.",
        explanationBengali: "'Look forward to'-এর পরে verb+ing হয়। সঠিক: 'meeting you'।"
    },
    {
        id: "se_78", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Nouns",
        question: "I have (A) / many works (B) / to do. (C) / No Error (D)",
        options: ["I have", "many works", "to do.", "No Error"],
        correctIndex: 1,
        explanation: "'Work' (meaning tasks/jobs) is uncountable. Use 'much work' or 'many pieces of work'.",
        explanationBengali: "কাজ অর্থে 'Work' uncountable, তাই 'works' হয় না। 'Much work' বা 'many pieces of work' বলতে হবে।"
    },
    {
        id: "se_79", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Under no circumstances (A) / you should (B) / open this door. (C) / No Error (D)",
        options: ["Under no circumstances", "you should", "open this door.", "No Error"],
        correctIndex: 1,
        explanation: "Negative adverbial phrase at the start requires inversion. Correct: 'should you'.",
        explanationBengali: "নেতিবাচক শব্দগুচ্ছ দিয়ে বাক্য শুরু হলে verb আগে আসে। সঠিক: 'should you'।"
    },
    {
        id: "se_80", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "He asked me (A) / what was (B) / my name. (C) / No Error (D)",
        options: ["He asked me", "what was", "my name.", "No Error"],
        correctIndex: 1,
        explanation: "In indirect speech, the statement order (Subject + Verb) is used, not question order. Correct: 'what my name was'.",
        explanationBengali: "Indirect speech-এ প্রশ্নবোধক কাঠামো থাকে না। verb শেষে যাবে। সঠিক: 'what my name was'।"
    },
// --- SET 12: ADDITIONAL UNIQUE SPOTTING ERROR QUESTIONS (81-100) ---
    {
        id: "se_81", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Subject-Verb",
        question: "A large number of students (A) / has applied (B) / for the job. (C) / No Error (D)",
        options: ["A large number of students", "has applied", "for the job.", "No Error"],
        correctIndex: 1,
        explanation: "'A number of' takes a plural verb. 'The number of' takes a singular verb. Correct: 'have applied'.",
        explanationBengali: "'A number of' থাকলে verb plural হয়। 'The number of' থাকলে verb singular হয়।"
    },
    {
        id: "se_82", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Between you and I, (A) / he is (B) / a thief. (C) / No Error (D)",
        options: ["Between you and I,", "he is", "a thief.", "No Error"],
        correctIndex: 0,
        explanation: "After prepositions like 'between', use objective pronouns (me, him, her). Correct: 'Between you and me'.",
        explanationBengali: "Preposition-এর পর pronoun-এর objective form বসে। সঠিক: 'you and me'।"
    },
    {
        id: "se_83", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is (A) / wiser than (B) / strong. (C) / No Error (D)",
        options: ["He is", "wiser than", "strong.", "No Error"],
        correctIndex: 1,
        explanation: "When comparing two qualities of the same person, use 'more + positive degree'. Correct: 'more wise than strong'.",
        explanationBengali: "একই ব্যক্তির দুটি গুণের তুলনা হলে 'more + adjective' ব্যবহার করতে হয়, comparative degree নয়।"
    },
    {
        id: "se_84", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "I have passed (A) / the exam (B) / two years ago. (C) / No Error (D)",
        options: ["I have passed", "the exam", "two years ago.", "No Error"],
        correctIndex: 0,
        explanation: "When a specific past time ('ago') is given, use Simple Past. Correct: 'I passed'.",
        explanationBengali: "অতীতের সময় উল্লেখ থাকলে (ago) Past Indefinite Tense হয়। সঠিক: 'I passed'।"
    },
    {
        id: "se_85", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is (A) / a M.A. (B) / in English. (C) / No Error (D)",
        options: ["He is", "a M.A.", "in English.", "No Error"],
        correctIndex: 1,
        explanation: "M.A. starts with a vowel sound ('Em'), so use 'an'. Correct: 'an M.A.'.",
        explanationBengali: "M.A. উচ্চারণের শুরুতে vowel sound আসে, তাই 'an' বসে।"
    },
    {
        id: "se_86", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Verbs",
        question: "The river has (A) / overflown (B) / its banks. (C) / No Error (D)",
        options: ["The river has", "overflown", "its banks.", "No Error"],
        correctIndex: 1,
        explanation: "'Overflowed' is the past participle of 'overflow'. 'Overflown' is from 'overfly'. Correct: 'overflowed'.",
        explanationBengali: "নদী উপচে পড়া বোঝাতে 'overflowed' হয়। 'Overflown' মানে উড়ে যাওয়া।"
    },
    {
        id: "se_87", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Both he (A) / as well as his friend (B) / are coming. (C) / No Error (D)",
        options: ["Both he", "as well as his friend", "are coming.", "No Error"],
        correctIndex: 1,
        explanation: "'Both' is followed by 'and', not 'as well as'. Correct: 'Both he and his friend'.",
        explanationBengali: "'Both'-এর সাথে সবসময় 'and' বসে, 'as well as' নয়।"
    },
    {
        id: "se_88", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Nouns",
        question: "He gave me (A) / many advices. (B) / (C) / No Error (D)",
        options: ["He gave me", "many advices.", "No Error"],
        correctIndex: 1,
        explanation: "'Advice' is uncountable and has no plural form. Correct: 'much advice' or 'many pieces of advice'.",
        explanationBengali: "'Advice' uncountable, তাই 'advices' হয় না।"
    },
    {
        id: "se_89", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Adverbs",
        question: "He is (A) / very much (B) / sorry. (C) / No Error (D)",
        options: ["He is", "very much", "sorry.", "No Error"],
        correctIndex: 1,
        explanation: "'Very' is used with positive degree adjectives like 'sorry'. 'Much' is for comparatives. Correct: 'very sorry'.",
        explanationBengali: "'Sorry'-এর আগে শুধু 'very' বসে, 'very much' নয়।"
    },
    {
        id: "se_90", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He prevented me (A) / to go (B) / there. (C) / No Error (D)",
        options: ["He prevented me", "to go", "there.", "No Error"],
        correctIndex: 1,
        explanation: "'Prevent' is followed by 'from' + Gerund. Correct: 'from going'.",
        explanationBengali: "'Prevent'-এর পর 'from' + verb-ing বসে।"
    },
    {
        id: "se_91", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Subject-Verb",
        question: "Slow and steady (A) / win (B) / the race. (C) / No Error (D)",
        options: ["Slow and steady", "win", "the race.", "No Error"],
        correctIndex: 1,
        explanation: "Pairs expressing a single idea take a singular verb. Correct: 'wins'.",
        explanationBengali: "একই ধারণা বোঝালে verb singular হয়। সঠিক: 'wins'।"
    },
    {
        id: "se_92", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Conditionals",
        question: "Had I known (A) / him, (B) / I would allow him. (C) / No Error (D)",
        options: ["Had I known", "him,", "I would allow him.", "No Error"],
        correctIndex: 2,
        explanation: "If 'Had + V3' starts a sentence, the main clause must use 'would have + V3'. Correct: 'would have allowed him'.",
        explanationBengali: "'Had + V3' দিয়ে বাক্য শুরু হলে পরের অংশে 'would have + V3' হয়।"
    },
    {
        id: "se_93", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The machineries (A) / are (B) / imported. (C) / No Error (D)",
        options: ["The machineries", "are", "imported.", "No Error"],
        correctIndex: 0,
        explanation: "'Machinery' is uncountable. It cannot be pluralized. Correct: 'The machinery is'.",
        explanationBengali: "'Machinery' uncountable noun, তাই 'machineries' হয় না।"
    },
    {
        id: "se_94", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Each of the girls (A) / have done (B) / their work. (C) / No Error (D)",
        options: ["Each of the girls", "have done", "their work.", "No Error"],
        correctIndex: 1,
        explanation: "'Each' is singular. Use singular verb and pronoun. Correct: 'has done her work'.",
        explanationBengali: "'Each' থাকলে verb এবং pronoun singular হয়। সঠিক: 'has done her work'।"
    },
    {
        id: "se_95", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is the (A) / most unique (B) / man. (C) / No Error (D)",
        options: ["He is the", "most unique", "man.", "No Error"],
        correctIndex: 1,
        explanation: "'Unique' means one of a kind. It cannot be compared. Remove 'most'.",
        explanationBengali: "'Unique' শব্দটি নিজেই সর্বোচ্চ, তাই 'most' বসে না।"
    },
    {
        id: "se_96", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "I prefer (A) / walking than (B) / swimming. (C) / No Error (D)",
        options: ["I prefer", "walking than", "swimming.", "No Error"],
        correctIndex: 1,
        explanation: "'Prefer' is followed by 'to', not 'than'. Correct: 'walking to swimming'.",
        explanationBengali: "'Prefer'-এর সাথে 'to' বসে।"
    },
    {
        id: "se_97", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "It is high time (A) / we go (B) / home. (C) / No Error (D)",
        options: ["It is high time", "we go", "home.", "No Error"],
        correctIndex: 1,
        explanation: "'It is high time' is followed by the Past Simple. Correct: 'we went'.",
        explanationBengali: "'It is high time'-এর পরে verb-এর past form বসে।"
    },
    {
        id: "se_98", chapter: "Spotting Error", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "No sooner (A) / I saw him (B) / than I ran away. (C) / No Error (D)",
        options: ["No sooner", "I saw him", "than I ran away.", "No Error"],
        correctIndex: 1,
        explanation: "Inversion is required after 'No sooner'. Correct: 'did I see him' or 'had I seen him'.",
        explanationBengali: "'No sooner'-এর পরে verb আগে আসে। সঠিক: 'did I see him'।"
    },
    {
        id: "se_99", chapter: "Spotting Error", type: "grammar", difficulty: "moderate", topic: "Superfluous",
        question: "Suppose if (A) / it rains, (B) / what shall we do? (C) / No Error (D)",
        options: ["Suppose if", "it rains,", "what shall we do?", "No Error"],
        correctIndex: 0,
        explanation: "Use either 'Suppose' or 'If', but not both together.",
        explanationBengali: "'Suppose' এবং 'If' একসাথে বসে না। যেকোনো একটি ব্যবহার করতে হবে।"
    },
    {
        id: "se_100", chapter: "Spotting Error", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "Let's go, (A) / shall we? (B) / (C) / No Error (D)",
        options: ["Let's go,", "shall we?", "No Error"],
        correctIndex: 2, // No Error
        explanation: "For sentences starting with 'Let us' or 'Let's', the tag is 'shall we?'. This is correct.",
        explanationBengali: "'Let's' বা 'Let us' থাকলে question tag হয় 'shall we?'। এটি সঠিক।"
    },
// --- SET 14: ADDITIONAL SENTENCE IMPROVEMENT QUESTIONS (101-120) ---

    {
        id: "si_101", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He gave me *a* advice.",
        options: ["an", "the", "some", "No Improvement"],
        correctIndex: 2,
        explanation: "'Advice' is an uncountable noun and cannot take 'a' or 'an'. Use 'some' or 'a piece of'.",
        explanationBengali: "'Advice' uncountable, তাই 'a' বসে না। 'some' বা 'a piece of' ব্যবহার করতে হবে।"
    },
    {
        id: "si_102", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Either of the two boys *are* eligible.",
        options: ["is", "have", "has", "No Improvement"],
        correctIndex: 0,
        explanation: "'Either of' takes a singular verb. Correct: 'is'.",
        explanationBengali: "'Either of' থাকলে verb singular হয়। সঠিক: 'is'।"
    },
    {
        id: "si_103", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adverbs",
        question: "He is *too* happy to see you.",
        options: ["very", "much", "so", "No Improvement"],
        correctIndex: 0,
        explanation: "'Too' has a negative connotation (more than enough). For positive emotion, use 'very'.",
        explanationBengali: "'Too' নেতিবাচক অর্থে বসে। ইতিবাচক অর্থে 'very' ব্যবহার করতে হবে।"
    },
    {
        id: "si_104", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He died *from* cancer.",
        options: ["of", "by", "with", "No Improvement"],
        correctIndex: 0,
        explanation: "One dies 'of' a disease, not 'from'. Correct: 'died of cancer'.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },
    {
        id: "si_105", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I *have received* your letter yesterday.",
        options: ["received", "had received", "receive", "No Improvement"],
        correctIndex: 0,
        explanation: "Specific past time ('yesterday') requires Simple Past Tense ('received').",
        explanationBengali: "'Yesterday' থাকলে Past Indefinite Tense হয়।"
    },
    {
        id: "si_106", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Modifiers",
        question: "Entering the room, *the lights were quite dim*.",
        options: ["I found the lights quite dim", "the lights were found quite dim", "dim were the lights", "No Improvement"],
        correctIndex: 0,
        explanation: "Dangling modifier. The modifier 'Entering the room' must describe the subject 'I', not 'lights'.",
        explanationBengali: "Dangling modifier-এর ভুল। 'Entering the room' যার কাজ, তাকেই subject করতে হবে (I)।"
    },
    {
        id: "si_107", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "No sooner had he arrived *when* he had to leave.",
        options: ["than", "then", "before", "No Improvement"],
        correctIndex: 0,
        explanation: "'No sooner' is always followed by 'than'.",
        explanationBengali: "'No sooner'-এর সাথে 'than' বসে।"
    },
    {
        id: "si_108", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Relative Pronouns",
        question: "The man *which* came here is my uncle.",
        options: ["who", "whom", "that", "No Improvement"],
        correctIndex: 0,
        explanation: "'Who' is used for people (subjective case). 'Which' is for things.",
        explanationBengali: "ব্যক্তির ক্ষেত্রে 'who' বসে, 'which' নয়।"
    },
    {
        id: "si_109", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Parallelism",
        question: "She likes reading, swimming, and *to paint*.",
        options: ["painting", "paint", "to painting", "No Improvement"],
        correctIndex: 0,
        explanation: "Maintain parallelism. Gerunds (reading, swimming) should be followed by another gerund (painting).",
        explanationBengali: "তালিকার সব শব্দের রূপ একই হতে হবে (Gerund)। তাই 'painting' হবে।"
    },
    {
        id: "si_110", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Verbs",
        question: "He *lay* the book on the table.",
        options: ["laid", "lied", "lain", "No Improvement"],
        correctIndex: 0,
        explanation: "'Laid' is the past tense of 'lay' (to put). 'Lay' is the past tense of 'lie' (to recline). Correct: 'laid'.",
        explanationBengali: "বই রাখা বোঝালে 'laid' হবে। 'Lay' মানে শুয়ে থাকা (past)।"
    },
    {
        id: "si_111", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "He gave me many *informations*.",
        options: ["pieces of information", "information", "informations", "No Improvement"],
        correctIndex: 0,
        explanation: "'Information' is uncountable. To make it plural, use 'pieces of information'.",
        explanationBengali: "'Information' uncountable, তাই 'informations' হয় না। 'pieces of information' বলতে হবে।"
    },
    {
        id: "si_112", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Never *I have* seen such a sight.",
        options: ["have I", "did I", "I had", "No Improvement"],
        correctIndex: 0,
        explanation: "Sentences starting with 'Never' require inversion (Auxiliary verb before Subject). Correct: 'Never have I'.",
        explanationBengali: "'Never' দিয়ে বাক্য শুরু হলে Inversion হয়। সঠিক: 'Never have I'।"
    },
    {
        id: "si_113", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "If I *was* you, I would accept the offer.",
        options: ["were", "am", "had been", "No Improvement"],
        correctIndex: 0,
        explanation: "In hypothetical conditionals, use 'were' for all subjects.",
        explanationBengali: "অবাস্তব ইচ্ছা বা শর্তে সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "si_114", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "He is a good boy, *isn't it*?",
        options: ["isn't he", "aren't he", "doesn't he", "No Improvement"],
        correctIndex: 0,
        explanation: "Tag must match the subject ('He'). Correct: 'isn't he'.",
        explanationBengali: "Subject 'He', তাই tag 'isn't he' হবে।"
    },
    {
        id: "si_115", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Superfluous",
        question: "The reason why he failed is *because* he didn't study.",
        options: ["that", "due to", "owing to", "No Improvement"],
        correctIndex: 0,
        explanation: "'The reason why' is followed by 'that', not 'because'.",
        explanationBengali: "'The reason why' থাকলে পরে 'that' বসে।"
    },
    {
        id: "si_116", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is *more wiser* than his brother.",
        options: ["wiser", "much wiser", "more wise", "No Improvement"],
        correctIndex: 0,
        explanation: "Double comparatives ('more wiser') are incorrect. Use 'wiser'.",
        explanationBengali: "Double comparative ভুল। শুধু 'wiser' হবে।"
    },
    {
        id: "si_117", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "One must keep *his* promises.",
        options: ["one's", "their", "her", "No Improvement"],
        correctIndex: 0,
        explanation: "The possessive form of 'One' is 'One's'.",
        explanationBengali: "'One'-এর possessive form 'One's' হয়।"
    },
    {
        id: "si_118", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "I prefer tea *than* coffee.",
        options: ["to", "over", "from", "No Improvement"],
        correctIndex: 0,
        explanation: "'Prefer' takes 'to', not 'than'.",
        explanationBengali: "'Prefer'-এর সাথে 'to' বসে।"
    },
    {
        id: "si_119", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "Bread and butter *are* my favorite breakfast.",
        options: ["is", "have been", "were", "No Improvement"],
        correctIndex: 0,
        explanation: "When two nouns refer to a single idea or dish, the verb is singular. Correct: 'is'.",
        explanationBengali: "একই ধারণা বা খাবার বোঝালে verb singular হয়।"
    },
    {
        id: "si_120", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Participles",
        question: "Walking in the park, *a snake bit him*.",
        options: ["he was bitten by a snake", "a snake has bitten him", "snake bit him", "No Improvement"],
        correctIndex: 0,
        explanation: "Dangling participle. The subject of 'walking' must be 'he'. Passive voice fixes this: 'he was bitten'.",
        explanationBengali: "Dangling modifier ঠিক করতে subject 'he'-কে শুরুতে আনতে হবে (Passive Voice)।"
    },
// --- SET 15: ADDITIONAL SENTENCE IMPROVEMENT QUESTIONS (121-140) ---

    {
        id: "si_121", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He gave me *a* advice.",
        options: ["an", "the", "some", "No Improvement"],
        correctIndex: 2,
        explanation: "'Advice' is an uncountable noun and cannot take 'a' or 'an'. Use 'some' or 'a piece of'.",
        explanationBengali: "'Advice' uncountable, তাই 'a' বসে না। 'some' বা 'a piece of' ব্যবহার করতে হবে।"
    },
    {
        id: "si_122", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Each of the students *are* present.",
        options: ["is", "have", "were", "No Improvement"],
        correctIndex: 0,
        explanation: "'Each' is singular and takes a singular verb. Correct: 'is'.",
        explanationBengali: "'Each' থাকলে verb singular হয়। সঠিক: 'is'।"
    },
    {
        id: "si_123", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is *comparatively better* today.",
        options: ["better", "good", "comparatively good", "No Improvement"],
        correctIndex: 2,
        explanation: "'Comparatively' is already a comparison, so use the positive degree 'good'.",
        explanationBengali: "'Comparatively' নিজেই তুলনামূলক, তাই এর পরে positive degree (good) বসে।"
    },
    {
        id: "si_124", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is angry *upon* me.",
        options: ["with", "at", "on", "No Improvement"],
        correctIndex: 0,
        explanation: "Angry 'with' a person, angry 'at' a thing/situation.",
        explanationBengali: "কারোর ওপর রাগ করলে 'with' হয়।"
    },
    {
        id: "si_125", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I *did not saw* him yesterday.",
        options: ["did not see", "do not see", "have not seen", "No Improvement"],
        correctIndex: 0,
        explanation: "After 'did', use the base form of the verb (V1). Correct: 'did not see'.",
        explanationBengali: "'Did'-এর পরে verb-এর base form বসে। সঠিক: 'did not see'।"
    },
    {
        id: "si_126", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Not only *he is* rich but also generous.",
        options: ["is he", "he was", "was he", "No Improvement"],
        correctIndex: 0,
        explanation: "When 'Not only' starts a clause for emphasis, inversion is often preferred or required depending on structure. Here, balancing the subject: 'He is not only rich...'. If keeping structure: 'Not only is he...'.",
        explanationBengali: "'Not only' দিয়ে বাক্য শুরু হলে inversion হয় (verb আগে আসে)।"
    },
    {
        id: "si_127", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "Unless you *do not* work hard, you will fail.",
        options: ["work", "did not work", "will not work", "No Improvement"],
        correctIndex: 0,
        explanation: "'Unless' is negative, so 'not' is redundant. Correct: 'Unless you work'.",
        explanationBengali: "'Unless' নিজেই নেতিবাচক, তাই 'not' বসে না।"
    },
    {
        id: "si_128", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Verb Forms",
        question: "He *hang* the picture on the wall.",
        options: ["hanged", "hung", "hanging", "No Improvement"],
        correctIndex: 1,
        explanation: "'Hung' is past for objects. 'Hanged' is for execution. Correct: 'hung'.",
        explanationBengali: "জিনিস ঝোলানো বোঝালে 'hung' হয়। ফাঁসি দেওয়া বোঝালে 'hanged' হয়।"
    },
    {
        id: "si_129", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Parallelism",
        question: "To succeed is *difficult* than to fail.",
        options: ["more difficult", "most difficult", "difficultly", "No Improvement"],
        correctIndex: 0,
        explanation: "Comparative degree 'more difficult' is needed with 'than'.",
        explanationBengali: "'Than' আছে তাই comparative degree 'more difficult' হবে।"
    },
    {
        id: "si_130", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Let *we* go home.",
        options: ["us", "our", "ours", "No Improvement"],
        correctIndex: 0,
        explanation: "'Let' is followed by the objective case. Correct: 'Let us'.",
        explanationBengali: "'Let'-এর পরে objective form 'us' বসে।"
    },
    {
        id: "si_131", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The *cattle* is grazing.",
        options: ["cattles are", "cattle are", "cattles is", "No Improvement"],
        correctIndex: 1,
        explanation: "'Cattle' is plural in meaning and takes a plural verb. It does not take 's'.",
        explanationBengali: "'Cattle' শব্দটি plural, তাই verb 'are' হবে।"
    },
    {
        id: "si_132", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Conjunctions",
        question: "Scarcely had he gone *than* a policeman knocked.",
        options: ["when", "then", "before", "No Improvement"],
        correctIndex: 0,
        explanation: "'Scarcely' is followed by 'when', not 'than'.",
        explanationBengali: "'Scarcely'-এর সাথে 'when' বসে।"
    },
    {
        id: "si_133", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "A number of boys *is* playing.",
        options: ["are", "was", "has", "No Improvement"],
        correctIndex: 0,
        explanation: "'A number of' takes a plural verb. 'The number of' takes singular.",
        explanationBengali: "'A number of' থাকলে verb plural হয়।"
    },
    {
        id: "si_134", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Adverbs",
        question: "He is *very* stronger than I.",
        options: ["much", "more", "too", "No Improvement"],
        correctIndex: 0,
        explanation: "Comparative adjectives ('stronger') are modified by 'much', not 'very'.",
        explanationBengali: "Comparative degree-এর আগে 'much' বসে, 'very' নয়।"
    },
    {
        id: "si_135", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Articles",
        question: "He is *the* Shakespeare of India.",
        options: ["a", "an", "one", "No Improvement"],
        correctIndex: 3, // No Improvement is confusing if logic implies it is correct. "Kalidas is the Shakespeare". Yes, "the" is correct for comparison.
        // Let's ensure option reflects logic. The sentence is correct.
        explanation: "Proper nouns used as common nouns for comparison take 'the'. Correct. No Improvement.",
        explanationBengali: "তুলনা বোঝাতে Proper Noun-এর আগে 'the' বসে। বাক্যটি সঠিক।"
    },
    {
        id: "si_136", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is blind *of* one eye.",
        options: ["in", "to", "with", "No Improvement"],
        correctIndex: 0,
        explanation: "Correct idiom is 'blind in' one eye.",
        explanationBengali: "এক চোখে অন্ধ হলে 'blind in' বসে।"
    },
    {
        id: "si_137", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Verbs",
        question: "I *am having* a car.",
        options: ["have", "had", "have had", "No Improvement"],
        correctIndex: 0,
        explanation: "'Have' denoting possession is not used in continuous form. Correct: 'I have'.",
        explanationBengali: "মালিকানা বোঝাতে 'have'-এর continuous tense হয় না।"
    },
    {
        id: "si_138", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "She didn't come, *did she*?",
        options: ["didn't she", "does she", "isn't she", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "Negative sentence takes a positive tag. 'Did she' is correct.",
        explanationBengali: "নেতিবাচক বাক্যের tag ইতিবাচক হয়। বাক্যটি সঠিক।"
    },
    {
        id: "si_139", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is the *most ideal* teacher.",
        options: ["ideal", "more ideal", "an ideal", "No Improvement"],
        correctIndex: 0,
        explanation: "'Ideal' is absolute. Remove 'most'.",
        explanationBengali: "'Ideal' শব্দটি নিজেই সম্পূর্ণ, তাই 'most' বসে না।"
    },
    {
        id: "si_140", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Participles",
        question: "*Walking* along the road, a car hit him.",
        options: ["While he was walking", "As he walk", "When walking", "No Improvement"],
        correctIndex: 0,
        explanation: "Dangling participle. The car wasn't walking. Correct: 'While he was walking'.",
        explanationBengali: "Dangling modifier ঠিক করতে subject উল্লেখ করতে হবে।"
    },
// --- SET 16: ADDITIONAL SENTENCE IMPROVEMENT QUESTIONS (141-160) ---

    {
        id: "si_141", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is *an* honorable man.",
        options: ["a", "the", "one", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "'Honorable' starts with a vowel sound ('o'), so 'an' is correct.",
        explanationBengali: "'Honorable'-এর উচ্চারণ vowel sound দিয়ে শুরু, তাই 'an' সঠিক।"
    },
    {
        id: "si_142", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Many a man *have* done this.",
        options: ["has", "had", "are", "No Improvement"],
        correctIndex: 0,
        explanation: "'Many a' takes a singular noun and singular verb. Correct: 'has done'.",
        explanationBengali: "'Many a' থাকলে verb singular হয়। সঠিক: 'has done'।"
    },
    {
        id: "si_143", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is *senior than* me.",
        options: ["senior to", "more senior to", "senior from", "No Improvement"],
        correctIndex: 0,
        explanation: "Latin adjectives ending in -or (senior, junior) take 'to', not 'than'.",
        explanationBengali: "'Senior', 'junior' ইত্যাদির পরে 'to' বসে।"
    },
    {
        id: "si_144", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He *congratulated me for* my success.",
        options: ["congratulated me on", "congratulated me at", "congratulated me with", "No Improvement"],
        correctIndex: 0,
        explanation: "The correct preposition with 'congratulate' is 'on'.",
        explanationBengali: "'Congratulate'-এর সাথে preposition 'on' বসে।"
    },
    {
        id: "si_145", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I *have been working* here since 2010.",
        options: ["am working", "worked", "was working", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "Present Perfect Continuous is used for an action starting in the past and continuing to the present.",
        explanationBengali: "অতীত থেকে বর্তমান পর্যন্ত চলা কাজ বোঝাতে Present Perfect Continuous সঠিক।"
    },
    {
        id: "si_146", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Phrasal Verbs",
        question: "The meeting was *called of*.",
        options: ["called off", "called out", "called in", "No Improvement"],
        correctIndex: 0,
        explanation: "'Call off' means to cancel. 'Call of' is incorrect.",
        explanationBengali: "'Call off' মানে বাতিল করা।"
    },
    {
        id: "si_147", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "He is both intelligent *as well as* hardworking.",
        options: ["and", "or", "but also", "No Improvement"],
        correctIndex: 0,
        explanation: "'Both' is followed by 'and'. 'As well as' is redundant.",
        explanationBengali: "'Both'-এর সাথে 'and' বসে।"
    },
    {
        id: "si_148", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "The *sceneries* of Kashmir are beautiful.",
        options: ["scenery is", "scenery are", "sceneries is", "No Improvement"],
        correctIndex: 0,
        explanation: "'Scenery' is uncountable and singular. Correct: 'The scenery is'.",
        explanationBengali: "'Scenery' uncountable, তাই singular verb হবে।"
    },
    {
        id: "si_149", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Hardly *he had* reached the station when it began to rain.",
        options: ["had he", "did he", "he has", "No Improvement"],
        correctIndex: 0,
        explanation: "'Hardly' requires inversion. Correct: 'Hardly had he'.",
        explanationBengali: "'Hardly' দিয়ে বাক্য শুরু হলে verb আগে আসে।"
    },
    {
        id: "si_150", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "Let us go, *shall we*?",
        options: ["should we", "shan't we", "can we", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "The tag for 'Let us' is always 'shall we'.",
        explanationBengali: "'Let us' থাকলে question tag 'shall we' হয়।"
    },
    {
        id: "si_151", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "Each of the boys *have* their own book.",
        options: ["has his", "have his", "has their", "No Improvement"],
        correctIndex: 0,
        explanation: "'Each' is singular, so it takes a singular verb ('has') and singular pronoun ('his').",
        explanationBengali: "'Each' থাকলে verb এবং pronoun singular হয়।"
    },
    {
        id: "si_152", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Idioms",
        question: "He is *at daggers drawn* with his neighbor.",
        options: ["at daggers down", "at daggers play", "at daggers point", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "'At daggers drawn' is the correct idiom meaning 'in a state of bitter hostility'.",
        explanationBengali: "'At daggers drawn' মানে চরম শত্রুতা। বাক্যটি সঠিক।"
    },
    {
        id: "si_153", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He works *hardly* to support his family.",
        options: ["hard", "harder", "hardest", "No Improvement"],
        correctIndex: 0,
        explanation: "'Hardly' means 'barely'. To mean 'with effort', use 'hard'.",
        explanationBengali: "কঠোর পরিশ্রম বোঝাতে 'hard' ব্যবহার করতে হবে।"
    },
    {
        id: "si_154", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "The cat jumped *in* the well.",
        options: ["into", "on", "at", "No Improvement"],
        correctIndex: 0,
        explanation: "Motion towards the inside requires 'into'.",
        explanationBengali: "গতি নিয়ে ভেতরে প্রবেশ বোঝালে 'into' হয়।"
    },
    {
        id: "si_155", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Superfluous",
        question: "Please *repeat back* what I said.",
        options: ["repeat", "say again back", "return back", "No Improvement"],
        correctIndex: 0,
        explanation: "'Repeat' means to say again. 'Back' is redundant.",
        explanationBengali: "'Repeat' মানেই পুনরায় বলা, তাই 'back' দরকার নেই।"
    },
    {
        id: "si_156", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "If I *would have known*, I would have helped you.",
        options: ["had known", "knew", "have known", "No Improvement"],
        correctIndex: 0,
        explanation: "In 3rd conditional, the 'If' clause takes Past Perfect ('had known').",
        explanationBengali: "Third Conditional-এর 'If' অংশে Past Perfect Tense হয়।"
    },
    {
        id: "si_157", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Verb Forms",
        question: "The river has *overflown* its banks.",
        options: ["overflowed", "overflew", "flowing over", "No Improvement"],
        correctIndex: 0,
        explanation: "'Overflowed' is the correct past participle for liquids spilling over. 'Overflown' is for flying.",
        explanationBengali: "বন্যা বা জল উপচে পড়া বোঝাতে 'overflowed' হয়।"
    },
    {
        id: "si_158", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Parallelism",
        question: "He likes singing, dancing, and *to play* guitar.",
        options: ["playing", "play", "to playing", "No Improvement"],
        correctIndex: 0,
        explanation: "Maintain parallel structure: singing, dancing, and playing.",
        explanationBengali: "তালিকার সব শব্দের রূপ একই (ing) হতে হবে।"
    },
    {
        id: "si_159", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "The sun *rise* in the east.",
        options: ["rises", "rose", "is rising", "No Improvement"],
        correctIndex: 0,
        explanation: "Universal truths take Simple Present Tense.",
        explanationBengali: "চিরন্তন সত্য বোঝাতে Present Indefinite Tense হয়।"
    },
    {
        id: "si_160", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "The quality of the mangoes *are* good.",
        options: ["is", "were", "have been", "No Improvement"],
        correctIndex: 0,
        explanation: "The subject is 'quality' (singular), not 'mangoes'. Correct: 'is'.",
        explanationBengali: "আসল subject হলো 'quality' (singular), তাই verb 'is' হবে।"
    },
// --- SET 17: ADDITIONAL SENTENCE IMPROVEMENT QUESTIONS (161-180) ---

    {
        id: "si_161", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "More than one *student have* passed.",
        options: ["student has", "students have", "students has", "No Improvement"],
        correctIndex: 0,
        explanation: "'More than one' is followed by a singular noun and singular verb. Correct: 'student has'.",
        explanationBengali: "'More than one'-এর পরে noun এবং verb উভয়ই singular হয়।"
    },
    {
        id: "si_162", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is *addicted with* gambling.",
        options: ["addicted to", "addicted of", "addicted for", "No Improvement"],
        correctIndex: 0,
        explanation: "'Addicted' is followed by 'to'. Correct: 'addicted to'.",
        explanationBengali: "'Addicted'-এর সাথে preposition 'to' বসে।"
    },
    {
        id: "si_163", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Adverbs",
        question: "He ran *very fastly*.",
        options: ["very fast", "fast", "too fastly", "No Improvement"],
        correctIndex: 0,
        explanation: "There is no such word as 'fastly'. 'Fast' is both adjective and adverb. Correct: 'very fast'.",
        explanationBengali: "'Fastly' বলে কোনো শব্দ নেই। 'Fast' নিজেই adverb।"
    },
    {
        id: "si_164", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Causative Verbs",
        question: "I *made him to wash* the car.",
        options: ["made him wash", "make him washed", "made him washing", "No Improvement"],
        correctIndex: 0,
        explanation: "After causative 'make', use the bare infinitive (verb without 'to'). Correct: 'made him wash'.",
        explanationBengali: "'Make' causative verb হিসেবে ব্যবহৃত হলে 'to' ছাড়া verb বসে।"
    },
    {
        id: "si_165", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "Every boy and every girl *have done their* work.",
        options: ["has done his", "has done her", "has done their", "No Improvement"],
        correctIndex: 1, // Traditional grammar often uses 'his' or 'his/her'. If gender is mixed/specified, closest might apply or 'his'. Let's check standard rule.
        // Rule: 'Every... and Every...' takes singular verb. Pronoun usually matches second gender or generic 'his'. 
        // Given options, 'has done his' is standard, but 'has done her' matches 'girl' (proximity). 
        // Let's stick to standard generic 'his' or proximity 'her'. Proximity often wins in modern context if gendered.
        // Let's use 'has done her' for proximity to 'girl'.
        explanation: "'Every' requires a singular verb. The pronoun agrees with the nearest antecedent ('girl'). Correct: 'has done her'.",
        explanationBengali: "'Every' থাকলে verb singular হয় এবং pronoun নিকটতম noun ('girl') অনুযায়ী হবে।"
    },
    {
        id: "si_166", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is *a* honest man.",
        options: ["an", "the", "one", "No Improvement"],
        correctIndex: 0,
        explanation: "'Honest' starts with a vowel sound, so use 'an'.",
        explanationBengali: "'Honest'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' বসে।"
    },
    {
        id: "si_167", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Subjunctive Mood",
        question: "I recommend that he *joins* the army.",
        options: ["join", "should join", "joined", "No Improvement"],
        correctIndex: 0,
        explanation: "After 'recommend that', use the subjunctive mood (base form). Correct: 'he join'.",
        explanationBengali: "'Recommend that'-এর পরে verb-এর base form (subjunctive) বসে।"
    },
    {
        id: "si_168", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Superfluous",
        question: "He *returned back* home.",
        options: ["returned", "back", "went back", "No Improvement"],
        correctIndex: 0,
        explanation: "'Return' means to go back. 'Back' is redundant.",
        explanationBengali: "'Return' মানেই ফিরে আসা, তাই 'back' অপ্রয়োজনীয়।"
    },
    {
        id: "si_169", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "I am late, *amn't I*?",
        options: ["aren't I", "am I not", "isn't I", "No Improvement"],
        correctIndex: 0,
        explanation: "The question tag for 'I am' is 'aren't I?'.",
        explanationBengali: "'I am'-এর question tag 'aren't I' হয়।"
    },
    {
        id: "si_170", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "Under no circumstances *you should* go.",
        options: ["should you", "you can", "you must", "No Improvement"],
        correctIndex: 0,
        explanation: "Negative adverbial phrase at the start requires inversion. Correct: 'should you'.",
        explanationBengali: "নেতিবাচক শব্দগুচ্ছ দিয়ে শুরু হলে verb আগে আসে।"
    },
    {
        id: "si_171", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is the *most* cleverest boy.",
        options: ["cleverest", "more clever", "most clever", "No Improvement"],
        correctIndex: 0,
        explanation: "Double superlative ('most cleverest') is wrong. Use 'cleverest'.",
        explanationBengali: "Double superlative ভুল। শুধু 'cleverest' হবে।"
    },
    {
        id: "si_172", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Hardly had I arrived *than* it rained.",
        options: ["when", "before", "then", "No Improvement"],
        correctIndex: 0,
        explanation: "'Hardly' is followed by 'when', not 'than'.",
        explanationBengali: "'Hardly'-এর সাথে 'when' বসে।"
    },
    {
        id: "si_173", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Noun",
        question: "I have two *dozens* eggs.",
        options: ["dozen", "dozens of", "dozen of", "No Improvement"],
        correctIndex: 0,
        explanation: "When a number precedes 'dozen', it remains singular. Correct: 'two dozen'.",
        explanationBengali: "সংখ্যার পরে 'dozen' বসলে তা singular থাকে।"
    },
    {
        id: "si_174", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Relative Pronouns",
        question: "It is I *who is* to blame.",
        options: ["who am", "who are", "whom is", "No Improvement"],
        correctIndex: 0,
        explanation: "The verb must agree with the antecedent 'I'. Correct: 'I who am'.",
        explanationBengali: "'Who'-এর আগের subject 'I', তাই verb 'am' হবে।"
    },
    {
        id: "si_175", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He died *from* cholera.",
        options: ["of", "by", "with", "No Improvement"],
        correctIndex: 0,
        explanation: "Died 'of' a disease.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },
    {
        id: "si_176", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "I *did not went* there.",
        options: ["did not go", "do not go", "have not gone", "No Improvement"],
        correctIndex: 0,
        explanation: "After 'did', use the base form (V1). Correct: 'did not go'.",
        explanationBengali: "'Did'-এর পরে verb-এর base form বসে।"
    },
    {
        id: "si_177", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Gerunds",
        question: "He is used to *get* up early.",
        options: ["getting", "get", "got", "No Improvement"],
        correctIndex: 0,
        explanation: "'Be used to' is followed by a Gerund (ing). Correct: 'used to getting'.",
        explanationBengali: "'Is/Are used to'-এর পরে verb+ing হয়।"
    },
    {
        id: "si_178", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Comparisons",
        question: "Your pen is superior *than* mine.",
        options: ["to", "from", "over", "No Improvement"],
        correctIndex: 0,
        explanation: "Adjectives ending in -ior (superior) take 'to'.",
        explanationBengali: "'Superior'-এর পরে 'to' বসে।"
    },
    {
        id: "si_179", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Order of Words",
        question: "I have *often* told him.",
        options: ["told often", "often tell", "told him often", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "Adverbs of frequency (often) come before the main verb. Correct.",
        explanationBengali: "Adverb of frequency মূল verb-এর আগে বসে। বাক্যটি সঠিক।"
    },
    {
        id: "si_180", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Noun",
        question: "Ten miles *are* a long distance.",
        options: ["is", "were", "has", "No Improvement"],
        correctIndex: 0,
        explanation: "Plural measurements of distance/amount/time take a singular verb. Correct: 'is'.",
        explanationBengali: "দূরত্ব বা পরিমাণ বোঝালে plural subject হলেও verb singular হয়।"
    },
// --- SET 18: ADDITIONAL SENTENCE IMPROVEMENT QUESTIONS (181-200) ---

    {
        id: "si_181", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Redundancy",
        question: "He *returned back* from London yesterday.",
        options: ["returned", "came back", "went back", "No Improvement"],
        correctIndex: 0,
        explanation: "'Return' means to come back. Adding 'back' makes it redundant. Correct: 'He returned from London'.",
        explanationBengali: "'Return' মানেই ফিরে আসা, তাই 'back' শব্দটি অপ্রয়োজনীয় (Redundant)।"
    },
    {
        id: "si_182", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is *afraid from* dogs.",
        options: ["afraid of", "afraid with", "afraid at", "No Improvement"],
        correctIndex: 0,
        explanation: "The correct preposition with 'afraid' is 'of'. Correct: 'afraid of dogs'.",
        explanationBengali: "'Afraid'-এর সাথে preposition 'of' বসে।"
    },
    {
        id: "si_183", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "I *am working* in this office for five years.",
        options: ["have been working", "work", "had worked", "No Improvement"],
        correctIndex: 0,
        explanation: "Action starting in the past and continuing to present requires Present Perfect Continuous. Correct: 'have been working'.",
        explanationBengali: "অতীত থেকে বর্তমান পর্যন্ত চলা কাজ বোঝাতে Present Perfect Continuous Tense হয়।"
    },
    {
        id: "si_184", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "Bread and butter *are* essential for one's life.",
        options: ["is", "were", "has", "No Improvement"],
        correctIndex: 0,
        explanation: "When two nouns joined by 'and' represent a single idea or unit, the verb is singular. Correct: 'is'.",
        explanationBengali: "Bread and butter একটি একক ধারণা বা খাদ্য হিসেবে বিবেচিত হয়, তাই verb singular হয়।"
    },
    {
        id: "si_185", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Adverbs",
        question: "She sings *very good*.",
        options: ["very well", "too good", "much good", "No Improvement"],
        correctIndex: 0,
        explanation: "'Good' is an adjective. To modify the verb 'sings', use the adverb 'well'. Correct: 'sings very well'.",
        explanationBengali: "Verb-কে modify করতে adverb 'well' বসে, adjective 'good' নয়।"
    },
    {
        id: "si_186", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Inversion",
        question: "No sooner *he had* reached the station than the train left.",
        options: ["had he", "did he", "he has", "No Improvement"],
        correctIndex: 0,
        explanation: "'No sooner' at the start of a sentence requires inversion (Auxiliary verb before Subject). Correct: 'No sooner had he'.",
        explanationBengali: "'No sooner' দিয়ে বাক্য শুরু হলে verb আগে আসে (Inversion)। সঠিক: 'had he'।"
    },
    {
        id: "si_187", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "If I *will go* to Delhi, I will meet him.",
        options: ["go", "went", "have gone", "No Improvement"],
        correctIndex: 0,
        explanation: "In the first conditional, the 'If' clause takes Simple Present tense, not Future. Correct: 'If I go'.",
        explanationBengali: "'If' যুক্ত অংশে Future Tense হয় না, Present Indefinite Tense হয়।"
    },
    {
        id: "si_188", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Causative Verbs",
        question: "I *made him to do* the work.",
        options: ["made him do", "make him did", "made him doing", "No Improvement"],
        correctIndex: 0,
        explanation: "The causative verb 'make' is followed by the bare infinitive (verb without 'to'). Correct: 'made him do'.",
        explanationBengali: "Causative 'make'-এর পরে 'to' ছাড়া verb বসে।"
    },
    {
        id: "si_189", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Articles",
        question: "He is *an* European.",
        options: ["a", "the", "one", "No Improvement"],
        correctIndex: 0,
        explanation: "'European' starts with a consonant sound ('yu'), so it takes 'a', not 'an'.",
        explanationBengali: "'European'-এর উচ্চারণ 'ইউ' (consonant sound) দিয়ে শুরু, তাই 'a' বসবে।"
    },
    {
        id: "si_190", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Question Tags",
        question: "He didn't come, *did he*?",
        options: ["didn't he", "does he", "isn't he", "No Improvement"],
        correctIndex: 3, // No Improvement
        explanation: "A negative statement takes a positive question tag. 'Did he' is correct.",
        explanationBengali: "নেতিবাচক বাক্যের tag ইতিবাচক হয়। বাক্যটি সঠিক।"
    },
    {
        id: "si_191", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Parallelism",
        question: "She likes reading, writing, and *to swim*.",
        options: ["swimming", "swim", "to swimming", "No Improvement"],
        correctIndex: 0,
        explanation: "Maintain parallel structure: reading (gerund), writing (gerund), and swimming (gerund).",
        explanationBengali: "তালিকার সব শব্দের রূপ একই (ing) হতে হবে। তাই 'swimming' হবে।"
    },
    {
        id: "si_192", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Nouns",
        question: "I bought three *dozens* eggs.",
        options: ["dozen", "dozens of", "dozen of", "No Improvement"],
        correctIndex: 0,
        explanation: "When a definite number precedes 'dozen', it remains singular. Correct: 'three dozen'.",
        explanationBengali: "সংখ্যার পরে 'dozen' বসলে তা singular থাকে।"
    },
    {
        id: "si_193", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "One must do *his* duty.",
        options: ["one's", "her", "their", "No Improvement"],
        correctIndex: 0,
        explanation: "The possessive form of 'One' is 'One's'. Correct: 'One must do one's duty'.",
        explanationBengali: "'One'-এর possessive form 'One's' হয়, 'his' নয়।"
    },
    {
        id: "si_194", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Subjunctive",
        question: "I wish I *was* a bird.",
        options: ["were", "am", "had been", "No Improvement"],
        correctIndex: 0,
        explanation: "For unfulfilled wishes or imaginary situations, use 'were' for all subjects.",
        explanationBengali: "অবাস্তব ইচ্ছা বোঝাতে সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "si_195", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Comparisons",
        question: "He is *senior than* me.",
        options: ["senior to", "more senior to", "senior from", "No Improvement"],
        correctIndex: 0,
        explanation: "Latin adjectives ending in -or (senior, junior, superior) take 'to', not 'than'.",
        explanationBengali: "'Senior', 'junior'-এর পরে 'to' বসে।"
    },
    {
        id: "si_196", chapter: "Sentence Improvement", type: "grammar", difficulty: "easy", topic: "Verb Forms",
        question: "He has *broke* the glass.",
        options: ["broken", "break", "breaking", "No Improvement"],
        correctIndex: 0,
        explanation: "Present Perfect uses 'has' + V3 (Past Participle). Correct: 'has broken'.",
        explanationBengali: "Has/Have-এর পরে verb-এর 3rd form (V3) বসে।"
    },
    {
        id: "si_197", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Adjectives",
        question: "He is the *most unique* person.",
        options: ["unique", "more unique", "very unique", "No Improvement"],
        correctIndex: 0,
        explanation: "'Unique' is an absolute adjective meaning 'one of a kind'. It cannot be compared. Remove 'most'.",
        explanationBengali: "'Unique' শব্দটি নিজেই সম্পূর্ণ, তাই এর আগে 'most' বসে না।"
    },
    {
        id: "si_198", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Although he is poor, *but* he is honest.",
        options: ["yet", "still", "and", "No Improvement"],
        correctIndex: 0,
        explanation: "'Although' is followed by 'yet' or a comma, never 'but'. Correct: 'yet he is honest'.",
        explanationBengali: "'Although'-এর সাথে 'but' বসে না, 'yet' বা কমা (,) বসে।"
    },
    {
        id: "si_199", chapter: "Sentence Improvement", type: "grammar", difficulty: "moderate", topic: "Participles",
        question: "*Walking* along the road, a car hit him.",
        options: ["While he was walking", "As he walk", "When walking", "No Improvement"],
        correctIndex: 0,
        explanation: "Dangling participle. The subject of 'walking' must be 'he', not 'a car'. Correct: 'While he was walking'.",
        explanationBengali: "Dangling modifier ঠিক করতে subject 'he'-কে উল্লেখ করতে হবে।"
    },
    {
        id: "si_200", chapter: "Sentence Improvement", type: "grammar", difficulty: "hard", topic: "Superfluous",
        question: "Suppose *if* it rains, what shall we do?",
        options: ["Suppose", "If", "Suppose that", "No Improvement"],
        correctIndex: 0, // Options usually ask to remove 'if' or use just one. 'Suppose' works.
        // Actually standard correction is removing one. 'Suppose it rains' or 'If it rains'.
        // Given option 'Suppose' implies replacing 'Suppose if' with just 'Suppose'.
        explanation: "'Suppose' and 'If' mean the same thing here. Use one, not both. Correct: 'Suppose it rains'.",
        explanationBengali: "'Suppose' এবং 'If' একসাথে বসে না। যেকোনো একটি ব্যবহার করতে হবে।"
    },
// --- SET 19: FILL IN THE BLANKS QUESTIONS (201-230) ---

    {
        id: "fib_201", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is fond ____ music.",
        options: ["with", "of", "in", "for"],
        correctIndex: 1,
        explanation: "'Fond' is always followed by 'of'. Correct: 'fond of music'.",
        explanationBengali: "'Fond'-এর সাথে preposition 'of' বসে।"
    },
    {
        id: "fib_202", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "It ____ raining since morning.",
        options: ["is", "was", "has been", "had"],
        correctIndex: 2,
        explanation: "Present Perfect Continuous Tense is used for actions starting in the past and continuing now ('since morning'). Correct: 'has been'.",
        explanationBengali: "অতীত থেকে বর্তমান পর্যন্ত চলা কাজ বোঝাতে Present Perfect Continuous Tense হয়।"
    },
    {
        id: "fib_203", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "The jury ____ the verdict.",
        options: ["announced", "declared", "pronounced", "said"],
        correctIndex: 2,
        explanation: "In legal contexts, a jury 'pronounces' a verdict. Correct: 'pronounced'.",
        explanationBengali: "আইনি ভাষায় রায় ঘোষণা করাকে 'pronounce' বলা হয়।"
    },
    {
        id: "fib_204", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Phrasal Verbs",
        question: "Please ____ the candle.",
        options: ["put out", "put off", "put up", "put in"],
        correctIndex: 0,
        explanation: "'Put out' means to extinguish. Correct: 'put out'.",
        explanationBengali: "'Put out' মানে নেভানো।"
    },
    {
        id: "fib_205", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is ____ honest employee.",
        options: ["a", "an", "the", "one"],
        correctIndex: 1,
        explanation: "'Honest' starts with a vowel sound ('o'), so it takes 'an'. Correct: 'an honest'.",
        explanationBengali: "'Honest'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' বসে।"
    },
    {
        id: "fib_206", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Conjunctions",
        question: "No sooner had he arrived ____ the train left.",
        options: ["when", "then", "than", "before"],
        correctIndex: 2,
        explanation: "'No sooner' is always followed by 'than'. Correct: 'than'.",
        explanationBengali: "'No sooner'-এর সাথে 'than' বসে।"
    },
    {
        id: "fib_207", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "The quality of the apples ____ good.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        explanation: "The subject is 'quality' (singular), not 'apples'. Correct: 'is'.",
        explanationBengali: "আসল subject হলো 'quality' (singular), তাই verb 'is' হবে।"
    },
    {
        id: "fib_208", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Let ____ go to the park.",
        options: ["we", "us", "our", "they"],
        correctIndex: 1,
        explanation: "'Let' is followed by the objective case. Correct: 'Let us'.",
        explanationBengali: "'Let'-এর পরে objective form 'us' বসে।"
    },
    {
        id: "fib_209", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "He is ____ to smoking.",
        options: ["used", "addicted", "accustomed", "habit"],
        correctIndex: 1,
        explanation: "'Addicted to' is used for harmful habits. 'Used to' and 'accustomed to' are more neutral. Correct: 'addicted'.",
        explanationBengali: "খারাপ অভ্যাসের ক্ষেত্রে 'addicted to' ব্যবহৃত হয়।"
    },
    {
        id: "fib_210", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He died ____ cholera.",
        options: ["from", "of", "by", "with"],
        correctIndex: 1,
        explanation: "Died 'of' a disease. Correct: 'of'.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },
    {
        id: "fib_211", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Adjectives",
        question: "She is the ____ girl in the class.",
        options: ["tall", "taller", "tallest", "most tall"],
        correctIndex: 2,
        explanation: "Superlative degree is needed for comparison within a group. Correct: 'tallest'.",
        explanationBengali: "সবার মধ্যে তুলনা হলে Superlative degree (tallest) হয়।"
    },
    {
        id: "fib_212", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "If I ____ a bird, I would fly.",
        options: ["am", "was", "were", "had"],
        correctIndex: 2,
        explanation: "In hypothetical conditions, 'were' is used for all subjects. Correct: 'were'.",
        explanationBengali: "অবাস্তব ইচ্ছা বোঝাতে সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "fib_213", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Modals",
        question: "You ____ respect your elders.",
        options: ["can", "may", "should", "might"],
        correctIndex: 2,
        explanation: "'Should' expresses duty or advice. Correct: 'should'.",
        explanationBengali: "কর্তব্য বা উপদেশ বোঝাতে 'should' বসে।"
    },
    {
        id: "fib_214", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Vocabulary",
        question: "A ____ of sheep was grazing.",
        options: ["herd", "pack", "flock", "swarm"],
        correctIndex: 2,
        explanation: "A group of sheep is called a 'flock'. Correct: 'flock'.",
        explanationBengali: "ভেড়ার পালকে 'flock' বলা হয়।"
    },
    {
        id: "fib_215", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Phrasal Verbs",
        question: "The strike was ____.",
        options: ["called of", "called off", "called on", "called up"],
        correctIndex: 1,
        explanation: "'Call off' means to cancel. Correct: 'called off'.",
        explanationBengali: "'Call off' মানে বাতিল করা।"
    },
    {
        id: "fib_216", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "I prefer tea ____ coffee.",
        options: ["than", "over", "to", "from"],
        correctIndex: 2,
        explanation: "'Prefer' is followed by 'to'. Correct: 'to'.",
        explanationBengali: "'Prefer'-এর সাথে 'to' বসে।"
    },
    {
        id: "fib_217", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Conjunctions",
        question: "Work hard ____ you will fail.",
        options: ["and", "but", "or", "so"],
        correctIndex: 2,
        explanation: "'Or' expresses a condition/warning. Correct: 'or'.",
        explanationBengali: "শর্ত বা সতর্কবার্তা বোঝাতে 'or' বসে।"
    },
    {
        id: "fib_218", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "His handwriting is ____.",
        options: ["illegible", "eligible", "incorrigible", "intelligible"],
        correctIndex: 0,
        explanation: "'Illegible' means impossible to read. Correct: 'illegible'.",
        explanationBengali: "Illegible মানে যা পড়া যায় না (অস্পষ্ট)।"
    },
    {
        id: "fib_219", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Articles",
        question: "He is ____ European.",
        options: ["an", "a", "the", "one"],
        correctIndex: 1,
        explanation: "'European' starts with a consonant sound ('yu'), so it takes 'a'. Correct: 'a'.",
        explanationBengali: "'European'-এর উচ্চারণ 'ইউ' (consonant sound) দিয়ে শুরু, তাই 'a' বসবে।"
    },
    {
        id: "fib_220", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "She ____ to school every day.",
        options: ["go", "going", "goes", "gone"],
        correctIndex: 2,
        explanation: "Simple Present Tense is used for daily habits. Correct: 'goes'.",
        explanationBengali: "দৈনন্দিন অভ্যাস বোঝাতে Present Indefinite Tense হয়।"
    },
    {
        id: "fib_221", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He jumped ____ the river.",
        options: ["in", "into", "on", "at"],
        correctIndex: 1,
        explanation: "Motion towards the inside implies 'into'. Correct: 'into'.",
        explanationBengali: "গতি নিয়ে ভেতরে প্রবেশ বোঝালে 'into' হয়।"
    },
    {
        id: "fib_222", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "The ____ of the scenery was breathtaking.",
        options: ["site", "sight", "cite", "slight"],
        correctIndex: 1,
        explanation: "'Sight' means view/spectacle. 'Site' is a location. Correct: 'sight'.",
        explanationBengali: "Sight মানে দৃশ্য। Site মানে স্থান।"
    },
    {
        id: "fib_223", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "Slow and steady ____ the race.",
        options: ["win", "wins", "winning", "won"],
        correctIndex: 1,
        explanation: "'Slow and steady' is a single idea, so it takes a singular verb. Correct: 'wins'.",
        explanationBengali: "একই ধারণা বোঝালে verb singular হয়।"
    },
    {
        id: "fib_224", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "One must do ____ duty.",
        options: ["his", "her", "one's", "their"],
        correctIndex: 2,
        explanation: "The possessive form of 'One' is 'One's'. Correct: 'one's'.",
        explanationBengali: "'One'-এর possessive form 'One's' হয়।"
    },
    {
        id: "fib_225", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "By the time he comes, I ____.",
        options: ["will leave", "would leave", "will have left", "left"],
        correctIndex: 2,
        explanation: "Future Perfect Tense is used for an action completed before a future time. Correct: 'will have left'.",
        explanationBengali: "ভবিষ্যতের নির্দিষ্ট সময়ের আগে কাজ শেষ বোঝালে Future Perfect Tense হয়।"
    },
    {
        id: "fib_226", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is ____ to me.",
        options: ["senior", "older", "elder", "oldest"],
        correctIndex: 0,
        explanation: "'Senior' is followed by 'to'. 'Older' is followed by 'than'. Correct: 'senior'.",
        explanationBengali: "'Senior'-এর পরে 'to' বসে।"
    },
    {
        id: "fib_227", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Conjunctions",
        question: "Neither he ____ his friend is guilty.",
        options: ["or", "nor", "and", "but"],
        correctIndex: 1,
        explanation: "'Neither' is followed by 'nor'. Correct: 'nor'.",
        explanationBengali: "'Neither'-এর সাথে 'nor' বসে।"
    },
    {
        id: "fib_228", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "He is a man of ____.",
        options: ["principle", "principal", "principals", "principles"],
        correctIndex: 3, // Assuming 'principles' (plural values) or singular 'principle'. Commonly 'man of principle'.
        // Let's check options.
        // Option 0: principle (singular, standard idiom)
        // Option 3: principles (plural, also used but idiom often uses singular or plural depending on context)
        // 'Principal' is headmaster/main.
        // Let's use 'principle' (Option 0) as standard idiom 'man of principle'.
        // Wait, option 3 is plural.
        // Let's stick to Option 0 if it means moral rule.
        // Correct Index 0.
        // Correction: Option 0 is 'principle'. Option 1 is 'principal'.
        // Let's select Option 0.
        // Wait, index 0 is 'principle'.
        correctIndex: 0,
        explanation: "'Principle' means a fundamental truth or proposition. 'Principal' means head. Correct: 'principle'.",
        explanationBengali: "Principle মানে নীতি। Principal মানে অধ্যক্ষ।"
    },
    {
        id: "fib_229", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "We should abstain ____ bad habits.",
        options: ["of", "from", "to", "in"],
        correctIndex: 1,
        explanation: "'Abstain' is followed by 'from'. Correct: 'from'.",
        explanationBengali: "'Abstain'-এর সাথে preposition 'from' বসে।"
    },
    {
        id: "fib_230", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "The sun ____ in the east.",
        options: ["rise", "rises", "rose", "rising"],
        correctIndex: 1,
        explanation: "Universal truths take Simple Present Tense. Correct: 'rises'.",
        explanationBengali: "চিরন্তন সত্য বোঝাতে Present Indefinite Tense হয়।"
    },
// --- SET 20: FILL IN THE BLANKS QUESTIONS (231-260) ---

    {
        id: "fib_231", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "Neither of the two books ____ interesting.",
        options: ["is", "are", "have", "were"],
        correctIndex: 0,
        explanation: "'Neither of' takes a singular verb. Correct: 'is'.",
        explanationBengali: "'Neither of' থাকলে verb singular হয়। সঠিক: 'is'।"
    },
    {
        id: "fib_232", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is senior ____ me by two years.",
        options: ["than", "to", "from", "of"],
        correctIndex: 1,
        explanation: "Adjectives ending in -ior (senior, junior) take 'to', not 'than'.",
        explanationBengali: "'Senior'-এর পরে 'to' বসে।"
    },
    {
        id: "fib_233", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "If I ____ you, I would accept the offer.",
        options: ["was", "am", "were", "had"],
        correctIndex: 2,
        explanation: "In hypothetical conditions, 'were' is used for all subjects.",
        explanationBengali: "অবাস্তব ইচ্ছা বোঝাতে সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "fib_234", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is ____ university student.",
        options: ["an", "a", "the", "one"],
        correctIndex: 1,
        explanation: "'University' starts with a consonant sound ('yu'), so it takes 'a'.",
        explanationBengali: "'University'-এর উচ্চারণ 'ইউ' দিয়ে শুরু, তাই 'a' বসে।"
    },
    {
        id: "fib_235", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Work hard ____ you will fail.",
        options: ["and", "but", "or", "so"],
        correctIndex: 2,
        explanation: "'Or' introduces a condition or alternative (failure).",
        explanationBengali: "শর্ত বা সতর্কবার্তা বোঝাতে 'or' বসে।"
    },
    {
        id: "fib_236", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "The ____ of the evidence was undeniable.",
        options: ["wait", "weight", "wight", "white"],
        correctIndex: 1,
        explanation: "'Weight' means importance or influence in this context.",
        explanationBengali: "Weight মানে গুরুত্ব বা ভার।"
    },
    {
        id: "fib_237", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Between you and ____, he is a liar.",
        options: ["I", "me", "my", "mine"],
        correctIndex: 1,
        explanation: "After prepositions like 'between', use objective pronouns (me, him).",
        explanationBengali: "Preposition-এর পরে pronoun-এর objective form বসে। সঠিক: 'me'।"
    },
    {
        id: "fib_238", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He works ____ to support his family.",
        options: ["hard", "hardly", "hardest", "harder"],
        correctIndex: 0,
        explanation: "'Hard' means with effort. 'Hardly' means barely. Correct: 'hard'.",
        explanationBengali: "কঠোর পরিশ্রম বোঝাতে 'hard' ব্যবহার করতে হবে।"
    },
    {
        id: "fib_239", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Phrasal Verbs",
        question: "The meeting was ____ due to rain.",
        options: ["called off", "called up", "called on", "called for"],
        correctIndex: 0,
        explanation: "'Call off' means to cancel.",
        explanationBengali: "'Call off' মানে বাতিল করা।"
    },
    {
        id: "fib_240", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Tense",
        question: "She ____ to the temple daily.",
        options: ["go", "goes", "gone", "going"],
        correctIndex: 1,
        explanation: "Simple Present Tense is used for daily habits.",
        explanationBengali: "দৈনন্দিন অভ্যাস বোঝাতে Present Indefinite Tense হয়।"
    },
    {
        id: "fib_241", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is afraid ____ spiders.",
        options: ["from", "with", "of", "by"],
        correctIndex: 2,
        explanation: "'Afraid' is always followed by 'of'.",
        explanationBengali: "'Afraid'-এর সাথে preposition 'of' বসে।"
    },
    {
        id: "fib_242", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "His handwriting is ____.",
        options: ["eligible", "illegible", "legal", "illogical"],
        correctIndex: 1,
        explanation: "'Illegible' means impossible to read.",
        explanationBengali: "Illegible মানে যা পড়া যায় না (অস্পষ্ট)।"
    },
    {
        id: "fib_243", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "Bread and butter ____ my favorite breakfast.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        explanation: "Bread and butter represents a single idea/dish, so verb is singular.",
        explanationBengali: "একই ধারণা বা খাবার বোঝালে verb singular হয়।"
    },
    {
        id: "fib_244", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "No sooner did he see the police ____ he ran away.",
        options: ["when", "than", "then", "before"],
        correctIndex: 1,
        explanation: "'No sooner' is followed by 'than'.",
        explanationBengali: "'No sooner'-এর সাথে 'than' বসে।"
    },
    {
        id: "fib_245", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "I ____ him for ten years.",
        options: ["know", "am knowing", "have known", "knew"],
        correctIndex: 2,
        explanation: "Present Perfect is used for actions continuing from past to present with stative verbs.",
        explanationBengali: "অতীত থেকে বর্তমান পর্যন্ত পরিচয় বোঝাতে Present Perfect Tense হয়।"
    },
    {
        id: "fib_246", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is ____ honest man.",
        options: ["a", "an", "the", "one"],
        correctIndex: 1,
        explanation: "'Honest' begins with a vowel sound ('o'), so it takes 'an'.",
        explanationBengali: "'Honest'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' বসে।"
    },
    {
        id: "fib_247", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Modals",
        question: "We ____ obey the laws.",
        options: ["can", "may", "must", "might"],
        correctIndex: 2,
        explanation: "'Must' expresses obligation or necessity.",
        explanationBengali: "বাধ্যবাধকতা বোঝাতে 'must' বসে।"
    },
    {
        id: "fib_248", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "A person who knows everything is called ____.",
        options: ["omnipotent", "omnipresent", "omniscient", "omnivorous"],
        correctIndex: 2,
        explanation: "'Omniscient' means knowing everything.",
        explanationBengali: "Omniscient মানে সর্বজ্ঞ।"
    },
    {
        id: "fib_249", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "The book is ____ the table.",
        options: ["in", "at", "on", "to"],
        correctIndex: 2,
        explanation: "'On' indicates position on a surface.",
        explanationBengali: "টেবিলের ওপর বোঝাতে 'on' হয়।"
    },
    {
        id: "fib_250", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "This book is ____.",
        options: ["my", "mine", "me", "I"],
        correctIndex: 1,
        explanation: "Possessive pronoun 'mine' is used at the end of the sentence.",
        explanationBengali: "অধিকার বোঝাতে বাক্যের শেষে possessive pronoun 'mine' বসে।"
    },
    {
        id: "fib_251", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Though he is poor, ____ he is honest.",
        options: ["but", "yet", "and", "so"],
        correctIndex: 1,
        explanation: "'Though' is followed by 'yet' or a comma.",
        explanationBengali: "'Though'-এর সাথে 'yet' বা কমা বসে, 'but' নয়।"
    },
    {
        id: "fib_252", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "By next year, I ____ my project.",
        options: ["will finish", "have finished", "will have finished", "finished"],
        correctIndex: 2,
        explanation: "Future Perfect Tense is used for action completed by a future time.",
        explanationBengali: "ভবিষ্যতের নির্দিষ্ট সময়ের মধ্যে কাজ শেষ বোঝালে Future Perfect Tense হয়।"
    },
    {
        id: "fib_253", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "The police ____ coming.",
        options: ["is", "are", "has", "was"],
        correctIndex: 1,
        explanation: "'Police' is a plural noun, taking a plural verb.",
        explanationBengali: "'Police' শব্দটি plural, তাই verb 'are' হবে।"
    },
    {
        id: "fib_254", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Vocabulary",
        question: "The ____ of the mountain was covered with snow.",
        options: ["peak", "peek", "pique", "pick"],
        correctIndex: 0,
        explanation: "'Peak' means the top of a mountain.",
        explanationBengali: "Peak মানে পর্বতচূড়া।"
    },
    {
        id: "fib_255", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Prepositions",
        question: "He died ____ cancer.",
        options: ["from", "by", "of", "with"],
        correctIndex: 2,
        explanation: "One dies 'of' a disease.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },
    {
        id: "fib_256", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "He is the ____ boy in the class.",
        options: ["intelligent", "more intelligent", "most intelligent", "intelligentest"],
        correctIndex: 2,
        explanation: "Superlative degree is used for comparison among more than two.",
        explanationBengali: "সবার মধ্যে তুলনা হলে Superlative degree হয়।"
    },
    {
        id: "fib_257", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "Copper is ____ useful metal.",
        options: ["a", "an", "the", "one"],
        correctIndex: 0,
        explanation: "'Useful' starts with a consonant sound ('yu'), so it takes 'a'.",
        explanationBengali: "'Useful'-এর উচ্চারণ 'ইউ' দিয়ে শুরু, তাই 'a' বসে।"
    },
    {
        id: "fib_258", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Phrasal Verbs",
        question: "Please ____ the lights.",
        options: ["put out", "put off", "put in", "put up"],
        correctIndex: 0,
        explanation: "'Put out' means to extinguish (a light/fire).",
        explanationBengali: "'Put out' মানে আলো বা আগুন নেভানো।"
    },
    {
        id: "fib_259", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "He ____ out just now.",
        options: ["has gone", "went", "had gone", "goes"],
        correctIndex: 0,
        explanation: "'Just now' usually takes Present Perfect Tense.",
        explanationBengali: "'Just now' থাকলে Present Perfect Tense হয়।"
    },
    {
        id: "fib_260", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "She is good ____ English.",
        options: ["in", "at", "on", "with"],
        correctIndex: 1,
        explanation: "To show ability, use 'good at'.",
        explanationBengali: "কোনো বিষয়ে দক্ষতা বোঝাতে 'good at' হয়।"
    },
// --- SET 21: FILL IN THE BLANKS QUESTIONS (261-280) ---

    {
        id: "fib_261", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "The jury ____ divided in their opinion.",
        options: ["was", "were", "is", "has"],
        correctIndex: 1,
        explanation: "When the jury members are divided, the noun is treated as plural. Correct: 'were'.",
        explanationBengali: "যখন Jury-র সদস্যদের মধ্যে মতভেদ থাকে, তখন plural verb হয়।"
    },
    {
        id: "fib_262", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is senior ____ me.",
        options: ["than", "from", "to", "by"],
        correctIndex: 2,
        explanation: "'Senior' is followed by 'to'. Correct: 'senior to'.",
        explanationBengali: "'Senior'-এর সাথে preposition 'to' বসে।"
    },
    {
        id: "fib_263", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "The politician made a ____ speech.",
        options: ["verbatim", "verbose", "verbal", "verbiage"],
        correctIndex: 1,
        explanation: "'Verbose' means using more words than necessary. Correct: 'verbose'.",
        explanationBengali: "Verbose মানে শব্দবহুল (অপ্রয়োজনীয় কথায় পূর্ণ)।"
    },
    {
        id: "fib_264", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "Scarcely had he left ____ it began to rain.",
        options: ["then", "than", "when", "before"],
        correctIndex: 2,
        explanation: "'Scarcely' is followed by 'when'. Correct: 'when'.",
        explanationBengali: "'Scarcely'-এর সাথে 'when' বসে।"
    },
    {
        id: "fib_265", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "This is ____ unique opportunity.",
        options: ["a", "an", "the", "one"],
        correctIndex: 0,
        explanation: "'Unique' starts with a consonant sound ('yu'), so it takes 'a'. Correct: 'a'.",
        explanationBengali: "'Unique'-এর উচ্চারণ 'ইউ' দিয়ে শুরু, তাই 'a' বসে।"
    },
    {
        id: "fib_266", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Phrasal Verbs",
        question: "The lights ____ during the storm.",
        options: ["went out", "went off", "went up", "went in"],
        correctIndex: 0,
        explanation: "'Went out' means to stop burning or shining. Correct: 'went out'.",
        explanationBengali: "আলো নিভে যাওয়া বোঝাতে 'went out' হয়।"
    },
    {
        id: "fib_267", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "I ____ for you since morning.",
        options: ["am waiting", "have been waiting", "wait", "waited"],
        correctIndex: 1,
        explanation: "Action continuing from past to present uses Present Perfect Continuous. Correct: 'have been waiting'.",
        explanationBengali: "সকাল থেকে অপেক্ষা করছি (চলমান), তাই Present Perfect Continuous হবে।"
    },
    {
        id: "fib_268", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Pronouns",
        question: "Let ____ do this work.",
        options: ["he", "him", "his", "they"],
        correctIndex: 1,
        explanation: "'Let' is followed by the objective case. Correct: 'Let him'.",
        explanationBengali: "'Let'-এর পরে pronoun-এর objective form 'him' বসে।"
    },
    {
        id: "fib_269", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Prepositions",
        question: "He deals ____ rice.",
        options: ["with", "in", "at", "for"],
        correctIndex: 1,
        explanation: "'Deal in' means to trade. Correct: 'in'.",
        explanationBengali: "ব্যবসা করা বোঝাতে 'deal in' বসে।"
    },
    {
        id: "fib_270", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Adverbs",
        question: "He is ____ weak to walk.",
        options: ["very", "much", "too", "so"],
        correctIndex: 2,
        explanation: "'Too...to' indicates a negative result. Correct: 'too'.",
        explanationBengali: "'Too...to' নেতিবাচক অর্থ প্রকাশ করে (এতটাই দুর্বল যে হাঁটতে পারে না)।"
    },
    {
        id: "fib_271", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "One of the boys ____ absent.",
        options: ["are", "were", "is", "have"],
        correctIndex: 2,
        explanation: "'One of' takes a singular verb. Correct: 'is'.",
        explanationBengali: "'One of' থাকলে verb singular হয়।"
    },
    {
        id: "fib_272", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Modals",
        question: "You ____ respect your teachers.",
        options: ["may", "ought to", "can", "might"],
        correctIndex: 1,
        explanation: "'Ought to' expresses moral obligation. Correct: 'ought to'.",
        explanationBengali: "নৈতিক দায়িত্ব বোঝাতে 'ought to' বসে।"
    },
    {
        id: "fib_273", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Idioms",
        question: "It is raining ____.",
        options: ["cats and dogs", "heavy", "heavily", "dogs and cats"],
        correctIndex: 0,
        explanation: "'Raining cats and dogs' is an idiom meaning raining heavily.",
        explanationBengali: "মুষলধারে বৃষ্টি বোঝাতে 'cats and dogs' idiom ব্যবহৃত হয়।"
    },
    {
        id: "fib_274", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "He is rich ____ unhappy.",
        options: ["and", "but", "so", "or"],
        correctIndex: 1,
        explanation: "'But' connects contrasting ideas. Correct: 'but'.",
        explanationBengali: "বিপরীত ধারণা যুক্ত করতে 'but' বসে।"
    },
    {
        id: "fib_275", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "The book is ____ the table.",
        options: ["in", "into", "on", "at"],
        correctIndex: 2,
        explanation: "Surface contact uses 'on'.",
        explanationBengali: "টেবিলের ওপর বোঝাতে 'on' হয়।"
    },
    {
        id: "fib_276", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "A place where birds are kept is called an ____.",
        options: ["apiary", "aviary", "aquarium", "arena"],
        correctIndex: 1,
        explanation: "'Aviary' is a place for birds. 'Apiary' is for bees.",
        explanationBengali: "পাখি রাখার স্থানকে Aviary বলা হয়।"
    },
    {
        id: "fib_277", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "The train ____ before we reached the station.",
        options: ["left", "has left", "had left", "was leaving"],
        correctIndex: 2,
        explanation: "Past Perfect is used for the earlier of two past actions. Correct: 'had left'.",
        explanationBengali: "অতীতের দুটি ঘটনার মধ্যে যেটি আগে ঘটেছে তার জন্য Past Perfect Tense হয়।"
    },
    {
        id: "fib_278", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is ____ M.L.A.",
        options: ["a", "an", "the", "one"],
        correctIndex: 1,
        explanation: "'M.L.A.' starts with a vowel sound ('Em'), so use 'an'.",
        explanationBengali: "M.L.A. উচ্চারণের শুরুতে vowel sound আসে, তাই 'an' বসে।"
    },
    {
        id: "fib_279", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Prepositions",
        question: "He was accused ____ theft.",
        options: ["with", "of", "for", "in"],
        correctIndex: 1,
        explanation: "'Accused' is followed by 'of'. Correct: 'of'.",
        explanationBengali: "'Accused'-এর সাথে preposition 'of' বসে।"
    },
    {
        id: "fib_280", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "This is the boy ____ stole my pen.",
        options: ["who", "whom", "which", "whose"],
        correctIndex: 0,
        explanation: "'Who' is the subjective relative pronoun for a person. Correct: 'who'.",
        explanationBengali: "ব্যক্তিবাচক Subject বোঝাতে 'who' বসে।"
    },
// --- SET 22: FILL IN THE BLANKS QUESTIONS (281-300) ---

    {
        id: "fib_281", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Subject-Verb Agreement",
        question: "A number of books ____ missing.",
        options: ["is", "are", "was", "has"],
        correctIndex: 1,
        explanation: "'A number of' takes a plural verb. Correct: 'are'.",
        explanationBengali: "'A number of' থাকলে verb plural হয়।"
    },
    {
        id: "fib_282", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He is senior ____ me.",
        options: ["than", "from", "to", "by"],
        correctIndex: 2,
        explanation: "'Senior' is followed by 'to'. Correct: 'senior to'.",
        explanationBengali: "'Senior'-এর পরে 'to' বসে।"
    },
    {
        id: "fib_283", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "If I ____ the Prime Minister, I would help the poor.",
        options: ["was", "am", "were", "had been"],
        correctIndex: 2,
        explanation: "For hypothetical conditions (subjunctive mood), 'were' is used for all subjects.",
        explanationBengali: "অবাস্তব ইচ্ছা বোঝাতে সব subject-এর সাথে 'were' বসে।"
    },
    {
        id: "fib_284", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Articles",
        question: "He is ____ heir to the throne.",
        options: ["a", "an", "the", "one"],
        correctIndex: 1,
        explanation: "'Heir' starts with a vowel sound ('air'), so it takes 'an'.",
        explanationBengali: "'Heir'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' বসে।"
    },
    {
        id: "fib_285", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Conjunctions",
        question: "Make hay ____ the sun shines.",
        options: ["when", "while", "as", "before"],
        correctIndex: 1,
        explanation: "'While' indicates duration. Correct idiom: 'Make hay while the sun shines'.",
        explanationBengali: "প্রবাদ: 'ঝোপ বুঝে কোপ মারো' (Make hay while the sun shines)।"
    },
    {
        id: "fib_286", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "The ____ of the evidence was questionable.",
        options: ["veracity", "voracity", "velocity", "viscosity"],
        correctIndex: 0,
        explanation: "'Veracity' means truthfulness. 'Voracity' means greed for food.",
        explanationBengali: "Veracity মানে সত্যতা।"
    },
    {
        id: "fib_287", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Phrasal Verbs",
        question: "Please ____ your shoes before entering.",
        options: ["take off", "take out", "take in", "take up"],
        correctIndex: 0,
        explanation: "'Take off' means to remove clothing/shoes.",
        explanationBengali: "'Take off' মানে খুলে ফেলা।"
    },
    {
        id: "fib_288", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "The cat is ____ the chair.",
        options: ["in", "under", "at", "to"],
        correctIndex: 1,
        explanation: "'Under' indicates position beneath something.",
        explanationBengali: "নিচে বোঝাতে 'under' বসে।"
    },
    {
        id: "fib_289", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Adverbs",
        question: "He is ____ better today.",
        options: ["very", "much", "too", "so"],
        correctIndex: 1,
        explanation: "Comparative adjectives ('better') are modified by 'much', not 'very'.",
        explanationBengali: "Comparative degree-এর আগে 'much' বসে।"
    },
    {
        id: "fib_290", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Pronouns",
        question: "Let ____ go for a walk.",
        options: ["we", "us", "our", "they"],
        correctIndex: 1,
        explanation: "'Let' takes the objective case. Correct: 'Let us'.",
        explanationBengali: "'Let'-এর পরে objective form 'us' বসে।"
    },
    {
        id: "fib_291", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Subject-Verb Agreement",
        question: "Time and tide ____ for none.",
        options: ["wait", "waits", "waiting", "waited"],
        correctIndex: 0,
        explanation: "Time and tide are considered two separate entities here, taking a plural verb (traditional usage).",
        explanationBengali: "Time and tide-এর সাথে plural verb 'wait' বসে (ঐতিহ্যগতভাবে)।"
    },
    {
        id: "fib_292", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Vocabulary",
        question: "He is a man of ____.",
        options: ["letters", "letter", "words", "speech"],
        correctIndex: 0,
        explanation: "'Man of letters' means a literary person/scholar.",
        explanationBengali: "'Man of letters' মানে পন্ডিত ব্যক্তি।"
    },
    {
        id: "fib_293", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Tense",
        question: "I ____ him yesterday.",
        options: ["meet", "met", "have met", "had met"],
        correctIndex: 1,
        explanation: "'Yesterday' requires Simple Past Tense.",
        explanationBengali: "'Yesterday' থাকলে Past Indefinite Tense হয়।"
    },
    {
        id: "fib_294", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Prepositions",
        question: "He died ____ cancer.",
        options: ["of", "from", "by", "with"],
        correctIndex: 0,
        explanation: "Died 'of' a disease.",
        explanationBengali: "রোগে মারা গেলে 'of' বসে।"
    },
    {
        id: "fib_295", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Conjunctions",
        question: "He is poor ____ happy.",
        options: ["and", "but", "so", "or"],
        correctIndex: 1,
        explanation: "'But' connects contrasting ideas.",
        explanationBengali: "বিপরীত ধারণা বোঝাতে 'but' বসে।"
    },
    {
        id: "fib_296", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Idioms",
        question: "He is leaving the country for ____.",
        options: ["good", "better", "best", "bad"],
        correctIndex: 0,
        explanation: "'For good' means forever/permanently.",
        explanationBengali: "'For good' মানে চিরতরে।"
    },
    {
        id: "fib_297", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Adjectives",
        question: "This is the ____ book I have ever read.",
        options: ["good", "better", "best", "goodest"],
        correctIndex: 2,
        explanation: "Superlative degree is used for 'ever read'.",
        explanationBengali: "সেরা বোঝাতে Superlative degree (best) হয়।"
    },
    {
        id: "fib_298", chapter: "Fill in the blanks", type: "grammar", difficulty: "easy", topic: "Articles",
        question: "He is ____ honest man.",
        options: ["a", "an", "the", "one"],
        correctIndex: 1,
        explanation: "'Honest' starts with a vowel sound, so 'an'.",
        explanationBengali: "'Honest'-এর উচ্চারণ vowel দিয়ে শুরু, তাই 'an' বসে।"
    },
    {
        id: "fib_299", chapter: "Fill in the blanks", type: "grammar", difficulty: "hard", topic: "Tense",
        question: "By the time you reach, I ____.",
        options: ["will leave", "have left", "will have left", "left"],
        correctIndex: 2,
        explanation: "Future Perfect Tense for action completed before a future time.",
        explanationBengali: "ভবিষ্যতের নির্দিষ্ট সময়ের আগে কাজ শেষ বোঝালে Future Perfect Tense হয়।"
    },
    {
        id: "fib_300", chapter: "Fill in the blanks", type: "grammar", difficulty: "moderate", topic: "Prepositions",
        question: "He is good ____ Mathematics.",
        options: ["in", "at", "on", "with"],
        correctIndex: 1,
        explanation: "Use 'good at' to show ability.",
        explanationBengali: "দক্ষতা বোঝাতে 'good at' বসে।"
    },
// --- SET 23: VOICE CHANGE QUESTIONS (301-340) ---

    {
        id: "vc_301", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'She writes a letter.'",
        options: ["A letter is written by her.", "A letter was written by her.", "A letter has written by her.", "A letter is being written by her."],
        correctIndex: 0,
        explanation: "In Simple Present (Subject + V1 + Object), Passive is: Object + am/is/are + V3 + by + Subject.",
        explanationBengali: "Present Indefinite Tense-এর Passive Voice-এ am/is/are + V3 ব্যবহৃত হয়।"
    },
    {
        id: "vc_302", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Present Continuous",
        question: "Change to Passive: 'I am playing cricket.'",
        options: ["Cricket was played by me.", "Cricket is being played by me.", "Cricket has been played by me.", "Cricket is played by me."],
        correctIndex: 1,
        explanation: "In Present Continuous, 'being' is added before V3. Structure: Object + am/is/are + being + V3 + by + Subject.",
        explanationBengali: "Continuous Tense-এ passive করার সময় 'being' যোগ করতে হয়।"
    },
    {
        id: "vc_303", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Imperative",
        question: "Change to Passive: 'Open the door.'",
        options: ["Let the door be opened.", "The door should be opened.", "Let the door opened.", "Open the door please."],
        correctIndex: 0,
        explanation: "Imperative sentences usually follow: Let + Object + be + V3.",
        explanationBengali: "Imperative sentence (আদেশ/অনুরোধ) প্যাসিভ করতে 'Let + Obj + be + V3' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "vc_304", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Past Simple",
        question: "Change to Passive: 'Who broke the glass?'",
        options: ["By whom was the glass broken?", "Who was the glass broken?", "By whom is the glass broken?", "The glass was broken by who?"],
        correctIndex: 0,
        explanation: "Questions starting with 'Who' change to 'By whom' in passive voice. Tense changes to past (was/were).",
        explanationBengali: "'Who' থাকলে প্যাসিভ ভয়েসে 'By whom' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_305", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Present Perfect",
        question: "Change to Passive: 'He has done the work.'",
        options: ["The work was done by him.", "The work has been done by him.", "The work had been done by him.", "The work is done by him."],
        correctIndex: 1,
        explanation: "Present Perfect Passive: Object + has/have + been + V3 + by + Subject.",
        explanationBengali: "Perfect Tense-এ প্যাসিভ করার সময় 'been' যোগ করতে হয়।"
    },
    {
        id: "vc_306", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Modals",
        question: "Change to Passive: 'She might visit us.'",
        options: ["We might be visited by her.", "We may be visited by her.", "We might have visited by her.", "We might visited by her."],
        correctIndex: 0,
        explanation: "Modals (might, can, should) take 'be' in passive. Structure: Modal + be + V3.",
        explanationBengali: "Modal verb-এর সাথে প্যাসিভ ভয়েসে 'be' যুক্ত হয়।"
    },
    {
        id: "vc_307", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Double Object",
        question: "Change to Passive: 'He gave me a pen.'",
        options: ["I was given a pen by him.", "A pen is given to me by him.", "I gave a pen by him.", "A pen was gave to me."],
        correctIndex: 0,
        explanation: "Sentences with two objects can be changed in two ways. Starting with the person ('I') is more common. Structure: Subject + was/were + V3 + Object 2 + by + Agent.",
        explanationBengali: "দুটি Object থাকলে ব্যক্তিবাচক Object-কে subject করা শ্রেয়।"
    },
    {
        id: "vc_308", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Infinitive",
        question: "Change to Passive: 'I am to do it.'",
        options: ["It is to be done by me.", "It was to be done by me.", "It has to be done by me.", "It should be done by me."],
        correctIndex: 0,
        explanation: "Infinitive 'to do' changes to 'to be done'. Structure: Subject + am/is/are + to be + V3.",
        explanationBengali: "To + Verb থাকলে প্যাসিভ ভয়েসে To + be + V3 হয়।"
    },
    {
        id: "vc_309", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "Change to Passive: 'He was writing a book.'",
        options: ["A book was writing by him.", "A book was being written by him.", "A book is written by him.", "A book had been written by him."],
        correctIndex: 1,
        explanation: "Past Continuous Passive: Object + was/were + being + V3 + by + Subject.",
        explanationBengali: "Past Continuous-এ 'being' যুক্ত হয়।"
    },
    {
        id: "vc_310", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Prepositional Verb",
        question: "Change to Passive: 'They laughed at him.'",
        options: ["He was laughed by them.", "He was laughed at by them.", "He was laughed at them.", "He laughed at by them."],
        correctIndex: 1,
        explanation: "The preposition 'at' must remain with the verb. Structure: Subject + was/were + V3 + preposition + by + Agent.",
        explanationBengali: "Verb-এর সাথে থাকা preposition প্যাসিভ ভয়েসেও রাখতে হয়।"
    },
    {
        id: "vc_311", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Simple",
        question: "Change to Passive: 'The cat killed the mouse.'",
        options: ["The mouse is killed by the cat.", "The mouse was killed by the cat.", "The mouse has been killed by the cat.", "The mouse had been killed by the cat."],
        correctIndex: 1,
        explanation: "Past Simple Passive: Object + was/were + V3 + by + Subject.",
        explanationBengali: "Past Indefinite Tense-এ was/were + V3 হয়।"
    },
    {
        id: "vc_312", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Future Simple",
        question: "Change to Passive: 'I shall help you.'",
        options: ["You will be helped by me.", "You shall be helped by me.", "You are helped by me.", "You would be helped by me."],
        correctIndex: 0, // 'You' generally takes 'will' in modern English, though 'shall' is traditional with I/We.
        // Let's stick to 'will be' as standard for 2nd person.
        explanation: "Future Simple Passive: Object + will/shall + be + V3 + by + Subject.",
        explanationBengali: "Future Indefinite-এ will/shall + be + V3 হয়।"
    },
    {
        id: "vc_313", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Interrogative",
        question: "Change to Passive: 'Did you see him?'",
        options: ["Was he seen by you?", "Is he seen by you?", "Had he seen by you?", "Did he seen by you?"],
        correctIndex: 0,
        explanation: "For 'Did' questions, use Was/Were + Subject + V3.",
        explanationBengali: "'Did' দিয়ে প্রশ্ন থাকলে প্যাসিভ ভয়েসে Was/Were দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_314", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Perfect Continuous (Rare)",
        question: "Change to Passive: 'They had won the match.'", // Changed to Past Perfect as Perfect Continuous passive is awkward/rare
        // Wait, requested 301-340. Let's provide solid Past Perfect.
        options: ["The match has been won by them.", "The match had been won by them.", "The match was won by them.", "The match is won by them."],
        correctIndex: 1,
        explanation: "Past Perfect Passive: Object + had + been + V3 + by + Subject.",
        explanationBengali: "Past Perfect Tense-এ 'had been' + V3 হয়।"
    },
    {
        id: "vc_315", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'Manoj eats an apple.'",
        options: ["An apple is eaten by Manoj.", "An apple was eaten by Manoj.", "An apple has eaten by Manoj.", "An apple eats Manoj."],
        correctIndex: 0,
        explanation: "Simple Present Passive: Object + is + V3 + by + Subject.",
        explanationBengali: "Present Indefinite-এ is/am/are + V3 হয়।"
    },
    {
        id: "vc_316", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Imperative with Advice",
        question: "Change to Passive: 'Respect your elders.'",
        options: ["Your elders should be respected.", "Let your elders be respected.", "Your elders must be respected.", "Respect to elders."],
        correctIndex: 0,
        explanation: "For advice/moral duty, 'should be' is preferred over 'Let'.",
        explanationBengali: "উপদেশ বা কর্তব্য বোঝালে 'should be' ব্যবহার করা ভালো।"
    },
    {
        id: "vc_317", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal Perfect",
        question: "Change to Passive: 'You should have done it.'",
        options: ["It should be done by you.", "It should have been done by you.", "It should had been done by you.", "It must have been done by you."],
        correctIndex: 1,
        explanation: "Modal Perfect (should have) becomes Modal Perfect Passive (should have been).",
        explanationBengali: "'Should have' থাকলে 'should have been' + V3 হয়।"
    },
    {
        id: "vc_318", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "Change to Passive: 'She is cooking food.'",
        options: ["Food is being cooked by her.", "Food was being cooked by her.", "Food is cooked by her.", "Food has been cooked by her."],
        correctIndex: 0,
        explanation: "Object (Food) + is + being + V3 (cooked) + by + Subject (her).",
        explanationBengali: "Continuous Tense-এ 'being' + V3 বসে।"
    },
    {
        id: "vc_319", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Quasi-Passive",
        question: "Change to Passive: 'Honey tastes sweet.'",
        options: ["Honey is sweet when it is tasted.", "Honey is tasted sweet.", "Honey was sweet when tasted.", "Sweet is tasted by honey."],
        correctIndex: 0,
        explanation: "Adjective complements usually change to: Subject + Verb + Adjective + when + Pronoun + Passive Verb.",
        explanationBengali: "Quasi-passive বাক্যে 'when it is V3' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "vc_320", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Past Continuous",
        question: "Change to Passive: 'They were playing football.'",
        options: ["Football was being played by them.", "Football were being played by them.", "Football is being played by them.", "Football played by them."],
        correctIndex: 0,
        explanation: "Past Continuous: Object + was/were + being + V3.",
        explanationBengali: "Past Continuous-এ was/were + being + V3 হয়।"
    },
    {
        id: "vc_321", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "Change to Passive: 'He wrote a poem.'",
        options: ["A poem is written by him.", "A poem was written by him.", "A poem has written by him.", "A poem had written by him."],
        correctIndex: 1,
        explanation: "Simple Past: Object + was/were + V3.",
        explanationBengali: "Past Indefinite-এ was/were + V3 হয়।"
    },
    {
        id: "vc_322", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Future Perfect",
        question: "Change to Passive: 'I will have finished the work.'",
        options: ["The work will have been finished by me.", "The work will be finished by me.", "The work would have been finished by me.", "The work is finished by me."],
        correctIndex: 0,
        explanation: "Future Perfect: Object + will have + been + V3.",
        explanationBengali: "Future Perfect Tense-এ 'will have been' + V3 হয়।"
    },
    {
        id: "vc_323", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Complex Sentence",
        question: "Change to Passive: 'People say that he is a spy.'",
        options: ["It is said that he is a spy.", "He is said to be a spy.", "Both A and B.", "That he is a spy is said by people."],
        correctIndex: 2, // Both are correct standard forms.
        // Let's refine options to pick the 'best' one or allow both. Usually 'It is said' is simplest. 
        // Option B 'He is said to be' is more advanced.
        // Let's stick to option A as primary or make option C valid.
        // Let's make option 2 (index) correct which says "Both A and B".
        explanation: "Either 'It is said that...' or 'He is said to be...' are correct passive forms for beliefs/rumors.",
        explanationBengali: "এই ধরনের বাক্যে 'It is said that...' বা 'He is said to be...' দুটোই সঠিক।"
    },
    {
        id: "vc_324", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Negative",
        question: "Change to Passive: 'I do not know him.'",
        options: ["He is not known to me.", "He is not known by me.", "He was not known to me.", "He does not known to me."],
        correctIndex: 0,
        explanation: "'Known' is followed by 'to', not 'by'.",
        explanationBengali: "'Known'-এর পরে 'to' বসে, 'by' নয়।"
    },
    {
        id: "vc_325", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'She helps the poor.'",
        options: ["The poor are helped by her.", "The poor is helped by her.", "The poor was helped by her.", "The poor were helped by her."],
        correctIndex: 0,
        explanation: "'The poor' is a plural noun (meaning poor people), so it takes 'are'.",
        explanationBengali: "'The poor' বলতে গরিব মানুষদের বোঝায় (Plural), তাই 'are' হবে।"
    },
    {
        id: "vc_326", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Imperative Negative",
        question: "Change to Passive: 'Do not insult the weak.'",
        options: ["Let the weak not be insulted.", "The weak should not be insulted.", "Do not let the weak insulted.", "Both A and B."],
        correctIndex: 3, // Both valid forms.
        explanation: "Imperative negative can use 'Let...not be' or 'Should not be'.",
        explanationBengali: "নেতিবাচক আদেশে 'Let...not be' বা 'Should not be' দুটোই ব্যবহার করা যায়।"
    },
    {
        id: "vc_327", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Let",
        question: "Change to Passive: 'Let me do this.'",
        options: ["Let this be done by me.", "Let this done by me.", "Let this do by me.", "I may be allowed to do this."],
        correctIndex: 0,
        explanation: "Structure: Let + Object + be + V3 + by + Agent.",
        explanationBengali: "'Let' যুক্ত বাক্যে 'Let + Obj + be + V3 + by + Agent' গঠন হয়।"
    },
    {
        id: "vc_328", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Perfect",
        question: "Change to Passive: 'She had cooked dinner.'",
        options: ["Dinner had been cooked by her.", "Dinner has been cooked by her.", "Dinner was cooked by her.", "Dinner is cooked by her."],
        correctIndex: 0,
        explanation: "Past Perfect Passive: Object + had + been + V3.",
        explanationBengali: "Past Perfect-এ 'had been' + V3 হয়।"
    },
    {
        id: "vc_329", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Reflexive",
        question: "Change to Passive: 'He hurt himself.'",
        options: ["He was hurt by himself.", "Himself was hurt by him.", "He hurt by himself.", "He was hurt himself."],
        correctIndex: 0,
        explanation: "Reflexive objects generally keep the subject. 'He was hurt by himself'.",
        explanationBengali: "Reflexive pronoun (himself) থাকলে 'by himself' শেষে বসে।"
    },
    {
        id: "vc_330", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Interrogative",
        question: "Change to Passive: 'Can you solve this?'",
        options: ["Can this be solved by you?", "Could this be solved by you?", "Can this solved by you?", "Can you be solved by this?"],
        correctIndex: 0,
        explanation: "Modal Question: Modal + Object + be + V3 + by + Subject.",
        explanationBengali: "Modal দিয়ে প্রশ্ন থাকলে 'Modal + Obj + be + V3' হয়।"
    },
    {
        id: "vc_331", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "Change to Passive: 'They will announce the results.'",
        options: ["The results will be announced by them.", "The results would be announced by them.", "The results will announce by them.", "The results are announced by them."],
        correctIndex: 0,
        explanation: "Future Simple Passive: Will + be + V3.",
        explanationBengali: "Future Indefinite-এ 'will be' + V3 হয়।"
    },
    {
        id: "vc_332", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Prepositional Verb",
        question: "Change to Passive: 'The mother looks after the child.'",
        options: ["The child is looked after by the mother.", "The child is looked by the mother.", "The child looks after by the mother.", "The child was looked after by the mother."],
        correctIndex: 0,
        explanation: "'Look after' is a phrasal verb. The preposition 'after' must be kept. Tense is present.",
        explanationBengali: "'Look after' (দেখশোনা করা) একটি ফ্রেজ, তাই 'after' বাদ দেওয়া যাবে না।"
    },
    {
        id: "vc_333", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Infinitive",
        question: "Change to Passive: 'It is time to take tea.'",
        options: ["It is time for tea to be taken.", "It is time tea to be taken.", "It is time for tea taken.", "Tea should be taken."],
        correctIndex: 0,
        explanation: "Structure: It is time + for + Object + to be + V3.",
        explanationBengali: "'It is time to' থাকলে 'It is time for + Obj + to be + V3' হয়।"
    },
    {
        id: "vc_334", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Order/Command",
        question: "Change to Passive: 'Shut the window.'",
        options: ["Let the window be shut.", "Let the window be shutted.", "The window should be shut.", "Let window be shut."],
        correctIndex: 0,
        explanation: "Imperative: Let + Object + be + V3. Note: V3 of 'shut' is 'shut'.",
        explanationBengali: "'Shut'-এর V3 'shut'-ই হয়, 'shutted' নয়।"
    },
    {
        id: "vc_335", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "Change to Passive: 'He is buying a car.'",
        options: ["A car is being bought by him.", "A car was being bought by him.", "A car is bought by him.", "A car has being bought by him."],
        correctIndex: 0,
        explanation: "Present Continuous: Object + is + being + V3.",
        explanationBengali: "Present Continuous-এ 'being' + V3 হয়।"
    },
    {
        id: "vc_336", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Object Complement",
        question: "Change to Passive: 'They elected him Chairman.'",
        options: ["He was elected Chairman by them.", "Chairman was elected him by them.", "He elected Chairman by them.", "Chairman elected him."],
        correctIndex: 0,
        explanation: "The indirect object 'him' becomes the subject 'He'. The complement 'Chairman' stays after the verb.",
        explanationBengali: "Object (him) সাবজেক্ট হবে, কিন্তু Complement (Chairman) ভার্বের পরেই থাকবে।"
    },
    {
        id: "vc_337", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal",
        question: "Change to Passive: 'One should keep one's promises.'",
        options: ["Promises should be kept.", "One's promises should be kept.", "Promises should be kept by one.", "Promises must be kept."],
        correctIndex: 0, // 'By one' is usually omitted.
        explanation: "When the subject is vague ('One'), the agent 'by one' is usually omitted in passive.",
        explanationBengali: "Subject 'One' থাকলে প্যাসিভ ভয়েসে 'by one' সাধারণত উহ্য থাকে।"
    },
    {
        id: "vc_338", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "Change to Passive: 'She was singing a song.'",
        options: ["A song was being sung by her.", "A song was singing by her.", "A song is being sung by her.", "A song was sung by her."],
        correctIndex: 0,
        explanation: "Past Continuous: Object + was + being + V3 (sung).",
        explanationBengali: "Past Continuous-এ 'was being' + V3 (sung) হয়।"
    },
    {
        id: "vc_339", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Surprise",
        question: "Change to Passive: 'His behavior surprised me.'",
        options: ["I was surprised at his behavior.", "I was surprised by his behavior.", "I was surprised with his behavior.", "I am surprised at his behavior."],
        correctIndex: 0,
        explanation: "'Surprised' takes the preposition 'at', not 'by'.",
        explanationBengali: "'Surprised'-এর সাথে preposition 'at' বসে, 'by' নয়।"
    },
    {
        id: "vc_340", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Passive to Active",
        question: "Change to Active: 'The letter was written by him.'",
        options: ["He wrote the letter.", "He writes the letter.", "He had written the letter.", "He was writing the letter."],
        correctIndex: 0,
        explanation: "Reverse of Past Simple Passive (was written) is Past Simple Active (wrote).",
        explanationBengali: "প্যাসিভ থেকে অ্যাক্টিভ করা হচ্ছে। 'Was written' পরিবর্তিত হয়ে 'wrote' হবে।"
    },
// --- SET 24: ADDITIONAL VOICE CHANGE QUESTIONS (341-370) ---

    {
        id: "vc_341", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Perfect",
        question: "Change to Passive: 'They have built a house.'",
        options: ["A house has been built by them.", "A house had been built by them.", "A house was built by them.", "A house is built by them."],
        correctIndex: 0,
        explanation: "Present Perfect Passive: Object + has/have + been + V3. 'A house' is singular, so 'has'.",
        explanationBengali: "Present Perfect-এ 'has/have been' + V3 হয়।"
    },
    {
        id: "vc_342", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal",
        question: "Change to Passive: 'You must do it.'",
        options: ["It must be done by you.", "It should be done by you.", "It can be done by you.", "It has to be done by you."],
        correctIndex: 0,
        explanation: "Modal Passive: Modal + be + V3. 'Must do' becomes 'must be done'.",
        explanationBengali: "Modal verb-এর সাথে 'be' যুক্ত হয়।"
    },
    {
        id: "vc_343", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Double Passive",
        question: "Change to Passive: 'The police arrested the thief and sent him to jail.'",
        options: ["The thief was arrested and sent to jail by the police.", "The thief was arrested and sending to jail.", "The thief arrested and sent to jail.", "The police was arrested the thief."],
        correctIndex: 0,
        explanation: "Both verbs (arrested, sent) share the same subject (The thief) in passive. 'Was arrested and (was) sent'.",
        explanationBengali: "দুটি verb-ই passive হবে। 'The thief' হলো subject।"
    },
    {
        id: "vc_344", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "Change to Passive: 'Did she write a letter?'",
        options: ["Was a letter written by her?", "Is a letter written by her?", "Had a letter written by her?", "Did a letter written by her?"],
        correctIndex: 0,
        explanation: "Past Simple Question: Was/Were + Object + V3 + by + Subject.",
        explanationBengali: "'Did' দিয়ে প্রশ্ন থাকলে 'Was/Were' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_345", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Going To",
        question: "Change to Passive: 'I am going to buy a car.'",
        options: ["A car is going to be bought by me.", "A car is being bought by me.", "A car will be bought by me.", "A car was going to be bought."],
        correctIndex: 0,
        explanation: "'Going to' structure: Object + am/is/are + going to be + V3.",
        explanationBengali: "'Going to' থাকলে 'going to be' + V3 হয়।"
    },
    {
        id: "vc_346", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Prepositional Phrase",
        question: "Change to Passive: 'They made fun of him.'",
        options: ["He was made fun of by them.", "He was made fun by them.", "Fun was made of him.", "He made fun of by them."],
        correctIndex: 0,
        explanation: "The phrase 'made fun of' must be kept together. 'Of' remains after 'fun'.",
        explanationBengali: "Phrasal verb-এর preposition (of) বাদ দেওয়া যাবে না।"
    },
    {
        id: "vc_347", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Imperative",
        question: "Change to Passive: 'Do not tell a lie.'",
        options: ["Let a lie not be told.", "A lie should not be told.", "Do not let a lie be told.", "Both A and B."],
        correctIndex: 3, // Both valid
        explanation: "Imperative negative can be 'Let...not be' or 'Should not be'. Both are correct.",
        explanationBengali: "নেতিবাচক আদেশে 'Let...not be' বা 'Should not be' দুটোই সঠিক।"
    },
    {
        id: "vc_348", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "Change to Passive: 'Who is calling you?'",
        options: ["By whom are you being called?", "Who are you being called by?", "By whom were you being called?", "Who is being called by you?"],
        correctIndex: 0,
        explanation: "'Who' becomes 'By whom'. Present Continuous uses 'being'. Structure: By whom + are + Subject + being + V3.",
        explanationBengali: "'Who' থাকলে 'By whom' হয় এবং continuous tense-এ 'being' বসে।"
    },
    {
        id: "vc_349", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Verb with Adjective",
        question: "Change to Passive: 'Rose smells sweet.'",
        options: ["Rose is sweet when it is smelt.", "Rose is smelt sweet.", "Rose was sweet when smelt.", "Smelling rose is sweet."],
        correctIndex: 0,
        explanation: "Quasi-passive structure: Subject + Verb + Adjective + when + Pronoun + Passive Verb.",
        explanationBengali: "Quasi-passive বাক্যে 'when it is V3' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "vc_350", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal Perfect",
        question: "Change to Passive: 'He might have done it.'",
        options: ["It might have been done by him.", "It might be done by him.", "It may have been done by him.", "It must have been done by him."],
        correctIndex: 0,
        explanation: "Modal Perfect (might have) becomes Modal Perfect Passive (might have been).",
        explanationBengali: "'Might have' থাকলে 'might have been' + V3 হয়।"
    },
    {
        id: "vc_351", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "Change to Passive: 'We shall play the match.'",
        options: ["The match will be played by us.", "The match shall be played by us.", "The match would be played by us.", "The match is played by us."],
        correctIndex: 0,
        explanation: "Object 'The match' takes 'will' in modern usage. Structure: Will + be + V3.",
        explanationBengali: "Future Indefinite-এ 'will be' + V3 হয়।"
    },
    {
        id: "vc_352", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Infinitive without 'to'",
        question: "Change to Passive: 'I saw him go.'",
        options: ["He was seen to go by me.", "He was seen go by me.", "He was seen going by me.", "I saw him to go."],
        correctIndex: 0,
        explanation: "In active voice, 'see' takes bare infinitive ('go'). In passive, it takes full infinitive ('to go').",
        explanationBengali: "Active-এ 'to' উহ্য থাকলেও Passive-এ 'to' বসাতে হয় (He was seen *to* go)।"
    },
    {
        id: "vc_353", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Two Objects",
        question: "Change to Passive: 'She taught us English.'",
        options: ["We were taught English by her.", "English was taught to us by her.", "Both A and B.", "English taught us by her."],
        correctIndex: 2, // Both correct
        explanation: "Either object ('us' -> 'We' or 'English') can be the subject. Both forms are correct.",
        explanationBengali: "দুটি object-এর যেকোনোটি দিয়েই passive করা যায়।"
    },
    {
        id: "vc_354", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Perfect",
        question: "Change to Passive: 'Someone had stolen my purse.'",
        options: ["My purse had been stolen.", "My purse has been stolen.", "My purse was stolen.", "My purse had stolen."],
        correctIndex: 0,
        explanation: "Past Perfect Passive: Object + had + been + V3. Agent 'someone' is omitted.",
        explanationBengali: "Past Perfect-এ 'had been' হয়। 'Someone' উহ্য রাখা হয়।"
    },
    {
        id: "vc_355", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Order/Request",
        question: "Change to Passive: 'Please help me.'",
        options: ["You are requested to help me.", "Let me be helped.", "I should be helped.", "Please be helped."],
        correctIndex: 0,
        explanation: "'Please' indicates a request. Structure: You are requested to + V1 + Object.",
        explanationBengali: "'Please' থাকলে 'You are requested to' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_356", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Let with Suggestion",
        question: "Change to Passive: 'Let us sing.'",
        options: ["It is suggested that we should sing.", "Let singing be done.", "We should sing.", "Let us be sung."],
        correctIndex: 0,
        explanation: "'Let us' denotes a suggestion. Structure: It is suggested that we should + V1.",
        explanationBengali: "'Let us' থাকলে 'It is suggested that...' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "vc_357", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'Does he like tea?'",
        options: ["Is tea liked by him?", "Was tea liked by him?", "Has tea liked by him?", "Is tea like by him?"],
        correctIndex: 0,
        explanation: "Present Simple Question: Is/Am/Are + Object + V3 + by + Subject.",
        explanationBengali: "'Does' দিয়ে প্রশ্ন থাকলে 'Is/Am/Are' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_358", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Object Complement",
        question: "Change to Passive: 'We named her Rina.'",
        options: ["She was named Rina by us.", "Rina was named her by us.", "She named Rina by us.", "Rina named her by us."],
        correctIndex: 0,
        explanation: "'Her' becomes 'She'. The complement 'Rina' stays after the verb.",
        explanationBengali: "Object (her) সাবজেক্ট হবে, Complement (Rina) ভার্বের পরেই থাকবে।"
    },
    {
        id: "vc_359", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Passive to Active",
        question: "Change to Active: 'The bridge was built last year.'",
        options: ["They built the bridge last year.", "We built the bridge last year.", "Someone built the bridge last year.", "The government built the bridge last year."],
        correctIndex: 0, // 'They' is a standard generic subject when agent is unknown.
        explanation: "When the agent is missing in passive, we supply a suitable subject like 'They' or 'Someone'.",
        explanationBengali: "Passive-এ agent না থাকলে Active-এ 'They' বা 'Someone' সাবজেক্ট হিসেবে ধরা হয়।"
    },
    {
        id: "vc_360", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "Change to Passive: 'I am reading a book.'",
        options: ["A book is being read by me.", "A book was being read by me.", "A book is read by me.", "A book has been read by me."],
        correctIndex: 0,
        explanation: "Present Continuous: Object + is + being + V3.",
        explanationBengali: "Present Continuous-এ 'being' + V3 হয়।"
    },
    {
        id: "vc_361", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "To + V1 (Passive)",
        question: "Change to Passive: 'There is nothing to do.'",
        options: ["There is nothing to be done.", "There is nothing done.", "There is nothing being done.", "There is nothing to do."],
        correctIndex: 0,
        explanation: "Infinitive 'to do' changes to 'to be done'.",
        explanationBengali: "'To do' পরিবর্তিত হয়ে 'to be done' হয়।"
    },
    {
        id: "vc_362", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Verb 'Know'",
        question: "Change to Passive: 'I know him.'",
        options: ["He is known to me.", "He is known by me.", "He was known to me.", "He is known with me."],
        correctIndex: 0,
        explanation: "'Know' takes the preposition 'to', never 'by'.",
        explanationBengali: "'Know'-এর পরে preposition 'to' বসে, 'by' নয়।"
    },
    {
        id: "vc_363", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "Change to Passive: 'They were watching TV.'",
        options: ["TV was being watched by them.", "TV were being watched by them.", "TV was watched by them.", "TV is being watched by them."],
        correctIndex: 0,
        explanation: "Past Continuous: Object + was + being + V3.",
        explanationBengali: "Past Continuous-এ 'was being' + V3 হয়।"
    },
    {
        id: "vc_364", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "It is time",
        question: "Change to Passive: 'It is time to close the shop.'",
        options: ["It is time for the shop to be closed.", "It is time the shop to be closed.", "It is time for shop closed.", "Shop should be closed."],
        correctIndex: 0,
        explanation: "Structure: It is time + for + Object + to be + V3.",
        explanationBengali: "'It is time to' থাকলে 'It is time for + Obj + to be + V3' হয়।"
    },
    {
        id: "vc_365", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal",
        question: "Change to Passive: 'Can we send the parcel?'",
        options: ["Can the parcel be sent by us?", "Can the parcel sent by us?", "Could the parcel be sent by us?", "Can the parcel be send by us?"],
        correctIndex: 0,
        explanation: "Modal Question: Can + Object + be + V3 + by + Subject.",
        explanationBengali: "Modal দিয়ে প্রশ্ন থাকলে 'Can + Obj + be + V3' হয়।"
    },
    {
        id: "vc_366", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Future Perfect",
        question: "Change to Passive: 'He will have sold the car.'",
        options: ["The car will have been sold by him.", "The car would have been sold by him.", "The car will be sold by him.", "The car will have sold by him."],
        correctIndex: 0,
        explanation: "Future Perfect: Will have + been + V3.",
        explanationBengali: "Future Perfect Tense-এ 'will have been' + V3 হয়।"
    },
    {
        id: "vc_367", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Believe/Expect",
        question: "Change to Passive: 'They believe that he is honest.'",
        options: ["It is believed that he is honest.", "He is believed to be honest.", "Both A and B.", "That he is honest is believed."],
        correctIndex: 2, // Both A and B are standard correct forms.
        explanation: "Both 'It is believed that...' and 'He is believed to be...' are correct passive forms.",
        explanationBengali: "উভয় গঠনই সঠিক: 'It is believed that...' অথবা 'He is believed to be...'"
    },
    {
        id: "vc_368", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Passive to Active",
        question: "Change to Active: 'Let the order be given.'",
        options: ["Give the order.", "Let give the order.", "Order given.", "Please give order."],
        correctIndex: 0,
        explanation: "Passive 'Let + Obj + be + V3' changes to Imperative 'V1 + Object'.",
        explanationBengali: "'Let...be...V3' থাকলে Active-এ মূল verb দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_369", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Past Negative",
        question: "Change to Passive: 'He did not play football.'",
        options: ["Football was not played by him.", "Football is not played by him.", "Football had not played by him.", "Football was not playing by him."],
        correctIndex: 0,
        explanation: "Past Simple Negative: Object + was/were + not + V3.",
        explanationBengali: "Past Indefinite Negative-এ 'was/were not' + V3 হয়।"
    },
    {
        id: "vc_370", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Surprise/Annoy",
        question: "Change to Passive: 'His conduct annoyed me.'",
        options: ["I was annoyed at his conduct.", "I was annoyed with his conduct.", "I was annoyed by his conduct.", "I am annoyed at his conduct."],
        correctIndex: 0,
        explanation: "'Annoyed' takes 'at' for behavior/things and 'with' for persons. Here it is behavior, so 'at'.",
        explanationBengali: "আচরণের প্রতি বিরক্ত হলে 'at' বসে, ব্যক্তির প্রতি হলে 'with' বসে।"
    },
// --- SET 25: ADDITIONAL VOICE CHANGE QUESTIONS (371-400) ---

    {
        id: "vc_371", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'He helps me.'",
        options: ["I am helped by him.", "I was helped by him.", "I am being helped by him.", "I have been helped by him."],
        correctIndex: 0,
        explanation: "Simple Present Passive: Object + am/is/are + V3 + by + Subject. 'Me' becomes 'I'.",
        explanationBengali: "Present Indefinite-এ am/is/are + V3 হয়।"
    },
    {
        id: "vc_372", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal",
        question: "Change to Passive: 'We should respect our elders.'",
        options: ["Our elders should be respected by us.", "Our elders should respect us.", "Our elders must be respected.", "Our elders can be respected."],
        correctIndex: 0,
        explanation: "Modal Passive: Modal + be + V3. 'Should respect' becomes 'should be respected'.",
        explanationBengali: "Modal verb-এর সাথে 'be' যুক্ত হয়।"
    },
    {
        id: "vc_373", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Factitive Verb",
        question: "Change to Passive: 'They elected him captain.'",
        options: ["He was elected captain by them.", "Captain was elected him by them.", "He elected captain by them.", "Captain elected him."],
        correctIndex: 0,
        explanation: "Indirect object 'him' becomes subject 'He'. Complement 'captain' stays after the verb.",
        explanationBengali: "Object (him) সাবজেক্ট হবে, Complement (captain) ভার্বের পরেই থাকবে।"
    },
    {
        id: "vc_374", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "Change to Passive: 'Did he catch the thief?'",
        options: ["Was the thief caught by him?", "Is the thief caught by him?", "Had the thief caught by him?", "Did the thief caught by him?"],
        correctIndex: 0,
        explanation: "Past Simple Question: Was/Were + Object + V3 + by + Subject.",
        explanationBengali: "'Did' দিয়ে প্রশ্ন থাকলে 'Was/Were' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_375", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Let",
        question: "Change to Passive: 'Let him complete the work.'",
        options: ["Let the work be completed by him.", "Let the work completed by him.", "Let the work be complete by him.", "He should complete the work."],
        correctIndex: 0,
        explanation: "Structure: Let + Object + be + V3 + by + Agent.",
        explanationBengali: "'Let' যুক্ত বাক্যে 'Let + Obj + be + V3 + by + Agent' গঠন হয়।"
    },
    {
        id: "vc_376", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Prepositional Phrase",
        question: "Change to Passive: 'We must listen to his words.'",
        options: ["His words must be listened to.", "His words must be listened.", "His words must listen to.", "His words should be listened."],
        correctIndex: 0,
        explanation: "The preposition 'to' after 'listen' must be retained in the passive voice.",
        explanationBengali: "Verb-এর সাথে থাকা preposition (to) প্যাসিভ ভয়েসেও রাখতে হয়।"
    },
    {
        id: "vc_377", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Imperative",
        question: "Change to Passive: 'Don't touch the wire.'",
        options: ["Let the wire not be touched.", "The wire should not be touched.", "Do not let the wire touched.", "Both A and B."],
        correctIndex: 3, // Both valid
        explanation: "Imperative negative can use 'Let...not be' or 'Should not be'. Both are correct.",
        explanationBengali: "নেতিবাচক আদেশে 'Let...not be' বা 'Should not be' দুটোই সঠিক।"
    },
    {
        id: "vc_378", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "Change to Passive: 'Is she cooking rice?'",
        options: ["Is rice being cooked by her?", "Is rice cooked by her?", "Was rice being cooked by her?", "Is rice being cook by her?"],
        correctIndex: 0,
        explanation: "Present Continuous Question: Is/Am/Are + Object + being + V3 + by + Subject.",
        explanationBengali: "Continuous Tense-এর প্রশ্নে 'being' + V3 বসে।"
    },
    {
        id: "vc_379", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Infinitive",
        question: "Change to Passive: 'It is time to do the work.'",
        options: ["It is time for the work to be done.", "It is time the work to be done.", "It is time for work done.", "The work should be done."],
        correctIndex: 0,
        explanation: "Structure: It is time + for + Object + to be + V3.",
        explanationBengali: "'It is time to' থাকলে 'It is time for + Obj + to be + V3' হয়।"
    },
    {
        id: "vc_380", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Past Perfect",
        question: "Change to Passive: 'They had already finished the task.'",
        options: ["The task had already been finished by them.", "The task has already been finished by them.", "The task was already finished by them.", "The task had been finished already."],
        correctIndex: 0,
        explanation: "Past Perfect Passive: Object + had + been + V3.",
        explanationBengali: "Past Perfect-এ 'had been' + V3 হয়।"
    },
    {
        id: "vc_381", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "Change to Passive: 'I will write a letter.'",
        options: ["A letter will be written by me.", "A letter shall be written by me.", "A letter would be written by me.", "A letter is written by me."],
        correctIndex: 0,
        explanation: "Future Simple Passive: Object + will/shall + be + V3.",
        explanationBengali: "Future Indefinite-এ 'will be' + V3 হয়।"
    },
    {
        id: "vc_382", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Gerund",
        question: "Change to Passive: 'I remember him teaching me.'",
        options: ["I remember being taught by him.", "I remember teaching by him.", "I remember him being taught.", "I remember being teaching by him."],
        correctIndex: 0,
        explanation: "Gerund 'teaching' changes to passive gerund 'being taught'.",
        explanationBengali: "Gerund (V+ing)-এর প্যাসিভ 'being + V3' হয়।"
    },
    {
        id: "vc_383", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Two Objects",
        question: "Change to Passive: 'He offered me a job.'",
        options: ["I was offered a job by him.", "A job was offered to me by him.", "Both A and B.", "I offered a job by him."],
        correctIndex: 2, // Both correct
        explanation: "Either object ('me' -> 'I' or 'a job') can be the subject. Both forms are correct.",
        explanationBengali: "দুটি object-এর যেকোনোটি দিয়েই passive করা যায়।"
    },
    {
        id: "vc_384", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Perfect",
        question: "Change to Passive: 'Someone has stolen my pen.'",
        options: ["My pen has been stolen.", "My pen had been stolen.", "My pen was stolen.", "My pen is stolen."],
        correctIndex: 0,
        explanation: "Present Perfect Passive: Object + has + been + V3. Agent 'someone' is omitted.",
        explanationBengali: "Present Perfect-এ 'has been' হয়। 'Someone' উহ্য রাখা হয়।"
    },
    {
        id: "vc_385", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Imperative Request",
        question: "Change to Passive: 'Kindly grant me leave.'",
        options: ["You are requested to grant me leave.", "Let me be granted leave.", "Leave should be granted.", "Kindly be granted leave."],
        correctIndex: 0,
        explanation: "'Kindly' indicates a request. Structure: You are requested to + V1 + Object.",
        explanationBengali: "'Kindly' থাকলে 'You are requested to' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_386", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Modal Perfect",
        question: "Change to Passive: 'You ought to have helped him.'",
        options: ["He ought to have been helped by you.", "He ought to be helped by you.", "He ought have been helped by you.", "He must have been helped by you."],
        correctIndex: 0,
        explanation: "Modal Perfect (ought to have) becomes Modal Perfect Passive (ought to have been).",
        explanationBengali: "'Ought to have' থাকলে 'ought to have been' + V3 হয়।"
    },
    {
        id: "vc_387", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "Change to Passive: 'Do you play cricket?'",
        options: ["Is cricket played by you?", "Was cricket played by you?", "Has cricket played by you?", "Is cricket play by you?"],
        correctIndex: 0,
        explanation: "Present Simple Question: Is/Am/Are + Object + V3 + by + Subject.",
        explanationBengali: "'Do' দিয়ে প্রশ্ন থাকলে 'Is/Am/Are' দিয়ে বাক্য শুরু হয়।"
    },
    {
        id: "vc_388", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Passive to Active",
        question: "Change to Active: 'The road is being repaired.'",
        options: ["They are repairing the road.", "The road is repairing.", "Someone is repairing the road.", "Workers are repairing the road."],
        correctIndex: 0, // 'They' or 'Workers' or 'Someone'. 'They' is standard generic.
        explanation: "When agent is missing, assume a general subject like 'They' or 'Men'. 'Is being repaired' -> 'Are repairing'.",
        explanationBengali: "Passive-এ agent না থাকলে Active-এ 'They' সাবজেক্ট হিসেবে ধরা হয়।"
    },
    {
        id: "vc_389", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Who",
        question: "Change to Passive: 'Who taught you grammar?'",
        options: ["By whom were you taught grammar?", "By whom grammar was taught to you?", "Who was taught grammar to you?", "By whom you were taught grammar?"],
        correctIndex: 0,
        explanation: "'Who' -> 'By whom'. Structure: By whom + was/were + Subject + V3 + Object 2.",
        explanationBengali: "'Who' থাকলে 'By whom' হয় এবং প্রশ্নবোধক গঠন ঠিক রাখতে হয়।"
    },
    {
        id: "vc_390", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "Change to Passive: 'The boys were flying kites.'",
        options: ["Kites were being flown by the boys.", "Kites were flying by the boys.", "Kites are being flown by the boys.", "Kites was being flown by the boys."],
        correctIndex: 0,
        explanation: "Past Continuous: Object + was/were + being + V3 (flown).",
        explanationBengali: "Past Continuous-এ 'were being' + V3 (flown) হয়।"
    },
    {
        id: "vc_391", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Expect",
        question: "Change to Passive: 'I expect you to help her.'",
        options: ["I expect her to be helped by you.", "She is expected to be helped by you.", "It is expected by me that you help her.", "I expect that she be helped."],
        correctIndex: 0,
        explanation: "Infinitive 'to help' changes to 'to be helped'. The main verb 'expect' stays active.",
        explanationBengali: "Main verb active থাকে, infinitive part passive হয় (to be helped)।"
    },
    {
        id: "vc_392", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Verb with Preposition",
        question: "Change to Passive: 'He is looking for a job.'",
        options: ["A job is being looked for by him.", "A job is looked for by him.", "A job is being looked by him.", "A job was being looked for by him."],
        correctIndex: 0,
        explanation: "'Look for' is a phrasal verb. 'For' must remain. Continuous tense adds 'being'.",
        explanationBengali: "Phrasal verb-এর preposition (for) থাকবে। Continuous-এ 'being' বসবে।"
    },
    {
        id: "vc_393", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "Change to Passive: 'She ate a mango.'",
        options: ["A mango was eaten by her.", "A mango is eaten by her.", "A mango has been eaten by her.", "A mango had been eaten by her."],
        correctIndex: 0,
        explanation: "Simple Past: Object + was/were + V3.",
        explanationBengali: "Past Indefinite-এ 'was/were' + V3 হয়।"
    },
    {
        id: "vc_394", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Order",
        question: "Change to Passive: 'Get out of the room.'",
        options: ["You are ordered to get out of the room.", "Let the room be got out.", "Should get out of the room.", "Please get out of the room."],
        correctIndex: 0,
        explanation: "Intransitive imperative (no object). Structure: You are ordered to + V1...",
        explanationBengali: "Object না থাকলে 'You are ordered to...' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "vc_395", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Interrogative Modal",
        question: "Change to Passive: 'Will you help me?'",
        options: ["Shall I be helped by you?", "Will I be helped by you?", "Would I be helped by you?", "Can I be helped by you?"],
        correctIndex: 0, // 'I' takes 'shall' traditionally in questions. 'Will' is also acceptable modern usage. Let's stick to Shall.
        explanation: "Modal Question: Will/Shall + Object + be + V3 + by + Subject. 'I' takes 'Shall'.",
        explanationBengali: "Modal দিয়ে প্রশ্ন থাকলে 'Shall/Will + Obj + be + V3' হয়।"
    },
    {
        id: "vc_396", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Present Perfect",
        question: "Change to Passive: 'Has he written the book?'",
        options: ["Has the book been written by him?", "Has the book written by him?", "Had the book been written by him?", "Is the book written by him?"],
        correctIndex: 0,
        explanation: "Present Perfect Question: Has/Have + Object + been + V3.",
        explanationBengali: "Present Perfect প্রশ্নে 'Has/Have + Obj + been + V3' হয়।"
    },
    {
        id: "vc_397", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Subject-Verb Agreement",
        question: "Change to Passive: 'They are selling the books.'",
        options: ["The books are being sold by them.", "The books is being sold by them.", "The books were being sold by them.", "The books are sold by them."],
        correctIndex: 0,
        explanation: "'Books' is plural, so 'are'. Continuous tense adds 'being'.",
        explanationBengali: "Object 'Books' plural, তাই 'are being' হবে।"
    },
    {
        id: "vc_398", chapter: "Voice Change", type: "grammar", difficulty: "moderate", topic: "Passive to Active",
        question: "Change to Active: 'I was surprised by the news.'",
        options: ["The news surprised me.", "The news surprises me.", "The news had surprised me.", "The news was surprising."],
        correctIndex: 0,
        explanation: "Passive 'was surprised' (Past Simple) changes to Active 'surprised' (Past Simple).",
        explanationBengali: "প্যাসিভ 'was surprised' অ্যাক্টিভে 'surprised' হবে।"
    },
    {
        id: "vc_399", chapter: "Voice Change", type: "grammar", difficulty: "easy", topic: "Simple Future Negative",
        question: "Change to Passive: 'She will not help you.'",
        options: ["You will not be helped by her.", "You shall not be helped by her.", "You would not be helped by her.", "You are not helped by her."],
        correctIndex: 0,
        explanation: "Future Negative: Will + not + be + V3.",
        explanationBengali: "Future Negative-এ 'will not be' + V3 হয়।"
    },
    {
        id: "vc_400", chapter: "Voice Change", type: "grammar", difficulty: "hard", topic: "Surprise/Shock",
        question: "Change to Passive: 'The news shocked me.'",
        options: ["I was shocked at the news.", "I was shocked by the news.", "I was shocked with the news.", "I am shocked at the news."],
        correctIndex: 0,
        explanation: "'Shocked' generally takes 'at', not 'by'.",
        explanationBengali: "'Shocked'-এর সাথে preposition 'at' বসে, 'by' নয়।"
    },
// --- SET 26: DIRECT AND INDIRECT SPEECH QUESTIONS (401-430) ---

    {
        id: "di_401", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "He said, \"I am busy.\"",
        options: ["He said that he was busy.", "He said that he is busy.", "He says that he was busy.", "He said that I am busy."],
        correctIndex: 0,
        explanation: "Simple Present 'am' changes to Simple Past 'was' when the reporting verb is in the past tense.",
        explanationBengali: "Reporting verb past হলে tense পরিবর্তন হয়ে past হয়। 'am' পরিবর্তিত হয়ে 'was' হবে।"
    },
    {
        id: "di_402", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Interrogative",
        question: "She said to me, \"Are you coming?\"",
        options: ["She asked me if I was coming.", "She asked me whether was I coming.", "She told me if I was coming.", "She asked if I am coming."],
        correctIndex: 0,
        explanation: "'Said to' changes to 'asked'. Use 'if' or 'whether'. Present Continuous 'are coming' changes to Past Continuous 'was coming'.",
        explanationBengali: "প্রশ্নবোধক বাক্যে 'if' বসে এবং tense পরিবর্তন হয়।"
    },
    {
        id: "di_403", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Universal Truth",
        question: "The teacher said, \"The sun rises in the east.\"",
        options: ["The teacher said that the sun rises in the east.", "The teacher said that the sun rose in the east.", "The teacher said that the sun had risen in the east.", "The teacher said that sun rises in east."],
        correctIndex: 0,
        explanation: "Universal truths do not change tense in indirect speech.",
        explanationBengali: "চিরন্তন সত্যের ক্ষেত্রে tense-এর কোনো পরিবর্তন হয় না।"
    },
    {
        id: "di_404", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Imperative",
        question: "He said to his servant, \"Clean the floor.\"",
        options: ["He ordered his servant to clean the floor.", "He told his servant clean the floor.", "He asked his servant that clean the floor.", "He ordered his servant that to clean the floor."],
        correctIndex: 0,
        explanation: "Imperative sentences use 'to + V1'. 'Said to' changes to 'ordered' for commands.",
        explanationBengali: "আদেশ বোঝালে 'ordered' এবং 'to' দিয়ে যুক্ত হয়।"
    },
    {
        id: "di_405", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Exclamatory",
        question: "He said, \"Alas! I am ruined.\"",
        options: ["He exclaimed with sorrow that he was ruined.", "He said alas he was ruined.", "He cried that he was ruined.", "He exclaimed with joy that he was ruined."],
        correctIndex: 0,
        explanation: "'Alas' indicates sorrow. Use 'exclaimed with sorrow'. 'Am' changes to 'was'.",
        explanationBengali: "দুঃখ বোঝালে 'exclaimed with sorrow' হয়।"
    },
    {
        id: "di_406", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "He said, \"I bought a pen.\"",
        options: ["He said that he had bought a pen.", "He said that he bought a pen.", "He said that he has bought a pen.", "He said that he was bought a pen."],
        correctIndex: 0,
        explanation: "Simple Past 'bought' changes to Past Perfect 'had bought'.",
        explanationBengali: "Past Indefinite পরিবর্তিত হয়ে Past Perfect হয়।"
    },
    {
        id: "di_407", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Nearness Words",
        question: "She said, \"I will come tomorrow.\"",
        options: ["She said that she would come the next day.", "She said that she will come tomorrow.", "She said that she would come tomorrow.", "She said that she will come the next day."],
correctIndex: 0,
        explanation: "'Will' changes to 'would'. 'Tomorrow' changes to 'the next day'.",
        explanationBengali: "Tomorrow পরিবর্তিত হয়ে 'the next day' হয় এবং will -> would হয়।"
    },
    {
        id: "di_408", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Let",
        question: "He said, \"Let us go for a walk.\"",
        options: ["He proposed that they should go for a walk.", "He said to let them go for a walk.", "He ordered to go for a walk.", "He suggested to go for a walk."],
        correctIndex: 0,
        explanation: "'Let us' indicates a proposal. Use 'proposed that + subject + should'.",
        explanationBengali: "Let us থাকলে 'proposed' এবং 'should' বসে।"
    },
    {
        id: "di_409", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Optative",
        question: "He said, \"May God bless you.\"",
        options: ["He prayed that God might bless me.", "He prayed that God may bless me.", "He said that God might bless me.", "He wished that God bless me."],
        correctIndex: 0,
        explanation: "Optative sentences use 'prayed' or 'wished'. 'May' changes to 'might'.",
        explanationBengali: "ইচ্ছা বা প্রার্থনা বোঝালে 'prayed' এবং may -> might হয়।"
    },
    {
        id: "di_410", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Modals",
        question: "He said, \"I can solve this.\"",
        options: ["He said that he could solve that.", "He said that he can solve this.", "He said that he could solve this.", "He asked if he could solve that."],
        correctIndex: 0,
        explanation: "'Can' changes to 'could'. 'This' changes to 'that'.",
        explanationBengali: "Can -> Could এবং This -> That হয়।"
    },
    {
        id: "di_411", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Let (Permission)",
        question: "He said, \"Let me come in.\"",
        options: ["He requested that he might be allowed to come in.", "He said that let him come in.", "He ordered to let him come in.", "He asked to come in."],
        correctIndex: 0,
        explanation: "'Let me' indicates seeking permission. Use 'requested...might be allowed to'.",
        explanationBengali: "অনুমতি চাওয়া বোঝালে 'requested...might be allowed to' ব্যবহৃত হয়।"
    },
    {
        id: "di_412", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Double Sentence",
        question: "He said, \"I am ill. I cannot go.\"",
        options: ["He said that he was ill and could not go.", "He said that he is ill and cannot go.", "He says that he was ill and could not go.", "He said he was ill so he cannot go."],
        correctIndex: 0,
        explanation: "Both clauses change tense. 'Am' -> 'Was', 'Cannot' -> 'Could not'. Joined by 'and'.",
        explanationBengali: "উভয় অংশের tense পরিবর্তন হবে এবং 'and' দিয়ে যুক্ত হবে।"
    },
    {
        id: "di_413", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Reporting Verb Present",
        question: "He says, \"I am happy.\"",
        options: ["He says that he is happy.", "He says that he was happy.", "He said that he is happy.", "He said that he was happy."],
        correctIndex: 0,
        explanation: "If reporting verb is present ('says'), the tense of reported speech does not change.",
        explanationBengali: "Reporting verb present হলে tense-এর কোনো পরিবর্তন হয় না।"
    },
    {
        id: "di_414", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Wh-Question",
        question: "He said to me, \"Where are you going?\"",
        options: ["He asked me where I was going.", "He asked me where was I going.", "He asked me where am I going.", "He asked me that where I was going."],
correctIndex: 0,
        explanation: "'Wh' words act as conjunctions. Subject comes before verb ('I was'). No 'that'.",
        explanationBengali: "'Wh' শব্দ থাকলে তা-ই conjunction হয় এবং verb শেষে যায়।"
    },
    {
        id: "di_415", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Vocative Case",
        question: "He said, \"Bravo! You have done well.\"",
        options: ["He applauded him saying that he had done well.", "He said bravo he had done well.", "He exclaimed with joy that he had done well.", "He shouted that he had done well."],
        correctIndex: 0,
        explanation: "'Bravo' indicates applause. Use 'applauded...saying that'. 'Have done' -> 'Had done'.",
        explanationBengali: "প্রশংসা বোঝালে 'applauded...saying that' ব্যবহৃত হয়।"
    },
    {
        id: "di_416", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Must",
        question: "He said, \"I must go.\"",
        options: ["He said that he had to go.", "He said that he must went.", "He said that he must go.", "He said that he has to go."],
        correctIndex: 0,
        explanation: "'Must' usually changes to 'had to' in past indirect speech.",
        explanationBengali: "'Must' সাধারণত 'had to'-তে পরিবর্তিত হয়।"
    },
    {
        id: "di_417", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Pronoun Change",
        question: "I said to him, \"You are wrong.\"",
        options: ["I told him that he was wrong.", "I told him that you are wrong.", "I told him that I was wrong.", "I told him that he is wrong."],
        correctIndex: 0,
        explanation: "'You' changes according to the object ('him') -> 'he'. 'Are' -> 'Was'.",
        explanationBengali: "Second person (You) object অনুযায়ী পরিবর্তিত হয়।"
    },
    {
        id: "di_418", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Thank/Welcome",
        question: "He said to me, \"Thank you.\"",
        options: ["He thanked me.", "He said that he thanked me.", "He told me thank you.", "He requested me to thank."],
        correctIndex: 0,
        explanation: "Reporting verbs can be changed directly to 'thanked'.",
        explanationBengali: "সরাসরি 'thanked me' বলা হয়।"
    },
    {
        id: "di_419", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "He said, \"If I were a bird, I would fly.\"",
        options: ["He said that if he were a bird, he would fly.", "He said that if he had been a bird, he would have flown.", "He said that if he was a bird, he would fly.", "He said if he is a bird he will fly."],
        correctIndex: 0,
        explanation: "Unreal past conditions (subjunctive 'were') usually remain unchanged.",
        explanationBengali: "অবাস্তব শর্তে tense সাধারণত অপরিবর্তিত থাকে।"
    },
    {
        id: "di_420", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "He said, \"It was raining.\"",
        options: ["He said that it had been raining.", "He said that it was raining.", "He said that it has been raining.", "He said that it rained."],
        correctIndex: 0,
        explanation: "Past Continuous changes to Past Perfect Continuous.",
        explanationBengali: "Past Continuous পরিবর্তিত হয়ে Past Perfect Continuous হয়।"
    },
    {
        id: "di_421", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Exclamatory (What/How)",
        question: "He said, \"What a beautiful sight!\"",
        options: ["He exclaimed that it was a very beautiful sight.", "He said that it was a beautiful sight.", "He exclaimed what a beautiful sight it was.", "He asked what a beautiful sight."],
        correctIndex: 0,
explanation: "'What/How' in exclamations are replaced by 'very' or 'great'.",
        explanationBengali: "আশ্চর্যবোধক বাক্যে 'What/How' উঠে গিয়ে 'very' বসে।"
    },
    {
        id: "di_422", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Yes/No Question",
        question: "He asked, \"Do you like coffee?\"",
        options: ["He asked if I liked coffee.", "He asked did I like coffee.", "He asked that I liked coffee.", "He asked if I like coffee."],
        correctIndex: 0,
        explanation: "Use 'if'. Simple Present 'like' changes to Simple Past 'liked'.",
        explanationBengali: "Yes/No প্রশ্নে 'if' বসে এবং tense পরিবর্তন হয়।"
    },
    {
        id: "di_423", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Imperative Negative",
        question: "He said to me, \"Don't go there.\"",
        options: ["He told me not to go there.", "He told me do not go there.", "He asked me not go there.", "He ordered me that not to go there."],
        correctIndex: 0,
        explanation: "Imperative negative uses 'not to + V1'.",
        explanationBengali: "নেতিবাচক আদেশে 'not to' বসে।"
    },
    {
        id: "di_424", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Reporting Verb Future",
        question: "He will say, \"I am busy.\"",
        options: ["He will say that he is busy.", "He will say that he was busy.", "He would say that he is busy.", "He will say that I am busy."],
        correctIndex: 0,
        explanation: "If reporting verb is future ('will say'), tense does not change.",
        explanationBengali: "Reporting verb future হলে tense পরিবর্তন হয় না।"
    },
    {
        id: "di_425", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Address",
        question: "He said, \"Ladies and Gentlemen, listen to me.\"",
        options: ["Addressing them as ladies and gentlemen, he asked them to listen to him.", "He told ladies and gentlemen to listen to him.", "He said to ladies and gentlemen listen to him.", "He addressed ladies and gentlemen listen to me."],
        correctIndex: 0,
        explanation: "Use 'Addressing them as...' for direct address.",
        explanationBengali: "কাউকে সম্বোধন করলে 'Addressing as...' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "di_426", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Advice",
        question: "The doctor said to me, \"Take medicine daily.\"",
        options: ["The doctor advised me to take medicine daily.", "The doctor told me to take medicine daily.", "The doctor ordered me to take medicine daily.", "The doctor asked me to take medicine daily."],
        correctIndex: 0,
        explanation: "'Said to' changes to 'advised' for medical/expert opinion.",
        explanationBengali: "উপদেশ বোঝালে 'advised' বসে।"
    },
    {
        id: "di_427", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Time Word",
        question: "He said, \"I saw him yesterday.\"",
        options: ["He said that he had seen him the previous day.", "He said that he saw him yesterday.", "He said that he has seen him the previous day.", "He said that he had seen him yesterday."],
        correctIndex: 0,
        explanation: "'Yesterday' changes to 'the previous day'. Past Simple -> Past Perfect.",
        explanationBengali: "Yesterday -> The previous day এবং Past Indefinite -> Past Perfect."
    },
    {
        id: "di_428", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Good Morning",
        question: "He said, \"Good morning, father.\"",
        options: ["He wished his father good morning.", "He said good morning to his father.", "He told his father good morning.", "He exclaimed good morning father."],
correctIndex: 0,
        explanation: "Greetings like 'Good morning' use 'wished'.",
        explanationBengali: "শুভেচ্ছা বিনিময়ে 'wished' ব্যবহৃত হয়।"
    },
    {
        id: "di_429", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Prohibit",
        question: "He said to me, \"Do not smoke.\"",
        options: ["He forbade me to smoke.", "He told me not to smoke.", "He asked me to not smoke.", "He ordered me do not smoke."],
        correctIndex: 0, // Both A and B are correct forms, but 'forbade' is more specific/classic for prohibition.
        explanation: "'Forbade' carries the negative meaning, so 'not' is not used after it. Correct: 'forbade me to smoke'.",
        explanationBengali: "'Forbade' (নিষেধ করা) ব্যবহার করলে 'not' বসে না।"
    },
    {
        id: "di_430", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Present Perfect",
        question: "He said, \"I have done my work.\"",
        options: ["He said that he had done his work.", "He said that he has done his work.", "He said that he did his work.", "He said that he had done my work."],
        correctIndex: 0,
        explanation: "Present Perfect 'have done' changes to Past Perfect 'had done'.",
        explanationBengali: "Present Perfect পরিবর্তিত হয়ে Past Perfect হয়।"
    },
// --- SET 27: ADDITIONAL DIRECT AND INDIRECT SPEECH QUESTIONS (431-460) ---

    {
        id: "di_431", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Let with Proposal",
        question: "He said, \"Let us wait for the award.\"",
        options: ["He proposed that they should wait for the award.", "He said that let us wait for the award.", "He suggested to wait for the award.", "He ordered to wait for the award."],
        correctIndex: 0,
        explanation: "'Let us' suggests a proposal. Use 'proposed that + subject + should'.",
        explanationBengali: "'Let us' থাকলে 'proposed that' এবং 'should' বসে।"
    },
    {
        id: "di_432", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "He said, \"I work hard.\"",
        options: ["He said that he worked hard.", "He said that he works hard.", "He said that I work hard.", "He says that he worked hard."],
        correctIndex: 0,
        explanation: "Simple Present 'work' changes to Simple Past 'worked'.",
        explanationBengali: "Past Indefinite-এ verb-এর past form বসে।"
    },
    {
        id: "di_433", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Conditional Type 1",
        question: "He said, \"If it rains, I will not go.\"",
        options: ["He said that if it rained, he would not go.", "He said that if it rains, he will not go.", "He said that if it rained, he will not go.", "He asked if it rains he would not go."],
        correctIndex: 0,
        explanation: "Conditional Type 1 changes to Type 2 in indirect speech (Simple Present -> Simple Past, Will -> Would).",
        explanationBengali: "Conditional sentence-এ present -> past এবং will -> would হয়।"
    },
    {
        id: "di_434", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Exclamatory (What/How)",
        question: "She said, \"How tall the building is!\"",
        options: ["She exclaimed that the building was very tall.", "She said that the building is very tall.", "She exclaimed how tall the building was.", "She asked how tall the building is."],
        correctIndex: 0,
        explanation: "In exclamatory sentences, 'How' is replaced by 'very' before the adjective.",
        explanationBengali: "আশ্চর্যবোধক বাক্যে 'How' উঠে গিয়ে 'very' বসে।"
    },
    {
        id: "di_435", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "He said, \"I am reading a book.\"",
        options: ["He said that he was reading a book.", "He said that he is reading a book.", "He said that I was reading a book.", "He said that he had been reading a book."],
        correctIndex: 0,
        explanation: "Present Continuous 'am reading' changes to Past Continuous 'was reading'.",
        explanationBengali: "Present Continuous পরিবর্তিত হয়ে Past Continuous হয়।"
    },
    {
        id: "di_436", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Must (Obligation)",
        question: "He said, \"We must obey the laws.\"",
        options: ["He said that they must obey the laws.", "He said that they had to obey the laws.", "He said that they would obey the laws.", "He said that we must obey the laws."],
        correctIndex: 0, // 'Must' remains unchanged for general/permanent obligations.
        explanation: "When 'must' indicates a general principle or permanent obligation, it remains unchanged.",
        explanationBengali: "চিরস্থায়ী বাধ্যবাধকতা বোঝালে 'must' অপরিবর্তিত থাকে।"
    },
    {
        id: "di_437", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Interrogative (Wh-)",
        question: "He said to me, \"Why are you sad?\"",
options: ["He asked me why I was sad.", "He asked me why was I sad.", "He asked me why am I sad.", "He asked me that why I was sad."],
        correctIndex: 0,
        explanation: "'Wh' word acts as connective. 'Are you' changes to statement form 'I was'.",
        explanationBengali: "'Wh' শব্দ থাকলে তা-ই conjunction হয় এবং verb শেষে যায়।"
    },
    {
        id: "di_438", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Past Simple",
        question: "She said, \"I finished the work.\"",
        options: ["She said that she had finished the work.", "She said that she finished the work.", "She said that she has finished the work.", "She said that she finishes the work."],
        correctIndex: 0,
        explanation: "Simple Past 'finished' changes to Past Perfect 'had finished'.",
        explanationBengali: "Past Indefinite পরিবর্তিত হয়ে Past Perfect হয়।"
    },
    {
        id: "di_439", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Yes/No Question",
        question: "He said, \"Can you swim?\"",
        options: ["He asked if I could swim.", "He asked that if I could swim.", "He asked could I swim.", "He said if I can swim."],
        correctIndex: 0,
        explanation: "'Can' changes to 'could'. Use 'if' for Yes/No questions.",
        explanationBengali: "Can -> Could এবং Yes/No প্রশ্নে 'if' বসে।"
    },
    {
        id: "di_440", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Optative",
        question: "He said, \"May you succeed!\"",
        options: ["He wished that I might succeed.", "He prayed that you might succeed.", "He said that I might succeed.", "He wished that I may succeed."],
        correctIndex: 0,
        explanation: "Optative sentences use 'wished' or 'prayed'. 'May' becomes 'might'.",
        explanationBengali: "ইচ্ছা বোঝালে 'wished' এবং may -> might হয়।"
    },
    {
        id: "di_441", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Pronoun Change",
        question: "He said to her, \"I will help you.\"",
        options: ["He told her that he would help her.", "He told her that I would help her.", "He told her that he will help you.", "He said to her that he would help her."],
        correctIndex: 0,
        explanation: "'I' changes to 'he'. 'You' changes to 'her'. 'Will' changes to 'would'.",
        explanationBengali: "Pronoun এবং Tense উভয়ই পরিবর্তিত হবে।"
    },
    {
        id: "di_442", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Sir/Madam",
        question: "He said to the teacher, \"Sir, please explain this.\"",
        options: ["He respectfully requested the teacher to explain that.", "He requested the teacher to explain this.", "He told the teacher sir please explain that.", "He ordered the teacher to explain that."],
        correctIndex: 0,
        explanation: "'Sir' is replaced by 'respectfully'. 'Please' changes to 'requested'. 'This' becomes 'that'.",
        explanationBengali: "'Sir' থাকলে 'respectfully' এবং 'please' থাকলে 'requested' বসে।"
    },
    {
        id: "di_443", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Universal Truth",
        question: "He said, \"Honesty is the best policy.\"",
        options: ["He said that honesty is the best policy.", "He said that honesty was the best policy.", "He said that honesty has been the best policy.", "He asked if honesty is the best policy."],
        correctIndex: 0,
        explanation: "Proverbs and universal truths do not change tense.",
        explanationBengali: "প্রবাদ বাক্যের ক্ষেত্রে tense-এর পরিবর্তন হয় না।"
    },
    {
        id: "di_444", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Present Perfect",
question: "She said, \"I have passed.\"",
        options: ["She said that she had passed.", "She said that she has passed.", "She said that I had passed.", "She said that she passed."],
        correctIndex: 0,
        explanation: "Present Perfect 'have passed' changes to Past Perfect 'had passed'.",
        explanationBengali: "Present Perfect পরিবর্তিত হয়ে Past Perfect হয়।"
    },
    {
        id: "di_445", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Let (Proposal)",
        question: "She said, \"Let's go for a movie.\"",
        options: ["She proposed that they should go for a movie.", "She suggested to go for a movie.", "She ordered to go for a movie.", "She said that let them go for a movie."],
        correctIndex: 0,
        explanation: "'Let's' usually indicates a proposal. Structure: Proposed + that + subject + should.",
        explanationBengali: "'Let's' থাকলে 'proposed' এবং 'should' বসে।"
    },
    {
        id: "di_446", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Imperative",
        question: "The teacher said to the boys, \"Don't make a noise.\"",
        options: ["The teacher forbade the boys to make a noise.", "The teacher ordered the boys not make a noise.", "The teacher told the boys don't make a noise.", "The teacher asked the boys not to make a noise."],
        correctIndex: 0, // 'Forbade' implies negative, so 'not' is removed.
        explanation: "'Forbade' carries the negative meaning, so 'not' is removed. Alternatively: 'ordered...not to'.",
        explanationBengali: "'Forbade' (নিষেধ করা) ব্যবহার করলে 'not' বসে না।"
    },
    {
        id: "di_447", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Future Continuous",
        question: "He said, \"I will be waiting.\"",
        options: ["He said that he would be waiting.", "He said that he will be waiting.", "He said that he would wait.", "He said that he should be waiting."],
        correctIndex: 0,
        explanation: "'Will be' changes to 'would be'.",
        explanationBengali: "Future Continuous-এ 'will be' -> 'would be' হয়।"
    },
    {
        id: "di_448", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Question Tag",
        question: "He said to me, \"You are coming, aren't you?\"",
        options: ["He asked me if I was coming.", "He asked me whether I was coming or not.", "He told me that I was coming.", "He said to me that I was coming."],
        correctIndex: 0,
        explanation: "Question tags are removed in indirect speech and treated as normal interrogative sentences.",
        explanationBengali: "Indirect speech-এ question tag বাদ দিয়ে সাধারণ প্রশ্নবোধক বাক্যে রূপান্তর করতে হয়।"
    },
    {
        id: "di_449", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Exclamatory (Hurrah)",
        question: "The boys said, \"Hurrah! We have won.\"",
        options: ["The boys exclaimed with joy that they had won.", "The boys said hurrah they had won.", "The boys shouted that they won.", "The boys exclaimed with sorrow that they had won."],
        correctIndex: 0,
        explanation: "'Hurrah' indicates joy. Use 'exclaimed with joy'. 'Have won' -> 'Had won'.",
        explanationBengali: "আনন্দ বোঝালে 'exclaimed with joy' বসে।"
    },
    {
        id: "di_450", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "He said, \"I was playing.\"",
        options: ["He said that he had been playing.", "He said that he was playing.", "He said that he has been playing.", "He said that he played."],
        correctIndex: 0,
        explanation: "Past Continuous 'was playing' changes to Past Perfect Continuous 'had been playing'.",
explanationBengali: "Past Continuous পরিবর্তিত হয়ে Past Perfect Continuous হয়।"
    },
    {
        id: "di_451", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Multiple Sentences",
        question: "He said, \"I have a headache. I cannot work.\"",
        options: ["He said that he had a headache and could not work.", "He said that he has a headache and cannot work.", "He told that he had a headache so he cannot work.", "He said he had a headache and he cannot work."],
        correctIndex: 0,
        explanation: "Both verbs change tense. 'Have' -> 'Had', 'Cannot' -> 'Could not'. Connected by 'and'.",
        explanationBengali: "উভয় অংশের tense পরিবর্তন হবে এবং 'and' দিয়ে যুক্ত হবে।"
    },
    {
        id: "di_452", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Advice",
        question: "My father said to me, \"Avoid bad company.\"",
        options: ["My father advised me to avoid bad company.", "My father ordered me to avoid bad company.", "My father told me avoid bad company.", "My father asked me to avoid bad company."],
        correctIndex: 0,
        explanation: "'Said to' changes to 'advised' when giving advice.",
        explanationBengali: "উপদেশ বোঝালে 'advised' বসে।"
    },
    {
        id: "di_453", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Time Word",
        question: "He said, \"I am busy now.\"",
        options: ["He said that he was busy then.", "He said that he was busy now.", "He said that he is busy then.", "He said that he is busy now."],
        correctIndex: 0,
        explanation: "'Now' changes to 'then'. 'Am' -> 'Was'.",
        explanationBengali: "Now -> Then এবং Am -> Was হয়।"
    },
    {
        id: "di_454", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Modals (Must)",
        question: "He said, \"I must leave at once.\"",
        options: ["He said that he had to leave at once.", "He said that he must leave at once.", "He said that he would leave at once.", "He said that he has to leave at once."],
        correctIndex: 0,
        explanation: "'Must' indicating immediate necessity changes to 'had to'.",
        explanationBengali: "তাৎক্ষণিক প্রয়োজন বোঝালে 'must' পরিবর্তিত হয়ে 'had to' হয়।"
    },
    {
        id: "di_455", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Interrogative",
        question: "She said, \"Where do you live?\"",
        options: ["She asked where I lived.", "She asked where do I live.", "She asked where did I live.", "She asked where I live."],
        correctIndex: 0,
        explanation: "Simple Present 'do live' changes to Simple Past 'lived'. Question form changes to statement.",
        explanationBengali: "Simple Present প্রশ্ন Simple Past statement-এ পরিবর্তিত হয়।"
    },
    {
        id: "di_456", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "He said, \"I shall go.\"",
        options: ["He said that he would go.", "He said that he should go.", "He said that he will go.", "He said that he shall go."],
        correctIndex: 0,
        explanation: "'Shall' with 'I' becomes 'would' with 'he' in indirect speech.",
        explanationBengali: "'Shall' পরিবর্তিত হয়ে 'would' হয় (Subject পরিবর্তন সাপেক্ষে)।"
    },
    {
        id: "di_457", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Greeting",
        question: "He said, \"Goodbye, my friends.\"",
        options: ["He bade his friends goodbye.", "He said goodbye to his friends.", "He told his friends goodbye.", "He wished his friends goodbye."],
        correctIndex: 0,
        explanation: "For 'Goodbye', the reporting verb is 'bade'.",
        explanationBengali: "বিদায় সম্ভাষণে 'bade' ব্যবহৃত হয়।"
},
    {
        id: "di_458", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Address",
        question: "He said, \"Oh God! Help me.\"",
        options: ["He prayed to God to help him.", "He called God to help him.", "He asked God help him.", "He exclaimed God help him."],
        correctIndex: 0,
        explanation: "Addressing God implies a prayer. Use 'prayed to God'.",
        explanationBengali: "ঈশ্বরকে ডাকার অর্থ প্রার্থনা করা, তাই 'prayed to God' হবে।"
    },
    {
        id: "di_459", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Reporting Verb Past",
        question: "He said, \"It is raining.\"",
        options: ["He said that it was raining.", "He said that it is raining.", "He said that it has been raining.", "He said that it rains."],
        correctIndex: 0,
        explanation: "Simple Present 'is' changes to Simple Past 'was'.",
        explanationBengali: "Is -> Was হয়।"
    },
    {
        id: "di_460", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Assertive + Question",
        question: "He said, \"I am going. Will you come?\"",
        options: ["He said that he was going and asked if I would come.", "He said that he was going and asked will you come.", "He said that he is going and asked if I would come.", "He said that he was going and if I would come."],
        correctIndex: 0,
        explanation: "Combine statement and question using 'and asked'. Change tenses accordingly.",
        explanationBengali: "বিবৃতি এবং প্রশ্ন একসাথে থাকলে 'and asked' দিয়ে যুক্ত করতে হয়।"
    },
// --- SET 28: ADDITIONAL DIRECT AND INDIRECT SPEECH QUESTIONS (461-500) ---

    {
        id: "di_461", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Question (Wh-)",
        question: "He said to me, \"What are you doing?\"",
        options: ["He asked me what I was doing.", "He asked me what was I doing.", "He asked me what am I doing.", "He asked me that what I was doing."],
        correctIndex: 0,
        explanation: "'Wh' word acts as a conjunction. Subject comes before the verb ('I was'). Tense changes to past.",
        explanationBengali: "'Wh' শব্দ থাকলে তা-ই conjunction হয়। Verb শেষে যায় (was doing)।"
    },
    {
        id: "di_462", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Let (Wish)",
        question: "She said, \"Let me have some coffee.\"",
        options: ["She wished that she might have some coffee.", "She said that let her have some coffee.", "She requested to have some coffee.", "She ordered to have some coffee."],
        correctIndex: 0,
        explanation: "'Let me' implying a wish uses 'wished that...might'.",
        explanationBengali: "'Let me' দিয়ে ইচ্ছা প্রকাশ করলে 'wished...might' ব্যবহৃত হয়।"
    },
    {
        id: "di_463", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "He said, \"I will go to the market.\"",
        options: ["He said that he would go to the market.", "He said that he will go to the market.", "He said that he should go to the market.", "He said that I would go to the market."],
        correctIndex: 0,
        explanation: "'Will' changes to 'would' in indirect speech.",
        explanationBengali: "'Will' পরিবর্তিত হয়ে 'would' হয়।"
    },
    {
        id: "di_464", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Exclamatory (Joy)",
        question: "They said, \"Hurrah! We have won the match.\"",
        options: ["They exclaimed with joy that they had won the match.", "They said hurrah they had won the match.", "They shouted that they won the match.", "They exclaimed that they have won the match."],
        correctIndex: 0,
        explanation: "'Hurrah' implies joy. Use 'exclaimed with joy'. 'Have won' -> 'Had won'.",
        explanationBengali: "আনন্দ বোঝালে 'exclaimed with joy' এবং Present Perfect -> Past Perfect হয়।"
    },
    {
        id: "di_465", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Imperative (Negative)",
        question: "The teacher said to the student, \"Do not waste time.\"",
        options: ["The teacher forbade the student to waste time.", "The teacher ordered the student not to waste time.", "Both A and B.", "The teacher asked the student do not waste time."],
        correctIndex: 2, // Both are correct.
        explanation: "Both 'forbade...to' and 'ordered...not to' are correct forms for negative imperatives.",
        explanationBengali: "নেতিবাচক আদেশে 'forbade' বা 'ordered...not to' দুটোই সঠিক।"
    },
    {
        id: "di_466", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Present Perfect",
        question: "He said, \"I have seen the Taj Mahal.\"",
        options: ["He said that he had seen the Taj Mahal.", "He said that he has seen the Taj Mahal.", "He said that he saw the Taj Mahal.", "He said that I had seen the Taj Mahal."],
        correctIndex: 0,
        explanation: "Present Perfect 'have seen' changes to Past Perfect 'had seen'.",
        explanationBengali: "Present Perfect -> Past Perfect হয়।"
    },
    {
        id: "di_467", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Modals (Must)",
        question: "She said, \"I must complete the project.\"",
        options: ["She said that she had to complete the project.", "She said that she must complete the project.", "She said that she would complete the project.", "She said that she has to complete the project."],
        correctIndex: 0,
        explanation: "'Must' indicating necessity changes to 'had to'.",
        explanationBengali: "প্রয়োজনীয়তা বোঝালে 'must' পরিবর্তিত হয়ে 'had to' হয়।"
    },
    {
        id: "di_468", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Vocative Case",
        question: "He said, \"Brother, help me.\"",
        options: ["Addressing him as brother, he requested him to help him.", "He told his brother to help him.", "He asked his brother help me.", "He said brother help him."],
        correctIndex: 0,
        explanation: "When addressing someone ('Brother'), use 'Addressing him as...'.",
        explanationBengali: "কাউকে সম্বোধন করলে 'Addressing as...' গঠন ব্যবহৃত হয়।"
    },
    {
        id: "di_469", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Yes/No Question",
        question: "He asked me, \"Did you see the bird?\"",
        options: ["He asked me if I had seen the bird.", "He asked me if I saw the bird.", "He asked me did I see the bird.", "He asked me whether I see the bird."],
        correctIndex: 0,
        explanation: "Simple Past 'did see' changes to Past Perfect 'had seen'. Use 'if'.",
        explanationBengali: "Past Indefinite প্রশ্নে 'if' বসে এবং tense Past Perfect হয়।"
    },
    {
        id: "di_470", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Time Word",
        question: "He said, \"I will do it now.\"",
        options: ["He said that he would do it then.", "He said that he will do it now.", "He said that he would do it now.", "He said that he will do it then."],
        correctIndex: 0,
        explanation: "'Now' changes to 'then'. 'Will' -> 'would'.",
        explanationBengali: "Now -> Then এবং Will -> Would হয়।"
    },
    {
        id: "di_471", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Optative (Curse)",
        question: "The old woman said to him, \"May you die!\"",
        options: ["The old woman cursed him that he might die.", "The old woman prayed that he might die.", "The old woman wished that he might die.", "The old woman said that he might die."],
        correctIndex: 0,
        explanation: "Negative wish/curse uses 'cursed'. 'May' -> 'might'.",
        explanationBengali: "অভিশাপ দিলে 'cursed' বসে।"
    },
    {
        id: "di_472", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Double Clause",
        question: "He said, \"It is late and I must go.\"",
        options: ["He said that it was late and he had to go.", "He said that it is late and he must go.", "He said that it was late and he must go.", "He said that it is late and he had to go."],
        correctIndex: 0,
        explanation: "'Is' -> 'Was'. 'Must' -> 'Had to'.",
        explanationBengali: "উভয় অংশের tense পরিবর্তন হবে।"
    },
    {
        id: "di_473", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Past",
        question: "She said, \"I wrote a letter.\"",
        options: ["She said that she had written a letter.", "She said that she wrote a letter.", "She said that she has written a letter.", "She said that she was writing a letter."],
        correctIndex: 0,
        explanation: "Simple Past 'wrote' changes to Past Perfect 'had written'.",
        explanationBengali: "Past Indefinite পরিবর্তিত হয়ে Past Perfect হয়।"
    },
    {
        id: "di_474", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Exclamatory (Sorrow)",
        question: "He said, \"Ah! My cat is dead.\"",
        options: ["He exclaimed with sorrow that his cat was dead.", "He cried that his cat is dead.", "He said ah his cat was dead.", "He exclaimed that his cat was dead."],
        correctIndex: 0,
        explanation: "'Ah' implies sorrow. 'Is' -> 'Was'.",
        explanationBengali: "দুঃখ বোঝালে 'exclaimed with sorrow' হয়।"
    },
    {
        id: "di_475", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Let (Suggestion)",
        question: "He said, \"Let's play football.\"",
        options: ["He suggested that they should play football.", "He said to play football.", "He ordered to play football.", "He asked to play football."],
        correctIndex: 0,
        explanation: "'Let's' indicates a suggestion. Use 'suggested that...should'.",
        explanationBengali: "'Let's' থাকলে 'suggested' এবং 'should' বসে।"
    },
    {
        id: "di_476", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Present Continuous",
        question: "He said, \"The baby is crying.\"",
        options: ["He said that the baby was crying.", "He said that the baby is crying.", "He said that the baby had been crying.", "He said that the baby cried."],
        correctIndex: 0,
        explanation: "Present Continuous 'is crying' changes to Past Continuous 'was crying'.",
        explanationBengali: "Present Continuous -> Past Continuous হয়।"
    },
    {
        id: "di_477", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Pronoun (We)",
        question: "The editor said, \"We have published the news.\"",
        options: ["The editor said that they had published the news.", "The editor said that we had published the news.", "The editor said that he had published the news.", "The editor said that they have published the news."],
        correctIndex: 0, // Editorial 'We' becomes 'They' or 'It' (for newspaper). 'They' is standard for staff.
        explanation: "Editorial 'We' usually changes to 'They' or 'It'. 'Have published' -> 'Had published'.",
        explanationBengali: "সম্পাদকীয় 'We' পরিবর্তিত হয়ে 'They' হয়। Tense-ও পরিবর্তিত হবে।"
    },
    {
        id: "di_478", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Reporting Verb Future",
        question: "She says, \"I will not go.\"",
        options: ["She says that she will not go.", "She says that she would not go.", "She said that she will not go.", "She said that she would not go."],
        correctIndex: 0,
        explanation: "Reporting verb is present ('says'), so tense inside quotes does not change.",
        explanationBengali: "Reporting verb present হলে tense পরিবর্তন হয় না।"
    },
    {
        id: "di_479", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Imperative Request",
        question: "He said to me, \"Please help me.\"",
        options: ["He requested me to help him.", "He told me to help him.", "He ordered me to help him.", "He said to me to help him."],
        correctIndex: 0,
        explanation: "'Please' changes to 'requested'. Use 'to + V1'.",
        explanationBengali: "'Please' থাকলে 'requested' বসে।"
    },
    {
        id: "di_480", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Question (Modal)",
        question: "He asked, \"Shall I open the door?\"",
        options: ["He asked if he should open the door.", "He asked if he would open the door.", "He asked that if he should open the door.", "He asked to open the door."],
        correctIndex: 0, // 'Shall I' asking for permission/advice changes to 'Should'.
        explanation: "'Shall I' asking for advice/instruction changes to 'if he should'.",
        explanationBengali: "পরামর্শ বা নির্দেশ চাওয়ার ক্ষেত্রে 'Shall' পরিবর্তিত হয়ে 'Should' হয়।"
    },
    {
        id: "di_481", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Universal Truth",
        question: "He said, \"Man is mortal.\"",
        options: ["He said that man is mortal.", "He said that man was mortal.", "He said that man has been mortal.", "He said that man will be mortal."],
        correctIndex: 0,
        explanation: "Universal truths do not change tense.",
        explanationBengali: "চিরন্তন সত্যের ক্ষেত্রে tense পরিবর্তন হয় না।"
    },
    {
        id: "di_482", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Nearness Words",
        question: "He said, \"I like this book.\"",
        options: ["He said that he liked that book.", "He said that he likes this book.", "He said that he liked this book.", "He said that he likes that book."],
        correctIndex: 0,
explanation: "'Like' -> 'Liked'. 'This' -> 'That'.",
        explanationBengali: "Like -> Liked এবং This -> That হয়।"
    },
    {
        id: "di_483", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Optative",
        question: "They said, \"Long live the King!\"",
        options: ["They prayed that the King might live long.", "They said that the King might live long.", "They wished that the King lives long.", "They prayed that the King may live long."],
        correctIndex: 0,
        explanation: "Optative 'Long live' changes to 'prayed that...might live long'.",
        explanationBengali: "দীর্ঘায়ু কামনা করলে 'prayed that...might live long' হয়।"
    },
    {
        id: "di_484", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Past Perfect",
        question: "He said, \"I had done it.\"",
        options: ["He said that he had done it.", "He said that he has done it.", "He said that he had been done it.", "He said that he did it."],
        correctIndex: 0,
        explanation: "Past Perfect tense remains unchanged in indirect speech.",
        explanationBengali: "Past Perfect Tense-এর কোনো পরিবর্তন হয় না।"
    },
    {
        id: "di_485", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Imperative",
        question: "He said, \"Go away.\"",
        options: ["He ordered to go away.", "He said to go away.", "He asked to go away.", "He told to go away."],
        correctIndex: 0,
        explanation: "Imperative command. 'Said' changes to 'ordered'.",
        explanationBengali: "আদেশ বোঝালে 'ordered' বসে।"
    },
    {
        id: "di_486", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Exclamatory (Applause)",
        question: "He said, \"Bravo! You played well.\"",
        options: ["He applauded him saying that he had played well.", "He said bravo that he played well.", "He exclaimed that he played well.", "He shouted that he played well."],
        correctIndex: 0,
        explanation: "'Bravo' changes to 'applauded...saying that'. Past Simple -> Past Perfect.",
        explanationBengali: "প্রশংসা বোঝালে 'applauded...saying that' বসে।"
    },
    {
        id: "di_487", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Conditionals",
        question: "He said, \"If I had money, I would buy a car.\"",
        options: ["He said that if he had had money, he would have bought a car.", "He said that if he had money, he would buy a car.", "He said that if he has money, he will buy a car.", "He said that if he had money, he would have bought a car."],
        correctIndex: 0, // Type 2 (unreal present) changes to Type 3 (unreal past) OR remains unchanged. Type 3 is strictly grammatically correct for backshift.
        // However, standard exams often keep Type 2 unchanged to show 'unreal' state. 
        // Let's stick to the 'unchanged' rule for unreal past conditions as it's common.
        // Actually, let's provide the "unchanged" option as standard for permanent unreal states.
        // Correction: Option 1 (unchanged).
        correctIndex: 1,
        explanation: "Unreal past conditionals (Type 2) often remain unchanged in indirect speech.",
        explanationBengali: "অবাস্তব শর্তে tense সাধারণত অপরিবর্তিত থাকে।"
    },
    {
        id: "di_488", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Future Perfect",
        question: "He said, \"I will have finished.\"",
        options: ["He said that he would have finished.", "He said that he will have finished.", "He said that he would finish.", "He said that he will finish."],
        correctIndex: 0,
        explanation: "'Will have' changes to 'would have'.",
        explanationBengali: "'Will have' -> 'would have' হয়।"
    },
    {
        id: "di_489", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Thank You",
        question: "He said to me, \"Thank you for your help.\"",
        options: ["He thanked me for my help.", "He said thank you for my help.", "He told me thank you for help.", "He requested me to thank."],
        correctIndex: 0,
        explanation: "Change 'said to...Thank you' directly to 'thanked'.",
        explanationBengali: "সরাসরি 'thanked me for my help' বলা হয়।"
    },
    {
        id: "di_490", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Dare/Need",
        question: "He said, \"I need not go.\"",
        options: ["He said that he need not go.", "He said that he needed not go.", "He said that he did not need to go.", "He said that he need not to go."],
        correctIndex: 0, // 'Need not' (modal) usually remains unchanged.
        explanation: "'Need not' as a modal auxiliary usually remains unchanged in indirect speech.",
        explanationBengali: "'Need not' (modal) সাধারণত অপরিবর্তিত থাকে।"
    },
    {
        id: "di_491", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Present",
        question: "She said, \"I like ice cream.\"",
        options: ["She said that she liked ice cream.", "She said that she likes ice cream.", "She said that I liked ice cream.", "She said that she like ice cream."],
        correctIndex: 0,
        explanation: "Simple Present 'like' changes to Simple Past 'liked'.",
        explanationBengali: "Present Indefinite -> Past Indefinite হয়।"
    },
    {
        id: "di_492", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "By God",
        question: "He said, \"By God! I am innocent.\"",
        options: ["He swore by God that he was innocent.", "He said by God that he was innocent.", "He exclaimed by God that he was innocent.", "He prayed to God that he was innocent."],
        correctIndex: 0,
        explanation: "'By God' indicates swearing/oath. Use 'swore by God'.",
        explanationBengali: "শপথ করা বোঝালে 'swore by God' ব্যবহৃত হয়।"
    },
    {
        id: "di_493", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Had better",
        question: "He said, \"You had better go.\"",
        options: ["He said that I had better go.", "He said that I have better go.", "He said that I had better went.", "He advised me to go."],
        correctIndex: 0, // 'Had better' remains unchanged.
        explanation: "'Had better' remains unchanged in indirect speech.",
        explanationBengali: "'Had better' অপরিবর্তিত থাকে।"
    },
    {
        id: "di_494", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Pronoun",
        question: "He said to them, \"You are late.\"",
        options: ["He told them that they were late.", "He told them that you were late.", "He told them that we were late.", "He told them that they are late."],
        correctIndex: 0,
        explanation: "'You' (plural) refers to 'them', so it changes to 'they'.",
        explanationBengali: "'You' object 'them' অনুযায়ী পরিবর্তিত হয়ে 'they' হবে।"
    },
    {
        id: "di_495", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Let (Condition)",
        question: "He said, \"Let it rain, I will go.\"",
        options: ["He said that even if it rained, he would go.", "He said that let it rain he would go.", "He ordered it to rain and he would go.", "He suggested that it should rain."],
        correctIndex: 0,
        explanation: "'Let' implying a condition/supposition changes to 'even if'.",
        explanationBengali: "শর্ত বা উপেক্ষা বোঝালে 'Let' পরিবর্তিত হয়ে 'even if' হয়।"
    },
    {
        id: "di_496", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Interrogative",
        question: "He said, \"Who is there?\"",
        options: ["He asked who was there.", "He asked who is there.", "He asked who there was.", "He asked that who was there."],
        correctIndex: 0,
        explanation: "Present 'is' changes to Past 'was'. 'Who' connects the clause.",
        explanationBengali: "Is -> Was হয় এবং 'who' conjunction হিসেবে কাজ করে।"
    },
    {
        id: "di_497", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Past Continuous",
        question: "She said, \"I was waiting.\"",
        options: ["She said that she had been waiting.", "She said that she was waiting.", "She said that she waited.", "She said that she has been waiting."],
        correctIndex: 0,
        explanation: "Past Continuous changes to Past Perfect Continuous.",
        explanationBengali: "Past Continuous -> Past Perfect Continuous হয়।"
    },
    {
        id: "di_498", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "hard", topic: "Good Night",
        question: "He said, \"Good night, sir.\"",
        options: ["He bade the sir good night.", "He respectfully bade him good night.", "He said good night to sir.", "He wished good night sir."],
        correctIndex: 1, // 'Respectfully' adds the nuance of 'sir'.
        explanation: "'Good night' uses 'bade'. 'Sir' adds 'respectfully'.",
        explanationBengali: "বিদায় সম্ভাষণে 'bade' এবং 'sir' থাকলে 'respectfully' বসে।"
    },
    {
        id: "di_499", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "moderate", topic: "Tag Question",
        question: "He said, \"It is a nice day, isn't it?\"",
        options: ["He said that it was a nice day.", "He asked if it was a nice day.", "He remarked that it was a nice day.", "He said that it is a nice day isn't it."],
        correctIndex: 0, // Or 'He remarked that it was a nice day'. Usually tags turn into simple statements in indirect if rhetorical.
        // Let's go with 'remarked' if available, or simple statement. Option 0 is simple statement. Option 2 is 'remarked'. Option 2 is better style.
        correctIndex: 2,
        explanation: "Question tags often turn into statements. 'Remarked' fits the context well.",
        explanationBengali: "Tag question-এর ক্ষেত্রে সাধারণ বিবৃতি বা 'remarked' ব্যবহার করা হয়।"
    },
    {
        id: "di_500", chapter: "Direct & Indirect Speech", type: "grammar", difficulty: "easy", topic: "Simple Future",
        question: "He said, \"I shall come.\"",
        options: ["He said that he would come.", "He said that he should come.", "He said that he will come.", "He said that he shall come."],
        correctIndex: 0,
        explanation: "'Shall' with 1st person changes to 'would' with 3rd person.",
        explanationBengali: "'Shall' পরিবর্তিত হয়ে 'would' হয়।"
    },
// --- SET 29: SYNONYMS QUESTIONS (501-525) ---

    {
        id: "syn_501", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: ALERT",
        options: ["Watchful", "Sleepy", "Lazy", "Slow"],
        correctIndex: 0,
        explanation: "Alert means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant.",
        explanationBengali: "Alert মানে সতর্ক বা সজাগ।"
    },
    {
        id: "syn_502", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: BRIEF",
        options: ["Long", "Short", "Detailed", "Complex"],
        correctIndex: 1,
        explanation: "Brief means of short duration.",
        explanationBengali: "Brief মানে সংক্ষিপ্ত।"
    },
    {
        id: "syn_503", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: CACOPHONY",
        options: ["Harmony", "Noise", "Melody", "Silence"],
        correctIndex: 1,
        explanation: "Cacophony means a harsh, discordant mixture of sounds.",
        explanationBengali: "Cacophony মানে শ্রুতিকটু শব্দ বা কোলাহল।"
    },
    {
        id: "syn_504", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: DEFER",
        options: ["Hasten", "Postpone", "Accelerate", "Ignore"],
        correctIndex: 1,
        explanation: "Defer means to put off (an action or event) to a later time; postpone.",
        explanationBengali: "Defer মানে স্থগিত রাখা বা দেরি করা।"
    },
    {
        id: "syn_505", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: ELDERLY",
        options: ["Young", "Aged", "Childish", "Infant"],
        correctIndex: 1,
        explanation: "Elderly means (of a person) old or aging.",
        explanationBengali: "Elderly মানে বয়স্ক।"
    },
    {
        id: "syn_506", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: FEROCIOUS",
        options: ["Gentle", "Fierce", "Calm", "Tame"],
        correctIndex: 1,
        explanation: "Ferocious means savagely fierce, cruel, or violent.",
        explanationBengali: "Ferocious মানে হিংস্র বা ভয়ানক।"
    },
    {
        id: "syn_507", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: GENUINE",
        options: ["Fake", "Authentic", "False", "Artificial"],
        correctIndex: 1,
        explanation: "Genuine means truly what something is said to be; authentic.",
        explanationBengali: "Genuine মানে খাঁটি বা আসল।"
    },
    {
        id: "syn_508", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: HUGE",
        options: ["Tiny", "Small", "Massive", "Little"],
        correctIndex: 2,
        explanation: "Huge means extremely large; massive.",
        explanationBengali: "Huge মানে বিশাল বা প্রকাণ্ড।"
    },
    {
        id: "syn_509", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: IMPECCABLE",
        options: ["Faulty", "Flawless", "Imperfect", "Bad"],
        correctIndex: 1,
        explanation: "Impeccable means (of behavior, performance, or appearance) in accordance with the highest standards of propriety; faultless.",
        explanationBengali: "Impeccable মানে নিখুঁত বা ত্রুটিহীন।"
    },
    {
        id: "syn_510", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: JOVIAL",
        options: ["Sad", "Cheerful", "Gloomy", "Angry"],
        correctIndex: 1,
        explanation: "Jovial means cheerful and friendly.",
        explanationBengali: "Jovial মানে প্রফুল্ল বা হাসিখুশি।"
    },
    {
        id: "syn_511", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
question: "Select the synonym of: KIND",
        options: ["Cruel", "Helpful", "Mean", "Rude"],
        correctIndex: 1,
        explanation: "Kind means having or showing a friendly, generous, and considerate nature.",
        explanationBengali: "Kind মানে দয়ালু বা সাহায্যকারী।"
    },
    {
        id: "syn_512", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: LETHARGY",
        options: ["Energy", "Sluggishness", "Activity", "Vigor"],
        correctIndex: 1,
        explanation: "Lethargy means a lack of energy and enthusiasm.",
        explanationBengali: "Lethargy মানে আলস্য বা জড়া।"
    },
    {
        id: "syn_513", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: MUNDANE",
        options: ["Exciting", "Ordinary", "Extraordinary", "Rare"],
        correctIndex: 1,
        explanation: "Mundane means lacking interest or excitement; dull.",
        explanationBengali: "Mundane মানে সাধারণ বা একঘেয়ে।"
    },
    {
        id: "syn_514", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: NEAR",
        options: ["Far", "Close", "Distant", "Remote"],
        correctIndex: 1,
        explanation: "Near means at or to a short distance away; close.",
        explanationBengali: "Near মানে কাছে বা নিকটবর্তী।"
    },
    {
        id: "syn_515", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: OBSCURE",
        options: ["Clear", "Vague", "Bright", "Famous"],
        correctIndex: 1,
        explanation: "Obscure means not discovered or known about; uncertain.",
        explanationBengali: "Obscure মানে অস্পষ্ট বা দুর্বোধ্য।"
    },
    {
        id: "syn_516", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: PRUDENT",
        options: ["Careless", "Wise", "Foolish", "Rash"],
        correctIndex: 1,
        explanation: "Prudent means acting with or showing care and thought for the future.",
        explanationBengali: "Prudent মানে বিচক্ষণ বা দূরদর্শী।"
    },
    {
        id: "syn_517", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: QUIET",
        options: ["Loud", "Silent", "Noisy", "Talkative"],
        correctIndex: 1,
        explanation: "Quiet means making little or no noise.",
        explanationBengali: "Quiet মানে শান্ত বা নীরব।"
    },
    {
        id: "syn_518", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: RECTIFY",
        options: ["Worsen", "Correct", "Destroy", "Ignore"],
        correctIndex: 1,
        explanation: "Rectify means put (something) right; correct.",
        explanationBengali: "Rectify মানে সংশোধন করা।"
    },
    {
        id: "syn_519", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: SCARCE",
        options: ["Abundant", "Rare", "Plentiful", "Common"],
        correctIndex: 1,
        explanation: "Scarce means (especially of food, money, or some other resource) insufficient for the demand.",
        explanationBengali: "Scarce মানে অপ্রতুল বা বিরল।"
    },
    {
        id: "syn_520", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: TRUST",
        options: ["Doubt", "Believe", "Fear", "Hate"],
        correctIndex: 1,
        explanation: "Trust means firm belief in the reliability, truth, ability, or strength of someone or something.",
        explanationBengali: "Trust মানে বিশ্বাস করা।"
    },
    {
        id: "syn_521", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: UBIQUITOUS",
        options: ["Rare", "Omnipresent", "Scarce", "Unique"],
        correctIndex: 1,
        explanation: "Ubiquitous means present, appearing, or found everywhere.",
        explanationBengali: "Ubiquitous মানে সর্বব্যাপী।"
    },
    {
        id: "syn_522", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: VIGILANT",
        options: ["Careless", "Watchful", "Sleepy", "Ignorant"],
        correctIndex: 1,
        explanation: "Vigilant means keeping careful watch for possible danger or difficulties.",
        explanationBengali: "Vigilant মানে সতর্ক।"
    },
    {
        id: "syn_523", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: WEALTHY",
        options: ["Poor", "Rich", "Needy", "Broke"],
        correctIndex: 1,
        explanation: "Wealthy means having a great deal of money, resources, or assets; rich.",
        explanationBengali: "Wealthy মানে ধনী।"
    },
    {
        id: "syn_524", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: YEARN",
        options: ["Dislike", "Crave", "Hate", "Ignore"],
        correctIndex: 1,
        explanation: "Yearn means have an intense feeling of longing for something, typically something that one has lost or been separated from.",
        explanationBengali: "Yearn মানে আকাঙ্ক্ষা করা বা ব্যাকুল হওয়া।"
    },
    {
        id: "syn_525", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: ZENITH",
        options: ["Bottom", "Peak", "Base", "Start"],
        correctIndex: 1,
        explanation: "Zenith means the time at which something is most powerful or successful; the peak.",
        explanationBengali: "Zenith মানে শীর্ষবিন্দু বা চূড়া।"
    },
// --- SET 30: SYNONYMS QUESTIONS (526-550) ---

    {
        id: "syn_526", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: BEGIN",
        options: ["Stop", "Commence", "Finish", "End"],
        correctIndex: 1,
        explanation: "Commence means to start or begin.",
        explanationBengali: "Commence মানে শুরু করা।"
    },
    {
        id: "syn_527", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: DILIGENT",
        options: ["Lazy", "Industrious", "Slow", "Careless"],
        correctIndex: 1,
        explanation: "Industrious means diligent and hard-working.",
        explanationBengali: "Industrious মানে পরিশ্রমী।"
    },
    {
        id: "syn_528", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: EPHEMERAL",
        options: ["Lasting", "Transient", "Permanent", "Eternal"],
        correctIndex: 1,
        explanation: "Transient means lasting only for a short time; impermanent.",
        explanationBengali: "Transient মানে ক্ষণস্থায়ী।"
    },
    {
        id: "syn_529", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: FRAGILE",
        options: ["Strong", "Delicate", "Tough", "Sturdy"],
        correctIndex: 1,
        explanation: "Delicate means easily broken or damaged; fragile.",
        explanationBengali: "Delicate মানে ভঙ্গুর বা নাজুক।"
    },
    {
        id: "syn_530", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: HAPPY",
        options: ["Sad", "Joyful", "Angry", "Upset"],
        correctIndex: 1,
        explanation: "Joyful means feeling, expressing, or causing great pleasure and happiness.",
        explanationBengali: "Joyful মানে আনন্দিত।"
    },
    {
        id: "syn_531", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: INEVITABLE",
        options: ["Avoidable", "Unavoidable", "Uncertain", "Doubtful"],
        correctIndex: 1,
        explanation: "Unavoidable means not able to be avoided, prevented, or ignored; inevitable.",
        explanationBengali: "Unavoidable মানে অনিবার্য।"
    },
    {
        id: "syn_532", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: LETHARGIC",
        options: ["Active", "Sluggish", "Energetic", "Lively"],
        correctIndex: 1,
        explanation: "Sluggish means slow-moving or inactive.",
        explanationBengali: "Sluggish মানে ধীরগতি বা অলস।"
    },
    {
        id: "syn_533", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: MISTAKE",
        options: ["Accuracy", "Error", "Truth", "Fact"],
        correctIndex: 1,
        explanation: "Error means a mistake.",
        explanationBengali: "Error মানে ভুল।"
    },
    {
        id: "syn_534", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: NEFARIOUS",
        options: ["Good", "Wicked", "Kind", "Gentle"],
        correctIndex: 1,
        explanation: "Wicked means evil or morally wrong.",
        explanationBengali: "Wicked মানে দুষ্ট বা পাপিষ্ঠ।"
    },
    {
        id: "syn_535", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: OBSTINATE",
        options: ["Flexible", "Stubborn", "Yielding", "Pliant"],
        correctIndex: 1,
        explanation: "Stubborn means having or showing dogged determination not to change one's attitude or position.",
        explanationBengali: "Stubborn মানে জেদি।"
    },
    {
        id: "syn_536", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: PRETTY",
        options: ["Ugly", "Beautiful", "Plain", "Simple"],
        correctIndex: 1,
        explanation: "Beautiful means pleasing the senses or mind aesthetically.",
        explanationBengali: "Beautiful মানে সুন্দর।"
    },
    {
        id: "syn_537", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: QUELL",
        options: ["Incite", "Suppress", "Encourage", "Agitate"],
        correctIndex: 1,
        explanation: "Suppress means forcibly put an end to.",
        explanationBengali: "Suppress মানে দমন করা।"
    },
    {
        id: "syn_538", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: ROBUST",
        options: ["Weak", "Strong", "Fragile", "Frau"],
        correctIndex: 1,
        explanation: "Strong means having the power to move heavy weights or perform other physically demanding tasks.",
        explanationBengali: "Strong মানে শক্তিশালী বা মজবুত।"
    },
    {
        id: "syn_539", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: SMART",
        options: ["Stupid", "Intelligent", "Dull", "Slow"],
        correctIndex: 1,
        explanation: "Intelligent means having or showing intelligence, especially of a high level.",
        explanationBengali: "Intelligent মানে বুদ্ধিমান।"
    },
    {
        id: "syn_540", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: TACITURN",
        options: ["Talkative", "Silent", "Loquacious", "Chatty"],
        correctIndex: 1,
        explanation: "Silent means not making or accompanied by any sound.",
        explanationBengali: "Silent মানে নীরব বা স্বল্পভাষী।"
    },
    {
        id: "syn_541", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: UBIQUITOUS",
        options: ["Rare", "Omnipresent", "Scarce", "Few"],
        correctIndex: 1,
        explanation: "Omnipresent means widely or constantly encountered; common or widespread.",
        explanationBengali: "Omnipresent মানে সর্বব্যাপী।"
    },
    {
        id: "syn_542", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: VACANT",
        options: ["Full", "Empty", "Occupied", "Busy"],
        correctIndex: 1,
        explanation: "Empty means containing nothing; not filled or occupied.",
        explanationBengali: "Empty মানে খালি বা শূন্য।"
    },
    {
        id: "syn_543", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: WARY",
        options: ["Careless", "Cautious", "Rash", "Reckless"],
        correctIndex: 1,
        explanation: "Cautious means careful to avoid potential problems or dangers.",
        explanationBengali: "Cautious মানে সতর্ক।"
    },
    {
        id: "syn_544", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: YEARN",
        options: ["Dislike", "Long", "Hate", "Dread"],
        correctIndex: 1,
        explanation: "Long means to have a strong wish or desire.",
        explanationBengali: "Long মানে আকাঙ্ক্ষা করা।"
    },
    {
        id: "syn_545", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: ZEAL",
        options: ["Apathy", "Enthusiasm", "Indifference", "Laziness"],
        correctIndex: 1,
        explanation: "Enthusiasm means intense and eager enjoyment, interest, or approval.",
        explanationBengali: "Enthusiasm মানে প্রবল উৎসাহ।"
    },
    {
        id: "syn_546", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: ABATE",
        options: ["Increase", "Decrease", "Prolong", "Expand"],
        correctIndex: 1,
        explanation: "Decrease means make or become smaller or fewer in size, amount, intensity, or degree.",
        explanationBengali: "Decrease মানে কমানো বা হ্রাস পাওয়া।"
    },
    {
        id: "syn_547", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: BENEVOLENT",
        options: ["Cruel", "Kind", "Mean", "Selfish"],
        correctIndex: 1,
        explanation: "Kind means having or showing a friendly, generous, and considerate nature.",
        explanationBengali: "Kind মানে দয়ালু বা পরোপকারী।"
    },
    {
        id: "syn_548", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: CALM",
        options: ["Stormy", "Peaceful", "Wild", "Rough"],
        correctIndex: 1,
        explanation: "Peaceful means free from disturbance; tranquil.",
        explanationBengali: "Peaceful মানে শান্ত।"
    },
    {
        id: "syn_549", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: DEARTH",
        options: ["Abundance", "Scarcity", "Plenty", "Excess"],
        correctIndex: 1,
        explanation: "Scarcity means the state of being scarce or in short supply; shortage.",
        explanationBengali: "Scarcity মানে অভাব বা অপ্রতুলতা।"
    },
    {
        id: "syn_550", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: ECSTASY",
        options: ["Misery", "Joy", "Sadness", "Grief"],
        correctIndex: 1,
        explanation: "Joy means a feeling of great pleasure and happiness.",
        explanationBengali: "Joy মানে পরমানন্দ বা উল্লাস।"
    },
// --- SET 31: SYNONYMS QUESTIONS (551-575) ---

    {
        id: "syn_551", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: FABULOUS",
        options: ["Terrible", "Wonderful", "Average", "Common"],
        correctIndex: 1,
        explanation: "Fabulous means extraordinary, especially extraordinarily large.",
        explanationBengali: "Fabulous মানে চমৎকার বা অসাধারণ।"
    },
    {
        id: "syn_552", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: GHASTLY",
        options: ["Pleasant", "Horrible", "Bright", "Soft"],
        correctIndex: 1,
        explanation: "Ghastly means causing great horror or fear; frightful or macabre.",
        explanationBengali: "Ghastly মানে ভয়ানক বা বীভৎস।"
    },
    {
        id: "syn_553", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: HAGGARD",
        options: ["Healthy", "Gaunt", "Strong", "Fresh"],
        correctIndex: 1,
        explanation: "Haggard means looking exhausted and unwell, especially from fatigue, worry, or suffering.",
        explanationBengali: "Haggard মানে শীর্ণ বা ক্লিষ্ট।"
    },
    {
        id: "syn_554", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: IGNITE",
        options: ["Extinguish", "Kindle", "Dampen", "Freeze"],
        correctIndex: 1,
        explanation: "Ignite means catch fire or cause to catch fire.",
        explanationBengali: "Ignite মানে জ্বলা বা জ্বালানো।"
    },
    {
        id: "syn_555", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: JUMP",
        options: ["Sit", "Leap", "Walk", "Stand"],
        correctIndex: 1,
        explanation: "Jump means push oneself off a surface and into the air by using the muscles in one's legs and feet.",
        explanationBengali: "Jump মানে লাফানো।"
    },
    {
        id: "syn_556", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: KNAVE",
        options: ["Hero", "Rogue", "Saint", "Angel"],
        correctIndex: 1,
        explanation: "Knave means a dishonest or unscrupulous man.",
        explanationBengali: "Knave মানে ধূর্ত বা বেইমান লোক।"
    },
    {
        id: "syn_557", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: LAVISH",
        options: ["Simple", "Extravagant", "Cheap", "Modest"],
        correctIndex: 1,
        explanation: "Lavish means sumptuously rich, elaborate, or luxurious.",
        explanationBengali: "Lavish মানে অপব্যয়ী বা বিলাসবহুল।"
    },
    {
        id: "syn_558", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: MERRY",
        options: ["Sad", "Cheerful", "Angry", "Bored"],
        correctIndex: 1,
        explanation: "Merry means cheerful and lively.",
        explanationBengali: "Merry মানে আনন্দিত বা প্রফুল্ল।"
    },
    {
        id: "syn_559", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: NOVICE",
        options: ["Expert", "Beginner", "Master", "Veteran"],
        correctIndex: 1,
        explanation: "Novice means a person new to or inexperienced in a field or situation.",
        explanationBengali: "Novice মানে শিক্ষানবিশ বা নতুন।"
    },
    {
        id: "syn_560", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: OBSCURE",
        options: ["Clear", "Unclear", "Bright", "Known"],
        correctIndex: 1,
        explanation: "Obscure means not discovered or known about; uncertain.",
        explanationBengali: "Obscure মানে অস্পষ্ট।"
    },
    {
        id: "syn_561", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: PAIN",
        options: ["Comfort", "Agony", "Relief", "Joy"],
        correctIndex: 1,
        explanation: "Pain means physical suffering or discomfort caused by illness or injury.",
        explanationBengali: "Pain মানে ব্যথা বা যন্ত্রণা।"
    },
    {
        id: "syn_562", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: QUASH",
        options: ["Support", "Annul", "Start", "Create"],
        correctIndex: 1,
        explanation: "Quash means reject or void, especially by legal procedure.",
        explanationBengali: "Quash মানে বাতিল করা।"
    },
    {
        id: "syn_563", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: RADIANT",
        options: ["Dull", "Bright", "Dark", "Gloomy"],
        correctIndex: 1,
        explanation: "Radiant means sending out light; shining or glowing brightly.",
        explanationBengali: "Radiant মানে উজ্জ্বল বা দীপ্তিময়।"
    },
    {
        id: "syn_564", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: SACRED",
        options: ["Unholy", "Holy", "Bad", "Evil"],
        correctIndex: 1,
        explanation: "Sacred means connected with God (or the gods) or dedicated to a religious purpose and so deserving veneration.",
        explanationBengali: "Sacred মানে পবিত্র।"
    },
    {
        id: "syn_565", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: TEDIOUS",
        options: ["Exciting", "Boring", "Fun", "Quick"],
        correctIndex: 1,
        explanation: "Tedious means too long, slow, or dull: tiresome or monotonous.",
        explanationBengali: "Tedious মানে ক্লান্তিকর বা একঘেয়ে।"
    },
    {
        id: "syn_566", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: UNIQUE",
        options: ["Common", "Distinctive", "Ordinary", "Usual"],
        correctIndex: 1,
        explanation: "Unique means being the only one of its kind; unlike anything else.",
        explanationBengali: "Unique মানে অনন্য বা অদ্বিতীয়।"
    },
    {
        id: "syn_567", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: VICTORY",
        options: ["Defeat", "Triumph", "Loss", "Failure"],
        correctIndex: 1,
        explanation: "Victory means an act of defeating an enemy or opponent in a battle, game, or other competition.",
        explanationBengali: "Victory মানে বিজয়।"
    },
    {
        id: "syn_568", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: WRATH",
        options: ["Love", "Anger", "Happiness", "Peace"],
        correctIndex: 1,
        explanation: "Wrath means extreme anger.",
        explanationBengali: "Wrath মানে ক্রোধ বা রাগ।"
    },
    {
        id: "syn_569", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: YIELD",
        options: ["Resist", "Surrender", "Fight", "Win"],
        correctIndex: 1,
        explanation: "Yield means give way to arguments, demands, or pressure.",
        explanationBengali: "Yield মানে নতি স্বীকার করা বা সমর্পণ করা।"
    },
    {
        id: "syn_570", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: ZONE",
        options: ["Area", "Line", "Point", "Dot"],
        correctIndex: 0,
        explanation: "Zone means an area or stretch of land having a particular characteristic, purpose, or use, or subject to particular restrictions.",
        explanationBengali: "Zone মানে এলাকা বা অঞ্চল।"
    },
    {
        id: "syn_571", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: ABHOR",
        options: ["Love", "Hate", "Like", "Admire"],
        correctIndex: 1,
        explanation: "Abhor means regard with disgust and hatred.",
        explanationBengali: "Abhor মানে ঘৃণা করা।"
    },
    {
        id: "syn_572", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: BARREN",
        options: ["Fertile", "Infertile", "Productive", "Rich"],
        correctIndex: 1,
        explanation: "Barren means (of land) too poor to produce much or any vegetation.",
        explanationBengali: "Barren মানে উষর বা বন্ধ্যা।"
    },
    {
        id: "syn_573", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: CALM",
        options: ["Wild", "Quiet", "Noisy", "Rough"],
        correctIndex: 1,
        explanation: "Calm means not showing or feeling nervousness, anger, or other strong emotions.",
        explanationBengali: "Calm মানে শান্ত।"
    },
    {
        id: "syn_574", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: DELETERIOUS",
        options: ["Beneficial", "Harmful", "Helpful", "Safe"],
        correctIndex: 1,
        explanation: "Deleterious means causing harm or damage.",
        explanationBengali: "Deleterious মানে ক্ষতিকর।"
    },
    {
        id: "syn_575", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: EAGER",
        options: ["Indifferent", "Keen", "Apathetic", "Bored"],
        correctIndex: 1,
        explanation: "Eager means (of a person) wanting to do or have something very much.",
        explanationBengali: "Eager মানে আগ্রহী বা উৎসুক।"
    },
// --- SET 32: SYNONYMS QUESTIONS (576-600) ---

    {
        id: "syn_576", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: ACCURATE",
        options: ["Wrong", "Correct", "Vague", "False"],
        correctIndex: 1,
        explanation: "Accurate means correct in all details; exact.",
        explanationBengali: "Accurate মানে সঠিক বা নির্ভুল।"
    },
    {
        id: "syn_577", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: CANDID",
        options: ["Secretive", "Frank", "Deceitful", "Shy"],
        correctIndex: 1,
        explanation: "Candid means truthful and straightforward; frank.",
        explanationBengali: "Candid মানে অকপট বা স্পষ্টবাদী।"
    },
    {
        id: "syn_578", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: DEBILITATE",
        options: ["Strengthen", "Weaken", "Support", "Encourage"],
        correctIndex: 1,
        explanation: "Debilitate means to make someone weak and infirm.",
        explanationBengali: "Debilitate মানে দুর্বল করা।"
    },
    {
        id: "syn_579", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: ELOQUENT",
        options: ["Silent", "Articulate", "Confused", "Mute"],
        correctIndex: 1,
        explanation: "Eloquent means fluent or persuasive in speaking or writing.",
        explanationBengali: "Eloquent মানে বাকপটু বা সুবক্তা।"
    },
    {
        id: "syn_580", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: FAMOUS",
        options: ["Unknown", "Renowned", "Obscure", "Hidden"],
        correctIndex: 1,
        explanation: "Famous means known about by many people.",
        explanationBengali: "Famous মানে বিখ্যাত।"
    },
    {
        id: "syn_581", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: GARRULOUS",
        options: ["Quiet", "Talkative", "Reserved", "Shy"],
        correctIndex: 1,
        explanation: "Garrulous means excessively talkative, especially on trivial matters.",
        explanationBengali: "Garrulous মানে বাচাল।"
    },
    {
        id: "syn_582", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: HOSTILE",
        options: ["Friendly", "Aggressive", "Kind", "Helpful"],
        correctIndex: 1,
        explanation: "Hostile means showing or feeling opposition or dislike; unfriendly.",
        explanationBengali: "Hostile মানে বৈরী বা শত্রুভাবাপন্ন।"
    },
    {
        id: "syn_583", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: INFINITE",
        options: ["Limited", "Endless", "Brief", "Small"],
        correctIndex: 1,
        explanation: "Infinite means limitless or endless in space, extent, or size.",
        explanationBengali: "Infinite মানে অসীম।"
    },
    {
        id: "syn_584", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: JUBILANT",
        options: ["Depressed", "Ecstatic", "Sad", "Angry"],
        correctIndex: 1,
        explanation: "Jubilant means feeling or expressing great happiness and triumph.",
        explanationBengali: "Jubilant মানে উল্লসিত বা আনন্দিত।"
    },
    {
        id: "syn_585", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: KEEN",
        options: ["Dull", "Sharp", "Slow", "Lazy"],
        correctIndex: 1,
        explanation: "Keen means having or showing eagerness or enthusiasm; also sharp.",
        explanationBengali: "Keen মানে তীক্ষ্ণ বা আগ্রহী।"
    },
    {
        id: "syn_586", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: LOYAL",
        options: ["Faithful", "Traitor", "Enemy", "Rebel"],
        correctIndex: 0,
        explanation: "Loyal means giving or showing firm and constant support or allegiance to a person or institution.",
        explanationBengali: "Loyal মানে বিশ্বস্ত বা অনুগত।"
    },
    {
        id: "syn_587", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: MAGNANIMOUS",
        options: ["Selfish", "Generous", "Mean", "Small"],
        correctIndex: 1,
        explanation: "Magnanimous means generous or forgiving, especially towards a rival or less powerful person.",
        explanationBengali: "Magnanimous মানে মহানুভব বা উদার।"
    },
    {
        id: "syn_588", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: NOSTALGIC",
        options: ["Future", "Homesick", "Present", "Forgotten"],
        correctIndex: 1,
        explanation: "Nostalgic means characterized by a sentimental longing or wistful affection for the past.",
        explanationBengali: "Nostalgic মানে গৃহকাতর বা অতীত স্মৃতিতে কাতর।"
    },
    {
        id: "syn_589", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: OPTIMISTIC",
        options: ["Pessimistic", "Hopeful", "Sad", "Gloomy"],
        correctIndex: 1,
        explanation: "Optimistic means hopeful and confident about the future.",
        explanationBengali: "Optimistic মানে আশাবাদী।"
    },
    {
        id: "syn_590", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: PERILOUS",
        options: ["Safe", "Dangerous", "Secure", "Calm"],
        correctIndex: 1,
        explanation: "Perilous means full of danger or risk.",
        explanationBengali: "Perilous মানে বিপজ্জনক।"
    },
    {
        id: "syn_591", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: QUEER",
        options: ["Normal", "Strange", "Common", "Regular"],
        correctIndex: 1,
        explanation: "Queer means strange; odd.",
        explanationBengali: "Queer মানে অদ্ভুত।"
    },
    {
        id: "syn_592", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: RARE",
        options: ["Common", "Uncommon", "Frequent", "Usual"],
        correctIndex: 1,
        explanation: "Rare means not occurring very often.",
        explanationBengali: "Rare মানে বিরল।"
    },
    {
        id: "syn_593", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: SAGACIOUS",
        options: ["Foolish", "Wise", "Stupid", "Ignorant"],
        correctIndex: 1,
        explanation: "Sagacious means having or showing keen mental discernment and good judgment; shrewd.",
        explanationBengali: "Sagacious মানে বিচক্ষণ বা জ্ঞানী।"
    },
    {
        id: "syn_594", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: TANGIBLE",
        options: ["Abstract", "Concrete", "Imaginary", "Vague"],
        correctIndex: 1,
        explanation: "Tangible means perceptible by touch.",
        explanationBengali: "Tangible মানে স্পর্শযোগ্য বা মূর্ত।"
    },
    {
        id: "syn_595", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: URGENT",
        options: ["Important", "Trivial", "Minor", "Optional"],
        correctIndex: 0,
        explanation: "Urgent means requiring immediate action or attention.",
        explanationBengali: "Urgent মানে জরুরি।"
    },
    {
        id: "syn_596", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: VENERATE",
        options: ["Despise", "Respect", "Hate", "Ignore"],
        correctIndex: 1,
        explanation: "Venerate means regard with great respect; revere.",
        explanationBengali: "Venerate মানে শ্রদ্ধা করা।"
    },
    {
        id: "syn_597", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: WARY",
        options: ["Trusting", "Cautious", "Rash", "Bold"],
        correctIndex: 1,
        explanation: "Wary means feeling or showing caution about possible dangers or problems.",
        explanationBengali: "Wary মানে সতর্ক।"
    },
    {
        id: "syn_598", chapter: "Synonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the synonym of: YELL",
        options: ["Whisper", "Shout", "Mumble", "Speak"],
        correctIndex: 1,
        explanation: "Yell means a loud, sharp cry of pain, surprise, or delight.",
        explanationBengali: "Yell মানে চিৎকার করা।"
    },
    {
        id: "syn_599", chapter: "Synonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the synonym of: ZEALOUS",
        options: ["Apathetic", "Passionate", "Lazy", "Indifferent"],
        correctIndex: 1,
        explanation: "Zealous means having or showing zeal; passionate.",
        explanationBengali: "Zealous মানে অত্যুৎসাহী বা আবেগপূর্ণ।"
    },
    {
        id: "syn_600", chapter: "Synonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the synonym of: ABANDON",
        options: ["Keep", "Desert", "Hold", "Maintain"],
        correctIndex: 1,
        explanation: "Abandon means cease to support or look after (someone); desert.",
        explanationBengali: "Abandon মানে পরিত্যাগ করা।"
    },
// --- SET 33: ANTONYMS QUESTIONS (601-625) ---

    {
        id: "ant_601", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: ABUNDANT",
        options: ["Plentiful", "Scarce", "Rich", "Sufficient"],
        correctIndex: 1,
        explanation: "Scarce means insufficient for the demand. Abundant means existing or available in large quantities.",
        explanationBengali: "Abundant (প্রচুর)-এর বিপরীত Scarce (অপ্রতুল)।"
    },
    {
        id: "ant_602", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: BENEVOLENT",
        options: ["Kind", "Malevolent", "Generous", "Friendly"],
        correctIndex: 1,
        explanation: "Malevolent means having or showing a wish to do evil to others. Benevolent means well meaning and kindly.",
        explanationBengali: "Benevolent (হিতৈষী)-এর বিপরীত Malevolent (হিংসুটে)।"
    },
    {
        id: "ant_603", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: CACOPHONY",
        options: ["Noise", "Harmony", "Discord", "Clamor"],
        correctIndex: 1,
        explanation: "Harmony means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect. Cacophony means a harsh, discordant mixture of sounds.",
        explanationBengali: "Cacophony (বেসুরো শব্দ)-এর বিপরীত Harmony (সুরের মিল)।"
    },
    {
        id: "ant_604", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: DILIGENT",
        options: ["Hardworking", "Lazy", "Active", "Busy"],
        correctIndex: 1,
        explanation: "Lazy means unwilling to work or use energy. Diligent means having or showing care and conscientiousness in one's work or duties.",
        explanationBengali: "Diligent (পরিশ্রমী)-এর বিপরীত Lazy (অলস)।"
    },
    {
        id: "ant_605", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: EXPAND",
        options: ["Increase", "Contract", "Grow", "Extend"],
        correctIndex: 1,
        explanation: "Contract means decrease in size, number, or range. Expand means become or make larger or more extensive.",
        explanationBengali: "Expand (প্রসারিত করা)-এর বিপরীত Contract (সংকুচিত করা)।"
    },
    {
        id: "ant_606", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: FRUGAL",
        options: ["Thrifty", "Extravagant", "Economical", "Saving"],
        correctIndex: 1,
        explanation: "Extravagant means lacking restraint in spending money or using resources. Frugal means sparing or economical with regard to money or food.",
        explanationBengali: "Frugal (মিতব্যয়ী)-এর বিপরীত Extravagant (অপব্যয়ী)।"
    },
    {
        id: "ant_607", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: GLOOMY",
        options: ["Sad", "Cheerful", "Dark", "Depressed"],
        correctIndex: 1,
        explanation: "Cheerful means noticeably happy and optimistic. Gloomy means dark or poorly lit, especially so as to appear depressing or frightening.",
        explanationBengali: "Gloomy (বিষণ্ণ)-এর বিপরীত Cheerful (প্রফুল্ল)।"
    },
    {
        id: "ant_608", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: HUMBLE",
        options: ["Modest", "Proud", "Meek", "Lowly"],
        correctIndex: 1,
        explanation: "Proud means feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated. Humble means having or showing a modest or low estimate of one's own importance.",
        explanationBengali: "Humble (বিনয়ী)-এর বিপরীত Proud (অহংকারী)।"
    },
    {
        id: "ant_609", chapter: "Antonyms", type:"vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: IMPEDIMENT",
        options: ["Obstacle", "Assistance", "Barrier", "Blockage"],
        correctIndex: 1,
        explanation: "Assistance means the action of helping someone with a job or task. Impediment means a hindrance or obstruction in doing something.",
        explanationBengali: "Impediment (বাধা)-এর বিপরীত Assistance (সাহায্য)।"
    },
    {
        id: "ant_610", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: JUBILANT",
        options: ["Happy", "Despondent", "Excited", "Joyful"],
        correctIndex: 1,
        explanation: "Despondent means in low spirits from loss of hope or courage. Jubilant means feeling or expressing great happiness and triumph.",
        explanationBengali: "Jubilant (উল্লসিত)-এর বিপরীত Despondent (হতাশ)।"
    },
    {
        id: "ant_611", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: KEEN",
        options: ["Sharp", "Dull", "Eager", "Intense"],
        correctIndex: 1,
        explanation: "Dull means lacking interest or excitement. Keen means having or showing eagerness or enthusiasm.",
        explanationBengali: "Keen (তীক্ষ্ণ/আগ্রহী)-এর বিপরীত Dull (নিস্তেজ/অনাগ্রহী)।"
    },
    {
        id: "ant_612", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: LUCID",
        options: ["Clear", "Confused", "Bright", "Understandable"],
        correctIndex: 1,
        explanation: "Confused means unable to think clearly; bewildered. Lucid means expressed clearly; easy to understand.",
        explanationBengali: "Lucid (স্পষ্ট)-এর বিপরীত Confused (বিভ্রান্ত/অস্পষ্ট)।"
    },
    {
        id: "ant_613", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: MISER",
        options: ["Spendthrift", "Saver", "Hoarder", "Penny-pincher"],
        correctIndex: 0,
        explanation: "Spendthrift means a person who spends money in an extravagant, irresponsible way. Miser means a person who hoards wealth and spends as little money as possible.",
        explanationBengali: "Miser (কৃপণ)-এর বিপরীত Spendthrift (বাজে খরচকারী)।"
    },
    {
        id: "ant_614", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: NARROW",
        options: ["Thin", "Wide", "Tight", "Small"],
        correctIndex: 1,
        explanation: "Wide means of great or more than average width. Narrow means of small width.",
        explanationBengali: "Narrow (সংকীর্ণ)-এর বিপরীত Wide (প্রশস্ত)।"
    },
    {
        id: "ant_615", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: OBSTINATE",
        options: ["Stubborn", "Flexible", "Rigid", "Adamant"],
        correctIndex: 1,
        explanation: "Flexible means ready and able to change so as to adapt to different circumstances. Obstinate means stubbornly refusing to change one's opinion or chosen course of action.",
        explanationBengali: "Obstinate (জেদি)-এর বিপরীত Flexible (নমনীয়)।"
    },
    {
        id: "ant_616", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: PACIFY",
        options: ["Calm", "Agitate", "Soothe", "Placate"],
        correctIndex: 1,
        explanation: "Agitate means make (someone) troubled or nervous. Pacify means quell the anger, agitation, or excitement of.",
        explanationBengali: "Pacify (শান্ত করা)-এর বিপরীত Agitate (উত্তেজিত করা)।"
    },
    {
        id: "ant_617", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: QUIET",
        options: ["Silent", "Loud", "Peaceful", "Calm"],
        correctIndex: 1,
        explanation: "Loud means producing or capable of producing much noise. Quiet means making little or no noise.",
        explanationBengali: "Quiet (শান্ত)-এর বিপরীত Loud (উচ্চস্বর)।"
    },
    {
        id: "ant_618", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: REPRIMAND",
        options: ["Scold", "Praise", "Rebuke", "Admonish"],
        correctIndex: 1,
        explanation: "Praise means express warm approval or admiration of. Reprimand means a rebuke, especially an official one.",
        explanationBengali: "Reprimand (তিরস্কার করা)-এর বিপরীত Praise (প্রশংসা করা)।"
    },
    {
        id: "ant_619", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: SHALLOW",
        options: ["Deep", "Surface", "Flat", "Low"],
        correctIndex: 0,
        explanation: "Deep means extending far down from the top or surface. Shallow means of little depth.",
        explanationBengali: "Shallow (অগভীর)-এর বিপরীত Deep (গভীর)।"
    },
    {
        id: "ant_620", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: TIMID",
        options: ["Shy", "Bold", "Fearful", "Afraid"],
        correctIndex: 1,
        explanation: "Bold means showing an ability to take risks; confident and courageous. Timid means showing a lack of courage or confidence; easily frightened.",
        explanationBengali: "Timid (ভীরু)-এর বিপরীত Bold (সাহসী)।"
    },
    {
        id: "ant_621", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: UNANIMOUS",
        options: ["Agreed", "Divided", "United", "Harmonious"],
        correctIndex: 1,
        explanation: "Divided means disagreeing or disunited. Unanimous means (of two or more people) fully in agreement.",
        explanationBengali: "Unanimous (সর্বসম্মত)-এর বিপরীত Divided (বিভক্ত)।"
    },
    {
        id: "ant_622", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: VAGUE",
        options: ["Unclear", "Clear", "Indefinite", "Hazy"],
        correctIndex: 1,
        explanation: "Clear means easy to perceive, understand, or interpret. Vague means of uncertain, indefinite, or unclear character or meaning.",
        explanationBengali: "Vague (অস্পষ্ট)-এর বিপরীত Clear (স্পষ্ট)।"
    },
    {
        id: "ant_623", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: WISE",
        options: ["Smart", "Foolish", "Intelligent", "Clever"],
        correctIndex: 1,
        explanation: "Foolish means lacking good sense or judgment; unwise. Wise means having or showing experience, knowledge, and good judgment.",
        explanationBengali: "Wise (জ্ঞানী)-এর বিপরীত Foolish (বোকা)।"
    },
    {
        id: "ant_624", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: ZENITH",
        options: ["Peak", "Nadir", "Summit", "Top"],
        correctIndex: 1,
        explanation: "Nadir means the lowest point in the fortunes of a person or organization. Zenith means the time at which something is most powerful or successful.",
        explanationBengali: "Zenith (শীর্ষবিন্দু)-এর বিপরীত Nadir (সর্বনিম্ন বিন্দু)।"
    },
    {
        id: "ant_625", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: AUTHENTIC",
        options: ["Genuine", "Fake", "Real", "True"],
        correctIndex: 1,
        explanation: "Fake means not genuine; counterfeit or imitation. Authentic means of undisputed origin; genuine.",
        explanationBengali: "Authentic (খাঁটি)-এর বিপরীত Fake (নকল)।"
    },
// --- SET 34: ANTONYMS QUESTIONS (626-650) ---

    {
        id: "ant_626", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: BEAUTIFUL",
        options: ["Pretty", "Ugly", "Lovely", "Nice"],
        correctIndex: 1,
        explanation: "Ugly means unpleasant or repulsive, especially in appearance. Beautiful means pleasing the senses or mind aesthetically.",
        explanationBengali: "Beautiful (সুন্দর)-এর বিপরীত Ugly (কুৎসিত)।"
    },
    {
        id: "ant_627", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: CANDID",
        options: ["Honest", "Deceitful", "Frank", "Open"],
        correctIndex: 1,
        explanation: "Deceitful means guilty of or involving deceit; deceiving or misleading others. Candid means truthful and straightforward.",
        explanationBengali: "Candid (অকপট)-এর বিপরীত Deceitful (প্রতারণাপূর্ণ)।"
    },
    {
        id: "ant_628", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: DORMANT",
        options: ["Inactive", "Active", "Sleeping", "Passive"],
        correctIndex: 1,
        explanation: "Active means engaging or ready to engage in physically energetic pursuits. Dormant means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep.",
        explanationBengali: "Dormant (সুপ্ত/নিষ্ক্রিয়)-এর বিপরীত Active (সক্রিয়)।"
    },
    {
        id: "ant_629", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: ETERNAL",
        options: ["Permanent", "Temporary", "Forever", "Endless"],
        correctIndex: 1,
        explanation: "Temporary means lasting for only a limited period of time; not permanent. Eternal means lasting or existing forever; without end or beginning.",
        explanationBengali: "Eternal (শাশ্বত/অনন্ত)-এর বিপরীত Temporary (ক্ষণস্থায়ী)।"
    },
    {
        id: "ant_630", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: FAMOUS",
        options: ["Unknown", "Popular", "Renowned", "Celebrated"],
        correctIndex: 0,
        explanation: "Unknown means not known or familiar. Famous means known about by many people.",
        explanationBengali: "Famous (বিখ্যাত)-এর বিপরীত Unknown (অখ্যাত)।"
    },
    {
        id: "ant_631", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: GARRULOUS",
        options: ["Talkative", "Taciturn", "Chatty", "Loquacious"],
        correctIndex: 1,
        explanation: "Taciturn means reserved or uncommunicative in speech; saying little. Garrulous means excessively talkative.",
        explanationBengali: "Garrulous (বাচাল)-এর বিপরীত Taciturn (স্বল্পভাষী)।"
    },
    {
        id: "ant_632", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: HINDER",
        options: ["Obstruct", "Help", "Block", "Delay"],
        correctIndex: 1,
        explanation: "Help means make it easier for (someone) to do something. Hinder means create difficulties for (someone or something), resulting in delay or obstruction.",
        explanationBengali: "Hinder (বাধা দেওয়া)-এর বিপরীত Help (সাহায্য করা)।"
    },
    {
        id: "ant_633", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: INNOCENT",
        options: ["Guilty", "Pure", "Naïve", "Simple"],
        correctIndex: 0,
        explanation: "Guilty means culpable of or responsible for a specified wrongdoing. Innocent means not guilty of a crime or offense.",
        explanationBengali: "Innocent (নির্দোষ)-এর বিপরীত Guilty (দোষী)।"
    },
    {
        id: "ant_634", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: JEOPARDY",
        options:["Danger", "Safety", "Risk", "Peril"],
        correctIndex: 1,
        explanation: "Safety means the condition of being protected from or unlikely to cause danger, risk, or injury. Jeopardy means danger of loss, harm, or failure.",
        explanationBengali: "Jeopardy (বিপদ)-এর বিপরীত Safety (নিরাপত্তা)।"
    },
    {
        id: "ant_635", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: KEEN",
        options: ["Sharp", "Dull", "Eager", "Intense"],
        correctIndex: 1,
        explanation: "Dull means lacking interest or excitement. Keen means having or showing eagerness or enthusiasm.",
        explanationBengali: "Keen (আগ্রহী/তীক্ষ্ণ)-এর বিপরীত Dull (অনাগ্রহী/নিস্তেজ)।"
    },
    {
        id: "ant_636", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: LIBERTY",
        options: ["Freedom", "Slavery", "Independence", "Autonomy"],
        correctIndex: 1,
        explanation: "Slavery means the state of being a slave. Liberty means the state of being free within society from oppressive restrictions.",
        explanationBengali: "Liberty (স্বাধীনতা)-এর বিপরীত Slavery (দাসত্ব)।"
    },
    {
        id: "ant_637", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: MALEVOLENT",
        options: ["Wicked", "Benevolent", "Spiteful", "Hostile"],
        correctIndex: 1,
        explanation: "Benevolent means well meaning and kindly. Malevolent means having or showing a wish to do evil to others.",
        explanationBengali: "Malevolent (হিংসুটে)-এর বিপরীত Benevolent (হিতৈষী)।"
    },
    {
        id: "ant_638", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: NEAT",
        options: ["Tidy", "Messy", "Clean", "Orderly"],
        correctIndex: 1,
        explanation: "Messy means untidy or dirty. Neat means arranged in an orderly, tidy way.",
        explanationBengali: "Neat (পরিচ্ছন্ন)-এর বিপরীত Messy (অগোছালো)।"
    },
    {
        id: "ant_639", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: OPTIMISTIC",
        options: ["Hopeful", "Pessimistic", "Positive", "Cheerful"],
        correctIndex: 1,
        explanation: "Pessimistic means tending to see the worst aspect of things. Optimistic means hopeful and confident about the future.",
        explanationBengali: "Optimistic (আশাবাদী)-এর বিপরীত Pessimistic (নৈরাশ্যবাদী)।"
    },
    {
        id: "ant_640", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: PAUCITY",
        options: ["Scarcity", "Abundance", "Lack", "Shortage"],
        correctIndex: 1,
        explanation: "Abundance means a very large quantity of something. Paucity means the presence of something only in small or insufficient quantities or amounts.",
        explanationBengali: "Paucity (স্বল্পতা)-এর বিপরীত Abundance (প্রচুর্য)।"
    },
    {
        id: "ant_641", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: QUEER",
        options: ["Strange", "Normal", "Odd", "Weird"],
        correctIndex: 1,
        explanation: "Normal means conforming to a standard; usual, typical, or expected. Queer means strange; odd.",
        explanationBengali: "Queer (অদ্ভুত)-এর বিপরীত Normal (স্বাভাবিক)।"
    },
    {
        id: "ant_642", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: ROUGH",
        options: ["Smooth", "Hard", "Tough", "Coarse"],
        correctIndex: 0,
        explanation: "Smooth means having an even and regular surface or consistency. Rough means having an uneven or irregular surface.",
        explanationBengali: "Rough (অমসৃণ)-এর বিপরীত Smooth (মসৃণ)।"
    },
    {
        id: "ant_643", chapter: "Antonyms", type: "vocab", difficulty: "hard ", topic: "General",
        question: "Select the antonym of: SAGACIOUS",
        options: ["Wise", "Foolish", "Intelligent", "Shrewd"],
        correctIndex: 1,
        explanation: "Foolish means lacking good sense or judgment; unwise. Sagacious means having or showing keen mental discernment and good judgment.",
        explanationBengali: "Sagacious (বিচক্ষণ)-এর বিপরীত Foolish (বোকা)।"
    },
    {
        id: "ant_644", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: TRANSPARENT",
        options: ["Clear", "Opaque", "See-through", "Lucid"],
        correctIndex: 1,
        explanation: "Opaque means not able to be seen through; not transparent. Transparent means allowing light to pass through so that objects behind can be distinctly seen.",
        explanationBengali: "Transparent (স্বচ্ছ)-এর বিপরীত Opaque (অস্বচ্ছ)।"
    },
    {
        id: "ant_645", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: UNITY",
        options: ["Harmony", "Discord", "Union", "Agreement"],
        correctIndex: 1,
        explanation: "Discord means disagreement between people. Unity means the state of being united or joined as a whole.",
        explanationBengali: "Unity (একতা)-এর বিপরীত Discord (অনৈক্য)।"
    },
    {
        id: "ant_646", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: VACILLATE",
        options: ["Waver", "Decide", "Hesitate", "Fluctuate"],
        correctIndex: 1,
        explanation: "Decide means come to a resolution in the mind as a result of consideration. Vacillate means alternate or waver between different opinions or actions; be indecisive.",
        explanationBengali: "Vacillate (দ্বিধা করা)-এর বিপরীত Decide (সিদ্ধান্ত নেওয়া)।"
    },
    {
        id: "ant_647", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: WANE",
        options: ["Decrease", "Wax", "Diminish", "Fade"],
        correctIndex: 1,
        explanation: "Wax means cover or treat (something) with wax or similar substance, typically to polish or protect it. However, in the context of the moon or size, 'Wax' means to increase in size, which is the antonym of 'Wane' (decrease).",
        explanationBengali: "Wane (ক্ষয় পাওয়া)-এর বিপরীত Wax (বৃদ্ধি পাওয়া - চাঁদের ক্ষেত্রে)।"
    },
    {
        id: "ant_648", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: YOUNG",
        options: ["New", "Old", "Fresh", "Youthful"],
        correctIndex: 1,
        explanation: "Old means having lived for a long time; no longer young. Young means having lived or existed for only a short time.",
        explanationBengali: "Young (তরুণ)-এর বিপরীত Old (বৃদ্ধ)।"
    },
    {
        id: "ant_649", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: ZEALOUS",
        options: ["Enthusiastic", "Apathetic", "Passionate", "Eager"],
        correctIndex: 1,
        explanation: "Apathetic means showing or feeling no interest, enthusiasm, or concern. Zealous means having or showing zeal.",
        explanationBengali: "Zealous (অত্যুৎসাহী)-এর বিপরীত Apathetic (উদাসীন)।"
    },
    {
        id: "ant_650", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: ABRIDGE",
        options: ["Shorten", "Lengthen", "Cut", "Reduce"],
        correctIndex: 1,
        explanation: "Lengthen means make or become longer. Abridge means shorten (a piece of writing) without losing the sense.",
        explanationBengali: "Abridge (সংক্ষিপ্ত করা)-এর বিপরীত Lengthen (দীর্ঘায়িত করা)।"
    },
// --- SET 35: ANTONYMS QUESTIONS (651-675) ---

    {
        id: "ant_651", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: ABUNDANCE",
        options: ["Poverty", "Scarcity", "Famine", "Sufficiency"],
        correctIndex: 1,
        explanation: "Scarcity means the state of being scarce or in short supply. Abundance means a very large quantity of something.",
        explanationBengali: "Abundance (প্রচুর্য)-এর বিপরীত Scarcity (অভাব)।"
    },
    {
        id: "ant_652", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: BOISTEROUS",
        options: ["Quiet", "Loud", "Rowdy", "Noisy"],
        correctIndex: 0,
        explanation: "Quiet means making little or no noise. Boisterous means noisy, energetic, and cheerful; rowdy.",
        explanationBengali: "Boisterous (কোলাহলপূর্ণ)-এর বিপরীত Quiet (শান্ত)।"
    },
    {
        id: "ant_653", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: CALLOUS",
        options: ["Sensitive", "Hardened", "Cold", "Cruel"],
        correctIndex: 0,
        explanation: "Sensitive means quick to detect or respond to slight changes, signals, or influences. Callous means showing or having an insensitive and cruel disregard for others.",
        explanationBengali: "Callous (কঠোর/অনুভূতিহীন)-এর বিপরীত Sensitive (সংবেদনশীল)।"
    },
    {
        id: "ant_654", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: DILATE",
        options: ["Expand", "Contract", "Widen", "Stretch"],
        correctIndex: 1,
        explanation: "Contract means decrease in size, number, or range. Dilate means make or become wider, larger, or more open.",
        explanationBengali: "Dilate (প্রসারিত করা)-এর বিপরীত Contract (সংকুচিত করা)।"
    },
    {
        id: "ant_655", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: EMANCIPATE",
        options: ["Liberate", "Enslave", "Release", "Free"],
        correctIndex: 1,
        explanation: "Enslave means make (someone) a slave. Emancipate means set free, especially from legal, social, or political restrictions.",
        explanationBengali: "Emancipate (মুক্ত করা)-এর বিপরীত Enslave (দাস করা)।"
    },
    {
        id: "ant_656", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: FICKLE",
        options: ["Constant", "Changeable", "Capricious", "Variable"],
        correctIndex: 0,
        explanation: "Constant means remaining the same over a period of time. Fickle means changing frequently, especially as regards one's loyalties, interests, or affection.",
        explanationBengali: "Fickle (চঞ্চল/অস্থির)-এর বিপরীত Constant (স্থির/অপরিবর্তনশীল)।"
    },
    {
        id: "ant_657", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: GREGARIOUS",
        options: ["Sociable", "Introverted", "Friendly", "Outgoing"],
        correctIndex: 1,
        explanation: "Introverted means shy and reticent. Gregarious means (of a person) fond of company; sociable.",
        explanationBengali: "Gregarious (মিশুকে)-এর বিপরীত Introverted (অন্তর্মুখী)।"
    },
    {
        id: "ant_658", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: HARMONY",
        options: ["Peace", "Discord", "Agreement", "Unity"],
        correctIndex: 1,
        explanation: "Discord means disagreement between people. Harmony means the state of being in agreement or concord.",
        explanationBengali: "Harmony (মিল/সামঞ্জস্য)-এর বিপরীত Discord (অনৈক্য/বিরোধ)।"
    },
    {
        id: "ant_659", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: IMPECUNIOUS",
        options: ["Poor", "Wealthy", "Penniless", "Indigent"],
        correctIndex: 1,
        explanation: "Wealthy means having a great deal of money, resources, or assets. Impecunious means having little or no money.",
        explanationBengali: "Impecunious (নিঃস্ব)-এর বিপরীত Wealthy (ধনী)।"
    },
    {
        id: "ant_660", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: JETTISON",
        options: ["Discard", "Retain", "Throw", "Eject"],
        correctIndex: 1,
        explanation: "Retain means continue to have (something); keep possession of. Jettison means throw or drop (something) from an aircraft or ship.",
        explanationBengali: "Jettison (ফেলে দেওয়া)-এর বিপরীত Retain (রাখা)।"
    },
    {
        id: "ant_661", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: KNOWLEDGE",
        options: ["Wisdom", "Ignorance", "Learning", "Education"],
        correctIndex: 1,
        explanation: "Ignorance means lack of knowledge or information. Knowledge means facts, information, and skills acquired by a person through experience or education.",
        explanationBengali: "Knowledge (জ্ঞান)-এর বিপরীত Ignorance (অজ্ঞতা)।"
    },
    {
        id: "ant_662", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: LACONIC",
        options: ["Brief", "Verbose", "Concise", "Terse"],
        correctIndex: 1,
        explanation: "Verbose means using or expressed in more words than are needed. Laconic means (of a person, speech, or style of writing) using very few words.",
        explanationBengali: "Laconic (স্বল্পভাষী)-এর বিপরীত Verbose (বাচাল/শব্দবহুল)।"
    },
    {
        id: "ant_663", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: MALIGN",
        options: ["Slander", "Praise", "Criticize", "Defame"],
        correctIndex: 1,
        explanation: "Praise means express warm approval or admiration of. Malign means speak about (someone) in a spitefully critical manner.",
        explanationBengali: "Malign (কুৎসা রটানো)-এর বিপরীত Praise (প্রশংসা করা)।"
    },
    {
        id: "ant_664", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: NATIVE",
        options: ["Local", "Foreign", "Indigenous", "Domestic"],
        correctIndex: 1,
        explanation: "Foreign means of, from, in, or characteristic of a country or language other than one's own. Native means a person born in a specified place or associated with a place by birth.",
        explanationBengali: "Native (দেশি)-এর বিপরীত Foreign (বিদেশি)।"
    },
    {
        id: "ant_665", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: OBSEQUIOUS",
        options: ["Servile", "Domineering", "Submissive", "Fawning"],
        correctIndex: 1,
        explanation: "Domineering means asserting one's will over another in an arrogant way. Obsequious means obedient or attentive to an excessive or servile degree.",
        explanationBengali: "Obsequious (চাটুকার/দাসসুলভ)-এর বিপরীত Domineering (প্রভুত্বব্যঞ্জক)।"
    },
    {
        id: "ant_666", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: PERTINENT",
        options: ["Relevant", "Irrelevant", "Applicable", "Related"],
        correctIndex: 1,
        explanation: "Irrelevant means not connected with or relevant to something. Pertinent means relevant or applicable to a particular matter; apposite.",
        explanationBengali: "Pertinent (প্রাসঙ্গিক)-এর বিপরীত Irrelevant (অপ্রাসঙ্গিক)।"
    },
    {
        id: "ant_667", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: QUIESCENT",
        options: ["Dormant", "Active", "Still", "Inactive"],
        correctIndex: 1,
        explanation: "Active means engaging or ready to engage in physically energetic pursuits. Quiescent means in a state or period of inactivity or dormancy.",
        explanationBengali: "Quiescent (নিস্তব্ধ/নিষ্ক্রিয়)-এর বিপরীত Active (সক্রিয়)।"
    },
    {
        id: "ant_668", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: RECALCITRANT",
        options: ["Obstinate", "Compliant", "Stubborn", "Unruly"],
        correctIndex: 1,
        explanation: "Compliant means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent. Recalcitrant means having an obstinately uncooperative attitude toward authority or discipline.",
        explanationBengali: "Recalcitrant (অবাধ্য)-এর বিপরীত Compliant (বাধ্য/নমনীয়)।"
    },
    {
        id: "ant_669", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: SANGUINE",
        options: ["Optimistic", "Pessimistic", "Hopeful", "Confident"],
        correctIndex: 1,
        explanation: "Pessimistic means tending to see the worst aspect of things or believe that the worst will happen. Sanguine means optimistic or positive, especially in an apparently bad or difficult situation.",
        explanationBengali: "Sanguine (আশাবাদী)-এর বিপরীত Pessimistic (নৈরাশ্যবাদী)।"
    },
    {
        id: "ant_670", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: TANGIBLE",
        options: ["Real", "Abstract", "Concrete", "Solid"],
        correctIndex: 1,
        explanation: "Abstract means existing in thought or as an idea but not having a physical or concrete existence. Tangible means perceptible by touch.",
        explanationBengali: "Tangible (স্পর্শযোগ্য)-এর বিপরীত Abstract (বিমূর্ত)।"
    },
    {
        id: "ant_671", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: UBIQUITOUS",
        options: ["Omnipresent", "Rare", "Universal", "Common"],
        correctIndex: 1,
        explanation: "Rare means (of an event, situation, or condition) not occurring very often. Ubiquitous means present, appearing, or found everywhere.",
        explanationBengali: "Ubiquitous (সর্বব্যাপী)-এর বিপরীত Rare (বিরল)।"
    },
    {
        id: "ant_672", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: VENERATE",
        options: ["Respect", "Despise", "Honor", "Revere"],
        correctIndex: 1,
        explanation: "Despise means feel contempt or a deep repugnance for. Venerate means regard with great respect; revere.",
        explanationBengali: "Venerate (শ্রদ্ধা করা)-এর বিপরীত Despise (ঘৃণা করা/তুচ্ছ করা)।"
    },
    {
        id: "ant_673", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: WARY",
        options: ["Cautious", "Careless", "Alert", "Vigilant"],
        correctIndex: 1,
        explanation: "Careless means not giving sufficient attention or thought to avoiding harm or errors. Wary means feeling or showing caution about possible dangers or problems.",
        explanationBengali: "Wary (সতর্ক)-এর বিপরীত Careless (অসতর্ক)।"
    },
    {
        id: "ant_674", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: YOKE",
        options: ["Connect", "Liberate", "Join", "Link"],
        correctIndex: 1,
        explanation: "Liberate means set (someone) free from a situation, especially imprisonment or slavery, in which their liberty is severely restricted. Yoke means a wooden crosspiece that is fastened over the necks of two animals and attached to the plow or cart that they are to pull; metaphorically, something that is regarded as oppressive or burdensome.",
        explanationBengali: "Yoke (জোয়াল/পরাধীনতা)-এর বিপরীত Liberate (মুক্ত করা)।"
    },
    {
        id: "ant_675", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: ZEAL",
        options: ["Enthusiasm", "Apathy", "Passion", "Fervor"],
        correctIndex: 1,
        explanation: "Apathy means lack of interest, enthusiasm, or concern. Zeal means great energy or enthusiasm in pursuit of a cause or an objective.",
        explanationBengali: "Zeal (প্রবল উৎসাহ)-এর বিপরীত Apathy (উদাসীনতা)।"
    },
// --- SET 36: ANTONYMS QUESTIONS (676-700) ---

    {
        id: "ant_676", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: ABUNDANT",
        options: ["Scarce", "Plentiful", "Rich", "Enough"],
        correctIndex: 0,
        explanation: "Scarce means insufficient for the demand. Abundant means existing or available in large quantities.",
        explanationBengali: "Abundant (প্রচুর)-এর বিপরীত Scarce (অপ্রতুল)।"
    },
    {
        id: "ant_677", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: BENEVOLENT",
        options: ["Malevolent", "Kind", "Generous", "Friendly"],
        correctIndex: 0,
        explanation: "Malevolent means having or showing a wish to do evil to others. Benevolent means well meaning and kindly.",
        explanationBengali: "Benevolent (হিতৈষী)-এর বিপরীত Malevolent (হিংসুটে)।"
    },
    {
        id: "ant_678", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: CACOPHONY",
        options: ["Harmony", "Noise", "Discord", "Clamor"],
        correctIndex: 0,
        explanation: "Harmony means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect. Cacophony means a harsh, discordant mixture of sounds.",
        explanationBengali: "Cacophony (বেসুরো শব্দ)-এর বিপরীত Harmony (সুরের মিল)।"
    },
    {
        id: "ant_679", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: DILIGENT",
        options: ["Lazy", "Hardworking", "Active", "Busy"],
        correctIndex: 0,
        explanation: "Lazy means unwilling to work or use energy. Diligent means having or showing care and conscientiousness in one's work or duties.",
        explanationBengali: "Diligent (পরিশ্রমী)-এর বিপরীত Lazy (অলস)।"
    },
    {
        id: "ant_680", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: EXPAND",
        options: ["Contract", "Increase", "Grow", "Extend"],
        correctIndex: 0,
        explanation: "Contract means decrease in size, number, or range. Expand means become or make larger or more extensive.",
        explanationBengali: "Expand (প্রসারিত করা)-এর বিপরীত Contract (সংকুচিত করা)।"
    },
    {
        id: "ant_681", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: FRUGAL",
        options: ["Extravagant", "Thrifty", "Economical", "Saving"],
        correctIndex: 0,
        explanation: "Extravagant means lacking restraint in spending money or using resources. Frugal means sparing or economical with regard to money or food.",
        explanationBengali: "Frugal (মিতব্যয়ী)-এর বিপরীত Extravagant (অপব্যয়ী)।"
    },
    {
        id: "ant_682", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: GLOOMY",
        options: ["Cheerful", "Sad", "Dark", "Depressed"],
        correctIndex: 0,
        explanation: "Cheerful means noticeably happy and optimistic. Gloomy means dark or poorly lit, especially so as to appear depressing or frightening.",
        explanationBengali: "Gloomy (বিষণ্ণ)-এর বিপরীত Cheerful (প্রফুল্ল)।"
    },
    {
        id: "ant_683", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: HUMBLE",
        options: ["Proud", "Modest", "Meek", "Lowly"],
        correctIndex: 0,
        explanation: "Proud means feeling deep pleasure or satisfaction as a result of one's own achievements. Humble means having or showing a modest or low estimate of one's own importance.",
        explanationBengali: "Humble (বিনয়ী)-এর বিপরীত Proud (অহংকারী)।"
    },
    {
        id: "ant_684", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of : IMPEDIMENT",
        options: ["Assistance", "Obstacle", "Barrier", "Blockage"],
        correctIndex: 0,
        explanation: "Assistance means the action of helping someone with a job or task. Impediment means a hindrance or obstruction in doing something.",
        explanationBengali: "Impediment (বাধা)-এর বিপরীত Assistance (সাহায্য)।"
    },
    {
        id: "ant_685", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: JUBILANT",
        options: ["Despondent", "Happy", "Excited", "Joyful"],
        correctIndex: 0,
        explanation: "Despondent means in low spirits from loss of hope or courage. Jubilant means feeling or expressing great happiness and triumph.",
        explanationBengali: "Jubilant (উল্লসিত)-এর বিপরীত Despondent (হতাশ)।"
    },
    {
        id: "ant_686", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: KEEN",
        options: ["Dull", "Sharp", "Eager", "Intense"],
        correctIndex: 0,
        explanation: "Dull means lacking interest or excitement. Keen means having or showing eagerness or enthusiasm.",
        explanationBengali: "Keen (তীক্ষ্ণ/আগ্রহী)-এর বিপরীত Dull (নিস্তেজ/অনাগ্রহী)।"
    },
    {
        id: "ant_687", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: LUCID",
        options: ["Confused", "Clear", "Bright", "Understandable"],
        correctIndex: 0,
        explanation: "Confused means unable to think clearly; bewildered. Lucid means expressed clearly; easy to understand.",
        explanationBengali: "Lucid (স্পষ্ট)-এর বিপরীত Confused (বিভ্রান্ত/অস্পষ্ট)।"
    },
    {
        id: "ant_688", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: MISER",
        options: ["Spendthrift", "Saver", "Hoarder", "Penny-pincher"],
        correctIndex: 0,
        explanation: "Spendthrift means a person who spends money in an extravagant, irresponsible way. Miser means a person who hoards wealth and spends as little money as possible.",
        explanationBengali: "Miser (কৃপণ)-এর বিপরীত Spendthrift (বাজে খরচকারী)।"
    },
    {
        id: "ant_689", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: NARROW",
        options: ["Wide", "Thin", "Tight", "Small"],
        correctIndex: 0,
        explanation: "Wide means of great or more than average width. Narrow means of small width.",
        explanationBengali: "Narrow (সংকীর্ণ)-এর বিপরীত Wide (প্রশস্ত)।"
    },
    {
        id: "ant_690", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: OBSTINATE",
        options: ["Flexible", "Stubborn", "Rigid", "Adamant"],
        correctIndex: 0,
        explanation: "Flexible means ready and able to change so as to adapt to different circumstances. Obstinate means stubbornly refusing to change one's opinion or chosen course of action.",
        explanationBengali: "Obstinate (জেদি)-এর বিপরীত Flexible (নমনীয়)।"
    },
    {
        id: "ant_691", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: PACIFY",
        options: ["Agitate", "Calm", "Soothe", "Placate"],
        correctIndex: 0,
        explanation: "Agitate means make (someone) troubled or nervous. Pacify means quell the anger, agitation, or excitement of.",
        explanationBengali: "Pacify (শান্ত করা)-এর বিপরীত Agitate (উত্তেজিত করা)।"
    },
    {
        id: "ant_692", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: QUIET",
        options: ["Loud", "Silent", "Peaceful", "Calm"],
        correctIndex: 0,
        explanation: "Loud means producing or capable of producing much noise. Quiet means making little or no noise.",
        explanationBengali: "Quiet (শান্ত)-এর বিপরীত Loud (উচ্চস্বর)।"
    },
    {
        id: "ant_693", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: REPRIMAND",
        options: ["Praise", "Scold", "Rebuke", "Admonish"],
        correctIndex: 0,
        explanation: "Praise means express warm approval or admiration of. Reprimand means a rebuke, especially an official one.",
        explanationBengali: "Reprimand (তিরস্কার করা)-এর বিপরীত Praise (প্রশংসা করা)।"
    },
    {
        id: "ant_694", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: SHALLOW",
        options: ["Deep", "Surface", "Flat", "Low"],
        correctIndex: 0,
        explanation: "Deep means extending far down from the top or surface. Shallow means of little depth.",
        explanationBengali: "Shallow (অগভীর)-এর বিপরীত Deep (গভীর)।"
    },
    {
        id: "ant_695", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: TIMID",
        options: ["Bold", "Shy", "Fearful", "Afraid"],
        correctIndex: 0,
        explanation: "Bold means showing an ability to take risks; confident and courageous. Timid means showing a lack of courage or confidence; easily frightened.",
        explanationBengali: "Timid (ভীরু)-এর বিপরীত Bold (সাহসী)।"
    },
    {
        id: "ant_696", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: UNANIMOUS",
        options: ["Divided", "Agreed", "United", "Harmonious"],
        correctIndex: 0,
        explanation: "Divided means disagreeing or disunited. Unanimous means fully in agreement.",
        explanationBengali: "Unanimous (সর্বসম্মত)-এর বিপরীত Divided (বিভক্ত)।"
    },
    {
        id: "ant_697", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: VAGUE",
        options: ["Clear", "Unclear", "Indefinite", "Hazy"],
        correctIndex: 0,
        explanation: "Clear means easy to perceive, understand, or interpret. Vague means of uncertain, indefinite, or unclear character or meaning.",
        explanationBengali: "Vague (অস্পষ্ট)-এর বিপরীত Clear (স্পষ্ট)।"
    },
    {
        id: "ant_698", chapter: "Antonyms", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the antonym of: WISE",
        options: ["Foolish", "Smart", "Intelligent", "Clever"],
        correctIndex: 0,
        explanation: "Foolish means lacking good sense or judgment; unwise. Wise means having or showing experience, knowledge, and good judgment.",
        explanationBengali: "Wise (জ্ঞানী)-এর বিপরীত Foolish (বোকা)।"
    },
    {
        id: "ant_699", chapter: "Antonyms", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the antonym of: ZENITH",
        options: ["Nadir", "Peak", "Summit", "Top"],
        correctIndex: 0,
        explanation: "Nadir means the lowest point. Zenith means the highest point or peak.",
        explanationBengali: "Zenith (শীর্ষবিন্দু)-এর বিপরীত Nadir (সর্বনিম্ন বিন্দু)।"
    },
    {
        id: "ant_700", chapter: "Antonyms", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the antonym of: AUTHENTIC",
        options: ["Fake", "Genuine", "Real", "True"],
        correctIndex: 0,
        explanation: "Fake means not genuine; counterfeit. Authentic means of undisputed origin; genuine.",
        explanationBengali: "Authentic (খাঁটি)-এর বিপরীত Fake (নকল)।"
    },
// --- SET 37: OWS QUESTIONS (701-730) ---

    {
        id: "ows_701", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who eats everything:",
        options: ["Herbivorous", "Omnivorous", "Carnivorous", "Vegetarian"],
        correctIndex: 1,
        explanation: "Omnivorous: feeding on food of both plant and animal origin.",
        explanationBengali: "Omnivorous মানে সর্বভুক।"
    },
    {
        id: "ows_702", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who does not believe in God:",
        options: ["Theist", "Atheist", "Pagan", "Fanatic"],
        correctIndex: 1,
        explanation: "Atheist: a person who disbelieves or lacks belief in the existence of God.",
        explanationBengali: "Atheist মানে নাস্তিক।"
    },
    {
        id: "ows_703", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "A study of birds:",
        options: ["Zoology", "Ornithology", "Botany", "Entomology"],
        correctIndex: 1,
        explanation: "Ornithology is the scientific study of birds.",
        explanationBengali: "Ornithology মানে পক্ষীবিদ্যা।"
    },
    {
        id: "ows_704", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "One who knows everything:",
        options: ["Omnipotent", "Omniscient", "Omnipresent", "Optimist"],
        correctIndex: 1,
        explanation: "Omniscient means knowing everything.",
        explanationBengali: "Omniscient মানে সর্বজ্ঞ।"
    },
    {
        id: "ows_705", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of closed spaces:",
        options: ["Acrophobia", "Claustrophobia", "Hydrophobia", "Xenophobia"],
        correctIndex: 1,
        explanation: "Claustrophobia is extreme or irrational fear of confined places.",
        explanationBengali: "Claustrophobia মানে বদ্ধ স্থানের ভয়।"
    },
    {
        id: "ows_706", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A life history written by oneself:",
        options: ["Biography", "Autobiography", "History", "Novel"],
        correctIndex: 1,
        explanation: "Autobiography is an account of a person's life written by that person.",
        explanationBengali: "Autobiography মানে আত্মজীবনী।"
    },
    {
        id: "ows_707", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A place where bees are kept:",
        options: ["Aviary", "Apiary", "Zoo", "Aquarium"],
        correctIndex: 1,
        explanation: "Apiary is a place where bees are kept.",
        explanationBengali: "Apiary মানে মৌচাষ কেন্দ্র।"
    },
    {
        id: "ows_708", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Something that cannot be heard:",
        options: ["Audible", "Inaudible", "Invisible", "Invincible"],
        correctIndex: 1,
        explanation: "Inaudible means unable to be heard.",
        explanationBengali: "Inaudible মানে অশ্রুত।"
    },
    {
        id: "ows_709", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who loves books:",
        options: ["Bibliophile", "Technophile", "Pedophile", "Philanthropist"],
        correctIndex: 0,
        explanation: "Bibliophile is a person who collects or has a great love of books.",
        explanationBengali: "Bibliophile মানে গ্রন্থপ্রেমী।"
    },
    {
        id: "ows_710", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who cannot read or write:",
        options: ["Literate", "Illiterate", "Scholar", "Student"],
        correctIndex: 1,
        explanation: "Illiterate means unable to read or write.",
        explanationBengali: "Illiterate মানে নিরক্ষর।"
    },
    {
        id: "ows_711", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who hates women:",
        options: ["Misogynist", "Misanthropist", "Feminist", "Philogynist"],
        correctIndex: 0,
        explanation: "Misogynist means a person who dislikes, despises, or is strongly prejudiced against women.",
        explanationBengali: "Misogynist মানে নারীবিদ্বেষী।"
    },
    {
        id: "ows_712", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A doctor who treats children:",
        options: ["Pedestrian", "Pediatrician", "Pedagogue", "Paedophile"],
        correctIndex: 1,
        explanation: "Pediatrician is a medical practitioner specializing in children and their diseases.",
        explanationBengali: "Pediatrician মানে শিশু রোগ বিশেষজ্ঞ।"
    },
    {
        id: "ows_713", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who draws maps:",
        options: ["Cartographer", "Photographer", "Choreographer", "Calligrapher"],
        correctIndex: 0,
        explanation: "Cartographer is a person who draws or produces maps.",
        explanationBengali: "Cartographer মানে মানচিত্রকর।"
    },
    {
        id: "ows_714", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of water:",
        options: ["Acrophobia", "Hydrophobia", "Pyrophobia", "Aerophobia"],
        correctIndex: 1,
        explanation: "Hydrophobia is extreme or irrational fear of water.",
        explanationBengali: "Hydrophobia মানে জলাতঙ্ক।"
    },
    {
        id: "ows_715", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "One who walks in sleep:",
        options: ["Somnambulist", "Somniloquist", "Noctambulist", "Insomniac"],
        correctIndex: 0,
        explanation: "Somnambulist is a person who walks about in their sleep.",
        explanationBengali: "Somnambulist মানে স্বপ্নচারী (যে ঘুমে হাঁটে)।"
    },
    {
        id: "ows_716", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A period of ten years:",
        options: ["Century", "Decade", "Millennium", "Fortnight"],
        correctIndex: 1,
        explanation: "Decade is a period of ten years.",
        explanationBengali: "Decade মানে দশক।"
    },
    {
        id: "ows_717", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Murder of a king:",
        options: ["Regicide", "Patricide", "Matricide", "Genocide"],
        correctIndex: 0,
        explanation: "Regicide is the action of killing a king.",
        explanationBengali: "Regicide মানে রাজহত্যা।"
    },
    {
        id: "ows_718", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "One who believes in fate:",
        options: ["Fatalist", "Optimist", "Pessimist", "Realist"],
        correctIndex: 0,
        explanation: "Fatalist is a person who believes that all events are predetermined and therefore inevitable.",
        explanationBengali: "Fatalist মানে অদৃষ্টবাদী।"
    },
    {
        id: "ows_719", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A sound that cannot be heard:",
        options: ["Audible", "Inaudible", "Loud", "Silent"],
        correctIndex: 1,
        explanation: "Inaudible means unable to be heard.",
        explanationBengali: "Inaudible মানে যা শোনা যায় না।"
    },
    {
        id: "ows_720", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who collects coins:",
        options: ["Numismatist", "Philatelist", "Archaeologist", "Curator"],
        correctIndex: 0,
        explanation: "Numismatist is a person who collects or studies currency, including coins.",
        explanationBengali: "Numismatist মানে মুদ্রাসংগ্রাহক।"
    },
    {
        id: "ows_721", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A cure for all diseases:",
        options: ["Panacea", "Antidote", "Remedy", "Antibiotic"],
        correctIndex: 0,
        explanation: "Panacea is a solution or remedy for all difficulties or diseases.",
explanationBengali: "Panacea মানে সর্বরোগহর ঔষধ।"
    },
    {
        id: "ows_722", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who speaks two languages:",
        options: ["Bilingual", "Multilingual", "Linguist", "Polyglot"],
        correctIndex: 0,
        explanation: "Bilingual means speaking two languages fluently.",
        explanationBengali: "Bilingual মানে দোভাষী।"
    },
    {
        id: "ows_723", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Government by the rich:",
        options: ["Plutocracy", "Democracy", "Aristocracy", "Monarchy"],
        correctIndex: 0,
        explanation: "Plutocracy is government by the wealthy.",
        explanationBengali: "Plutocracy মানে ধনতন্ত্র।"
    },
    {
        id: "ows_724", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "That which cannot be conquered:",
        options: ["Invincible", "Invisible", "Inaudible", "Inaccessable"],
        correctIndex: 0,
        explanation: "Invincible means too powerful to be defeated or overcome.",
        explanationBengali: "Invincible মানে অজেয়।"
    },
    {
        id: "ows_725", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A group of lions:",
        options: ["Pride", "Herd", "Flock", "Pack"],
        correctIndex: 0,
        explanation: "Pride is the collective noun for a group of lions.",
        explanationBengali: "সিংহের দলকে 'Pride' বলা হয়।"
    },
    {
        id: "ows_726", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who possesses many talents:",
        options: ["Versatile", "Gifted", "Exceptional", "Unique"],
        correctIndex: 0,
        explanation: "Versatile means able to adapt or be adapted to many different functions or activities.",
        explanationBengali: "Versatile মানে বহুমুখী প্রতিভাসম্পন্ন।"
    },
    {
        id: "ows_727", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A speech made without preparation:",
        options: ["Extempore", "Debate", "Lecture", "Sermon"],
        correctIndex: 0,
        explanation: "Extempore means spoken or done without preparation.",
        explanationBengali: "Extempore মানে উপস্থিত বক্তৃতা।"
    },
    {
        id: "ows_728", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who dies for a noble cause:",
        options: ["Martyr", "Soldier", "Hero", "Patriot"],
        correctIndex: 0,
        explanation: "Martyr is a person who is killed because of their religious or other beliefs.",
        explanationBengali: "Martyr মানে শহীদ।"
    },
    {
        id: "ows_729", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Study of human development:",
        options: ["Anthropology", "Psychology", "Sociology", "Biology"],
        correctIndex: 0,
        explanation: "Anthropology is the study of human societies and cultures and their development.",
        explanationBengali: "Anthropology মানে নৃতত্ত্ব।"
    },
    {
        id: "ows_730", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A handwriting that cannot be read:",
        options: ["Illegible", "Ineligible", "Legible", "Vague"],
        correctIndex: 0,
        explanation: "Illegible means not clear enough to be read.",
        explanationBengali: "Illegible মানে যা পড়া যায় না (অস্পষ্ট)।"
    },
// --- SET 38: OWS QUESTIONS (731-760) ---

    {
        id: "ows_731", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who is skilled in foreign languages:",
        options: ["Linguist", "Polyglot", "Bilingual", "Interpreter"],
        correctIndex: 0,
        explanation: "Linguist is a person skilled in foreign languages.",
        explanationBengali: "Linguist মানে ভাষাবিদ।"
    },
    {
        id: "ows_732", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A place where dead bodies are kept for identification:",
        options: ["Mortuary", "Morgue", "Cemetery", "Crematorium"],
        correctIndex: 1,
        explanation: "Morgue is a place where bodies are kept, especially to be identified or claimed.",
        explanationBengali: "Morgue মানে লাশঘর (শনাক্তকরণের জন্য)।"
    },
    {
        id: "ows_733", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of heights:",
        options: ["Acrophobia", "Hydrophobia", "Claustrophobia", "Pyrophobia"],
        correctIndex: 0,
        explanation: "Acrophobia is extreme or irrational fear of heights.",
        explanationBengali: "Acrophobia মানে উচ্চতাভীতি।"
    },
    {
        id: "ows_734", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who collects stamps:",
        options: ["Philatelist", "Numismatist", "Archaeologist", "Curator"],
        correctIndex: 0,
        explanation: "Philatelist is a person who collects or studies stamps.",
        explanationBengali: "Philatelist মানে ডাকটিকিট সংগ্রাহক।"
    },
    {
        id: "ows_735", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who eats human flesh:",
        options: ["Cannibal", "Carnivore", "Herbivore", "Omnivore"],
        correctIndex: 0,
        explanation: "Cannibal is a person who eats the flesh of other human beings.",
        explanationBengali: "Cannibal মানে নরখাদক।"
    },
    {
        id: "ows_736", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Government by a king or queen:",
        options: ["Monarchy", "Democracy", "Republic", "Anarchy"],
        correctIndex: 0,
        explanation: "Monarchy is a form of government with a monarch at the head.",
        explanationBengali: "Monarchy মানে রাজতন্ত্র।"
    },
    {
        id: "ows_737", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A remedy for all ills:",
        options: ["Panacea", "Antibiotic", "Vaccine", "Antidote"],
        correctIndex: 0,
        explanation: "Panacea is a solution or remedy for all difficulties or diseases.",
        explanationBengali: "Panacea মানে সর্বরোগহর ঔষধ।"
    },
    {
        id: "ows_738", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who writes for newspapers:",
        options: ["Journalist", "Author", "Editor", "Publisher"],
        correctIndex: 0,
        explanation: "Journalist is a person who writes for newspapers, magazines, or news websites.",
        explanationBengali: "Journalist মানে সাংবাদিক।"
    },
    {
        id: "ows_739", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who hates mankind:",
        options: ["Misanthrope", "Philanthropist", "Misogynist", "Altruist"],
        correctIndex: 0,
        explanation: "Misanthrope is a person who dislikes humankind and avoids human society.",
        explanationBengali: "Misanthrope মানে মানববিদ্বেষী।"
    },
    {
        id: "ows_740", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A speech delivered without preparation:",
        options: ["Extempore", "Debate", "Lecture", "Address"],
        correctIndex: 0,
        explanation: "Extempore means spoken or done without preparation.",
        explanationBengali: "Extempore মানে উপস্থিত বক্তৃতা।"
    },
    {
        id: "ows_741", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A book of maps:",
        options: ["Atlas", "Dictionary", "Encyclopedia", "Almanac"],
        correctIndex: 0,
        explanation: "Atlas is a book of maps or charts.",
        explanationBengali: "Atlas মানে মানচিত্রের বই।"
    },
    {
        id: "ows_742", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who is present everywhere:",
        options: ["Omnipresent", "Omnipotent", "Omniscient", "Universal"],
        correctIndex: 0,
        explanation: "Omnipresent means widely or constantly encountered; common or widespread.",
        explanationBengali: "Omnipresent মানে সর্বব্যাপী।"
    },
    {
        id: "ows_743", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who looks at the bright side of things:",
        options: ["Optimist", "Pessimist", "Realist", "Idealist"],
        correctIndex: 0,
        explanation: "Optimist is a person who tends to be hopeful and confident about the future.",
        explanationBengali: "Optimist মানে আশাবাদী।"
    },
    {
        id: "ows_744", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who sells flowers:",
        options: ["Florist", "Gardener", "Botanist", "Horticulturist"],
        correctIndex: 0,
        explanation: "Florist is a person who sells and arranges plants and cut flowers.",
        explanationBengali: "Florist মানে ফুলবিক্রেতা।"
    },
    {
        id: "ows_745", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Killing of a newborn child:",
        options: ["Infanticide", "Homicide", "Suicide", "Patricide"],
        correctIndex: 0,
        explanation: "Infanticide is the crime of killing a child within a year of birth.",
        explanationBengali: "Infanticide মানে শিশুহত্যা।"
    },
    {
        id: "ows_746", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A sound that cannot be heard:",
        options: ["Inaudible", "Audible", "Loud", "Silent"],
        correctIndex: 0,
        explanation: "Inaudible means unable to be heard.",
        explanationBengali: "Inaudible মানে অশ্রুত।"
    },
    {
        id: "ows_747", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who travels in space:",
        options: ["Astronaut", "Pilot", "Scientist", "Astronomer"],
        correctIndex: 0,
        explanation: "Astronaut is a person who is trained to travel in a spacecraft.",
        explanationBengali: "Astronaut মানে নভোচারী।"
    },
    {
        id: "ows_748", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who is all powerful:",
        options: ["Omnipotent", "Omniscient", "Omnipresent", "Almighty"],
        correctIndex: 0,
        explanation: "Omnipotent means having unlimited power; able to do anything.",
        explanationBengali: "Omnipotent মানে সর্বশক্তিমান।"
    },
    {
        id: "ows_749", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A decision upon which one cannot go back:",
        options: ["Irrevocable", "Rigid", "Final", "Decisive"],
        correctIndex: 0,
        explanation: "Irrevocable means not able to be changed, reversed, or recovered; final.",
        explanationBengali: "Irrevocable মানে যা পরিবর্তন করা যায় না।"
    },
    {
        id: "ows_750", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A period of one hundred years:",
        options: ["Century", "Decade", "Millennium", "Era"],
        correctIndex: 0,
        explanation: "Century is a period of one hundred years.",
        explanationBengali: "Century মানে শতাব্দী।"
    },
    {
        id: "ows_751", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who studies the stars:",
        options: ["Astronomer", "Astrologer", "Astronaut", "Geologist"],
        correctIndex: 0,
        explanation: "Astronomer is an expert in or student of astronomy.",
        explanationBengali: "Astronomer মানে জ্যোতির্বিজ্ঞানী।"
    },
    {
        id: "ows_752", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who looks at the dark side of things:",
        options: ["Pessimist", "Optimist", "Realist", "Cynic"],
        correctIndex: 0,
        explanation: "Pessimist is a person who tends to see the worst aspect of things or believe that the worst will happen.",
        explanationBengali: "Pessimist মানে নৈরাশ্যবাদী।"
    },
    {
        id: "ows_753", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A vehicle for carrying dead bodies:",
        options: ["Hearse", "Ambulance", "Truck", "Van"],
        correctIndex: 0,
        explanation: "Hearse is a vehicle for conveying the coffin at a funeral.",
        explanationBengali: "Hearse মানে শববাহী গাড়ি।"
    },
    {
        id: "ows_754", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of fire:",
        options: ["Pyrophobia", "Hydrophobia", "Acrophobia", "Claustrophobia"],
        correctIndex: 0,
        explanation: "Pyrophobia is the fear of fire.",
        explanationBengali: "Pyrophobia মানে অগ্নিভীতি।"
    },
    {
        id: "ows_755", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "One who collects postage stamps:",
        options: ["Philatelist", "Numismatist", "Archaeologist", "Collector"],
        correctIndex: 0,
        explanation: "Philatelist is a person who collects or studies stamps.",
        explanationBengali: "Philatelist মানে ডাকটিকিট সংগ্রাহক।"
    },
    {
        id: "ows_756", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who cannot hear:",
        options: ["Deaf", "Blind", "Dumb", "Lame"],
        correctIndex: 0,
        explanation: "Deaf means lacking the power of hearing or having impaired hearing.",
        explanationBengali: "Deaf মানে বধির।"
    },
    {
        id: "ows_757", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Government by the few:",
        options: ["Oligarchy", "Monarchy", "Democracy", "Autocracy"],
        correctIndex: 0,
        explanation: "Oligarchy is a small group of people having control of a country, organization, or institution.",
        explanationBengali: "Oligarchy মানে ধনিকতন্ত্র বা অল্প লোকের শাসন।"
    },
    {
        id: "ows_758", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who makes maps:",
        options: ["Cartographer", "Geographer", "Photographer", "Artist"],
        correctIndex: 0,
        explanation: "Cartographer is a person who draws or produces maps.",
        explanationBengali: "Cartographer মানে মানচিত্রকর।"
    },
    {
        id: "ows_759", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A story of a person's life written by another:",
        options: ["Biography", "Autobiography", "History", "Memoir"],
        correctIndex: 0,
        explanation: "Biography is an account of someone's life written by someone else.",
        explanationBengali: "Biography মানে জীবনী।"
    },
    {
        id: "ows_760", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who eats human flesh:",
        options: ["Cannibal", "Carnivore", "Predator", "Savage"],
        correctIndex: 0,
        explanation: "Cannibal is a person who eats the flesh of other human beings.",
        explanationBengali: "Cannibal মানে নরখাদক।"
    },
// --- SET 39: OWS QUESTIONS (761-800) ---

    {
        id: "ows_761", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who is unable to pay his debts:",
        options: ["Insolvent", "Solvent", "Lender", "Banker"],
        correctIndex: 0,
        explanation: "Insolvent is a person unable to pay debts owed.",
        explanationBengali: "Insolvent মানে দেউলিয়া।"
    },
    {
        id: "ows_762", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A life history written by oneself:",
        options: ["Autobiography", "Biography", "Memoir", "History"],
        correctIndex: 0,
        explanation: "Autobiography is an account of a person's life written by that person.",
        explanationBengali: "Autobiography মানে আত্মজীবনী।"
    },
    {
        id: "ows_763", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "A person who hates women:",
        options: ["Misogynist", "Misanthrope", "Philogynist", "Feminist"],
        correctIndex: 0,
        explanation: "Misogynist is a person who dislikes, despises, or is strongly prejudiced against women.",
        explanationBengali: "Misogynist মানে নারীবিদ্বেষী।"
    },
    {
        id: "ows_764", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A remedy for all diseases:",
        options: ["Panacea", "Antibiotic", "Antidote", "Vaccine"],
        correctIndex: 0,
        explanation: "Panacea is a solution or remedy for all difficulties or diseases.",
        explanationBengali: "Panacea মানে সর্বরোগহর ঔষধ।"
    },
    {
        id: "ows_765", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who loves books:",
        options: ["Bibliophile", "Technophile", "Pedophile", "Philanthropist"],
        correctIndex: 0,
        explanation: "Bibliophile is a person who collects or has a great love of books.",
        explanationBengali: "Bibliophile মানে গ্রন্থপ্রেমী।"
    },
    {
        id: "ows_766", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of confined places:",
        options: ["Claustrophobia", "Agoraphobia", "Acrophobia", "Hydrophobia"],
        correctIndex: 0,
        explanation: "Claustrophobia is extreme or irrational fear of confined places.",
        explanationBengali: "Claustrophobia মানে বদ্ধ স্থানের ভয়।"
    },
    {
        id: "ows_767", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who looks at the bright side of things:",
        options: ["Optimist", "Pessimist", "Realist", "Idealist"],
        correctIndex: 0,
        explanation: "Optimist is a person who tends to be hopeful and confident about the future.",
        explanationBengali: "Optimist মানে আশাবাদী।"
    },
    {
        id: "ows_768", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A period of ten years:",
        options: ["Decade", "Century", "Millennium", "Fortnight"],
        correctIndex: 0,
        explanation: "Decade is a period of ten years.",
        explanationBengali: "Decade মানে দশক।"
    },
    {
        id: "ows_769", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who knows everything:",
        options: ["Omniscient", "Omnipotent", "Omnipresent", "Intellectual"],
        correctIndex: 0,
        explanation: "Omniscient means knowing everything.",
        explanationBengali: "Omniscient মানে সর্বজ্ঞ।"
    },
    {
        id: "ows_770", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who does not believe in God:",
        options: ["Atheist", "Theist", "Pagan", "Agnostic"],
        correctIndex: 0,
        explanation: "Atheist is a person who disbelieves or lacks belief in the existence of God.",
        explanationBengali: "Atheist মানে নাস্তিক।"
    },
    {
        id: "ows_771", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who eats vegetables only:",
        options: ["Vegetarian", "Non-vegetarian", "Carnivore", "Herbivore"],
        correctIndex: 0,
        explanation: "Vegetarian is a person who does not eat meat.",
        explanationBengali: "Vegetarian মানে নিরামিষাশী।"
    },
    {
        id: "ows_772", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Government by the people:",
        options: ["Democracy", "Monarchy", "Autocracy", "Plutocracy"],
        correctIndex: 0,
        explanation: "Democracy is a system of government by the whole population or all the eligible members of a state.",
        explanationBengali: "Democracy মানে গণতন্ত্র।"
    },
    {
        id: "ows_773", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A place where birds are kept:",
        options: ["Aviary", "Apiary", "Zoo", "Aquarium"],
        correctIndex: 0,
        explanation: "Aviary is a large cage, building, or enclosure for keeping birds in.",
        explanationBengali: "Aviary মানে পক্ষিশালা।"
    },
    {
        id: "ows_774", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A sound that cannot be heard:",
        options: ["Inaudible", "Audible", "Loud", "Silent"],
        correctIndex: 0,
        explanation: "Inaudible means unable to be heard.",
        explanationBengali: "Inaudible মানে অশ্রুত।"
    },
    {
        id: "ows_775", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who studies the stars:",
        options: ["Astronomer", "Astrologer", "Astronaut", "Geologist"],
        correctIndex: 0,
        explanation: "Astronomer is an expert in or student of astronomy.",
        explanationBengali: "Astronomer মানে জ্যোতির্বিজ্ঞানী।"
    },
    {
        id: "ows_776", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A handwriting that cannot be read:",
        options: ["Illegible", "Legible", "Ineligible", "Vague"],
        correctIndex: 0,
        explanation: "Illegible means not clear enough to be read.",
        explanationBengali: "Illegible মানে অস্পষ্ট (যা পড়া যায় না)।"
    },
    {
        id: "ows_777", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who speaks two languages:",
        options: ["Bilingual", "Multilingual", "Linguist", "Polyglot"],
        correctIndex: 0,
        explanation: "Bilingual means speaking two languages fluently.",
        explanationBengali: "Bilingual মানে দোভাষী।"
    },
    {
        id: "ows_778", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Killing of one's own self:",
        options: ["Suicide", "Homicide", "Patricide", "Regicide"],
        correctIndex: 0,
        explanation: "Suicide is the act of killing oneself intentionally.",
        explanationBengali: "Suicide মানে আত্মহত্যা।"
    },
    {
        id: "ows_779", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who draws maps:",
        options: ["Cartographer", "Photographer", "Geographer", "Artist"],
        correctIndex: 0,
        explanation: "Cartographer is a person who draws or produces maps.",
        explanationBengali: "Cartographer মানে মানচিত্রকর।"
    },
    {
        id: "ows_780", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A place where money is coined:",
        options: ["Mint", "Bank", "Press", "Treasury"],
        correctIndex: 0,
        explanation: "Mint is a place where money is coined, especially under state authority.",
        explanationBengali: "Mint মানে টাকশাল।"
    },
    {
        id: "ows_781", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who possesses many talents:",
        options: ["Versatile", "Gifted", "Genius", "Expert"],
        correctIndex: 0,
        explanation: "Versatile means able to adapt or be adapted to many different functions or activities.",
        explanationBengali: "Versatile মানে বহুমুখী প্রতিভাসম্পন্ন।"
    },
    {
        id: "ows_782", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A speech made without preparation:",
        options: ["Extempore", "Debate", "Lecture", "Sermon"],
        correctIndex: 0,
        explanation: "Extempore means spoken or done without preparation.",
        explanationBengali: "Extempore মানে উপস্থিত বক্তৃতা।"
    },
    {
        id: "ows_783", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who travels on foot:",
        options: ["Pedestrian", "Traveller", "Walker", "Passenger"],
        correctIndex: 0,
        explanation: "Pedestrian is a person walking along a road or in a developed area.",
        explanationBengali: "Pedestrian মানে পথচারী।"
    },
    {
        id: "ows_784", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "The scientific study of plants:",
        options: ["Botany", "Zoology", "Biology", "Ecology"],
        correctIndex: 0,
        explanation: "Botany is the scientific study of plants.",
        explanationBengali: "Botany মানে উদ্ভিদবিদ্যা।"
    },
    {
        id: "ows_785", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who is indifferent to pleasure or pain:",
        options: ["Stoic", "Ascetic", "Hermit", "Saint"],
        correctIndex: 0,
        explanation: "Stoic is a person who can endure pain or hardship without showing their feelings or complaining.",
        explanationBengali: "Stoic মানে নির্বিকার।"
    },
    {
        id: "ows_786", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A child whose parents are dead:",
        options: ["Orphan", "Adopted", "Foster", "Step-child"],
        correctIndex: 0,
        explanation: "Orphan is a child whose parents are dead.",
        explanationBengali: "Orphan মানে এতিম।"
    },
    {
        id: "ows_787", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Government by the wealthy:",
        options: ["Plutocracy", "Aristocracy", "Bureaucracy", "Autocracy"],
        correctIndex: 0,
        explanation: "Plutocracy is government by the wealthy.",
        explanationBengali: "Plutocracy মানে ধনতন্ত্র।"
    },
    {
        id: "ows_788", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "That which cannot be conquered:",
        options: ["Invincible", "Invisible", "Inaudible", "Inaccessible"],
        correctIndex: 0,
        explanation: "Invincible means too powerful to be defeated or overcome.",
        explanationBengali: "Invincible মানে অজেয়।"
    },
    {
        id: "ows_789", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who believes in fate:",
        options: ["Fatalist", "Optimist", "Pessimist", "Realist"],
        correctIndex: 0,
        explanation: "Fatalist is a person who believes that all events are predetermined and therefore inevitable.",
        explanationBengali: "Fatalist মানে অদৃষ্টবাদী।"
    },
    {
        id: "ows_790", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Murder of a king:",
        options: ["Regicide", "Homicide", "Patricide", "Fratricide"],
        correctIndex: 0,
        explanation: "Regicide is the action of killing a king.",
        explanationBengali: "Regicide মানে রাজহত্যা।"
    },
    {
        id: "ows_791", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who sells flowers:",
        options: ["Florist", "Gardener", "Botanist", "Horticulturist"],
        correctIndex: 0,
        explanation: "Florist is a person who sells and arranges plants and cut flowers.",
        explanationBengali: "Florist মানে ফুলবিক্রেতা।"
    },
    {
        id: "ows_792", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "One who cannot die:",
        options: ["Immortal", "Mortal", "Eternal", "Perpetual"],
        correctIndex: 0,
        explanation: "Immortal means living forever; never dying or decaying.",
        explanationBengali: "Immortal মানে অমর।"
    },
    {
        id: "ows_793", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fear of water:",
        options: ["Hydrophobia", "Acrophobia", "Claustrophobia", "Pyrophobia"],
        correctIndex: 0,
        explanation: "Hydrophobia is extreme or irrational fear of water.",
        explanationBengali: "Hydrophobia মানে জলাতঙ্ক।"
    },
    {
        id: "ows_794", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A person who collects stamps:",
        options: ["Philatelist", "Numismatist", "Archaeologist", "Curator"],
        correctIndex: 0,
        explanation: "Philatelist is a person who collects or studies stamps.",
        explanationBengali: "Philatelist মানে ডাকটিকিট সংগ্রাহক।"
    },
    {
        id: "ows_795", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A period of one hundred years:",
        options: ["Century", "Decade", "Millennium", "Era"],
        correctIndex: 0,
        explanation: "Century is a period of one hundred years.",
        explanationBengali: "Century মানে শতাব্দী।"
    },
    {
        id: "ows_796", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who eats human flesh:",
        options: ["Cannibal", "Carnivore", "Predator", "Savage"],
        correctIndex: 0,
        explanation: "Cannibal is a person who eats the flesh of other human beings.",
        explanationBengali: "Cannibal মানে নরখাদক।"
    },
    {
        id: "ows_797", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A place where dead bodies are kept for identification:",
        options: ["Morgue", "Mortuary", "Cemetery", "Crematorium"],
        correctIndex: 0,
        explanation: "Morgue is a place where bodies are kept, especially to be identified or claimed.",
        explanationBengali: "Morgue মানে লাশঘর।"
    },
    {
        id: "ows_798", chapter: "OWS", type: "vocab", difficulty: "easy", topic: "General",
        question: "A person who cannot hear:",
        options: ["Deaf", "Blind", "Dumb", "Lame"],
        correctIndex: 0,
        explanation: "Deaf means lacking the power of hearing or having impaired hearing.",
        explanationBengali: "Deaf মানে বধির।"
    },
    {
        id: "ows_799", chapter: "OWS", type: "vocab", difficulty: "hard", topic: "General",
        question: "One who hates mankind:",
        options: ["Misanthrope", "Philanthropist", "Misogynist", "Altruist"],
        correctIndex: 0,
        explanation: "Misanthrope is a person who dislikes humankind and avoids human society.",
        explanationBengali: "Misanthrope মানে মানববিদ্বেষী।"
    },
    {
        id: "ows_800", chapter: "OWS", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A speech delivered without preparation:",
        options: ["Extempore", "Debate", "Lecture", "Address"],
        correctIndex: 0,
        explanation: "Extempore means spoken or done without preparation.",
        explanationBengali: "Extempore মানে উপস্থিত বক্তৃতা।"
    },
    {
        id: "idm_801", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "A red letter day",
        options: ["A dangerous day", "An unimportant day", "A memorable or happy day", "A rainy day"],
        correctIndex: 2,
        explanation: "A 'red letter day' refers to a very important, significant, or happy day.",
        explanationBengali: "'Red letter day' মানে স্মরণীয়, আনন্দদায়ক বা খুব গুরুত্বপূর্ণ দিন।"
    },
    {
        id: "idm_802", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A white elephant",
        options: ["A rare species of elephant", "A costly but useless possession", "A very huge animal", "A symbol of royalty"],
        correctIndex: 1,
        explanation: "A 'white elephant' is something that costs a lot of money to keep but has no useful purpose.",
        explanationBengali: "'White elephant' মানে এমন কোনো দামী বস্তু যা রক্ষণাবেক্ষণ খরচ অনেক কিন্তু কোনো কাজে আসে না।"
    },
    {
        id: "idm_803", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To turn a deaf ear",
        options: ["To listen carefully", "To be unable to hear", "To refuse to listen", "To help someone"],
        correctIndex: 2,
        explanation: "To 'turn a deaf ear' means to ignore what someone is saying or refuse to listen.",
        explanationBengali: "'Turn a deaf ear' মানে কানে না তোলা, উপেক্ষা করা বা কারো কথা শুনতে অস্বীকার করা।"
    },
    {
        id: "idm_804", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Once in a blue moon",
        options: ["Every month", "Very rarely", "Frequently", "At night time"],
        correctIndex: 1,
        explanation: "'Once in a blue moon' means something that happens very rarely.",
        explanationBengali: "'Once in a blue moon' মানে কদাচিৎ বা যা খুব কম ঘটে।"
    },
    {
        id: "idm_805", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A bolt from the blue",
        options: ["A thunderstorm", "A complete surprise or shock", "A pleasant warning", "A winning lottery ticket"],
        correctIndex: 1,
        explanation: "A 'bolt from the blue' refers to a sudden and unexpected event or shock.",
        explanationBengali: "'Bolt from the blue' মানে বিনা মেঘে বজ্রপাত বা সম্পূর্ণ অপ্রত্যাশিত বিপদ/ঘটনা।"
    },
    {
        id: "idm_806", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To beat about the bush",
        options: ["To cut down trees", "To talk directly", "To avoid coming to the point", "To search for something"],
        correctIndex: 2,
        explanation: "To 'beat about the bush' means to talk about irrelevant things without coming to the main point.",
        explanationBengali: "'Beat about the bush' মানে আসল কথা না বলে ঘুরিয়ে পেঁচিয়ে কথা বলা বা বাজে বকা।"
    },
    {
        id: "idm_807", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A blessing in disguise",
        options: ["A bad thing that turns out to be good", "A very expensive gift", "A curse", "A secret mission"],
        correctIndex: 0,
        explanation: "A 'blessing in disguise' is something that seems bad or unlucky at first, but results in something good happening later.",
        explanationBengali: "'Blessing in disguise' মানে এমন কিছু যা প্রথমে খারাপ মনে হলেও পরে ভালো প্রমাণিত হয় (শাপে বর)।"
    },
    {
        id: "idm_808", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To cry over spilt milk",
        options: ["To complain about milk prices", "To cry about a tragedy", "To regret something that cannot be undone", "To be very hungry"],
        correctIndex: 2,
        explanation: "To 'cry over spilt milk' means to be upset about something that has already happened and cannot be changed.",
        explanationBengali: "'Cry over spilt milk' মানে যা হয়ে গেছে বা নষ্ট হয়েছে তা নিয়ে অহেতুক আক্ষেপ করা (গতস্য শোচনা নাস্তি)।"
    },
    {
        id: "idm_809", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A hard nut to crack",
        options: ["A difficult problem to solve", "A strong person", "A walnut", "An easy task"],
        correctIndex: 0,
        explanation: "A 'hard nut to crack' refers to a difficult problem or a person who is difficult to understand.",
        explanationBengali: "'Hard nut to crack' মানে কঠিন সমস্যা বা এমন কাজ যা সমাধান করা কঠিন।"
    },
    {
        id: "idm_810", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "To read between the lines",
        options: ["To read slowly", "To understand the hidden meaning", "To read a poem", "To misunderstand"],
        correctIndex: 1,
        explanation: "To 'read between the lines' means to look for or understand a meaning that is implied rather than explicitly stated.",
        explanationBengali: "'Read between the lines' মানে অন্তর্নিহিত বা গোপন অর্থ বোঝা।"
    },
    {
        id: "idm_811", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "At the eleventh hour",
        options: ["At 11:00 PM", "At the very last moment", "Too late", "In the morning"],
        correctIndex: 1,
        explanation: "'At the eleventh hour' means at the latest possible time before it is too late.",
        explanationBengali: "'At the eleventh hour' মানে একদম শেষ মুহূর্তে।"
    },
    {
        id: "idm_812", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Apple of one's eye",
        options: ["A fruit lover", "Someone very precious or dear", "A clear vision", "An expensive object"],
        correctIndex: 1,
        explanation: "To be the 'apple of one's eye' means to be someone who is cherished and loved above all others.",
        explanationBengali: "'Apple of one's eye' মানে চোখের মণি বা অত্যন্ত প্রিয় ব্যক্তি।"
    },
    {
        id: "idm_813", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "A bed of roses",
        options: ["A garden", "A difficult path", "A comfortable or easy life", "A romantic date"],
        correctIndex: 2,
        explanation: "A 'bed of roses' refers to a situation or activity that is comfortable, easy, or luxurious.",
        explanationBengali: "'Bed of roses' মানে পুষ্পশয্যা বা খুব আরামদায়ক ও সুখের জীবন।"
    },
    {
        id: "idm_814", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To break the ice",
        options: ["To smash ice cubes", "To start a conflict", "To initiate a conversation", "To end a friendship"],
        correctIndex: 2,
        explanation: "To 'break the ice' means to do or say something to relieve tension or get a conversation started in a social setting.",
        explanationBengali: "'Break the ice' মানে জড়তা কাটিয়ে কথা বলা শুরু করা বা নীরবতা ভাঙা।"
    },
    {
        id: "idm_815", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "To burn the candle at both ends",
        options: ["To waste candles", "To work extremely hard without rest", "To be very rich", "To celebrate a festival"],
        correctIndex: 1,
        explanation: "To 'burn the candle at both ends' means to exhaust oneself by doing too much, especially going to bed late and getting up early.",
        explanationBengali: "'Burn the candle at both ends' মানে কঠোর পরিশ্রম করা বা বিশ্রাম না নিয়ে কাজ করা।"
    },
    {
        id: "idm_816", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A cock and bull story",
        options: ["A story about animals", "A true incident", "An absurd or unbelievable story", "A scary story"],
        correctIndex: 2,
        explanation: "A 'cock and bull story' is an implausible story used as an explanation or excuse.",
        explanationBengali: "'Cock and bull story' মানে গাঁজাখুরি গল্প বা অবিশ্বাস্য অজুহাত।"
    },
    {
        id: "idm_817", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Crocodile tears",
        options: ["Real sadness", "Tears of a reptile", "Insincere or false sorrow", "Tears of joy"],
        correctIndex: 2,
        explanation: "'Crocodile tears' refers to tears or expressions of sorrow that are insincere.",
        explanationBengali: "'Crocodile tears' মানে মায়াকান্না বা কৃত্রিম দুঃখ প্রকাশ।"
    },
    {
        id: "idm_818", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Flesh and blood",
        options: ["A horror movie", "Human nature or one's family", "Raw meat", "A dangerous animal"],
        correctIndex: 1,
        explanation: "'Flesh and blood' refers to someone's family or the human body and its natural limitations/emotions.",
        explanationBengali: "'Flesh and blood' মানে রক্তমাংসের শরীর (মানুষের স্বভাব) বা নিজের আত্মীয়-স্বজন।"
    },
    {
        id: "idm_819", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Hand to mouth",
        options: ["Eating constantly", "Living with just enough money to survive", "Saving money", "Begging on the street"],
        correctIndex: 1,
        explanation: "Living 'hand to mouth' means having only enough money for basic needs like food, with nothing left for savings.",
        explanationBengali: "'Hand to mouth' মানে দিন আনা দিন খাওয়া বা অভাবের সংসার।"
    },
    {
        id: "idm_820", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "In a nutshell",
        options: ["Inside a shell", "Briefly or concisely", "In a difficult situation", "Detailed explanation"],
        correctIndex: 1,
        explanation: "'In a nutshell' means in very few words; concisely.",
        explanationBengali: "'In a nutshell' মানে সংক্ষেপে বা এক কথায়।"
    },
    {
        id: "idm_821", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "To leave no stone unturned",
        options: ["To clean a garden", "To build a house", "To try every possible course of action", "To remain lazy"],
        correctIndex: 2,
        explanation: "To 'leave no stone unturned' means to do everything possible to find something or solve a problem.",
        explanationBengali: "'Leave no stone unturned' মানে কোনো চেষ্টার ত্রুটি না রাখা বা সাধ্যমতো সব উপায় অবলম্বন করা।"
    },
    {
        id: "idm_822", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "A piece of cake",
        options: ["A tasty dessert", "A difficult task", "A very easy task", "A birthday celebration"],
        correctIndex: 2,
        explanation: "Something that is 'a piece of cake' is very easy to do.",
        explanationBengali: "'Piece of cake' মানে খুব সহজ কাজ।"
    },
    {
        id: "idm_823", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To rain cats and dogs",
        options: ["To fight loudly", "To rain very heavily", "To have many pets", "A chaotic situation"],
        correctIndex: 1,
        explanation: "To 'rain cats and dogs' means to rain very hard.",
        explanationBengali: "'Rain cats and dogs' মানে মুষলধারে বৃষ্টি হওয়া।"
    },
    {
        id: "idm_824", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To spill the beans",
        options: ["To cook dinner", "To drop food", "To reveal a secret", "To plant seeds"],
        correctIndex: 2,
        explanation: "To 'spill the beans' means to reveal secret information unintentionally or indiscreetly.",
        explanationBengali: "'Spill the beans' মানে গোপন কথা ফাঁস করে দেওয়া।"
    },
    {
        id: "idm_825", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Through thick and thin",
        options: ["Through a forest", "Under all circumstances, good or bad", "Being fat and thin", "Only in good times"],
        correctIndex: 1,
        explanation: "To support someone 'through thick and thin' means to stay by their side during both good times and bad times.",
        explanationBengali: "'Through thick and thin' মানে সুখে-দুঃখে বা সব পরিস্থিতিতে পাশে থাকা।"
    },
    {
        id: "idm_826", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Under the weather",
        options: ["Enjoying the rain", "Feeling sick or unwell", "In a storm", "Under a cloud"],
        correctIndex: 1,
        explanation: "To feel 'under the weather' means to feel slightly ill or unwell.",
        explanationBengali: "'Under the weather' মানে শরীর খারাপ লাগা বা অসুস্থ বোধ করা।"
    },
    {
        id: "idm_827", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A wild goose chase",
        options: ["Hunting birds", "A foolish and hopeless search", "A fun adventure", "Running fast"],
        correctIndex: 1,
        explanation: "A 'wild goose chase' is a foolish and hopeless search for or pursuit of something unattainable.",
        explanationBengali: "'Wild goose chase' মানে পণ্ডশ্রম বা বৃথা অনুসন্ধান।"
    },
    {
        id: "idm_828", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A wolf in sheep's clothing",
        options: ["A brave person", "A dangerous person pretending to be harmless", "A farmer", "A shy animal"],
        correctIndex: 1,
        explanation: "A 'wolf in sheep's clothing' is a person or thing that appears harmless but is actually dangerous.",
        explanationBengali: "'Wolf in sheep's clothing' মানে কপট বন্ধু বা যে শত্রু বন্ধুর বেশে ক্ষতি করতে আসে।"
    },
    {
        id: "idm_829", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To add fuel to the fire",
        options: ["To cook food", "To help someone", "To make a bad situation worse", "To put out a fire"],
        correctIndex: 2,
        explanation: "To 'add fuel to the fire' means to cause a situation or conflict to become more intense or worse.",
        explanationBengali: "'Add fuel to the fire' মানে আগুনে ঘি ঢালা বা পরিস্থিতি আরও খারাপ করা।"
    },
    {
        id: "idm_830", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "A fish out of water",
        options: ["A dead fish", "Someone in an uncomfortable situation", "A good swimmer", "A thirsty person"],
        correctIndex: 1,
        explanation: "A 'fish out of water' refers to a person who is away from their usual environment or activities and feels uncomfortable or awkward.",
        explanationBengali: "'Fish out of water' মানে অস্বস্তিকর অবস্থায় পড়া (জলের মাছ ডাঙ্গায় তোলার মতো)।"
    },
    {
        id: "idm_831", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "At sixes and sevens",
        options: ["In a state of confusion or disorder", "To be very happy", "To be in a group", "To count numbers"],
        correctIndex: 0,
        explanation: "'At sixes and sevens' means a state of total confusion or disarray.",
        explanationBengali: "'At sixes and sevens' মানে বিশৃঙ্খল অবস্থায় বা এলোমেলো অবস্থায় থাকা।"
    },
    {
        id: "idm_832", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To bite the bullet",
        options: ["To eat metal", "To attack someone", "To face a difficult situation with courage", "To avoid a problem"],
        correctIndex: 2,
        explanation: "To 'bite the bullet' means to force yourself to do something unpleasant or difficult, or to be brave in a difficult situation.",
        explanationBengali: "'Bite the bullet' মানে দাঁতে দাঁত চেপে কঠিন পরিস্থিতি মোকাবেলা করা বা অপ্রিয় কাজ করতে বাধ্য হওয়া।"
    },
    {
        id: "idm_833", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To call it a day",
        options: ["To name a day", "To stop working on something", "To start a new job", "To work all night"],
        correctIndex: 1,
        explanation: "To 'call it a day' means to decide to stop working on something, usually because you are tired or have done enough.",
        explanationBengali: "'Call it a day' মানে আজকের মতো কাজ শেষ করা বা ক্ষান্ত দেওয়া।"
    },
    {
        id: "idm_834", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To cut corners",
        options: ["To drive safely", "To do something thoroughly", "To do something cheaply or lazily", "To cut paper"],
        correctIndex: 2,
        explanation: "To 'cut corners' means to do something in the easiest, cheapest, or fastest way, often sacrificing quality or safety.",
        explanationBengali: "'Cut corners' মানে খরচ বা সময় বাঁচাতে শর্টকাট নেওয়া (যার ফলে কাজের মান কমে যায়)।"
    },
    {
        id: "idm_835", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To get out of hand",
        options: ["To drop something", "To become uncontrollable", "To leave a place", "To injure one's hand"],
        correctIndex: 1,
        explanation: "If a situation 'gets out of hand', it becomes impossible to control.",
        explanationBengali: "'Get out of hand' মানে হাতের বাইরে চলে যাওয়া বা নিয়ন্ত্রণহীন হয়ে পড়া।"
    },
    {
        id: "idm_836", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To hit the nail on the head",
        options: ["To hammer loudly", "To hurt oneself", "To describe exactly what is causing a situation", "To miss the point"],
        correctIndex: 2,
        explanation: "To 'hit the nail on the head' means to say exactly the right thing or find the exact truth.",
        explanationBengali: "'Hit the nail on the head' মানে ঠিক জায়গাতে ঘা দেওয়া বা একদম সঠিক কথাটি বলা।"
    },
    {
        id: "idm_837", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To let the cat out of the bag",
        options: ["To release a pet", "To reveal a secret carelessly", "To make a mistake", "To go shopping"],
        correctIndex: 1,
        explanation: "To 'let the cat out of the bag' means to reveal a secret, usually by accident.",
        explanationBengali: "'Let the cat out of the bag' মানে গোপন কথা ফাঁস করে ফেলা।"
    },
    {
        id: "idm_838", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To miss the boat",
        options: ["To be too late to take an opportunity", "To lose a boat", "To swim across a river", "To avoid travel"],
        correctIndex: 0,
        explanation: "To 'miss the boat' means to be too slow to take an opportunity.",
        explanationBengali: "'Miss the boat' মানে সুযোগ হাতছাড়া করা বা দেরি করে ফেলা।"
    },
    {
        id: "idm_839", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "To pull someone's leg",
        options: ["To drag someone", "To tease or joke with someone", "To help someone stand up", "To injure someone"],
        correctIndex: 1,
        explanation: "To 'pull someone's leg' means to tell someone something that is not true as a way of joking with them.",
        explanationBengali: "'Pull someone's leg' মানে কারো সাথে মজা করা বা বোকা বানানোর চেষ্টা করা।"
    },
    {
        id: "idm_840", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "To see eye to eye",
        options: ["To stare at someone", "To have good vision", "To agree fully", "To argue"],
        correctIndex: 2,
        explanation: "To 'see eye to eye' means to be in full agreement with someone.",
        explanationBengali: "'See eye to eye' মানে সম্পূর্ণ একমত হওয়া।"
    },
    {
        id: "idm_841", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "To sit on the fence",
        options: ["To relax in a garden", "To refuse to take a side in an argument", "To watch a game", "To be balanced"],
        correctIndex: 1,
        explanation: "To 'sit on the fence' means to delay making a decision or refuse to choose between two sides.",
        explanationBengali: "'Sit on the fence' মানে সিদ্ধান্ত না নিয়ে নিরপেক্ষ থাকা বা দুই নৌকায় পা দেওয়া।"
    },
    {
        id: "idm_842", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Speak of the devil",
        options: ["Talk about evil things", "Said when the person you are talking about appears", "To curse someone", "To pray"],
        correctIndex: 1,
        explanation: "'Speak of the devil' is said when a person appears just after you have been talking about them.",
        explanationBengali: "'Speak of the devil' বলা হয় যখন যার কথা বলা হচ্ছে ঠিক তখনই সে উপস্থিত হয় (যেমমনি বুনো ওল তেমনি বাঘা তেঁতুল / নাম নিতেই হাজির)।"
    },
    {
        id: "idm_843", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Take with a grain of salt",
        options: ["To eat with salt", "To believe only part of something", "To take medicine", "To cook well"],
        correctIndex: 1,
        explanation: "To take something 'with a grain of salt' means to view something with skepticism or not strictly literally.",
        explanationBengali: "'Take with a grain of salt' মানে কোনো কিছু পুরোপুরি বিশ্বাস না করা বা সন্দেহের সাথে নেওয়া।"
    },
    {
        id: "idm_844", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Burn the midnight oil",
        options: ["To waste oil", "To work or study late into the night", "To cook late at night", "To create a fire"],
        correctIndex: 1,
        explanation: "To 'burn the midnight oil' means to read or work late into the night.",
        explanationBengali: "'Burn the midnight oil' মানে গভীর রাত পর্যন্ত জেগে কাজ করা বা পড়াশোনা করা।"
    },
    {
        id: "idm_845", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Face the music",
        options: ["To listen to songs", "To accept the unpleasant consequences of one's actions", "To attend a concert", "To dance"],
        correctIndex: 1,
        explanation: "To 'face the music' means to accept responsibility for something you have done.",
        explanationBengali: "'Face the music' মানে নিজের কৃতকর্মের ফল ভোগ করা বা সমালোচনার সম্মুখীন হওয়া।"
    },
    {
        id: "idm_846", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "In the same boat",
        options: ["Traveling together", "In the same difficult situation", "Sharing a room", "Rowing a boat"],
        correctIndex: 1,
        explanation: "To be 'in the same boat' means to be in the same unpleasant or difficult situation as other people.",
        explanationBengali: "'In the same boat' মানে একই বিপদে বা একই পরিস্থিতিতে থাকা।"
    },
    {
        id: "idm_847", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Beat a dead horse",
        options: ["To abuse an animal", "To waste effort on a lost cause", "To work very hard", "To ride a horse"],
        correctIndex: 1,
        explanation: "To 'beat a dead horse' means to waste time and effort on a matter that has already been decided.",
        explanationBengali: "'Beat a dead horse' মানে অহেতুক চেষ্টা করা বা মীমাংসিত বিষয় নিয়ে সময় নষ্ট করা।"
    },
    {
        id: "idm_848", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Bury the hatchet",
        options: ["To hide a weapon", "To plant a tree", "To end a quarrel or conflict", "To start a war"],
        correctIndex: 2,
        explanation: "To 'bury the hatchet' means to end a conflict and become friends.",
        explanationBengali: "'Bury the hatchet' মানে ঝগড়া বা শত্রুতা মিটিয়ে ফেলা।"
    },
    {
        id: "idm_849", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Cost an arm and a leg",
        options: ["To be physically painful", "To be very expensive", "To lose a limb", "To be cheap"],
        correctIndex: 1,
        explanation: "If something 'costs an arm and a leg', it is very expensive.",
        explanationBengali: "'Cost an arm and a leg' মানে অত্যন্ত ব্যয়বহুল।"
    },
    {
        id: "idm_850", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Cry wolf",
        options: ["To call for help when it is not needed", "To cry loudly", "To hunt wolves", "To be afraid"],
        correctIndex: 0,
        explanation: "To 'cry wolf' means to raise a false alarm.",
        explanationBengali: "'Cry wolf' মানে মিথ্যা সংকেত দেওয়া বা অকারণে ভয় দেখানো (বাঘ এসেছে গল্পের মতো)।"
    },
    {
        id: "idm_851", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Feel blue",
        options: ["To feel cold", "To feel sad or depressed", "To wear blue clothes", "To feel sick"],
        correctIndex: 1,
        explanation: "To 'feel blue' means to feel sad or depressed.",
        explanationBengali: "'Feel blue' মানে মন খারাপ থাকা বা বিষণ্ন বোধ করা।"
    },
    {
        id: "idm_852", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Give the cold shoulder",
        options: ["To offer a coat", "To ignore or treat someone in an unfriendly way", "To shiver", "To support someone"],
        correctIndex: 1,
        explanation: "To 'give the cold shoulder' means to intentionally ignore someone or treat them in an unfriendly manner.",
        explanationBengali: "'Give the cold shoulder' মানে অবজ্ঞা করা বা পাত্তা না দেওয়া।"
    },
    {
        id: "idm_853", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Go the extra mile",
        options: ["To walk a long distance", "To make a special effort to achieve something", "To run a marathon", "To drive fast"],
        correctIndex: 1,
        explanation: "To 'go the extra mile' means to do more than what is expected of you.",
        explanationBengali: "'Go the extra mile' মানে প্রত্যাশার চেয়ে বেশি চেষ্টা করা বা বাড়তি পরিশ্রম করা।"
    },
    {
        id: "idm_854", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Hit the sack",
        options: ["To punch a bag", "To go to bed", "To quit a job", "To win a game"],
        correctIndex: 1,
        explanation: "To 'hit the sack' is an informal way of saying 'go to bed'.",
        explanationBengali: "'Hit the sack' মানে ঘুমাতে যাওয়া।"
    },
    {
        id: "idm_855", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Kill two birds with one stone",
        options: ["To hunt birds", "To solve two problems with one action", "To be cruel", "To make a mistake"],
        correctIndex: 1,
        explanation: "To 'kill two birds with one stone' means to achieve two things with a single action.",
        explanationBengali: "'Kill two birds with one stone' মানে এক ঢিলে দুই পাখি মারা।"
    },
    {
        id: "idm_856", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Make ends meet",
        options: ["To finish a task", "To tie two ropes", "To earn just enough money to live on", "To be rich"],
        correctIndex: 2,
        explanation: "To 'make ends meet' means to have just enough money to pay for the things that you need.",
        explanationBengali: "'Make ends meet' মানে কোনোমতে দিন চালানো বা আয়-ব্যয়ের সঙ্গতি রাখা।"
    },
    {
        id: "idm_857", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Let sleeping dogs lie",
        options: ["To not disturb a situation to avoid trouble", "To let dogs sleep", "To be lazy", "To sleep late"],
        correctIndex: 0,
        explanation: "To 'let sleeping dogs lie' means to avoid interfering in a situation that is currently causing no problems but might do so as a result of such interference.",
        explanationBengali: "'Let sleeping dogs lie' মানে পুরানো কাসুন্দি না ঘাঁটা বা ঝামেলা এড়াতে চুপ থাকা।"
    },
    {
        id: "idm_858", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Steal someone's thunder",
        options: ["To steal electricity", "To take credit for someone else's work or idea", "To make a loud noise", "To get angry"],
        correctIndex: 1,
        explanation: "To 'steal someone's thunder' means to take the credit or praise that someone else deserves.",
        explanationBengali: "'Steal someone's thunder' মানে অন্যের কৃতিত্ব বা প্রশংসা কেড়ে নেওয়া।"
    },
    {
        id: "idm_859", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Turn a blind eye",
        options: ["To be blind", "To pretend not to notice", "To look carefully", "To help someone"],
        correctIndex: 1,
        explanation: "To 'turn a blind eye' means to pretend not to see or notice something wrong.",
        explanationBengali: "'Turn a blind eye' মানে দেখেও না দেখার ভান করা।"
    },
    {
        id: "idm_860", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "A hot potato",
        options: ["A tasty food", "A controversial issue that is difficult to handle", "A warm vegetable", "A simple problem"],
        correctIndex: 1,
        explanation: "A 'hot potato' is a controversial issue or situation that is awkward or unpleasant to deal with.",
        explanationBengali: "'Hot potato' মানে এমন কোনো বিষয় যা নিয়ে আলোচনা করা অস্বস্তিকর বা বিতর্কিত।"
    },
    {
        id: "idm_861", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Bag and baggage",
        options: ["With all one's belongings", "Without any luggage", "A heavy bag", "Leaving something behind"],
        correctIndex: 0,
        explanation: "'Bag and baggage' means with all of one's possessions.",
        explanationBengali: "'Bag and baggage' মানে তল্পিতল্পাসহ বা সব মালপত্র নিয়ে।"
    },
    {
        id: "idm_862", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "By hook or by crook",
        options: ["Using a hook", "By any possible means, fair or unfair", "By asking nicely", "By working hard"],
        correctIndex: 1,
        explanation: "'By hook or by crook' means by any means possible, whether honest or dishonest.",
        explanationBengali: "'By hook or by crook' মানে ছলে-বলে-কৌশলে বা যে কোনো উপায়ে।"
    },
    {
        id: "idm_863", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Ups and downs",
        options: ["Hills and valleys", "Good and bad times", "Going up and down", "Stairs"],
        correctIndex: 1,
        explanation: "'Ups and downs' refers to a mixture of good and bad things in life or a relationship.",
        explanationBengali: "'Ups and downs' মানে উত্থান-পতন বা জীবনের সুখ-দুঃখ।"
    },
    {
        id: "idm_864", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Pros and cons",
        options: ["Professionals and convicts", "Advantages and disadvantages", "Friends and enemies", "Truth and lies"],
        correctIndex: 1,
        explanation: "'Pros and cons' refers to the advantages and disadvantages of something.",
        explanationBengali: "'Pros and cons' মানে খুঁটিনাটি বা ভালো-মন্দ দিক।"
    },
    {
        id: "idm_865", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Apple of discord",
        options: ["A tasty apple", "A cause of quarrel", "A symbol of peace", "A garden fruit"],
        correctIndex: 1,
        explanation: "An 'apple of discord' is something that causes trouble or unhappiness.",
        explanationBengali: "'Apple of discord' মানে বিবাদের বিষয় বা কলহের মূল।"
    },
    {
        id: "idm_866", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "At the drop of a hat",
        options: ["Without hesitation or delay", "To drop a hat", "To be clumsy", "To be very angry"],
        correctIndex: 0,
        explanation: "To do something 'at the drop of a hat' means to do it immediately and without hesitation.",
        explanationBengali: "'At the drop of a hat' মানে সাথে সাথে বা কালবিলম্ব না করে।"
    },
    {
        id: "idm_867", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Barking up the wrong tree",
        options: ["Chasing a cat", "Accusing or blaming the wrong person", "Being cruel to animals", "Cutting down a tree"],
        correctIndex: 1,
        explanation: "'Barking up the wrong tree' means to be mistaken about something or to accuse the wrong person.",
        explanationBengali: "'Barking up the wrong tree' মানে ভুল মানুষের ওপর দোষ চাপানো বা ভুল পথে এগোনো।"
    },
    {
        id: "idm_868", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Be in the doldrums",
        options: ["To be on a ship", "To be in low spirits or stagnant", "To be very successful", "To be in a storm"],
        correctIndex: 1,
        explanation: "To 'be in the doldrums' means to be depressed, bored, or in a state of inactivity/stagnation.",
        explanationBengali: "'Be in the doldrums' মানে বিষণ্ন বা নিস্তেজ অবস্থায় থাকা।"
    },
    {
        id: "idm_869", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Bear the palm",
        options: ["To carry a tree", "To be victorious", "To accept punishment", "To be patient"],
        correctIndex: 1,
        explanation: "To 'bear the palm' means to be the winner or to be victorious.",
        explanationBengali: "'Bear the palm' মানে জয়ী হওয়া বা শ্রেষ্ঠত্ব অর্জন করা।"
    },
    {
        id: "idm_870", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Black sheep",
        options: ["A dark wool sweater", "A unique animal", "A disgrace to the family/group", "A lucky person"],
        correctIndex: 2,
        explanation: "A 'black sheep' is a member of a family or group who is regarded as a disgrace to them.",
        explanationBengali: "'Black sheep' মানে কুলাঙ্গার বা দলের কলঙ্ক।"
    },
    {
        id: "idm_871", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Blow one's own trumpet",
        options: ["To play music", "To praise oneself", "To criticize others", "To make a loud noise"],
        correctIndex: 1,
        explanation: "To 'blow one's own trumpet' means to talk boastfully about one's own achievements.",
        explanationBengali: "'Blow one's own trumpet' মানে নিজের ঢাক নিজে পেটানো বা নিজের প্রশংসা নিজে করা।"
    },
    {
        id: "idm_872", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Bone of contention",
        options: ["A delicious meal", "A subject of dispute or argument", "A strong friendship", "A medical problem"],
        correctIndex: 1,
        explanation: "A 'bone of contention' is a subject or issue over which there is continuing disagreement.",
        explanationBengali: "'Bone of contention' মানে বিবাদের বিষয়।"
    },
    {
        id: "idm_873", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Break the news",
        options: ["To stop a broadcast", "To tell someone bad news", "To destroy a newspaper", "To keep a secret"],
        correctIndex: 1,
        explanation: "To 'break the news' usually means to tell someone information that is new and often upsetting.",
        explanationBengali: "'Break the news' মানে কোনো দুঃসংবাদ জানানো।"
    },
    {
        id: "idm_874", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Burn one's bridges",
        options: ["To build a bridge", "To destroy all possible ways of returning to a situation", "To start a fire", "To be an engineer"],
        correctIndex: 1,
        explanation: "To 'burn one's bridges' means to destroy all possible ways of going back to a previous situation.",
        explanationBengali: "'Burn one's bridges' মানে ফিরে আসার পথ বন্ধ করে দেওয়া।"
    },
    {
        id: "idm_875", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "By fits and starts",
        options: ["To exercise regularly", "Irregularly or sporadically", "Very quickly", "With great energy"],
        correctIndex: 1,
        explanation: "Doing something 'by fits and starts' means doing it irregularly, stopping and starting often.",
        explanationBengali: "'By fits and starts' মানে অনিয়মিতভাবে বা খাপছাড়াভাবে।"
    },
    {
        id: "idm_876", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Capital punishment",
        options: ["A fine for money", "The death penalty", "Imprisonment for life", "Punishment in a capital city"],
        correctIndex: 1,
        explanation: "'Capital punishment' refers to the legal punishment of death for a crime.",
        explanationBengali: "'Capital punishment' মানে মৃত্যুদণ্ড।"
    },
    {
        id: "idm_877", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Cast pearls before swine",
        options: ["To feed animals", "To offer valuable things to people who do not appreciate them", "To make jewelry", "To be wealthy"],
        correctIndex: 1,
        explanation: "To 'cast pearls before swine' means to give something valuable to someone who cannot understand its value.",
        explanationBengali: "'Cast pearls before swine' মানে উলুবনে মুক্তা ছড়ানো (অযোগ্যকে দামী জিনিস দেওয়া)।"
    },
    {
        id: "idm_878", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Chicken-hearted",
        options: ["Generous", "Cowardly or timid", "Brave", "Cruel"],
        correctIndex: 1,
        explanation: "A 'chicken-hearted' person is someone who is cowardly and easily frightened.",
        explanationBengali: "'Chicken-hearted' মানে ভীরু বা কাপুরুষ।"
    },
    {
        id: "idm_879", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Come off with flying colours",
        options: ["To fly an airplane", "To fail miserably", "To succeed with distinction", "To run away"],
        correctIndex: 2,
        explanation: "To 'come off with flying colours' means to be highly successful or triumphant.",
        explanationBengali: "'Come off with flying colours' মানে অত্যন্ত সফলভাবে উত্তীর্ণ হওয়া।"
    },
    {
        id: "idm_880", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Cry for the moon",
        options: ["To howl at night", "To ask for something impossible", "To be very sad", "To want to be an astronaut"],
        correctIndex: 1,
        explanation: "To 'cry for the moon' means to ask for or want something that is impossible to get.",
        explanationBengali: "'Cry for the moon' মানে অসম্ভব কিছু চাওয়া (বামন হয়ে চাঁদ ধরার স্বপ্ন)।"
    },
    {
        id: "idm_881", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Cut no ice",
        options: ["To have no influence or effect", "To be very sharp", "To stop winter", "To be useless at cooking"],
        correctIndex: 0,
        explanation: "If an argument or idea 'cuts no ice', it has no influence or effect on someone.",
        explanationBengali: "'Cut no ice' মানে কোনো প্রভাব ফেলতে না পারা বা গুরুত্বহীন হওয়া।"
    },
    {
        id: "idm_882", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Die in harness",
        options: ["To die in a war", "To die while still working/active", "To die peacefully", "To die in an accident"],
        correctIndex: 1,
        explanation: "To 'die in harness' means to die while engaging in one's work, before retirement.",
        explanationBengali: "'Die in harness' মানে কাজ করতে করতে বা চাকুরিরত অবস্থায় মারা যাওয়া।"
    },
    {
        id: "idm_883", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Dog in the manger",
        options: ["A faithful pet", "A person who selfishly stops others from using something they don't need", "A guard dog", "A wild animal"],
        correctIndex: 1,
        explanation: "A 'dog in the manger' refers to a person who prevents others from using something that they themselves have no use for.",
        explanationBengali: "'Dog in the manger' মানে নিজে খাব না অন্যকেও খেতে দেব না এমন স্বভাবের লোক।"
    },
    {
        id: "idm_884", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Eat humble pie",
        options: ["To eat a bad meal", "To apologize humbly, often under pressure", "To be very hungry", "To celebrate"],
        correctIndex: 1,
        explanation: "To 'eat humble pie' means to be forced to apologize and admit one was wrong.",
        explanationBengali: "'Eat humble pie' মানে অপমান হজম করে ক্ষমা চাওয়া।"
    },
    {
        id: "idm_885", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Fair and square",
        options: ["Beautiful and round", "Dishonest", "Honest and straightforward", "A market place"],
        correctIndex: 2,
        explanation: "To do something 'fair and square' means to do it honestly and according to the rules.",
        explanationBengali: "'Fair and square' মানে সৎভাবে বা ন্যায়সংগতভাবে।"
    },
    {
        id: "idm_886", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "A feather in one's cap",
        options: ["A funny hat", "An achievement to be proud of", "A burden", "A sign of cowardice"],
        correctIndex: 1,
        explanation: "A 'feather in one's cap' is an achievement or honor that one can be proud of.",
        explanationBengali: "'Feather in one's cap' মানে সাফল্যের পালক বা গর্বের বিষয়।"
    },
    {
        id: "idm_887", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Fight tooth and nail",
        options: ["To fight lightly", "To use weapons", "To fight very fiercely and with great effort", "To give up easily"],
        correctIndex: 2,
        explanation: "To 'fight tooth and nail' means to fight with great energy and determination.",
        explanationBengali: "'Fight tooth and nail' মানে প্রাণপণ লড়াই করা।"
    },
    {
        id: "idm_888", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Fish in troubled waters",
        options: ["To catch many fish", "To take advantage of a chaotic situation", "To swim in a storm", "To be in danger"],
        correctIndex: 1,
        explanation: "To 'fish in troubled waters' means to try to gain an advantage from a difficult or confused situation.",
        explanationBengali: "'Fish in troubled waters' মানে ঘোলা জলে মাছ শিকার বা অন্যের বিপদে নিজের লাভ খোঁজা।"
    },
    {
        id: "idm_889", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "French leave",
        options: ["A holiday in France", "Leaving without permission or notice", "A polite goodbye", "Official leave"],
        correctIndex: 1,
        explanation: "To take 'French leave' means to leave work or a duty without permission.",
        explanationBengali: "'French leave' মানে অনুমতি ছাড়া প্রস্থান বা ছুটি।"
    },
    {
        id: "idm_890", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Get the sack",
        options: ["To receive a gift", "To buy a bag", "To be dismissed from a job", "To win a prize"],
        correctIndex: 2,
        explanation: "To 'get the sack' means to be fired from a job.",
        explanationBengali: "'Get the sack' মানে চাকরি থেকে বরখাস্ত হওয়া।"
    },
    {
        id: "idm_891", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Gift of the gab",
        options: ["An expensive gift", "The ability to speak eloquently", "A secret talent", "To be very rich"],
        correctIndex: 1,
        explanation: "Having the 'gift of the gab' means having the ability to speak easily and confidently.",
        explanationBengali: "'Gift of the gab' মানে বাকপটুতা বা কথা বলার বিশেষ দক্ষতা।"
    },
    {
        id: "idm_892", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Give up the ghost",
        options: ["To tell a ghost story", "To stop believing in ghosts", "To die or stop functioning", "To be scared"],
        correctIndex: 2,
        explanation: "To 'give up the ghost' is a euphemism for dying; it can also mean a machine stops working.",
        explanationBengali: "'Give up the ghost' মানে মারা যাওয়া বা শেষ নিঃশ্বাস ত্যাগ করা।"
    },
    {
        id: "idm_893", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Hand in glove",
        options: ["Wearing gloves", "In extremely close relationship or agreement", "Fighting", "Cold hands"],
        correctIndex: 1,
        explanation: "To be 'hand in glove' means to be in a very close association, often implying collusion.",
        explanationBengali: "'Hand in glove' মানে অত্যন্ত ঘনিষ্ঠ সম্পর্ক (অনেক সময় ষড়যন্ত্রে লিপ্ত বোঝাতে ব্যবহৃত হয়)।"
    },
    {
        id: "idm_894", chapter: "Idioms & Phrases", type: "vocab", difficulty: "easy", topic: "General",
        question: "Hard and fast",
        options: ["Difficult and quick", "Strict and cannot be changed", "Loose and flexible", "Running fast"],
        correctIndex: 1,
        explanation: "'Hard and fast' rules are fixed and definite; they cannot be altered.",
        explanationBengali: "'Hard and fast' মানে ধরাবাঁধা বা কঠোর (নিয়ম)।"
    },
    {
        id: "idm_895", chapter: "Idioms & Phrases", type: "vocab", difficulty: "hard", topic: "General",
        question: "Hobson's choice",
        options: ["A good choice", "Multiple choices", "No real choice at all", "A difficult decision"],
        correctIndex: 2,
        explanation: "'Hobson's choice' is a situation where you have no real choice because there is only one option available.",
        explanationBengali: "'Hobson's choice' মানে এমন অবস্থা যেখানে আসলে কোনো বিকল্প নেই (হয় এটা নাও, নয়তো কিছুই না)।"
    },
    {
        id: "idm_896", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Hold water",
        options: ["To carry a bucket", "To appear to be valid or reasonable", "To be leaky", "To stop a flood"],
        correctIndex: 1,
        explanation: "If an argument or theory 'holds water', it appears to be valid, sound, or reasonable.",
        explanationBengali: "'Hold water' মানে যুক্তিসঙ্গত বা ধোপে টেকা।"
    },
    {
        id: "idm_897", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Hue and cry",
        options: ["Colors and tears", "A loud public outcry", "Silent protest", "A whisper"],
        correctIndex: 1,
        explanation: "'Hue and cry' refers to a loud clamor or public outcry.",
        explanationBengali: "'Hue and cry' মানে শোরগোল বা হইচই।"
    },
    {
        id: "idm_898", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "In cold blood",
        options: ["While freezing", "Deliberately and without emotion", "Accidentally", "In winter"],
        correctIndex: 1,
        explanation: "To do something 'in cold blood' means to do it deliberately and ruthlessly, without showing any emotion.",
        explanationBengali: "'In cold blood' মানে ঠান্ডা মাথায় বা নৃশংসভাবে।"
    },
    {
        id: "idm_899", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Keep the wolf from the door",
        options: ["To have a pet wolf", "To ward off starvation or financial ruin", "To hunt wolves", "To be brave"],
        correctIndex: 1,
        explanation: "To 'keep the wolf from the door' means to have enough money to avoid going hungry or becoming poor.",
        explanationBengali: "'Keep the wolf from the door' মানে কোনোমতে খেয়েপরে বেঁচে থাকা বা অনাহার থেকে বাঁচা।"
    },
    {
        id: "idm_900", chapter: "Idioms & Phrases", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Kith and kin",
        options: ["Friends and enemies", "Blood relatives and friends", "Strangers", "Neighbors"],
        correctIndex: 1,
        explanation: "'Kith and kin' refers to one's friends, acquaintances, and relations.",
        explanationBengali: "'Kith and kin' মানে আত্মীয়-স্বজন ও বন্ধু-বান্ধব।"
    },
    {
        id: "spl_901", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Acommodation", "Accommodation", "Accomodation", "Acomodation"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Accommodation' (double 'c', double 'm').",
        explanationBengali: "সঠিক বানানটি হলো 'Accommodation' (বাসস্থান)। মনে রাখবেন: দুটি 'c' এবং দুটি 'm'।"
    },
    {
        id: "spl_902", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Embarrassment", "Embarassment", "Embarrasment", "Embarasment"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Embarrassment' (double 'r', double 's').",
        explanationBengali: "সঠিক বানানটি হলো 'Embarrassment' (লজ্জা/অস্বস্তি)। মনে রাখবেন: দুটি 'r' এবং দুটি 's'।"
    },
    {
        id: "spl_903", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Ocurred", "Occurred", "Occured", "Ocurred"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Occurred' (double 'c', double 'r').",
        explanationBengali: "সঠিক বানানটি হলো 'Occurred' (ঘটেছিল)। মনে রাখবেন: দুটি 'c' এবং দুটি 'r'।"
    },
    {
        id: "spl_904", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Seperate", "Saparate", "Separate", "Seprate"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Separate' (A after P).",
        explanationBengali: "সঠিক বানানটি হলো 'Separate' (আলাদা)। মনে রাখবেন: 'p'-এর পরে 'a' বসে।"
    },
    {
        id: "spl_905", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Recieve", "Receive", "Riceive", "Recive"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Receive' (Remember: 'i' before 'e' except after 'c').",
        explanationBengali: "সঠিক বানানটি হলো 'Receive' (গ্রহণ করা)। নিয়ম: 'c'-এর পরে 'e', তারপর 'i' হয়।"
    },
    {
        id: "spl_906", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Neccessary", "Necesary", "Necessary", "Necassary"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Necessary' (one 'c', double 's').",
        explanationBengali: "সঠিক বানানটি হলো 'Necessary' (প্রয়োজনীয়)। মনে রাখবেন: একটি 'c' এবং দুটি 's'।"
    },
    {
        id: "spl_907", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Mischievious", "Mischevous", "Mischievous", "Mischevious"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Mischievous' (ends in -vous, not -vious).",
        explanationBengali: "সঠিক বানানটি হলো 'Mischievous' (দুষ্টু)। এটি 'vous' দিয়ে শেষ হয়, 'vious' দিয়ে নয়।"
    },
    {
        id: "spl_908", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Lieutenant", "Leutenant", "Leiutenant", "Lieutnant"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Lieutenant'. Remember: Lie - u - tenant.",
        explanationBengali: "সঠিক বানানটি হলো 'Lieutenant' (লেফটেন্যান্ট)। মনে রাখার উপায়: Lie (মিথ্যা) - u (তুমি) - tenant (ভাড়াটিয়া)।"
    },
    {
        id: "spl_909", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Maintainance", "Maintenance", "Maintanance", "Maintenence"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Maintenance' (ten, not tain).",
        explanationBengali: "সঠিক বানানটি হলো 'Maintenance' (রক্ষণাবেক্ষণ)। শব্দটি 'Maintain' থেকে আসলেও বানানে 'ten' হয়।"
    },
    {
        id: "spl_910", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Beureaucracy", "Bureaucracy", "Bureacracy", "Beurocracy"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Bureaucracy' (eau, then cracy).",
        explanationBengali: "সঠিক বানানটি হলো 'Bureaucracy' (আমলাতন্ত্র)। মনে রাখবেন: 'Bur' + 'eau' + 'cracy'।"
    },
    {
        id: "spl_911", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Commitee", "Committee", "Comittee", "Commite"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Committee' (double 'm', double 't', double 'e').",
        explanationBengali: "সঠিক বানানটি হলো 'Committee' (কমিটি)। মনে রাখবেন: দুটি 'm', দুটি 't' এবং দুটি 'e'।"
    },
    {
        id: "spl_912", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Rythm", "Rhythm", "Rhytm", "Rhythum"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Rhythm' (starts with Rh, contains y, ends with thm).",
        explanationBengali: "সঠিক বানানটি হলো 'Rhythm' (ছন্দ)।"
    },
    {
        id: "spl_913", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Privilege", "Previlage", "Privelege", "Priviledge"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Privilege' (no 'd').",
        explanationBengali: "সঠিক বানানটি হলো 'Privilege' (সুবিধা)। মনে রাখবেন: শব্দটিতে কোনো 'd' নেই।"
    },
    {
        id: "spl_914", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Harrassment", "Harassment", "Harrasment", "Harrasment"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Harassment' (one 'r', double 's').",
        explanationBengali: "সঠিক বানানটি হলো 'Harassment' (হয়রানি)। মনে রাখবেন: একটি 'r' এবং দুটি 's'।"
    },
    {
        id: "spl_915", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Calender", "Calendar", "Calandar", "Calander"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Calendar' (ends with -dar).",
        explanationBengali: "সঠিক বানানটি হলো 'Calendar' (দিনপঞ্জিকা)। শেষে 'ar' থাকে, 'er' নয়।"
    },
    {
        id: "spl_916", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Foreign", "Foriegn", "Forein", "Forigen"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Foreign' (e before i).",
        explanationBengali: "সঠিক বানানটি হলো 'Foreign' (বিদেশি)।"
    },
    {
        id: "spl_917", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Garantee", "Guarantee", "Gaurantee", "Guarentee"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Guarantee' (starts with Gua).",
        explanationBengali: "সঠিক বানানটি হলো 'Guarantee' (নিশ্চয়তা)। শুরু হয় 'Gua' দিয়ে।"
    },
    {
        id: "spl_918", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Imediate", "Immediate", "Immidiate", "Immedate"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Immediate' (double 'm').",
        explanationBengali: "সঠিক বানানটি হলো 'Immediate' (তাৎক্ষণিক)। মনে রাখবেন: দুটি 'm'।"
    },
    {
        id: "spl_919", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Vaccum", "Vacuum", "Vacume", "Vaccuum"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Vacuum' (one 'c', double 'u').",
        explanationBengali: "সঠিক বানানটি হলো 'Vacuum' (শূন্যস্থান)। মনে রাখবেন: একটি 'c' এবং দুটি 'u'।"
    },
    {
        id: "spl_920", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Kernel", "Colonel", "Colonal", "Colnel"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Colonel' (pronounced 'kernel').",
        explanationBengali: "সঠিক বানানটি হলো 'Colonel' (কর্নেল)। উচ্চারণের সাথে বানানের মিল নেই।"
    },
    {
        id: "spl_921", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Que", "Queue", "Queu", "Qeue"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Queue' (Q-u-e-u-e).",
        explanationBengali: "সঠিক বানানটি হলো 'Queue' (লাইন)।"
    },
    {
        id: "spl_922", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Questionaire", "Questionnaire", "Questionnare", "Questionnair"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Questionnaire' (double 'n').",
        explanationBengali: "সঠিক বানানটি হলো 'Questionnaire' (প্রশ্নমালা)। মনে রাখবেন: দুটি 'n'।"
    },
    {
        id: "spl_923", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Pronounciation", "Pronunciation", "Prononciation", "Pronunsiation"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Pronunciation' (nun, not noun).",
        explanationBengali: "সঠিক বানানটি হলো 'Pronunciation' (উচ্চারণ)। 'Pronounce' শব্দে 'noun' থাকলেও, এখানে 'nun' হয়।"
    },
    {
        id: "spl_924", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Entrepreneur", "Enterpreneur", "Entreprenur", "Entrepraneur"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Entrepreneur'.",
        explanationBengali: "সঠিক বানানটি হলো 'Entrepreneur' (উদ্যোক্তা)।"
    },
    {
        id: "spl_925", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Sychology", "Psychology", "Psycology", "Pcychology"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Psychology' (Silent P).",
        explanationBengali: "সঠিক বানানটি হলো 'Psychology' (মনোবিজ্ঞান)।"
    },
    {
        id: "spl_926", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Neumonia", "Pneumonia", "Pnumonia", "Numonia"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Pneumonia' (starts with Pn).",
        explanationBengali: "সঠিক বানানটি হলো 'Pneumonia' (নিউমোনিয়া)।"
    },
    {
        id: "spl_927", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Twelvth", "Twelfth", "Twelth", "Twelft"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Twelfth' (contains 'f').",
        explanationBengali: "সঠিক বানানটি হলো 'Twelfth' (দ্বাদশ)। মনে রাখবেন: 've' উঠে গিয়ে 'f' হয়।"
    },
    {
        id: "spl_928", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Millenium", "Millennium", "Milennium", "Milenium"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Millennium' (double 'l', double 'n').",
        explanationBengali: "সঠিক বানানটি হলো 'Millennium' (সহস্রাব্দ)। মনে রাখবেন: দুটি 'l' এবং দুটি 'n'।"
    },
    {
        id: "spl_929", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Sargent", "Sergeant", "Seargent", "Sergent"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Sergeant'.",
        explanationBengali: "সঠিক বানানটি হলো 'Sergeant' (সার্জেন্ট)।"
    },
    {
        id: "spl_930", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Diarrhea", "Diarrhoea", "Diarhoea", "Dirrhoea"],
        correctIndex: 1,
        explanation: "The correct British spelling is 'Diarrhoea' (rr, then hoea).",
        explanationBengali: "সঠিক বানানটি হলো 'Diarrhoea' (ডায়রিয়া)। মনে রাখবেন: দুটি 'r' এবং শেষে 'hoea'।"
    },
    {
        id: "spl_931", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Supercede", "Supersede", "Superceed", "Superseed"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Supersede' (ends in -sede, not -cede). It comes from the Latin 'sedere' (to sit).",
        explanationBengali: "সঠিক বানানটি হলো 'Supersede' (রদ করা/স্থলাভিষিক্ত হওয়া)। এটি একমাত্র শব্দ যা 'sede' দিয়ে শেষ হয়, 'cede' দিয়ে নয়।"
    },
    {
        id: "spl_932", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Concensus", "Consencus", "Consensus", "Consenssus"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Consensus' (starts with Con, then sen, then sus). Think of 'Census'.",
        explanationBengali: "সঠিক বানানটি হলো 'Consensus' (ঐকমত্য)। মনে রাখবেন: Con + sen + sus।"
    },
    {
        id: "spl_933", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Mispell", "Misspel", "Misspell", "Misppell"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Misspell' (Mis + spell). So it has double 's' and double 'l'.",
        explanationBengali: "সঠিক বানানটি হলো 'Misspell' (ভুল বানান করা)। Mis + spell = Misspell (দুটি 's', দুটি 'l')।"
    },
    {
        id: "spl_934", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Perseverence", "Perseverance", "Perseveranc", "Persevearance"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Perseverance' (ends in -ance, middle is -sever-).",
        explanationBengali: "সঠিক বানানটি হলো 'Perseverance' (অধ্যবসায়)। শেষে 'ance' হয়, 'ence' নয়।"
    },
    {
        id: "spl_935", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Aquaintance", "Acquaintance", "Acquantance", "Acquaintence"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Acquaintance' (c before q, and ain).",
        explanationBengali: "সঠিক বানানটি হলো 'Acquaintance' (পরিচিত)। মনে রাখবেন: Ac + quaint + ance।"
    },
    {
        id: "spl_936", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Hankerchief", "Handkercheif", "Handkerchief", "Hankerchef"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Handkerchief' (Hand + kerchief). The 'd' is silent in pronunciation but present in spelling.",
        explanationBengali: "সঠিক বানানটি হলো 'Handkerchief' (রুমাল)। Hand (হাত) + kerchief (কারচিফ)। 'd' অনুচ্চারিত থাকে।"
    },
    {
        id: "spl_937", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Guage", "Gauge", "Gage", "Gaauge"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Gauge' (au, not ua).",
        explanationBengali: "সঠিক বানানটি হলো 'Gauge' (পরিমাপক)। মনে রাখবেন: 'G' এর পর 'au' বসে।"
    },
    {
        id: "spl_938", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Cemetary", "Cemetery", "Cemitery", "Cemetry"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Cemetery' (three e's: Cem-e-ter-y).",
        explanationBengali: "সঠিক বানানটি হলো 'Cemetery' (কবরস্থান)। মনে রাখার উপায়: তিনটি 'e' আছে (Cem-e-ter-y)।"
    },
    {
        id: "spl_939", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Consience", "Conscience", "Concience", "Consceince"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Conscience' (Con + science).",
        explanationBengali: "সঠিক বানানটি হলো 'Conscience' (বিবেক)। মনে রাখবেন: Con + science (বিজ্ঞান)।"
    },
    {
        id: "spl_940", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Definately", "Definitly", "Definitely", "Definetely"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Definitely' (finite in the middle).",
        explanationBengali: "সঠিক বানানটি হলো 'Definitely' (নিশ্চিতভাবে)। মাঝখানে 'finite' শব্দটি আছে।"
    },
    {
        id: "spl_941", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Dicipline", "Descipline", "Discipline", "Disipline"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Discipline' (sc combination).",
        explanationBengali: "সঠিক বানানটি হলো 'Discipline' (শৃঙ্খলা)। 'Di' এর পরে 'sci' হয়।"
    },
    {
        id: "spl_942", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Exagerate", "Exaggerate", "Exhaggerate", "Exaggerrate"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Exaggerate' (double g, single r).",
        explanationBengali: "সঠিক বানানটি হলো 'Exaggerate' (অতিরঞ্জিত করা)। মনে রাখবেন: দুটি 'g' এবং একটি 'r'।"
    },
    {
        id: "spl_943", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Firey", "Fiery", "Fiary", "Feiry"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Fiery' (ie, not iry). From 'Fire', but spelling changes.",
        explanationBengali: "সঠিক বানানটি হলো 'Fiery' (অগ্নিসদৃশ বা মেজাজি)। বানানটি 'Fire' থেকে আসলেও 're' এর বদলে 'er' এবং 'y' হয়।"
    },
    {
        id: "spl_944", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Greatful", "Gratefull", "Grateful", "Greteful"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Grateful' (from 'gratitude', not 'great').",
        explanationBengali: "সঠিক বানানটি হলো 'Grateful' (কৃতজ্ঞ)। এটি 'Great' (মহান) নয়, 'Grate' দিয়ে শুরু হয়।"
    },
    {
        id: "spl_945", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Heirarchy", "Hirarchy", "Hierarchy", "Hierarcy"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Hierarchy' (Hier-ar-chy).",
        explanationBengali: "সঠিক বানানটি হলো 'Hierarchy' (পদমর্যাদাক্রম)। মনে রাখবেন: Hier + archy।"
    },
    {
        id: "spl_946", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Humourous", "Humorous", "Humerous", "Humorus"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Humorous'. The 'u' from 'humour' is dropped in the adjective form.",
        explanationBengali: "সঠিক বানানটি হলো 'Humorous' (রসিক)। 'Humour' শব্দে 'u' থাকলেও Adjective ফর্মে 'u' থাকে না।"
    },
    {
        id: "spl_947", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Indispensible", "Indispensable", "Indispansable", "Indespensable"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Indispensable' (ends in -able).",
        explanationBengali: "সঠিক বানানটি হলো 'Indispensable' (অপরিহার্য)। শেষে 'able' হয়, 'ible' নয়।"
    },
    {
        id: "spl_948", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Inteligence", "Intelligence", "Intelegence", "Intellegence"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Intelligence' (double l).",
        explanationBengali: "সঠিক বানানটি হলো 'Intelligence' (বুদ্ধিমত্তা)। মনে রাখবেন: দুটি 'l'।"
    },
    {
        id: "spl_949", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Jewelery", "Jewellry", "Jewellery", "Jewllery"],
        correctIndex: 2,
        explanation: "The correct British spelling is 'Jewellery' (double l, ery).",
        explanationBengali: "সঠিক বানানটি হলো 'Jewellery' (গহনা)। ব্রিটিশ বানানে দুটি 'l' ব্যবহৃত হয়।"
    },
    {
        id: "spl_950", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Liesure", "Leisure", "Leasure", "Leisuree"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Leisure' (ei, not ie).",
        explanationBengali: "সঠিক বানানটি হলো 'Leisure' (অবসর)। মনে রাখবেন: 'L' এর পর 'ei' বসে।"
    },
    {
        id: "spl_951", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Liason", "Liasion", "Liaison", "Laision"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Liaison' (two i's: Li-ai-son).",
        explanationBengali: "সঠিক বানানটি হলো 'Liaison' (যোগাযোগ/সংযোগ)। মনে রাখবেন: Li + ai + son।"
    },
    {
        id: "spl_952", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Manoeuvre", "Manouvre", "Manouver", "Menuvre"],
        correctIndex: 0,
        explanation: "The correct British spelling is 'Manoeuvre' (oeu in the middle, re at the end).",
        explanationBengali: "সঠিক বানানটি হলো 'Manoeuvre' (কৌশল)। ব্রিটিশ বানান এটি, আমেরিকান বানান Maneuver।"
    },
    {
        id: "spl_953", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Medival", "Medieval", "Mideval", "Medievel"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Medieval' (Medi + eval).",
        explanationBengali: "সঠিক বানানটি হলো 'Medieval' (মধ্যযুগীয়)। মনে রাখবেন: Medi + eval।"
    },
    {
        id: "spl_954", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Momento", "Memento", "Memanto", "Mementto"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Memento' (Mem-en-to). It comes from 'memory'.",
        explanationBengali: "সঠিক বানানটি হলো 'Memento' (স্মারক)। 'Momento' ভুল, সঠিক হলো 'Me' দিয়ে শুরু।"
    },
    {
        id: "spl_955", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Miniscule", "Minuscule", "Minisule", "Minusule"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Minuscule' (Minus + cule). It comes from 'minus'.",
        explanationBengali: "সঠিক বানানটি হলো 'Minuscule' (অতি ক্ষুদ্র)। শব্দটি 'Minus' থেকে এসেছে, 'Mini' থেকে নয়।"
    },
    {
        id: "spl_956", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Noticable", "Noticeable", "Noticeble", "Noticsable"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Noticeable' (keep the 'e' to keep the 'c' soft).",
        explanationBengali: "সঠিক বানানটি হলো 'Noticeable' (লক্ষণীয়)। 'Notice' শব্দের শেষের 'e' টি থাকে।"
    },
    {
        id: "spl_957", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Occassion", "Ocasion", "Occasion", "Ocasison"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Occasion' (double c, single s).",
        explanationBengali: "সঠিক বানানটি হলো 'Occasion' (উপলক্ষ)। মনে রাখবেন: দুটি 'c' কিন্তু একটি 's'।"
    },
    {
        id: "spl_958", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Parrallel", "Paralel", "Parallel", "Parallell"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Parallel' (double l in the middle, single l at the end).",
        explanationBengali: "সঠিক বানানটি হলো 'Parallel' (সমান্তরাল)। মাঝখানে দুটি 'l' (ll) এবং শেষে একটি 'l'।"
    },
    {
        id: "spl_959", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Parliment", "Parliament", "Parlement", "Parliamentt"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Parliament' (ia in the middle).",
        explanationBengali: "সঠিক বানানটি হলো 'Parliament' (সংসদ)। 'Parlia' + 'ment'।"
    },
    {
        id: "spl_960", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Posession", "Posesion", "Possession", "Possesion"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Possession' (double s twice).",
        explanationBengali: "সঠিক বানানটি হলো 'Possession' (মালিকানা)। মনে রাখবেন: শব্দটিতে মোট চারটি 's' আছে (দুটি 'ss' জোড়া)।"
    },
    {
        id: "spl_961", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Preceed", "Precede", "Precide", "Precead"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Precede' (cede, not ceed).",
        explanationBengali: "সঠিক বানানটি হলো 'Precede' (পূর্ববর্তী হওয়া)। শেষে 'cede' হয়, 'ceed' নয়।"
    },
    {
        id: "spl_962", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Preferance", "Prefference", "Preference", "Preferrance"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Preference' (single f, single r, ends in -ence).",
        explanationBengali: "সঠিক বানানটি হলো 'Preference' (পছন্দ/অগ্রাধিকার)। মনে রাখবেন: একটি 'f', একটি 'r' এবং শেষে 'ence'।"
    },
    {
        id: "spl_963", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Prevalence", "Prevalance", "Privalence", "Prevelance"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Prevalence' (ends in -ence, middle is -val-).",
        explanationBengali: "সঠিক বানানটি হলো 'Prevalence' (প্রচলন/ব্যাপকতা)।"
    },
    {
        id: "spl_964", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Proced", "Proceed", "Procede", "Procced"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Proceed' (double e).",
        explanationBengali: "সঠিক বানানটি হলো 'Proceed' (অগ্রসর হওয়া)। মনে রাখবেন: দুটি 'e'।"
    },
    {
        id: "spl_965", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Proffessional", "Professional", "Proffesional", "Profesional"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Professional' (one f, double s).",
        explanationBengali: "সঠিক বানানটি হলো 'Professional' (পেশাদার)। মনে রাখবেন: একটি 'f' এবং দুটি 's'।"
    },
    {
        id: "spl_966", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Proffessor", "Professor", "Proffesor", "Professour"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Professor' (one f, double s, ends in -or).",
        explanationBengali: "সঠিক বানানটি হলো 'Professor' (অধ্যাপক)। মনে রাখবেন: একটি 'f' এবং দুটি 's'।"
    },
    {
        id: "spl_967", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Propoganda", "Propaganda", "Propagandaa", "Propagunda"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Propaganda' (pa-gan-da, not po-gan-da).",
        explanationBengali: "সঠিক বানানটি হলো 'Propaganda' (প্রচারণা)। মাঝখানে 'pa' হয়, 'po' নয়।"
    },
    {
        id: "spl_968", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Prophesy", "Prophecy", "Profecy", "Prophessy"],
        correctIndex: 1,
        explanation: "The noun is spelled 'Prophecy' (ends in -cy). The verb is 'Prophesy'.",
        explanationBengali: "সঠিক বানানটি হলো 'Prophecy' (ভবিষ্যদ্বাণী - Noun)। মনে রাখবেন: Noun হলে শেষে 'cy' হয়।"
    },
    {
        id: "spl_969", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Publically", "Publiclly", "Publicaly", "Publicly"],
        correctIndex: 3,
        explanation: "The correct spelling is 'Publicly' (ends in -cly, usually no 'al' before ly).",
        explanationBengali: "সঠিক বানানটি হলো 'Publicly' (প্রকাশ্যভাবে)। খেয়াল করুন: 'Public' + 'ly' (মাঝখানে 'al' বসে না)।"
    },
    {
        id: "spl_970", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Persue", "Pursue", "Pursoo", "Perseu"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Pursue' (Pur-sue).",
        explanationBengali: "সঠিক বানানটি হলো 'Pursue' (অনুসরণ করা)। শুরু হয় 'Pur' দিয়ে।"
    },
    {
        id: "spl_971", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Quareled", "Quarrelled", "Quarreled", "Quarueled"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Quarrelled' (double r, double l in British English).",
        explanationBengali: "সঠিক বানানটি হলো 'Quarrelled' (ঝগড়া করেছিল)। মনে রাখবেন: দুটি 'r' এবং দুটি 'l'।"
    },
    {
        id: "spl_972", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Reciept", "Receit", "Receipt", "Recipt"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Receipt' (Remember: 'e' before 'i' after 'c', and silent 'p').",
        explanationBengali: "সঠিক বানানটি হলো 'Receipt' (রসিদ)। নিয়ম: 'c'-এর পর 'e' আগে, তারপর 'i'। 'p' অনুচ্চারিত থাকে।"
    },
    {
        id: "spl_973", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Reccomend", "Recommend", "Reccommend", "Recomend"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Recommend' (one c, double m).",
        explanationBengali: "সঠিক বানানটি হলো 'Recommend' (সুপারিশ করা)। মনে রাখবেন: একটি 'c' এবং দুটি 'm'।"
    },
    {
        id: "spl_974", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Referance", "Referrence", "Refference", "Reference"],
        correctIndex: 3,
        explanation: "The correct spelling is 'Reference' (single f, single r, ends in -ence).",
        explanationBengali: "সঠিক বানানটি হলো 'Reference' (রেফারেন্স/সূত্র)। সব বর্ণ একবার করেই ব্যবহৃত হয় (r, f)।"
    },
    {
        id: "spl_975", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Rehersal", "Rehearsal", "Rehearshal", "Rehursal"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Rehearsal' (hear in the middle).",
        explanationBengali: "সঠিক বানানটি হলো 'Rehearsal' (মহড়া)। মাঝখানে 'hear' শব্দটি আছে।"
    },
    {
        id: "spl_976", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Relavant", "Relevent", "Relevant", "Relavent"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Relevant' (ant at the end).",
        explanationBengali: "সঠিক বানানটি হলো 'Relevant' (প্রাসঙ্গিক)। শেষে 'ant' হয়, 'ent' নয়।"
    },
    {
        id: "spl_977", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Religous", "Religious", "Religeous", "Riligious"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Religious' (gious).",
        explanationBengali: "সঠিক বানানটি হলো 'Religious' (ধর্মীয়)।"
    },
    {
        id: "spl_978", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Repitition", "Repetition", "Reppetition", "Repetation"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Repetition' (pe-ti-tion). Not 'pi'.",
        explanationBengali: "সঠিক বানানটি হলো 'Repetition' (পুনরাবৃত্তি)। মনে রাখবেন: 'Re' + 'pe' + 'ti' + 'tion'।"
    },
    {
        id: "spl_979", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Resturant", "Restarant", "Restaurant", "Restaurent"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Restaurant' (Rest-au-rant).",
        explanationBengali: "সঠিক বানানটি হলো 'Restaurant' (রেস্তোরাঁ)। মনে রাখবেন: 'tau' (au আছে) এবং শেষে 'rant'।"
    },
    {
        id: "spl_980", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Sacrilegious", "Sacreligious", "Sacriligeous", "Sacreligous"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Sacrilegious' (ri-le-gious). Note the 'le' after 'ri'.",
        explanationBengali: "সঠিক বানানটি হলো 'Sacrilegious' (ধর্মদ্রোহী)। 'Religious' শব্দের সাথে গুলিয়ে ফেলবেন না; এখানে 'ri' এর পর 'le' বসে।"
    },
    {
        id: "spl_981", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Schedual", "Schedule", "Scheduale", "Scadule"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Schedule'.",
        explanationBengali: "সঠিক বানানটি হলো 'Schedule' (সময়সূচী)।"
    },
    {
        id: "spl_982", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Sissors", "Scisors", "Scissors", "Scissers"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Scissors' (sc starts, double s in middle).",
        explanationBengali: "সঠিক বানানটি হলো 'Scissors' (কাঁচি)। 'Sci' দিয়ে শুরু এবং মাঝখানে দুটি 's'।"
    },
    {
        id: "spl_983", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Secratary", "Secretery", "Secretary", "Secratery"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Secretary' (Secret + ary).",
        explanationBengali: "সঠিক বানানটি হলো 'Secretary' (সম্পাদক/সচিব)। মনে রাখবেন: Secret + ary।"
    },
    {
        id: "spl_984", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Seige", "Siege", "Ceige", "Seage"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Siege' (i before e).",
        explanationBengali: "সঠিক বানানটি হলো 'Siege' (অবরোধ)। নিয়ম: 'i' এর পর 'e'।"
    },
    {
        id: "spl_985", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["So vereignty", "Sovereignty", "Soveriegnty", "Soverainty"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Sovereignty' (reign in the middle).",
        explanationBengali: "সঠিক বানানটি হলো 'Sovereignty' (সার্বভৌমত্ব)। মাঝখানে 'reign' (রাজত্ব) শব্দটি আছে।"
    },
    {
        id: "spl_986", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Simultanous", "Simaltaneous", "Simultaneous", "Simulteneous"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Simultaneous' (ne-ous at end).",
        explanationBengali: "সঠিক বানানটি হলো 'Simultaneous' (যুগপৎ/একই সাথে ঘটা)।"
    },
    {
        id: "spl_987", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Soliloquy", "Soliloqui", "Soliloqy", "Soleloquy"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Soliloquy' (ends in -quy).",
        explanationBengali: "সঠিক বানানটি হলো 'Soliloquy' (স্বগতোক্তি)।"
    },
    {
        id: "spl_988", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Speciman", "Spicemen", "Specimen", "Spacimen"],
        correctIndex: 2,
        explanation: "The correct spelling is 'Specimen' (ends in -men).",
        explanationBengali: "সঠিক বানানটি হলো 'Specimen' (নমুনা)। শেষে 'men' হয়।"
    },
    {
        id: "spl_989", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Stratagy", "Strategy", "Stratergy", "Stratigy"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Strategy' (te-gy). No 'r' before 'g'.",
        explanationBengali: "সঠিক বানানটি হলো 'Strategy' (কৌশল)। 'r' নেই 'g'-এর আগে।"
    },
    {
        id: "spl_990", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Superintendant", "Superintendent", "Superintendentt", "Suprintendent"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Superintendent' (ends in -ent).",
        explanationBengali: "সঠিক বানানটি হলো 'Superintendent' (তত্ত্বাবধায়ক)। শেষে 'dent' (ent) হয়, 'dant' নয়।"
    },
    {
        id: "spl_991", chapter: "Spelling", type: "vocab", difficulty: "hard", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Surveilance", "Surveillance", "Surveillence", "Survelance"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Surveillance' (sur-veil-lance). Double l, ends in -ance.",
        explanationBengali: "সঠিক বানানটি হলো 'Surveillance' (নজরদারি)। মনে রাখবেন: 'ei', দুটি 'l' এবং শেষে 'ance'।"
    },
    {
        id: "spl_992", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Sylabus", "Syllabus", "Syllabous", "Sylabbus"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Syllabus' (double l).",
        explanationBengali: "সঠিক বানানটি হলো 'Syllabus' (পাঠ্যসূচি)। মনে রাখবেন: দুটি 'l'।"
    },
    {
        id: "spl_993", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Symetry", "Symmetry", "Symmetry", "Symetery"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Symmetry' (double m).",
        explanationBengali: "সঠিক বানানটি হলো 'Symmetry' (প্রতিসাম্য)। মনে রাখবেন: দুটি 'm'।"
    },
    {
        id: "spl_994", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Symposium", "Simposium", "Sympossium", "Symposeum"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Symposium'.",
        explanationBengali: "সঠিক বানানটি হলো 'Symposium' (আলোচনা সভা)।"
    },
    {
        id: "spl_995", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Synonim", "Synonym", "Sinonym", "Synnonym"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Synonym' (y-n-o-n-y-m).",
        explanationBengali: "সঠিক বানানটি হলো 'Synonym' (সমার্থক শব্দ)।"
    },
    {
        id: "spl_996", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Tarriff", "Tariff", "Tarif", "Tarrif"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Tariff' (one r, double f).",
        explanationBengali: "সঠিক বানানটি হলো 'Tariff' (শুল্ক)। মনে রাখবেন: একটি 'r' এবং দুটি 'f'।"
    },
    {
        id: "spl_997", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Tatoo", "Tattoo", "Tatto", "Tattou"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Tattoo' (double t, double o).",
        explanationBengali: "সঠিক বানানটি হলো 'Tattoo' (উল্কি)। মনে রাখবেন: দুটি 't' এবং দুটি 'o'।"
    },
    {
        id: "spl_998", chapter: "Spelling", type: "vocab", difficulty: "moderate", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Technique", "Tecnique", "Techneque", "Tecknique"],
        correctIndex: 0,
        explanation: "The correct spelling is 'Technique' (ends in -ique).",
        explanationBengali: "সঠিক বানানটি হলো 'Technique' (কৌশল)। শেষে 'que' হয়।"
    },
    {
        id: "spl_999", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Tommorrow", "Tomorrow", "Tommorow", "Toomorrow"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Tomorrow' (one m, double r).",
        explanationBengali: "সঠিক বানানটি হলো 'Tomorrow' (আগামীকাল)। মনে রাখবেন: একটি 'm' এবং দুটি 'r'।"
    },
    {
        id: "spl_1000", chapter: "Spelling", type: "vocab", difficulty: "easy", topic: "General",
        question: "Select the correctly spelt word.",
        options: ["Toungue", "Tongue", "Tongu", "Tounge"],
        correctIndex: 1,
        explanation: "The correct spelling is 'Tongue' (ends in -gue).",
        explanationBengali: "সঠিক বানানটি হলো 'Tongue' (জিহ্বা)।"
    },
    // --- Passage 1: The Amazon Rainforest ---
    {
        id: "rc_1001", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: The Amazon rainforest is the world's largest tropical rainforest. It covers over 5.5 million square kilometers and is often referred to as the 'lungs of the Earth' because it produces 20% of the world's oxygen. However, deforestation poses a severe threat to its existence. Farmers clear land for agriculture, and loggers cut down trees for wood. This destruction leads to a loss of biodiversity and contributes to climate change.\n\nQuestion: Why is the Amazon rainforest called the 'lungs of the Earth'?",
        options: ["It absorbs all the carbon dioxide", "It produces 20% of the world's oxygen", "It is shaped like a lung", "It helps the Earth breathe water"],
        correctIndex: 1,
        explanation: "The passage explicitly states it is called the 'lungs of the Earth' because it produces 20% of the world's oxygen.",
        explanationBengali: "প্যাসেজে স্পষ্টভাবে বলা আছে যে এটি পৃথিবীর ২০% অক্সিজেন উৎপাদন করে, তাই একে 'lungs of the Earth' বলা হয়।"
    },
    {
        id: "rc_1002", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Environment",
        question: "Passage: The Amazon rainforest is the world's largest tropical rainforest. It covers over 5.5 million square kilometers and is often referred to as the 'lungs of the Earth' because it produces 20% of the world's oxygen. However, deforestation poses a severe threat to its existence. Farmers clear land for agriculture, and loggers cut down trees for wood. This destruction leads to a loss of biodiversity and contributes to climate change.\n\nQuestion: What is the main threat to the Amazon mentioned in the passage?",
        options: ["Flooding", "Deforestation", "Tourism", "Mining"],
        correctIndex: 1,
        explanation: "The passage mentions that 'deforestation poses a severe threat to its existence'.",
        explanationBengali: "প্যাসেজে উল্লেখ করা হয়েছে যে 'deforestation' বা বন উজাড় করা এর অস্তিত্বের জন্য মারাত্মক হুমকি।"
    },
    {
        id: "rc_1003", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: The Amazon rainforest is the world's largest tropical rainforest. It covers over 5.5 million square kilometers and is often referred to as the 'lungs of the Earth' because it produces 20% of the world's oxygen. However, deforestation poses a severe threat to its existence. Farmers clear land for agriculture, and loggers cut down trees for wood. This destruction leads to a loss of biodiversity and contributes to climate change.\n\nQuestion: Which group is mentioned as clearing land for agriculture?",
        options: ["Loggers", "Miners", "Farmers", "Tourists"],
        correctIndex: 2,
        explanation: "The text states: 'Farmers clear land for agriculture'.",
        explanationBengali: "টেক্সটে বলা আছে: 'Farmers clear land for agriculture' অর্থাৎ কৃষকরা কৃষিকাজের জন্য জমি পরিষ্কার করে।"
    },
    {
        id: "rc_1004", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: The Amazon rainforest is the world's largest tropical rainforest. It covers over 5.5 million square kilometers and is often referred to as the 'lungs of the Earth' because it produces 20% of the world's oxygen. However, deforestation poses a severe threat to its existence. Farmers clear land for agriculture, and loggers cut down trees for wood. This destruction leads to a loss of biodiversity and contributes to climate change.\n\nQuestion: What is a consequence of the destruction of the rainforest?",
        options: ["Increase in biodiversity", "Loss of biodiversity", "Decrease in oxygen demand", "Decrease in climate change"],
        correctIndex: 1,
        explanation: "The passage concludes by saying destruction leads to a 'loss of biodiversity'.",
        explanationBengali: "প্যাসেজের শেষে বলা হয়েছে যে ধ্বংসের ফলে 'loss of biodiversity' বা জীববৈচিত্র্যের ক্ষতি হয়।"
    },
    {
        id: "rc_1005", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Environment",
        question: "Passage: The Amazon rainforest is the world's largest tropical rainforest. It covers over 5.5 million square kilometers and is often referred to as the 'lungs of the Earth' because it produces 20% of the world's oxygen. However, deforestation poses a severe threat to its existence. Farmers clear land for agriculture, and loggers cut down trees for wood. This destruction leads to a loss of biodiversity and contributes to climate change.\n\nQuestion: Choose the word from the passage that means 'the variety of life in the world'.",
        options: ["Existence", "Agriculture", "Biodiversity", "Tropical"],
        correctIndex: 2,
        explanation: "'Biodiversity' refers to the variety of life (plants and animals) in a particular habitat.",
        explanationBengali: "'Biodiversity' মানে হলো জীববৈচিত্র্য, যা পৃথিবীতে প্রাণের বৈচিত্র্যকে বোঝায়।"
    },

    // --- Passage 2: The Industrial Revolution ---
    {
        id: "rc_1006", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to the world. This era saw a shift from hand production methods to machines, new chemical manufacturing, and iron production processes. While it improved the standard of living for many by making goods cheaper, it also led to poor working conditions and child labor in factories.\n\nQuestion: Where did the Industrial Revolution begin?",
        options: ["United States", "France", "Great Britain", "Germany"],
        correctIndex: 2,
        explanation: "The passage states: 'It began in Great Britain'.",
        explanationBengali: "প্যাসেজে বলা আছে: 'It began in Great Britain' (এটি গ্রেট ব্রিটেনে শুরু হয়েছিল)।"
    },
    {
        id: "rc_1007", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to the world. This era saw a shift from hand production methods to machines, new chemical manufacturing, and iron production processes. While it improved the standard of living for many by making goods cheaper, it also led to poor working conditions and child labor in factories.\n\nQuestion: What was a positive effect of the Industrial Revolution mentioned in the text?",
        options: ["It eliminated child labor", "It made goods cheaper", "It reduced pollution", "It stopped wars"],
        correctIndex: 1,
        explanation: "The text mentions it 'improved the standard of living for many by making goods cheaper'.",
        explanationBengali: "টেক্সটে উল্লেখ করা হয়েছে যে এটি পণ্য সস্তা করে অনেকের জীবনযাত্রার মান উন্নত করেছে।"
    },
    {
        id: "rc_1008", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to the world. This era saw a shift from hand production methods to machines, new chemical manufacturing, and iron production processes. While it improved the standard of living for many by making goods cheaper, it also led to poor working conditions and child labor in factories.\n\nQuestion: Which of the following was NOT a shift mentioned in the passage?",
        options: ["Hand production to machines", "Iron production processes", "Digital technology", "Chemical manufacturing"],
        correctIndex: 2,
        explanation: "The passage mentions machines, chemical manufacturing, and iron production, but does not mention 'Digital technology'.",
        explanationBengali: "প্যাসেজে মেশিন, রাসায়নিক উৎপাদন এবং লোহা উৎপাদনের কথা বলা হয়েছে, কিন্তু 'Digital technology'-এর কথা নেই।"
    },
    {
        id: "rc_1009", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History",
        question: "Passage: The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to the world. This era saw a shift from hand production methods to machines, new chemical manufacturing, and iron production processes. While it improved the standard of living for many by making goods cheaper, it also led to poor working conditions and child labor in factories.\n\nQuestion: What is a negative aspect of the Industrial Revolution mentioned?",
        options: ["Expensive goods", "Lack of iron", "Poor working conditions", "Slow production"],
        correctIndex: 2,
        explanation: "The text states it 'led to poor working conditions and child labor'.",
        explanationBengali: "টেক্সটে বলা হয়েছে যে এর ফলে 'poor working conditions' বা কাজের পরিবেশ খারাপ হয়েছিল।"
    },
    {
        id: "rc_1010", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "History",
        question: "Passage: The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It began in Great Britain and quickly spread to the world. This era saw a shift from hand production methods to machines, new chemical manufacturing, and iron production processes. While it improved the standard of living for many by making goods cheaper, it also led to poor working conditions and child labor in factories.\n\nQuestion: The word 'Era' in the passage refers to:",
        options: ["A specific machine", "A long and distinct period of history", "A chemical process", "A geographical location"],
        correctIndex: 1,
        explanation: "'Era' means a long and distinct period of history with a particular feature or characteristic.",
        explanationBengali: "'Era' মানে যুগ বা ইতিহাসের একটি দীর্ঘ ও বিশেষ সময়কাল।"
    },

    // --- Passage 3: Coffee Culture ---
    {
        id: "rc_1011", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Culture",
        question: "Passage: Coffee is one of the most popular beverages in the world. It is believed to have originated in Ethiopia, where a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. The drink then spread to the Middle East and eventually to Europe. Today, coffee houses are social hubs where people gather to talk, work, or relax. However, drinking too much coffee can cause anxiety and insomnia due to high caffeine content.\n\nQuestion: Where is coffee believed to have originated?",
        options: ["Brazil", "Ethiopia", "Europe", "Middle East"],
        correctIndex: 1,
        explanation: "The passage states: 'It is believed to have originated in Ethiopia'.",
        explanationBengali: "প্যাসেজে বলা আছে: 'It is believed to have originated in Ethiopia' (এটি ইথিওপিয়ায় উৎপত্তি বলে বিশ্বাস করা হয়)।"
    },
    {
        id: "rc_1012", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Culture",
        question: "Passage: Coffee is one of the most popular beverages in the world. It is believed to have originated in Ethiopia, where a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. The drink then spread to the Middle East and eventually to Europe. Today, coffee houses are social hubs where people gather to talk, work, or relax. However, drinking too much coffee can cause anxiety and insomnia due to high caffeine content.\n\nQuestion: Who was Kaldi?",
        options: ["A coffee merchant", "A king", "A goat herder", "A famous doctor"],
        correctIndex: 2,
        explanation: "The text describes Kaldi as 'a goat herder named Kaldi'.",
        explanationBengali: "টেক্সটে কালদিকে 'a goat herder' বা একজন ছাগল পালক হিসেবে বর্ণনা করা হয়েছে।"
    },
    {
        id: "rc_1013", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Culture",
        question: "Passage: Coffee is one of the most popular beverages in the world. It is believed to have originated in Ethiopia, where a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. The drink then spread to the Middle East and eventually to Europe. Today, coffee houses are social hubs where people gather to talk, work, or relax. However, drinking too much coffee can cause anxiety and insomnia due to high caffeine content.\n\nQuestion: According to the passage, what effect did the berries have on the goats?",
        options: ["They became sleepy", "They became energetic", "They fell ill", "They became calm"],
        correctIndex: 1,
        explanation: "The passage says Kaldi noticed his goats 'becoming energetic'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে যে ছাগলগুলো 'energetic' বা চনমনে হয়ে উঠেছিল।"
    },
    {
        id: "rc_1014", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Culture",
        question: "Passage: Coffee is one of the most popular beverages in the world. It is believed to have originated in Ethiopia, where a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. The drink then spread to the Middle East and eventually to Europe. Today, coffee houses are social hubs where people gather to talk, work, or relax. However, drinking too much coffee can cause anxiety and insomnia due to high caffeine content.\n\nQuestion: What negative effect of coffee is mentioned?",
        options: ["It tastes bitter", "It is expensive", "It causes anxiety and insomnia", "It causes weight gain"],
        correctIndex: 2,
        explanation: "The passage states drinking too much coffee can cause 'anxiety and insomnia'.",
        explanationBengali: "প্যাসেজে উল্লেখ আছে যে অতিরিক্ত কফি পানে 'anxiety' (উদ্বেগ) এবং 'insomnia' (অনিদ্রা) হতে পারে।"
    },
    {
        id: "rc_1015", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Culture",
        question: "Passage: Coffee is one of the most popular beverages in the world. It is believed to have originated in Ethiopia, where a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree. The drink then spread to the Middle East and eventually to Europe. Today, coffee houses are social hubs where people gather to talk, work, or relax. However, drinking too much coffee can cause anxiety and insomnia due to high caffeine content.\n\nQuestion: What is the meaning of 'Insomnia'?",
        options: ["Excessive sleeping", "Inability to sleep", "Loss of appetite", "Headache"],
        correctIndex: 1,
        explanation: "Insomnia is a sleep disorder characterized by the inability to fall asleep or stay asleep.",
        explanationBengali: "'Insomnia' মানে হলো অনিদ্রা বা ঘুমাতে না পারার সমস্যা।"
    },

    // --- Passage 4: Artificial Intelligence ---
    {
        id: "rc_1016", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. These tasks include problem-solving, understanding language, and recognizing patterns. While AI has the potential to revolutionize industries like healthcare and transportation, there are concerns about job displacement. If machines can do the work of humans faster and cheaper, many people worry that unemployment rates will rise.\n\nQuestion: What does AI stand for?",
        options: ["Automated Information", "Artificial Intelligence", "Advanced Internet", "Automatic Interface"],
        correctIndex: 1,
        explanation: "The first sentence states: 'Artificial Intelligence (AI)...'",
        explanationBengali: "প্রথম বাক্যেই বলা আছে: 'Artificial Intelligence (AI)'।"
    },
    {
        id: "rc_1017", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. These tasks include problem-solving, understanding language, and recognizing patterns. While AI has the potential to revolutionize industries like healthcare and transportation, there are concerns about job displacement. If machines can do the work of humans faster and cheaper, many people worry that unemployment rates will rise.\n\nQuestion: Which industry is mentioned as potentially being revolutionized by AI?",
        options: ["Fashion", "Healthcare", "Sports", "Music"],
        correctIndex: 1,
        explanation: "The text mentions 'revolutionize industries like healthcare and transportation'.",
        explanationBengali: "টেক্সটে 'healthcare' (স্বাস্থ্যসেবা) এবং 'transportation' (পরিবহন)-এর কথা উল্লেখ করা হয়েছে।"
    },
    {
        id: "rc_1018", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. These tasks include problem-solving, understanding language, and recognizing patterns. While AI has the potential to revolutionize industries like healthcare and transportation, there are concerns about job displacement. If machines can do the work of humans faster and cheaper, many people worry that unemployment rates will rise.\n\nQuestion: What is a major concern regarding AI mentioned in the passage?",
        options: ["Machines becoming too expensive", "Job displacement", "Computers breaking down", "Loss of internet"],
        correctIndex: 1,
        explanation: "The passage states: 'there are concerns about job displacement'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে: 'there are concerns about job displacement' (চাকরি হারানোর উদ্বেগ আছে)।"
    },
    {
        id: "rc_1019", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. These tasks include problem-solving, understanding language, and recognizing patterns. While AI has the potential to revolutionize industries like healthcare and transportation, there are concerns about job displacement. If machines can do the work of humans faster and cheaper, many people worry that unemployment rates will rise.\n\nQuestion: Why might unemployment rates rise according to the passage?",
        options: ["Humans are lazy", "Machines can do work faster and cheaper", "There are not enough machines", "Industries are closing down"],
        correctIndex: 1,
        explanation: "The passage explains: 'If machines can do the work of humans faster and cheaper... unemployment rates will rise'.",
        explanationBengali: "প্যাসেজে ব্যাখ্যা করা হয়েছে যে মেশিন যদি মানুষের চেয়ে দ্রুত ও সস্তায় কাজ করতে পারে, তবে বেকারত্ব বাড়বে।"
    },
    {
        id: "rc_1020", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Science",
        question: "Passage: Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. These tasks include problem-solving, understanding language, and recognizing patterns. While AI has the potential to revolutionize industries like healthcare and transportation, there are concerns about job displacement. If machines can do the work of humans faster and cheaper, many people worry that unemployment rates will rise.\n\nQuestion: The word 'Displacement' in the context of jobs means:",
        options: ["Creating new jobs", "Moving to a new place", "The act of replacing someone", "Increasing salaries"],
        correctIndex: 2,
        explanation: "In this context, 'job displacement' refers to workers being replaced by machines.",
        explanationBengali: "এখানে 'job displacement' মানে হলো কর্মীদের মেশিন দ্বারা প্রতিস্থাপন করা।"
    },

    // --- Passage 5: The Ant and the Grasshopper ---
    {
        id: "rc_1021", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Fable",
        question: "Passage: One summer day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. 'Why not come and chat with me,' said the Grasshopper, 'instead of toiling and moiling in that way?' 'I am helping to lay up food for the winter,' said the Ant, 'and recommend you to do the same.' The Grasshopper laughed at the idea, but when winter came, he found himself without food.\n\nQuestion: What was the Grasshopper doing in the summer?",
        options: ["Gathering food", "Sleeping", "Singing and chirping", "Building a house"],
        correctIndex: 2,
        explanation: "The text says the Grasshopper was 'chirping and singing to its heart's content'.",
        explanationBengali: "টেক্সটে বলা আছে ঘাসফড়িংটি 'chirping and singing' (গান গাইছিল ও কিচিরমিচির করছিল)।"
    },
    {
        id: "rc_1022", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Fable",
        question: "Passage: One summer day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. 'Why not come and chat with me,' said the Grasshopper, 'instead of toiling and moiling in that way?' 'I am helping to lay up food for the winter,' said the Ant, 'and recommend you to do the same.' The Grasshopper laughed at the idea, but when winter came, he found himself without food.\n\nQuestion: What was the Ant carrying?",
        options: ["A leaf", "An ear of corn", "A piece of wood", "A drop of water"],
        correctIndex: 1,
        explanation: "The text states the Ant was 'bearing along... an ear of corn'.",
        explanationBengali: "টেক্সটে বলা আছে যে পিপঁড়াটি 'an ear of corn' (ভুট্টার দানা) বহন করছিল।"
    },
    {
        id: "rc_1023", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Fable",
        question: "Passage: One summer day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. 'Why not come and chat with me,' said the Grasshopper, 'instead of toiling and moiling in that way?' 'I am helping to lay up food for the winter,' said the Ant, 'and recommend you to do the same.' The Grasshopper laughed at the idea, but when winter came, he found himself without food.\n\nQuestion: Why was the Ant working so hard?",
        options: ["To build a nest", "To impress the Grasshopper", "To save food for the winter", "To lose weight"],
        correctIndex: 2,
        explanation: "The Ant said, 'I am helping to lay up food for the winter'.",
        explanationBengali: "পিপঁড়াটি বলেছিল সে শীতের জন্য খাবার জমাচ্ছে।"
    },
    {
        id: "rc_1024", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Fable",
        question: "Passage: One summer day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. 'Why not come and chat with me,' said the Grasshopper, 'instead of toiling and moiling in that way?' 'I am helping to lay up food for the winter,' said the Ant, 'and recommend you to do the same.' The Grasshopper laughed at the idea, but when winter came, he found himself without food.\n\nQuestion: What happened to the Grasshopper when winter came?",
        options: ["He had plenty of food", "He went to sleep", "He found himself without food", "He migrated south"],
        correctIndex: 2,
        explanation: "The passage concludes: 'when winter came, he found himself without food'.",
        explanationBengali: "প্যাসেজের শেষে বলা হয়েছে: শীত যখন এল, সে দেখল তার কাছে কোনো খাবার নেই।"
    },
    {
        id: "rc_1025", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Fable",
        question: "Passage: One summer day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. 'Why not come and chat with me,' said the Grasshopper, 'instead of toiling and moiling in that way?' 'I am helping to lay up food for the winter,' said the Ant, 'and recommend you to do the same.' The Grasshopper laughed at the idea, but when winter came, he found himself without food.\n\nQuestion: What is the moral of this story?",
        options: ["Singing is better than working", "Work today and you can reap the benefits tomorrow", "Insects are intelligent", "Summer is the best season"],
        correctIndex: 1,
        explanation: "The story teaches the importance of preparation and hard work (Ant) over idleness (Grasshopper).",
        explanationBengali: "গল্পটির নীতিকথা হলো ভবিষ্যতের জন্য প্রস্তুতি নেওয়া বা পরিশ্রম করা (Work today and reap benefits tomorrow)।"
    },

    // --- Passage 6: Benefits of Reading ---
    {
        id: "rc_1026", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading is an essential skill that provides numerous benefits. It improves focus and concentration, as reading a book requires you to pay attention to the plot for extended periods. Additionally, reading expands vocabulary and improves communication skills. Unlike watching television, which is a passive activity, reading is an active process that engages the brain. Studies show that regular reading can even reduce stress and slow down mental decline in old age.\n\nQuestion: According to the passage, how is reading different from watching television?",
        options: ["Reading is faster", "Reading is a passive activity", "Reading is an active process", "Reading is less educational"],
        correctIndex: 2,
        explanation: "The passage states: 'Unlike watching television... reading is an active process'.",
        explanationBengali: "প্যাসেজে বলা আছে: টিভি দেখার বিপরীতে, পড়া হলো একটি 'active process' বা সক্রিয় প্রক্রিয়া।"
    },
    {
        id: "rc_1027", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading is an essential skill that provides numerous benefits. It improves focus and concentration, as reading a book requires you to pay attention to the plot for extended periods. Additionally, reading expands vocabulary and improves communication skills. Unlike watching television, which is a passive activity, reading is an active process that engages the brain. Studies show that regular reading can even reduce stress and slow down mental decline in old age.\n\nQuestion: Which of the following is NOT mentioned as a benefit of reading?",
        options: ["Improves focus", "Expands vocabulary", "Improves eyesight", "Reduces stress"],
        correctIndex: 2,
        explanation: "The passage mentions focus, vocabulary, and stress reduction, but does NOT mention 'improves eyesight'.",
        explanationBengali: "প্যাসেজে মনোযোগ, শব্দভাণ্ডার এবং স্ট্রেস কমানোর কথা বলা হলেও দৃষ্টিশক্তি উন্নতির কথা বলা হয়নি।"
    },
    {
        id: "rc_1028", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading is an essential skill that provides numerous benefits. It improves focus and concentration, as reading a book requires you to pay attention to the plot for extended periods. Additionally, reading expands vocabulary and improves communication skills. Unlike watching television, which is a passive activity, reading is an active process that engages the brain. Studies show that regular reading can even reduce stress and slow down mental decline in old age.\n\nQuestion: How does reading help with communication skills?",
        options: ["By expanding vocabulary", "By reducing stress", "By improving eyesight", "By making you speak louder"],
        correctIndex: 0,
        explanation: "The text says: 'reading expands vocabulary and improves communication skills'.",
        explanationBengali: "টেক্সট অনুযায়ী, পড়া 'vocabulary' বা শব্দভাণ্ডার বৃদ্ধি করে, যা যোগাযোগ দক্ষতা বাড়ায়।"
    },
    {
        id: "rc_1029", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Education",
        question: "Passage: Reading is an essential skill that provides numerous benefits. It improves focus and concentration, as reading a book requires you to pay attention to the plot for extended periods. Additionally, reading expands vocabulary and improves communication skills. Unlike watching television, which is a passive activity, reading is an active process that engages the brain. Studies show that regular reading can even reduce stress and slow down mental decline in old age.\n\nQuestion: What happens to the brain during reading?",
        options: ["It rests completely", "It is engaged actively", "It shuts down", "It gets confused"],
        correctIndex: 1,
        explanation: "The passage states reading is a process that 'engages the brain'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে যে পড়া মস্তিষ্ককে 'engage' বা ব্যস্ত রাখে (সক্রিয় করে)।"
    },
    {
        id: "rc_1030", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Education",
        question: "Passage: Reading is an essential skill that provides numerous benefits. It improves focus and concentration, as reading a book requires you to pay attention to the plot for extended periods. Additionally, reading expands vocabulary and improves communication skills. Unlike watching television, which is a passive activity, reading is an active process that engages the brain. Studies show that regular reading can even reduce stress and slow down mental decline in old age.\n\nQuestion: The word 'Decline' in the phrase 'mental decline' means:",
        options: ["Improvement", "Deterioration or weakening", "Growth", "Stability"],
        correctIndex: 1,
        explanation: "'Decline' here refers to the gradual loss of mental abilities or deterioration.",
        explanationBengali: "এখানে 'Decline' মানে হলো অবনতি বা দুর্বল হয়ে যাওয়া (মানসিক শক্তি কমে যাওয়া)।"
    },
    // --- Passage 7: The Solar System ---
    {
        id: "rc_1031", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Our solar system consists of the Sun and everything that orbits around it, including eight planets, their moons, and smaller bodies like asteroids and comets. The Sun is a star at the center of the solar system and provides the heat and light necessary for life on Earth. Jupiter is the largest planet, while Mercury is the smallest. Earth is the only planet known to support life due to its liquid water and breathable atmosphere.\n\nQuestion: What is at the center of the solar system?",
        options: ["Earth", "Jupiter", "The Moon", "The Sun"],
        correctIndex: 3,
        explanation: "The passage explicitly states: 'The Sun is a star at the center of the solar system'.",
        explanationBengali: "প্যাসেজে স্পষ্টভাবে বলা আছে: 'The Sun is a star at the center of the solar system' (সূর্য সৌরজগতের কেন্দ্রে অবস্থিত একটি নক্ষত্র)।"
    },
    {
        id: "rc_1032", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Science",
        question: "Passage: Our solar system consists of the Sun and everything that orbits around it, including eight planets, their moons, and smaller bodies like asteroids and comets. The Sun is a star at the center of the solar system and provides the heat and light necessary for life on Earth. Jupiter is the largest planet, while Mercury is the smallest. Earth is the only planet known to support life due to its liquid water and breathable atmosphere.\n\nQuestion: Which planet is the largest in the solar system?",
        options: ["Mars", "Earth", "Saturn", "Jupiter"],
        correctIndex: 3,
        explanation: "The text mentions: 'Jupiter is the largest planet'.",
        explanationBengali: "টেক্সটে উল্লেখ করা হয়েছে: 'Jupiter is the largest planet' (বৃহস্পতি সবচেয়ে বড় গ্রহ)।"
    },
    {
        id: "rc_1033", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Our solar system consists of the Sun and everything that orbits around it, including eight planets, their moons, and smaller bodies like asteroids and comets. The Sun is a star at the center of the solar system and provides the heat and light necessary for life on Earth. Jupiter is the largest planet, while Mercury is the smallest. Earth is the only planet known to support life due to its liquid water and breathable atmosphere.\n\nQuestion: Why is Earth unique according to the passage?",
        options: ["It is the largest planet", "It is the closest to the Sun", "It is the only planet known to support life", "It has the most moons"],
        correctIndex: 2,
        explanation: "The passage states Earth is unique because it is 'the only planet known to support life'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে পৃথিবী অনন্য কারণ এটিই 'একমাত্র গ্রহ যেখানে প্রাণের অস্তিত্ব আছে বলে জানা যায়'।"
    },
    {
        id: "rc_1034", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Science",
        question: "Passage: Our solar system consists of the Sun and everything that orbits around it, including eight planets, their moons, and smaller bodies like asteroids and comets. The Sun is a star at the center of the solar system and provides the heat and light necessary for life on Earth. Jupiter is the largest planet, while Mercury is the smallest. Earth is the only planet known to support life due to its liquid water and breathable atmosphere.\n\nQuestion: Which of the following is NOT mentioned as orbiting the Sun?",
        options: ["Planets", "Asteroids", "Comets", "Other stars"],
        correctIndex: 3,
        explanation: "The passage lists planets, moons, asteroids, and comets, but does not mention other stars orbiting the Sun.",
        explanationBengali: "প্যাসেজে গ্রহ, চাঁদ, গ্রহাণু এবং ধূমকেতুর কথা বলা হয়েছে, কিন্তু অন্য কোনো নক্ষত্র সূর্যকে প্রদক্ষিণ করছে এমন বলা হয়নি।"
    },
    {
        id: "rc_1035", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Science",
        question: "Passage: Our solar system consists of the Sun and everything that orbits around it, including eight planets, their moons, and smaller bodies like asteroids and comets. The Sun is a star at the center of the solar system and provides the heat and light necessary for life on Earth. Jupiter is the largest planet, while Mercury is the smallest. Earth is the only planet known to support life due to its liquid water and breathable atmosphere.\n\nQuestion: The word 'Orbit' means:",
        options: ["To stand still", "To move around an object in a curved path", "To explode", "To shine brightly"],
        correctIndex: 1,
        explanation: "To orbit means to revolve or move around a celestial body in a curved path.",
        explanationBengali: "'Orbit' মানে হলো কোনো বস্তুর চারপাশ দিয়ে একটি নির্দিষ্ট পথে ঘোরা বা প্রদক্ষিণ করা।"
    },

    // --- Passage 8: The Olympic Games ---
    {
        id: "rc_1036", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Sports/History",
        question: "Passage: The Olympic Games are a major international sporting event featuring summer and winter sports competitions. The modern Olympics were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Olympic symbol consists of five interlocking rings, representing the unity of the five inhabited continents.\n\nQuestion: Where were the ancient Olympic Games held?",
        options: ["Rome, Italy", "Athens, Greece", "Olympia, Greece", "Paris, France"],
        correctIndex: 2,
        explanation: "The passage states they were held in 'Olympia, Greece'.",
        explanationBengali: "প্যাসেজে বলা আছে যে প্রাচীন অলিম্পিক 'অলিম্পিয়া, গ্রীস'-এ অনুষ্ঠিত হয়েছিল।"
    },
    {
        id: "rc_1037", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Sports/History",
        question: "Passage: The Olympic Games are a major international sporting event featuring summer and winter sports competitions. The modern Olympics were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Olympic symbol consists of five interlocking rings, representing the unity of the five inhabited continents.\n\nQuestion: Who founded the International Olympic Committee?",
        options: ["Zeus", "Baron Pierre de Coubertin", "The King of Greece", "An unknown athlete"],
        correctIndex: 1,
        explanation: "The text says: 'Baron Pierre de Coubertin founded the International Olympic Committee'.",
        explanationBengali: "টেক্সটে বলা আছে: 'ব্যারন পিয়েরে ডি কুবার্তিন আন্তর্জাতিক অলিম্পিক কমিটি প্রতিষ্ঠা করেন'।"
    },
    {
        id: "rc_1038", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Sports/History",
        question: "Passage: The Olympic Games are a major international sporting event featuring summer and winter sports competitions. The modern Olympics were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Olympic symbol consists of five interlocking rings, representing the unity of the five inhabited continents.\n\nQuestion: When were the first modern Olympic Games held?",
        options: ["1894", "1900", "1896", "4th century AD"],
        correctIndex: 2,
        explanation: "The passage mentions the 'first modern Games in Athens in 1896'.",
        explanationBengali: "প্যাসেজে উল্লেখ করা হয়েছে যে প্রথম আধুনিক গেমস ১৮৯৬ সালে এথেন্সে অনুষ্ঠিত হয়।"
    },
    {
        id: "rc_1039", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Sports/History",
        question: "Passage: The Olympic Games are a major international sporting event featuring summer and winter sports competitions. The modern Olympics were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Olympic symbol consists of five interlocking rings, representing the unity of the five inhabited continents.\n\nQuestion: What do the five rings in the Olympic symbol represent?",
        options: ["Five ancient sports", "Five Greek gods", "Five inhabited continents", "Five centuries"],
        correctIndex: 2,
        explanation: "The passage explains the rings represent 'the unity of the five inhabited continents'.",
        explanationBengali: "প্যাসেজে ব্যাখ্যা করা হয়েছে যে রিংগুলো 'পাঁচটি জনবসতিপূর্ণ মহাদেশের ঐক্য' নির্দেশ করে।"
    },
    {
        id: "rc_1040", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Sports/History",
        question: "Passage: The Olympic Games are a major international sporting event featuring summer and winter sports competitions. The modern Olympics were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Olympic symbol consists of five interlocking rings, representing the unity of the five inhabited continents.\n\nQuestion: Which word in the passage means 'joined together'?",
        options: ["Inhabited", "Inspired", "Founded", "Interlocking"],
        correctIndex: 3,
        explanation: "Interlocking means engaging with each other by overlapping or fitting together.",
        explanationBengali: "Interlocking মানে একে অপরের সাথে যুক্ত থাকা বা একটার ভেতর দিয়ে আরেকটা যাওয়া (যেমন অলিম্পিকের রিংগুলো)।"
    },

    // --- Passage 9: Bees and Pollination ---
    {
        id: "rc_1041", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Nature",
        question: "Passage: Bees are flying insects known for their role in pollination and for producing honey and beeswax. They feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. As bees travel from flower to flower collecting nectar, they transfer pollen, which allows plants to reproduce. Without bees, many crops would fail, impacting global food supplies.\n\nQuestion: What is the primary purpose of nectar for bees?",
        options: ["Protein source", "Building hives", "Energy source", "Water source"],
        correctIndex: 2,
        explanation: "The passage states bees feed on nectar 'primarily as an energy source'.",
        explanationBengali: "প্যাসেজে বলা আছে মৌমাছিরা নেক্টার খায় মূলত 'energy source' বা শক্তির উৎস হিসেবে।"
    },
    {
        id: "rc_1042", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Nature",
        question: "Passage: Bees are flying insects known for their role in pollination and for producing honey and beeswax. They feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. As bees travel from flower to flower collecting nectar, they transfer pollen, which allows plants to reproduce. Without bees, many crops would fail, impacting global food supplies.\n\nQuestion: What important process do bees help with as they move between flowers?",
        options: ["Photosynthesis", "Pollination", "Germination", "Decomposition"],
        correctIndex: 1,
        explanation: "The text describes bees transferring pollen, which is the process of 'pollination'.",
        explanationBengali: "টেক্সটে বলা হয়েছে মৌমাছিরা পরাগ স্থানান্তর করে, যা 'pollination' বা পরাগায়ন প্রক্রিয়া।"
    },
    {
        id: "rc_1043", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Nature",
        question: "Passage: Bees are flying insects known for their role in pollination and for producing honey and beeswax. They feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. As bees travel from flower to flower collecting nectar, they transfer pollen, which allows plants to reproduce. Without bees, many crops would fail, impacting global food supplies.\n\nQuestion: According to the passage, why are bees critical for humans?",
        options: ["They make beeswax candles", "They are beautiful insects", "Their loss would impact global food supplies", "They eat harmful insects"],
        correctIndex: 2,
        explanation: "The passage warns: 'Without bees, many crops would fail, impacting global food supplies'.",
        explanationBengali: "প্যাসেজে সতর্ক করা হয়েছে: 'Without bees, many crops would fail...' অর্থাৎ তাদের অভাবে খাদ্য সরবরাহে প্রভাব পড়বে।"
    },
    {
        id: "rc_1044", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Nature",
        question: "Passage: Bees are flying insects known for their role in pollination and for producing honey and beeswax. They feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. As bees travel from flower to flower collecting nectar, they transfer pollen, which allows plants to reproduce. Without bees, many crops would fail, impacting global food supplies.\n\nQuestion: What do bees use pollen for?",
        options: ["Energy", "Protein and nutrients", "Making the hive strong", "Flight"],
        correctIndex: 1,
        explanation: "The passage states pollen is used 'primarily for protein and other nutrients'.",
        explanationBengali: "প্যাসেজে বলা আছে পরাগ মূলত 'protein and other nutrients'-এর জন্য ব্যবহৃত হয়।"
    },
    {
        id: "rc_1045", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Nature",
        question: "Passage: Bees are flying insects known for their role in pollination and for producing honey and beeswax. They feed on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients. As bees travel from flower to flower collecting nectar, they transfer pollen, which allows plants to reproduce. Without bees, many crops would fail, impacting global food supplies.\n\nQuestion: The word 'Reproduce' in relation to plants means:",
        options: ["To grow taller", "To produce offspring or seeds", "To die", "To absorb sunlight"],
        correctIndex: 1,
        explanation: "Reproduce means to produce new individuals (offspring) of the same kind.",
        explanationBengali: "'Reproduce' মানে হলো বংশবৃদ্ধি করা বা নতুন চারা/বীজ উৎপাদন করা।"
    },

    // --- Passage 10: The Wright Brothers ---
    {
        id: "rc_1046", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History/Technology",
        question: "Passage: Orville and Wilbur Wright were two American brothers, inventors, and aviation pioneers who are generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, near Kitty Hawk, North Carolina. Their background in bicycle repair helped them understand balance and control, which they applied to their flying machines.\n\nQuestion: What are the Wright brothers credited with inventing?",
        options: ["The bicycle", "The first motor-operated airplane", "The hot air balloon", "The helicopter"],
        correctIndex: 1,
        explanation: "The text credits them with inventing 'the world's first successful motor-operated airplane'.",
        explanationBengali: "টেক্সটে বলা আছে তারা 'বিশ্বের প্রথম সফল মোটর চালিত বিমান' আবিষ্কারের কৃতিত্ব পান।"
    },
    {
        id: "rc_1047", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History/Technology",
        question: "Passage: Orville and Wilbur Wright were two American brothers, inventors, and aviation pioneers who are generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, near Kitty Hawk, North Carolina. Their background in bicycle repair helped them understand balance and control, which they applied to their flying machines.\n\nQuestion: When did the first successful flight take place?",
        options: ["1896", "1903", "1910", "1900"],
        correctIndex: 1,
        explanation: "The passage specifies the date: 'December 17, 1903'.",
        explanationBengali: "প্যাসেজে তারিখটি নির্দিষ্ট করা হয়েছে: 'December 17, 1903'।"
    },
    {
        id: "rc_1048", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History/Technology",
        question: "Passage: Orville and Wilbur Wright were two American brothers, inventors, and aviation pioneers who are generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, near Kitty Hawk, North Carolina. Their background in bicycle repair helped them understand balance and control, which they applied to their flying machines.\n\nQuestion: How did their experience with bicycles help them?",
        options: ["It made them rich", "It taught them about engines", "It helped them understand balance and control", "It gave them strong legs"],
        correctIndex: 2,
        explanation: "The passage says their background in bicycle repair 'helped them understand balance and control'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে যে সাইকেল মেরামতের অভিজ্ঞতা তাদের 'balance and control' (ভারসাম্য এবং নিয়ন্ত্রণ) বুঝতে সাহায্য করেছিল।"
    },
    {
        id: "rc_1049", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History/Technology",
        question: "Passage: Orville and Wilbur Wright were two American brothers, inventors, and aviation pioneers who are generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, near Kitty Hawk, North Carolina. Their background in bicycle repair helped them understand balance and control, which they applied to their flying machines.\n\nQuestion: Where did the first flight take place?",
        options: ["New York", "Kitty Hawk, North Carolina", "Paris", "London"],
        correctIndex: 1,
        explanation: "The flight took place 'near Kitty Hawk, North Carolina'.",
        explanationBengali: "উড্ডয়নটি 'Kitty Hawk, North Carolina'-এর কাছে হয়েছিল।"
    },
    {
        id: "rc_1050", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "History/Technology",
        question: "Passage: Orville and Wilbur Wright were two American brothers, inventors, and aviation pioneers who are generally credited with inventing, building, and flying the world's first successful motor-operated airplane. They made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, near Kitty Hawk, North Carolina. Their background in bicycle repair helped them understand balance and control, which they applied to their flying machines.\n\nQuestion: What is an 'Aviation Pioneer'?",
        options: ["Someone who repairs bikes", "Someone who helps develop the field of flight", "A pilot in the army", "A history teacher"],
        correctIndex: 1,
        explanation: "An aviation pioneer is someone who is among the first to develop or achieve something in the field of flying.",
        explanationBengali: "'Aviation Pioneer' মানে এমন কেউ যিনি বিমান চালনা বা উড্ডয়ন ক্ষেত্রে নতুন কিছু উদ্ভাবন বা উন্নয়নে পথিকৃৎ।"
    },

    // --- Passage 11: Water Conservation ---
    {
        id: "rc_1051", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Water is essential for all life on Earth, yet less than 1% of the world's fresh water is accessible for human use. The rest is trapped in glaciers or underground. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. Simple actions like fixing leaky faucets, taking shorter showers, and harvesting rainwater can make a significant difference. Conserving water helps preserve our environment and ensures that future generations have access to this vital resource.\n\nQuestion: Approximately how much fresh water is accessible for human use?",
        options: ["10%", "50%", "Less than 1%", "100%"],
        correctIndex: 2,
        explanation: "The passage states: 'less than 1% of the world's fresh water is accessible'.",
        explanationBengali: "প্যাসেজে বলা আছে: 'less than 1%' (১%-এর কম) স্বাদু পানি মানুষের ব্যবহারের জন্য সহজলভ্য।"
    },
    {
        id: "rc_1052", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Environment",
        question: "Passage: Water is essential for all life on Earth, yet less than 1% of the world's fresh water is accessible for human use. The rest is trapped in glaciers or underground. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. Simple actions like fixing leaky faucets, taking shorter showers, and harvesting rainwater can make a significant difference. Conserving water helps preserve our environment and ensures that future generations have access to this vital resource.\n\nQuestion: What is water conservation?",
        options: ["Drinking more water", "Storing water in bottles", "Using water efficiently to reduce waste", "Creating new water sources"],
        correctIndex: 2,
        explanation: "The text defines it as 'the practice of using water efficiently to reduce unnecessary water usage'.",
        explanationBengali: "টেক্সটে এর সংজ্ঞা দেওয়া হয়েছে: 'using water efficiently to reduce unnecessary water usage' (অপচয় রোধে দক্ষতার সাথে পানি ব্যবহার করা)।"
    },
    {
        id: "rc_1053", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Water is essential for all life on Earth, yet less than 1% of the world's fresh water is accessible for human use. The rest is trapped in glaciers or underground. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. Simple actions like fixing leaky faucets, taking shorter showers, and harvesting rainwater can make a significant difference. Conserving water helps preserve our environment and ensures that future generations have access to this vital resource.\n\nQuestion: Which of the following is NOT mentioned as a way to conserve water?",
        options: ["Fixing leaky faucets", "Taking shorter showers", "Harvesting rainwater", "Drinking only soda"],
        correctIndex: 3,
        explanation: "The passage mentions fixing leaks, shorter showers, and harvesting rainwater. It does not mention drinking soda.",
        explanationBengali: "প্যাসেজে লিক মেরামত, ছোট গোসল এবং বৃষ্টির পানি সংগ্রহের কথা বলা আছে, সোডা পানের কথা নেই।"
    },
    {
        id: "rc_1054", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Environment",
        question: "Passage: Water is essential for all life on Earth, yet less than 1% of the world's fresh water is accessible for human use. The rest is trapped in glaciers or underground. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. Simple actions like fixing leaky faucets, taking shorter showers, and harvesting rainwater can make a significant difference. Conserving water helps preserve our environment and ensures that future generations have access to this vital resource.\n\nQuestion: Why is conserving water important for the future?",
        options: ["To make water cheaper", "To ensure future generations have access to it", "To fill the oceans", "To stop it from raining"],
        correctIndex: 1,
        explanation: "The passage says it 'ensures that future generations have access to this vital resource'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে এটি 'ensures that future generations have access to this vital resource' (ভবিষ্যৎ প্রজন্মের জন্য এই সম্পদ নিশ্চিত করে)।"
    },
    {
        id: "rc_1055", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Environment",
        question: "Passage: Water is essential for all life on Earth, yet less than 1% of the world's fresh water is accessible for human use. The rest is trapped in glaciers or underground. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. Simple actions like fixing leaky faucets, taking shorter showers, and harvesting rainwater can make a significant difference. Conserving water helps preserve our environment and ensures that future generations have access to this vital resource.\n\nQuestion: The word 'Vital' means:",
        options: ["Optional", "Dangerous", "Absolutely necessary or important", "Abundant"],
        correctIndex: 2,
        explanation: "Vital means absolutely necessary or essential for life/success.",
        explanationBengali: "'Vital' মানে হলো অপরিহার্য বা অত্যন্ত গুরুত্বপূর্ণ।"
    },

    // --- Passage 12: The Internet ---
    {
        id: "rc_1056", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Technology",
        question: "Passage: The Internet is a global network of computers that allows people to share information and communicate with each other. It was developed in the late 20th century, evolving from a US military project called ARPANET. Today, the Internet impacts almost every aspect of our lives, from banking and shopping to education and entertainment. While it provides vast knowledge, it also presents challenges such as cyberbullying and misinformation.\n\nQuestion: What was the predecessor of the modern Internet?",
        options: ["SKYNET", "ARPANET", "INTRANET", "ETHERNET"],
        correctIndex: 1,
        explanation: "The passage states the Internet evolved from 'a US military project called ARPANET'.",
        explanationBengali: "প্যাসেজে বলা আছে ইন্টারনেট 'ARPANET' নামক মার্কিন সামরিক প্রজেক্ট থেকে বিবর্তিত হয়েছে।"
    },
    {
        id: "rc_1057", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Technology",
        question: "Passage: The Internet is a global network of computers that allows people to share information and communicate with each other. It was developed in the late 20th century, evolving from a US military project called ARPANET. Today, the Internet impacts almost every aspect of our lives, from banking and shopping to education and entertainment. While it provides vast knowledge, it also presents challenges such as cyberbullying and misinformation.\n\nQuestion: Which of the following is a negative challenge of the Internet mentioned?",
        options: ["Online banking", "Misinformation", "Education", "Shopping"],
        correctIndex: 1,
        explanation: "The passage lists 'cyberbullying and misinformation' as challenges.",
        explanationBengali: "প্যাসেজে 'misinformation' (ভুল তথ্য) এবং সাইবার বুলিংকে চ্যালেঞ্জ হিসেবে উল্লেখ করা হয়েছে।"
    },
    {
        id: "rc_1058", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Technology",
        question: "Passage: The Internet is a global network of computers that allows people to share information and communicate with each other. It was developed in the late 20th century, evolving from a US military project called ARPANET. Today, the Internet impacts almost every aspect of our lives, from banking and shopping to education and entertainment. While it provides vast knowledge, it also presents challenges such as cyberbullying and misinformation.\n\nQuestion: What is the primary function of the Internet described in the first sentence?",
        options: ["To play games", "To allow people to share information and communicate", "To control military weapons", "To watch movies"],
        correctIndex: 1,
        explanation: "The first sentence says it 'allows people to share information and communicate'.",
        explanationBengali: "প্রথম বাক্যে বলা হয়েছে এটি 'allows people to share information and communicate' (মানুষকে তথ্য আদান-প্রদান ও যোগাযোগ করতে দেয়)।"
    },
    {
        id: "rc_1059", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Technology",
        question: "Passage: The Internet is a global network of computers that allows people to share information and communicate with each other. It was developed in the late 20th century, evolving from a US military project called ARPANET. Today, the Internet impacts almost every aspect of our lives, from banking and shopping to education and entertainment. While it provides vast knowledge, it also presents challenges such as cyberbullying and misinformation.\n\nQuestion: When was the Internet developed?",
        options: ["18th century", "Early 19th century", "Late 20th century", "21st century"],
        correctIndex: 2,
        explanation: "The text states it was 'developed in the late 20th century'.",
        explanationBengali: "টেক্সটে বলা আছে এটি 'late 20th century' (বিংশ শতাব্দীর শেষের দিকে) তৈরি হয়েছিল।"
    },
    {
        id: "rc_1060", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Technology",
        question: "Passage: The Internet is a global network of computers that allows people to share information and communicate with each other. It was developed in the late 20th century, evolving from a US military project called ARPANET. Today, the Internet impacts almost every aspect of our lives, from banking and shopping to education and entertainment. While it provides vast knowledge, it also presents challenges such as cyberbullying and misinformation.\n\nQuestion: What does 'Misinformation' mean?",
        options: ["Too much information", "False or inaccurate information", "Missing information", "Secret information"],
        correctIndex: 1,
        explanation: "Misinformation refers to false or inaccurate information, often spread unintentionally.",
        explanationBengali: "'Misinformation' মানে হলো ভুল বা মিথ্যা তথ্য।"
    },
    // --- Passage 13: Photosynthesis ---
    {
        id: "rc_1061", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen. This process is crucial for life on Earth because it produces the oxygen we breathe and the food we eat. Chlorophyll, a green pigment found in plants, absorbs the light energy needed for photosynthesis to occur.\n\nQuestion: What is the main purpose of photosynthesis mentioned in the text?",
        options: ["To create water", "To harness energy from sunlight and turn it into chemical energy", "To consume oxygen", "To produce carbon dioxide"],
        correctIndex: 1,
        explanation: "The text defines it as the process to 'harness energy from sunlight and turn it into chemical energy'.",
        explanationBengali: "টেক্সটে বলা হয়েছে এর উদ্দেশ্য হলো সূর্যালোক থেকে শক্তি নিয়ে তা রাসায়নিক শক্তিতে রূপান্তর করা।"
    },
    {
        id: "rc_1062", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen. This process is crucial for life on Earth because it produces the oxygen we breathe and the food we eat. Chlorophyll, a green pigment found in plants, absorbs the light energy needed for photosynthesis to occur.\n\nQuestion: What two things are converted into glucose and oxygen?",
        options: ["Sunlight and soil", "Carbon dioxide and water", "Oxygen and chemical energy", "Sugar and salt"],
        correctIndex: 1,
        explanation: "The passage states: 'carbon dioxide and water are converted into glucose... and oxygen'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে কার্বন ডাই অক্সাইড এবং পানি গ্লুকোজ ও অক্সিজেনে রূপান্তরিত হয়।"
    },
    {
        id: "rc_1063", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Science",
        question: "Passage: Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen. This process is crucial for life on Earth because it produces the oxygen we breathe and the food we eat. Chlorophyll, a green pigment found in plants, absorbs the light energy needed for photosynthesis to occur.\n\nQuestion: What role does Chlorophyll play?",
        options: ["It produces water", "It absorbs light energy", "It releases carbon dioxide", "It eats the food"],
        correctIndex: 1,
        explanation: "The text explains that Chlorophyll 'absorbs the light energy needed'.",
        explanationBengali: "টেক্সটে ব্যাখ্যা করা হয়েছে যে ক্লোরোফিল প্রয়োজনীয় আলোক শক্তি শোষণ করে।"
    },
    {
        id: "rc_1064", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Science",
        question: "Passage: Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen. This process is crucial for life on Earth because it produces the oxygen we breathe and the food we eat. Chlorophyll, a green pigment found in plants, absorbs the light energy needed for photosynthesis to occur.\n\nQuestion: Why is photosynthesis crucial for life on Earth?",
        options: ["It makes plants green", "It cools the planet", "It produces oxygen and food", "It uses up all the water"],
        correctIndex: 2,
        explanation: "The passage says it is crucial because 'it produces the oxygen we breathe and the food we eat'.",
        explanationBengali: "প্যাসেজে বলা হয়েছে এটি গুরুত্বপূর্ণ কারণ এটি আমাদের শ্বাস নেওয়ার অক্সিজেন এবং খাবার তৈরি করে।"
    },
    {
        id: "rc_1065", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Science",
        question: "Passage: Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. Here, carbon dioxide and water are converted into glucose (sugar) and oxygen. This process is crucial for life on Earth because it produces the oxygen we breathe and the food we eat. Chlorophyll, a green pigment found in plants, absorbs the light energy needed for photosynthesis to occur.\n\nQuestion: The word 'Harness' in the passage means:",
        options: ["To release", "To capture and use", "To destroy", "To paint"],
        correctIndex: 1,
        explanation: "To 'harness' energy means to capture it and use it for a specific purpose.",
        explanationBengali: "'Harness' মানে হলো কোনো কিছুকে (এখানে শক্তিকে) কাজে লাগানো বা নিয়ন্ত্রণে আনা।"
    },

    // --- Passage 14: The Great Wall of China ---
    {
        id: "rc_1066", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed to protect against nomadic groups from the Eurasian Steppe. Several walls were built as early as the 7th century BC, but the most famous sections were built by the Ming Dynasty (1368–1644). It is the longest man-made structure in the world, stretching over 21,000 kilometers.\n\nQuestion: What was the primary purpose of the Great Wall?",
        options: ["To mark the equator", "To protect against nomadic groups", "To store grain", "To act as a road"],
        correctIndex: 1,
        explanation: "The text states it was constructed 'to protect against nomadic groups'.",
        explanationBengali: "টেক্সটে বলা হয়েছে এটি যাযাবর বা 'nomadic groups' থেকে রক্ষার জন্য নির্মাণ করা হয়েছিল।"
    },
    {
        id: "rc_1067", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed to protect against nomadic groups from the Eurasian Steppe. Several walls were built as early as the 7th century BC, but the most famous sections were built by the Ming Dynasty (1368–1644). It is the longest man-made structure in the world, stretching over 21,000 kilometers.\n\nQuestion: Who built the most famous sections of the wall?",
        options: ["The Qin Dynasty", "The Mongols", "The Ming Dynasty", "The Europeans"],
        correctIndex: 2,
        explanation: "The passage mentions: 'the most famous sections were built by the Ming Dynasty'.",
        explanationBengali: "প্যাসেজে উল্লেখ করা হয়েছে যে সবচেয়ে বিখ্যাত অংশগুলো 'Ming Dynasty' (মিং রাজবংশ) তৈরি করেছিল।"
    },
    {
        id: "rc_1068", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History",
        question: "Passage: The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed to protect against nomadic groups from the Eurasian Steppe. Several walls were built as early as the 7th century BC, but the most famous sections were built by the Ming Dynasty (1368–1644). It is the longest man-made structure in the world, stretching over 21,000 kilometers.\n\nQuestion: Approximately how long is the Great Wall?",
        options: ["1,000 kilometers", "10,000 kilometers", "Over 21,000 kilometers", "500 kilometers"],
        correctIndex: 2,
        explanation: "The text states it stretches 'over 21,000 kilometers'.",
        explanationBengali: "টেক্সটে বলা আছে এটি 'over 21,000 kilometers' (২১,০০০ কিলোমিটারেরও বেশি) লম্বা।"
    },
    {
        id: "rc_1069", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed to protect against nomadic groups from the Eurasian Steppe. Several walls were built as early as the 7th century BC, but the most famous sections were built by the Ming Dynasty (1368–1644). It is the longest man-made structure in the world, stretching over 21,000 kilometers.\n\nQuestion: When were the earliest walls built?",
        options: ["1368 AD", "21st Century", "7th Century BC", "1st Century AD"],
        correctIndex: 2,
        explanation: "The passage mentions walls were built 'as early as the 7th century BC'.",
        explanationBengali: "প্যাসেজে উল্লেখ আছে দেওয়ালগুলো '7th century BC' (খ্রিস্টপূর্ব সপ্তম শতাব্দী)-এর দিকে তৈরি শুরু হয়েছিল।"
    },
    {
        id: "rc_1070", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "History",
        question: "Passage: The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed to protect against nomadic groups from the Eurasian Steppe. Several walls were built as early as the 7th century BC, but the most famous sections were built by the Ming Dynasty (1368–1644). It is the longest man-made structure in the world, stretching over 21,000 kilometers.\n\nQuestion: What is a 'Fortification'?",
        options: ["A type of farm", "A defensive wall or building", "A marketplace", "A temple"],
        correctIndex: 1,
        explanation: "A fortification is a defensive wall or other reinforcement built to strengthen a place against attack.",
        explanationBengali: "'Fortification' মানে হলো দুর্গ বা প্রতিরক্ষামূলক দেওয়াল।"
    },

    // --- Passage 15: Marie Curie ---
    {
        id: "rc_1071", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Biography",
        question: "Passage: Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry). She discovered two elements: polonium and radium. Her work laid the foundation for modern X-ray technology.\n\nQuestion: Marie Curie was the first woman to achieve what?",
        options: ["Become a doctor", "Fly a plane", "Win a Nobel Prize", "Discover gold"],
        correctIndex: 2,
        explanation: "The text states she was 'the first woman to win a Nobel Prize'.",
        explanationBengali: "টেক্সটে বলা আছে তিনি ছিলেন 'Nobel Prize' জয়ী প্রথম নারী।"
    },
    {
        id: "rc_1072", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Biography",
        question: "Passage: Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry). She discovered two elements: polonium and radium. Her work laid the foundation for modern X-ray technology.\n\nQuestion: Which two elements did Marie Curie discover?",
        options: ["Gold and Silver", "Oxygen and Hydrogen", "Polonium and Radium", "Uranium and Plutonium"],
        correctIndex: 2,
        explanation: "The passage specifies she discovered 'polonium and radium'.",
        explanationBengali: "প্যাসেজে নির্দিষ্ট করে বলা হয়েছে তিনি 'polonium' এবং 'radium' আবিষ্কার করেন।"
    },
    {
        id: "rc_1073", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Biography",
        question: "Passage: Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry). She discovered two elements: polonium and radium. Her work laid the foundation for modern X-ray technology.\n\nQuestion: In which two fields did she win the Nobel Prize?",
        options: ["Physics and Chemistry", "Literature and Peace", "Medicine and Physics", "Chemistry and Biology"],
        correctIndex: 0,
        explanation: "The passage states she won in 'Physics and Chemistry'.",
        explanationBengali: "প্যাসেজে বলা আছে তিনি 'Physics' (পদার্থবিজ্ঞান) এবং 'Chemistry' (রসায়ন)-এ পুরস্কার পান।"
    },
    {
        id: "rc_1074", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Biography",
        question: "Passage: Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry). She discovered two elements: polonium and radium. Her work laid the foundation for modern X-ray technology.\n\nQuestion: Her work laid the foundation for which modern technology?",
        options: ["Internet", "X-ray", "Computers", "Nuclear weapons"],
        correctIndex: 1,
        explanation: "The text concludes: 'Her work laid the foundation for modern X-ray technology'.",
        explanationBengali: "টেক্সটের শেষে বলা আছে তার কাজ 'X-ray' প্রযুক্তির ভিত্তি স্থাপন করেছিল।"
    },
    {
        id: "rc_1075", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Biography",
        question: "Passage: Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields (Physics and Chemistry). She discovered two elements: polonium and radium. Her work laid the foundation for modern X-ray technology.\n\nQuestion: What does 'Pioneering' mean?",
        options: ["Copying others", "Being one of the first to develop something", "Dangerous", "Secret"],
        correctIndex: 1,
        explanation: "Pioneering means involving new ideas or methods; being one of the first to do something.",
        explanationBengali: "'Pioneering' মানে হলো অগ্রগামী বা কোনো কিছুতে পথপ্রদর্শক হওয়া।"
    },

    // --- Passage 16: The Importance of Sleep ---
    {
        id: "rc_1076", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Health",
        question: "Passage: Sleep is a vital biological function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up. Healthy sleep helps the body remain healthy and stave off diseases. Without enough sleep, the brain cannot function properly, impairing your ability to concentrate, think clearly, and process memories. Most adults need between 7 and 9 hours of sleep per night to function at their best.\n\nQuestion: What is the main benefit of sleep mentioned in the first sentence?",
        options: ["It helps you lose weight", "It allows body and mind to recharge", "It makes you taller", "It cures all diseases"],
        correctIndex: 1,
        explanation: "The first sentence says sleep 'allows your body and mind to recharge'.",
        explanationBengali: "প্রথম বাক্যেই বলা আছে ঘুম 'allows your body and mind to recharge' (শরীর ও মনকে সতেজ হতে সাহায্য করে)।"
    },
    {
        id: "rc_1077", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Health",
        question: "Passage: Sleep is a vital biological function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up. Healthy sleep helps the body remain healthy and stave off diseases. Without enough sleep, the brain cannot function properly, impairing your ability to concentrate, think clearly, and process memories. Most adults need between 7 and 9 hours of sleep per night to function at their best.\n\nQuestion: What happens to the brain without enough sleep?",
        options: ["It becomes smarter", "It cannot function properly", "It shuts down completely", "It grows larger"],
        correctIndex: 1,
        explanation: "The text states: 'Without enough sleep, the brain cannot function properly'.",
        explanationBengali: "টেক্সটে বলা আছে: পর্যাপ্ত ঘুম ছাড়া মস্তিষ্ক 'cannot function properly' (ঠিকমতো কাজ করতে পারে না)।"
    },
    {
        id: "rc_1078", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Health",
        question: "Passage: Sleep is a vital biological function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up. Healthy sleep helps the body remain healthy and stave off diseases. Without enough sleep, the brain cannot function properly, impairing your ability to concentrate, think clearly, and process memories. Most adults need between 7 and 9 hours of sleep per night to function at their best.\n\nQuestion: How many hours of sleep do most adults need?",
        options: ["5 to 6 hours", "10 to 12 hours", "7 to 9 hours", "3 to 4 hours"],
        correctIndex: 2,
        explanation: "The passage specifies 'between 7 and 9 hours'.",
        explanationBengali: "প্যাসেজে নির্দিষ্ট করে বলা হয়েছে '7 and 9 hours' (৭ থেকে ৯ ঘণ্টা)।"
    },
    {
        id: "rc_1079", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Health",
        question: "Passage: Sleep is a vital biological function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up. Healthy sleep helps the body remain healthy and stave off diseases. Without enough sleep, the brain cannot function properly, impairing your ability to concentrate, think clearly, and process memories. Most adults need between 7 and 9 hours of sleep per night to function at their best.\n\nQuestion: Which ability is impaired by lack of sleep?",
        options: ["Ability to eat", "Ability to sleep", "Ability to concentrate", "Ability to breathe"],
        correctIndex: 2,
        explanation: "The text mentions it impairs the 'ability to concentrate'.",
        explanationBengali: "টেক্সটে বলা আছে এটি 'ability to concentrate' (মনোযোগ দেওয়ার ক্ষমতা) কমিয়ে দেয়।"
    },
    {
        id: "rc_1080", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Health",
        question: "Passage: Sleep is a vital biological function that allows your body and mind to recharge, leaving you refreshed and alert when you wake up. Healthy sleep helps the body remain healthy and stave off diseases. Without enough sleep, the brain cannot function properly, impairing your ability to concentrate, think clearly, and process memories. Most adults need between 7 and 9 hours of sleep per night to function at their best.\n\nQuestion: What does the phrase 'stave off' mean?",
        options: ["To invite", "To avert or prevent", "To cure", "To create"],
        correctIndex: 1,
        explanation: "To 'stave off' something means to avert, delay, or prevent something bad from affecting you.",
        explanationBengali: "'Stave off' মানে হলো কোনো কিছু (সাধারণত খারাপ কিছু) প্রতিরোধ করা বা দূরে রাখা।"
    },

    // --- Passage 17: Climate Change ---
    {
        id: "rc_1081", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures.\n\nQuestion: What is the main driver of climate change since the 1800s?",
        options: ["Solar flares", "Volcanic eruptions", "Human activities", "Ocean currents"],
        correctIndex: 2,
        explanation: "The passage states: 'human activities have been the main driver of climate change'.",
        explanationBengali: "প্যাসেজে বলা আছে: 'human activities' (মানুষের কর্মকাণ্ড) হলো প্রধান কারণ।"
    },
    {
        id: "rc_1082", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Environment",
        question: "Passage: Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures.\n\nQuestion: Which of the following is cited as a fossil fuel?",
        options: ["Wood", "Coal", "Solar energy", "Water"],
        correctIndex: 1,
        explanation: "The text lists 'coal, oil, and gas' as fossil fuels.",
        explanationBengali: "টেক্সটে 'coal' (কয়লা), তেল এবং গ্যাসকে জীবাশ্ম জ্বালানি হিসেবে উল্লেখ করা হয়েছে।"
    },
    {
        id: "rc_1083", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures.\n\nQuestion: How do greenhouse gases affect the Earth?",
        options: ["They cool the Earth", "They act like a blanket trapping heat", "They clean the air", "They create rain"],
        correctIndex: 1,
        explanation: "The passage explains they 'act like a blanket... trapping the sun's heat'.",
        explanationBengali: "প্যাসেজে ব্যাখ্যা করা হয়েছে যে এগুলো 'act like a blanket' (কম্বলের মতো কাজ করে) এবং তাপ আটকে রাখে।"
    },
    {
        id: "rc_1084", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures.\n\nQuestion: What happens when the sun's heat is trapped?",
        options: ["Temperatures rise", "Temperatures fall", "It snows", "Wind stops"],
        correctIndex: 0,
        explanation: "The text concludes that trapping heat results in 'raising temperatures'.",
        explanationBengali: "টেক্সটের শেষে বলা আছে তাপ আটকে পড়ার ফলে 'raising temperatures' বা তাপমাত্রা বৃদ্ধি পায়।"
    },
    {
        id: "rc_1085", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Environment",
        question: "Passage: Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures.\n\nQuestion: The word 'Emissions' in this context means:",
        options: ["Money spent", "Gases released into the air", "Missions to space", "Rules"],
        correctIndex: 1,
        explanation: "Emissions refer to the production and discharge of something, especially gas or radiation.",
        explanationBengali: "'Emissions' মানে হলো নির্গমন (এখানে বাতাসে গ্যাস ছড়ানো বোঝানো হয়েছে)।"
    },

    // --- Passage 18: The Titanic ---
    {
        id: "rc_1086", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History",
        question: "Passage: The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. At the time, it was the largest ship afloat. The disaster resulted in the deaths of more than 1,500 people, making it one of the deadliest peacetime maritime disasters in history. The ship carried insufficient lifeboats for everyone on board.\n\nQuestion: Where was the Titanic heading?",
        options: ["Southampton", "London", "New York City", "Paris"],
        correctIndex: 2,
        explanation: "The passage states it was on a voyage 'from Southampton to New York City'.",
        explanationBengali: "প্যাসেজে বলা আছে এটি সাউদাম্পটন থেকে 'New York City' (নিউ ইয়র্ক সিটি)-তে যাচ্ছিল।"
    },
    {
        id: "rc_1087", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History",
        question: "Passage: The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. At the time, it was the largest ship afloat. The disaster resulted in the deaths of more than 1,500 people, making it one of the deadliest peacetime maritime disasters in history. The ship carried insufficient lifeboats for everyone on board.\n\nQuestion: What caused the Titanic to sink?",
        options: ["A storm", "A bomb", "Collision with an iceberg", "Engine failure"],
        correctIndex: 2,
        explanation: "The text states it sank 'after colliding with an iceberg'.",
        explanationBengali: "টেক্সটে বলা আছে এটি 'iceberg' (হিমশৈল)-এর সাথে সংঘর্ষের পর ডুবে যায়।"
    },
    {
        id: "rc_1088", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. At the time, it was the largest ship afloat. The disaster resulted in the deaths of more than 1,500 people, making it one of the deadliest peacetime maritime disasters in history. The ship carried insufficient lifeboats for everyone on board.\n\nQuestion: What was a major safety failure mentioned in the passage?",
        options: ["The captain was asleep", "The ship had leaks", "Insufficient lifeboats", "The radio was broken"],
        correctIndex: 2,
        explanation: "The passage notes: 'The ship carried insufficient lifeboats for everyone on board'.",
        explanationBengali: "প্যাসেজে উল্লেখ আছে: 'The ship carried insufficient lifeboats' (জাহাজে পর্যাপ্ত লাইফবোট ছিল না)।"
    },
    {
        id: "rc_1089", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. At the time, it was the largest ship afloat. The disaster resulted in the deaths of more than 1,500 people, making it one of the deadliest peacetime maritime disasters in history. The ship carried insufficient lifeboats for everyone on board.\n\nQuestion: How many people died in the disaster according to the text?",
        options: ["Less than 100", "Exactly 1,000", "More than 1,500", "All passengers"],
        correctIndex: 2,
        explanation: "The text states it resulted in the deaths of 'more than 1,500 people'.",
        explanationBengali: "টেক্সটে বলা আছে 'more than 1,500 people' (দেড় হাজারেরও বেশি মানুষ) মারা গিয়েছিল।"
    },
    {
        id: "rc_1090", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "History",
        question: "Passage: The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton to New York City. At the time, it was the largest ship afloat. The disaster resulted in the deaths of more than 1,500 people, making it one of the deadliest peacetime maritime disasters in history. The ship carried insufficient lifeboats for everyone on board.\n\nQuestion: What does 'Maiden voyage' mean?",
        options: ["The last voyage", "The first voyage", "A dangerous voyage", "A solo voyage"],
        correctIndex: 1,
        explanation: "A 'maiden voyage' is the first journey made by a ship or aircraft.",
        explanationBengali: "'Maiden voyage' মানে হলো কোনো জাহাজ বা বিমানের প্রথম যাত্রা।"
    },

    // --- Passage 19: The Moon Landing ---
    {
        id: "rc_1091", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon. They traveled aboard the Apollo 11 spacecraft. Armstrong was the first to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' They spent about two and a half hours outside the spacecraft, collecting lunar material to bring back to Earth.\n\nQuestion: Who was the first human to step on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correctIndex: 1,
        explanation: "The passage states: 'Armstrong was the first to step onto the lunar surface'.",
        explanationBengali: "প্যাসেজে বলা আছে: 'Armstrong was the first...' (আর্মস্ট্রং প্রথম চাঁদের পৃষ্ঠে পা রাখেন)।"
    },
    {
        id: "rc_1092", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "History",
        question: "Passage: On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon. They traveled aboard the Apollo 11 spacecraft. Armstrong was the first to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' They spent about two and a half hours outside the spacecraft, collecting lunar material to bring back to Earth.\n\nQuestion: What was the name of the spacecraft?",
        options: ["Sputnik 1", "Apollo 11", "Challenger", "Voyager"],
        correctIndex: 1,
        explanation: "They traveled aboard the 'Apollo 11 spacecraft'.",
        explanationBengali: "তারা 'Apollo 11' মহাকাশযানে করে গিয়েছিল।"
    },
    {
        id: "rc_1093", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon. They traveled aboard the Apollo 11 spacecraft. Armstrong was the first to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' They spent about two and a half hours outside the spacecraft, collecting lunar material to bring back to Earth.\n\nQuestion: What did Armstrong say upon stepping on the Moon?",
        options: ["We come in peace", "I can see my house", "That's one small step for man, one giant leap for mankind", "Hello Moon"],
        correctIndex: 2,
        explanation: "The famous quote is: 'That's one small step for man, one giant leap for mankind.'",
        explanationBengali: "বিখ্যাত উক্তিটি হলো: 'That's one small step for man, one giant leap for mankind.'"
    },
    {
        id: "rc_1094", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "History",
        question: "Passage: On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon. They traveled aboard the Apollo 11 spacecraft. Armstrong was the first to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' They spent about two and a half hours outside the spacecraft, collecting lunar material to bring back to Earth.\n\nQuestion: How long did they spend outside the spacecraft?",
        options: ["10 hours", "About two and a half hours", "One day", "15 minutes"],
        correctIndex: 1,
        explanation: "The text says they spent 'about two and a half hours' outside.",
        explanationBengali: "টেক্সটে বলা আছে তারা বাইরে 'about two and a half hours' (প্রায় আড়াই ঘণ্টা) কাটিয়েছিল।"
    },
    {
        id: "rc_1095", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "History",
        question: "Passage: On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon. They traveled aboard the Apollo 11 spacecraft. Armstrong was the first to step onto the lunar surface, famously declaring, 'That's one small step for man, one giant leap for mankind.' They spent about two and a half hours outside the spacecraft, collecting lunar material to bring back to Earth.\n\nQuestion: What does 'Lunar' refer to?",
        options: ["The Sun", "Mars", "The Moon", "Earth"],
        correctIndex: 2,
        explanation: "'Lunar' is an adjective that relates to the Moon.",
        explanationBengali: "'Lunar' শব্দটি চাঁদ বা চন্দ্র সম্পর্কিত।"
    },

    // --- Passage 20: Renewable Energy ---
    {
        id: "rc_1096", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Renewable energy comes from sources that replenish themselves naturally, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and pollute the environment, renewable energy sources are clean and sustainable. Transitioning to renewable energy is considered essential to reducing carbon emissions and combating climate change. Solar panels and wind turbines are common technologies used to harvest this energy.\n\nQuestion: What defines renewable energy sources?",
        options: ["They are man-made", "They replenish themselves naturally", "They are expensive", "They come from underground"],
        correctIndex: 1,
        explanation: "The text defines them as sources that 'replenish themselves naturally'.",
        explanationBengali: "টেক্সটে বলা হয়েছে এগুলো এমন উৎস যা 'replenish themselves naturally' (প্রাকৃতিকভাবে পুনরায় পূর্ণ হয়)।"
    },
    {
        id: "rc_1097", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Renewable energy comes from sources that replenish themselves naturally, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and pollute the environment, renewable energy sources are clean and sustainable. Transitioning to renewable energy is considered essential to reducing carbon emissions and combating climate change. Solar panels and wind turbines are common technologies used to harvest this energy.\n\nQuestion: Which of the following is NOT a renewable energy source?",
        options: ["Wind", "Sunlight", "Fossil fuels", "Tides"],
        correctIndex: 2,
        explanation: "Fossil fuels are contrasted against renewable energy; they are finite.",
        explanationBengali: "জীবাশ্ম জ্বালানি বা 'Fossil fuels' নবায়নযোগ্য নয়; এগুলো ফুরিয়ে যায়।"
    },
    {
        id: "rc_1098", chapter: "Reading Comprehension", type: "comprehension", difficulty: "easy", topic: "Environment",
        question: "Passage: Renewable energy comes from sources that replenish themselves naturally, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and pollute the environment, renewable energy sources are clean and sustainable. Transitioning to renewable energy is considered essential to reducing carbon emissions and combating climate change. Solar panels and wind turbines are common technologies used to harvest this energy.\n\nQuestion: Why are fossil fuels considered bad in the passage?",
        options: ["They are too cheap", "They replenish too fast", "They are finite and pollute the environment", "They are renewable"],
        correctIndex: 2,
        explanation: "The passage states fossil fuels are 'finite and pollute the environment'.",
        explanationBengali: "প্যাসেজে বলা আছে জীবাশ্ম জ্বালানি 'finite' (সীমিত) এবং পরিবেশ দূষিত করে।"
    },
    {
        id: "rc_1099", chapter: "Reading Comprehension", type: "comprehension", difficulty: "moderate", topic: "Environment",
        question: "Passage: Renewable energy comes from sources that replenish themselves naturally, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and pollute the environment, renewable energy sources are clean and sustainable. Transitioning to renewable energy is considered essential to reducing carbon emissions and combating climate change. Solar panels and wind turbines are common technologies used to harvest this energy.\n\nQuestion: What technologies are mentioned for harvesting renewable energy?",
        options: ["Cars and trucks", "Solar panels and wind turbines", "Coal mines", "Oil rigs"],
        correctIndex: 1,
        explanation: "The text mentions 'Solar panels and wind turbines'.",
        explanationBengali: "টেক্সটে 'Solar panels and wind turbines' (সৌর প্যানেল এবং বায়ু কল)-এর কথা উল্লেখ করা হয়েছে।"
    },
    {
        id: "rc_1100", chapter: "Reading Comprehension", type: "comprehension", difficulty: "hard", topic: "Environment",
        question: "Passage: Renewable energy comes from sources that replenish themselves naturally, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and pollute the environment, renewable energy sources are clean and sustainable. Transitioning to renewable energy is considered essential to reducing carbon emissions and combating climate change. Solar panels and wind turbines are common technologies used to harvest this energy.\n\nQuestion: What does 'Finite' mean?",
        options: ["Unlimited", "Clean", "Limited or having an end", "Natural"],
        correctIndex: 2,
        explanation: "Finite means having limits or bounds; it will eventually run out.",
        explanationBengali: "'Finite' মানে হলো সীমিত বা যা শেষ হয়ে যাবে।"
    },
    // --- Passage 1: Education ---
    {
        id: "cloze_1101", chapter: "Cloze Test", type: "grammar", difficulty: "moderate", topic: "Education",
        question: "Passage: Education is the most powerful weapon which you can use to (1) ______ the world. It involves the (2) ______ of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes (3) ______ under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal (4) ______ and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called (5) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 1.",
        options: ["destroy", "change", "ignore", "hide"],
        correctIndex: 1,
        explanation: "The famous quote by Nelson Mandela is 'Education is the most powerful weapon which you can use to change the world.'",
        explanationBengali: "নেলসন ম্যান্ডেলার বিখ্যাত উক্তি অনুযায়ী, শিক্ষা হলো পৃথিবীকে 'change' (পরিবর্তন) করার সবচেয়ে শক্তিশালী হাতিয়ার।"
    },
    {
        id: "cloze_1102", chapter: "Cloze Test", type: "grammar", difficulty: "hard", topic: "Education",
        question: "Passage: Education is the most powerful weapon which you can use to (1) ______ the world. It involves the (2) ______ of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes (3) ______ under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal (4) ______ and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called (5) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 2.",
        options: ["loss", "acquisition", "disposal", "rejection"],
        correctIndex: 1,
        explanation: "'Acquisition' fits best as education involves acquiring or gaining knowledge.",
        explanationBengali: "শিক্ষা বলতে জ্ঞান 'acquisition' (অর্জন) বোঝায়।"
    },
    {
        id: "cloze_1103", chapter: "Cloze Test", type: "grammar", difficulty: "easy", topic: "Education",
        question: "Passage: Education is the most powerful weapon which you can use to (1) ______ the world. It involves the (2) ______ of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes (3) ______ under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal (4) ______ and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called (5) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 3.",
        options: ["part", "place", "time", "shape"],
        correctIndex: 1,
        explanation: "The phrase 'takes place' means to happen or occur.",
        explanationBengali: "'Takes place' একটি phrase যার অর্থ ঘটা বা অনুষ্ঠিত হওয়া।"
    },
    {
        id: "cloze_1104", chapter: "Cloze Test", type: "grammar", difficulty: "moderate", topic: "Education",
        question: "Passage: Education is the most powerful weapon which you can use to (1) ______ the world. It involves the (2) ______ of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes (3) ______ under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal (4) ______ and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called (5) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 4.",
        options: ["clothes", "meetings", "settings", "books"],
        correctIndex: 2,
        explanation: "'Settings' refers to the environment or context (formal or informal) where education happens.",
        explanationBengali: "'Settings' বলতে পরিবেশ বা স্থান বোঝায় (আনুষ্ঠানিক বা অনানুষ্ঠানিক)।"
    },
    {
        id: "cloze_1105", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Education",
        question: "Passage: Education is the most powerful weapon which you can use to (1) ______ the world. It involves the (2) ______ of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes (3) ______ under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal (4) ______ and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called (5) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 5.",
        options: ["biology", "geology", "pedagogy", "theology"],
        correctIndex: 2,
        explanation: "'Pedagogy' is the method and practice of teaching.",
        explanationBengali: "'Pedagogy' মানে হলো শিক্ষাদান পদ্ধতি বা শিক্ষকতা বিজ্ঞান।"
    },

    // --- Passage 2: Health & Exercise ---
    {
        id: "cloze_1106", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Health",
        question: "Passage: Regular exercise is beneficial for health. It protects from diseases like obesity and heart disease. Riding a bicycle is a great way to reduce health risks associated with a (6) ______ lifestyle. Cycling is a low-impact exercise suitable for all ages. It is mainly an (7) ______ activity, working the heart and lungs. It improves overall (8) ______ levels. Cycling helps control weight by raising the metabolic rate. You can change the (9) ______ to suit your needs. It is (10) ______ on bones and joints compared to running.\n\nQuestion: Select the most appropriate option to fill in blank No. 6.",
        options: ["sedentary", "active", "healthy", "nomadic"],
        correctIndex: 0,
        explanation: "A 'sedentary' lifestyle (sitting a lot, little exercise) carries health risks that exercise reduces.",
        explanationBengali: "'Sedentary' lifestyle (বসে থাকা বা অলস জীবনযাপন) স্বাস্থ্যের জন্য ঝুঁকিপূর্ণ।"
    },
    {
        id: "cloze_1107", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Regular exercise is beneficial for health. It protects from diseases like obesity and heart disease. Riding a bicycle is a great way to reduce health risks associated with a (6) ______ lifestyle. Cycling is a low-impact exercise suitable for all ages. It is mainly an (7) ______ activity, working the heart and lungs. It improves overall (8) ______ levels. Cycling helps control weight by raising the metabolic rate. You can change the (9) ______ to suit your needs. It is (10) ______ on bones and joints compared to running.\n\nQuestion: Select the most appropriate option to fill in blank No. 7.",
        options: ["anaerobic", "aerobic", "static", "mental"],
        correctIndex: 1,
        explanation: "Cycling is an 'aerobic' activity because it stimulates the heart and breathing rate to increase oxygen intake.",
        explanationBengali: "সাইক্লিং হলো একটি 'aerobic' ব্যায়াম যা হৃদপিণ্ড এবং ফুসফুসের কাজ বাড়ায়।"
    },
    {
        id: "cloze_1108", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Health",
        question: "Passage: Regular exercise is beneficial for health. It protects from diseases like obesity and heart disease. Riding a bicycle is a great way to reduce health risks associated with a (6) ______ lifestyle. Cycling is a low-impact exercise suitable for all ages. It is mainly an (7) ______ activity, working the heart and lungs. It improves overall (8) ______ levels. Cycling helps control weight by raising the metabolic rate. You can change the (9) ______ to suit your needs. It is (10) ______ on bones and joints compared to running.\n\nQuestion: Select the most appropriate option to fill in blank No. 8.",
        options: ["fitness", "stress", "anger", "hunger"],
        correctIndex: 0,
        explanation: "Exercise improves overall 'fitness' levels.",
        explanationBengali: "ব্যায়াম সামগ্রিক 'fitness' (শারীরিক সক্ষমতা) বাড়ায়।"
    },
    {
        id: "cloze_1109", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Regular exercise is beneficial for health. It protects from diseases like obesity and heart disease. Riding a bicycle is a great way to reduce health risks associated with a (6) ______ lifestyle. Cycling is a low-impact exercise suitable for all ages. It is mainly an (7) ______ activity, working the heart and lungs. It improves overall (8) ______ levels. Cycling helps control weight by raising the metabolic rate. You can change the (9) ______ to suit your needs. It is (10) ______ on bones and joints compared to running.\n\nQuestion: Select the most appropriate option to fill in blank No. 9.",
        options: ["weather", "intensity", "color", "price"],
        correctIndex: 1,
        explanation: "You can change the 'intensity' of the exercise (how hard you ride) to suit your needs.",
        explanationBengali: "আপনি নিজের প্রয়োজন অনুযায়ী শরীরচর্চার 'intensity' (তীব্রতা) পরিবর্তন করতে পারেন।"
    },
    {
        id: "cloze_1110", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Regular exercise is beneficial for health. It protects from diseases like obesity and heart disease. Riding a bicycle is a great way to reduce health risks associated with a (6) ______ lifestyle. Cycling is a low-impact exercise suitable for all ages. It is mainly an (7) ______ activity, working the heart and lungs. It improves overall (8) ______ levels. Cycling helps control weight by raising the metabolic rate. You can change the (9) ______ to suit your needs. It is (10) ______ on bones and joints compared to running.\n\nQuestion: Select the most appropriate option to fill in blank No. 10.",
        options: ["harder", "worse", "gentler", "heavier"],
        correctIndex: 2,
        explanation: "Cycling is 'gentler' on the joints because it is low-impact.",
        explanationBengali: "দৌড়ানোর তুলনায় সাইক্লিং হাড় এবং জয়েন্টের জন্য 'gentler' (সহনশীল/নরম), কারণ এটি low-impact।"
    },

    // --- Passage 3: Pollution ---
    {
        id: "cloze_1111", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Pollution is the introduction of harmful materials into the environment. These harmful materials are called (11) ______. Pollution control means the control of emissions and effluents into air, water or soil. Without pollution control, the waste products from human activities will degrade the (12) ______. To reduce pollution, we must (13) ______ sustainable practices. Governments enact laws to limit pollution. Individuals can also help by reducing waste, reusing items, and (14) ______. We all have a role to play in preserving our planet for future (15) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 11.",
        options: ["products", "nutrients", "pollutants", "vitamins"],
        correctIndex: 2,
        explanation: "Harmful materials that cause pollution are called 'pollutants'.",
        explanationBengali: "পরিবেশ দূষণকারী ক্ষতিকর উপাদানগুলোকে 'pollutants' বলা হয়।"
    },
    {
        id: "cloze_1112", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Pollution is the introduction of harmful materials into the environment. These harmful materials are called (11) ______. Pollution control means the control of emissions and effluents into air, water or soil. Without pollution control, the waste products from human activities will degrade the (12) ______. To reduce pollution, we must (13) ______ sustainable practices. Governments enact laws to limit pollution. Individuals can also help by reducing waste, reusing items, and (14) ______. We all have a role to play in preserving our planet for future (15) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 12.",
        options: ["economy", "environment", "machines", "buildings"],
        correctIndex: 1,
        explanation: "Pollution degrades the 'environment' (air, water, soil).",
        explanationBengali: "দূষণ 'environment' বা পরিবেশের ক্ষতি করে।"
    },
    {
        id: "cloze_1113", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Pollution is the introduction of harmful materials into the environment. These harmful materials are called (11) ______. Pollution control means the control of emissions and effluents into air, water or soil. Without pollution control, the waste products from human activities will degrade the (12) ______. To reduce pollution, we must (13) ______ sustainable practices. Governments enact laws to limit pollution. Individuals can also help by reducing waste, reusing items, and (14) ______. We all have a role to play in preserving our planet for future (15) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 13.",
        options: ["ignore", "adopt", "destroy", "forget"],
        correctIndex: 1,
        explanation: "We must 'adopt' (start using) sustainable practices to help the planet.",
        explanationBengali: "আমাদের টেকসই পদ্ধতিগুলো 'adopt' (গ্রহণ) করতে হবে।"
    },
    {
        id: "cloze_1114", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Pollution is the introduction of harmful materials into the environment. These harmful materials are called (11) ______. Pollution control means the control of emissions and effluents into air, water or soil. Without pollution control, the waste products from human activities will degrade the (12) ______. To reduce pollution, we must (13) ______ sustainable practices. Governments enact laws to limit pollution. Individuals can also help by reducing waste, reusing items, and (14) ______. We all have a role to play in preserving our planet for future (15) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 14.",
        options: ["sleeping", "eating", "recycling", "driving"],
        correctIndex: 2,
        explanation: "'Recycling' is the third part of the 3 Rs (Reduce, Reuse, Recycle).",
        explanationBengali: "বর্জ্য কমানোর অন্যতম উপায় হলো 'recycling' (পুনঃপ্রক্রিয়াজাতকরণ)।"
    },
    {
        id: "cloze_1115", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Pollution is the introduction of harmful materials into the environment. These harmful materials are called (11) ______. Pollution control means the control of emissions and effluents into air, water or soil. Without pollution control, the waste products from human activities will degrade the (12) ______. To reduce pollution, we must (13) ______ sustainable practices. Governments enact laws to limit pollution. Individuals can also help by reducing waste, reusing items, and (14) ______. We all have a role to play in preserving our planet for future (15) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 15.",
        options: ["past", "generations", "days", "insects"],
        correctIndex: 1,
        explanation: "We preserve the planet for future 'generations'.",
        explanationBengali: "আমরা ভবিষ্যৎ 'generations' (প্রজন্মের) জন্য পৃথিবীকে রক্ষা করি।"
    },

    // --- Passage 4: Technology ---
    {
        id: "cloze_1116", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: The internet has revolutionized the way we live. However, it also has its (16) ______, such as cybercrime and misinformation. It is important to use this tool (17) ______ and be aware of potential dangers. By harnessing its potential while mitigating risks, we can ensure that the internet benefits (18) ______. The future belongs to those willing to (19) ______ to new technologies. The (20) ______ of connected technology is limitless.\n\nQuestion: Select the most appropriate option to fill in blank No. 16.",
        options: ["benefits", "drawbacks", "joys", "profits"],
        correctIndex: 1,
        explanation: "The sentence contrasts with 'However', implying negative aspects. 'Drawbacks' fits best.",
        explanationBengali: "'However' দিয়ে বিপরীত অর্থ বোঝানো হয়েছে, তাই 'drawbacks' (অসুবিধা) সঠিক উত্তর।"
    },
    {
        id: "cloze_1117", chapter: "Cloze Test", type: "grammar", difficulty: "moderate", topic: "Technology",
        question: "Passage: The internet has revolutionized the way we live. However, it also has its (16) ______, such as cybercrime and misinformation. It is important to use this tool (17) ______ and be aware of potential dangers. By harnessing its potential while mitigating risks, we can ensure that the internet benefits (18) ______. The future belongs to those willing to (19) ______ to new technologies. The (20) ______ of connected technology is limitless.\n\nQuestion: Select the most appropriate option to fill in blank No. 17.",
        options: ["recklessly", "responsibly", "badly", "secretly"],
        correctIndex: 1,
        explanation: "We should use powerful tools like the internet 'responsibly'.",
        explanationBengali: "ইন্টারনেটের মতো শক্তিশালী মাধ্যম 'responsibly' (দায়িত্বশীলভাবে) ব্যবহার করা উচিত।"
    },
    {
        id: "cloze_1118", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: The internet has revolutionized the way we live. However, it also has its (16) ______, such as cybercrime and misinformation. It is important to use this tool (17) ______ and be aware of potential dangers. By harnessing its potential while mitigating risks, we can ensure that the internet benefits (18) ______. The future belongs to those willing to (19) ______ to new technologies. The (20) ______ of connected technology is limitless.\n\nQuestion: Select the most appropriate option to fill in blank No. 18.",
        options: ["nobody", "machines", "humanity", "robots"],
        correctIndex: 2,
        explanation: "The goal is for technology to benefit 'humanity' or society.",
        explanationBengali: "প্রযুক্তির উদ্দেশ্য হলো 'humanity' (মানবজাতি) বা সমাজের উপকার করা।"
    },
    {
        id: "cloze_1119", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: The internet has revolutionized the way we live. However, it also has its (16) ______, such as cybercrime and misinformation. It is important to use this tool (17) ______ and be aware of potential dangers. By harnessing its potential while mitigating risks, we can ensure that the internet benefits (18) ______. The future belongs to those willing to (19) ______ to new technologies. The (20) ______ of connected technology is limitless.\n\nQuestion: Select the most appropriate option to fill in blank No. 19.",
        options: ["adapt", "fight", "surrender", "ignore"],
        correctIndex: 0,
        explanation: "Success in the future requires us to 'adapt' to changes.",
        explanationBengali: "ভবিষ্যতে সফল হতে হলে আমাদের নতুন প্রযুক্তির সাথে 'adapt' (মানিয়ে নেওয়া) করতে হবে।"
    },
    {
        id: "cloze_1120", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Technology",
        question: "Passage: The internet has revolutionized the way we live. However, it also has its (16) ______, such as cybercrime and misinformation. It is important to use this tool (17) ______ and be aware of potential dangers. By harnessing its potential while mitigating risks, we can ensure that the internet benefits (18) ______. The future belongs to those willing to (19) ______ to new technologies. The (20) ______ of connected technology is limitless.\n\nQuestion: Select the most appropriate option to fill in blank No. 20.",
        options: ["cost", "potential", "weight", "danger"],
        correctIndex: 1,
        explanation: "The context discusses future possibilities, so 'potential' fits best.",
        explanationBengali: "প্রযুক্তির 'potential' (সম্ভাবনা) অসীম।"
    },

    // --- Passage 5: Happiness ---
    {
        id: "cloze_1121", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Psychology",
        question: "Passage: Happiness is a state of mind. Two people can be in the same situation, yet one is happy and the other is not. This is because happiness is a (21) ______. Happiness requires effort and practice, but the rewards are (22) ______. Happiness is not something we have to chase, but something that naturally (23) ______ from within us. To be happy is to be (24) ______ with what one has. In contentment lies the secret to a (25) ______ life.\n\nQuestion: Select the most appropriate option to fill in blank No. 21.",
        options: ["punishment", "choice", "burden", "accident"],
        correctIndex: 1,
        explanation: "The text implies we can decide our outlook, making happiness a 'choice'.",
        explanationBengali: "সুখ একটি 'choice' (পছন্দ বা নির্বাচন), কারণ আমরা পরিস্থিতিকে কীভাবে দেখব তা আমাদের ওপর নির্ভর করে।"
    },
    {
        id: "cloze_1122", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Psychology",
        question: "Passage: Happiness is a state of mind. Two people can be in the same situation, yet one is happy and the other is not. This is because happiness is a (21) ______. Happiness requires effort and practice, but the rewards are (22) ______. Happiness is not something we have to chase, but something that naturally (23) ______ from within us. To be happy is to be (24) ______ with what one has. In contentment lies the secret to a (25) ______ life.\n\nQuestion: Select the most appropriate option to fill in blank No. 22.",
        options: ["immense", "tiny", "painful", "boring"],
        correctIndex: 0,
        explanation: "The rewards of happiness are great or 'immense'.",
        explanationBengali: "সুখের ফলাফল 'immense' (বিশাল/অঢেল)।"
    },
    {
        id: "cloze_1123", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Psychology",
        question: "Passage: Happiness is a state of mind. Two people can be in the same situation, yet one is happy and the other is not. This is because happiness is a (21) ______. Happiness requires effort and practice, but the rewards are (22) ______. Happiness is not something we have to chase, but something that naturally (23) ______ from within us. To be happy is to be (24) ______ with what one has. In contentment lies the secret to a (25) ______ life.\n\nQuestion: Select the most appropriate option to fill in blank No. 23.",
        options: ["escapes", "arises", "runs", "hides"],
        correctIndex: 1,
        explanation: "'Arises' or emanates fits the context of coming from within.",
        explanationBengali: "সুখ আমাদের ভেতর থেকে 'arises' (জেগে ওঠে/উৎপন্ন হয়)।"
    },
    {
        id: "cloze_1124", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Psychology",
        question: "Passage: Happiness is a state of mind. Two people can be in the same situation, yet one is happy and the other is not. This is because happiness is a (21) ______. Happiness requires effort and practice, but the rewards are (22) ______. Happiness is not something we have to chase, but something that naturally (23) ______ from within us. To be happy is to be (24) ______ with what one has. In contentment lies the secret to a (25) ______ life.\n\nQuestion: Select the most appropriate option to fill in blank No. 24.",
        options: ["angry", "greedy", "content", "jealous"],
        correctIndex: 2,
        explanation: "To be happy is to be 'content' (satisfied) with what one has.",
        explanationBengali: "সুখী হওয়ার অর্থ হলো যা আছে তা নিয়েই 'content' (সন্তুষ্ট) থাকা।"
    },
    {
        id: "cloze_1125", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Psychology",
        question: "Passage: Happiness is a state of mind. Two people can be in the same situation, yet one is happy and the other is not. This is because happiness is a (21) ______. Happiness requires effort and practice, but the rewards are (22) ______. Happiness is not something we have to chase, but something that naturally (23) ______ from within us. To be happy is to be (24) ______ with what one has. In contentment lies the secret to a (25) ______ life.\n\nQuestion: Select the most appropriate option to fill in blank No. 25.",
        options: ["miserable", "short", "fulfilling", "dangerous"],
        correctIndex: 2,
        explanation: "A life of contentment is a 'fulfilling' one.",
        explanationBengali: "সন্তুষ্টিই হলো একটি 'fulfilling' (পরিপূর্ণ) জীবনের চাবিকাঠি।"
    },

    // --- Passage 6: Discipline ---
    {
        id: "cloze_1126", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Self-Improvement",
        question: "Passage: Discipline is the bridge between goals and accomplishment. Self-discipline often requires (26) ______ gratification to achieve a greater reward later. It is the key to unlocking our full (27) ______. Discipline will lead us to (28) ______. Discipline acts as a (29) ______ against chaotic habits. Therefore, cultivating discipline is a (30) ______ for a successful life.\n\nQuestion: Select the most appropriate option to fill in blank No. 26.",
        options: ["seeking", "delaying", "finding", "demanding"],
        correctIndex: 1,
        explanation: "Self-discipline involves 'delaying' gratification (waiting for rewards).",
        explanationBengali: "আত্মসংযম মানে হলো তাৎক্ষণিক সুখ বা পুরস্কার 'delaying' (বিলম্বিত) করা।"
    },
    {
        id: "cloze_1127", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Self-Improvement",
        question: "Passage: Discipline is the bridge between goals and accomplishment. Self-discipline often requires (26) ______ gratification to achieve a greater reward later. It is the key to unlocking our full (27) ______. Discipline will lead us to (28) ______. Discipline acts as a (29) ______ against chaotic habits. Therefore, cultivating discipline is a (30) ______ for a successful life.\n\nQuestion: Select the most appropriate option to fill in blank No. 27.",
        options: ["potential", "house", "wallet", "anger"],
        correctIndex: 0,
        explanation: "Discipline helps us realize or unlock our full 'potential'.",
        explanationBengali: "শৃঙ্খলা আমাদের পূর্ণ 'potential' (সম্ভাবনা) বিকাশে সাহায্য করে।"
    },
    {
        id: "cloze_1128", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Self-Improvement",
        question: "Passage: Discipline is the bridge between goals and accomplishment. Self-discipline often requires (26) ______ gratification to achieve a greater reward later. It is the key to unlocking our full (27) ______. Discipline will lead us to (28) ______. Discipline acts as a (29) ______ against chaotic habits. Therefore, cultivating discipline is a (30) ______ for a successful life.\n\nQuestion: Select the most appropriate option to fill in blank No. 28.",
        options: ["failure", "success", "jail", "confusion"],
        correctIndex: 1,
        explanation: "The context implies positive outcomes, so 'success' fits best.",
        explanationBengali: "শৃঙ্খলা আমাদের 'success' (সাফল্য)-এর দিকে নিয়ে যায়।"
    },
    {
        id: "cloze_1129", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Self-Improvement",
        question: "Passage: Discipline is the bridge between goals and accomplishment. Self-discipline often requires (26) ______ gratification to achieve a greater reward later. It is the key to unlocking our full (27) ______. Discipline will lead us to (28) ______. Discipline acts as a (29) ______ against chaotic habits. Therefore, cultivating discipline is a (30) ______ for a successful life.\n\nQuestion: Select the most appropriate option to fill in blank No. 29.",
        options: ["magnet", "door", "shield", "friend"],
        correctIndex: 2,
        explanation: "Discipline protects us like a 'shield' against bad habits.",
        explanationBengali: "শৃঙ্খলা বিশৃঙ্খল অভ্যাসের বিরুদ্ধে একটি 'shield' (ঢাল) হিসেবে কাজ করে।"
    },
    {
        id: "cloze_1130", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Self-Improvement",
        question: "Passage: Discipline is the bridge between goals and accomplishment. Self-discipline often requires (26) ______ gratification to achieve a greater reward later. It is the key to unlocking our full (27) ______. Discipline will lead us to (28) ______. Discipline acts as a (29) ______ against chaotic habits. Therefore, cultivating discipline is a (30) ______ for a successful life.\n\nQuestion: Select the most appropriate option to fill in blank No. 30.",
        options: ["luxury", "hobby", "necessity", "joke"],
        correctIndex: 2,
        explanation: "The passage concludes that discipline is essential, or a 'necessity'.",
        explanationBengali: "সফল জীবনের জন্য শৃঙ্খলা একটি 'necessity' (প্রয়োজনীয়তা/আবশ্যিক বিষয়)।"
    },
    // --- Passage 7: Friendship ---
    {
        id: "cloze_1131", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Relationships",
        question: "Passage: True friendship is a (31) ______ gift. A real friend is someone who stands by you in (32) ______ times. They listen to your problems without (33) ______. Friendship is built on trust and mutual (34) ______. Having a strong support system can improve your mental (35) ______ significantly.\n\nQuestion: Select the most appropriate option to fill in blank No. 31.",
        options: ["useless", "precious", "cheap", "boring"],
        correctIndex: 1,
        explanation: "Friendship is valuable, so 'precious' is the correct adjective.",
        explanationBengali: "বন্ধুত্ব মূল্যবান, তাই 'precious' (মহামূল্যবান) শব্দটি সঠিক।"
    },
    {
        id: "cloze_1132", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Relationships",
        question: "Passage: True friendship is a (31) ______ gift. A real friend is someone who stands by you in (32) ______ times. They listen to your problems without (33) ______. Friendship is built on trust and mutual (34) ______. Having a strong support system can improve your mental (35) ______ significantly.\n\nQuestion: Select the most appropriate option to fill in blank No. 32.",
        options: ["fun", "difficult", "bright", "sunny"],
        correctIndex: 1,
        explanation: "True friends stand by you during hard or 'difficult' times.",
        explanationBengali: "প্রকৃত বন্ধুরা 'difficult' (কঠিন) সময়ে পাশে থাকে।"
    },
    {
        id: "cloze_1133", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Relationships",
        question: "Passage: True friendship is a (31) ______ gift. A real friend is someone who stands by you in (32) ______ times. They listen to your problems without (33) ______. Friendship is built on trust and mutual (34) ______. Having a strong support system can improve your mental (35) ______ significantly.\n\nQuestion: Select the most appropriate option to fill in blank No. 33.",
        options: ["judging", "smiling", "helping", "sleeping"],
        correctIndex: 0,
        explanation: "A good friend listens without 'judging' or criticizing.",
        explanationBengali: "ভালো বন্ধু 'judging' (বিচার বা সমালোচনা) না করেই সমস্যার কথা শোনে।"
    },
    {
        id: "cloze_1134", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Relationships",
        question: "Passage: True friendship is a (31) ______ gift. A real friend is someone who stands by you in (32) ______ times. They listen to your problems without (33) ______. Friendship is built on trust and mutual (34) ______. Having a strong support system can improve your mental (35) ______ significantly.\n\nQuestion: Select the most appropriate option to fill in blank No. 34.",
        options: ["money", "fear", "respect", "doubt"],
        correctIndex: 2,
        explanation: "Friendship relies on trust and 'respect' for each other.",
        explanationBengali: "বন্ধুত্ব বিশ্বাস এবং পারস্পরিক 'respect' (শ্রদ্ধা)-র ওপর গড়ে ওঠে।"
    },
    {
        id: "cloze_1135", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Relationships",
        question: "Passage: True friendship is a (31) ______ gift. A real friend is someone who stands by you in (32) ______ times. They listen to your problems without (33) ______. Friendship is built on trust and mutual (34) ______. Having a strong support system can improve your mental (35) ______ significantly.\n\nQuestion: Select the most appropriate option to fill in blank No. 35.",
        options: ["health", "wealth", "height", "speed"],
        correctIndex: 0,
        explanation: "Social support is linked to better mental 'health'.",
        explanationBengali: "ভালো বন্ধু বা সাপোর্ট সিস্টেম মানসিক 'health' (স্বাস্থ্য) ভালো রাখতে সাহায্য করে।"
    },

    // --- Passage 8: Global Warming ---
    {
        id: "cloze_1136", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Global warming is a serious issue affecting our (36) ______. It is caused by the increase of greenhouse gases in the (37) ______. Melting ice caps are leading to a rise in sea (38) ______. We must take immediate action to (39) ______ our carbon footprint. Using renewable energy sources is a step in the right (40) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 36.",
        options: ["pocket", "planet", "room", "school"],
        correctIndex: 1,
        explanation: "Global warming affects the entire 'planet'.",
        explanationBengali: "গ্লোবাল ওয়ার্মিং আমাদের 'planet' (গ্রহ/পৃথিবী)-কে প্রভাবিত করছে।"
    },
    {
        id: "cloze_1137", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Global warming is a serious issue affecting our (36) ______. It is caused by the increase of greenhouse gases in the (37) ______. Melting ice caps are leading to a rise in sea (38) ______. We must take immediate action to (39) ______ our carbon footprint. Using renewable energy sources is a step in the right (40) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 37.",
        options: ["water", "soil", "atmosphere", "basket"],
        correctIndex: 2,
        explanation: "Greenhouse gases accumulate in the 'atmosphere'.",
        explanationBengali: "গ্রিনহাউস গ্যাসগুলো 'atmosphere' (বায়ুমণ্ডল)-এ জমা হয়।"
    },
    {
        id: "cloze_1138", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Global warming is a serious issue affecting our (36) ______. It is caused by the increase of greenhouse gases in the (37) ______. Melting ice caps are leading to a rise in sea (38) ______. We must take immediate action to (39) ______ our carbon footprint. Using renewable energy sources is a step in the right (40) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 38.",
        options: ["levels", "waves", "sand", "fish"],
        correctIndex: 0,
        explanation: "Melting ice causes a rise in sea 'levels'.",
        explanationBengali: "বরফ গলার ফলে সমুদ্রের 'levels' (উচ্চতা/স্তর) বেড়ে যায়।"
    },
    {
        id: "cloze_1139", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Global warming is a serious issue affecting our (36) ______. It is caused by the increase of greenhouse gases in the (37) ______. Melting ice caps are leading to a rise in sea (38) ______. We must take immediate action to (39) ______ our carbon footprint. Using renewable energy sources is a step in the right (40) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 39.",
        options: ["increase", "reduce", "buy", "eat"],
        correctIndex: 1,
        explanation: "We need to 'reduce' (lower) our carbon footprint to help the environment.",
        explanationBengali: "পরিবেশ বাঁচাতে আমাদের কার্বন ফুটপ্রিন্ট 'reduce' (কমানো) করতে হবে।"
    },
    {
        id: "cloze_1140", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Global warming is a serious issue affecting our (36) ______. It is caused by the increase of greenhouse gases in the (37) ______. Melting ice caps are leading to a rise in sea (38) ______. We must take immediate action to (39) ______ our carbon footprint. Using renewable energy sources is a step in the right (40) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 40.",
        options: ["place", "time", "corner", "direction"],
        correctIndex: 3,
        explanation: "Doing something positive is a step in the right 'direction'.",
        explanationBengali: "'Step in the right direction' একটি phrase যার অর্থ সঠিক পথে পদক্ষেপ নেওয়া।"
    },

    // --- Passage 9: Reading ---
    {
        id: "cloze_1141", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading books opens up a world of (41) ______. It allows us to travel to different places without leaving our (42) ______. Books can be our best friends and (43) ______. They teach us valuable lessons and (44) ______ our vocabulary. Developing a reading habit is one of the best (45) ______ one can cultivate.\n\nQuestion: Select the most appropriate option to fill in blank No. 41.",
        options: ["darkness", "imagination", "silence", "pain"],
        correctIndex: 1,
        explanation: "Books stimulate our 'imagination'.",
        explanationBengali: "বই আমাদের 'imagination' (কল্পনাশক্তি)-র জগত খুলে দেয়।"
    },
    {
        id: "cloze_1142", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading books opens up a world of (41) ______. It allows us to travel to different places without leaving our (42) ______. Books can be our best friends and (43) ______. They teach us valuable lessons and (44) ______ our vocabulary. Developing a reading habit is one of the best (45) ______ one can cultivate.\n\nQuestion: Select the most appropriate option to fill in blank No. 42.",
        options: ["jobs", "shoes", "homes", "planets"],
        correctIndex: 2,
        explanation: "Reading allows mental travel without leaving our 'homes'.",
        explanationBengali: "বই পড়লে আমরা ঘরে বসেই ('homes') অন্য জায়গায় ভ্রমণ করতে পারি (কল্পনায়)।"
    },
    {
        id: "cloze_1143", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Education",
        question: "Passage: Reading books opens up a world of (41) ______. It allows us to travel to different places without leaving our (42) ______. Books can be our best friends and (43) ______. They teach us valuable lessons and (44) ______ our vocabulary. Developing a reading habit is one of the best (45) ______ one can cultivate.\n\nQuestion: Select the most appropriate option to fill in blank No. 43.",
        options: ["enemies", "toys", "obstacles", "guides"],
        correctIndex: 3,
        explanation: "Books act as 'guides' in life.",
        explanationBengali: "বই আমাদের বন্ধু এবং 'guides' (পথপ্রদর্শক) হতে পারে।"
    },
    {
        id: "cloze_1144", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading books opens up a world of (41) ______. It allows us to travel to different places without leaving our (42) ______. Books can be our best friends and (43) ______. They teach us valuable lessons and (44) ______ our vocabulary. Developing a reading habit is one of the best (45) ______ one can cultivate.\n\nQuestion: Select the most appropriate option to fill in blank No. 44.",
        options: ["lose", "improve", "hide", "destroy"],
        correctIndex: 1,
        explanation: "Reading helps 'improve' or expand vocabulary.",
        explanationBengali: "বই পড়া আমাদের শব্দভাণ্ডার 'improve' (উন্নত) করে।"
    },
    {
        id: "cloze_1145", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Reading books opens up a world of (41) ______. It allows us to travel to different places without leaving our (42) ______. Books can be our best friends and (43) ______. They teach us valuable lessons and (44) ______ our vocabulary. Developing a reading habit is one of the best (45) ______ one can cultivate.\n\nQuestion: Select the most appropriate option to fill in blank No. 45.",
        options: ["fears", "hobbies", "chores", "sins"],
        correctIndex: 1,
        explanation: "Reading is a positive 'hobby'.",
        explanationBengali: "বই পড়া একটি চমৎকার 'hobby' (শখ)।"
    },

    // --- Passage 10: Success ---
    {
        id: "cloze_1146", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Failure is often a stepping stone to (46) ______. Many successful people have faced numerous (47) ______ before achieving their goals. It is important not to give (48) ______ when things get tough. Instead, we should learn from our mistakes and (49) ______ forward. Persistence is the key to (50) ______ any obstacle.\n\nQuestion: Select the most appropriate option to fill in blank No. 46.",
        options: ["ruin", "success", "sleep", "anger"],
        correctIndex: 1,
        explanation: "Failure leads to 'success' if we learn from it.",
        explanationBengali: "ব্যর্থতা হলো 'success' (সাফল্য)-এর সিঁড়ি।"
    },
    {
        id: "cloze_1147", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Failure is often a stepping stone to (46) ______. Many successful people have faced numerous (47) ______ before achieving their goals. It is important not to give (48) ______ when things get tough. Instead, we should learn from our mistakes and (49) ______ forward. Persistence is the key to (50) ______ any obstacle.\n\nQuestion: Select the most appropriate option to fill in blank No. 47.",
        options: ["meals", "challenges", "gifts", "prizes"],
        correctIndex: 1,
        explanation: "Successful people face 'challenges' or failures.",
        explanationBengali: "সফল মানুষদের অনেক 'challenges' (চ্যালেঞ্জ)-এর মুখোমুখি হতে হয়।"
    },
    {
        id: "cloze_1148", chapter: "Cloze Test", type: "grammar", difficulty: "easy", topic: "Success",
        question: "Passage: Failure is often a stepping stone to (46) ______. Many successful people have faced numerous (47) ______ before achieving their goals. It is important not to give (48) ______ when things get tough. Instead, we should learn from our mistakes and (49) ______ forward. Persistence is the key to (50) ______ any obstacle.\n\nQuestion: Select the most appropriate option to fill in blank No. 48.",
        options: ["in", "out", "up", "away"],
        correctIndex: 2,
        explanation: "'Give up' means to quit.",
        explanationBengali: "'Give up' (হাল ছেড়ে দেওয়া) করা উচিত নয়।"
    },
    {
        id: "cloze_1149", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Success",
        question: "Passage: Failure is often a stepping stone to (46) ______. Many successful people have faced numerous (47) ______ before achieving their goals. It is important not to give (48) ______ when things get tough. Instead, we should learn from our mistakes and (49) ______ forward. Persistence is the key to (50) ______ any obstacle.\n\nQuestion: Select the most appropriate option to fill in blank No. 49.",
        options: ["look", "move", "hide", "stop"],
        correctIndex: 1,
        explanation: "We should 'move' forward after mistakes.",
        explanationBengali: "ভুল থেকে শিক্ষা নিয়ে আমাদের সামনে 'move' (এগিয়ে) যাওয়া উচিত।"
    },
    {
        id: "cloze_1150", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Failure is often a stepping stone to (46) ______. Many successful people have faced numerous (47) ______ before achieving their goals. It is important not to give (48) ______ when things get tough. Instead, we should learn from our mistakes and (49) ______ forward. Persistence is the key to (50) ______ any obstacle.\n\nQuestion: Select the most appropriate option to fill in blank No. 50.",
        options: ["creating", "watching", "overcoming", "buying"],
        correctIndex: 2,
        explanation: "Persistence helps in 'overcoming' obstacles.",
        explanationBengali: "অধ্যবসায় যেকোনো বাধা 'overcoming' (জয় করতে) সাহায্য করে।"
    },

    // --- Passage 11: Travel ---
    {
        id: "cloze_1151", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Culture",
        question: "Passage: Travelling exposes us to new (51) ______ and traditions. It helps break down stereotypes and fosters (52) ______. When we visit a new place, we should try the local (53) ______. Meeting new people broadens our (54) ______. Ultimately, travel makes us more (55) ______ individuals.\n\nQuestion: Select the most appropriate option to fill in blank No. 51.",
        options: ["toys", "cultures", "rooms", "games"],
        correctIndex: 1,
        explanation: "Travel exposes us to new 'cultures'.",
        explanationBengali: "ভ্রমণ আমাদের নতুন 'cultures' (সংস্কৃতি)-র সাথে পরিচয় করিয়ে দেয়।"
    },
    {
        id: "cloze_1152", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Culture",
        question: "Passage: Travelling exposes us to new (51) ______ and traditions. It helps break down stereotypes and fosters (52) ______. When we visit a new place, we should try the local (53) ______. Meeting new people broadens our (54) ______. Ultimately, travel makes us more (55) ______ individuals.\n\nQuestion: Select the most appropriate option to fill in blank No. 52.",
        options: ["hatred", "war", "understanding", "silence"],
        correctIndex: 2,
        explanation: "Travel fosters 'understanding' between people.",
        explanationBengali: "ভ্রমণ মানুষের মধ্যে 'understanding' (বোঝাপড়া) বাড়ায়।"
    },
    {
        id: "cloze_1153", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Culture",
        question: "Passage: Travelling exposes us to new (51) ______ and traditions. It helps break down stereotypes and fosters (52) ______. When we visit a new place, we should try the local (53) ______. Meeting new people broadens our (54) ______. Ultimately, travel makes us more (55) ______ individuals.\n\nQuestion: Select the most appropriate option to fill in blank No. 53.",
        options: ["water", "air", "plastic", "cuisine"],
        correctIndex: 3,
        explanation: "We should try the local 'cuisine' (food).",
        explanationBengali: "নতুন জায়গায় গেলে সেখানকার স্থানীয় 'cuisine' (খাবার) চেখে দেখা উচিত।"
    },
    {
        id: "cloze_1154", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Culture",
        question: "Passage: Travelling exposes us to new (51) ______ and traditions. It helps break down stereotypes and fosters (52) ______. When we visit a new place, we should try the local (53) ______. Meeting new people broadens our (54) ______. Ultimately, travel makes us more (55) ______ individuals.\n\nQuestion: Select the most appropriate option to fill in blank No. 54.",
        options: ["horizons", "height", "weight", "hair"],
        correctIndex: 0,
        explanation: "Broadening one's 'horizons' means expanding one's range of interests and knowledge.",
        explanationBengali: "নতুন মানুষের সাথে মেশা আমাদের 'horizons' (চিন্তার জগত) প্রসারিত করে।"
    },
    {
        id: "cloze_1155", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Culture",
        question: "Passage: Travelling exposes us to new (51) ______ and traditions. It helps break down stereotypes and fosters (52) ______. When we visit a new place, we should try the local (53) ______. Meeting new people broadens our (54) ______. Ultimately, travel makes us more (55) ______ individuals.\n\nQuestion: Select the most appropriate option to fill in blank No. 55.",
        options: ["narrow", "open-minded", "angry", "rich"],
        correctIndex: 1,
        explanation: "Travel makes people more 'open-minded' and accepting.",
        explanationBengali: "ভ্রমণ আমাদের আরও 'open-minded' (উদারমনা) করে তোলে।"
    },

    // --- Passage 12: Healthy Eating ---
    {
        id: "cloze_1156", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: A balanced diet is essential for a healthy (56) ______. We should eat plenty of fruits and (57) ______. It is important to avoid (58) ______ food which is high in sugar and fat. Drinking enough water keeps us (59) ______. Good nutrition gives us the energy to (60) ______ our daily tasks.\n\nQuestion: Select the most appropriate option to fill in blank No. 56.",
        options: ["car", "body", "wallet", "phone"],
        correctIndex: 1,
        explanation: "A balanced diet helps maintain a healthy 'body'.",
        explanationBengali: "সুষম আহার সুস্থ 'body' (শরীর)-এর জন্য অপরিহার্য।"
    },
    {
        id: "cloze_1157", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Health",
        question: "Passage: A balanced diet is essential for a healthy (56) ______. We should eat plenty of fruits and (57) ______. It is important to avoid (58) ______ food which is high in sugar and fat. Drinking enough water keeps us (59) ______. Good nutrition gives us the energy to (60) ______ our daily tasks.\n\nQuestion: Select the most appropriate option to fill in blank No. 57.",
        options: ["stones", "plastic", "vegetables", "toys"],
        correctIndex: 2,
        explanation: "Fruits and 'vegetables' are part of a healthy diet.",
        explanationBengali: "আমাদের প্রচুর ফল এবং 'vegetables' (শাকসবজি) খাওয়া উচিত।"
    },
    {
        id: "cloze_1158", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: A balanced diet is essential for a healthy (56) ______. We should eat plenty of fruits and (57) ______. It is important to avoid (58) ______ food which is high in sugar and fat. Drinking enough water keeps us (59) ______. Good nutrition gives us the energy to (60) ______ our daily tasks.\n\nQuestion: Select the most appropriate option to fill in blank No. 58.",
        options: ["junk", "fresh", "organic", "raw"],
        correctIndex: 0,
        explanation: "We should avoid 'junk' food because it is unhealthy.",
        explanationBengali: "আমাদের 'junk' (অস্বাস্থ্যকর) খাবার এড়িয়ে চলা উচিত।"
    },
    {
        id: "cloze_1159", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: A balanced diet is essential for a healthy (56) ______. We should eat plenty of fruits and (57) ______. It is important to avoid (58) ______ food which is high in sugar and fat. Drinking enough water keeps us (59) ______. Good nutrition gives us the energy to (60) ______ our daily tasks.\n\nQuestion: Select the most appropriate option to fill in blank No. 59.",
        options: ["hydrated", "dry", "angry", "sleepy"],
        correctIndex: 0,
        explanation: "Water keeps the body 'hydrated'.",
        explanationBengali: "পানি পান করলে শরীর 'hydrated' (আর্দ্র/সতেজ) থাকে।"
    },
    {
        id: "cloze_1160", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: A balanced diet is essential for a healthy (56) ______. We should eat plenty of fruits and (57) ______. It is important to avoid (58) ______ food which is high in sugar and fat. Drinking enough water keeps us (59) ______. Good nutrition gives us the energy to (60) ______ our daily tasks.\n\nQuestion: Select the most appropriate option to fill in blank No. 60.",
        options: ["ignore", "perform", "hide", "watch"],
        correctIndex: 1,
        explanation: "Energy is needed to 'perform' daily tasks.",
        explanationBengali: "সঠিক পুষ্টি আমাদের দৈনন্দিন কাজ 'perform' (সম্পাদন) করার শক্তি যোগায়।"
    },
    // --- Passage 13: Trees ---
    {
        id: "cloze_1161", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Trees are vital for our survival. They provide us with (61) ______ like oxygen. They absorb harmful (62) ______ dioxide from the air. Trees also prevent soil (63) ______. Many animals depend on trees for (64) ______ and food. We must stop deforestation and start (65) ______ more trees.\n\nQuestion: Select the most appropriate option to fill in blank No. 61.",
        options: ["money", "essentials", "plastic", "noise"],
        correctIndex: 1,
        explanation: "Oxygen is an 'essential' need for life.",
        explanationBengali: "অক্সিজেন জীবনের জন্য একটি 'essential' (অপরিহার্য) উপাদান।"
    },
    {
        id: "cloze_1162", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Trees are vital for our survival. They provide us with (61) ______ like oxygen. They absorb harmful (62) ______ dioxide from the air. Trees also prevent soil (63) ______. Many animals depend on trees for (64) ______ and food. We must stop deforestation and start (65) ______ more trees.\n\nQuestion: Select the most appropriate option to fill in blank No. 62.",
        options: ["sulfur", "carbon", "nitrogen", "helium"],
        correctIndex: 1,
        explanation: "Trees absorb 'carbon' dioxide.",
        explanationBengali: "গাছপালা বাতাস থেকে ক্ষতিকর 'carbon' ডাই অক্সাইড শোষণ করে।"
    },
    {
        id: "cloze_1163", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Trees are vital for our survival. They provide us with (61) ______ like oxygen. They absorb harmful (62) ______ dioxide from the air. Trees also prevent soil (63) ______. Many animals depend on trees for (64) ______ and food. We must stop deforestation and start (65) ______ more trees.\n\nQuestion: Select the most appropriate option to fill in blank No. 63.",
        options: ["production", "erosion", "growth", "color"],
        correctIndex: 1,
        explanation: "Tree roots hold soil together, preventing soil 'erosion'.",
        explanationBengali: "গাছের শিকড় মাটি ধরে রাখে, ফলে ভূমিক্ষয় বা soil 'erosion' রোধ হয়।"
    },
    {
        id: "cloze_1164", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Trees are vital for our survival. They provide us with (61) ______ like oxygen. They absorb harmful (62) ______ dioxide from the air. Trees also prevent soil (63) ______. Many animals depend on trees for (64) ______ and food. We must stop deforestation and start (65) ______ more trees.\n\nQuestion: Select the most appropriate option to fill in blank No. 64.",
        options: ["clothes", "education", "shelter", "money"],
        correctIndex: 2,
        explanation: "Trees provide 'shelter' (homes) for many animals.",
        explanationBengali: "অনেক প্রাণী বাসস্থান বা 'shelter'-এর জন্য গাছের ওপর নির্ভরশীল।"
    },
    {
        id: "cloze_1165", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Trees are vital for our survival. They provide us with (61) ______ like oxygen. They absorb harmful (62) ______ dioxide from the air. Trees also prevent soil (63) ______. Many animals depend on trees for (64) ______ and food. We must stop deforestation and start (65) ______ more trees.\n\nQuestion: Select the most appropriate option to fill in blank No. 65.",
        options: ["cutting", "planting", "selling", "burning"],
        correctIndex: 1,
        explanation: "To combat deforestation, we must start 'planting' trees.",
        explanationBengali: "বন উজাড় রোধ করতে আমাদের আরও গাছ 'planting' (রোপণ) করা উচিত।"
    },

    // --- Passage 14: Smartphones ---
    {
        id: "cloze_1166", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: Smartphones have become an integral part of our lives. They allow us to stay (66) ______ with friends and family. We can access vast amounts of (67) ______ with a single tap. However, excessive use can lead to (68) ______ and eye strain. It is important to find a (69) ______ between digital and real life. We should not let phones (70) ______ our daily interactions.\n\nQuestion: Select the most appropriate option to fill in blank No. 66.",
        options: ["angry", "connected", "lost", "hidden"],
        correctIndex: 1,
        explanation: "Smartphones keep us 'connected' with others.",
        explanationBengali: "স্মার্টফোন আমাদের বন্ধু ও পরিবারের সাথে 'connected' (যুক্ত) থাকতে সাহায্য করে।"
    },
    {
        id: "cloze_1167", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: Smartphones have become an integral part of our lives. They allow us to stay (66) ______ with friends and family. We can access vast amounts of (67) ______ with a single tap. However, excessive use can lead to (68) ______ and eye strain. It is important to find a (69) ______ between digital and real life. We should not let phones (70) ______ our daily interactions.\n\nQuestion: Select the most appropriate option to fill in blank No. 67.",
        options: ["water", "food", "information", "air"],
        correctIndex: 2,
        explanation: "The internet on phones provides access to 'information'.",
        explanationBengali: "এক ক্লিকেই আমরা প্রচুর 'information' (তথ্য) পেতে পারি।"
    },
    {
        id: "cloze_1168", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: Smartphones have become an integral part of our lives. They allow us to stay (66) ______ with friends and family. We can access vast amounts of (67) ______ with a single tap. However, excessive use can lead to (68) ______ and eye strain. It is important to find a (69) ______ between digital and real life. We should not let phones (70) ______ our daily interactions.\n\nQuestion: Select the most appropriate option to fill in blank No. 68.",
        options: ["addiction", "happiness", "fitness", "wealth"],
        correctIndex: 0,
        explanation: "Too much phone use leads to 'addiction'.",
        explanationBengali: "অতিরিক্ত ব্যবহারের ফলে 'addiction' (আসক্তি) এবং চোখের সমস্যা হতে পারে।"
    },
    {
        id: "cloze_1169", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Technology",
        question: "Passage: Smartphones have become an integral part of our lives. They allow us to stay (66) ______ with friends and family. We can access vast amounts of (67) ______ with a single tap. However, excessive use can lead to (68) ______ and eye strain. It is important to find a (69) ______ between digital and real life. We should not let phones (70) ______ our daily interactions.\n\nQuestion: Select the most appropriate option to fill in blank No. 69.",
        options: ["fight", "balance", "wall", "gap"],
        correctIndex: 1,
        explanation: "We need a 'balance' between online and offline life.",
        explanationBengali: "ডিজিটাল এবং বাস্তব জীবনের মধ্যে একটি 'balance' (ভারসাম্য) বজায় রাখা জরুরি।"
    },
    {
        id: "cloze_1170", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Technology",
        question: "Passage: Smartphones have become an integral part of our lives. They allow us to stay (66) ______ with friends and family. We can access vast amounts of (67) ______ with a single tap. However, excessive use can lead to (68) ______ and eye strain. It is important to find a (69) ______ between digital and real life. We should not let phones (70) ______ our daily interactions.\n\nQuestion: Select the most appropriate option to fill in blank No. 70.",
        options: ["improve", "replace", "create", "support"],
        correctIndex: 1,
        explanation: "Phones should not 'replace' face-to-face interactions.",
        explanationBengali: "ফোনের কারণে যেন আমাদের দৈনন্দিন মেলামেশা 'replace' (প্রতিস্থাপিত/বন্ধ) না হয়ে যায়।"
    },

    // --- Passage 15: Hard Work vs Luck ---
    {
        id: "cloze_1171", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Success",
        question: "Passage: Many people believe that success is a matter of luck. However, true success is usually the result of (71) ______ work. While luck may provide an (72) ______, it is effort that sustains it. Those who rely solely on luck often face (73) ______. Hard work builds character and (74) ______. Therefore, we should focus on our efforts rather than waiting for a (75) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 71.",
        options: ["hard", "easy", "lazy", "quick"],
        correctIndex: 0,
        explanation: "The phrase is 'hard work'.",
        explanationBengali: "প্রকৃত সাফল্য সাধারণত 'hard' (কঠোর) পরিশ্রমের ফল।"
    },
    {
        id: "cloze_1172", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Many people believe that success is a matter of luck. However, true success is usually the result of (71) ______ work. While luck may provide an (72) ______, it is effort that sustains it. Those who rely solely on luck often face (73) ______. Hard work builds character and (74) ______. Therefore, we should focus on our efforts rather than waiting for a (75) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 72.",
        options: ["obstacle", "opportunity", "excuse", "enemy"],
        correctIndex: 1,
        explanation: "Luck can give you a chance or 'opportunity'.",
        explanationBengali: "ভাগ্য হয়তো একটি 'opportunity' (সুযোগ) এনে দিতে পারে, কিন্তু তা ধরে রাখতে পরিশ্রম লাগে।"
    },
    {
        id: "cloze_1173", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Many people believe that success is a matter of luck. However, true success is usually the result of (71) ______ work. While luck may provide an (72) ______, it is effort that sustains it. Those who rely solely on luck often face (73) ______. Hard work builds character and (74) ______. Therefore, we should focus on our efforts rather than waiting for a (75) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 73.",
        options: ["victory", "fame", "disappointment", "wealth"],
        correctIndex: 2,
        explanation: "Relying only on luck often leads to failure or 'disappointment'.",
        explanationBengali: "শুধুমাত্র ভাগ্যের ওপর নির্ভর করলে প্রায়ই 'disappointment' (হতাশা) জুটতে পারে।"
    },
    {
        id: "cloze_1174", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Many people believe that success is a matter of luck. However, true success is usually the result of (71) ______ work. While luck may provide an (72) ______, it is effort that sustains it. Those who rely solely on luck often face (73) ______. Hard work builds character and (74) ______. Therefore, we should focus on our efforts rather than waiting for a (75) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 74.",
        options: ["laziness", "fear", "discipline", "greed"],
        correctIndex: 2,
        explanation: "Hard work creates habits of 'discipline'.",
        explanationBengali: "কঠোর পরিশ্রম চরিত্র এবং 'discipline' (শৃঙ্খলা) গঠন করে।"
    },
    {
        id: "cloze_1175", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Many people believe that success is a matter of luck. However, true success is usually the result of (71) ______ work. While luck may provide an (72) ______, it is effort that sustains it. Those who rely solely on luck often face (73) ______. Hard work builds character and (74) ______. Therefore, we should focus on our efforts rather than waiting for a (75) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 75.",
        options: ["miracle", "disaster", "storm", "bus"],
        correctIndex: 0,
        explanation: "We shouldn't wait for a lucky 'miracle'.",
        explanationBengali: "আমাদের উচিত পরিশ্রম করা, কোনো 'miracle' (অলৌকিক ঘটনা)-র জন্য অপেক্ষা না করা।"
    },

    // --- Passage 16: Yoga ---
    {
        id: "cloze_1176", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Yoga is an ancient practice that originated in India. It combines physical postures, breathing exercises, and (76) ______. Regular practice promotes flexibility and (77) ______. It is known to reduce stress and improve mental (78) ______. Yoga is suitable for people of all (79) ______. It is a holistic approach to (80) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 76.",
        options: ["sleeping", "meditation", "fighting", "running"],
        correctIndex: 1,
        explanation: "Yoga includes postures, breathing, and 'meditation'.",
        explanationBengali: "যোগব্যায়ামে শারীরিক কসরত, শ্বাস-প্রশ্বাস এবং 'meditation' (ধ্যান) অন্তর্ভুক্ত।"
    },
    {
        id: "cloze_1177", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Yoga is an ancient practice that originated in India. It combines physical postures, breathing exercises, and (76) ______. Regular practice promotes flexibility and (77) ______. It is known to reduce stress and improve mental (78) ______. Yoga is suitable for people of all (79) ______. It is a holistic approach to (80) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 77.",
        options: ["anger", "strength", "height", "weight"],
        correctIndex: 1,
        explanation: "Yoga improves flexibility and physical 'strength'.",
        explanationBengali: "নিয়মিত যোগাভ্যাস নমনীয়তা এবং 'strength' (শক্তি) বাড়ায়।"
    },
    {
        id: "cloze_1178", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Yoga is an ancient practice that originated in India. It combines physical postures, breathing exercises, and (76) ______. Regular practice promotes flexibility and (77) ______. It is known to reduce stress and improve mental (78) ______. Yoga is suitable for people of all (79) ______. It is a holistic approach to (80) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 78.",
        options: ["chaos", "clarity", "illness", "noise"],
        correctIndex: 1,
        explanation: "Yoga calms the mind, leading to mental 'clarity'.",
        explanationBengali: "যোগব্যায়াম মানসিক চাপ কমায় এবং মানসিক 'clarity' (স্বচ্ছতা/প্রশান্তি) আনে।"
    },
    {
        id: "cloze_1179", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Health",
        question: "Passage: Yoga is an ancient practice that originated in India. It combines physical postures, breathing exercises, and (76) ______. Regular practice promotes flexibility and (77) ______. It is known to reduce stress and improve mental (78) ______. Yoga is suitable for people of all (79) ______. It is a holistic approach to (80) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 79.",
        options: ["ages", "sizes", "colors", "names"],
        correctIndex: 0,
        explanation: "Yoga is good for people of all 'ages'.",
        explanationBengali: "সব 'ages' (বয়সের) মানুষের জন্য যোগব্যায়াম উপযুক্ত।"
    },
    {
        id: "cloze_1180", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Health",
        question: "Passage: Yoga is an ancient practice that originated in India. It combines physical postures, breathing exercises, and (76) ______. Regular practice promotes flexibility and (77) ______. It is known to reduce stress and improve mental (78) ______. Yoga is suitable for people of all (79) ______. It is a holistic approach to (80) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 80.",
        options: ["wealth", "fame", "well-being", "fashion"],
        correctIndex: 2,
        explanation: "Yoga is a holistic approach to overall 'well-being'.",
        explanationBengali: "এটি সার্বিক 'well-being' (সুস্থতা/কল্যাণ)-এর একটি সামগ্রিক পদ্ধতি।"
    },

    // --- Passage 17: Plastic Pollution ---
    {
        id: "cloze_1181", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Plastic pollution is a growing environmental crisis. Single-use plastics often end up in the (81) ______, harming marine life. These plastics take hundreds of years to (82) ______. Animals often mistake plastic for (83) ______ and eat it. To combat this, we should switch to (84) ______ alternatives. Small changes in our habits can make a big (85) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 81.",
        options: ["deserts", "forests", "oceans", "mountains"],
        correctIndex: 2,
        explanation: "Marine life is harmed when plastic ends up in 'oceans'.",
        explanationBengali: "প্লাস্টিক বর্জ্য 'oceans' (সমুদ্রে) গিয়ে পড়ে, যা সামুদ্রিক প্রাণীদের ক্ষতি করে।"
    },
    {
        id: "cloze_1182", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Plastic pollution is a growing environmental crisis. Single-use plastics often end up in the (81) ______, harming marine life. These plastics take hundreds of years to (82) ______. Animals often mistake plastic for (83) ______ and eat it. To combat this, we should switch to (84) ______ alternatives. Small changes in our habits can make a big (85) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 82.",
        options: ["grow", "decompose", "fly", "swim"],
        correctIndex: 1,
        explanation: "Plastic does not rot easily; it takes years to 'decompose'.",
        explanationBengali: "প্লাস্টিক 'decompose' (পচে যাওয়া/নিঃশেষ হওয়া) হতে শত শত বছর সময় নেয়।"
    },
    {
        id: "cloze_1183", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Environment",
        question: "Passage: Plastic pollution is a growing environmental crisis. Single-use plastics often end up in the (81) ______, harming marine life. These plastics take hundreds of years to (82) ______. Animals often mistake plastic for (83) ______ and eat it. To combat this, we should switch to (84) ______ alternatives. Small changes in our habits can make a big (85) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 83.",
        options: ["water", "food", "air", "toys"],
        correctIndex: 1,
        explanation: "Animals mistake plastic for 'food'.",
        explanationBengali: "প্রাণীরা ভুল করে প্লাস্টিককে 'food' (খাবার) মনে করে খেয়ে ফেলে।"
    },
    {
        id: "cloze_1184", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Plastic pollution is a growing environmental crisis. Single-use plastics often end up in the (81) ______, harming marine life. These plastics take hundreds of years to (82) ______. Animals often mistake plastic for (83) ______ and eat it. To combat this, we should switch to (84) ______ alternatives. Small changes in our habits can make a big (85) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 84.",
        options: ["toxic", "expensive", "reusable", "heavy"],
        correctIndex: 2,
        explanation: "We should use 'reusable' bags and bottles instead of plastic.",
        explanationBengali: "আমাদের 'reusable' (পুনরায় ব্যবহারযোগ্য) বিকল্প বেছে নেওয়া উচিত।"
    },
    {
        id: "cloze_1185", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Environment",
        question: "Passage: Plastic pollution is a growing environmental crisis. Single-use plastics often end up in the (81) ______, harming marine life. These plastics take hundreds of years to (82) ______. Animals often mistake plastic for (83) ______ and eat it. To combat this, we should switch to (84) ______ alternatives. Small changes in our habits can make a big (85) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 85.",
        options: ["noise", "mess", "difference", "problem"],
        correctIndex: 2,
        explanation: "Small changes can make a big 'difference'.",
        explanationBengali: "ছোট ছোট পরিবর্তন বড় 'difference' (পার্থক্য) গড়ে দিতে পারে।"
    },

    // --- Passage 18: Libraries ---
    {
        id: "cloze_1186", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Education",
        question: "Passage: Libraries are storehouses of knowledge. They provide a quiet environment for (86) ______ and learning. Public libraries offer free access to books and (87) ______. They serve as community hubs where people can (88) ______. Despite the digital age, libraries remain (89) ______. They play a crucial role in promoting (90) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 86.",
        options: ["dancing", "sleeping", "reading", "shouting"],
        correctIndex: 2,
        explanation: "Libraries are places for 'reading'.",
        explanationBengali: "লাইব্রেরি হলো 'reading' (পড়াশোনা) করার জন্য শান্ত একটি জায়গা।"
    },
    {
        id: "cloze_1187", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Libraries are storehouses of knowledge. They provide a quiet environment for (86) ______ and learning. Public libraries offer free access to books and (87) ______. They serve as community hubs where people can (88) ______. Despite the digital age, libraries remain (89) ______. They play a crucial role in promoting (90) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 87.",
        options: ["food", "clothes", "resources", "tickets"],
        correctIndex: 2,
        explanation: "Libraries offer books and other 'resources' like internet/archives.",
        explanationBengali: "বইয়ের পাশাপাশি লাইব্রেরি বিভিন্ন 'resources' (সম্পদ/তথ্যভাণ্ডার) প্রদান করে।"
    },
    {
        id: "cloze_1188", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Libraries are storehouses of knowledge. They provide a quiet environment for (86) ______ and learning. Public libraries offer free access to books and (87) ______. They serve as community hubs where people can (88) ______. Despite the digital age, libraries remain (89) ______. They play a crucial role in promoting (90) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 88.",
        options: ["fight", "gather", "hide", "cook"],
        correctIndex: 1,
        explanation: "Libraries act as hubs where the community can 'gather'.",
        explanationBengali: "লাইব্রেরি এমন একটি কেন্দ্র যেখানে মানুষ 'gather' (একত্রিত) হতে পারে।"
    },
    {
        id: "cloze_1189", chapter: "Cloze Test", type: "vocab", difficulty: "hard", topic: "Education",
        question: "Passage: Libraries are storehouses of knowledge. They provide a quiet environment for (86) ______ and learning. Public libraries offer free access to books and (87) ______. They serve as community hubs where people can (88) ______. Despite the digital age, libraries remain (89) ______. They play a crucial role in promoting (90) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 89.",
        options: ["useless", "relevant", "closed", "expensive"],
        correctIndex: 1,
        explanation: "Even with the internet, libraries are still 'relevant'.",
        explanationBengali: "ডিজিটাল যুগেও লাইব্রেরি তার গুরুত্ব হারায়নি, এটি এখনও 'relevant' (প্রাসঙ্গিক)।"
    },
    {
        id: "cloze_1190", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Education",
        question: "Passage: Libraries are storehouses of knowledge. They provide a quiet environment for (86) ______ and learning. Public libraries offer free access to books and (87) ______. They serve as community hubs where people can (88) ______. Despite the digital age, libraries remain (89) ______. They play a crucial role in promoting (90) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 90.",
        options: ["literacy", "illiteracy", "poverty", "noise"],
        correctIndex: 0,
        explanation: "Libraries promote reading and 'literacy'.",
        explanationBengali: "লাইব্রেরি 'literacy' (সাক্ষরতা/শিক্ষার হার) বাড়াতে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },

    // --- Passage 19: Teamwork ---
    {
        id: "cloze_1191", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Teamwork is the ability to work together toward a common (91) ______. It requires good communication and mutual (92) ______. When team members support each other, they can achieve (93) ______ results. Teamwork divides the effort and multiplies the (94) ______. It is an essential skill in the modern (95) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 91.",
        options: ["enemy", "goal", "secret", "vacation"],
        correctIndex: 1,
        explanation: "Teams work towards a common 'goal'.",
        explanationBengali: "দলবদ্ধ কাজের উদ্দেশ্য হলো একটি সাধারণ 'goal' (লক্ষ্য) অর্জন করা।"
    },
    {
        id: "cloze_1192", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Teamwork is the ability to work together toward a common (91) ______. It requires good communication and mutual (92) ______. When team members support each other, they can achieve (93) ______ results. Teamwork divides the effort and multiplies the (94) ______. It is an essential skill in the modern (95) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 92.",
        options: ["hatred", "suspicion", "respect", "silence"],
        correctIndex: 2,
        explanation: "Teamwork requires 'respect' for team members.",
        explanationBengali: "টিমওয়ার্কের জন্য পারস্পরিক 'respect' (শ্রদ্ধাবোধ) প্রয়োজন।"
    },
    {
        id: "cloze_1193", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Teamwork is the ability to work together toward a common (91) ______. It requires good communication and mutual (92) ______. When team members support each other, they can achieve (93) ______ results. Teamwork divides the effort and multiplies the (94) ______. It is an essential skill in the modern (95) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 93.",
        options: ["average", "poor", "remarkable", "hidden"],
        correctIndex: 2,
        explanation: "Working together leads to 'remarkable' or great results.",
        explanationBengali: "সবাই মিলে কাজ করলে 'remarkable' (অসাধারণ) ফলাফল পাওয়া যায়।"
    },
    {
        id: "cloze_1194", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Teamwork is the ability to work together toward a common (91) ______. It requires good communication and mutual (92) ______. When team members support each other, they can achieve (93) ______ results. Teamwork divides the effort and multiplies the (94) ______. It is an essential skill in the modern (95) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 94.",
        options: ["failure", "confusion", "success", "work"],
        correctIndex: 2,
        explanation: "Teamwork makes 'success' larger or multiplies it.",
        explanationBengali: "টিমওয়ার্ক পরিশ্রম ভাগ করে নেয় কিন্তু 'success' (সাফল্য)-কে বহুগুণ বাড়িয়ে দেয়।"
    },
    {
        id: "cloze_1195", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Success",
        question: "Passage: Teamwork is the ability to work together toward a common (91) ______. It requires good communication and mutual (92) ______. When team members support each other, they can achieve (93) ______ results. Teamwork divides the effort and multiplies the (94) ______. It is an essential skill in the modern (95) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 95.",
        options: ["jungle", "workplace", "history", "dream"],
        correctIndex: 1,
        explanation: "Teamwork is vital in the modern 'workplace'.",
        explanationBengali: "আধুনিক 'workplace' (কর্মক্ষেত্রে) টিমওয়ার্ক একটি অপরিহার্য দক্ষতা।"
    },

    // --- Passage 20: Childhood ---
    {
        id: "cloze_1196", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Life",
        question: "Passage: Childhood is often considered the best phase of life. It is a time of innocence and (96) ______. Children are free from the (97) ______ of adult life. They spend their time playing and (98) ______ new things. The memories made during childhood are often (99) ______. It is the foundation upon which our adult personality is (100) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 96.",
        options: ["joy", "pain", "work", "darkness"],
        correctIndex: 0,
        explanation: "Childhood is associated with innocence and 'joy'.",
        explanationBengali: "শৈশব হলো নির্দোষতা এবং 'joy' (আনন্দ)-এর সময়।"
    },
    {
        id: "cloze_1197", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Life",
        question: "Passage: Childhood is often considered the best phase of life. It is a time of innocence and (96) ______. Children are free from the (97) ______ of adult life. They spend their time playing and (98) ______ new things. The memories made during childhood are often (99) ______. It is the foundation upon which our adult personality is (100) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 97.",
        options: ["joys", "games", "burdens", "toys"],
        correctIndex: 2,
        explanation: "Children don't have the 'burdens' or worries of adults.",
        explanationBengali: "শিশুরা বড়দের জীবনের 'burdens' (বোঝা/দুশ্চিন্তা) থেকে মুক্ত থাকে।"
    },
    {
        id: "cloze_1198", chapter: "Cloze Test", type: "vocab", difficulty: "easy", topic: "Life",
        question: "Passage: Childhood is often considered the best phase of life. It is a time of innocence and (96) ______. Children are free from the (97) ______ of adult life. They spend their time playing and (98) ______ new things. The memories made during childhood are often (99) ______. It is the foundation upon which our adult personality is (100) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 98.",
        options: ["buying", "exploring", "fearing", "forgetting"],
        correctIndex: 1,
        explanation: "Children are curious and spend time 'exploring'.",
        explanationBengali: "শিশুরা খেলাধুলা করে এবং নতুন জিনিস 'exploring' (অন্বেষণ) করে সময় কাটায়।"
    },
    {
        id: "cloze_1199", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Life",
        question: "Passage: Childhood is often considered the best phase of life. It is a time of innocence and (96) ______. Children are free from the (97) ______ of adult life. They spend their time playing and (98) ______ new things. The memories made during childhood are often (99) ______. It is the foundation upon which our adult personality is (100) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 99.",
        options: ["erased", "cherished", "ignored", "painful"],
        correctIndex: 1,
        explanation: "We usually treasure or 'cherish' childhood memories.",
        explanationBengali: "শৈশবের স্মৃতিগুলো আমরা 'cherished' (লালন) করি বা মনে রাখি।"
    },
    {
        id: "cloze_1200", chapter: "Cloze Test", type: "vocab", difficulty: "moderate", topic: "Life",
        question: "Passage: Childhood is often considered the best phase of life. It is a time of innocence and (96) ______. Children are free from the (97) ______ of adult life. They spend their time playing and (98) ______ new things. The memories made during childhood are often (99) ______. It is the foundation upon which our adult personality is (100) ______.\n\nQuestion: Select the most appropriate option to fill in blank No. 100.",
        options: ["built", "destroyed", "lost", "hidden"],
        correctIndex: 0,
        explanation: "Childhood experiences 'build' our personality.",
        explanationBengali: "এটি সেই ভিত্তি যার ওপর আমাদের ব্যক্তিত্ব 'built' (গড়ে ওঠে)।"
    },
    {
        id: "pj_1201", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He was a very greedy man.\nB. Once there lived a rich merchant in a village.\nC. One day, he lost his bag of gold coins.\nD. He searched for it everywhere but couldn't find it.",
        options: ["BADC", "BACD", "ACBD", "CBAD"],
        correctIndex: 1,
        explanation: "Sentence B introduces the main character (the rich merchant). Sentence A describes his nature (greedy). Sentence C tells what happened (lost bag). Sentence D describes the consequence (searched for it). So, BACD is the logical order.",
        explanationBengali: "B বাক্যটি মূল চরিত্র (ধনী বনিক) পরিচয় করিয়ে দেয়। A তার স্বভাব (লোভী) বর্ণনা করে। C তে ঘটনার বর্ণনা (স্বর্ণমুদ্রার থলে হারানো) এবং D তে তার ফলাফল (খোঁজাখুঁজি) বলা হয়েছে। তাই সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1202", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It is essential for life on Earth.\nB. However, human activities are polluting it.\nC. Water is a precious resource.\nD. We must take steps to conserve it for future generations.",
        options: ["CABD", "ACBD", "CBAD", "BCAD"],
        correctIndex: 0,
        explanation: "C introduces the topic (Water). A explains its importance. B introduces a contrast/problem (pollution). D suggests a solution (conservation). CABD is the coherent flow.",
        explanationBengali: "C বাক্যটি বিষয় (পানি) উপস্থাপন করে। A এর গুরুত্ব বোঝায়। B সমস্যা (দূষণ) তুলে ধরে এবং D সমাধান (সংরক্ষণ) নির্দেশ করে। সঠিক ক্রম CABD।"
    },
    {
        id: "pj_1203", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They help us communicate with people across the globe.\nB. Mobile phones have revolutionized the way we live.\nC. However, excessive use can lead to addiction.\nD. We can also access information instantly.",
        options: ["BADC", "BCAD", "ABCD", "ACBD"],
        correctIndex: 0,
        explanation: "B is the opening sentence introducing mobile phones. A and D list the benefits (communication, information). C introduces the downside (addiction) using 'However'. BADC is the correct order.",
        explanationBengali: "B মোবাইল ফোন সম্পর্কে মূল ধারণা দেয়। A এবং D এর সুবিধাগুলো বর্ণনা করে। C 'However' দিয়ে এর কুফল (আসক্তি) তুলে ধরে। তাই সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1204", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. Then, pour the egg mixture into a hot pan.\nB. First, break two eggs into a bowl.\nC. Finally, serve the omelet with toast.\nD. Whisk them well with salt and pepper.",
        options: ["BDAC", "BADC", "ABCD", "DCBA"],
        correctIndex: 0,
        explanation: "This describes a process. B is the first step (break eggs). D follows (whisk them). A is next (pour into pan). C is the final step (serve). BDAC is the correct sequence.",
        explanationBengali: "এটি একটি প্রক্রিয়া। B প্রথম ধাপ (ডিম ভাঙা)। D তার পরের ধাপ (মেশানো)। A হলো ভাজা এবং C হলো পরিবেশন করা। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1205", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. The lion woke up and roared in anger.\nB. A mouse was playing on a sleeping lion.\nC. The mouse begged for forgiveness.\nD. The lion caught the mouse in his paw.",
        options: ["BADC", "BCAD", "ACBD", "ABCD"],
        correctIndex: 0,
        explanation: "B sets the scene (mouse playing on lion). A describes the lion's reaction (woke up). D follows (caught the mouse). C is the mouse's reaction (begged). BADC fits the story.",
        explanationBengali: "B গল্পের শুরু (সিংহের ওপর ইঁদুরের খেলা)। A সিংহের প্রতিক্রিয়া (জেগে ওঠা)। D সিংহ ইঁদুরটিকে ধরে ফেলে। C ইঁদুরটি ক্ষমা চায়। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1206", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This helps in reducing the amount of waste in landfills.\nB. Recycling is a simple way to help the environment.\nC. It involves processing used materials into new products.\nD. By doing so, we conserve natural resources.",
        options: ["BCAD", "BCDA", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces 'Recycling'. C defines what it involves. A explains a benefit (reducing waste). D explains another benefit (conserving resources). BCAD is the logical flow.",
        explanationBengali: "B রিসাইক্লিং বা পুনর্ব্যবহার বিষয়টি আনে। C এর সংজ্ঞা দেয়। A একটি সুবিধা (বর্জ্য কমানো) এবং D আরেকটি সুবিধা (সম্পদ রক্ষা) বর্ণনা করে। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1207", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. But as he grew older, he became weak.\nB. He used to hunt daily to feed his family.\nC. A woodcutter lived in a small hut near the forest.\nD. He could no longer walk long distances.",
        options: ["CBAD", "CABD", "BCAD", "ACBD"],
        correctIndex: 0,
        explanation: "C introduces the character (woodcutter). B describes his past routine. A introduces a change (getting old). D describes the result of aging. CBAD is correct.",
        explanationBengali: "C চরিত্র (কাঠুরিয়া) পরিচয় করিয়ে দেয়। B তার অতীতের কাজ বর্ণনা করে। A পরিবর্তন (বৃদ্ধ হওয়া) এবং D তার ফলাফল (হাঁটতে না পারা) নির্দেশ করে। সঠিক ক্রম CBAD।"
    },
    {
        id: "pj_1208", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She went to the library to borrow some books.\nB. Mary loves reading books.\nC. She spent hours reading them at home.\nD. She selected a novel and a history book.",
        options: ["BADC", "BACD", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B states Mary's interest. A tells what she did (went to library). D tells what she chose. C tells what she did afterwards (read at home). BADC is the order.",
        explanationBengali: "B মেরির শখ (বই পড়া) জানায়। A সে লাইব্রেরিতে গেল। D সে বই পছন্দ করল। C সে বাড়িতে এসে পড়ল। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1209", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. The climate of the world is changing rapidly.\nB. This phenomenon is known as Global Warming.\nC. It is primarily caused by the increase in greenhouse gases.\nD. The rise in temperature affects agriculture and sea levels.",
        options: ["ABCD", "ACBD", "ABDC", "ADBC"],
        correctIndex: 0,
        explanation: "A introduces the changing climate. B names it (Global Warming). C explains the cause. D explains the effects. ABCD is a logical sequence.",
        explanationBengali: "A জলবায়ু পরিবর্তন বিষয়টি আনে। B এর নাম দেয় (গ্লোবাল ওয়ার্মিং)। C এর কারণ ব্যাখ্যা করে। D এর প্রভাব বর্ণনা করে। সঠিক ক্রম ABCD।"
    },
    {
        id: "pj_1210", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. However, his arrogance led to his downfall.\nB. Alexander the Great was a king of Macedon.\nC. He conquered many lands and created a vast empire.\nD. He is considered one of history's most successful military commanders.",
        options: ["BDCA", "BCDA", "CBDA", "ABCD"],
        correctIndex: 0,
        explanation: "B introduces Alexander. D describes his reputation. C lists his achievements. A introduces a contrast/negative point ('However'). BDCA fits best.",
        explanationBengali: "B আলেকজান্ডারের পরিচয় দেয়। D তার খ্যাতি বর্ণনা করে। C তার জয়গুলো উল্লেখ করে। A 'However' দিয়ে তার পতনের কারণ বলে। সঠিক ক্রম BDCA।"
    },
    {
        id: "pj_1211", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It was a bright sunny morning.\nB. They decided to go for a picnic by the river.\nC. The family packed their lunch and set off.\nD. Upon reaching, they spread a mat under a big tree.",
        options: ["ABCD", "ABDC", "BACD", "ACBD"],
        correctIndex: 0,
        explanation: "A sets the weather/atmosphere. B states the plan (picnic). C describes the preparation/departure. D describes arrival. ABCD is chronological.",
        explanationBengali: "A আবহাওয়া বর্ণনা করে। B পরিকল্পনার কথা বলে। C প্রস্তুতি ও যাত্রা শুরু। D গন্তব্যে পৌঁছানো। সঠিক ক্রম ABCD।"
    },
    {
        id: "pj_1212", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Without it, nothing can survive.\nB. The sun is the ultimate source of energy for life on Earth.\nC. Plants use sunlight to make food.\nD. Animals, in turn, depend on plants for their energy.",
        options: ["BADC", "BCDA", "BACD", "ABCD"],
        correctIndex: 2,
        explanation: "B introduces the Sun. A emphasizes its importance. C explains how plants use it. D explains how animals benefit indirectly. BACD is the logical flow.",
        explanationBengali: "B সূর্যকে শক্তির উৎস হিসেবে পরিচয় করায়। A এর অপরিহার্যতা বোঝায়। C উদ্ভিদ কীভাবে ব্যবহার করে তা বলে। D প্রাণীরা কীভাবে উদ্ভিদের ওপর নির্ভর করে তা বলে। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1213", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. Finally, he reached the top of the mountain.\nB. Rahul started climbing early in the morning.\nC. The view from the top was breathtaking.\nD. He faced many difficulties on the way up.",
        options: ["BDAC", "BADC", "BCAD", "ACBD"],
        correctIndex: 0,
        explanation: "B is the start of the journey. D describes the journey (difficulties). A is the conclusion of the climb. C is the reward/result. BDAC is correct.",
        explanationBengali: "B যাত্রা শুরু। D যাত্রাপথের বাধা। A চূড়ায় পৌঁছানো। C সেখানকার দৃশ্য উপভোগ। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1214", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This shift has led to a decrease in physical activity.\nB. Technology has changed how children play today.\nC. Instead of outdoor games, they prefer video games.\nD. Consequently, childhood obesity is on the rise.",
        options: ["BCAD", "BCDA", "CBAD", "ABCD"],
        correctIndex: 0,
        explanation: "B introduces the topic (Technology and play). C gives an example (video games vs outdoor). A explains the result of C (less activity). D gives the final consequence (obesity). BCAD.",
        explanationBengali: "B প্রযুক্তির প্রভাব নিয়ে কথা বলে। C উদাহরণ দেয় (ভিডিও গেম)। A এর ফলে শারীরিক কসরত কমার কথা বলে। D চূড়ান্ত ফলাফল (স্থূলতা) নির্দেশ করে। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1215", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He opened the box and found a map inside.\nB. John found an old dusty box in the attic.\nC. The map led to a hidden treasure in the garden.\nD. He cleaned the dust off the box.",
        options: ["BDAC", "BADC", "DBAC", "ACBD"],
        correctIndex: 0,
        explanation: "B is the discovery. D is the action taken (cleaning). A is opening it. C is what was found inside. BDAC is the correct sequence.",
        explanationBengali: "B বাক্স খুঁজে পাওয়া। D ধুলো পরিষ্কার করা। A বাক্স খোলা। C মানচিত্রের রহস্য। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1216", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Discipline helps us achieve our goals.\nB. It teaches us self-control and responsibility.\nC. Success is often the result of a disciplined life.\nD. Without discipline, life becomes chaotic.",
        options: ["ADBC", "ABCD", "ACBD", "CBAD"],
        correctIndex: 0,
        explanation: "A introduces the benefit of discipline. D provides a contrast (without it). B adds more benefits. C concludes with the link to success. ADBC flows well.",
        explanationBengali: "A শৃঙ্খলার উপকারিতা বলে। D এর অভাবের কুফল বলে। B আরও গুণাবলী যোগ করে। C সাফল্যের সাথে এর সম্পর্ক টানে। সঠিক ক্রম ADBC।"
    },
    {
        id: "pj_1217", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She bought some fresh vegetables.\nB. Then she went to the grocery store.\nC. Mother made a shopping list.\nD. She cooked a delicious dinner with them.",
        options: ["CBAD", "CABD", "BCAD", "ABCD"],
        correctIndex: 0,
        explanation: "C starts the process (making list). B is going to the store. A is buying items. D is using items to cook. CBAD is the correct order.",
        explanationBengali: "C ফর্দ তৈরি করা। B দোকানে যাওয়া। A সবজি কেনা। D রান্না করা। সঠিক ক্রম CBAD।"
    },
    {
        id: "pj_1218", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. But today, it is threatened by pollution and encroachment.\nB. The Ganges is considered a holy river in India.\nC. Efforts are being made to clean and restore it.\nD. Millions of people depend on it for their daily needs.",
        options: ["BDAC", "BADC", "ACBD", "CBAD"],
        correctIndex: 0,
        explanation: "B introduces the Ganges. D explains its importance. A introduces the problem ('But'). C mentions the solution/action. BDAC is the logical structure.",
        explanationBengali: "B গঙ্গা নদীর পরিচয় দেয়। D এর গুরুত্ব বোঝায়। A সমস্যা (দূষণ) তুলে ধরে। C সমাধান বা চেষ্টার কথা বলে। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1219", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They have a long trunk and large ears.\nB. Elephants are the largest land animals.\nC. They use their trunks to pick up food and water.\nD. Elephants live in herds led by a matriarch.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces the subject (Elephants). A describes physical features. C explains the function of the trunk (mentioned in A). D adds social behavior. BACD is coherent.",
        explanationBengali: "B হাতি সম্পর্কে মূল বাক্য। A শারীরিক গঠন বর্ণনা করে। C শুঁড়ের কাজ ব্যাখ্যা করে। D তাদের দলবদ্ধ জীবন সম্পর্কে বলে। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1220", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He practiced every day after school.\nB. Tom wanted to win the school singing competition.\nC. Finally, he won the first prize.\nD. His hard work paid off on the day of the contest.",
        options: ["BADC", "BACD", "ACBD", "BDAC"],
        correctIndex: 0,
        explanation: "B sets the goal. A describes the effort. D describes the performance/result day. C is the final outcome. BADC is the correct order.",
        explanationBengali: "B লক্ষ্য নির্ধারণ। A প্রচেষ্টা। D ফলাফলের দিন। C পুরস্কার জয়। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1221", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. It enables us to learn from the past and plan for the future.\nB. Memory is a fascinating faculty of the human brain.\nC. However, it can sometimes be unreliable.\nD. We rely on it for our sense of identity.",
        options: ["BADC", "BDAC", "BACD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces Memory. D explains its importance (identity). A adds another function (learning). C introduces a limitation ('However'). BDAC is the correct flow.",
        explanationBengali: "B স্মৃতিশক্তির পরিচয় দেয়। D এর গুরুত্ব (পরিচয়) বলে। A আরেকটি কাজ (শিক্ষা) উল্লেখ করে। C এর সীমাবদ্ধতা (অবিশ্বাসযোগ্যতা) তুলে ধরে। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1222", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Suddenly, the tire of the car punctured.\nB. They had to stop and change the tire.\nC. The Smith family was driving to the beach.\nD. They resumed their journey after an hour.",
        options: ["CABD", "CADB", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "C establishes the context (driving). A is the incident (puncture). B is the immediate action (stop/change). D is the continuation. CABD is correct.",
        explanationBengali: "C ভ্রমণের শুরু। A সমস্যা (পাংচার)। B সমাধান (চাকা বদলানো)। D আবার যাত্রা শুরু। সঠিক ক্রম CABD।"
    },
    {
        id: "pj_1223", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. It has a long neck to reach high branches.\nB. The giraffe is a unique animal found in Africa.\nC. This allows it to eat leaves that other animals cannot reach.\nD. It is the tallest living terrestrial animal.",
        options: ["BDAC", "BADC", "ADBC", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces the Giraffe. D mentions a key feature (tallest). A explains the neck. C explains the benefit of the neck. BDAC is logical.",
        explanationBengali: "B জিরাফের পরিচয়। D উচ্চতা উল্লেখ করে। A লম্বা গলার কথা বলে। C গলার সুবিধা ব্যাখ্যা করে। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1224", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. Such disasters remind us of the power of nature.\nB. The earthquake struck the city at midnight.\nC. Buildings collapsed and many people were trapped.\nD. Rescue teams arrived immediately to help the victims.",
        options: ["BCDA", "BACD", "CBAD", "DBCA"],
        correctIndex: 0,
        explanation: "B describes the event. C describes the damage. D describes the response. A is a concluding reflection. BCDA follows the event timeline.",
        explanationBengali: "B ঘটনা (ভূমিকম্প)। C ক্ষয়ক্ষতি। D উদ্ধারকাজ। A উপসংহার বা শিক্ষা। সঠিক ক্রম BCDA।"
    },
    {
        id: "pj_1225", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He planted a mango seed in his garden.\nB. Years later, it grew into a big tree bearing sweet fruits.\nC. A young boy named Ali loved mangoes.\nD. He watered it daily and took care of it.",
        options: ["CADB", "CABD", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "C introduces Ali. A tells what he did (planted seed). D tells how he cared for it. B is the result (tree). CADB is the correct order.",
        explanationBengali: "C আলীর পরিচয়। A বীজ রোপণ। D যত্ন নেওয়া। B ফল লাভ। সঠিক ক্রম CADB।"
    },
    {
        id: "pj_1226", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. First, you need to boil some water.\nB. Then add tea leaves and sugar.\nC. Making tea is a simple process.\nD. Finally, add milk and strain it into a cup.",
        options: ["CABD", "CBAD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "C introduces the topic (making tea). A is the first step. B is the second step. D is the final step. CABD is correct.",
        explanationBengali: "C বিষয়বস্তু (চা বানানো)। A প্রথম ধাপ (পানি ফোটানো)। B দ্বিতীয় ধাপ (চা পাতা ও চিনি)। D শেষ ধাপ (দুধ ও পরিবেশন)। সঠিক ক্রম CABD।"
    },
    {
        id: "pj_1227", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. They provide habitat for thousands of marine species.\nB. Coral reefs are often called the rainforests of the sea.\nC. Protecting them is vital for ocean biodiversity.\nD. However, rising sea temperatures are causing them to bleach.",
        options: ["BADC", "BACD", "ACBD", "CBAD"],
        correctIndex: 0,
        explanation: "B introduces Coral Reefs. A explains their value (habitat). D introduces the threat (bleaching). C gives the conclusion/call to action. BADC is correct.",
        explanationBengali: "B কোরাল রিফের পরিচয়। A এর গুরুত্ব। D সমস্যা (তাপমাত্রা বৃদ্ধি)। C রক্ষার আহ্বান। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1228", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He ran as fast as he could to catch it.\nB. But he missed it by a few seconds.\nC. Ravi realized he was late for the bus.\nD. He had to wait another hour for the next one.",
        options: ["CABD", "CBAD", "ACBD", "CADB"],
        correctIndex: 0,
        explanation: "C is the realization (late). A is the action (ran). B is the result (missed). D is the consequence (wait). CABD is the sequence.",
        explanationBengali: "C দেরি হওয়ার অনুভূতি। A দৌড়। B মিস করা। D অপেক্ষা করা। সঠিক ক্রম CABD।"
    },
    {
        id: "pj_1229", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. The dog wagged its tail happily.\nB. A stranger approached the gate.\nC. The dog barked loudly at him.\nD. But when the stranger offered a biscuit, it calmed down.",
        options: ["BCDA", "CBAD", "BACD", "BCAD"],
        correctIndex: 0,
        explanation: "B describes the event (stranger). C is the dog's first reaction (barking). D is the change (biscuit). A is the final reaction (wagging tail). BCDA is correct.",
        explanationBengali: "B আগন্তুক আসা। C কুকুরের ঘেউ ঘেউ। D বিস্কুট দেওয়া। A কুকুরের শান্ত হওয়া। সঠিক ক্রম BCDA।"
    },
    {
        id: "pj_1230", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It is a source of entertainment and information.\nB. Television has become a common household appliance.\nC. Too much TV can be harmful to children.\nD. Parents should monitor what their kids watch.",
        options: ["BADC", "BACD", "ACBD", "ABCD"],
        correctIndex: 1,
        explanation: "B introduces TV. A gives its positive uses. C gives a negative aspect. D suggests a solution for parents. BACD is the logical flow.",
        explanationBengali: "B টিভির প্রচলন। A এর ব্যবহার। C এর কুফল। D সমাধানের উপায়। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1231", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He saw some bunches of grapes hanging from a vine.\nB. Once a fox was very hungry.\nC. He jumped again and again but could not reach them.\nD. He went away saying, \"The grapes are sour.\"",
        options: ["BACD", "BADC", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the hungry fox. A tells what he saw (grapes). C tells his action (jumped). D is the conclusion (gave up). BACD is the logical story.",
        explanationBengali: "B ক্ষুধার্ত শিয়ালের কথা বলে। A সে আঙুর দেখল। C সে লাফ দিল কিন্তু নাগাল পেল না। D সে চলে গেল। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1232", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Pour hot water into a cup.\nB. Add a teaspoon of instant coffee powder.\nC. Stir well and serve hot.\nD. Add sugar and milk according to taste.",
        options: ["ABDC", "BADC", "ABCD", "ADBC"],
        correctIndex: 0,
        explanation: "A starts the process (hot water). B adds coffee. D adds sugar/milk. C is the final step (stir and serve). ABDC is correct.",
        explanationBengali: "A গরম পানি ঢালা। B কফি দেওয়া। D চিনি ও দুধ মেশানো। C নেড়ে পরিবেশন করা। সঠিক ক্রম ABDC।"
    },
    {
        id: "pj_1233", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It has transformed the world into a global village.\nB. The Internet is a revolutionary technology.\nC. However, it also brings cyber security threats.\nD. People can communicate instantly across borders.",
        options: ["BADC", "BACD", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the Internet. A describes its global impact. D gives a specific benefit (communication). C introduces the negative side ('However'). BADC follows logic.",
        explanationBengali: "B ইন্টারনেটের পরিচয়। A পৃথিবীকে গ্লোবাল ভিলেজ বানানো। D যোগাযোগের সুবিধা। C সাইবার নিরাপত্তার ঝুঁকি। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1234", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This poses a severe threat to marine life.\nB. Plastic pollution has become a global crisis.\nC. Millions of tons of plastic end up in the oceans.\nD. We must reduce single-use plastics immediately.",
        options: ["BCAD", "BCDA", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces the crisis. C explains where the plastic goes (oceans). A explains the consequence (threat to marine life). D is the solution. BCAD is the sequence.",
        explanationBengali: "B প্লাস্টিক দূষণ সমস্যা। C সাগরে প্লাস্টিক জমা হওয়া। A জলজ প্রাণীর ক্ষতি। D সমাধান (প্লাস্টিক কমানো)। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1235", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. This sedentary lifestyle leads to health issues.\nB. Modern life is becoming increasingly comfortable.\nC. Regular exercise is necessary to combat this.\nD. People spend hours sitting in front of screens.",
        options: ["BDAC", "BADC", "ACBD", "CBAD"],
        correctIndex: 0,
        explanation: "B sets the context (modern life). D gives an example (sitting). A explains the result (health issues). C gives the solution (exercise). BDAC is correct.",
        explanationBengali: "B আধুনিক জীবন। D স্ক্রিনের সামনে বসে থাকা। A স্বাস্থ্য সমস্যা। C সমাধান (ব্যায়াম)। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1236", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He is known as the Father of the Nation.\nB. Mahatma Gandhi was born in Porbandar, India.\nC. He led India to independence through non-violence.\nD. He studied law in England before returning to India.",
        options: ["BDCA", "BCDA", "CDAB", "DCBA"],
        correctIndex: 0,
        explanation: "B is the birth. D is education. C is his achievement (independence). A is his title (Father of Nation). BDCA is chronological.",
        explanationBengali: "B জন্ম। D পড়াশোনা। C স্বাধীনতা সংগ্রাম। A উপাধি (জাতির পিতা)। সঠিক ক্রম BDCA।"
    },
    {
        id: "pj_1237", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Strong winds began to blow, shaking the trees.\nB. Suddenly, the sky turned dark with clouds.\nC. Then, heavy rain started pouring down.\nD. Everyone ran indoors to find shelter.",
        options: ["BACD", "BCAD", "ABCD", "BADC"],
        correctIndex: 0,
        explanation: "B starts with the sky changing. A describes the wind. C describes the rain. D describes the people's reaction. BACD creates the scene.",
        explanationBengali: "B আকাশ কালো হওয়া। A বাতাস বইতে শুরু করা। C বৃষ্টি নামা। D মানুষের আশ্রয় নেওয়া। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1238", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It expands our vocabulary and knowledge.\nB. Reading is a habit that should be cultivated early.\nC. Therefore, parents should encourage children to read.\nD. Books open up new worlds to the reader.",
        options: ["BADC", "BDAC", "ADBC", "BCDA"],
        correctIndex: 1,
        explanation: "B introduces reading. D explains a benefit (new worlds). A explains another benefit (vocabulary). C is the conclusion/recommendation. BDAC flows well.",
        explanationBengali: "B পড়ার অভ্যাস। D নতুন জগত উন্মোচন। A শব্দভাণ্ডার বৃদ্ধি। C বাবা-মায়ের উৎসাহ দেওয়া উচিত। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1239", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It has no atmosphere or water.\nB. The Moon is Earth's only natural satellite.\nC. Neil Armstrong was the first human to walk on it.\nD. Yet, it fascinates scientists and astronomers.",
        options: ["BADC", "BACD", "ACBD", "BCDA"],
        correctIndex: 0,
        explanation: "B introduces the Moon. A describes its condition (no atmosphere). D provides a contrast ('Yet'). C mentions the landing. BADC works best.",
        explanationBengali: "B চাঁদের পরিচয়। A এর পরিবেশ (বায়ুমণ্ডল নেই)। D বিজ্ঞানীদের আগ্রহ। C নীল আর্মস্ট্রংয়ের অবতরণ। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1240", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Users can share photos and opinions instantly.\nB. Social media platforms connect people globally.\nC. However, it is important to use them wisely.\nD. Misuse can lead to privacy issues and cyberbullying.",
        options: ["BADC", "BACD", "ABCD", "BCDA"],
        correctIndex: 0,
        explanation: "B introduces social media. A describes its function. D describes the risks (misuse). C gives a warning/advice. BADC is logical.",
        explanationBengali: "B সোশ্যাল মিডিয়ার কাজ (সংযোগ)। A ছবি/মতামত শেয়ার। D অপব্যবহারের ঝুঁকি। C সতর্কতার সাথে ব্যবহার। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1241", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He saw a pot with very little water at the bottom.\nB. A thirsty crow was flying in search of water.\nC. The water level rose, and he quenched his thirst.\nD. He dropped stones into the pot one by one.",
        options: ["BADC", "BADC", "BACD", "BCDA"],
        correctIndex: 0,
        explanation: "B introduces the crow. A is finding the pot. D is the action (dropping stones). C is the result (drinking). BADC fits the fable.",
        explanationBengali: "B তৃষ্ণার্ত কাক। A কলসি দেখা। D পাথর ফেলা। C পানি পান করা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1242", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. You can browse through thousands of products.\nB. Online shopping offers great convenience.\nC. Finally, the item is delivered to your doorstep.\nD. Once selected, you can pay digitally.",
        options: ["BADC", "BACD", "ABDC", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces online shopping. A describes browsing. D describes payment. C describes delivery. BADC is the process order.",
        explanationBengali: "B অনলাইন শপিংয়ের সুবিধা। A পণ্য দেখা। D পেমেন্ট করা। C হোম ডেলিভারি। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1243", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He revised all his lessons thoroughly.\nB. Ravi had an important exam the next day.\nC. He woke up early and went to school confidently.\nD. He felt relieved when he saw the easy question paper.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 1,
        explanation: "B establishes the context (exam). A is the preparation. C is going to the exam. D is the reaction during the exam. BACD is correct.",
        explanationBengali: "B পরীক্ষার কথা। A রিভিশন দেওয়া। C পরীক্ষা দিতে যাওয়া। D প্রশ্ন দেখে খুশি হওয়া। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1244", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. Solar panels capture this energy.\nB. It is a renewable and eco-friendly power source.\nC. The sun radiates a vast amount of energy.\nD. This energy is then converted into electricity.",
        options: ["CABD", "CBAD", "CADB", "CDAB"],
        correctIndex: 2,
        explanation: "C introduces the Sun's energy. A explains capturing it. D explains conversion. B describes the nature of this source. CADB is logical.",
        explanationBengali: "C সূর্যের শক্তি। A সোলার প্যানেল দিয়ে তা ধরা। D বিদ্যুতে রূপান্তর। B এর পরিবেশবান্ধব গুণ। সঠিক ক্রম CADB।"
    },
    {
        id: "pj_1245", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He started crying loudly.\nB. A small boy went to a fair with his parents.\nC. A policeman helped him find his parents.\nD. In the crowd, he accidentally let go of his father's hand.",
        options: ["BDAC", "BADC", "BCAD", "BACD"],
        correctIndex: 0,
        explanation: "B introduces the situation. D is the incident (lost). A is the reaction (crying). C is the resolution. BDAC is the story.",
        explanationBengali: "B মেলায় যাওয়া। D হাত ফসকে হারিয়ে যাওয়া। A কান্না করা। C পুলিশ সাহায্য করা। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1246", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It is the language of international business and science.\nB. English is considered a global language.\nC. Learning it opens up many career opportunities.\nD. Therefore, proficiency in English is a valuable skill.",
        options: ["BADC", "BACD", "ABCD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces English. A explains its scope. C explains the benefit. D is the conclusion. BACD flows logically.",
        explanationBengali: "B ইংরেজির গুরুত্ব। A আন্তর্জাতিক ব্যবহার। C ক্যারিয়ারের সুযোগ। D উপসংহার। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1247", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. Then, she planted some rose seeds.\nB. First, she dug the soil in the garden.\nC. Beautiful flowers bloomed after a few weeks.\nD. She watered them regularly.",
        options: ["BADC", "BACD", "ACBD", "ABCD"],
        correctIndex: 0,
        explanation: "B is the first step (digging). A is planting. D is maintenance (watering). C is the result. BADC is the correct sequence.",
        explanationBengali: "B মাটি খোঁড়া। A বীজ বোনা। D পানি দেওয়া। C ফুল ফোটা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1248", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. Lack of sleep can lead to health problems.\nB. Sleep is essential for the body to repair itself.\nC. Most adults need about 7 to 8 hours of sleep.\nD. It refreshes the mind and improves concentration.",
        options: ["BDAC", "BDCA", "BCAD", "BADC"],
        correctIndex: 3,
        explanation: "B emphasizes importance. D adds benefits. A mentions consequence of lack. C gives the recommendation. BADC is a good flow.",
        explanationBengali: "B ঘুমের প্রয়োজনীয়তা। D এর উপকারিতা। A না ঘুমানোর কুফল। C ঘুমের সময়সীমা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1249", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. This causes severe traffic jams and pollution.\nB. Urban areas are witnessing a rapid increase in vehicles.\nC. Public transport needs to be improved to solve this.\nD. Commuters spend hours stuck on the roads.",
        options: ["BADC", "BACD", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the increase in vehicles. A describes the result (jams). D elaborates on the problem (time lost). C offers a solution. BADC is logical.",
        explanationBengali: "B যানবাহনের সংখ্যা বৃদ্ধি। A এর ফলে জ্যাম ও দূষণ। D মানুষের ভোগান্তি। C গণপরিবহন উন্নয়ন সমাধান। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1250", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They share our joys and sorrows.\nB. Friendship is one of the most beautiful bonds.\nC. We should always cherish true friends.\nD. Trust and understanding are the pillars of friendship.",
        options: ["BADC", "BACD", "ADBC", "BCDA"],
        correctIndex: 0,
        explanation: "B introduces friendship. A describes what friends do. D describes the foundation. C is the concluding advice. BADC works best.",
        explanationBengali: "B বন্ধুত্বের সৌন্দর্য। A সুখ-দুঃখ ভাগ করে নেওয়া। D বিশ্বাস ও বোঝাপড়া। C বন্ধুদের কদর করা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1251", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. We bought tickets at the entrance.\nB. Last Sunday, we visited the city zoo.\nC. We saw lions, tigers, and monkeys there.\nD. We returned home in the evening, tired but happy.",
        options: ["BACD", "BADC", "BCAD", "ABCD"],
        correctIndex: 0,
        explanation: "B establishes the visit. A is buying tickets. C is seeing animals. D is returning home. BACD is chronological.",
        explanationBengali: "B চিড়িয়াখানায় যাওয়া। A টিকিট কেনা। C প্রাণী দেখা। D বাড়ি ফেরা। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1252", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. It gives citizens the right to vote and elect leaders.\nB. Democracy is defined as a government by the people.\nC. This ensures that the government remains accountable.\nD. Free and fair elections are the core of democracy.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B defines Democracy. A explains the mechanism (voting). D reinforces the importance of elections. C explains the outcome (accountability). BADC flows well.",
        explanationBengali: "B গণতন্ত্রের সংজ্ঞা। A ভোটাধিকার। D নির্বাচনের গুরুত্ব। C সরকারের জবাবদিহিতা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1253", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It can then be stored in tanks for later use.\nB. Rainwater harvesting is an effective method to save water.\nC. This involves collecting rain from rooftops.\nD. It helps in recharging groundwater levels.",
        options: ["BCAD", "BCDA", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces the topic. C explains the process. A explains storage. D explains a long-term benefit. BCAD is the correct order.",
        explanationBengali: "B বৃষ্টির পানি সংরক্ষণ। C ছাদ থেকে সংগ্রহ। A ট্যাঙ্কে জমা রাখা। D ভূগর্ভস্থ পানি বৃদ্ধি। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1254", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. The driver lost control at a sharp turn.\nB. A red sports car was speeding down the highway.\nC. An ambulance was called immediately.\nD. It crashed into a tree on the roadside.",
        options: ["BADC", "BADC", "BCAD", "BACD"],
        correctIndex: 0,
        explanation: "B sets the scene (speeding car). A describes the loss of control. D describes the crash. C describes the aftermath (ambulance). BADC is chronological.",
        explanationBengali: "B দ্রুতগামী গাড়ি। A নিয়ন্ত্রণ হারানো। D গাছে ধাক্কা লাগা। C অ্যাম্বুলেন্স ডাকা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1255", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It consists of hardware and software components.\nB. A computer is an electronic device that processes data.\nC. Today, computers are indispensable in every field.\nD. It can perform complex calculations in seconds.",
        options: ["BADC", "BACD", "BDAC", "BCAD"],
        correctIndex: 2,
        explanation: "B defines the computer. D explains its speed/capability. A explains its composition. C concludes with its importance today. BDAC fits well.",
        explanationBengali: "B কম্পিউটারের সংজ্ঞা। D এর গতি ও কাজ। A হার্ডওয়্যার ও সফটওয়্যার। C বর্তমান গুরুত্ব। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1256", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. The fresh morning air felt good.\nB. I woke up early at 6 AM.\nC. I put on my jogging shoes and went to the park.\nD. After an hour of walking, I felt energetic.",
        options: ["BCAD", "BADC", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B waking up. C going to park. A feeling the air. D result of the walk. BCAD is the sequence.",
        explanationBengali: "B ঘুম থেকে ওঠা। C পার্কে যাওয়া। A সকালের বাতাস। D হাঁটার পর অনুভূতি। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1257", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This results in a decrease in the purchasing power of money.\nB. Inflation refers to the sustained increase in prices.\nC. The common man finds it difficult to manage expenses.\nD. Governments try to control it through monetary policies.",
        options: ["BACD", "BADC", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B defines Inflation. A explains the immediate effect (purchasing power drops). C explains the social effect. D mentions the solution. BACD is correct.",
        explanationBengali: "B মুদ্রাস্ফীতির সংজ্ঞা। A টাকার মান কমে যাওয়া। C সাধারণ মানুষের কষ্ট। D সরকারের পদক্ষেপ। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1258", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. People decorate their houses with diyas and rangoli.\nB. Diwali is known as the festival of lights.\nC. Sweets and gifts are exchanged among friends.\nD. It marks the victory of good over evil.",
        options: ["BDAC", "BADC", "CDAB", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces Diwali. D gives its significance. A describes decorations. C describes social customs. BDAC is a good descriptive order.",
        explanationBengali: "B দীপাবলির পরিচয়। D এর তাৎপর্য। A ঘর সাজানো। C মিষ্টি বিতরণ। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1259", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. A dove sitting on a tree dropped a leaf into the water.\nB. An ant slipped and fell into the river.\nC. The ant climbed onto the leaf and was saved.\nD. It was struggling to stay afloat.",
        options: ["BDAC", "BADC", "ADBC", "BCDA"],
        correctIndex: 0,
        explanation: "B is the accident. D describes the struggle. A is the help from the dove. C is the rescue. BDAC is the story.",
        explanationBengali: "B পিঁপড়ে পানিতে পড়া। D বাঁচার চেষ্টা। A ঘুঘুর পাতা ফেলা। C পিঁপড়ের বেঁচে যাওয়া। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1260", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. With hard work and dedication, you can achieve your dreams.\nB. After finishing school, you must choose a career path.\nC. Success comes to those who persist.\nD. It is a decision that shapes your future.",
        options: ["BDAC", "BADC", "ACBD", "CBAD"],
        correctIndex: 0,
        explanation: "B introduces the career choice. D explains its importance. A explains how to succeed. C emphasizes persistence. BDAC flows logically.",
        explanationBengali: "B ক্যারিয়ার বেছে নেওয়া। D এর গুরুত্ব। A সফল হওয়ার উপায়। C অধ্যবসায়ের গুরুত্ব। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1261", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He saw his own reflection in the water.\nB. A dog was crossing a bridge with a bone in his mouth.\nC. Thinking it was another dog with a bone, he barked.\nD. His bone fell into the river and was lost.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces the dog crossing the bridge. A describes seeing the reflection. C explains the dog's mistake. D is the result (losing the bone). BACD is the correct order.",
        explanationBengali: "B কুকুরটির সেতু পার হওয়া। A নিজের প্রতিবিম্ব দেখা। C ভুল করে ঘেউ ঘেউ করা। D হাড়টি পড়ে যাওয়া। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1262", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It helps in digestion and keeps the skin glowing.\nB. Water is essential for maintaining good health.\nC. Doctors recommend drinking at least 8 glasses a day.\nD. Dehydration can lead to fatigue and headaches.",
        options: ["BACD", "BADC", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B states the importance of water. A lists its benefits. C gives a recommendation. D warns about the lack of it. BACD flows logically.",
        explanationBengali: "B পানির গুরুত্ব। A এর উপকারিতা। C ডাক্তারের পরামর্শ। D পানিশূন্যতার কুফল। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1263", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They cut down trees to clear land for farming.\nB. Forests are being destroyed at an alarming rate.\nC. This leads to a loss of habitat for wildlife.\nD. Humans are the primary cause of this destruction.",
        options: ["BADC", "BDAC", "ACBD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces the destruction of forests. D identifies humans as the cause. A explains how humans do it. C describes the consequence. BDAC is correct.",
        explanationBengali: "B বন ধ্বংসের কথা। D এর জন্য মানুষ দায়ী। A মানুষ কীভাবে বন কাটে। C এর ফলে বন্যপ্রাণীর আবাসস্থল ধ্বংস। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1264", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She placed two slices of bread on a plate.\nB. Sita decided to make a sandwich for lunch.\nC. Then, she spread butter and jam on them.\nD. Finally, she put the slices together and ate it.",
        options: ["BADC", "BACD", "ABCD", "BCAD"],
        correctIndex: 1,
        explanation: "B states the intention. A is the first step (bread). C is the second step (spreading). D is the final step. BACD is chronological.",
        explanationBengali: "B স্যান্ডউইচ বানানোর সিদ্ধান্ত। A রুটি নেওয়া। C মাখন ও জ্যাম লাগানো। D খাওয়া। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1265", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It connects people from different cultures.\nB. Tourism is a major industry in many countries.\nC. However, unchecked tourism can harm local ecosystems.\nD. It generates revenue and creates jobs.",
        options: ["BADC", "BDAC", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces tourism. A describes a social benefit. D describes an economic benefit. C introduces the negative aspect ('However'). BADC works best.",
        explanationBengali: "B পর্যটন শিল্পের পরিচয়। A সাংস্কৃতিক সুবিধা। D অর্থনৈতিক সুবিধা। C পরিবেশগত ক্ষতি। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1266", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This discovery changed the course of medical history.\nB. Alexander Fleming was working in his laboratory.\nC. He noticed that a mold had killed some bacteria.\nD. This led to the development of Penicillin.",
        options: ["BCDA", "BDCA", "CBDA", "BCAD"],
        correctIndex: 0,
        explanation: "B sets the scene. C is the observation. D is the specific invention (Penicillin). A is the impact on history. BCDA is the correct sequence.",
        explanationBengali: "B ল্যাবরেটরিতে কাজ করা। C ছত্রাক লক্ষ্য করা। D পেনিসিলিন আবিষ্কার। A ইতিহাসের মোড় ঘুরে যাওয়া। সঠিক ক্রম BCDA।"
    },
    {
        id: "pj_1267", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He ran into a nearby cave to hide.\nB. A sudden storm caught the traveler unaware.\nC. Inside, he found a warm fire burning.\nD. Thunder roared and rain lashed down.",
        options: ["BDAC", "BADC", "BCAD", "ABCD"],
        correctIndex: 0,
        explanation: "B introduces the storm. D describes the severity. A shows the traveler's reaction (hiding). C describes what he found inside. BDAC is logical.",
        explanationBengali: "B ঝড়ের কবলে পড়া। D ঝড়ের তীব্রতা। A গুহায় আশ্রয় নেওয়া। C ভেতরে আগুন দেখা। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1268", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. The hare, confident of winning, took a nap.\nB. The tortoise continued walking slowly but steadily.\nC. A hare and a tortoise decided to race.\nD. In the end, the tortoise won the race.",
        options: ["CABD", "CBAD", "ACBD", "CADB"],
        correctIndex: 0,
        explanation: "C starts the story (race). A describes the hare's action. B describes the tortoise's action. D is the result. CABD fits the fable.",
        explanationBengali: "C দৌড় প্রতিযোগিতা। A খরগোশের ঘুম। B কচ্ছপের ধীর গতিতে চলা। D কচ্ছপের জয়। সঠিক ক্রম CABD।"
    },
    {
        id: "pj_1269", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They are built using blocks of ice and snow.\nB. Igloos are dome-shaped shelters found in the Arctic.\nC. The entrance is usually a tunnel to keep out the cold.\nD. Inside, animal skins are used for warmth.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B defines Igloos. A explains the material. C describes the entrance. D describes the interior. BACD is the best descriptive order.",
        explanationBengali: "B ইগলুর সংজ্ঞা। A তৈরির উপকরণ। C প্রবেশপথের বর্ণনা। D ভেতরের পরিবেশ। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1270", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This helps in retaining moisture in the soil.\nB. Mulching is a technique used in gardening.\nC. It involves covering the soil with organic material.\nD. Additionally, it suppresses weed growth.",
        options: ["BCAD", "BCDA", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces Mulching. C explains the process. A explains the primary benefit (moisture). D adds another benefit (weeds). BCAD is correct.",
        explanationBengali: "B মালচিং পদ্ধতির পরিচয়। C প্রক্রিয়াটি কী। A এর প্রধান সুবিধা (আর্দ্রতা ধরে রাখা)। D অতিরিক্ত সুবিধা (আগাছা দমন)। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1271", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He worked hard day and night to earn money.\nB. A poor farmer lived in a small village.\nC. Eventually, he bought a tractor and expanded his farm.\nD. He wanted to provide a better life for his children.",
        options: ["BADC", "BACD", "BDAC", "BCAD"],
        correctIndex: 2,
        explanation: "B introduces the farmer. D explains his motivation. A describes his effort. C is the outcome/success. BDAC flows well.",
        explanationBengali: "B কৃষকের পরিচয়। D তার লক্ষ্য। A কঠোর পরিশ্রম। C সাফল্য (ট্রাক্টর কেনা)। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1272", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. Then, apply shampoo to your hair.\nB. Wet your hair thoroughly with water.\nC. Rinse it off completely.\nD. Dry your hair with a soft towel.",
        options: ["BACD", "BADC", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B is the first step (wetting). A is applying shampoo. C is rinsing. D is drying. BACD is the sequence.",
        explanationBengali: "B চুল ভেজানো। A শ্যাম্পু লাগানো। C ধুয়ে ফেলা। D তোয়ালে দিয়ে মোছা। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1273", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It provides a platform for artists to showcase talent.\nB. Cinema is a powerful medium of storytelling.\nC. However, commercialization often compromises quality.\nD. It influences culture and public opinion.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces Cinema. A and D describe its positive roles/effects. C introduces the negative aspect ('However'). BADC is logical.",
        explanationBengali: "B সিনেমার পরিচয়। A ও D এর প্রভাব ও গুরুত্ব। C বাণিজ্যিকীকরণের কুফল। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1274", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. They act as the lungs of the Earth.\nB. The Amazon Rainforest produces 20% of the world's oxygen.\nC. Protecting it is crucial for fighting climate change.\nD. Yet, deforestation threatens its very existence.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the Amazon. A gives a metaphor for its function. D introduces the threat. C concludes with the need for protection. BADC fits best.",
        explanationBengali: "B আমাজন বনের পরিচয়। A একে পৃথিবীর ফুসফুস বলা। D ধ্বংসের হুমকি। C রক্ষার প্রয়োজনীয়তা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1275", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She practiced her lines in front of a mirror.\nB. The school play was just a week away.\nC. On the day of the show, she performed perfectly.\nD. Lily was nervous about her role.",
        options: ["BDAC", "BADC", "BCAD", "BACD"],
        correctIndex: 0,
        explanation: "B sets the time context. D introduces the character's feeling. A is the preparation. C is the result. BDAC is correct.",
        explanationBengali: "B নাটকের সময় ঘনিয়ে আসা। D লিলির ভয়। A প্রস্তুতি (আয়নার সামনে প্র্যাকটিস)। C সফল অভিনয়। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1276", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It is rich in vitamins and minerals.\nB. Spinach is a leafy green vegetable.\nC. Popeye, the cartoon character, made it famous.\nD. Eating it improves eyesight and boosts immunity.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces Spinach. A describes its nutrients. D explains the health benefits. C adds a cultural fact. BACD is a good flow.",
        explanationBengali: "B পালং শাকের পরিচয়। A পুষ্টিগুণ। D উপকারিতা। C কার্টুন চরিত্রের উল্লেখ। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1277", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He quickly climbed up a tree to save himself.\nB. A bear appeared from behind the bushes.\nC. Two friends were walking through a forest.\nD. The other friend lay down and pretended to be dead.",
        options: ["CBAD", "CABD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "C introduces the friends. B is the danger (bear). A describes the first friend's action. D describes the second friend's action. CBAD is the story.",
        explanationBengali: "C দুই বন্ধু। B ভাল্লুক আসা। A প্রথম বন্ধুর গাছে ওঠা। D দ্বিতীয় বন্ধুর মড়ার মতো পড়ে থাকা। সঠিক ক্রম CBAD।"
    },
    {
        id: "pj_1278", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This leads to a vicious cycle of borrowing.\nB. Many farmers fall into a debt trap.\nC. Unpredictable weather destroys their crops.\nD. They are forced to take loans to survive.",
        options: ["CBDA", "CDBA", "BCDA", "ACBD"],
        correctIndex: 0,
        explanation: "C starts with the root problem (weather). D explains the immediate result (loans). A explains the long-term consequence (cycle). B summarizes the situation (debt trap). CBDA is logical.",
        explanationBengali: "C আবহাওয়া ও ফসল হানি। D ঋণ নেওয়া। A ঋণের চক্র। B ঋণের ফাঁদে পড়া। সঠিক ক্রম CBDA।"
    },
    {
        id: "pj_1279", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It allows us to access information instantly.\nB. The smartphone is a marvel of modern technology.\nC. However, it can also be a major distraction.\nD. We can connect with anyone, anywhere.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the smartphone. A and D list its capabilities. C presents the drawback ('However'). BADC follows the standard structure.",
        explanationBengali: "B স্মার্টফোনের পরিচয়। A ও D এর সুবিধা। C এর অসুবিধা (মনোযোগ নষ্ট)। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1280", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She mixed flour, sugar, and eggs in a bowl.\nB. Mother decided to bake a cake for my birthday.\nC. The smell of fresh cake filled the house.\nD. She put the batter into the oven.",
        options: ["BADC", "BACD", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B is the decision. A is the mixing. D is baking. C is the result (smell). BADC is the correct sequence.",
        explanationBengali: "B কেক বানানোর সিদ্ধান্ত। A উপকরণ মেশানো। D ওভেনে দেওয়া। C কেকের সুগন্ধ। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1281", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It pumps blood to all parts of the body.\nB. The heart is a muscular organ.\nC. Keeping it healthy requires exercise and good diet.\nD. This blood carries oxygen and nutrients.",
        options: ["BADC", "BACD", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B defines the heart. A describes its function. D explains what the blood carries. C gives advice for health. BADC is correct.",
        explanationBengali: "B হৃদপিণ্ডের পরিচয়। A এর কাজ (রক্ত পাম্প করা)। D রক্তের কাজ। C হৃদপিণ্ড সুস্থ রাখার উপায়। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1282", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. They migrate thousands of miles every year.\nB. Monarch butterflies are known for their long journeys.\nC. Scientists are still studying how they navigate.\nD. They fly from Canada to Mexico for the winter.",
        options: ["BADC", "BACD", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the butterfly and its journey. A gives the distance. D specifies the route. C mentions the scientific mystery. BADC is logical.",
        explanationBengali: "B মনার্ক প্রজাপতির পরিচয়। A দীর্ঘ ভ্রমণের কথা। D নির্দিষ্ট রুট (কানাডা থেকে মেক্সিকো)। C বিজ্ঞানীদের গবেষণা। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1283", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He found a golden egg in its nest.\nB. A farmer had a magical goose.\nC. He thought the goose must be full of gold inside.\nD. Greedily, he killed the goose but found nothing.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the farmer and goose. A is the daily event. C is the greedy thought. D is the foolish action. BACD is the fable.",
        explanationBengali: "B কৃষক ও রাজহাঁস। A সোনার ডিম পাওয়া। C কৃষকের লোভ। D হাঁস মেরে ফেলা। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1284", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. This makes it difficult for pedestrians to walk.\nB. In many cities, sidewalks are occupied by vendors.\nC. City authorities are trying to clear these areas.\nD. They are forced to walk on the busy roads.",
        options: ["BADC", "BACD", "ADBC", "BCAD"],
        correctIndex: 0,
        explanation: "B states the problem (vendors). A explains the effect on pedestrians. D elaborates on the effect (walking on roads). C mentions the authority's action. BADC is correct.",
        explanationBengali: "B ফুটপাত দখল। A হাঁটার অসুবিধা। D রাস্তায় হাঁটা। C কর্তৃপক্ষের পদক্ষেপ। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1285", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He discovered the law of gravity.\nB. Isaac Newton was sitting under an apple tree.\nC. This incident led to a groundbreaking scientific theory.\nD. Suddenly, an apple fell on his head.",
        options: ["BDAC", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B sets the scene. D is the event (apple falling). A is the immediate realization/discovery. C explains the long-term impact. BDAC is correct.",
        explanationBengali: "B নিউটন আপেল গাছের নিচে। D আপেল পড়া। A মাধ্যাকর্ষণ আবিষ্কার। C বৈজ্ঞানিক তত্ত্ব। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1286", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It promotes physical and mental well-being.\nB. Sports play a crucial role in character building.\nC. Team sports teach cooperation and leadership.\nD. Everyone should participate in some form of sport.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the topic (Sports). A gives health benefits. C gives social benefits. D is the recommendation. BACD follows a good structure.",
        explanationBengali: "B খেলাধুলার ভূমিকা। A শারীরিক ও মানসিক উপকারিতা। C দলগত খেলার শিক্ষা। D সবার অংশগ্রহণ করা উচিত। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1287", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She watered the plants in the garden.\nB. It was a hot summer afternoon.\nC. The plants looked fresh and green afterwards.\nD. Meena noticed the flowers were drooping.",
        options: ["BDAC", "BADC", "BCAD", "ACBD"],
        correctIndex: 0,
        explanation: "B sets the time. D identifies the problem. A is the action. C is the result. BDAC is chronological.",
        explanationBengali: "B গরম দুপুর। D মিনা দেখল গাছগুলো ঝিমিয়ে পড়েছে। A সে পানি দিল। C গাছগুলো সতেজ হলো। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1288", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. They act as a barrier against coastal erosion.\nB. Mangroves are unique ecosystems found in intertidal zones.\nC. Their roots provide a nursery for young fish.\nD. Sadly, they are being cleared for aquaculture.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B defines Mangroves. A explains a protective function. C explains an ecological function. D introduces the threat. BACD is logical.",
        explanationBengali: "B ম্যানগ্রোভের পরিচয়। A ভূমিক্ষয় রোধ। C মাছের প্রজনন ক্ষেত্র। D ধ্বংসের কারণ। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1289", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He used his trunk to spray water on them.\nB. An elephant saw some children playing in the heat.\nC. The children laughed and enjoyed the shower.\nD. He walked to the nearby river and filled his trunk.",
        options: ["BDAC", "BADC", "BCAD", "ABCD"],
        correctIndex: 0,
        explanation: "B introduces the scene. D describes the elephant's preparation. A is the action (spraying). C is the reaction. BDAC is the story.",
        explanationBengali: "B হাতির বাচ্চাদের দেখা। D নদী থেকে পানি নেওয়া। A পানি ছিটানো। C বাচ্চাদের আনন্দ। সঠিক ক্রম BDAC।"
    },
    {
        id: "pj_1290", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. This leads to cleaner air and a healthier planet.\nB. Trees absorb carbon dioxide and release oxygen.\nC. Planting trees is one of the easiest ways to save the earth.\nD. We should organize tree plantation drives regularly.",
        options: ["CBAD", "CABD", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "C introduces the importance of planting trees. B explains the scientific reason. A explains the benefit. D suggests action. CBAD is correct.",
        explanationBengali: "C গাছ লাগানোর গুরুত্ব। B এর বৈজ্ঞানিক কারণ। A পরিবেশের উপকারিতা। D নিয়মিত গাছ লাগানোর আহ্বান। সঠিক ক্রম CBAD।"
    },
    {
        id: "pj_1291", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. He searched everywhere but couldn't find it.\nB. A merchant lost his purse in the market.\nC. A kind stranger found it and returned it to him.\nD. The merchant was overjoyed and thanked him.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B is the loss. A is the search. C is the recovery. D is the gratitude. BADC is the sequence.",
        explanationBengali: "B বনিকের ব্যাগ হারানো। A খোঁজাখুঁজি। C অপরিচিত ব্যক্তির ফেরত দেওয়া। D বনিকের ধন্যবাদ জানানো। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1292", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It keeps the body fit and the mind alert.\nB. Swimming is an excellent form of exercise.\nC. However, one should learn it under expert supervision.\nD. It engages all the major muscle groups.",
        options: ["BADC", "BACD", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces swimming. A mentions general benefits. D gives specific physical details. C gives a safety warning. BADC works best.",
        explanationBengali: "B সাঁতারের পরিচয়। A উপকারিতা। D পেশীর ব্যায়াম। C সতর্কবাণী। সঠিক ক্রম BADC।"
    },
    {
        id: "pj_1293", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. This helps to reduce the volume of waste sent to landfills.\nB. Waste management is a critical issue in urban areas.\nC. Segregation of waste at source is the first step.\nD. Organic waste can then be composted.",
        options: ["BCDA", "BCAD", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces the problem. C suggests the first step. D explains what to do with organic waste. A explains the result of these actions. BCDA is logical.",
        explanationBengali: "B বর্জ্য ব্যবস্থাপনা সমস্যা। C বর্জ্য পৃথকীকরণ। D জৈব বর্জ্যের ব্যবহার। A এর সুফল। সঠিক ক্রম BCDA।"
    },
    {
        id: "pj_1294", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. They are known for their loyalty and intelligence.\nB. Dogs have been human companions for thousands of years.\nC. They can be trained to perform various tasks.\nD. From guarding homes to guiding the blind, they do it all.",
        options: ["BACD", "BADC", "ABCD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the dog-human relationship. A describes qualities. C mentions trainability. D lists specific tasks. BACD is the correct flow.",
        explanationBengali: "B কুকুর ও মানুষের সম্পর্ক। A গুণাবলী (বিশ্বস্ততা)। C প্রশিক্ষণ। D কাজের উদাহরণ। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1295", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. The audience applauded loudly.\nB. The magician took a rabbit out of his hat.\nC. He bowed to the audience with a smile.\nD. The show began with a card trick.",
        options: ["DBAC", "DABC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "D starts the show. B is the main trick. A is the audience reaction. C is the magician's closing. DBAC follows the event.",
        explanationBengali: "D শো শুরু। B খরগোশ বের করা। A হাততালি। C জাদুকরের অভিবাদন। সঠিক ক্রম DBAC।"
    },
    {
        id: "pj_1296", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It is essential for the growth of any nation.\nB. Education empowers individuals to make better choices.\nC. Without it, progress is slow and difficult.\nD. Governments must prioritize funding for schools.",
        options: ["BADC", "BACD", "ABCD", "BCAD"],
        correctIndex: 1,
        explanation: "B introduces the value of education. A explains its impact on a nation. C explains the negative consequence of lacking it. D suggests government action. BACD is logical.",
        explanationBengali: "B শিক্ষার শক্তি। A জাতির উন্নতি। C শিক্ষার অভাবের কুফল। D সরকারের করণীয়। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1297", chapter: "Para Jumble", type: "jumble", difficulty: "hard", topic: "Sentence Rearrangement",
        question: "A. They are massive clouds of gas and dust.\nB. Nebulas are among the most beautiful objects in space.\nC. Stars are born within these clouds.\nD. Gravity pulls the gas together until it ignites.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces Nebulas. A defines them. C explains their function (star birth). D explains the process of star birth. BACD is correct.",
        explanationBengali: "B নেবুলার পরিচয়। A এর গঠন। C তারার জন্ম। D জন্ম প্রক্রিয়া। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1298", chapter: "Para Jumble", type: "jumble", difficulty: "easy", topic: "Sentence Rearrangement",
        question: "A. She packed her bag with clothes and snacks.\nB. Rina was going on a school trip.\nC. She woke up early in the morning.\nD. Her mother dropped her at the bus station.",
        options: ["BACD", "BCAD", "ACBD", "BADC"],
        correctIndex: 1,
        explanation: "B establishes the trip. C is waking up. A is packing. D is leaving. BCAD is the chronological order.",
        explanationBengali: "B স্কুল ট্রিপ। C ঘুম থেকে ওঠা। A ব্যাগ গোছানো। D বাস স্টেশনে যাওয়া। সঠিক ক্রম BCAD।"
    },
    {
        id: "pj_1299", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. It causes soil pollution and harms wildlife.\nB. Plastic waste takes hundreds of years to decompose.\nC. We should switch to biodegradable alternatives.\nD. Using paper or cloth bags is a good start.",
        options: ["BACD", "BADC", "ACBD", "BCAD"],
        correctIndex: 0,
        explanation: "B introduces the problem (decomposition). A explains the harm. C suggests a solution. D gives a specific example. BACD is correct.",
        explanationBengali: "B প্লাস্টিকের স্থায়িত্ব। A দূষণ ও ক্ষতি। C বিকল্প খোঁজা। D কাগজের ব্যাগ ব্যবহার। সঠিক ক্রম BACD।"
    },
    {
        id: "pj_1300", chapter: "Para Jumble", type: "jumble", difficulty: "moderate", topic: "Sentence Rearrangement",
        question: "A. He used the prize money to help the poor.\nB. A lottery ticket changed the life of a poor man.\nC. He won the first prize of one million dollars.\nD. Everyone in the village praised his generosity.",
        options: ["BCAD", "BADC", "CBAD", "ACBD"],
        correctIndex: 0,
        explanation: "B introduces the lottery ticket. C states the win. A describes what he did with the money. D is the social reaction. BCAD is the story.",
        explanationBengali: "B লটারি টিকিট। C পুরস্কার জয়। A গরিবদের সাহায্য। D মানুষের প্রশংসা। সঠিক ক্রম BCAD।"
    }
];






