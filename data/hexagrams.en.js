(function() {
    "use strict";
    var HEXAGRAMS = [{
            "key": "qian",
            "num": 1,
            "upper": "☰",
            "lower": "☰",
            "upperName": "Heaven",
            "lowerName": "Heaven",
            "cardImg": "img/card-01-qian.png",
            "symbolLabel": "Will of Light",
            "core": "You are in a highly creative and driven phase. Your direction is clear, and you have the energy to begin something new. Trust your vision, but pair strength with restraint so your progress can last.",
            "plain": "I trust the light within me and move forward with courage.",
            "blessingText": "May you move with courage, stay true to your chosen path, and shine with steady purpose.",
            "yongJiuText": "When you stop trying to control or lead everything, the highest wisdom is to let things move naturally. By not forcing the outcome, you give others room to find their own way.",
            "main_state": "A new phase filled with creativity and opportunity",
            "main_strategy": "Use your momentum and take the next step",
            "support_risk": "Rushing ahead and missing important details",
            "support_warning": "Overconfidence",
            "focus": {
                "love": "You have strong energy in this relationship and can take the lead. Just avoid overwhelming the other person; real strength includes knowing when to ease back.",
                "career": "Your career momentum is strong, and this is a good time to pursue important goals. Stay focused on the right direction and do not let confidence push you past your principles.",
                "health": "Your energy and recovery are strong, but that can make it easy to ignore small warning signs. Strength also means knowing when to stop and recover.",
                "finances": "Your finances are on solid ground, with room to plan for growth. Move forward carefully, but do not mistake a good run for perfect judgment or take an all-or-nothing risk.",
                "relationships": "People notice your presence and may naturally follow your lead. Use that influence with respect and give others enough room to speak and act freely."
            },
            "guide": {
                "love": "Before expressing your feelings, consider whether the other person needs closeness or time to feel understood:\n• Keep the relationship equal; do not turn giving into proof of love.\n• Use your strength to protect the relationship, not control it.",
                "career": "Turn your goal into one clear first step:\n• Set firm boundaries before you push ahead.\n• Check your original purpose regularly so short-term momentum does not replace long-term direction.",
                "health": "Keep regular rest even when you feel energetic:\n• Ask what your body needs instead of how much longer you can push.\n• Treat recovery as seriously as activity.",
                "finances": "Keep a healthy buffer while pursuing growth:\n• Judge decisions by sound reasoning, not by whether things feel easy.\n• Do not let momentum override your risk limits.",
                "relationships": "Leave room for others to respond when you speak:\n• Notice whether people respect you or feel pressured by you.\n• Invite rather than command."
            }
        }, {
            "key": "kun",
            "num": 2,
            "upper": "☷",
            "lower": "☷",
            "upperName": "Earth",
            "lowerName": "Earth",
            "cardImg": "img/card-02-kun.png",
            "symbolLabel": "Mother Earth",
            "core": "Earth supports everything without force. This is not weakness, but quiet strength: stay open, steady, and willing to support what is growing. When your foundation is solid, life can develop naturally around you.",
            "plain": "I stay grounded and open, allowing life to grow at its own pace.",
            "blessingText": "May you stay gentle and grounded, support what life brings, and allow yourself to receive support too.",
            "yongLiuText": "Steady kindness and patience create lasting stability. By making room for life as it is, you move toward deeper security and abundance.",
            "main_state": "A more stable, supported, and accepting phase",
            "main_strategy": "Settle into a steady rhythm and build gradually",
            "support_risk": "Working quietly without seeing results yet",
            "support_warning": "Ignoring your own needs while trying to please others",
            "focus": {
                "love": "Your patience and care can give the relationship a strong foundation. Support the other person, but remember that your needs deserve support as well.",
                "career": "This is a time for steady, reliable work rather than chasing attention. Do your part well, support the team, and let trust build through consistency.",
                "health": "Your body benefits from a stable rhythm more than drastic changes. Focus on regular sleep, food, and movement, and let recovery happen gradually.",
                "finances": "Build wealth slowly and steadily. Consistent saving, sensible investing, and avoiding unnecessary risk will strengthen your financial base over time.",
                "relationships": "Your patience and warmth make people feel safe around you. Keep listening and supporting others, but set healthy boundaries so your kindness stays sustainable."
            },
            "guide": {
                "love": "Be patient and considerate with each other:\n• Remember that you also deserve care and support.\n• Let love deepen through mutual support.",
                "career": "Do your core work well and support the team's success:\n• Let your ability be seen without chasing attention.\n• Become someone others can rely on.",
                "health": "Care for your body in a gentle, consistent way:\n• Start with basic sleep and eating habits.\n• Give your body a stable setting for recovery.",
                "finances": "Save and invest steadily rather than chasing quick results:\n• Avoid aggressive, high-risk moves.\n• Let time do part of the work.",
                "relationships": "Listen and offer support when it is useful:\n• Set boundaries so kindness does not become exhaustion.\n• Make mutual support the basis of connection."
            }
        }, {
            "key": "zhun",
            "num": 3,
            "upper": "☵",
            "lower": "☳",
            "upperName": "Water",
            "lowerName": "Thunder",
            "cardImg": "img/card-03-zhun.png",
            "symbolLabel": "Breaking Ground",
            "core": "You are in the difficult early stage of something new. The path is unclear and resources may be limited, but this is not failure. Build the foundation, seek useful support, and let order emerge step by step.",
            "plain": "I trust that early confusion will pass as I build a strong foundation.",
            "blessingText": "May you keep hope through a difficult beginning and grow steadily from every small start.",
            "main_state": "A gradual process of building something from the ground up",
            "main_strategy": "Strengthen the foundation before expecting fast results",
            "support_risk": "Limited resources and stalled progress",
            "support_warning": "Making a decision before you are ready because you feel impatient",
            "focus": {
                "love": "This relationship is still new, so mixed signals are normal. Let trust and familiarity grow before pushing for clarity or commitment.",
                "career": "You are in an early building phase with limited resources. Stabilize the core structure and seek support before trying to expand.",
                "health": "Recovery may be slow and hard to measure. Protect rest and basic care instead of forcing your body back to its old pace.",
                "finances": "Your finances are still in a building stage. Avoid shortcuts and high-return bets; strengthen cash flow and capital first.",
                "relationships": "Some relationships still need time to develop. Stay sincere and present without forcing closeness before trust is ready."
            },
            "guide": {
                "love": "Do not rush to define the relationship:\n• Watch the other person's real pace and response.\n• Let steady presence replace repeated questions.",
                "career": "Stabilize the core structure before expanding:\n• Break large goals into visible small steps.\n• Connect with experienced people who can help.",
                "health": "Treat rest as part of the current plan:\n• Keep sleep and hydration steady.\n• Track small changes and long-term fatigue.",
                "finances": "Protect basic cash flow first:\n• Set clear monthly spending limits.\n• Start investing with small amounts you understand.",
                "relationships": "Choose steady sincerity over eager closeness:\n• Join settings where interaction can happen naturally.\n• Respect the other person's pace."
            }
        }, {
            "key": "meng",
            "num": 4,
            "upper": "☶",
            "lower": "☵",
            "upperName": "Mountain",
            "lowerName": "Water",
            "cardImg": "img/card-04-meng.png",
            "symbolLabel": "Morning Mist",
            "core": "You are facing something you do not fully understand yet. Do not rush to conclusions. Admit what you do not know, ask experienced people, and let clarity come through learning.",
            "plain": "I stay curious and willing to learn until the path becomes clear.",
            "blessingText": "May you keep an open mind and let understanding clear the fog ahead.",
            "main_state": "An opportunity to learn and gain useful insight",
            "main_strategy": "Stay humble and ask people who know more",
            "support_risk": "Misjudging the situation because you do not understand it yet",
            "support_warning": "Pushing away useful guidance because you are too attached to your own view",
            "focus": {
                "love": "Some parts of this relationship are still unclear. Ask directly instead of guessing, and use honest interaction to understand what each of you really wants.",
                "career": "You may need to learn again before moving faster. Break unfamiliar problems into smaller parts and ask experienced people for practical guidance.",
                "health": "Small symptoms may be telling you to review habits you usually ignore. Track patterns and seek professional assessment instead of guessing or pushing through.",
                "finances": "You may not fully understand every cost or risk yet. Learn first, organize the basics, and avoid products you cannot clearly explain.",
                "relationships": "Confusion may come from unclear expectations rather than bad intent. Confirm vague arrangements instead of filling the gaps with assumptions."
            },
            "guide": {
                "love": "Ask directly about what is unclear:\n• Check facts before creating a story around mixed signals.\n• Know what matters most to you before deciding what comes next.",
                "career": "Break unfamiliar work into smaller questions:\n• Ask someone experienced for specific guidance.\n• Make the basic process work before trying to scale it.",
                "health": "Understand your actual condition before changing your routine:\n• Track sleep, food, and when symptoms appear.\n• Get professional evaluation for persistent or repeated problems.",
                "finances": "Review fees, terms, and risks before committing:\n• Check recent spending for hidden leaks.\n• Avoid products you do not understand.",
                "relationships": "Confirm vague promises or plans:\n• Observe unfamiliar situations before reacting.\n• State your boundaries simply and clearly."
            }
        }, {
            "key": "xu",
            "num": 5,
            "upper": "☵",
            "lower": "☰",
            "upperName": "Water",
            "lowerName": "Heaven",
            "cardImg": "img/card-05-xu.png",
            "symbolLabel": "Waiting for Rain",
            "core": "Some things need time to mature. Waiting is not stagnation; it is part of preparation. Use this period to steady yourself and fill the gaps so you are ready when the timing improves.",
            "plain": "I wait with patience and use the time to prepare well.",
            "blessingText": "May you stay at ease while you wait and trust that the right conditions will arrive in time.",
            "main_state": "Clarity that arrives once conditions are ready",
            "main_strategy": "Use the waiting period to prepare instead of forcing progress",
            "support_risk": "Growing impatient and acting too early",
            "support_warning": "Rushing for results",
            "focus": {
                "love": "This relationship may be developing more slowly than you want. Do not force an answer; keep living well and let the other person move at a natural pace.",
                "career": "Important conditions are not ready yet, so pushing harder may only waste effort. Use the pause to strengthen resources, skills, and preparation.",
                "health": "Recovery has its own pace. Consistent rest and care are more useful than trying to force your body back to normal quickly.",
                "finances": "The opportunity is not clear enough yet. Keep cash and a safety margin available instead of acting from anxiety or fear of missing out.",
                "relationships": "Trust takes time. Be reliable and sincere without trying to speed up closeness before the other person is ready."
            },
            "guide": {
                "love": "Move your attention from when they will respond to how you can stay grounded:\n• Keep building a full life while you wait.\n• Do not push the relationship because of anxiety.",
                "career": "List the conditions that are still missing:\n• Keep building skill and resources.\n• Be patient with parts that cannot move yet.",
                "health": "Repeat the care that is already helping:\n• Focus on what supports you now instead of watching progress constantly.\n• Give your body enough time to repair.",
                "finances": "Treat unused cash as optionality, not wasted time:\n• Improve knowledge and your safety margin while waiting.\n• Do not follow the crowd out of impatience.",
                "relationships": "Be steady instead of pushing for closeness:\n• Respect the other person's pace.\n• Keep showing up as yourself."
            }
        }, {
            "key": "song",
            "num": 6,
            "upper": "☰",
            "lower": "☵",
            "upperName": "Heaven",
            "lowerName": "Water",
            "cardImg": "img/card-06-song.png",
            "symbolLabel": "End the Conflict",
            "core": "You are in a tense situation where each side believes it is right. Proving who is right may cost more than it solves. Step back, clarify the real issue, and use a neutral third party when needed.",
            "plain": "I let go of the need to prove myself and resolve conflict with calm judgment.",
            "blessingText": "May you leave unnecessary arguments behind and save your energy for what truly matters.",
            "main_state": "A situation gradually moving toward resolution",
            "main_strategy": "Stop feeding the conflict and focus on what matters",
            "support_risk": "Getting pulled back into proving who is right",
            "support_warning": "Turning a small issue into a larger fight because you do not want to lose",
            "focus": {
                "love": "Both sides may feel justified. Stop trying to win long enough to hear what each person actually cares about.",
                "career": "Disputes over roles, interests, or ideas need clear facts and boundaries. Look for the smallest workable agreement before escalating.",
                "health": "Conflicting health advice can be confusing. Compare reliable evidence and ask qualified professionals about the points that disagree.",
                "finances": "Money disputes need records, not memory. Put terms in writing and reconcile the numbers before the disagreement grows.",
                "relationships": "Not every argument needs a winner. Create space, let emotions settle, and return to the issue when the conversation can be useful."
            },
            "guide": {
                "love": "Decide whether the issue is worth continuing to fight over:\n• Discuss one core problem at a time.\n• Pause when the conversation starts repeating.",
                "career": "Turn verbal disagreements into clear facts and records:\n• Find the smallest point both sides can accept.\n• Try neutral mediation before the conflict escalates.",
                "health": "Compare conflicting advice against reliable evidence:\n• Ask qualified professionals about contradictions.\n• Avoid changing many treatments at once.",
                "finances": "Keep written records of payments, loans, and agreements:\n• Pause new transactions involving disputed amounts.\n• Seek professional advice for major disputes.",
                "relationships": "End circular arguments when they stop being productive:\n• Speak directly with the person involved.\n• Do not recruit others to take sides."
            }
        }, {
            "key": "shi",
            "num": 7,
            "upper": "☷",
            "lower": "☵",
            "upperName": "Earth",
            "lowerName": "Water",
            "cardImg": "img/card-07-shi.png",
            "symbolLabel": "Order in Formation",
            "core": "The goal in front of you needs discipline and organization, not solo effort. Set clear rules, define roles, and lead by example so everyone can move in the same direction.",
            "plain": "I prepare with discipline and help people move toward a shared goal.",
            "blessingText": "May you find reliable people to stand beside you and work toward a common purpose.",
            "main_state": "People gathering around a shared goal",
            "main_strategy": "Create clear rules and move together",
            "support_risk": "Different working rhythms that still need coordination",
            "support_warning": "Skipping communication or discipline because you want faster progress",
            "focus": {
                "love": "The relationship needs clearer expectations and boundaries. Agree on what matters instead of using silence or emotion to punish each other.",
                "career": "This is a time for organized action. Write down goals, owners, and deadlines so effort turns into coordinated progress.",
                "health": "Improvement needs consistency more than occasional intensity. Keep regular sleep, activity, and recovery and track them simply.",
                "finances": "Give each part of your money a clear purpose. A simple system for spending, saving, and long-term goals can reduce financial anxiety.",
                "relationships": "You may need to coordinate or lead others. Good leadership gives people a shared direction and treats problems as issues to solve, not people to blame."
            },
            "guide": {
                "love": "Agree on boundaries for important issues:\n• Clarify who handles shared responsibilities.\n• Solve the issue instead of punishing each other with distance.",
                "career": "Write down goals, owners, and deadlines:\n• Keep responsibilities clearly defined.\n• Review progress regularly and correct drift early.",
                "health": "Keep regular times for sleep, movement, and rest:\n• Track consistency instead of chasing perfection.\n• Continuity matters more than one hard session.",
                "finances": "Separate income into living costs, savings, and long-term goals:\n• Review assets and debt monthly.\n• Set rules before large spending.",
                "relationships": "Clarify the shared goal and roles before working together:\n• Address problems without humiliating people.\n• Apply basic standards consistently."
            }
        }, {
            "key": "bi",
            "num": 8,
            "upper": "☵",
            "lower": "☷",
            "upperName": "Water",
            "lowerName": "Earth",
            "cardImg": "img/card-08-bi.png",
            "symbolLabel": "Mutual Alliance",
            "core": "This is a good time to build sincere, supportive connections. Choose people whose values fit yours, reach out with goodwill, and keep enough judgment to avoid relationships that only drain you.",
            "plain": "I open myself to sincere connection and share strength through mutual support.",
            "blessingText": "May you be surrounded by trustworthy people and become someone others feel safe approaching.",
            "main_state": "An opportunity to build sincere and lasting connections",
            "main_strategy": "Reach out openly and sincerely",
            "support_risk": "Hesitating because you are unsure whether to get closer",
            "support_warning": "Missing a trustworthy relationship because you are afraid of being hurt",
            "focus": {
                "love": "A good relationship is a mutual choice, not something held together by force. Invest openly while watching whether the other person responds with the same steadiness.",
                "career": "Collaboration can take you further than working alone. Choose compatible partners, define shared goals and rewards, and invest in relationships worth keeping.",
                "health": "Support can make healthy habits easier to maintain. Let family, friends, or qualified professionals help when useful.",
                "finances": "Good financial partnerships can multiply resources, but poor ones multiply risk. Align expectations and put money and responsibilities in writing.",
                "relationships": "You do not need a large circle. Invest in a few relationships where support is mutual and reduce social ties that only consume energy."
            },
            "guide": {
                "love": "Spend real time with people you value:\n• Notice whether effort is mutual.\n• Reassess relationships that stay one-sided.",
                "career": "Work with people whose skills complement yours:\n• Clarify shared goals and rewards before starting.\n• Build long-term partnerships instead of constantly starting over.",
                "health": "Find a supportive exercise or lifestyle partner:\n• Accept help from family or professionals when needed.\n• Share progress with people who encourage you.",
                "finances": "Align financial values before investing together:\n• Put amounts and responsibilities in writing.\n• Prefer partners with a proven record of reliability.",
                "relationships": "Maintain a few important relationships actively:\n• Spend real time with people you trust.\n• Reduce social ties that only drain you."
            }
        }, {
            "key": "xiaoxu",
            "num": 9,
            "upper": "☴",
            "lower": "☰",
            "upperName": "Wind",
            "lowerName": "Heaven",
            "cardImg": "img/card-09-xiaoxu.png",
            "symbolLabel": "Gathering Breeze",
            "core": "Your strength is still building and may not be enough for a major push yet. Work patiently on small details, skills, and resources. When enough has accumulated, larger progress will come naturally.",
            "plain": "I build strength patiently and let small steps create lasting change.",
            "blessingText": "May you notice steady improvement in small gains and move without rushing.",
            "main_state": "A stage of small gains before a full push",
            "main_strategy": "Build strength a little at a time",
            "support_risk": "Minor friction or temporary blockage",
            "support_warning": "Forcing progress because you want results faster",
            "focus": {
                "love": "The relationship is growing but is not ready for a major leap. Steady daily care matters more than a large promise right now.",
                "career": "You may not yet have enough resources for a breakthrough. Close small gaps, build capacity, and divide big goals into manageable steps.",
                "health": "Health often improves through small, repeated actions. Judge progress by longer trends rather than daily changes.",
                "finances": "Build gradually through steady saving or small investments. Reduce recurring waste and avoid large high-risk moves for now.",
                "relationships": "Trust is growing slowly. Keep in touch consistently, remember small details, and do not demand equal effort immediately."
            },
            "guide": {
                "love": "Focus on steady daily care:\n• Avoid rushing into a major commitment.\n• Fix small recurring problems before they grow.",
                "career": "Break large goals into steps you can finish this week:\n• Fix small process leaks early.\n• Do not expand beyond current resources.",
                "health": "Keep one small health habit every day:\n• Judge results by monthly trends.\n• Increase intensity only within what your body can adapt to.",
                "finances": "Save or invest a manageable amount each month:\n• Cut repeated small waste.\n• Avoid large high-risk moves for now.",
                "relationships": "Keep steady contact with important people:\n• Remember and follow up on small things they mention.\n• Do not demand immediate equal effort."
            }
        }, {
            "key": "lu",
            "num": 10,
            "upper": "☰",
            "lower": "☱",
            "upperName": "Heaven",
            "lowerName": "Lake",
            "cardImg": "img/card-10-lu.png",
            "symbolLabel": "Treading Carefully",
            "core": "You are moving through a situation that looks ordinary but carries real risk. Respect limits, follow the rules, and act with care. Good judgment can make a difficult path safe.",
            "plain": "I move with care and respect, staying steady through risk.",
            "blessingText": "May each careful step carry you safely through the narrow path ahead.",
            "main_state": "A path you can cross safely by staying careful",
            "main_strategy": "Move carefully, one step at a time",
            "support_risk": "A tense situation that requires extra care",
            "support_warning": "Taking unnecessary risks because you become careless",
            "focus": {
                "love": "Timing and boundaries matter. Check whether the other person is ready before raising sensitive topics, and do not turn enthusiasm into pressure.",
                "career": "Rules may be strict and mistakes costly. Confirm procedures, keep records around high-responsibility work, and do not overstep your authority.",
                "health": "When recovering or trying something new, start low and observe your response. If pain clearly worsens, step back instead of pushing through.",
                "finances": "Stay within clear risk limits. Avoid leverage you cannot absorb and review terms before any major transaction.",
                "relationships": "With sensitive or powerful people, respectful communication matters. Be polite, state boundaries clearly, and avoid embarrassing someone publicly."
            },
            "guide": {
                "love": "Check whether the other person is ready to discuss important issues:\n• Do not pressure them for an immediate answer.\n• Clarify sensitive boundaries in advance.",
                "career": "Confirm rules and authority before important work:\n• Keep clear records when dealing with high-responsibility people.\n• Do not overreach in unfamiliar areas.",
                "health": "Start new activities at low intensity:\n• Check how your body responds the next day.\n• Step back if pain clearly worsens.",
                "finances": "Set clear limits for each investment and loss:\n• Do not use leverage you cannot afford.\n• Review terms before major transactions.",
                "relationships": "Think before raising sensitive topics:\n• Stay polite while stating clear boundaries.\n• Do not deliberately embarrass people in public."
            }
        }, {
            "key": "tai",
            "num": 11,
            "upper": "☷",
            "lower": "☰",
            "upperName": "Earth",
            "lowerName": "Heaven",
            "cardImg": "img/card-11-tai.png",
            "symbolLabel": "Harmony of Heaven and Earth",
            "core": "Conditions are flowing well and obstacles are easing. Resources and support are easier to access, making this a strong time to act. Use the opening, but stay humble and alert so good conditions become a lasting foundation.",
            "plain": "I welcome a period of smooth progress and share its benefits with others.",
            "blessingText": "May life move with greater ease and may your relationships support mutual growth.",
            "main_state": "A favorable period with support, resources, and smoother progress",
            "main_strategy": "Use the opportunity and bring others forward with you",
            "support_risk": "Becoming too comfortable and forgetting to prepare for change",
            "support_warning": "Losing caution or humility because things are going well",
            "focus": {
                "love": "Communication is becoming easier and the relationship may feel more cooperative. Use the stable period to discuss a shared future and show appreciation.",
                "career": "Resources and cooperation are flowing more easily. Move mature plans forward, combine available support, and turn what works into repeatable process.",
                "health": "Your overall condition may be returning to balance. Keep what is working and increase activity gradually rather than overdoing it because you feel better.",
                "finances": "Income, resources, or cooperation may be improving. Expand carefully, direct extra income toward long-term goals, and keep existing risk controls.",
                "relationships": "People may be more open to connection and repair. Reach out to important relationships and respond promptly to goodwill."
            },
            "guide": {
                "love": "Discuss one shared future goal while things are stable:\n• Thank the other person for recent effort.\n• Keep the habits that are working in the relationship.",
                "career": "Prioritize plans that are already mature:\n• Combine available resources and people.\n• Turn successful cooperation into repeatable process.",
                "health": "Keep routines that are working:\n• Increase activity gradually after improvement.\n• Notice which habits help your overall condition most.",
                "finances": "Direct added income toward long-term goals:\n• Add modestly to mature plans when appropriate.\n• Keep your original risk controls.",
                "relationships": "Reconnect with one important person who has become distant:\n• Create settings where different groups can meet naturally.\n• Respond to goodwill when it appears."
            }
        }, {
            "key": "pi",
            "num": 12,
            "upper": "☰",
            "lower": "☷",
            "upperName": "Heaven",
            "lowerName": "Earth",
            "cardImg": "img/card-12-pi.png",
            "symbolLabel": "Closed Passage",
            "core": "Heaven and earth are out of alignment, making communication and progress difficult. This is a temporary period of resistance. Do not force things forward. Protect your standards, focus on what you can control, and wait for conditions to change.",
            "plain": "I stay true to myself through difficult times and wait for the way to open.",
            "blessingText": "May you stay grounded through the low point and trust that this phase will pass.",
            "main_state": "A blocked situation that is only temporary",
            "main_strategy": "Stay steady and wait for conditions to change",
            "support_risk": "A discouraging period of setbacks or exclusion",
            "support_warning": "Taking the wrong shortcut out of impatience",
            "focus": {
                "love": "Communication may feel strained and distance may be growing. Do not force progress. Settle your emotions first, then address the real issue when both sides are ready to talk.",
                "career": "Support may be limited and good ideas may be hard to move forward. Focus on what you can control, keep solid records, and pause plans that depend heavily on outside support.",
                "health": "Progress may feel slow even when you are trying hard. Keep sleep, meals, and basic activity steady, and avoid constantly changing your recovery plan.",
                "finances": "Money or opportunities may feel tight. Protect your safety first: build cash reserves, delay large nonessential spending, and avoid high-risk attempts to recover losses quickly.",
                "relationships": "People may be harder to understand right now. Step back from high-conflict situations and give your time to the few people you can trust."
            },
            "guide": {
                "love": "Pause repeated arguments that go nowhere:\n• Sort out your own feelings and needs first.\n• Return to the core issue when both sides are ready.",
                "career": "Focus on work you can control:\n• Keep important results and records.\n• Delay plans that rely heavily on outside support.",
                "health": "Keep sleep, meals, and basic activity steady:\n• Give your body time before changing recovery methods.\n• Seek a new professional evaluation if progress stays stalled.",
                "finances": "Build a larger cash buffer:\n• Pause nonessential large expenses.\n• Do not chase high-risk recovery out of anxiety.",
                "relationships": "Reduce time spent on high-conflict topics:\n• Stay close to a few trusted people.\n• Stop repeating explanations to people who are not ready to listen."
            }
        }, {
            "key": "tongren",
            "num": 13,
            "upper": "☰",
            "lower": "☲",
            "upperName": "Heaven",
            "lowerName": "Fire",
            "cardImg": "img/card-13-tongren.png",
            "symbolLabel": "Shared Purpose",
            "core": "This is a time to cross boundaries and connect with people openly. Let go of narrow divisions and work with those who share the same purpose. Honest cooperation can create more than any one person could alone.",
            "plain": "I stay open to others and move forward through shared purpose.",
            "blessingText": "May you meet people who share your direction and build something lasting together.",
            "main_state": "Meeting people who share your goals and want to work together",
            "main_strategy": "Seek cooperation with openness and honesty",
            "support_risk": "Distrust or divisions between small groups",
            "support_warning": "Closing yourself off because you fear being hurt",
            "focus": {
                "love": "A strong relationship grows from shared values and honest communication. Enjoy what you have in common, but stay open about major differences instead of hiding them for the sake of harmony.",
                "career": "This is a good time for collaboration, especially across teams or fields. Set a clear shared goal, bring different skills together, and keep information flowing.",
                "health": "Support can make healthy habits easier to sustain. Exercise with a friend, improve routines with family, or share progress in a supportive community.",
                "finances": "Good financial partnerships depend on transparency and shared interests. Agree on risk, returns, and responsibilities before committing money together.",
                "relationships": "Step beyond your usual circle and meet people with different backgrounds. Shared interests and goals can create valuable new connections."
            },
            "guide": {
                "love": "Do something you both enjoy:\n• Talk about the values and future you truly care about.\n• Be honest about major differences.",
                "career": "Work with people who bring different skills:\n• Define the shared goal before starting.\n• Share information regularly.",
                "health": "Exercise with a friend or set a shared health goal:\n• Improve a routine together with family.\n• Share progress in a supportive community.",
                "finances": "Agree on how gains and risks will be shared:\n• Exchange information with reliable people.\n• Keep joint finances clearly documented.",
                "relationships": "Join an activity related to your interests:\n• Meet people from different backgrounds.\n• Look for common ground before differences."
            }
        }, {
            "key": "dayou",
            "num": 14,
            "upper": "☲",
            "lower": "☰",
            "upperName": "Fire",
            "lowerName": "Heaven",
            "cardImg": "img/card-14-dayou.png",
            "symbolLabel": "Great Abundance",
            "core": "This is a period of strong resources, recognition, and results. Abundance lasts when it is used well rather than guarded tightly. Manage what you have with integrity, share where it helps, and let success strengthen more than just yourself.",
            "plain": "I receive abundance with gratitude and let what I have create value beyond myself.",
            "blessingText": "May you value what you have and use your abundance to benefit others as well.",
            "main_state": "A period of abundance and visible results",
            "main_strategy": "Stay humble and clear-headed as things go well",
            "support_risk": "The temptation to show off or keep all the rewards",
            "support_warning": "Forgetting gratitude and sharing because you have more",
            "focus": {
                "love": "The relationship is stable and mutually supportive. Enjoy it, but do not take the other person's effort for granted. Express appreciation and keep investing in what works.",
                "career": "Your work is producing results and more resources are becoming available. Think bigger, but share credit and opportunity with the team instead of holding everything yourself.",
                "health": "Your energy is relatively strong. Use this period to build lasting habits rather than spending that energy carelessly. Keep exercise and nutrition consistent.",
                "finances": "Finances may be in a strong phase. Keep discipline while things are good: move part of gains toward long-term goals and do not let spending rise too quickly.",
                "relationships": "You have people around you who are willing to support you. Return that support, connect others with useful resources, and keep the positive cycle moving."
            },
            "guide": {
                "love": "Say thank you and make the other person's effort visible:\n• Keep investing in what is working.\n• Do not become careless because things feel easy.",
                "career": "Share credit and resources with the team:\n• Strengthen key systems while resources are available.\n• Grow without abandoning your standards.",
                "health": "Build routine while your condition is good:\n• Keep exercise and nutrition consistent.\n• Use regular checkups to stay informed.",
                "finances": "Move part of gains into long-term savings:\n• Keep the same spending discipline when income rises.\n• Research new investments before committing.",
                "relationships": "Give back to people who helped you:\n• Connect useful resources with people who need them.\n• Value people who are willing to tell you the truth."
            }
        }, {
            "key": "qian_modest",
            "num": 15,
            "upper": "☷",
            "lower": "☶",
            "upperName": "Earth",
            "lowerName": "Mountain",
            "cardImg": "img/card-15-qian_modest.png",
            "symbolLabel": "Quiet Humility",
            "core": "A mountain hidden beneath the earth represents strength without display. Even when you have achieved a great deal, humility protects you from needless resistance. You do not need to boast or claim every credit. Staying grounded helps you go farther.",
            "plain": "I stay grounded in success and let my strength speak without display.",
            "blessingText": "May you keep a humble heart and earn respect without needing to seek attention.",
            "main_state": "Moving through the challenge safely by staying humble",
            "main_strategy": "Do not rush to stand out; respond with a softer approach",
            "support_risk": "The urge to prove yourself or seek recognition",
            "support_warning": "Losing your humility because you want to be noticed",
            "focus": {
                "love": "Relationships feel better when neither person needs to prove their position. Listen more, keep less score, and let mutual respect carry more weight than being right.",
                "career": "Your recent performance may be strong, which makes staying low-key even more useful. Share credit with the team and avoid drawing unnecessary resistance through self-promotion.",
                "health": "Listen to your body instead of trying to prove toughness. Rest when you are tired and adjust the pace when needed.",
                "finances": "Keep finances steady and understated. Real security does not need to be displayed. Continue building without spending for status.",
                "relationships": "A humble manner opens many doors. You do not need to be first or know everything; recognize other people's strengths and admit what you still have to learn."
            },
            "guide": {
                "love": "Listen before insisting on who is right:\n• Take responsibility for your own emotions.\n• Offer presence before advice.",
                "career": "Share credit with the team:\n• Stabilize results before promoting them widely.\n• Ask, listen, and learn from others.",
                "health": "Rest when tired instead of forcing through it:\n• Respect your limits and adjust the pace.\n• Favor consistency over perfection.",
                "finances": "Keep financial success low-key:\n• Spend for real needs, not appearances.\n• Keep building steadily over time.",
                "relationships": "Praise other people's strengths sincerely:\n• Admit when you do not know something.\n• Let others go first when it costs you little."
            }
        }, {
            "key": "yu",
            "num": 16,
            "upper": "☳",
            "lower": "☷",
            "upperName": "Thunder",
            "lowerName": "Earth",
            "cardImg": "img/card-16-yu.png",
            "symbolLabel": "Joyful Momentum",
            "core": "This is a good time to celebrate, share, and enjoy what is going well. Joy can create energy and connection, but it can also make you careless. Enjoy the moment while keeping enough discipline for what comes next.",
            "plain": "I welcome joy without losing my balance.",
            "blessingText": "May your life find a steady, uplifting rhythm and give you real reasons to feel glad.",
            "main_state": "Something worth enjoying, with a reminder not to get carried away",
            "main_strategy": "Enjoy the good moment without losing awareness or discipline",
            "support_risk": "Relaxing so much that you miss what still needs attention",
            "support_warning": "Making a careless decision because you feel good",
            "focus": {
                "love": "The mood between you is light and enjoyable. Create good memories together, but do not use a pleasant atmosphere to avoid important conversations.",
                "career": "Team morale is strong and progress is easier. Celebrate milestones, then use that energy to move important work forward and prepare for the next challenge.",
                "health": "A good mood can support better habits. Enjoy yourself without overdoing it, and combine fun with regular sleep and activity.",
                "finances": "There may be income or gains worth celebrating. Set a clear budget for enjoyment so a good moment does not weaken long-term security.",
                "relationships": "Social energy is high and invitations may increase. Enjoy the activity, but keep time for the people who matter after the crowd goes home."
            },
            "guide": {
                "love": "Plan something enjoyable together:\n• Use a good moment to raise an important topic gently.\n• Show appreciation while things feel good.",
                "career": "Use strong morale to move key work forward:\n• Celebrate progress and clarify the next challenge.\n• Do not let a relaxed mood become loose discipline.",
                "health": "Combine enjoyable activities with regular routines:\n• Set limits during celebrations so you do not overextend.\n• Use positive energy to support movement.",
                "finances": "Set a clear budget for fun and celebration:\n• Save first when extra money comes in.\n• Wait a night before an impulse purchase.",
                "relationships": "Enjoy gatherings but keep time for important people:\n• Invite friends into activities you genuinely enjoy.\n• Strengthen relationships after the excitement passes."
            }
        }, {
            "key": "sui",
            "num": 17,
            "upper": "☱",
            "lower": "☳",
            "upperName": "Lake",
            "lowerName": "Thunder",
            "cardImg": "img/card-17-sui.png",
            "symbolLabel": "Flow with Change",
            "core": "Change is the constant right now. Instead of resisting it, adjust with the situation while keeping your own principles. Following the flow does not mean following blindly; stay flexible without losing your center.",
            "plain": "I move with change and find my rhythm through flexibility.",
            "blessingText": "May you move with life instead of forcing it, and find unexpected joy along the way.",
            "main_state": "A time to adapt and revise your plans",
            "main_strategy": "Stay open and adjust with the situation",
            "support_risk": "Uncertainty about what or whom to follow",
            "support_warning": "Staying comfortable when change is already needed",
            "focus": {
                "love": "The relationship is adjusting as your needs or routines change. Be willing to meet each other halfway, but do not lose yourself; communicate what matters with calm firmness.",
                "career": "Your environment or team direction may be changing, so old methods may no longer fit. Adapt to the new direction while keeping your standards and professional judgment.",
                "health": "Your body may shift with changes in daily life. Adjust your routine as needed, but keep basic anchors such as sleep and regular meals.",
                "finances": "Financial conditions may be changing. Review your allocation and adapt when needed, but do not chase every trend or abandon your investment rules.",
                "relationships": "Your social circle may be changing. Stay open to new interactions, but keep your boundaries and do not force yourself to fit in."
            },
            "guide": {
                "love": "Match the other person's pace and observe how the relationship changes:\n• Discuss important needs calmly and clearly.\n• Recheck what matters most to both of you.",
                "career": "Adjust to the new direction instead of clinging to the old plan:\n• Keep your standards while adapting.\n• Use change to reallocate time and resources.",
                "health": "Adjust your pace to what your body needs now:\n• Protect sleep and meal routines when your schedule changes.\n• Do not switch methods after every small fluctuation.",
                "finances": "Review your allocation instead of clinging to the old plan:\n• Adapt without chasing every market move.\n• Keep more cash available during uncertain periods.",
                "relationships": "Stay present and let go of fixed assumptions:\n• Do not force yourself to fit in.\n• Stay open to connections that arise naturally."
            }
        }, {
            "key": "gu",
            "num": 18,
            "upper": "☶",
            "lower": "☴",
            "upperName": "Mountain",
            "lowerName": "Wind",
            "cardImg": "img/card-18-gu.png",
            "symbolLabel": "Repair and Renewal",
            "core": "Old problems do not disappear on their own; they deepen when left alone. This is a time to face neglected habits, debts, and patterns directly. Clear them with resolve so real renewal can begin.",
            "plain": "I face what has built up and create a fresh start through repair.",
            "blessingText": "May you have the courage to clear what has been neglected and begin again with less weight.",
            "main_state": "A time to address problems that have been postponed",
            "main_strategy": "Start clearing the issues that have built up",
            "support_risk": "Feeling the problems are too old or too large to fix",
            "support_warning": "Putting things off again because they feel troublesome",
            "focus": {
                "love": "Old issues may have been left unresolved for too long. Choose a calm moment, raise one issue at a time, and work through it instead of letting resentment keep building.",
                "career": "Longstanding process gaps, stalled projects, or unclear responsibilities may be draining the team. Review them one by one and clean up the old problems so work can move forward more easily.",
                "health": "Some warning signs may come from habits that have built up over time. Start with one change you have delayed the longest instead of waiting for the perfect time.",
                "finances": "Old bills, debts, or unclear shared expenses may need a full review. Reconcile what is outstanding, stop duplicate charges, and make the numbers clear again.",
                "relationships": "Old misunderstandings can turn into long silences. Open a direct conversation, clear up what happened, and reset boundaries where needed."
            },
            "guide": {
                "love": "Choose a calm time to reopen an old conversation:\n• Handle one issue at a time instead of reopening everything.\n• Own your part and invite the other person to adjust with you.",
                "career": "List unresolved problems and rank them by impact:\n• Fix the biggest process gaps first.\n• Clarify responsibilities where ownership is vague.",
                "health": "Change one long-delayed habit starting today:\n• Look for the routines behind ongoing fatigue.\n• Review progress by the week, not by the day.",
                "finances": "Review old balances and repeated charges:\n• Clarify debts and shared expenses.\n• Reconcile accounts monthly so problems do not build again.",
                "relationships": "Open an honest conversation about old tension:\n• Clear up misunderstandings and reset boundaries.\n• If the other person will not adjust, accept the relationship as it is."
            }
        }, {
            "key": "lin",
            "num": 19,
            "upper": "☷",
            "lower": "☱",
            "upperName": "Earth",
            "lowerName": "Lake",
            "cardImg": "img/card-19-lin.png",
            "symbolLabel": "Steady Approach",
            "core": "A period of growth is approaching, so this is a good time to prepare and act. Opportunity matters most when you are ready for it; strengthen the foundation now so you can handle what arrives.",
            "plain": "I move toward growth with steady steps and a solid foundation.",
            "blessingText": "May you receive steady support and offer the same care to the people growing beside you.",
            "main_state": "New opportunities are appearing, with room to lead or support others",
            "main_strategy": "Lead with sincerity, warmth, and steady presence",
            "support_risk": "A stage that still requires patience before results appear",
            "support_warning": "Rushing so much that you overlook the value of steady support",
            "focus": {
                "love": "The relationship is moving closer, and both of you may sense the next step. Express your intentions honestly and notice whether the other person is equally ready so progress remains mutual.",
                "career": "An important opportunity may be approaching through a promotion, project, or partnership. Prepare now by finishing current work well and closing any skill gaps.",
                "health": "This is a good time to act on a health plan you have been considering. Set one specific goal and use the current motivation to build a lasting habit.",
                "finances": "A new source of income or investment opportunity may be approaching. Review your cash position and knowledge first so you can judge it calmly when it appears.",
                "relationships": "New friendships or partnerships may be ready to deepen. Approach people you respect, be sincere, and give new connections room to develop naturally."
            },
            "guide": {
                "love": "Express your feelings and future plans clearly:\n• Notice whether the other person is ready for the next step.\n• Back your words with consistent action.",
                "career": "Do your current work well so you are ready when opportunity appears:\n• Identify the skills and resources you still need.\n• Ask for opportunities instead of waiting for them.",
                "health": "Start the health plan you have been postponing:\n• Choose one specific short-term goal.\n• Use current motivation to establish a repeatable habit.",
                "finances": "Review your cash position and financial knowledge in advance:\n• Research before acting on a new opportunity.\n• Decide how new income would support your goals.",
                "relationships": "Approach people you genuinely respect:\n• Let natural meetings develop into real connection.\n• Give new relationships time before defining them."
            }
        }, {
            "key": "guan",
            "num": 20,
            "upper": "☴",
            "lower": "☷",
            "upperName": "Wind",
            "lowerName": "Earth",
            "cardImg": "img/card-20-guan.png",
            "symbolLabel": "Clear Observation",
            "core": "This is a time to observe, understand, and reflect before acting. Step back far enough to see the whole picture, then look inward at your own motives and fears. Clear understanding leads to better action; impulse without clarity creates confusion.",
            "plain": "I observe clearly, understand the whole picture, and act with calm judgment.",
            "blessingText": "May you stay clear in the middle of noise and bring steadiness to the people around you.",
            "main_state": "Observe first, then decide after seeing the larger picture",
            "main_strategy": "Raise your perspective and do not get trapped by immediate details",
            "support_risk": "Making a poor judgment from an incomplete view",
            "support_warning": "Focusing only on what is close and missing the larger situation",
            "focus": {
                "love": "Do not rush to a conclusion or action. Give the relationship enough space to show what it really is, and notice your own position in it before deciding what to do.",
                "career": "Observation matters more than speed right now. Gather more information about projects, partnerships, and workplace dynamics before making a major move.",
                "health": "Track patterns before changing too much. Record sleep, food, mood, and symptoms for a week or two so you can see what may actually be connected.",
                "finances": "Extend the research period before making a financial decision. Study the asset and the broader trend instead of entering while the information is still incomplete.",
                "relationships": "Do not judge people only by first impressions or one story. Watch how they act in different situations and check your own assumptions before deciding how close to become."
            },
            "guide": {
                "love": "Give the relationship more time to reveal itself:\n• Do not decide from one moment or impulse.\n• Notice your own role and feelings clearly.",
                "career": "Collect enough information before a major decision:\n• Watch the environment and key people.\n• Use the pause to fill gaps in your knowledge.",
                "health": "Track symptoms and routines for one or two weeks:\n• Adjust only after you can see a pattern.\n• Keep your routine stable while observing.",
                "finances": "Extend the observation period before entering:\n• Study the asset and market trend in depth.\n• Seek a second opinion before a major decision.",
                "relationships": "Watch how people behave in different settings:\n• Check your own assumptions and bias.\n• Decide on distance only after you understand enough."
            }
        }, {
            "key": "shike",
            "num": 21,
            "upper": "☲",
            "lower": "☳",
            "upperName": "Fire",
            "lowerName": "Thunder",
            "cardImg": "img/card-21-shike.png",
            "symbolLabel": "Clear Judgment",
            "core": "This is a time for clear judgment and decisive action. The obstacle in front of you can be handled once you see the real issue. Act when action is needed, and let go when it is time to move on.",
            "plain": "I see the issue clearly and act with firm judgment.",
            "blessingText": "May you have the courage to clear what blocks your path and create space for clarity.",
            "main_state": "Obstacles can be cleared more smoothly with decisive action",
            "main_strategy": "Face the issue directly and remove what must be removed",
            "support_risk": "Tense or uncomfortable friction",
            "support_warning": "Avoiding a necessary issue because you fear conflict",
            "focus": {
                "love": "A long-standing issue may be holding the relationship back. Bring it into the open with honesty and care, then work on one practical solution together.",
                "career": "A clear obstacle can no longer be ignored. Identify the real cause and deal with it directly instead of working around it.",
                "health": "Your body may be giving a clear warning. Do not delay; address the symptom, get appropriate evaluation, and change what needs to change.",
                "finances": "A firm financial decision may be needed, such as cutting a loss or changing an arrangement. Face the numbers and act before the cost grows.",
                "relationships": "A boundary or unresolved frustration may need to be stated clearly. Speak early, calmly, and firmly instead of waiting until resentment builds."
            },
            "guide": {
                "love": "Name the core issue honestly without attacking:\n• Handle one problem at a time.\n• Set needed boundaries calmly and firmly.",
                "career": "Face the hardest obstacle directly:\n• Understand the root cause before choosing a response.\n• Once you decide, act.",
                "health": "Take clear warning signs seriously:\n• Make needed changes without delay.\n• Seek qualified professional advice when needed.",
                "finances": "Cut losses or adjust when the facts support it:\n• Do not add more out of frustration.\n• Set a clear deadline for decisions.",
                "relationships": "State boundaries before resentment builds:\n• Be firm without attacking.\n• After speaking clearly, leave room to reset."
            }
        }, {
            "key": "bi_adorn",
            "num": 22,
            "upper": "☶",
            "lower": "☲",
            "upperName": "Mountain",
            "lowerName": "Fire",
            "cardImg": "img/card-22-bi_adorn.png",
            "symbolLabel": "Grace and Form",
            "core": "This is a good time to improve presentation, appearance, and the way you communicate. Style should support substance, not replace it. When the foundation is real, good presentation adds value.",
            "plain": "I let simple beauty express what is genuine within me.",
            "blessingText": "May you enjoy beauty without losing touch with what is real.",
            "main_state": "Present yourself well while staying true to who you are",
            "main_strategy": "Improve the surface, but keep substance first",
            "support_risk": "Becoming too influenced by appearance or outside approval",
            "support_warning": "Losing yourself while trying to look impressive",
            "focus": {
                "love": "Small gestures and a little care can keep a relationship fresh. Enjoy the details, but do not let presentation replace honest connection.",
                "career": "Better presentation can help your work get noticed. Improve how you present and communicate, but make sure the content remains strong.",
                "health": "Looking after your appearance can lift your mood. Keep it simple and let good posture, comfort, and daily care support overall well-being.",
                "finances": "You may want to spend on appearance, decor, or quality-of-life upgrades. Set a budget and keep core finances secure before adding extras.",
                "relationships": "First impressions matter, especially in important settings. Present yourself well, but let sincerity and character do the deeper work."
            },
            "guide": {
                "love": "Add a little thoughtfulness or ritual:\n• Keep real conversation at the center.\n• Sincerity matters more than perfect presentation.",
                "career": "Improve how you present and communicate your work:\n• Make sure the substance is solid.\n• Build a professional image that reflects real ability.",
                "health": "Use simple self-care to support your mood:\n• Pay attention to posture and comfort.\n• Make self-care part of normal life.",
                "finances": "Set a budget for lifestyle upgrades:\n• Protect the financial basics first.\n• Choose quality over quantity.",
                "relationships": "Prepare your appearance and manner for important occasions:\n• Be genuine instead of performing.\n• Focus more on people than image."
            }
        }, {
            "key": "bo",
            "num": 23,
            "upper": "☶",
            "lower": "☷",
            "upperName": "Mountain",
            "lowerName": "Earth",
            "cardImg": "img/card-23-bo.png",
            "symbolLabel": "Quiet Release",
            "core": "What once supported you may be weakening. This is not the time to force expansion or fight the trend. Protect the foundation, reduce exposure, and wait for conditions to turn.",
            "plain": "I accept what is falling away and protect what still matters.",
            "blessingText": "May you trust that when something must end, space also opens for what comes next.",
            "main_state": "A period of decline that calls for stepping back",
            "main_strategy": "Notice the shift early and protect your position",
            "support_risk": "Holding on and refusing to face what is changing",
            "support_warning": "Staying in a situation that is already breaking down because you cannot let go",
            "focus": {
                "love": "The relationship may be losing warmth or changing shape. Do not force a surface appearance of stability; accept what is changing and return some attention to yourself.",
                "career": "Support or advantage may be fading. Protect core work, pause expansion, and conserve resources until conditions improve.",
                "health": "Energy may be lower and recovery slower. Reduce unnecessary strain, protect sleep and nutrition, and let recovery happen at a realistic pace.",
                "finances": "Income or assets may be under pressure. Protect principal, reduce unnecessary spending, and avoid high-risk attempts to win losses back quickly.",
                "relationships": "Some connections may naturally fade. Do not force them to stay; give more time to people who still show up with mutual care."
            },
            "guide": {
                "love": "Accept that the relationship is changing:\n• Put some attention back on yourself.\n• Discuss the next step when both sides are clear.",
                "career": "Protect core work and pause expansion:\n• Conserve resources instead of fighting the trend.\n• Keep building useful skills.",
                "health": "Reduce strain and protect sleep and nutrition:\n• Avoid quick-fix methods.\n• Allow recovery to be gradual.",
                "finances": "Protect principal and do not chase losses:\n• Reduce unnecessary spending and high risk.\n• Keep cash available for the next cycle.",
                "relationships": "Allow some relationships to fade naturally:\n• Invest in people who still walk with you.\n• Use quiet time to reconnect with yourself."
            }
        }, {
            "key": "fu",
            "num": 24,
            "upper": "☷",
            "lower": "☳",
            "upperName": "Earth",
            "lowerName": "Thunder",
            "cardImg": "img/card-24-fu.png",
            "symbolLabel": "Return of New Life",
            "core": "After a low period, energy is beginning to return. The new momentum is still small, so protect it and build steadily in the right direction. A good restart does not need to be dramatic.",
            "plain": "I return to the right path and begin again with steady intent.",
            "blessingText": "May you feel your energy return after the low point and find your direction again.",
            "main_state": "A chance to regain momentum and find your direction again",
            "main_strategy": "Notice when you drift and correct course early",
            "support_risk": "Some back-and-forth before the new direction feels stable",
            "support_warning": "Giving up on returning to the right path after one mistake",
            "focus": {
                "love": "There may be a real chance to reconnect. Do not try to recreate the past immediately; let trust and closeness rebuild from a new starting point.",
                "career": "The low period may be easing and a new direction is appearing. Start small, confirm the direction, and build momentum step by step.",
                "health": "Energy may be beginning to return. Support it with regular sleep, food, and gradual activity rather than sudden intensity.",
                "finances": "Finances may be stabilizing after a decline. Rebuild cash flow first and expand only after the foundation is steady.",
                "relationships": "A distant relationship may have a chance to recover. Offer goodwill if you still care, but approach the new beginning with a new mindset."
            },
            "guide": {
                "love": "Notice signs of genuine reconciliation:\n• Rebuild instead of trying to recreate the past.\n• Approach old issues with a new mindset.",
                "career": "Confirm the new direction before investing heavily:\n• Build stability before speed.\n• Turn renewed motivation into daily action.",
                "health": "Support your body with regular sleep and meals:\n• Increase activity gradually.\n• Let recovery build before raising intensity.",
                "finances": "Rebuild stable cash flow first:\n• Expand slowly after the recovery is clear.\n• Turn past mistakes into better rules.",
                "relationships": "Offer goodwill if the relationship still matters:\n• Keep the lesson without carrying the old hurt.\n• A real restart requires both sides to let go."
            }
        }, {
            "key": "wuwang",
            "num": 25,
            "upper": "☰",
            "lower": "☳",
            "upperName": "Heaven",
            "lowerName": "Thunder",
            "cardImg": "img/card-25-wuwang.png",
            "symbolLabel": "Pure Intent",
            "core": "This is a time to return to what is real. Unrealistic expectations and forced outcomes create resistance. Act with honest intent, follow sound principles, and avoid shortcuts. Simplicity brings steadiness.",
            "plain": "I act with honest intent, without forcing what is not meant to be.",
            "blessingText": "May you stay sincere and simple, letting life unfold without needless force.",
            "main_state": "Things move more smoothly when you stay sincere and grounded",
            "main_strategy": "Keep it simple, act honestly, and do not force the outcome",
            "support_risk": "An unexpected problem you did not cause but still have to face",
            "support_warning": "Becoming bitter because something unfair happened",
            "focus": {
                "love": "Sincerity matters more than strategy right now. Drop the script, speak plainly, and let the relationship develop at its own pace.",
                "career": "This is not the time for shortcuts. Do solid work, follow professional standards, and let steady progress speak for itself.",
                "health": "There is no magic shortcut to health. Focus on sleep, food, and appropriate movement, and respond to what your body actually needs.",
                "finances": "Be cautious of unusually high returns, perfect opportunities, or vague guarantees. If you do not understand it, do not invest in it.",
                "relationships": "Keep relationships simple and honest. Do not exaggerate or play games; time will reveal who is sincere."
            },
            "guide": {
                "love": "Drop the script and be yourself:\n• Speak openly without testing or manipulating.\n• Let the relationship find its natural pace.",
                "career": "Do the work properly without shortcuts:\n• Let go of unrealistic goals.\n• Follow sound rules and professional standards.",
                "health": "Return to basics: sleep, food, movement:\n• Avoid miracle claims.\n• Adjust to your body’s real needs.",
                "finances": "Be cautious of excessive returns or guarantees:\n• Avoid investments you do not understand.\n• Stay grounded in the basics.",
                "relationships": "Be sincere without exaggeration:\n• Let time reveal other people’s intentions.\n• Keep communication simple and direct."
            }
        }, {
            "key": "daxu",
            "num": 26,
            "upper": "☶",
            "lower": "☰",
            "upperName": "Mountain",
            "lowerName": "Heaven",
            "cardImg": "img/card-26-daxu.png",
            "symbolLabel": "Deep Reserve",
            "core": "This is a period for building strength, knowledge, and capacity. Do not rush to prove what you can do. Deepen your skills and prepare well so you can act fully when the timing is right.",
            "plain": "I build strength patiently and wait until I am ready to use it well.",
            "blessingText": "May this quiet period strengthen you for the moment when your preparation can fully unfold.",
            "main_state": "Building enough strength and preparation for a larger move",
            "main_strategy": "Keep developing your capacity and wait for the right opening",
            "support_risk": "A period that requires pausing and conserving energy",
            "support_warning": "Pushing ahead before the preparation is complete",
            "focus": {
                "love": "Trust needs time to deepen. Build shared experience and understand each other’s values before rushing into major promises.",
                "career": "Use this period to deepen your expertise, close skill gaps, and widen your perspective. Preparation now becomes leverage later.",
                "health": "Treat health as long-term maintenance. Build habits in food, movement, and sleep that you can actually sustain.",
                "finances": "This is a time to build capital and knowledge, not chase high returns. More reserves give you more options later.",
                "relationships": "Do not focus only on expanding your network. Invest in a few important relationships and let shared experience build trust."
            },
            "guide": {
                "love": "Build shared experience and trust:\n• Do not rush major commitments.\n• Learn each other’s values and goals.",
                "career": "Deepen your expertise while you have room:\n• Build real examples and experience.\n• Prepare before the larger opportunity arrives.",
                "health": "Build habits you can sustain:\n• Treat your body as a long-term asset.\n• Respect its limits.",
                "finances": "Keep building capital instead of chasing returns:\n• Improve your financial knowledge.\n• Preserve room for future opportunities.",
                "relationships": "Invest in a few important relationships:\n• Build trust through shared experience.\n• Let closeness develop over time."
            }
        }, {
            "key": "yi",
            "num": 27,
            "upper": "☶",
            "lower": "☳",
            "upperName": "Mountain",
            "lowerName": "Thunder",
            "cardImg": "img/card-27-yi.png",
            "symbolLabel": "Nourishment",
            "core": "Pay attention to what you take in and what you put out. Food, words, information, and habits all shape your condition. Choose what truly nourishes you and learn from reliable sources.",
            "plain": "I choose words, food, and habits that support my body and mind.",
            "blessingText": "May you care for yourself well and choose the people, habits, and inputs that truly support you.",
            "main_state": "Caring for yourself and the sources you depend on",
            "main_strategy": "Choose carefully what nourishes your body, mind, and life",
            "support_risk": "Using the wrong source of support and becoming more depleted",
            "support_warning": "Choosing too much or too quickly instead of what actually fits you",
            "focus": {
                "love": "A relationship grows through daily nourishment more than occasional intensity. Speak with care and build small habits that make both people feel supported.",
                "career": "Sustainable work depends on the right rhythm. Reduce what drains you, make room for learning, and stop treating burnout as productivity.",
                "health": "Health is shaped by what you take in and how you recover. Favor real nutrition, adequate rest, and less excess.",
                "finances": "Stable finances come from habits: spend within your means, save regularly, and direct money toward what truly matters.",
                "relationships": "Notice whether the people and information around you restore or drain you. Choose relationships and inputs that protect your energy."
            },
            "guide": {
                "love": "Use words that support rather than wound:\n• Pay attention to daily interaction, not only romance.\n• Build routines that work for both of you.",
                "career": "Balance work with recovery:\n• Reduce draining tasks and increase useful learning.\n• Learn from people worth learning from.",
                "health": "Notice whether your diet truly supports you:\n• Reduce excess and highly processed food.\n• Protect sleep and mental energy.",
                "finances": "Spend within your means:\n• Save regularly and cut mindless expenses.\n• Reserve money for long-term priorities.",
                "relationships": "Stay close to relationships that help you grow:\n• Notice what leaves you energized or drained.\n• Protect your attention and energy."
            }
        }, {
            "key": "daguo",
            "num": 28,
            "upper": "☱",
            "lower": "☴",
            "upperName": "Lake",
            "lowerName": "Wind",
            "cardImg": "img/card-28-daguo.png",
            "symbolLabel": "Bearing the Load",
            "core": "The load is heavier than usual, and ordinary methods may not be enough. This calls for courage and practical support. Carry what matters, but do not confuse responsibility with doing everything alone.",
            "plain": "I meet heavy responsibility with courage, judgment, and support.",
            "blessingText": "May you be supported while carrying what matters, so responsibility does not become isolation.",
            "main_state": "A demanding but worthwhile period of major responsibility",
            "main_strategy": "Strengthen the foundation and carry the load one step at a time",
            "support_risk": "Taking on more than you can safely sustain",
            "support_warning": "Trying to carry everything alone instead of seeking support",
            "focus": {
                "love": "The relationship may be under unusual pressure. Say when the load is too much and share responsibility instead of silently carrying it alone.",
                "career": "You may be facing a high-stakes task, tight deadline, or unusually large responsibility. Use the team and available resources instead of absorbing every burden yourself.",
                "health": "Heavy stress requires more attention to recovery, not less. Protect sleep, notice warning signs, and seek support when the load is affecting your health.",
                "finances": "Large expenses or debt may be creating pressure. Rework cash flow, cut what can be cut, and seek qualified help when the numbers are too tight to manage alone.",
                "relationships": "You may be supporting other people right now, but you also need support. Ask trusted people for help before your own capacity is exhausted."
            },
            "guide": {
                "love": "Say when the pressure is too much:\n• Share the load.\n• Express stress before it turns into resentment.",
                "career": "Use the team and available resources:\n• Use different methods when normal ones are not enough.\n• Handle the most critical issue first.",
                "health": "Protect sleep and recovery under stress:\n• Ask for support.\n• Take warning signs seriously.",
                "finances": "Rework cash flow and reduce pressure:\n• Seek professional financial help if needed.\n• Stabilize first, then plan long term.",
                "relationships": "Remember that you also need support:\n• Ask trusted people for help.\n• Care for yourself while caring for others."
            }
        }, {
            "key": "kan",
            "num": 29,
            "upper": "☵",
            "lower": "☵",
            "upperName": "Water",
            "lowerName": "Water",
            "cardImg": "img/card-29-kan.png",
            "symbolLabel": "Steady Through Danger",
            "core": "You are facing repeated challenges, one after another. Like water, keep moving without losing your center. Stay calm, act with integrity, and take each difficulty one step at a time.",
            "plain": "I move through difficulty with a steady heart and keep my inner light alive.",
            "blessingText": "May you remain calm and grounded even through repeated challenges.",
            "main_state": "A demanding period that can still be met with inner stability",
            "main_strategy": "Stay calm and work through each challenge step by step",
            "support_risk": "Repeated setbacks or obstacles",
            "support_warning": "Losing composure after several setbacks",
            "focus": {
                "love": "The relationship is under pressure from misunderstandings or outside stress. Avoid making decisions while emotional; steady yourself and show care through consistent actions.",
                "career": "Work may bring one challenge after another. Break large problems into smaller ones and solve them calmly instead of forcing a quick result.",
                "health": "Symptoms or setbacks may come and go. Follow sound professional guidance, keep a steady routine, and do not panic over short-term changes.",
                "finances": "Finances may face repeated expenses or losses. Protect your cash floor, stop adding risk, and repair the situation step by step.",
                "relationships": "You may feel misunderstood or isolated. Stay consistent and honest instead of trying to win everyone over; reliable supporters will remain."
            },
            "guide": {
                "love": "Do not decide while emotional:\n• Show care through steady actions.\n• Learn from each setback.",
                "career": "Break large problems into smaller steps:\n• Respond calmly, not forcefully.\n• Build skill through each challenge.",
                "health": "Follow professional guidance:\n• Do not panic over short-term changes.\n• Keep a steady recovery routine.",
                "finances": "Protect essential cash flow:\n• Do not take bigger risks to recover losses.\n• Repair gaps step by step.",
                "relationships": "Act with consistent integrity:\n• Do not try to please everyone.\n• Value the people who truly support you."
            }
        }, {
            "key": "li",
            "num": 30,
            "upper": "☲",
            "lower": "☲",
            "upperName": "Fire",
            "lowerName": "Fire",
            "cardImg": "img/card-30-li.png",
            "symbolLabel": "Steady Light",
            "core": "Light needs something sound to rest on. Choose people, systems, and values that help you stay clear and grounded. Keep strengthening your own foundation so your light can last.",
            "plain": "I follow what is right and let my light support both myself and others.",
            "blessingText": "May you stay aligned with the right direction and let your light remain steady.",
            "main_state": "The right support helps your strengths shine steadily",
            "main_strategy": "Choose a reliable direction or system and build from it",
            "support_risk": "Emotional highs and lows or changing conditions",
            "support_warning": "Losing faith during a temporary low",
            "focus": {
                "love": "A healthy relationship allows closeness without losing yourself. Stay near people who help you grow, while keeping your own center.",
                "career": "The right team, mentor, or platform can help your skills stand out. Keep learning so you become a source of strength, not only a recipient of support.",
                "health": "Your body benefits from stable anchors such as regular routines, trusted care, or a supportive partner. Consistency makes progress easier to sustain.",
                "finances": "Favor sound investments and reliable advice, but keep your own judgment. Learn continuously rather than following tips blindly.",
                "relationships": "Spend more time with groups and mentors who bring out your best. As you grow, pass that support forward to others."
            },
            "guide": {
                "love": "Stay close to people who help you grow:\n• Keep your own center.\n• Support each other.",
                "career": "Choose the right platform and partners:\n• Keep building your own skills.\n• Grow into a source of strength.",
                "health": "Build stable routines and support:\n• Use trusted professional care.\n• Let consistency anchor your health.",
                "finances": "Follow sound long-term principles:\n• Keep independent judgment.\n• Avoid chasing short-term tips.",
                "relationships": "Join groups that help you grow:\n• Learn from good mentors.\n• Support others in return."
            }
        }, {
            "key": "xian",
            "num": 31,
            "upper": "☱",
            "lower": "☶",
            "upperName": "Lake",
            "lowerName": "Mountain",
            "cardImg": "img/card-31-xian.png",
            "symbolLabel": "Mutual Attraction",
            "core": "This is a time of connection and mutual response. The strongest bonds grow from sincere interaction, not pressure. Stay open, notice what is real, and let closeness develop naturally.",
            "plain": "I stay open to genuine connection and let it unfold naturally.",
            "blessingText": "May you meet people who understand you without forcing the connection.",
            "main_state": "A chance for mutual understanding and connection",
            "main_strategy": "Let the connection develop naturally without rushing it",
            "support_risk": "Wanting answers or action too quickly",
            "support_warning": "Expressing feelings before the timing is right",
            "focus": {
                "love": "Mutual attraction is easier to feel now. Respond openly, notice the other person’s needs, and let closeness deepen without forcing it.",
                "career": "Communication and cooperation can flow well. Share ideas, listen closely, and use moments of mutual understanding to build stronger partnerships.",
                "health": "Emotions can affect your body quickly. Notice where stress appears first and use breathing, rest, or relaxation to reset.",
                "finances": "Stay alert to changing trends, but test intuition against facts. Useful opportunities may also emerge through conversations and relationships.",
                "relationships": "You may connect with people easily now. Be genuine, listen beneath the words, and move closer to people who feel naturally compatible."
            },
            "guide": {
                "love": "Notice the other person and respond openly:\n• Let the connection flow naturally.\n• Act when the timing feels right.",
                "career": "Share ideas and listen well:\n• Build on moments of mutual understanding.\n• Capture useful ideas quickly.",
                "health": "Notice your body’s stress signals:\n• Use breathing and relaxation.\n• Care for your body before overthinking.",
                "finances": "Watch trends without relying on intuition alone:\n• Check impressions against facts.\n• Notice useful information from others.",
                "relationships": "Join conversations and be yourself:\n• Listen for the feeling behind the words.\n• Move toward compatible people."
            }
        }, {
            "key": "heng",
            "num": 32,
            "upper": "☳",
            "lower": "☴",
            "upperName": "Thunder",
            "lowerName": "Wind",
            "cardImg": "img/card-32-heng.png",
            "symbolLabel": "Lasting Commitment",
            "core": "Lasting results come from steady effort. Choose what is worth maintaining and keep working at it with a sustainable rhythm. Stay true to the core while adjusting your methods when needed.",
            "plain": "I stay committed to what matters and let consistency work over time.",
            "blessingText": "May the relationships and values you cherish grow steadier and deeper with time.",
            "main_state": "A situation gradually becoming more stable and lasting",
            "main_strategy": "Build it steadily through consistent effort",
            "support_risk": "Impatience and the desire for quick results",
            "support_warning": "Forcing progress because results feel too slow",
            "focus": {
                "love": "Love lasts through consistent care more than occasional intensity. Put commitment into small daily actions and value the stability you have built.",
                "career": "Your work needs time to mature. Stay with a worthwhile direction and keep building skill and credibility instead of changing course too often.",
                "health": "Health improves through habits you can sustain. If you slip, restart instead of giving up; consistency matters more than perfection.",
                "finances": "Wealth grows through steady contributions and a long-term plan. Avoid changing strategy because of short-term market moves.",
                "relationships": "Strong friendships are built through time. Stay in touch, keep promises, and show up when people need you."
            },
            "guide": {
                "love": "Put commitment into daily actions:\n• Value steady companionship.\n• Show up when it matters.",
                "career": "Stay with a worthwhile direction:\n• Keep building skill and trust.\n• Do not overreact to short-term results.",
                "health": "Choose habits you can sustain:\n• Restart after setbacks.\n• Measure progress over months.",
                "finances": "Follow a consistent long-term plan:\n• Invest regularly.\n• Let time work for you.",
                "relationships": "Invest in relationships worth keeping:\n• Stay in touch and keep promises.\n• Be present when needed."
            }
        }, {
            "key": "dun",
            "num": 33,
            "upper": "☰",
            "lower": "☶",
            "upperName": "Heaven",
            "lowerName": "Mountain",
            "cardImg": "img/card-33-dun.png",
            "symbolLabel": "Graceful Withdrawal",
            "core": "The situation is not in your favor, and direct resistance may only drain you. Stepping back is not weakness; it protects your strength and gives time for conditions to change. Keep what matters safe and wait for a better opening.",
            "plain": "I protect what matters by knowing when to step back.",
            "blessingText": "May you know when to leave with grace and preserve your strength.",
            "main_state": "Knowing when to step back and preserve your room to move",
            "main_strategy": "Let go when it is time; do not cling to a place that is no longer yours",
            "support_risk": "Hesitating because you do not want to let go",
            "support_warning": "Staying too long and missing the best time to leave",
            "focus": {
                "love": "A relationship may feel pressured or conflicted. Do not force a confrontation; a little distance can make the issue clearer and give both sides room to think.",
                "career": "Work conditions may be turning against you through politics, policy changes, or limited resources. Stay low-key, protect your work, and wait until the situation is clearer.",
                "health": "If your body or mind is asking for rest, step back before stress becomes burnout. Recovery is a responsible choice, not a weakness.",
                "finances": "Finances call for caution. Avoid chasing gains or adding leverage; taking profit and holding more cash can protect you from unnecessary risk.",
                "relationships": "Some social situations are becoming complicated. Pull back from needless drama and keep a low profile; real friends will not disappear because you need space."
            },
            "guide": {
                "love": "Give each other some space:\n• Do not force a confrontation.\n• Use the distance to see what you truly need.",
                "career": "Stay low-key and avoid needless conflict:\n• Keep important records and results.\n• Wait for clearer conditions before acting.",
                "health": "Make room for rest:\n• Respect signs of stress or fatigue.\n• Step back long enough to recover.",
                "finances": "Take profit when appropriate and keep more cash:\n• Do not chase highs or add leverage.\n• Favor protection over aggression.",
                "relationships": "Step away from unnecessary drama:\n• Reduce draining social obligations.\n• Keep the relationships that remain steady."
            }
        }, {
            "key": "dazhuang",
            "num": 34,
            "upper": "☳",
            "lower": "☰",
            "upperName": "Thunder",
            "lowerName": "Heaven",
            "cardImg": "img/card-34-dazhuang.png",
            "symbolLabel": "Strength in Motion",
            "core": "Your strength and momentum are high. That gives you room to advance, but it can also invite overconfidence. Use power with discipline and integrity so strength does not turn into recklessness.",
            "plain": "I move forward with strength while keeping clear limits.",
            "blessingText": "May you have the strength to pursue what matters and the restraint to use it well.",
            "main_state": "Having strong energy to pursue what you want",
            "main_strategy": "Use your strength well while keeping a sense of proportion",
            "support_risk": "The urge to force your way through because you can",
            "support_warning": "Letting confidence turn into reckless action",
            "focus": {
                "love": "You bring energy and initiative to the relationship. Keep that strength, but respect the other person's pace so confidence does not become pressure.",
                "career": "Your momentum is strong and important plans can move forward. The main risk is overconfidence, so direct your energy carefully and leave room to adjust.",
                "health": "Your energy may be high enough for new physical goals, but do not confuse strength with invulnerability. Increase intensity gradually and protect recovery.",
                "finances": "You may feel ready to invest or expand aggressively. Keep risk limits in place and avoid concentrating too much in one bet.",
                "relationships": "You may naturally take the lead. Keep respect and courtesy in your tone so influence does not become intimidation."
            },
            "guide": {
                "love": "Be active while respecting the other person's pace:\n• Be firm without becoming forceful.\n• Keep warmth in the relationship.",
                "career": "Use strength where it matters:\n• Push important work without forcing every issue.\n• Seek an outside view when confidence runs high.",
                "health": "Increase intensity gradually:\n• Warm up and recover well.\n• Do not ignore warning signs.",
                "finances": "Do not overconcentrate because you feel confident:\n• Set clear risk limits.\n• Build offense on a strong defense.",
                "relationships": "Watch your tone when you have the upper hand:\n• Stay respectful.\n• Let composure earn respect."
            }
        }, {
            "key": "jin",
            "num": 35,
            "upper": "☲",
            "lower": "☷",
            "upperName": "Fire",
            "lowerName": "Earth",
            "cardImg": "img/card-35-jin.png",
            "symbolLabel": "Rising Light",
            "core": "Your efforts are beginning to be seen, and opportunities are growing. This is a period of upward movement. Show your strengths, work with capable people, and advance in a clear and honest way.",
            "plain": "I move forward openly and let my growth be seen.",
            "blessingText": "May your effort be recognized as you move steadily toward brighter ground.",
            "main_state": "Your work is gradually being seen as you move in a better direction",
            "main_strategy": "Prepare well and let results speak instead of rushing to prove yourself",
            "support_risk": "An early stage of being overlooked or doubted",
            "support_warning": "Losing confidence because recognition has not arrived yet",
            "focus": {
                "love": "The relationship is warming and trust is growing. Show your intentions clearly and use steady actions to support what you say.",
                "career": "You are in an upward phase at work. Show your results, accept more responsibility, and place yourself where opportunities can find you.",
                "health": "Your energy and overall condition may be improving. Use the momentum to establish routines that can continue after the good phase passes.",
                "finances": "Income or investments may be improving. Direct new gains toward savings and long-term goals while keeping your risk discipline.",
                "relationships": "More people may be noticing and supporting you. Build useful connections and share what you can; progress becomes stronger when it benefits others too."
            },
            "guide": {
                "love": "Show your intentions clearly:\n• Plan ahead together.\n• Support promises with steady action.",
                "career": "Show your results:\n• Take on meaningful responsibility.\n• Move up one solid step at a time.",
                "health": "Use good momentum to build routines:\n• Keep exercise and nutrition consistent.\n• Let progress become normal.",
                "finances": "Direct added income toward long-term goals:\n• Keep risk controls in place.\n• Set realistic growth targets.",
                "relationships": "Build useful connections:\n• Share resources and experience.\n• Let your progress help others."
            }
        }, {
            "key": "mingyi",
            "num": 36,
            "upper": "☷",
            "lower": "☲",
            "upperName": "Earth",
            "lowerName": "Fire",
            "cardImg": "img/card-36-mingyi.png",
            "symbolLabel": "Hidden Light",
            "core": "Your light may be obscured and honesty may not be rewarded right now. This is a time to protect your strength rather than display it. Keep your inner standards clear, stay low-key, and wait for conditions to improve.",
            "plain": "I protect my inner light when the world around me is dark.",
            "blessingText": "May you keep your inner light through difficult days and wait quietly for dawn.",
            "main_state": "A period that calls for patience and a low profile",
            "main_strategy": "Protect your inner light and wait for conditions to improve",
            "support_risk": "A situation that feels unfair, painful, or discouraging",
            "support_warning": "Letting a dark period make you abandon what you believe in",
            "focus": {
                "love": "The relationship may be in a period of misunderstanding or distance. Do not exhaust yourself proving your sincerity; keep your heart clear and let time reveal what is real.",
                "career": "Your work may be overlooked or treated unfairly. Stay composed, build skill quietly, and avoid unnecessary confrontation until conditions change.",
                "health": "Energy may be low. Reduce unnecessary demands, protect basic routines, and spend more time around people and activities that help you feel safe and steady.",
                "finances": "Finances may be under pressure. Protect the basics, cut nonessential spending, and do not take desperate risks to recover quickly.",
                "relationships": "You may feel misunderstood or excluded. Do not spend all your energy defending yourself; stay consistent and let your actions speak."
            },
            "guide": {
                "love": "Keep your sincerity without overexplaining:\n• Give the situation time.\n• Care for your own feelings first.",
                "career": "Stay low-key and keep building skill:\n• Avoid needless confrontation.\n• Let difficulty become preparation.",
                "health": "Reduce unnecessary demands:\n• Stay close to what makes you feel safe.\n• Allow real rest.",
                "finances": "Protect the basics and cut nonessential spending:\n• Do not gamble for a quick recovery.\n• Wait for better conditions.",
                "relationships": "Stay consistent instead of endlessly defending yourself:\n• Let actions speak.\n• Value the people who still trust you."
            }
        }, {
            "key": "jiaren",
            "num": 37,
            "upper": "☴",
            "lower": "☲",
            "upperName": "Wind",
            "lowerName": "Fire",
            "cardImg": "img/card-37-jiaren.png",
            "symbolLabel": "A Warm Home",
            "core": "Home is the starting point of every close relationship. Build belonging with warmth and clear boundaries. When care has structure, both home and outer life become steadier.",
            "plain": "I protect what I call home with warmth and clear principles.",
            "blessingText": "May your home and closest relationships become a safe place of warmth and trust.",
            "main_state": "A relationship or team gradually becoming warm and well ordered",
            "main_strategy": "Set clear expectations and boundaries from the start",
            "support_risk": "A period of adjustment and learning each other's limits",
            "support_warning": "Keeping quiet about real needs just to preserve harmony",
            "focus": {
                "love": "Warmth brings closeness; boundaries bring safety. Show care in practical ways while protecting what matters to you.",
                "career": "Treat the team like a healthy household: offer support, but keep roles and rules clear. Belonging grows when expectations are known.",
                "health": "Household routines shape health. Improve meals, sleep, and daily rhythm for yourself and those you live with.",
                "finances": "Stable family finances require shared rules. Discuss income, spending, and goals openly, then follow a simple budget together.",
                "relationships": "Put your energy into places where you feel accepted. Nurture your core circle and become someone others can rely on."
            },
            "guide": {
                "love": "Turn care into time and practical support:\n• Hold important boundaries with kindness.\n• Remember you are on the same side.",
                "career": "Create a supportive culture with clear rules:\n• Give everyone belonging and boundaries.\n• Care for the team consistently.",
                "health": "Improve meals and routines at home:\n• Build a steady daily rhythm.\n• Let health become a shared priority.",
                "finances": "Discuss household money and goals openly:\n• Follow a shared budget.\n• Let money support the home, not divide it.",
                "relationships": "Invest in places where you are accepted:\n• Be dependable to others.\n• Let warmth strengthen belonging."
            }
        }, {
            "key": "kui",
            "num": 38,
            "upper": "☲",
            "lower": "☱",
            "upperName": "Fire",
            "lowerName": "Lake",
            "cardImg": "img/card-38-kui.png",
            "symbolLabel": "Common Ground",
            "core": "Differences in views or values are clear now. Do not force agreement. Give small differences room, and seek common ground on what truly matters; contrast can become a strength.",
            "plain": "I make room for differences while looking for common ground.",
            "blessingText": "May you stay understanding when views differ and find a distance that feels right for both sides.",
            "main_state": "Differences are present, but the situation can still improve",
            "main_strategy": "Stay calm and approach differences with understanding",
            "support_risk": "Friction caused by misunderstanding or adjustment",
            "support_warning": "Turning a temporary misunderstanding into lasting opposition",
            "focus": {
                "love": "Differences in personality or values do not have to damage the relationship. Stop trying to reshape each other and find a way of relating that works for both.",
                "career": "Disagreement is present. Identify the shared objective first, then keep the remaining differences within a workable range.",
                "health": "Conflicting signals or advice require caution. Watch your actual response and seek coordinated professional guidance when needed.",
                "finances": "Financial partners may disagree on direction. Compare the tradeoffs openly and look for an option that protects both sides.",
                "relationships": "Not everyone will fit your values or lifestyle. Respect the difference, keep a friendly distance, and invest in people who truly fit."
            },
            "guide": {
                "love": "Accept differences without forcing change:\n• Find a comfortable way to relate.\n• Let differences add depth, not damage.",
                "career": "Find the shared direction first:\n• Keep disagreements discussable.\n• Use complementary strengths.",
                "health": "Follow your body's real response:\n• Avoid conflicting plans at the same time.\n• Get coordinated professional advice if needed.",
                "finances": "Lay out the pros and cons calmly:\n• Seek a solution that serves both sides.\n• Allow time before major decisions.",
                "relationships": "Respect differences:\n• Keep a friendly distance where needed.\n• Invest in people who truly fit."
            }
        }, {
            "key": "jian",
            "num": 39,
            "upper": "☵",
            "lower": "☶",
            "upperName": "Water",
            "lowerName": "Mountain",
            "cardImg": "img/card-39-jian.png",
            "symbolLabel": "Stop at the Obstacle",
            "core": "The way ahead is blocked. Pushing straight through will only deepen the problem. Pause, reassess, seek good advice, and choose a safer route. Slowing down is not giving up.",
            "plain": "I slow down before obstacles and choose the steadier path.",
            "blessingText": "May difficulty help you pause, look inward, and find the path that truly works.",
            "main_state": "Stopping at the right time is the wiser move",
            "main_strategy": "Pause and see what needs to change before moving again",
            "support_risk": "The urge to push through just to prove yourself",
            "support_warning": "Forcing ahead when the danger is already clear",
            "focus": {
                "love": "The relationship faces real obstacles. Do not force progress or demand answers. Stabilize what you have and step back if needed until the pressure clears.",
                "career": "A project or path is blocked. Pause, assess resources, ask experienced people, and change routes if necessary.",
                "health": "Recovery may be slower or uneven. Avoid constant changes; slow down, follow qualified advice, and give the process time.",
                "finances": "Cash flow or investments may be under pressure. Protect liquidity, reduce risk, and rebuild the plan before chasing a quick fix.",
                "relationships": "Communication may feel blocked. Change your approach first, and use a trusted mediator if direct pressure is making things worse."
            },
            "guide": {
                "love": "Stabilize the relationship first:\n• Step back when pressure is high.\n• Decide again when the situation is clearer.",
                "career": "Pause and assess the real obstacle:\n• Ask experienced people for input.\n• Change routes if the cost of pushing is too high.",
                "health": "Slow down and follow qualified advice:\n• Give one plan enough time.\n• Treat recovery as a process.",
                "finances": "Protect cash flow and reduce risk:\n• Rework the plan with sound advice.\n• Choose stability before speed.",
                "relationships": "Adjust your approach before pushing harder:\n• Ask a trusted person for help if needed.\n• An indirect route can work better."
            }
        }, {
            "key": "jie",
            "num": 40,
            "upper": "☳",
            "lower": "☵",
            "upperName": "Thunder",
            "lowerName": "Water",
            "cardImg": "img/card-40-jie.png",
            "symbolLabel": "Release After the Storm",
            "core": "Pressure is easing and a difficult situation is beginning to open. Release what no longer needs to be carried, soften rigid positions, and deal with old issues while conditions are improving.",
            "plain": "I release what has weighed me down and make room for a lighter beginning.",
            "blessingText": "May what has held you for so long begin to loosen and resolve.",
            "main_state": "A long-standing problem gradually beginning to ease",
            "main_strategy": "Rest and recover before making another big move",
            "support_risk": "Restlessness and the urge to act immediately",
            "support_warning": "Creating a new burden as soon as the old one is gone",
            "focus": {
                "love": "Tension is easing and misunderstandings can be cleared. Take a sincere first step toward repair and stop carrying old injuries into the next conversation.",
                "career": "A bottleneck is loosening. Use the opening to resolve delayed issues and remove processes that no longer serve you.",
                "health": "Tension and discomfort may be easing. Reduce unnecessary stress and give your body real recovery time.",
                "finances": "Financial pressure may be loosening. Settle overdue matters, collect what is owed, and restore healthy cash flow.",
                "relationships": "Old misunderstandings can finally be discussed. Reach out, release old assumptions, and let the relationship move again."
            },
            "guide": {
                "love": "Take the first step toward repair:\n• Clear up misunderstandings while the door is open.\n• Leave old hurt behind.",
                "career": "Resolve delayed issues while conditions improve:\n• Remove outdated burdens.\n• Use the opening to reset.",
                "health": "Make room for real rest:\n• Reduce sources of tension.\n• Let recovery finish at an easier pace.",
                "finances": "Settle delayed financial issues:\n• Restore cash flow.\n• Review the plan once pressure eases.",
                "relationships": "Reach out with a willingness to reconcile:\n• Release old assumptions.\n• Let the relationship move again."
            }
        }, {
            "key": "sun",
            "num": 41,
            "upper": "☶",
            "lower": "☱",
            "upperName": "Mountain",
            "lowerName": "Lake",
            "cardImg": "img/card-41-sun.png",
            "symbolLabel": "Giving Up to Gain",
            "core": "Something needs to be reduced now—time, spending, habits, or attachment. Letting go is not always a loss; it can protect what matters and make room for growth. Give willingly, but do not turn generosity into self-neglect.",
            "plain": "I let go of what matters less to protect what matters more.",
            "blessingText": "May you find a peaceful balance between giving, letting go, and caring for yourself.",
            "main_state": "A time to find balance between giving and protecting yourself",
            "main_strategy": "Help within your limits without draining yourself",
            "support_risk": "Giving too much while ignoring your own needs",
            "support_warning": "Sacrificing your boundaries in the name of helping",
            "focus": {
                "love": "You may need to release pride, control, or old habits for the relationship to grow. Adjusting for someone you love can be healthy, but not if you lose yourself in the process.",
                "career": "Cut secondary tasks and focus resources on what matters most. Holding onto everything only weakens your effort.",
                "health": "Reduce habits that drain you, such as poor sleep, overeating, long sitting, or constant stress. Replace them with choices you can sustain.",
                "finances": "Review spending and weak investments. Cutting what adds little value gives you more room for what truly matters.",
                "relationships": "Some relationships or social obligations are draining you. Reduce people-pleasing and save your time for relationships that are mutual and meaningful."
            },
            "guide": {
                "love": "Adjust with love, not self-erasure:\n• Keep your own needs in view.\n• Aim for balanced effort.",
                "career": "Focus resources on what matters most:\n• Cut secondary projects.\n• Use limited resources well.",
                "health": "Reduce habits that drain you:\n• Replace them with healthier choices.\n• Trade short-term comfort for lasting energy.",
                "finances": "Cut unnecessary spending and weak investments:\n• Save resources for what matters.\n• Restore a healthier financial rhythm.",
                "relationships": "Reduce draining social obligations:\n• Let go of people-pleasing.\n• Keep your energy for important people."
            }
        }, {
            "key": "yi_increase",
            "num": 42,
            "upper": "☴",
            "lower": "☳",
            "upperName": "Wind",
            "lowerName": "Thunder",
            "cardImg": "img/card-42-yi_increase.png",
            "symbolLabel": "Growing Benefit",
            "core": "This is a period of growth: resources, opportunities, and support are increasing. Use the momentum rather than merely collecting more. Grow, share what you can, and let benefits circulate.",
            "plain": "I welcome growth and let resources flow where they can do good.",
            "blessingText": "May goodwill keep moving through your life, and may what you give return in meaningful ways.",
            "main_state": "A period of growing resources, support, and opportunity",
            "main_strategy": "Use the upward momentum and act on worthwhile opportunities",
            "support_risk": "Hesitating when a real opportunity appears",
            "support_warning": "Overthinking until the moment passes",
            "focus": {
                "love": "The relationship is gaining strength and both sides are willing to give more. Offer care openly and receive it without guilt so the connection can grow.",
                "career": "Resources, opportunities, or helpful people may appear. Use them to grow your skills and support the team rather than keeping every advantage to yourself.",
                "health": "This is a good time to improve your health. Start the changes you already know you need and let steady progress build on itself.",
                "finances": "Finances may be improving through income, returns, or new resources. Strengthen your foundation first, then expand with discipline.",
                "relationships": "Support and useful connections are increasing. Accept help graciously and share what you can so goodwill keeps circulating."
            },
            "guide": {
                "love": "Give openly and receive openly:\n• Use this positive phase well.\n• Let care move both ways.",
                "career": "Use opportunities to build skill and capacity:\n• Share what you know.\n• Let growth benefit the team.",
                "health": "Start the change while momentum is strong:\n• Build on small wins.\n• Keep the routine sustainable.",
                "finances": "Strengthen your financial base:\n• Put part of the gain toward long-term goals.\n• Keep risk controls in place.",
                "relationships": "Accept support and share what you can:\n• Keep goodwill moving.\n• Build mutual relationships."
            }
        }, {
            "key": "guai",
            "num": 43,
            "upper": "☱",
            "lower": "☰",
            "upperName": "Lake",
            "lowerName": "Heaven",
            "cardImg": "img/card-43-guai.png",
            "symbolLabel": "Clear Decision",
            "core": "A problem has reached the point where it must be addressed. Say what needs to be said, end what needs to end, and correct what cannot continue. Be decisive, but handle the matter openly and with restraint.",
            "plain": "I make clear decisions and set the boundaries that are needed.",
            "blessingText": "May you have the courage to decide clearly when the time comes.",
            "main_state": "A situation that needs a clear decision to move forward",
            "main_strategy": "Act with courage and draw a firm line",
            "support_risk": "Hesitation and prolonged indecision",
            "support_warning": "Delaying a necessary decision out of softness or fear",
            "focus": {
                "love": "A key issue can no longer be avoided. Speak clearly and honestly, while still respecting the other person's dignity.",
                "career": "Some work problems now require a firm decision—stop, correct, explain, or restructure what is not working. Act clearly and accept the consequences.",
                "health": "A health issue may need direct action rather than more delay. Face it, get qualified help, and commit to a clear next step.",
                "finances": "Some financial matters need closure, such as a losing investment, weak partnership, or unresolved debt. Decide, act, and clean up the situation.",
                "relationships": "A boundary needs to be stated. Say no where needed, or end a relationship that keeps crossing the line, without unnecessary hostility."
            },
            "guide": {
                "love": "Name the real issue clearly:\n• Be firm without humiliating the other person.\n• Do not keep the problem suspended.",
                "career": "Decide what must stop or change:\n• Act openly and document key decisions.\n• Do not delay obvious problems.",
                "health": "Face the issue directly:\n• Seek qualified help.\n• Commit to the next step.",
                "finances": "Close weak positions or unresolved obligations:\n• Decide from facts, not fear.\n• Restore a clean financial position.",
                "relationships": "State your boundary calmly and firmly:\n• Leave no false ambiguity.\n• Treat clarity as responsibility."
            }
        }, {
            "key": "gou",
            "num": 44,
            "upper": "☰",
            "lower": "☴",
            "upperName": "Heaven",
            "lowerName": "Wind",
            "cardImg": "img/card-44-gou.png",
            "symbolLabel": "Unexpected Encounter",
            "core": "Something unexpected may enter your life—a person, opportunity, or test. Stay open, but do not confuse surprise with value. Observe first, then decide what deserves a deeper place in your life.",
            "plain": "I welcome the unexpected with openness and clear judgment.",
            "blessingText": "May you meet unexpected people and events with awareness and good judgment.",
            "main_state": "An unexpected encounter that calls for careful observation",
            "main_strategy": "Observe sudden opportunities or temptations before acting",
            "support_risk": "A situation where timing and boundaries matter",
            "support_warning": "Accepting too much too quickly out of curiosity or excitement",
            "focus": {
                "love": "A new attraction may appear suddenly. Enjoy the connection, but take time to learn who the person really is before investing deeply.",
                "career": "An unexpected offer or collaboration may appear. Review the details and test whether it fits your long-term direction before committing.",
                "health": "A new symptom or health concern may catch your attention. Confirm what is happening with proper evaluation rather than panic or dismissal.",
                "finances": "A tempting financial opportunity may appear suddenly. Verify the source, understand the risk, and refuse to act on incomplete information.",
                "relationships": "New people may enter your life quickly. Stay open, but let time reveal character and intentions before giving full trust."
            },
            "guide": {
                "love": "Enjoy the connection without rushing in:\n• Take time to know the person.\n• Let attraction survive closer understanding.",
                "career": "Review the terms and details:\n• Check long-term fit.\n• Do not commit just because it feels exciting.",
                "health": "Confirm the situation with proper evaluation:\n• Do not dismiss or catastrophize.\n• Follow qualified guidance.",
                "finances": "Verify the source and risks:\n• Be extra careful with sudden offers.\n• Invest only after the opportunity checks out.",
                "relationships": "Stay open without oversharing too quickly:\n• Watch character and intent.\n• Let time decide who belongs."
            }
        }, {
            "key": "cui",
            "num": 45,
            "upper": "☱",
            "lower": "☷",
            "upperName": "Lake",
            "lowerName": "Earth",
            "cardImg": "img/card-45-cui.png",
            "symbolLabel": "Gathering Together",
            "core": "This is a time of gathering. People, resources, and shared purpose can come together more powerfully than any solo effort. Bring the right people together with sincerity and a clear goal, and the group can accomplish more.",
            "plain": "I bring people and purpose together to create something greater.",
            "blessingText": "May the right people gather around you and build something meaningful together.",
            "main_state": "A chance to gather like-minded people around a shared goal",
            "main_strategy": "Reach out sincerely and invite others to move forward with you",
            "support_risk": "Hesitating because you are unsure others will join",
            "support_warning": "Letting fear of rejection keep you from inviting others",
            "focus": {
                "love": "Your lives are drawing closer. Invite each other into important moments and let shared experiences deepen the bond.",
                "career": "People and resources are gathering around you. Unite the right team around a clear goal and use that momentum well.",
                "health": "You do not need to handle health alone. Build support through professionals, family, or a reliable community.",
                "finances": "Connections and shared resources may create financial opportunities. Work only with trusted people and clear rules.",
                "relationships": "Your social circle is active and expanding. Treat each connection sincerely and build a real sense of belonging."
            },
            "guide": {
                "love": "Invite them into your world:\n• Share important moments.\n• Build closeness through time together.",
                "career": "Gather the right people:\n• Set one clear goal.\n• Give everyone a defined role.",
                "health": "Build a reliable support system:\n• Accept professional help.\n• Do not face everything alone.",
                "finances": "Use trusted partnerships:\n• Agree on goals and rules.\n• Keep shared money clearly directed.",
                "relationships": "Value each gathering:\n• Build genuine community.\n• Let strong connections support you."
            }
        }, {
            "key": "sheng",
            "num": 46,
            "upper": "☷",
            "lower": "☴",
            "upperName": "Earth",
            "lowerName": "Wind",
            "cardImg": "img/card-46-sheng.png",
            "symbolLabel": "Steady Rise",
            "core": "You are in a period of steady growth, like a tree rising from the earth. Progress comes from solid foundations and patient steps. Keep building, and stay grateful to the people who help you move upward.",
            "plain": "I rise through steady effort, one solid step at a time.",
            "blessingText": "May your efforts take root and grow steadily upward.",
            "main_state": "Your effort is being noticed and progress is building step by step",
            "main_strategy": "Do each step well instead of rushing upward",
            "support_risk": "Wanting to skip the work required for lasting growth",
            "support_warning": "Rushing toward success before the foundation is ready",
            "focus": {
                "love": "The relationship is growing steadily. Consistent care matters more than dramatic progress.",
                "career": "Your career is moving upward. Keep learning, stay humble, and respect the people who help you advance.",
                "health": "Your condition is improving gradually. Keep effective habits and increase activity in small, sustainable steps.",
                "finances": "Finances are growing steadily. Keep saving and investing consistently without letting short-term gains disrupt the plan.",
                "relationships": "Your influence is growing. Thank those who supported you and help others rise as you do."
            },
            "guide": {
                "love": "Keep showing up consistently:\n• Let trust grow over time.\n• Do not force dramatic progress.",
                "career": "Use the upward momentum:\n• Keep learning.\n• Stay grateful and humble.",
                "health": "Keep effective habits:\n• Increase gradually.\n• Favor steady progress.",
                "finances": "Save and invest consistently:\n• Protect the long-term plan.\n• Let growth compound.",
                "relationships": "Thank the people who helped you:\n• Support others in return.\n• Rise without forgetting your roots."
            }
        }, {
            "key": "kun_exhaust",
            "num": 47,
            "upper": "☱",
            "lower": "☵",
            "upperName": "Lake",
            "lowerName": "Water",
            "cardImg": "img/card-47-kun_exhaust.png",
            "symbolLabel": "Pressure and Endurance",
            "core": "You are in a period of constraint, low resources, or limited movement. Arguing and forcing things may achieve little. Protect your inner stability, avoid desperate choices, and endure without abandoning yourself; the pressure can eventually give way to a new opening.",
            "plain": "I hold to what matters and let hardship strengthen my resolve.",
            "blessingText": "May you keep faith through difficulty until a clearer path appears.",
            "main_state": "A difficult period that can open once you protect your inner strength",
            "main_strategy": "Protect your beliefs and rhythm; do not force a quick escape",
            "support_risk": "Feeling isolated and unable to make progress",
            "support_warning": "Giving up on yourself",
            "focus": {
                "love": "The relationship may feel dry and blocked. Do not let outside pressure turn into blame between you; protect the part that is still sincere.",
                "career": "Resources are tight and results are slow. Do not make desperate decisions simply to escape; choose the option you are least likely to regret.",
                "health": "You may feel depleted and slow to recover. Accept the need for rest and support instead of fighting exhaustion with more force.",
                "finances": "Money may feel tight and every expense heavier. Cut back, protect cash flow, and avoid risky attempts to escape quickly.",
                "relationships": "You may feel misunderstood or isolated. Do not shut everyone out; keep at least a few trustworthy connections open."
            },
            "guide": {
                "love": "Stop blaming each other:\n• Protect what is still sincere.\n• Care for yourself before repairing everything.",
                "career": "Protect the basics:\n• Avoid desperate major decisions.\n• Focus resources on what can survive.",
                "health": "Accept the current limits:\n• Rest before proving anything.\n• Seek reliable support.",
                "finances": "Cut spending hard:\n• Reject high-risk recovery bets.\n• Protect cash-producing essentials.",
                "relationships": "Keep one or two trusted connections:\n• Ask for help when needed.\n• Explain yourself only where it matters."
            }
        }, {
            "key": "jing",
            "num": 48,
            "upper": "☵",
            "lower": "☴",
            "upperName": "Water",
            "lowerName": "Wind",
            "cardImg": "img/card-48-jing.png",
            "symbolLabel": "The Living Well",
            "core": "Your most reliable resources may already be within you. Like a well, skill and strength stay useful when they are maintained and kept clear. Deepen what you already have, repair what has been neglected, and let your value flow again.",
            "plain": "I draw from a deep inner source and keep it clear through steady care.",
            "blessingText": "May you become a steady source of support for others without forgetting to replenish yourself.",
            "main_state": "A time to prepare yourself to become a steady source of value and support",
            "main_strategy": "Strengthen your abilities so your value can be used well",
            "support_risk": "Feeling overlooked or underused",
            "support_warning": "Giving up on self-improvement because recognition has not come yet",
            "focus": {
                "love": "A relationship needs regular care, not only early passion. Refresh the daily connection and keep the existing foundation alive.",
                "career": "You already have useful skills and resources. Deepen them, repair neglected projects, and make your existing strengths more valuable.",
                "health": "Health depends on basic maintenance. Keep sleep, food, movement, and recovery steady rather than constantly chasing new methods.",
                "finances": "Stable finances come from reliable sources and consistent accumulation. Deepen what already earns and close the leaks.",
                "relationships": "Long-term relationships are often more valuable than constantly meeting new people. Maintain the connections that have proven reliable."
            },
            "guide": {
                "love": "Refresh daily interaction:\n• Keep care flowing.\n• Deepen the base you already have.",
                "career": "Sharpen existing skills:\n• Revisit neglected work.\n• Deepen your professional well.",
                "health": "Protect the basic routine:\n• Rebuild from within.\n• Favor consistency over novelty.",
                "finances": "Deepen reliable income:\n• Close financial leaks.\n• Build through accumulation.",
                "relationships": "Keep in touch with long-term people:\n• Maintain trust.\n• Let old relationships stay alive."
            }
        }, {
            "key": "ge",
            "num": 49,
            "upper": "☱",
            "lower": "☲",
            "upperName": "Lake",
            "lowerName": "Fire",
            "cardImg": "img/card-49-ge.png",
            "symbolLabel": "Renewal and Change",
            "core": "Old structures no longer fit. Change is necessary, but timing and trust matter. Prepare well, act when conditions are ready, and let the old make room for something better.",
            "plain": "I welcome necessary change and let the old make room for the new.",
            "blessingText": "May you have the courage to release what no longer fits and grow into a truer version of yourself.",
            "main_state": "A period of necessary change and renewal",
            "main_strategy": "Choose the right moment and make the needed change",
            "support_risk": "Conditions are not fully ready yet",
            "support_warning": "Forcing change before the timing is right",
            "focus": {
                "love": "Old patterns in the relationship may need to change. Talk honestly when both sides are ready and build a healthier way of relating.",
                "career": "An old role or method may no longer fit. Prepare carefully, then move into the new direction with confidence.",
                "health": "A long-standing habit may need a real reset. Change one important habit at a time and make it sustainable.",
                "finances": "Your financial structure may need an update. Remove what is not working and build a simpler, stronger system.",
                "relationships": "Some relationships or habits of interaction need adjustment. Be direct, honest, and willing to create healthier boundaries."
            },
            "guide": {
                "love": "Choose a good time for an honest conversation:\n• Make sure both sides are willing to change.\n• Build a better pattern together.",
                "career": "Prepare before leaving an outdated approach:\n• Change when the timing is ready.\n• Commit fully to the new direction.",
                "health": "Change one key habit at a time:\n• Use a method you can maintain.\n• Let progress replace old patterns.",
                "finances": "Review the whole structure:\n• Remove inefficient parts.\n• Improve it step by step.",
                "relationships": "Be honest about what needs to change:\n• Do not avoid necessary conversations.\n• Build a healthier pattern."
            }
        }, {
            "key": "ding",
            "num": 50,
            "upper": "☲",
            "lower": "☴",
            "upperName": "Fire",
            "lowerName": "Wind",
            "cardImg": "img/card-50-ding.png",
            "symbolLabel": "The Transforming Vessel",
            "core": "A strong vessel can nourish and transform what it holds. Build a stable foundation, clear out what is stale, and make room for better inputs. Stay steady without becoming rigid.",
            "plain": "I strengthen my foundation and grow through steady renewal.",
            "blessingText": "May life shape you into someone steadier, stronger, and ready to carry greater responsibility.",
            "main_state": "A period of clearing, renewal, and rebuilding",
            "main_strategy": "Clear old burdens before adding something new",
            "support_risk": "A phase that needs time to settle and process",
            "support_warning": "Rushing ahead without clearing what still needs attention",
            "focus": {
                "love": "Give the relationship stability while still bringing in new experiences.",
                "career": "Build expertise and a structure that can last.",
                "health": "Balance nourishment with recovery and remove habits that drain you.",
                "finances": "Create a clear structure for income, saving, and spending before chasing growth.",
                "relationships": "Return trust with reliability: do what you say and keep growing into the responsibility you carry."
            },
            "guide": {
                "love": "Create stability through daily care:\n• Build shared memories.\n• Keep the relationship fresh without losing its foundation.",
                "career": "Develop expertise patiently:\n• Build systems that can last.\n• Become someone others can rely on.",
                "health": "Choose nourishing food and steady routines:\n• Reduce what drains recovery.\n• Let consistency do the work.",
                "finances": "Separate income, saving, and spending clearly:\n• Stabilize first, then pursue growth.\n• Build a structure that can carry more.",
                "relationships": "Honor trust with reliable action:\n• Follow through on what you promise.\n• Keep developing yourself."
            }
        }, {
            "key": "zhen",
            "num": 51,
            "upper": "☳",
            "lower": "☳",
            "upperName": "Thunder",
            "lowerName": "Thunder",
            "cardImg": "img/card-51-zhen.png",
            "symbolLabel": "Awakening Thunder",
            "core": "A sudden shock may disrupt your plans or wake you from complacency. Do not panic. Use the disruption as a signal to reassess risks, correct your course, and become steadier through experience.",
            "plain": "I meet sudden change with calm and use it to wake up and adjust.",
            "blessingText": "May you stay calm and centered even when change arrives without warning.",
            "main_state": "A sudden disruption that can be handled safely",
            "main_strategy": "Turn shock into awareness and better discipline",
            "support_risk": "Unexpected change that catches you off guard",
            "support_warning": "Reacting impulsively because of panic",
            "focus": {
                "love": "A sudden event may shake the relationship. Let emotions settle before deciding what it means.",
                "career": "Plans, roles, or conditions may change suddenly. Stabilize first, assess the impact, then respond.",
                "health": "A sudden symptom or warning deserves attention. Seek qualified help and review the habits or stress behind it.",
                "finances": "Market swings or unexpected costs may disturb your finances. Avoid panic decisions and review your risk exposure.",
                "relationships": "A surprising event may test trust. Wait until you know the full picture before reacting."
            },
            "guide": {
                "love": "Give both sides time to calm down:\n• Reassess after the shock passes.\n• Use the event to improve the relationship.",
                "career": "Stabilize first:\n• Assess the actual impact.\n• Review risk and contingency plans.",
                "health": "Take warning signs seriously:\n• Seek professional assessment.\n• Review long-term stress and habits.",
                "finances": "Pause impulsive decisions:\n• Check your financial capacity.\n• Review risk allocation.",
                "relationships": "Do not react before the facts are clear:\n• Let emotions settle.\n• Choose from a calmer place."
            }
        }, {
            "key": "gen",
            "num": 52,
            "upper": "☶",
            "lower": "☶",
            "upperName": "Mountain",
            "lowerName": "Mountain",
            "cardImg": "img/card-52-gen.png",
            "symbolLabel": "Still as a Mountain",
            "core": "Sometimes the wisest move is to stop. When thoughts and actions become scattered, pause, let things settle, and regain direction. Stillness is not stagnation; it restores order and strength.",
            "plain": "I become still, return to the present, and restore my inner order.",
            "blessingText": "May you know when to stop and feel at ease in the stillness of the present moment.",
            "main_state": "A time when stopping is more useful than pushing ahead",
            "main_strategy": "Stop when the moment calls for it instead of forcing progress",
            "support_risk": "Restlessness and the urge to keep moving",
            "support_warning": "Pushing yourself when rest is what you actually need",
            "focus": {
                "love": "Pause the argument or pursuit and give both sides room to settle.",
                "career": "Stop long enough to review direction, boundaries, and unfinished work.",
                "health": "Your body and mind may need real rest. Reduce stimulation and let recovery happen.",
                "finances": "Pause impulsive spending and risky investing. Protect what you already have.",
                "relationships": "Reduce noisy interactions and give yourself enough space to see which relationships matter."
            },
            "guide": {
                "love": "Stop arguing or chasing:\n• Let emotions settle.\n• Use the pause to regain clarity.",
                "career": "Pause and review direction:\n• Protect your boundaries.\n• Move again only when the next step is clear.",
                "health": "Allow genuine rest:\n• Reduce stimulation.\n• Let stillness restore energy.",
                "finances": "Stop impulsive spending and risky moves:\n• Protect current assets.\n• Plan again after things settle.",
                "relationships": "Reduce draining interaction:\n• Protect your boundaries.\n• Let distance restore clarity."
            }
        }, {
            "key": "jian_progress",
            "num": 53,
            "upper": "☴",
            "lower": "☶",
            "upperName": "Wind",
            "lowerName": "Mountain",
            "cardImg": "img/card-53-jian_progress.png",
            "symbolLabel": "Steady Progress",
            "core": "Real growth happens step by step. Progress may feel slow, but each steady move builds something lasting. Do not rush the result; keep moving at a pace you can sustain.",
            "plain": "I move forward steadily, one solid step at a time.",
            "blessingText": "May you move without rushing and grow into what you are becoming, one step at a time.",
            "main_state": "A time for steady progress toward your goal",
            "main_strategy": "Build each step carefully instead of rushing ahead",
            "support_risk": "A slow phase that still needs patience",
            "support_warning": "Skipping necessary steps because you want faster results",
            "focus": {
                "love": "Let the relationship develop at its own pace. Trust and understanding grow through consistent time together.",
                "career": "Your progress may be gradual, but it is solid. Keep building skills and results instead of comparing your speed with others.",
                "health": "Recovery and improvement take time. Make small changes your body can sustain and judge progress over longer periods.",
                "finances": "Steady saving and investing matter more than quick gains. Consistency can turn small steps into meaningful growth.",
                "relationships": "Trust develops over time. Let closeness grow through repeated, sincere interaction rather than forcing depth too soon."
            },
            "guide": {
                "love": "Respect each other’s pace:\n• Let trust build naturally.\n• Do not rush commitment.",
                "career": "Finish the next clear step:\n• Build skills and results steadily.\n• Focus on consistency, not speed.",
                "health": "Increase gradually:\n• Look for month-to-month progress.\n• Choose changes you can sustain.",
                "finances": "Save and invest consistently:\n• Avoid chasing sudden gains.\n• Let time support growth.",
                "relationships": "Build trust through steady contact:\n• Do not force closeness.\n• Let strong friendships take time."
            }
        }, {
            "key": "guimei",
            "num": 54,
            "upper": "☳",
            "lower": "☱",
            "upperName": "Thunder",
            "lowerName": "Lake",
            "cardImg": "img/card-54-guimei.png",
            "symbolLabel": "Know Your Place",
            "core": "A relationship or partnership may be forming, but unequal roles or expectations can create imbalance. Before committing, make sure both sides understand their position, responsibilities, and expectations.",
            "plain": "I enter relationships with clear boundaries and a clear sense of my place.",
            "blessingText": "May you invest sincerely in relationships while keeping your boundaries and self-respect.",
            "main_state": "A time to understand your role and position in a relationship",
            "main_strategy": "Keep clear boundaries and do not force a role that is not yours",
            "support_risk": "Feeling overlooked or dissatisfied with your position",
            "support_warning": "Trying to prove yourself through an untimely or forced move",
            "focus": {
                "love": "Clarify what each of you expects before going deeper. A lasting relationship needs mutual respect and equal standing.",
                "career": "Check whether responsibility, authority, and compensation are balanced before committing to a role or partnership.",
                "health": "Keep rest and activity in balance. Correct areas of life that have become too one-sided.",
                "finances": "Be careful with shared money, loans, and partnerships. Put rights, duties, and terms in writing.",
                "relationships": "Do not take sides too quickly. Understand the situation, protect your boundaries, and avoid decisions made from social pressure."
            },
            "guide": {
                "love": "Align expectations before going deeper:\n• Keep the relationship equal.\n• Do not trade self-respect for closeness.",
                "career": "Confirm terms before committing:\n• Avoid unequal roles or rewards.\n• Choose arrangements that can last.",
                "health": "Balance rest and activity:\n• Notice where life is out of balance.\n• Restore a workable rhythm.",
                "finances": "Clarify rights and obligations:\n• Put important terms in writing.\n• Keep money boundaries clear.",
                "relationships": "Understand your position first:\n• Do not react to social pressure.\n• Keep clear boundaries."
            }
        }, {
            "key": "feng",
            "num": 55,
            "upper": "☳",
            "lower": "☲",
            "upperName": "Thunder",
            "lowerName": "Fire",
            "cardImg": "img/card-55-feng.png",
            "symbolLabel": "At Full Brightness",
            "core": "This is a period of abundance, strong results, and available resources. Enjoy what is going well, but stay alert; the best time to strengthen your foundation is while conditions are favorable.",
            "plain": "I welcome this full season while staying clear and grounded.",
            "blessingText": "May you enjoy what is thriving now and care for it well while it lasts.",
            "main_state": "A strong and abundant period that still calls for caution",
            "main_strategy": "Enjoy the results while staying humble and alert",
            "support_risk": "A phase where your view may be partly obscured",
            "support_warning": "Letting success reduce your judgment or discipline",
            "focus": {
                "love": "The relationship is in a good place. Enjoy it, but keep creating shared experiences and honest conversation.",
                "career": "Results and resources are strong. Use this period to strengthen systems, develop people, and prepare for future changes.",
                "health": "Your energy may be good now. Use it to build lasting habits instead of spending it without limits.",
                "finances": "Finances may be strong, but good periods do not last forever. Save more, diversify, and keep risk controls in place.",
                "relationships": "Your social life may be full. Value the people who are sincere rather than letting activity replace real connection."
            },
            "guide": {
                "love": "Enjoy the good period:\n• Keep communicating honestly.\n• Continue investing in the relationship.",
                "career": "Strengthen systems while things are good:\n• Develop people and capacity.\n• Prepare for future change.",
                "health": "Use good energy to build habits:\n• Watch for overuse.\n• Protect your long-term capacity.",
                "finances": "Increase savings in good times:\n• Diversify risk.\n• Prepare for normal volatility.",
                "relationships": "Value sincere connections:\n• Do not confuse activity with closeness.\n• Keep investing in important people."
            }
        }, {
            "key": "lv",
            "num": 56,
            "upper": "☲",
            "lower": "☶",
            "upperName": "Fire",
            "lowerName": "Mountain",
            "cardImg": "img/card-56-lv.png",
            "symbolLabel": "The Traveler",
            "core": "You may be in a temporary, unfamiliar, or changing environment where your footing is not yet secure. Stay modest, adaptable, and careful. Build stability within yourself while you learn the new surroundings.",
            "plain": "I move through change with calm and find stability wherever I am.",
            "blessingText": "May you find a place to settle within yourself, even while the road is unfamiliar.",
            "main_state": "A changing or unfamiliar situation that requires flexibility",
            "main_strategy": "Stay modest and adapt patiently to the new environment",
            "support_risk": "Instability and the need to adjust again",
            "support_warning": "Becoming overly critical because you feel unsettled",
            "focus": {
                "love": "This may be a transitional period in love. Do not force certainty; keep your own life steady and let the relationship find its place.",
                "career": "You may be working in a new or changing environment. Learn first, build goodwill, and establish yourself before pushing for long-term gains.",
                "health": "Change can disrupt routines. Keep sleep, food, and basic care steady wherever you are.",
                "finances": "Keep finances flexible during uncertain periods. Reduce unnecessary spending and hold enough cash for change.",
                "relationships": "Old connections may be shifting while new ones are still forming. Be sincere with the people you meet and let belonging develop naturally."
            },
            "guide": {
                "love": "Keep your own life steady:\n• Do not force belonging.\n• Let the relationship settle naturally.",
                "career": "Learn the new environment first:\n• Build useful connections.\n• Establish yourself before expanding.",
                "health": "Protect basic routines:\n• Give extra care during transitions.\n• Keep the body steady through change.",
                "finances": "Cut unnecessary spending:\n• Keep enough cash available.\n• Preserve financial flexibility.",
                "relationships": "Meet people with sincerity:\n• Do not rush belonging.\n• Let good connections develop naturally."
            }
        }, {
            "key": "xun",
            "num": 57,
            "upper": "☴",
            "lower": "☴",
            "upperName": "Wind",
            "lowerName": "Wind",
            "cardImg": "img/card-57-xun.png",
            "symbolLabel": "Gentle Influence",
            "core": "Gentle influence can reach farther than force. Adapt first, understand the situation, then guide it with a clear position. Flexibility is not surrender; it is a quieter way to create lasting change.",
            "plain": "I move with flexibility and influence through steady, thoughtful action.",
            "blessingText": "May you move like the wind: gentle, steady, and able to reach what force cannot.",
            "main_state": "Steady progress through a gentle but firm approach",
            "main_strategy": "Stay flexible while keeping your direction clear",
            "support_risk": "Hesitating when a clear decision is needed",
            "support_warning": "Adapting so much that you lose your own position",
            "focus": {
                "love": "Use a gentle approach, but stay clear about what you need. Quiet care can strengthen the relationship without pressure.",
                "career": "Work with the current environment before pushing change. A calm, consistent approach can influence more than force.",
                "health": "Make small changes that fit naturally into daily life. Consistency matters more than drastic effort.",
                "finances": "Build wealth through steady habits, regular review, and small adjustments rather than chasing quick gains.",
                "relationships": "Listen first, then share your view. Influence works best when people do not feel pushed."
            },
            "guide": {
                "love": "Communicate with understanding:\n• Show care through action.\n• Stay gentle without losing yourself.",
                "career": "Adapt first, then guide:\n• Introduce ideas gradually.\n• Let consistency build influence.",
                "health": "Start with one simple habit:\n• Make change easy to sustain.\n• Let small gains compound.",
                "finances": "Make saving routine:\n• Review and adjust regularly.\n• Avoid chasing sudden gains.",
                "relationships": "Listen before responding:\n• Do not force agreement.\n• Let trust grow naturally."
            }
        }, {
            "key": "dui",
            "num": 58,
            "upper": "☱",
            "lower": "☱",
            "upperName": "Lake",
            "lowerName": "Lake",
            "cardImg": "img/card-58-dui.png",
            "symbolLabel": "Shared Joy",
            "core": "This is a time for joy, openness, and honest exchange. Real happiness comes from sincere connection, not flattery or performance. Share what feels good, speak honestly, and keep enough judgment to avoid being carried away.",
            "plain": "I share joy through honest and open connection.",
            "blessingText": "May your life hold genuine joy and people who meet you with sincerity.",
            "main_state": "A positive moment worth enjoying",
            "main_strategy": "Enjoy it with sincerity and a clear mind",
            "support_risk": "Mistaking flattery for genuine support",
            "support_warning": "Letting praise weaken your judgment",
            "focus": {
                "love": "Communication feels easier now. Share what makes you happy and speak honestly so the relationship can grow naturally.",
                "career": "Use the positive atmosphere to move work forward. Recognize others and communicate clearly.",
                "health": "Make room for activities and people that lift your mood. Enjoyment can support health when it stays balanced.",
                "finances": "Good news or a welcome gain may appear. Enjoy it, but save part of it and keep your plan intact.",
                "relationships": "This is a good time to deepen connections. Share joy, offer sincere praise, and keep the exchange genuine."
            },
            "guide": {
                "love": "Share good moments openly:\n• Speak honestly.\n• Let joy strengthen the bond.",
                "career": "Use the good atmosphere well:\n• Recognize contributions.\n• Keep communication open.",
                "health": "Do things you genuinely enjoy:\n• Spend time with supportive people.\n• Keep pleasure balanced.",
                "finances": "Save part of unexpected gains:\n• Enjoy without overspending.\n• Keep your plan steady.",
                "relationships": "Share joy generously:\n• Give sincere praise.\n• Deepen genuine connections."
            }
        }, {
            "key": "huan",
            "num": 59,
            "upper": "☴",
            "lower": "☵",
            "upperName": "Wind",
            "lowerName": "Water",
            "cardImg": "img/card-59-huan.png",
            "symbolLabel": "Dissolving Distance",
            "core": "Things may feel scattered, disconnected, or hard to hold together. The answer is not tighter control but a shared center: a clear purpose, honest communication, or a reason to reconnect. Once that center is restored, scattered energy can gather again.",
            "plain": "I restore connection and bring scattered energy back together.",
            "blessingText": "May what has grown distant begin to soften, reconnect, and move again.",
            "main_state": "Old distance begins to soften and dissolve",
            "main_strategy": "Take the first step instead of letting distance grow",
            "support_risk": "A moment that requires action rather than more delay",
            "support_warning": "Getting used to distance and missing the chance to reconnect",
            "focus": {
                "love": "Distance may be growing. Create time together, reopen honest conversation, and rebuild the connection before the gap becomes normal.",
                "career": "If the team feels scattered, restate the shared goal and improve communication. Direction can gather people again.",
                "health": "Bring basic routines back together: sleep, meals, movement, and rest. Regularity helps scattered energy settle.",
                "finances": "Consolidate accounts, review assets, and give your money one clear plan instead of letting it stay fragmented.",
                "relationships": "If important people have drifted apart, make the first move. A simple invitation or message can reopen connection."
            },
            "guide": {
                "love": "Create time together:\n• Reopen honest conversation.\n• Do not let distance become normal.",
                "career": "Restate the shared goal:\n• Improve communication.\n• Bring effort back into one direction.",
                "health": "Restore sleep and meal routines:\n• Reduce scattered habits.\n• Let regularity rebuild energy.",
                "finances": "Review all accounts and assets:\n• Create one clear plan.\n• Consolidate where useful.",
                "relationships": "Reach out first:\n• Arrange a simple meeting.\n• Give important ties a way back."
            }
        }, {
            "key": "jie_restraint",
            "num": 60,
            "upper": "☵",
            "lower": "☱",
            "upperName": "Water",
            "lowerName": "Lake",
            "cardImg": "img/card-60-jie_restraint.png",
            "symbolLabel": "Healthy Limits",
            "core": "Life works better with useful limits. Spend what is needed, save what matters, and stop when enough is enough. Discipline should support freedom, not become punishment. The goal is a rhythm you can actually maintain.",
            "plain": "I use healthy limits to protect lasting freedom.",
            "blessingText": "May you find a rhythm where discipline and freedom both feel sustainable.",
            "main_state": "Finding a workable balance between freedom and discipline",
            "main_strategy": "Hold back when needed and act when the time is right",
            "support_risk": "Swinging between overcontrol and overindulgence",
            "support_warning": "Making discipline so strict that it becomes harmful",
            "focus": {
                "love": "Healthy relationships need both closeness and space. Be present together, but leave room for each person to remain themselves.",
                "career": "Set priorities and protect your time. Saying no to excess commitments can improve the quality of your work.",
                "health": "Keep food, sleep, and activity within a sustainable range. Health improves through balance, not extremes.",
                "finances": "Use a clear budget, separate needs from wants, and reduce impulse spending. Limits give money direction.",
                "relationships": "Protect your time and energy. Learn to say no without withdrawing from people who matter."
            },
            "guide": {
                "love": "Keep closeness and space in balance:\n• Be fully present together.\n• Respect individual time.",
                "career": "Set clear priorities:\n• Protect your time.\n• Decline excessive commitments.",
                "health": "Keep meals, sleep, and activity steady:\n• Reduce extremes.\n• Choose a sustainable rhythm.",
                "finances": "Set a clear budget:\n• Separate needs from wants.\n• Spend on what matters.",
                "relationships": "Set limits on time and energy:\n• Say no when needed.\n• Keep relationships balanced."
            }
        }, {
            "key": "zhongfu",
            "num": 61,
            "upper": "☴",
            "lower": "☱",
            "upperName": "Wind",
            "lowerName": "Lake",
            "cardImg": "img/card-61-zhongfu.png",
            "symbolLabel": "Inner Sincerity",
            "core": "Sincerity is your strongest foundation. When your words, intentions, and actions align, trust grows naturally. You do not need tactics or manipulation; say what is true, do what you promise, and let consistency speak for you.",
            "plain": "I meet the world with sincerity and let honesty bridge the distance.",
            "blessingText": "May your sincerity be seen and returned by those who deserve it.",
            "main_state": "Sincerity brings the right response",
            "main_strategy": "Be genuine and avoid games or manipulation",
            "support_risk": "Emotional swings that test your steadiness",
            "support_warning": "Doubting the value of honesty because of a temporary setback",
            "focus": {
                "love": "Honesty is the foundation here. Say what you truly feel without testing or hiding, and let trust grow through direct communication.",
                "career": "Your credibility matters more than presentation. Keep promises, let your work hold up to scrutiny, and build trust through consistency.",
                "health": "Be honest about what your body is telling you. Do not ignore fatigue or discomfort; respond to real signals instead of forcing through them.",
                "finances": "Face your finances as they are. Review income, spending, and debt clearly, then make plans based on what you can realistically sustain.",
                "relationships": "Drop unnecessary defenses and be sincere, while still choosing carefully who deserves deeper trust."
            },
            "guide": {
                "love": "Say what you truly feel:\n• Avoid tests and hidden signals.\n• Let honesty build trust.",
                "career": "Keep your promises:\n• Let results support your words.\n• Protect your credibility.",
                "health": "Listen to real body signals:\n• Do not push through everything.\n• Respond with practical care.",
                "finances": "Review income, spending, and debt honestly:\n• Do not hide problems from yourself.\n• Plan from real numbers.",
                "relationships": "Be sincere without being naive:\n• Notice who is trustworthy.\n• Let trust grow naturally."
            }
        }, {
            "key": "xiaoguo",
            "num": 62,
            "upper": "☳",
            "lower": "☶",
            "upperName": "Thunder",
            "lowerName": "Mountain",
            "cardImg": "img/card-62-xiaoguo.png",
            "symbolLabel": "Careful Small Steps",
            "core": "This is not the time for a dramatic move. Progress comes from handling small things well, staying modest, and paying attention to detail. In unusual circumstances, careful ordinary steps can carry you safely through.",
            "plain": "I move carefully, handle the small things well, and stay grounded.",
            "blessingText": "May you treat yourself gently while moving through a careful season.",
            "main_state": "A time for careful, modest progress",
            "main_strategy": "Start small and build steadily",
            "support_risk": "Small details that are easy to overlook",
            "support_warning": "Chasing speed or scale at the cost of caution",
            "focus": {
                "love": "Avoid major emotional moves right now. Small acts of care and attention will do more than dramatic gestures.",
                "career": "Focus on doing small tasks well instead of forcing a breakthrough. Careful execution creates room for larger progress later.",
                "health": "Choose small, sustainable adjustments rather than drastic changes. Consistency will matter more than intensity.",
                "finances": "Take conservative steps. Reduce waste, build savings, and avoid large high-risk moves for now.",
                "relationships": "A modest approach works better than force. Listen more, soften your stance, and show care through small actions."
            },
            "guide": {
                "love": "Show care in small ways:\n• Avoid major decisions for now.\n• Let details show sincerity.",
                "career": "Do small tasks extremely well:\n• Check the details.\n• Let small wins accumulate.",
                "health": "Make small sustainable changes:\n• Increase gradually.\n• Avoid extreme shifts.",
                "finances": "Reduce small leaks:\n• Avoid bold high-risk moves.\n• Build steadily.",
                "relationships": "Listen more than you push:\n• Show care in small ways.\n• Let modesty earn trust."
            }
        }, {
            "key": "jiji",
            "num": 63,
            "upper": "☵",
            "lower": "☲",
            "upperName": "Water",
            "lowerName": "Fire",
            "cardImg": "img/card-63-jiji.png",
            "symbolLabel": "Completion in Balance",
            "core": "A major stage has been completed and order is in place. This is a welcome period of stability, but completion also begins the next cycle. Stay alert, protect what is working, and notice small changes before they grow.",
            "plain": "I protect what has been completed and stay alert even in success.",
            "blessingText": "May you remain humble and attentive so that what is good can last.",
            "main_state": "Completion that still requires vigilance",
            "main_strategy": "Protect the gains and do not relax too soon",
            "support_risk": "Small issues that seem harmless",
            "support_warning": "Ignoring details because success feels secure",
            "focus": {
                "love": "The relationship is stable after a period of adjustment. Appreciate that stability, but keep bringing care and freshness into it.",
                "career": "A goal or project has reached completion. Celebrate, then check for small weaknesses so the result can hold.",
                "health": "Your condition is relatively stable. Keep the habits that are working and respond early to small changes.",
                "finances": "A financial milestone may have been reached. Protect the gains, keep risk controlled, and prepare for the next stage.",
                "relationships": "Relationships are running smoothly. Keep maintaining them instead of assuming harmony will take care of itself."
            },
            "guide": {
                "love": "Protect the stability you built:\n• Keep the relationship fresh.\n• Do not take harmony for granted.",
                "career": "Celebrate, then review:\n• Fix small weaknesses early.\n• Protect the completed work.",
                "health": "Keep effective habits:\n• Notice small changes.\n• Adjust early.",
                "finances": "Protect gains:\n• Watch for turning points.\n• Prepare for the next stage.",
                "relationships": "Keep maintaining harmony:\n• Repair small cracks early.\n• Do not become careless."
            }
        }, {
            "key": "weiji",
            "num": 64,
            "upper": "☲",
            "lower": "☵",
            "upperName": "Fire",
            "lowerName": "Water",
            "cardImg": "img/card-64-weiji.png",
            "symbolLabel": "Open Possibility",
            "core": "The situation is not finished yet, and uncertainty remains. That is not failure; unfinished work still contains possibility. Do not rush or lose heart. Check your direction, move carefully, and finish one step at a time.",
            "plain": "I move carefully through what is unfinished and stay open to what can still grow.",
            "blessingText": "May unfinished work never make you lose heart; the journey still holds possibility.",
            "main_state": "Unfinished, but still full of possibility",
            "main_strategy": "Finish what remains one careful step at a time",
            "support_risk": "A transition that requires caution",
            "support_warning": "Being too hard on yourself because success has not arrived yet",
            "focus": {
                "love": "The relationship is still taking shape. Do not force a conclusion; give both sides time to clarify what they want.",
                "career": "The work is still in progress. Review your direction, adjust where needed, and avoid both rushing and giving up too early.",
                "health": "Recovery or adjustment is still underway. Treat progress as a process and keep doing what supports steady improvement.",
                "finances": "Your financial plan is still developing. Review the setup, make measured adjustments, and avoid abandoning it out of impatience.",
                "relationships": "Some relationships or collaborations are still unresolved. Leave room for them to develop and let time clarify the outcome."
            },
            "guide": {
                "love": "Do not force a conclusion:\n• Give each other time to clarify.\n• Leave room for development.",
                "career": "Review progress and direction:\n• Adjust without rushing.\n• Do not quit too early.",
                "health": "Treat change as a process:\n• Keep doing what helps.\n• Give recovery time.",
                "finances": "Review the current setup:\n• Adjust carefully.\n• Stay patient.",
                "relationships": "Leave room for development:\n• Do not force certainty.\n• Let time clarify things."
            }
        }],
        LINES = {
            "qian": {
                "1": {
                    "name": "Beginning",
                    "text": "A dragon rests unseen in the depths. You do not need recognition yet; use this quiet period to build your foundation and prepare.",
                    "main_state": "Results that grow naturally after a quiet period",
                    "main_strategy": "Stay grounded and strengthen the basics in private",
                    "support_risk": "Doubting yourself because progress is not visible",
                    "support_warning": "Trying to prove yourself too soon",
                    "guide": {
                        "love": "Hold back the urge to define things and watch the other person's pace:\n• Let steady presence replace repeated questions.",
                        "career": "Set aside regular time to strengthen core skills:\n• Keep learning so you are ready when the opportunity appears.",
                        "health": "Allow a lower-energy rhythm and treat rest as part of the work:\n• Track small changes so recovery is easier to see.",
                        "finances": "Build steady saving and tracking habits before chasing faster gains:\n• Treat basic financial knowledge as your current investment.",
                        "relationships": "Choose calm, pressure-free presence over eager declarations:\n• Listen more than you speak while trust develops."
                    },
                    "focus": {
                        "love": "This relationship is still forming, and the signals are unclear. Give it time rather than forcing certainty; steady yourself first and let feelings become clearer naturally.",
                        "career": "Your career is in a quiet preparation stage. Focus on core skills instead of visibility so you are ready when the right opportunity arrives.",
                        "health": "Recovery may be slow and hard to notice. Do not rush back to your old pace; patience and consistent rest are part of healing.",
                        "finances": "Your finances are at an early building stage. Avoid shortcuts and high-return promises; strengthen your base and let growth take time.",
                        "relationships": "Some relationships still need time to become familiar. Stay consistent without pushing for closeness before trust has had time to grow."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "The dragon rises into view, and your progress begins to be noticed. Show what you have built, but keep strengthening the foundation that made this moment possible.",
                    "main_state": "A chance to be seen and recognized",
                    "main_strategy": "Show your results at the right time and let your work speak",
                    "support_risk": "Losing focus because of attention",
                    "support_warning": "Getting carried away by praise",
                    "guide": {
                        "love": "Let the other person see the real you naturally:\n• Keep a steady rhythm of interaction and let familiarity build attraction.",
                        "career": "Use opportunities for visibility while protecting time for deeper work:\n• Turn praise into motivation and keep improving weak areas.",
                        "health": "Turn your better condition into a stable routine instead of testing your limits:\n• Use this period to establish regular exercise and eating habits.",
                        "finances": "Move part of your gains into reserves:\n• Review the habits behind the numbers so good luck does not hide weak spots.",
                        "relationships": "Let attention reflect the real you rather than a polished image:\n• Maintain promising connections instead of waiting for others to reach out."
                    },
                    "focus": {
                        "love": "The relationship is becoming clearer, and the other person is noticing you more. Stay genuine instead of changing yourself to keep their interest.",
                        "career": "Your ability is gaining recognition. Use the opportunity, but stay grounded and make sure your skills can support the attention you receive.",
                        "health": "Your condition is improving. Use the progress to build a lasting routine rather than spending your renewed energy too quickly.",
                        "finances": "Your finances are showing visible progress. Save part of the gains and avoid increasing risk or spending simply because the numbers look better.",
                        "relationships": "Your visibility is rising, and people are starting to remember and seek you out. Let that attention be supported by sincerity, not performance."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "The dragon is midway through its ascent, where timing matters. Keep moving, but stay alert; the real test is knowing when to press forward and when to pull back.",
                    "main_state": "A turning point that can break a bottleneck",
                    "main_strategy": "Slow down at the critical point, confirm the direction, then move decisively",
                    "support_risk": "Misreading the situation because of overconfidence",
                    "support_warning": "Dropping your guard",
                    "guide": {
                        "love": "Check the other person's feelings and boundaries before moving closer:\n• Respect their pace instead of trying to prove how much you care.",
                        "career": "Seek a trusted outside view before major decisions:\n• Keep a backup plan instead of betting everything on one judgment.",
                        "health": "Treat warning signs as a reason to adjust before exhaustion sets in:\n• Break up high-pressure periods with real recovery time.",
                        "finances": "Question the risks behind high-return opportunities:\n• Set a loss limit that protects your financial base.",
                        "relationships": "Step away when conflict starts to escalate:\n• Separate fixable misunderstandings from deeper differences."
                    },
                    "focus": {
                        "love": "The relationship has reached a delicate point where both closeness and pressure are increasing. Find a pace that respects the other person without abandoning your own needs.",
                        "career": "Opportunity and risk are both high. Do not let past success make you careless; stay open to being wrong and make major moves with clear safeguards.",
                        "health": "You may still feel capable, but long-term strain can be building underneath. Real resilience means responding to warning signs before you are forced to stop.",
                        "finances": "Financial opportunities may look strong, but risk is rising too. Avoid chasing momentum and make sure you can absorb the cost of being wrong.",
                        "relationships": "Power shifts, misunderstandings, or boundary issues may be emerging. Decide what is worth protecting and which principles you cannot compromise."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The dragon circles above the clouds with a wider sky ahead. You are ready for a higher level, but the real question is whether you are prepared for the responsibility that comes with it.",
                    "main_state": "A broader path after a major step up",
                    "main_strategy": "Recognize when the time is right and accept greater responsibility",
                    "support_risk": "Fear and hesitation before a major step",
                    "support_warning": "Backing out at the last moment",
                    "guide": {
                        "love": "Separate fear of the unknown from what you truly feel:\n• If you move forward, accept that the outcome may not be perfect.",
                        "career": "List the responsibilities that come with the next level before accepting it:\n• Prepare the skills and perspective the new role will require.",
                        "health": "Start new habits at a level you can maintain:\n• Lower the entry barrier and let small wins build confidence.",
                        "finances": "Clarify the purpose and time horizon of the money before investing it:\n• Keep enough flexibility to change course later.",
                        "relationships": "Know your boundaries before making a deeper commitment:\n• Be open about your concerns so important choices are based on honesty."
                    },
                    "focus": {
                        "love": "The relationship may be ready for a clearer commitment. Do not let fear alone decide; choose based on what you truly want and what you are willing to take responsibility for.",
                        "career": "A major career choice is in front of you. Confirm that you are ready for the demands of the next level, then act without unnecessary hesitation.",
                        "health": "Your old routine may no longer work, and lasting improvement requires change. Choose habits you can sustain rather than relying on a short burst of motivation.",
                        "finances": "You may need to choose where limited resources should go. Define the purpose and time frame first, then take a measured position rather than spreading yourself too thin or going all in.",
                        "relationships": "Some relationships may need deeper commitment while others need to end. Know your limits and decide which connections are worth the responsibility."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The dragon reaches the open sky, and long preparation becomes visible achievement. Use your influence to create value for others, not simply to control more.",
                    "main_state": "A new level shaped by creative leadership",
                    "main_strategy": "Stay true to your purpose at the top and let success benefit others",
                    "support_risk": "Becoming controlling without noticing it",
                    "support_warning": "Taking too much credit",
                    "guide": {
                        "love": "Acknowledge the other person's effort and show your appreciation through action:\n• Keep some freshness in a stable relationship.",
                        "career": "Keep asking for different opinions even after success:\n• Use your influence to develop other people, not just yourself.",
                        "health": "Use your best condition to build a sustainable rhythm, not test your limits:\n• Plan recovery before high-pressure periods wear you down.",
                        "finances": "Give your growing resources a clear purpose:\n• Remember and support the people who helped you get here.",
                        "relationships": "Create space where people can speak honestly to you:\n• Stay open to criticism, especially when you are in a strong position."
                    },
                    "focus": {
                        "love": "The relationship is mature and your mutual effort is visible. Keep treating each other with appreciation rather than assuming the bond will maintain itself.",
                        "career": "Your work is reaching a high point, with more recognition and influence. Stay collaborative and use success to create opportunities for others instead of building everything around yourself.",
                        "health": "Your condition is strong. Protect it by turning what works into a sustainable baseline rather than using good health as permission to overdo things.",
                        "finances": "Past planning is paying off and resources are growing. Stay disciplined, avoid excessive expansion, and decide what your wealth is meant to support.",
                        "relationships": "People may look to you for direction, which makes honest feedback even more important. Make it safe for others to disagree with you."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The dragon has reached the highest point. Pushing further can turn success into decline, so recognize the limit, step back when needed, and protect what you have built.",
                    "main_state": "Stable continuity through restraint",
                    "main_strategy": "Step back at the peak and leave room for the long term",
                    "support_risk": "Clinging to the high point instead of letting go",
                    "support_warning": "Refusing to leave the peak",
                    "guide": {
                        "love": "Accept the relationship's natural rhythm instead of forcing it to stay at a peak:\n• Appreciate what you have and let stability take a calmer form.",
                        "career": "Plan the next transition while things are still going well:\n• Turn your experience into something others can carry forward.",
                        "health": "Adjust your care to what your body needs now rather than old standards:\n• Change the goal when your condition changes instead of forcing the same pace.",
                        "finances": "Take profits and reduce risk when the time is right:\n• Reallocate resources for the next stage instead of chasing past returns.",
                        "relationships": "Stay approachable even when you are highly respected:\n• Keep listening to criticism so praise does not distort your judgment."
                    },
                    "focus": {
                        "love": "The relationship or expectation may have reached a peak. Do not force constant intensity; let the bond change naturally so it can remain healthy.",
                        "career": "Your career may be near a peak, but new risks are forming. Think about transition while conditions are strong rather than waiting for decline to force a change.",
                        "health": "Your body may be entering a different phase after a high point. Adjust your expectations and care instead of demanding the same output as before.",
                        "finances": "Financial gains may be near a peak or becoming more volatile. Protect what you have, reduce unnecessary leverage, and resist the urge to keep chasing higher returns.",
                        "relationships": "Recognition can create distance. Stay humble and reconnect with people as an equal rather than relying on status or praise."
                    }
                }
            },
            "kun": {
                "1": {
                    "name": "Beginning",
                    "text": "The first frost is an early sign of winter. Notice small changes now so you can prepare before conditions become harder.",
                    "main_state": "Being ready because you noticed the signs early",
                    "main_strategy": "Pay attention to small signals and prepare in advance",
                    "support_risk": "Assuming it is too early to worry",
                    "support_warning": "Skipping preparation because the problem still feels distant",
                    "guide": {
                        "love": "Show care through small daily details:\n• If the other person seems off, ask how they are doing.",
                        "career": "Prepare a backup plan for current projects:\n• Spend a little time each week watching changes in your field.",
                        "health": "Prioritize warmth and sleep when seasons or routines change:\n• Respond to fatigue early with rest and simple care.",
                        "finances": "Build a dedicated emergency fund:\n• Review regular expenses and remove what you do not need.",
                        "relationships": "Read the mood before speaking:\n• When someone is upset, listen before offering advice."
                    },
                    "focus": {
                        "love": "Small changes in tone or behavior may matter more than they seem. Notice them early and respond with care before minor friction becomes a larger problem.",
                        "career": "Subtle shifts in your work or industry may be starting. Stay aware and prepare alternatives now so you are not forced to react later.",
                        "health": "Fatigue, feeling cold, or other small changes can be early signals. Adjust sleep, warmth, and basic care before the problem grows.",
                        "finances": "Prepare for uncertainty before it becomes urgent. Build an emergency buffer and close small spending leaks while you still have room to act calmly.",
                        "relationships": "A subtle tension or misunderstanding may be forming. Observe the mood, choose timing carefully, and avoid sensitive topics when the moment is wrong."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Earth does not need to prove its strength; it simply supports what rests on it. Return to what is simple and genuine, and let trust come naturally.",
                    "main_state": "Long-term trust built through honesty and steadiness",
                    "main_strategy": "Keep things simple and avoid unnecessary tactics",
                    "support_risk": "Wanting to use shortcuts or clever methods",
                    "support_warning": "Abandoning a solid approach because results feel too slow",
                    "guide": {
                        "love": "Be yourself without over-polishing your image:\n• Appreciate the quiet, ordinary moments you share.",
                        "career": "Finish the basics thoroughly:\n• When a shortcut appears, choose the honest route.",
                        "health": "Keep regular sleep and wake times:\n• Spend time walking or being outdoors each week.",
                        "finances": "Focus on steady income instead of speculation:\n• Invest only in areas you understand and can assess clearly.",
                        "relationships": "Treat friends with sincerity rather than strategy:\n• Spend less time on empty networking and more on real relationships."
                    },
                    "focus": {
                        "love": "The relationship can deepen through simple daily consistency. You do not need constant surprises; honesty and reliability create the strongest sense of security.",
                        "career": "Your advantage now is solid execution, not flashy performance. Do the fundamentals well and let reliability build your reputation over time.",
                        "health": "Your body may need a simpler, more regular routine. Stable sleep, basic food, and gentle activity can restore balance better than constant changes.",
                        "finances": "Steady income, controlled spending, and familiar investments are more useful than complex speculation. Build the base first and let growth follow.",
                        "relationships": "Sincere, straightforward behavior will attract dependable people. Focus on real connection rather than maintaining a large social surface."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "You have something to offer, but this is a time to keep your light modest. Work quietly and let time show the value of what you do.",
                    "main_state": "Greater trust through restraint and quiet contribution",
                    "main_strategy": "Support the larger goal without needing the spotlight",
                    "support_risk": "Wanting immediate recognition",
                    "support_warning": "Competing for attention because you feel overlooked",
                    "guide": {
                        "love": "Offer support before advice when the other person needs you:\n• Soften your tone before discussing disagreements.",
                        "career": "Take on useful coordination work behind the scenes:\n• Share credit with the team instead of competing for attention.",
                        "health": "Use a few slow breaths when emotions rise:\n• Keep a short daily period for quiet reflection.",
                        "finances": "Avoid offers promising easy short-term profits:\n• Keep your financial situation private and low-key.",
                        "relationships": "Help people who are stuck:\n• Share praise and opportunities with people who deserve them."
                    },
                    "focus": {
                        "love": "Support and understanding may help more than trying to lead the relationship. Listen first and reduce the need to win an argument.",
                        "career": "Your value may be strongest in coordination and dependable execution. Put the team goal ahead of personal visibility, and trust will grow.",
                        "health": "Emotional agitation can quietly drain your energy. Regular breathing, reflection, or quiet time can help your body settle as well.",
                        "finances": "Keep your approach conservative and avoid chasing other people's returns. Quiet, understandable investments are enough for now.",
                        "relationships": "Helping others without competing for credit can strengthen your network naturally. Reliable support is often remembered longer than a strong performance."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The situation is still unclear, so do not say or do more than necessary. Keeping a low profile is the safest form of protection right now.",
                    "main_state": "Stability gained through restraint and discretion",
                    "main_strategy": "Be careful with words and actions and avoid unnecessary conflict",
                    "support_risk": "The urge to speak or act before it is useful",
                    "support_warning": "Drawing attention to yourself in a complicated situation",
                    "guide": {
                        "love": "Step away when angry and talk after you have cooled down:\n• Keep private relationship issues between the people involved.",
                        "career": "Stay out of office gossip:\n• Share sensitive information only with the right people at the right time.",
                        "health": "Decline nonessential social obligations:\n• Keep some time each day completely to yourself.",
                        "finances": "Cut unnecessary expenses:\n• Put high-risk plans on hold for now.",
                        "relationships": "Do not rush into other people's conflicts:\n• Share personal concerns only with people you truly trust."
                    },
                    "focus": {
                        "love": "When tension is high, wait until you are calm before speaking. Protect trust by handling private issues directly rather than turning them into outside discussion.",
                        "career": "The environment may be complicated. Stay professional, avoid gossip, and be especially careful with confidential information.",
                        "health": "Your energy may be easier to drain right now. Reduce unnecessary social pressure and give yourself enough quiet time to recover.",
                        "finances": "Use a defensive financial approach: cut nonessential spending, preserve cash, and delay high-risk moves until conditions are clearer.",
                        "relationships": "Keep some polite distance from other people's disputes. Strong boundaries and careful trust can prevent many unnecessary problems."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Keep your best qualities quiet rather than displaying them. People can feel steady warmth without being told where it comes from.",
                    "main_state": "Goodwill built through calm and considerate behavior",
                    "main_strategy": "Let your warmth show naturally without seeking attention",
                    "support_risk": "Wanting to prove your value",
                    "support_warning": "Showing off your effort because you want recognition",
                    "guide": {
                        "love": "Be patient with the other person's small emotional ups and downs:\n• Keep investing in simple, happy daily moments.",
                        "career": "Take on work that requires coordination or mediation:\n• Stay neutral and fair when handling disputes.",
                        "health": "Keep the routines that are already working:\n• Set aside a short period each day to settle your mind and body.",
                        "finances": "Maintain a steady asset-allocation plan:\n• Do not make aggressive changes just to speed things up.",
                        "relationships": "Check in on people who need someone to listen:\n• Treat people with the same calm consistency over time."
                    },
                    "focus": {
                        "love": "The relationship is becoming stable and warm. You do not need to prove devotion; steady care in ordinary moments is enough.",
                        "career": "Your balanced judgment is earning trust. You may be well suited to roles that require mediation, allocation, or fair handling of disagreements.",
                        "health": "Your current rhythm appears supportive. Keep regular sleep, food, and quiet time instead of changing what is already working.",
                        "finances": "Your finances are growing steadily. Maintain a balanced approach and avoid taking more risk simply because conditions feel good.",
                        "relationships": "Your calm, approachable manner is making you a trusted listener. Consistent kindness can turn casual connections into a strong support network."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Trying too hard to prove you are right can leave everyone hurt. Loosen your grip; a softer approach gives the deadlock room to change.",
                    "main_state": "A standoff created by too much force",
                    "main_strategy": "Return to flexibility and stop unnecessary confrontation",
                    "support_risk": "Fighting for control and refusing to yield",
                    "support_warning": "Turning every disagreement into a contest",
                    "guide": {
                        "love": "Let go of the need to decide who is right during conflict:\n• Learn to accept differences instead of correcting each other.",
                        "career": "Suggest negotiation before confrontation:\n• Stay within your role and avoid overreaching.",
                        "health": "Use breathing or gentle stretching before bed:\n• Keep a regular way to release accumulated stress.",
                        "finances": "Avoid all-or-nothing financial decisions:\n• Review risk regularly and cut losses when needed.",
                        "relationships": "Offer goodwill to people you have tension with:\n• In competition, look for a workable outcome instead of a winner."
                    },
                    "focus": {
                        "love": "A struggle over control may be hurting both sides. Stop trying to win and make room for difference, compromise, and a calmer conversation.",
                        "career": "Direct confrontation with a manager or partner may create more damage than progress. Stay within your authority and use negotiation where possible.",
                        "health": "Built-up emotional tension may be affecting sleep or physical comfort. Give stress a regular outlet through breathing, stretching, or quiet movement.",
                        "finances": "Avoid aggressive expansion or attempts to recover losses quickly. Protect your remaining resources and stabilize first.",
                        "relationships": "Step away from destructive competition and look for solutions both sides can live with. A small concession may restore more than another fight can win."
                    }
                }
            },
            "zhun": {
                "1": {
                    "name": "Beginning",
                    "text": "You are not stuck because you lack courage; the timing is simply not ready. Keep your purpose steady and build the base while you wait.",
                    "main_state": "A solid phase of strengthening the foundation",
                    "main_strategy": "Find trustworthy allies and build the basics together",
                    "support_risk": "Uncertainty about which direction to take",
                    "support_warning": "Trying to move faster before the foundation is ready",
                    "guide": {
                        "love": "Strengthen your own sense of security first:\n• Let interaction grow naturally through shared people or activities.",
                        "career": "Write down clear goals and basic rules:\n• Find a reliable partner who shares the direction.",
                        "health": "Keep your lower body warm and avoid overstrain:\n• Add simple core-strength work each week.",
                        "finances": "Stabilize basic expenses before investing:\n• Get professional help with long-term planning if needed.",
                        "relationships": "Ask an experienced person for guidance:\n• Spend time building trust with close collaborators."
                    },
                    "focus": {
                        "love": "The relationship is just beginning, so uncertainty is normal. Give each other time and let connection grow through relaxed, natural interaction.",
                        "career": "The priority is structure, not scale. Set clear goals, define the basics, and build with people who can share the early workload.",
                        "health": "Focus on simple, steady care and basic strength. Consistency will protect you better than occasional intense effort.",
                        "finances": "Stabilize income, spending, and savings before expanding into investments. Good sequencing matters more than speed.",
                        "relationships": "Trusted mentors and teammates can save you from avoidable mistakes. Invest time in relationships built through shared work."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "What looks chaotic may simply be incomplete. Do not rush to judge the situation before you can see the whole picture.",
                    "main_state": "Clarity that comes after the full situation becomes visible",
                    "main_strategy": "Give the situation more time before making a major decision",
                    "support_risk": "Feeling stuck between two unclear options",
                    "support_warning": "Mistaking something unfamiliar for a real threat",
                    "guide": {
                        "love": "Talk through resistance before trying to fix everything:\n• Give each other more time.",
                        "career": "Pause major changes and watch how conditions develop:\n• Keep improving the core product or service.",
                        "health": "Keep a regular schedule and stop draining yourself with late nights:\n• Use simple food and rest to support recovery.",
                        "finances": "Prepare for a longer time horizon:\n• Keep saving steadily instead of reacting to short-term news.",
                        "relationships": "Stay calm when misunderstood:\n• Focus on the relationships that matter most."
                    },
                    "focus": {
                        "love": "Reality may be testing the relationship. Stay patient, communicate directly, and avoid forcing a quick resolution.",
                        "career": "Progress may be blocked for now. Slow down, observe conditions, and use the pause to strengthen the quality of what you are building.",
                        "health": "Your body may need steady routines more than aggressive intervention. Give simple care enough time to work.",
                        "finances": "Returns may take longer than expected. Stay disciplined and avoid changing course because of short-term noise.",
                        "relationships": "You do not need to defend yourself immediately when others misunderstand you. Let consistent behavior speak over time."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Entering unfamiliar ground without enough information can leave you lost. Step back, reassess, and choose a route you understand better.",
                    "main_state": "A new direction found by leaving a path that does not work",
                    "main_strategy": "Let go when continuing would only deepen the problem",
                    "support_risk": "Getting deeper into trouble because information is incomplete",
                    "support_warning": "Staying on a dead-end path because you do not want to give up",
                    "guide": {
                        "love": "Accept when a match is not right and step away early:\n• Keep your own judgment in relationships.",
                        "career": "Get guidance before entering an unfamiliar field:\n• Stop projects with no clear path and reassess.",
                        "health": "Cancel risky activity when conditions or energy are poor:\n• Put safety ahead of proving yourself.",
                        "finances": "Do not act on unverified tips:\n• Set a stop-loss level and follow it.",
                        "relationships": "Distance yourself from people who pull you in a harmful direction:\n• Keep independent judgment when the crowd is loud."
                    },
                    "focus": {
                        "love": "Do not keep pursuing a relationship that clearly does not fit. Stepping away early can protect your time, judgment, and self-respect.",
                        "career": "Do not enter a new field blindly or keep funding a directionless project. Pause, reassess, and choose a path supported by better information.",
                        "health": "Avoid risky activity when your body or the environment is not ready. Long-term health is better protected by caution than by pushing through.",
                        "finances": "Unverified tips and desperate attempts to recover losses are dangerous. Protect capital first and leave room for future opportunities.",
                        "relationships": "Keep distance from people who consistently lead you toward bad decisions. Your trust should go to people who help you stay clear and grounded."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Too much hesitation keeps you in place. Reach out, ask for what you need, and the situation may begin to move again.",
                    "main_state": "A chance to unlock progress through initiative",
                    "main_strategy": "Stop waiting and actively seek the people or resources you need",
                    "support_risk": "Remaining hesitant and afraid to step forward",
                    "support_warning": "Missing the right moment because you fear rejection",
                    "guide": {
                        "love": "Find a good moment to express what you truly feel:\n• Make time for a deeper conversation.",
                        "career": "Contact people who may provide useful resources:\n• Use the opening to restart stalled work.",
                        "health": "Get chronic symptoms checked early and seek a second opinion if needed:\n• Work with a qualified professional on a practical plan.",
                        "finances": "Ask a qualified adviser about funding options:\n• Consider partnerships that combine resources responsibly.",
                        "relationships": "Join settings where you can meet useful new contacts:\n• Build cooperation through sincerity, not calculation."
                    },
                    "focus": {
                        "love": "Hesitation may now be costing more than action. Be open about your feelings and create space for a real conversation.",
                        "career": "External support or cross-team help may restart stalled work. Ask clearly for what you need instead of trying to solve everything alone.",
                        "health": "Do not let chronic issues drag on without assessment. The right professional support can make improvement easier to sustain.",
                        "finances": "A good adviser or partner may help unlock resources you cannot access alone. Keep the structure clear and responsibilities defined.",
                        "relationships": "Expand your circle through genuine interaction. Strong partnerships grow from mutual value, not from trying to impress people."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You may not have enough resources yet, but the direction is sound. Build gradually and let small gains accumulate.",
                    "main_state": "A steady phase that improves through patient accumulation",
                    "main_strategy": "Protect the basics and build from small, manageable steps",
                    "support_risk": "Frustration because your resources cannot support everything yet",
                    "support_warning": "Committing too much too early",
                    "guide": {
                        "love": "Start with small daily acts of care:\n• Respect the other person's pace without pressure.",
                        "career": "Test on a small scale before expanding:\n• Confirm results at each stage before moving on.",
                        "health": "Start with one simple habit you can maintain:\n• Avoid extreme health routines.",
                        "finances": "Begin with small, steady investments:\n• Review expected value before large spending.",
                        "relationships": "Build sincere support within your immediate circle:\n• Let actions prove your values."
                    },
                    "focus": {
                        "love": "Small, consistent care is more useful than dramatic progress. Give the relationship enough room to develop without pressure.",
                        "career": "Validate new ideas on a small scale before expanding. Strong foundations matter more than fast rollout.",
                        "health": "Simple habits such as better sleep, hydration, and regular movement are enough to start. Sustainable change beats extreme effort.",
                        "finances": "Keep investments small and understandable, and control major spending. Slow growth is better than taking risks you cannot evaluate.",
                        "relationships": "Build trust through quiet, consistent help. A strong reputation grows from what you do, not what you claim."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You have carried this alone for too long. Let people who genuinely care come closer and help you through the deadlock.",
                    "main_state": "A deadlock that can ease once you accept support",
                    "main_strategy": "Ask for help instead of carrying everything alone",
                    "support_risk": "Feeling isolated and out of options",
                    "support_warning": "Holding all the pressure yourself because you do not want to burden others",
                    "guide": {
                        "love": "Be honest about what can no longer be repaired:\n• Give yourself a safe way to release built-up emotion.",
                        "career": "End projects that clearly need to stop:\n• Turn the experience into lessons for the next step.",
                        "health": "Pay attention to persistent fatigue or stress-related warning signs:\n• Seek qualified mental-health or medical support when needed.",
                        "finances": "Accept losses and stop them from growing:\n• Review remaining assets and rebuild from a simpler plan.",
                        "relationships": "Leave relationships that keep draining you:\n• Reach out to people who can offer real understanding."
                    },
                    "focus": {
                        "love": "If the relationship has reached a point that cannot be repaired, admitting it may be kinder than continuing to force it. Give yourself support and room to recover.",
                        "career": "Stop work that no longer has a viable path. Accept the loss, learn from it, and keep resources available for the next worthwhile opportunity.",
                        "health": "Long-term stress or sadness can affect your body as well as your mood. Seek qualified support rather than trying to carry everything alone.",
                        "finances": "Face losses directly, stop further damage, and rebuild from the numbers you actually have. Recovery starts with an honest reset.",
                        "relationships": "Step away from relationships that repeatedly cause harm and make room for people who offer steady, genuine support."
                    }
                }
            },
            "meng": {
                "1": {
                    "name": "Beginning",
                    "text": "A young bird learning to fly needs clear but gentle limits. Structure is not a cage; it protects you while you are still learning.",
                    "main_state": "A stage that becomes stable once basic rules are in place",
                    "main_strategy": "Build discipline through small habits and a clear framework",
                    "support_risk": "Resisting limits because you want complete freedom",
                    "support_warning": "Letting yourself become undisciplined in the name of freedom",
                    "guide": {
                        "love": "Ask calmly when something is unclear:\n• Notice whether words and actions match.",
                        "career": "Ask experienced people when you do not know something:\n• Treat each attempt as a chance to learn and adjust.",
                        "health": "Seek qualified medical evaluation for symptoms:\n• Be cautious with unverified health claims.",
                        "finances": "Learn basic finance before investing:\n• Invest only in products you fully understand.",
                        "relationships": "Save major trust and commitments for people you know well:\n• Observe new relationships before getting too close."
                    },
                    "focus": {
                        "love": "Early relationships need honest communication more than idealized expectations. Ask questions, notice value differences, and let trust rest on what is real.",
                        "career": "In a new field, learn from people with experience and correct mistakes quickly. Get the basics right before chasing speed.",
                        "health": "Use reliable medical guidance instead of trying random remedies. Good information and practical habits are more useful than hearsay.",
                        "finances": "If your financial knowledge is limited, learn before acting. Set a budget, stay with understandable products, and ask qualified people when needed.",
                        "relationships": "Let time show whether new people are trustworthy. Be friendly, but do not give away important information or commitments too quickly."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Treat people and situations that are still developing with patience. Calm guidance can make others feel safe enough to grow.",
                    "main_state": "Trust built through patience and acceptance",
                    "main_strategy": "Guide with warmth instead of blame",
                    "support_risk": "The effort required to support someone who is still learning",
                    "support_warning": "Losing patience because progress is slow",
                    "guide": {
                        "love": "Check whether your values fit before investing deeply:\n• Do not ignore obvious incompatibility because of early attraction.",
                        "career": "Distribute work instead of doing everything yourself:\n• Give newer teammates time and guidance.",
                        "health": "Collect information calmly before major health decisions:\n• Seek a second professional opinion when useful.",
                        "finances": "Investigate opportunities that look unusually good:\n• Diversify and never borrow heavily for one investment.",
                        "relationships": "Watch how a new person treats others:\n• Let trust grow through repeated interaction."
                    },
                    "focus": {
                        "love": "Attraction is not the same as compatibility. Learn about each other's values and daily habits before making a major commitment.",
                        "career": "Responsibility does not mean doing everything yourself. Delegate well, teach newer teammates, and let different strengths improve the whole team.",
                        "health": "Do not let anxiety drive complex health decisions. Gather information, compare professional opinions, and be cautious with exaggerated promises.",
                        "finances": "Be skeptical of unusually attractive opportunities. Do proper research, spread risk, and do not borrow money just to avoid missing out.",
                        "relationships": "Stay open with new people without becoming overly familiar too quickly. Shared experience will show who is worth deeper trust."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Do not be distracted by appearances. Keep your own judgment; bending yourself to win approval often leaves you with very little in return.",
                    "main_state": "Clarity that sees beyond appearances",
                    "main_strategy": "Think independently and do not betray yourself to please someone",
                    "support_risk": "Being drawn to something attractive but unreliable",
                    "support_warning": "Abandoning your principles because of someone else's image or status",
                    "guide": {
                        "love": "State your needs and boundaries clearly:\n• Stop using people-pleasing to earn attention.",
                        "career": "Identify and correct repeated mistakes:\n• Reject unreasonable demands and focus on work that helps you grow.",
                        "health": "Set limits around habits you already know are harmful:\n• Put rest and health into your regular schedule.",
                        "finances": "Set clear financial rules for yourself:\n• Practice saying no to unreasonable requests.",
                        "relationships": "Say no when a request crosses your limits:\n• Step away from people who always require you to sacrifice yourself."
                    },
                    "focus": {
                        "love": "A relationship becomes unhealthy when one person always gives and adjusts. State what you need and stop using sacrifice as a way to earn care.",
                        "career": "Stop repeating patterns that have already failed. Set boundaries, reject unreasonable demands, and put your effort where you can actually develop.",
                        "health": "Old habits may be keeping your body uncomfortable. Set practical limits around sleep, food, work, or social demands and protect them consistently.",
                        "finances": "Financial problems can come from being unable to say no. Protect your budget, refuse pressure, and keep your rules even when others push.",
                        "relationships": "Healthy relationships can survive reasonable boundaries. Distance yourself from people who expect you to keep giving at your own expense."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Closing yourself off only increases confusion and isolation. Open the door a little and allow useful guidance to reach you.",
                    "main_state": "A chance to reconnect once stubbornness softens",
                    "main_strategy": "Drop the pride and actively seek help or direction",
                    "support_risk": "Feeling lost and unsure whom to trust",
                    "support_warning": "Staying closed because you do not want to admit you do not know",
                    "guide": {
                        "love": "Give yourself quiet time to sort out what you feel:\n• Write down the questions that keep bothering you.",
                        "career": "Ask when you do not understand instead of pretending:\n• Learn from a mentor you respect.",
                        "health": "Organize symptoms and medical history:\n• Verify reliable health information before discussing options.",
                        "finances": "Pause decisions that make you uneasy:\n• Write down your questions and ask a qualified professional.",
                        "relationships": "Try to see conflict from the other person's perspective:\n• Address misunderstandings directly before they grow."
                    },
                    "focus": {
                        "love": "If the relationship feels confusing, stop guessing and give yourself time to identify what you actually want before acting.",
                        "career": "Questions are not a weakness. Ask about unfamiliar rules or tasks and learn from people who can show you how things really work.",
                        "health": "For a long-running health issue, keep organized records and use reliable information to have better discussions with qualified clinicians.",
                        "finances": "If an investment makes you uneasy, pause and investigate before acting. Missing one opportunity is better than losing money through confusion.",
                        "relationships": "If you feel out of place, consider whether both sides may be misunderstanding each other. A direct conversation can remove assumptions that have grown too large."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Ask and learn with open curiosity. Humility can reveal options you would not see if you were afraid to admit uncertainty.",
                    "main_state": "A clearer view opened by sincere learning",
                    "main_strategy": "Drop assumptions and absorb what useful experience can teach you",
                    "support_risk": "Feeling unsure whether you are capable enough",
                    "support_warning": "Staying silent because you are afraid of looking inexperienced",
                    "guide": {
                        "love": "Keep an independent life inside the relationship:\n• Do not carry all of the other person's emotions and responsibilities.",
                        "career": "Take on greater responsibility when you are ready:\n• Own the results of your decisions.",
                        "health": "Make regular time for movement and healthy food:\n• Build from simple habits you can sustain.",
                        "finances": "Set clear saving and investing goals:\n• Review your asset allocation regularly.",
                        "relationships": "Address misunderstandings instead of leaving them unresolved:\n• Be the kind of friend you want to have."
                    },
                    "focus": {
                        "love": "A healthy relationship needs closeness and independence. Keep your own life and avoid carrying responsibilities that belong to the other person.",
                        "career": "You are ready to move from learning to ownership. Take responsibility for larger tasks and build clear standards for your own work.",
                        "health": "Regular movement and sensible food matter more than extreme routines. Small daily investments in health can compound over time.",
                        "finances": "Take responsibility for your financial independence. Set goals, save and invest consistently, and review where your money is going.",
                        "relationships": "Take responsibility for the quality of your relationships. Clear up misunderstandings, return kindness, and model the friendship you value."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "When correcting someone, a clear and respectful boundary is enough. Guide the flow rather than trying to block it with force.",
                    "main_state": "Guidance that feels clear without becoming harsh",
                    "main_strategy": "Set firm boundaries without becoming aggressive",
                    "support_risk": "Not knowing whether you are being too strict or too soft",
                    "support_warning": "Using an attacking tone because you care too much about the outcome",
                    "guide": {
                        "love": "Accept when the relationship is no longer a good fit:\n• Give yourself enough time to recover.",
                        "career": "Evaluate honestly whether to stay or leave:\n• Prepare your next option before moving on.",
                        "health": "Schedule health checks you have been delaying:\n• Make health care a non-negotiable part of your calendar.",
                        "finances": "Face losses honestly and learn to stop them:\n• Get qualified help if you need to rebuild financial discipline.",
                        "relationships": "Set boundaries with relationships that hurt you:\n• Ask trusted people or professionals for support when needed."
                    },
                    "focus": {
                        "love": "Ending a relationship that keeps harming both people can be an act of care. Accept what no longer fits and give yourself room to heal.",
                        "career": "If a role or project has no viable future, prepare an exit instead of fighting indefinitely. Leaving the wrong environment can create space for a better one.",
                        "health": "Do not keep postponing checks for persistent warning signs. Make health care a priority while problems are still manageable.",
                        "finances": "Do not keep adding money to hide an earlier mistake. Accept losses, reset your rules, and seek professional help if debt or structure needs repair.",
                        "relationships": "Distance yourself from relationships that repeatedly exploit or hurt you. Clear boundaries make room for healthier connections."
                    }
                }
            },
            "xu": {
                "1": {
                    "name": "Beginning",
                    "text": "The goal is still some distance away. Do not rush the first part of the journey; stand firmly where you are and let steady steps shorten the distance.",
                    "main_state": "Gradual progress built one solid step at a time",
                    "main_strategy": "Accept the starting point and strengthen the basics",
                    "support_risk": "Wanting a shortcut because the path feels too long",
                    "support_warning": "Giving up halfway",
                    "guide": {
                        "love": "Release the need for quick certainty and build trust through steady presence:\n• Let familiarity grow without forcing a timeline.",
                        "career": "Once the direction is clear, focus on the next solid step:\n• Divide a long goal into smaller milestones.",
                        "health": "Keep repeating the care that supports recovery:\n• Track small gains so progress is easier to notice.",
                        "finances": "Break long-term goals into realistic stages:\n• Resist shortcuts and keep each decision within your plan.",
                        "relationships": "Maintain contact at a steady pace:\n• Do not mistake temporary distance for failure."
                    },
                    "focus": {
                        "love": "The relationship is still early, so pushing for clarity may create pressure. Build trust by being steady and letting closeness develop over time.",
                        "career": "The road from start to goal may feel slow. Avoid shortcuts and keep moving through clear, manageable steps.",
                        "health": "Early recovery can feel discouraging because change is small. Do not abandon a sound approach simply because the result is not immediate.",
                        "finances": "Your financial goal is still far away, but that does not make the plan wrong. Let steady saving and compounding do the work instead of chasing faster returns.",
                        "relationships": "Trust is still shallow, so avoid rushing intimacy. Consistent interaction can build familiarity without making the other person defensive."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Noise and outside opinions can make waiting harder. Do not spend your energy proving yourself; keep your rhythm and let the noise pass.",
                    "main_state": "A steadier rhythm after outside noise fades",
                    "main_strategy": "Stay with your own pace and let gossip pass",
                    "support_risk": "Doubting yourself because of other people's opinions",
                    "support_warning": "Following the crowd",
                    "guide": {
                        "love": "Keep outside opinions outside the relationship:\n• Trust what you actually experience together.",
                        "career": "Answer doubt with consistent work rather than constant defense:\n• Recheck whether your original reasoning still holds.",
                        "health": "Return to qualified guidance and give a reasonable method time:\n• Filter excessive or unsupported information.",
                        "finances": "Ignore other people's gains and judge opportunities by your own conditions:\n• Keep your rules instead of chasing the crowd.",
                        "relationships": "Explain yourself only to people who matter:\n• Let consistent behavior answer rumors."
                    },
                    "focus": {
                        "love": "Friends, family, or comparison may be making you question the relationship. Do not act just to prove something; trust what you know from direct experience.",
                        "career": "Criticism or market noise may be testing your confidence. Recheck the facts, then protect your focus instead of wasting energy on every opinion.",
                        "health": "Conflicting health advice can create more anxiety than clarity. Use reliable professional guidance and give a sound plan enough time before changing it.",
                        "finances": "Other people's apparent profits can tempt you into late, emotional decisions. Stay with opportunities that fit your own risk and conditions.",
                        "relationships": "Rumors and misunderstandings do not require a public defense. Clarify matters with the people who count and let time reduce the rest."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "A sudden risk has appeared during the wait. Do not charge into it just to prove courage; protect what matters and wait for a better opening.",
                    "main_state": "A safer turn after avoiding unnecessary danger",
                    "main_strategy": "When conditions are unfavorable, step aside and preserve your strength",
                    "support_risk": "Fighting head-on because you do not want to look weak",
                    "support_warning": "Acting from pride or anger",
                    "guide": {
                        "love": "Leave a heated confrontation before making a damaging decision:\n• Talk again after both sides have calmed down.",
                        "career": "Assess the cost of direct conflict and protect core resources first:\n• Prepare contingency plans for sudden changes.",
                        "health": "Get qualified assessment before trying high-risk solutions:\n• Do not let fear push you into random treatment.",
                        "finances": "Stop the loss from getting worse before making a recovery plan:\n• Avoid high-cost debt or all-in attempts to recover quickly.",
                        "relationships": "Create distance until emotions settle:\n• Give yourself time to decide whether to repair or leave."
                    },
                    "focus": {
                        "love": "A sudden conflict or change in attitude may make you want to react immediately. Step out of the emotional standoff first, then decide what the relationship needs.",
                        "career": "A competitor, resource problem, or sudden change may be forcing a response. Protect the essentials before entering a fight that may not be worth the cost.",
                        "health": "A new warning sign or setback deserves careful assessment, not extreme action. Seek qualified guidance before taking unnecessary risks.",
                        "finances": "A sudden loss or cash need can trigger desperate decisions. Stop further damage first and do not turn a short-term problem into long-term debt.",
                        "relationships": "If trust has been shaken, do not make permanent decisions in peak anger. Protect your boundaries, cool down, and then choose whether the relationship can be repaired."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The end of the wait is finally visible, but the last stretch still matters. Keep the same care and attention until the result is secure.",
                    "main_state": "A safe finish through continued caution",
                    "main_strategy": "Stay alert near the exit and complete the final stage carefully",
                    "support_risk": "Relaxing too early because relief feels close",
                    "support_warning": "Failing at the last step",
                    "guide": {
                        "love": "Keep the same patience until the relationship is truly clear:\n• Do not stop caring just because progress is visible.",
                        "career": "Treat the final stage with the same care as the beginning:\n• Keep checking details until the result is confirmed.",
                        "health": "Increase activity gradually and let your body set the pace:\n• Do not return to old habits simply because you feel better.",
                        "finances": "Confirm the improvement and lock in gains before expanding risk:\n• Let recovery become stable before the next move.",
                        "relationships": "Reinforce new trust through consistent behavior:\n• Respect the pace of the last stage of closeness."
                    },
                    "focus": {
                        "love": "The relationship is finally becoming clearer. Do not rush the last step; let the other person complete it at a comfortable pace.",
                        "career": "A breakthrough is close, but details still matter. Keep your standards high until the opportunity or result is fully secured.",
                        "health": "Feeling better can tempt you to return to full intensity too fast. Restore activity gradually and let your body's response guide the increase.",
                        "finances": "Finances may be stabilizing, but do not increase risk before the improvement is confirmed. Secure progress first.",
                        "relationships": "Trust is beginning to settle. Keep showing the same reliability instead of becoming casual just because the relationship feels safer."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The long wait has reached a rewarding stage. Conditions and resources are ready, so receive the result with gratitude and use it wisely.",
                    "main_state": "Real abundance used with good judgment",
                    "main_strategy": "Accept the results and share them without losing balance",
                    "support_risk": "Becoming wasteful because things are going well",
                    "support_warning": "Overspending or overindulging",
                    "guide": {
                        "love": "Show the other person that their patience and effort are valued:\n• Keep creating fresh connection even in a stable relationship.",
                        "career": "Use the result to strengthen the next stage:\n• Share credit and resources with people who supported the work.",
                        "health": "Keep the good habits that helped you recover:\n• Enjoy better health without returning to draining patterns.",
                        "finances": "Use the result for both present needs and future security:\n• Let some of your resources support people or goals that matter.",
                        "relationships": "Express thanks and return support:\n• Keep responding to trust with consistent sincerity."
                    },
                    "focus": {
                        "love": "The relationship has reached a more secure and rewarding stage. Enjoy it, but keep showing appreciation instead of treating stability as automatic.",
                        "career": "A long-awaited result, promotion, or recognition may arrive. Use it as a stronger foundation rather than a reason to become careless.",
                        "health": "Recovery has become more stable. Keep the habits that helped you get here so the improvement becomes your new normal.",
                        "finances": "Resources or returns may finally be available. Enjoy part of the result, protect part for the future, and avoid sudden excess.",
                        "relationships": "Long-term effort has produced stronger trust and support. Keep the exchange mutual by noticing and returning what others have given you."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The wait is ending, but the outcome may arrive in an unexpected form. Stay open and let a different path complete what you were waiting for.",
                    "main_state": "Completion through accepting an unexpected turn",
                    "main_strategy": "Release fixed expectations and stay open to what arrives",
                    "support_risk": "Resisting change because it was not part of the plan",
                    "support_warning": "Clinging to one expected outcome",
                    "guide": {
                        "love": "Release the need for one specific ending:\n• Do not force or resist the relationship's natural direction.",
                        "career": "Look for value in unexpected opportunities:\n• Adjust the plan when a new option is better than the old script.",
                        "health": "Accept what your body needs now instead of insisting on the old version of normal:\n• Stay open to appropriate new forms of care.",
                        "finances": "Do not reject a useful result simply because it looks different from your plan:\n• Adjust allocation with flexibility.",
                        "relationships": "Respond openly to sincere connections that appear:\n• Let relationships change form without forcing them to stay the same."
                    },
                    "focus": {
                        "love": "The ending may not look like what you imagined. Stay open to a new person, a new form of the relationship, or a different kind of closure.",
                        "career": "An unexpected opportunity or change of direction may finish the waiting period. Do not reject it merely because it was not in the original plan.",
                        "health": "Completion may mean building a healthier relationship with your body rather than becoming exactly as you were before. Accept useful change.",
                        "finances": "The result may come through an unexpected source or structure. Evaluate its real value instead of judging it by whether it matches the original plan.",
                        "relationships": "New connections or changed old relationships may arrive naturally. Avoid forcing one ending and respond to what is actually in front of you."
                    }
                }
            },
            "song": {
                "1": {
                    "name": "Beginning",
                    "text": "The conflict has only just started. Address it while it is still small; early clarity is easier than a long fight.",
                    "main_state": "Calm restored by resolving tension early",
                    "main_strategy": "Handle friction early instead of letting it build",
                    "support_risk": "A small verbal dispute",
                    "support_warning": "Making the situation rigid because you want the last word",
                    "guide": {
                        "love": "State your feelings calmly and directly:\n• Give the other person room to explain.",
                        "career": "Put the disagreement in writing:\n• Agree on the facts before discussing solutions.",
                        "health": "Get small symptoms checked early:\n• Verify online health claims before trusting them.",
                        "finances": "Reconcile unusual charges immediately:\n• Confirm verbal agreements in writing.",
                        "relationships": "Tell the person privately what bothered you:\n• Once it is resolved, do not keep reopening it."
                    },
                    "focus": {
                        "love": "Address small friction before it grows. Speak calmly, listen fully, and remember that one concession does not weaken the relationship.",
                        "career": "Bring differences into the open early. Clarify facts first, then work toward a solution both sides can accept.",
                        "health": "Small warning signs deserve timely attention. Use reliable sources and qualified assessment instead of online noise.",
                        "finances": "Resolve account differences quickly and document agreements. Clear records prevent small money issues from becoming larger disputes.",
                        "relationships": "A direct private conversation is better than hints or repeated retelling. Say what hurt, listen once, and move forward."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "A direct fight may only leave you hurt. Step back, protect yourself, and decide what is worth pursuing from a safer position.",
                    "main_state": "Safety gained by stepping away from escalation",
                    "main_strategy": "Recognize the situation and retreat when necessary",
                    "support_risk": "Feeling wronged and unwilling to let go",
                    "support_warning": "Creating a bigger problem just to defend your pride",
                    "guide": {
                        "love": "Leave the scene when conflict becomes too intense:\n• Separate true boundaries from areas where you can compromise.",
                        "career": "Preserve evidence and work records:\n• Use formal support channels when needed.",
                        "health": "Notice physical signs of chronic stress:\n• Stop responses that clearly worsen symptoms.",
                        "finances": "Compare the cost of pursuing a dispute with the likely benefit:\n• Get professional review for major cases.",
                        "relationships": "Stop over-explaining yourself to draining people:\n• Reduce exposure to high-conflict settings."
                    },
                    "focus": {
                        "love": "When conflict is intense, stepping away can protect both people. Cool down first, then decide what must be defended and where flexibility is possible.",
                        "career": "Protect yourself with records and proper procedures. Do not enter a high-risk confrontation without preparation or support.",
                        "health": "Ongoing conflict may show up as poor sleep, stomach issues, or tension. Reduce what worsens the problem and seek appropriate help.",
                        "finances": "Some disputes cost more to pursue than they are worth. Protect remaining assets and get qualified advice before escalating.",
                        "relationships": "You do not need to answer every provocation. Clear limits and reduced contact can be more effective than another explanation."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Protect what you have already built and do not compete for attention. The storm will pass if you stay focused on your own responsibilities.",
                    "main_state": "Stability maintained by staying within your role",
                    "main_strategy": "Share credit and avoid competing for the spotlight",
                    "support_risk": "A difficult situation that invites unnecessary involvement",
                    "support_warning": "Claiming too much credit to prove yourself",
                    "guide": {
                        "love": "Return to the needs underneath the argument:\n• Do not let winning become more important than the bond.",
                        "career": "Keep clear records of responsibilities and results:\n• Do not let provocation pull you away from your work.",
                        "health": "Maintain routines that are already helping:\n• Do not switch methods repeatedly because of anxiety.",
                        "finances": "Pause high-risk moves and protect the base:\n• Do not increase exposure just to recover losses.",
                        "relationships": "Stay out of conflicts that are not yours:\n• State your position once and avoid endless debate."
                    },
                    "focus": {
                        "love": "Look beneath the argument for what each person actually needs. Protect the trust you have built instead of spending it on a temporary win.",
                        "career": "Stay professional while others argue. Document your work, keep to your responsibilities, and avoid being pulled into unnecessary battles.",
                        "health": "When stress rises, keep the basics stable. Adjust based on objective results rather than changing direction every few days.",
                        "finances": "Protect essential cash and reserves. Do not take larger risks simply because you want to recover a loss quickly.",
                        "relationships": "Avoid factional disputes that do not concern you. A consistent position and steady behavior will speak more clearly than repeated argument."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Winning the argument may not make you feel better. Let go of the contest and return to a position that gives you peace.",
                    "main_state": "Relief after releasing the need to win",
                    "main_strategy": "Choose peace over competition",
                    "support_risk": "Lingering resentment",
                    "support_warning": "Keeping the conflict alive because you still feel wronged",
                    "guide": {
                        "love": "Admit one thing you could improve:\n• Describe your needs instead of attacking.",
                        "career": "Offer a concrete compromise:\n• Put the new agreement in writing.",
                        "health": "Adjust activity honestly and report what is happening:\n• Give a new plan enough time before judging it.",
                        "finances": "Offer a practical payment or settlement plan:\n• Confirm all new terms in writing.",
                        "relationships": "Choose a calm moment to repair the relationship:\n• Start by acknowledging your own part."
                    },
                    "focus": {
                        "love": "Let go of the need to prove who was right. Name your needs, own your part, and look for a calmer way to relate.",
                        "career": "A workable compromise may be more valuable than total victory. Define common goals and document the agreement clearly.",
                        "health": "Respect what your body is showing you and adjust accordingly. Give changes a reasonable observation period before making another shift.",
                        "finances": "A negotiated solution can reduce total loss. Recalculate the full cost, agree on practical terms, and document everything.",
                        "relationships": "Repair starts more easily when someone admits what they can improve. One honest conversation can do more than repeated arguments."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The facts are finally being seen fairly. You no longer need to defend yourself at every turn; let the result speak and move forward.",
                    "main_state": "Resolution after the truth is fairly recognized",
                    "main_strategy": "Trust a fair process instead of constantly defending yourself",
                    "support_risk": "Anxiety while waiting for a final decision",
                    "support_warning": "Losing faith in fairness because of past frustration",
                    "guide": {
                        "love": "Let the facts speak instead of continuing to defend yourself:\n• Put your energy into repair and moving forward.",
                        "career": "Close the dispute fairly:\n• Confirm the result through formal procedures and records.",
                        "health": "Organize test and medication records:\n• Use the professional diagnosis to plan the next stage.",
                        "finances": "Confirm funds through formal channels:\n• Turn the lesson into future risk rules.",
                        "relationships": "End the matter with grace rather than celebrating a win:\n• Accept the result and stop reopening the case."
                    },
                    "focus": {
                        "love": "You may finally feel seen or understood. Stop fighting the old battle and use the clarity to repair, close, or move on.",
                        "career": "A decision or result may now support your position. Finish professionally, document the outcome, and use resolution to end the conflict rather than extend it.",
                        "health": "A clear diagnosis can turn confusion into a plan. Keep organized records and follow qualified guidance for the next stage.",
                        "finances": "A dispute may finally be resolved. Confirm the money and paperwork, then use the experience to strengthen future agreements.",
                        "relationships": "Do not humiliate the other side after a fair outcome. Let the issue end cleanly and return your attention to normal life."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Even a victory may leave little in your hands after a long fight. Choose the path that lets you live with peace rather than needing another win.",
                    "main_state": "Security found by leaving the contest behind",
                    "main_strategy": "Choose peace of mind over proving you won",
                    "support_risk": "Feeling empty even after getting the result you wanted",
                    "support_warning": "Using conflict repeatedly as a way to feel validated",
                    "guide": {
                        "love": "Release the need to win and choose stability:\n• Focus on preventing the same conflict next time.",
                        "career": "Review the true cost of the dispute and repair necessary relationships:\n• Turn the lesson into better systems and procedures.",
                        "health": "Complete the recovery phase even after symptoms improve:\n• Address the root issue instead of increasing intensity on your own.",
                        "finances": "Calculate the full cost and judge the outcome honestly:\n• Add the lesson to future contracts and risk rules.",
                        "relationships": "Do not show off the victory:\n• Leave room for the relationship to take a healthier form."
                    },
                    "focus": {
                        "love": "Being right may still leave the relationship empty. Choose the path that restores peace and reduces the chance of repeating the same fight.",
                        "career": "After a dispute ends, review what it cost and improve the system that allowed it to happen. A professional ending matters more than public victory.",
                        "health": "Feeling better is not always the same as being fully recovered. Complete the necessary recovery process and address the underlying cause.",
                        "finances": "Measure the real outcome after time, fees, and stress are included. Do not keep spending simply to prove the original decision was right.",
                        "relationships": "Once the conflict ends, stop celebrating who won. Protect dignity on both sides and create room for a better future interaction."
                    }
                }
            },
            "shi": {
                "1": {
                    "name": "Beginning",
                    "text": "Before you start, make the direction and limits clear. A weak foundation is much harder to fix later.",
                    "main_state": "A smooth start built on clear rules",
                    "main_strategy": "Set expectations and boundaries from the beginning",
                    "support_risk": "Early disorder that becomes difficult to correct",
                    "support_warning": "Skipping preparation because you want to start immediately",
                    "guide": {
                        "love": "Discuss basic expectations and boundaries early:\n• Clarify practical roles for shared plans.",
                        "career": "Create clear workflows and roles:\n• Turn quality standards into a checklist.",
                        "health": "Keep a regular sleep and exercise rhythm:\n• Change only one or two health goals at a time.",
                        "finances": "Set a fixed monthly saving rate:\n• Automate regular payments to avoid missed deadlines.",
                        "relationships": "Clarify responsibility before cooperation begins:\n• Raise unclear rules early."
                    },
                    "focus": {
                        "love": "Long-term relationships benefit from clear expectations around loyalty, contact, personal space, and shared responsibilities.",
                        "career": "Build workflows, roles, and quality checks before the team moves fast. Structure at the start prevents confusion later.",
                        "health": "Choose a routine you can repeat. A few stable habits are more useful than trying to change everything at once.",
                        "finances": "Automate saving and regular payments, and set spending limits. Good systems reduce the need to rely on willpower every month.",
                        "relationships": "Agree on responsibilities and standards before working together. Early clarity prevents later blame."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You have been given more trust. Carry it fairly, and people will be more willing to support your leadership.",
                    "main_state": "Trust and support earned through fair leadership",
                    "main_strategy": "Lead with fairness rather than favoritism",
                    "support_risk": "The burden of carrying responsibility alongside others",
                    "support_warning": "Using authority to pressure people when stress rises",
                    "guide": {
                        "love": "Make shared decisions together:\n• Give specific appreciation for what the other person does well.",
                        "career": "Assign work by ability and responsibility, not personal closeness:\n• Keep the team informed about direction and progress.",
                        "health": "Use a trusted professional for ongoing health follow-up:\n• Review results before changing the plan.",
                        "finances": "Set yearly saving and spending targets:\n• Direct extra income toward long-term goals.",
                        "relationships": "Hear both sides before handling a dispute:\n• Recognize contributions specifically."
                    },
                    "focus": {
                        "love": "More trust should lead to more shared responsibility, not silent over-functioning. Decide together and make appreciation visible.",
                        "career": "Fairness is central to leadership. Assign work by capability, communicate direction clearly, and recognize good work without favoritism.",
                        "health": "A consistent professional follow-up plan can make health management clearer. Track progress and adjust based on evidence rather than impulse.",
                        "finances": "Use annual targets and regular reviews to keep money aligned with your priorities. Extra income should support the goals that matter most.",
                        "relationships": "Listen to both sides and apply the same standard to everyone. Fair treatment builds lasting trust in a group."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Too many voices pulling in different directions can make the whole situation unstable. Decide who has final responsibility and stop the drift.",
                    "main_state": "Stability after clear authority is established",
                    "main_strategy": "Decide who makes the final call instead of letting everyone move separately",
                    "support_risk": "Conflicting opinions and divided authority",
                    "support_warning": "Allowing disorder because you are afraid to disappoint someone",
                    "guide": {
                        "love": "Keep major relationship decisions between the people involved:\n• Do not let friends or family over-direct the relationship.",
                        "career": "Check whether key roles are held by the right people:\n• Set deadlines for correcting serious performance issues.",
                        "health": "Stop methods that are unsupported and clearly not helping:\n• Seek a second professional opinion for important issues.",
                        "finances": "Review account permissions and shared records:\n• Remove access that should not remain with others.",
                        "relationships": "Address behavior that damages cooperation directly:\n• If it does not improve, change the person's role or access."
                    },
                    "focus": {
                        "love": "Too many outside voices can weaken a relationship. Keep major decisions between the people who actually carry the consequences.",
                        "career": "If key roles are repeatedly failing, review whether the right people hold them. Clear accountability protects the whole team.",
                        "health": "Do not keep using an ineffective or unsupported method out of inertia. For important problems, get a qualified second opinion.",
                        "finances": "Know who can access important accounts and require transparent records for shared money. Financial control should be clear, not assumed.",
                        "relationships": "Repeated behavior that undermines the group needs a direct response. Set a clear expectation, then reduce responsibility if nothing changes."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "When conditions are unfavorable, stepping back is not failure. Knowing when to pause is part of good judgment.",
                    "main_state": "Strength and options preserved through a temporary retreat",
                    "main_strategy": "Pause, regroup, and save resources for a better moment",
                    "support_risk": "Wondering whether stepping back means you are avoiding the problem",
                    "support_warning": "Mistaking a temporary retreat for permanent surrender",
                    "guide": {
                        "love": "Pause repeated arguments and sort out what each person actually needs:\n• Avoid major shared decisions while the relationship is unstable.",
                        "career": "Cut work that consumes resources without results:\n• Preserve useful materials so the project can restart later.",
                        "health": "Pause activities that clearly worsen fatigue or pain:\n• Restore activity gradually after improvement.",
                        "finances": "Pause large nonessential spending and protect emergency reserves:\n• Move money away from unnecessary risk.",
                        "relationships": "Reduce time in high-conflict settings:\n• Do not accept responsibility beyond your capacity."
                    },
                    "focus": {
                        "love": "A temporary pause can help both people think more clearly. Do not make large joint decisions while repeated conflict is still unresolved.",
                        "career": "Protect resources by stopping low-value work and preserving what can be restarted later. Waiting can be strategic.",
                        "health": "When your body clearly objects, reduce the load and recover. Add activity back in stages instead of trying to make up for lost time.",
                        "finances": "Defend cash and emergency reserves before pursuing growth. Moving to safety is sometimes the right financial decision.",
                        "relationships": "You do not need to stay in every tense environment or carry every responsibility. Strategic distance can preserve relationships and energy."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A calm, experienced person is more reliable than a rushed decision. Put important responsibility in capable hands.",
                    "main_state": "Steady progress after responsibility is given to the right person",
                    "main_strategy": "Choose a trustworthy person to lead instead of acting impulsively",
                    "support_risk": "Impatience and the urge to move too fast",
                    "support_warning": "Giving critical decisions to someone without enough experience",
                    "guide": {
                        "love": "Divide important shared responsibilities clearly:\n• Discuss solutions before assigning blame.",
                        "career": "Give the responsible person enough authority to complete the task:\n• Evaluate results and accountability by consistent standards.",
                        "health": "Track objective health indicators regularly:\n• Discuss changes with qualified professionals first.",
                        "finances": "Give important funds clear purposes and accounts:\n• Review insurance and debt structure.",
                        "relationships": "Give critical work to dependable people:\n• Reduce reliance on people who repeatedly fail to follow through."
                    },
                    "focus": {
                        "love": "Shared life works better when important responsibilities are clear and problems are discussed as problems to solve, not reasons to blame.",
                        "career": "Match important tasks with people who have the ability and give them enough authority to deliver. Accountability works only when responsibility and control match.",
                        "health": "Choose a sensible plan, track results, and avoid changing direction every time progress feels slow.",
                        "finances": "Assign clear purposes to important funds and review how insurance, debt, and savings fit together. Structure reduces avoidable risk.",
                        "relationships": "Depend more on people who consistently follow through and less on those who do not. Strong groups place responsibility where it can be carried."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Success can make it easy to reward the wrong people. Give important roles to those whose reliability has been proven over time, not those who claim the most credit.",
                    "main_state": "Team stability maintained by careful recognition and placement",
                    "main_strategy": "Give resources and opportunities to people who have earned trust",
                    "support_risk": "People claiming credit they did not earn",
                    "support_warning": "Giving an important role to the wrong person because of personal pressure",
                    "guide": {
                        "love": "Reserve important trust for people who have proven themselves over time:\n• Do not allow harmful patterns to return.",
                        "career": "Turn successful experience into repeatable processes:\n• Fill key roles based on capability.",
                        "health": "Keep the habits that helped most during recovery:\n• Review overall health regularly.",
                        "finances": "Set fixed asset-allocation rules:\n• Use a review process for major decisions.",
                        "relationships": "State the group's core principles clearly:\n• Do not let personal relationships override long-term interests."
                    },
                    "focus": {
                        "love": "Do not let a comfortable period bring back patterns that already proved harmful. Important trust belongs with behavior that has stood the test of time.",
                        "career": "After success, turn what worked into systems and make sure key roles still match capability and responsibility.",
                        "health": "Keep the habits that contributed most to improvement. Better health should become a long-term way of living, not a temporary phase.",
                        "finances": "Use clear allocation rules and a review process for major decisions. Discipline should protect core assets from emotion or personal pressure.",
                        "relationships": "Long-term group health requires clear principles and appropriate access. Loyalty matters, but it should not excuse repeated unreliability."
                    }
                }
            },
            "bi": {
                "1": {
                    "name": "Beginning",
                    "text": "Approach people with simple, genuine goodwill. Sincerity without hidden motives can bring more warmth than you expect.",
                    "main_state": "Warm connection opened by sincere goodwill",
                    "main_strategy": "Reach out kindly without overthinking it",
                    "support_risk": "Worrying that your goodwill may be misunderstood",
                    "support_warning": "Making a simple gesture complicated by overthinking",
                    "guide": {
                        "love": "Show up as your real self:\n• Express important thoughts directly and gently.",
                        "career": "Do what you said you would do on time:\n• If you cannot, explain early rather than hiding it.",
                        "health": "Start with one habit that is easy to maintain:\n• Keep a simple daily record.",
                        "finances": "Record spending honestly:\n• Automate regular savings.",
                        "relationships": "Be punctual, reliable, and respectful of privacy:\n• Do not promise what you cannot deliver just to please someone."
                    },
                    "focus": {
                        "love": "Genuine interest is enough. Show your real life and speak honestly rather than trying to manufacture attraction.",
                        "career": "Professional trust starts with reliability. Keep commitments and communicate early when something changes.",
                        "health": "Choose one simple habit, track it, and let it become stable before adding more.",
                        "finances": "Honest records and automatic saving build more wealth than complicated tactics you do not understand.",
                        "relationships": "Reliability, privacy, and honest limits are stronger foundations for friendship than trying to please everyone."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "This connection feels stable because neither person needs to pretend. Being yourself will last longer than trying to please.",
                    "main_state": "A relationship becoming stronger through authenticity",
                    "main_strategy": "Stay true to yourself instead of adapting for approval",
                    "support_risk": "The urge to please others at your own expense",
                    "support_warning": "Losing your principles because you want to be liked",
                    "guide": {
                        "love": "Be yourself without performing for approval:\n• Keep your own friends, interests, and space.",
                        "career": "Check shared principles before partnering:\n• Do not join the wrong team for short-term gain.",
                        "health": "Adjust exercise to your own capacity:\n• Choose activities you actually want to continue.",
                        "finances": "Write down the maximum loss you can accept:\n• Let long-term goals guide allocation.",
                        "relationships": "Share honest views with people you trust:\n• Spend time with people around whom you can relax."
                    },
                    "focus": {
                        "love": "A healthy bond does not require constant self-sacrifice. Keep your own life, limits, and interests while staying close.",
                        "career": "Values matter in long-term collaboration. Do not trade basic principles for a temporary advantage.",
                        "health": "Do not compare your body or training pace with others. Choose a level and activity you can sustain.",
                        "finances": "Know your risk limit before acting and let your own long-term goals guide decisions rather than social pressure.",
                        "relationships": "Do not change yourself just to fit a group. The relationships worth keeping are the ones where you can be genuine."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Notice which relationships leave you increasingly tired. Creating distance from the wrong connection is a form of self-respect.",
                    "main_state": "Clearer judgment about who is worth trusting",
                    "main_strategy": "Create distance from relationships that are not healthy for you",
                    "support_risk": "Hesitating because it is hard to let go",
                    "support_warning": "Staying in a draining relationship because of history or fear of being alone",
                    "guide": {
                        "love": "Watch whether the other person respects your boundaries:\n• Do not stay in the wrong relationship just to avoid loneliness.",
                        "career": "Check a partner's record before working together:\n• Exit early when major incompatibility is clear.",
                        "health": "Verify extreme health advice before following it:\n• Ask qualified professionals when symptoms matter.",
                        "finances": "Do not guarantee debt for people with unclear credit:\n• Reject high-pressure sales directly.",
                        "relationships": "Reduce effort toward people who use you:\n• Base trust on long-term behavior."
                    },
                    "focus": {
                        "love": "Repeated boundary violations or manipulation are signs to step back. Loneliness is not a good reason to stay in a clearly unhealthy relationship.",
                        "career": "Check credibility before committing resources. If values or reliability clearly do not fit, leaving early can prevent a much larger loss.",
                        "health": "Be skeptical of extreme advice and stop methods that make you worse. Important symptoms deserve qualified assessment.",
                        "finances": "Do not lend your credit or money under pressure. Protecting your assets is more important than preserving an unhealthy obligation.",
                        "relationships": "Trust patterns of behavior, not flattering words. Reduce access and effort when someone repeatedly takes without giving back."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Move toward people who have earned your trust and express your intentions openly. Sincere initiative can bring a warm response.",
                    "main_state": "A chance for connection through honest initiative",
                    "main_strategy": "Express your wish to connect or cooperate openly",
                    "support_risk": "Holding back because you feel unqualified",
                    "support_warning": "Missing the chance because you are afraid of rejection",
                    "guide": {
                        "love": "Tell a trustworthy person how you feel:\n• Clarify the current relationship directly.",
                        "career": "Share necessary progress and information openly:\n• Get team agreement before making external commitments.",
                        "health": "Invite someone close to build a healthy habit with you:\n• Share progress without comparing yourself.",
                        "finances": "Review shared accounts openly and regularly:\n• Get agreement from everyone affected by major decisions.",
                        "relationships": "Speak directly to the person involved:\n• Avoid gossip and factional behavior."
                    },
                    "focus": {
                        "love": "If the person is trustworthy, honest initiative may be better than continued ambiguity. Have a clear conversation about where the relationship stands.",
                        "career": "Transparency strengthens cooperation. Share relevant progress and make sure the team agrees before you promise something externally.",
                        "health": "A supportive person can help healthy changes last. Use encouragement, not comparison, as the reason to share progress.",
                        "finances": "Shared finances need open records and joint agreement on major choices. Transparency prevents many future disputes.",
                        "relationships": "Say important things to the person directly rather than through others. A reputation for honesty is a valuable social asset."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Keep your hand open instead of gripping. Welcome people who come willingly and let others leave without force; freedom can strengthen the right connections.",
                    "main_state": "The right people staying without being forced",
                    "main_strategy": "Welcome those who come and do not hold back those who choose to leave",
                    "support_risk": "Struggling to let go of certain people or opportunities",
                    "support_warning": "Trying to keep every relationship even when it no longer fits",
                    "guide": {
                        "love": "Respect each other's private and social space:\n• Notice whether the other person also maintains the relationship.",
                        "career": "Set clear goals without micromanaging:\n• Judge by results rather than controlling every method.",
                        "health": "Do not punish yourself for an occasional deviation:\n• Judge progress by long-term trends.",
                        "finances": "Keep some flexible spending money:\n• Avoid overtrading long-term investments.",
                        "relationships": "Do not force friends to take sides:\n• Invest most in relationships that are mutual."
                    },
                    "focus": {
                        "love": "Trust does not need constant checking. Give each other space and watch whether both people continue choosing the relationship freely.",
                        "career": "Mature people often work best with clear goals and reasonable autonomy. Evaluate outcomes without controlling every step.",
                        "health": "Health does not require perfection. One off day matters less than the long-term pattern you can maintain.",
                        "finances": "Leave room for flexibility while keeping long-term investments disciplined. Constant action is not the same as good management.",
                        "relationships": "Do not demand loyalty tests or force people into sides. Put your energy into relationships where care and respect move both ways."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Too much hesitation can make you miss the moment to reach out. Take one step forward instead of watching from a distance.",
                    "main_state": "Connection and belonging after taking initiative",
                    "main_strategy": "Check whether you have become too passive and take a small step",
                    "support_risk": "Feeling isolated and unsure how to reconnect",
                    "support_warning": "Missing opportunities because you are afraid to make the first move",
                    "guide": {
                        "love": "Start a conversation with someone you truly care about:\n• If the moment has passed, accept it and move forward.",
                        "career": "Set response deadlines for important invitations:\n• If one opportunity passes, organize the next option.",
                        "health": "Schedule the checkup you keep delaying:\n• Put health time on your calendar.",
                        "finances": "Write down your investment conditions in advance:\n• Do not chase a missed opportunity at a worse price.",
                        "relationships": "Contact one important friend you have not spoken with recently:\n• Send the first simple message if you want to repair a relationship."
                    },
                    "focus": {
                        "love": "If the relationship matters, do not leave it vague forever. Start the conversation; if the chance has already passed, accept reality without chasing it.",
                        "career": "Important opportunities need timely responses. If one is lost, move quickly to the next practical option instead of staying stuck in regret.",
                        "health": "Stop postponing basic checkups or care. A date on the calendar is more useful than another intention to do it later.",
                        "finances": "Decide your conditions before the market moves. If you miss the entry, do not chase simply because you are afraid of missing out.",
                        "relationships": "Reach out to someone important rather than waiting for the perfect moment. One simple message can reopen a connection."
                    }
                }
            },
            "xiaoxu": {
                "1": {
                    "name": "Beginning",
                    "text": "The clouds are still thin and the wind is not strong enough. Do not force the rain; settle your rhythm and build strength until conditions are ready.",
                    "main_state": "Safety through staying within your current limits",
                    "main_strategy": "Do not force what is not ready",
                    "support_risk": "The urge to rush ahead",
                    "support_warning": "Ignoring reality because you are impatient",
                    "guide": {
                        "love": "Put your attention back on your own life:\n• Stop repeatedly asking where the other person stands.",
                        "career": "Return to basic processes that already work:\n• Stop one clearly inefficient practice.",
                        "health": "Restore regular sleep and meal times:\n• Pause sudden increases in high-load activity.",
                        "finances": "Return to your original budget limits:\n• Record why you overspent and close the leak.",
                        "relationships": "Decline invitations you do not want politely:\n• Spend more time with people around whom you can relax."
                    },
                    "focus": {
                        "love": "The relationship is still in a waiting phase. Stop pressing for an answer and put more attention back into your own life.",
                        "career": "Reality is limiting the plan, so return to proven basics and cut one obvious source of wasted effort.",
                        "health": "Your body may need regularity more than more training. Restore sleep, meals, and manageable activity before adding load.",
                        "finances": "Slow down spending and return to your budget. Fix ongoing leaks before looking for a new investment opportunity.",
                        "relationships": "Say no to obligations you do not actually want and spend more time in relationships where you can be yourself."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Something small is slowing the wheel, but it is not broken. Instead of forcing it alone, ask trusted people to help and use the pause to check your direction.",
                    "main_state": "A steadier pace through moving with others",
                    "main_strategy": "Move with people you trust and let them help you stay aligned",
                    "support_risk": "Wanting to rush ahead alone",
                    "support_warning": "Leaving the team just to prove yourself faster",
                    "guide": {
                        "love": "Share the pressure you are actually carrying:\n• Accept reasonable support and feedback.",
                        "career": "Review the plan with an experienced colleague:\n• Share effective methods with the team.",
                        "health": "Find a regular exercise or walking partner:\n• Set short health goals you can actually meet.",
                        "finances": "Have someone trusted review major decisions:\n• Learn in an environment focused on long-term finance.",
                        "relationships": "Listen fully to sincere advice before responding:\n• Thank friends who are willing to be honest."
                    },
                    "focus": {
                        "love": "Sharing real pressure and accepting support may help more than pushing through alone. Some limits are useful reminders to slow down.",
                        "career": "Ask experienced colleagues to review what is stuck and share what works. Collaboration can solve bottlenecks faster than isolated effort.",
                        "health": "Support from a regular partner or qualified professional can make a routine easier to maintain.",
                        "finances": "A second set of eyes can reduce impulsive mistakes on large decisions. Seek advice from people who value long-term discipline.",
                        "relationships": "Listen to honest feedback before defending yourself. People who tell you the truth respectfully are worth appreciating."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "The problem is not always one person's fault; sometimes people are pulling in different directions. Stop competing, identify the repeated friction, and get everyone back to the same table.",
                    "main_state": "A chance to avoid a break by pausing first",
                    "main_strategy": "Stop and identify the real source of the problem",
                    "support_risk": "Blame and growing tension",
                    "support_warning": "Continuing a head-on fight just to prove who is right",
                    "guide": {
                        "love": "Step back and stop competing:\n• Identify the issue that keeps repeating.",
                        "career": "Find the step that causes the most delays:\n• Assign an owner and see whether it improves.",
                        "health": "Adjust activities connected to recurring discomfort:\n• Rest before the problem becomes disabling.",
                        "finances": "Cancel subscriptions you no longer use:\n• Prioritize high-interest small debts.",
                        "relationships": "Ask directly what is making each person uncomfortable:\n• Handle one concrete issue at a time."
                    },
                    "focus": {
                        "love": "Repeated conflict may come from mismatched effort or unclear responsibilities. Stop the blame and address one recurring issue at a time.",
                        "career": "When the same process keeps failing, identify the bottleneck, assign responsibility, and check whether the fix actually works.",
                        "health": "Recurring discomfort is a signal to adjust activity, posture, rest, or routine before it gets worse.",
                        "finances": "Small leaks can create real pressure. Remove unused subscriptions and reduce costly debt before chasing bigger gains.",
                        "relationships": "Ask directly what is not working and solve one specific event at a time rather than turning it into a broad character judgment."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Honesty becomes stronger when you drop your defenses. Many worries lose weight once they are said clearly, and sincerity often invites sincerity in return.",
                    "main_state": "Trust restored through honest communication",
                    "main_strategy": "Lower your defenses and address differences directly",
                    "support_risk": "Lingering doubt or anxiety",
                    "support_warning": "Staying closed because you are afraid of being hurt again",
                    "guide": {
                        "love": "Describe worry as a feeling, not an accusation:\n• Listen to the full explanation before responding.",
                        "career": "Report risks and delays early:\n• Bring possible solutions when raising a problem.",
                        "health": "Record symptoms and lifestyle honestly:\n• Tell professionals about all medicines or supplements you use.",
                        "finances": "Organize all debts and accounts in one place:\n• Keep relevant people informed about shared finances.",
                        "relationships": "State your real view when there is a misunderstanding:\n• Confirm rumors with the person directly."
                    },
                    "focus": {
                        "love": "State fears as feelings rather than accusations. Honest, calm communication can remove assumptions that have become heavier than the facts.",
                        "career": "Report delays and risks before they become emergencies. Honesty earns more trust when it is paired with a possible way forward.",
                        "health": "Accurate health decisions depend on complete information. Keep clear records and do not hide medicines, supplements, or important habits.",
                        "finances": "Bring all debts and accounts into view and create a correction plan. Hidden numbers become harder to fix over time.",
                        "relationships": "Do not build conclusions from rumors. Speak directly and let clear information replace assumptions."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Having enough and being able to share it is a grounded form of abundance. Let your accumulated goodwill benefit others instead of holding everything tightly.",
                    "main_state": "Support and trust strengthened through sincere sharing",
                    "main_strategy": "Use sincerity to bring people closer without forcing the result",
                    "support_risk": "Others are still observing and may not fully trust you yet",
                    "support_warning": "Trying too hard to prove yourself",
                    "guide": {
                        "love": "Share your remaining energy with the people who matter:\n• Do not chase dramatic progress.",
                        "career": "Do a full quality check before delivery:\n• List unresolved risks clearly.",
                        "health": "Keep the recovery habits that are working:\n• Increase activity only a little each week.",
                        "finances": "Continue the existing saving and debt plan:\n• Reach one goal before adding the next.",
                        "relationships": "Keep contact regular and natural:\n• Clear up small misunderstandings early."
                    },
                    "focus": {
                        "love": "Steady sincerity is beginning to pay off. Keep sharing care without turning the relationship into a performance or forcing the next milestone.",
                        "career": "Finish well. Check quality, list remaining risks, and do not sacrifice core standards just to finish a few days earlier.",
                        "health": "Keep what is working and raise activity gradually. A stable return is more valuable than a fast one.",
                        "finances": "Stay with your saving or debt plan even when things improve. Complete one stage before creating a more ambitious target.",
                        "relationships": "Regular contact and early clarification of small misunderstandings can keep trust growing without pressure."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The rain has finally come and stored energy can be released. Enjoy the result, but know when enough is enough so the gain can last.",
                    "main_state": "Balance after learning to care for yourself first",
                    "main_strategy": "Meet your own needs before giving more to others",
                    "support_risk": "Feeling hurt because your effort is not noticed",
                    "support_warning": "Forgetting that you also need care because you are used to giving",
                    "guide": {
                        "love": "Do not demand a schedule for the next relationship milestone:\n• Give both people more personal space.",
                        "career": "Review the completed stage before adding more work:\n• Pause unnecessary new requests.",
                        "health": "Schedule full rest days:\n• Watch for early signs of excessive fatigue.",
                        "finances": "Rebalance risk after gains:\n• Move part of the result into more stable holdings.",
                        "relationships": "Do not over-schedule other people's time:\n• Give the relationship room to breathe."
                    },
                    "focus": {
                        "love": "The relationship may finally feel fuller and more secure. Do not immediately demand the next milestone; let stability have some space.",
                        "career": "After finishing a stage, review it and let resources recover before adding new demands.",
                        "health": "Feeling better is not a reason to remove rest. Keep recovery inside the plan and watch for early fatigue.",
                        "finances": "After gains, rebalance instead of increasing leverage. Protect part of what you earned and keep some liquidity.",
                        "relationships": "Strong connections do not need constant checking. Give people room and let mutual interest bring them back naturally."
                    }
                }
            },
            "lu": {
                "1": {
                    "name": "Beginning",
                    "text": "Walk the simple path without trying to impress anyone. Do the next thing well; simplicity can give you a stable beginning.",
                    "main_state": "Smooth progress built through staying grounded",
                    "main_strategy": "Do the work in front of you well and wait for the right time",
                    "support_risk": "Restlessness with your current position",
                    "support_warning": "Seeking excitement or risk because the basics feel boring",
                    "guide": {
                        "love": "Build trust through ordinary interaction:\n• Say what you mean simply and directly.",
                        "career": "Do your core work accurately:\n• Build trust through results, not claims.",
                        "health": "Walk or do basic movement daily:\n• Add only one new habit at a time.",
                        "finances": "Build an emergency fund first:\n• Avoid investments you cannot explain.",
                        "relationships": "Do what you say you will do:\n• Show goodwill naturally."
                    },
                    "focus": {
                        "love": "You do not need a dramatic presentation. Simple, direct interaction and consistent behavior can build trust more effectively.",
                        "career": "Focus on doing your current responsibilities accurately before expanding into areas you do not understand.",
                        "health": "Basic daily movement and regular sleep are enough to build a stable base. Add changes slowly.",
                        "finances": "Start with reserves, saving, and understandable investments. Financial stability grows from simple discipline.",
                        "relationships": "Reliability and sincere goodwill build stronger relationships than complicated social tactics."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "The road is open, yet you keep your own quiet pace. You do not need to compete for attention; staying centered can take you farther.",
                    "main_state": "Long-term benefit through quiet, careful progress",
                    "main_strategy": "Lower your profile and return attention to your own path",
                    "support_risk": "Becoming inflated after receiving attention",
                    "support_warning": "Forgetting your caution because things are going well",
                    "guide": {
                        "love": "Keep contact steady without overdoing it:\n• Do not compare your relationship pace with others.",
                        "career": "Focus on your core work:\n• Reduce useless comparison.",
                        "health": "Choose exercise intensity you can maintain comfortably:\n• Schedule regular rest.",
                        "finances": "Invest according to plan:\n• Do not switch holdings because of trends.",
                        "relationships": "Spend more time with people who let you relax:\n• Stay in steady contact with important people."
                    },
                    "focus": {
                        "love": "Stay with the relationship's natural pace instead of comparing it with other people's milestones.",
                        "career": "Put your attention on the work that matters and let consistent output build your reputation.",
                        "health": "Health is not a competition. Choose a level of activity and rest you can maintain over time.",
                        "finances": "Follow your plan instead of chasing every popular theme. Patience often matters more than constant action.",
                        "relationships": "Choose relationships that feel steady and real rather than spending energy on every social opportunity."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Trying to force what is beyond your current capacity can make you fall. Be honest about your limits, strengthen what is missing, and continue from a firmer base.",
                    "main_state": "Stability built by standing on your own realistic capacity",
                    "main_strategy": "Recognize what you have and build from there",
                    "support_risk": "Wanting to depend on others or take a shortcut",
                    "support_warning": "Putting yourself down because you are not ready yet",
                    "guide": {
                        "love": "Ask when you are unsure instead of deciding for both people:\n• Stop immediately if the other person is uncomfortable.",
                        "career": "Identify the skills you are missing:\n• Do not overpromise just to prove yourself.",
                        "health": "Do not attempt high-intensity activity while injured:\n• Reduce difficulty when movement is unstable.",
                        "finances": "Set a maximum loss for every investment:\n• Challenge your own strongest assumptions once before acting.",
                        "relationships": "Let others finish speaking:\n• Apologize directly when you are wrong."
                    },
                    "focus": {
                        "love": "Be honest about what you do and do not know. Ask instead of assuming, and respect discomfort as a real boundary.",
                        "career": "Before taking on a major responsibility, identify the skills or support you still need. Honest scope is better than heroic overcommitment.",
                        "health": "Do not train through injury or instability. Lower the difficulty and get persistent pain assessed appropriately.",
                        "finances": "Set loss limits before investing and test your own assumptions, especially when you feel most confident.",
                        "relationships": "Listening fully and apologizing clearly when wrong will carry you farther than trying to defend every position."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You know where the risk is, and that awareness can keep your steps steady. Pressure is a reminder to be careful, not a reason to panic.",
                    "main_state": "A place where careful execution lets you perform well",
                    "main_strategy": "Do the work entrusted to you without overstepping or taking extra credit",
                    "support_risk": "Wanting to do more and be noticed",
                    "support_warning": "Attracting unnecessary attention because you perform too aggressively",
                    "guide": {
                        "love": "Prepare for sensitive topics before discussing them:\n• Confirm shared understanding before major decisions.",
                        "career": "Double-check high-risk steps:\n• Ask your manager when authority or procedure is unclear.",
                        "health": "Set clear signs for when to stop activity:\n• Increase intensity gradually after improvement.",
                        "finances": "Set an exit point before each risky trade:\n• Keep enough cash buffer.",
                        "relationships": "Choose the right time for important conversations:\n• Reread sensitive messages before sending."
                    },
                    "focus": {
                        "love": "Sensitive issues can be handled safely when both people know what is being discussed and agree on the timing.",
                        "career": "Double-check high-risk work and keep records of important decisions. Asking for confirmation is good risk management, not weakness.",
                        "health": "Stay active only within a safe range and define when you will stop. Improvement should lead to gradual increases, not an immediate return to full intensity.",
                        "finances": "Predefine exits and keep cash available. Staying in the game matters more than winning every trade.",
                        "relationships": "Choose timing carefully for sensitive issues and review written messages before sending when misunderstanding could be costly."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Having authority makes it easy to forget proportion. You may be right to hold a standard, but leave enough room for people to stay with you.",
                    "main_state": "A reward that comes from careful preparation followed by decisive action",
                    "main_strategy": "Once preparation is complete, act without needless hesitation",
                    "support_risk": "Overthinking until the opportunity passes",
                    "support_warning": "Letting caution become a cage",
                    "guide": {
                        "love": "Hold important boundaries while still showing understanding:\n• Communicate gently but keep standards consistent.",
                        "career": "Use the same core rules for everyone:\n• Do not skip procedures on high-risk work.",
                        "health": "Set clear limits around harmful habits:\n• Treat health time as non-negotiable.",
                        "finances": "Do not exceed your own investment limits:\n• Delay major decisions one day and confirm again.",
                        "relationships": "Decline unreasonable requests calmly and firmly:\n• Do not answer aggression with aggression."
                    },
                    "focus": {
                        "love": "Keep core boundaries consistent while making room for the other person's feelings. Firm does not have to mean rigid.",
                        "career": "Leadership is most credible when the same standards apply to everyone and high-risk procedures are not skipped under pressure.",
                        "health": "Make useful limits concrete and protect the time needed for recovery, treatment, or basic care.",
                        "finances": "Do not change risk rules because of market emotion or social pressure. Give large decisions time to cool before committing.",
                        "relationships": "You can refuse unreasonable behavior without becoming hostile. Boundaries and respect can exist together."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Looking back, every step has something to teach you. If you have walked with care and integrity, gather the lessons and carry them into the next journey.",
                    "main_state": "Clarity gained by reviewing the road from a higher point",
                    "main_strategy": "Return to your original purpose and keep your pace within healthy limits",
                    "support_risk": "Losing direction in praise or success",
                    "support_warning": "Forgetting the path under your feet because things have gone smoothly",
                    "guide": {
                        "love": "Review the patterns that repeat most often:\n• Write down what you want to keep and what you want to change.",
                        "career": "Record what worked and what needs improvement:\n• Turn experience into repeatable process.",
                        "health": "Compare objective changes across different periods:\n• Remove practices that never helped.",
                        "finances": "Calculate actual return and total spending:\n• Adjust the next stage based on data.",
                        "relationships": "Review which relationships make you feel respected:\n• Give more time to the people who truly matter."
                    },
                    "focus": {
                        "love": "Review repeated patterns and decide what should continue and what should change. Experience is useful only when it shapes the next stage.",
                        "career": "Turn project lessons into reusable processes. A good review makes past effort more valuable in future work.",
                        "health": "Compare your condition over time and keep the habits that actually helped. Remove unnecessary complexity.",
                        "finances": "Use real return and total cost to judge results, then adjust allocation based on data rather than memory or mood.",
                        "relationships": "Notice which relationships consistently include respect and healthy limits. Give those relationships more of your time."
                    }
                }
            },
            "tai": {
                "1": {
                    "name": "Beginning",
                    "text": "Pulling one blade of grass brings others with it through their shared roots. One good action can start a wider response, so take the first practical step and let the cycle begin.",
                    "main_state": "A good beginning strengthened through careful follow-through",
                    "main_strategy": "Start with the right people and build steadily together",
                    "support_risk": "Relaxing too quickly because the beginning feels easy",
                    "support_warning": "Ignoring details because the first steps went well",
                    "guide": {
                        "love": "Start with one small change you can make yourself:\n• Turn positive interaction into a habit.",
                        "career": "Begin an improvement that is already prepared:\n• Invite people who are willing to act.",
                        "health": "Stabilize either sleep or exercise first:\n• Add the next habit only after the first is steady.",
                        "finances": "Set automatic saving:\n• Review income and spending once a month.",
                        "relationships": "Offer goodwill first:\n• Be the first person willing to cooperate."
                    },
                    "focus": {
                        "love": "One small positive change can shift the whole pattern. Start with something you can control and make healthy interaction more consistent.",
                        "career": "Begin an improvement that is already ready and bring willing people into it. Early action can create useful momentum.",
                        "health": "Stabilize one basic habit before adding another. Small changes last longer when they are built in sequence.",
                        "finances": "Automatic saving and a short monthly review can create meaningful change without relying on constant effort.",
                        "relationships": "A sincere first move can invite others to respond in kind. Start the cooperation you want to see."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You are willing to cross difficulty for something larger than yourself. Make room for people who differ from you, avoid factions, and keep the larger goal in view.",
                    "main_state": "A wider horizon created by broader perspective",
                    "main_strategy": "Do not trade the larger goal for a small immediate gain",
                    "support_risk": "Getting stuck on small issues and losing sight of the whole",
                    "support_warning": "Missing a bigger opportunity because you insist on minor details",
                    "guide": {
                        "love": "Try to understand differences before trying to change them:\n• Keep space for each person's own life and pace.",
                        "career": "Let people handle the areas they are strongest in:\n• Include views that are usually left at the edge.",
                        "health": "Aim for habits you can sustain most of the time:\n• If you slip, simply resume the next day.",
                        "finances": "Separate money by short-, medium-, and long-term needs:\n• Avoid concentrating everything in one asset.",
                        "relationships": "Listen fully to people with different views:\n• Keep basic respect even when you disagree."
                    },
                    "focus": {
                        "love": "Differences do not always need to be corrected. Understand first and leave room for each person's pace and individuality.",
                        "career": "A team becomes stronger when different abilities have room to contribute. Evaluate methods by results instead of insisting everyone work the same way.",
                        "health": "A sustainable routine does not need a perfect record. Resume after small deviations instead of abandoning the whole plan.",
                        "finances": "Separate goals by time horizon and avoid excessive concentration. Diversification gives your plan room to survive change.",
                        "relationships": "Listening across differences can expand your circle without requiring agreement on everything."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Good conditions do not last forever. Enjoy the current strength, but use the extra room to repair weak points before the cycle changes.",
                    "main_state": "Long-term stability through restraint during good times",
                    "main_strategy": "Stay disciplined and alert even when things are going well",
                    "support_risk": "Becoming complacent in comfort",
                    "support_warning": "Forgetting to prepare because the present feels easy",
                    "guide": {
                        "love": "Keep communication habits even when the relationship feels easy:\n• Agree in advance on how to handle conflict.",
                        "career": "Review where failure is most likely:\n• Build backup plans for critical work.",
                        "health": "Schedule regular health checks:\n• Build exercise habits while your energy allows.",
                        "finances": "Move part of gains into safer assets:\n• Pay down high-cost debt during good times.",
                        "relationships": "Do not take other people's support for granted:\n• Express thanks and care regularly."
                    },
                    "focus": {
                        "love": "A smooth period is the best time to strengthen communication and agree on how you will handle future tension.",
                        "career": "Use strong conditions to build backups and repair weak processes. Resilience is easiest to create before you urgently need it.",
                        "health": "Invest in prevention while you feel well. Regular checks and sustainable exercise are easier to build from strength.",
                        "finances": "Use good times to improve your balance sheet: protect gains, reduce expensive debt, and strengthen reserves.",
                        "relationships": "Do not let familiarity make appreciation disappear. Regular gratitude helps strong relationships stay strong."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You no longer need status or superiority to prove your value. Be genuine, lower your defenses, and choose relationships and paths that actually fit you.",
                    "main_state": "A richer cycle created by letting value and resources flow",
                    "main_strategy": "Share rather than hold everything too tightly",
                    "support_risk": "Wanting to keep every resource or relationship for yourself",
                    "support_warning": "Holding on too tightly because you fear loss",
                    "guide": {
                        "love": "Recognize each person's real intentions and boundaries:\n• Do not force a one-sided relationship to continue.",
                        "career": "Assess honestly whether the environment still fits you:\n• Choose a stage where your strengths can be used well.",
                        "health": "Choose methods that fit your body and life:\n• Do not follow trends blindly.",
                        "finances": "Use only products that fit your risk profile:\n• Focus on your own goals rather than someone else's results.",
                        "relationships": "Move toward people with compatible values:\n• Do not change your principles just to fit in."
                    },
                    "focus": {
                        "love": "If the relationship is unequal or one-sided, honesty may mean changing direction rather than forcing it to continue.",
                        "career": "If your environment no longer fits your values or strengths, evaluate whether a different role or team would be healthier than continued friction.",
                        "health": "Choose health methods that fit your actual body and routine instead of copying the latest trend.",
                        "finances": "Do not take a risk simply because others are profiting. Your allocation should fit your own goals and tolerance.",
                        "relationships": "You do not need to abandon your principles to belong. Compatible values create more durable connection than surface popularity."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Lowering your status to create an important partnership is not weakness; it is good judgment. The more you have, the more useful it becomes when shared well.",
                    "main_state": "Leadership that earns genuine support through humility",
                    "main_strategy": "Influence people through character rather than pressure",
                    "support_risk": "Becoming self-satisfied after gaining status",
                    "support_warning": "Forgetting humility as your position rises",
                    "guide": {
                        "love": "Meet the other person with sincerity rather than pride:\n• Show care through actions, not just words.",
                        "career": "Create cooperation where both sides can benefit:\n• Build trust instead of relying on calculation.",
                        "health": "Listen to what your body needs:\n• Regular maintenance is better than occasional rescue.",
                        "finances": "Prefer long-term, mutually beneficial financial relationships:\n• Be honest and do not chase small unfair gains.",
                        "relationships": "Treat people sincerely regardless of status:\n• Connect with people from different backgrounds."
                    },
                    "focus": {
                        "love": "Set aside pride and show sincerity through practical action. Relationships become stronger when neither person needs to protect status.",
                        "career": "Mutual benefit and trust can create more durable cooperation than squeezing the best short-term terms from every deal.",
                        "health": "Treat your body as something to work with, not dominate. Regular care usually beats sporadic correction after problems appear.",
                        "finances": "Fair, transparent financial relationships can create more long-term value than small opportunistic gains.",
                        "relationships": "Respect people regardless of title or background. Sincere connection can bring support from places you did not expect."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Even strong walls eventually return to earth. When a cycle reaches its peak, reduce unnecessary expansion and return to what is essential so you can stay stable through change.",
                    "main_state": "Long-term safety through knowing when to step back",
                    "main_strategy": "At the peak, create room for the next cycle",
                    "support_risk": "Signs that the current situation is beginning to decline",
                    "support_warning": "Resisting necessary change because you want to keep the high point",
                    "guide": {
                        "love": "Face the real cause of relationship problems:\n• Accept the current state and adjust expectations.",
                        "career": "Acknowledge decline and reduce losing operations:\n• Pull resources back to core work.",
                        "health": "Accept when your body needs rest:\n• Give recovery enough uninterrupted time.",
                        "finances": "Reduce leverage and raise cash reserves:\n• Protect principal while waiting for the next opportunity.",
                        "relationships": "Stop maintaining social obligations that are only for appearance:\n• Keep your energy for sincere relationships."
                    },
                    "focus": {
                        "love": "If warmth has turned into distance, stop preserving only the appearance of harmony. Face the real issue and adjust expectations honestly.",
                        "career": "When a strong cycle starts to weaken, do not keep adding resources just to deny the change. Cut losses and protect the core.",
                        "health": "Long-term overuse may finally be showing. Accept the need for real recovery instead of forcing the body to maintain its old output.",
                        "finances": "Do not cling to past highs. Lower risk, increase liquidity, and protect capital for the next cycle.",
                        "relationships": "As social activity quiets, the relationships that remain may be the most meaningful. Stop forcing surface connection and invest in genuine people."
                    }
                }
            },
            "pi": {
                "1": {
                    "name": "First Signs",
                    "text": "What looks small can spread quickly. The environment is beginning to shift, so act while the issue is still manageable. Clear it early before it becomes a larger obstacle.",
                    "main_state": "Staying safe by protecting your ground",
                    "main_strategy": "Keep a low profile and save your energy for what matters",
                    "support_risk": "The urge to prove yourself or stand out",
                    "support_warning": "Acting too soon because you cannot tolerate being overlooked",
                    "guide": {
                        "love": "Do not let outside pressure make you doubt each other:\n• Choose unity when things are difficult.",
                        "career": "Keep the core business stable:\n• Cut nonessential spending and expansion.",
                        "health": "Maintain a regular routine and balanced meals:\n• Avoid pushing your body too hard.",
                        "finances": "Save more and reduce debt:\n• Do not panic-sell or go all in.",
                        "relationships": "Stay close to reliable, principled people:\n• Keep your distance from opportunists."
                    },
                    "focus": {
                        "love": "Outside pressure may test the relationship. Protect trust and do not let other people or circumstances turn you against each other.",
                        "career": "The environment may be harsh. Stabilize the core, cut unnecessary expansion, and focus on what you can control while conditions improve.",
                        "health": "Stress can drain you during this period. Protect the basics with regular sleep, food, and manageable activity instead of overexertion.",
                        "finances": "Cash matters more than growth right now. Increase savings, reduce debt and risk, and avoid panic decisions or all-in bets.",
                        "relationships": "Choose steady, trustworthy people. Avoid those who change sides whenever the situation changes."
                    }
                },
                "2": {
                    "name": "Taking Root",
                    "text": "Others may gain favor by pleasing people, while you choose patience and principle. The situation may feel unfair, but you do not need to bend yourself to fit it. Hold your line and let time reveal who truly belongs beside you.",
                    "main_state": "Staying grounded without following the crowd",
                    "main_strategy": "Do not flatter or conform; focus on doing your part well",
                    "support_risk": "Fear of being excluded or isolated",
                    "support_warning": "Forcing yourself into the wrong group to avoid being forgotten",
                    "guide": {
                        "love": "Lower the tension and respond gently:\n• Avoid starting sensitive topics at the wrong time.",
                        "career": "Work quietly and adapt to the broader climate:\n• Build skills and connections over time.",
                        "health": "Choose moderate exercise and balanced eating:\n• Avoid extreme health methods.",
                        "finances": "Accept small, steady gains:\n• Keep your finances conservative and low-key.",
                        "relationships": "Do not try to please everyone:\n• Be patient with misunderstandings."
                    },
                    "focus": {
                        "love": "Timing may be poor, so use patience instead of pressure. Stay flexible without abandoning your principles.",
                        "career": "Keep a low profile and adapt to the environment. Use this period to build skills, credibility, and useful connections.",
                        "health": "Gentle, sustainable care is better than extremes. Keep exercise and food simple and consistent.",
                        "finances": "Small, stable returns are enough for now. Keep your approach conservative rather than chasing excitement.",
                        "relationships": "You do not need to prove yourself or win everyone over. Invest quietly in relationships that show real substance."
                    }
                },
                "3": {
                    "name": "The Test",
                    "text": "If you realize you trusted the wrong person or path, let the discomfort teach you. There is no need to deny or defend it. Admit where you went off course and place your next step back on solid ground.",
                    "main_state": "Awareness that helps you avoid being pulled into trouble",
                    "main_strategy": "Be less trusting and observe carefully before deciding",
                    "support_risk": "Being dragged into trouble by trusting the wrong person",
                    "support_warning": "Getting involved in unnecessary conflict out of sympathy",
                    "guide": {
                        "love": "Face misunderstandings without excessive self-blame:\n• Take care of your own emotions.",
                        "career": "Keep records and clarify responsibility:\n• Explain your position clearly when needed.",
                        "health": "Find a healthy outlet for stress:\n• Watch for physical signs of long-term strain.",
                        "finances": "Speak up for rights that matter:\n• Cut losses when needed instead of enduring them indefinitely.",
                        "relationships": "Set boundaries calmly and firmly:\n• Practice saying no without guilt."
                    },
                    "focus": {
                        "love": "Do not overexplain or blame yourself for every misunderstanding. Protect your boundaries and say no when needed.",
                        "career": "You may be at risk of taking blame for others. Keep clear records and make responsibility visible.",
                        "health": "Long-term stress and resentment can wear you down. Give those emotions a healthy outlet before they become physical strain.",
                        "finances": "Ask whether continuing to absorb a loss is still reasonable. Defend your interests when needed and stop losses when the facts call for it.",
                        "relationships": "Clear boundaries matter more than keeping everyone comfortable. Say no without treating it as wrongdoing."
                    }
                },
                "4": {
                    "name": "The Choice",
                    "text": "Even in a messy situation, some people step forward with a clear sense of purpose. If you feel that same pull, you do not need to wait for perfect conditions. Hold to your principles and be ready when the opening appears.",
                    "main_state": "A turning point reached by holding your principles",
                    "main_strategy": "Stand firm and let the situation change in its own time",
                    "support_risk": "Pressure and doubt from not seeing an end",
                    "support_warning": "Abandoning your principles because the strain feels too heavy",
                    "guide": {
                        "love": "Leave old baggage behind and start the conversation:\n• Express what you truly think.",
                        "career": "Actively pursue a new opportunity:\n• Present the plan you have been preparing.",
                        "health": "Use improvement as a chance to build better habits:\n• Increase activity gradually.",
                        "finances": "Test the market with a small amount:\n• Add more only after the direction proves itself.",
                        "relationships": "Repair an important relationship that has grown distant:\n• Make the first gesture of goodwill."
                    },
                    "focus": {
                        "love": "The relationship may be reaching a turning point. Start the conversation and say what matters instead of waiting for the moment to fix itself.",
                        "career": "Conditions may be starting to loosen. Pursue new openings and bring forward plans that are ready.",
                        "health": "If your condition is improving, build on it slowly. Turn the recovery period into a sustainable routine rather than rushing ahead.",
                        "finances": "The worst may be passing, but there is no need to rush. Test a direction with a small amount and scale only after it holds up.",
                        "relationships": "A strained relationship may be ready for repair. Reach out first if the connection is still worth keeping."
                    }
                },
                "5": {
                    "name": "Taking Shape",
                    "text": "The hardest point often contains the start of a reversal. Capable people may stay quiet and prepare rather than force results. Conditions will change; your job is to stay ready enough to benefit when they do.",
                    "main_state": "Clarity that comes after making peace with yourself",
                    "main_strategy": "Release self-criticism and accept where things stand",
                    "support_risk": "Repeated self-doubt and blame",
                    "support_warning": "Staying stuck because everything must be perfect first",
                    "guide": {
                        "love": "Release old resentment and begin again:\n• Repair a relationship that is still worth saving.",
                        "career": "Review the lessons and reorganize resources:\n• Be ready when conditions recover.",
                        "health": "Return to activity and daily life gradually:\n• Keep the healthy lessons you learned during the low point.",
                        "finances": "Restore your savings before increasing investment:\n• Turn past mistakes into clear risk rules.",
                        "relationships": "Make peace with people who once misunderstood you:\n• Stay open to new connections."
                    },
                    "focus": {
                        "love": "The difficult phase may be ending. Let go of old resentment and repair what is still worth keeping.",
                        "career": "Use what the downturn taught you to reorganize resources and prepare for recovery instead of returning to the old pattern.",
                        "health": "Return to normal activity gradually, and keep the habits that helped you through the low period.",
                        "finances": "Rebuild your savings before taking on more investment risk. Turn past losses into rules you can follow next time.",
                        "relationships": "Leave old misunderstandings behind where possible and make room for healthier new connections."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "When blockage reaches its limit, it begins to loosen. Old pressure and frustration are starting to clear, even if the change is not obvious yet. Do not rush to celebrate; clear away old baggage so something new has room to enter.",
                    "main_state": "A chance to restart as the deadlock begins to loosen",
                    "main_strategy": "Release old assumptions and give each other a fresh chance",
                    "support_risk": "Old habits pulling you backward",
                    "support_warning": "Refusing a new beginning because you fear being hurt again",
                    "guide": {
                        "love": "Value a relationship that has been restored:\n• Do not repeat the pattern that caused the hurt.",
                        "career": "Keep the discipline gained through reform:\n• Expand steadily instead of rushing.",
                        "health": "Turn recovery habits into normal routines:\n• Keep caring for yourself instead of slipping back.",
                        "finances": "Do not loosen spending just because things improve:\n• Keep your rules and emergency reserve.",
                        "relationships": "Protect rebuilt trust carefully:\n• Appreciate friendships that were restored."
                    },
                    "focus": {
                        "love": "If the relationship is recovering, protect what has been rebuilt. Do not return to the patterns that caused the damage.",
                        "career": "Improvement is not a reason to repeat the expansion or discipline mistakes that caused trouble before. Keep the better system in place.",
                        "health": "Feeling better does not mean the supportive habits are no longer needed. Keep the routines that helped you recover.",
                        "finances": "Do not respond to better conditions by overspending or taking on more leverage. Keep your cash buffer and risk rules intact.",
                        "relationships": "Trust that has been rebuilt needs steady care. Treat restored friendships with gratitude rather than taking them for granted."
                    }
                }
            },
            "tongren": {
                "1": {
                    "name": "Opening",
                    "text": "Step outside your familiar circle and you may find more allies than expected. Be open and direct; common ground often appears only after you enter a wider space.",
                    "main_state": "A smooth beginning built on open cooperation",
                    "main_strategy": "Keep things open and transparent from the start",
                    "support_risk": "Hesitating because you are not ready to trust",
                    "support_warning": "Treating the other side defensively before anything has happened",
                    "guide": {
                        "love": "Check whether you are moving in the same direction:\n• Replace testing and guessing with honesty.",
                        "career": "Connect with people who share your principles:\n• Confirm goals and standards before working together.",
                        "health": "Choose exercise you genuinely enjoy:\n• Build a rhythm that works for both body and mind.",
                        "finances": "Work with people who share your financial values:\n• Do not force a partnership for high returns.",
                        "relationships": "Seek people who share your values:\n• You do not need to please everyone."
                    },
                    "focus": {
                        "love": "Start with honesty and shared values rather than labels or pressure. See whether your paths genuinely align through natural interaction.",
                        "career": "Build partnerships around a common vision. Confirm goals and principles before details; aligned teams work better than forced ones.",
                        "health": "Choose a form of movement you actually enjoy and can sustain. Your plan should fit you, not someone else's routine.",
                        "finances": "Before managing money together, make sure your goals and financial values match. Compatibility matters more than tempting returns.",
                        "relationships": "Stay open and look for people with similar values. You do not need to please or compete with everyone."
                    }
                },
                "2": {
                    "name": "Beyond the Circle",
                    "text": "If you only seek approval from your own circle, your world grows smaller. Valuable cooperation is not limited to familiar groups. Give different people a real chance to take part.",
                    "main_state": "A wider view found by leaving the comfort zone",
                    "main_strategy": "Step beyond familiar circles and meet different people",
                    "support_risk": "The comfort of staying where nothing changes",
                    "support_warning": "Rejecting larger possibilities because a small circle feels safer",
                    "guide": {
                        "love": "Stay true to your principles even when things are complicated:\n• Be honest with yourself and the other person.",
                        "career": "Do not let personal ties override professional standards:\n• Stand by what is right even when it is unpopular.",
                        "health": "Decline social demands that harm your health:\n• Treat basic self-care as a principle.",
                        "finances": "Do not take financial shortcuts under temptation:\n• Protect a clean credit record.",
                        "relationships": "State your position calmly and firmly:\n• Do not follow the crowd under pressure."
                    },
                    "focus": {
                        "love": "Complicated circumstances do not require you to compromise your core values. Be honest with yourself and with the other person.",
                        "career": "Office politics or competing interests may test you. Keep professional standards even when doing so feels isolating.",
                        "health": "Your health does not need to bend to social pressure. Decline what drains you and rest when you need it.",
                        "finances": "Protect integrity even when shortcuts look profitable. Long-term credit is worth more than a quick gain.",
                        "relationships": "When group pressure conflicts with your principles, state your position calmly. Clear boundaries prevent deeper problems later."
                    }
                },
                "3": {
                    "name": "The Test",
                    "text": "Unspoken suspicion creates distance and slowly weakens cooperation. Instead of guessing in private, bring your concerns into an honest conversation.",
                    "main_state": "Relief that comes from letting go of suspicion",
                    "main_strategy": "Release unfounded doubt and offer trust first",
                    "support_risk": "Draining yourself through constant suspicion",
                    "support_warning": "Treating everyone as a threat because you fear losing out",
                    "guide": {
                        "love": "Talk through doubts at the right time:\n• Do not let anxiety grow in silence.",
                        "career": "Raise concerns early:\n• Seek an open and transparent solution.",
                        "health": "Do not hide ongoing discomfort:\n• Arrange evaluation and treatment early.",
                        "finances": "Keep shared finances transparent:\n• Raise questions early.",
                        "relationships": "Clear up misunderstandings directly:\n• Replace private guessing with honest conversation."
                    },
                    "focus": {
                        "love": "Hidden doubts can erode trust. If something feels unclear, talk about it honestly instead of letting anxiety build.",
                        "career": "Bring unspoken concerns through the proper channel before they grow. Transparency is usually safer than letting conflict develop in the background.",
                        "health": "Do not ignore or hide symptoms because you are busy or afraid. Early attention is often easier than delayed action.",
                        "finances": "Unclear shared finances can become future conflict. Keep records transparent and raise questions early.",
                        "relationships": "If a misunderstanding matters, address it directly. Honest conversation is more useful than guessing what someone meant."
                    }
                },
                "4": {
                    "name": "Restraint",
                    "text": "You may be in position to fight and still choose not to. That is not weakness; it is recognizing that the conflict is not worth the cost. Knowing when to stop is a form of strength.",
                    "main_state": "Wisdom that preserves harmony through restraint",
                    "main_strategy": "Choose restraint before conflict escalates",
                    "support_risk": "The urge to keep fighting until you win",
                    "support_warning": "Turning a disagreement into opposition out of pride",
                    "guide": {
                        "love": "Drop the fight and face each other honestly:\n• Do not let pride block communication.",
                        "career": "Seek cooperation across teams:\n• Turn competitors into allies where possible.",
                        "health": "Stop fighting your body and accept where you are:\n• Begin with gentle adjustments.",
                        "finances": "Focus on your own long-term goals:\n• Stop comparing results with others.",
                        "relationships": "Offer goodwill to someone you once opposed:\n• Let sincerity reduce the distance."
                    },
                    "focus": {
                        "love": "Let go of the need to win. Honest conversation can create common ground even when your positions differ.",
                        "career": "Move past team or role divisions when goals align. A former competitor can become a useful partner.",
                        "health": "Work with your body instead of against it. Accept your current condition and make gradual, realistic adjustments.",
                        "finances": "You do not need to outperform someone else. Keep your attention on your own long-term plan and rules.",
                        "relationships": "If an old conflict no longer serves either side, offer a sincere gesture of goodwill. Someone has to open the door first."
                    }
                },
                "5": {
                    "name": "Reunion",
                    "text": "People with different backgrounds can become stronger after working through misunderstanding. Turn differences into complementary strengths and former opponents into partners.",
                    "main_state": "A bond strengthened through difficulty",
                    "main_strategy": "Get through the current challenge and trust that conditions can improve",
                    "support_risk": "A difficult period that can become discouraging",
                    "support_warning": "Abandoning the relationship because the process is painful",
                    "guide": {
                        "love": "Talk openly and clear old resentment:\n• Replace hurt and opposition with honesty.",
                        "career": "Resolve old conflicts openly:\n• Confirm shared goals and rules.",
                        "health": "Release long-held emotional pressure:\n• Use improvement as a chance to reset.",
                        "finances": "Clarify financial concerns openly:\n• Build cooperation on transparent terms.",
                        "relationships": "Bring old opposition to a close:\n• Acknowledge each other's effort openly."
                    },
                    "focus": {
                        "love": "Old misunderstandings can finally be cleared through honest conversation. Say what has been held back and let the relationship move forward with less baggage.",
                        "career": "A team that has survived conflict can become more united. Resolve the past openly and confirm the goals and rules everyone now shares.",
                        "health": "Releasing long-held stress may help your body settle as well. Use this opening to restore a healthier balance.",
                        "finances": "Financial conflict can improve when the numbers and expectations are made clear. Transparency strengthens long-term cooperation.",
                        "relationships": "A difficult relationship may be ready for genuine reconciliation. Acknowledge what happened, recognize each other's effort, and move on."
                    }
                },
                "6": {
                    "name": "Your Own Path",
                    "text": "When your ideas are ahead of the crowd, few people may respond at first. Do not force yourself to fit in. Stay with what you believe, and the right people can find you in time.",
                    "main_state": "Peace from staying true to yourself",
                    "main_strategy": "Accept your choice without needing everyone to understand",
                    "support_risk": "Feeling lonely or misunderstood",
                    "support_warning": "Doubting your original purpose because others do not respond",
                    "guide": {
                        "love": "Value a relationship that found its way back:\n• Protect hard-earned trust with care.",
                        "career": "Confirm commitments and roles:\n• Turn past difficulty into stronger teamwork.",
                        "health": "Keep the habits that restored your balance:\n• Do not relax them just because you feel better.",
                        "finances": "Protect trust that has survived testing:\n• Keep financial dealings transparent.",
                        "relationships": "Value people who still trust you after distance or conflict:\n• Repay trust through action."
                    },
                    "focus": {
                        "love": "A relationship that survives doubt or separation deserves care. Protect the trust you worked to rebuild instead of treating it as guaranteed.",
                        "career": "Partnerships that survived real tests now have useful history. Clarify roles and commitments and use past difficulty to improve teamwork.",
                        "health": "If you have found a rhythm that works, keep it. Feeling better is not a reason to abandon the habits that helped.",
                        "finances": "A financial partnership that has earned trust over time can create long-term value. Keep the same transparency that made it stable.",
                        "relationships": "People who remain after misunderstanding or distance are worth appreciating. Show through action that their trust matters."
                    }
                }
            },
            "dayou": {
                "1": {
                    "name": "A Clean Start",
                    "text": "Abundance is only beginning, and the situation is still simple. Do not rush to expand. Protect a clean foundation now so future growth has something solid to stand on.",
                    "main_state": "Long-term abundance built on a clean foundation",
                    "main_strategy": "Stay careful and avoid pride or haste",
                    "support_risk": "Temptations that look harmless but may create trouble",
                    "support_warning": "Getting involved in something you should avoid because you let your guard down",
                    "guide": {
                        "love": "Build trust through ordinary actions:\n• Do not stop putting in effort because you feel secure.",
                        "career": "Build the new project carefully:\n• Control the pace of expansion and promises.",
                        "health": "Choose one manageable form of exercise:\n• Increase gradually.",
                        "finances": "Build a disciplined saving routine:\n• Do not chase overnight wealth.",
                        "relationships": "Show sincerity through action:\n• Respect people from different backgrounds."
                    },
                    "focus": {
                        "love": "A new chapter is opening. Build trust quietly through consistent actions instead of turning the relationship into a display.",
                        "career": "A project or partnership has started well. Strengthen the foundation before expanding and avoid overpromising because of early success.",
                        "health": "Use this good period to build long-term health habits. Choose exercise you can sustain and increase gradually.",
                        "finances": "Your financial base is forming. Build savings and investments steadily rather than chasing a quick breakthrough.",
                        "relationships": "New relationships are taking shape. Let consistent behavior prove your sincerity and stay respectful toward different backgrounds."
                    }
                },
                "2": {
                    "name": "Capacity",
                    "text": "You now have enough ability and resources to carry greater responsibility. Take the opportunity with confidence, but remember that real capacity is built through reliability over time.",
                    "main_state": "The strength and room to carry greater responsibility",
                    "main_strategy": "Accept the responsibility that belongs to you and move forward",
                    "support_risk": "Feeling the weight of greater responsibility",
                    "support_warning": "Turning down a good opportunity because you fear you cannot handle it",
                    "guide": {
                        "love": "Respect a pace that feels right for both sides:\n• Express love as an invitation, not a command.",
                        "career": "Hear the team before major decisions:\n• Do not become unilateral after early success.",
                        "health": "Set goals that fit your real life:\n• Work with your body instead of fighting it.",
                        "finances": "Diversify rather than concentrate too much:\n• Use professional input where useful.",
                        "relationships": "Listen more when you hold more influence:\n• Share the stage with others."
                    },
                    "focus": {
                        "love": "Do not expect the other person to simply follow your plan. Balance what you want with respect for their pace and choice.",
                        "career": "More resources give you room to act, but not a reason to decide alone. Use team and expert input before major moves.",
                        "health": "Choose goals that fit your actual life and current condition. Progress comes from working with your body, not forcing it to match someone else.",
                        "finances": "Growing resources should not lead to concentrated bets. Diversify risk and use separate plans for different goals.",
                        "relationships": "The more influence you have, the more important it is to listen. Share credit and space so others can contribute fully."
                    }
                },
                "3": {
                    "name": "Sharing",
                    "text": "Having more tests how you use it. Share useful resources and let others benefit from your success. Abundance loses support when everything is kept for yourself.",
                    "main_state": "Abundance made more durable through sharing",
                    "main_strategy": "Use your ability and resources in ways that benefit more people",
                    "support_risk": "Wanting to keep all the advantages for yourself",
                    "support_warning": "Letting narrow self-interest keep the rewards to one person",
                    "guide": {
                        "love": "Let the other person give to you too:\n• State your own needs honestly.",
                        "career": "Make sure your results are visible:\n• Put effort where it is valued.",
                        "health": "Understand your own health actively:\n• Take primary responsibility for your care.",
                        "finances": "Help others only when you have enough margin:\n• Keep your own safety net.",
                        "relationships": "Do not let guilt control your giving:\n• State your limits honestly."
                    },
                    "focus": {
                        "love": "Love should not be one-way giving. Let the other person contribute too, and say what you need so giving and receiving can return to balance.",
                        "career": "If your work is not being recognized, do not simply work twice as hard. Make outcomes visible and put your effort where it can be valued.",
                        "health": "Do not hand all responsibility for your health to others. Learn your condition, take part in decisions, and build habits you can maintain.",
                        "finances": "Generosity is healthy only when you have margin. Protect your own financial safety before taking on other people's needs.",
                        "relationships": "Before helping, check whether you truly have the capacity. Clear limits make generosity more sustainable."
                    }
                },
                "4": {
                    "name": "Quiet Strength",
                    "text": "At a high point, showing off creates unnecessary resistance. You may have reason to be proud, but restraint will carry you farther. Real weight does not need constant proof.",
                    "main_state": "Avoiding envy by staying modest and uncompetitive",
                    "main_strategy": "Stay low-key and stop trying to win every comparison",
                    "support_risk": "The urge to compete and prove you are better",
                    "support_warning": "Competing for attention or advantage simply to prove yourself",
                    "guide": {
                        "love": "Drop comparison and scorekeeping:\n• Focus on the bond that is unique to you.",
                        "career": "Build clear results that demonstrate your value:\n• Become worth noticing instead of waiting to be noticed.",
                        "health": "Compare with your own past, not other people:\n• Focus on energy and function, not appearance.",
                        "finances": "Measure your own progress, not someone else's returns:\n• Focus on your own balance sheet.",
                        "relationships": "Build relationships that help both sides grow:\n• Do not chase surface popularity."
                    },
                    "focus": {
                        "love": "Comparison and scorekeeping drain a relationship. Stop measuring who gives more and focus on the bond you are actually building together.",
                        "career": "If you feel overlooked, ask whether the environment or your approach needs to change. Build results that make your ability easier to see instead of only comparing yourself with others.",
                        "health": "Your body has its own pace. Measure progress against your own past and focus on function and energy rather than competing with someone else's body.",
                        "finances": "Other people's returns are not your plan. Track your own goals, assets, and liabilities instead of feeding anxiety through comparison.",
                        "relationships": "Everyone moves on a different timeline. Invest in relationships that help both people grow rather than chasing popularity or status."
                    }
                },
                "5": {
                    "name": "Trusted Leadership",
                    "text": "People follow you because you are fair and dependable, not because of force. Lead with warmth and clear principles. Trust is what gives your influence real weight.",
                    "main_state": "Earning trust through sincerity",
                    "main_strategy": "Lead people with honesty and warmth",
                    "support_risk": "Worrying that you are not authoritative enough",
                    "support_warning": "Becoming harsh in an effort to prove authority",
                    "guide": {
                        "love": "Build on trust and honesty:\n• Treat the other person as an equal partner.",
                        "career": "Lead by example before asking others:\n• Share credit and take responsibility.",
                        "health": "Keep a routine and record habits honestly:\n• Stop postponing the start.",
                        "finances": "Face the numbers honestly and do not hide losses:\n• Build long-term opportunities through credit.",
                        "relationships": "Keep your word and avoid casual promises:\n• Let reliability define you."
                    },
                    "focus": {
                        "love": "Trust and honesty are stronger than control. Treat the other person as an equal and respect their views and boundaries.",
                        "career": "The strongest leadership begins with example. Hold yourself to the standard first, share credit, and accept responsibility when things go wrong.",
                        "health": "Be honest and consistent with your routine. Track what you actually do instead of promising yourself that you will start tomorrow.",
                        "finances": "Build finances on transparency rather than shortcuts. Honest records and dependable behavior create long-term credit and opportunity.",
                        "relationships": "Keep promises carefully. When people know your word is reliable, trust grows without needing to be advertised."
                    }
                },
                "6": {
                    "name": "Stewardship",
                    "text": "Use long-built resources where they create real value. Good fortune lasts when it is handled with humility and allowed to benefit more than one person.",
                    "main_state": "Good fortune sustained by gratitude and humility",
                    "main_strategy": "Stay grateful and keep using your advantages in helpful ways",
                    "support_risk": "Taking favorable conditions for granted",
                    "support_warning": "Losing humility because things have gone well for too long",
                    "guide": {
                        "love": "Stay grateful and humble in good times:\n• Keep creating fresh shared experiences.",
                        "career": "Keep improving instead of becoming satisfied with applause:\n• Share recognition with the team.",
                        "health": "Maintain regular care instead of becoming careless:\n• Do not test limits just because you feel strong.",
                        "finances": "Do not show off or waste resources:\n• Use what you have with gratitude.",
                        "relationships": "Remember people who helped you:\n• Help newer or less experienced people grow."
                    },
                    "focus": {
                        "love": "Good times also require care. Stay grateful, keep bringing fresh attention to the relationship, and do not let happiness become routine neglect.",
                        "career": "Success is a reason to stay clear-headed, not complacent. Keep learning and share recognition with the people who helped produce the result.",
                        "health": "Feeling well is not a reason to stop caring for your body or test its limits. Keep the habits that protect your health.",
                        "finances": "As wealth grows, keep humility and discipline. Avoid showing off or wasting resources, and leave room for future needs.",
                        "relationships": "Success should not make you forget who helped you. Stay approachable and use your position to support people coming after you."
                    }
                }
            },
            "qian_modest": {
                "1": {
                    "name": "A Humble Start",
                    "text": "Real humility does not boast before difficulty; it prepares quietly. Lower your posture, ask more, listen more, and do the work. A difficult path becomes easier when you stop fighting it for attention.",
                    "main_state": "Safety through humility and self-restraint",
                    "main_strategy": "Do not race to be first; meet challenges with flexibility",
                    "support_risk": "The urge to move fastest or come first",
                    "support_warning": "Forgetting humility because you want to perform",
                    "guide": {
                        "love": "Do not overstate what you have done for the relationship:\n• Listen and respond with empathy.",
                        "career": "Learn the team before showing everything you can do:\n• Let your work speak quietly.",
                        "health": "Respect your limits and do not force through them:\n• Listen to your body's signals.",
                        "finances": "Ask for help in areas you do not understand:\n• Do not become overconfident after modest gains.",
                        "relationships": "Listen more than you speak:\n• Praise others without showing off your own achievements."
                    },
                    "focus": {
                        "love": "Humility keeps love comfortable and balanced. Do not magnify your own effort or dismiss the other person's; listen and appreciate what each of you brings.",
                        "career": "Capability does not need immediate proof. Learn how the team works, do your part well, and let reliable results establish your value.",
                        "health": "Respect the body's limits instead of overpowering them. Rest when needed and treat physical signals as useful information.",
                        "finances": "Stay cautious even as savings grow. Keep learning and seek qualified help when you are outside your knowledge.",
                        "relationships": "Do not show off what you know or have done. Listening well and recognizing other people's strengths creates lasting respect."
                    }
                },
                "2": {
                    "name": "Natural Humility",
                    "text": "People can feel when your modesty is genuine, and they respond to it. Recognition may be growing, but you do not need to chase it. Keep doing good work and let trust accumulate on its own.",
                    "main_state": "Recognition earned through genuine humility",
                    "main_strategy": "Stay sincere instead of performing modesty",
                    "support_risk": "Worrying that kindness will be mistaken for weakness",
                    "support_warning": "Trying too hard to prove yourself because you fear being misunderstood",
                    "guide": {
                        "love": "Let genuine humility show naturally:\n• Avoid forced pleasing or empty politeness.",
                        "career": "Do the work well without claiming every credit:\n• Let quality speak for you.",
                        "health": "Accept your current condition without judgment:\n• Treat health management as self-care.",
                        "finances": "See your finances as they really are:\n• Ask for help where you lack knowledge.",
                        "relationships": "Stay sincere without competing for attention:\n• Let reliability become your reputation."
                    },
                    "focus": {
                        "love": "Genuine humility is not self-denial. Be honest, warm, and natural rather than trying to please or perform kindness.",
                        "career": "Quiet, consistent work builds trust. You do not need to claim every success when the quality of your contribution is clear.",
                        "health": "Treat your current condition honestly and without punishment. Adjust habits with patience instead of harshness.",
                        "finances": "Good financial judgment begins with seeing your situation accurately. Do not exaggerate your ability or hide problems; ask when you do not know.",
                        "relationships": "You can know your own value without proving it to everyone. Sincere, reliable behavior attracts stronger relationships than attention-seeking."
                    }
                },
                "3": {
                    "name": "Work Without Claim",
                    "text": "You may carry the heaviest responsibility and still choose not to claim the spotlight. That is difficult discipline, and people notice it. Keep finishing well and let the results speak.",
                    "main_state": "Respect earned by doing the work without claiming the glory",
                    "main_strategy": "Finish well without seeking credit or attention",
                    "support_risk": "Expecting praise or thanks",
                    "support_warning": "Becoming resentful when your effort is not praised",
                    "guide": {
                        "love": "Do not doubt yourself because of temporary neglect:\n• Keep your effort sincere without keeping score.",
                        "career": "Maintain quality and learn to make value visible:\n• Do not quit because recognition is slow.",
                        "health": "Give your body and plan enough time:\n• Do not stop because results are not immediate.",
                        "finances": "Keep discipline and let time work:\n• Do not change course out of envy.",
                        "relationships": "Do not withdraw your warmth because attention is low:\n• Keep doing the right thing for the right reasons."
                    },
                    "focus": {
                        "love": "Being unseen can hurt, but your value is not measured only by immediate response. Stay sincere without turning love into a demand for recognition.",
                        "career": "If good work is not yet being noticed, keep the quality high while learning to present your contribution clearly. Slow recognition is not the same as failure.",
                        "health": "Health changes often need time. Do not abandon a sound plan just because someone else changes faster.",
                        "finances": "Financial progress can be slow without being wrong. Keep your discipline and avoid changing strategy because someone else seems ahead.",
                        "relationships": "Goodwill does not always receive an immediate return. Do not become cold simply because others fail to notice you right away."
                    }
                },
                "4": {
                    "name": "The Middle Ground",
                    "text": "You are well placed to connect different sides. By staying respectful upward and downward, you help information and resources move. Lowering your posture is not losing; it is why people are willing to work with you.",
                    "main_state": "Wisdom that keeps things moving through balanced coordination",
                    "main_strategy": "Use humility to communicate and reconcile different sides",
                    "support_risk": "Feeling that the mediator role is thankless",
                    "support_warning": "Giving up on coordination because you feel unfairly burdened",
                    "guide": {
                        "love": "Set boundaries gently but clearly:\n• Ask for space when you need it.",
                        "career": "Say no politely to unreasonable requests:\n• Protect your time and professional value.",
                        "health": "Decline excessive demands when you need rest:\n• Do not delay needed medical care.",
                        "finances": "Do not invest from social pressure:\n• Protect your own assets before helping others.",
                        "relationships": "Set limits in draining relationships:\n• Do not silently endure everything to avoid offending people."
                    },
                    "focus": {
                        "love": "Humility does not mean shrinking yourself. State needs and limits calmly so respect can flow in both directions.",
                        "career": "Being polite does not require accepting unreasonable demands. Protect your time, scope, and professional standards while keeping the conversation constructive.",
                        "health": "Speak for your body's needs. Rest when needed and seek care when appropriate instead of treating endurance as a virtue.",
                        "finances": "Do not lend or invest simply because saying no feels awkward. Protecting your base lets you help others more sustainably.",
                        "relationships": "Balance kindness with self-protection. Clear limits teach people how to treat you and reduce quiet resentment."
                    }
                },
                "5": {
                    "name": "Firm Humility",
                    "text": "Humility is not the absence of principles. When a line is crossed, stand up and protect what matters. A calm person who becomes firm at the right moment often has more influence than someone who is always forceful.",
                    "main_state": "Respect earned by holding boundaries calmly",
                    "main_strategy": "Stay humble, but stand firm when principles matter",
                    "support_risk": "Uncertainty about whether to become more forceful",
                    "support_warning": "Enduring unfair treatment too long to preserve harmony",
                    "guide": {
                        "love": "Let steady reliability be attractive on its own:\n• State your position clearly when it matters.",
                        "career": "Stay modest in normal times and decisive when needed:\n• Do not trade professional standards for harmony.",
                        "health": "Respect your body while keeping useful discipline:\n• Say no firmly to harmful habits.",
                        "finances": "Learn openly without following advice blindly:\n• Keep your own investment rules.",
                        "relationships": "Be humble without losing backbone:\n• Step forward when the situation truly requires it."
                    },
                    "focus": {
                        "love": "You do not need constant proof to be respected. Stay steady and kind, but express your position clearly when something important is at stake.",
                        "career": "Strong leadership can be modest most of the time and firm when standards matter. Do not sacrifice professional judgment simply to keep everyone comfortable.",
                        "health": "Respect physical signals while maintaining the habits that serve you. Be gentle with yourself but firm about what clearly harms you.",
                        "finances": "Stay open to learning without surrendering your judgment. Expert views are useful, but your own risk rules still matter.",
                        "relationships": "Humility and backbone can coexist. People trust someone who is easy to work with but willing to stand up when it counts."
                    }
                },
                "6": {
                    "name": "Inner Work",
                    "text": "At its deepest, humility is less about defeating others than facing your own pride and insecurity. Turn inward now. Set applause aside and clear away the need for status so you can hear your own judgment more clearly.",
                    "main_state": "Growth that becomes more complete through inner reflection",
                    "main_strategy": "Turn humility into honest self-examination",
                    "support_risk": "Finding inner work harder than outward action",
                    "support_warning": "Ignoring inner work because your outward behavior already looks good",
                    "guide": {
                        "love": "Accept your own value honestly:\n• Receive praise and care without discomfort.",
                        "career": "Be willing to show your contribution:\n• Do not claim too much or minimize yourself.",
                        "health": "Ask for rest or help when you need it:\n• Caring for yourself is not selfish.",
                        "finances": "Keep a reasonable budget for quality of life:\n• Do not punish yourself in the name of saving.",
                        "relationships": "Refuse to be taken for granted:\n• Recognize and protect your own value."
                    },
                    "focus": {
                        "love": "Humility becomes unhealthy when it turns into self-erasure. Accept your own value and allow yourself to receive care as well as give it.",
                        "career": "Excessive modesty can hide your contribution. State what you have done accurately without taking credit that is not yours or minimizing what is.",
                        "health": "Your needs deserve attention. Ask for rest or support when needed instead of treating self-neglect as virtue.",
                        "finances": "Saving should not mean denying every reasonable need. Make room for quality of life while still protecting long-term goals.",
                        "relationships": "Being humble does not require accepting disrespect. Value yourself clearly and do not let others treat your help as automatic."
                    }
                }
            },
            "yu": {
                "1": {
                    "name": "Early Excitement",
                    "text": "A little success can make you want to announce it immediately. The joy is real, but restraint matters now. Let the result mature before drawing attention to it.",
                    "main_state": "Staying out of trouble by keeping excitement contained",
                    "main_strategy": "Tone it down and do not get carried away",
                    "support_risk": "The urge to share your excitement everywhere",
                    "support_warning": "Losing discretion because you are too excited",
                    "guide": {
                        "love": "Slow down and distinguish real feeling from excitement:\n• Do not let other people's enthusiasm decide your heart.",
                        "career": "Do not commit just because a trend is popular:\n• Use independent judgment before choosing a direction.",
                        "health": "Set limits at celebrations:\n• Do not exhaust your body in the name of having fun.",
                        "finances": "Do not chase prices during market excitement:\n• Keep your own rules and pace.",
                        "relationships": "Notice whether enthusiasm is genuine:\n• Keep time for solitude and reflection."
                    },
                    "focus": {
                        "love": "Strong signals can be exciting without being lasting. Slow down and see what remains after the excitement settles before making a major emotional commitment.",
                        "career": "When everyone is praising the same idea or trend, step back long enough to think independently. Popularity is not proof that it fits you.",
                        "health": "Celebrations can easily become overindulgence. Enjoy them with limits on sleep, food, alcohol, and energy.",
                        "finances": "Crowded markets are when calm matters most. Do not chase because others appear to be making money; keep your own entry rules and risk limits.",
                        "relationships": "Attention can feel good without being deep. Keep enough quiet time to see who still feels genuine when the excitement fades."
                    }
                },
                "2": {
                    "name": "Clear in the Crowd",
                    "text": "While others celebrate, you remain clear-headed. Noise and applause can distort judgment. Keep your own pace and observe quietly; you may notice changes others miss.",
                    "main_state": "The steadiness to stay clear-headed in an exciting environment",
                    "main_strategy": "Observe carefully and respond when conditions change",
                    "support_risk": "Being distracted by noise or temptation around you",
                    "support_warning": "Following the crowd until you forget your own judgment",
                    "guide": {
                        "love": "Give each other space and time:\n• Return your attention to your own life.",
                        "career": "Prepare quietly and improve the details:\n• Wait actively rather than passively.",
                        "health": "Keep doing the right things without constant anxiety:\n• Give the body enough time to recover.",
                        "finances": "Build knowledge, cash, and a plan:\n• Wait patiently for a strong opportunity.",
                        "relationships": "Do not rush to win everyone's approval:\n• Build yourself and let healthier relationships form."
                    },
                    "focus": {
                        "love": "If the timing is not ready, give it room. A delayed response does not erase your value; keep living your own life instead of waiting anxiously.",
                        "career": "A good idea can still need better timing. Refine the plan and prepare quietly so you are ready when the opening appears.",
                        "health": "Recovery often needs more time than daily measurements suggest. Keep the basics steady and stop treating every small fluctuation as a verdict.",
                        "finances": "You do not need to be invested at every moment. Build knowledge, cash, and criteria so you can act when a genuinely good opportunity appears.",
                        "relationships": "You do not need to prove yourself or please everyone. Use quiet periods to strengthen your own life and let relationships develop naturally."
                    }
                },
                "3": {
                    "name": "Taking the Lead",
                    "text": "If your happiness depends on other people's approval, you eventually lose your own center. Build something you can stand on yourself. Once you do, you no longer need permission to move or feel good.",
                    "main_state": "Stability that comes from taking back control",
                    "main_strategy": "Wake up early and take responsibility for your own direction",
                    "support_risk": "Dependence or people-pleasing",
                    "support_warning": "Living by other people's reactions because you fear being alone",
                    "guide": {
                        "love": "Once you know what you feel, express it:\n• Action is better than waiting for a perfect moment.",
                        "career": "Name the actual obstacle and set a small target:\n• Start moving and correct course as you go.",
                        "health": "Do ten minutes today:\n• Make the goal small enough to begin.",
                        "finances": "Set decision rules and a deadline:\n• Make a good-enough choice and adjust later.",
                        "relationships": "Send the message today:\n• Stop waiting for a better time."
                    },
                    "focus": {
                        "love": "If you know how you feel, endless hesitation only loses time. Say it honestly and accept the risk of a real answer.",
                        "career": "When direction is clear but action is stalled, identify the actual obstacle. Break it into a small next step and improve the plan while moving.",
                        "health": "Do not wait until you feel fully ready. Start with a small action today and let consistency create momentum.",
                        "finances": "Set clear decision criteria and a deadline. After enough information is gathered, act instead of searching forever for the perfect choice.",
                        "relationships": "Send the message or invitation you keep postponing. Many social regrets come from never acting, not from trying and failing."
                    }
                },
                "4": {
                    "name": "Magnetism",
                    "text": "Your energy is drawing people together. Use it freely but honestly: encourage people, share credit, and let enthusiasm help a shared vision become real.",
                    "main_state": "A chance to gather like-minded people through genuine influence",
                    "main_strategy": "Act with confidence instead of doubting yourself",
                    "support_risk": "Worrying that you lack enough charisma or leadership",
                    "support_warning": "Staying back because you do not trust your own influence",
                    "guide": {
                        "love": "Be honest about what you truly feel:\n• Value sincere care more than admiration.",
                        "career": "Use influence while staying humble:\n• Do not promise beyond your capacity.",
                        "health": "Protect time for rest:\n• Do not attend every event out of obligation.",
                        "finances": "Review every invitation carefully:\n• Watch for people trying to benefit from your momentum.",
                        "relationships": "Return sincerity with sincerity:\n• Stay cautious around flattery."
                    },
                    "focus": {
                        "love": "Attention can be flattering, but do not let being liked blur your boundaries. Choose sincere connection over admiration for its own sake.",
                        "career": "Your visibility and influence are high. Use them well, stay honest about what you can deliver, and avoid promises made for applause.",
                        "health": "More social activity can quietly drain you. Keep recovery time protected instead of attending everything to avoid disappointing people.",
                        "finances": "Better finances may attract more offers and partnerships. Review each one carefully, especially when enthusiasm is doing more work than evidence.",
                        "relationships": "This is a good period to build strong connections. Respond warmly to genuine people, but do not confuse flattery with trust."
                    }
                },
                "5": {
                    "name": "Guardrails",
                    "text": "The more tempting the environment, the more useful discipline becomes. Limits may feel restrictive, but they protect you from choices that trade long-term well-being for short-term pleasure.",
                    "main_state": "Awareness that turns limits into protection",
                    "main_strategy": "Treat limits as useful reminders and stay alert",
                    "support_risk": "Feeling trapped or restricted",
                    "support_warning": "Making an impulsive choice simply to break free of limits",
                    "guide": {
                        "love": "Say what you are unsure about instead of guessing:\n• Give the other person room to explain.",
                        "career": "Trust capable partners and give them responsibility:\n• Make trust part of the team culture.",
                        "health": "Use professional advice while listening to your body:\n• Balance guidance with self-awareness.",
                        "finances": "Build long-term partnerships with people you trust:\n• Let repeated reliability matter.",
                        "relationships": "Assume goodwill where it is earned:\n• Be someone others can trust in return."
                    },
                    "focus": {
                        "love": "Trust grows when questions are spoken instead of turned into tests. Ask directly and give the other person a real chance to explain.",
                        "career": "Strong teams do not require constant control. Give capable people responsibility and make reliability part of how the group works.",
                        "health": "Professional advice matters, and so does your actual response. Use both instead of blindly following either one.",
                        "finances": "A reliable long-term partner can be more valuable than constantly searching for a better deal. Let proven trust carry weight.",
                        "relationships": "Trust makes relationships easier when it is earned. Give good people the benefit of the doubt and make your own behavior equally dependable."
                    }
                },
                "6": {
                    "name": "Waking Up",
                    "text": "When celebration runs too long, clarity starts to fade. Stop chasing short-lived pleasure and cut what is only draining you. Bring your energy back to what actually deserves it.",
                    "main_state": "A chance to wake up and return to the right track",
                    "main_strategy": "Apply the brakes and return to a clear state",
                    "support_risk": "Being caught in a pattern that is hard to stop",
                    "support_warning": "Giving up on change because the habit has lasted too long",
                    "guide": {
                        "love": "Stop sacrificing yourself to keep the peace:\n• State your real feelings and boundaries.",
                        "career": "Speak for your professional judgment:\n• Say no to unreasonable demands.",
                        "health": "Put health on the calendar:\n• Treat your own needs as seriously as work.",
                        "finances": "Stop overspending for approval or appearances:\n• Do not use money to buy acceptance.",
                        "relationships": "Stop people-pleasing interactions:\n• Let genuine friends remain."
                    },
                    "focus": {
                        "love": "A relationship built on constant pleasing eventually loses honesty. Stop sacrificing yourself and state what you actually feel and need.",
                        "career": "If you always put other people's demands first, your own direction disappears. Speak from professional judgment and refuse requests that do not make sense.",
                        "health": "Stop leaving health for whatever time remains. Schedule rest, movement, and care with the same seriousness you give work.",
                        "finances": "Look for spending driven by approval, image, or guilt. Protect your future instead of using money to earn acceptance.",
                        "relationships": "People-pleasing trains others to expect endless giving. Set limits and let the relationships that can handle honesty remain."
                    }
                }
            },
            "sui": {
                "1": {
                    "name": "Beginning",
                    "text": "The situation is changing, and holding your old position will only become harder. Adjust early, step beyond familiar circles, and meet people from different fields; a new direction may begin with a new connection.",
                    "main_state": "A new phase shaped by flexible adjustment",
                    "main_strategy": "Step outside your comfort zone and meet something new",
                    "support_risk": "Clinging to familiar methods",
                    "support_warning": "Refusing to change because change feels uncomfortable",
                    "guide": {
                        "love": "Discuss your new expectations honestly:\n• Find a new way to relate together.",
                        "career": "Confirm the new goals and rules:\n• Stay open to learning new methods.",
                        "health": "Use regular routines to handle changes in schedule:\n• Keep sleep and meal times steady.",
                        "finances": "Review your goals and priorities:\n• Keep your financial plan flexible.",
                        "relationships": "Accept that relationships naturally change:\n• Invest in people willing to adjust with you."
                    },
                    "focus": {
                        "love": "When the relationship changes pace, reset your expectations together. Talk openly about current needs and boundaries so the adjustment becomes a shared choice.",
                        "career": "When tasks or conditions change, first clarify the new goals and rules. Communicate early and stay willing to learn; adaptability matters more than defending the old way.",
                        "health": "Your body needs time to adjust to a changing schedule. Keep sleep and meals regular, and make small changes instead of forcing a sudden reset.",
                        "finances": "When conditions change, revisit your goals and priorities. Make measured adjustments instead of panic selling or holding to a plan that no longer fits.",
                        "relationships": "Some people will move closer while others drift away. Let relationships change naturally and focus on those willing to grow with you."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Following the wrong person wastes effort. Some people drain you while others help you grow; choose what supports your direction and let go of what no longer fits.",
                    "main_state": "Clarity to make the right tradeoff",
                    "main_strategy": "Choose the people and paths that truly help you grow",
                    "support_risk": "Staying with what is comfortable instead of what is better",
                    "support_warning": "Giving up growth to protect short-term comfort",
                    "guide": {
                        "love": "Separate lasting value from temporary attraction:\n• Give your attention to the relationship that truly matters.",
                        "career": "Judge each option by its long-term value:\n• Do not trade growth for short-term comfort.",
                        "health": "Treat daily choices as investments in your future:\n• Do not let small habits become larger problems.",
                        "finances": "Return to your long-term financial plan:\n• Let spending support your real priorities.",
                        "relationships": "Set priorities in your relationships:\n• Do not respond to every expectation automatically."
                    },
                    "focus": {
                        "love": "Do not trade a meaningful long-term relationship for short-lived comfort or attraction. Be clear about what truly matters and invest your attention there.",
                        "career": "Avoid sacrificing long-term development for a small short-term gain. Judge opportunities by where they can take you, not just by how easy they feel today.",
                        "health": "Small conveniences can quietly work against long-term health. Enjoy flexibility, but choose habits that support the body you want to have later.",
                        "finances": "Do not take large risks for small gains or spend more just to save a little. Keep each decision tied to your long-term financial goals.",
                        "relationships": "Trying to satisfy everyone can leave too little time for the people who truly matter. Set priorities and protect your attention."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Hesitating when it is time to let go, or doubting when it is time to commit, can make an opportunity disappear. Maturity means choosing: release what is secondary and focus on what deserves your effort.",
                    "main_state": "Growth from following the right direction",
                    "main_strategy": "Release immature attachments and move toward your goal",
                    "support_risk": "Being pulled by hesitation or nostalgia",
                    "support_warning": "Staying in a relationship that no longer helps you grow",
                    "guide": {
                        "love": "Make sure the person deserves your trust:\n• Stay independent rather than follow blindly.",
                        "career": "Choose leaders and organizations worth learning from:\n• Judge character before giving loyalty.",
                        "health": "Do not follow health trends blindly:\n• Choose professional advice supported by evidence.",
                        "finances": "Learn from others but make your own decisions:\n• Set your own exit and profit rules.",
                        "relationships": "Learn from people whose actions match their words:\n• Keep your judgment and your identity."
                    },
                    "focus": {
                        "love": "Before placing your trust in someone, make sure their character deserves it. A strong attachment is not a reason to follow blindly.",
                        "career": "The right leader or company can accelerate your growth. Watch their values and behavior closely; learn when the fit is good, and leave early when it is not.",
                        "health": "Before adopting a popular health method, check the evidence and whether it fits you. A recommendation is not a substitute for informed judgment.",
                        "finances": "You can learn from other investors without giving up your own judgment. Understand the investment and set your own limits before following anyone's call.",
                        "relationships": "Choose mentors and role models whose actions match their values. Learn from them without losing your own judgment."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "Attention and praise can become a trap if they make you chase shortcuts or easy gains. The more others expect from you, the more important it is to stay clean in your choices. Honest work creates results you can stand behind.",
                    "main_state": "Clarity that keeps you true to your original values",
                    "main_strategy": "Stay upright and look past the appeal of immediate gain",
                    "support_risk": "Temptation from short-term benefits",
                    "support_warning": "Letting a quick reward pull you away from your original purpose",
                    "guide": {
                        "love": "Show your real self openly:\n• Let the right person stay for who you are.",
                        "career": "Build your reputation through honesty and results:\n• Let strong work attract opportunities.",
                        "health": "Choose healthy routines you genuinely enjoy:\n• What fits you is easier to sustain.",
                        "finances": "Focus on areas you truly understand:\n• Let real interest support long-term learning.",
                        "relationships": "Do not calculate every relationship by personal gain:\n• Meet people with genuine interest."
                    },
                    "focus": {
                        "love": "Honesty attracts people who value the real you. You do not need tactics to hold a relationship together; direct communication and mutual understanding are stronger.",
                        "career": "Consistent results and a straightforward attitude build trust better than networking tricks. When people know you are reliable, opportunities tend to follow.",
                        "health": "Choose forms of exercise and eating that you actually enjoy instead of forcing yourself to follow trends. A routine that fits you is easier to keep.",
                        "finances": "Stay with areas you understand and are willing to study over time. You do not need to chase every popular idea to build wealth.",
                        "relationships": "Genuine interest is a better social strategy than constant calculation. Treat people sincerely and let trust grow from repeated experience."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The people drawn to your sincerity are those who genuinely want to move forward with you. Protect that trust, keep your promises, and turn shared commitment into real results.",
                    "main_state": "Good things drawn by steady sincerity",
                    "main_strategy": "Act from your better nature and let trust build naturally",
                    "support_risk": "Wondering whether sincerity is practical enough",
                    "support_warning": "Doubting the value of honesty because results are not immediate",
                    "guide": {
                        "love": "Build trust through consistent action:\n• Respect each other's independence.",
                        "career": "Trust capable people and give them room:\n• Review the process before blaming individuals.",
                        "health": "Support your body with regular care:\n• Treat health as a commitment to yourself.",
                        "finances": "Trust the value of long-term investing:\n• Do not abandon the plan because of short-term swings.",
                        "relationships": "Offer trust first:\n• Let trust become the basis of the relationship."
                    },
                    "focus": {
                        "love": "Trust grows through time and repeated action. Share openly, respect each other's space, and show up consistently when support is needed.",
                        "career": "Teams perform better when capable people are trusted. Set clear goals, give them room to work, and fix broken processes before looking for someone to blame.",
                        "health": "Trust your body by giving it reliable care: regular movement, balanced food, and enough sleep. Consistency matters more than occasional intensity.",
                        "finances": "Long-term financial growth depends on trusting a sound process. Follow your plan instead of reacting to every short-term move.",
                        "relationships": "Healthy trust often begins when someone is willing to offer it first. Respect differences, help when needed, and let reliability deepen the bond."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "True commitment comes from willing connection, not from holding each other in place. If a relationship or partnership survives only through force, loosening your grip may give both sides more freedom. Let what truly belongs with you remain honestly.",
                    "main_state": "A deep bond built through lasting loyalty",
                    "main_strategy": "Give steady commitment to what truly deserves it",
                    "support_risk": "A meaningful bond that requires sustained effort",
                    "support_warning": "Abandoning an important commitment simply because it is demanding",
                    "guide": {
                        "love": "Be honest about whether your paths still align:\n• Letting go with gratitude can be kind.",
                        "career": "Do not keep following only because of past investment:\n• Stay loyal to your values.",
                        "health": "Stop telling yourself to push through one more time:\n• Make the change your body needs.",
                        "finances": "Do not hold an investment only because of sunk cost:\n• Reassess anything that repeatedly makes you uneasy.",
                        "relationships": "Let completed relationships end naturally:\n• Separate attachment from bonds worth maintaining."
                    },
                    "focus": {
                        "love": "At a crossroads, be honest about whether you can still move in the same direction. If not, letting go with respect may be kinder than forcing the relationship to continue.",
                        "career": "If a leader or direction no longer matches your principles, reassess it. Past time invested is not a reason to keep following a path that is wrong for you.",
                        "health": "If your body keeps warning you, stop treating endurance as the only answer. Revisit harmful habits and make the adjustment instead of pushing through again.",
                        "finances": "If an investment repeatedly causes concern, review whether it still fits your plan. Do not let sunk cost keep you in a poor position.",
                        "relationships": "Some relationships have completed their role in your life. Let them end with gratitude so you can make room for connections that still have a future."
                    }
                }
            },
            "gu": {
                "1": {
                    "name": "Beginning",
                    "text": "You may be inheriting a mess created before you arrived. It will take work, but it is also a chance to prove your ability. Understand each problem before assigning blame, then repair what you can with steady effort.",
                    "main_state": "Gradual improvement through cleaning up old problems",
                    "main_strategy": "Take responsibility and begin the repair",
                    "support_risk": "Resenting a problem you did not create",
                    "support_warning": "Doing a poor job because the mess feels unfair",
                    "guide": {
                        "love": "Bring up the issue that has been avoided:\n• Repair it while the damage is still manageable.",
                        "career": "Audit the work before taking it over:\n• Fix inherited gaps early.",
                        "health": "Schedule a thorough health review:\n• Address warning signs you have ignored.",
                        "finances": "Clean up old accounts and errors:\n• Bring your finances back to a clear baseline.",
                        "relationships": "Talk directly with the person involved:\n• Close out old misunderstandings."
                    },
                    "focus": {
                        "love": "An issue that has been repeatedly avoided now needs attention. Raise it calmly while it is still manageable; repairing a small crack is easier than rebuilding after a collapse.",
                        "career": "Inherited work may contain hidden gaps or risks. Audit it carefully at the start and fix problems before they become emergencies.",
                        "health": "Minor problems can become larger when ignored. Take recurring signs seriously and get a proper assessment before they deepen.",
                        "finances": "Old accounts and financial loose ends need a full cleanup. Review past records, stop unnecessary charges, and settle what remains outstanding.",
                        "relationships": "Old misunderstandings rarely disappear by themselves. Speak directly, apologize or forgive where appropriate, and close the issue so the relationship can move on."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Old problems in close relationships are best repaired gently, not through force. Resentment often grows from misunderstanding, so restore trust first and discuss change after the relationship feels safer.",
                    "main_state": "Wisdom in resolving emotional tension gently",
                    "main_strategy": "Use empathy and patience instead of force",
                    "support_risk": "Wanting to solve everything quickly and firmly",
                    "support_warning": "Hurting the relationship just to end the issue faster",
                    "guide": {
                        "love": "Show change through action instead of demands:\n• Give the other person time and space to respond.",
                        "career": "Start with small improvements people can absorb:\n• Let reform happen at a workable pace.",
                        "health": "Give your body enough recovery time:\n• Care for yourself gently and consistently.",
                        "finances": "Handle the most urgent financial item first:\n• Do not try to fix everything at once.",
                        "relationships": "Do not demand immediate forgiveness:\n• Let your actions show the change."
                    },
                    "focus": {
                        "love": "Repair takes patience. If the other person does not respond right away, keep your actions steady and warm rather than pressing for reassurance.",
                        "career": "Longstanding problems may resist sudden reform. Start where change is practical and let people adjust as the new process proves itself.",
                        "health": "Recovery takes time. Keep doing what supports your body instead of abandoning the plan because progress feels slow.",
                        "finances": "Financial cleanup works better in manageable steps. Start with the most urgent items and improve the structure steadily rather than trying to solve everything at once.",
                        "relationships": "When repairing a relationship, drop the demand for an immediate response. Give the other person room and let consistent action rebuild trust."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Reform can create resistance, especially when the pace is too fast. If the direction is sound, do not abandon it because of temporary criticism; adjust the method and let results prove the value of the change.",
                    "main_state": "Steady progress because the direction is right",
                    "main_strategy": "Confirm the purpose and keep moving forward",
                    "support_risk": "Criticism caused by moving too quickly",
                    "support_warning": "Abandoning a needed change because others complain",
                    "guide": {
                        "love": "Give the other person what they actually need:\n• Learn the right amount of effort.",
                        "career": "Listen to team feedback before pushing further:\n• Avoid overcorrecting and creating backlash.",
                        "health": "Set realistic health goals:\n• Allow progress to be gradual.",
                        "finances": "Leave reasonable room in your budget:\n• Use a plan you can actually sustain.",
                        "relationships": "Ask before stepping in to help:\n• Respect other people's limits and pace."
                    },
                    "focus": {
                        "love": "Trying too hard to repair a relationship can become controlling. Adjust your approach and give the other person the space they actually need.",
                        "career": "Reform can backfire when it is too aggressive. Listen to the team, adjust the pace, and build enough agreement for the change to last.",
                        "health": "Changing too many habits at once can trigger a rebound. Set realistic goals and let consistency do more work than strictness.",
                        "finances": "Extreme restriction can lead to overspending later. Leave reasonable room for life and use financial rules you can sustain.",
                        "relationships": "Before helping, make sure help is wanted. Respecting boundaries often makes your support more useful."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "Ignoring a visible flaw only lets it grow. You already know where the problem is, so address it now; the earlier you act, the lower the cost and the clearer your mind will be.",
                    "main_state": "A chance to prevent a problem from getting worse",
                    "main_strategy": "Face the issue early instead of tolerating it",
                    "support_risk": "Avoidance and reluctance to deal with the problem",
                    "support_warning": "Letting a small problem become a large one because it feels inconvenient",
                    "guide": {
                        "love": "Decide whether to keep repairing or let go:\n• End a draining relationship with compassion if needed.",
                        "career": "Set review points for continued investment:\n• Allow the process to be imperfect.",
                        "health": "Allow occasional setbacks:\n• Return to the routine instead of giving up.",
                        "finances": "Learn from mistakes and adjust:\n• Cut losses when the facts support it.",
                        "relationships": "Separate relationships that can heal from those that should end:\n• Save your energy for people willing to meet you halfway."
                    },
                    "focus": {
                        "love": "Patience is useful, but endless one-sided effort is not. If the other person gives nothing back, consider whether letting go is healthier than continuing to drain yourself.",
                        "career": "Improvement can take time and still be worth pursuing. Set review points, adjust the method, and be willing to stop if the effort no longer makes sense.",
                        "health": "A setback does not erase progress. Return to the routine instead of treating an imperfect day as failure.",
                        "finances": "Financial repair will include mistakes. Learn from them, adjust the plan, and cut losses when the numbers show that continuing would be worse.",
                        "relationships": "Some relationships can be repaired and some cannot. Know the difference and reserve your effort for people willing to participate in the repair."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The repair is beginning to show results, and others can see your ability and responsibility. Turn what you learned into a better system so the improvement lasts beyond this one crisis.",
                    "main_state": "Recognition earned by turning a difficult situation around",
                    "main_strategy": "Use balanced judgment to resolve the crisis well",
                    "support_risk": "A demanding period of coordination",
                    "support_warning": "Taking shortcuts or giving up because the process is hard",
                    "guide": {
                        "love": "Give sincerely without abandoning your dignity:\n• Stay whole within the relationship.",
                        "career": "Lead by example and keep your word:\n• Use integrity to replace unhealthy old habits.",
                        "health": "Be honest about symptoms:\n• Seek professional help when needed.",
                        "finances": "Face losses honestly and avoid shortcuts:\n• Build finances on clear, lawful choices.",
                        "relationships": "Keep your principles under pressure:\n• Protect the reputation you have earned."
                    },
                    "focus": {
                        "love": "Be sincere while protecting your own boundaries and dignity. Love should not require you to erase yourself.",
                        "career": "Reform is easier to support when the person leading it acts with integrity. Keep your promises and model the standards you want others to follow.",
                        "health": "Be honest about what your body is telling you. Do not hide or minimize symptoms when professional help would be useful.",
                        "finances": "Clean up finances with honesty: acknowledge losses, follow the rules, and avoid shortcuts. Trust built this way can create long-term opportunity.",
                        "relationships": "Consistency between words and actions builds lasting trust. Keep your principles even when compromise would be easier."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "After the repair is complete, wisdom means knowing when to step back. Build a system others can continue, then give yourself room to pursue what matters next.",
                    "main_state": "Freedom to move beyond completed responsibilities",
                    "main_strategy": "Finish what matters, then make room for what you truly want",
                    "support_risk": "Lingering attachment to duties you have already outgrown",
                    "support_warning": "Staying stuck because you cannot let go",
                    "guide": {
                        "love": "Notice the people who kept supporting you:\n• Do not let busyness become distance.",
                        "career": "Develop the team and future successors:\n• Build systems that work without you.",
                        "health": "Do not wait for a breakdown to care for yourself:\n• Put health into the schedule now.",
                        "finances": "Build protection for your family and future:\n• Let wealth support the people you care about.",
                        "relationships": "Reconnect with friends you have neglected:\n• Do not let 'later' become regret."
                    },
                    "focus": {
                        "love": "Do not become so focused on distant goals that you overlook the people already beside you. Make room for the relationships that have supported your growth.",
                        "career": "A strong organization can function without one person holding everything together. Develop successors, document what works, and let the system carry more of the load.",
                        "health": "Do not trade health for progress and assume you can repair it later. Put basic care into your schedule before your body forces the issue.",
                        "finances": "As wealth grows, build protection for the future and for the people who depend on you. Money is most useful when it supports what you value.",
                        "relationships": "Busy periods can quietly create distance. Reach out to important friends before 'when I have time' becomes permanent separation."
                    }
                }
            },
            "lin": {
                "1": {
                    "name": "Beginning",
                    "text": "Opportunity is moving toward you, and you are ready to meet it. Start with sincerity and fairness; a strong beginning can attract the right support and help others move forward with you.",
                    "main_state": "A promising start built on sincere cooperation",
                    "main_strategy": "Open the new phase with clear values and good intent",
                    "support_risk": "Worrying that your influence is not strong enough",
                    "support_warning": "Waiting too long because you doubt your ability to begin",
                    "guide": {
                        "love": "Discuss future plans openly:\n• Make sure both of you understand the coming change.",
                        "career": "Act on the opportunity in front of you:\n• Move forward without compromising your principles.",
                        "health": "Start a new exercise plan:\n• Build capacity before a more demanding period.",
                        "finances": "Research sound financial opportunities:\n• Follow favorable conditions without abandoning your rules.",
                        "relationships": "Show warmth and integrity:\n• Make room for positive new connections."
                    },
                    "focus": {
                        "love": "A change such as living together, marriage, or distance may be approaching. Discuss the future directly so you can face the change as a team.",
                        "career": "The moment favors initiative. Present your ideas, act on the opening, and keep your standards intact while moving quickly enough to use the opportunity.",
                        "health": "If your body allows it, begin building a stronger base now. Start a sustainable exercise routine and improve the basics before a more demanding period arrives.",
                        "finances": "A positive financial opening may be forming. Study it carefully and act in a measured way so a good opportunity becomes a long-term asset rather than a risky bet.",
                        "relationships": "New friendships or partnerships may be entering your life. Be open, sincere, and willing to take the first step."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "By going to the front line, you can see both the problem and the people affected by it. Listen closely and trust real expertise; people work harder when they know they have been understood.",
                    "main_state": "Long-term stability through humility during favorable times",
                    "main_strategy": "Guide others with warmth, firmness, and respect",
                    "support_risk": "Becoming proud because things are going well",
                    "support_warning": "Losing humility in a period of success",
                    "guide": {
                        "love": "Value the person already beside you:\n• Keep your promises and boundaries.",
                        "career": "Take the right path instead of using shortcuts:\n• Let competence and integrity attract support.",
                        "health": "Keep regular care even when you feel well:\n• Strengthen the basics during a good period.",
                        "finances": "Take gains without becoming greedy:\n• Stay diversified and disciplined.",
                        "relationships": "Stay humble and sincere:\n• Remember the people who supported you early."
                    },
                    "focus": {
                        "love": "Good periods can bring more attention and temptation. Protect what already matters by keeping your commitments clear and not letting novelty distract you.",
                        "career": "When opportunity appears, use sound methods rather than shortcuts. Strong work and integrity attract better long-term support than manipulation does.",
                        "health": "Feeling better is a reason to maintain good habits, not abandon them. Use a strong period to make the foundation even more reliable.",
                        "finances": "When gains arrive, keep the same risk rules that helped you get there. Take profits when appropriate and avoid increasing risk simply because recent results are good.",
                        "relationships": "Success should not change how you treat people. Stay humble and remember those who supported you before your position improved."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "A team cannot be carried by charm or surface enthusiasm alone. Put less energy into pleasing everyone and more into becoming useful; when the results are real, doubt loses its power.",
                    "main_state": "Trust earned through practical and sincere improvement",
                    "main_strategy": "Notice where you are relying on appearances and correct it",
                    "support_risk": "Using approval as a substitute for real effort",
                    "support_warning": "Doing surface work mainly to be liked",
                    "guide": {
                        "love": "Ask whether you are truly invested:\n• Be willing to contribute to a shared future.",
                        "career": "Check whether you are ready for the responsibility:\n• Opportunity favors people willing to do the work.",
                        "health": "Do not wait for symptoms before taking action:\n• Invest in your health now.",
                        "finances": "Do not expect easy profit without effort:\n• Every real opportunity requires preparation.",
                        "relationships": "Care about what your friends actually need:\n• Build relationships through mutual effort."
                    },
                    "focus": {
                        "love": "A relationship cannot stay healthy if one person only wants the benefits. Ask whether you are willing to contribute time, effort, and responsibility as well as receive affection.",
                        "career": "An opportunity is only useful if you are prepared to carry what comes with it. Make sure you are ready to work for the responsibility rather than only enjoy the title or reward.",
                        "health": "Do not wait for a problem to force your attention. Preventive habits matter most before symptoms appear.",
                        "finances": "Easy-profit thinking creates blind spots. Research, prepare, and accept that sound financial opportunities still require effort and discipline.",
                        "relationships": "Relationships weaken when you only take. Show genuine interest in what others need and contribute to the bond instead of assuming it will maintain itself."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "Strong leadership does not stay far from the work. Step into the real environment, listen to the people doing the job, and look closely; practical answers often sit inside details that are easy to miss from a distance.",
                    "main_state": "Solid results from direct involvement",
                    "main_strategy": "Go to the front line and understand what is really happening",
                    "support_risk": "Finding hands-on involvement tiring or inconvenient",
                    "support_warning": "Managing from a distance without learning the real situation",
                    "guide": {
                        "love": "Bring fresh energy into the relationship:\n• Show everyday appreciation.",
                        "career": "Take on a larger challenge:\n• Keep learning even when your position feels secure.",
                        "health": "Set a higher but realistic health goal:\n• Use a stable period to improve further.",
                        "finances": "Actively improve your asset allocation:\n• Let stable assets keep working for you.",
                        "relationships": "Reach out and share your life:\n• Show up when the other person needs you."
                    },
                    "focus": {
                        "love": "A mature relationship still needs new energy. Create shared experiences and express appreciation so stability does not turn into neglect.",
                        "career": "A secure position is a good place to keep growing. Take on a meaningful challenge and expand your skills before the environment forces you to change.",
                        "health": "When your health is stable, you have room to refine it. Add a reasonable new challenge rather than waiting for a problem to create urgency.",
                        "finances": "Stable finances create room to optimize. Review your allocation and learn better tools so your assets continue to improve without unnecessary risk.",
                        "relationships": "Long friendships still need active care. Reach out, share what is happening in your life, and be present when it matters."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You know how to put the right people in the right roles and let skilled people do skilled work. Leadership does not require doing everything yourself; trust and delegation help the team develop its own strength.",
                    "main_state": "Smooth leadership through good judgment and delegation",
                    "main_strategy": "Choose capable people instead of handling everything yourself",
                    "support_risk": "Wanting to take over because you do not fully trust others",
                    "support_warning": "Carrying every task yourself because delegation feels unsafe",
                    "guide": {
                        "love": "Understand what each person truly needs:\n• Guide the relationship so both people can grow.",
                        "career": "Plan with a long-term view:\n• Use a clear vision to align the team.",
                        "health": "Understand how your body works and choose a fitting plan:\n• Treat root causes rather than only surface symptoms.",
                        "finances": "Build long-term allocation and legacy plans:\n• Let money support your larger goals.",
                        "relationships": "Choose relationships that help both sides grow:\n• Create opportunities for people coming after you."
                    },
                    "focus": {
                        "love": "A good relationship is not about control. Understand each other's real needs and guide the relationship in a way that helps both people become stronger.",
                        "career": "You may be ready to lead from a wider perspective. Set direction, delegate clearly, and let capable people own their work instead of managing every detail yourself.",
                        "health": "Use understanding rather than trends to manage health. Learn what your body responds to and choose a plan that addresses the underlying pattern.",
                        "finances": "Think beyond short-term moves. Build an allocation that supports long-term goals and, where relevant, how assets will be protected or passed on.",
                        "relationships": "Invest in relationships with mutual growth. Sharing opportunities and helping others develop can create a stronger network than short-term exchange."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Your role is nearing completion, and steady sincerity has earned lasting respect. Pass on what you have learned and leave behind systems that can continue without you.",
                    "main_state": "A thoughtful and complete ending",
                    "main_strategy": "Finish with the same warmth and care you showed at the start",
                    "support_risk": "Relaxing too much because the end is near",
                    "support_warning": "Becoming distant or careless just before completion",
                    "guide": {
                        "love": "Do not neglect a stable relationship:\n• Address small problems before they grow.",
                        "career": "Prepare for change even during success:\n• Keep some flexibility for unexpected conditions.",
                        "health": "Build preventive habits while you feel well:\n• Use regular checkups and maintenance.",
                        "finances": "Build reserves during strong periods:\n• Prepare for weaker conditions before they arrive.",
                        "relationships": "Repay genuine support with genuine care:\n• Value the friends who remain through difficult periods."
                    },
                    "focus": {
                        "love": "Stability can make people less attentive. Keep investing in the relationship and address small issues before comfort turns them into larger ones.",
                        "career": "Success is the right time to prepare for change. Keep learning, watch the environment, and preserve enough flexibility to respond when conditions shift.",
                        "health": "The best time for prevention is when you feel well. Maintain exercise, manage stress, and keep appropriate checkups instead of waiting for a problem.",
                        "finances": "Strong financial periods are ideal for building reserves and lowering unnecessary debt. Prepare the buffer before a downturn, not during one.",
                        "relationships": "When life is going well, remember the people who supported you when it was not. Those relationships deserve steady attention."
                    }
                }
            },
            "guan": {
                "1": {
                    "name": "Beginning",
                    "text": "A narrow view can make one small part look like the whole world. Your understanding is still limited, so hold back judgment and widen your experience before deciding what something means.",
                    "main_state": "A fuller picture after widening your view",
                    "main_strategy": "Step outside your current frame and broaden your perspective",
                    "support_risk": "Habitually focusing only on what is right in front of you",
                    "support_warning": "Staying in a narrow view because it feels familiar",
                    "guide": {
                        "love": "Face conflict with more maturity:\n• Keep sincerity without acting immaturely.",
                        "career": "Learn quickly from mistakes:\n• Ask questions and avoid repeating the same error.",
                        "health": "Learn basic health knowledge:\n• Understanding your body is the first step in caring for it.",
                        "finances": "Start with budgeting and tracking:\n• Build the basics before investing.",
                        "relationships": "Learn appropriate social boundaries:\n• Add judgment to your natural openness."
                    },
                    "focus": {
                        "love": "Simplicity can be appealing, but a relationship still needs maturity. Take responsibility for your behavior and handle conflict without losing your basic sincerity.",
                        "career": "Mistakes are normal early in a role, but repeating them is avoidable. Ask experienced people, learn from what went wrong, and improve quickly.",
                        "health": "Not knowing something about health is fine; refusing to learn is the real problem. Build a basic understanding of your body so your choices become more informed.",
                        "finances": "Weak financial knowledge creates unnecessary risk. Learn budgeting, saving, and tracking before moving into more complex investments.",
                        "relationships": "Openness works best when paired with social awareness. Learn how boundaries and context shape mature interaction without losing your sincerity."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Looking through a narrow opening shows only one part of the world. Expertise inside a familiar area can still hide the larger picture; step outside occasionally and listen to people who see the situation from another position.",
                    "main_state": "Clearer judgment from a different angle",
                    "main_strategy": "Change perspective and step beyond familiar ground",
                    "support_risk": "Staying inside a familiar viewpoint",
                    "support_warning": "Refusing to change perspective because the current one feels safe",
                    "guide": {
                        "love": "Keep some private space within the relationship:\n• Healthy boundaries can preserve freshness.",
                        "career": "Observe and understand before giving an opinion:\n• Act after you have enough information.",
                        "health": "Track consistently and look for long-term patterns:\n• Connect symptoms with daily routines.",
                        "finances": "Research and observe before entering:\n• Wait for a suitable opportunity.",
                        "relationships": "Let trust build over time:\n• Do not reveal everything at once."
                    },
                    "focus": {
                        "love": "A mature relationship can include privacy and personal space. You do not need to expose every thought immediately; healthy boundaries can support both respect and freshness.",
                        "career": "When you are still learning the culture or situation, observe more than you speak. Gather enough context before giving strong opinions or making a move.",
                        "health": "Health patterns often take time to appear. Track consistently and look for links between symptoms, habits, and schedule instead of reacting to every single fluctuation.",
                        "finances": "You do not have to enter the market just because you are interested. Watch, study, and wait until the setup makes sense to you.",
                        "relationships": "Trust does not need to be immediate. Share gradually and let repeated behavior show who deserves greater access to your life."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Look back at the choices that brought you here. Which were deliberate and which simply followed the crowd? Slow down, review where to advance or pause, and use a clearer understanding of yourself to choose the next step.",
                    "main_state": "A direction that fits you better after review and adjustment",
                    "main_strategy": "Adjust your pace according to your actual situation",
                    "support_risk": "Uncertainty about whether to move forward or wait",
                    "support_warning": "Following others and ignoring your own circumstances",
                    "guide": {
                        "love": "Respect the other person's pace:\n• Practice patience instead of forcing progress.",
                        "career": "Take responsibility for your own choices:\n• Balance observation with action.",
                        "health": "Stop comparing methods and start one reasonable plan:\n• Action matters more than a perfect plan.",
                        "finances": "Set a start date and begin small:\n• Let practice become part of your learning.",
                        "relationships": "Open up gradually:\n• Build relationships through actual interaction."
                    },
                    "focus": {
                        "love": "If you keep pushing the pace, the other person may feel pressure. Review whether you are moving too fast and allow the relationship to develop at a pace both people can accept.",
                        "career": "Too much observation can become indecision. Stop outsourcing every choice to others and practice taking responsibility for your own judgment.",
                        "health": "Research alone will not improve your health. Choose one reasonable approach and begin; a workable plan in action is more useful than endless comparison.",
                        "finances": "If you only research and never begin, your knowledge remains theoretical. Start small at a planned time and let real experience teach you as well.",
                        "relationships": "Constantly watching from the edge can prevent real connection. Open up in measured ways and let relationships develop through shared experience."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "You may be seeing the broader direction before others do. That perspective has value, so use it: share what you see clearly and let your judgment help the group choose a better path.",
                    "main_state": "A chance to take a more important role because your insight is recognized",
                    "main_strategy": "Use the timing well and speak up about what you see",
                    "support_risk": "Worrying that your ideas will not be taken seriously",
                    "support_warning": "Hiding useful insight because you fear being challenged",
                    "guide": {
                        "love": "If the relationship is clear to you, express your feelings:\n• Do not let hesitation waste the opportunity.",
                        "career": "Ask for work where your strengths can matter:\n• Let your ability be visible.",
                        "health": "Turn what you know into daily habits:\n• Let knowledge become action.",
                        "finances": "Put your financial plan into practice:\n• Turn insight into disciplined action.",
                        "relationships": "Deepen friendships you know are worthwhile:\n• Move beyond surface-level contact."
                    },
                    "focus": {
                        "love": "If you understand the relationship clearly and believe it is worth pursuing, let the other person know. Insight only helps when it leads to an honest next step.",
                        "career": "You may now understand both the team's direction and where you can contribute. Step out of the observer role and take on work that lets your judgment create value.",
                        "health": "Knowing what your body needs is only the first half. Turn that knowledge into regular action so it can actually change your health.",
                        "finances": "Once you understand your situation and plan, begin executing it. Knowledge becomes useful only when it changes how money is allocated and managed.",
                        "relationships": "When you know a friendship is worth deepening, create the opportunity for more meaningful interaction instead of leaving it at polite contact."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Real influence begins when you notice how your own behavior affects others. Example works better than lectures; if you hold yourself to the standard you want to see, people around you often adjust naturally.",
                    "main_state": "Influence that comes naturally from leading by example",
                    "main_strategy": "Model the behavior you value instead of preaching it",
                    "support_risk": "Finding example-setting slower and harder than giving advice",
                    "support_warning": "Replacing personal example with lectures because you want faster results",
                    "guide": {
                        "love": "Reflect on how your behavior affects the relationship:\n• Model the respect you want to receive.",
                        "career": "Hold yourself to a higher standard:\n• Let the team see the standard in your actions.",
                        "health": "Learn from your own data:\n• Review which habits actually change how you feel.",
                        "finances": "Review past financial decisions:\n• Build rules from what your own history teaches you.",
                        "relationships": "Correct your own weaknesses first:\n• Let consistent behavior influence others."
                    },
                    "focus": {
                        "love": "Ask whether your own words and actions make the other person feel respected. When you are willing to correct yourself, the relationship has a stronger chance to improve.",
                        "career": "People watch what a leader does more closely than what a leader says. Hold yourself to the standard you expect from the team and review whether your decisions are fair.",
                        "health": "Use your own records to learn which routines actually help. Personal patterns are often more useful than blindly copying what works for someone else.",
                        "finances": "Review your past choices and separate sound judgment from emotion-driven decisions. Turn those lessons into rules you can use again.",
                        "relationships": "Before asking others to change, check whether your own behavior matches your values. Consistency builds more influence than criticism."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Maturity means understanding how people and situations work without becoming harsh. You can now step beyond personal gain and loss, see more of the whole, and let that broader understanding shape how you live.",
                    "main_state": "A wider perspective after releasing narrow self-interest",
                    "main_strategy": "Use empathy to understand people and situations more fully",
                    "support_risk": "Finding it hard to stop keeping score",
                    "support_warning": "Remaining trapped in personal gain and loss",
                    "guide": {
                        "love": "Face your own blind spots honestly:\n• Change your part before demanding change from the relationship.",
                        "career": "Review your own contribution before blaming the environment:\n• Prove your ideas through action.",
                        "health": "Be honest about harmful habits:\n• Make one concrete change for your health.",
                        "finances": "Identify financial mistakes that keep repeating:\n• Correct the underlying pattern.",
                        "relationships": "Practice looking at your own role first:\n• Reflect before blaming others."
                    },
                    "focus": {
                        "love": "It is easy to see the other person's flaws and miss your own. Look honestly at the patterns you bring into the relationship; change becomes more possible when you start with your part.",
                        "career": "Before blaming the system or other people, examine your own performance and choices. Improve what is within your control and let action support your argument.",
                        "health": "Notice the habits you already know are harmful and stop explaining them away with stress or busyness. Honest self-observation is the start of change.",
                        "finances": "Look for repeated patterns: the same overspending, the same impulsive trade, or the same avoidable mistake. Fixing the pattern matters more than treating each event separately.",
                        "relationships": "In conflict, ask what you may have contributed before focusing only on the other person's fault. Self-reflection can loosen situations that argument cannot."
                    }
                }
            },
            "shike": {
                "1": {
                    "name": "Beginning",
                    "text": "A small restriction appears early, before the mistake grows. Treat it as useful feedback: correct the course now while the cost is still low.",
                    "main_state": "Catching a problem early and avoiding a larger one",
                    "main_strategy": "Address the issue while it is still small",
                    "support_risk": "Discomfort with an early warning",
                    "support_warning": "Ignoring a warning because it seems too minor",
                    "guide": {
                        "love": "Check whether the relationship has healthy boundaries:\n• Give each other enough room.",
                        "career": "Follow rules and professional boundaries:\n• Do not trade principles for convenience.",
                        "health": "• Review basic habits and build simple daily discipline.",
                        "finances": "• Set clear limits for spending and investing.",
                        "relationships": "• Set personal boundaries without controlling others."
                    },
                    "focus": {
                        "love": "Review whether both of you have enough space and respect for each other’s limits. Healthy boundaries make a relationship safer, not colder.",
                        "career": "Professional trust grows from respecting rules, roles, and limits. Avoid crossing lines for convenience or personal favors.",
                        "health": "Start with basic discipline: regular care, consistent routines, and moderation. Simple habits protect your health over time.",
                        "finances": "Good money management needs limits. Set spending caps and clear investment rules so short-term impulses do not weaken long-term stability.",
                        "relationships": "Healthy relationships need clear boundaries. Respect other people’s lives while protecting your own limits."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You may be pushing too hard. The issue still needs correction, but the method can be gentler. Hold your position without making the other person feel attacked.",
                    "main_state": "Handling what must be handled with fairness",
                    "main_strategy": "Stay firm while dealing with the issue fairly",
                    "support_risk": "Worry that you may have gone too far",
                    "support_warning": "Backing away from a valid position because you fear sounding too harsh",
                    "guide": {
                        "love": "Listen for what is useful in the feedback:\n• Keep what helps and let go of the rest.",
                        "career": "Treat criticism as useful input:\n• Appreciate people who speak honestly.",
                        "health": "• Take your body’s warnings seriously and respond early.",
                        "finances": "• Learn from losses instead of blaming luck.",
                        "relationships": "• Listen fully before responding to criticism."
                    },
                    "focus": {
                        "love": "Do not become defensive the moment you hear criticism. Separate useful feedback from misunderstanding, and let honest conversation improve the relationship.",
                        "career": "Before defending yourself, check whether the criticism contains something useful. People who can absorb feedback usually improve faster.",
                        "health": "Physical warning signs are direct feedback. Notice them early and respond before a small issue becomes larger.",
                        "finances": "Losses are feedback. Review what went wrong, learn from it, and adjust instead of blaming luck or other people.",
                        "relationships": "Listen before reacting. Separate facts from emotion and value the people who are willing to tell you the truth."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You discover that an old problem has a toxic edge. Resistance may appear when you try to fix it. Stay steady, avoid needless confrontation, and remove the harmful part without losing your direction.",
                    "main_state": "Staying steady despite resistance",
                    "main_strategy": "Do what is right without letting pushback shake you",
                    "support_risk": "Resistance or backlash from others",
                    "support_warning": "Doubting a sound decision because others push back",
                    "guide": {
                        "love": "• Loosen rigid expectations and give the relationship room to breathe.",
                        "career": "• Know which principles matter and where flexibility is possible.",
                        "health": "• Allow occasional flexibility without guilt.",
                        "finances": "• Review and adjust your plan when needed.",
                        "relationships": "• Yield on nonessential issues and accept differences."
                    },
                    "focus": {
                        "love": "A relationship becomes strained when every expectation turns rigid. Keep your core needs, but allow flexibility where it does not harm the relationship.",
                        "career": "Not every detail needs the same level of firmness. Protect important standards and stay flexible on the rest.",
                        "health": "Overly strict routines can backfire. Allow occasional flexibility and judge progress over time, not by one imperfect day.",
                        "finances": "A good financial plan combines discipline with flexibility. Review it regularly instead of following rules blindly.",
                        "relationships": "You do not need to win every minor point. Accept differences and save firmness for issues that truly matter."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "A hard obstacle may contain the most valuable lesson. Take on the problem others avoid; working through it can build skills and confidence that stay with you.",
                    "main_state": "Determination that can overcome a difficult obstacle",
                    "main_strategy": "Stay clear and persistent until the problem is handled",
                    "support_risk": "Slow progress against strong resistance",
                    "support_warning": "Giving up because the process is difficult",
                    "guide": {
                        "love": "• Pause a difficult conflict and return when both sides are ready.",
                        "career": "• Set aside a deadlock and move to what can still be done.",
                        "health": "• Give treatment and recovery enough time.",
                        "finances": "• Keep cash available when the direction is unclear.",
                        "relationships": "• Step away from heated conflict and agree to talk later."
                    },
                    "focus": {
                        "love": "Not every problem must be solved immediately. A pause can create enough space for both of you to think and return with a calmer approach.",
                        "career": "When a decision is stuck, pause the disputed part and keep moving on workable tasks. Distance can make the next step clearer.",
                        "health": "If a health issue takes time, do what you can and let qualified care and recovery have enough time to work.",
                        "finances": "When the direction is unclear, waiting and holding cash can be a valid strategy. Do not force a decision just to feel active.",
                        "relationships": "When conflict is too heated, step away before more damage is done. Return to the conversation after emotions settle."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Working through a difficult issue can reveal your fairness and judgment. If you are in a position to decide, stay balanced and impartial; each fair decision builds trust.",
                    "main_state": "A fair and clear decision brought to completion",
                    "main_strategy": "Make the decision fairly and with consideration",
                    "support_risk": "Balancing rules with human concerns",
                    "support_warning": "Rushing to finish and losing fairness",
                    "guide": {
                        "love": "• Back promises with action.",
                        "career": "• Do not promise what you cannot deliver; follow through on what you accept.",
                        "health": "• Start with one real action today.",
                        "finances": "• Use a simple plan and actually follow it.",
                        "relationships": "• Turn vague promises into specific actions."
                    },
                    "focus": {
                        "love": "Words matter, but follow-through creates security. Keep promises, show up when needed, and let consistent action support what you say.",
                        "career": "Reliability comes from keeping commitments. Promise less, deliver what you accept, and let your work build your reputation.",
                        "health": "Do not wait for the perfect plan. Take one concrete step today and let small actions create the change.",
                        "finances": "A simple plan that you follow is better than a perfect plan that stays on paper. Automate savings and review your accounts regularly.",
                        "relationships": "Replace vague intentions with specific action. Set the time, follow through, and ask directly how you can help."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "When pride blocks every warning, a small issue can become a serious one. Stop, listen, and make room for advice before the problem grows.",
                    "main_state": "A chance to improve by listening before things worsen",
                    "main_strategy": "Let go of stubbornness and hear the warning",
                    "support_risk": "Resistance to admitting a mistake",
                    "support_warning": "Rejecting important advice to protect your pride",
                    "guide": {
                        "love": "Pay attention to what your partner truly needs:\n• Presence can matter more than advice.",
                        "career": "• Understand people’s motives and needs, not just tasks.",
                        "health": "• Listen to small changes in your body.",
                        "finances": "• Let money serve your values instead of chasing numbers alone.",
                        "relationships": "• Listen for the feeling behind the words."
                    },
                    "focus": {
                        "love": "Love is not only words or gestures. Pay attention to what the other person actually needs; sometimes quiet presence helps more than advice.",
                        "career": "Good leadership means understanding people as well as tasks. Know what motivates the team and what support they need.",
                        "health": "Listen to your body instead of forcing it through every signal. Notice small changes and look for the cause behind persistent discomfort.",
                        "finances": "Financial goals should support the life you value. Growth matters, but money is useful only when it serves your priorities.",
                        "relationships": "Listen with full attention. Try to understand the emotion and need behind the words instead of preparing your reply."
                    }
                }
            },
            "bi_adorn": {
                "1": {
                    "name": "Beginning",
                    "text": "Leave the flashy ride and walk on your own. Simplicity is stronger now. Focus on fundamentals; steady effort earns more trust than display.",
                    "main_state": "Moving forward steadily through practical effort",
                    "main_strategy": "Rely on your own work instead of chasing appearances",
                    "support_risk": "Envy of other people’s shortcuts or status",
                    "support_warning": "Sacrificing substance to look impressive",
                    "guide": {
                        "love": "Let the other person meet the real you:\n• Simplicity makes the relationship easier.",
                        "career": "Build quality before presentation:\n• Strengthen the basics.",
                        "health": "• Return to basic food, movement, and sleep habits.",
                        "finances": "• Live within your means and build real assets.",
                        "relationships": "• Be sincere and simple, and let your character show over time."
                    },
                    "focus": {
                        "love": "Early in a relationship, showing your real self is more useful than managing an image. The right person should not require constant performance.",
                        "career": "Strong fundamentals matter more than a polished surface. Build the work first; presentation can support it later.",
                        "health": "Health does not need to be complicated. Consistent food, movement, and sleep habits matter more than expensive trends.",
                        "finances": "Spend for real needs, not status. Building savings and useful assets creates more security than maintaining an image.",
                        "relationships": "You do not need an impressive introduction. Be sincere and let trust grow from repeated, ordinary interactions."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "A beard depends on the chin beneath it: decoration depends on substance. You may be in a supporting role now. Do the details well instead of competing for the spotlight.",
                    "main_state": "Adding value from a supporting role",
                    "main_strategy": "Know your role and do not force yourself into the center",
                    "support_risk": "Wanting more control or recognition",
                    "support_warning": "Taking someone else’s place just to be noticed",
                    "guide": {
                        "love": "Build trust and understanding first:\n• Form is only an extra.",
                        "career": "• Put resources into work that creates real value.",
                        "health": "• Protect sleep and nutrition before adding advanced routines.",
                        "finances": "• Separate needs from wants and invest in useful assets.",
                        "relationships": "• Show care through substance rather than ceremony."
                    },
                    "focus": {
                        "love": "In a relationship, trust and understanding matter more than displays of romance. Build the foundation first; gestures can enhance it later.",
                        "career": "Know what creates value and put your time there. Good judgment means separating core work from presentation.",
                        "health": "Start with the basics. Sleep and nutrition matter more than expensive extras when the foundation is weak.",
                        "finances": "Separate what you need from what you simply want. Direct more money toward assets and goals that improve your long-term position.",
                        "relationships": "Real care matters more than formal gestures. Let people feel your sincerity through what you actually do."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Attention and praise may be surrounding you. Enjoy it, but stay clear-headed. Keep strengthening the real substance behind the image.",
                    "main_state": "Enjoying recognition without losing perspective",
                    "main_strategy": "Enjoy the good while staying grounded",
                    "support_risk": "Being distracted by appearances and praise",
                    "support_warning": "Letting surface success replace inner clarity",
                    "guide": {
                        "love": "Check whether effort is balanced:\n• Talk honestly about what each person needs.",
                        "career": "• Clarify expectations and shared responsibility.",
                        "health": "• Face your real health status and change the underlying habits.",
                        "finances": "• Look at the full financial picture, including debt.",
                        "relationships": "• Allow real needs and vulnerability to be seen."
                    },
                    "focus": {
                        "love": "If you are carrying most of the relationship, surface harmony will not last. Talk openly about effort, needs, and what each person can realistically give.",
                        "career": "If one person is carrying the team, the structure needs adjustment. Make responsibilities clear and let everyone own their part.",
                        "health": "Do not focus only on visible results. Look at the habits and health measures underneath them and improve the foundation.",
                        "finances": "A good-looking account balance can hide debt or future obligations. Review the full picture before judging your finances.",
                        "relationships": "Relationships become empty when everything stays polite and polished. Let trusted people see some of your real needs and vulnerability."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "The surface shine fades and something sincere approaches. Respond to genuine effort with genuine effort; do not mistake sincerity for a threat.",
                    "main_state": "Recognizing a sincere connection beneath appearances",
                    "main_strategy": "Respond to sincerity without unnecessary suspicion",
                    "support_risk": "Misreading another person’s intention at first",
                    "support_warning": "Pushing away someone genuine because you are too guarded",
                    "guide": {
                        "love": "• Show love through action and focused time.",
                        "career": "• Let results prove your value.",
                        "health": "• Do the simple basics every day.",
                        "finances": "• Automate saving and repeat simple discipline.",
                        "relationships": "• Show up when friends need you and keep your word."
                    },
                    "focus": {
                        "love": "When words are not enough, use presence and action. Small, sincere acts often mean more than impressive gestures.",
                        "career": "Put more energy into output than presentation. Clear results are often the strongest proof of your ability.",
                        "health": "Health improves through ordinary repetition: drink water, move, sleep, and eat reasonably. Simple actions beat elaborate plans.",
                        "finances": "Wealth grows through repeated discipline. Automate savings and keep a simple review routine instead of chasing clever tricks.",
                        "relationships": "Reliability is practical. Show up, follow through, and let people learn that your word means something."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A simple gift given with care can mean more than an expensive display. When resources are limited, sincerity and thoughtfulness are enough.",
                    "main_state": "Sincere intent that reaches people",
                    "main_strategy": "Express care through thought rather than display",
                    "support_risk": "Comparing yourself and worrying that you are not giving enough",
                    "support_warning": "Letting status matter more than sincerity",
                    "guide": {
                        "love": "• Focus on the real bond, even if it is quiet and simple.",
                        "career": "• Stay modest and solid; let good work attract opportunity.",
                        "health": "• Let your body’s results matter more than comparison.",
                        "finances": "• Avoid spending or investing for status.",
                        "relationships": "• Do good quietly and let sincerity speak for itself."
                    },
                    "focus": {
                        "love": "A relationship does not need an audience. Focus on the quality of the bond between you; quiet sincerity can be stronger than public display.",
                        "career": "Consistent work and modest confidence build trust. You do not need to chase every spotlight when your work is strong.",
                        "health": "You do not need to prove your health progress to anyone. Keep doing what works and judge it by how your body responds.",
                        "finances": "Financial security does not need to look impressive. Avoid status spending and let quiet accumulation do the work.",
                        "relationships": "Kindness does not need to be announced. Small, consistent acts often build the strongest friendships."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The highest form of style no longer looks forced. When you stop needing an image to prove your value, simplicity becomes enough.",
                    "main_state": "Returning to a simple and genuine way of being",
                    "main_strategy": "Remove unnecessary decoration and be yourself",
                    "support_risk": "Worry that being real may seem too ordinary",
                    "support_warning": "Wearing a false image because you fear being plain",
                    "guide": {
                        "love": "Stop covering problems with appearances:\n• Talk about what is real.",
                        "career": "• Stop managing the image and face real performance.",
                        "health": "• Pay attention to internal health, not appearance alone.",
                        "finances": "• Stop using debt to maintain an image.",
                        "relationships": "• Separate real connection from surface familiarity."
                    },
                    "focus": {
                        "love": "If a relationship looks good but feels empty, the surface cannot fix it. Talk honestly about what is missing and return to what is real.",
                        "career": "A polished image cannot replace results. If performance or direction is weak, address it directly and rebuild value from the foundation.",
                        "health": "Appearance is only one part of health. Pay attention to how your body functions and to meaningful health measures, not looks alone.",
                        "finances": "If appearance is being funded by debt, the structure is unstable. Reduce the performance and rebuild cash flow and savings honestly.",
                        "relationships": "Some relationships look active but lack real connection. Put more energy into the people with whom honesty and mutual support actually exist."
                    }
                }
            },
            "bo": {
                "1": {
                    "name": "Beginning",
                    "text": "The foundation is starting to weaken, even if the damage is not obvious yet. Stop expanding and check what supports you: health, relationships, work, and money.",
                    "main_state": "Seeing the warning early enough to prepare",
                    "main_strategy": "Notice early signs and start protecting yourself",
                    "support_risk": "Wanting to ignore the problem",
                    "support_warning": "Looking away because the warning is uncomfortable",
                    "guide": {
                        "love": "• Recognize a relationship that is wearing you down and protect yourself.",
                        "career": "• Prepare early if the environment is clearly deteriorating.",
                        "health": "• Respond to persistent warning signs and seek appropriate care.",
                        "finances": "• Cut losses early and protect remaining capital.",
                        "relationships": "• Step away from relationships that consistently drain you."
                    },
                    "focus": {
                        "love": "If a relationship is steadily damaging your dignity or well-being, holding on does not make it healthier. Leaving can be a form of self-protection.",
                        "career": "If the environment is clearly deteriorating, build transferable skills and prepare options before the situation forces your hand.",
                        "health": "Persistent worsening deserves attention. Do not normalize clear warning signs; get appropriate professional evaluation early.",
                        "finances": "Do not keep funding a losing position only because you already invested in it. Protect what remains.",
                        "relationships": "Some relationships consume far more than they give. Creating distance can make room for healthier connections."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "The weakening has reached the structure around you. Support may be disappearing. Reduce exposure, protect key resources, and move toward a safer position.",
                    "main_state": "Preserving strength by moving to safety",
                    "main_strategy": "Stay alert and reduce exposure early",
                    "support_risk": "Reluctance to give up an old advantage",
                    "support_warning": "Trying to stand out when conditions are clearly against you",
                    "guide": {
                        "love": "• Judge reliability by actions, not reassurance.",
                        "career": "• Build skills that do not depend on one person or organization.",
                        "health": "• Use reliable, evidence-based care rather than unverified claims.",
                        "finances": "• Let savings and your own ability be your main support.",
                        "relationships": "• Observe before attaching yourself to a new group."
                    },
                    "focus": {
                        "love": "When the foundation feels unstable, judge the relationship by consistent actions. Do not make dependence your only source of security.",
                        "career": "Do not base your future on a powerful sponsor or unstable structure. Build skills that stay useful across environments.",
                        "health": "When you feel vulnerable, exaggerated health promises can be tempting. Prefer qualified care and reliable evidence.",
                        "finances": "Do not rely on promises, tips, or rescue from others. Strengthen savings, income ability, and your own financial base.",
                        "relationships": "Do not rush into a new group just to replace lost security. Observe who is truly dependable while keeping your independence."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Others may be moving in the wrong direction, but you do not have to follow. Staying clear and keeping your own line can be progress in itself.",
                    "main_state": "Staying independent instead of following the crowd",
                    "main_strategy": "Keep a clear mind and follow what you believe is right",
                    "support_risk": "Feeling isolated at times",
                    "support_warning": "Following the crowd only to avoid loneliness",
                    "guide": {
                        "love": "• Stop seeking approval from a relationship that keeps hurting you.",
                        "career": "• Stop over-accommodating and state your limits.",
                        "health": "• Stop habits that repeatedly harm your body.",
                        "finances": "• Do not use money to buy approval.",
                        "relationships": "• Stop people-pleasing as a way to earn acceptance."
                    },
                    "focus": {
                        "love": "If you keep giving up your needs and still receive little care, leaving is not failure. Stop asking the wrong relationship to prove your worth.",
                        "career": "Constantly accepting unreasonable demands teaches others that your limits do not matter. State your contribution and your boundaries clearly.",
                        "health": "Some harmful habits continue because self-care has become secondary. Treat your body as something worth protecting.",
                        "finances": "Do not sacrifice your financial stability to please other people. You can say no to requests that put you at risk.",
                        "relationships": "People-pleasing can attract people who take advantage of it. Respect your own limits and let others adjust to a more honest relationship."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "The decline is now close enough to affect you directly. If the old structure is failing, staying out of hope may cost more than leaving. Choose a safer path while you still can.",
                    "main_state": "Leaving danger decisively",
                    "main_strategy": "Stop hesitating and move away from clear danger",
                    "support_risk": "Still hoping the problem will somehow reverse",
                    "support_warning": "Missing the right time to leave because of wishful thinking",
                    "guide": {
                        "love": "• Face the truth of the relationship.",
                        "career": "• Be honest about an unhealthy environment and plan a transition.",
                        "health": "• Take warning signs seriously and stop delaying.",
                        "finances": "• Review real assets, debts, and cash flow.",
                        "relationships": "• Admit when a relationship is no longer healthy."
                    },
                    "focus": {
                        "love": "Facing the truth can hurt, but denial usually costs more. Name what is not working so you can decide from reality.",
                        "career": "If the environment or pattern is unhealthy, stop using busyness to avoid the issue. Begin planning a workable transition.",
                        "health": "Recovery starts when you stop explaining away clear warning signs. Admit what needs to change and act on it.",
                        "finances": "Improvement begins with the real numbers. List assets, debts, and obligations without softening the picture.",
                        "relationships": "Recognizing that a relationship is harmful is an important step. You are allowed to choose a healthier environment."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "During decline, someone may need to hold the group together with calm and care. If that is your role, reduce fear, organize the next steps, and help people move through the change with dignity.",
                    "main_state": "Leading others calmly through difficulty",
                    "main_strategy": "Use patience and kindness to steady the people around you",
                    "support_risk": "The effort of supporting others",
                    "support_warning": "Withdrawing support just because it feels inconvenient",
                    "guide": {
                        "love": "• Trust people who remain steady under pressure.",
                        "career": "• Support the core people who keep the team stable.",
                        "health": "• Protect the basic pillars: nutrition, movement, and sleep.",
                        "finances": "• Return to spending control and saving.",
                        "relationships": "• Value the friends who remain consistent."
                    },
                    "focus": {
                        "love": "Difficult periods reveal who is truly present. Give more trust to steady care than to impressive promises.",
                        "career": "When conditions are unstable, dependable core people matter most. Support those who consistently contribute.",
                        "health": "Simple foundations matter most when the body is under strain. Protect sleep, nutrition, and sustainable movement.",
                        "finances": "During financial stress, return to basics: reduce spending, build cash, and avoid unnecessary debt.",
                        "relationships": "Changing circumstances reveal durable friendships. Value people whose care does not depend on status or convenience."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "One good seed remains after the rest has fallen away. If your core skills and values survive, rebuilding is still possible. Protect the seed and let the next cycle begin from there.",
                    "main_state": "A new beginning made possible by protecting what matters",
                    "main_strategy": "Hold through the low point and preserve hope",
                    "support_risk": "Feeling too tired to continue",
                    "support_warning": "Giving up just before conditions begin to change",
                    "guide": {
                        "love": "• Release a relationship that has ended and carry the lesson forward.",
                        "career": "• End a dead model and redirect effort to a new path.",
                        "health": "• Drop habits that no longer work and adapt to what your body needs now.",
                        "finances": "• End ongoing losses, reduce costly debt, and redirect resources.",
                        "relationships": "• Appreciate what past relationships taught you and allow a new chapter."
                    },
                    "focus": {
                        "love": "Do not keep gripping a relationship that has clearly ended. Take the lesson with you and leave room for a healthier future connection.",
                        "career": "If an old model has reached its limit, ending it can release resources for something better. Carry forward the useful experience.",
                        "health": "If an old routine no longer works, adjust it. Health changes over time, and your methods should respond to current needs.",
                        "finances": "Closing a losing position or expensive debt can be painful, but it may be the start of rebuilding. Redirect resources toward a stronger future.",
                        "relationships": "Some endings make room for better relationships. Keep the growth, release the attachment, and let the next chapter begin."
                    }
                }
            },
            "fu": {
                "1": {
                    "name": "Beginning",
                    "text": "You notice the wrong turn almost immediately and correct it before the mistake grows. Change direction without blaming yourself; the cost is still small.",
                    "main_state": "Correcting course early and quickly",
                    "main_strategy": "Stay aware and adjust as soon as you notice a mistake",
                    "support_risk": "A small mistake or drift",
                    "support_warning": "Turning one small error into self-blame or giving up",
                    "guide": {
                        "love": "• Apologize and show your change early.",
                        "career": "• Own mistakes quickly and correct them while the cost is low.",
                        "health": "• Return to your routine as soon as you notice the drift.",
                        "finances": "• Admit a mistake early and adjust before it grows.",
                        "relationships": "• Reach out early when a relationship needs repair."
                    },
                    "focus": {
                        "love": "If you want to repair the relationship, act while the intention is clear. Apologize sincerely and let changed behavior support your words.",
                        "career": "Mistakes are easiest to fix while they are small. Admit the error, correct it, and avoid letting pride increase the cost.",
                        "health": "One unhealthy day does not erase progress. Return to your routine quickly and trust the value of repeated good choices.",
                        "finances": "A financial mistake becomes more expensive when you refuse to admit it. Review the cause and adjust early.",
                        "relationships": "If you hurt an important relationship, do not let pride delay the apology. Early, sincere repair can prevent a deeper break."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You return to the right path with humility and support from good people around you. You do not need to prove anything; learn, settle in, and keep moving.",
                    "main_state": "Returning to the right path through good guidance",
                    "main_strategy": "Let go of pride and learn from people with sound judgment",
                    "support_risk": "Resistance to changing an old habit",
                    "support_warning": "Avoiding advice because asking feels awkward",
                    "guide": {
                        "love": "• Make sure both people want the repair.",
                        "career": "• Repair the relationship without giving up your principles.",
                        "health": "• Choose a gentle method you can sustain.",
                        "finances": "• Rebuild steadily instead of gambling on a quick recovery.",
                        "relationships": "• Be sincere without over-pleasing out of guilt."
                    },
                    "focus": {
                        "love": "Repair only works when both people participate. Give the other person room while still caring for yourself and your own limits.",
                        "career": "A return or repair should not require abandoning your dignity. Good cooperation is based on mutual respect.",
                        "health": "Do not punish yourself with extreme routines. Choose a method that can be sustained and let progress be gradual.",
                        "finances": "Do not try to recover losses with one large gamble. Rebuild through controlled, repeatable choices.",
                        "relationships": "Be sincere, but do not overcompensate from guilt. Respect the other person’s pace and your own boundaries."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You may drift and return more than once. That does not erase progress. Each time you notice and come back, you are strengthening the new direction.",
                    "main_state": "Gradually becoming steadier through repeated correction",
                    "main_strategy": "Each time you drift, bring yourself back",
                    "support_risk": "Frustration that you keep repeating the same pattern",
                    "support_warning": "Assuming repetition means you cannot change",
                    "guide": {
                        "love": "• Once you choose, stop using indecision to wear both people down.",
                        "career": "• Evaluate, decide, and take responsibility for the choice.",
                        "health": "• Choose a sound approach and give it enough time.",
                        "finances": "• Use clear decision rules instead of emotional switching.",
                        "relationships": "• Be consistent instead of warm one day and distant the next."
                    },
                    "focus": {
                        "love": "Staying between leaving and returning can exhaust both people. Make a considered choice, then give that direction a fair chance.",
                        "career": "Constantly switching between options can cost more than either choice. Decide after reasonable evaluation and own the result.",
                        "health": "Frequent changes make it hard to know what works. Choose an evidence-based plan and give it a reasonable observation period.",
                        "finances": "Repeated emotional buying and selling can damage returns. Set rules before the pressure of the moment arrives.",
                        "relationships": "Inconsistent closeness makes relationships hard to trust. Practice steady behavior after you make a decision."
                    }
                },
                "4": {
                    "name": "Decision",
                    "text": "The group may be moving one way while your judgment points another. You do not need to convince everyone. Stand on the path you believe is right and let your actions show the way.",
                    "main_state": "Following your inner direction without blindly copying others",
                    "main_strategy": "Choose the right path even when others choose differently",
                    "support_risk": "Feeling alone or misunderstood",
                    "support_warning": "Abandoning your judgment just to avoid standing alone",
                    "guide": {
                        "love": "• Let go of pride and repair sincerely.",
                        "career": "• Return with humility, admit what you learned, and show growth through action.",
                        "health": "• Commit to returning to a healthier routine one step at a time.",
                        "finances": "• Return to saving and risk discipline after a mistake.",
                        "relationships": "• Do not wait for the other person to lower their pride first."
                    },
                    "focus": {
                        "love": "If you decide to return, do it sincerely instead of protecting your pride. Repair requires someone to take the first honest step.",
                        "career": "If returning is the right decision, acknowledge what you learned and let better work prove the change.",
                        "health": "After a long drift, returning can feel hard. Accept where you are and rebuild the routine one manageable step at a time.",
                        "finances": "If breaking your rules caused losses, return to disciplined saving and investing. Do not let embarrassment keep you off course.",
                        "relationships": "If the friendship matters, do not focus on who should apologize first. A sincere first step can reopen trust."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You have made returning to the right path a habit. Regular self-review keeps you from drifting far, so correction becomes calm and ordinary rather than dramatic.",
                    "main_state": "A steady return built on honest self-review",
                    "main_strategy": "Make self-checking a habit instead of waiting for a crisis",
                    "support_risk": "Feeling that reflection takes effort",
                    "support_warning": "Skipping needed self-review because it feels inconvenient",
                    "guide": {
                        "love": "• Build a better relationship than the old version.",
                        "career": "• Show change through action and clearer communication.",
                        "health": "• Restore intensity gradually and review the habits that led you off course.",
                        "finances": "• Restart with tighter risk controls and better discipline.",
                        "relationships": "• Build a healthier pattern and discuss expectations openly."
                    },
                    "focus": {
                        "love": "A repaired relationship should not simply return to the old pattern. Use what happened to build clearer needs, boundaries, and habits together.",
                        "career": "After returning, prove the change through behavior. Review what went wrong and communicate more clearly so the same problem does not repeat.",
                        "health": "Once you are back on track, raise intensity gradually. Use the setback to design a routine that fits your real life better.",
                        "finances": "A restart after losses should include stronger rules. Review the mistake and rebuild with clearer limits and risk controls.",
                        "relationships": "A repaired friendship needs a healthier pattern, not just an apology. Discuss expectations and protect the relationship from the old trigger."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may have gone far down the wrong path because admitting the mistake felt costly. Continuing only makes the distance greater. Turn back now; it is still worth correcting.",
                    "main_state": "Finding a way out by finally facing reality",
                    "main_strategy": "Wake up to the pattern and face it now",
                    "support_risk": "Resistance to admitting how far you drifted",
                    "support_warning": "Continuing to avoid the truth because it feels harder to admit after so long",
                    "guide": {
                        "love": "• Change the pattern underneath repeated apologies.",
                        "career": "• Find the mindset behind recurring mistakes and break the cycle.",
                        "health": "• Identify triggers for harmful habits and build support and alternatives.",
                        "finances": "• Create safeguards against repeating the same financial mistake.",
                        "relationships": "• Understand the root of repeated hurt and change the pattern."
                    },
                    "focus": {
                        "love": "Repeated apologies are not enough if the same harmful pattern keeps returning. Identify what drives it and change the structure beneath the behavior.",
                        "career": "If the same failure keeps repeating, review more than the surface error. Find the assumption or habit that keeps producing it.",
                        "health": "If you repeatedly return to a harmful habit, study the trigger instead of only blaming yourself. Change the environment and build a practical alternative.",
                        "finances": "If the same money mistake keeps returning, build rules that make it harder to repeat. Regret alone is not a control system.",
                        "relationships": "Repeated hurt needs more than repeated apologies. Explore the root pattern and seek appropriate support if you cannot break it alone."
                    }
                }
            },
            "wuwang": {
                "1": {
                    "name": "Sprout",
                    "text": "Move forward with clean intent, without calculation or hidden motives. This path is worth taking when your reasons are sound and your actions are fair.",
                    "main_state": "Smooth progress from sincere intent",
                    "main_strategy": "Do what is right without overthinking or calculating",
                    "support_risk": "The urge to overplan or manipulate the outcome",
                    "support_warning": "Losing your original sincerity while trying to control every risk",
                    "guide": {
                        "love": "Say what you feel honestly:\n• Back promises with action.",
                        "career": "Act ethically without shortcuts:\n• Focus on real value.",
                        "health": "Keep food, movement, and sleep simple:\n• Ignore exaggerated claims.",
                        "finances": "Be wary of guaranteed profits:\n• Build steadily instead of speculating.",
                        "relationships": "Avoid games or hidden motives:\n• Show up as yourself."
                    },
                    "focus": {
                        "love": "Be direct about your feelings and let your actions match your words. Honest interest is stronger than tests or games.",
                        "career": "The safest path is straightforward work: no false claims, no unfair advantage, and no shortcuts. Build value you can stand behind.",
                        "health": "Health has no shortcut. Keep your care basic and consistent: eat well, move, sleep, and ignore exaggerated promises.",
                        "finances": "Do not chase easy money or guaranteed returns. Choose transparent options and build wealth through steady accumulation.",
                        "relationships": "Trust is easiest to build through honesty. Speak plainly, listen well, and avoid using people for advantage."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Do not keep counting the harvest while you are still planting. Some effort takes time to show results. Focus on doing today’s work well.",
                    "main_state": "Results that build naturally through steady effort",
                    "main_strategy": "Keep working without rushing to see the reward",
                    "support_risk": "Anxiety about not seeing results fast enough",
                    "support_warning": "Focusing so much on results that you neglect today’s work",
                    "guide": {
                        "love": "Give sincerely without keeping score:\n• Let results arrive in their own time.",
                        "career": "Focus on doing the work well:\n• Do not lose faith because rewards are delayed.",
                        "health": "Keep doing what works:\n• Trust gradual physical progress.",
                        "finances": "Trust long-term compounding:\n• Do not chase someone else’s gains.",
                        "relationships": "Keep showing up sincerely:\n• Let trust grow over time."
                    },
                    "focus": {
                        "love": "Sincere effort may not be rewarded immediately. Give without constantly measuring who has done more, and let trust grow in its own time.",
                        "career": "Good work does not always pay off at once. Keep your attention on what you can do well today and let time reveal the value.",
                        "health": "Health gains often build quietly. Keep the right habits even when daily changes are hard to see.",
                        "finances": "Wealth builds slowly. Do not disrupt a sound plan because someone else appears to be making faster gains.",
                        "relationships": "Strong friendships take time. Stay sincere without demanding immediate closeness or equal return."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "You may be blamed for something you did not cause. Do not panic or over-defend yourself. Stay clear and steady; time can reveal the truth.",
                    "main_state": "Calm in the face of an unfair setback",
                    "main_strategy": "Stay composed instead of rushing to defend or retaliate",
                    "support_risk": "Feeling wronged or unfairly burdened",
                    "support_warning": "Turning unfairness into resentment toward others",
                    "guide": {
                        "love": "If your conscience is clear, do not over-explain:\n• Let time clarify the truth.",
                        "career": "Keep doing your part honestly:\n• Do not absorb blame that is not yours.",
                        "health": "Do not panic and try everything at once:\n• Give the body time to recover.",
                        "finances": "Do not chase losses with more risk:\n• Handle unexpected costs calmly.",
                        "relationships": "Explain yourself to the people who matter:\n• You do not need to convince everyone."
                    },
                    "focus": {
                        "love": "Misunderstandings can happen even when you did nothing wrong. Explain what matters, stay consistent, and let time show the truth.",
                        "career": "You may face unfair blame or loss despite good work. Keep records, stay professional, and do not let the situation distort your judgment.",
                        "health": "Some symptoms can appear without an obvious cause. Avoid panic, seek appropriate professional evaluation, and allow time for recovery.",
                        "finances": "Unexpected losses can happen through fraud, expenses, or market moves. Do not take reckless risks trying to win the money back.",
                        "relationships": "You may get pulled into conflict that is not yours. Clarify things with the people who matter and avoid defending yourself to everyone."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Hold to your principles without needing to display them. Stay steady when others are loud or persuasive; the people who matter will notice your reliability.",
                    "main_state": "Confidence that comes from holding your principles",
                    "main_strategy": "Do not let outside pressure or temptation move you off course",
                    "support_risk": "Pressure that makes compromise tempting",
                    "support_warning": "Abandoning your principles just to fit the situation",
                    "guide": {
                        "love": "Stay true to yourself:\n• Show care through steady action.",
                        "career": "Do not let the environment distort your values:\n• Let solid ability speak for itself.",
                        "health": "Choose what fits your body and stay consistent:\n• Do not compare results.",
                        "finances": "Stick to investment principles you understand:\n• Ignore market noise.",
                        "relationships": "Keep your character intact:\n• Do not change yourself just to be accepted."
                    },
                    "focus": {
                        "love": "You do not need to perform sincerity. Stay yourself, care through action, and avoid reshaping yourself just to be liked.",
                        "career": "Keep your standards even in an environment that rewards presentation over substance. Reliable skill and honest work have lasting value.",
                        "health": "Your health plan does not need to match anyone else’s. Use what suits your body and judge progress by your own response.",
                        "finances": "Do not let other people’s gains or market excitement push you away from a plan you understand.",
                        "relationships": "You do not need everyone’s approval. Stay genuine and let the right people connect with who you actually are."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A small problem may resolve on its own. Do not turn it into a crisis through overreaction. Sometimes the best response is to give the situation room to settle.",
                    "main_state": "Recovery that comes more easily when you stop forcing it",
                    "main_strategy": "Stay calm and allow a natural solution before intervening heavily",
                    "support_risk": "The urge to control or intervene too much",
                    "support_warning": "Using an extreme response because anxiety takes over",
                    "guide": {
                        "love": "Do not let past hurt destroy your ability to trust:\n• Stay open to new possibilities.",
                        "career": "Do not let one setback corrupt your standards:\n• Keep working with integrity.",
                        "health": "Do not overreact to minor issues:\n• Give the body room to recover.",
                        "finances": "Do not panic over short-term swings:\n• Stay with sound principles.",
                        "relationships": "Do not build walls because one person failed you:\n• Keep the ability to trust wisely."
                    },
                    "focus": {
                        "love": "Past hurt does not have to become a rule for every future relationship. Stay open while keeping reasonable boundaries.",
                        "career": "One unfair setback does not require becoming cynical. Keep your professional standards and respond to the actual problem, not the bitterness it caused.",
                        "health": "Not every minor issue needs aggressive treatment. When appropriate, give the body rest and time while watching for signs that need professional care.",
                        "finances": "Short-term losses or gains do not require an emotional reaction. Stay with a sound plan unless the facts truly change.",
                        "relationships": "One betrayal does not mean everyone is unsafe. Keep your judgment, but do not let one experience close every door."
                    }
                },
                "6": {
                    "name": "Fulfillment",
                    "text": "The direction may be right, but this is not the moment to push harder. Knowing when to stop protects what you have already gained. Step back and wait for better conditions.",
                    "main_state": "The wisdom to stop while the outcome is still secure",
                    "main_strategy": "Know when enough is enough and protect what you have",
                    "support_risk": "Wanting to squeeze out just a little more",
                    "support_warning": "Taking unnecessary action after things are already complete",
                    "guide": {
                        "love": "Review how you are handling the relationship:\n• Return to trust and sincerity.",
                        "career": "Pause and review the direction:\n• Do not keep pushing a failing approach.",
                        "health": "Stop extreme health practices:\n• Return to moderate, appropriate care.",
                        "finances": "Stop reckless financial moves:\n• Return to steady, legitimate planning.",
                        "relationships": "Review patterns that keep hurting you:\n• Return to respect and honesty."
                    },
                    "focus": {
                        "love": "If your way of loving relies on control, testing, or constant pleasing, more effort will not fix it. Change the pattern first.",
                        "career": "If effort keeps producing the wrong result, stop and reassess the direction instead of simply working harder.",
                        "health": "If an extreme health approach is making things worse, stop and return to safer, more sustainable care.",
                        "finances": "If your financial strategy depends on repeated speculation, stop before a temporary win becomes a larger loss.",
                        "relationships": "If the same relationship pattern keeps hurting you, examine how you show up. Healthier relationships require honesty and mutual respect."
                    }
                }
            },
            "daxu": {
                "1": {
                    "name": "Sprout",
                    "text": "The resistance ahead is stronger than your current preparation. Pushing now may cost more than it gains. Pause, assess the risk, and strengthen your position first.",
                    "main_state": "The wisdom to prepare before pushing forward",
                    "main_strategy": "Delay action deliberately and strengthen the foundation",
                    "support_risk": "Impatience to move before you are ready",
                    "support_warning": "Forcing progress because you want results now",
                    "guide": {
                        "love": "Work on becoming ready for a healthy relationship:\n• Do not rush commitment.",
                        "career": "Build professional skill steadily:\n• Let your ability catch up with your ambition.",
                        "health": "Treat good habits as health savings:\n• Give the body time to build capacity.",
                        "finances": "Build a regular saving and learning routine:\n• Let capital become future flexibility.",
                        "relationships": "Deepen existing relationships:\n• Let trust mature over time."
                    },
                    "focus": {
                        "love": "Do not demand a result before the relationship has enough foundation. Use this time to grow and become ready for a healthier connection.",
                        "career": "The priority is skill, not visibility. Learn deeply now so you are prepared when the right opportunity arrives.",
                        "health": "Build health through steady habits rather than dramatic short-term effort. A stronger base supports bigger goals later.",
                        "finances": "Focus on saving and learning before reaching for aggressive returns. The capital you build now creates future options.",
                        "relationships": "Strong networks are built through depth as well as reach. Invest in relationships that can withstand time."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Progress has stopped, but that does not mean failure. Use the pause to inspect the vehicle: are the resources enough, and is the direction still right? Repair what is needed before moving again.",
                    "main_state": "A deliberate slowdown that preserves and builds strength",
                    "main_strategy": "Accept the pause and wait for a better time to move",
                    "support_risk": "Feeling that stopping is wasted time",
                    "support_warning": "Forcing the old pace simply because you dislike being stalled",
                    "guide": {
                        "love": "Check whether your pace matches:\n• Balance initiative with patience.",
                        "career": "Create chances for your work to be seen:\n• Trust that effort may simply be early.",
                        "health": "Review the method and respect your body’s pace:\n• Keep doing what works.",
                        "finances": "Review the plan without rushing:\n• Let time work with compounding.",
                        "relationships": "Do not measure your worth by temporary loneliness:\n• Keep treating people sincerely."
                    },
                    "focus": {
                        "love": "A relationship lasts when both people can move at a workable pace. Balance initiative with patience instead of reacting to every change in attention.",
                        "career": "If your ability is not being noticed, create appropriate opportunities to show it. At the same time, accept that some work needs time before it pays off.",
                        "health": "Slow improvement is still improvement. Review the plan if needed, then stay consistent and respect the body’s pace.",
                        "finances": "If wealth is building slowly, improve the process without turning to reckless risk. Patience is part of compounding.",
                        "relationships": "Do not assume a quiet period means your relationships have no value. Keep being sincere and let trust develop where you cannot yet see it."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "You have enough ability to move faster, but the road still carries risk. Set a clear target, keep improving, and let speed stay paired with discipline.",
                    "main_state": "Steady progress through alertness and discipline",
                    "main_strategy": "Set a clear goal and keep sharpening your ability",
                    "support_risk": "A meaningful challenge that requires attention",
                    "support_warning": "Relaxing your discipline because progress finally feels possible",
                    "guide": {
                        "love": "Move beyond old patterns that make you afraid:\n• Meet love as a whole person.",
                        "career": "Set a goal and take the first step:\n• Learn while moving.",
                        "health": "Start one change today:\n• Do not wait for a perfect time.",
                        "finances": "Begin with a small real position:\n• Learn through experience.",
                        "relationships": "Step outside your usual circle:\n• Create new possibilities."
                    },
                    "focus": {
                        "love": "You have learned enough from past relationships to stop repeating the same defensive patterns. Bring a fuller version of yourself into what comes next.",
                        "career": "Preparation is no longer the main issue; action is. Choose a clear target, begin, and allow experience to teach you the rest.",
                        "health": "You already know enough to start. Pick one useful habit and begin today rather than waiting for perfect conditions.",
                        "finances": "If the basics are in place, begin with an amount you can afford and let real experience deepen your judgment.",
                        "relationships": "Do not let old social experiences keep your world small. Try new settings and give new people a chance."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Good prevention happens while the problem is still small. Build safeguards early: backups, buffers, limits, and review points can prevent a much larger problem later.",
                    "main_state": "Safety gained by preventing problems early",
                    "main_strategy": "Put safeguards in place before the risk grows",
                    "support_risk": "Thinking prevention is unnecessary this early",
                    "support_warning": "Waiting until a small issue becomes expensive or difficult",
                    "guide": {
                        "love": "Balance openness with healthy protection:\n• Give trust room to grow.",
                        "career": "Know the difference between caution and paralysis:\n• Act when the moment is right.",
                        "health": "Balance awareness with relaxation:\n• Trust sound professional guidance.",
                        "finances": "Take measured risk when it is controlled:\n• Set limits, then move forward.",
                        "relationships": "Lower unnecessary defenses:\n• Give trustworthy people a chance."
                    },
                    "focus": {
                        "love": "Too much protection can make closeness impossible. Keep healthy boundaries without making vulnerability off-limits.",
                        "career": "Preparation should make action safer, not impossible. When the key risks are controlled, be willing to move.",
                        "health": "Constant worry can become its own burden. Stay attentive, follow sound guidance, and allow yourself room to relax.",
                        "finances": "Excessive caution can also carry a cost. When risks are understood and limited, gradual participation may be reasonable.",
                        "relationships": "Do not let an old hurt become a permanent rule. Keep boundaries, but allow trustworthy people to earn access."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A hard problem does not always require a harder response. Use communication, timing, and leverage to reduce resistance instead of meeting force with force.",
                    "main_state": "Solving a difficult problem through skill rather than force",
                    "main_strategy": "Find the leverage point instead of pushing harder",
                    "support_risk": "A problem that looks difficult enough to discourage you",
                    "support_warning": "Using brute force simply because the situation feels hard",
                    "guide": {
                        "love": "State your needs without losing warmth:\n• Set boundaries with respect.",
                        "career": "Lead through understanding rather than command:\n• Use flexible methods to create change.",
                        "health": "Stay firm on the goal and flexible on the method:\n• Know when to adjust.",
                        "finances": "Keep the goal steady and the execution flexible:\n• Review and adjust regularly.",
                        "relationships": "Use calm words for firm positions:\n• Let flexibility reduce conflict."
                    },
                    "focus": {
                        "love": "Strength in a relationship does not require control. Be clear about needs and boundaries while keeping the way you communicate respectful.",
                        "career": "Influence works better than force. Listen, understand the resistance, and use a method people can actually work with.",
                        "health": "Stay committed to health goals while adapting the method to how your body responds. Flexibility is part of consistency.",
                        "finances": "Keep financial goals stable but adjust tactics when the facts change. Do not confuse discipline with stubbornness.",
                        "relationships": "You can be kind without being vague. Express firm limits calmly and make understanding part of the conversation."
                    }
                },
                "6": {
                    "name": "Fulfillment",
                    "text": "Long preparation is finally becoming useful. Resources, contacts, and opportunities that were blocked are opening. Bring your accumulated strength forward and act.",
                    "main_state": "A time when long preparation can finally be used",
                    "main_strategy": "Move forward confidently with the strength you have built",
                    "support_risk": "Difficulty believing the opening is finally real",
                    "support_warning": "Getting so excited that you abandon the discipline that built your position",
                    "guide": {
                        "love": "Keep bringing new energy into the relationship:\n• Stay curious about each other.",
                        "career": "Keep learning after success:\n• Look for the next growth curve.",
                        "health": "Maintain the habits that improved your health:\n• Keep investing in prevention.",
                        "finances": "Keep financial discipline even when comfortable:\n• Think about long-term purpose and legacy.",
                        "relationships": "Stay in touch with old friends and meet new people:\n• Keep tending your relationships."
                    },
                    "focus": {
                        "love": "Comfort should not turn into neglect. Create new shared experiences, stay curious, and keep showing appreciation.",
                        "career": "Success creates a new risk: complacency. Keep learning, track change, and look for the next area where your skills can grow.",
                        "health": "Do not stop the habits that helped you feel better just because you now feel well. Maintenance is part of health.",
                        "finances": "Greater financial comfort is a reason for stronger discipline, not weaker discipline. Keep reviewing, diversifying, and planning ahead.",
                        "relationships": "Stable relationships still need attention. Stay connected to old friends while remaining open to new people."
                    }
                }
            },
            "yi": {
                "1": {
                    "name": "Sprout",
                    "text": "You already have useful resources, yet you keep looking at what others have. Stop comparing long enough to notice the strengths, options, and support already in your hands.",
                    "main_state": "Contentment that comes from valuing what you already have",
                    "main_strategy": "Take stock of your own resources and abilities first",
                    "support_risk": "Looking outward for what you already possess in another form",
                    "support_warning": "Abandoning your own source of support because someone else’s looks better",
                    "guide": {
                        "love": "Say what you truly need:\n• Listen carefully to what your partner needs.",
                        "career": "Return to the real value of your work:\n• Drop empty status goals.",
                        "health": "Meet the body’s basic needs first:\n• Keep care simple.",
                        "finances": "Clarify what money is meant to support:\n• Give spending a clear purpose.",
                        "relationships": "Express needs directly:\n• Ask others what they actually need."
                    },
                    "focus": {
                        "love": "Relationship needs are often simple: to be understood, accepted, and valued. Say what you need directly and listen for what the other person needs.",
                        "career": "Strip away status and ask what your work is actually for: useful output, fair compensation, growth, or meaning. Let the real purpose guide you.",
                        "health": "The body’s basics matter most: adequate food, sleep, and movement. Do not let complicated theories replace simple care.",
                        "finances": "Decide what money is supposed to provide—security, freedom, family support, or something else. Clear purpose makes spending and saving easier.",
                        "relationships": "Do not expect people to read your mind. Say what matters to you and ask what support would actually help them."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Support is useful, but dependence can become a weakness. Ask for help through healthy, appropriate channels without handing your whole future to someone else.",
                    "main_state": "Receiving support through healthy and appropriate means",
                    "main_strategy": "Use normal, fair channels to get the help you need",
                    "support_risk": "The temptation to take a shortcut or depend on an unhealthy source",
                    "support_warning": "Using distorted or improper means because they seem faster",
                    "guide": {
                        "love": "Express appreciation clearly:\n• Let each other’s effort be seen.",
                        "career": "Acknowledge specific contributions:\n• Share credit generously.",
                        "health": "Give the body enough rest and nutrition:\n• Make self-care pleasant and sustainable.",
                        "finances": "Spend on what truly improves your life:\n• Reduce unconscious consumption.",
                        "relationships": "Say appreciation when you feel it:\n• Let recognition warm the relationship."
                    },
                    "focus": {
                        "love": "Specific appreciation nourishes a relationship. Let the other person know what you noticed and value instead of assuming they already know.",
                        "career": "Recognition strengthens teams. Give clear credit for real contributions and make good work visible.",
                        "health": "Treat your body like something worth supporting. Give it enough food, rest, and recovery without turning care into punishment.",
                        "finances": "Ask whether your spending actually improves your life. Direct money toward genuine value and reduce automatic consumption.",
                        "relationships": "Say thank you while the feeling is fresh. Small, sincere recognition strengthens relationships more than you may expect."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Pleasure can become self-damage when there is no limit. If a habit keeps weakening your foundation, stop early and bring your life back into balance.",
                    "main_state": "A chance to stop depletion and regain strength",
                    "main_strategy": "End habits or choices that are clearly harming you",
                    "support_risk": "Struggling to let go of a familiar habit",
                    "support_warning": "Continuing a harmful pattern because the short-term reward feels good",
                    "guide": {
                        "love": "Ask what actually makes your partner feel loved:\n• Give what they can receive.",
                        "career": "Check the method before adding more effort:\n• Learn from proven examples.",
                        "health": "Seek a qualified second opinion:\n• Reassess the root cause.",
                        "finances": "Review the strategy before adding more money:\n• Learn from sound approaches.",
                        "relationships": "Ask friends what support they need:\n• Show care in a form they can receive."
                    },
                    "focus": {
                        "love": "If your efforts keep missing the mark, ask what actually makes the other person feel cared for instead of guessing.",
                        "career": "When a lot of effort produces little result, examine the method before doing more. Better direction can matter more than more effort.",
                        "health": "If repeated attempts are not helping, seek appropriate professional reassessment rather than stacking more random approaches.",
                        "finances": "If the plan is not improving your finances, review the strategy before committing more money.",
                        "relationships": "If your care is not bringing you closer, ask what the other person actually needs and adjust how you show support."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Real nourishment can come from people you did not expect to learn from. Drop status and seek help from the person who actually has the skill or wisdom you need.",
                    "main_state": "A better path opened by actively seeking useful help",
                    "main_strategy": "Set pride aside and ask the people who can truly help",
                    "support_risk": "Feeling awkward about being the one who asks",
                    "support_warning": "Missing valuable help because pride keeps you silent",
                    "guide": {
                        "love": "Check whether care is mutual:\n• Do not let one-sided sacrifice drain you.",
                        "career": "Set clear responsibilities:\n• Do not let personal ties delay accountability.",
                        "health": "Be honest with professionals about the real situation:\n• Naming the problem is part of change.",
                        "finances": "Address harmful financial arrangements promptly:\n• Protect your interests.",
                        "relationships": "Speak openly about imbalance:\n• Healthy friendship requires mutual effort."
                    },
                    "focus": {
                        "love": "A relationship cannot be sustained by one person’s effort alone. Be honest about whether care and responsibility are mutual.",
                        "career": "If someone is not carrying their share, deal with it clearly instead of absorbing all the work yourself.",
                        "health": "If a habit is harming you and you cannot change it alone, tell the relevant professional the truth so the plan can address the real issue.",
                        "finances": "If a financial arrangement is working against you, fix it instead of delaying because the conversation feels awkward.",
                        "relationships": "If a friendship is consistently one-sided, name the imbalance. Mutual care is part of a healthy relationship."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Know your limits and use outside expertise where it helps. This is not weakness; it is good judgment. Your path does not need to look typical if it is sound and sustainable.",
                    "main_state": "Stability gained by staying within your role and using the right support",
                    "main_strategy": "Respect your limits and use other people’s expertise when needed",
                    "support_risk": "Trying to carry everything alone",
                    "support_warning": "Refusing useful help because you want to prove you can do it yourself",
                    "guide": {
                        "love": "Give care and goodwill freely:\n• Let sincerity shape the relationship.",
                        "career": "Use your influence to help others grow:\n• Let success create value beyond yourself.",
                        "health": "Care for emotional as well as physical health:\n• Let inner stability support the body.",
                        "finances": "Use extra resources to create meaningful value:\n• Let giving be intentional.",
                        "relationships": "Listen actively and help when it matters:\n• Build connection through sincere care."
                    },
                    "focus": {
                        "love": "Care openly when you mean it. Genuine attention and kindness can strengthen a relationship without complicated strategy.",
                        "career": "Use your position or resources to create opportunities for others. Success becomes more durable when it develops people around you.",
                        "health": "Health includes emotional condition as well as physical habits. Make room for rest, meaning, connection, and appropriate support.",
                        "finances": "If you have financial room, consider how part of it can create lasting value for you, the people you care about, or causes you believe in.",
                        "relationships": "Listen, notice, and offer help when it matters. Sincere attention is one of the strongest forms of social support."
                    }
                },
                "6": {
                    "name": "Fulfillment",
                    "text": "You have become a source of support for others. The responsibility is real, but fair and steady leadership can help many people grow. Carry the role without forgetting your own needs.",
                    "main_state": "Good results that come from carrying a genuine duty of care",
                    "main_strategy": "Take responsibility with fairness and without self-interest",
                    "support_risk": "Feeling the weight of a demanding role",
                    "support_warning": "Avoiding a responsibility simply because it feels heavy",
                    "guide": {
                        "love": "Keep giving and receiving in balance:\n• Let yourself be cared for.",
                        "career": "Check whether work still supports your growth:\n• Watch for burnout.",
                        "health": "Put yourself on the care list too:\n• You cannot support others from depletion.",
                        "finances": "Protect your own future first:\n• Invest in your growth.",
                        "relationships": "Ask for support when you need it:\n• Let friendship nourish both sides."
                    },
                    "focus": {
                        "love": "If you are always the giver, make room to receive. A healthy relationship should support both people.",
                        "career": "If work takes everything without providing growth, pay, or meaning, reassess the balance before exhaustion makes the decision for you.",
                        "health": "Caring for others does not excuse neglecting yourself. Protect rest, preventive care, and recovery.",
                        "finances": "Generosity should not leave your own future exposed. Keep savings, protection, and personal growth in the plan.",
                        "relationships": "If you always listen but are never heard, ask for support. Friendship should have room for both people’s needs."
                    }
                }
            },
            "daguo": {
                "1": {
                    "name": "Sprout",
                    "text": "You are handling something important and fragile. Careful preparation is not fear; it is respect for the weight of the task. A stable beginning makes the rest safer.",
                    "main_state": "A strong base built through careful preparation",
                    "main_strategy": "Prepare thoroughly and treat the responsibility with care",
                    "support_risk": "Thinking the extra caution is unnecessary",
                    "support_warning": "Skipping important preparation because you want to move faster",
                    "guide": {
                        "love": "Build independence instead of overdependence:\n• Stand steadily so you can walk beside each other.",
                        "career": "Admit when help is needed:\n• Delegate appropriately.",
                        "health": "Adjust early and reduce load:\n• Schedule recovery.",
                        "finances": "Address excessive debt early:\n• Seek qualified debt support if needed.",
                        "relationships": "Set limits and learn to say no:\n• Make your boundaries clear."
                    },
                    "focus": {
                        "love": "Do not place your entire center of gravity on the relationship. Independence makes partnership more equal and stable.",
                        "career": "If the workload exceeds your capacity, ask for help and distribute tasks. Delegation can be part of responsible ownership.",
                        "health": "If the load is becoming too much, reduce intensity and make recovery part of the plan before a small issue grows.",
                        "finances": "When debt or obligations are too heavy, act early: reduce costs, review terms, and seek qualified help when appropriate.",
                        "relationships": "If social obligations are overwhelming you, say no where necessary. Boundaries protect both you and the relationship."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "An old tree can still produce new growth. A fading situation may contain an unexpected opening: old skills, past contacts, or dormant areas can become useful again.",
                    "main_state": "Renewal created by an unexpected opening",
                    "main_strategy": "Stay open to a new possibility even if it arrives in an unusual form",
                    "support_risk": "Feeling uncertain because the opportunity is unfamiliar",
                    "support_warning": "Rejecting a good opening simply because it does not look familiar",
                    "guide": {
                        "love": "Stay open to a new relationship without idealizing it:\n• Let differences become complementary.",
                        "career": "Look for a new direction as old work fades:\n• Test new fields and methods.",
                        "health": "Consider a different appropriate approach:\n• Seek another professional view when useful.",
                        "finances": "Develop new income sources:\n• Research areas with real growth potential.",
                        "relationships": "Step outside your usual circle:\n• Build new connections."
                    },
                    "focus": {
                        "love": "Past hurt does not prevent new connection. Stay open, move slowly, and judge the new person by what is actually happening rather than by an old story.",
                        "career": "When an old business area weakens, look for adjacent skills, markets, or methods that can create a new path.",
                        "health": "If an old approach is no longer working, a different qualified opinion or method may reveal another route.",
                        "finances": "When an income source fades, explore realistic alternatives rather than only defending what is shrinking.",
                        "relationships": "As some relationships fade, new ones can enter. Step outside familiar circles and let different people broaden your life."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "The structure is bending under too much weight. Treat that as a warning. Reduce the load, restore support, and correct the direction before continuing.",
                    "main_state": "Recognizing limits before the structure fails",
                    "main_strategy": "Seek outside support early instead of trying to endure everything alone",
                    "support_risk": "Refusing help because you do not want to burden others",
                    "support_warning": "Letting pride or isolation push you past your limit",
                    "guide": {
                        "love": "Let the other person carry responsibility too:\n• Discuss expectations and burden clearly.",
                        "career": "Refuse work beyond sustainable capacity:\n• Renegotiate responsibilities.",
                        "health": "Stop and arrange proper rest or evaluation:\n• Take prolonged overload seriously.",
                        "finances": "Seek qualified help and renegotiate obligations:\n• Do not let debt keep escalating.",
                        "relationships": "Let friends help carry the load:\n• Ask for support."
                    },
                    "focus": {
                        "love": "If you are carrying most of the relationship, address the imbalance. Love works better when both people share responsibility.",
                        "career": "If your workload is becoming unsustainable, renegotiate priorities and ownership before burnout or failure forces the issue.",
                        "health": "Serious warning signs deserve action. Stop pushing, rest, and obtain appropriate medical evaluation when needed.",
                        "finances": "If financial pressure is beyond what you can manage, contact the relevant parties and qualified professionals early rather than letting the problem compound.",
                        "relationships": "Do not make strength mean carrying every social burden alone. Tell trusted people when you need support."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The load becomes manageable when proper support appears. Accept reliable help, but keep your principles clear and avoid arrangements that create a new problem later.",
                    "main_state": "Reliable support that makes a heavy load manageable",
                    "main_strategy": "Use legitimate, trustworthy support without compromising your principles",
                    "support_risk": "The temptation to use a questionable shortcut",
                    "support_warning": "Depending on an unhealthy source of power just to escape pressure quickly",
                    "guide": {
                        "love": "Support each other gently under stress:\n• Do not demand immediate return.",
                        "career": "Stay calm and steady the team:\n• Earn trust through responsibility.",
                        "health": "Treat a stressed body with care:\n• Work with pressure rather than fighting it.",
                        "finances": "Protect cash flow and urgent needs first:\n• Avoid panic decisions.",
                        "relationships": "Help the other person feel understood:\n• Listen before giving advice."
                    },
                    "focus": {
                        "love": "When a relationship is under pressure, steady support can matter more than perfect answers. Be present without demanding immediate repayment.",
                        "career": "In a difficult period, calm judgment and visible responsibility can stabilize the team and build trust.",
                        "health": "When the body is stressed, use rest, regular meals, and appropriate activity rather than adding more force.",
                        "finances": "Under financial pressure, protect cash flow and the most urgent obligations first. Avoid fear-driven decisions that create more damage.",
                        "relationships": "When a friend is struggling, listening without judgment may help more than immediately trying to solve the problem."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A dry tree can still bloom, but a brief flourish is not the same as durable growth. Enjoy the good moment while checking whether the foundation can sustain it.",
                    "main_state": "Enjoying a good moment without confusing it with permanence",
                    "main_strategy": "Appreciate what is good while staying realistic about how long it can last",
                    "support_risk": "Assuming a temporary high point will continue indefinitely",
                    "support_warning": "Ignoring fragility because the surface looks successful",
                    "guide": {
                        "love": "Do not assume differences make connection impossible:\n• Let differences complement each other.",
                        "career": "Take on unusual responsibility when your preparation supports it:\n• Use help and judgment.",
                        "health": "Consider integrated qualified care when standard approaches stall:\n• Stay open to new evidence.",
                        "finances": "Evaluate unconventional but legitimate opportunities carefully:\n• Take risk only within clear limits.",
                        "relationships": "Look beyond age, background, or status:\n• Let difference expand your perspective."
                    },
                    "focus": {
                        "love": "Differences in age, status, or background do not automatically make a relationship unworkable. Focus on compatibility, respect, and reality.",
                        "career": "A demanding opportunity may be worth taking if your preparation, resources, and support make the risk manageable.",
                        "health": "When a standard health approach has stalled, an appropriately qualified second perspective or integrated plan may help.",
                        "finances": "Some nontraditional opportunities can be valid, but unusual does not mean safe. Understand the risk and keep exposure within limits.",
                        "relationships": "Do not let social categories decide who can teach, support, or connect with you. Different backgrounds can add useful perspective."
                    }
                },
                "6": {
                    "name": "Fulfillment",
                    "text": "You may be willing to accept a great cost for something you believe truly matters. Courage has value, but make sure the sacrifice is chosen consciously rather than driven by pride or fear.",
                    "main_state": "Courage to bear real sacrifice for something important",
                    "main_strategy": "Accept necessary cost for a goal that genuinely matters",
                    "support_risk": "The challenge may be genuinely severe",
                    "support_warning": "Abandoning an important duty only because the path is difficult",
                    "guide": {
                        "love": "Leave a relationship that remains deeply unequal:\n• Make room for mutual love.",
                        "career": "Stop a project that has become unsustainable:\n• Protect capacity for what comes next.",
                        "health": "Stop and arrange rest or medical care when your body is at its limit:\n• Do not trade health for achievement.",
                        "finances": "Stop the financial bleeding and seek help:\n• Build a realistic recovery plan.",
                        "relationships": "Leave relationships that repeatedly drain you:\n• Do not stay only from fear of being alone."
                    },
                    "focus": {
                        "love": "If a relationship stays deeply unequal despite honest attempts to repair it, leaving may be healthier than continuing to empty yourself.",
                        "career": "If a project is consuming resources beyond any reasonable recovery, reassess sunk costs and stop when continuing would create greater damage.",
                        "health": "If your body is at its limit, stop. Rest and appropriate medical care matter more than finishing one more task.",
                        "finances": "When an investment or debt problem exceeds your capacity, focus on damage control, qualified help, and a realistic recovery plan.",
                        "relationships": "If a relationship repeatedly drains you without respect or repair, leaving can protect the space needed for healthier connections."
                    }
                }
            },
            "kan": {
                "1": {
                    "name": "Beginning",
                    "text": "One problem follows another, leaving little room to recover. Do not force your way out. Stabilize first and avoid making the situation worse.",
                    "main_state": "Staying calm enough to avoid sinking deeper",
                    "main_strategy": "Protect yourself first and do not rush",
                    "support_risk": "Panic and the urge to escape quickly",
                    "support_warning": "Making a rushed move that deepens the problem",
                    "focus": {
                        "love": "The relationship is at a low point. Stabilize yourself first and talk honestly instead of deciding in panic.",
                        "career": "Focus on survival before growth. Protect core work, conserve resources, and avoid unnecessary risk.",
                        "health": "Seek professional help when needed and allow recovery to take time.",
                        "finances": "Stop expanding risk, protect cash flow, and make a realistic repayment plan.",
                        "relationships": "Do not isolate yourself. Tell trusted people what is happening and accept appropriate help."
                    },
                    "guide": {
                        "love": "Accept the situation and communicate honestly:\n• Do not decide in panic.",
                        "career": "Protect core work and resources:\n• Survive first, then grow.",
                        "health": "Seek professional support:\n• Give recovery time.",
                        "finances": "Protect cash flow:\n• Build a workable repayment plan.",
                        "relationships": "Tell trusted people what is happening:\n• Accept help."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "The larger situation may still be difficult, so aim for small wins. A modest improvement, completed task, or protected routine can keep progress alive.",
                    "main_state": "Slow progress through small, steady gains",
                    "main_strategy": "Start small and build from what is manageable",
                    "support_risk": "Wanting a complete solution immediately",
                    "support_warning": "Taking on more than you can handle just to escape faster",
                    "focus": {
                        "love": "You cannot control the other person, but you can keep your own warmth and boundaries steady.",
                        "career": "Maintain quality and integrity even under pressure. Avoid shortcuts that create larger problems later.",
                        "health": "Protect basic habits such as sleep, meals, and simple movement before chasing complex fixes.",
                        "finances": "Keep essential living costs covered and avoid all-in attempts to recover quickly.",
                        "relationships": "Do not let hardship change your basic decency. Consistent character earns lasting respect."
                    },
                    "guide": {
                        "love": "Keep your warmth and boundaries steady:\n• Let stability anchor the relationship.",
                        "career": "Maintain quality and integrity:\n• Avoid risky shortcuts.",
                        "health": "Protect sleep, meals, and basic routines:\n• Stabilize the basics first.",
                        "finances": "Cover essential needs first:\n• Avoid all-in recovery attempts.",
                        "relationships": "Stay sincere despite the pressure:\n• Let character speak for you."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Moving forward looks risky, but retreat does too. When every direction feels blocked, stop making impulsive moves and wait until the situation becomes clearer.",
                    "main_state": "Holding position until a better opening appears",
                    "main_strategy": "Pause and let the situation change before acting",
                    "support_risk": "The urge to force a way through",
                    "support_warning": "Making a random decision just to end the uncertainty",
                    "focus": {
                        "love": "If emotions are overwhelming, delay major decisions until you can think clearly.",
                        "career": "Do not make a major career move from panic. Get reliable advice and review the problem from more than one angle.",
                        "health": "If anxiety or helplessness is intense, seek qualified support and tell someone you trust what you are experiencing.",
                        "finances": "Do not borrow at extreme rates or gamble on a rescue. Slow down and get qualified financial help.",
                        "relationships": "If you feel isolated, reach out. Asking for support can be the first step out of the situation."
                    },
                    "guide": {
                        "love": "Let emotions cool before deciding:\n• Avoid impulsive damage.",
                        "career": "Get trusted advice before major moves:\n• Do not decide in panic.",
                        "health": "Seek qualified mental-health support when needed:\n• Let your feelings be heard.",
                        "finances": "Avoid panic-driven borrowing or bets:\n• Get professional help.",
                        "relationships": "Tell someone you need help:\n• Do not let isolation trap you."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "In hard times, simple and sincere support matters more than appearances. Use the clearest workable solution and let honesty replace unnecessary complexity.",
                    "main_state": "Reconnecting through simple, sincere communication",
                    "main_strategy": "Drop the extra formality and address the real issue honestly",
                    "support_risk": "Feeling embarrassed that your resources are limited",
                    "support_warning": "Holding back sincere help because it does not look impressive",
                    "focus": {
                        "love": "Simple presence and an honest check-in can matter more than elaborate words.",
                        "career": "In a crisis, simplify the problem and have direct conversations about the basic solution.",
                        "health": "Start with small actions such as water, a short walk, or rest. Simple habits can build meaningful change.",
                        "finances": "Return to basics: reduce spending, increase income where possible, and repay debt steadily.",
                        "relationships": "When someone is struggling, simple presence often helps more than advice."
                    },
                    "guide": {
                        "love": "Show care through simple presence:\n• A sincere check-in can be enough.",
                        "career": "Talk directly and simplify the problem:\n• Focus on the basic solution.",
                        "health": "Start with one small healthy action:\n• Let small changes add up.",
                        "finances": "Return to basic saving and repayment:\n• Drop get-rich-quick ideas.",
                        "relationships": "Offer simple, steady support:\n• Sometimes “I’m here” is enough."
                    }
                },
                "5": {
                    "name": "Breakthrough",
                    "text": "The worst part is beginning to pass, but the situation is not fully settled. Protect the progress already made and let stability return before expanding again.",
                    "main_state": "A difficult period beginning to ease",
                    "main_strategy": "Stay steady and do not rush the final stretch",
                    "support_risk": "Residual tension after a long challenge",
                    "support_warning": "Relaxing too early just because relief is near",
                    "focus": {
                        "love": "Do not let outside voices or temporary emotion replace your own judgment.",
                        "career": "Stay calm when others panic and identify the key issue before acting.",
                        "health": "Follow qualified guidance rather than frightening online claims. A steady mindset supports recovery.",
                        "finances": "Return to fundamentals instead of following market panic. Calm analysis may reveal better choices.",
                        "relationships": "Do not spread unverified claims. Clear judgment can make you a stabilizing presence for others."
                    },
                    "guide": {
                        "love": "Keep your own judgment and principles:\n• Do not follow outside noise.",
                        "career": "Stay calm when others panic:\n• Find the key issue.",
                        "health": "Trust qualified guidance:\n• Keep your mindset steady.",
                        "finances": "Return to fundamentals:\n• Do not follow crowd panic.",
                        "relationships": "Do not spread unverified claims:\n• Be a steady presence."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may feel trapped by a rigid system, bad agreement, or commitment you cannot easily leave. Fighting blindly may hurt more. Accept the reality, then look patiently for a workable exit.",
                    "main_state": "Deep reflection that opens a path out",
                    "main_strategy": "Change the pattern that keeps you trapped",
                    "support_risk": "Feeling powerless and unable to see an exit",
                    "support_warning": "Giving up on change because the exit is not obvious",
                    "focus": {
                        "love": "If a relationship has become a lasting trap, protect yourself and seek a safe path out when needed.",
                        "career": "If the environment cannot support growth, plan a real change rather than simply working harder inside the same trap.",
                        "health": "Break entrenched habits with professional support and one manageable change at a time.",
                        "finances": "Face debt or harmful financial patterns directly and build a structured recovery plan.",
                        "relationships": "Leave relationships that repeatedly harm you and set clear protective boundaries."
                    },
                    "guide": {
                        "love": "Break harmful relationship patterns:\n• Seek a safe way out.",
                        "career": "Plan a meaningful change:\n• Do not let fear keep you trapped.",
                        "health": "Use professional support:\n• Change one habit at a time.",
                        "finances": "Build a structured debt plan:\n• Stop borrowing to cover old debt.",
                        "relationships": "Leave repeatedly harmful relationships:\n• Set protective boundaries."
                    }
                }
            },
            "li": {
                "1": {
                    "name": "Beginning",
                    "text": "You are just getting started. The best approach is respectful, careful, and willing to learn. Take each step cleanly instead of trying to impress too soon.",
                    "main_state": "A careful start that builds a solid base",
                    "main_strategy": "Move steadily and do not rush to stand out",
                    "support_risk": "Wanting to prove yourself quickly",
                    "support_warning": "Trying too hard to impress before the basics are secure",
                    "focus": {
                        "love": "Before diving in, check whether the attraction also fits your values and direction.",
                        "career": "Gather enough information and check your motive before acting on an exciting opportunity.",
                        "health": "Choose methods supported by evidence and suited to you; avoid extreme trends.",
                        "finances": "Do not let market excitement or other people’s gains override your judgment.",
                        "relationships": "Give new connections time before investing too deeply."
                    },
                    "guide": {
                        "love": "Check that values and direction align:\n• Love with awareness.",
                        "career": "Gather information before acting:\n• Let clear judgment lead.",
                        "health": "Choose evidence-based methods:\n• Avoid extremes.",
                        "finances": "Keep investment decisions rational:\n• Do not follow market excitement.",
                        "relationships": "Give the connection time:\n• Distinguish sincerity from politeness."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "A warm, steady light lasts longer than a dramatic flash. Reliability and balance will earn more trust than trying to be the brightest person in the room.",
                    "main_state": "A balanced approach that shines naturally",
                    "main_strategy": "Stay aligned with what is healthy and sound without overdoing it",
                    "support_risk": "Wanting faster or more visible results",
                    "support_warning": "Losing balance in the rush to get ahead",
                    "focus": {
                        "love": "Keep love warm but balanced. Stay close without losing yourself or becoming distant.",
                        "career": "Maintain steady output and consistent quality instead of swinging with success or failure.",
                        "health": "Find a sustainable middle ground between neglect and excessive restriction.",
                        "finances": "Avoid both greed and fear; use a stable allocation with some flexibility.",
                        "relationships": "Be warm without overwhelming people, and open without becoming distant."
                    },
                    "guide": {
                        "love": "Keep love simple and sincere:\n• Let stability carry it.",
                        "career": "Maintain consistent quality:\n• Do not swing with results.",
                        "health": "Balance discipline with flexibility:\n• Keep it sustainable.",
                        "finances": "Avoid both greed and fear:\n• Keep a stable allocation.",
                        "relationships": "Be warm without crowding others:\n• Keep a comfortable distance."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Every peak eventually passes. If a project or phase is fading, do not cling to it. Finish well and prepare for what comes next.",
                    "main_state": "Accepting the end of a phase and preparing for transition",
                    "main_strategy": "Release pessimism and meet the transition with openness",
                    "support_risk": "Sadness or reluctance around change",
                    "support_warning": "Getting stuck in the past because it is hard to let go",
                    "focus": {
                        "love": "If change is coming, value the warmth that still exists instead of spending the remaining time in fear.",
                        "career": "Close the phase well: review results, pass on knowledge, and thank the people involved.",
                        "health": "If your condition has declined, adjust your pace and stop forcing your old level of activity.",
                        "finances": "Close out the financial phase by reviewing assets, debts, gains, and mistakes before planning the next one.",
                        "relationships": "When a chapter ends, say goodbye clearly and express gratitude rather than leaving unfinished feelings."
                    },
                    "guide": {
                        "love": "Value the time you still share:\n• Notice the warmth that remains.",
                        "career": "Close the phase well:\n• Review results and pass on knowledge.",
                        "health": "Accept your current condition:\n• Do not force your old intensity.",
                        "finances": "Review and close the financial phase:\n• Plan the next one clearly.",
                        "relationships": "Say goodbye without leaving regrets:\n• Express gratitude."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "A sudden flare can disrupt everything, but it may pass quickly. Do not let the first emotional reaction make the decision; give the situation time to reveal itself.",
                    "main_state": "Using restraint to avoid hurting yourself",
                    "main_strategy": "Drop impulsiveness and stay composed",
                    "support_risk": "The urge to react dramatically or prove yourself",
                    "support_warning": "Using an extreme response just to make an impact",
                    "focus": {
                        "love": "When the truth of a relationship is clear, face it honestly and choose what protects your well-being.",
                        "career": "If the environment is breaking down, prepare your exit before the damage spreads.",
                        "health": "Take clear warning signs seriously and arrange proper evaluation rather than delaying.",
                        "finances": "Address financial leaks or risks early so the damage stays limited.",
                        "relationships": "When a relationship is clearly harmful, set a boundary and step away if needed."
                    },
                    "guide": {
                        "love": "Face the truth of the relationship:\n• Choose what protects your well-being.",
                        "career": "Prepare to leave a failing environment:\n• Plan the next step early.",
                        "health": "Arrange proper evaluation promptly:\n• Change harmful habits early.",
                        "finances": "Address financial leaks now:\n• Limit the damage early.",
                        "relationships": "Set clear boundaries:\n• Leave unhealthy relationships when needed."
                    }
                },
                "5": {
                    "name": "Breakthrough",
                    "text": "Grief can be painful, but it also shows that something mattered. Let yourself feel it, then recover your footing and move forward with what you learned.",
                    "main_state": "Steady care guided by empathy",
                    "main_strategy": "Care for people and situations with compassion",
                    "support_risk": "Deep worry or sadness",
                    "support_warning": "Becoming so absorbed in worry that you stop caring for yourself",
                    "focus": {
                        "love": "Let yourself grieve, learn from the relationship, and move forward without defining yourself by the loss.",
                        "career": "Give emotion some space before making a career decision, then review your options clearly.",
                        "health": "Allow sadness to move through instead of suppressing it for long periods.",
                        "finances": "Feel the loss, learn from it, and rebuild without letting one setback define your future.",
                        "relationships": "Let trusted people support you instead of forcing yourself to appear fine."
                    },
                    "guide": {
                        "love": "Allow grief, then move forward:\n• Keep the lesson.",
                        "career": "Let emotions settle before deciding:\n• Review the next step clearly.",
                        "health": "Let emotions move naturally:\n• Do not suppress grief.",
                        "finances": "Feel the loss without being defined by it:\n• Learn and rebuild.",
                        "relationships": "Let trusted people support you:\n• You do not need to pretend."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "A chronic problem may finally need decisive action. Address the core issue directly, but do not punish everyone around it; be firm where needed and forgiving where possible.",
                    "main_state": "Firm action balanced with tolerance",
                    "main_strategy": "Solve the core issue precisely while staying fair",
                    "support_risk": "Difficulty balancing strictness and compassion",
                    "support_warning": "Trying to solve everything at once with no room for mercy",
                    "focus": {
                        "love": "If a relationship keeps harming you with no real change, ending it may be the responsible choice.",
                        "career": "When a project or career path is beyond repair, cut losses and build a new route.",
                        "health": "Long-term harmful habits may require a full change and qualified support.",
                        "finances": "Serious financial trouble needs a complete recovery plan, not minor adjustments.",
                        "relationships": "Leave groups that continually drag you down and choose a healthier environment."
                    },
                    "guide": {
                        "love": "Know when a relationship has ended:\n• Make room for something healthier.",
                        "career": "Cut losses and plan a new path:\n• Treat failure as a restart.",
                        "health": "Change long-term harmful habits:\n• Get professional help when needed.",
                        "finances": "Build a full recovery plan:\n• Follow it with discipline.",
                        "relationships": "Leave people who keep pulling you down:\n• Choose a healthier environment."
                    }
                }
            },
            "xian": {
                "1": {
                    "name": "Beginning",
                    "text": "A small feeling has just appeared. Notice it, but do not rush to act. Give it time and see whether the interest remains real.",
                    "main_state": "A subtle connection just beginning",
                    "main_strategy": "Notice the feeling without rushing to define it",
                    "support_risk": "Wanting immediate certainty",
                    "support_warning": "Acting before the timing is ready",
                    "focus": {
                        "love": "Let understanding come before commitment. Attraction is real, but compatibility takes time to test.",
                        "career": "Explore the opportunity fully before acting and check whether it fits your skills and values.",
                        "health": "Start new routines gradually and make sure they suit your body.",
                        "finances": "Research the investment, assess the risk, and set an exit point before committing.",
                        "relationships": "Let new friendships develop naturally before investing too much too soon."
                    },
                    "guide": {
                        "love": "Let understanding come before commitment:\n• Test compatibility over time.",
                        "career": "Learn the full picture first:\n• Check fit with your values.",
                        "health": "Start new methods gradually:\n• Avoid risky enthusiasm.",
                        "finances": "Research before investing:\n• Set a clear exit point.",
                        "relationships": "Let friendship develop over time:\n• Distinguish chemistry from depth."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "You may feel eager to follow the momentum, but the timing is not fully ready. Hold the impulse and let patience work in your favor.",
                    "main_state": "Quiet patience that beats restless action",
                    "main_strategy": "Resist the urge to follow every impulse",
                    "support_risk": "Restlessness and blind momentum",
                    "support_warning": "Acting just because you cannot wait",
                    "focus": {
                        "love": "If the other person moves closer, respond naturally without overplanning the future.",
                        "career": "When a good opportunity arrives, stay open and observe how it fits your current direction.",
                        "health": "Work with your body’s rhythm: rest when tired and move when energy is good.",
                        "finances": "Follow a clear trend without chasing it. Keep independent judgment.",
                        "relationships": "Welcome connections that approach naturally without forcing or overdefining them."
                    },
                    "guide": {
                        "love": "Respond naturally to their approach:\n• Do not rush the future.",
                        "career": "Use opportunities that fit:\n• Stay observant.",
                        "health": "Work with your body’s rhythm:\n• Do not force the schedule.",
                        "finances": "Follow trends without chasing:\n• Keep independent judgment.",
                        "relationships": "Welcome natural connections:\n• Avoid rigid expectations."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You may be following other people’s direction too closely and losing your own judgment. Cooperation is useful, but do not hand away your position completely.",
                    "main_state": "Taking back your own direction",
                    "main_strategy": "Recover your judgment instead of depending on others",
                    "support_risk": "People-pleasing and overdependence",
                    "support_warning": "Losing your own position just to be liked",
                    "focus": {
                        "love": "If your effort is mostly one-sided, stop chasing and save your care for someone who responds.",
                        "career": "Do not sacrifice principles or self-respect for an opportunity that may not be worth the cost.",
                        "health": "Respect your body’s limits instead of forcing a goal at any price.",
                        "finances": "Do not chase high returns while ignoring risk; protect your principles.",
                        "relationships": "If a friendship is consistently one-sided, reconsider how much you keep investing."
                    },
                    "guide": {
                        "love": "Assess whether the interest is mutual:\n• Save your care for someone responsive.",
                        "career": "Check the cost of the goal:\n• Do not trade away your principles.",
                        "health": "Respect your body’s limits:\n• Do not force the goal.",
                        "finances": "Compare risk with return:\n• Do not chase out of greed.",
                        "relationships": "Check whether the relationship is mutual:\n• Stop feeding one-sided ties."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You may be overthinking a choice and trying to read everyone else’s mind. Return to what you genuinely want and let clarity come from there.",
                    "main_state": "A sincere connection free from excessive calculation",
                    "main_strategy": "Meet the connection with openness and honesty",
                    "support_risk": "Overthinking gains, losses, and other people’s reactions",
                    "support_warning": "Making a simple connection complicated through too much analysis",
                    "focus": {
                        "love": "If doubts remain, clarify them before committing. Honest hesitation is better than forced certainty.",
                        "career": "Resolve important concerns before making a major move, even if there is time pressure.",
                        "health": "Take persistent concerns seriously and get appropriate evaluation.",
                        "finances": "If an investment still feels unclear, pause and research before entering.",
                        "relationships": "When something feels off in a relationship, observe and verify before granting full trust."
                    },
                    "guide": {
                        "love": "Clarify doubts before committing:\n• Trust honest signals.",
                        "career": "Resolve concerns before acting:\n• Do not ignore warning signs.",
                        "health": "Get appropriate evaluation:\n• Choose caution over regret.",
                        "finances": "Pause when doubts remain:\n• Research before entering.",
                        "relationships": "Observe and verify:\n• Give trust time."
                    }
                },
                "5": {
                    "name": "Breakthrough",
                    "text": "You are becoming less reactive to praise, criticism, and distraction. Keep this inner steadiness; it protects your judgment from outside noise.",
                    "main_state": "Calm stability with lasting influence",
                    "main_strategy": "Do not let surface attraction or distraction move you",
                    "support_risk": "Temptation and distraction",
                    "support_warning": "Losing your center for a temporary attraction",
                    "focus": {
                        "love": "Real intimacy can include comfortable silence. Keep your own center while sharing closeness.",
                        "career": "Listen before speaking. Understanding the other person first makes your own words more effective.",
                        "health": "Notice small body signals early and respond before they grow into larger problems.",
                        "finances": "Listen to market signals instead of expecting the market to follow your plan.",
                        "relationships": "Listen for the feeling beneath the words; being understood deepens trust."
                    },
                    "guide": {
                        "love": "Let silence be comfortable:\n• Keep your own center.",
                        "career": "Understand before speaking:\n• Make listening central.",
                        "health": "Respond to small body signals early:\n• Act before symptoms grow.",
                        "finances": "Read market signals and rhythm:\n• Do not fight the trend blindly.",
                        "relationships": "Listen before responding:\n• Help people feel understood."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The connection has stayed at the level of words. Pleasant promises cannot replace real action; let what you do prove what you mean.",
                    "main_state": "Showing sincerity through action rather than words",
                    "main_strategy": "Back your feelings with concrete action",
                    "support_risk": "Staying at the level of talk",
                    "support_warning": "Assuming good words remove the need for effort",
                    "focus": {
                        "love": "Make sure your actions support what you say and keep the promises you make.",
                        "career": "Plans and promises need execution. Move the work forward instead of leaving it on paper.",
                        "health": "Start the healthy action today instead of talking about starting tomorrow.",
                        "finances": "Put the budget or investment plan into practice, even on a small scale.",
                        "relationships": "If you say you are available, show up when needed and make plans concrete."
                    },
                    "guide": {
                        "love": "Back words with action:\n• Keep your promises.",
                        "career": "Turn plans into execution:\n• Follow through.",
                        "health": "Start today:\n• Replace slogans with action.",
                        "finances": "Put the plan into practice:\n• Let behavior drive results.",
                        "relationships": "Show up when needed:\n• Let actions support your words."
                    }
                }
            },
            "heng": {
                "1": {
                    "name": "Beginning",
                    "text": "You are demanding deep results too early. Lasting progress needs time, so slow the pace and let effort accumulate instead of expecting an instant breakthrough.",
                    "main_state": "A steady beginning built step by step",
                    "main_strategy": "Start with the basics and build gradually",
                    "support_risk": "Impatience for quick success",
                    "support_warning": "Skipping fundamentals because you want faster results",
                    "focus": {
                        "love": "Do not rush the relationship into a future it has not yet earned. Let depth build over time.",
                        "career": "Build the basics, learn steadily, and let results compound instead of chasing quick success.",
                        "health": "Use sustainable habits and increase intensity gradually rather than relying on extreme short-term methods.",
                        "finances": "Avoid shortcuts to fast wealth; consistent long-term investing is safer and more durable.",
                        "relationships": "Let trust grow through repeated interaction instead of becoming overly close too quickly."
                    },
                    "guide": {
                        "love": "Let the relationship develop step by step:\n• Do not rush depth.",
                        "career": "Build fundamentals steadily:\n• Let results take time.",
                        "health": "Choose sustainable habits:\n• Avoid extreme short-term methods.",
                        "finances": "Avoid get-rich-quick shortcuts:\n• Let time compound.",
                        "relationships": "Let trust build slowly:\n• Favor durable friendships."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "You have found a workable balance between persistence and flexibility. Keep that middle path; time can work in your favor.",
                    "main_state": "A lasting balance built on moderation",
                    "main_strategy": "Do not push too hard or become too lax",
                    "support_risk": "Swinging between overeffort and complete relaxation",
                    "support_warning": "Going to extremes when balance is needed",
                    "focus": {
                        "love": "Notice the good in the relationship you already have instead of waiting until it is gone.",
                        "career": "Learn from missed opportunities, then focus on the chances still in front of you.",
                        "health": "Respond to warning signs now without wasting energy blaming yourself for the past.",
                        "finances": "Stop replaying missed investments and turn the lesson into better discipline.",
                        "relationships": "Reach out to important friends while they are still part of your life."
                    },
                    "guide": {
                        "love": "Notice what is good now:\n• Do not let familiarity erase gratitude.",
                        "career": "Use the lesson and move forward:\n• Focus on current opportunities.",
                        "health": "Adjust from today:\n• Do not stay stuck in regret.",
                        "finances": "Turn lessons into discipline:\n• Stop replaying “if only”.",
                        "relationships": "Contact important friends:\n• Do not let busyness create distance."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Frequent changes and unfinished plans make you hard to trust. Choose something worth keeping and stay with it past the moment when enthusiasm fades.",
                    "main_state": "Rebuilding trust through consistency",
                    "main_strategy": "Reaffirm the principles and commitments that should remain steady",
                    "support_risk": "Indecision and frequent reversals",
                    "support_warning": "Breaking commitments because of temporary emotion",
                    "focus": {
                        "love": "Do not let insecurity turn a stable relationship into constant doubt. Build security from within and trust the foundation you have.",
                        "career": "Before changing jobs or directions again, separate a real growth need from habitual restlessness.",
                        "health": "If qualified evaluation is reassuring, avoid turning every small sensation into a new fear.",
                        "finances": "If your long-term plan is sound, stop reacting to every short-term market move.",
                        "relationships": "Appreciate reliable friends instead of constantly comparing them with new people."
                    },
                    "guide": {
                        "love": "Trust the relationship’s foundation:\n• Do not let suspicion run it.",
                        "career": "Separate growth from restlessness:\n• Build depth where you are.",
                        "health": "Trust qualified evaluation:\n• Reduce needless health anxiety.",
                        "finances": "Stay with a sound long-term plan:\n• Ignore short-term noise.",
                        "relationships": "Value the friends you have:\n• Compare less."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Persistence cannot make the wrong direction right. Before continuing, ask whether the problem is a lack of patience or simply a poor fit.",
                    "main_state": "Knowing whether a direction deserves persistence",
                    "main_strategy": "Confirm the direction before committing to it longer",
                    "support_risk": "Realizing you may have worked hard in the wrong place",
                    "support_warning": "Continuing only because you have already invested so much",
                    "focus": {
                        "love": "Stable love still needs fresh experiences, meaningful conversation, and regular appreciation.",
                        "career": "Keep innovating within a stable career instead of treating stability as stagnation.",
                        "health": "Use variety inside a consistent routine so healthy habits remain enjoyable.",
                        "finances": "Review and rebalance long-term investments regularly without reacting emotionally to every change.",
                        "relationships": "Long friendships still need active contact, shared experiences, and attention."
                    },
                    "guide": {
                        "love": "Add fresh shared experiences:\n• Keep love active within stability.",
                        "career": "Keep learning and improving:\n• Set new challenges within a stable path.",
                        "health": "Add variety to healthy routines:\n• Keep them enjoyable.",
                        "finances": "Review and rebalance regularly:\n• Keep discipline steady.",
                        "relationships": "Make time to meet:\n• Keep long friendships active."
                    }
                },
                "5": {
                    "name": "Breakthrough",
                    "text": "Reliability has become one of your strongest qualities. Keep what matters steady, but remain flexible enough to adjust methods when circumstances change.",
                    "main_state": "Keeping the core steady while staying adaptable",
                    "main_strategy": "Hold to what matters and adjust what should change",
                    "support_risk": "Tension between tradition and necessary change",
                    "support_warning": "Rejecting needed adjustments simply because the old way is familiar",
                    "focus": {
                        "love": "Offer steady warmth instead of emotional hot-and-cold behavior.",
                        "career": "Keep a consistent professional standard regardless of short-term success or setbacks.",
                        "health": "Make healthy routines part of ordinary life rather than a temporary campaign.",
                        "finances": "Use consistent saving, review, and allocation rules instead of changing principles with the market.",
                        "relationships": "Be a friend whose support remains present in both good and difficult times."
                    },
                    "guide": {
                        "love": "Be steady and warm:\n• Avoid emotional hot-and-cold behavior.",
                        "career": "Keep a consistent professional standard:\n• Do not change with every result.",
                        "health": "Make healthy habits part of life:\n• Do not relax after early progress.",
                        "finances": "Use consistent financial rules:\n• Do not change them with every market move.",
                        "relationships": "Stay present in good and bad times:\n• Make support reliable."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "At the end of a long effort, restlessness can tempt you to disrupt what is already stable. Do not undo years of progress with one impulsive change; protect the foundation as you finish.",
                    "main_state": "Quiet stability that protects what has been built",
                    "main_strategy": "Stop unnecessary changes and return to a calm, steady state",
                    "support_risk": "Restlessness and constant tinkering",
                    "support_warning": "Interfering with something stable simply because you cannot sit still",
                    "focus": {
                        "love": "If a relationship has become only habit and duty, reconnect honestly rather than maintaining an empty form.",
                        "career": "If work has become pure inertia, rediscover its meaning or consider a thoughtful new direction.",
                        "health": "Healthy discipline should not feel like punishment. Reconnect with why you want to care for yourself.",
                        "finances": "Financial planning should support your life, not dominate it. Revisit the purpose behind the rules.",
                        "relationships": "Some friendships need renewed effort; others may need release. Keep relationships based on real connection, not obligation alone."
                    },
                    "guide": {
                        "love": "Keep choosing the relationship honestly:\n• Face emotional emptiness.",
                        "career": "Recover meaning in your work:\n• Do not let inertia consume you.",
                        "health": "Reconnect with why you care for yourself:\n• Avoid punishment-based habits.",
                        "finances": "Revisit what money is for:\n• Let planning serve your life.",
                        "relationships": "Renew real connections:\n• Do not maintain relationships from duty alone."
                    }
                }
            },
            "dun": {
                "1": {
                    "name": "Beginning",
                    "text": "You were slow to step back and are now close to the edge of trouble. The trend has already shifted. Do not hesitate further; even a partial retreat is better than being pulled in completely.",
                    "main_state": "Avoiding needless risk by staying still",
                    "main_strategy": "Hold your ground and do not invite more trouble",
                    "support_risk": "The urge to do something even when action will not help",
                    "support_warning": "Acting rashly when there is little room left to retreat",
                    "guide": {
                        "love": "Step away from clear danger signs early:\n• Do not stay because of sunk cost.",
                        "career": "Prepare an exit before the crisis:\n• Protect your options early.",
                        "health": "Respond to warning signs early:\n• Prevention beats repair.",
                        "finances": "Reduce high-risk exposure early:\n• A safe exit beats one last gamble.",
                        "relationships": "Distance yourself from draining people:\n• Protect your own well-being."
                    },
                    "focus": {
                        "love": "If a relationship shows clear danger signs, step away early. Do not stay only because you have already invested time or emotion.",
                        "career": "When risk is rising at work, prepare an exit before the crisis arrives. Watch the situation and protect your options.",
                        "health": "Respond early to warning signs. Small symptoms deserve attention before they become larger problems.",
                        "finances": "Reduce risky positions when warning signs appear. Leaving safely is better than trying to capture the last gain.",
                        "relationships": "Create distance from people who repeatedly drain or endanger you. Protecting yourself is a basic responsibility."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "You have made a firm decision to withdraw and outside noise cannot easily shake you. Stay flexible, but keep your footing and do not change course just to follow others.",
                    "main_state": "Calm confidence in a firm decision",
                    "main_strategy": "Stay with the principle behind your decision to step back",
                    "support_risk": "Others trying to change your mind",
                    "support_warning": "Abandoning a sound decision because someone persuades you",
                    "guide": {
                        "love": "Give needed space:\n• Say goodbye well when it is truly over.",
                        "career": "Preserve strength and wait:\n• Treat retreat as strategy, not defeat.",
                        "health": "Allow yourself to slow down:\n• Treat rest as an investment.",
                        "finances": "Hold more cash and wait:\n• Do not force a weak opportunity.",
                        "relationships": "Do not fight every point:\n• Yield where it protects the relationship."
                    },
                    "focus": {
                        "love": "Give the other person space when needed, and if the relationship has truly ended, say goodbye with care.",
                        "career": "When conditions are unfavorable, preserving strength can be smarter than forcing progress. A strategic retreat protects future options.",
                        "health": "Allow yourself to slow down when your body needs it. Rest is part of long-term health, not a failure.",
                        "finances": "It may be wise to step out temporarily, keep cash, and wait for a better opportunity.",
                        "relationships": "Do not fight every battle. Giving ground on small things can protect the relationship that matters more."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "You want to leave, but obligations, contracts, or past investment still tie you down. These ties can be resolved, but they need a proper handoff. Finish what you are responsible for, then step away cleanly.",
                    "main_state": "Clarity after a proper handoff",
                    "main_strategy": "Handle what is yours to finish, then step away",
                    "support_risk": "Emotional or practical obligations that are hard to release",
                    "support_warning": "Delaying the cleanup because you do not want to let go",
                    "guide": {
                        "love": "Set clear boundaries in love:\n• Do not trade away your dignity.",
                        "career": "Know when to yield and when to hold:\n• Refuse unreasonable demands.",
                        "health": "Make health a firm boundary:\n• Rest when you need to rest.",
                        "finances": "Refuse unreasonable financial demands:\n• Protect your financial limits.",
                        "relationships": "State your needs and boundaries:\n• Do not avoid every conflict."
                    },
                    "focus": {
                        "love": "Do not sacrifice your dignity just to keep a relationship. Set clear boundaries even when you care deeply.",
                        "career": "Know the difference between reasonable flexibility and endless accommodation. Say no to demands that cross your professional limits.",
                        "health": "Set health boundaries you will not trade away. Rest and medical care should not be postponed to please others.",
                        "finances": "Do not keep lending or paying beyond what you can afford. Financial boundaries make long-term help possible.",
                        "relationships": "Express your needs and limits clearly. Healthy relationships require mutual respect, not one-sided surrender."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "A tempting opportunity may not actually suit you. Letting go is difficult, but choosing to step away now is better than being forced out later. Good judgment includes knowing what not to pursue.",
                    "main_state": "The freedom of letting go at the right time",
                    "main_strategy": "Look beyond short-term gain and choose what leaves you at peace",
                    "support_risk": "Attachment to an attractive short-term benefit",
                    "support_warning": "Holding on to a small gain and missing a better long-term path",
                    "guide": {
                        "love": "Create a chance to reconnect:\n• Use honest conversation and shared time.",
                        "career": "Try a new role or task before quitting:\n• Adjust the path before abandoning it.",
                        "health": "Change the method, not the goal:\n• Find a new source of motivation.",
                        "finances": "Reconnect money habits to meaningful goals:\n• Give discipline a reason.",
                        "relationships": "Reach out to an important old friend:\n• Start with one simple message."
                    },
                    "focus": {
                        "love": "If distance has grown, create a real chance to reconnect through an honest talk or shared time. Do not let silence decide the relationship for you.",
                        "career": "Before quitting, see whether a new role, project, or internal move could restore your motivation. Change the setup before abandoning it completely.",
                        "health": "If your routine feels stale, change the method rather than giving up. A new activity, partner, or goal can renew motivation.",
                        "finances": "Reconnect your financial habits to what they are meant to protect or create. Discipline is easier when the goal matters personally.",
                        "relationships": "If an important friendship has faded through neglect, reach out. One simple message can reopen the connection."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You have stepped back at the right time without losing your principles or your dignity. This is mature judgment: knowing when to stop lets you keep control of your own pace.",
                    "main_state": "Respect earned by leaving with grace",
                    "main_strategy": "Make the decision with composure and keep your dignity",
                    "support_risk": "Worry that leaving will look irresponsible",
                    "support_warning": "Staying in the wrong place because you fear others' opinions",
                    "guide": {
                        "love": "If you stay, invest in the relationship fully:\n• Stop constant comparison.",
                        "career": "Make your current choice work well:\n• Stop chasing every alternative.",
                        "health": "Design habits you can enjoy:\n• Make care sustainable.",
                        "finances": "Follow your sound financial plan:\n• Do not change it out of envy.",
                        "relationships": "Stop testing and holding back:\n• Let the other person feel your sincerity."
                    },
                    "focus": {
                        "love": "If you choose to stay, stop testing the relationship and invest in it fully. Focus on what you have instead of constant comparison.",
                        "career": "If you choose to remain in your role, put your energy into making it worthwhile. Stop imagining that every alternative is better.",
                        "health": "Make healthy routines fit your life so they feel sustainable rather than forced. Enjoyment supports consistency.",
                        "finances": "Once your financial direction is sound, execute it consistently. Do not abandon it every time someone else seems more successful.",
                        "relationships": "If you value a relationship, show it directly. Stop holding back just to protect yourself from possible disappointment."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You are no longer trapped by short-term wins or losses. With little attachment and no need to hesitate, you can look at the situation from a wider perspective and move on freely.",
                    "main_state": "True freedom after releasing attachment",
                    "main_strategy": "Let go fully and move forward with a clear heart",
                    "support_risk": "A small remaining attachment or hesitation",
                    "support_warning": "Keeping one last attachment that prevents real relief",
                    "guide": {
                        "love": "Let go with goodwill:\n• Carry the lesson forward.",
                        "career": "Leave a dead-end path with your experience:\n• Do not stay for sunk cost.",
                        "health": "Drop methods that do not fit:\n• Try a better direction.",
                        "finances": "Cut a clearly bad investment:\n• Learn and reset.",
                        "relationships": "Say goodbye without resentment:\n• Let both sides move on."
                    },
                    "focus": {
                        "love": "When a relationship is truly over, let it go without bitterness. Keep the lesson and move forward with goodwill.",
                        "career": "When a path has no future, leave with the experience you gained. Do not let sunk time keep you in the wrong place.",
                        "health": "If a health method clearly does not suit you, stop forcing it. Learn from the attempt and try a better approach.",
                        "finances": "When an investment is clearly wrong, take the loss and move on. Cutting a bad position is part of financial discipline.",
                        "relationships": "When a relationship has ended, say goodbye without revenge or endless conflict. A clean ending respects both sides."
                    }
                }
            },
            "dazhuang": {
                "1": {
                    "name": "Beginning",
                    "text": "Your energy is rising, but rushing to prove yourself can put you in a role you are not ready for. Start with a clear view of your position and build strength before you sprint.",
                    "main_state": "A phase of building strength with restraint",
                    "main_strategy": "Control the impulse and build capacity patiently",
                    "support_risk": "The urge to prove yourself immediately",
                    "support_warning": "Stepping forward too early out of pride",
                    "guide": {
                        "love": "Protect rather than pressure:\n• Let strength support the relationship.",
                        "career": "Balance confidence with humility:\n• Let restraint add weight to your ability.",
                        "health": "Respect your physical limits:\n• Do not challenge extremes out of confidence.",
                        "finances": "Do not overexpand because you feel strong:\n• Keep a resilient allocation.",
                        "relationships": "Leave room for others to speak:\n• Do not turn confidence into pressure."
                    },
                    "focus": {
                        "love": "Use strength to protect, not pressure. Confidence helps love when the other person still has room to breathe.",
                        "career": "Balance visible ability with humility. You do not need to prove yourself in every moment.",
                        "health": "Respect physical limits even when you feel strong. Confidence is not a reason to ignore warning signs.",
                        "finances": "Do not expand or leverage too aggressively just because capital is available. Risk control is part of financial strength.",
                        "relationships": "Leave space for others when you speak or lead. Real strength makes people feel secure, not small."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "You have strength, but you guide it with balance instead of force. Choosing steady progress over aggression keeps your power useful rather than harmful.",
                    "main_state": "Steady progress through balanced strength",
                    "main_strategy": "Use strength with restraint and good judgment",
                    "support_risk": "The tendency to push too hard",
                    "support_warning": "Losing proportion when emotions rise",
                    "guide": {
                        "love": "Do not prove your love constantly:\n• Let the relationship breathe.",
                        "career": "Show your strength when it matters:\n• Know when to step forward and when to hold.",
                        "health": "Do not overtrain or push through injury:\n• Let strength grow through recovery.",
                        "finances": "Keep capital available for better opportunities:\n• Do not chase returns.",
                        "relationships": "Observe and listen:\n• Speak when it adds value."
                    },
                    "focus": {
                        "love": "You do not need to prove your love at every moment. Give the relationship enough space to feel natural.",
                        "career": "You do not need to take every stage. Save your strongest push for moments that actually matter.",
                        "health": "Rest and recovery are part of training. Avoid overtraining or pushing through injury.",
                        "finances": "Do not chase every high return. Keep capital available for genuinely strong opportunities.",
                        "relationships": "Listen and observe more. Speaking at the right moment can carry more weight than speaking constantly."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Brute force eventually meets a wall. Before pushing harder, ask whether the path is truly right or whether you simply want to win.",
                    "main_state": "Clarity that avoids a deadlock through wisdom",
                    "main_strategy": "Use judgment instead of force",
                    "support_risk": "A challenge that makes you want to push back",
                    "support_warning": "Turning a challenge into a stubborn contest",
                    "guide": {
                        "love": "Let yourself be vulnerable:\n• Give the other person room to come closer.",
                        "career": "Be honest about your capacity:\n• Ask for help when needed.",
                        "health": "Stop forcing your body:\n• Respect warning signs and rest.",
                        "finances": "Do not commit beyond your means:\n• Be honest about financial limits.",
                        "relationships": "Let the real you be seen:\n• Use honesty to build connection."
                    },
                    "focus": {
                        "love": "Admitting vulnerability is not weakness. Dropping the strong front can let the other person come closer.",
                        "career": "Be honest about your limits and ask for help when needed. Taking on too much to prove yourself can hurt the whole team.",
                        "health": "Stop pushing when your body gives clear warning signs. Resting is responsible; ignoring them is the real risk.",
                        "finances": "Do not make financial commitments beyond your capacity for the sake of pride. Know your limits.",
                        "relationships": "Let people see the real you. Honest vulnerability often creates stronger connection than a hard exterior."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The barrier is open, but fewer obstacles mean more responsibility. Move forward honestly; shortcuts can turn a clear path into a hard fall.",
                    "main_state": "An open path created by choosing integrity",
                    "main_strategy": "Move forward directly without relying on force or shortcuts",
                    "support_risk": "An obstacle that tempts you to force a breakthrough",
                    "support_warning": "Using improper means because you want faster progress",
                    "guide": {
                        "love": "Express your feelings clearly:\n• Move forward without needless fear.",
                        "career": "Ask for the opportunity you want:\n• Let your preparation show.",
                        "health": "Rebuild activity gradually:\n• Move forward with confidence.",
                        "finances": "Act more actively while keeping discipline:\n• Use the opening well.",
                        "relationships": "Take the first step toward repair:\n• Show goodwill directly."
                    },
                    "focus": {
                        "love": "With the main obstacle gone, express your feelings clearly and move the relationship forward. Do not let fear block an opening you have prepared for.",
                        "career": "The path is open. Ask for the opportunity or responsibility you want and let your accumulated ability show through action.",
                        "health": "If recovery is going well, increase activity gradually and confidently instead of staying overly restricted.",
                        "finances": "When obstacles clear, you can act more actively while keeping discipline and risk control.",
                        "relationships": "If the tension has eased, take the first step toward reconciliation or a deeper connection."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "A small loss may actually remove a burden. Do not waste strength protecting every detail; let minor things go so your energy stays with what matters.",
                    "main_state": "Greater security after softening your stance",
                    "main_strategy": "Use a gentler approach to protect what matters",
                    "support_risk": "Reluctance to let go of a strong posture",
                    "support_warning": "Continuing to act tough because you do not want to look weak",
                    "guide": {
                        "love": "Let go of control and defensiveness:\n• Make gentleness part of your strength.",
                        "career": "Let results speak:\n• Lead with judgment rather than force.",
                        "health": "Choose balance over extremes:\n• Make health sustainable.",
                        "finances": "Use a long-term view:\n• Let wealth grow without urgency.",
                        "relationships": "Lead with calm confidence:\n• Let respect come from character."
                    },
                    "focus": {
                        "love": "Real strength can be gentle. Let go of control and defensiveness so love has room to be warm and equal.",
                        "career": "Let results speak for you. You do not need to argue for credit when your work and judgment are clear.",
                        "health": "Favor balance over extremes. Sustainable health comes from steady care, not constant intensity.",
                        "finances": "Long-term financial strength comes from calm decisions, not greed or fear. Allocate with patience.",
                        "relationships": "Treat people with calm confidence. Respect built through composure lasts longer than dominance."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Pushing harder has left you stuck. Stop forcing the situation, step back, and examine your blind spots; flexibility can release what strength alone cannot.",
                    "main_state": "A turning point created by stopping and reflecting",
                    "main_strategy": "Lower your guard and examine your blind spots honestly",
                    "support_risk": "Feeling trapped and too proud to back down",
                    "support_warning": "Keeping up a losing stance just to save face",
                    "guide": {
                        "love": "Give up the need to win:\n• Use flexibility with differences.",
                        "career": "Replace confrontation with cooperation:\n• Help the team succeed.",
                        "health": "Return to a moderate, sustainable plan:\n• Drop the more-is-better mindset.",
                        "finances": "Correct a bad strategy quickly:\n• Return to steadier allocation.",
                        "relationships": "Listen more than you speak:\n• Understand before persuading."
                    },
                    "focus": {
                        "love": "If your forcefulness is hurting the relationship, change course. You do not need to win every disagreement.",
                        "career": "If a hard-driving style is hurting the team, listen more and replace confrontation with cooperation.",
                        "health": "If extreme training is hurting you, stop and return to a moderate, sustainable approach.",
                        "finances": "If aggressive investing is eroding assets, admit the strategy is wrong and return to a steadier allocation.",
                        "relationships": "If always taking control is pushing people away, listen more and try to understand before persuading."
                    }
                }
            },
            "jin": {
                "1": {
                    "name": "Beginning",
                    "text": "You want to move up, but the beginning brings doubt, rejection, or delays. Do not let that make you doubt yourself; early resistance can simply filter out the wrong path.",
                    "main_state": "A calm beginning that is not shaken by early neglect",
                    "main_strategy": "Stay open-minded and keep preparing well",
                    "support_risk": "Feeling doubted or forced to prove yourself",
                    "support_warning": "Losing patience because you want recognition quickly",
                    "guide": {
                        "love": "Build trust through consistent action:\n• Do not rush to impress.",
                        "career": "Deliver reliably:\n• Let results earn recognition.",
                        "health": "Use sound methods consistently:\n• Give them time to work.",
                        "finances": "Build credit and saving discipline:\n• Let patience compound.",
                        "relationships": "Be sincere and listen well:\n• Build trust through reliability."
                    },
                    "focus": {
                        "love": "Build trust through consistency instead of trying to impress. Early relationships need patience.",
                        "career": "Build a reliable reputation by delivering what you promise. Let recognition come from results.",
                        "health": "Choose sound, evidence-based habits and stay with them long enough to judge them fairly.",
                        "finances": "Build credit, savings, and steady investments rather than chasing quick returns.",
                        "relationships": "In a new group, listen well and be reliable. Trust grows one kept promise at a time."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "Progress feels difficult and lonely, but you are still holding to the right course. Your effort may already be noticed even if the reward has not arrived yet.",
                    "main_state": "Hard work on the right path beginning to bear fruit",
                    "main_strategy": "Keep your principles and do not let temporary difficulty change your direction",
                    "support_risk": "A worrying or difficult stretch",
                    "support_warning": "Giving up your direction because the process is hard",
                    "guide": {
                        "love": "Support quietly and sincerely:\n• Let actions show your care.",
                        "career": "Do your part well:\n• Trust steady effort to be seen.",
                        "health": "Keep daily habits simple and consistent:\n• Let health become normal.",
                        "finances": "Avoid spending for appearances:\n• Let wealth build quietly.",
                        "relationships": "Offer real support:\n• Let friendship rest on genuine care."
                    },
                    "focus": {
                        "love": "Support the other person quietly and sincerely. Love does not need to be performed to be real.",
                        "career": "Do your part well without obsessing over immediate reward. Good work may be noticed later than you expect.",
                        "health": "Keep simple exercise and nutrition habits without turning them into a performance for others.",
                        "finances": "Let savings and investments grow quietly. Avoid spending or investing for appearances.",
                        "relationships": "Care for friends through real support rather than public gestures. Genuine concern is remembered."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Your effort has gained trust and support. You no longer need to please everyone; move forward with the values and people that genuinely support the work.",
                    "main_state": "Smooth progress created by shared support",
                    "main_strategy": "Use the strength of the group instead of carrying everything alone",
                    "support_risk": "The feeling that you must do everything yourself",
                    "support_warning": "Rejecting help just to prove you can manage alone",
                    "guide": {
                        "love": "Stop one-sided pleasing:\n• Make room for mutual care.",
                        "career": "Distinguish appreciation from exploitation:\n• Set limits on unreasonable demands.",
                        "health": "Make health non-negotiable:\n• Stop sacrificing it to please others.",
                        "finances": "Stop acting as everyone's wallet:\n• Secure your own finances first.",
                        "relationships": "Practice saying no:\n• Let giving be a choice, not an obligation."
                    },
                    "focus": {
                        "love": "If you are giving constantly with little response, stop pleasing and look honestly at the relationship. Mutual care matters more than outside approval.",
                        "career": "If your effort is being used without fair return, set limits. Learn the difference between appreciation and exploitation.",
                        "health": "Do not sacrifice your health to keep others happy. Make it a non-negotiable priority.",
                        "finances": "Do not become everyone else's financial safety net while neglecting your own stability.",
                        "relationships": "If people take your generosity for granted, practice saying no and state what you need."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "An attractive shortcut may promise status or money, but questionable methods create bigger weaknesses. Clean progress matters more than fast progress.",
                    "main_state": "Awareness that avoids risk by staying on the right path",
                    "main_strategy": "Stay transparent and return to the proper way",
                    "support_risk": "The temptation to take a shortcut",
                    "support_warning": "Using hidden or improper methods to get results faster",
                    "guide": {
                        "love": "Stay true to your feelings and commitments:\n• Do not be moved by every temptation.",
                        "career": "Do not trade principles for quick benefit:\n• Build long-term trust.",
                        "health": "Keep your judgment around trends:\n• Follow the plan that fits you.",
                        "finances": "Do not chase someone else's quick profit:\n• Keep your discipline.",
                        "relationships": "Do not change yourself just to please others:\n• Let respect come to you."
                    },
                    "focus": {
                        "love": "Stay true to your real feelings and commitments. Do not let temptation or outside pressure pull you off course.",
                        "career": "Keep your professional ethics when shortcuts appear. Long-term trust matters more than a quick advantage.",
                        "health": "Keep your judgment when trends promise easy answers. Follow the plan that actually fits you.",
                        "finances": "Do not abandon your rules because someone else made a quick profit. Discipline protects you through market swings.",
                        "relationships": "Do not change your position just to be liked. Standing firmly attracts people who respect you."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Do not let small gains and losses consume your attention. You have reached a new level, so place your energy on larger value and broader opportunities.",
                    "main_state": "An open outlook that moves beyond small gains and losses",
                    "main_strategy": "Let go of small calculations and move forward with perspective",
                    "support_risk": "Getting stuck on minor gains or losses",
                    "support_warning": "Letting small concerns tie up your next step",
                    "guide": {
                        "love": "Love with wisdom, not permanent defense:\n• Trust that sincere people still exist.",
                        "career": "Use the lesson and start again:\n• Do not let failure define the future.",
                        "health": "Change from today forward:\n• Drop guilt about the past.",
                        "finances": "Turn losses into better rules:\n• Rebuild steadily.",
                        "relationships": "Open again with better judgment:\n• Make room for sincere connection."
                    },
                    "focus": {
                        "love": "Do not let past hurt prevent you from trusting again. Love with better judgment, not permanent defensiveness.",
                        "career": "Past failure does not define your career. Keep the lesson and try again with better judgment.",
                        "health": "You can improve health from where you are now. Put energy into the next good habit instead of guilt about the past.",
                        "finances": "Treat past losses as tuition. Use the lesson to rebuild a steadier strategy.",
                        "relationships": "Do not let old hurt close you off. Open carefully and learn to recognize people who are trustworthy."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You already have influence and do not need to keep proving it through force. Turn your attention inward, refine your conduct, and replace sharpness with maturity.",
                    "main_state": "Peace of mind from holding yourself to a clear standard",
                    "main_strategy": "Review and correct what still needs improvement within yourself",
                    "support_risk": "The discomfort of being strict with yourself",
                    "support_warning": "Avoiding an issue because self-review feels difficult",
                    "guide": {
                        "love": "Meet misunderstanding openly:\n• Let time clarify what is true.",
                        "career": "Use skill, not dirty tactics:\n• Keep your standards.",
                        "health": "Care for yourself steadily:\n• Favor long-term well-being over extremes.",
                        "finances": "Keep the long-term strategy:\n• Do not react emotionally to every gain or loss.",
                        "relationships": "Respond with integrity:\n• Choose respect over winning the moment."
                    },
                    "focus": {
                        "love": "Keep meeting misunderstanding with honesty instead of counterattack. Peace of mind matters more than winning.",
                        "career": "Answer unfair competition with skill and integrity, not dirty tactics. Your standard is part of your long-term position.",
                        "health": "Do not compete through extreme health routines. Choose calm, sustainable care over short-lived intensity.",
                        "finances": "Stay with a sound long-term strategy instead of reacting emotionally to every move in the market.",
                        "relationships": "Respond to attacks with integrity. Lasting respect matters more than winning a single argument."
                    }
                }
            },
            "mingyi": {
                "1": {
                    "name": "Beginning",
                    "text": "You are just beginning to notice that the environment is becoming less friendly and visibility is attracting trouble. Do not force yourself higher; lowering your profile can protect you.",
                    "main_state": "Space and energy protected by a temporary withdrawal",
                    "main_strategy": "Step back for now and protect your energy",
                    "support_risk": "Criticism or misunderstanding",
                    "support_warning": "Ignoring self-protection because you care too much about others' opinions",
                    "guide": {
                        "love": "Keep kindness without losing yourself:\n• Stay steady through the low period.",
                        "career": "Keep building quietly:\n• Do not abandon your standards.",
                        "health": "Protect basic routines:\n• Trust steady care through the low period.",
                        "finances": "Protect capital:\n• Avoid panic decisions.",
                        "relationships": "Step away from people who dim you:\n• Stay close to real support."
                    },
                    "focus": {
                        "love": "Keep your kindness and sincerity even in a low period, but do not lose yourself trying to be understood.",
                        "career": "Keep a low profile and build strength quietly. Do not let a difficult environment erase your professional standards.",
                        "health": "Protect simple routines even when progress is hard to see. Consistency supports recovery through low periods.",
                        "finances": "Protect capital and avoid panic decisions. Patience matters most when the outlook feels darkest.",
                        "relationships": "Do not chase approval from people who diminish you. Keep your principles and stay close to those who see you clearly."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "You have been hurt or treated unfairly, but your inner strength remains. You do not need to make a loud case for yourself; seek support and keep your footing.",
                    "main_state": "Inner strength that remains after a setback",
                    "main_strategy": "Seek support decisively instead of carrying everything alone",
                    "support_risk": "A real setback or loss",
                    "support_warning": "Giving up on help because you were hurt",
                    "guide": {
                        "love": "Offer care without sacrificing yourself:\n• Protect your own heart too.",
                        "career": "Stay low-key and prepare:\n• Let skill become your protection.",
                        "health": "Give yourself time to heal:\n• Seek support when needed.",
                        "finances": "Protect existing assets:\n• Cut unnecessary spending.",
                        "relationships": "Keep your composure:\n• Distance yourself from repeated harm."
                    },
                    "focus": {
                        "love": "If the other person is going through a low period, offer care without sacrificing yourself. Support and self-protection can exist together.",
                        "career": "When the environment is unfair, staying low-key may protect you. Build your skill and wait for a safer moment to act.",
                        "health": "Give yourself time to heal and get support. Recovery does not need to be rushed.",
                        "finances": "Protect existing assets and reduce unnecessary spending. Preservation matters more than aggressive recovery.",
                        "relationships": "If you have been hurt or misunderstood, keep your composure but step away from people who continue to harm you."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "You have identified the source of a serious problem, but exposing it also exposes you. Do not rush to claim victory; handle the issue carefully and protect yourself first.",
                    "main_state": "Calm patience with a deeply rooted problem",
                    "main_strategy": "Work step by step instead of trying to solve everything at once",
                    "support_risk": "The urge to end the problem quickly",
                    "support_warning": "Using overly aggressive methods just to finish sooner",
                    "guide": {
                        "love": "End a clearly false relationship:\n• Protect your dignity.",
                        "career": "Leave an untrustworthy situation early:\n• Protect your rights and reputation.",
                        "health": "Put health first:\n• Arrange proper evaluation or treatment.",
                        "finances": "Cut losses quickly when risk is clear:\n• Protect what remains.",
                        "relationships": "Distance yourself from people you cannot trust:\n• Do not let history keep you exposed."
                    },
                    "focus": {
                        "love": "If the relationship is clearly false or harmful, face that truth and leave. Your dignity matters more than maintaining an appearance.",
                        "career": "If a workplace or partner is no longer trustworthy, exit before sunk cost traps you further. Protect your rights and reputation.",
                        "health": "If serious warning signs are being ignored, make health the priority and arrange proper evaluation or treatment.",
                        "finances": "If you discover fraud or major risk, stop the loss quickly. Protect what remains instead of defending a bad decision.",
                        "relationships": "When someone has shown they are not trustworthy, create distance even if the history makes that difficult."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have seen the problem from the inside and now understand its source. You hold important information, but you are also exposed. Know your exit before you act.",
                    "main_state": "Wise withdrawal after seeing the situation clearly",
                    "main_strategy": "Once the truth is clear, leave an environment that is not right for you",
                    "support_risk": "Hesitating over whether to leave",
                    "support_warning": "Staying in a harmful situation because you cannot let go",
                    "guide": {
                        "love": "Keep hope without denying reality:\n• Move toward the next opening.",
                        "career": "Observe and prepare options:\n• Do not let fear drive action.",
                        "health": "Keep supporting recovery:\n• Hold on to realistic hope.",
                        "finances": "Do not panic:\n• Get reliable help and make a plan.",
                        "relationships": "Reach for support:\n• Do not face the hard period alone."
                    },
                    "focus": {
                        "love": "Even in a dark period, keep a small sense of hope and direction. Do not let temporary loneliness convince you that nothing can improve.",
                        "career": "Observe carefully, prepare options, and do not let fear force a rash move. Find the safest path toward better conditions.",
                        "health": "Keep working with appropriate care and support. Hope can help you stay engaged with recovery without denying reality.",
                        "finances": "Do not panic-sell or abandon all planning. Seek reliable advice and build a practical path out.",
                        "relationships": "When you feel isolated, actively look for people who can support you. You do not have to cross every difficult stretch alone."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "In an unfriendly environment, wisdom may need to stay hidden. Do not waste strength proving how capable you are; protect what matters and wait for the right moment.",
                    "main_state": "Steady wisdom that keeps inner convictions intact",
                    "main_strategy": "Hide your edge when necessary and protect what you truly value",
                    "support_risk": "A period that requires humility and restraint",
                    "support_warning": "Forgetting your real values because you must keep a low profile",
                    "guide": {
                        "love": "Keep your kindness through difficulty:\n• Do not let hurt define you.",
                        "career": "Hold to your principles quietly:\n• Let integrity outlast the environment.",
                        "health": "Keep simple supportive habits:\n• Let small care accumulate.",
                        "finances": "Keep discipline under pressure:\n• Avoid panic and shortcuts.",
                        "relationships": "Keep your character steady:\n• Do not let the environment reshape you."
                    },
                    "focus": {
                        "love": "Keep choosing honesty and kindness even if the relationship is difficult. Do not let hurt turn you into someone you do not want to be.",
                        "career": "Keep your principles even when the workplace rewards the opposite. Quiet integrity can outlast a bad environment.",
                        "health": "Even if recovery is slow, keep the simple habits that support you. Small acts of care still add up.",
                        "finances": "Keep financial discipline under pressure: avoid panic, gambling, and shortcuts. Surviving the hard period matters.",
                        "relationships": "Do not let a harsh environment change the way you treat people. Consistent character earns trust over time."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The environment has become too damaged to repair through your effort alone. Accept what cannot be fixed, leave quietly, and preserve the last of your energy for what comes next.",
                    "main_state": "Renewal that comes after holding on through the darkest stretch",
                    "main_strategy": "Get through the hardest part without giving up on yourself",
                    "support_risk": "Feeling that there is no hope left",
                    "support_warning": "Giving up just before conditions begin to change",
                    "guide": {
                        "love": "Heal before starting again:\n• Let experience make you wiser.",
                        "career": "Replan with the lessons you gained:\n• Let hardship clarify your direction.",
                        "health": "Build stronger routines from the experience:\n• Respond earlier next time.",
                        "finances": "Turn losses into better risk rules:\n• Rebuild carefully.",
                        "relationships": "Value those who stayed through the dark period:\n• Let pain become better judgment."
                    },
                    "focus": {
                        "love": "After a painful relationship period, heal before rushing into something new. Let the experience make your next connection wiser, not more fearful.",
                        "career": "Use what the difficult period taught you to plan a better direction. Hard experience can clarify what truly matters.",
                        "health": "Use a health setback as a reason to build stronger routines and respond earlier to warning signs in the future.",
                        "finances": "Turn past losses into clearer risk rules. Rebuild with more caution and better structure.",
                        "relationships": "Value the people who supported you when things were hard. Let old pain sharpen your judgment without closing your heart."
                    }
                }
            },
            "jiaren": {
                "1": {
                    "name": "Beginning",
                    "text": "Set boundaries and basic rules early. They are not restrictions but protection. Clear expectations prevent small misunderstandings from wearing down trust.",
                    "main_state": "A stable foundation built through early boundaries",
                    "main_strategy": "Clarify the important rules from the beginning",
                    "support_risk": "Feeling awkward about being too formal",
                    "support_warning": "Avoiding necessary conversations because they feel uncomfortable",
                    "guide": {
                        "love": "Talk early about habits and limits:\n• Keep expectations clear.",
                        "career": "Define roles, responsibilities, and communication:\n• Keep duties clear.",
                        "health": "Set a regular health routine:\n• Let consistency protect your health.",
                        "finances": "Set saving goals and spending limits:\n• Give money clear rules.",
                        "relationships": "State expectations and respect boundaries:\n• Build mutual understanding early."
                    },
                    "focus": {
                        "love": "Early clarity helps a relationship feel safe. Discuss habits, expectations, and limits before assumptions turn into conflict.",
                        "career": "Clear roles and working rules prevent future blame. Define responsibilities and communication channels early.",
                        "health": "Build fixed routines for sleep, movement, and basic care. Consistency matters more than occasional intensity.",
                        "finances": "Create simple financial rules: savings targets, spending limits, and regular tracking. Stability comes from discipline.",
                        "relationships": "In new relationships or teams, establish expectations early while respecting other people's limits."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "Take care of the quiet daily work that keeps everything running. Meals, chores, and routines may look small, but they create stability.",
                    "main_state": "Steady strength built through doing your part",
                    "main_strategy": "Handle the basics well and stay grounded",
                    "support_risk": "Wanting more visible recognition",
                    "support_warning": "Overlooking quiet, necessary work in pursuit of attention",
                    "guide": {
                        "love": "Guide with patience, not blame:\n• Lead by example.",
                        "career": "Model the standard before asking it of others:\n• Give clear encouragement.",
                        "health": "Support healthy habits together:\n• Lead by example.",
                        "finances": "Model sound money habits:\n• Make saving and tracking visible.",
                        "relationships": "Influence through action, not demands:\n• Let your example speak."
                    },
                    "focus": {
                        "love": "Gentle guidance works better than control. Encourage change and model the behavior you hope to see.",
                        "career": "Leadership is stronger when you demonstrate the standard first, then give clear feedback and support.",
                        "health": "Help loved ones through shared habits such as walking or cooking well. Example is more persuasive than lectures.",
                        "finances": "Teach money habits by practicing them: track spending, save first, and spend with intention.",
                        "relationships": "When guiding others, show the quality you value instead of only asking for it."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "High standards may come from care, but too much pressure creates fear and resentment. Keep principles, yet leave room for warmth.",
                    "main_state": "Balanced discipline that avoids both harshness and neglect",
                    "main_strategy": "Hold necessary boundaries with a calm tone",
                    "support_risk": "Wanting to overlook problems for an easier life",
                    "support_warning": "Letting a problem grow because enforcing limits feels tiring",
                    "guide": {
                        "love": "Replace control with respect and trust:\n• Let love leave room to breathe.",
                        "career": "Separate high standards from harsh demands:\n• Give support with expectations.",
                        "health": "Allow some flexibility:\n• Health does not require perfection.",
                        "finances": "Use fair and transparent money rules:\n• Leave room for autonomy.",
                        "relationships": "Practice trust and let go:\n• Respect other people's choices."
                    },
                    "focus": {
                        "love": "If care starts to feel like control, ease the pressure. Respect and trust make room for healthier change.",
                        "career": "High standards help only when paired with realistic support. Excessive pressure drains motivation.",
                        "health": "Do not turn health into punishment. Allow flexibility and aim for a sustainable life, not perfect discipline.",
                        "finances": "Overly strict financial control can create secrecy or rebellion. Use clear rules while allowing reasonable independence.",
                        "relationships": "If you are managing other people too closely, step back. Respecting their choices is part of mature care."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Careful effort begins to bear fruit. A well-run home or relationship creates both practical stability and deeper trust.",
                    "main_state": "Tangible results from consistent care",
                    "main_strategy": "Protect and continue what is already working",
                    "support_risk": "Taking good results for granted",
                    "support_warning": "Stopping the effort because things currently feel easy",
                    "guide": {
                        "love": "Keep each other in mind:\n• Build toward a shared future.",
                        "career": "Care for people and share resources:\n• Celebrate shared results.",
                        "health": "Care for yourself as you would a loved one:\n• Make room for rest and checkups.",
                        "finances": "Manage money for long-term security:\n• Review plans regularly.",
                        "relationships": "Treat close friends like chosen family:\n• Stay in touch and show up."
                    },
                    "focus": {
                        "love": "A strong relationship grows through practical contribution: attention, shared responsibility, and planning for the future.",
                        "career": "Teams thrive when people feel valued, informed, and included in shared success.",
                        "health": "Give yourself the same care you would give family: good food, enough rest, and appropriate checkups.",
                        "finances": "Manage money with clear goals and regular reviews. Put resources toward what truly matters.",
                        "relationships": "Build your social home through steady contact, practical support, and showing up when needed."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Warmth and respect draw people together more effectively than pressure. When others feel genuinely cared for, they respond with trust.",
                    "main_state": "Influence earned through sincere and warm treatment",
                    "main_strategy": "Lead through care and inclusion rather than authority",
                    "support_risk": "Wanting to solve problems through force",
                    "support_warning": "Using pressure instead of honest communication for the sake of speed",
                    "guide": {
                        "love": "Return to simple care and presence:\n• Remember the small things.",
                        "career": "Replace image with genuine concern:\n• Take time to know the team.",
                        "health": "Return to simple health habits:\n• Keep what is sustainable.",
                        "finances": "Keep life simple and save the rest:\n• Let simplicity create security.",
                        "relationships": "Share your real self openly:\n• Keep interaction simple and sincere."
                    },
                    "focus": {
                        "love": "Love does not need grand gestures. Small acts, shared daily life, and reliable presence carry more weight.",
                        "career": "Good leadership does not need performance. Genuine interest, thanks, and useful support build trust.",
                        "health": "Health often improves through simple basics: nourishing food, walking, and good sleep.",
                        "finances": "Financial peace often comes from simple rules: spend what matters, save the rest, and avoid unnecessary display.",
                        "relationships": "Close relationships need little performance. Be real, listen well, and let ordinary interaction build trust."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Integrity and consistency have made you someone others trust. Hold yourself to clear standards while treating people with generosity.",
                    "main_state": "A lasting bond built on integrity and principle",
                    "main_strategy": "Lead by example and keep the connection sincere",
                    "support_risk": "The effort required to keep holding yourself accountable",
                    "support_warning": "Relaxing your standards because the relationship now feels secure",
                    "guide": {
                        "love": "Be sincere while keeping your boundaries:\n• Stay whole within love.",
                        "career": "Lead with both care and discipline:\n• Keep standards human.",
                        "health": "Listen gently and follow needed discipline:\n• Avoid both neglect and self-punishment.",
                        "finances": "Keep saving discipline with practical flexibility:\n• Protect quality of life.",
                        "relationships": "Be sincere and principled:\n• Do not trade values for approval."
                    },
                    "focus": {
                        "love": "Healthy love needs both sincerity and boundaries. Stay caring without losing yourself.",
                        "career": "Strong leadership balances concern for people with consistent standards.",
                        "health": "Treat your body with compassion and discipline at the same time. Neither neglect nor harshness is sustainable.",
                        "finances": "Keep financial rules firm enough to protect the future, but flexible enough to support a good life.",
                        "relationships": "Be kind without abandoning your values. Respect grows from warmth with principles."
                    }
                }
            },
            "kui": {
                "1": {
                    "name": "Beginning",
                    "text": "The disagreement is still small. Do not chase every misunderstanding or try to win immediately. Give it space; some things return to balance on their own.",
                    "main_state": "A return to balance through patience",
                    "main_strategy": "Do not chase, retaliate, or overreact",
                    "support_risk": "The urge to fix everything immediately",
                    "support_warning": "Using a harsh response for a minor conflict",
                    "guide": {
                        "love": "Protect your feelings:\n• Do not stay where you are being hurt.",
                        "career": "State your position calmly and firmly:\n• Do not abandon core values.",
                        "health": "Listen to what your body truly needs:\n• Respect its limits.",
                        "finances": "Respect financial unease:\n• Do not invest under pressure.",
                        "relationships": "Give each other space:\n• Let reconciliation come in its own time."
                    },
                    "focus": {
                        "love": "A repair must be mutual. Care for yourself first and do not stay in a harmful relationship simply from fear of losing it.",
                        "career": "You can want cooperation without agreeing to methods that violate your values. State your position clearly and respectfully.",
                        "health": "When signals conflict, pause the idea of what you \"should\" do and listen to your actual limits.",
                        "finances": "If a decision feels wrong after reasonable review, do not let persuasion push you into it.",
                        "relationships": "Do not force a repair while emotions are high. Space can reveal whether the relationship still has a natural path back."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "An unexpected meeting with someone who understands you can open a door. Put aside assumptions and make room for honest exchange.",
                    "main_state": "An opening created by sincere communication beyond formal roles",
                    "main_strategy": "Drop the formality and speak honestly",
                    "support_risk": "Feeling stuck because formal channels are not working",
                    "support_warning": "Missing genuine communication by clinging to form",
                    "guide": {
                        "love": "Drop assumptions and notice sincerity:\n• Let difference coexist with understanding.",
                        "career": "Cross team boundaries and seek understanding:\n• Build synergy through difference.",
                        "health": "Give a new method time to settle:\n• Track objective changes.",
                        "finances": "Understand the idea before judging its risk:\n• Do not reject it only for being unusual.",
                        "relationships": "Suspend judgment and listen:\n• Let different people widen your view."
                    },
                    "focus": {
                        "love": "Someone can understand you despite a different background. Notice sincerity before judging the differences.",
                        "career": "Cross-functional work can create new ideas when each side learns the other's needs and language.",
                        "health": "A new health approach needs enough time and clear observation before you judge it.",
                        "finances": "Do not reject an unusual investment only because it is unfamiliar. Understand it and assess the risk first.",
                        "relationships": "Different backgrounds can widen your perspective. Listen before deciding whether someone fits."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "Everything may feel blocked at once. Do not force your way through. Stop and identify where the resistance is really coming from.",
                    "main_state": "A difficult stretch that can turn once the real conflict is understood",
                    "main_strategy": "Stay upright and patient through the setback",
                    "support_risk": "Frustration and a sense of unfairness",
                    "support_warning": "Giving up your principles because the process feels painful",
                    "guide": {
                        "love": "Release the need to prove who is right:\n• Try to see the other side.",
                        "career": "Return to the shared goal:\n• Invite direct dialogue.",
                        "health": "Seek an integrated assessment:\n• Address root causes.",
                        "finances": "Track the full money flow:\n• Fix the underlying imbalance.",
                        "relationships": "Start by expressing that you care:\n• Look for a solution together."
                    },
                    "focus": {
                        "love": "When conflict piles up, stop trying to win. Understanding the other side may reveal that you still want the same thing.",
                        "career": "In team conflict, return to the shared objective and discuss the interests both sides care about.",
                        "health": "Conflicting symptoms may need a whole-picture review rather than isolated fixes.",
                        "finances": "If income rises but savings do not, trace the full flow of money and find the structural leak.",
                        "relationships": "Many conflicts exist because both sides care. Say that clearly and invite the other person to solve it with you."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Isolation does not mean you are truly alone. A reliable ally can appear once you stop closing yourself off.",
                    "main_state": "A stronger path through trustworthy companionship",
                    "main_strategy": "Value the rare understanding and move forward together",
                    "support_risk": "A lonely period without obvious allies",
                    "support_warning": "Closing your heart because you feel isolated",
                    "guide": {
                        "love": "Open up to someone who understands:\n• Loneliness is temporary.",
                        "career": "Look for allies and support:\n• Let a few good connections matter.",
                        "health": "Build a support system:\n• Let others walk with you.",
                        "finances": "Learn with a trusted financial partner or group:\n• Share accountability.",
                        "relationships": "Value a few sincere friendships:\n• Deepen relationships that support both sides."
                    },
                    "focus": {
                        "love": "When you feel alone, open up to someone safe. One sincere connection can change the whole experience.",
                        "career": "If work feels isolating, look for allies instead of withdrawing. A small number of supporters can be enough.",
                        "health": "Recovery is easier with support from family, friends, or qualified professionals.",
                        "finances": "A trusted adviser or learning group can make financial decisions steadier and less isolating.",
                        "relationships": "A few reliable relationships are more valuable than a large circle. Deepen the ones that truly support you."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Misunderstanding begins to clear and the gap becomes easier to cross. Take the first step toward repair; someone you saw as an opponent may simply have felt unheard.",
                    "main_state": "Reconciliation that brings a closer bond",
                    "main_strategy": "Move forward and actively repair the relationship",
                    "support_risk": "Some tension still remains unspoken",
                    "support_warning": "Waiting for every discomfort to disappear before reaching out",
                    "guide": {
                        "love": "Cross the gap and speak honestly:\n• Let shared intent rebuild trust.",
                        "career": "Clear old misunderstandings:\n• Deepen cooperation.",
                        "health": "Record what is working:\n• Turn progress into a habit.",
                        "finances": "Standardize what works:\n• Make success repeatable.",
                        "relationships": "Stop counting old offenses:\n• Use the lesson to understand sooner next time."
                    },
                    "focus": {
                        "love": "Once a misunderstanding clears, speak honestly and rebuild from the shared intention that was there all along.",
                        "career": "Use a breakthrough in understanding to deepen cooperation and resolve old friction.",
                        "health": "When a health approach starts working, record what helped and make it sustainable.",
                        "finances": "When a financial strategy works, identify the repeatable parts instead of assuming one win will continue automatically.",
                        "relationships": "When a relationship repairs, stop keeping score. Carry the lesson forward by asking sooner and assuming less."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Suspicion can make a neutral person look hostile. Check the facts before acting on fear; what worries you may be an assumption, not reality.",
                    "main_state": "Clarity that comes from releasing suspicion",
                    "main_strategy": "Drop bias and look again at the other person's intent",
                    "support_risk": "Jumping to conclusions",
                    "support_warning": "Pushing away sincere people through excessive defensiveness",
                    "guide": {
                        "love": "If the relationship is truly over, part with respect:\n• Let both sides move forward.",
                        "career": "End an unworkable partnership calmly:\n• Leave room for future respect.",
                        "health": "Accept when a method is not working:\n• Try a better direction.",
                        "finances": "Cut losses rationally:\n• Let the lesson protect future decisions.",
                        "relationships": "Say goodbye without resentment:\n• Make room for new connections."
                    },
                    "focus": {
                        "love": "If a relationship truly cannot be repaired, ending it with respect can be kinder than forcing it to continue.",
                        "career": "When cooperation no longer works, close it cleanly, document the lesson, and avoid unnecessary hostility.",
                        "health": "If a treatment is clearly ineffective, accept the evidence and discuss a more suitable option.",
                        "finances": "When an investment has failed, stop adding money out of pride. Take the lesson and move on.",
                        "relationships": "If a relationship cannot be repaired, end it respectfully rather than extending resentment."
                    }
                }
            },
            "jian": {
                "1": {
                    "name": "Beginning",
                    "text": "You sense danger ahead, so stop before entering it. Stepping back now is judgment, not weakness. Observe first and move when conditions improve.",
                    "main_state": "Risk avoided by stopping in time",
                    "main_strategy": "Wait when the situation looks wrong instead of forcing it",
                    "support_risk": "The urge to prove yourself by continuing",
                    "support_warning": "Pushing forward out of pride when the signs say stop",
                    "guide": {
                        "love": "Set the dispute aside and protect what still works:\n• Give both sides time.",
                        "career": "Pause and assess the real difficulty:\n• Prepare better before acting.",
                        "health": "Stop forcing your body and recover:\n• Do not rush back to full intensity.",
                        "finances": "Stay flexible and observe:\n• Avoid panic selling or stubborn averaging down.",
                        "relationships": "Pause before another difficult conversation:\n• Let emotion settle."
                    },
                    "focus": {
                        "love": "When the relationship is stuck, work first on what you can agree on. A pause can create room for a better conversation later.",
                        "career": "When every path is blocked, stop and assess rather than spending more resources blindly.",
                        "health": "If the body is struggling, rest fully before returning to the previous load.",
                        "finances": "In a difficult market, preserve flexibility. Do not act from panic or wounded pride.",
                        "relationships": "When communication stalls, a pause may help more than another immediate explanation."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "You are carrying a difficult responsibility for something larger than yourself. The burden is real, but the effort has purpose.",
                    "main_state": "Selfless effort that will eventually be recognized",
                    "main_strategy": "Do what is right without demanding immediate reward",
                    "support_risk": "Feeling that you are carrying more than your share",
                    "support_warning": "Abandoning a necessary responsibility because it feels unfair",
                    "guide": {
                        "love": "Let trusted people support you:\n• Do not carry everything alone.",
                        "career": "Tell managers or coworkers where help is needed:\n• Combine resources.",
                        "health": "Use a coordinated professional team:\n• Find the right plan.",
                        "finances": "Explain the problem honestly and ask for help:\n• Do not let pride isolate you.",
                        "relationships": "Let trusted people know what is happening:\n• Ask for support directly."
                    },
                    "focus": {
                        "love": "Hard relationships are easier when you let trusted people support you rather than carrying all the pressure alone.",
                        "career": "When a project is blocked, ask for resources and expertise instead of hiding the difficulty.",
                        "health": "A health plateau may need coordinated input from qualified professionals rather than more self-experimenting.",
                        "finances": "Financial trouble is easier to solve when you describe it honestly and seek appropriate advice or support.",
                        "relationships": "People who care about you often want the chance to help. Let them know what you need."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "More resistance lies ahead. Instead of pushing outward, return to your own base and regroup with the people and resources already around you.",
                    "main_state": "A period of turning inward to recover and regroup",
                    "main_strategy": "Pause external expansion and rebuild strength inside",
                    "support_risk": "Reluctance to give up an outside opportunity",
                    "support_warning": "Continuing to push a blocked direction because you cannot let go",
                    "guide": {
                        "love": "Clarify your limits and expectations:\n• Pause before deciding.",
                        "career": "Look for a third option:\n• Neither retreat blindly nor force ahead.",
                        "health": "Start with safe, small steps:\n• Get professional guidance for a gentle plan.",
                        "finances": "Return to your goals and risk tolerance:\n• Do not let indecision control you.",
                        "relationships": "Clarify your core needs and boundaries:\n• Choose from conviction, not guilt."
                    },
                    "focus": {
                        "love": "If both staying and leaving feel difficult, pause and clarify what the relationship must protect before deciding.",
                        "career": "When neither pushing nor retreating works, redesign the approach, negotiate conditions, or find a third path.",
                        "health": "If activity feels risky, start with a safe level and get qualified guidance rather than choosing between all or nothing.",
                        "finances": "When an investment decision feels paralyzing, return to your goals and risk limits, then follow a preset rule.",
                        "relationships": "Do not stay from guilt or leave from anger. Take enough time to make a choice that matches your real needs."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Going alone will deepen the difficulty. Step back and form alliances. Asking for help is not weakness; it increases your options.",
                    "main_state": "A stronger path through partnership",
                    "main_strategy": "Actively seek allies and cooperation",
                    "support_risk": "Wanting to solve everything alone",
                    "support_warning": "Refusing outside help out of pride",
                    "guide": {
                        "love": "Start an honest conversation:\n• Bring sincerity, not blame.",
                        "career": "Offer a new proposal:\n• Break the deadlock through action.",
                        "health": "Try a new appropriate approach:\n• Keep moving toward recovery.",
                        "finances": "Negotiate and look for new income options:\n• Do not wait for a miracle.",
                        "relationships": "Break the silence first:\n• Show goodwill and care."
                    },
                    "focus": {
                        "love": "If the relationship is frozen, choose a calm moment and start a sincere conversation focused on solving the problem.",
                        "career": "When work is stuck, propose a different path, contact key people, or change the communication method.",
                        "health": "If recovery has stalled, discuss new options or a second opinion rather than repeating what clearly is not helping.",
                        "finances": "When finances are stuck, renegotiate terms, seek income options, and adjust strategy instead of waiting passively.",
                        "relationships": "In a cold conflict, a small first gesture of goodwill can reopen the door."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Support appears during a difficult stretch because people trust the way you have carried yourself. Accept help; shared strength makes the obstacle smaller.",
                    "main_state": "A timely opportunity created by helpful allies",
                    "main_strategy": "Open yourself to sincere support",
                    "support_risk": "Feeling awkward about receiving help",
                    "support_warning": "Turning away people who genuinely want to help",
                    "guide": {
                        "love": "Value the person who stays through difficulty:\n• Let hardship deepen trust.",
                        "career": "Support the people fighting beside you:\n• Let hardship build teamwork.",
                        "health": "Let family and professionals join the recovery:\n• Work as a team.",
                        "finances": "Appreciate help during hard times:\n• Keep looking for a practical way out.",
                        "relationships": "Value friends who show up in difficulty:\n• Become someone worthy of the same trust."
                    },
                    "focus": {
                        "love": "Someone who stays through a difficult relationship deserves attention. Shared hardship can become a strong foundation when both keep working together.",
                        "career": "Teams that survive hard periods together often build deep trust. Support the people who are still contributing.",
                        "health": "Let supportive people and qualified professionals take part in your recovery rather than isolating yourself.",
                        "finances": "Appreciate practical help during financial stress while continuing to work on a sustainable solution.",
                        "relationships": "Hard times reveal dependable friends. Thank them, and carry that same reliability into future relationships."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The path ahead is too dangerous to force. Turn toward experienced guidance. A detour with good advice may be faster than stubborn persistence.",
                    "main_state": "A broader future gained through humble guidance",
                    "main_strategy": "Learn from someone with more experience",
                    "support_risk": "Wanting to handle everything yourself",
                    "support_warning": "Avoiding experienced advice out of pride",
                    "guide": {
                        "love": "If the bond is truly over, let go with courage:\n• Give both sides a fresh start.",
                        "career": "Admit when the path no longer works:\n• Change direction.",
                        "health": "Accept when a treatment is ineffective:\n• Discuss a better option.",
                        "finances": "Accept a failed investment and cut losses:\n• Redirect remaining resources.",
                        "relationships": "Say goodbye with gratitude:\n• Let both sides move on."
                    },
                    "focus": {
                        "love": "If every reasonable effort has failed, letting go can stop further harm and allow both people to begin again.",
                        "career": "When a direction has no viable future, change course instead of staying only because you already invested effort.",
                        "health": "If a treatment is clearly not working, accept the evidence and discuss another path with qualified professionals.",
                        "finances": "When an investment cannot reasonably recover, cut losses according to your plan and move resources to a sounder use.",
                        "relationships": "When a relationship has truly ended, part with gratitude rather than holding on from fear of being alone."
                    }
                }
            },
            "jie": {
                "1": {
                    "name": "Beginning",
                    "text": "The hard period has just lifted. Enjoy the relief before rushing into the next task. Rest enough to regain a clear mind.",
                    "main_state": "A period of settling and rest after difficulty",
                    "main_strategy": "Recover quietly without rushing into action",
                    "support_risk": "The urge to make up for lost time immediately",
                    "support_warning": "Skipping needed recovery because you want to feel productive again",
                    "guide": {
                        "love": "Acknowledge your feelings and allow grief:\n• Save your love for people who value it.",
                        "career": "Review your strengths and seek a better fit:\n• Leave an unsuitable environment.",
                        "health": "Release habits that damage your health:\n• Admit what needs to change.",
                        "finances": "Let go of sunk costs and cut losses early:\n• Redirect resources.",
                        "relationships": "Stop trying to please everyone:\n• Release draining relationships."
                    },
                    "focus": {
                        "love": "If affection is not returned, continuing to wait may deepen the hurt. Acknowledge the loss, then make room for someone who can meet you.",
                        "career": "If an environment consistently blocks your strengths, prepare for a better fit instead of enduring it indefinitely.",
                        "health": "When a habit clearly harms your health, letting it go creates room for a better balance.",
                        "finances": "If a financial decision has failed, do not let sunk cost keep you in it. Redirect what remains.",
                        "relationships": "You do not need every relationship to continue. Release the ones that only drain you and protect room for meaningful people."
                    }
                },
                "2": {
                    "name": "Grounding",
                    "text": "Several hidden problems can now be dealt with one by one. Use clear judgment and remove the risks carefully rather than rushing through them.",
                    "main_state": "A clearer situation created by removing hidden risks fairly",
                    "main_strategy": "Handle hidden problems with a clear and upright approach",
                    "support_risk": "A complex situation that requires careful distinction",
                    "support_warning": "Rushing to finish and overlooking important details",
                    "guide": {
                        "love": "Keep healthy caution even when excited:\n• Invest trust gradually.",
                        "career": "Protect your rights and keep records:\n• Stay out of unnecessary conflict.",
                        "health": "Notice small changes early:\n• Be cautious with unclear health claims.",
                        "finances": "Be wary of unusually high returns:\n• Research before acting.",
                        "relationships": "Let time verify sincerity:\n• Do not trust too fast."
                    },
                    "focus": {
                        "love": "Protecting yourself is not coldness. Let trust grow from observation rather than enthusiasm alone.",
                        "career": "Keep records, protect your interests, and be cautious with promises that sound too easy.",
                        "health": "Pay attention to small changes and be careful with unverified health information or products.",
                        "finances": "High returns and pressure are warning signs. Verify the facts before committing money.",
                        "relationships": "Let consistency over time show who is trustworthy instead of deciding from first impressions."
                    }
                },
                "3": {
                    "name": "Challenge",
                    "text": "You may be carrying a role or image that exceeds your current capacity. Drop the performance and build the ability needed to support the position.",
                    "main_state": "Stability gained by staying grounded and realistic",
                    "main_strategy": "Return to humility and act within your actual capacity",
                    "support_risk": "The temptation to show off or overreach",
                    "support_warning": "Taking on more than you can handle out of pride",
                    "guide": {
                        "love": "Notice the kind of partners you repeatedly choose:\n• Heal the need behind the pattern.",
                        "career": "Review patterns of passivity or blame:\n• Take responsibility for your next move.",
                        "health": "Find the reason you keep delaying care:\n• Understand yourself instead of attacking yourself.",
                        "finances": "Examine beliefs that keep money stuck:\n• Face the numbers directly.",
                        "relationships": "Explore recurring relationship patterns:\n• Change the pattern at its source."
                    },
                    "focus": {
                        "love": "If the same relationship pain keeps repeating, examine what you are drawn to and what treatment you keep accepting.",
                        "career": "If work problems keep repeating, review your own patterns as well as the environment. Responsibility gives you more options.",
                        "health": "If you keep postponing care, identify the real barrier. Understanding it is more useful than self-criticism.",
                        "finances": "Recurring money trouble may come from avoidance or beliefs as much as arithmetic. Face the numbers and the pattern together.",
                        "relationships": "If you repeatedly attract the same harmful dynamic, explore what keeps the cycle familiar and change it at the source."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Cut the first small tie that keeps you stuck. Once you begin releasing an old pattern, helpful people can support the change.",
                    "main_state": "A shift toward new support through releasing old habits",
                    "main_strategy": "Break the pattern that drains you and accept better support",
                    "support_risk": "Struggling to let go because the old pattern is familiar",
                    "support_warning": "Keeping something harmful only because you are used to it",
                    "guide": {
                        "love": "Stop comparing your relationship with others:\n• Value your own pace.",
                        "career": "Focus on your own growth:\n• Comparison creates needless anxiety.",
                        "health": "Do not compare bodies or performance:\n• Respect your pace.",
                        "finances": "Appreciate what you already have:\n• Focus on your own targets.",
                        "relationships": "Value the friendships you have:\n• Let contentment deepen connection."
                    },
                    "focus": {
                        "love": "Your relationship does not need to resemble someone else's. Notice what you already share and build from there.",
                        "career": "Career timelines differ. Keep improving your own work instead of measuring every step against others.",
                        "health": "Bodies differ. Measure health by your own progress and consistency, not someone else's appearance or performance.",
                        "finances": "Financial satisfaction comes from progress toward your own goals, not from comparing totals with other people.",
                        "relationships": "A quiet but reliable circle can be richer than a busy social life. Appreciate what is already genuine."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You have removed a major source of trouble with decisive action. Use that problem-solving ability carefully and turn it toward what lasts.",
                    "main_state": "A clear situation created by decisive action",
                    "main_strategy": "Solve the issue that truly needs solving",
                    "support_risk": "Resistance from people who are still undecided",
                    "support_warning": "Delaying a needed decision because others remain unclear",
                    "guide": {
                        "love": "Show your feelings honestly:\n• Let sincerity replace strategy.",
                        "career": "Build trust through real contribution:\n• Let your work speak.",
                        "health": "Track health habits honestly:\n• Face your actual condition.",
                        "finances": "Record finances accurately:\n• Do not game the numbers.",
                        "relationships": "Treat people sincerely without calculating every return:\n• Let trust grow from honesty."
                    },
                    "focus": {
                        "love": "Sincere affection is stronger than tactics. Say what you mean and care without games.",
                        "career": "Trust grows from useful contribution and honest interaction, not from networking for appearance.",
                        "health": "Be truthful about your habits and symptoms. Accurate observation is the basis of better decisions.",
                        "finances": "Record gains and losses honestly. Clear numbers are more useful than a comforting story.",
                        "relationships": "Treat people sincerely instead of constantly calculating advantage. Honesty attracts more reliable relationships."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The final hidden problem becomes clear enough to address directly. Focus on the root cause rather than trying to solve everything at once.",
                    "main_state": "Lasting clarity from resolving the core problem",
                    "main_strategy": "Identify the key issue and solve it directly",
                    "support_risk": "The need for courage and precise judgment",
                    "support_warning": "Losing focus by trying to handle every detail at once",
                    "guide": {
                        "love": "Break the old relationship pattern:\n• Try a genuinely different way.",
                        "career": "Use a new strategy when the old one is exhausted:\n• Think beyond the default.",
                        "health": "Integrate appropriate expert perspectives:\n• Stay open to evidence-based alternatives.",
                        "finances": "Learn new tools or income models:\n• Use creative thinking with risk controls.",
                        "relationships": "Change the communication pattern:\n• Stop repeating the same cycle."
                    },
                    "focus": {
                        "love": "If the same relationship pattern keeps failing, more effort in the same form may not help. Change the way you relate.",
                        "career": "When established methods no longer work, test a different strategy rather than repeating them automatically.",
                        "health": "If standard care is not helping, discuss other legitimate options with qualified professionals and keep an open but evidence-based mind.",
                        "finances": "A financial dead end may require new skills, tools, or income models, but innovation still needs sound risk control.",
                        "relationships": "When the same interaction keeps producing the same conflict, change the pattern rather than replaying it."
                    }
                }
            },
            "sun": {
                "1": {
                    "name": "Sprout",
                    "text": "Offer help when it is truly needed, but first check what you can afford to give. Support has value when it does not leave you depleted.",
                    "main_state": "A grounded sense of helping within your means",
                    "main_strategy": "Help where you can without overextending yourself",
                    "support_risk": "The urge to help beyond your capacity",
                    "support_warning": "Draining yourself because you want to be useful",
                    "guide": {
                        "love": "Confirm the other person also adjusts:\n• Avoid one-sided sacrifice.",
                        "career": "Build your skills:\n• Prepare for the right opportunity.",
                        "health": "Choose health for yourself:\n• Do not change only to please others.",
                        "finances": "Give within your means:\n• Do not let obligation exceed your capacity.",
                        "relationships": "Look for mutual effort:\n• Express your own needs."
                    },
                    "focus": {
                        "love": "Make sure both people are willing to adjust. Mutual care is healthier than one-sided sacrifice.",
                        "career": "Build your ability instead of chasing a role that is not ready for you. Prepare for the right opportunity.",
                        "health": "Change for your own health, not to satisfy someone else's expectations.",
                        "finances": "Give, lend, or donate only within your means. Generosity should not destabilize your life.",
                        "relationships": "Check whether the relationship is mutual. Express your own needs instead of always accommodating."
                    }
                },
                "2": {
                    "name": "Root",
                    "text": "Protect what you already have instead of chasing more. Holding your principles and limits can be wiser than making another sacrifice.",
                    "main_state": "Steady support that protects your foundation",
                    "main_strategy": "Keep your principles while offering sustainable support",
                    "support_risk": "Wanting to sacrifice your own foundation for others",
                    "support_warning": "Losing your footing in order to please or help",
                    "guide": {
                        "love": "Protect what you already value:\n• Do not chase novelty.",
                        "career": "Keep your principles and long-term direction:\n• Avoid shortcuts.",
                        "health": "Refuse convenient but harmful habits:\n• Keep clear health boundaries.",
                        "finances": "Resist impulse spending and speculation:\n• Practice self-control.",
                        "relationships": "Decline what crosses your boundaries:\n• Let consistency earn respect."
                    },
                    "focus": {
                        "love": "Protect the relationship you already value. Do not trade lasting trust for temporary novelty.",
                        "career": "Hold to your principles and long-term direction even when shortcuts look attractive.",
                        "health": "Set firm limits around convenient but harmful habits. Each refusal protects your health.",
                        "finances": "Resist impulse spending and speculation. Self-control protects long-term wealth.",
                        "relationships": "Keep your principles and decline activities that cross your boundaries, even if others join in."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "The quality of connection matters more than the number of people around you. Let draining or mismatched relationships fall away so stronger ones have room to grow.",
                    "main_state": "Deeper connection through focusing on fewer relationships",
                    "main_strategy": "Put your energy into the people who truly matter",
                    "support_risk": "Trying to satisfy everyone at once",
                    "support_warning": "Losing depth because you are spread too thin",
                    "guide": {
                        "love": "Recognize when your effort has reached its limit:\n• Leave one-sided harm.",
                        "career": "Separate contribution from exploitation:\n• Set a stopping point.",
                        "health": "Put health back on the priority list:\n• Stop draining yourself.",
                        "finances": "Protect your own finances first:\n• Set a limit on giving.",
                        "relationships": "Stop one-sided giving:\n• Restore balance."
                    },
                    "focus": {
                        "love": "If you are the only one repairing the relationship, recognize the limit of your effort. Leaving one-sided harm can be an act of self-respect.",
                        "career": "Separate necessary contribution from being used. Set a stopping point when sacrifice is no longer valued.",
                        "health": "Do not keep trading health for work or other people. Put your body back on the priority list.",
                        "finances": "Help others only after protecting your own financial stability. Set a clear limit on what you can give.",
                        "relationships": "Stop treating one-sided giving as normal. Set boundaries so the relationship can become more balanced."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Admitting a flaw and correcting it can invite support rather than rejection. Drop defensiveness, adjust honestly, and let people see that you are willing to grow.",
                    "main_state": "Growth that comes from facing your own weaknesses",
                    "main_strategy": "Acknowledge what needs improvement and adjust",
                    "support_risk": "Resistance to admitting you may be wrong",
                    "support_warning": "Protecting pride instead of making a needed change",
                    "guide": {
                        "love": "Trust sincere care:\n• Keep communication open.",
                        "career": "Accept recognition and feedback:\n• Use it as motivation.",
                        "health": "Celebrate real progress:\n• Reinforce healthy change.",
                        "finances": "Acknowledge progress:\n• Keep long-term goals funded.",
                        "relationships": "Express appreciation:\n• Deepen mutual relationships."
                    },
                    "focus": {
                        "love": "When care is returned sincerely, let yourself trust it. Keep communication open instead of testing the relationship.",
                        "career": "When your work is recognized, accept the feedback and keep building on it.",
                        "health": "Notice and reward real progress. Positive reinforcement can make healthy change easier to sustain.",
                        "finances": "Acknowledge financial progress without losing discipline. Direct part of the gain toward long-term goals and allow a reasonable reward.",
                        "relationships": "When care is mutual, express appreciation and deepen the connection."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Past effort is returning as a major benefit. Receive it without guilt, recognize the work behind it, and share credit or support with those who helped you.",
                    "main_state": "An unexpectedly strong return on past effort",
                    "main_strategy": "Receive good fortune with gratitude",
                    "support_risk": "Feeling undeserving or unable to trust the good result",
                    "support_warning": "Rejecting what you have earned because you feel unworthy",
                    "guide": {
                        "love": "Show love and appreciation:\n• Let the other person feel valued.",
                        "career": "Repay trust with steady work:\n• Take on responsibility with humility.",
                        "health": "Protect good health:\n• Maintain it through daily care.",
                        "finances": "Save, invest, and share wisely:\n• Respect the value of each dollar.",
                        "relationships": "Express gratitude and return support:\n• Protect valuable friendships."
                    },
                    "focus": {
                        "love": "Show appreciation openly and invest in the relationship. Feeling valued strengthens trust.",
                        "career": "When you receive trust or responsibility, repay it with steady work rather than pride.",
                        "health": "Treat good health as something worth maintaining through routine care.",
                        "finances": "Manage gains with balance: save some, invest some, and share some rather than spending it all.",
                        "relationships": "Show gratitude to good friends and return support when they need it."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The highest form of giving does not destroy the giver. Create value in ways that strengthen both you and others instead of relying on sacrifice.",
                    "main_state": "Long-term benefit that does not damage your foundation",
                    "main_strategy": "Think bigger and create value sustainably",
                    "support_risk": "Staying small to protect minor short-term gains",
                    "support_warning": "Missing larger possibilities by guarding small advantages",
                    "guide": {
                        "love": "Ask whether love is nourishing or draining:\n• Keep healthy boundaries.",
                        "career": "Protect work-life boundaries:\n• Refuse unsustainable demands.",
                        "health": "Do not force your body beyond its limits:\n• Protect your foundation.",
                        "finances": "Leave reasonable room for life:\n• Keep the plan sustainable.",
                        "relationships": "Do not say yes from guilt:\n• Let real friends respect your limits."
                    },
                    "focus": {
                        "love": "Love should not require endless self-erasure. Set limits and care for yourself so you can give sustainably.",
                        "career": "Protect work-life boundaries and refuse demands that make your effort impossible to sustain.",
                        "health": "Do not force your body beyond its limits. Health supports everything else you want to do.",
                        "finances": "A financial plan must leave room to live. Sustainable discipline works better than constant deprivation.",
                        "relationships": "Do not agree to every request out of guilt. Healthy friends can respect your limits."
                    }
                }
            },
            "yi_increase": {
                "1": {
                    "name": "Sprout",
                    "text": "Conditions are favorable for beginning something meaningful. If the direction is sound, do not let hesitation waste a rare opening.",
                    "main_state": "A strong opening created by timely action",
                    "main_strategy": "Take responsibility and use the momentum",
                    "support_risk": "Hesitating instead of trying",
                    "support_warning": "Missing the opportunity because you fear failure",
                    "guide": {
                        "love": "Do one good thing for the relationship today:\n• Replace waiting with action.",
                        "career": "Act on a useful improvement now:\n• Let small wins build.",
                        "health": "Start the health change today:\n• Do not wait for a perfect date.",
                        "finances": "After proper review, act decisively:\n• Do not hesitate without reason.",
                        "relationships": "Express what matters today:\n• Do not let the moment pass."
                    },
                    "focus": {
                        "love": "Do one useful thing for the relationship today. Action can begin the repair or growth you have been waiting for.",
                        "career": "Act on a clear improvement now. Small useful changes can create a larger chain of progress.",
                        "health": "Start today rather than waiting for a perfect date. A walk, better meal, or earlier bedtime is enough to begin.",
                        "finances": "When an opportunity has been properly evaluated, act without unnecessary hesitation.",
                        "relationships": "Express thanks or repair a connection now rather than waiting for a better moment."
                    }
                },
                "2": {
                    "name": "Root",
                    "text": "Support, resources, and opportunity are gathering around you. Accept them with humility and use them where they can create lasting value.",
                    "main_state": "Good fortune sustained by staying on the right path",
                    "main_strategy": "Stay humble and make good use of support",
                    "support_risk": "Becoming overconfident as things go well",
                    "support_warning": "Forgetting gratitude and humility because success feels easy",
                    "guide": {
                        "love": "Give sincerely without keeping score:\n• Let honesty stand the test of time.",
                        "career": "Use legitimate methods:\n• Do not harm others or cut unethical corners.",
                        "health": "Choose evidence-based, sustainable care:\n• Avoid dubious shortcuts.",
                        "finances": "Build wealth honestly:\n• Keep gains you can live with.",
                        "relationships": "Do not exploit trust:\n• Let integrity build credibility."
                    },
                    "focus": {
                        "love": "Treat the relationship with sincerity rather than keeping score or testing each other. Honest care lasts longer.",
                        "career": "Pursue success without harming others or taking unethical shortcuts. Clean methods create sturdier results.",
                        "health": "Choose evidence-based, sustainable care instead of extreme methods or dubious shortcuts.",
                        "finances": "Build wealth honestly and legally. Slower gains are still better when you can keep them with peace of mind.",
                        "relationships": "Do not exploit trust or take advantage of people. Integrity builds durable social credit."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Use your gains to help where the need is real, even if it costs something. Well-placed generosity can turn a difficult situation around.",
                    "main_state": "A turning point created by using resources well",
                    "main_strategy": "Use goodwill honestly and where it matters",
                    "support_risk": "A difficult or complicated situation",
                    "support_warning": "Holding back help because the situation feels hard",
                    "guide": {
                        "love": "Verify before suspicion takes over:\n• Give the other person a chance to explain.",
                        "career": "Check the facts before responding:\n• Do not act on rumors.",
                        "health": "Verify health information:\n• Use qualified sources.",
                        "finances": "Question claims that sound too good:\n• Verify source and risk.",
                        "relationships": "Confirm before believing:\n• Do not spread unverified stories."
                    },
                    "focus": {
                        "love": "If something makes you suspicious, verify it before letting fear control the relationship.",
                        "career": "Check facts before acting on rumors or uncertain information at work.",
                        "health": "Verify alarming health claims and rely on qualified sources rather than online panic.",
                        "finances": "Treat inside tips and fast-money claims with skepticism. Verify the source and understand the risk first.",
                        "relationships": "Ask the person involved before believing or repeating a rumor."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Your advice carries weight when it serves the larger good. Keep communicating honestly and help different sides move toward useful change.",
                    "main_state": "Growing influence through fair and trusted advice",
                    "main_strategy": "Coordinate people fairly and help change move forward",
                    "support_risk": "The effort required to align different sides",
                    "support_warning": "Giving up on an important change because coordination is tedious",
                    "guide": {
                        "love": "Put energy into what helps the relationship grow:\n• Drop pride where needed.",
                        "career": "Choose growth for both you and the team:\n• Let the decision benefit more than one person.",
                        "health": "Choose what truly helps your body:\n• Release comfortable but harmful habits.",
                        "finances": "Choose long-term benefit:\n• Let go of impulse spending.",
                        "relationships": "Have the honest conversation:\n• Let truth strengthen the relationship."
                    },
                    "focus": {
                        "love": "Choose what actually helps the relationship grow, even if it means dropping pride or a minor preference.",
                        "career": "Choose the direction that lets both you and the team grow instead of optimizing only for personal gain.",
                        "health": "Choose what truly benefits your body, even when the healthier option takes more effort.",
                        "finances": "Favor long-term benefit over short-term pleasure. Give assets priority over impulse spending.",
                        "relationships": "Have the difficult conversation when honesty will improve the relationship more than surface peace."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Lead with sincere goodwill and concern for others. When your growth helps more people, support tends to gather around you rather than resist you.",
                    "main_state": "Trust and support earned through sincere generosity",
                    "main_strategy": "Treat others with compassion and generosity",
                    "support_risk": "The effort required to care for others",
                    "support_warning": "Expecting immediate repayment for everything you give",
                    "guide": {
                        "love": "Wish the other person well:\n• Give without demanding immediate repayment.",
                        "career": "Share knowledge and help others:\n• Let support strengthen the team.",
                        "health": "Treat yourself with kindness:\n• Make healthy care easier to sustain.",
                        "finances": "Support worthwhile needs when you can:\n• Give without demanding instant return.",
                        "relationships": "Celebrate others sincerely:\n• Help when it matters."
                    },
                    "focus": {
                        "love": "Want the other person to do well without demanding immediate repayment. Genuine goodwill often returns in unexpected ways.",
                        "career": "Share knowledge and help colleagues get unstuck. A stronger team can strengthen your own path as well.",
                        "health": "Treat caring for yourself as an act of kindness. Build habits with encouragement rather than punishment.",
                        "finances": "When you can, use some resources to support worthwhile causes or people without expecting instant return.",
                        "relationships": "Celebrate your friends' success sincerely and help when they genuinely need it."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Growth becomes unstable when you only take and never give back. Share value and support others so success does not isolate you.",
                    "main_state": "Abundance strengthened by sharing",
                    "main_strategy": "Share benefits instead of keeping everything for yourself",
                    "support_risk": "Wanting to keep all advantages for yourself",
                    "support_warning": "Losing support through greed or one-sided gain",
                    "guide": {
                        "love": "Love does not require losing yourself:\n• Balance giving and self-care.",
                        "career": "Set limits on your energy:\n• Keep effort sustainable.",
                        "health": "Do not treat health as unlimited:\n• Balance goals with recovery.",
                        "finances": "Protect your own base before giving more:\n• Set financial boundaries.",
                        "relationships": "Allow yourself to receive care:\n• Build mutual support."
                    },
                    "focus": {
                        "love": "Do not confuse love with endless sacrifice. Keep enough space to care for yourself as well.",
                        "career": "Set limits on effort so your contribution remains sustainable instead of burning you out.",
                        "health": "Do not treat the body as an unlimited resource. Balance ambition with recovery.",
                        "finances": "Help others only after protecting your own financial base. Generosity needs boundaries.",
                        "relationships": "Allow yourself to receive care too. Strong relationships support both directions."
                    }
                }
            },
            "guai": {
                "1": {
                    "name": "Sprout",
                    "text": "Your resolve is strong, but you may not be ready to act yet. Build enough strength and understand the situation before confronting the problem.",
                    "main_state": "Calm action after enough preparation",
                    "main_strategy": "Know your capacity and prepare before acting",
                    "support_risk": "The urge to prove yourself immediately",
                    "support_warning": "Acting too early out of anger or moral certainty",
                    "guide": {
                        "love": "Face the issue early:\n• Do not decide at peak emotion.",
                        "career": "Confirm facts and evidence first:\n• Use reason, not force.",
                        "health": "Prepare before changing the habit:\n• Build a support system.",
                        "finances": "Act early on a problem position:\n• Review before deciding.",
                        "relationships": "Raise boundary issues early and calmly:\n• Leave room for improvement."
                    },
                    "focus": {
                        "love": "Address the problem early, but do not decide in the heat of emotion. Be firm without escalating the conflict.",
                        "career": "Speak up about clear problems, but first make sure your facts and position are solid.",
                        "health": "Prepare before trying to break a bad habit: understand the challenge and build support around the change.",
                        "finances": "Deal with a troubled investment or expense early, but confirm the facts before acting.",
                        "relationships": "Address crossed boundaries early and calmly so a small problem does not become a blowup."
                    }
                },
                "2": {
                    "name": "Root",
                    "text": "You are prepared and alert enough to handle sudden trouble. Keep that readiness even when things look calm.",
                    "main_state": "Stability maintained through alertness",
                    "main_strategy": "Prepare thoroughly and stay aware of risk",
                    "support_risk": "A hidden challenge or backlash",
                    "support_warning": "Relaxing too much because the surface looks calm",
                    "guide": {
                        "love": "Notice warning signs:\n• Confirm facts before acting.",
                        "career": "Stay alert and prepare alternatives:\n• Act from readiness.",
                        "health": "Track unusual signals:\n• Seek qualified evaluation.",
                        "finances": "Review details and creditworthiness:\n• Do not ignore risk signs.",
                        "relationships": "Watch for consistency:\n• Balance caution with trust."
                    },
                    "focus": {
                        "love": "Take uneasy signals seriously, but verify the facts before acting.",
                        "career": "Stay alert to changes and prepare backup plans before a problem becomes urgent.",
                        "health": "Observe and record unusual symptoms, then seek qualified evaluation when needed.",
                        "finances": "Review risk signals, contract details, and the other party's reliability before committing.",
                        "relationships": "Watch whether words and actions match. Stay alert without becoming suspicious of everything."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Trying to solve everything alone can expose you to hidden risk. Hold to what is right, but do not confuse courage with isolation.",
                    "main_state": "Peace from standing by what is right",
                    "main_strategy": "Keep your position without being ruled by temporary criticism",
                    "support_risk": "Loneliness or being misunderstood",
                    "support_warning": "Abandoning a sound position because others disapprove",
                    "guide": {
                        "love": "Be firm and respectful:\n• Leave room for dignity.",
                        "career": "State your case and hear other views:\n• Aim for real agreement.",
                        "health": "Work with yourself, not against yourself:\n• Replace self-blame with steady effort.",
                        "finances": "Negotiate calmly:\n• Stay open to reasonable options.",
                        "relationships": "Correct the issue, not the person:\n• Keep feedback humane."
                    },
                    "focus": {
                        "love": "Face the issue firmly but respectfully. Protect the other person's dignity and replace attack with communication.",
                        "career": "State your position clearly while listening to disagreement. Being right does not require humiliating others.",
                        "health": "Work with yourself rather than against yourself. Gentle persistence is more useful than harsh self-blame.",
                        "finances": "Negotiate financial disagreements calmly and stay open to reasonable proposals.",
                        "relationships": "Correct behavior without attacking the person. Respect makes feedback easier to hear."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Progress has already cost you something, and forcing more may make it worse. Listen to useful advice and let others guide you where needed.",
                    "main_state": "Humility that comes from accepting sound advice",
                    "main_strategy": "Drop pride and listen carefully to people you trust",
                    "support_risk": "Stubbornness and refusal to be corrected",
                    "support_warning": "Rejecting an important warning because you dislike hearing it",
                    "guide": {
                        "love": "Speak for your feelings:\n• Do not retreat because of reaction.",
                        "career": "Prepare evidence and speak professionally:\n• Stand by what is right.",
                        "health": "Find qualified support:\n• Stay committed to your health path.",
                        "finances": "Stand by a sound decision:\n• Do not let doubt from others replace your judgment.",
                        "relationships": "Speak up for what is right:\n• Let courage encourage others."
                    },
                    "focus": {
                        "love": "Speak for what you feel even if others do not immediately understand. Stay calm and do not shrink from your truth.",
                        "career": "Bring evidence and speak professionally when you need to challenge a problem, even if you are the first to do so.",
                        "health": "Choose the health path you need even without full support around you, and find qualified people who can help.",
                        "finances": "Stand by a sound financial decision even when others question it. Do not follow the crowd just to avoid discomfort.",
                        "relationships": "Speak up for what is right. Courage can reveal who truly supports you and encourage others to act."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Remove the remaining obstacle firmly, but do not become vindictive. Solve the problem without creating unnecessary enemies.",
                    "main_state": "A fair and thorough resolution",
                    "main_strategy": "Remove what must go without acting impulsively",
                    "support_risk": "A deeply rooted problem that is hard to remove",
                    "support_warning": "Delaying because the problem is difficult",
                    "guide": {
                        "love": "Keep your principles even when it is harder:\n• Choose integrity.",
                        "career": "Do not sabotage or steal credit:\n• Take the clean path.",
                        "health": "Use legitimate health methods:\n• Work honestly with your body.",
                        "finances": "Avoid fraud and reckless shortcuts:\n• Build wealth you can stand behind.",
                        "relationships": "Stay out of gossip and attacks:\n• Let character earn trust."
                    },
                    "focus": {
                        "love": "Choose honesty and principle even when the harder path is required. Do not solve relationship problems through harm or manipulation.",
                        "career": "Do not sabotage, steal credit, or violate your standards for an easier win. Clean success lasts longer.",
                        "health": "Use legitimate, evidence-based methods rather than extreme shortcuts.",
                        "finances": "Keep finances legal and ethical. Wealth that depends on deception is not secure.",
                        "relationships": "Do not join gossip or attacks. Let character earn trust over time."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Do not relax just because victory looks close. Stay alert through the final step so the problem does not return at the last moment.",
                    "main_state": "Alertness maintained until the very end",
                    "main_strategy": "Finish the job before relaxing",
                    "support_risk": "Wanting to celebrate before the work is truly done",
                    "support_warning": "Becoming careless at the final stage",
                    "guide": {
                        "love": "Release unnecessary control:\n• Balance firmness with warmth.",
                        "career": "Listen and compromise where appropriate:\n• Know when to let go.",
                        "health": "Allow imperfection:\n• Do not let health goals dominate life.",
                        "finances": "Do not react emotionally to every gain or loss:\n• Let money serve life.",
                        "relationships": "Give others room to lead:\n• Respect different approaches."
                    },
                    "focus": {
                        "love": "Do not try to control the relationship into changing. Balance conviction with softness and leave room for the other person's choice.",
                        "career": "Listen, compromise where appropriate, and give the team room to participate rather than controlling every decision.",
                        "health": "Allow imperfection in the process. Health should support life, not become another source of pressure.",
                        "finances": "Do not let financial targets control your emotions or your entire life. Keep money in service of living.",
                        "relationships": "Make space for other people to lead and do things differently. Flexible influence often works better than control."
                    }
                }
            },
            "gou": {
                "1": {
                    "name": "Sprout",
                    "text": "A strong temptation or sudden influence may pull you off course. Stop first, set a boundary, and decide only after you can see clearly.",
                    "main_state": "Caution that prevents a sudden risk",
                    "main_strategy": "Set firm boundaries and do not get swept along",
                    "support_risk": "The impulse to go with the flow without protection",
                    "support_warning": "Getting pulled in because curiosity overrides caution",
                    "guide": {
                        "love": "Let time test the attraction:\n• Do not commit from loneliness.",
                        "career": "Review the risks behind the offer:\n• Do not accept on excitement alone.",
                        "health": "Question overly good promises:\n• Use legitimate health care.",
                        "finances": "Be cautious with guaranteed-return claims:\n• Verify legitimacy and protect principal.",
                        "relationships": "Let time test sincerity:\n• Protect privacy and boundaries."
                    },
                    "focus": {
                        "love": "Let time test a sudden attraction. Do not make a major commitment just because you feel lonely or excited.",
                        "career": "Examine the risks behind an exciting offer before accepting it.",
                        "health": "Be skeptical of products that promise dramatic results. Check the evidence and source.",
                        "finances": "Treat guaranteed-return claims as a warning. Verify legality and protect your principal.",
                        "relationships": "Let time test a new person's sincerity. Protect privacy and boundaries until trust is earned."
                    }
                },
                "2": {
                    "name": "Root",
                    "text": "You have something useful or promising in hand. Protect it quietly until it is ready instead of exposing it too early.",
                    "main_state": "Security from protecting a promising opportunity",
                    "main_strategy": "Keep what you have private and well managed",
                    "support_risk": "The urge to show or share too soon",
                    "support_warning": "Exposing an immature opportunity because you want recognition",
                    "guide": {
                        "love": "Check the relationship regularly:\n• Handle small issues early.",
                        "career": "Review hidden risks:\n• Prepare backup plans.",
                        "health": "Use preventive care:\n• Watch risks before symptoms grow.",
                        "finances": "Review insurance and concentration:\n• Repair financial weak points early.",
                        "relationships": "Check in with important friends:\n• Clear up small tension early."
                    },
                    "focus": {
                        "love": "Even a stable relationship needs occasional check-ins. Small issues are easier to handle before they grow.",
                        "career": "Review hidden risks and keep contingency plans ready even when work seems stable.",
                        "health": "Use preventive care and regular checkups rather than waiting for symptoms to force action.",
                        "finances": "Review insurance, concentration risk, and creeping expenses before they become larger problems.",
                        "relationships": "Check in with important friends and clear up small misunderstandings early."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You are caught between moving closer and pulling away. Stop forcing progress; deal with the immediate problem first, then decide from a steadier place.",
                    "main_state": "Safety through accepting current limits",
                    "main_strategy": "Respect the limits of the situation instead of forcing movement",
                    "support_risk": "Feeling blocked and unable to move",
                    "support_warning": "Pushing through a boundary simply because you dislike being constrained",
                    "guide": {
                        "love": "Clarify what you truly need:\n• Be honest about your insecurity.",
                        "career": "Separate real growth needs from restlessness:\n• Evaluate before moving.",
                        "health": "Separate real symptoms from information anxiety:\n• Seek qualified evaluation.",
                        "finances": "Do not answer anxiety with high risk:\n• Improve the basics steadily.",
                        "relationships": "Separate real problems from projection:\n• Clarify your own feelings first."
                    },
                    "focus": {
                        "love": "Before changing the relationship, ask whether the problem is truly between you or partly driven by your own insecurity.",
                        "career": "When restless at work, distinguish real lack of growth from simple attraction to something new.",
                        "health": "Separate real health problems from anxiety triggered by too much information. Get qualified evaluation before trying everything.",
                        "finances": "Do not take high financial risk just because you feel anxious. Fix the underlying issue steadily.",
                        "relationships": "Ask whether the relationship is truly unhealthy or whether your own fear is coloring the situation."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "What you are waiting for may have little substance. Accept the facts and return your attention to the people and opportunities that are actually present.",
                    "main_state": "Warmth restored by returning to real connection",
                    "main_strategy": "Let go of pride and reconnect with what truly matters",
                    "support_risk": "Feeling isolated or short of support",
                    "support_warning": "Refusing to repair distance because of pride",
                    "guide": {
                        "love": "Keep your principles under temptation:\n• Do not trade values for approval.",
                        "career": "Do not compromise professional ethics:\n• Keep your bottom line.",
                        "health": "Decline unhealthy social pressure:\n• Keep your health standards.",
                        "finances": "Do not invest in what you do not understand:\n• Stay within your risk limits.",
                        "relationships": "Say no calmly and firmly:\n• Let respectful people respect your choice."
                    },
                    "focus": {
                        "love": "Keep your standards when temptation or social pressure appears. Do not sacrifice core values just to preserve surface harmony.",
                        "career": "Protect professional ethics even if peers pressure you to cut corners.",
                        "health": "Decline unhealthy social pressure rather than abandoning your health standards because everyone else does.",
                        "finances": "Do not invest in products you do not understand or exceed your own risk limits.",
                        "relationships": "Decline what crosses your values calmly and firmly. People who respect you can also respect your limits."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Real value does not need to announce itself too early. Keep developing your ability and character quietly; let substance speak when the time is right.",
                    "main_state": "Quiet confidence that lets true value show",
                    "main_strategy": "Choose humility and depth over premature display",
                    "support_risk": "Restlessness to prove yourself quickly",
                    "support_warning": "Showing an unfinished side too soon",
                    "guide": {
                        "love": "Balance acceptance and boundaries:\n• Keep warmth without losing principle.",
                        "career": "Allow different methods:\n• Keep core standards.",
                        "health": "Accept imperfection:\n• Keep basic discipline.",
                        "finances": "Allow small pleasures:\n• Keep the larger financial rules.",
                        "relationships": "Accept differences:\n• Hold values with warmth."
                    },
                    "focus": {
                        "love": "Balance acceptance with boundaries. Love can stay warm without giving up your principles.",
                        "career": "Allow different working styles while keeping core standards for quality and integrity.",
                        "health": "Accept imperfection while maintaining basic discipline. Compassion does not require giving up structure.",
                        "finances": "Allow small pleasures while keeping saving and investment discipline.",
                        "relationships": "Accept differences without abandoning important values. Firmness can still have warmth."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Holding your ground does not require pushing everyone away. Keep your principles, but soften the sharpness that turns independence into isolation.",
                    "main_state": "Confidence in standing by your principles",
                    "main_strategy": "Keep your standards without forcing yourself to fit in",
                    "support_risk": "Feeling different or isolated",
                    "support_warning": "Giving up your boundaries because you fear being alone",
                    "guide": {
                        "love": "Leave relationships that keep harming you:\n• Stop repeating harm and forgiveness.",
                        "career": "Leave environments that keep damaging you:\n• Take responsibility for your career.",
                        "health": "Seek help and change the pattern:\n• Do not normalize warning signs.",
                        "finances": "Stop the loss cycle:\n• Do not chase recovery with more risk.",
                        "relationships": "Stop repeating the harm cycle:\n• Choose relationships that treat you well."
                    },
                    "focus": {
                        "love": "If a relationship keeps cycling between harm and forgiveness with no real change, consider leaving. Repeated injury is not proof of love.",
                        "career": "Do not stay in a work environment that continually damages you simply because you have already invested time there.",
                        "health": "If the body keeps sending serious warnings, seek help and change the harmful pattern instead of normalizing it.",
                        "finances": "Stop a repeating loss cycle. Do not keep adding money or borrowing to chase a recovery.",
                        "relationships": "Stop repeatedly forgiving harm when nothing changes. You deserve relationships that do not depend on ongoing injury."
                    }
                }
            },
            "cui": {
                "1": {
                    "name": "Beginning",
                    "text": "You mean well, but hesitation creates confusion. If you truly want to connect or join forces, be honest about it and commit instead of sending mixed signals.",
                    "main_state": "The first step toward gathering through sincere outreach",
                    "main_strategy": "Let go of doubt and clearly say that you want to work together",
                    "support_risk": "Low confidence and hesitation at the start",
                    "support_warning": "Staying silent because you fear rejection",
                    "guide": {
                        "love": "Find shared ground:\n• Rebuild from agreement.",
                        "career": "Build consensus first:\n• Define a shared goal.",
                        "health": "Return to proven basics:\n• Start from common ground.",
                        "finances": "Agree on core money rules:\n• Decide from there.",
                        "relationships": "Confirm shared values:\n• Resolve differences from that base."
                    },
                    "focus": {
                        "love": "When the relationship feels unsettled, start by finding common ground instead of proving who is right.",
                        "career": "When a team is divided, identify one goal everyone can support before pushing a plan.",
                        "health": "When health advice conflicts, return to basics such as sleep, balanced food, and regular movement.",
                        "finances": "Agree first on savings goals, risk tolerance, and spending rules before making decisions.",
                        "relationships": "In a strained relationship, confirm what both sides still value and rebuild from there."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You are being sincerely invited into a group or partnership. Let go of unnecessary doubt and take your place; your participation can strengthen everyone involved.",
                    "main_state": "Trust built through sincere connection",
                    "main_strategy": "Bring people together through sincerity, not display",
                    "support_risk": "Feeling that you are not prepared or impressive enough",
                    "support_warning": "Holding back because you think you are not good enough",
                    "guide": {
                        "love": "Move toward genuine connection:\n• Ignore outside noise.",
                        "career": "Choose value-aligned work:\n• Find belonging through fit.",
                        "health": "Listen to your body:\n• Do not follow trends blindly.",
                        "finances": "Invest in what you understand:\n• Let values guide choices.",
                        "relationships": "Choose sincere people:\n• Do not chase status."
                    },
                    "focus": {
                        "love": "Follow genuine connection rather than outside pressure. If the bond feels sincere, allow yourself to move closer.",
                        "career": "Choose teams and goals that fit your values, not just short-term rewards.",
                        "health": "Listen to what your body actually needs instead of copying trends.",
                        "finances": "Choose investments you understand and truly agree with rather than following hype.",
                        "relationships": "Stay close to people who treat you sincerely, not simply those with status or resources."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You want to belong but feel out of place. Do not mistake loneliness for being unwanted; you may simply not have found the right group yet.",
                    "main_state": "A chance to leave hesitation and choose a trustworthy direction",
                    "main_strategy": "Choose a sound team or path instead of staying on the sidelines",
                    "support_risk": "Overthinking and draining yourself with indecision",
                    "support_warning": "Watching too long and never acting",
                    "guide": {
                        "love": "Leave roles that do not fit:\n• Be honest about discomfort.",
                        "career": "Find a place that accepts you:\n• Do not lose yourself to fit in.",
                        "health": "Respect your body’s needs:\n• Health is for you.",
                        "finances": "Do not spend for appearances:\n• Let money serve real needs.",
                        "relationships": "Leave groups that do not fit:\n• Let belonging come from acceptance."
                    },
                    "focus": {
                        "love": "If you cannot be yourself in a relationship, face that discomfort honestly. Leaving the wrong role can be the start of finding yourself again.",
                        "career": "If belonging at work requires losing yourself, look for an environment that accepts who you are.",
                        "health": "Do not force your body to meet other people’s expectations. Choose health practices that genuinely suit you.",
                        "finances": "Do not spend or invest for appearances or belonging. Let money serve your real needs.",
                        "relationships": "If a group requires constant self-denial, reconsider whether it is truly where you belong."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You can hold influence without standing above everyone. Move toward people with sincerity rather than distance, and your leadership will create real unity.",
                    "main_state": "Trust that serves the whole rather than personal credit",
                    "main_strategy": "Be willing to support instead of competing for recognition",
                    "support_risk": "Wanting more control or credit",
                    "support_warning": "Taking a role that is not yours just to be seen",
                    "guide": {
                        "love": "Seek understanding and support:\n• Let others help.",
                        "career": "Ask experienced people:\n• Open the door to help.",
                        "health": "Use professional support:\n• Find people to walk with you.",
                        "finances": "Seek qualified financial advice:\n• Do not hide the problem.",
                        "relationships": "Tell trusted people what you need:\n• Let them support you."
                    },
                    "focus": {
                        "love": "If a relationship feels lonely or difficult, seek support rather than carrying everything alone.",
                        "career": "When a team is stuck, ask experienced people or outside partners for help instead of protecting your pride.",
                        "health": "Use professional and community support when health challenges feel too heavy to manage alone.",
                        "finances": "If finances are difficult, seek qualified advice instead of hiding the problem out of shame.",
                        "relationships": "Let trusted people know when you need support. The right people will not resent being asked."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You can unite people from different backgrounds around one purpose. Keep your original intention clear, because influence can easily turn into ego.",
                    "main_state": "Winning trust through steady sincerity",
                    "main_strategy": "Build loyalty through long-term sincerity, not short-term tactics",
                    "support_risk": "Feeling that trust is not fully established yet",
                    "support_warning": "Trying to force trust before it has had time to grow",
                    "guide": {
                        "love": "Value genuine acceptance:\n• Be fully yourself.",
                        "career": "Contribute to the right team:\n• Protect a culture of trust.",
                        "health": "Keep what feels sustainable:\n• Make it part of daily life.",
                        "finances": "Keep a calm financial rhythm:\n• Ignore outside noise.",
                        "relationships": "Value friends who truly know you:\n• Grow trust over time."
                    },
                    "focus": {
                        "love": "When you feel truly accepted, value the bond and keep showing up honestly rather than performing for love.",
                        "career": "If you find a team whose values match yours, contribute fully and help protect an open, trusting culture.",
                        "health": "When a health approach feels sustainable and balanced, make it part of daily life rather than chasing constant novelty.",
                        "finances": "When a financial rhythm gives you calm and clarity, stay with it instead of changing because of outside noise.",
                        "relationships": "Cherish the friends who truly understand you and let those relationships deepen through trust."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may be facing separation or loss and feeling deeply alone. Let yourself grieve, but do not let grief become your whole future; acceptance makes it possible to move on.",
                    "main_state": "Self-reflection that helps you move through loneliness",
                    "main_strategy": "Reflect inwardly instead of turning pain into blame",
                    "support_risk": "Isolation and the feeling of not belonging",
                    "support_warning": "Resenting others because you feel alone",
                    "guide": {
                        "love": "Leave repeated hurt behind:\n• Stop living in disappointment.",
                        "career": "Find a place that values you:\n• Do not stay only because you invested time.",
                        "health": "Seek another professional view:\n• Keep looking for a workable path.",
                        "finances": "Face the pattern directly:\n• Make a complete recovery plan.",
                        "relationships": "Stop waiting for change:\n• Protect yourself."
                    },
                    "focus": {
                        "love": "If a relationship keeps bringing the same pain without change, consider whether leaving is healthier than staying in repeated disappointment.",
                        "career": "If your work repeatedly devalues your effort, consider whether your energy belongs somewhere else.",
                        "health": "If recovery feels hopeless, seek another qualified perspective rather than giving up on finding a workable path.",
                        "finances": "If financial stress never improves, face the pattern directly and seek a more complete plan or professional help.",
                        "relationships": "If someone repeatedly dismisses your pain, stop waiting for them to change and make a decision that protects you."
                    }
                }
            },
            "sheng": {
                "1": {
                    "name": "Beginning",
                    "text": "You have more support than you realize. Move forward with confidence and let the trust around you help open the next step.",
                    "main_state": "The start of rising through shared trust and support",
                    "main_strategy": "Accept the support and move forward boldly",
                    "support_risk": "Worrying that you do not deserve others’ trust",
                    "support_warning": "Letting insecurity waste the support you have",
                    "guide": {
                        "love": "Check that you are growing together:\n• Do not drag the other person.",
                        "career": "Choose an environment that supports growth:\n• Do not jump blindly.",
                        "health": "Find the real barrier:\n• Change the method if needed.",
                        "finances": "Check whether your structure supports your goals:\n• Choose the right path.",
                        "relationships": "Talk honestly about growth:\n• Let true friends support it."
                    },
                    "focus": {
                        "love": "Growth needs both people. If only one person wants to move forward, do not drag the other along.",
                        "career": "If your current environment cannot support your growth, assess your options without rushing into the wrong move.",
                        "health": "If old habits block progress, change the method instead of simply trying harder.",
                        "finances": "Check whether your income structure and financial habits truly support your goals before taking more risk.",
                        "relationships": "Talk honestly about how each person is growing; real friends can support change without holding each other back."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Sincerity matters more than display. You do not need perfect conditions before acting; small, genuine effort can earn trust and create opportunity.",
                    "main_state": "Steady recognition earned through real effort",
                    "main_strategy": "Prove yourself through substance rather than appearance",
                    "support_risk": "The temptation to attract attention with style over substance",
                    "support_warning": "Trying to be noticed quickly through show instead of skill",
                    "guide": {
                        "love": "Choose sincere small acts:\n• Let care speak for itself.",
                        "career": "Do small things well:\n• Let trust accumulate.",
                        "health": "Build small daily habits:\n• Let time compound them.",
                        "finances": "Save small amounts consistently:\n• Respect every dollar.",
                        "relationships": "Check in and remember small things:\n• Let simple care matter."
                    },
                    "focus": {
                        "love": "Small sincere acts often strengthen love more than dramatic promises.",
                        "career": "Careful work on ordinary tasks builds trust and eventually creates larger opportunities.",
                        "health": "Small habits such as more sleep, movement, and water add up over time.",
                        "finances": "Small automatic savings become meaningful wealth when they are consistent.",
                        "relationships": "Simple check-ins and small acts of care often matter most to friends."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "The road upward is open, but it may feel lonely. Do not slow down simply to avoid walking alone; keep moving and the right companions can join later.",
                    "main_state": "Confidence that allows smooth forward movement",
                    "main_strategy": "Move forward without unnecessary second-guessing",
                    "support_risk": "Extra doubt and unease",
                    "support_warning": "Missing an open opportunity by being too cautious",
                    "guide": {
                        "love": "Accept different growth paths:\n• Release what no longer fits.",
                        "career": "Check whether your environment can still grow you:\n• Leave if necessary.",
                        "health": "Check whether the method fits you:\n• Follow your own pace.",
                        "finances": "Find the real bottleneck:\n• Fix the right problem.",
                        "relationships": "Accept natural change:\n• Value those still beside you."
                    },
                    "focus": {
                        "love": "If your paths are no longer growing together, admit the difference instead of living on empty expectations.",
                        "career": "If you have outgrown your environment, consider whether staying still serves your career.",
                        "health": "If progress is slow, check whether the method suits your body rather than comparing yourself with others.",
                        "finances": "Find the actual bottleneck—income, spending, or strategy—rather than working harder without direction.",
                        "relationships": "Accept that friendships can grow in different directions and value the ones still moving with you."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have reached a position worth celebrating. Look back with gratitude, thank those who helped you, and continue upward without losing humility.",
                    "main_state": "Achievement made more meaningful by giving back",
                    "main_strategy": "Follow the right path and share the result instead of keeping it all",
                    "support_risk": "Wanting to keep all the credit",
                    "support_warning": "Forgetting those who helped once you rise",
                    "guide": {
                        "love": "Take one sincere step forward:\n• Let them see your intent.",
                        "career": "State your readiness:\n• Show what you can contribute.",
                        "health": "Try a sensible new challenge:\n• Break the plateau gradually.",
                        "finances": "Learn or develop new income:\n• Look for the next level.",
                        "relationships": "Create deeper time together:\n• Show that you care."
                    },
                    "focus": {
                        "love": "If the relationship needs a step forward, show sincere interest instead of waiting forever for the other person to move first.",
                        "career": "When ready for more responsibility, clearly show your interest, preparation, and contribution.",
                        "health": "If health has plateaued, try a sensible new challenge rather than staying passive.",
                        "finances": "If finances have plateaued, learn, improve your strategy, or develop another source of income.",
                        "relationships": "If you want deeper connection, create the opportunity and show that the relationship matters to you."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You are climbing by a solid staircase. There is no need for shortcuts; each completed step builds a position that cannot easily be taken from you.",
                    "main_state": "Reaching goals through solid step-by-step progress",
                    "main_strategy": "Move upward without rushing or skipping necessary steps",
                    "support_risk": "The temptation to jump levels or take shortcuts",
                    "support_warning": "Skipping necessary work because you want faster results",
                    "guide": {
                        "love": "Keep appreciating stability:\n• Do not take it for granted.",
                        "career": "Stay humble and grateful:\n• Keep improving.",
                        "health": "Protect the good condition:\n• Maintenance still matters.",
                        "finances": "Use wealth with gratitude:\n• Balance saving and living.",
                        "relationships": "Express thanks regularly:\n• Return support when needed."
                    },
                    "focus": {
                        "love": "When love feels secure, keep appreciating it rather than treating stability as automatic.",
                        "career": "At a new career level, stay humble, thank those who supported you, and keep improving.",
                        "health": "When health is good, protect it; maintaining results requires the same consistency that created them.",
                        "finances": "When finances are strong, balance future reserves, meaningful use, and enjoyment.",
                        "relationships": "Value the people who stood beside you and return their support when they need you."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may be climbing simply because “higher” has become the goal. Stop and ask why you are still pushing; knowing where to pause is part of real progress.",
                    "main_state": "Wisdom to pause, reflect, and rise more clearly",
                    "main_strategy": "Stop at the right time and restore your perspective",
                    "support_risk": "Being unable to stop pushing upward",
                    "support_warning": "Letting ambition override the need for rest and reflection",
                    "guide": {
                        "love": "Pause and reassess:\n• A stop can correct the path.",
                        "career": "Recalibrate your direction:\n• Adjustment beats blind effort.",
                        "health": "Stop and rest:\n• Do not ignore body signals.",
                        "finances": "Pause risky moves:\n• Review before acting.",
                        "relationships": "Take space when needed:\n• Decide what still matters."
                    },
                    "focus": {
                        "love": "If the relationship feels exhausted, pause and reassess instead of forcing progress.",
                        "career": "If career growth slows or drains you, recalibrate rather than pushing blindly.",
                        "health": "When your body signals overwork, stop and recover before doing more.",
                        "finances": "If finances show warning signs, pause risky moves and review the strategy before increasing the bet.",
                        "relationships": "If social life is draining you, take space and decide which relationships still deserve your energy."
                    }
                }
            },
            "kun_exhaust": {
                "1": {
                    "name": "Beginning",
                    "text": "The difficulty has just begun, and isolation can make it worse. Admit where you are and open the door to help before a temporary setback becomes self-imposed confinement.",
                    "main_state": "Finding an exit after breaking isolation",
                    "main_strategy": "Acknowledge the problem and actively ask for help",
                    "support_risk": "Shutting down out of shame or pride",
                    "support_warning": "Isolating yourself",
                    "guide": {
                        "love": "Do not act from panic:\n• Settle yourself first.",
                        "career": "Ask for help:\n• Stabilize before breaking through.",
                        "health": "Seek professional evaluation:\n• Do not delay help.",
                        "finances": "List debts and income:\n• Stop debt from feeding debt.",
                        "relationships": "Keep one listening connection:\n• Let time and action clarify things."
                    },
                    "focus": {
                        "love": "When a relationship is stuck, settle yourself before making an impulsive decision.",
                        "career": "Admit that you need help and assess what resources can stabilize the situation first.",
                        "health": "Seek qualified diagnosis rather than delaying because the problem seems embarrassing or minor.",
                        "finances": "List debts, income, and priorities; stop borrowing simply to cover old debt.",
                        "relationships": "Do not let misunderstanding cut every connection. Keep at least one person who will listen."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Life may look comfortable while you still feel empty inside. The problem is not lack of material comfort but lack of meaning; face the deeper need instead of numbing it.",
                    "main_state": "Breaking through by facing what you truly want",
                    "main_strategy": "Seek deeper guidance and support with honesty",
                    "support_risk": "Feeling empty despite outward abundance",
                    "support_warning": "Numbing yourself instead of facing the need",
                    "guide": {
                        "love": "Ask what you truly need:\n• Do not confuse appearance with fulfillment.",
                        "career": "Check whether comfort has stopped growth:\n• Make room for meaning.",
                        "health": "Replace excess with quality:\n• Adjust draining habits.",
                        "finances": "Save before spending:\n• Direct money toward real priorities.",
                        "relationships": "Reduce empty socializing:\n• Keep deeper connections."
                    },
                    "focus": {
                        "love": "Ask whether the relationship meets your real emotional needs or only looks good from the outside.",
                        "career": "A stable job can still feel empty. Make room to explore what growth or meaning you are missing.",
                        "health": "Look for patterns of excess that feel good briefly but drain you over time, and reduce them gradually.",
                        "finances": "If income is good but nothing is saved, build a save-first system and direct money toward what matters.",
                        "relationships": "Reduce shallow social obligations and spend more time with people who can genuinely nourish you."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You are trapped between hard obstacles and painful dependencies. The way out begins by admitting what cannot support you and cutting ties with false hopes or harmful reliance.",
                    "main_state": "A path forward after ending the wrong dependency",
                    "main_strategy": "Let go of unrealistic hopes and rebuild reliable support",
                    "support_risk": "Discovering that what you trusted cannot support you",
                    "support_warning": "Refusing to let go of a failed dependency",
                    "guide": {
                        "love": "Pause extreme action:\n• Stop relying on what keeps hurting you.",
                        "career": "Map a way out:\n• Cut the wrong dependency.",
                        "health": "Seek integrated professional care:\n• Stop harmful self-treatment.",
                        "finances": "Prioritize urgent debt:\n• Reject desperate recovery bets.",
                        "relationships": "Create safe distance:\n• Release failed expectations."
                    },
                    "focus": {
                        "love": "Do not make extreme moves in a painful relationship. First admit which pattern or person can no longer support you.",
                        "career": "Stop forcing your way through a double bind and identify which dependency or structure must be released.",
                        "health": "Seek an integrated medical assessment and stop relying on self-treatment that may be making things worse.",
                        "finances": "Prioritize the most urgent debts, negotiate where possible, and reject risky attempts to win everything back at once.",
                        "relationships": "Move away from relationships that harm you and release expectations that have repeatedly failed."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Help is coming, but more slowly than you hoped. Do not abandon the right direction simply because support is delayed; keep steady and give it time to arrive.",
                    "main_state": "Delayed support after staying on the right path",
                    "main_strategy": "Be patient and trust that help can still arrive",
                    "support_risk": "Doubting support because the wait feels too long",
                    "support_warning": "Giving up halfway",
                    "guide": {
                        "love": "Accept the slower pace:\n• Let time prove sincerity.",
                        "career": "Keep the steady work:\n• Do not doubt the path too early.",
                        "health": "Give recovery time:\n• Do not switch methods constantly.",
                        "finances": "Keep the financial plan:\n• Resist risky shortcuts.",
                        "relationships": "Respect the relationship’s pace:\n• Let time help."
                    },
                    "focus": {
                        "love": "Accept slow progress in the relationship and let sincerity prove itself over time.",
                        "career": "Keep doing the right work even when support or progress comes slowly.",
                        "health": "Recovery needs time; do not abandon a sound approach just because results are gradual.",
                        "finances": "Keep following the saving or repayment plan and resist faster but riskier shortcuts.",
                        "relationships": "Respect the pace of the other person and the relationship; do not pressure or abandon it simply from impatience."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The pressure has been severe, but you have not abandoned yourself. Hold to your dignity and seek the support needed to stop further harm; relief begins when you believe you deserve better treatment.",
                    "main_state": "Relief after keeping faith through deep pressure",
                    "main_strategy": "Keep faith and protect your dignity until conditions change",
                    "support_risk": "Feeling so wronged that you doubt whether endurance is worth it",
                    "support_warning": "Losing faith in yourself",
                    "guide": {
                        "love": "Protect your dignity:\n• Stop trading endurance for love.",
                        "career": "Set clear limits:\n• Say no to unfair treatment.",
                        "health": "Stop harmful practices:\n• Seek trustworthy care.",
                        "finances": "Stop further losses:\n• Seek qualified help if needed.",
                        "relationships": "Name the harm clearly:\n• Plan a safe exit."
                    },
                    "focus": {
                        "love": "If love requires sacrificing your dignity, stop using endurance as proof of devotion and stand up for your worth.",
                        "career": "Set clear limits on unfair treatment at work and believe your value deserves respect.",
                        "health": "Stop practices that are harming your body and seek trustworthy professional care instead of delaying further.",
                        "finances": "If you have been deceived or treated unfairly, stop the loss and seek legal or financial help where appropriate.",
                        "relationships": "Recognize persistent disrespect and plan a safe way to leave harmful relationships."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may feel trapped by fear and tangled problems, but the opening is close. Once you decide to act on the real issue, the knots begin to loosen.",
                    "main_state": "Complete release after breaking through fear",
                    "main_strategy": "Make a clear decision and act on the real problem",
                    "support_risk": "Fear of doing the wrong thing and therefore doing nothing",
                    "support_warning": "Staying frozen",
                    "guide": {
                        "love": "Name what keeps you stuck:\n• Make the hard decision.",
                        "career": "Find the root problem:\n• Untangle it step by step.",
                        "health": "Look for the common root:\n• Face the real issue.",
                        "finances": "Put every number on the table:\n• Set the order and act.",
                        "relationships": "Review draining relationships:\n• Set the needed boundaries."
                    },
                    "focus": {
                        "love": "Identify the attachment or unresolved issue that keeps you stuck and decide how to address it, even if letting go hurts.",
                        "career": "Find the root of the tangled work problem and resolve it step by step instead of pulling harder at every symptom.",
                        "health": "Seek integrated care that looks for links between symptoms and face the underlying issue directly.",
                        "finances": "Lay out every debt and obligation, set an order, and make the difficult decisions needed to end the cycle.",
                        "relationships": "Review the relationships that repeatedly drain you and set the boundaries you have been afraid to set."
                    }
                }
            },
            "jing": {
                "1": {
                    "name": "Beginning",
                    "text": "The well is clogged and neglected. Something you once relied on has been left unused too long; clean it out and let what is truly obsolete go.",
                    "main_state": "Preparing yourself before trying to serve others",
                    "main_strategy": "Clear the basics and rebuild your foundation first",
                    "support_risk": "Feeling unqualified or lacking confidence",
                    "support_warning": "Trying to skip basic improvement because you lack confidence",
                    "guide": {
                        "love": "Refresh the connection:\n• Show care regularly.",
                        "career": "Refine repeated work:\n• Keep learning.",
                        "health": "Maintain before repair is needed:\n• Keep the routine.",
                        "finances": "Deepen the skills behind income:\n• Strengthen the source.",
                        "relationships": "Contact old friends:\n• Do not let neglect dry the bond."
                    },
                    "focus": {
                        "love": "If a relationship has been neglected, refresh the daily connection before it dries out completely.",
                        "career": "Even repetitive work can be improved. Learn, refine, and deepen the skill instead of letting it go stale.",
                        "health": "Maintain the body before problems force you to repair it; regular checks and routines matter.",
                        "finances": "Strengthen the skills behind your income so the source becomes deeper and more reliable.",
                        "relationships": "Keep old friendships alive with regular contact rather than assuming they will maintain themselves."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You have real ability, but it may be underused or left in the wrong place. Do not wait quietly to be discovered; seek a setting where your strengths can actually serve a larger purpose.",
                    "main_state": "Using your ability where it has real value",
                    "main_strategy": "Think bigger and stop spending strong resources on trivial uses",
                    "support_risk": "Letting your energy get absorbed by small matters",
                    "support_warning": "Wasting real potential for short-term convenience",
                    "guide": {
                        "love": "Replenish yourself first:\n• Do not measure worth by their response.",
                        "career": "Keep building depth:\n• Recognition can come later.",
                        "health": "Care for yourself first:\n• Become your own support.",
                        "finances": "Build skill and multiple income sources:\n• Strengthen self-reliance.",
                        "relationships": "Meet some needs yourself:\n• Relate from fullness, not lack."
                    },
                    "focus": {
                        "love": "When your effort is not returned, replenish yourself first. Your worth is not determined by another person’s response.",
                        "career": "Keep building skill even when recognition is slow; a deep well does not lose value because no one is drawing from it today.",
                        "health": "Take care of your body for your own sake, not for approval. Become a reliable source of support for yourself.",
                        "finances": "Build stronger skills and more than one reliable income source; self-reliance creates financial stability.",
                        "relationships": "Learn to meet some of your own needs instead of expecting every relationship to fill them."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "The well is clean, but no one is drawing from it yet. Your preparation is not wasted; make your value more visible and give timing a chance to catch up.",
                    "main_state": "Waiting to be recognized while keeping your depth",
                    "main_strategy": "Keep your skill and integrity while making your value easier to see",
                    "support_risk": "The disappointment of being capable but overlooked",
                    "support_warning": "Abandoning your depth because recognition is slow",
                    "guide": {
                        "love": "Repair your relationship with yourself:\n• Let self-respect lead.",
                        "career": "Recognize your own progress:\n• Do not wait for approval.",
                        "health": "Take your needs seriously:\n• Practice basic self-care.",
                        "finances": "Invest in your growth and health:\n• Let money support your value.",
                        "relationships": "Become your own friend:\n• Learn to enjoy your own company."
                    },
                    "focus": {
                        "love": "When you long to be loved, begin by repairing the way you treat yourself; self-respect changes what you accept from others.",
                        "career": "When your work is overlooked, acknowledge your own progress and keep building confidence instead of waiting for permission to value it.",
                        "health": "When you feel uncared for, start with basic self-care and treat your needs as legitimate.",
                        "finances": "Invest in your health and growth; money used to strengthen your capacity can have lasting returns.",
                        "relationships": "When you feel lonely, learn to enjoy your own company rather than treating solitude as proof that you are unwanted."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The well is being repaired from the inside. This quiet work may not look impressive, but a stronger structure can hold more in the future.",
                    "main_state": "A stronger foundation before expanding outward",
                    "main_strategy": "Use this time to repair internal systems and strengthen the base",
                    "support_risk": "Feeling stalled because attention is turned inward",
                    "support_warning": "Rushing to perform outwardly before the foundation is ready",
                    "guide": {
                        "love": "Clear small issues regularly:\n• Recheck each other’s needs.",
                        "career": "Improve systems before they break:\n• Maintain proactively.",
                        "health": "Build preventive habits:\n• Keep regular checks.",
                        "finances": "Review the structure regularly:\n• Close weak spots early.",
                        "relationships": "Clear misunderstandings early:\n• Keep the bond open."
                    },
                    "focus": {
                        "love": "Clear small misunderstandings regularly and check what each person needs before they harden into bigger problems.",
                        "career": "Improve systems while things are still working; maintenance is easier than crisis repair.",
                        "health": "Build preventive habits while you feel well and keep regular checks in the routine.",
                        "finances": "Review income, spending, savings, insurance, and investments before a problem exposes the weak spot.",
                        "relationships": "Clear small misunderstandings early so old relationships stay open and clean."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Clear water is finally flowing from the well. Your long preparation is becoming useful to others; share it openly while keeping the source clean and free from ego.",
                    "main_state": "A mature value that can now be shared openly",
                    "main_strategy": "Share what is good with fairness and generosity",
                    "support_risk": "Hesitating to share fully",
                    "support_warning": "Holding back useful value out of possessiveness",
                    "guide": {
                        "love": "Keep stable love alive:\n• Add fresh attention.",
                        "career": "Keep learning and updating:\n• Stability still needs growth.",
                        "health": "Stay grateful and maintain the habits:\n• Protect the good state.",
                        "finances": "Keep the good system:\n• Review and improve it.",
                        "relationships": "Stay in contact:\n• Keep feeding the friendship."
                    },
                    "focus": {
                        "love": "When love is stable, keep adding life to it; security still needs care and fresh attention.",
                        "career": "When work is stable, keep adding new knowledge and skills so the source does not become stale.",
                        "health": "When health is good, protect it with the habits that created it instead of treating it as permanent.",
                        "finances": "When finances are stable, keep reviewing and improving the system rather than letting it run unattended.",
                        "relationships": "Strong friendships still need contact and care; keep the source active instead of assuming it will last on its own."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The well is open and useful to everyone. Real abundance grows when value keeps flowing instead of being hoarded; generosity keeps the source alive.",
                    "main_state": "Greater fulfillment through open sharing",
                    "main_strategy": "Let your value continue to benefit others without unnecessary withholding",
                    "support_risk": "Wanting to hold something back for yourself",
                    "support_warning": "Withholding too much because you fear giving away your value",
                    "guide": {
                        "love": "Face whether the bond is still nourishing:\n• Repair deeply or release it.",
                        "career": "Accept when an old path is dry:\n• Build a new source.",
                        "health": "Change direction when old methods fail:\n• Seek qualified guidance.",
                        "finances": "Develop new income early:\n• Do not wait for the old source to vanish.",
                        "relationships": "Face the true state of the relationship:\n• Make room for something healthier."
                    },
                    "focus": {
                        "love": "If the relationship can no longer nourish either person, face that honestly and decide whether it needs deep repair or release.",
                        "career": "If an old career path or skill has run dry, accept the need to retrain or move toward a new source.",
                        "health": "If old health methods no longer work, seek a new professional direction rather than staying attached to habit.",
                        "finances": "If a former income source is fading, start building another before the old one disappears completely.",
                        "relationships": "If a relationship no longer supports either side, acknowledge the truth and make room for a healthier form or a clean ending."
                    }
                }
            },
            "ge": {
                "1": {
                    "name": "Stay Steady",
                    "text": "The urge to change is strong, but the timing is not ready. Hold your ground, clarify why change is needed, and prepare before acting.",
                    "main_state": "Waiting until conditions are ready",
                    "main_strategy": "Prepare fully before making a move",
                    "support_risk": "The urge to act now",
                    "support_warning": "Changing too soon because of impatience",
                    "guide": {
                        "love": "Use a form of care the other person can feel:\n• Change the method, not the sincerity.",
                        "career": "Learn a new tool or method:\n• Do not let habit block progress.",
                        "health": "Try a different supported approach:\n• Seek another professional view if needed.",
                        "finances": "Update outdated financial habits:\n• Learn before making changes.",
                        "relationships": "Adjust your communication style:\n• Make the message easier to receive."
                    },
                    "focus": {
                        "love": "Try a different way of showing care if the old one is not reaching the other person.",
                        "career": "Learn new tools or methods when the old approach no longer works.",
                        "health": "If the current routine is not helping, try a better-supported approach.",
                        "finances": "Update financial habits that no longer fit your goals.",
                        "relationships": "Adjust how you communicate so the other person can actually hear you."
                    }
                },
                "2": {
                    "name": "Right Timing",
                    "text": "The conditions are ready. Act decisively instead of hesitating; well-timed change is more likely to gain support and succeed.",
                    "main_state": "Decisive action at the right time",
                    "main_strategy": "Take the step while conditions support it",
                    "support_risk": "Last-minute hesitation",
                    "support_warning": "Missing the moment because you keep waiting",
                    "guide": {
                        "love": "Start with your own behavior:\n• Let your change influence the relationship.",
                        "career": "Improve your own work method first:\n• Let results speak.",
                        "health": "Change one habit today:\n• Do it for yourself.",
                        "finances": "Start tracking and saving now:\n• Focus on what you control.",
                        "relationships": "Understand first:\n• Change your own response pattern."
                    },
                    "focus": {
                        "love": "Start with what you can change in yourself instead of waiting for the other person.",
                        "career": "Improve your own process first and let results influence others.",
                        "health": "Change one habit today instead of waiting for a perfect start.",
                        "finances": "Start tracking and saving with what you can control now.",
                        "relationships": "Change your own response pattern before demanding change from others."
                    }
                },
                "3": {
                    "name": "Build Consensus",
                    "text": "Rushing change is risky, but staying stuck is also uncomfortable. Slow down, discuss the plan, and build enough agreement before moving.",
                    "main_state": "Careful change built on shared agreement",
                    "main_strategy": "Discuss, align, then act",
                    "support_risk": "Different views that need coordination",
                    "support_warning": "Skipping communication to move faster",
                    "guide": {
                        "love": "Wait until both sides are ready:\n• Do not force the shift.",
                        "career": "Build agreement before acting:\n• Move in smaller steps.",
                        "health": "Change gradually:\n• Give your body time to adapt.",
                        "finances": "Test small before expanding:\n• Avoid drastic moves.",
                        "relationships": "Respect the other person’s pace:\n• Introduce change patiently."
                    },
                    "focus": {
                        "love": "Do not force the relationship to change before both sides are ready.",
                        "career": "Build support and test changes in smaller steps.",
                        "health": "Change habits gradually so your body can adapt.",
                        "finances": "Test a new financial approach on a small scale before expanding it.",
                        "relationships": "Respect the other person’s pace while introducing a new pattern."
                    }
                },
                "4": {
                    "name": "Commit to Change",
                    "text": "The direction is clear and the reason for change is sound. Move forward with conviction, and others are more likely to trust the transition.",
                    "main_state": "A justified change that gains support",
                    "main_strategy": "Lead the change with purpose",
                    "support_risk": "Attachment to the old way",
                    "support_warning": "Letting old obligations block necessary change",
                    "guide": {
                        "love": "Open a new conversation with confidence:\n• Do not let past failures stop you.",
                        "career": "Move ahead with the prepared reform:\n• Lead into the next phase.",
                        "health": "Choose a sound plan and begin:\n• Stay consistent.",
                        "finances": "Act after the research is done:\n• Follow the plan.",
                        "relationships": "Start an honest conversation:\n• Invite a new way of relating."
                    },
                    "focus": {
                        "love": "The time for an honest reset may be here. Start the conversation with confidence.",
                        "career": "Preparation is sufficient; move forward with the reform instead of delaying.",
                        "health": "Choose a suitable plan and begin now.",
                        "finances": "If the research is done, execute the financial change with discipline.",
                        "relationships": "Invite the other person into a more honest way of relating."
                    }
                },
                "5": {
                    "name": "Lead the Shift",
                    "text": "You are in the middle of a major transformation. Show clear leadership, confirm the direction, and help others understand why the change matters.",
                    "main_state": "Change that earns trust",
                    "main_strategy": "Lead with courage and credibility",
                    "support_risk": "The weight of greater responsibility",
                    "support_warning": "Pulling back at the key moment",
                    "guide": {
                        "love": "Trust the transition:\n• Let change strengthen the relationship.",
                        "career": "Lead by example:\n• Explain why the change matters.",
                        "health": "Make the change for yourself:\n• Trust the process.",
                        "finances": "Stay with the long-term plan:\n• Accept short-term discomfort.",
                        "relationships": "Trust each other’s intent:\n• Communicate through the transition."
                    },
                    "focus": {
                        "love": "Lasting change depends on mutual trust and genuine willingness.",
                        "career": "Major reform works when people understand and believe in the direction.",
                        "health": "Health changes last when they come from your own commitment.",
                        "finances": "Stay with a sound long-term financial plan through the transition.",
                        "relationships": "Trust and open communication help relationships survive major change."
                    }
                },
                "6": {
                    "name": "Refine and Stabilize",
                    "text": "The major change is done. Stop making big moves and focus on details, stability, and helping people settle into the new normal.",
                    "main_state": "A settled transition moving into refinement",
                    "main_strategy": "Protect and strengthen what has changed",
                    "support_risk": "The urge to keep changing things",
                    "support_warning": "Continuing to disrupt what now needs stability",
                    "guide": {
                        "love": "Build a new pattern together:\n• Let go of the old one.",
                        "career": "Complete the deeper reform:\n• Do not stop halfway.",
                        "health": "Stay with the new routine:\n• Give adaptation time.",
                        "finances": "Finish the restructuring:\n• Do not abandon it during discomfort.",
                        "relationships": "Release old baggage:\n• Begin a clearer chapter."
                    },
                    "focus": {
                        "love": "If both sides want a true reset, let go of the old pattern and build a new one.",
                        "career": "Finish the deeper reform rather than stopping halfway.",
                        "health": "Give your body time to adapt to a lasting lifestyle change.",
                        "finances": "Carry the financial restructuring through instead of abandoning it during discomfort.",
                        "relationships": "Release old baggage and begin the relationship on clearer terms."
                    }
                }
            },
            "ding": {
                "1": {
                    "name": "Clear the Vessel",
                    "text": "Turn the vessel over and empty what no longer belongs. Old baggage, stale beliefs, and stored resentment need to go before something new can be built.",
                    "main_state": "Clarity through clearing the old",
                    "main_strategy": "Release old patterns and start clean",
                    "support_risk": "Reluctance to let go",
                    "support_warning": "Letting nostalgia burden the new start",
                    "guide": {
                        "love": "Confirm shared values first:\n• Build the foundation before going deeper.",
                        "career": "Strengthen core skills and credibility:\n• Build upward from a solid base.",
                        "health": "Start with basic health habits:\n• Let the foundation carry future goals.",
                        "finances": "Build reserves and protection first:\n• Invest after the basics are stable.",
                        "relationships": "Confirm trust before deepening the bond:\n• Build a relationship that can endure."
                    },
                    "focus": {
                        "love": "Make sure values and goals are compatible before deepening the bond.",
                        "career": "Strengthen core skills, habits, and credibility before chasing bigger results.",
                        "health": "Build on sleep, food, and movement before adding advanced routines.",
                        "finances": "Build an emergency fund and basic protection before taking more investment risk.",
                        "relationships": "Deepen relationships only where trust and honesty are solid."
                    }
                },
                "2": {
                    "name": "Solid Resources",
                    "text": "The vessel is full. You have real resources and results, but success can attract envy. Stay low-key and protect what you have built.",
                    "main_state": "Confidence grounded in real strength",
                    "main_strategy": "Stay upright and trust your foundation",
                    "support_risk": "Jealousy or gossip",
                    "support_warning": "Doubting yourself because of others’ opinions",
                    "guide": {
                        "love": "Value the connection you already have:\n• Stop looking outward from a sense of lack.",
                        "career": "Appreciate progress while still growing:\n• Let ambition stay measured.",
                        "health": "Respect what your body already does:\n• Avoid extreme goals.",
                        "finances": "Value every step of income and saving:\n• Do not let scarcity drive decisions.",
                        "relationships": "Value the friends already here:\n• Be grateful for real connection."
                    },
                    "focus": {
                        "love": "Appreciate the connection you already have instead of always looking elsewhere.",
                        "career": "Value what you have built while continuing to grow without scarcity-driven pressure.",
                        "health": "Respect what your body can do instead of chasing extreme standards.",
                        "finances": "Value each step of saving and income; avoid making decisions from a scarcity mindset.",
                        "relationships": "Invest in the people already showing you genuine connection."
                    }
                },
                "3": {
                    "name": "Blocked Use",
                    "text": "You have ability, but something is preventing it from being used well. Check the role, method, or partnership that is causing the block, then adjust.",
                    "main_state": "Patience while a blockage clears",
                    "main_strategy": "Do not abandon the right direction because of a temporary delay",
                    "support_risk": "Frustration from being stuck",
                    "support_warning": "Giving up because progress is temporarily blocked",
                    "guide": {
                        "love": "Slow down and let the relationship breathe:\n• Do not force progress.",
                        "career": "Adjust the pace and method:\n• Do not ruin an advantage by rushing.",
                        "health": "Choose a sustainable approach:\n• Give your body time.",
                        "finances": "Return to the long-term plan:\n• Avoid restless trading.",
                        "relationships": "Respect the pace of trust:\n• Let closeness grow naturally."
                    },
                    "focus": {
                        "love": "Do not push the relationship because anxiety wants a faster result.",
                        "career": "Slow down, adjust the method, and let timing improve the outcome.",
                        "health": "Use a moderate, sustainable approach and give your body time.",
                        "finances": "Return to the long-term plan instead of chasing quick gains.",
                        "relationships": "Respect the pace of trust; forcing closeness creates pressure."
                    }
                },
                "4": {
                    "name": "Know Your Load",
                    "text": "A weak leg makes the vessel collapse. A major setback may expose what was not strong enough. Clean up the damage, identify the weak point, and rebuild before carrying more.",
                    "main_state": "Practical limits instead of overreaching",
                    "main_strategy": "Assess your capacity honestly and ask for support when needed",
                    "support_risk": "Pushing beyond your limits",
                    "support_warning": "Taking on too much just to save face",
                    "guide": {
                        "love": "State your commitment clearly:\n• Step into the next stage when ready.",
                        "career": "Pursue greater responsibility:\n• Show your ability with action.",
                        "health": "Choose one major goal:\n• Act with commitment.",
                        "finances": "Use opportunities you have evaluated:\n• Expand carefully.",
                        "relationships": "Show that the relationship matters:\n• Be willing to move first."
                    },
                    "focus": {
                        "love": "When you are ready for real responsibility, state your commitment clearly.",
                        "career": "If your ability is ready, step toward greater responsibility instead of hiding from it.",
                        "health": "Choose one meaningful health goal and act with commitment.",
                        "finances": "Use well-researched opportunities when your knowledge and capital are ready.",
                        "relationships": "If a relationship matters, be willing to make the first sincere move."
                    }
                },
                "5": {
                    "name": "Trusted Responsibility",
                    "text": "The vessel is secure and supported. You now have the resources to carry greater responsibility; stay balanced and use that position well.",
                    "main_state": "Balanced leadership that supports growth",
                    "main_strategy": "Take on greater responsibility with humility",
                    "support_risk": "The effort of balancing many needs",
                    "support_warning": "Losing patience and perspective under pressure",
                    "guide": {
                        "love": "Stay humble and keep listening:\n• Do not take the relationship for granted.",
                        "career": "Stay open while carrying more responsibility:\n• Keep learning.",
                        "health": "Use professional guidance when useful:\n• Do not become complacent.",
                        "finances": "Keep learning and reviewing:\n• Do not let success create overconfidence.",
                        "relationships": "Listen across different perspectives:\n• Stay open to learning."
                    },
                    "focus": {
                        "love": "Stay humble and attentive even when the relationship feels secure.",
                        "career": "Leadership works best when you keep listening and learning.",
                        "health": "Keep learning about your health and use qualified guidance when needed.",
                        "finances": "Do not let past financial success stop you from learning and reviewing decisions.",
                        "relationships": "Experience should make you more open, not less willing to listen."
                    }
                },
                "6": {
                    "name": "Mature Strength",
                    "text": "Strength and gentleness are now working together. Use that balance to do work that matters and to carry responsibility without becoming hard.",
                    "main_state": "A mature balance of strength and grace",
                    "main_strategy": "Stay firm without losing warmth",
                    "support_risk": "The ongoing work of softening rough edges",
                    "support_warning": "Giving up on becoming more balanced because it takes effort",
                    "guide": {
                        "love": "Keep investing in the relationship:\n• Stay grateful.",
                        "career": "Stay humble at the top:\n• Keep watching what changes.",
                        "health": "Maintain the habits that work:\n• Good health still needs care.",
                        "finances": "Keep discipline when comfortable:\n• Continue planning ahead.",
                        "relationships": "Keep caring for important relationships:\n• Express appreciation regularly."
                    },
                    "focus": {
                        "love": "Keep maintaining a stable relationship instead of taking it for granted.",
                        "career": "At a high point, stay humble and keep planning for change.",
                        "health": "Maintain the habits that created good health.",
                        "finances": "Keep discipline even when finances are comfortable.",
                        "relationships": "Stable relationships still need appreciation and attention."
                    }
                }
            },
            "zhen": {
                "1": {
                    "name": "First Shock",
                    "text": "The first shock startles you, but it also wakes you up. Reflect on what you had stopped noticing and use the warning to become more prepared.",
                    "main_state": "Calm returning after a scare",
                    "main_strategy": "Use the shock as a useful warning",
                    "support_risk": "Short-term fear",
                    "support_warning": "Turning one scare into a larger imagined disaster",
                    "guide": {
                        "love": "Stay calm first:\n• Talk after emotions settle.",
                        "career": "Assess the situation before acting:\n• Turn crisis into useful information.",
                        "health": "Get proper assessment:\n• Respond early without panic.",
                        "finances": "Review before reacting:\n• Do not trade from fear.",
                        "relationships": "Give both sides space:\n• Communicate after emotions settle."
                    },
                    "focus": {
                        "love": "Do not let a sudden conflict dictate your reaction. Calm down, then talk.",
                        "career": "Understand the situation before making a rushed decision.",
                        "health": "Take a sudden symptom seriously without panicking; get proper assessment.",
                        "finances": "Review your allocation before trading from fear.",
                        "relationships": "Give everyone room to cool down before responding."
                    }
                },
                "2": {
                    "name": "Protect What Matters",
                    "text": "Conditions are dangerous enough that you may need to let go of something less important. Protect the core first; what is lost can be rebuilt later.",
                    "main_state": "Wise self-protection in a crisis",
                    "main_strategy": "Let go of secondary things to protect what matters most",
                    "support_risk": "Hesitation to release something",
                    "support_warning": "Trying to save everything during an emergency",
                    "guide": {
                        "love": "Protect the commitment that matters:\n• Let principles anchor the relationship.",
                        "career": "Keep professional standards:\n• Protect quality and integrity.",
                        "health": "Keep basic routines steady:\n• Give the body a stable base.",
                        "finances": "Hold to long-term discipline:\n• Do not panic-sell.",
                        "relationships": "Protect important relationships:\n• Do not let noise undo trust."
                    },
                    "focus": {
                        "love": "In instability, protect the care and commitment that matter most.",
                        "career": "Hold on to professional standards even when the environment is chaotic.",
                        "health": "Keep basic sleep, food, and daily rhythm steady under stress.",
                        "finances": "Protect long-term discipline rather than reacting to short-term swings.",
                        "relationships": "Do not let outside noise undo long-earned trust."
                    }
                },
                "3": {
                    "name": "Regain Direction",
                    "text": "Repeated shocks can leave you disoriented. Stop reacting for a moment, settle yourself, and remember that disruption will not last forever.",
                    "main_state": "Active adjustment through instability",
                    "main_strategy": "Adapt and act once your mind is clear",
                    "support_risk": "Feeling scattered and unsure",
                    "support_warning": "Freezing because anxiety has taken over",
                    "guide": {
                        "love": "Check facts instead of imagining disaster:\n• Speak directly.",
                        "career": "Rest before major decisions:\n• Clear judgment creates options.",
                        "health": "Use slow breathing to settle the body:\n• Care for your nervous system first.",
                        "finances": "Pause action:\n• Return to the long-term plan.",
                        "relationships": "Verify the truth first:\n• Respond after you know what happened."
                    },
                    "focus": {
                        "love": "Stop catastrophic thinking and check the facts with the other person.",
                        "career": "Rest and regain judgment before making major career decisions.",
                        "health": "Use breathing and recovery to settle the body before reacting to stress.",
                        "finances": "Pause trading and return to the long-term plan.",
                        "relationships": "Verify what actually happened before assuming the worst."
                    }
                },
                "4": {
                    "name": "Get Out of the Mud",
                    "text": "The shock has passed, but you may still be stuck in its aftermath. Stop struggling blindly; first get yourself onto stable ground, then decide what comes next.",
                    "main_state": "Recovering momentum after a low point",
                    "main_strategy": "Leave the stuck state and rebuild energy",
                    "support_risk": "Feeling trapped and drained",
                    "support_warning": "Letting temporary weakness become prolonged stagnation",
                    "guide": {
                        "love": "Step out of repeated conflict:\n• Regain perspective before deciding.",
                        "career": "Change the setting or angle:\n• Find a new entry point.",
                        "health": "Address the root cause:\n• Build support.",
                        "finances": "Stop the damage first:\n• Seek help and rebuild.",
                        "relationships": "Temporarily step away:\n• See the whole situation more clearly."
                    },
                    "focus": {
                        "love": "Step out of repeated conflict long enough to see the relationship clearly.",
                        "career": "Change the setting or perspective instead of circling the same problem.",
                        "health": "Address the root cause and build support instead of simply enduring it.",
                        "finances": "Stop losing actions, seek help, and rebuild from stable ground.",
                        "relationships": "Temporarily step out of a complicated situation to regain perspective."
                    }
                },
                "5": {
                    "name": "Steady Under Pressure",
                    "text": "After repeated disruption, you have learned to stay calm under pressure. Protect your core principles and use that steadiness to help yourself and others.",
                    "main_state": "Inner stability through repeated change",
                    "main_strategy": "Hold to your principles without being swept away",
                    "support_risk": "Ongoing challenges",
                    "support_warning": "Letting outside chaos become inner chaos",
                    "guide": {
                        "love": "Hold to what truly matters:\n• Let the crisis strengthen the bond.",
                        "career": "Protect core values:\n• Adapt methods, not principles.",
                        "health": "Keep sleep, food, and movement steady:\n• Recover from a stable base.",
                        "finances": "Distinguish volatility from real change:\n• Stay disciplined.",
                        "relationships": "Protect proven relationships:\n• Do not abandon trust too quickly."
                    },
                    "focus": {
                        "love": "Keep the values that matter most and let the crisis teach you how to protect the relationship.",
                        "career": "Keep your core standards while adapting the method.",
                        "health": "Protect the basic habits that help your body recover.",
                        "finances": "Separate temporary volatility from real structural change.",
                        "relationships": "Protect the relationships that have proven important over time."
                    }
                },
                "6": {
                    "name": "After the Storm",
                    "text": "The worst may already be over, but fear can keep you on edge. Stay alert without imagining threats that are no longer there.",
                    "main_state": "Awareness without unnecessary fear",
                    "main_strategy": "Stay cautious, but do not frighten yourself",
                    "support_risk": "Hypervigilance after repeated shocks",
                    "support_warning": "Assuming the worst before anything has happened",
                    "guide": {
                        "love": "Give yourself recovery time:\n• Face the relationship again when ready.",
                        "career": "Review the damage:\n• Rest, then restart with experience.",
                        "health": "Recover fully:\n• Return to activity gradually.",
                        "finances": "Observe before making big moves:\n• Decide after recovery.",
                        "relationships": "Face the wounds honestly:\n• Let time and action rebuild trust."
                    },
                    "focus": {
                        "love": "Allow recovery instead of pretending the shock no longer affects you.",
                        "career": "Take time to review losses and rebuild resources before accelerating again.",
                        "health": "Return to activity gradually after prolonged stress.",
                        "finances": "Reassess before making large moves after a volatile period.",
                        "relationships": "A repaired relationship still needs time and consistent action to rebuild trust."
                    }
                }
            },
            "gen": {
                "1": {
                    "name": "Stop Early",
                    "text": "You notice something is wrong before taking the next step and stop in time. That awareness can prevent unnecessary trouble.",
                    "main_state": "A well-timed pause based on early awareness",
                    "main_strategy": "Notice small signs and do not force action",
                    "support_risk": "The urge to move too fast",
                    "support_warning": "Acting when observation would be wiser",
                    "guide": {
                        "love": "Stay with the present feeling:\n• Pause to see the direction clearly.",
                        "career": "Stop chasing the next goal:\n• Organize current work first.",
                        "health": "Allow real rest:\n• Let the body stop running.",
                        "finances": "Pause impulsive decisions:\n• Review the whole picture calmly.",
                        "relationships": "Return to your own center:\n• Separate what matters from noise."
                    },
                    "focus": {
                        "love": "If the relationship feels confusing, pause before trying to define or fix everything.",
                        "career": "When work feels frantic, stop and organize what is already in front of you.",
                        "health": "Let yourself rest without turning rest into another task.",
                        "finances": "Pause financial decisions when anxiety is driving them.",
                        "relationships": "Do not answer every demand immediately; return to what actually matters."
                    }
                },
                "2": {
                    "name": "Respect the Limit",
                    "text": "You know restraint is needed, but you cannot control everything around you. Protect your own part and do not force yourself into what you cannot change.",
                    "main_state": "Stability through staying within your role",
                    "main_strategy": "Stay clear about what is yours to manage",
                    "support_risk": "The urge to rescue the whole situation",
                    "support_warning": "Interfering in something you cannot control",
                    "guide": {
                        "love": "Respect the other person’s pace:\n• Do not cross their boundary.",
                        "career": "Share your view, then let go:\n• Respect what you cannot control.",
                        "health": "Allow normal variation:\n• Choose gentle consistency.",
                        "finances": "Accept reasonable returns:\n• Do not force trades.",
                        "relationships": "Know when to step closer or back:\n• Respect a no."
                    },
                    "focus": {
                        "love": "Respect the other person’s pace instead of forcing your care on them.",
                        "career": "Offer your view, then respect decisions you do not control.",
                        "health": "Allow health routines to have normal variation without self-punishment.",
                        "finances": "Accept reasonable returns and normal volatility instead of forcing trades.",
                        "relationships": "Know when care is welcome and when stepping back is more respectful."
                    }
                },
                "3": {
                    "name": "Release the Tension",
                    "text": "Trying too hard to be still can become another form of strain. Restraint helps, but over-control hurts. Relax and return to a more natural rhythm.",
                    "main_state": "Relief through releasing unnecessary tension",
                    "main_strategy": "Drop rigid control and return to a sustainable pace",
                    "support_risk": "Tightness from pushing too hard",
                    "support_warning": "Hurting yourself by treating rest as another performance",
                    "guide": {
                        "love": "Control your response, not the other person:\n• Bring attention back to yourself.",
                        "career": "Focus on effort, attitude, and growth:\n• Stop spending energy on the uncontrollable.",
                        "health": "Do what is in your control:\n• Accept the rest.",
                        "finances": "Manage your discipline, not market movement:\n• Reduce anxiety through structure.",
                        "relationships": "Control your response, not others’ opinions:\n• Stay within your own boundary."
                    },
                    "focus": {
                        "love": "Focus on your own response instead of trying to control the other person.",
                        "career": "Put energy into your effort, attitude, and professional growth.",
                        "health": "Do what you can for your health and accept what is outside your control.",
                        "finances": "Control your discipline, not the market.",
                        "relationships": "You cannot control others’ opinions, only how you respond."
                    }
                },
                "4": {
                    "name": "Return to Yourself",
                    "text": "Your attention comes back to your own center instead of being pulled by outside approval. That inner stability helps you stay calm wherever you are.",
                    "main_state": "Greater inner stability",
                    "main_strategy": "Settle your own body and mind instead of seeking validation outside",
                    "support_risk": "The urge to seek approval",
                    "support_warning": "Looking outward constantly because you feel insecure",
                    "guide": {
                        "love": "Check your real feelings and values:\n• Ignore unnecessary outside noise.",
                        "career": "Protect your professional rhythm:\n• Let inner stability guide judgment.",
                        "health": "Keep a quiet daily practice:\n• Let the nervous system settle.",
                        "finances": "Do not let noise move your rules:\n• Decide from a calm place.",
                        "relationships": "Keep your own values:\n• Do not let group pressure carry you away."
                    },
                    "focus": {
                        "love": "Return to your own feelings and values instead of outside noise.",
                        "career": "Keep your own professional rhythm and judgment during workplace turbulence.",
                        "health": "Keep a quiet daily practice that helps your nervous system settle.",
                        "finances": "Do not let market noise override your financial rules.",
                        "relationships": "Stay with your own values when group pressure gets loud."
                    }
                },
                "5": {
                    "name": "Speak with Restraint",
                    "text": "You know when to speak and when silence is wiser. Thoughtful words carry more weight than quick reactions.",
                    "main_state": "Avoiding trouble through careful speech",
                    "main_strategy": "Think before speaking",
                    "support_risk": "The urge to say everything immediately",
                    "support_warning": "Saying something in haste that you later regret",
                    "guide": {
                        "love": "Do not chase or control:\n• Let steadiness create trust.",
                        "career": "Speak with purpose:\n• Act at a sustainable pace.",
                        "health": "Keep food, sleep, and activity balanced:\n• Avoid extremes.",
                        "finances": "Avoid showing off, impulse, and greed:\n• Build steadily.",
                        "relationships": "Think before important words:\n• Use restraint to build trust."
                    },
                    "focus": {
                        "love": "A steadier relationship comes from less chasing, less control, and better timing.",
                        "career": "Make your words focused and your commitments realistic.",
                        "health": "Health improves through moderation and regularity rather than extremes.",
                        "finances": "Steady finances come from restraint: no showing off, panic, or greed.",
                        "relationships": "Think before important words; measured speech builds trust."
                    }
                },
                "6": {
                    "name": "Lasting Stillness",
                    "text": "Stillness has become a stable quality rather than forced restraint. Keep this grounded way of living and let it support the rest of your life.",
                    "main_state": "A mature and lasting sense of stability",
                    "main_strategy": "Turn inner calm into a long-term way of living",
                    "support_risk": "The effort of maintaining steady discipline",
                    "support_warning": "Gradually losing the stability you worked to build",
                    "guide": {
                        "love": "Appreciate the stability you already have:\n• Do not chase outside proof.",
                        "career": "Keep improving without chasing status:\n• Let inner confidence matter more than applause.",
                        "health": "Stay with a balanced routine:\n• Let stability become the goal.",
                        "finances": "Know when enough is enough:\n• Keep managing steadily.",
                        "relationships": "Value the people already here:\n• Let existing connection be enough."
                    },
                    "focus": {
                        "love": "If the relationship is already secure, stop searching for outside proof and appreciate what is here.",
                        "career": "Do not chase status once your work already has substance; keep improving without needing applause.",
                        "health": "Stay with a balanced routine rather than searching for extreme methods.",
                        "finances": "When finances are stable, know what is enough and keep managing calmly.",
                        "relationships": "Value the sincere relationships already in your life instead of chasing constant new approval."
                    }
                }
            },
            "jian_progress": {
                "1": {
                    "name": "Seed",
                    "text": "You are at the beginning of a new path. Learn the environment, settle the basics, and build a stable base before reaching farther.",
                    "main_state": "A calm start that stays steady despite outside comments",
                    "main_strategy": "Build the foundation and keep your direction",
                    "support_risk": "Outside opinions and casual criticism",
                    "support_warning": "Letting other people’s comments shake your pace",
                    "guide": {
                        "love": "Know your needs and boundaries:\n• Move forward when ready.",
                        "career": "Observe, learn, and build connections:\n• Start steadily.",
                        "health": "Begin with simple habits:\n• Let your body adapt.",
                        "finances": "Track spending and build a base:\n• Do not chase high returns yet.",
                        "relationships": "Observe before getting close:\n• Let trust grow slowly."
                    },
                    "focus": {
                        "love": "Know your needs and boundaries. Move forward when ready.",
                        "career": "Observe, learn, and build connections. Start steadily.",
                        "health": "Begin with simple habits. Let your body adapt.",
                        "finances": "Track spending and build a base. Do not chase high returns yet.",
                        "relationships": "Observe before getting close. Let trust grow slowly."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You have reached a stable resting point where you can recover and gather strength. Enjoy it, but remember it is a stop along the way, not the final destination.",
                    "main_state": "A stable phase that restores energy for the next step",
                    "main_strategy": "Use this calm period to recharge",
                    "support_risk": "Restlessness to move ahead too soon",
                    "support_warning": "Failing to appreciate stability because you are already chasing the next stage",
                    "guide": {
                        "love": "• Express needs without suppressing or exploding.",
                        "career": "State your position clearly:\n• Protect yourself without creating conflict.",
                        "health": "• Listen to your body and rest when needed.",
                        "finances": "Face your finances honestly:\n• Do not avoid problems.",
                        "relationships": "Speak from your own feelings:\n• Be firm without being harsh."
                    },
                    "focus": {
                        "love": "Express needs without suppressing or exploding.",
                        "career": "State your position clearly. Protect yourself without creating conflict.",
                        "health": "Listen to your body and rest when needed.",
                        "finances": "Face your finances honestly. Do not avoid problems.",
                        "relationships": "Speak from your own feelings. Be firm without being harsh."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You moved ahead too quickly and left a safer position before you were ready. Step back, prepare again, and choose stability over forcing progress.",
                    "main_state": "Returning to stability before taking more risk",
                    "main_strategy": "Protect your base before advancing again",
                    "support_risk": "The urge to push ahead alone",
                    "support_warning": "Leaving needed support just to prove yourself",
                    "guide": {
                        "love": "Respect both people’s pace:\n• Know the difference between patience and wasted time.",
                        "career": "Pause and review direction:\n• The right path matters more than speed.",
                        "health": "• Choose gentle, sustainable progress.",
                        "finances": "Build a system you can sustain:\n• Slow and steady lasts.",
                        "relationships": "Talk about both sides’ needs:\n• Find a pace that works for everyone."
                    },
                    "focus": {
                        "love": "Respect both people’s pace. Know the difference between patience and wasted time.",
                        "career": "Pause and review direction. The right path matters more than speed.",
                        "health": "Choose gentle, sustainable progress.",
                        "finances": "Build a system you can sustain. Slow and steady lasts.",
                        "relationships": "Talk about both sides’ needs. Find a pace that works for everyone."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have reached a place that looks promising but may not be secure. Stay flexible and move before an unstable position becomes a trap.",
                    "main_state": "Flexibility that finds a workable place to stand",
                    "main_strategy": "Adapt to change instead of demanding perfect conditions",
                    "support_risk": "Feeling unsettled because conditions are not ideal",
                    "support_warning": "Rejecting a useful temporary solution because it is not perfect",
                    "guide": {
                        "love": "Take a sincere step forward:\n• Do not wait forever for a perfect moment.",
                        "career": "Show your value proactively:\n• Opportunity favors action.",
                        "health": "• Start today with what is possible.",
                        "finances": "• Act on opportunities you have evaluated carefully.",
                        "relationships": "Show sincere interest:\n• Move toward people you value."
                    },
                    "focus": {
                        "love": "Take a sincere step forward. Do not wait forever for a perfect moment.",
                        "career": "Show your value proactively. Opportunity favors action.",
                        "health": "Start today with what is possible.",
                        "finances": "Act on opportunities you have evaluated carefully.",
                        "relationships": "Show sincere interest. Move toward people you value."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "After a long journey, you have reached a meaningful milestone. Pause, recognize how far you have come, and use this higher view to choose the next direction.",
                    "main_state": "A long effort reaching a rewarding milestone",
                    "main_strategy": "Stay patient and let time prove the work",
                    "support_risk": "A long period of waiting and testing",
                    "support_warning": "Giving up just before the result finally appears",
                    "guide": {
                        "love": "Value what took time to build:\n• Use pauses to check direction.",
                        "career": "Keep moving steadily:\n• Do not relax too soon.",
                        "health": "• Keep the habits that helped you improve.",
                        "finances": "• Maintain discipline and risk control.",
                        "relationships": "Thank the people who stayed with you:\n• Keep caring for the relationship."
                    },
                    "focus": {
                        "love": "Value what took time to build. Use pauses to check direction.",
                        "career": "Keep moving steadily. Do not relax too soon.",
                        "health": "Keep the habits that helped you improve.",
                        "finances": "Maintain discipline and risk control.",
                        "relationships": "Thank the people who stayed with you. Keep caring for the relationship."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You have completed your path and now carry experience that can guide others. Share what you learned without being trapped by status or recognition.",
                    "main_state": "Completion through integrity and perspective",
                    "main_strategy": "Finish your path with integrity and share what you learned",
                    "support_risk": "Letting go of some status or material reward",
                    "support_warning": "Choosing outside recognition over inner completion",
                    "guide": {
                        "love": "Slow down when needed:\n• Recheck shared goals.",
                        "career": "Review your direction regularly:\n• Adjust when the path no longer fits.",
                        "health": "• Keep what works and change what does not.",
                        "finances": "• Review the whole plan and rebalance when needed.",
                        "relationships": "Look back together:\n• Keep important relationships updated."
                    },
                    "focus": {
                        "love": "Slow down when needed. Recheck shared goals.",
                        "career": "Review your direction regularly. Adjust when the path no longer fits.",
                        "health": "Keep what works and change what does not.",
                        "finances": "Review the whole plan and rebalance when needed.",
                        "relationships": "Look back together. Keep important relationships updated."
                    }
                }
            },
            "guimei": {
                "1": {
                    "name": "Seed",
                    "text": "You may be in a supporting role that feels smaller than what you deserve. Do the current role well without letting disappointment define your future.",
                    "main_state": "Practical progress from a supporting position",
                    "main_strategy": "Understand your role and do it well",
                    "support_risk": "Feeling overlooked or secondary",
                    "support_warning": "Forcing authority that is not truly yours",
                    "guide": {
                        "love": "• Check whether the relationship has a healthy foundation.",
                        "career": "Earn results through ability:\n• Avoid shortcuts.",
                        "health": "• Avoid extreme quick fixes.",
                        "finances": "• Avoid questionable paths to fast money.",
                        "relationships": "• Leave unhealthy relationships early."
                    },
                    "focus": {
                        "love": "Check whether the relationship has a healthy foundation.",
                        "career": "Earn results through ability. Avoid shortcuts.",
                        "health": "Avoid extreme quick fixes.",
                        "finances": "Avoid questionable paths to fast money.",
                        "relationships": "Leave unhealthy relationships early."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Conditions are imperfect, but you are still holding to your principles. Your focus may help you see opportunities others miss.",
                    "main_state": "Steady commitment to principle",
                    "main_strategy": "Stay clear and do not compromise what matters",
                    "support_risk": "Frustration with imperfect conditions",
                    "support_warning": "Abandoning your standards because the environment is difficult",
                    "guide": {
                        "love": "Do not lower yourself to keep love:\n• Choose equality.",
                        "career": "Stay confident and professional:\n• Your contribution deserves respect.",
                        "health": "• Make time for your own care.",
                        "finances": "Plan for peace of mind:\n• Do not act from scarcity.",
                        "relationships": "• Do not please others from insecurity."
                    },
                    "focus": {
                        "love": "Do not lower yourself to keep love. Choose equality.",
                        "career": "Stay confident and professional. Your contribution deserves respect.",
                        "health": "Make time for your own care.",
                        "finances": "Plan for peace of mind. Do not act from scarcity.",
                        "relationships": "Do not please others from insecurity."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You want recognition so badly that impatience may undermine you. Slow down, stop forcing the outcome, and let solid work create the opening.",
                    "main_state": "Returning from impatience to solid effort",
                    "main_strategy": "Drop the rush and act with discipline",
                    "support_risk": "The urge to take shortcuts for quick recognition",
                    "support_warning": "Using the wrong method just to be noticed sooner",
                    "guide": {
                        "love": "Stop waiting where nothing changes:\n• Choose differently for yourself.",
                        "career": "• Create opportunities through action and value.",
                        "health": "• Start caring for your body now.",
                        "finances": "• Start early, even with small amounts.",
                        "relationships": "• Invest in people who also value you."
                    },
                    "focus": {
                        "love": "Stop waiting where nothing changes. Choose differently for yourself.",
                        "career": "Create opportunities through action and value.",
                        "health": "Start caring for your body now.",
                        "finances": "Start early, even with small amounts.",
                        "relationships": "Invest in people who also value you."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "A delay may be wiser than forcing a result before the time is right. Waiting longer for a better fit can be better than settling quickly.",
                    "main_state": "Choosing patience over settling",
                    "main_strategy": "Wait for a truly suitable time or choice",
                    "support_risk": "Anxiety that pushes you to settle",
                    "support_warning": "Accepting a poor fit because you are tired of waiting",
                    "guide": {
                        "love": "Face what you now see clearly:\n• Make an honest choice.",
                        "career": "Look past appearances:\n• Adjust when the facts change.",
                        "health": "• Stop delaying what needs attention.",
                        "finances": "• Do not keep a bad decision just because you already invested.",
                        "relationships": "• Stop making excuses for unhealthy behavior."
                    },
                    "focus": {
                        "love": "Face what you now see clearly. Make an honest choice.",
                        "career": "Look past appearances. Adjust when the facts change.",
                        "health": "Stop delaying what needs attention.",
                        "finances": "Do not keep a bad decision just because you already invested.",
                        "relationships": "Stop making excuses for unhealthy behavior."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "You hold value without needing to display it. A simple, sincere approach creates more respect than status or show.",
                    "main_state": "Quiet strength built on sincerity",
                    "main_strategy": "Stay genuine instead of trying to impress",
                    "support_risk": "The urge to compare or appear more impressive",
                    "support_warning": "Letting appearances matter more than sincerity",
                    "guide": {
                        "love": "• Keep your boundary if returning would repeat the same harm.",
                        "career": "• Trust a well-considered decision and move forward.",
                        "health": "• Use support to get through difficult change.",
                        "finances": "• Trust a clear stop-loss decision.",
                        "relationships": "• Set firm, kind boundaries and move on."
                    },
                    "focus": {
                        "love": "Keep your boundary if returning would repeat the same harm.",
                        "career": "Trust a well-considered decision and move forward.",
                        "health": "Use support to get through difficult change.",
                        "finances": "Trust a clear stop-loss decision.",
                        "relationships": "Set firm, kind boundaries and move on."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Both sides may be giving effort that does not meet the other side’s real need. Align expectations honestly; if the fit is wrong, recognizing it early can be kinder.",
                    "main_state": "Completion through real effort rather than empty form",
                    "main_strategy": "Return to sincere, useful action",
                    "support_risk": "Discovering that effort has become superficial",
                    "support_warning": "Replacing real care with empty form because it is easier",
                    "guide": {
                        "love": "• Accept when a relationship has ended.",
                        "career": "• Stop investing in what no longer works.",
                        "health": "• Stop ineffective methods and seek a new direction.",
                        "finances": "• End unrecoverable investments and restart.",
                        "relationships": "• Let an unrepairable relationship end cleanly."
                    },
                    "focus": {
                        "love": "Accept when a relationship has ended.",
                        "career": "Stop investing in what no longer works.",
                        "health": "Stop ineffective methods and seek a new direction.",
                        "finances": "End unrecoverable investments and restart.",
                        "relationships": "Let an unrepairable relationship end cleanly."
                    }
                }
            },
            "feng": {
                "1": {
                    "name": "Seed",
                    "text": "You meet someone with comparable ability and standing. Treat each other as partners rather than rivals; honest cooperation can take both of you farther.",
                    "main_state": "A strong partnership between capable equals",
                    "main_strategy": "Work with complementary people as equals",
                    "support_risk": "Time needed to build rhythm and trust",
                    "support_warning": "Rushing collaboration before you understand each other",
                    "guide": {
                        "love": "• Be sincere and do not idealize the other person.",
                        "career": "• Confirm you are ready before taking the opportunity.",
                        "health": "• Maintain good habits while you feel well.",
                        "finances": "• Study the opportunity before acting.",
                        "relationships": "• Build new connections through genuine trust."
                    },
                    "focus": {
                        "love": "Be sincere and do not idealize the other person.",
                        "career": "Confirm you are ready before taking the opportunity.",
                        "health": "Maintain good habits while you feel well.",
                        "finances": "Study the opportunity before acting.",
                        "relationships": "Build new connections through genuine trust."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "Your view is temporarily clouded even though opportunity is present. Do not make a major decision until the situation becomes clearer.",
                    "main_state": "Clarity restored through sincerity and patience",
                    "main_strategy": "Use honesty and patience to clear doubt",
                    "support_risk": "Feeling misunderstood or distrusted",
                    "support_warning": "Reacting aggressively because you feel misjudged",
                    "guide": {
                        "love": "• Notice whether your sincerity is valued.",
                        "career": "Stay clear-minded during success:\n• Correct problems early.",
                        "health": "• Keep up checkups and notice warning signs.",
                        "finances": "• Stay cautious even in good conditions.",
                        "relationships": "• Choose sincere relationships over surface-level activity."
                    },
                    "focus": {
                        "love": "Notice whether your sincerity is valued.",
                        "career": "Stay clear-minded during success. Correct problems early.",
                        "health": "Keep up checkups and notice warning signs.",
                        "finances": "Stay cautious even in good conditions.",
                        "relationships": "Choose sincere relationships over surface-level activity."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Important information may be hidden or missing. Do not choose in the dark; pause, investigate, and protect yourself until you can see clearly.",
                    "main_state": "Resilience through accepting limits and protecting yourself",
                    "main_strategy": "Acknowledge limits and rest before pushing again",
                    "support_risk": "A real loss or setback",
                    "support_warning": "Trying to prove strength while already hurt",
                    "guide": {
                        "love": "• Care for yourself and set boundaries.",
                        "career": "• Reject unsustainable demands and make room for rest.",
                        "health": "• Schedule rest and proper checks.",
                        "finances": "Give only what you can afford:\n• Protect your own stability first.",
                        "relationships": "• Set boundaries without guilt."
                    },
                    "focus": {
                        "love": "Care for yourself and set boundaries.",
                        "career": "Reject unsustainable demands and make room for rest.",
                        "health": "Schedule rest and proper checks.",
                        "finances": "Give only what you can afford. Protect your own stability first.",
                        "relationships": "Set boundaries without guilt."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "A helpful person appears while things are unclear and shows you what you could not see alone. Value the support and use it to find direction.",
                    "main_state": "A turning point through the right ally",
                    "main_strategy": "Seek people who can help you see more clearly",
                    "support_risk": "A period of confusion or blocked visibility",
                    "support_warning": "Giving up on finding support because the way is unclear",
                    "guide": {
                        "love": "• Keep adding fresh energy to the relationship.",
                        "career": "• Keep learning and improving.",
                        "health": "• Refresh routines and improve what works.",
                        "finances": "• Review and improve your strategy regularly.",
                        "relationships": "• Build new connections while deepening important old ones."
                    },
                    "focus": {
                        "love": "Keep adding fresh energy to the relationship.",
                        "career": "Keep learning and improving.",
                        "health": "Refresh routines and improve what works.",
                        "finances": "Review and improve your strategy regularly.",
                        "relationships": "Build new connections while deepening important old ones."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Strong people, ideas, and resources are gathering around you. Stay open to different voices and share success so the abundance can keep growing.",
                    "main_state": "Strong results through welcoming talent and ideas",
                    "main_strategy": "Stay open to useful advice and help",
                    "support_risk": "The work of integrating different opinions",
                    "support_warning": "Rejecting valuable input because you insist on your own view",
                    "guide": {
                        "love": "• Share time and care generously.",
                        "career": "• Share knowledge, opportunity, and resources.",
                        "health": "• Invest in your own health.",
                        "finances": "• Use part of your abundance to help where it matters.",
                        "relationships": "• Share time, care, and useful resources."
                    },
                    "focus": {
                        "love": "Share time and care generously.",
                        "career": "Share knowledge, opportunity, and resources.",
                        "health": "Invest in your own health.",
                        "finances": "Use part of your abundance to help where it matters.",
                        "relationships": "Share time, care, and useful resources."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Success can turn into isolation or excess if it becomes a way to prove status. Stay connected, stay modest, and let enough be enough.",
                    "main_state": "Staying connected instead of becoming isolated",
                    "main_strategy": "Keep your heart open and maintain relationships",
                    "support_risk": "The urge to withdraw or disconnect",
                    "support_warning": "Pushing people away because you feel successful or exhausted",
                    "guide": {
                        "love": "• Keep caring for the relationship even when things are good.",
                        "career": "• Stay humble and alert at the top.",
                        "health": "• Do not use good health as an excuse to overdo it.",
                        "finances": "• Do not let comfort turn into waste.",
                        "relationships": "• Do not neglect individual relationships just because your circle is large."
                    },
                    "focus": {
                        "love": "Keep caring for the relationship even when things are good.",
                        "career": "Stay humble and alert at the top.",
                        "health": "Do not use good health as an excuse to overdo it.",
                        "finances": "Do not let comfort turn into waste.",
                        "relationships": "Do not neglect individual relationships just because your circle is large."
                    }
                }
            },
            "lv": {
                "1": {
                    "name": "Seed",
                    "text": "At the start of a journey, small complaints can damage first impressions. Be generous about minor inconveniences and protect the larger relationship or opportunity.",
                    "main_state": "Ease through generosity and perspective",
                    "main_strategy": "Stay broad-minded and do not fight over small things",
                    "support_risk": "The temptation to gain a small advantage",
                    "support_warning": "Damaging a long-term opportunity for a minor benefit",
                    "guide": {
                        "love": "• Enter with a sincere intention.",
                        "career": "• Keep your purpose simple: do good work.",
                        "health": "• Care for your body because it matters.",
                        "finances": "• Build for a stable life, not for comparison.",
                        "relationships": "• Connect without calculating what you can gain."
                    },
                    "focus": {
                        "love": "Enter with a sincere intention.",
                        "career": "Keep your purpose simple: do good work.",
                        "health": "Care for your body because it matters.",
                        "finances": "Build for a stable life, not for comparison.",
                        "relationships": "Connect without calculating what you can gain."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You have found a stable place and reliable support in unfamiliar surroundings. Settle in, use trustworthy resources, and treat people well.",
                    "main_state": "Stability through reliable support",
                    "main_strategy": "Use dependable resources and partners around you",
                    "support_risk": "The effort of finding support you can trust",
                    "support_warning": "Trusting the wrong person just because you want stability quickly",
                    "guide": {
                        "love": "• Accept your own relationship pace.",
                        "career": "• Do your current role well before reaching higher.",
                        "health": "• Accept your current condition and care for it steadily.",
                        "finances": "• Manage today’s income and spending well.",
                        "relationships": "Do not compete for attention:\n• Let the right people come closer."
                    },
                    "focus": {
                        "love": "Accept your own relationship pace.",
                        "career": "Do your current role well before reaching higher.",
                        "health": "Accept your current condition and care for it steadily.",
                        "finances": "Manage today’s income and spending well.",
                        "relationships": "Do not compete for attention. Let the right people come closer."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "A sudden setback may remove what felt secure. Do not panic; what is lost can also create space to rebuild in a better way.",
                    "main_state": "Keeping support by softening under pressure",
                    "main_strategy": "Manage your temper and treat supporters with care",
                    "support_risk": "Becoming irritable under stress",
                    "support_warning": "Taking frustration out on people who are helping you",
                    "guide": {
                        "love": "• Release control and let both people speak.",
                        "career": "• Delegate and learn to trust others.",
                        "health": "• Relax control and aim for balance, not perfection.",
                        "finances": "Leave some room to enjoy life:\n• Money should serve life.",
                        "relationships": "• Listen more and control less."
                    },
                    "focus": {
                        "love": "Release control and let both people speak.",
                        "career": "Delegate and learn to trust others.",
                        "health": "Relax control and aim for balance, not perfection.",
                        "finances": "Leave some room to enjoy life. Money should serve life.",
                        "relationships": "Listen more and control less."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have found a workable place and enough support to settle for now. Build carefully and let a temporary stop become a meaningful new beginning.",
                    "main_state": "Calm adaptation while belonging develops",
                    "main_strategy": "Settle patiently and let belonging grow over time",
                    "support_risk": "A lingering feeling of being unsettled",
                    "support_warning": "Ignoring inner discomfort because things look stable outside",
                    "guide": {
                        "love": "Show your real self:\n• Sincerity matters more than image.",
                        "career": "• Stay teachable and cooperative.",
                        "health": "• Respect your body’s limits.",
                        "finances": "• Keep wealth low-key and avoid showing off.",
                        "relationships": "• Appreciate others sincerely and stay modest."
                    },
                    "focus": {
                        "love": "Show your real self. Sincerity matters more than image.",
                        "career": "Stay teachable and cooperative.",
                        "health": "Respect your body’s limits.",
                        "finances": "Keep wealth low-key and avoid showing off.",
                        "relationships": "Appreciate others sincerely and stay modest."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Showing your ability may cost something, but it can also earn respect and open doors. When the opportunity is worthwhile, let your value be seen.",
                    "main_state": "Recognition earned by showing ability and character",
                    "main_strategy": "Use the opportunity to demonstrate real value",
                    "support_risk": "A real cost attached to being seen",
                    "support_warning": "Holding back simply because showing yourself has a price",
                    "guide": {
                        "love": "• Check whether core values and direction match.",
                        "career": "• Confirm your direction before a major decision.",
                        "health": "• Gather information and seek qualified advice.",
                        "finances": "• Evaluate fully and keep emergency funds.",
                        "relationships": "• Let time test whether promises are mutual."
                    },
                    "focus": {
                        "love": "Check whether core values and direction match.",
                        "career": "Confirm your direction before a major decision.",
                        "health": "Gather information and seek qualified advice.",
                        "finances": "Evaluate fully and keep emergency funds.",
                        "relationships": "Let time test whether promises are mutual."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "A place you trusted may not be as safe as it seemed. If the foundation is failing, leave early rather than clinging to a collapsing shelter.",
                    "main_state": "Caution through humility and awareness",
                    "main_strategy": "Stay humble and alert even when things go well",
                    "support_risk": "Relaxing too much and losing awareness",
                    "support_warning": "Letting smooth conditions erase caution",
                    "guide": {
                        "love": "• Turn past hurt into better judgment.",
                        "career": "• Use old mistakes as future guidance.",
                        "health": "• Turn lessons into practical change.",
                        "finances": "• Turn past losses into clear decision rules.",
                        "relationships": "• Learn discernment without closing yourself off."
                    },
                    "focus": {
                        "love": "Turn past hurt into better judgment.",
                        "career": "Use old mistakes as future guidance.",
                        "health": "Turn lessons into practical change.",
                        "finances": "Turn past losses into clear decision rules.",
                        "relationships": "Learn discernment without closing yourself off."
                    }
                }
            },
            "xun": {
                "1": {
                    "name": "Beginning",
                    "text": "You hesitate between moving forward and pulling back. Waiting for direction has weakened your own judgment. Decide what you believe, take one step, and let the path become clearer through action.",
                    "main_state": "Finding firmness through a clear decision",
                    "main_strategy": "Choose a direction and commit to it",
                    "support_risk": "Indecision and second-guessing",
                    "support_warning": "Thinking so long that no decision is made",
                    "guide": {
                        "love": "Be clear about what you feel:\n• Act once you know.\n• Do not let hesitation drain trust.",
                        "career": "Think carefully, then act:\n• Do not overanalyze.\n• Decisiveness can be thoughtful.",
                        "health": "Choose a reasonable plan and follow it:\n• Avoid constant changes.\n• Give it time to work.",
                        "finances": "Pick a sound approach and stay consistent:\n• Do not react to every fluctuation.\n• Let discipline work.",
                        "relationships": "Keep promises and say no clearly:\n• Consistency builds trust."
                    },
                    "focus": {
                        "love": "Once you know what you want, express it clearly. Repeated hesitation can confuse both people.",
                        "career": "Prepare, then act. Too much analysis can cost you a real opportunity.",
                        "health": "Choose a sensible health plan and follow it long enough to judge the result.",
                        "finances": "Consistency matters more than repeatedly changing strategies in response to short-term moves.",
                        "relationships": "Be dependable: do what you agree to do and be clear when you cannot."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "You have become so accommodating that your own voice is hard to hear. Humility is useful, but shrinking yourself is not. Stay respectful while allowing your value and judgment to be visible.",
                    "main_state": "Understanding reality through humility",
                    "main_strategy": "Go close to the situation and learn what is truly needed",
                    "support_risk": "The effort required to understand people and details",
                    "support_warning": "Judging from surface information because deeper work feels inconvenient",
                    "guide": {
                        "love": "Lead through action, not pressure:\n• Stay kind and clear.\n• Let consistency speak.",
                        "career": "Let results build influence:\n• Stay modest, not invisible.\n• Earn trust over time.",
                        "health": "Make one small improvement each day:\n• Keep it sustainable.\n• Let habits compound.",
                        "finances": "Save a little more and waste a little less:\n• Adjust gradually.\n• Let small gains add up.",
                        "relationships": "Show steady, quiet care:\n• Be consistent.\n• Let trust deepen."
                    },
                    "focus": {
                        "love": "A steady example can influence the relationship without trying to change the other person.",
                        "career": "Let your work and results carry your influence. Humility works best when your contribution is still visible.",
                        "health": "Small daily changes are easier to sustain than dramatic resets.",
                        "finances": "Improve finances through small, repeated adjustments instead of sudden overhauls.",
                        "relationships": "Quiet, consistent care often builds stronger trust than big displays."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You may be trying too hard to please everyone. Flexibility without limits turns into self-erasure. Cooperate where it makes sense, but keep your principles and speak when something matters.",
                    "main_state": "Regaining dignity by restoring boundaries",
                    "main_strategy": "Stand up for your own limits",
                    "support_risk": "Giving way so often that you lose yourself",
                    "support_warning": "Sacrificing your position just to keep the peace",
                    "guide": {
                        "love": "State your real needs:\n• Keep healthy boundaries.\n• Do not disappear inside the relationship.",
                        "career": "Respect the system and keep your professional judgment:\n• Speak when it matters.\n• Stay principled.",
                        "health": "Listen to your own body:\n• Respect your pace.\n• Do not copy every trend.",
                        "finances": "Make financial choices you understand:\n• Know your risk limits.\n• Do not invest for approval.",
                        "relationships": "Do not agree just to avoid conflict:\n• Speak honestly.\n• Let respect replace approval-seeking."
                    },
                    "focus": {
                        "love": "Closeness does not require giving up your own needs. Speak gently but clearly about your limits.",
                        "career": "Respect others, but do not silence valid professional judgment just to avoid friction.",
                        "health": "Use advice as input, not a replacement for your own body signals and professional guidance.",
                        "finances": "Do not copy someone else’s financial decisions when they exceed your own understanding or risk tolerance.",
                        "relationships": "The right people do not require constant agreement. Honest boundaries help relationships become more real."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have moved beyond hesitation and gained a real result. Earlier restraint was not wasted. Use what you have gained as a base for the next step instead of rushing past it.",
                    "main_state": "Creating results through balanced coordination",
                    "main_strategy": "Use flexibility to bring different sides together",
                    "support_risk": "The effort of balancing competing positions",
                    "support_warning": "Giving up the bridge-building role because coordination is tiring",
                    "guide": {
                        "love": "Stay soft in tone and firm in values:\n• Protect what matters.\n• Balance closeness and strength.",
                        "career": "Adapt without losing standards:\n• Communicate calmly.\n• Stay effective under change.",
                        "health": "Keep the goal steady and methods flexible:\n• Adjust when needed.\n• Do not force progress.",
                        "finances": "Keep long-term goals while adapting tactics:\n• Stay calm through change.\n• Do not chase noise.",
                        "relationships": "Balance closeness with independence:\n• Compromise without disappearing.\n• Stay flexible."
                    },
                    "focus": {
                        "love": "A relationship is strongest when gentleness and firmness can coexist.",
                        "career": "Adapt to change while keeping professional standards and clear boundaries.",
                        "health": "Stay committed to health goals, but change the method when your body needs a different approach.",
                        "finances": "Keep the long-term plan stable while adjusting details as conditions change.",
                        "relationships": "Flexibility helps you connect with different people without losing your identity."
                    }
                },
                "5": {
                    "name": "Fulfillment",
                    "text": "After repeated adjustments, your direction is finally clear. Plan before changing course, then follow through carefully. Good preparation keeps reform from creating new problems.",
                    "main_state": "Strong results through careful planning",
                    "main_strategy": "Think ahead, act deliberately, and follow up",
                    "support_risk": "Unclear conditions at the start",
                    "support_warning": "Skipping planning because the situation feels uncertain",
                    "guide": {
                        "love": "Improve your own behavior first:\n• Lead by example.\n• Let change be visible.",
                        "career": "Set the standard yourself:\n• Make actions match words.\n• Let results lead.",
                        "health": "Start with your own routine:\n• Make the habit visible.\n• Let others follow by choice.",
                        "finances": "Practice the plan yourself first:\n• Share results, not pressure.\n• Let evidence speak.",
                        "relationships": "Change your own communication first:\n• Lower unnecessary defenses.\n• Let the new pattern spread."
                    },
                    "focus": {
                        "love": "If you want the relationship to change, begin with what you control: your own tone, habits, and responses.",
                        "career": "Leadership is strongest when your own behavior meets the standard you ask of others.",
                        "health": "Build the health routine yourself rather than trying to control what others do.",
                        "finances": "Use your own disciplined results as an example instead of pressuring others to copy you.",
                        "relationships": "Changing your part of the interaction can shift the whole relationship pattern."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You have yielded too much and left yourself without room to move. Flexibility does not mean surrendering every boundary. It is time to stand up and protect what matters.",
                    "main_state": "Restoring balance by taking back agency",
                    "main_strategy": "Take back appropriate control instead of always giving way",
                    "support_risk": "Over-accommodation and weak self-protection",
                    "support_warning": "Letting habitual surrender remove necessary boundaries",
                    "guide": {
                        "love": "Balance kindness with firmness:\n• State your limits.\n• Let care have structure.",
                        "career": "Stay modest while showing your work:\n• Make your contribution visible.\n• Protect your role.",
                        "health": "Choose moderate exercise and balanced food:\n• Avoid extremes.\n• Keep the routine sustainable.",
                        "finances": "Balance saving with reasonable enjoyment:\n• Protect the plan.\n• Avoid both extremes.",
                        "relationships": "Balance giving and receiving:\n• Keep boundaries.\n• Stay open without overgiving."
                    },
                    "focus": {
                        "love": "Kindness works best with boundaries. Do not confuse love with endless surrender.",
                        "career": "Be humble, but do not hide your work so completely that your contribution disappears.",
                        "health": "Health is easier to sustain with moderate habits than with extremes.",
                        "finances": "A durable financial plan allows both saving and reasonable enjoyment.",
                        "relationships": "Healthy relationships require both generosity and self-protection."
                    }
                }
            },
            "dui": {
                "1": {
                    "name": "Beginning",
                    "text": "Approach people with simple goodwill rather than calculation. Not every relationship needs strategy. A sincere smile and honest interest can attract people who value the same openness.",
                    "main_state": "A good beginning through simple sincerity",
                    "main_strategy": "Keep your goodwill clean and uncomplicated",
                    "support_risk": "Wanting something back for every kind act",
                    "support_warning": "Turning simple goodwill into a transaction",
                    "guide": {
                        "love": "Be honest instead of performing harmony:\n• Share real feelings.\n• Let acceptance create joy.",
                        "career": "Build reputation through skill and honesty:\n• Contribute for real.\n• Do not rely on flattery.",
                        "health": "Allow real emotions:\n• Do not force yourself to look happy.\n• Care for what is actually happening.",
                        "finances": "Do not spend for appearances:\n• Choose real financial stability.\n• Let peace matter more than image.",
                        "relationships": "Express yourself honestly:\n• Do not over-adapt.\n• Being understood matters more than pleasing."
                    },
                    "focus": {
                        "love": "Joy lasts longer when both people can be real rather than constantly pleasing each other.",
                        "career": "Build value through honest work, not by trying to win approval.",
                        "health": "Good health includes acknowledging fatigue, stress, and difficult emotions instead of hiding them.",
                        "finances": "Financial ease comes from honest numbers, not from looking successful.",
                        "relationships": "Real connection comes from being known, not from constantly making yourself agreeable."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "Your sincerity is your strongest credential. You do not need to flatter anyone or fear every misunderstanding. Over time, reliable people will recognize what is genuine and stay.",
                    "main_state": "Lasting joy built on trust",
                    "main_strategy": "Build enjoyment on real trust",
                    "support_risk": "Being drawn toward surface-level pleasure or temptation",
                    "support_warning": "Trading long-term trust for short-term enjoyment",
                    "guide": {
                        "love": "Share openly without testing each other:\n• Build trust through consistency.\n• Let honesty reduce doubt.",
                        "career": "Be clear with coworkers and clients:\n• Do not exaggerate.\n• Let trust support long-term work.",
                        "health": "Be honest about symptoms and reactions:\n• Track what is real.\n• Respond early when needed.",
                        "finances": "Record income, debt, and risk honestly:\n• Do not hide numbers from yourself.\n• Clarity creates calm.",
                        "relationships": "Keep confidences and be dependable:\n• Listen honestly.\n• Treat trust as valuable."
                    },
                    "focus": {
                        "love": "Open communication reduces testing and suspicion. Trust is one of the strongest sources of ease in a relationship.",
                        "career": "Clear, honest communication creates cooperation that lasts longer than impressive promises.",
                        "health": "Face symptoms and body responses honestly rather than minimizing them.",
                        "finances": "Accurate records and honest risk assessment are the foundation of better financial decisions.",
                        "relationships": "Friendship deepens when people can rely on your words and feel safe being honest with you."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You may be drawn toward shallow praise, easy pleasure, or anything that feels good now but leaves you empty later. Real joy should not require giving up your standards.",
                    "main_state": "Clear judgment that avoids empty flattery",
                    "main_strategy": "Step away from people who only tell you what you want to hear",
                    "support_risk": "Losing judgment because praise feels good",
                    "support_warning": "Giving up principles for approval",
                    "guide": {
                        "love": "Do not trade yourself for harmony:\n• State real feelings.\n• Let the right bond survive honesty.",
                        "career": "Use skill and honesty, not approval-seeking:\n• Protect professional self-respect.\n• Stop over-pleasing.",
                        "health": "Do not ignore health to avoid inconvenience:\n• Speak up when something is wrong.\n• Care for yourself.",
                        "finances": "Do not spend to impress or please:\n• Protect your limits.\n• Choose real needs over image.",
                        "relationships": "Stop agreeing just to be liked:\n• Let honest boundaries filter relationships.\n• Keep self-respect."
                    },
                    "focus": {
                        "love": "If happiness requires constant self-sacrifice, the relationship is out of balance.",
                        "career": "Professional respect is stronger when it comes from ability and integrity rather than people-pleasing.",
                        "health": "Do not delay care or push through real symptoms just to avoid seeming difficult.",
                        "finances": "Do not spend beyond your means to protect an image or avoid disappointing others.",
                        "relationships": "Healthy relationships do not depend on endless agreement."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You are choosing between deeper satisfaction and short-lived temptation. Each choice becomes a habit. Choose what leaves you clear, stable, and free afterward.",
                    "main_state": "A grounded choice between temptation and principle",
                    "main_strategy": "Choose the path you can respect afterward",
                    "support_risk": "Hesitation and attraction to easy pleasure",
                    "support_warning": "Letting a moment of weakness pull you off course",
                    "guide": {
                        "love": "Choose what truly matters to you:\n• Do not confuse attraction with fit.\n• Stay loyal to your values.",
                        "career": "Look beyond salary or status:\n• Choose work you can sustain.\n• Let values guide the decision.",
                        "health": "Follow what actually suits your body:\n• Do not chase every trend.\n• Use evidence and response.",
                        "finances": "Separate planning from impulse:\n• Stay within your risk limits.\n• Do not follow market excitement.",
                        "relationships": "Notice which relationships nourish you:\n• Leave room to step away from draining ones.\n• Choose real connection."
                    },
                    "focus": {
                        "love": "At a crossroads, choose the relationship direction that fits your real values rather than outside pressure.",
                        "career": "Choose career paths you can keep investing in, not just those with attractive labels.",
                        "health": "Use methods that actually suit your body and reliable guidance, not every new trend.",
                        "finances": "Make financial decisions based on your plan and risk tolerance, not emotional momentum.",
                        "relationships": "Choose relationships that nourish rather than repeatedly drain you."
                    }
                },
                "5": {
                    "name": "Fulfillment",
                    "text": "You may be trusting someone whose behavior is quietly undermining what is right. Trust is valuable, but it still needs judgment. When something feels consistently wrong, create distance and protect yourself.",
                    "main_state": "Staying alert while choosing trustworthy people",
                    "main_strategy": "Keep trust with people who have earned it",
                    "support_risk": "Being misled by charm or reassuring words",
                    "support_warning": "Giving trust away because someone sounds convincing",
                    "guide": {
                        "love": "Build trust through action and consistency:\n• Reduce testing and suspicion.\n• Keep judgment awake.",
                        "career": "Give reliable people room to work:\n• Use clear goals.\n• Let trust support responsibility.",
                        "health": "Trust a sound plan and qualified care:\n• Avoid constant switching from anxiety.\n• Give recovery time.",
                        "finances": "Stay with a researched long-term plan:\n• Do not let short-term moves break discipline.\n• Review with evidence.",
                        "relationships": "Keep promises and confidences:\n• Judge trust by behavior.\n• Let reliability deepen friendship."
                    },
                    "focus": {
                        "love": "Trust creates ease when it is based on consistent behavior rather than blind hope.",
                        "career": "Teams work better when capable people receive clear goals and enough room to act.",
                        "health": "Follow a sound health plan consistently unless new evidence gives a reason to change it.",
                        "finances": "A researched financial plan needs patience through ordinary short-term fluctuation.",
                        "relationships": "Trust grows from repeated reliability, not from pleasant words alone."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Your charm and positive energy can move people. The more influence you have, the more carefully you should use it. Make sure the joy you create is honest and beneficial, not merely persuasive.",
                    "main_state": "Positive influence held with self-awareness",
                    "main_strategy": "Enjoy recognition without letting it weaken your judgment",
                    "support_risk": "Getting carried away by approval",
                    "support_warning": "Forgetting self-reflection because people like you",
                    "guide": {
                        "love": "Keep affection voluntary and honest:\n• Do not manipulate feelings.\n• Let joy stay clean.",
                        "career": "Use ethical methods even when shortcuts tempt you:\n• Protect trust.\n• Let success stay clean.",
                        "health": "Be skeptical of miracle promises:\n• Choose safe, proven methods.\n• Protect long-term health.",
                        "finances": "Avoid offers that exploit greed:\n• Use legitimate channels.\n• Prefer steady gains to risky shortcuts.",
                        "relationships": "Do not use weakness or emotion for advantage:\n• Treat people sincerely.\n• Let trust remain mutual."
                    },
                    "focus": {
                        "love": "Joy in love should come from mutual willingness, never manipulation or pressure.",
                        "career": "Short-term gains from misleading people can damage long-term trust and reputation.",
                        "health": "Be cautious with fast-result health promises that hide real risks.",
                        "finances": "If an offer depends on urgency, greed, or secrecy, step back and verify it.",
                        "relationships": "Use influence with care. Real relationships do not need emotional leverage."
                    }
                }
            },
            "huan": {
                "1": {
                    "name": "Beginning",
                    "text": "The first signs of disconnection have appeared, and this is the easiest time to respond. Do not wait for the problem to spread. One timely conversation or clear action may change the direction.",
                    "main_state": "Resolving a problem early through timely action",
                    "main_strategy": "Act while the issue is still small",
                    "support_risk": "Wanting to wait and see",
                    "support_warning": "Missing the best window because it does not feel urgent yet",
                    "guide": {
                        "love": "Lower defenses and reconnect first:\n• Show care clearly.\n• Let goodwill soften distance.",
                        "career": "Open the conversation early:\n• Find shared ground.\n• Reconnect people before process.",
                        "health": "Release built-up stress:\n• Move, breathe, or go outside.\n• Let energy circulate.",
                        "finances": "Review income and spending:\n• Organize scattered accounts.\n• Clarity reduces anxiety.",
                        "relationships": "Be the first to break the ice:\n• Reach out simply.\n• Warmth can change the tone."
                    },
                    "focus": {
                        "love": "Instead of debating who is right, make a sincere first move toward understanding.",
                        "career": "When a team starts drifting apart, reconnect people around one shared problem or goal.",
                        "health": "Release accumulated stress through movement, rest, breathing, or time outdoors.",
                        "finances": "Organize scattered finances before worrying about what you cannot control.",
                        "relationships": "A simple sincere message can reopen a relationship before distance hardens."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "In a scattered situation, move toward what is stable and trustworthy. A reliable person, system, or foundation can become your anchor. In uncertain times, choosing the right support matters.",
                    "main_state": "Greater stability through reliable support",
                    "main_strategy": "Seek a dependable support system",
                    "support_risk": "Not knowing whom or what to rely on yet",
                    "support_warning": "Attaching too quickly to an unreliable source of support",
                    "guide": {
                        "love": "Try to understand the other side:\n• Use apology or forgiveness where sincere.\n• Give connection another chance.",
                        "career": "Ask for advice when stuck:\n• Use support wisely.\n• Do not confuse help with weakness.",
                        "health": "Give emotions a safe outlet:\n• Talk, write, or seek support.\n• Let tension ease.",
                        "finances": "Ask for qualified financial guidance:\n• Discuss problems openly.\n• Use help before the issue grows.",
                        "relationships": "Break the silence first:\n• Offer a sincere greeting or conversation.\n• Let pride step aside."
                    },
                    "focus": {
                        "love": "When the relationship is stuck, empathy and a sincere apology or forgiveness may reopen connection.",
                        "career": "Asking for help can reveal options you cannot see while carrying everything alone.",
                        "health": "Talk with someone you trust or seek professional support when stress has nowhere to go.",
                        "finances": "Financial pressure is easier to address when numbers and options are discussed openly.",
                        "relationships": "Do not let pride keep an important relationship frozen."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "You may need to give up some personal comfort or advantage to restore unity. A sincere sacrifice for the larger good can become the example that brings people back together.",
                    "main_state": "Earning respect by putting the larger good first",
                    "main_strategy": "Choose the shared good over narrow self-interest",
                    "support_risk": "Giving up some personal comfort or benefit",
                    "support_warning": "Protecting personal advantage so tightly that the whole group suffers",
                    "guide": {
                        "love": "Let yourself be seen when you need support:\n• Share vulnerability carefully.\n• Give closeness a chance.",
                        "career": "Delegate and ask for help:\n• Do not carry everything alone.\n• Let the team support the load.",
                        "health": "Stop and rest when depleted:\n• Seek help without shame.\n• Protect recovery.",
                        "finances": "Talk openly about financial strain:\n• Ask for professional input.\n• Share the problem before it grows.",
                        "relationships": "Reach out instead of isolating:\n• Join supportive groups.\n• Accept simple companionship."
                    },
                    "focus": {
                        "love": "Honest vulnerability can create closeness when you stop hiding every need.",
                        "career": "Share responsibility instead of carrying the entire workload alone.",
                        "health": "Rest and professional support are appropriate when exhaustion becomes persistent.",
                        "finances": "Discuss serious financial pressure instead of carrying it in isolation.",
                        "relationships": "Connection becomes possible when you give others a chance to support you."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Break out of narrow circles and factional thinking. You may be able to reconnect people who have become divided. Keep the larger purpose in view rather than letting small-group loyalties control the outcome.",
                    "main_state": "A wider perspective that reunites divided groups",
                    "main_strategy": "Integrate people around the bigger picture",
                    "support_risk": "Clinging to the safety of a small circle",
                    "support_warning": "Rejecting wider cooperation because familiar groups feel safer",
                    "guide": {
                        "love": "Address the real source of the problem:\n• Let go of patterns that keep distance alive.\n• Protect the important bond.",
                        "career": "Leave environments that constantly drain your work:\n• Move toward a better fit.\n• Do not confuse leaving with failure.",
                        "health": "Reduce environments and habits that keep harming you:\n• Make recovery easier through context.\n• Protect your energy.",
                        "finances": "Exit financial arrangements that keep draining you:\n• Accept necessary losses when needed.\n• Free resources for healthier use.",
                        "relationships": "Step away from relationships that repeatedly harm you:\n• Stop trying to belong everywhere.\n• Make room for healthier ties."
                    },
                    "focus": {
                        "love": "Fix the root issue rather than repeatedly smoothing over the surface.",
                        "career": "Sometimes leaving a draining team or role is the right step toward better work.",
                        "health": "Changing the environment can be more effective than repeatedly fighting the same harmful trigger.",
                        "finances": "Know when to leave an unhealthy financial arrangement rather than feeding a continuing loss.",
                        "relationships": "You do not need to remain in a group that consistently harms or depletes you."
                    }
                },
                "5": {
                    "name": "Fulfillment",
                    "text": "Your message is carrying farther now. This is a moment to build trust through consistency: say what you mean, do what you promise, and give people a clear direction they can act on.",
                    "main_state": "Clear leadership that gathers people together",
                    "main_strategy": "State the vision clearly and lead through consistent action",
                    "support_risk": "The work required to build shared understanding",
                    "support_warning": "Keeping the direction vague because explaining it feels difficult",
                    "guide": {
                        "love": "Open up honestly:\n• Say what you appreciate.\n• Let sincerity remove distance.",
                        "career": "Give the team a clear purpose:\n• Share information openly.\n• Recognize contribution.",
                        "health": "Let real emotions move instead of staying trapped:\n• Use writing, conversation, or creative outlets.\n• Support mind and body together.",
                        "finances": "Face every number honestly:\n• Review risk and cash flow.\n• Use clarity to make decisions.",
                        "relationships": "Share honestly and listen fully:\n• Make room for real conversation.\n• Let sincerity close distance."
                    },
                    "focus": {
                        "love": "Honest affection and gratitude can dissolve more distance than guessing and defensiveness.",
                        "career": "A team gathers when direction is clear and information is shared honestly.",
                        "health": "Giving emotions a healthy outlet can reduce the strain of constant suppression.",
                        "finances": "Financial recovery starts with accurate numbers and a willingness to face risk clearly.",
                        "relationships": "Sincere sharing and listening are the fastest ways to deepen trust."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "The most unstable phase is ending, and real distance from the danger is now possible. Protect the stability you regained through clear boundaries, reliable systems, and trust.",
                    "main_state": "Freedom from an old shadow",
                    "main_strategy": "Let go fully and move toward a new beginning",
                    "support_risk": "Lingering fear from the past",
                    "support_warning": "Allowing old harm to keep controlling the future",
                    "guide": {
                        "love": "Know when to release a relationship that cannot heal:\n• Choose safety over appearances.\n• Let freedom be part of love.",
                        "career": "Plan an exit when the environment cannot improve:\n• Protect your future path.\n• Move toward a better fit.",
                        "health": "Remove yourself from environments that keep harming health:\n• Put safety first.\n• Let distance support healing.",
                        "finances": "Set a firm stop-loss when needed:\n• Do not keep feeding a losing situation.\n• Protect remaining capital.",
                        "relationships": "Leave relationships that remain harmful:\n• Do not stay only to belong.\n• Choose safety and dignity."
                    },
                    "focus": {
                        "love": "When a relationship is truly beyond repair, releasing it may be healthier than preserving appearances.",
                        "career": "If a work environment cannot change and continues to damage you, plan a responsible exit.",
                        "health": "Removing a persistent source of harm may be an important part of recovery.",
                        "finances": "When a position or arrangement becomes an ongoing drain, a clear stop-loss can protect what remains.",
                        "relationships": "Leaving an unhealthy relationship is sometimes the most respectful choice you can make for yourself."
                    }
                }
            },
            "jie_restraint": {
                "1": {
                    "name": "Beginning",
                    "text": "Staying in can be wise, but not when fear is the only reason. Ask whether your restraint comes from good timing or from avoiding change. The same behavior can protect you or limit you.",
                    "main_state": "Quiet patience before the right moment",
                    "main_strategy": "Observe first and avoid unnecessary action",
                    "support_risk": "Restlessness and the urge to act too soon",
                    "support_warning": "Moving before conditions are ready",
                    "guide": {
                        "love": "Balance closeness with independence:\n• Respect each person’s space.\n• Let love breathe.",
                        "career": "Build a simple work rhythm:\n• Finish what you schedule.\n• Let discipline create reliability.",
                        "health": "Keep meals, sleep, and movement regular:\n• Avoid extremes.\n• Let routine support the body.",
                        "finances": "Separate needs from wants:\n• Use a monthly budget.\n• Protect savings first.",
                        "relationships": "Set social boundaries:\n• Decline unreasonable demands.\n• Leave room for yourself."
                    },
                    "focus": {
                        "love": "A healthy relationship needs both closeness and individual space.",
                        "career": "Start with basic discipline: predictable hours, deadlines, and priorities.",
                        "health": "Regular sleep, meals, and moderate activity are more useful than extreme swings.",
                        "finances": "The first step in saving is knowing what is necessary and what is optional.",
                        "relationships": "Boundaries help social relationships stay sustainable."
                    }
                },
                "2": {
                    "name": "Foundation",
                    "text": "Being too cautious can make you miss the right moment. Restraint does not mean doing nothing. Hold back when needed, but act when the opportunity is truly ready.",
                    "main_state": "Decisive action when the time is mature",
                    "main_strategy": "Recognize the right moment and take it",
                    "support_risk": "Over-caution and missed timing",
                    "support_warning": "Letting excessive conservatism close a real opportunity",
                    "guide": {
                        "love": "Return to your own pace:\n• Do not panic over temporary imbalance.\n• Keep love steady.",
                        "career": "Focus on what you control:\n• Maintain work quality.\n• Keep your rhythm through outside noise.",
                        "health": "Return gently to routine after disruption:\n• Do not punish yourself.\n• Consistency matters more than perfection.",
                        "finances": "Adjust the budget calmly after surprise costs:\n• Keep flexibility.\n• Protect the long-term direction.",
                        "relationships": "Check whether your limits are respected:\n• Adjust how much you give.\n• Return to a comfortable pace."
                    },
                    "focus": {
                        "love": "When the relationship feels off-balance, reset your own pace before reacting dramatically.",
                        "career": "When conditions are chaotic, steady execution of what you control is the best response.",
                        "health": "After a disrupted routine, simply return to it rather than using guilt as motivation.",
                        "finances": "Unexpected expenses call for adjustment, not panic, if the overall plan remains sound.",
                        "relationships": "If a relationship feels draining, check whether your boundaries and level of effort need to change."
                    }
                },
                "3": {
                    "name": "Test",
                    "text": "Without self-control, short-term pleasure can create long-term regret. Whether the issue is spending, food, emotion, or promises, put the brake on now before the excess becomes harder to reverse.",
                    "main_state": "Rebuilding discipline before excess creates damage",
                    "main_strategy": "Restore practical limits and self-control",
                    "support_risk": "Overindulgence and weak limits",
                    "support_warning": "Abandoning discipline because you want immediate relief",
                    "guide": {
                        "love": "Notice when compromise has become self-erasure:\n• State your needs.\n• Reassess relationships that ignore boundaries.",
                        "career": "Say no to work that is not yours:\n• Clarify responsibility.\n• Protect your capacity.",
                        "health": "Remember that you also need care:\n• Protect rest and recovery.\n• Do not sacrifice health endlessly.",
                        "finances": "Do not risk your own stability to rescue others:\n• Set lending limits.\n• Help within your means.",
                        "relationships": "Stop constant people-pleasing:\n• Speak for yourself.\n• Let healthy people respect your no."
                    },
                    "focus": {
                        "love": "If compromise has become self-erasure, the relationship needs firmer boundaries.",
                        "career": "Taking every extra responsibility can lead to exhaustion rather than respect.",
                        "health": "Protecting your own rest and health is part of being able to care for others.",
                        "finances": "Helping others financially should not destroy your own stability.",
                        "relationships": "A healthy friendship can survive a reasonable no."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Discipline now feels natural rather than forced. You have found a workable rhythm where structure supports life instead of restricting it. This kind of moderation can last.",
                    "main_state": "Self-discipline becoming an easy habit",
                    "main_strategy": "Let useful limits become part of normal life",
                    "support_risk": "Still finding discipline unfamiliar or tiring",
                    "support_warning": "Treating self-discipline as punishment",
                    "guide": {
                        "love": "Accept the relationship as it is today:\n• Stop chasing perfection.\n• Find stability in ordinary life.",
                        "career": "Do the current role well:\n• Build depth before chasing the next title.\n• Let steady work open doors.",
                        "health": "Accept your body’s current pace:\n• Care for it consistently.\n• Do not compare every detail.",
                        "finances": "Stay grounded in your actual finances:\n• Avoid risky choices from comparison.\n• Let steady progress be enough.",
                        "relationships": "Value calm, sincere connections:\n• Do not demand intensity from every friendship.\n• Let relationships find their own pace."
                    },
                    "focus": {
                        "love": "There is value in a relationship that feels steady rather than dramatic.",
                        "career": "Doing the current role well can create more opportunity than constantly chasing the next title.",
                        "health": "Care for your body consistently without comparing it to someone else’s standards.",
                        "finances": "Comparison can push you into unnecessary risk; stay grounded in your own numbers.",
                        "relationships": "Not every friendship needs to be intense to be meaningful."
                    }
                },
                "5": {
                    "name": "Fulfillment",
                    "text": "You have found a form of discipline that feels good enough to maintain. It is not harsh or joyless; it works because it fits your life. This is the ideal kind of restraint.",
                    "main_state": "Limits that feel natural and convincing",
                    "main_strategy": "Lead by example with reasonable standards",
                    "support_risk": "Finding the right amount of firmness and flexibility",
                    "support_warning": "Demanding too much from yourself or others in the name of efficiency",
                    "guide": {
                        "love": "Manage expectations and respect each other’s pace:\n• Notice what is already good.\n• Let gratitude reduce pressure.",
                        "career": "Limit ambition to what matters now:\n• Do fewer things well.\n• Let steady work create opportunity.",
                        "health": "Keep meals and sleep regular:\n• Use moderation instead of punishment.\n• Let routine create energy.",
                        "finances": "Control spending and keep saving:\n• Avoid breaking the plan for temptation.\n• Let discipline build security.",
                        "relationships": "Avoid oversharing or emotional pressure:\n• Respect others’ limits.\n• Keep interactions considerate."
                    },
                    "focus": {
                        "love": "Relationships feel better when expectations are reasonable and each person’s rhythm is respected.",
                        "career": "Doing fewer things well can create more progress than chasing every opportunity at once.",
                        "health": "Moderate, repeatable habits are more useful than rigid cycles of restriction and rebound.",
                        "finances": "Simple spending limits and automatic saving can create steady security.",
                        "relationships": "Good social boundaries make people feel safer and more comfortable around each other."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Discipline has become too harsh. Standards that punish you or others will eventually break down. Limits are meant to support life, so loosen what has become unnecessarily rigid.",
                    "main_state": "Restoring balance by softening excessive rules",
                    "main_strategy": "Adjust standards that have become too strict",
                    "support_risk": "Being excessively demanding of yourself",
                    "support_warning": "Turning perfectionism into punishment",
                    "guide": {
                        "love": "Express affection and needs when appropriate:\n• Do not confuse restraint with emotional silence.\n• Keep warmth in the bond.",
                        "career": "Pair discipline with flexibility:\n• Allow reasonable rest and mistakes.\n• Avoid constant tension.",
                        "health": "Avoid extreme dieting or exercise:\n• Listen to your body.\n• Choose sustainable care.",
                        "finances": "Balance saving with meaningful use of money:\n• Invest in real needs and experiences.\n• Let finances support life.",
                        "relationships": "Do not suppress every personal need:\n• Speak up appropriately.\n• Know when to give and when to protect yourself."
                    },
                    "focus": {
                        "love": "Too much emotional restraint can make a relationship cold. Express care and needs when they matter.",
                        "career": "Discipline lasts longer when it includes room for rest, correction, and ordinary mistakes.",
                        "health": "Extreme restriction or exercise can harm the goal it is meant to serve.",
                        "finances": "Money is a tool for life; saving should not become refusal to meet real needs.",
                        "relationships": "Healthy restraint includes knowing when to speak for yourself."
                    }
                }
            },
            "zhongfu": {
                "1": {
                    "name": "Beginning",
                    "text": "Start from sincerity and self-reliance. Do not look to others to create your sense of security; honest intentions will draw honest responses.",
                    "main_state": "A steady beginning rooted in sincerity",
                    "main_strategy": "Act plainly and honestly",
                    "support_risk": "Wanting to depend on others for reassurance",
                    "support_warning": "Turning to manipulation because you feel insecure",
                    "guide": {
                        "love": "Be yourself and let honesty replace performance:\n• Keep the approach simple and consistent.",
                        "career": "Be straightforward, keep your word, and let trust create opportunities:\n• Keep the approach simple and consistent.",
                        "health": "Acknowledge fatigue and discomfort honestly, then respond with appropriate care:\n• Keep the approach simple and consistent.",
                        "finances": "Record the real numbers and face debt or savings without avoidance:\n• Keep the approach simple and consistent.",
                        "relationships": "Treat people sincerely and let genuine connections form naturally:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Be yourself and let honesty replace performance. Genuine acceptance creates a safer bond.",
                        "career": "Be straightforward, keep your word, and let trust create opportunities.",
                        "health": "Acknowledge fatigue and discomfort honestly, then respond with appropriate care.",
                        "finances": "Record the real numbers and face debt or savings without avoidance.",
                        "relationships": "Treat people sincerely and let genuine connections form naturally."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "A sincere call does not need to be loud to reach the right person. Keep expressing what is real and let the right response come naturally.",
                    "main_state": "Sincerity that attracts a matching response",
                    "main_strategy": "Focus on being yourself rather than chasing approval",
                    "support_risk": "Wanting to be understood immediately",
                    "support_warning": "Changing yourself just to get a response",
                    "guide": {
                        "love": "Say what you need instead of expecting the other person to guess:\n• Keep the approach simple and consistent.",
                        "career": "Make your contribution visible and express your ideas clearly:\n• Keep the approach simple and consistent.",
                        "health": "Acknowledge emotions rather than suppressing them, and release them in healthy ways:\n• Keep the approach simple and consistent.",
                        "finances": "Notice the emotions behind your money habits so you can change them clearly:\n• Keep the approach simple and consistent.",
                        "relationships": "Ask for support when you need it and allow trusted people to help:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Say what you need instead of expecting the other person to guess.",
                        "career": "Make your contribution visible and express your ideas clearly.",
                        "health": "Acknowledge emotions rather than suppressing them, and release them in healthy ways.",
                        "finances": "Notice the emotions behind your money habits so you can change them clearly.",
                        "relationships": "Ask for support when you need it and allow trusted people to help."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "Comparison or conflict may pull your emotions off balance. Real strength is staying centered instead of letting another person control your state.",
                    "main_state": "Returning to inner steadiness",
                    "main_strategy": "Do not let emotion drive the next move",
                    "support_risk": "Strong emotional swings",
                    "support_warning": "Making an impulsive decision you later regret",
                    "guide": {
                        "love": "If trust has been damaged, stop protecting appearances and address the real issue:\n• Keep the approach simple and consistent.",
                        "career": "Do not trade long-term credibility for a short-term advantage:\n• Keep the approach simple and consistent.",
                        "health": "Stop dismissing warning signs and deal with problems early:\n• Keep the approach simple and consistent.",
                        "finances": "Face debt, risk, or mistakes honestly before they grow:\n• Keep the approach simple and consistent.",
                        "relationships": "A relationship that has lost honesty can only heal through direct truth:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "If trust has been damaged, stop protecting appearances and address the real issue.",
                        "career": "Do not trade long-term credibility for a short-term advantage.",
                        "health": "Stop dismissing warning signs and deal with problems early.",
                        "finances": "Face debt, risk, or mistakes honestly before they grow.",
                        "relationships": "A relationship that has lost honesty can only heal through direct truth."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "Trust is strong and people are willing to move with you. Even so, let go of attachments that no longer fit the direction you truly value.",
                    "main_state": "Clearer direction through letting go",
                    "main_strategy": "Release what interferes with the more important path",
                    "support_risk": "Hesitating to release an attachment",
                    "support_warning": "Staying tied to something that no longer fits",
                    "guide": {
                        "love": "At a crossroads, ask what you genuinely want rather than acting from habit or fear:\n• Keep the approach simple and consistent.",
                        "career": "Judge the choice by your strengths, values, and long-term direction, not only outside rewards:\n• Keep the approach simple and consistent.",
                        "health": "Ask what change you are honestly willing to sustain, then act on it:\n• Keep the approach simple and consistent.",
                        "finances": "Judge major choices by real risk tolerance rather than greed or fear:\n• Keep the approach simple and consistent.",
                        "relationships": "Protect your values while communicating choices without unnecessary hostility:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "At a crossroads, ask what you genuinely want rather than acting from habit or fear.",
                        "career": "Judge the choice by your strengths, values, and long-term direction, not only outside rewards.",
                        "health": "Ask what change you are honestly willing to sustain, then act on it.",
                        "finances": "Judge major choices by real risk tolerance rather than greed or fear.",
                        "relationships": "Protect your values while communicating choices without unnecessary hostility."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Repeated honesty has built deep trust. Protect that bond through consistent words and actions rather than letting one moment of suspicion undo it.",
                    "main_state": "Long-term support built through trust",
                    "main_strategy": "Keep words and actions aligned",
                    "support_risk": "Having to keep proving consistency",
                    "support_warning": "Saying one thing and doing another for convenience",
                    "guide": {
                        "love": "Deep trust is valuable; protect it through continued honesty and consistency:\n• Keep the approach simple and consistent.",
                        "career": "Long-term integrity creates influence more reliably than office politics:\n• Keep the approach simple and consistent.",
                        "health": "Bring mind and body back into alignment through honest self-awareness and steady routines:\n• Keep the approach simple and consistent.",
                        "finances": "Avoid shortcuts and let disciplined, transparent planning build stability:\n• Keep the approach simple and consistent.",
                        "relationships": "Reliable words and actions create the kind of trust that lasts:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Deep trust is valuable; protect it through continued honesty and consistency.",
                        "career": "Long-term integrity creates influence more reliably than office politics.",
                        "health": "Bring mind and body back into alignment through honest self-awareness and steady routines.",
                        "finances": "Avoid shortcuts and let disciplined, transparent planning build stability.",
                        "relationships": "Reliable words and actions create the kind of trust that lasts."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Loud claims without substance will not hold. Let practical action prove your value; real weight does not need constant promotion.",
                    "main_state": "Action replacing empty claims",
                    "main_strategy": "Return to practical, visible action",
                    "support_risk": "Getting stuck in appearances",
                    "support_warning": "Believing good words can replace real effort",
                    "guide": {
                        "love": "Give the other person freedom and let actions carry more weight than declarations:\n• Keep the approach simple and consistent.",
                        "career": "Let results speak and stay modest; credibility is not a performance:\n• Keep the approach simple and consistent.",
                        "health": "Trust real body feedback rather than forcing an ideal image of health:\n• Keep the approach simple and consistent.",
                        "finances": "Base decisions on real numbers, not impressive claims or appearances:\n• Keep the approach simple and consistent.",
                        "relationships": "Do not use loud words to prove sincerity; let consistent behavior show it:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Give the other person freedom and let actions carry more weight than declarations.",
                        "career": "Let results speak and stay modest; credibility is not a performance.",
                        "health": "Trust real body feedback rather than forcing an ideal image of health.",
                        "finances": "Base decisions on real numbers, not impressive claims or appearances.",
                        "relationships": "Do not use loud words to prove sincerity; let consistent behavior show it."
                    }
                }
            },
            "xiaoguo": {
                "1": {
                    "name": "Beginning",
                    "text": "Trying to fly too high before your wings are ready creates avoidable trouble. Keep the dream, but strengthen the basics first.",
                    "main_state": "Steady growth through gradual preparation",
                    "main_strategy": "Stay within the current stage and build skill",
                    "support_risk": "Wanting to prove yourself too quickly",
                    "support_warning": "Reaching beyond what you can support",
                    "guide": {
                        "love": "Avoid rushing the relationship forward; build trust through small consistent actions:\n• Keep the approach simple and consistent.",
                        "career": "Strengthen basic skills before seeking a bigger role or breakthrough:\n• Keep the approach simple and consistent.",
                        "health": "Use gradual changes that your body can adapt to:\n• Keep the approach simple and consistent.",
                        "finances": "Build savings and improve small habits before taking larger risks:\n• Keep the approach simple and consistent.",
                        "relationships": "Let familiarity grow slowly instead of trying to impress quickly:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Avoid rushing the relationship forward; build trust through small consistent actions.",
                        "career": "Strengthen basic skills before seeking a bigger role or breakthrough.",
                        "health": "Use gradual changes that your body can adapt to.",
                        "finances": "Build savings and improve small habits before taking larger risks.",
                        "relationships": "Let familiarity grow slowly instead of trying to impress quickly."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You may have skipped a normal step and reached the next level early. Check whether any important lesson or foundation still needs to be filled in.",
                    "main_state": "Practical progress through workable cooperation",
                    "main_strategy": "Work with the people and conditions that are actually available",
                    "support_risk": "Missing an important stage of development",
                    "support_warning": "Treating a shortcut as a substitute for preparation",
                    "guide": {
                        "love": "If something moved too quickly, return to the missing conversation or boundary:\n• Keep the approach simple and consistent.",
                        "career": "Fill any missing skill or process before relying on the shortcut:\n• Keep the approach simple and consistent.",
                        "health": "Do not skip foundational habits just because you feel better:\n• Keep the approach simple and consistent.",
                        "finances": "Check whether a fast result hid an unfinished financial issue:\n• Keep the approach simple and consistent.",
                        "relationships": "Work with the people who are actually available and repair skipped steps:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "If something moved too quickly, return to the missing conversation or boundary.",
                        "career": "Fill any missing skill or process before relying on the shortcut.",
                        "health": "Do not skip foundational habits just because you feel better.",
                        "finances": "Check whether a fast result hid an unfinished financial issue.",
                        "relationships": "Work with the people who are actually available and repair skipped steps."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "You may be watching the road ahead while missing a risk behind you. Check safeguards, details, and backup plans before moving further.",
                    "main_state": "Caution that prevents avoidable mistakes",
                    "main_strategy": "Stay alert and protect weak points",
                    "support_risk": "Hidden risks and overlooked details",
                    "support_warning": "Letting success make you careless",
                    "guide": {
                        "love": "Do not ignore small warning signs or boundary problems in the relationship:\n• Keep the approach simple and consistent.",
                        "career": "Check risks, permissions, and backup plans before moving ahead:\n• Keep the approach simple and consistent.",
                        "health": "Pay attention to symptoms that are easy to dismiss:\n• Keep the approach simple and consistent.",
                        "finances": "Review hidden fees, weak positions, and downside risk:\n• Keep the approach simple and consistent.",
                        "relationships": "Stay alert to small tensions before they become larger conflict:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Do not ignore small warning signs or boundary problems in the relationship.",
                        "career": "Check risks, permissions, and backup plans before moving ahead.",
                        "health": "Pay attention to symptoms that are easy to dismiss.",
                        "finances": "Review hidden fees, weak positions, and downside risk.",
                        "relationships": "Stay alert to small tensions before they become larger conflict."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You know when not to push beyond your limits. Keep that restraint; the right opportunity is easier to use when you are actually ready.",
                    "main_state": "A good result through restraint",
                    "main_strategy": "Control the urge to move too fast",
                    "support_risk": "Impatience to get ahead",
                    "support_warning": "Forcing progress before conditions are ready",
                    "guide": {
                        "love": "Do not force a major relationship step before both sides are ready:\n• Keep the approach simple and consistent.",
                        "career": "Move at a pace your resources can support:\n• Keep the approach simple and consistent.",
                        "health": "Keep activity within a level your body handles well:\n• Keep the approach simple and consistent.",
                        "finances": "Avoid stretching beyond your financial capacity:\n• Keep the approach simple and consistent.",
                        "relationships": "Know when to step back rather than winning every point:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Do not force a major relationship step before both sides are ready.",
                        "career": "Move at a pace your resources can support.",
                        "health": "Keep activity within a level your body handles well.",
                        "finances": "Avoid stretching beyond your financial capacity.",
                        "relationships": "Know when to step back rather than winning every point."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "The clouds are gathering, but the rain has not fallen yet. Something is close, though it still needs time; prepare without forcing the result.",
                    "main_state": "Practical gains through focused effort",
                    "main_strategy": "Use precise skill on the small problem in front of you",
                    "support_risk": "Waiting for the final condition to mature",
                    "support_warning": "Trying to force an outcome before it is ready",
                    "guide": {
                        "love": "Something is developing; keep nurturing it without demanding an immediate answer:\n• Keep the approach simple and consistent.",
                        "career": "Finish the specific problem in front of you while larger conditions mature:\n• Keep the approach simple and consistent.",
                        "health": "Keep steady habits and give the body time to respond:\n• Keep the approach simple and consistent.",
                        "finances": "Prepare cash and information while waiting for a clearer opening:\n• Keep the approach simple and consistent.",
                        "relationships": "Maintain useful connections without forcing closeness:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Something is developing; keep nurturing it without demanding an immediate answer.",
                        "career": "Finish the specific problem in front of you while larger conditions mature.",
                        "health": "Keep steady habits and give the body time to respond.",
                        "finances": "Prepare cash and information while waiting for a clearer opening.",
                        "relationships": "Maintain useful connections without forcing closeness."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Ambition has carried you beyond what you can safely support. Return to firm ground, respect your limits, and rebuild from there.",
                    "main_state": "Safety through knowing your limits",
                    "main_strategy": "Respect the boundaries of the current stage",
                    "support_risk": "Wanting more than you can carry",
                    "support_warning": "Pushing upward after you should stop",
                    "guide": {
                        "love": "Stop pushing the relationship beyond what it can realistically hold:\n• Keep the approach simple and consistent.",
                        "career": "Reduce overreach and return to a sustainable scope:\n• Keep the approach simple and consistent.",
                        "health": "Respect physical limits before ambition creates injury or exhaustion:\n• Keep the approach simple and consistent.",
                        "finances": "Cut back risk that exceeds what you can safely carry:\n• Keep the approach simple and consistent.",
                        "relationships": "Do not overextend socially just to maintain status or approval:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Stop pushing the relationship beyond what it can realistically hold.",
                        "career": "Reduce overreach and return to a sustainable scope.",
                        "health": "Respect physical limits before ambition creates injury or exhaustion.",
                        "finances": "Cut back risk that exceeds what you can safely carry.",
                        "relationships": "Do not overextend socially just to maintain status or approval."
                    }
                }
            },
            "jiji": {
                "1": {
                    "name": "Beginning",
                    "text": "A stage has just been completed, so do not rush straight into the next one. Pause, review what worked, and make sure the foundation is sound.",
                    "main_state": "Greater stability through slowing down",
                    "main_strategy": "Stay alert and pause when needed",
                    "support_risk": "Rushing into the next stage",
                    "support_warning": "Moving on before reviewing the result",
                    "guide": {
                        "love": "Pause after a milestone and notice what the relationship still needs:\n• Keep the approach simple and consistent.",
                        "career": "Review the completed work before launching the next project:\n• Keep the approach simple and consistent.",
                        "health": "Keep the routines that produced improvement instead of immediately increasing intensity:\n• Keep the approach simple and consistent.",
                        "finances": "Consolidate gains before making another major move:\n• Keep the approach simple and consistent.",
                        "relationships": "Take time to appreciate and stabilize repaired or improved relationships:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Pause after a milestone and notice what the relationship still needs.",
                        "career": "Review the completed work before launching the next project.",
                        "health": "Keep the routines that produced improvement instead of immediately increasing intensity.",
                        "finances": "Consolidate gains before making another major move.",
                        "relationships": "Take time to appreciate and stabilize repaired or improved relationships."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "A small loss does not need to be chased. Let go of what is not essential and keep your attention on the larger direction.",
                    "main_state": "Confidence without forcing recovery",
                    "main_strategy": "Stay centered and let events settle naturally",
                    "support_risk": "Fixating on a minor loss",
                    "support_warning": "Wasting energy trying to recover what no longer matters",
                    "guide": {
                        "love": "Do not chase every small loss or change in the relationship:\n• Keep the approach simple and consistent.",
                        "career": "Let minor setbacks go and keep attention on the larger objective:\n• Keep the approach simple and consistent.",
                        "health": "Do not overreact to a small fluctuation if the overall trend is stable:\n• Keep the approach simple and consistent.",
                        "finances": "A small loss does not require a risky attempt to recover it immediately:\n• Keep the approach simple and consistent.",
                        "relationships": "Release small disappointments that do not change the value of the relationship:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Do not chase every small loss or change in the relationship.",
                        "career": "Let minor setbacks go and keep attention on the larger objective.",
                        "health": "Do not overreact to a small fluctuation if the overall trend is stable.",
                        "finances": "A small loss does not require a risky attempt to recover it immediately.",
                        "relationships": "Release small disappointments that do not change the value of the relationship."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "This is a long campaign, not a quick win. Use reliable people, settle into the long horizon, and protect the progress already made.",
                    "main_state": "Endurance for long-term maintenance",
                    "main_strategy": "Use capable people and manage patiently",
                    "support_risk": "A long and demanding process",
                    "support_warning": "Taking shortcuts because the process feels too slow",
                    "guide": {
                        "love": "Stable relationships still need patient long-term care:\n• Keep the approach simple and consistent.",
                        "career": "Treat success as a long campaign and rely on capable people:\n• Keep the approach simple and consistent.",
                        "health": "Keep good habits after improvement; health maintenance is ongoing:\n• Keep the approach simple and consistent.",
                        "finances": "Protect accumulated gains with long-term planning:\n• Keep the approach simple and consistent.",
                        "relationships": "Keep communication habits strong after a conflict has been repaired:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Stable relationships still need patient long-term care.",
                        "career": "Treat success as a long campaign and rely on capable people.",
                        "health": "Keep good habits after improvement; health maintenance is ongoing.",
                        "finances": "Protect accumulated gains with long-term planning.",
                        "relationships": "Keep communication habits strong after a conflict has been repaired."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "The outside may look polished while small weaknesses grow underneath. Inspect the structure and repair problems before they expand.",
                    "main_state": "Caution toward hidden weaknesses",
                    "main_strategy": "Find and repair small problems early",
                    "support_risk": "Easy-to-miss internal weaknesses",
                    "support_warning": "Ignoring details because the surface looks good",
                    "guide": {
                        "love": "Address a small crack in the relationship before it widens:\n• Keep the approach simple and consistent.",
                        "career": "Inspect hidden operational risks even when results look good:\n• Keep the approach simple and consistent.",
                        "health": "Check small symptoms early instead of waiting for them to become serious:\n• Keep the approach simple and consistent.",
                        "finances": "Fix spending leaks or risky positions while they are still manageable:\n• Keep the approach simple and consistent.",
                        "relationships": "Talk about small tensions before they damage trust:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Address a small crack in the relationship before it widens.",
                        "career": "Inspect hidden operational risks even when results look good.",
                        "health": "Check small symptoms early instead of waiting for them to become serious.",
                        "finances": "Fix spending leaks or risky positions while they are still manageable.",
                        "relationships": "Talk about small tensions before they damage trust."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Simple sincerity carries more weight than expensive display. Put real care into what matters instead of trying to prove yourself through appearance.",
                    "main_state": "Good results through simple sincerity",
                    "main_strategy": "Use genuine care rather than display",
                    "support_risk": "Wanting to impress through appearance",
                    "support_warning": "Choosing image over sincerity",
                    "guide": {
                        "love": "Sincere care matters more than grand gestures:\n• Keep the approach simple and consistent.",
                        "career": "Simple honest work can carry more weight than impressive presentation:\n• Keep the approach simple and consistent.",
                        "health": "Realistic habits matter more than elaborate wellness routines:\n• Keep the approach simple and consistent.",
                        "finances": "Sound fundamentals matter more than flashy financial moves:\n• Keep the approach simple and consistent.",
                        "relationships": "Treat people sincerely regardless of status or appearance:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Sincere care matters more than grand gestures.",
                        "career": "Simple honest work can carry more weight than impressive presentation.",
                        "health": "Realistic habits matter more than elaborate wellness routines.",
                        "finances": "Sound fundamentals matter more than flashy financial moves.",
                        "relationships": "Treat people sincerely regardless of status or appearance."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "Success can create overconfidence. Know when to stop, stay respectful of risk, and do not let a good run carry you into danger.",
                    "main_state": "A careful close to a successful cycle",
                    "main_strategy": "Stay clear-headed and know when enough is enough",
                    "support_risk": "Carelessness after success",
                    "support_warning": "Losing vigilance at the final stage",
                    "guide": {
                        "love": "Do not assume a stable relationship can run on autopilot:\n• Keep the approach simple and consistent.",
                        "career": "Success is when discipline matters most; keep learning and checking risk:\n• Keep the approach simple and consistent.",
                        "health": "Good health still needs maintenance and restraint:\n• Keep the approach simple and consistent.",
                        "finances": "Protect wealth with humility and controlled risk:\n• Keep the approach simple and consistent.",
                        "relationships": "Stay grateful and modest even when relationships are going well:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Do not assume a stable relationship can run on autopilot.",
                        "career": "Success is when discipline matters most; keep learning and checking risk.",
                        "health": "Good health still needs maintenance and restraint.",
                        "finances": "Protect wealth with humility and controlled risk.",
                        "relationships": "Stay grateful and modest even when relationships are going well."
                    }
                }
            },
            "weiji": {
                "1": {
                    "name": "Beginning",
                    "text": "A small fox gets its tail wet at the start of the crossing: acting before you are ready creates trouble immediately. Slow down and prepare better.",
                    "main_state": "A small setback that does not define the future",
                    "main_strategy": "Slow down, learn, and prepare",
                    "support_risk": "An awkward early setback",
                    "support_warning": "Losing confidence because the beginning was rough",
                    "guide": {
                        "love": "Do not rush into the next relationship stage because of loneliness or excitement:\n• Keep the approach simple and consistent.",
                        "career": "Observe the situation before committing to a major move:\n• Keep the approach simple and consistent.",
                        "health": "Get clear information before trying random fixes:\n• Keep the approach simple and consistent.",
                        "finances": "Keep cash available and avoid impulsive entries while conditions are unclear:\n• Keep the approach simple and consistent.",
                        "relationships": "Observe new people before investing trust:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Do not rush into the next relationship stage because of loneliness or excitement.",
                        "career": "Observe the situation before committing to a major move.",
                        "health": "Get clear information before trying random fixes.",
                        "finances": "Keep cash available and avoid impulsive entries while conditions are unclear.",
                        "relationships": "Observe new people before investing trust."
                    }
                },
                "2": {
                    "name": "Rooting",
                    "text": "You deliberately hold the wheels still because the time is not right. That restraint will put you in a better position when conditions change.",
                    "main_state": "Steady progress through self-control",
                    "main_strategy": "Keep action within a reasonable range",
                    "support_risk": "Impatience to speed up",
                    "support_warning": "Losing discipline because you want faster progress",
                    "guide": {
                        "love": "Settle yourself before seeking certainty from the relationship:\n• Keep the approach simple and consistent.",
                        "career": "Use uncertain periods to build skills and preparation:\n• Keep the approach simple and consistent.",
                        "health": "Slow down and restore a calmer baseline before adding more demands:\n• Keep the approach simple and consistent.",
                        "finances": "Review your financial structure rather than chasing new opportunities:\n• Keep the approach simple and consistent.",
                        "relationships": "Clarify your own values and boundaries before seeking belonging:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Settle yourself before seeking certainty from the relationship.",
                        "career": "Use uncertain periods to build skills and preparation.",
                        "health": "Slow down and restore a calmer baseline before adding more demands.",
                        "finances": "Review your financial structure rather than chasing new opportunities.",
                        "relationships": "Clarify your own values and boundaries before seeking belonging."
                    }
                },
                "3": {
                    "name": "Trial",
                    "text": "You are close to the crossing, but this is also the most dangerous point. Do not force the last step; wait for timing and support.",
                    "main_state": "A possible breakthrough through timing and help",
                    "main_strategy": "Act when support and conditions are ready",
                    "support_risk": "A frustrating bottleneck",
                    "support_warning": "Charging ahead before the timing is right",
                    "guide": {
                        "love": "At a critical point, avoid impulsive words or irreversible relationship decisions:\n• Keep the approach simple and consistent.",
                        "career": "Get advice, assess risk, and wait for better support before pushing ahead:\n• Keep the approach simple and consistent.",
                        "health": "Follow a cautious recovery plan and do not treat brief improvement as full recovery:\n• Keep the approach simple and consistent.",
                        "finances": "Stabilize losses before taking new risk:\n• Keep the approach simple and consistent.",
                        "relationships": "Stay calm under misunderstanding and let facts work over time:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "At a critical point, avoid impulsive words or irreversible relationship decisions.",
                        "career": "Get advice, assess risk, and wait for better support before pushing ahead.",
                        "health": "Follow a cautious recovery plan and do not treat brief improvement as full recovery.",
                        "finances": "Stabilize losses before taking new risk.",
                        "relationships": "Stay calm under misunderstanding and let facts work over time."
                    }
                },
                "4": {
                    "name": "Choice",
                    "text": "You have survived the most uncertain stretch by staying principled and steady. Keep your judgment clear and do not relax because progress has appeared.",
                    "main_state": "Confidence from staying on course",
                    "main_strategy": "Hold to what is right and stay clear around temptation",
                    "support_risk": "Attractive distractions",
                    "support_warning": "Abandoning your direction for a short-term gain",
                    "guide": {
                        "love": "If the relationship feels stuck, seek useful outside perspective rather than circling alone:\n• Keep the approach simple and consistent.",
                        "career": "Ask experienced people for help instead of trying to solve every bottleneck alone:\n• Keep the approach simple and consistent.",
                        "health": "A second professional opinion may help when progress has stalled:\n• Keep the approach simple and consistent.",
                        "finances": "Use qualified advice to find a practical route through a difficult situation:\n• Keep the approach simple and consistent.",
                        "relationships": "Talk to trusted people who can see blind spots you may be missing:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "If the relationship feels stuck, seek useful outside perspective rather than circling alone.",
                        "career": "Ask experienced people for help instead of trying to solve every bottleneck alone.",
                        "health": "A second professional opinion may help when progress has stalled.",
                        "finances": "Use qualified advice to find a practical route through a difficult situation.",
                        "relationships": "Talk to trusted people who can see blind spots you may be missing."
                    }
                },
                "5": {
                    "name": "Manifestation",
                    "text": "Consistency and sincerity are finally bringing light into the situation. Finish the last stretch without tricks or shortcuts.",
                    "main_state": "A positive turn built on sincerity",
                    "main_strategy": "Treat people well and let support gather naturally",
                    "support_risk": "Needing more time before the result is complete",
                    "support_warning": "Doubting honest effort because the result is not finished",
                    "guide": {
                        "love": "Keep your standards and sincerity; a clearer relationship outcome is beginning to form:\n• Keep the approach simple and consistent.",
                        "career": "Stay honest under pressure and let reliable work attract support:\n• Keep the approach simple and consistent.",
                        "health": "Notice small improvements and keep a constructive, realistic mindset:\n• Keep the approach simple and consistent.",
                        "finances": "Do not turn to desperate shortcuts; keep working the sound plan:\n• Keep the approach simple and consistent.",
                        "relationships": "Accept sincere help and respond to it with the same openness:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Keep your standards and sincerity; a clearer relationship outcome is beginning to form.",
                        "career": "Stay honest under pressure and let reliable work attract support.",
                        "health": "Notice small improvements and keep a constructive, realistic mindset.",
                        "finances": "Do not turn to desperate shortcuts; keep working the sound plan.",
                        "relationships": "Accept sincere help and respond to it with the same openness."
                    }
                },
                "6": {
                    "name": "Completion",
                    "text": "You may finally enjoy what has been gained, but keep celebration within limits. Real completion means returning to a stable everyday rhythm afterward.",
                    "main_state": "Clarity through settling into the present",
                    "main_strategy": "Stop chasing and return your attention to what is here",
                    "support_risk": "Restlessness that keeps wanting more",
                    "support_warning": "Continuing to exhaust yourself because you cannot stop",
                    "guide": {
                        "love": "Enjoy the calm without treating it as permanent or guaranteed:\n• Keep the approach simple and consistent.",
                        "career": "Turn the lessons of difficulty into standards for the next stage:\n• Keep the approach simple and consistent.",
                        "health": "Keep the habits that helped you recover instead of relaxing completely:\n• Keep the approach simple and consistent.",
                        "finances": "Turn past mistakes into clear rules for spending, saving, and reserves:\n• Keep the approach simple and consistent.",
                        "relationships": "Value the people who stayed through difficulty and show it through action:\n• Keep the approach simple and consistent."
                    },
                    "focus": {
                        "love": "Enjoy the calm without treating it as permanent or guaranteed.",
                        "career": "Turn the lessons of difficulty into standards for the next stage.",
                        "health": "Keep the habits that helped you recover instead of relaxing completely.",
                        "finances": "Turn past mistakes into clear rules for spending, saving, and reserves.",
                        "relationships": "Value the people who stayed through difficulty and show it through action."
                    }
                }
            }
        },
        ELEMENT_IMG = {
            "天": "img/el-tian.png",
            "地": "img/el-di.png",
            "水": "img/el-shui.png",
            "火": "img/el-huo.png",
            "雷": "img/el-lei.png",
            "風": "img/el-feng.png",
            "山": "img/el-shan.png",
            "澤": "img/el-ze.png"
        };
    typeof window!="undefined"&&(window.HEXAGRAMS_EN=HEXAGRAMS,window.LINES_EN=LINES,window.ELEMENT_IMG_EN=ELEMENT_IMG)
})();