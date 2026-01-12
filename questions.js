export const questionLibrary = [

    // --- SET 1: Subject-Verb Agreement (Easy/Moderate) ---
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
    }
];



