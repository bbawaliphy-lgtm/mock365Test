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
    }
];




