(function () {
  "use strict";

  var HEXAGRAMS_EN = [
    {
      key: "qian",
      num: 1,
      name: "The Will of Light",
      colloquial: "Qián · The Creative",
      keyword: "Source Power & Infinite Creation",
      upper: "☰",
      lower: "☰",
      upperName: "天",
      lowerName: "天",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-01-qian.png",
      symbolLabel: "The Will of Light",
      core: "You are in a moment of boundless creativity and pure momentum. The primal wisdom of the universe is manifesting through your focused will—a pristine and unyielding force. Trust your vision and lead with an authentic, pure heart; there is no need to doubt your inherent power.",
      plain: "I trust my inner light and step forward with courage.",
      plainText: "I trust my inner light and step forward with courage.",
      yongJiuText: "When you release the need to control and dominate, leadership becomes an effortless flow. All things flourish in genuine freedom through your mindful non-action.",
      focus: {
        "感情": "• Radiate authentic confidence and express your heartfelt feelings with honesty.\n• Honor healthy personal boundaries without seeking to control the dynamic.\n• Singles will naturally attract a visionary partner aligned with their frequency.",
        "事業": "• Leadership and creative vitality are peaking; an ideal window to launch new endeavors.\n• Maintain a grand perspective and set clear, long-term strategic goals.\n• Stand firm in integrity and uprightness to earn lasting trust and respect.",
        "健康": "• Vital energy is abundant, but beware of mental overexertion and burnout.\n• Incorporate regular aerobic movement or meditation to balance intense drive.\n• Practice conscious breathing and release accumulated tension in the neck and shoulders.",
        "財運": "• Your strategic foresight is sharp; well-suited for long-term foundational investments.\n• Generate stable abundance through core mastery and proven professional skills.\n• Avoid allowing overconfidence to obscure critical operational details.",
        "人際": "• Your passion and clarity will effortlessly draw exceptional allies to your side.\n• Listen with humility and embrace diverse perspectives with grace.\n• Serve as an uplifting beacon of inspiration and direction within your circle.",
        "其他/不確定": "【The Will of Light】 You are in a moment of pure creative power. Trust your inner vision and lead forward with an authentic heart.",
        "未選": "【The Will of Light】 You are in a moment of pure creative power. Trust your inner vision and lead forward with an authentic heart."
      }
    },
    {
      key: "kun",
      num: 2,
      name: "Mother Earth",
      colloquial: "Kūn · The Receptive",
      keyword: "Deep Receptivity & Gentle Support",
      upper: "☷",
      lower: "☷",
      upperName: "地",
      lowerName: "地",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-02-kun.png",
      symbolLabel: "Mother Earth",
      core: "This moment asks you to step back into stillness and surrender. Just as the earth unconditionally nurtures all living things, the most powerful action right now is receptive acceptance. Align with nature's rhythm, allowing circumstances to ripen naturally in well-tended soil.",
      plain: "I open my heart to life's nourishment, gathering strength in quiet stillness.",
      plainText: "I open my heart to life's nourishment, gathering strength in quiet stillness.",
      yongLiuText: "By embracing all things with enduring tenderness, pure receptivity will guide you to ultimate peace, stability, and abundance.",
      focus: {
        "感情": "• Offer deep empathy and active listening, dissolving friction with gentle grace.\n• Allow yourself to receive love and care without unnecessary defense mechanisms.\n• Singles should enjoy everyday serenity, trusting connections to unfold naturally.",
        "事業": "• Excel in supportive, integrative, and resource-nurturing roles.\n• Pause aggressive expansion to fortify team foundations and operational stability.\n• Follow wise guidance and harmonize with partners through receptive wisdom.",
        "健康": "• Focus on digestive care and restorative sleep to nourish vital energy.\n• Connect with nature through grounding walks or gentle yoga practices.\n• Release chronic worry and maintain an emotionally grounded equilibrium.",
        "財運": "• Adopt a conservative, steady financial approach to accumulate tangible assets.\n• Ideal for long-term savings, real estate, or essential commodity sectors.\n• Avoid speculative gambles; cultivate patient endurance for steady yields.",
        "人際": "• Radiate warmth and generosity, becoming a steady anchor for friends.\n• Listen more and judge less, offering comforting understanding to others.\n• Cherish and honor the family members and close companions who quietly support you.",
        "其他/不確定": "【Mother Earth】 Step back into stillness and receptive trust, allowing all things to mature in their natural season.",
        "未選": "【Mother Earth】 Step back into stillness and receptive trust, allowing all things to mature in their natural season."
      }
    },
    {
      key: "zhun",
      num: 3,
      name: "Breaking Ground",
      colloquial: "Zhūn · Difficulty at the Beginning",
      keyword: "Overcoming Initial Chaos with Hope",
      upper: "☵",
      lower: "☳",
      upperName: "水",
      lowerName: "雷",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-03-zhun.png",
      symbolLabel: "Breaking Ground",
      core: "Like a seed gathering strength in the dark soil, you are preparing to break through resistance. The present chaos and uncertainty are not signs of failure, but the necessary birth pangs of new life. Do not force premature progress; secure your roots and seek guidance and resources.",
      plain: "I embrace the initial chaos, trusting my inner vitality to break through.",
      plainText: "I embrace the initial chaos, trusting my inner vitality to break through.",
      focus: {
        "感情": "• Emerging relationships need time to take root; avoid rushing milestones.\n• Work through early growing pains together to build foundational trust.\n• Navigate ambiguity with patience while honoring mutual personal space.",
        "事業": "• Early-stage projects face resource constraints and developmental hurdles.\n• Focus on building core architecture rather than blind scaling.\n• Actively seek mentorship and advice from experienced industry veterans.",
        "健康": "• Watch for physical tension, stiffness, or exhaustion caused by stress.\n• Hydrate adequately, rest deeply, and replenish your emerging vitality.\n• Engage in light stretching to support smooth circulation and ease tension.",
        "財運": "• You are in an investment phase rather than harvest; monitor cash flow strictly.\n• Test new ideas with small, calculated commitments rather than heavy bets.\n• Allocate capital toward strengthening essential tools and core infrastructure.",
        "人際": "• Proactively build supportive networks by extending genuine goodwill.\n• Seek out kindred spirits willing to share the burdens of early creation.\n• Approach every interaction with humility, inviting helpful allies into your sphere.",
        "其他/不確定": "【Breaking Ground】 The present turbulence marks a new beginning; secure your roots, seek wise support, and life will sprout.",
        "未選": "【Breaking Ground】 The present turbulence marks a new beginning; secure your roots, seek wise support, and life will sprout."
      }
    },
    {
      key: "meng",
      num: 4,
      name: "Morning Mist",
      colloquial: "Méng · Youthful Folly",
      keyword: "Beginner's Mind & Clarity",
      upper: "☶",
      lower: "☵",
      upperName: "山",
      lowerName: "水",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-04-meng.png",
      symbolLabel: "Morning Mist",
      core: "Morning mist wraps around the mountain base, obscuring the horizon—a symbol of stepping into the unknown. Acknowledging what you do not know is the true beginning of wisdom. Release stubborn assumptions, embrace the curious heart of a beginner, and consult experienced mentors to let the fog disperse.",
      plain: "With humble curiosity, I welcome clarity and wisdom through continuous learning.",
      plainText: "With humble curiosity, I welcome clarity and wisdom through continuous learning.",
      focus: {
        "感情": "• Drop preconceptions and communicate openly to understand who they truly are.\n• Navigate emotional innocence with gentle patience and shared learning.\n• Singles can attend educational workshops to naturally meet kindred spirits.",
        "事業": "• You are in a foundational skill-building phase; never feign mastery.\n• Seek mentorship proactively and adhere strictly to professional standards.\n• Focus on personal upskilling rather than rushing to prove yourself prematurely.",
        "健康": "• Be mindful of mental fatigue, eye strain, or sleep issues from overthinking.\n• Clear mental fog through meditation and maintain a balanced daily rhythm.\n• Spend time in mountain or forest settings to refresh the mind with crisp air.",
        "財運": "• Approach unfamiliar investment sectors with caution; do not follow trends blindly.\n• Investing in your education and skill development offers the highest returns right now.\n• Consult qualified financial advisors to uncover blind spots and clarify plans.",
        "人際": "• Maintain a receptive, teachable attitude to attract guidance from mentors.\n• Keep a healthy distance from circles that spread confusion or negativity.\n• Focus on absorbing experience within teams—speak less, observe and do more.",
        "其他/不確定": "【Morning Mist】 Acknowledging the unknown is the dawn of wisdom; seek guidance with a beginner's heart and the mist will clear.",
        "未選": "【Morning Mist】 Acknowledging the unknown is the dawn of wisdom; seek guidance with a beginner's heart and the mist will clear."
      }
    },
    {
      key: "xu",
      num: 5,
      name: "Waiting for Rain",
      colloquial: "Xū · Waiting",
      keyword: "Patient Waiting & Gathering Abundance",
      upper: "☵",
      lower: "☰",
      upperName: "水",
      lowerName: "天",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-05-xu.png",
      symbolLabel: "Waiting for Rain",
      core: "Clouds gather high across the sky, promising sweet rain, yet the timing is not quite ripe. Anxiety cannot force a single drop to fall faster. The wisest choice right now is to relax, nourish your body, and savor the present. Trust divine timing, gathering strength in peaceful readiness until the right opening reveals itself.",
      plain: "I trust the universe's timing, gathering abundant vitality in peaceful contentment.",
      plainText: "I trust the universe's timing, gathering abundant vitality in peaceful contentment.",
      focus: {
        "感情": "• Give the relationship space to mature naturally without demanding immediate commitments.\n• Enjoy daily companionship and presence, trusting love's organic rhythm.\n• Singles should focus on self-care and nourishment; the right match appears in due time.",
        "事業": "• Project momentum has paused for review; forcing progress will invite turbulence.\n• Use this window to polish proposals, recharge, and shore up resources.\n• Maintain quiet, confident professionalism while awaiting the optimal window to strike.",
        "健康": "• Prioritize wholesome nutrition and restorative leisure, enjoying good food and rest.\n• Avoid emotional overeating or digestive upset triggered by anxious waiting.\n• Take warm baths and keep regular sleep hours to let deep tension melt away.",
        "財運": "• A time to defend rather than attack; wait patiently for market clarity.\n• Maintain ample liquid cash and avoid rushing into positions prematurely.\n• Ideal for planning long-term passive income or steady recurring savings.",
        "人際": "• Join pleasant gatherings or dinners to deepen camaraderie and warm bonds.\n• Avoid bringing transactional impatience or urgent demands into social circles.\n• Maintain an optimistic, easygoing presence that naturally draws goodwill.",
        "其他/不確定": "【Waiting for Rain】 Clouds gather to await rain; release worry, enjoy the present, and conserve energy until the perfect moment arrives.",
        "未選": "【Waiting for Rain】 Clouds gather to await rain; release worry, enjoy the present, and conserve energy until the perfect moment arrives."
      }
    },
    {
      key: "song",
      num: 6,
      name: "Halting Strife",
      colloquial: "Sòng · Conflict",
      keyword: "Resolving Conflict & Inner Reflection",
      upper: "☰",
      lower: "☵",
      upperName: "天",
      lowerName: "水",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-06-song.png",
      symbolLabel: "Halting Strife",
      core: "Heaven rises while water flows downward, moving in opposite directions and creating sharp tension. Clinging to the need to prove who is right only burns vital energy. True victory lies in stopping the fight. Step back to examine defensive pride, seeking impartial mediation and peaceful consensus.",
      plain: "I release the need to prove myself right, dissolving division with peace and clarity.",
      plainText: "I release the need to prove myself right, dissolving division with peace and clarity.",
      focus: {
        "感情": "• Stop arguing over winning debates; winning a point often costs the heart.\n• Step into your partner's shoes to feel their grievance, softening your defenses.\n• If at an impasse, invite a trusted mutual friend or counselor to help dialogue.",
        "事業": "• You may encounter contractual disputes, friction, or competitive head-butting.\n• Avoid costly legal warfare or escalation; seek compromise and settlement early.\n• Keep clear, documented paper trails for all agreements to safeguard your standing.",
        "健康": "• Suppressed anger and tension drive up blood pressure, liver heat, and chest tightness.\n• Practice deep breathing, restorative yoga, and meditation to vent pent-up stress.\n• Step away from hostile environments and give yourself quiet emotional breathing room.",
        "財運": "• Guard against financial loss from partnership fallout or disputed profit splits.\n• Review all contract clauses with diligence to avoid expensive litigation costs.\n• Yield a small margin for peace rather than exhausting capital fighting over terms.",
        "人際": "• Remain neutral and objective, refusing to be drawn into office factions or gossip.\n• Maintain polite distance from polarizing figures, curbing the urge to argue.\n• Show generous magnanimity, letting small matters rest and major conflicts fade.",
        "其他/不確定": "【Halting Strife】 Fighting only drains vital energy; let go of winning at all costs, step back, and choose peaceful resolution.",
        "未選": "【Halting Strife】 Fighting only drains vital energy; let go of winning at all costs, step back, and choose peaceful resolution."
      }
    },
    {
      key: "shi",
      num: 7,
      name: "The Disciplined Legion",
      colloquial: "Shī · The Army",
      keyword: "Collective Mission & Pure Discipline",
      upper: "☷",
      lower: "☵",
      upperName: "地",
      lowerName: "水",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-07-shi.png",
      symbolLabel: "The Disciplined Legion",
      core: "Water gathers deep beneath the earth, symbolizing immense latent power and assembled ranks. When facing monumental goals, only rigorous self-discipline and pure, noble purpose will carry you through. Unify your resources and crew, lead by example, and stand as an unwavering pillar of reliability.",
      plain: "With high self-discipline and mindful purpose, I channel my power to achieve great ends.",
      plainText: "With high self-discipline and mindful purpose, I channel my power to achieve great ends.",
      focus: {
        "感情": "• Establish shared principles and commitments in your relationship, showing accountability.\n• Support each other through practical life challenges, deepening warrior-like loyalty.\n• Guard against over-controlling behavior; lead with empathy rather than command.",
        "事業": "• Well-suited for driving major initiatives, team management, and organizational restructuring.\n• Define clear roles and responsibilities, executing strategies with strict fairness.\n• Ensure the core mission is just and purposeful to rally deep team morale.",
        "健康": "• Establish a disciplined schedule for sleep, nutrition, and fitness.\n• Well-suited for structured physical training or progressive muscle conditioning.\n• Avoid chaotic daily rhythms; focus on the compound power of small healthy habits.",
        "財運": "• Set rigorous budget controls and spending discipline to eliminate waste.\n• Well-suited for systematic, institutional approaches to money management.\n• Vet joint venture ventures carefully, defining clear audit and governance rules.",
        "人際": "• Demonstrate dependable leadership, fair judgment, and accountability in groups.\n• Rally aligned companions toward a shared, inspiring horizon.\n• Honor your word without compromise to command heartfelt respect and loyalty.",
        "其他/不確定": "【The Disciplined Legion】 Rally power through noble purpose and strict discipline, marshalling all resources to overcome every challenge.",
        "未選": "【The Disciplined Legion】 Rally power through noble purpose and strict discipline, marshalling all resources to overcome every challenge."
      }
    },
    {
      key: "bi",
      num: 8,
      name: "Alliance of Harmony",
      colloquial: "Bǐ · Holding Together",
      keyword: "Heartfelt Bond & Mutual Flourishing",
      upper: "☵",
      lower: "☷",
      upperName: "水",
      lowerName: "地",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-08-bi.png",
      symbolLabel: "Alliance of Harmony",
      core: "Water flows across the soil, nourishing the landscape and resting in sweet intimacy with the ground. This moment celebrates affinity, collaboration, and authentic connection. Seek out the community that resonates with your spirit, opening your heart to build deep trust. When you walk alongside the good, shared care yields boundless abundance.",
      plain: "I open my heart to connect with others, experiencing shared abundance through mutual support.",
      plainText: "I open my heart to connect with others, experiencing shared abundance through mutual support.",
      focus: {
        "感情": "• Love enters a deeply bonded, intimate phase where shared presence provides safety.\n• Share your authentic vulnerability to create a more profound emotional bridge.\n• Singles should join value-aligned communities to naturally meet a kindred soul.",
        "事業": "• Seek out high-integrity partners and alliances to unlock compounding synergy.\n• Build win-win collaboration frameworks rather than fighting as a lone wolf.\n• Make partnership decisions promptly; chronic hesitation risks missing the window.",
        "健康": "• Boost vitality through group fitness, community wellness, or workouts with your partner.\n• Maintain balanced hydration, drinking warm water and eating nourishing foods.\n• Share your heart with trusted friends to heal stress and release everyday weight.",
        "財運": "• Well-suited for partnerships, community co-creation, or shared-resource ventures.\n• Align with reputable, ethical institutions or allies for joint investments.\n• Wealth grows through flow and sharing; generous mutual support returns magnified.",
        "人際": "• Integrate into supportive, inspiring circles to build an authentic trust network.\n• Take the initiative to extend care, serving as a helpful benefactor to others.\n• Walk away from superficial connections, dedicating energy to deep, lasting bonds.",
        "其他/不確定": "【Alliance of Harmony】 Seek companions who resonate with your soul, building deep bonds of mutual trust to walk into abundance together.",
        "未選": "【Alliance of Harmony】 Seek companions who resonate with your soul, building deep bonds of mutual trust to walk into abundance together."
      }
    },
    {
      key: "xiaoxu",
      num: 9,
      name: "Gentle Accumulation",
      colloquial: "Xiǎoxù · The Taming Power of the Small",
      keyword: "Gentle Restraint & Soft Accumulation",
      upper: "☴",
      lower: "☰",
      upperName: "風",
      lowerName: "天",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-09-xiaoxu.png",
      symbolLabel: "Gentle Accumulation",
      core: "Gentle wind glides across the boundless sky, and dense clouds gather without yet releasing their rain. Your current strength is not yet suited for sweeping transformations, and forcing a breakthrough will only lead to exhaustion. Attend to small matters with patient, subtle care, softening rigid obstacles with grace as you wait for the right moment.",
      plain: "I gather strength with gentle patience, achieving lasting depth in the smallest details.",
      plainText: "I gather strength with gentle patience, achieving lasting depth in the smallest details.",
      focus: {
        "感情": "• Dissolve friction with gentle, considerate care rather than meeting force with force.\n• Nurture your bond through the small, sweet details of daily life, building quiet rapport.\n• Singles should let connections unfold step by step without rushing to conclusions.",
        "事業": "• Projects face minor pauses or limited resources; do not force massive overhauls.\n• Focus on refining workflows and perfecting details, preparing thoroughly.\n• Use diplomatic, soft communication to ease cross-functional friction and misalignments.",
        "健康": "• Care for your respiratory system, circulation, and subtle chronic fatigue.\n• Suitable for gentle stretching, easy walks, and regular mindful breathing exercises.\n• Avoid rushing or irritability, keeping your mind spacious and calm to protect your vitality.",
        "財運": "• Best suited for micro-savings and steady recurring deposits; avoid large, risky gambles.\n• Review daily hidden expenses, practicing thoughtful budgeting down to the details.\n• Adopt a defensive, conservative strategy, waiting patiently for yields to emerge.",
        "人際": "• Radiate warmth and empathy, winning goodwill through an easygoing presence.\n• Listen first when viewpoints clash, resisting the impulse to debate immediately.\n• Act as a soothing listener and gentle bridge within your friend circle.",
        "其他/不確定": "【Gentle Accumulation】 Dense clouds gather without rain; gather your strength with gentle care, attending to the finest details.",
        "未選": "【Gentle Accumulation】 Dense clouds gather without rain; gather your strength with gentle care, attending to the finest details."
      }
    },
    {
      key: "lu",
      num: 10,
      name: "Treading on Danger",
      colloquial: "Lǚ · Treading",
      keyword: "Mindful Conduct & Turning Peril to Peace",
      upper: "☰",
      lower: "☱",
      upperName: "天",
      lowerName: "澤",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-10-lu.png",
      symbolLabel: "Treading on Danger",
      core: "Like walking closely behind a tiger, you may be treading near latent danger, yet holding deep reverence, courtesy, and grounded principles keeps the tiger from biting. When meeting strong forces or intense challenges, lay down all arrogance. Navigating your path with careful, upright conduct will turn peril into peace and transform risk into triumph.",
      plain: "I walk forward with reverence and mindful boundaries, dissolving danger with care.",
      plainText: "I walk forward with reverence and mindful boundaries, dissolving danger with care.",
      focus: {
        "感情": "• Respect mutual boundaries and individual personal space without overstepping.\n• Treating each other with courtly respect and care dissolves friction naturally.\n• When your partner experiences mood swings, offer calm space and patient grace.",
        "事業": "• Move with discretion and care when dealing with demanding leaders or strict rules.\n• Comply strictly with organizational policies and contracts to stay clear of red lines.\n• Conduct yourself with humble professionalism to earn the deep trust of leadership.",
        "健康": "• Care for your feet, ankles, and joint strain caused by nervous tension.\n• Steer clear of high-risk sports and take sensible safety precautions when traveling.\n• Unwind through consistent sleep schedules and soothing foot soaks to release tension.",
        "財運": "• Move with extreme caution in money matters, avoiding heavy leverage and speculation.\n• Scrutinize contract clauses thoroughly to ensure every deal is compliant and sound.\n• Make capital preservation your primary rule, avoiding danger for quick gains.",
        "人際": "• Maintain healthy social decorum and privacy, avoiding prying into personal matters.\n• Maintain poised, self-respecting courtesy when interacting with authority figures.\n• Keep your conduct upright and grounded to steer clear of needless drama.",
        "其他/不確定": "【Treading on Danger】 Standing in high-pressure tests, walking with respectful care and proper conduct turns peril into peace.",
        "未選": "【Treading on Danger】 Standing in high-pressure tests, walking with respectful care and proper conduct turns peril into peace."
      }
    },
    {
      key: "tai",
      num: 11,
      name: "Peace and Harmony",
      colloquial: "Tài · Peace",
      keyword: "Flowing Harmony & Abundant Flourishing",
      upper: "☷",
      lower: "☰",
      upperName: "地",
      lowerName: "天",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-11-tai.png",
      symbolLabel: "Peace and Harmony",
      core: "The clear energy of Heaven descends to nourish, while the fertile energy of Earth rises to meet it, uniting in seamless harmony. Blockages dissolve, and bright goodwill pours across the landscape. This is a golden hour where all resources flow freely and momentum is smooth. Open your heart to receive this abundance and share your joy with everyone around you.",
      plain: "I welcome life's smooth harmony with an open heart, sharing in abundant joy.",
      plainText: "I welcome life's smooth harmony with an open heart, sharing in abundant joy.",
      focus: {
        "感情": "• Deeply connected and in complete sync, romance enters a sweet, flourishing season.\n• An ideal time to make lifelong commitments, marry, or plan a shared future.\n• Singles radiate magnetic warmth, easily meeting an aligned, kindred partner.",
        "事業": "• Projects move forward with smooth ease, securing major breakthrough milestones.\n• Teams collaborate in complete harmony, unlocking exceptional group synergy.\n• Ideal for boldly expanding business reach and putting ambitious plans into action.",
        "健康": "• Vital energy and circulation flow smoothly, keeping body and mind vibrant.\n• Maintain buoyant spirits, balanced meals, and regular enjoyable exercise.\n• Well-suited for taking a wellness retreat to reinforce physical and mental health.",
        "財運": "• Financial prosperity flows smoothly, with strong returns on work and investments.\n• Cash flow is exceptionally healthy, ideal for mid-to-long-term strategic growth.\n• Give back with generosity; flowing goodwill returns as even greater abundance.",
        "人際": "• Social circles are warm and wide; helpful mentors and supporters appear everywhere.\n• Treat partners with genuine honesty, creating win-win collaboration environments.\n• Serve as a radiant center of joy and positive energy within your community.",
        "其他/不確定": "【Peace and Harmony】 Heaven and earth unite and all obstacles clear away; open your heart to receive abundance and share joy.",
        "未選": "【Peace and Harmony】 Heaven and earth unite and all obstacles clear away; open your heart to receive abundance and share joy."
      }
    },
    {
      key: "pi",
      num: 12,
      name: "Quiet Solitude",
      colloquial: "Pǐ · Standstill (Stagnation)",
      keyword: "Disconnection & Inner Stillness",
      upper: "☰",
      lower: "☷",
      upperName: "天",
      lowerName: "地",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-12-pi.png",
      symbolLabel: "Quiet Solitude",
      core: "Heaven rises aloof above while Earth sinks heavy below; the two refuse to meet, bringing a temporary standstill and silence. Communication breaks down, values clash, and external resistance runs high. Do not force outward momentum or fight the heavy tide. Retreat into your inner sanctuary, protect your pure character, and quietly wait out the winter.",
      plain: "I protect my core truth amidst standstill, remaining unmoved as I await renewal.",
      plainText: "I protect my core truth amidst standstill, remaining unmoved as I await renewal.",
      focus: {
        "感情": "• Romance enters a cold silence or communication wall; forcing talk only creates friction.\n• Offer each other space to cool down and reflect quietly on personal blind spots.\n• Avoid making impulsive breakups or hurtful choices while sitting in emotional lows.",
        "事業": "• Projects grind to a halt; workplace atmosphere feels heavy and unsupportive.\n• Step behind the scenes to do your work quietly, avoiding battles over territory.\n• Hold fast to professional ethics and boundaries, refusing to drift with bad trends.",
        "健康": "• Watch for sluggish circulation, tight chest, or low energy caused by emotional weight.\n• Practice deep breathing, quiet meditation, and gentle cleanses to ease stagnation.\n• Keep an unattached, peaceful mindset, keeping outside noise from draining your core.",
        "財運": "• Finances enter a tightening cycle; avoid high-risk investments and borrowing.\n• Manage cash flow strictly, making capital preservation and lean spending your priorities.\n• Wait patiently for economic and market tides to turn; avoid catching falling knives.",
        "人際": "• Social ties feel distant or strained; cut down on empty social obligations.\n• Step away from misaligned, negative crowds, protecting your personal boundaries.\n• Deepen inner wisdom in quiet solitude, waiting for true companions to return.",
        "其他/不確定": "【Quiet Solitude】 Heaven and Earth do not meet, stalling outward dialogue; retreat within to nourish virtue while waiting for the tide to turn.",
        "未選": "【Quiet Solitude】 Heaven and Earth do not meet, stalling outward dialogue; retreat within to nourish virtue while waiting for the tide to turn."
      }
    },
    {
      key: "tongren",
      num: 13,
      name: "Heartfelt Fellowship",
      colloquial: "Tóngrén · Fellowship with Men",
      keyword: "Kindred Spirits & Open Partnership",
      upper: "☰",
      lower: "☲",
      upperName: "天",
      lowerName: "火",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-13-tongren.png",
      symbolLabel: "Heartfelt Fellowship",
      core: "The bright flame rises upward, reflecting beautifully against the boundless sky. This is a time to cross boundaries and build authentic, heartfelt connections. Set aside narrow personal cliques and step out with a spacious spirit into the wider world. When you unite in purpose for a shared dream, you can cross every river of difficulty.",
      plain: "I open my heart to walk with the world, achieving grand visions through shared purpose.",
      plainText: "I open my heart to walk with the world, achieving grand visions through shared purpose.",
      focus: {
        "感情": "• Love built upon shared ideals and core values grows deeper and more resilient.\n• Share your authentic dreams, walking hand in hand as soulmates and trusted partners.\n• Singles can join purpose-driven or volunteer groups to meet an aligned partner.",
        "事業": "• Ideal for cross-team alliances, strategic partnerships, and large-scale integrations.\n• Drop narrow, closed team mindsets; unite collective strength through open inclusion.\n• Set clear, inspiring shared goals to spark powerful synergy across your team.",
        "健康": "• Boost vitality through group fitness, community wellness, or outdoor activities.\n• Watch for eye strain or rising internal heat; practice meditation for balance.\n• Honest conversations with like-minded friends offer deep emotional healing.",
        "財運": "• Well-suited for joint ventures, crowdfunding, or shared-economy initiatives.\n• Financial transparency and shared gains are the keys to lasting, profitable teamwork.\n• Making good connections opens commercial doors, building wealth through mutual benefit.",
        "人際": "• Lead with selfless fairness, earning broad trust across diverse circles.\n• Break through social barriers to welcome friends from diverse backgrounds.\n• Serve as a vital bridge and connecting hub within your wider community.",
        "其他/不確定": "【Heartfelt Fellowship】 Step out of narrow silos into the open world, uniting in selfless integrity to achieve great endeavors.",
        "未選": "【Heartfelt Fellowship】 Step out of narrow silos into the open world, uniting in selfless integrity to achieve great endeavors."
      }
    },
    {
      key: "dayou",
      num: 14,
      name: "Radiant Abundance",
      colloquial: "Dàyǒu · Possession in Great Measure",
      keyword: "Sovereign Abundance & Gracious Power",
      upper: "☲",
      lower: "☰",
      upperName: "火",
      lowerName: "天",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-14-dayou.png",
      symbolLabel: "Radiant Abundance",
      core: "The radiant sun shines high in the heavens, its light bathing the earth in golden harvest and clarity. You stand in an abundant season of rich resources and clear favor. True abundance carries noble responsibility: curb arrogance and self-will, curb what is harmful while lifting what is good, and share your warmth with a humble, grateful heart.",
      plain: "I give thanks for the overflowing abundance in my life, sharing my light with humble grace.",
      plainText: "I give thanks for the overflowing abundance in my life, sharing my light with humble grace.",
      focus: {
        "感情": "• Love is rich and sweet; enjoy deep mutual honor, respect, and comfort.\n• Give generously to your partner, creating a warm, fulfilling life together.\n• Singles radiate magnetic warmth, easily attracting an accomplished, confident match.",
        "事業": "• Holding rich resources, clear voice, and decision-making power at a career high.\n• Lead with justice and benevolence, lifting what is good to earn deep respect.\n• Boldly expand your scope to bring long-term, impactful initiatives to life.",
        "健康": "• Vitality is buoyant and energy flows smoothly; body and mind are at their peak.\n• Keep your daily rhythm balanced; avoid burning through energy with late nights.\n• Keep an open, sunny heart, grounding your energy through gratitude and meditation.",
        "財運": "• Wealth flows in abundantly; past investments yield powerful, multi-fold returns.\n• Ideal for setting long-term balanced portfolios and giving back to worthy causes.\n• Wealth grows stronger through generous circulation; avoid greed and lavish waste.",
        "人際": "• Radiate charismatic warmth and leadership, earning the genuine loyalty of others.\n• Be generous with your resources and mentor rising talent, acting as a true benefactor.\n• Stay humble and unpretentious to disarm envy and preserve harmony.",
        "其他/不確定": "【Radiant Abundance】 Sunlight bathes the earth in harvest; curb evil and promote good, keeping abundance alive through sharing.",
        "未選": "【Radiant Abundance】 Sunlight bathes the earth in harvest; curb evil and promote good, keeping abundance alive through sharing."
      }
    },
    {
      key: "qian_modest",
      num: 15,
      name: "Quiet Humility",
      colloquial: "Qiān · Modesty",
      keyword: "Gentle Humility & Inner Nobility",
      upper: "☷",
      lower: "☶",
      upperName: "地",
      lowerName: "山",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-15-qian_modest.png",
      symbolLabel: "Quiet Humility",
      core: "The tall, majestic mountain rests quietly beneath the vast, receptive earth—a symbol of profound inner nobility wrapped in outer modesty. Humility is not weakness, but the unhurried grace of deep character. Balance excess and nourish what is lacking, meeting all life with an equal, respectful heart; you will win all things without ever needing to fight.",
      plain: "I walk through life with gentle humility, gathering lasting blessings in quiet grace.",
      plainText: "I walk through life with gentle humility, gathering lasting blessings in quiet grace.",
      focus: {
        "感情": "• Drop pride and control, listening to your partner's heart with equal honor.\n• Knowing how to yield and soften dissolves every sharp edge in a relationship.\n• Singles radiate a gentle, grounded charm, drawing sincere and enduring love.",
        "事業": "• Deliver exceptional competence while staying low-key, loved by leaders and peers.\n• Skillfully balance resource divides, reducing friction to keep teams moving smoothly.\n• Stay humble in the face of success, making your career roots even more unshakeable.",
        "健康": "• Body and mind are calm and grounded; digestion is easy and circulation is smooth.\n• Well-suited for yoga, Tai Chi, and quiet walks to restore internal balance.\n• Maintain an unhurried, peaceful mindset, steering clear of stressful mental burnout.",
        "財運": "• Manage money with a balanced, steady hand, avoiding speculative hype.\n• Balance income and spending wisely; wealth accumulates steadily like rich soil.\n• Protect assets quietly, avoiding showy displays that invite financial disputes.",
        "人際": "• Stay open, gracious, and approachable, earning the heartfelt respect of all.\n• Never fight over petty points; stepping back creates broad, smooth connections.\n• Serve as a quietly dedicated, trusted anchor within your organization.",
        "其他/不確定": "【Quiet Humility】 The mountain rests beneath the earth, embracing all things in quiet modesty to move forward without obstacle.",
        "未選": "【Quiet Humility】 The mountain rests beneath the earth, embracing all things in quiet modesty to move forward without obstacle."
      }
    },
    {
      key: "yu",
      num: 16,
      name: "Harmonious Joy",
      colloquial: "Yù · Enthusiasm",
      keyword: "Delightful Alignment & Prepared Harmony",
      upper: "☳",
      lower: "☷",
      upperName: "雷",
      lowerName: "地",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-16-yu.png",
      symbolLabel: "Harmonious Joy",
      core: "Spring thunder echoes across the vast earth, awakening all living things with boundless vitality, joy, and enthusiasm. This is a vibrant season of shared happiness, resonance, and inspiring collective vision. Move forward in alignment with what people truly long for, building a shared purpose. Remember to stay clear-headed amid celebration, preparing ahead with grounded foresight—delight without excess.",
      plain: "I flow with joyful vitality, creating harmonious resonance while staying grounded and clear.",
      plainText: "I flow with joyful vitality, creating harmonious resonance while staying grounded and clear.",
      focus: {
        "感情": "• Immerse yourselves in warm, playful romance, sharing laughter and delight together.\n• Join in shared creative or musical hobbies to deepen emotional resonance.\n• Singles radiate magnetic social charm, easily meeting lively matches at gatherings.",
        "事業": "• Spark passion and morale across the team, advancing projects in tune with shared goals.\n• Well-suited for large events, entertainment marketing, or cultural storytelling work.\n• Prepare contingency backups while advancing with optimism, preventing careless mistakes.",
        "健康": "• Spirits are high and energy is abundant; circulation and nervous vitality flow well.\n• Enjoy dance, rhythm workouts, or cheerful outdoor recreational activities.\n• Avoid staying up too late caught in over-excitement; protect consistent rest.",
        "財運": "• Well-suited for investing in entertainment, leisure, culture, or consumer sectors.\n• Keep an optimistic money mindset while guarding against impulsive party spending.\n• Set thoughtful budget boundaries early, keeping financial clarity amid fun.",
        "人際": "• Hold natural charisma and warmth, easily lifting the energy in any room.\n• Align with collective goodwill, becoming an inspiring center within your group.\n• Connect people through art, music, or shared laughter, building active networks.",
        "其他/不確定": "【Harmonious Joy】 Thunder rolls across the earth awakening life; inspire shared passion while preparing ahead in balanced joy.",
        "未選": "【Harmonious Joy】 Thunder rolls across the earth awakening life; inspire shared passion while preparing ahead in balanced joy."
      }
    },
    {
      key: "sui",
      num: 17,
      name: "Flowing with the Current",
      colloquial: "Suí · Following",
      keyword: "Adapting to the Times & Joyful Flow",
      upper: "☱",
      lower: "☳",
      upperName: "澤",
      lowerName: "雷",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-17-sui.png",
      symbolLabel: "Flowing with the Current",
      core: "Joyful lake waters move alongside rolling thunder, symbolizing the wisdom of dropping rigid attachments to flow with the broader current and human hearts. When you stop fighting the environment and adapt your steps flexibly to real needs, every obstacle transforms into momentum. Hold to quiet integrity within as you adapt, welcoming wide support and smooth progress.",
      plain: "I flow with life's natural rhythm, gathering abundance and joy through flexible adaptation.",
      plainText: "I flow with life's natural rhythm, gathering abundance and joy through flexible adaptation.",
      focus: {
        "感情": "• Honor your partner's pace and preferences, deepening rapport through flexible teamwork.\n• Release the need to control the dynamic, enjoying relaxed and natural daily presence.\n• Singles should let social conversations flow without rigid expectations to meet a good match.",
        "事業": "• Adapt product strategies flexibly based on market shifts and customer feedback.\n• Listen openly to team input, building execution consensus through shared dialogue.\n• Navigate organizational transitions smoothly, showing exceptional adaptability.",
        "健康": "• Align workouts and daily rhythms with the seasons without forcing extreme strain.\n• Keep your body relaxed, paying attention to stretching ankles and leg muscles.\n• Use deep breathing and meditation to release stiffness, keeping circulation smooth.",
        "財運": "• Align investments with broader market trends rather than fighting the current.\n• Adjust budgets dynamically based on real income, keeping healthy liquid cash.\n• Well-suited for participating in steady projects that ride mainstream momentum.",
        "人際": "• Hold an easygoing, friendly presence that settles naturally into new communities.\n• Respect differing views without demanding conformity, building wide goodwill.\n• Cooperate with group needs with grace, becoming an appreciated and loved ally.",
        "其他/不確定": "【Flowing with the Current】 Thunder moves within the lake; drop rigid attachment to adapt with the times, moving smoothly forward in harmony.",
        "未選": "【Flowing with the Current】 Thunder moves within the lake; drop rigid attachment to adapt with the times, moving smoothly forward in harmony."
      }
    },
    {
      key: "gu",
      num: 18,
      name: "Clearing Decay",
      colloquial: "Gǔ · Work on What Has Been Spoiled (Decay)",
      keyword: "Healing Old Neglect & Restoring Order",
      upper: "☶",
      lower: "☴",
      upperName: "山",
      lowerName: "風",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-18-gu.png",
      symbolLabel: "Clearing Decay",
      core: "Wind is trapped at the foot of the mountain, symbolizing stagnation and accumulated decay born of long inactivity. This is not an end, but an invitation for deep renewal. Face inherited problems with courage, cleaning and reforming with resolute purpose. Deliberate carefully before acting and follow up with diligence afterward; old disorder will turn into rich soil for fresh growth.",
      plain: "I courageously face and heal past wounds, welcoming fresh order through deep renewal.",
      plainText: "I courageously face and heal past wounds, welcoming fresh order through deep renewal.",
      focus: {
        "感情": "• Untangle long-buried grievances or unresolved knots, rebuilding healthy boundaries.\n• Break destructive emotional patterns and vicious cycles, welcoming relationship rebirth.\n• Singles should clear past emotional baggage and wounds before stepping into new love.",
        "事業": "• Projects face operational cracks or low efficiency; carry out thorough reforms.\n• Audit structural issues from the ground up, resetting clear standards and execution.\n• Step up to resolve legacy problems, showing exceptional turnaround capability.",
        "健康": "• Address chronic health issues or poor habits, beginning structured detox routines.\n• Care for digestive wellness, gut function, and natural metabolic balance.\n• Clean home and workspace environments thoroughly, keeping air and water fresh.",
        "財運": "• Audit and clear out chronic losing assets, bad debts, and useless subscriptions.\n• Fix financial management leaks completely, resetting a healthy income-expense balance.\n• Evaluate turnaround and restructuring opportunities, turning passive losses into new openings.",
        "人際": "• Heal strained family or friendship bonds, taking the initiative to clear old friction.\n• Step away decisively from toxic social circles that bring emotional or practical drains.\n• Face past commitments with responsible honesty, restoring personal credibility.",
        "其他/不確定": "【Clearing Decay】 Wind blows beneath the mountain bringing renewal; face accumulated issues boldly to turn decay into fresh growth.",
        "未選": "【Clearing Decay】 Wind blows beneath the mountain bringing renewal; face accumulated issues boldly to turn decay into fresh growth."
      }
    },
    {
      key: "lin",
      num: 19,
      name: "Gracious Approach",
      colloquial: "Lín · Approach",
      keyword: "Nurturing Oversight & Growing Vitality",
      upper: "☷",
      lower: "☱",
      upperName: "地",
      lowerName: "澤",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-19-lin.png",
      symbolLabel: "Gracious Approach",
      core: "Lake waters rise to nourish the fertile earth, and bright, positive energy grows steadily from below. You are stepping into an expanding phase of rising influence and arriving opportunities. Reach out to others with generous warmth, offering hands-on care, mentorship, and clear guidance. Stay mindful in success, preparing early for the natural turn of future seasons.",
      plain: "I step into the world with warmth and responsibility, guiding flourishing growth through care.",
      plainText: "I step into the world with warmth and responsibility, guiding flourishing growth through care.",
      focus: {
        "感情": "• Offer warm care and attentive quality time to your partner; harmony deepens daily.\n• Show mature, supportive responsibility, offering deep emotional safety.\n• Singles enjoy growing romantic prospects; extending friendly warmth invites sweet love.",
        "事業": "• Leadership and execution are rising; ideal for hands-on oversight and guidance.\n• Care for team needs, using human-centered leadership to bring out everyone's best.\n• Business scope expands steadily; ride this momentum to bring key initiatives to fruition.",
        "健康": "• Vitality is budding and energy is returning, building a robust constitution.\n• Keep up moderate aerobic exercise to promote smooth, unblocked circulation.\n• Mind your diet, avoiding heavy banquets that add unnecessary strain to digestion.",
        "財運": "• Financial momentum is climbing steadily, with growth in earned income and side projects.\n• Ideal for mapping out expanding financial plans and pursuing quality investment options.\n• Set aside long-term reserve funds during strong earnings to buffer future market shifts.",
        "人際": "• Approachable, warm, and generous, you are loved by colleagues and friends alike.\n• Mentor rising talent and offer support freely, building rich social capital.\n• Cultivate open, fair communication, winning deep trust from all corners.",
        "其他/不確定": "【Gracious Approach】 Earth approaches the lake with budding life; lead with warmth and hands-on care while staying prepared for future turns.",
        "未選": "【Gracious Approach】 Earth approaches the lake with budding life; lead with warmth and hands-on care while staying prepared for future turns."
      }
    },
    {
      key: "guan",
      num: 20,
      name: "Clear Contemplation",
      colloquial: "Guān · Contemplation (View)",
      keyword: "Mindful Insight & Inspiring Presence",
      upper: "☴",
      lower: "☷",
      upperName: "風",
      lowerName: "地",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-20-guan.png",
      symbolLabel: "Clear Contemplation",
      core: "Wind sweeps across the vast earth like the solemn stillness before a sacred ceremony where hands are washed in reverence. Step back from petty disputes and look across the whole horizon from a higher dimension. Through deep self-reflection and insight, perceive the true essence and natural rhythm of things. When you embody noble character, the world is naturally transformed.",
      plain: "With a serene and clear heart, I observe the whole, inspiring wisdom through deep insight.",
      plainText: "With a serene and clear heart, I observe the whole, inspiring wisdom through deep insight.",
      focus: {
        "感情": "• Step back to view relationship dynamics objectively, understanding core needs.\n• Treat each other with sincere reverence, building profound mutual respect.\n• Singles should observe with quiet clarity, discerning true alignment before diving in.",
        "事業": "• Well-suited for strategic planning, market research, and brand architecture.\n• Lead by example, inspiring teams through shared vision and authentic values.\n• Pause rushed actions; observe the broader landscape before deciding.",
        "健康": "• Prioritize mental serenity through deep meditation and quiet stillness.\n• Relieve eye strain and relax the nervous system, keeping a balanced daily pace.\n• Gaze across natural landscapes to soothe the mind, restoring inner clarity.",
        "財運": "• Evaluate global trends and long-term industry landscapes from a macro lens.\n• Observe market shifts calmly, looking past short-term noise and hype.\n• Review overall financial structures, dedicating capital to long-term value.",
        "人際": "• Embody a steady, grounded presence, serving as a trusted guide to others.\n• Observe more and judge less, holding diverse perspectives with grace.\n• Lead by example with consistency, winning deep and lasting respect.",
        "其他/不確定": "【Clear Contemplation】 Wind moves across the earth in solemn clarity; look across the whole and inspire hearts through noble character.",
        "未選": "【Clear Contemplation】 Wind moves across the earth in solemn clarity; look across the whole and inspire hearts through noble character."
      }
    },
    {
      key: "shike",
      num: 21,
      name: "Biting Through",
      colloquial: "Shìkè · Biting Through",
      keyword: "Breaking Obstacles & Decisive Justice",
      upper: "☲",
      lower: "☳",
      upperName: "火",
      lowerName: "雷",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-21-shike.png",
      symbolLabel: "Biting Through",
      core: "Thunder and lightning strike together with illuminating force, symbolizing the need to bite through an obstruction between the jaws before things can flow freely. When facing bottlenecks, delays, or misconduct, do not hesitate or compromise. Use clear insight and resolute courage to remove obstacles, establishing clear rules and boundaries. Bite through false pretenses to restore truth and open the way forward.",
      plain: "With clear insight and decisive courage, I break through obstacles to restore pure order.",
      plainText: "With clear insight and decisive courage, I break through obstacles to restore pure order.",
      focus: {
        "感情": "• Address underlying issues openly, biting through long-avoided emotional knots.\n• Set clear, non-negotiable boundaries, ending passive-aggression or deceit.\n• Singles should cut ambiguous ties decisively to welcome clear, healthy love.",
        "事業": "• Remove project bottlenecks and address protocol breaches with resolute action.\n• Implement clear audits and accountability, establishing professional authority.\n• Settle commercial disputes through transparent contracts and proper legal channels.",
        "健康": "• Care for oral hygiene, jaw tension, and smooth digestive function.\n• Break harmful habits decisively without lingering or dragging your feet.\n• Eat mindfully and chew thoroughly, releasing pent-up irritability and heat.",
        "財運": "• Take firm action to recover overdue payments or fix contract loopholes.\n• Cut chronic losing positions decisively, refusing to hold on out of false hope.\n• Follow regulatory and legal rules strictly, keeping every transaction transparent.",
        "人際": "• Address interpersonal friction directly, clearing up hidden suspicions.\n• Set firm boundaries with bad actors, using formal rules to protect your space.\n• Act with fair, impartial justice, earning unshakeable authority in your group.",
        "其他/不確定": "【Biting Through】 Thunder and fire strike through barriers; face bottlenecks decisively to restore clarity and smooth progress.",
        "未選": "【Biting Through】 Thunder and fire strike through barriers; face bottlenecks decisively to restore clarity and smooth progress."
      }
    },
    {
      key: "bi_adorn",
      num: 22,
      name: "Graceful Refinement",
      colloquial: "Bì · Grace (Adorning)",
      keyword: "Refined Culture & Returning to Essence",
      upper: "☶",
      lower: "☲",
      upperName: "山",
      lowerName: "火",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-22-bi_adorn.png",
      symbolLabel: "Graceful Refinement",
      core: "Warm fire illuminates the mountain foot, revealing the beauty of rocks and trees in elegant harmony. Tasteful refinement, courtesy, and cultivation bring beauty and order to life, but excessive decoration only obscures original truth. While honoring aesthetic beauty and thoughtful rituals, stay anchored in genuine simplicity, letting authenticity shine from within.",
      plain: "Grounded in genuine simplicity, I express graceful refinement and radiate natural light.",
      plainText: "Grounded in genuine simplicity, I express graceful refinement and radiate natural light.",
      focus: {
        "感情": "• Weave thoughtful romance and sweet rituals into daily life to spark joy.\n• Value genuine care above elaborate gestures, avoiding hollow appearances.\n• Singles should present an authentic, polished presence to draw natural attraction.",
        "事業": "• Well-suited for visual design, branding, public relations, and cultural arts.\n• Pair polished presentations with solid, dependable core substance.\n• Focus on refining workflows and aesthetics rather than forcing radical shifts.",
        "健康": "• Care for skincare, facial vitality, and balanced micro-circulation.\n• Soothe stress and refresh the spirit through artistic and aesthetic enjoyment.\n• Savor wholesome, thoughtfully prepared meals that delight the senses.",
        "財運": "• Well-suited for investing in design, creative arts, beauty, or premium brands.\n• Avoid overspending on luxury goods driven purely by vanity or keeping up appearances.\n• Plan finances around modest refinement and steady growth, avoiding speculation.",
        "人際": "• Move with poise and thoughtful manners, showing refined social grace.\n• Treat others with warm sincerity, avoiding any impression of pretentiousness.\n• Connect with friends who appreciate art and culture, enriching your lifestyle.",
        "其他/不確定": "【Graceful Refinement】 Fire warms the mountain foot with elegance; practice refined grace while holding true to simple authenticity.",
        "未選": "【Graceful Refinement】 Fire warms the mountain foot with elegance; practice refined grace while holding true to simple authenticity."
      }
    },
    {
      key: "bo",
      num: 23,
      name: "Patient Shedding",
      colloquial: "Bō · Splitting Apart (Peeling Off)",
      keyword: "Graceful Retreat & Yielding to Decay",
      upper: "☶",
      lower: "☷",
      upperName: "山",
      lowerName: "地",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-23-bo.png",
      symbolLabel: "Patient Shedding",
      core: "The tall mountain rests upon the wide earth, weathered by seasons as its outer rocks gradually peel away. When old structures lose their foundation, propping them up by force only invites greater collapse. This is a time to yield to natural cycles and release attachments. Halt outward expansion, retreat to safe ground, and guard the last seed of life until winter passes.",
      plain: "I accept the shedding of outworn forms, guarding the seed of life in quiet retreat.",
      plainText: "I accept the shedding of outworn forms, guarding the seed of life in quiet retreat.",
      focus: {
        "感情": "• Cracks and decline appear in the relationship; avoid forcing a desperate hold.\n• Accept the shedding and restructuring, giving each other quiet space to reflect.\n• Singles should pause dating to heal and rebuild their inner core.",
        "事業": "• External conditions are tough; projects face resource shrinkage and cuts.\n• Drop expansion plans and adopt a defensive stance to protect core assets.\n• Adapt to downsizing or transitions with quiet focus, avoiding stubborn clashes.",
        "健康": "• Care for spinal alignment, joints, bone density, and chronic fatigue.\n• Reduce heavy exertion; focus on deep rest, warmth, and quiet nourishment.\n• Release heavy emotional burdens, honoring the body's natural renewal cycles.",
        "財運": "• Assets face cyclical decline; avoid catching falling knives with leverage.\n• Adopt a strict capital preservation stance, eliminating non-essential spending.\n• Guard baseline emergency savings, preparing for a long winter.",
        "人際": "• Social circles naturally thin out, revealing who true friends really are.\n• Stay away from opportunists, keeping quiet without fighting petty drama.\n• Lean on the few true companions who stand with you through hard times.",
        "其他/不確定": "【Patient Shedding】 The mountain rests upon the earth as old forms fall away; yield to natural cycles and guard the seed of renewal.",
        "未選": "【Patient Shedding】 The mountain rests upon the earth as old forms fall away; yield to natural cycles and guard the seed of renewal."
      }
    },
    {
      key: "fu",
      num: 24,
      name: "Returning Light",
      colloquial: "Fù · Return (The Turning Point)",
      keyword: "Returning Vitality & Turning Back to Truth",
      upper: "☷",
      lower: "☳",
      upperName: "地",
      lowerName: "雷",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-24-fu.png",
      symbolLabel: "Returning Light",
      core: "Thunder stirs once again deep within the receptive earth, symbolizing the return of the first tender spark of life after winter's long silence. Having wandered from the path, return to the center without delay; all things move in natural, seven-day cycles. Offer this fragile new sprout patient care and gentle shelter without forcing early momentum, greeting spring's renewal in quiet rest.",
      plain: "I welcome the gentle return of inner vitality, greeting fresh beginnings on the true path.",
      plainText: "I welcome the gentle return of inner vitality, greeting fresh beginnings on the true path.",
      focus: {
        "感情": "• After periods of silence or cooling, love welcomes a tender thaw and fresh warmth.\n• Reconnect with the original spark of love, nurturing budding affection with care.\n• Singles enjoy emerging romantic prospects, opening their hearts to new possibilities.",
        "事業": "• Emerging from a valley into fresh beginnings; early light dawns on new initiatives.\n• Well-suited for reviving worthwhile past proposals, testing ideas in small pilots.\n• Follow the natural rhythm of renewal; avoid rushing or burning out emerging energy.",
        "健康": "• Vitality begins to rebound after illness or fatigue; physical strength restores.\n• Rest quietly and nourish your core, giving your body space for gentle self-repair.\n• Build wholesome new routines, helping your system regain strength step by step.",
        "財運": "• Financial pressures begin to ease; cash flow starts trickling back in steadily.\n• Ideal for starting small recurring savings plans or rebuilding core safe assets.\n• Value modest early gains, nurturing newly budding wealth with patient discipline.",
        "人際": "• Strained friendships find openings for reconciliation, clearing away old friction.\n• Reconnect with positive companions, enjoying the warmth of mutual support.\n• Show honest growth and self-correction, rebuilding a trustworthy reputation.",
        "其他/不確定": "【Returning Light】 Thunder stirs within the earth bringing spring; return promptly to the center and nurture new beginnings in quiet rest.",
        "未選": "【Returning Light】 Thunder stirs within the earth bringing spring; return promptly to the center and nurture new beginnings in quiet rest."
      }
    },
    {
      key: "wuwang",
      num: 25,
      name: "Pure Authenticity",
      colloquial: "Wúwàng · Innocence (The Unexpected)",
      keyword: "Natural Alignment & Pure Truth",
      upper: "☰",
      lower: "☳",
      upperName: "天",
      lowerName: "雷",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-25-wuwang.png",
      symbolLabel: "Pure Authenticity",
      core: "Thunder moves beneath heaven, and all living things flourish in natural alignment with universal law. This is a time to drop scheming calculations and return to pure, unpretentious truth. Harbor no improper desires or speculative tricks; when your motives are pure and you walk in harmony with what is right, supreme good fortune flows effortlessly. Moving without false pretenses is the highest wisdom.",
      plain: "I release all false pretenses and calculations, aligning with nature in pure sincerity.",
      plainText: "I release all false pretenses and calculations, aligning with nature in pure sincerity.",
      focus: {
        "感情": "• Connect with complete authenticity, avoiding games, manipulation, or complex dating rules.\n• Let love unfold naturally, releasing desperate attachments to things not meant for you.\n• Singles radiate refreshing, pure charm, naturally drawing sincere and devoted partners.",
        "事業": "• Uphold professional ethics and integrity, doing your daily work with grounded care.\n• Drop shortcut mentalities, winning market trust through genuine competence.\n• Advance initiatives in harmony with practical realities, avoiding false promises.",
        "健康": "• Return to simple, wholesome dining, minimizing artificial and processed foods.\n• Avoid panicking over minor temporary symptoms; support your body's natural healing.\n• Keep an untangled, clean conscience; an easy mind keeps the body light and vibrant.",
        "財運": "• Earn clean income through honest value, avoiding speculative gambles and hype.\n• Maintain an easy, unattached relationship with money, growing assets steadily.\n• Meet unexpected petty losses with calm detachment; resources will naturally return.",
        "人際": "• Treat people with open, honest warmth, offering those around you deep safety.\n• Stay clear of calculating, drama-filled circles, guarding your inner peace.\n• Build friendships on simple honesty, enjoying pure and enduring bonds.",
        "其他/不確定": "【Pure Authenticity】 Thunder rolls beneath heaven in natural flow; drop all selfish calculations and walk in pure truth for great success.",
        "未選": "【Pure Authenticity】 Thunder rolls beneath heaven in natural flow; drop all selfish calculations and walk in pure truth for great success."
      }
    },
    {
      key: "daxu",
      num: 26,
      name: "Deep Restraint",
      colloquial: "Dàxù · The Taming Power of the Great",
      keyword: "Great Restraint & Nourishing Virtue",
      upper: "☶",
      lower: "☰",
      upperName: "山",
      lowerName: "天",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-26-daxu.png",
      symbolLabel: "Deep Restraint",
      core: "The tall mountain holds the boundless energy of heaven within its quiet depths, symbolizing immense accumulation, steady restraint, and deep cultivation. This is not passive stagnation, but gathering undeniable strength to cross rushing rivers and accomplish great works. Learn from the words and deeds of the wise to enrich your virtue, holding back raw momentum to unleash powerful achievements when ready.",
      plain: "I gather knowledge and virtue with patience, preparing in quiet depth to achieve great works.",
      plainText: "I gather knowledge and virtue with patience, preparing in quiet depth to achieve great works.",
      focus: {
        "感情": "• Enduring love requires both a solid material base and deep mutual character.\n• Learn and grow together in everyday life, building lasting trust and rapport.\n• Singles should focus on self-cultivation, building inner depth to draw quality matches.",
        "事業": "• Invest in skill building, research, and resource reserves, creating strong moats.\n• Well-suited for stepping onto wider industry stages to lead major innovative work.\n• Learn from seasoned mentors, using deep technical depth to guide your field.",
        "健康": "• Well-suited for structured strength and stamina training to build deep vitality.\n• Digestion is strong; nourish yourself with quality, wholesome foods to build vigor.\n• Keep a calm, grounded demeanor, channeling energy into enduring focus.",
        "財運": "• A golden window for wealth accumulation; ideal for large savings and long-term holds.\n• Invest in foundational, tangible core assets with strong competitive moats.\n• Capital reserves are deep and resilient, capable of withstanding market swings.",
        "人際": "• Learn from classic wisdom, speaking with cultured depth and grounded ease.\n• Welcome diverse wisdom, building a dependable network of trusted advisors.\n• Serve as a respected mentor and solid anchor within your professional circle.",
        "其他/不確定": "【Deep Restraint】 Mountain holds heaven in quiet depth; cultivate character and strength to cross great waters with ease.",
        "未選": "【Deep Restraint】 Mountain holds heaven in quiet depth; cultivate character and strength to cross great waters with ease."
      }
    },
    {
      key: "yi",
      num: 27,
      name: "Nourishing Wisdom",
      colloquial: "Yí · Nourishment (The Corners of the Mouth)",
      keyword: "Mindful Nourishment & Guarded Speech",
      upper: "☶",
      lower: "☳",
      upperName: "山",
      lowerName: "雷",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-27-yi.png",
      symbolLabel: "Nourishing Wisdom",
      core: "Thunder stirs beneath the quiet mountain, with solid lines embracing receptive space like an open mouth, symbolizing the path of nourishing body and spirit. Observe what you take in and how you nourish others. Guard your speech to cultivate virtue, and practice mindful moderation in food and drink to protect your body. Choose pure physical and spiritual nourishment, letting life shine through clean self-discipline.",
      plain: "I nourish body and spirit with pure energy, cultivating wisdom through mindful moderation.",
      plainText: "I nourish body and spirit with pure energy, cultivating wisdom through mindful moderation.",
      focus: {
        "感情": "• Nourish your bond with honest words and uplifting presence, avoiding harsh speech.\n• Build a wholesome daily lifestyle together, enjoying the warmth of shared meals.\n• Singles should practice self-care; loving yourself is the foundation for healthy romance.",
        "事業": "• Watch your words at work to prevent misunderstandings, focusing on your duties.\n• Projects center on healthcare, wellness, culinary arts, education, or counseling.\n• Provide your team with ample growth room and resources, nurturing top talent.",
        "健康": "• Prioritize clean nutrition, practicing mindful moderation with less oil and sugar.\n• Care for oral health, teeth, jaw alignment, and smooth digestive function.\n• Reset your system with clean sleep and mindful detoxing, restoring balance.",
        "財運": "• Keep an unhurried, self-sufficient money mindset, earning honest livelihoods.\n• Invest in consumer staples, health foods, wellness, or lifelong education.\n• Moderate impulsive consumer desires, directing funds toward real life nourishment.",
        "人際": "• Speak with measured kindness and empathy, serving as a soothing presence for friends.\n• Step away from chronic complainers and gossip, guarding your mental clarity.\n• Connect with friends who value healthy living and self-cultivation.",
        "其他/不確定": "【Nourishing Wisdom】 Thunder moves beneath the mountain; guard your words and moderate your intake, nurturing life with pure discipline for great fortune.",
        "未選": "【Nourishing Wisdom】 Thunder moves beneath the mountain; guard your words and moderate your intake, nurturing life with pure discipline for great fortune."
      }
    },
    {
      key: "daguo",
      num: 28,
      name: "Pillar of Strength",
      colloquial: "Dàguò · Preponderance of the Great",
      keyword: "Bearing Heavy Weight & Extraordinary Action",
      upper: "☱",
      lower: "☴",
      upperName: "澤",
      lowerName: "風",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-28-daguo.png",
      symbolLabel: "Pillar of Strength",
      core: "The lake submerges the trees, and the strong inner lines are heavy while the ends are fragile, symbolizing a ridgepole bending under immense weight. You are at a turning point where you must shoulder an extraordinary mission or navigate intense pressure. Extraordinary times call for extraordinary courage: stand firm without fear, stay serene in solitary resolve, and take bold, decisive action to cross the trial safely.",
      plain: "With unshakeable inner resolve, I carry great responsibility and transcend every trial.",
      plainText: "With unshakeable inner resolve, I carry great responsibility and transcend every trial.",
      focus: {
        "感情": "• The relationship faces unusual challenges, such as age gaps, family disapproval, or heavy life pressures.\n• Both partners must show unwavering courage and dedication to weather outside stress together.\n• Singles may encounter non-traditional connections; listen to your heart and embrace them boldly.",
        "事業": "• Taking on a high-stakes, high-pressure project that tests your ultimate endurance and capability.\n• Have the courage to make unconventional calls in critical moments, acting decisively to turn the tide.\n• Stand firm on the true path even if walking alone, embodying the resolute strength of a pillar.",
        "健康": "• Care for spinal alignment, lower back strain, joint fatigue, or mental burnout from prolonged stress.\n• Avoid chronic overwork; find supportive anchors to release accumulated physical and mental tension.\n• Engage in deep somatic release and gentle spinal decompression to restore structural resilience.",
        "財運": "• Financial structures face heavier leverage or major capital commitments; allocate with vigilance.\n• Implement emergency treasury protocols suited for high-stakes cycles, preventing liquidity strain.\n• Seize turning points amidst calculated risk, acting decisively to secure a major breakthrough.",
        "人際": "• Endure outside skepticism with composure, showing the poise of walking your own independent path.\n• Stand as a dependable anchor and steady beacon for your team during critical moments.\n• Step away from those who add emotional weight, seeking allies who offer grounded, practical support.",
        "其他/不確定": "【Pillar of Strength】 The lake rises over the trees as the beam bends under weight; stand firm without fear, achieving greatness through bold resolve.",
        "未選": "【Pillar of Strength】 The lake rises over the trees as the beam bends under weight; stand firm without fear, achieving greatness through bold resolve."
      }
    },
    {
      key: "kan",
      num: 29,
      name: "Stillness in the Depths",
      colloquial: "Kǎn · The Abysmal (Water)",
      keyword: "Successive Trials & Inner Clarity",
      upper: "☵",
      lower: "☵",
      upperName: "水",
      lowerName: "水",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-29-kan.png",
      symbolLabel: "Stillness in the Depths",
      core: "Water surges upon water as trials arrive in succession. Like a river navigating a steep ravine, only by keeping the heart pure, adaptable, and true to its course can you journey freely through deep waters. Do not resist the turbulence; transform fear into focused stillness. When you hold fast to inner clarity and integrity, water will naturally flow past the abyss toward the boundless sea.",
      plain: "Like flowing water, I adapt to every ravine, crossing all depths with inner clarity.",
      plainText: "Like flowing water, I adapt to every ravine, crossing all depths with inner clarity.",
      focus: {
        "感情": "• Romance navigates real-world trials or fragile trust; avoid suspicious accusations.\n• Open your hearts to speak with transparent vulnerability, forging deep resilience through the storm.\n• Singles should let inner emotional tides settle quietly before diving into complex connections.",
        "事業": "• Projects hit multiple bottlenecks or resource constraints; respond with cool-headed composure.\n• Adapt strategies flexibly to shifting terrain, resolving risks through meticulous craftsmanship.\n• Guard core integrity and ethical baselines, tempering your team's deepest resilience in adversity.",
        "健康": "• Care for the kidneys, urinary system, ears, and overall fluid balance in the body.\n• Avoid prolonged chronic anxiety; prioritize restorative, deep sleep to replenish vital essence.\n• Engage in quiet meditation, warm mineral baths, or gentle swimming to calm the nervous system.",
        "財運": "• Finances face tight cycles and cash-flow pressures; avoid high-leverage gambles.\n• Prioritize baseline liquidity, sealing financial leaks and addressing bad debts promptly.\n• Keep a cool, rational mind, waiting patiently for market cycles to bottom out into fresh opportunity.",
        "人際": "• In complex social currents, maintain independent clarity without taking polarizing sides.\n• Collaborate closely with proven, trustworthy companions, supporting each other through hardship.\n• Choose confidants with care, disarming outside hostility with fluid, water-like wisdom.",
        "其他/不確定": "【Stillness in the Depths】 Water flows through double chasms; keep the heart clear and upright, navigating every trial with quiet resolve.",
        "未選": "【Stillness in the Depths】 Water flows through double chasms; keep the heart clear and upright, navigating every trial with quiet resolve."
      }
    },
    {
      key: "li",
      num: 30,
      name: "Radiant Alignment",
      colloquial: "Lí · The Clinging (Fire)",
      keyword: "Devotion to Truth & Luminous Expression",
      upper: "☲",
      lower: "☲",
      upperName: "火",
      lowerName: "火",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-30-li.png",
      symbolLabel: "Radiant Alignment",
      core: "Twin flames rise in harmony, illuminating the four corners with brilliance. Just as fire must cling to dry wood to burn continuously, life's radiance requires anchoring to what is true, good, and balanced. Discern where you attach your passion and energy; cultivate the gentle, receptive nature of the cow. When your gifts are rooted in the right foundation, your light will shine without end.",
      plain: "I anchor my passion in truth and virtue, illuminating the world with gentle clarity.",
      plainText: "I anchor my passion in truth and virtue, illuminating the world with gentle clarity.",
      focus: {
        "感情": "• Passion is vibrant and warm; celebrate each other as mutual beacons of light.\n• Practice gentle, compassionate listening, preventing fiery tempers from sparking friction.\n• Singles radiate magnetic, sunny warmth, easily drawing high-caliber connections at gatherings.",
        "事業": "• Well-suited for culture, media, visual design, public relations, or technological innovation.\n• Anchor your talents to a solid, credible platform or team to unleash your fullest potential.\n• Maintain sharp discernment and visionary foresight, guiding initiatives with clear purpose.",
        "健康": "• Care for heart health, cardiovascular balance, vision, and mental over-excitement.\n• Avoid chronic late nights and excessive screen time; rest your eyes and mind regularly.\n• Soothe internal heat and mental restlessness through art, reading, or quiet nature walks.",
        "財運": "• Invest in high-growth, innovative, cultural, or clean energy sectors.\n• Generate substantial earnings through professional mastery and recognized thought leadership.\n• Maintain objective financial logic, avoiding getting dazzled by superficial, speculative bubbles.",
        "人際": "• Express yourself with warmth, wit, and charisma, naturally drawing inspired companions.\n• Share wisdom generously, serving as a bright, uplifting beacon within your circle.\n• Treat others with gracious courtesy, avoiding intellectual arrogance to preserve harmony.",
        "其他/不確定": "【Radiant Alignment】 Sun and moon illuminate the heavens; anchor passion to virtue and gentle care to shine with lasting clarity.",
        "未選": "【Radiant Alignment】 Sun and moon illuminate the heavens; anchor passion to virtue and gentle care to shine with lasting clarity."
      }
    },
    {
      key: "xian",
      num: 31,
      name: "Heartfelt Resonance",
      colloquial: "Xián · Influence (Wooing)",
      keyword: "Intuitive Resonance & Mutual Attraction",
      upper: "☱",
      lower: "☶",
      upperName: "澤",
      lowerName: "山",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-31-xian.png",
      symbolLabel: "Heartfelt Resonance",
      core: "A tranquil lake rests upon the mountain summit: the mountain opens its hollow depths to receive the waters, while the lake flows down to nourish the slopes, symbolizing pure, mutual heart-to-heart resonance. Release all calculated maneuvers and open your spirit with spacious humility. When you meet life with genuine, unforced goodwill, deep connections and reciprocal harmony unfold effortlessly.",
      plain: "With an open and pure heart, I feel the world's resonance and welcome beautiful bonds.",
      plainText: "With an open and pure heart, I feel the world's resonance and welcome beautiful bonds.",
      focus: {
        "感情": "• Completely attuned and deeply in sync, enjoying rich romance and soulful resonance.\n• An auspicious time to express your feelings, deepen commitments, or marry with joy.\n• Singles possess powerful magnetism, easily meeting a soulmate who sparks an instant spark.",
        "事業": "• Attune sharply to client and market needs, presenting proposals that strike a deep chord.\n• Team communication is effortless and harmonious, with collaborative synergy at its peak.\n• Ideal for brand storytelling, public relations, or cross-functional partnerships.",
        "健康": "• Attune to nervous system signals, lymphatic circulation, and emotional equilibrium.\n• Keep the body relaxed with gentle stretching, Tai Chi, or restorative aromatherapy.\n• Release stress through music, creative expression, and authentic conversations.",
        "財運": "• Intuition is sharp, enabling you to identify emerging trends and market needs ahead of the curve.\n• Well-suited for investing in lifestyle, experiential, or wellness and creative industries.\n• Prosperity grows through organic reputation, word-of-mouth goodwill, and reciprocal alliances.",
        "人際": "• Warm, intuitive, and empathetic, quickly understanding the subtle feelings of others.\n• Listen with spacious humility, winning the heartfelt affection of those around you.\n• Cultivate an authentic circle of kindred spirits where you uplift and inspire one another.",
        "其他/不確定": "【Heartfelt Resonance】 A lake upon the mountain receives with spacious humility; connect with sincere intent to welcome great harmony.",
        "未選": "【Heartfelt Resonance】 A lake upon the mountain receives with spacious humility; connect with sincere intent to welcome great harmony."
      }
    },
    {
      key: "heng",
      num: 32,
      name: "Enduring Constancy",
      colloquial: "Héng · Duration (Constancy)",
      keyword: "Enduring Commitment & Abiding Truth",
      upper: "☳",
      lower: "☴",
      upperName: "雷",
      lowerName: "風",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-32-heng.png",
      symbolLabel: "Enduring Constancy",
      core: "Thunder moves and wind follows, swirling in perpetual harmony to reflect the enduring, self-renewing laws of the cosmos. True constancy is not rigid stagnation, but standing firm in your core principles and purpose amidst a changing world. Maintain dedicated, patient discipline, holding your course without wavering. Through steady everyday accumulation, you build an enduring foundation for lasting success.",
      plain: "I stand firm in my core purpose, building an enduring foundation through steady discipline.",
      plainText: "I stand firm in my core purpose, building an enduring foundation through steady discipline.",
      focus: {
        "感情": "• Love stays fresh through the seasons; honor your lasting commitment in simple everyday moments.\n• Treasure steady, quiet companionship, nurturing a stable and joyful home together.\n• Singles should value integrity and long-term vision, seeking a dependable life partner.",
        "事業": "• Dedicate yourself to deepening your core craft, avoiding rash pivots or constant changes.\n• Build sustainable operating models, adopting a marathon mindset to build an enduring brand.\n• Uphold professional standards and ethical rules, creating steady value through consistency.",
        "健康": "• Maintain consistent daily habits for sleep, exercise, and wholesome nutrition.\n• Care for joints, spinal alignment, and nervous system health with steady maintenance.\n• Keep emotions grounded and calm, nurturing deep vital energy through a steady pace.",
        "財運": "• Well-suited for long-term value investing and recurring contributions, harnessing compound growth.\n• Resist get-rich-quick temptations, holding quality core assets for steady long-term appreciation.\n• Map out long-term financial security, building a resilient safety net for your family.",
        "人際": "• Cherish lifelong friendships built on loyalty and mutual support through thick and thin.\n• Conduct yourself with unshakeable consistency, earning deep and enduring reputation.\n• Stay clear of superficial networking, cultivating high-quality, lasting connections.",
        "其他/不確定": "【Enduring Constancy】 Thunder and wind move together in enduring rhythm; hold to truth and persevere with constancy for lasting success.",
        "未選": "【Enduring Constancy】 Thunder and wind move together in enduring rhythm; hold to truth and persevere with constancy for lasting success."
      }
    },
    {
      key: "dun",
      num: 33,
      name: "Graceful Retreat",
      colloquial: "Dùn · Retreat",
      keyword: "Timely Withdrawal & Conserving Strength",
      upper: "☰",
      lower: "☶",
      upperName: "天",
      lowerName: "山",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-33-dun.png",
      symbolLabel: "Graceful Retreat",
      core: "Heaven rises high above while the mountain stands below, symbolizing the wisdom of timely withdrawal as lower forces gain momentum. Stepping back is not weak surrender, but a masterclass in strategic retreat and self-preservation. In unfavorable seasons, soften your edges and step back with poise, guarding your noble character and inner strength in quiet retreat until the next ascent.",
      plain: "I step back with calm grace, preserving my inner truth through timely retreat.",
      plainText: "I step back with calm grace, preserving my inner truth through timely retreat.",
      focus: {
        "感情": "• When atmosphere feels tense, step back to offer each other space to cool down and reflect.\n• Step away gracefully from draining, disrespectful dynamics without lingering in conflict.\n• Singles should reset their inner energy in quiet solitude rather than dating out of loneliness.",
        "事業": "• When workplace climate turns complex or hostile, keep a low profile behind the scenes.\n• Pause stalled, heavy-resistance initiatives, focusing on internal refinement and skill building.\n• Avoid head-on clashes with aggressive forces, preserving core competitive advantages.",
        "健康": "• Step away from high-stress environments, taking time off to restore body and mind.\n• Care for neck tension, joint stiffness, and immune dips caused by prolonged fatigue.\n• Relax the nervous system through meditation, conscious breathing, and quiet nature walks.",
        "財運": "• When market risk mounts or trends turn downward, raise cash to preserve capital.\n• Trim non-essential spending and investment exposure; avoid trying to force a turnaround.\n• Guard core baseline capital, weathering the economic winter in safe defense.",
        "人際": "• Keep a polite distance from drama and negative crowds to protect your peace.\n• Lay down competitive urges, defusing potential friction with gentle courtesy.\n• Cherish a few kindred companions, enjoying high-quality quiet solitude.",
        "其他/不確定": "【Graceful Retreat】 Heaven withdraws above the mountain; adapt to the times through timely retreat, finding safety in quiet grace.",
        "未選": "【Graceful Retreat】 Heaven withdraws above the mountain; adapt to the times through timely retreat, finding safety in quiet grace."
      }
    },
    {
      key: "dazhuang",
      num: 34,
      name: "Great Power",
      colloquial: "Dàzhuàng · The Power of the Great",
      keyword: "Abundant Strength & Grounded Restraint",
      upper: "☳",
      lower: "☰",
      upperName: "雷",
      lowerName: "天",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-34-dazhuang.png",
      symbolLabel: "Great Power",
      core: "Thunder rolls across the boundless sky, filled with unstoppable momentum and abundant strength. You are in a season of high vitality, confidence, and peak capability. Yet true strength does not lie in brute force, but in knowing how to master power with decorum, ethics, and boundaries. Avoid reckless actions; guide this immense drive along the right path to achieve lasting greatness.",
      plain: "I advance with balanced, purposeful strength, honoring boundaries with grounded confidence.",
      plainText: "I advance with balanced, purposeful strength, honoring boundaries with grounded confidence.",
      focus: {
        "感情": "• Express warm, confident affection while avoiding overbearing control in the relationship.\n• Honor your partner's pace, embracing differences with deep and gentle care.\n• Singles radiate strong attraction, winning genuine affection through upright honesty.",
        "事業": "• Project momentum and execution are exceptionally strong; drive key initiatives forward.\n• Follow regulations and professional ethics strictly; avoid arrogance or cutting corners.\n• Lead by example through tough spots, building authority through upright strength.",
        "健康": "• Physical energy is robust, but guard against internal heat and cardiovascular strain.\n• Enjoy high-intensity workouts while taking proper precautions against muscle and joint strain.\n• Keep a grounded, clear mind, balancing high energy through steady daily rhythms.",
        "財運": "• Earned income and returns are climbing strongly, with solid asset momentum.\n• Stick to transparent investment principles, avoiding reckless leverage born of overconfidence.\n• Allocate capital with discipline to grow wealth, ensuring all gains are compliant and solid.",
        "人際": "• Possess natural leadership charisma and presence, winning genuine respect and loyalty.\n• Treat others with gracious courtesy, avoiding arrogance that sparks resentment.\n• Stand as a dependable, fair pillar of integrity within your community.",
        "其他/不確定": "【Great Power】 Thunder roars across the heavens with great strength; honor boundaries and walk the right path to achieve enduring success.",
        "未選": "【Great Power】 Thunder roars across the heavens with great strength; honor boundaries and walk the right path to achieve enduring success."
      }
    },
    {
      key: "jin",
      num: 35,
      name: "Radiant Progress",
      colloquial: "Jìn · Progress",
      keyword: "Steadfast Ascent & Illuminating Grace",
      upper: "☲",
      lower: "☷",
      upperName: "火",
      lowerName: "地",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-35-jin.png",
      symbolLabel: "Radiant Progress",
      core: "The morning sun rises above the vast earth, clearing away the mist and illuminating the landscape with warmth. This symbolizes a season of advancement, recognition, and well-earned honors. Your talents and character are stepping into the clear light of day, rewarded like a noble leader receiving horses of honor. Step forward with generous warmth, continually refining your virtue to uplift the wider world.",
      plain: "Like the morning sun rising in light, I step forward with gratitude and radiant grace.",
      plainText: "Like the morning sun rising in light, I step forward with gratitude and radiant grace.",
      focus: {
        "感情": "• Love enters a warm, celebratory season; mutual transparency brings deepening affection.\n• Plan a bright future together, enjoying the warm blessings of family and friends.\n• Singles radiate confident, joyful charm, easily drawing exceptional and aligned matches.",
        "事業": "• Professional achievements are recognized by leadership and market, bringing promotions.\n• Showcase your talents boldly, stepping onto broader stages to expand your voice.\n• Ride organizational momentum to lead your team toward impressive new milestones.",
        "健康": "• Vitality is high and spirits are bright; overall physical energy is ascending.\n• Spend time in outdoor sunshine and nature, boosting vitality and immune resilience.\n• Keep an optimistic, sunny heart, letting positive energy nourish your whole body.",
        "財運": "• Financial prosperity flows smoothly, with growth in earned income and investment gains.\n• Expand quality asset holdings thoughtfully, capturing emerging industry tailwinds.\n• Share your gains with generosity; wealth grows stronger through positive circulation.",
        "人際": "• Popularity is high and mentorship arrives; leaders offer generous support.\n• Treat people with open warmth and integrity, earning universal admiration.\n• Serve as an uplifting, positive center in your circle, expanding your network with ease.",
        "其他/不確定": "【Radiant Progress】 Light rises above the earth in clear ascent; advance with virtue and bright vision to achieve great milestones.",
        "未選": "【Radiant Progress】 Light rises above the earth in clear ascent; advance with virtue and bright vision to achieve great milestones."
      }
    },
    {
      key: "mingyi",
      num: 36,
      name: "Hidden Radiance",
      colloquial: "Míngyí · Darkening of the Light",
      keyword: "Concealing Brilliance & Inner Clarity",
      upper: "☷",
      lower: "☲",
      upperName: "地",
      lowerName: "火",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-36-mingyi.png",
      symbolLabel: "Hidden Radiance",
      core: "Light sinks deep beneath the earth, and darkness descends with surrounding trials. When the external environment is murky, chaotic, or oppressive, forcing your brilliance into view will only invite harm. The highest wisdom now is to keep inner light clear while staying supple and yielding on the outside. Shelter your sacred flame within, move with quiet modesty, and endure the long night with unshakeable resolve.",
      plain: "I shelter my light deep within, guarding pure conviction through the dark night.",
      plainText: "I shelter my light deep within, guarding pure conviction through the dark night.",
      focus: {
        "感情": "• Romance faces outside trials or misunderstandings; avoid heated arguments.\n• Soften your edges and protect love's pure core with patient care until dawn arrives.\n• Singles should pause dating to heal and nurture inner strength in quiet peace.",
        "事業": "• When workplace climate turns harsh or unfair, avoid stepping into the crosshairs.\n• Practice wise understatement, fulfilling basic duties quietly to steer clear of trouble.\n• Hold fast to professional ethics, gathering quiet strength as you wait for the light.",
        "健康": "• Care for heart health, vision, blood circulation, or sleep issues from suppressed stress.\n• Practice deep breathing, quiet rest, and restorative sleep to replenish vital essence.\n• Keep the flame of hope burning within, meeting outside stress with resilient poise.",
        "財運": "• Finances enter a strict defensive cycle; avoid expansion and speculative risks.\n• Guard against deceptive terms, protecting baseline capital to ensure survival.\n• Keep assets quiet and low-key, waiting patiently for the economic night to pass.",
        "人際": "• Stay neutral and quiet in drama-filled circles, playing the fool to avoid friction.\n• Keep distance from overbearing forces, refusing to clash with them directly.\n• Protect inner clarity, sharing unspoken understanding with a few trusted allies.",
        "其他/不確定": "【Hidden Radiance】 Light sinks into the earth during the long night; keep inner clarity while yielding outside, guarding truth through trials.",
        "未選": "【Hidden Radiance】 Light sinks into the earth during the long night; keep inner clarity while yielding outside, guarding truth through trials."
      }
    },
    {
      key: "jiaren",
      num: 37,
      name: "Sacred Household",
      colloquial: "Jiārén · The Family (The Clan)",
      keyword: "Inner Order & Cultivating Home",
      upper: "☴",
      lower: "☲",
      upperName: "風",
      lowerName: "火",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-37-jiaren.png",
      symbolLabel: "Sacred Household",
      core: "Wind rises from the warmth of the fire, symbolizing harmonious order, clear boundaries, and nurturing warmth within the home. The foundation of all flourishing begins at the center: when roles are respected and communication is clean, strength naturally radiates outward into the world. Fulfill your duties with authentic love and clear discipline; when the home is in harmony, all endeavors prosper.",
      plain: "I protect my home with love and healthy order, rooting my life in warm harmony.",
      plainText: "I protect my home with love and healthy order, rooting my life in warm harmony.",
      focus: {
        "感情": "• Clarify roles and responsibilities, creating a warm, stable home in mutual respect.\n• Communicate daily matters openly, easing differences with gentle understanding.\n• Singles should value family ideals and character, seeking a reliable partner.",
        "事業": "• Focus on internal team culture, workflows, and communication to secure your base.\n• Set clear ownership and boundaries, building a team grounded in mutual trust.\n• Well-suited for home products, consumer goods, dining, parenting, or community operations.",
        "健康": "• Maintain good home ventilation, air quality, and shared family health habits.\n• Enjoy wholesome, consistent home-cooked meals to nourish digestion and vitality.\n• Release workplace stress in the warmth of home, enjoying deep, restorative ease.",
        "財運": "• Manage household budgets and everyday spending with care, sealing financial leaks.\n• Well-suited for investing in real estate, home improvement, or family insurance.\n• Plan finances around long-term household safety, building wealth on solid ground.",
        "人際": "• Treasure your core inner circle of family and close friends, nurturing deep bonds.\n• Match words with deeds, building a dependable reputation among colleagues.\n• Treat others with warm, gracious maturity, creating a harmonious social environment.",
        "其他/不確定": "【Sacred Household】 Wind rises from fire as each finds their place; when the home is upright, all endeavors flourish.",
        "未選": "【Sacred Household】 Wind rises from fire as each finds their place; when the home is upright, all endeavors flourish."
      }
    },
    {
      key: "kui",
      num: 38,
      name: "Embracing Difference",
      colloquial: "Kuí · Opposition",
      keyword: "Differing Views & Harmonizing Diversity",
      upper: "☲",
      lower: "☱",
      upperName: "火",
      lowerName: "澤",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-38-kui.png",
      symbolLabel: "Embracing Difference",
      core: "Fire flares upward while lake water flows downward, moving in opposite directions and creating distinct contrast. This symbolizes divergent viewpoints, contrasting styles, or temporary distance. Yet differences are not dead ends, but invitations to widen your horizon. Seek shared ground while honoring individual uniqueness; by appreciating complementary perspectives, you achieve sweet success in small matters.",
      plain: "I welcome diverse perspectives with grace, discovering wider possibilities through contrast.",
      plainText: "I welcome diverse perspectives with grace, discovering wider possibilities through contrast.",
      focus: {
        "感情": "• Accept contrasting personalities and habits, avoiding forcing your partner to match you.\n• View life through your partner's lens, finding playful charm in complementary traits.\n• Singles may encounter someone from a completely different background; stay open-minded.",
        "事業": "• Differing team viewpoints offer fertile ground for creative, out-of-the-box brainstorming.\n• Navigate cross-functional or cross-cultural partnerships by seeking shared wins.\n• Avoid forcing sweeping unification; focus on small-scale trial alignments first.",
        "健康": "• Care for dry eyes, internal heat, hormonal balance, or heat-cold imbalances in the body.\n• Rebalance internal systems, avoiding irritability and insomnia from emotional polarization.\n• Engage in Tai Chi, gentle baths, or restorative therapies to soothe circulation.",
        "財運": "• Diversify investments across varied assets to balance out divergent market forces.\n• Clarify partnership accounting boundaries to prevent disputes over misaligned views.\n• Find undervalued arbitrage opportunities where market consensus is divided.",
        "人際": "• Respect differing opinions and lifestyles, living in harmony without blind conformity.\n• Avoid forcing intimacy when meeting coldness; allow time to melt social distance.\n• Integrate diverse skill sets and viewpoints, turning contrast into strong alliance.",
        "其他/不確定": "【Embracing Difference】 Fire rises and water flows down; harmonize while honoring diversity to achieve success in small matters.",
        "未選": "【Embracing Difference】 Fire rises and water flows down; harmonize while honoring diversity to achieve success in small matters."
      }
    },
    {
      key: "jian",
      num: 39,
      name: "Halting Before the Peak",
      colloquial: "Jiǎn · Obstruction (Hardship)",
      keyword: "Obstacles Ahead & Turning Within",
      upper: "☵",
      lower: "☶",
      upperName: "水",
      lowerName: "山",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-39-jian.png",
      symbolLabel: "Halting Before the Peak",
      core: "A perilous torrent surges above a steep mountain, making the road ahead treacherous and rugged. When confronted with formidable obstacles, forcing your way through will only trap you deeper in the abyss. The wise know when to halt before danger, turning inward to cultivate virtue and wisdom. Seek level ground, consult experienced mentors, and dissolve hardship through self-refinement.",
      plain: "I halt before obstacles with wisdom, gathering inner strength to dissolve hardship.",
      plainText: "I halt before obstacles with wisdom, gathering inner strength to dissolve hardship.",
      focus: {
        "感情": "• Romance meets external hurdles or family disapproval; avoid clashing head-on.\n• Reflect on your own communication blind spots, softening resistance with patience.\n• Singles should pause pursuing others, focusing on self-growth and inner maturity.",
        "事業": "• Projects hit major technical bottlenecks or regulatory walls; forcing progress invites failure.\n• Pause aggressive action, seeking counsel from seasoned veterans and domain experts.\n• Pivot to viable alternative routes, fixing internal flaws while waiting for the right opening.",
        "健康": "• Care for feet, lower-body joints, knees, and sluggish circulation from cold dampness.\n• Avoid high-risk outdoor activities in harsh weather; prioritize rest and joint warmth.\n• Ease anxiety through somatic grounding, resting quietly to replenish vital reserves.",
        "財運": "• Finances face tight cash flow or stalled investments; avoid high-risk bottom-fishing.\n• Trim non-essential expenses, seeking professional financial advice from trusted mentors.\n• Choose conservative wealth-preservation avenues, protecting capital until the turn.",
        "人際": "• Meet social coldness without bitterness, looking within to refine your conduct.\n• Seek counsel from respected elders of deep integrity, learning from their wisdom.\n• Avoid drama-filled social circles, finding peace among grounded, wholesome friends.",
        "其他/不確定": "【Halting Before the Peak】 Water surges above the mountain; halt before danger to cultivate virtue, seeking wise counsel for success.",
        "未選": "【Halting Before the Peak】 Water surges above the mountain; halt before danger to cultivate virtue, seeking wise counsel for success."
      }
    },
    {
      key: "jie",
      num: 40,
      name: "Spring Rain Deliverance",
      colloquial: "Jiě · Deliverance (Untangled)",
      keyword: "Dissolving Hardship & Forgiving Renewal",
      upper: "☳",
      lower: "☵",
      upperName: "雷",
      lowerName: "水",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-40-jie.png",
      symbolLabel: "Spring Rain Deliverance",
      core: "Spring thunder cracks across the sky and nourishing rain descends, thawing long-frozen streams as the earth awakens into vibrant life. Obstacles and gridlocks are completely dissolved, and vitality surges anew. This is a sacred moment to release past burdens and forgive past mistakes. If you have a clear destination, take decisive action without delay; if all is settled, rest and replenish your strength, welcoming fresh abundance with easy composure.",
      plain: "I release all heavy burdens and past grievances, joyfully welcoming rebirth in forgiveness and freedom.",
      plainText: "I release all heavy burdens and past grievances, joyfully welcoming rebirth in forgiveness and freedom.",
      focus: {
        "感情": "• Past misunderstandings and cold distances dissolve completely; warmth and sweetness return as before.\n• Forgive past unintentional mistakes with courage, letting go of emotional baggage to begin a fresh chapter.\n• Singles leave the shadows of past heartbreak behind, stepping forward with lighthearted confidence to meet new love.",
        "事業": "• Long-standing bottlenecks holding back operations are broken, unlocking rapid, breakthrough momentum.\n• Seize the golden window of renewal to act decisively, executing major plans with swift focus.\n• Treat past team mistakes with generous understanding, reigniting morale to build an exceptional team.",
        "健康": "• Qi stagnation and blood blockages clear completely; bodily systems awaken with radiant, buoyant vitality.\n• Chronic discomforts find meaningful relief and resolution, allowing you to enjoy a light, resilient body.\n• Step outdoors into nature for refreshing walks, breathing in fresh spring air to revitalize your spirit.",
        "財運": "• Cash flow thaws and circulates freely; overdue payments are recovered cleanly, lifting financial strain.\n• Seize market recovery opportunities to deploy capital into quality assets, harvesting rich returns.\n• Rebalance assets with wisdom after heavy burdens lift, achieving steady, unhurried financial growth.",
        "人際": "• Long-standing friction and misunderstandings with friends melt away, restoring authentic, warm bonds.\n• Show generous magnanimity in pardoning past errors, earning the heartfelt affection of those around you.\n• Social connections reawaken with lively warmth; supportive allies appear everywhere, opening a harmonious chapter.",
        "其他/不確定": "【Spring Rain Deliverance】 Thunder and rain dissolve the ice; pardon faults and forgive mistakes, stepping forward decisively into new life.",
        "未選": "【Spring Rain Deliverance】 Thunder and rain dissolve the ice; pardon faults and forgive mistakes, stepping forward decisively into new life."
      }
    },
    {
      key: "sun",
      num: 41,
      name: "Yielding to Gain",
      colloquial: "Sǔn · Decrease",
      keyword: "Restraining Desire & Gaining Through Yielding",
      upper: "☶",
      lower: "☱",
      upperName: "山",
      lowerName: "澤",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-41-sun.png",
      symbolLabel: "Yielding to Gain",
      core: "The lake lies deep beneath the mountain, symbolizing the natural balance of decreasing what is below to nourish what is above. Stepping back to decrease is not a true loss, but the conscious mastery of curbing excessive desires, short tempers, and superficial vanity to invest in core substance. Act with pure sincerity; even offering two humble bowls of simple grain touches heaven and earth, harvesting elevated abundance through mindful restraint.",
      plain: "I willingly release excessive desires and superficial distractions, harvesting pure wisdom through grounded restraint.",
      plainText: "I willingly release excessive desires and superficial distractions, harvesting pure wisdom through grounded restraint.",
      focus: {
        "感情": "• Release selfish demands and controlling habits, dedicating more care and giving to your partner.\n• Strip away elaborate pretense, nurturing your relationship with simple, heartfelt honesty.\n• Singles should drop overly rigid, hyper-critical checklists, welcoming authentic connections with an open heart.",
        "事業": "• Streamline complex workflows proactively, focusing core resources on your most vital objectives.\n• Yield short-term advantages generously for the team's long-term success, winning deep, enduring trust.\n• Polish product substance by stripping away unnecessary bells and whistles, sharpening core market strength.",
        "健康": "• Practice mindful dietary moderation with less oil and salt, lightening digestive and metabolic loads.\n• Mind internal heat and inflammation sparked by impatience; calm your mind to soothe irritability.\n• Declutter your living space and mental habits; body and mind feel refreshed through simplicity.",
        "財運": "• Curb impulsive consumer desires strictly, trimming non-essential luxury spending from your budget.\n• Adopt a steady recurring savings strategy, walking away from high-risk speculation to protect capital.\n• Give back through modest charitable contributions; generous circulation attracts lasting abundance.",
        "人際": "• Practice yielding and gracious compromise in daily interactions, showing a spacious, generous spirit.\n• Walk away from vanity-driven circles, cultivating deep bonds with unpretentious, genuine friends.\n• Refrain from sharp verbal battles, building widespread goodwill through humble restraint.",
        "其他/不確定": "【Yielding to Gain】 The lake rests beneath the mountain; restrain anger and curb desires, offering simple sincerity to welcome great fortune.",
        "未選": "【Yielding to Gain】 The lake rests beneath the mountain; restrain anger and curb desires, offering simple sincerity to welcome great fortune."
      }
    },
    {
      key: "yi_increase",
      num: 42,
      name: "Abundant Expansion",
      colloquial: "Yì · Increase",
      keyword: "Embracing the Good & Expansive Growth",
      upper: "☴",
      lower: "☳",
      upperName: "風",
      lowerName: "雷",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-42-yi_increase.png",
      symbolLabel: "Abundant Expansion",
      core: "Wind and thunder stir in mutual empowerment; all living things flourish, expand, and grow with vibrant strength. This is a golden hour when resources converge, momentum surges, and bold expansion is favored. When you see goodness, follow it eagerly; when you find faults, correct them decisively. Channel the abundant resources you receive into uplifting the community—cross great rivers boldly and step into expansive greatness.",
      plain: "I align with life's expansive abundance, creating a grand and flourishing future through continuous growth.",
      plainText: "I align with life's expansive abundance, creating a grand and flourishing future through continuous growth.",
      focus: {
        "感情": "• Romance enters an uplifting season of mutual nourishment and shared growth; love grows sweeter daily.\n• Give generously to each other while elevating yourselves together, walking toward a wider life horizon.\n• Singles radiate inspiring, upward momentum, easily attracting an exceptional partner who empowers them.",
        "事業": "• Opportunities and resources converge; an ideal window to launch ambitious new ventures and initiatives.\n• Learn from excellence swiftly, innovating boldly across disciplines to lead your industry.\n• Reward and empower your team generously, rallying unstoppable execution to overcome every challenge.",
        "健康": "• Circulation flows abundantly and energy is vibrant; physical systems sit in peak flourishing health.\n• Well-suited for structured, progressive conditioning to elevate overall stamina and physical resilience.\n• Keep an optimistic, ambitious mindset, letting positive vitality nourish every meridian in the body.",
        "財運": "• Financial prosperity surges; earned income and investment gains experience rapid, compounding growth.\n• Well-suited for growth-oriented investments, capturing transformative market tailwinds for rich returns.\n• Share prosperity with partners and society; wealth expands continuously through positive circulation.",
        "人際": "• Enjoy widespread acclaim and generous mentorship, expanding your network to unprecedented heights.\n• Lift others up and mentor rising talent, becoming an admired leader through shared success.\n• Partner with peers of expansive vision, co-creating an inspiring, multi-faceted business horizon.",
        "其他/不確定": "【Abundant Expansion】 Wind and thunder empower each other with life; embrace the good and correct faults, crossing great rivers to achieve greatness.",
        "未選": "【Abundant Expansion】 Wind and thunder empower each other with life; embrace the good and correct faults, crossing great rivers to achieve greatness."
      }
    },
    {
      key: "guai",
      num: 43,
      name: "Decisive Breakthrough",
      colloquial: "Guài · Break-through (Resoluteness)",
      keyword: "Decisive Action & Overcoming Discord",
      upper: "☱",
      lower: "☰",
      upperName: "澤",
      lowerName: "天",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-tian.png",
      cardImg: "img/card-43-guai.png",
      symbolLabel: "Decisive Breakthrough",
      core: "The lake rises high above the heavens, ready to burst through in an imminent breakthrough. Five strong lines rise to clear away the lone shadow, symbolizing the decisive moment when truth and integrity eradicate corruption. Declare justice openly and act with firm resolve, yet avoid relying on raw violence or cruel extremes. Keep vigilant awareness and prepare carefully, dissolving shadow through transparent justice to usher in complete clarity.",
      plain: "With open courage and decisive clarity, I dissolve all shadows through unshakeable truth.",
      plainText: "With open courage and decisive clarity, I dissolve all shadows through unshakeable truth.",
      focus: {
        "感情": "• Cut off dragging, draining, or ambiguous dynamics decisively, leaving no lingering complications.\n• Speak your authentic truth openly, resolving historical conflicts with transparent clarity.\n• Singles should leave past heartbreaks behind decisively, stepping into pure, aligned love with a fresh heart.",
        "事業": "• Show resolute, swift decisiveness when making major calls, executing strategies without wavering.\n• Eliminate internal corruption, leaks, and bad actors transparently, restoring organizational discipline.\n• Follow lawful procedures and strategic finesse during reforms, avoiding unnecessary friction.",
        "健康": "• Care for blood pressure spikes, facial inflammation, or sharp nerve tension from chronic stress.\n• Break destructive addictions and habits decisively, leaving no room for relapse.\n• Keep your spirit serene and clear, avoiding fiery agitation to protect heart vitality.",
        "財運": "• Enforce stop-losses decisively on failing positions or heavy risks without hesitation.\n• Audit financial transactions strictly, barring all gray-market or non-compliant capital operations.\n• Seize pivotal market turning points to make strategic allocations, locking in core gains.",
        "人際": "• Draw firm, public lines against dishonorable, manipulative figures, stating your position clearly.\n• Move with upright, fearless integrity, commanding deep, respected authority.\n• Stand as a courageous voice for truth in your group, winning the steadfast support of aligned peers.",
        "其他/不確定": "【Decisive Breakthrough】 The lake rises over heaven toward breakthrough; declare truth openly with mindful vigilance, clearing darkness through justice.",
        "未選": "【Decisive Breakthrough】 The lake rises over heaven toward breakthrough; declare truth openly with mindful vigilance, clearing darkness through justice."
      }
    },
    {
      key: "gou",
      num: 44,
      name: "Unexpected Encounter",
      colloquial: "Gòu · Coming to Meet",
      keyword: "Chance Encounter & Discerning Early Signs",
      upper: "☰",
      lower: "☴",
      upperName: "天",
      lowerName: "風",
      upperImg: "img/el-tian.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-44-gou.png",
      symbolLabel: "Unexpected Encounter",
      core: "Wind blows softly beneath the vast heavens, penetrating everywhere and symbolizing chance encounters that arise unannounced. A subtle shadow begins to stir beneath five lines of light. When facing sudden opportunities or alluring temptations, avoid rushing in blindly or being swept away by forceful appearances. Notice subtle early signs and maintain grounded self-discipline, proclaiming your principles in all directions with clarity.",
      plain: "I remain clear-headed and mindful in sudden encounters, guarding pure truth through keen discernment.",
      plainText: "I remain clear-headed and mindful in sudden encounters, guarding pure truth through keen discernment.",
      focus: {
        "感情": "• When meeting intense, sudden chemistry or chance sparks, keep your rational discernment clear.\n• Beware of overbearing or manipulative partners; observe their character through small daily details.\n• Singles should carry themselves with grounded self-respect, avoiding being swept away by fleeting infatuation.",
        "事業": "• Assess unexpected partnership proposals or sudden resources carefully before committing.\n• Discern subtle early shifts in market sentiment, announcing strategic pivots in advance.\n• Address subtle misconduct or poor habits within the team early before they compound.",
        "健康": "• Watch for catching chills, seasonal colds, sudden allergies, or respiratory sensitivity.\n• Care for your body at the first sign of minor symptoms, preventing chronic issues from taking root.\n• Keep consistent daily routines, avoiding letting sudden social banquets disrupt healthy rhythms.",
        "財運": "• Beware of sudden get-rich-quick investment pitches that carry hidden traps and risks.\n• Evaluate unexpected insider tips with caution; avoid making impulsive leveraged bets.\n• Guard core capital securely, keeping small financial vulnerabilities from turning into heavy losses.",
        "人際": "• When meeting intriguing new acquaintances, stay observant and avoid over-sharing too soon.\n• Sense delicate interpersonal shifts, treating others with courtesy while holding firm boundaries.\n• Show calm social composure, filtering for trustworthy, authentic companions.",
        "其他/不確定": "【Unexpected Encounter】 Wind moves beneath heaven in sudden meeting; discern early signs and hold to truth with clear awareness.",
        "未選": "【Unexpected Encounter】 Wind moves beneath heaven in sudden meeting; discern early signs and hold to truth with clear awareness."
      }
    },
    {
      key: "cui",
      num: 45,
      name: "Sacred Gathering",
      colloquial: "Cuì · Gathering Together (Massing)",
      keyword: "Gathering Talent & Devoted Unity",
      upper: "☱",
      lower: "☷",
      upperName: "澤",
      lowerName: "地",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-di.png",
      cardImg: "img/card-45-cui.png",
      symbolLabel: "Sacred Gathering",
      core: "The lake gathers upon the receptive earth, symbolizing the powerful convergence of talent, resources, and shared purpose. This is a thriving season to align consensus and assemble in unity. Like a sovereign offering sacred prayers at the ancestral temple, lead and inspire others with noble character and uplifting vision. Maintain order and prepare safeguards amidst gathering crowds, achieving great works through devoted solidarity.",
      plain: "With sincerity and spacious grace, I gather positive forces to achieve flourishing works in unity.",
      plainText: "With sincerity and spacious grace, I gather positive forces to achieve flourishing works in unity.",
      focus: {
        "感情": "• Romance enjoys the warm blessings of family and community; ideal for weddings and celebrations.\n• Step into each other's core circles, deepening your bond through the support of loved ones.\n• Singles radiate magnetic social warmth, easily meeting an aligned partner at lively gatherings.",
        "事業": "• Ideal for assembling large teams, corporate mergers, resource integration, and public launches.\n• Rally team morale around a noble mission, unlocking powerful compounding synergy.\n• Build structured internal protocols and security safeguards, keeping order amidst rapid growth.",
        "健康": "• Care for lymphatic circulation, fluid retention, and immune defenses in crowded places.\n• Join group fitness, yoga classes, or dance events, boosting vitality through joyful movement.\n• Keep your spirit serene, avoiding exhaustion from constant social obligations; rest well.",
        "財運": "• Well-suited for crowdfunding, community commerce, or large joint-venture investments.\n• Earnings multiply through the compounding power of gathered resources; liquidity is strong.\n• Put security and fraud-prevention controls in place, keeping gathered capital safe.",
        "人際": "• Hold natural charisma and unifying presence, standing as an admired leader in your group.\n• Smooth over factional differences with grace, fostering a harmonious collective atmosphere.\n• Welcome exceptional talent from all fields, building a vast, deeply loyal network.",
        "其他/不確定": "【Sacred Gathering】 The lake gathers upon the earth in harmony; unite in noble purpose and assemble talent for great success.",
        "未選": "【Sacred Gathering】 The lake gathers upon the earth in harmony; unite in noble purpose and assemble talent for great success."
      }
    },
    {
      key: "sheng",
      num: 46,
      name: "Steadfast Ascent",
      colloquial: "Shēng · Pushing Upward",
      keyword: "Rising with the Tide & Steady Growth",
      upper: "☷",
      lower: "☴",
      upperName: "地",
      lowerName: "風",
      upperImg: "img/el-di.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-46-sheng.png",
      symbolLabel: "Steadfast Ascent",
      core: "A young tree sprouts from the deep earth, growing upward with steady grace, symbolizing progressive, step-by-step advancement. This is not an overnight burst, but the natural culmination of quiet everyday accumulation. Move forward in humble harmony with the wider current, seeking guidance from seasoned mentors. Advance toward the bright south with courage and without fear, climbing steadily to new life peaks.",
      plain: "I align with life's natural rhythm and rise steadily, achieving great heights through patient steps.",
      plainText: "I align with life's natural rhythm and rise steadily, achieving great heights through patient steps.",
      focus: {
        "感情": "• Romance warms up steadily through attentive everyday care; your foundation is deep and solid.\n• Grow and elevate yourselves together, stepping into a mature, high-quality commitment.\n• Singles should showcase their talents in daily work and study, naturally drawing quality matches.",
        "事業": "• Professional career enters a steady upward climb, earning ongoing promotions and leadership trust.\n• Advance projects step by step, accumulating incremental wins into major milestones.\n• Map out mid-to-long-term career growth plans, advancing boldly into open markets.",
        "健康": "• Bodily vitality strengthens steadily like a growing tree; circulation flows with buoyant energy.\n• Well-suited for progressive stamina conditioning, such as jogging, hiking, or strength routines.\n• Keep an optimistic, upward-looking mindset, letting positive vitality nourish internal organs.",
        "財運": "• Financial momentum climbs steadily, with strong growth in earned income and long-term holdings.\n• Stick to recurring investments and compound strategies, scaling assets steadily over time.\n• Reject get-rich-quick thinking, building a solid financial fortress on grounded discipline.",
        "人際": "• Humble, teachable, and dependable, warmly supported and mentored by senior leaders.\n• Build a solid reputation in your group, watching your social influence naturally ascend.\n• Connect with wise mentors and friends, inspiring one another to climb higher together.",
        "其他/不確定": "【Steadfast Ascent】 Wood grows within the earth to great heights; accumulate virtue in small steps to advance toward the south with courage.",
        "未選": "【Steadfast Ascent】 Wood grows within the earth to great heights; accumulate virtue in small steps to advance toward the south with courage."
      }
    },
    {
      key: "kun_exhaust",
      num: 47,
      name: "Tempered in Adversity",
      colloquial: "Kùn · Oppression (Exhaustion)",
      keyword: "Perseverance in Adversity & Testing Purpose",
      upper: "☱",
      lower: "☵",
      upperName: "澤",
      lowerName: "水",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-47-kun_exhaust.png",
      symbolLabel: "Tempered in Adversity",
      core: "The lake water drains away into the deep ravine below, symbolizing exhausted resources and difficult trials. Adversity is the ultimate touchstone of a strong spirit. In seasons of hardship, verbal arguments and complaints are futile and unheeded. Hold to silence and unshakeable inner resolve, dedicating yourself fully to your sacred purpose; passing through extreme trials will lead to true rebirth.",
      plain: "I hold fast to my core purpose in adversity, forging an unshakeable spirit through trials.",
      plainText: "I hold fast to my core purpose in adversity, forging an unshakeable spirit through trials.",
      focus: {
        "感情": "• Love faces practical hardship or resource constraints; avoid mutual blaming and complaints.\n• Stand by each other with quiet resolve and true devotion, weathering the winter through action.\n• Singles should pause seeking outside validation, building inner strength and self-reliance first.",
        "事業": "• Projects face funding bottlenecks, scarce resources, or isolation in challenging terrain.\n• Stop useless verbal arguments; focus on lean survival and protecting core capabilities.\n• Show resolute endurance and fortitude, holding to the right path while awaiting market recovery.",
        "健康": "• Care for depleted stamina, dehydration, kidney vitality, or fatigue from prolonged stress.\n• Enforce dedicated rest and deep sleep, hydrating with warm water and nourishing foods.\n• Keep hope alive within, relying on mental fortitude to carry your body through the storm.",
        "財運": "• Finances enter extreme tightening; avoid borrowing to make speculative gambles.\n• Adopt a strict survival budget, protecting baseline living capital to prevent insolvency.\n• Accept present constraints calmly, waiting patiently for market cycles to bottom out.",
        "人際": "• Speak less and work quietly during lows; avoid complaining to shallow crowds.\n• Recognize who your true, loyal companions are who stand with you through trials.\n• Cultivate noble character in hardship, earning timeless respect through the test of time.",
        "其他/不確定": "【Tempered in Adversity】 The lake is drained of water; words are unheeded, so dedicate yourself to noble purpose and emerge reborn.",
        "未選": "【Tempered in Adversity】 The lake is drained of water; words are unheeded, so dedicate yourself to noble purpose and emerge reborn."
      }
    },
    {
      key: "jing",
      num: 48,
      name: "The Inexhaustible Well",
      colloquial: "Jǐng · The Well",
      keyword: "Endless Nourishment & Preserving the Source",
      upper: "☵",
      lower: "☴",
      upperName: "水",
      lowerName: "風",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-48-jing.png",
      symbolLabel: "The Inexhaustible Well",
      core: "Wood enters beneath the water to draw sweet spring water upward, symbolizing the inexhaustible fountain of inner wisdom and life nourishment. Cities may be relocated and changed, yet the life-giving nature of the deep well remains constant through time. The art of drawing water lies in carrying the vessel through from beginning to end; if the pitcher breaks before reaching the brim, previous labor is lost. Clear away old sediment, restore your inner structures, and nourish all people with pure, abundant spring water.",
      plain: "I tap into the inexhaustible well of inner wisdom, nurturing all life through steady perseverance.",
      plainText: "I tap into the inexhaustible well of inner wisdom, nurturing all life through steady perseverance.",
      focus: {
        "感情": "• Tap into endless devotion within, nourishing your partner and home with constant, steady love.\n• Attend to subtle relationship details from start to finish, deepening unshakeable trust and harmony.\n• Singles should enrich their inner depth; a naturally overflowing spirit draws kindred love with ease.",
        "事業": "• Deepen irreplaceable core competencies and baseline architecture, establishing solid barriers to entry.\n• Exercise meticulous quality control across all deliverables, preventing late-stage operational lapses.\n• Well-suited for public infrastructure, education, consulting, advisory, or essential consumer services.",
        "健康": "• Care for fluid balance, kidney vitality, urinary tract health, and clean daily hydration.\n• Build consistent habits of drinking warm water, promoting smooth circulation and natural cleansing.\n• Connect with inner stillness through meditation, keeping physical and mental vitality abundant and clear.",
        "財運": "• Ideal for investing in steady cash-flow assets, public utilities, infrastructure, or essential staples.\n• Build asset wells that generate reliable passive income, enjoying sustainable, long-term returns.\n• Manage funds meticulously to completion, guarding against unexpected operational risks at final delivery.",
        "人際": "• Hold deep wisdom and a generous spirit of service, offering uplifting guidance to those around you.\n• Serve as an indispensable intellectual anchor and trusted counselor, deeply relied upon by your group.\n• Treat others with refreshing, selfless sincerity; your honorable reputation will spread far and wide.",
        "其他/不確定": "【The Inexhaustible Well】 Wood draws water from the deep to nourish all; preserve the vessel to completion for great good fortune.",
        "未選": "【The Inexhaustible Well】 Wood draws water from the deep to nourish all; preserve the vessel to completion for great good fortune."
      }
    },
    {
      key: "ge",
      num: 49,
      name: "Sacred Metamorphosis",
      colloquial: "Gé · Revolution (Molting)",
      keyword: "Timely Renewal & Radical Transformation",
      upper: "☱",
      lower: "☲",
      upperName: "澤",
      lowerName: "火",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-49-ge.png",
      symbolLabel: "Sacred Metamorphosis",
      core: "Fire burns within the lake as fire and water transform each other, symbolizing that outworn structures have run their course and radical transformation must occur. Like a snake shedding its skin or a leopard transforming its coat, breakthrough requires ripe timing and unshakeable integrity as its cornerstone. Align with universal timing and public consensus, breaking through rigid past paradigms with resolute courage to build a clean new order. Regret dissolves into supreme success.",
      plain: "I flow with the transformative tides of renewal, courageously reinventing myself into fresh brilliance.",
      plainText: "I flow with the transformative tides of renewal, courageously reinventing myself into fresh brilliance.",
      focus: {
        "感情": "• Break out of rigid, stale relationship patterns, breathing fresh vitality and romance into your bond.\n• Walk away from draining legacy habits with courage, beginning an inspiring new shared chapter.\n• Singles should reinvent their mindset and self-image completely, stepping forward to welcome true love.",
        "事業": "• Organizational structures face major turning points; execute bold reforms and model overhauls.\n• Align with new industry trends to pivot business models, breaking out of comfort zones into fresh fields.\n• Advance reforms step by step with transparent clarity, winning the deep trust of your entire team.",
        "健康": "• Break harmful legacy lifestyle habits completely, resetting sleep and nutrition systems with discipline.\n• Care for skin renewal, metabolic cleansing, and brief adjustment phases during physical resets.\n• Engage in deep somatic detox and purification, allowing your body to rebound with radiant vitality.",
        "財運": "• Liquidate stagnant, outdated investment holdings decisively, reallocating into high-growth sectors.\n• Restructure household and personal financial systems, establishing healthy and efficient cash flow.\n• Capitalize on structural economic shifts, transforming your asset foundation into an elevated tier.",
        "人際": "• Walk away from draining, negative social circles decisively, building an uplifting network.\n• Present a refreshed, clear personal presence, winning the genuine praise of new and old peers.\n• Serve as a dependable, inspiring leader during team transitions, uniting aligned companions.",
        "其他/不確定": "【Sacred Metamorphosis】 Fire and water transform each other in the lake; align with the times to reform and achieve supreme triumph.",
        "未選": "【Sacred Metamorphosis】 Fire and water transform each other in the lake; align with the times to reform and achieve supreme triumph."
      }
    },
    {
      key: "ding",
      num: 50,
      name: "The Sacred Vessel",
      colloquial: "Dǐng · The Cauldron",
      keyword: "Nurturing Creation & Establishing Order",
      upper: "☲",
      lower: "☴",
      upperName: "火",
      lowerName: "風",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-50-ding.png",
      symbolLabel: "The Sacred Vessel",
      core: "Wood fuels the sacred fire above to cook raw ingredients into nourishing feasts and sacred vessels, symbolizing transformative nourishment and elevating talent. After breaking old frameworks, establish noble new institutions, culture, and core values to anchor life's purpose. Shoulder great responsibility with balanced poise, nurturing exceptional talent and letting the light of wisdom burn bright, welcoming supreme blessings and prosperity.",
      plain: "With balanced virtue, I nurture all life, establishing an enduring foundation through creative renewal.",
      plainText: "With balanced virtue, I nurture all life, establishing an enduring foundation through creative renewal.",
      focus: {
        "感情": "• Romance reaches profound spiritual elevation, refining and nurturing each other through daily life.\n• Establish shared core values and inspiring goals for the home, enjoying rich and enduring harmony.\n• Singles radiate dignified, cultured presence, naturally attracting a mature, accomplished match.",
        "事業": "• Ideal for core brand building, cultural architecture, premium positioning, and structural governance.\n• Demonstrate exceptional talent integration, transforming team potential into extraordinary milestones.\n• Step up to industry leadership and mentorship, guiding your organization into an inspiring new era.",
        "健康": "• Prioritize wholesome, nutrient-dense culinary nourishment, supporting digestive vitality.\n• Care for hearing, cardiovascular equilibrium, and deep nervous system restoration.\n• Elevate health through cultural, artistic, and mindfulness pursuits, supporting long-lived vitality.",
        "財運": "• Invest in strong brand equity, cultural IP, premium manufacturing, or high-barrier core assets.\n• Modernize financial management systems; assets scale steadily and securely like a sacred vessel.\n• Wealth circulates through creating noble cultural and social value, flourishing sustainably.",
        "人際": "• Revered and dignified, deeply respected by leaders and peers across top-tier circles.\n• Empower those around you with wisdom and resources, serving as an invaluable strategic advisor.\n• Build a high-level network of exceptional minds and resources, succeeding with effortless ease.",
        "其他/不確定": "【The Sacred Vessel】 Wood fuels fire to forge the sacred vessel; anchor your purpose with virtue, welcoming supreme good fortune.",
        "未選": "【The Sacred Vessel】 Wood fuels fire to forge the sacred vessel; anchor your purpose with virtue, welcoming supreme good fortune."
      }
    },
    {
      key: "zhen",
      num: 51,
      name: "Awakening Thunder",
      colloquial: "Zhèn · The Arousing (Shock, Thunder)",
      keyword: "Resounding Shock & Poise Under Pressure",
      upper: "☳",
      lower: "☳",
      upperName: "雷",
      lowerName: "雷",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-lei.png",
      cardImg: "img/card-51-zhen.png",
      symbolLabel: "Awakening Thunder",
      core: "Rolling thunder surges from the deep earth, resounding for hundreds of miles with awe-inspiring force, symbolizing sudden shocks, wake-up calls, and explosive vital energy. When meeting sudden turbulence, early alarm is natural, but turning fear into mindful self-reflection leads to laughter and relief. Stand firm without dropping the sacrificial vessel amidst shaking ground; composure under pressure brings supreme triumph.",
      plain: "I remain centered amidst sudden turbulence, building unshakeable composure through calm presence.",
      plainText: "I remain centered amidst sudden turbulence, building unshakeable composure through calm presence.",
      focus: {
        "感情": "• Romance meets sudden shifts or intense clashes, testing mutual endurance and spacious patience.\n• Stay composed and calm, turning unexpected crises into opportunities for deeper, unbreakable trust.\n• Singles may experience sudden romantic sparks or dramatic emotional turns; stay clear and grounded.",
        "事業": "• Industry or organizational shifts bring sudden disruption, testing emergency leadership bandwidth.\n• Radiate steady composure under pressure, stabilizing team morale and deploying backup plans promptly.\n• Use external disruption to break stagnant deadlocks, leading your team to seize fresh market ground.",
        "健康": "• Care for nervous startle responses, sudden blood pressure spikes, palpitations, or muscle spasms.\n• Avoid prolonged anxiety; settle racing nerves through deep breathing, stillness, and quiet rest.\n• Engage in leg stretches and resistance workouts, releasing built-up somatic tension.",
        "財運": "• Markets face black-swan volatility; avoid panic-selling into temporary market drops.\n• Keep a cool, rational mind, looking for quality assets that have been mispriced amidst panic.\n• Enforce strict defensive hedging protocols, keeping core wealth safe amidst wild swings.",
        "人際": "• Maintain calm composure when facing sudden rumors or noise, letting your character speak.\n• Stand as an unshakeable anchor for your team during unexpected crises, trusted by all.\n• Settle disputes with poised authority, dissolving friction with leadership grace.",
        "其他/不確定": "【Awakening Thunder】 Resounding thunder shakes the land; meet fear with mindful composure to achieve victory and relief.",
        "未選": "【Awakening Thunder】 Resounding thunder shakes the land; meet fear with mindful composure to achieve victory and relief."
      }
    },
    {
      key: "gen",
      num: 52,
      name: "Mountain Stillness",
      colloquial: "Gēn · Keeping Still (Mountain)",
      keyword: "Mindful Stillness & Proper Boundaries",
      upper: "☶",
      lower: "☶",
      upperName: "山",
      lowerName: "山",
      upperImg: "img/el-shan.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-52-gen.png",
      symbolLabel: "Mountain Stillness",
      core: "Towering mountains stand majestic and unshakeable, ridge upon ridge, symbolizing the power of mindful stillness and knowing when to stop. True rest is not passive laziness, but the profound inner discipline of calming the mind and body in their proper place. Step back from endless restless chasing, guard your personal boundaries with calm integrity, and gather deep wisdom in quiet serenity.",
      plain: "I rest in mindful stillness like a steadfast mountain, finding deep peace within my proper place.",
      plainText: "I rest in mindful stillness like a steadfast mountain, finding deep peace within my proper place.",
      focus: {
        "感情": "• Romance enters a quiet, steady resting phase; enjoy the comfort of peaceful presence.\n• Respect each other's personal space and boundaries, honoring independent calm.\n• Singles should settle their inner emotional core first, waiting naturally for true alignment.",
        "事業": "• Projects pause for review and consolidation; avoid pushing forward with rash aggression.\n• Focus on internal system optimization, workflow audits, and reinforcing core team depth.\n• Fulfill your specific job responsibilities with steady integrity, maintaining long-term stability.",
        "健康": "• Care for spinal alignment, back tension, joint stiffness, and nervous system fatigue.\n• Ideal for seated meditation, restorative yoga, Tai Chi, or quiet nature walks.\n• Maintain a grounded, upright posture, letting physical stillness support deep self-repair.",
        "財運": "• Adopt an ultra-conservative, defensive financial posture; hold cash and protect capital.\n• Cease high-frequency trading and impulsive buys, letting your asset base sit secure.\n• Focus on long-term value preservation, waiting patiently for the optimal entry window.",
        "人際": "• Keep interactions clean and respectful, honoring clear social boundaries.\n• Step away from noisy social scenes, enjoying high-quality quiet solitude.\n• Stand as a steadfast, calming anchor for friends seeking inner peace and grounding.",
        "其他/不確定": "【Mountain Stillness】 Towering mountains stand in firm serenity; stop restless chasing and rest within proper boundaries.",
        "未選": "【Mountain Stillness】 Towering mountains stand in firm serenity; stop restless chasing and rest within proper boundaries."
      }
    },
    {
      key: "jian_progress",
      num: 53,
      name: "Gradual Progress",
      colloquial: "Jiàn · Development (Gradual Progress)",
      keyword: "Steady Accumulation & Step-by-Step Growth",
      upper: "☴",
      lower: "☶",
      upperName: "風",
      lowerName: "山",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-53-jian_progress.png",
      symbolLabel: "Gradual Progress",
      core: "Gentle winds blow across the mountain slopes, nourishing growing trees and symbolizing the unhurried, graceful migration of wild geese. All enduring and beautiful things require time to settle; avoid shortcuts or rushed expectations. Follow proper order and etiquette, laying down solid roots step by step like a bride entering a new home with grace, welcoming lasting abundance.",
      plain: "I trust life's natural rhythm, achieving lasting and secure abundance through steady steps.",
      plainText: "I trust life's natural rhythm, achieving lasting and secure abundance through steady steps.",
      focus: {
        "感情": "• Romance develops according to its natural, unhurried rhythm; do not force commitments.\n• Respect traditional etiquette and mutual care, building deep relational foundations over time.\n• Singles should take time to know others slowly through everyday life, harvesting true love.",
        "事業": "• Set clear, phased milestones for projects, executing tasks with meticulous discipline.\n• Reject impatient speculation and shortcuts, earning promotions through solid, verifiable performance.\n• Build sustainable, long-term operational models, expanding business scope step by step.",
        "健康": "• Follow progressive fitness principles; avoid extreme, overnight physical transformations.\n• Establish consistent diet and sleep rhythms, letting physical vitality improve steadily.\n• Ideal for endurance walking, gentle Tai Chi, or progressive stamina training.",
        "財運": "• Practice dollar-cost averaging and long-term investing, growing wealth through compound time.\n• Reject get-rich-quick lures, focusing on fundamental analysis and secure asset growth.\n• Plan financial security for the long haul, fortifying baseline reserves stone by stone.",
        "人際": "• Connect with others gradually, building deep and lasting trust over the long term.\n• Conduct yourself with poised etiquette, winning the genuine respect of your peers.\n• Cultivate friendships with wise mentors, growing upward together through mutual support.",
        "其他/不確定": "【Gradual Progress】 Trees grow slowly upon the mountain; follow proper order and accumulate steady progress for great good fortune.",
        "未選": "【Gradual Progress】 Trees grow slowly upon the mountain; follow proper order and accumulate steady progress for great good fortune."
      }
    },
    {
      key: "guimei",
      num: 54,
      name: "Proper Boundaries",
      colloquial: "Guìmèi · The Marrying Maiden",
      keyword: "Impulsive Desire & Respecting Limits",
      upper: "☳",
      lower: "☱",
      upperName: "雷",
      lowerName: "澤",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-54-guimei.png",
      symbolLabel: "Proper Boundaries",
      core: "Thunder rumbles over the lake, symbolizing a young maiden driven by impulsive desire to rush into marriage without proper order. When passion overrides reason, protocol, and foundational preparation, advancing blindly leads only to frustration and failure. Maintain clear self-discipline amidst strong emotional desires, recognizing your true place and respecting proper boundaries to stay safe.",
      plain: "I keep a cool, rational mind amidst strong desires, protecting my path by respecting proper boundaries.",
      plainText: "I keep a cool, rational mind amidst strong desires, protecting my path by respecting proper boundaries.",
      focus: {
        "感情": "• Beware of rushing into unaligned or undefined relationships driven by fleeting passion.\n• Recognize practical realities and proper roles, avoiding overstepping emotional boundaries.\n• Singles should examine suitors with calm logic, avoiding sweet traps of emotional impulse.",
        "事業": "• Avoid skipping compliance protocols or legal checks to chase fast project launches.\n• Recognize your exact authority and role within the team, avoiding overstepping bounds.\n• Scrutinize tempting collaborations that lack structural guarantees to prevent traps.",
        "健康": "• Care for vitality loss, nervous strain, or exhaustion caused by emotional or physical excess.\n• Avoid strenuous workouts during emotional volatility; keep consistent sleep rhythms.\n• Keep meals light and mild, protecting digestive and kidney health from overstimulation.",
        "財運": "• Beware of high-risk speculative schemes driven by the promise of overnight riches.\n• Enforce strict financial discipline, refusing to tap emergency funds for impulsive buys.\n• Keep clear paper trails on all money transactions, preventing emotional disputes.",
        "人際": "• Keep balanced social boundaries, avoiding overly familiar or boundary-crossing talk.\n• Steer clear of murky networks driven by temptation and complex emotional drama.\n• Uphold grounded self-respect, winning genuine dignity through self-restraint.",
        "其他/不確定": "【Proper Boundaries】 Thunder rumbles over the lake; passion without order brings trouble, so respect proper limits to stay safe.",
        "未選": "【Proper Boundaries】 Thunder rumbles over the lake; passion without order brings trouble, so respect proper limits to stay safe."
      }
    },
    {
      key: "feng",
      num: 55,
      name: "Abundant Radiance",
      colloquial: "Fēng · Abundance",
      keyword: "Peak Prosperity & Vigilant Foresight",
      upper: "☳",
      lower: "☲",
      upperName: "雷",
      lowerName: "火",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-55-feng.png",
      symbolLabel: "Abundant Radiance",
      core: "Thunder and lightning strike together in brilliant harmony, symbolizing the absolute peak of prosperity, abundance, and luminous success. You stand at the zenith of resources and influence, shining like the midday sun across the land. Yet the sun at noon begins to decline; peak abundance carries the seeds of future shifts. Celebrate the height of success while preparing defensively for tomorrow, sharing your warmth generously to secure a lasting legacy.",
      plain: "I embrace peak abundance with gratitude, staying vigilant and sharing my light to secure lasting success.",
      plainText: "I embrace peak abundance with gratitude, staying vigilant and sharing my light to secure lasting success.",
      focus: {
        "感情": "• Romance is rich, passionate, and deeply joyful; share life's harvest together.\n• Cherish your peak happiness with gentle care, protecting shared harmony for the long run.\n• Singles radiate powerful, magnetic charisma, easily drawing exceptional matches.",
        "事業": "• Business scope and industry influence reach historic highs; results are stellar.\n• Capitalize on golden market conditions to lead major milestones and secure success.\n• Draft defensive, long-term strategic plans early, preparing for future market cycles.",
        "健康": "• Spirits are high and energy is abundant; guard against overexcitement and internal heat.\n• Care for cardiovascular health, blood pressure balance, and eye strain from busyness.\n• Keep a grounded, serene mindset, balancing high performance with quiet relaxation.",
        "財運": "• Cash flow and asset valuations hit peak abundance, yielding rich returns.\n• Transfer partial gains into defensive, secure holdings to lock in profits.\n• Share prosperity through employee bonuses or social good; circulation fuels longevity.",
        "人際": "• Prestige and popularity reach their zenith; supporters gather around you warmly.\n• Share honor and resources generously, serving as an inspiring leader to all.\n• Stay grounded and modest, preventing complacency from inviting hidden envy.",
        "其他/不確定": "【Abundant Radiance】 Thunder and lightning blaze in peak prosperity; shine brightly with generous warmth while preparing for future turns.",
        "未選": "【Abundant Radiance】 Thunder and lightning blaze in peak prosperity; shine brightly with generous warmth while preparing for future turns."
      }
    },
    {
      key: "lv",
      num: 56,
      name: "The Wanderer",
      colloquial: "Lǚ · The Wanderer",
      keyword: "Traveling Light & Adaptable Solitude",
      upper: "☲",
      lower: "☶",
      upperName: "火",
      lowerName: "山",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-56-lv.png",
      symbolLabel: "The Wanderer",
      core: "Fire burns upon the mountain, moving quickly across the slopes without lingering in any single place, symbolizing the journey of the traveler in unfamiliar territory. When navigating transitions or strange environments far from your roots, practice cautious courtesy, humble restraint, and mindful observation. Blend in without arguing, adapt to local customs, and find inner peace in transient simplicity to turn peril into safe passage.",
      plain: "I walk through unfamiliar lands with humble self-discipline, finding inner stability in transient simplicity.",
      plainText: "I walk through unfamiliar lands with humble self-discipline, finding inner stability in transient simplicity.",
      focus: {
        "感情": "• Relationships facing long-distance or external shifts require extra trust and gentle patience.\n• Support each other through unfamiliar environments, deepening connection through shared adaptation.\n• Singles may encounter sparks during travel or cross-cultural exchanges; keep a grounded, open mind.",
        "事業": "• Navigating business travel, cross-functional exploration, or stepping into an entirely new workplace.\n• Respect local protocols and team cultures, keeping a low profile to prioritize smooth integration.\n• Focus on small-scale exploratory operations rather than massive expansion in unfamiliar domains.",
        "健康": "• Care for traveler's tummy, digestive sensitivity, exhaustion from transit, and respiratory health.\n• Prioritize safety precautions and sufficient rest during travel, keeping basic remedies close at hand.\n• Cultivate inner serenity through quiet meditation, anchoring your mind amidst constant physical shifts.",
        "財運": "• Travel and relocation expenses rise; plan budgets carefully to avoid unnecessary waste.\n• Adopt nimble, short-term, small-scale allocation strategies in unfamiliar investment markets.\n• Guard personal cash, valuables, and important documents closely against loss or theft.",
        "人際": "• Practice cultural humility and respect local norms when abroad, avoiding unnecessary disputes.\n• Build friendly ties with reliable local guides, creating a supportive network in strange places.\n• Maintain clear, independent social boundaries, guarding against manipulative traps from strangers."
      }
    },
    {
      key: "xun",
      num: 57,
      name: "Gentle Penetration",
      colloquial: "Xùn · The Gentle (Wind)",
      keyword: "Subtle Influence & Persistent Adaptation",
      upper: "☴",
      lower: "☴",
      upperName: "風",
      lowerName: "風",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-feng.png",
      cardImg: "img/card-57-xun.png",
      symbolLabel: "Gentle Penetration",
      core: "Gentle winds blow continuously one after another, penetrating every nook and cranny of the earth, symbolizing the power of subtle, persistent influence. When facing rigid obstacles or complex blocks, forceful confrontation only increases friction. Master the art of gentle persistence, communicate clear instructions with transparency, and seek guidance from wise elders. Through patient, continuous effort, even the hardest barriers dissolve into success.",
      plain: "I influence the world with gentle persistence, dissolving obstacles through soft and steady grace.",
      plainText: "I influence the world with gentle persistence, dissolving obstacles through soft and steady grace.",
      focus: {
        "感情": "• Touch your partner's heart with gentle, attentive care, listening deeply to their unspoken needs.\n• Avoid sharp or aggressive words during disagreements; dissolve friction with soft, patient understanding.\n• Singles radiate a warm, approachable charm, naturally drawing love through quiet, consistent presence.",
        "事業": "• Advance projects through soft persuasion, placing high priority on cross-functional communication.\n• Explain policies and operational guidelines thoroughly so the team fully internalizes them.\n• Consult seasoned advisors and industry experts with humility, expanding options with flexible grace."
      }
    },
    {
      key: "dui",
      num: 58,
      name: "Joyful Resonance",
      colloquial: "Duì · The Joyous (Lake)",
      keyword: "Joyful Connection & Shared Learning",
      upper: "☱",
      lower: "☱",
      upperName: "澤",
      lowerName: "澤",
      upperImg: "img/el-ze.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-58-dui.png",
      symbolLabel: "Joyful Resonance",
      core: "Twin lakes connect side by side, mutually replenishing and reflecting joyful resonance, symbolizing genuine happiness and collaborative learning among friends. True joy springs from inner purity and upright integrity rather than shallow flattery. Gather with like-minded companions to study, share insights, and uplift one another. Lead with a joyful, open spirit to inspire collective harmony and smooth success.",
      plain: "I connect with the world through pure, joyful sincerity, sharing mutual growth and happiness.",
      plainText: "I connect with the world through pure, joyful sincerity, sharing mutual growth and happiness.",
      focus: {
        "感情": "• Immerse yourselves in lighthearted, cheerful romance, sharing laughter and effortless rapport.\n• Communicate feelings with honest warmth and gentle smiles, dissolving any minor tension.\n• Singles radiate sunny, optimistic charm, shining brightly in social and gathering settings."
      }
    },
    {
      key: "huan",
      num: 59,
      name: "Dissolving Separation",
      colloquial: "Huàn · Dispersion (Dissolution)",
      keyword: "Dissolving Barriers & Unifying the Group",
      upper: "☴",
      lower: "☵",
      upperName: "風",
      lowerName: "水",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-59-huan.png",
      symbolLabel: "Dissolving Separation",
      core: "Gentle winds sweep across the water's surface, creating ripples that melt away ice and scatter stagnation, symbolizing the dissolution of long-standing barriers and crises. When teams scatter or systems grow turbulent, establish an inspiring higher vision and shared faith. Step across dangerous waters to pioneer new ground. Drop narrow personal silos to unite collective strength, turning peril into smooth success.",
      plain: "I dissolve division with an expansive heart, uniting people around a shared vision to clear all paths.",
      plainText: "I dissolve division with an expansive heart, uniting people around a shared vision to clear all paths.",
      focus: {
        "感情": "• Cold distances and lingering misunderstandings melt away completely, restoring warm intimacy.\n• Let go of stubborn pride and self-interest, uniting around shared family goals.\n• Singles should drop old emotional defenses, opening their hearts to fresh romantic potential."
      }
    },
    {
      key: "jie_restraint",
      num: 60,
      name: "Measured Restraint",
      colloquial: "Jié · Limitation (Restraint)",
      keyword: "Balanced Discipline & Sustainable Governance",
      upper: "☵",
      lower: "☱",
      upperName: "水",
      lowerName: "澤",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-60-jie_restraint.png",
      symbolLabel: "Measured Restraint",
      core: "Water is contained within the lake, holding a natural capacity and strict limit, symbolizing that all things require balanced moderation and disciplined structure. Without restraint, overflow brings chaos; with excessive harshness, bitterness makes endurance impossible. The true essence of rules, boundaries, and self-discipline lies in moderate balance. Embrace discipline with cheerful ease, allocating resources and desires wisely to achieve long-lasting peace and good fortune.",
      plain: "I practice balanced self-discipline with cheerful ease, securing lasting peace through measured restraint.",
      plainText: "I practice balanced self-discipline with cheerful ease, securing lasting peace through measured restraint.",
      focus: {
        "感情": "• Establish healthy communication rhythms and boundaries in love—neither suffocating nor distant.\n• Check selfish impulses and stubborn tempers, preserving long-term relationship harmony through mutual respect.\n• Singles should maintain disciplined, self-respecting standards, avoiding ungrounded romantic indulgence.",
        "事業": "• Establish clear, reasonable operating protocols, workflows, and budget frameworks with strict adherence.\n• Avoid setting overly harsh, unrealistic KPIs; unlock team potential through human-centered management.\n• Advance initiatives with a healthy balance of work and rest, securing sustainable team performance over time.",
        "健康": "• Practice disciplined nutritional moderation, cutting back on excess oil, sugar, salt, and spice to protect digestion and kidneys.\n• Maintain consistent sleep rhythms, avoiding late nights and physical over-depletion to preserve vital energy.\n• Care for fluid balance and urinary health, keeping hydration steady and balanced.",
        "財運": "• Build rigorous budget controls and spending discipline, living within your means to eliminate waste.\n• Adopt steady, disciplined investment strategies, avoiding high-risk over-leveraging.\n• Grow assets steadily through consistent self-discipline, fortifying your financial fortress.",
        "人際": "• Express yourself with mindful tact and proper social etiquette, projecting dependable poise.\n• Treat others with balanced, graceful boundaries, winning long-term, deep-seated trust.\n• Step away from unbridled, indulgent social circles, cultivating quality friendships rooted in mutual self-respect.",
        "其他/不確定": "【Measured Restraint】 Water is contained within the lake; practice cheerful discipline and balanced moderation to secure lasting peace.",
        "未選": "【Measured Restraint】 Water is contained within the lake; practice cheerful discipline and balanced moderation to secure lasting peace."
      }
    },
    {
      key: "zhongfu",
      num: 61,
      name: "Inner Truth",
      colloquial: "Zhōngfú · Inner Truth (Center Sincerity)",
      keyword: "Pristine Sincerity & Heartfelt Resonance",
      upper: "☴",
      lower: "☱",
      upperName: "風",
      lowerName: "澤",
      upperImg: "img/el-feng.png",
      lowerImg: "img/el-ze.png",
      cardImg: "img/card-61-zhongfu.png",
      symbolLabel: "Inner Truth",
      core: "Gentle winds glide across the lake, stirring delicate ripples upon the water, symbolizing a heart of absolute transparency, inner truth, and profound mutual resonance. When your inner intent is completely free of pretense, suspicion, and calculation, even the most stubborn hearts, like small pigs and fish, are naturally touched and transformed. Cross great waters with pure sincerity, unlocking supreme success.",
      plain: "I engage the world with pristine, transparent truth, moving all things through heartfelt sincerity.",
      plainText: "I engage the world with pristine, transparent truth, moving all things through heartfelt sincerity.",
      focus: {
        "感情": "• Treat each other with complete, transparent honesty, sharing deep soul resonance and unspoken trust.\n• Drop all defenses and testing games, sealing an enduring vow of true love through vulnerability.\n• Singles radiate pure, clear charm, naturally drawing equally sincere and devoted matches.",
        "事業": "• Place absolute trust, integrity, and contract ethics at the cornerstone of your operations.\n• Foster open, honest communication within teams, uniting execution through unshakeable cohesion.\n• Well-suited for major contract negotiations, dispute resolution, public relations, and trust rebuilding.",
        "健康": "• Keep an open, unburdened conscience; mental clarity supports deep somatic relaxation.\n• Care for respiratory systems, chest capacity, throat health, and micro-circulation.\n• Nourish deep vital essence through conscious breathing, meditation, and quiet communion with nature.",
        "財運": "• Earn enduring, stable wealth through exceptional commercial credibility and transparent honesty.\n• Invest in high-transparency, legally compliant ventures that create genuine social value.\n• Handle finances with open clarity, compounding assets steadily through long-term win-win partnerships.",
        "人際": "• Treat others with heartfelt honesty and kept promises, winning universal and deep trust.\n• Dissolve outside hostility and prejudice with authentic empathy, turning rivals into friends.\n• Build an unshakeable inner circle of kindred souls, sharing complete heart-to-heart loyalty.",
        "其他/不確定": "【Inner Truth】 Wind glides over the lake in pristine sincerity; touch all hearts with honest truth to achieve supreme success.",
        "未選": "【Inner Truth】 Wind glides over the lake in pristine sincerity; touch all hearts with honest truth to achieve supreme success."
      }
    },
    {
      key: "xiaoguo",
      num: 62,
      name: "Preponderance of the Small",
      colloquial: "Xiǎoguò · Preponderance of the Small",
      keyword: "Attentive Detail & Mindful Caution",
      upper: "☳",
      lower: "☶",
      upperName: "雷",
      lowerName: "山",
      upperImg: "img/el-lei.png",
      lowerImg: "img/el-shan.png",
      cardImg: "img/card-62-xiaoguo.png",
      symbolLabel: "Preponderance of the Small",
      core: "Thunder echoes above the silent mountain, symbolizing a delicate season where small matters take precedence over grand ambitions. This is not a time for sweeping conquests, but for meticulous caution, extreme frugality in details, deep humility in conduct, and solemn grief in execution. Like a low-flying bird seeking a sheltered nest, stay close to the ground and mind every small detail to secure complete safety.",
      plain: "I practice extreme caution and mindful humility in every small detail, securing safety through low-profile care.",
      plainText: "I practice extreme caution and mindful humility in every small detail, securing safety through low-profile care.",
      focus: {
        "感情": "• Tend to your partner with exquisite, meticulous care in everyday details rather than grand gestures.",
        "事業": "• Focus on small-scale pilots and fine-tuning details; avoid overreaching ambitions.",
        "健康": "• Care for joints, ankles, knees, and physical strain caused by emotional hyper-sensitivity.",
        "財運": "• Practice extreme financial conservatism, managing every micro-expense with tight care.",
        "人際": "• Move with deep humility and quiet discretion, avoiding the spotlight to stay safe."
      }
    },
    {
      key: "jiji",
      num: 63,
      name: "After Completion",
      colloquial: "Jìjì · After Completion",
      keyword: "Culmination & Vigilant Preservation",
      upper: "☵",
      lower: "☲",
      upperName: "水",
      lowerName: "火",
      upperImg: "img/el-shui.png",
      lowerImg: "img/el-huo.png",
      cardImg: "img/card-63-jiji.png",
      symbolLabel: "After Completion",
      core: "Water rests upon fire in perfect culinary balance; all six lines occupy their proper places, symbolizing that the work is fully accomplished and ideal equilibrium has been achieved. Yet beginnings are easy while endings are hard, and success often harbors the hidden seeds of future decline. At the pinnacle of fulfillment, maintain profound vigilance and self-reflection, anticipating risks before they form to preserve your achievements indefinitely.",
      plain: "I cherish completed success with profound vigilance, guarding ongoing harmony through early preparedness.",
      plainText: "I cherish completed success with profound vigilance, guarding ongoing harmony through early preparedness.",
      focus: {
        "感情": "• Romance reaches a mature, ideal state of mutual harmony, sharing a peaceful life together.\n• Tend to daily routines with mindful care, guarding against complacency that breeds minor cracks.\n• Singles find self-sufficiency and inner completion, welcoming a natural soulmate match.",
        "事業": "• Projects reach a flawless close, successfully hitting every established target.\n• Implement rigorous maintenance and governance systems, guarding against post-success laxity.\n• Anticipate future market shifts proactively from a position of strength, securing enduring legacy.",
        "健康": "• Body and mind sit in perfect culinary and systemic balance; vital energy flows smoothly.\n• Maintain healthy lifestyle habits consistently, refusing to slack off just because health is good.\n• Schedule preventive checkups regularly, protecting wellness before minor shifts occur.",
        "財運": "• Investment returns hit target goals; asset allocations are balanced and robust.\n• Take profits to secure holdings, refusing to gamble further on speculative hype.\n• Build tight financial audit protocols, sealing every micro-leak to protect accumulated wealth.",
        "人際": "• Teams celebrate shared victory in complete harmony, enjoying profound mutual trust.\n• Keep a humble, low profile during success, giving credit generously and avoiding arrogance.\n• Hand over completed alliances with grace, establishing an unshakeable reputation for reliability.",
        "其他/不確定": "【After Completion】 Water rests upon fire in full success; stay vigilant against future risks to secure long-term harmony.",
        "未選": "【After Completion】 Water rests upon fire in full success; stay vigilant against future risks to secure long-term harmony."
      }
    },
    {
      key: "weiji",
      num: 64,
      name: "Before Completion",
      colloquial: "Wèijì · Before Completion",
      keyword: "Unfinished Horizons & Eternal Renewal",
      upper: "☲",
      lower: "☵",
      upperName: "火",
      lowerName: "水",
      upperImg: "img/el-huo.png",
      lowerImg: "img/el-shui.png",
      cardImg: "img/card-64-weiji.png",
      symbolLabel: "Before Completion",
      core: "Fire burns above water without interacting, symbolizing that a major cycle has ended, which instantly marks the birth of a brand-new infinite horizon. Like a young fox crossing the river, getting its tail wet just before reaching the opposite shore—completion is never final. Never despair over unfinished business, for the uncompleted state is the eternal source of creativity and hope. Maintain clear, cautious discernment and step courageously into your next great journey.",
      plain: "I embrace infinite new horizons with courage, stepping into fresh creative cycles of endless renewal.",
      plainText: "I embrace infinite new horizons with courage, stepping into fresh creative cycles of endless renewal.",
      focus: {
        "感情": "• Romance enters a fresh exploratory phase, discovering new dimensions in your partner.\n• Keep curiosity and patience alive in love, stepping together into lifelong adventure.\n• Singles release past relationship definitions, welcoming fresh romantic potential with open hearts.",
        "事業": "• Old initiatives wind down while grander, pioneering ventures loom ahead.\n• Maintain sharp, cautious judgment and prepare thoroughly for second-act transformations.\n• Respect natural stages and distinct roles, guiding your organization into an inspiring new era.",
        "健康": "• The body enters a fresh metabolic tuning cycle, upgrading physical vitality continuously.\n• Experiment with uplifting wellness routines and movement modalities to refresh energy.\n• Keep a youthful, curious mindset, enjoying life's unending vitality and self-renewal.",
        "財運": "• Capitalize on paradigm-shifting economic tailwinds, planning strategic new asset allocations.\n• Keep capital flexible and liquid, standing ready to capture emerging market opportunities.\n• Stand at a fresh financial starting point, launching a prosperous new cycle of wealth creation.",
        "人際": "• Social circles undergo natural renewal, connecting with vibrant, cross-disciplinary peers.\n• Keep a humble, curious beginner's mind, learning fresh perspectives from younger talent.\n• Serve as a pioneer guiding others toward the future, keeping your network energized."
      }
    }
  ];

  var LINES_EN = {
    qian: {
      1: {
        name: "Emerging",
        text: "Energy rests like a dragon hidden in the deep—full of boundless potential, yet not yet time to act outwardly. Cultivate inner strength and refine your craft without rushing to prove yourself to the world. Quiet, disciplined preparation builds the runway for your future leap.",
        guide: "Bide your time patiently; focus on self-mastery and inner enrichment without forcing early momentum.",
        focus: {
          "感情": "• Romance is in a quiet incubation phase; focus on self-love first.\n• Stay authentic and grounded without rushing relationship milestones.",
          "事業": "• Dedicate yourself to skill-building; postpone seeking dominant control.\n• Observe trends quietly and invest energy into research and learning.",
          "健康": "• Prioritize restorative sleep to protect vital energy from depletion.\n• Well-suited for gentle internal conditioning and deep relaxation.",
          "財運": "• Maintain a defensive stance and preserve an ample emergency reserve.\n• Focus on long-term skill investment rather than speculative trades.",
          "人際": "• Keep a humble, low profile; listen attentively and avoid disputes.\n• Build an undeniable reputation through quiet, steady integrity."
        }
      },
      2: {
        name: "Rooting",
        text: "The nascent light begins to shine across the open plains as your talents and efforts gain visibility. You may encounter a mentor or supportive partner who offers valuable guidance. Step forward with an open, humble posture; the world is beginning to respond to your calling.",
        guide: "Step into visibility with humility, connect with mentors, and establish a solid first milestone.",
        focus: {
          "感情": "• Your natural magnetism is awakening; genuine sharing deepens connection.\n• Show your true, confident self to offer a sense of mutual safety.",
          "事業": "• A stage emerges to display your competence, catching the eye of leaders.\n• Seize key project opportunities and step up with confidence.",
          "健康": "• Vitality is strong; establish a disciplined fitness and wellness routine.\n• Focus on physical alignment, balance, and regulated breathing.",
          "財運": "• Income stabilizes, opening doors to new freelance or revenue streams.\n• An opportune moment to research and initiate steady long-term investments.",
          "人際": "• Engage in professional gatherings to connect with experienced leaders.\n• Build lasting, heartfelt alliances through humble, inquisitive dialogue."
        }
      },
      3: {
        name: "Testing",
        text: "You are navigating an intense, demanding phase of growth. Dedicate your days fully to the work, while keeping a watchful, reflective mind through the night. Though external demands run high, holding fast to integrity and purpose will turn every trial into an enduring cornerstone.",
        guide: "Meet challenges with full focus and honest self-reflection to transform friction into triumph.",
        focus: {
          "感情": "• Demanding schedules may squeeze relationship time; communicate openly.\n• Avoid bringing professional stress home into personal interactions.",
          "事業": "• Workload is heavy with high stakes; stay alert, sharp, and proactive.\n• Double-check critical details to prevent oversight under pressure.",
          "健康": "• Guard against nervous exhaustion and poor sleep from constant busyness.\n• Schedule brief, non-negotiable pauses to recharge your mental battery.",
          "財運": "• Financial turnover is active; monitor every incoming and outgoing flow.\n• Refrain from making impulsive financial decisions during stressful moments.",
          "人際": "• Face competition and scrutiny by anchoring yourself in transparent execution.\n• Speak with measured discretion to command enduring professional respect."
        }
      },
      4: {
        name: "Choosing",
        text: "You stand on the threshold of a breakthrough: free to soar across the skies or linger in the deep pool to observe. The choice to advance or hold back rests entirely on your true intent. Whichever path aligns with your authentic self will leave no regret. Trust your intuition and decide boldly.",
        guide: "Listen to your inner compass, adapt flexibly to the terrain, and choose in alignment with your heart.",
        focus: {
          "感情": "• A pivotal turning point arrives; address whether to commit deeper.\n• Give each other space to envision and align on a shared future.",
          "事業": "• You face a major decision regarding a career pivot, venture, or promotion.\n• Gauge your preparation—when confidence is aligned, take the leap.",
          "健康": "• Physical and mental demands are shifting; adapt your daily routine.\n• Try new exercise modalities to keep your body resilient and agile.",
          "財運": "• An ideal window to rebalance portfolios; weigh risk against reward.\n• Allocate capital flexibly to capture shifts in emerging market trends.",
          "人際": "• Your social circle naturally reorganizes; choose environments that foster growth.\n• Stay open-minded and ready to step into higher-level collaborations."
        }
      },
      5: {
        name: "Manifesting",
        text: "The dragon soars across the heavens; your vision, leadership, and positive influence have reached their pinnacle. This is a golden hour of recognition and abundant harvest. With the spotlight upon you, channel this power toward the greater good, leading with generosity and broad vision.",
        guide: "Lead from your highest ground with benevolence, achieving greatness through service to others.",
        focus: {
          "感情": "• Love reaches mature harmony; cherish shared joy as equal partners.\n• Co-create enriching, memorable life experiences together.",
          "事業": "• Reaching a professional summit with exceptional authority and influence.\n• Guide your team to major milestones as an admired and trusted leader.",
          "健康": "• Vitality is at its peak; mental clarity and energetic presence radiate.\n• Maintain holistic balance and sustain your nourishing wellness habits.",
          "財運": "• Abundance manifests abundantly; long-term seeds yield rich rewards.\n• Expand asset foundations while dedicating resources to give back.",
          "人際": "• Stand at the center of your community, drawing visionary peers.\n• Serve as a guiding light and benefactor, cultivating enduring goodwill."
        }
      },
      6: {
        name: "Completing",
        text: "Development has reached its absolute peak. Pushing for further expansion or clinging to control risks isolation and regret. True completion lies in knowing when to step back, share credit, and embrace contentment. Release the desire to hold everything alone and return to a humble, peaceful center.",
        guide: "Honor natural cycles; step back gracefully and delegate power to preserve your achievements.",
        focus: {
          "感情": "• Release the urge to dominate; offer empathy and gentleness to your partner.\n• Avoid stubborn standoffs during disagreements; yielding creates harmony.",
          "事業": "• After reaching the peak, transition toward mentorship and advisory roles.\n• Avoid overextending ambitions; secure and protect established gains.",
          "健康": "• Guard against hyper-arousal, hypertension, or cardiovascular strain.\n• Reduce high-intensity stimuli; restore balance through restorative stillness.",
          "財運": "• Take profits and secure your holdings; avoid chasing the market's peak.\n• Guard against careless overconfidence to prevent sudden, avoidable losses.",
          "人際": "• Adopt a modest, unassuming posture; avoid boasting to disarm envy.\n• Share recognition and rewards generously to sustain lifelong bonds."
        }
      }
    },
    kun: {
      1: {
        name: "Emerging",
        text: "When you feel the first crisp frost beneath your feet, you know deep winter's ice is not far behind. Subtle cues in your environment are offering valuable guidance. Stay attuned and perceptive. By anticipating shifts and preparing early, you will navigate future transitions with calm grace.",
        guide: "Notice early signs and subtle shifts, taking timely measures to prepare well in advance.",
        focus: {
          "感情": "• Attune to subtle emotional shifts in your partner and offer timely care.\n• Tend to minor relationship nuances before small frictions compound.",
          "事業": "• Discern emerging industry trends and prepare for latent challenges.\n• Formulate contingency plans early to neutralize future risks.",
          "健康": "• Notice early signals of seasonal fatigue or cold in the body.\n• Nourish yourself with warming foods and bundle up to sustain immunity.",
          "財運": "• Build an emergency cushion in anticipation of broader economic cycles.\n• Audit expenses with diligence to eliminate small financial leaks early.",
          "人際": "• Sense delicate social dynamics and avoid crossing sensitive boundaries.\n• Maintain thoughtful, considerate speech to foster enduring trust."
        }
      },
      2: {
        name: "Rooting",
        text: "The earth supports all things through its upright, grounded, and expansive nature, fulfilling its purpose without contrivance. Right now, you do not need complex schemes; simply anchor yourself in pure honesty and integrity, and the right resources will naturally arrive. Simplicity is your greatest strength.",
        guide: "Ground yourself in straightforward integrity, aligning with nature without forced effort.",
        focus: {
          "感情": "• Treat your partner with unpretentious honesty; trust will deepen naturally.\n• Savor grounded everyday warmth without needing grand displays.",
          "事業": "• Deliver steady, reliable craftsmanship; results will follow effortlessly.\n• Maintain clear professional ethics to earn deep, unshakeable trust.",
          "健康": "• Adopt a simple, wholesome daily rhythm aligned with natural cycles.\n• Engage in grounding activities like walking barefoot or gentle gardening.",
          "財運": "• Grow steady wealth through dedicated everyday work and honest value.\n• Avoid gimmicky, speculative vehicles; focus on tangible, solid assets.",
          "人際": "• Treat others with generous warmth to cultivate genuine, lasting bonds.\n• Embody a spacious spirit without needing to exhaust yourself networking."
        }
      },
      3: {
        name: "Testing",
        text: "You possess remarkable talent and capability, yet this moment calls for quiet modesty. Be willing to support the larger mission from behind the scenes without demanding the spotlight. Working selflessly for the collective good leaves a profound impression, and your contribution will bear lasting fruit in time.",
        guide: "Keep your brilliance understated and support the whole; quiet service yields lasting merit.",
        focus: {
          "感情": "• Offer quiet, steadfast support to your partner as their reliable anchor.\n• Avoid competing for dominance in the relationship; soften with empathy.",
          "事業": "• Focus on behind-the-scenes coordination and execution to lift the team.\n• Respect leadership and collaborators without rushing to claim personal credit.",
          "健康": "• Avoid overstimulation and emotional agitation; prioritize mental stillness.\n• Cultivate inner calm through deep breathing and restorative meditation.",
          "財運": "• Manage wealth steadily without chasing short-term windfalls.\n• Accumulate assets quietly, avoiding ostentation that draws unwanted scrutiny.",
          "人際": "• Stay humble and unpretentious, taking joy in lifting others up.\n• Serve as a dependable, unifying presence within your community."
        }
      },
      4: {
        name: "Choosing",
        text: "Like tying a silk pouch securely shut, keep your words, insights, and energy carefully sheltered. Current conditions are complex and unpredictable, making silence and discretion your highest wisdom. By avoiding provocation and holding your core boundaries, you ensure complete safety.",
        guide: "Guard your speech and conserve your energy; discretion and quiet restraint ensure safety.",
        focus: {
          "感情": "• Pause and center yourself during friction, refraining from sharp words.\n• Protect your shared intimacy without airing private grievances to outsiders.",
          "事業": "• In complex work dynamics, deliver results quietly and steer clear of gossip.\n• Uphold strict confidentiality regarding sensitive data and trade secrets.",
          "健康": "• Conserve your energy; prioritize deep restorative rest over socializing.\n• Minimize noisy social engagements to give yourself ample quiet solitude.",
          "財運": "• Tighten budgets and adopt strict capital preservation measures.\n• Pause high-risk investment ventures and keep cash reserves secure.",
          "人際": "• Maintain polite, respectful distance, staying clear of others' disputes.\n• Choose confidants with care, avoiding drama through mindful silence."
        }
      },
      5: {
        name: "Manifesting",
        text: "Yellow symbolizes balance and warmth, while the lower garment represents humility and harmony. When you hold noble virtues quietly within and interact with gentle, balanced grace, profound auspiciousness reveals itself. Without needing to proclaim your worth, your quiet light illuminates everything around you.",
        guide: "Anchor in balanced humility and gentle wisdom, welcoming natural, unforced fulfillment.",
        focus: {
          "感情": "• Nurture your relationship with spacious, gentle warmth for lasting love.\n• Honor each other with mutual reverence, savoring everyday harmony.",
          "事業": "• Earn heartfelt respect across your organization through balanced integrity.\n• Well-suited for mediation, resource allocation, and team alignment.",
          "健康": "• Digestion and vital circulation find balanced, harmonious flow.\n• Maintain serene inner contentment, radiating vibrant health from within.",
          "財運": "• Wealth flows in steadily through dependable primary income and stable assets.\n• Apply a balanced, middle-path approach to secure lasting financial peace.",
          "人際": "• Your warm, considerate manner makes you widely trusted and welcomed.\n• Serve as a compassionate listener and a calming presence for friends."
        }
      },
      6: {
        name: "Completing",
        text: "Receptive energy has expanded to its limit. Forcing a direct clash for dominance will only result in mutual exhaustion and conflict. Reflect on whether you have become overly controlling in your work or relationships. Return to gentle yielding and end the struggle, restoring peace.",
        guide: "Guard against excessive confrontation and control; return to gentle yielding to heal division.",
        focus: {
          "感情": "• End power struggles over who is in charge; release the need to be right.\n• Embrace differences with grace instead of escalating polarized arguments.",
          "事業": "• Avoid head-on clashes with leadership or partners; pursue peaceful dialogue.\n• Recognize personal boundaries and avoid overstepping your scope.",
          "健康": "• Watch for blocked circulation, headaches, or insomnia caused by bottled-up tension.\n• Release bodily resistance and internal strain through deep breathing and yoga.",
          "財運": "• Avoid aggressive financial gambles or hostile competition with your capital.\n• Cut losses promptly and allocate resources wisely to prevent liquidity strain.",
          "人際": "• Step away from competitive, adversarial circles and extend olive branches.\n• Let go of winning every debate, prioritizing harmonious coexistence above all."
        }
      }
    },
    zhun: {
      1: {
        name: "Emerging",
        text: "The seedling is ready to push through the soil, yet faces heavy obstacles and hesitation. Do not push blindly forward; establish your resolve and secure your foothold first. Seek out wise mentors and build a supportive crew. Grounding yourself upon solid rock prepares you for true growth.",
        guide: "Solidify your footing and seek guidance from trustworthy mentors; avoid reckless moves.",
        focus: {
          "感情": "• Early romance may feel hesitant; focus on building personal inner security.\n• Connect naturally through mutual friends or community events to build rapport.",
          "事業": "• Beginnings are challenging; establish core systems before scaling.\n• Gather aligned companions to share the initial weight of pioneering work.",
          "健康": "• Care for lower body joints and feet; keep your extremities warm.\n• Engage in foundational core conditioning to stabilize physical balance.",
          "財運": "• Prioritize protecting your baseline capital over chasing impulsive returns.\n• Consult qualified financial advisors to map out a clear long-term strategy.",
          "人際": "• Reach out to respected elders and mentors with a humble, teachable heart.\n• Forge resilient camaraderie with the peers building alongside you."
        }
      },
      2: {
        name: "Rooting",
        text: "The path forward seems blocked by delays, presenting moments of hesitation. This is not rejection, but divine timing at work. Hold fast to your original purity and commitment, waiting patiently for the fog to clear. When genuine intent accumulates depth, obstacles dissolve on their own.",
        guide: "Hold fast to your core purpose and wait for conditions to ripen without wavering.",
        focus: {
          "感情": "• Navigating realistic hurdles or family hesitation; remain devoted and patient.\n• Give the connection space to breathe; authentic love withstands waiting.",
          "事業": "• Progress pauses temporarily; refrain from forcing aggressive rollouts.\n• Refine the core quality of your product or service while the market readies.",
          "健康": "• Maintain a consistent daily rhythm to restore vitality from chronic fatigue.\n• Choose light, nourishing foods to give your body ample time to regenerate.",
          "財運": "• Capital payback horizons lengthen; prepare with long-term endurance.\n• Stick to disciplined savings and dollar-cost averaging, avoiding speculation.",
          "人際": "• Meet coldness or misunderstandings with quiet grace, avoiding debates.\n• Time will vindicate your integrity; protect your trusted inner circle."
        }
      },
      3: {
        name: "Testing",
        text: "Like pursuing game into a dense forest without a guide, rushing blindly ahead will only leave you lost and endangered. The wise know when to halt upon losing direction. Acknowledge your current limits, release unrealistic pursuits, and retreat to safe, familiar ground.",
        guide: "Halt in time and release blind pursuits to prevent wandering into deeper difficulty.",
        focus: {
          "感情": "• Pursuing an unaligned partner brings heartache; know when to let go gracefully.\n• Keep a clear, rational mind in romance without sacrificing your self-respect.",
          "事業": "• Lacking resources or experienced guides, avoid diving into unfamiliar territory.\n• Decisively pause stalling initiatives to re-evaluate strategic direction.",
          "健康": "• Avoid high-risk outdoor activities during harsh weather or exhaustion.\n• Take precautions against joint sprains, navigation anxiety, and fatigue.",
          "財運": "• Avoid chasing unverified insider tips or hyped market trends.\n• Implement disciplined stop-losses on vulnerable positions to protect capital.",
          "人際": "• Steer clear of bad influences who lead you toward risky situations.\n• Remain independent when opinions clash; avoid jumping on chaotic bandwagons."
        }
      },
      4: {
        name: "Choosing",
        text: "After careful deliberation and hesitation, an opportune opening to seek alliance arrives. Lay down pride and self-defense, extending your hands in partnership. Moving forward to unite will bring clarity and breakthrough, dissolving the lingering mist before you.",
        guide: "Seek collaboration and external support proactively, stepping forward with courage.",
        focus: {
          "感情": "• Open your heart to share your feelings, inviting your partner to plan the future.\n• Arrange meaningful quality time to dissolve past distances.",
          "事業": "• Pursue strategic backing, investor interest, or cross-functional support.\n• Embrace aligned partnerships to accelerate stalled initiatives.",
          "健康": "• For lingering physical imbalances, seek specialist care or a second opinion.\n• Partner with a fitness coach or nutritionist to co-create wellness goals.",
          "財運": "• Discover financial breakthroughs through skilled advisors or partners.\n• Well-suited for joint ventures or resource-pooling investment projects.",
          "人際": "• Expand your network by connecting with peers whose skills complement yours.\n• Win allies through sincere intent, forming lasting, mutually beneficial bonds."
        }
      },
      5: {
        name: "Manifesting",
        text: "Your generosity and true intent are not yet fully understood by everyone; offering too much too soon may spark hesitation. Channel your goodwill into small, incremental adjustments—this brings good fortune. Rushing major overhauls or forcing generosity risks creating resistance.",
        guide: "Advance steadily through small, mindful steps; avoid pushing massive rollouts hastily.",
        focus: {
          "感情": "• Nurture connection through subtle everyday kindness without applying pressure.\n• Respect your partner's emotional pace, offering comfortable, natural breathing room.",
          "事業": "• Test new workflows or products in small pilots to validate viability.\n• Avoid sweeping, sudden expansions; build your success layer by layer.",
          "健康": "• Improve vitality by fine-tuning small daily habits like hydration and sleep.\n• Steer clear of extreme dietary fads or overly rigorous wellness cleanses.",
          "財運": "• Suitable for modest, steady investments; lock in small gains comfortably.\n• Exercise strict oversight on major capital outlays, vetting realistic returns.",
          "人際": "• Practice authentic mutual support in small circles to build word-of-mouth trust.\n• Let your quiet actions speak rather than preaching your ideals loudly."
        }
      },
      6: {
        name: "Completing",
        text: "Gridlock reaches its extreme, and inner anxiety and tears can no longer be held back. Yet, reaching the peak of difficulty also signals the complete end of an outworn cycle. Do not cling to what cannot be restored. Allow yourself to release and let go, greeting the dawn of renewal.",
        guide: "Release grief and attachment completely, welcoming rebirth at the turning point.",
        focus: {
          "感情": "• Face irreconcilable pain honestly; letting go can be an act of true compassion.\n• Release bottled-up tears and embark on an intentional journey of healing.",
          "事業": "• Acknowledge dead ends and bring unviable initiatives to a clean closure.\n• Accept temporary setbacks, turning hard-won lessons into fuel for your next chapter.",
          "健康": "• Guard against depleted vitality and weakened immunity from chronic grief.\n• Seek counseling or holistic healing to lift heavy emotional burdens.",
          "財運": "• Accept investment losses, cut ties decisively, and prevent debt from growing.\n• Take stock of remaining assets, starting fresh with a lean, minimalist plan.",
          "人際": "• Walk away from draining, toxic relationships that bring endless exhaustion.\n• Seek out warm, understanding companions who offer safe, unconditional presence."
        }
      }
    },
    meng: {
      1: {
        name: "Emerging",
        text: "A beginner thrives on clear discipline and healthy boundaries to awaken inner wisdom. Like pruning wild branches from a young sprout, appropriate structure serves as a protective canopy. Release scattered, indulgent habits and establish grounded routines; true freedom is found within mindful form.",
        guide: "Establish clear discipline and conduct standards, grounding your learning attitude.",
        focus: {
          "感情": "• Early relationships require healthy boundaries and mutual guidelines.\n• Avoid letting careless whims damage newly budding trust.",
          "事業": "• Follow standard operating procedures and accept guidance with humility.\n• Focus on mastering core fundamentals rather than looking for shortcuts.",
          "健康": "• Commit to regular sleep and nutrition schedules, correcting poor habits.\n• Begin with foundational posture alignment and basic movement conditioning.",
          "財運": "• Cultivate consistent expense tracking to eliminate mindless micro-spending.\n• Follow baseline financial discipline, building savings step by step.",
          "人際": "• Practice basic social grace and respectful etiquette to make a positive impression.\n• Honor mentors and teachers, setting the tone for healthy professional growth."
        }
      },
      2: {
        name: "Rooting",
        text: "Approach inexperience and innocence with a spacious, compassionate heart. When you meet others' growing edges with patience and skillfully harmonize diverse dynamics, you embody mature leadership. Inspiring those around you with warm wisdom brings harmony and flourishing to your whole sphere.",
        guide: "Embrace the developing with patience and compassion, turning confusion into wisdom.",
        focus: {
          "感情": "• Hold your partner's imperfections with patience, guiding with love.\n• Serve as a stabilizing, nurturing center for your shared home life.",
          "事業": "• Well-suited for mentoring newcomers or managing diverse, cross-functional teams.\n• Foster a warm, supportive work culture using coaching over harsh criticism.",
          "健康": "• Support digestive ease and inner relaxation, releasing irritable tension.\n• Nourish your household with wholesome, lovingly prepared meals.",
          "財運": "• Oversee family and operational budgets with orderly, structured care.\n• Invest capital into home wellness, comfort, and educational enrichment.",
          "人際": "• Become a trusted, supportive mentor figure who uplifts younger peers.\n• Forgive unintentional mistakes with gracious understanding."
        }
      },
      3: {
        name: "Testing",
        text: "When confronted with dazzling facades or material allure, take care not to lose your discernment. If you sacrifice your dignity and self-worth to chase someone else's wealth or status, you will end up compromised and lost. Maintain independent judgment; never surrender your intrinsic value to win approval.",
        guide: "Do not fall for superficial glamour or greed; guard your personal dignity and integrity.",
        focus: {
          "感情": "• Avoid compromising your self-worth just to win a partner of superficial status.\n• Maintain emotional independence, refusing to lose yourself for validation.",
          "事業": "• Beware of flashy partnerships that lack operational substance.\n• Reject lucrative temptations that compromise your core ethical values.",
          "健康": "• Avoid jumping on unverified internet wellness fads that strain your body.\n• Return to evidence-based, grounded health routines with balanced discernment.",
          "財運": "• Steer clear of slick, opaque investment schemes promising overnight wealth.\n• Protect your hard-earned capital by refusing to let greed cloud your judgment.",
          "人際": "• Refuse to flatter the powerful; maintain grounded, self-respecting grace.\n• Step away from shallow circles that measure personal worth by possessions."
        }
      },
      4: {
        name: "Choosing",
        text: "Entangled in rigid assumptions and self-isolation, you find yourself lacking clarity and support. Confusion stems from obstinate pride and a refusal to be taught. Release the illusion of having all the answers, acknowledge where you feel stuck, and open your heart to seek wise guidance to dissolve the impasse.",
        guide: "Release stubborn isolation, acknowledge your blind spots, and reach out for guidance.",
        focus: {
          "感情": "• Stubborn withdrawal freezes intimacy; take the initiative to open dialogue.\n• Seek couple's counseling or wise counsel to untangle communication knots.",
          "事業": "• Projects stall from knowledge gaps; avoid working behind closed doors.\n• Consult cross-functional experts with humility to infuse fresh solutions.",
          "健康": "• Watch out for delaying medical checkups out of stubbornness.\n• Seek qualified clinical advice rather than self-diagnosing in the dark.",
          "財運": "• For investments caught in blind spots, consult qualified professionals promptly.\n• Pause trading and bridge your knowledge gaps with dedicated financial study.",
          "人際": "• Break out of social withdrawal and share your authentic state with trusted friends.\n• Listen openly to diverse viewpoints, widening your mental horizon."
        }
      },
      5: {
        name: "Manifesting",
        text: "Hold the pure, humble curiosity of a child, seeking wisdom from teachers with sincere openness. When you lay aside preconceptions and absorb insight like a sponge, the most auspicious guidance arrives. This genuine thirst for truth opens up an entirely new life landscape.",
        guide: "Learn with the open heart of a child; good fortune flows as you absorb wise insight.",
        focus: {
          "感情": "• Express affection with childlike sincerity, enjoying simple, pure connection.\n• Approach your relationship as a shared learning journey where you inspire each other.",
          "事業": "• Receive dedicated mentoring from top leaders, accelerating career breakthroughs.\n• Retain sharp learning agility and curiosity to master complex systems swiftly.",
          "健康": "• Cultivate a playful, joyful spirit that brings lightness and mental clarity.\n• Explore refreshing recreational sports or outdoor adventures that spark joy.",
          "財運": "• Build steady investment growth under the mentorship of trusted advisors.\n• Channel resources into high-quality education and skills for lasting returns.",
          "人際": "• Your genuine, humble nature endears you to mentors, opening supportive doors.\n• Forge uplifting friendships centered on shared curiosity and mutual growth."
        }
      },
      6: {
        name: "Completing",
        text: "When guiding those in ignorance, employ healthy boundaries and reasonable discipline, avoiding harsh severity or aggression. Dismantling confusion is not about waging war, but about establishing clear structures to prevent disorder. Firm leadership rooted in care guides everyone onto the right path.",
        guide: "Set clear boundaries to safeguard against ignorance; temper firmness with care.",
        focus: {
          "感情": "• Establish healthy mutual boundaries in your relationship to protect safety.\n• Address issues constructively, steering clear of personal attacks.",
          "事業": "• Balance accountability with support, setting clear protocols and guardrails.\n• Address protocol violations firmly while offering pathways for improvement.",
          "健康": "• Set non-negotiable boundaries to curb harmful lifestyle habits decisively.\n• Guard against accidental injuries and maintain conscientious everyday hygiene.",
          "財運": "• Build airtight risk controls to protect against fraud and capital erosion.\n• Take appropriate legal and protective measures to defend legitimate rights.",
          "人際": "• Say no with courage to those who violate your boundaries, keeping your peace.\n• Draw clear lines with chronically disruptive influences to protect your sphere."
        }
      }
    },
    xu: {
      1: {
        name: "Emerging",
        text: "Danger and heavy trials still linger far in the distance; you are currently standing on the open, tranquil meadows. Maintain a patient, steady lifestyle rhythm rather than worrying over things that have not yet occurred. Tend quietly to what is right in front of you, resting in the peace of the present moment.",
        guide: "Rest in the present and sustain daily calm without borrowing tomorrow's anxiety.",
        focus: {
          "感情": "• Romance is in a stable early stage; enjoy gentle, steady daily companionship.\n• Offer each other plenty of personal space, letting love grow naturally.",
          "事業": "• Work is stable; fulfill your everyday responsibilities step by step.\n• Focus on building personal fundamentals without taking reckless gambles.",
          "健康": "• Physical energy is balanced; take walks and spend time outdoors in nature.\n• Keep consistent meals and sleep hours to nourish steady vital energy.",
          "財運": "• Finances are steady; stick to your current savings and spending rhythm.\n• Avoid shifting long-term asset allocations based on temporary market noise.",
          "人際": "• Social circles are relaxed; maintain comfortable, easygoing boundaries.\n• Enjoy simple, drama-free friendships without feeling the need to over-network."
        }
      },
      2: {
        name: "Rooting",
        text: "You are stepping closer to the sandy shores, and minor criticisms and friction are beginning to swirl around you. It is like having a bit of sand in your shoe—annoying, but incapable of stopping your journey. Keep your heart spacious and calm, ignoring idle chatter, and a favorable turn will arrive.",
        guide: "Meet petty gossip with a spacious heart; maintain inner calm to dissolve minor friction.",
        focus: {
          "感情": "• Meet minor habits and daily quibbles with gentle humor and grace.\n• Avoid turning petty matters into major battles; soft words resolve tension.",
          "事業": "• You may face mild skepticism or passive remarks from a few colleagues.\n• Maintain calm professionalism, letting solid results answer outside noise.",
          "健康": "• Watch for dry throat or minor agitation caused by interpersonal friction.\n• Drink plenty of water and practice deep breathing to soothe restless thoughts.",
          "財運": "• Minor unexpected expenses may pop up, but remain well within control.\n• Review daily spending carefully, avoiding retail therapy sparked by mood swings.",
          "人際": "• Stay neutral regarding local gossip; do not listen, engage, or pass it on.\n• Show generous grace; time will speak for your true character and value."
        }
      },
      3: {
        name: "Testing",
        text: "You have walked into sticky mud where forward motion is trapped, drawing pressure and scrutiny from the outside. Now is not the time to thrash about or force your way through, which only sinks you deeper. Exercise extreme care and vigilance, steady your center, and secure firm ground to stay safe.",
        guide: "Avoid reckless thrashing in precarious spots; stay alert and hold your ground carefully.",
        focus: {
          "感情": "• If romance is stuck or facing outside pressure, stop pointing fingers.\n• Step back to cool off, preventing arguments from blowing into full-blown crises.",
          "事業": "• Projects hit a muddy plateau, dragging heavily under outside doubt.\n• Pause aggressive expansion to focus on plugging operational holes and risks.",
          "健康": "• Watch for joint stiffness, damp heaviness, or exhaustion from stress.\n• Prioritize warm comfort and restorative rest, skipping punishing workouts.",
          "財運": "• Cash flow feels temporarily trapped; avoid borrowing to make risky bets.\n• Tighten all cash outflows to protect your core baseline capital first.",
          "人際": "• Stay alert against bad actors applying pressure; move with high vigilance.\n• Cut unnecessary social events, focusing on protecting your trusted camp."
        }
      },
      4: {
        name: "Choosing",
        text: "Events have brought you into the deepest water-chasm, where you might experience real setbacks or wounds. Yet, yielding to the natural current is your only true way out. Do not fight the overwhelming tide with stubborn force; surrender to the present, stepping back with grace to emerge safely.",
        guide: "Yield to adversity instead of forcing an impossible fight; retreat gracefully to escape danger.",
        focus: {
          "感情": "• When facing a painful crisis or heartbreak, protect your inner wellbeing first.\n• Drop prideful standoffs, using gentle yielding to soften the gridlock.",
          "事業": "• Facing a major crisis, avoid letting stubborn ego fight the whole system.\n• Adapt flexibly to preserve safety, pulling back behind defensible lines.",
          "健康": "• Guard against sudden physical injuries or flare-ups; seek care and rest.\n• Engage in deep restorative healing to release long-carried emotional trauma.",
          "財運": "• Cut losses cleanly when hit with market downturns rather than holding on blindly.\n• Accept current setbacks and make baseline survival capital your top priority.",
          "人際": "• Step away from explosive conflict zones, refusing to make lasting enemies.\n• Seek refuge in safe, trusted harbors away from hostile environments."
        }
      },
      5: {
        name: "Manifesting",
        text: "The long-awaited rain has finally arrived, and a feast of food and wine is spread before you. You held to the right path through long waiting and testing, and now is the hour to enjoy your well-earned reward. Receive this abundance with an upright, grateful heart, keeping your center clear amid the celebration.",
        guide: "Sweet rain arrives after bitter waiting; keep your heart upright to enjoy great fortune.",
        focus: {
          "感情": "• Love enters a sweet, harmonious harvest phase where you share happiness.\n• Plan a romantic getaway or warm celebration to mark your bond's growth.",
          "事業": "• Long-cultivated projects deliver breakthrough milestones, winning praise.\n• Celebrate success while maintaining humble, grounded professionalism.",
          "健康": "• Vital energy and appetite are fully restored; the body feels buoyant.\n• Enjoy nourishing meals and joyful leisure, maintaining holistic balance.",
          "財運": "• Revenue arrives on schedule, bringing deep financial comfort and abundance.\n• Reward yourself and loved ones, mapping out a steady long-term financial path.",
          "人際": "• Social circles are warm and celebrating; you are widely embraced.\n• Share credit and joy with the allies who stood by you through trials."
        }
      },
      6: {
        name: "Completing",
        text: "The old cycle of waiting has drawn to a close. You drop into the cave, yet three unexpected guests suddenly knock at your door. This is not an attack, but a surprising breakthrough brought by the universe in disguise. Drop defensive bias and welcome them with respect; fulfillment will follow.",
        guide: "Open your heart to unexpected shifts and unusual allies; treat them with care for great success.",
        focus: {
          "感情": "• Unexpected shifts or new potential partners may appear on the scene.\n• Meet surprises with an open heart; unexpected turns bring sweet gifts.",
          "事業": "• Unplanned cross-disciplinary collaborations or new partners arrive.\n• Drop rigid stereotypes and welcome fresh resources to unlock new terrain.",
          "健康": "• Be open to novel or holistic healing modalities with promising results.\n• Welcome the body's shifts with an open mind, supporting its repair.",
          "財運": "• Surprising income streams or outside funding knock at your door unannounced.\n• Evaluate new investment channels with an open mind to capture unexpected gains.",
          "人際": "• Connect with novel friends or unconventional mentors who widen your horizon.\n• Welcome them warmly with good manners, expanding your social landscape."
        }
      }
    },
    song: {
      1: {
        name: "Emerging",
        text: "A disagreement has just begun to show its first sparks; do not blow it up or drag it out. Clear up misunderstandings early. Even if you face brief gossip or comments, the wind will settle quickly. Knowing when to stop early will ensure a smooth, peaceful outcome.",
        guide: "Clarify issues and stop conflict early; letting small disputes rest brings good fortune.",
        focus: {
          "感情": "• Clear up misunderstandings right away; avoid cold wars and digging up the past.\n• Do not take brief bickering to heart; laugh it off and make peace swiftly.",
          "事業": "• Align immediately when small workplace differences crop up before they grow.\n• Avoid public arguments; clarify the facts privately with a rational mind.",
          "健康": "• Watch for light restlessness or shallow sleep caused by minor anxiety.\n• Vent feelings promptly through friendly talks, keeping your mind light.",
          "財運": "• Settle small discrepancies or bill disputes right away to avoid fights.\n• Do not nickel-and-dime over pennies; protect overall financial harmony.",
          "人際": "• Show humor and grace over minor misunderstandings without scorekeeping.\n• Resolve small friction proactively to keep your social circle peaceful."
        }
      },
      2: {
        name: "Rooting",
        text: "Recognizing that your strength is no match for the opponent in a fight, pushing head-on is foolish. The wise know when to make a clean retreat. Return swiftly to your safe base, tend to your duties and family quietly, and refuse to fight over wounded pride.",
        guide: "Acknowledge when you are outmatched and pull back quietly to protect your base.",
        focus: {
          "感情": "• Step back when your partner is heated; do not fight to win the argument.\n• Give each other space to cool down, protecting the safety of the home.",
          "事業": "• Facing a dominant opponent or unfair setup, yield temporarily without clashing.\n• Focus on doing your job well, waiting for a better time to speak up.",
          "健康": "• Avoid harmful physical reactions during heated moments; calm your heart.\n• Enjoy quiet rest at home, staying far away from environments that spark anger.",
          "財運": "• When hit with financial demands, weigh the cost and settle cleanly.\n• Avoid drawn-out lawsuits; preserving your core capital is what matters.",
          "人際": "• Steer clear of aggressive instigators, refusing to fight them head-on.\n• Fall back to your core circle of loyal friends, enjoying quiet peace."
        }
      },
      3: {
        name: "Testing",
        text: "Rest upon the virtues and foundations built in the past, staying pure and upright. Though the process may feel risky, you will turn danger into safety in the end. If working under a leader, remember not to claim all the glory for yourself. Give credit to the whole, and you will stay safe.",
        guide: "Rest on past virtue without grabbing glory; loyalty and humility dissolve danger.",
        focus: {
          "感情": "• Value the bond you have built together, unmoved by outside novelties.\n• Give quietly without demanding instant praise; sincerity will touch their heart.",
          "事業": "• Fulfill your duties faithfully, dedicating honors to the team and leadership.\n• Avoid instigating factional battles; let solid experience win long-term respect.",
          "健康": "• Stick to the wholesome wellness routines that have served you well over time.\n• Value balance in body and mind, nurturing deep vital energy in quietness.",
          "財運": "• Protect established savings; avoid risking your nest egg on wild promises.\n• Keep earning steady income through the professional trust you have built.",
          "人際": "• Treat others with traditional humility, winning the trust of elders.\n• Serve as a dependable anchor on your team without competing for the spotlight."
        }
      },
      4: {
        name: "Choosing",
        text: "Realizing that endless arguing is pointless and that you cannot fight destiny or truth, turn around and follow the natural way. Drop the bitterness and competitive drive in your heart, softening your defensive stance. When you choose peaceful balance, good fortune and ease will walk with you.",
        guide: "Drop the urge to win, align with what is right, and reclaim peace and good fortune.",
        focus: {
          "感情": "• Drop the stubborn need to be right and offer an olive branch to your partner.\n• Refocus on your shared happiness and start fresh with open warmth.",
          "事業": "• Withdraw controversial proposals, seeking solutions where everyone wins.\n• Adjust your mindset to serve the bigger picture, focusing on real work.",
          "健康": "• A softer mindset relieves bodily tension, letting energy flow freely.\n• Clear out old anger through quiet meditation, breathing in calm.",
          "財運": "• Walk away from disputed high-risk assets, returning to safe ground.\n• Bring clear, calm logic back to money matters, investing for the long run.",
          "人際": "• Reach out with kindness to those you had friction with, clearing the air.\n• Rebuild a warm, generous presence to welcome your friendships back."
        }
      },
      5: {
        name: "Manifesting",
        text: "The dispute comes before an impartial, fair arbiter, leading to a bright and just outcome. Because you walked with balance and a clean conscience, truth and justice stand firmly at your side. Trust in fairness; all misunderstandings and grievances will be fully cleared away.",
        guide: "Stand tall in your integrity; you will find complete justice and vindication.",
        focus: {
          "感情": "• Relationship differences are resolved through honest talk or mediation.\n• Speak from the heart, creating a healthier, balanced partnership.",
          "事業": "• Workplace disputes are settled fairly by leadership; your name is cleared.\n• Show professional authority and fairness, winning praise from all sides.",
          "健康": "• Heavy mental burdens lift completely, restoring balance to body and mind.\n• Mental clarity returns and spirits rise, keeping daily energy bright.",
          "財運": "• Disputed funds or rightful earnings are recovered cleanly and fairly.\n• Well-suited for signing new business contracts under open, fair terms.",
          "人際": "• Win strong support from mentors and public opinion, growing your respect.\n• Become a trusted, fair voice in your circle that others look up to."
        }
      },
      6: {
        name: "Completing",
        text: "Even if you win a belt of honor through aggressive force or endless lawsuits, such a trophy is brittle and short-lived. A prize taken by force will only be stripped away three times before the day is out. A forced victory is no true victory; releasing the urge to conquer brings lasting peace.",
        guide: "Honor won through fighting does not last; drop the battle to keep your peace.",
        focus: {
          "感情": "• Forced promises or control will only kill love faster; learn to let go.\n• Stop using pressure to force your partner's hand; return to true honesty.",
          "事業": "• A position won through ruthless politics is impossible to hold; stay humble.\n• Drop the chase for empty titles, turning your energy to building real value.",
          "健康": "• Beware of chronic heart or blood pressure strain from constant conflict.\n• Lay down your competitive drive, caring for your body with a calm mind.",
          "財運": "• Gains taken through fighting or sharp tricks slip through fingers quickly.\n• Guard against losing everything you fought for; clean work builds wealth.",
          "人際": "• Even if you win a debate, do not humiliate the other side; show mercy.\n• Avoid being seen as a combative troublemaker; return to gentle warmth."
        }
      }
    },
    shi: {
      1: {
        name: "Emerging",
        text: "An army must set out with strict discipline and noble, just intentions right from the start. If the beginning is chaotic and driven by impure motives, even the finest equipment will lead to disaster. Before launching any major undertaking, establish crystal-clear rules and boundaries.",
        guide: "Establish clear discipline and pure intent from day one to avoid disorder.",
        focus: {
          "感情": "• Set mutual guidelines and boundaries early in the relationship.\n• Keep your intentions pure and honest, avoiding games in love.",
          "事業": "• Clarify division of labor, operating rules, and review systems at launch.\n• Ensure the project's goals are ethical and well-grounded to build strong roots.",
          "健康": "• Follow medical advice on sleep and diet with diligence, staying consistent.\n• Build structured workout routines, practicing discipline from day one.",
          "財運": "• Set tight budgets and investment rules, avoiding off-the-books risks.\n• Check financial legality and compliance carefully, avoiding gray areas.",
          "人際": "• Define responsibilities early in teamwork to avoid future finger-pointing.\n• Be punctual and keep your word to earn immediate trust from partners."
        }
      },
      2: {
        name: "Rooting",
        text: "As a central commander, you stand in the field sharing joys and hardships with your troops, earning the full trust and mandate of the leader. Guiding the mission with impartial, selfless leadership brings good fortune and smooth sailing. Your crew will unite around your courage and fairness.",
        guide: "Lead from the center, sharing burdens with your crew; trusted by leadership, all goes well.",
        focus: {
          "感情": "• Stand as a dependable anchor in your family, offering safety and support.\n• Share life's daily loads equally with your partner, winning deep trust.",
          "事業": "• Backed by full leadership trust, you are ready to lead key projects.\n• Lead by example through tough spots, securing outstanding milestones.",
          "健康": "• Physical energy is high and resolve is strong, handling stress with ease.\n• Keep up regular exercise and mental training to stay at your best.",
          "財運": "• Manage larger capital allocations smoothly, watching returns grow steadily.\n• Allocate resources with precision, timing investments with confidence.",
          "人際": "• Hold natural authority and trust in groups; others gladly follow your lead.\n• Stay humble with your team and loyal to allies, building unshakeable bonds."
        }
      },
      3: {
        name: "Testing",
        text: "The army suffers from conflicting commands and muddled leadership, leading to disaster where carts return carrying the fallen. If a team lacks a unified center and everyone tries to drive, complete collapse will follow. End the chaos of competing voices immediately and restore one clear line of command.",
        guide: "Too many leaders lead to defeat; stop competing commands and restore clear leadership.",
        focus: {
          "感情": "• Do not let outside family or friends interfere and pull the relationship apart.\n• Stand united as a couple, keeping control of your partnership together.",
          "事業": "• The project is bogged down by mixed messages and vague ownership.\n• Clarify the chain of command swiftly, stepping around unaligned voices.",
          "健康": "• Avoid mixing too many random supplements at once, which strains the body.\n• Follow one clear, professional treatment plan tailored to your needs.",
          "財運": "• Stop following conflicting financial tips that scatter and lose your money.\n• Consolidate your finances, keeping partners from operating unchecked.",
          "人際": "• Steer clear of chaotic, leaderless groups caught in petty infighting.\n• Help streamline communication within your team, cutting through the noise."
        }
      },
      4: {
        name: "Choosing",
        text: "Facing overwhelming odds or an unfavorable terrain, make the conscious choice to camp and fall back behind safe lines. Knowing when to pull back is not weakness, but high-level strategy to conserve your strength. Regrouping quietly brings no blame, preserving your energy for the next move.",
        guide: "Pull back to camp and regroup, saving your strength for the right moment.",
        focus: {
          "感情": "• When arguments get heated, call a timeout to step back and cool off.\n• Give each other space to breathe and think, protecting the relationship.",
          "事業": "• Facing a tough market or heavy competition, pull back to your core strengths.\n• Rest and refine internal workflows, building up strength for the next push.",
          "健康": "• When exhausted, stop pushing and get real rest; do not try to tough it out.\n• Focus on deep sleep and quiet care to rebuild your immune strength.",
          "財運": "• Shift into defensive assets or hold cash during rough market swings.\n• Cut unnecessary spending and expansion, protecting your core capital.",
          "人際": "• Step away from tense, drama-filled circles and enjoy personal quiet.\n• Stay close to your truly supportive friends, moving forward quietly."
        }
      },
      5: {
        name: "Manifesting",
        text: "Wild beasts appear in the field, making it entirely right and necessary to mobilize and drive them off. But this must be guided by a seasoned, wise elder; letting inexperienced youth charge in blindly will only lead to disaster. Settle the disruption with mature, steady wisdom.",
        guide: "Trust seasoned elders to lead; curbing reckless impulses brings victory.",
        focus: {
          "感情": "• Handle outside interference or family friction with calm, mature wisdom.\n• Avoid throwing tantrums or acting on impulse, which spoils good ground.",
          "事業": "• In unexpected crises or challenges, rely on experienced veterans to lead.\n• Keep eager teams from jumping the gun, countering threats with care.",
          "健康": "• For sudden health issues, consult experienced, trusted medical specialists.\n• Avoid experimental, unproven treatments, choosing proven, steady care.",
          "財運": "• Consult seasoned wealth advisors before making major asset decisions.\n• Do not let inexperienced gut feelings drive high-risk investments.",
          "人際": "• Respect the guidance of seasoned mentors in groups, calming the room.\n• Defuse interpersonal friction and tension with mature, practiced grace."
        }
      },
      6: {
        name: "Completing",
        text: "With victory won, the leader rewards great deeds, granting lands and establishing households. When handing out honors, vet character strictly; never place petty, untrustworthy individuals in key seats, lest future troubles take root. Placing the right people in the right seats ensures lasting peace.",
        guide: "Reward success fairly and appoint the worthy; keep small minds from holding power.",
        focus: {
          "感情": "• Celebrate passing through trials together, appreciating your partner's care.\n• Discern true intentions in your social circle, keeping drama stirrers away.",
          "事業": "• Share rewards and credit fairly after success, lifting up your contributors.\n• Appoint key leaders based on true character and skill, barring cronyism.",
          "健康": "• Avoid overindulging in food or drink while celebrating; care for your body.\n• Maintain healthy routines to lock in the vitality you have built.",
          "財運": "• Distribute profits fairly and tuck away a portion into safe, defensive assets.\n• Watch out for opportunists asking for loans or pitching bad investments.",
          "人際": "• Share the spotlight with partners who stood with you, locking in loyal bonds.\n• Clear out shallow opportunists from your circle, keeping your network clean."
        }
      }
    },
    bi: {
      1: {
        name: "Emerging",
        text: "Connecting and allying with others must be built on honesty and trust from day one. Like an unadorned clay jug filled with rich wine, the outside may be simple, but the inside overflows with genuine goodwill. Reach out with a selfless heart; unexpected blessings and support will follow.",
        guide: "Form alliances with unadorned sincerity; honest goodwill brings unexpected blessings.",
        focus: {
          "感情": "• Show your real, unpolished self in early love; it touches the heart.\n• Share your feelings openly and warmly, building deep soul trust.",
          "事業": "• Offer transparency and integrity when building partnerships to win trust.\n• Simple, solid professional ability speaks louder than flashy presentations.",
          "健康": "• Eat simple, wholesome foods to keep your digestion light and clean.\n• Keep a peaceful, untroubled mind; your body will feel light and easy.",
          "財運": "• Partner with integrity; wealth flows naturally from a stellar reputation.\n• Well-suited for purpose-driven, long-term investments that do real good.",
          "人際": "• Make true friends by showing your real self, keeping your circle warm.\n• Reach out with kindness to connect with friends who will walk with you far."
        }
      },
      2: {
        name: "Rooting",
        text: "True closeness and connection flow from deep within, rooted in quiet integrity rather than shallow flattery. When you radiate honesty and warmth from the inside out, you naturally harmonize with central, positive forces. Stand by your principles; this inner bond brings wonderful fortune.",
        guide: "Let warmth flow from within while holding your principles; alignment follows.",
        focus: {
          "感情": "• Love flows from natural heart harmony; no need to chase or please artificially.\n• Be your authentic self; your partner truly loves who you are inside.",
          "事業": "• Win the quiet respect of leaders and peers through solid skill and character.\n• Align with the core team's shared vision, advancing together steadily.",
          "健康": "• Focus on internal wellness and smooth circulation, glowing from within.\n• Keep balance through deep breathing and calm meditation.",
          "財運": "• Rely on your core expertise to generate steady income that flows reliably.\n• Invest in the sectors you know best and align with, enjoying steady returns.",
          "人際": "• Draw aligned, like-minded friends naturally for pure, enduring bonds.\n• Do not follow the crowd; win lasting respect through honest integrity."
        }
      },
      3: {
        name: "Testing",
        text: "If you choose to link yourself with dishonest, compromised people, you will only bring pain and regret upon yourself. Look closely at your current social circle and partners: is someone draining or deceiving you? Step away from unhealthy ties and say no to bad company to stay safe.",
        guide: "Beware of allying with untrustworthy people; draw clear lines early to stay safe.",
        focus: {
          "感情": "• Beware of getting pulled into deceptive, draining relationships.\n• Walk away from partners who do not respect you; cut losses cleanly.",
          "事業": "• Pick partners carefully; avoid signing deals with unreliable companies.\n• Stay clear of toxic office politics and bad crowds to protect your standing.",
          "健康": "• Break free from poor habits and addictions to protect your wellbeing.\n• Avoid draining, negative crowds to keep your emotional energy clean.",
          "財運": "• Guard against bad crowds pitching risky, fraudulent investment schemes.\n• Clean up messy financial deals and loans that put you at risk.",
          "人際": "• Let go of fake networking contacts that drain you, keeping your circle healthy.\n• Hone your eye for character; never keep company with the untrustworthy."
        }
      },
      4: {
        name: "Choosing",
        text: "Look outward to connect with wise, visionary leaders and teams, showing your support with an open, honest posture. Linking with outside allies is a positive move that aligns with the times. Stand by what is right and support worthy work; you will find a broad stage to flourish.",
        guide: "Connect with worthy allies outside; serve the bigger mission with integrity.",
        focus: {
          "感情": "• Step into your partner's family and social circle with open warmth.\n• Build commitments openly and transparently, winning the blessing of all.",
          "事業": "• Pursue cross-disciplinary partnerships with top outside teams or brands.\n• Support inspiring leaders with loyalty, expanding your own professional scope.",
          "健康": "• Join outside wellness groups or training programs for skilled coaching.\n• Build vitality through group workouts and positive community support.",
          "財運": "• Well-suited for joint ventures with respected, ethical outside brands.\n• Put your money to work on regulated platforms to enjoy long-term gains.",
          "人際": "• Reach out to connect with inspiring new networks, widening your worldview.\n• Earn the strong support of outside mentors through an upright, honest manner."
        }
      },
      5: {
        name: "Manifesting",
        text: "Like an ancient sovereign on a royal hunt who nets game from three sides while leaving the front wide open, allowing fleeing beasts to run free. Treat people with generous freedom without forcing control. Welcome those who come and let go of those who leave; your spacious grace will win all hearts.",
        guide: "Embrace people with open generosity without forcing ties; great blessings unfold.",
        focus: {
          "感情": "• Give your partner space and freedom without suffocating control.\n• Let love breathe in total trust and generosity, deepening your connection.",
          "事業": "• Lead with an open, empowering style, honoring choices of teams and partners.\n• Follow market realities rather than forcing bad plans, gathering broad support.",
          "健康": "• Relax and go with the flow, dropping obsessive worry over health metrics.\n• Align daily habits with the seasons, letting your body find natural balance.",
          "財運": "• Manage wealth with an easy, spacious mind without chasing extreme gains.\n• Diversify assets flexibly so you can move in and out with complete ease.",
          "人際": "• Hold an easygoing mindset: connect when aligned, part in peace when not.\n• Show sweeping grace, becoming an admired leader people naturally turn to."
        }
      },
      6: {
        name: "Completing",
        text: "If you seek connection without establishing genuine honesty at the start, things will fall apart in the end, inviting misfortune. Hesitating too long and missing the right window leaves you stranded and alone. Face your hesitation honestly and take real steps to rebuild your connections.",
        guide: "Building ties without sincere roots and hesitating too long leads to isolation.",
        focus: {
          "感情": "• Hesitating too long or guarding your heart too tight can lose a good bond.\n• Show real, heartfelt effort if you wish to heal a connection; do not delay.",
          "事業": "• Missing the right partnership window leaves projects stranded in mid-air.\n• Address slow decision-making, updating your collaboration strategy.",
          "健康": "• Watch out for health dips caused by long isolation or downcast moods.\n• Step out of your shell and reconnect with warm, uplifting outside circles.",
          "財運": "• Missing key investment windows leaves funds caught in awkward positions.\n• Avoid making risky, desperate moves when you lack a strong support base.",
          "人際": "• Past coldness or pride may leave you feeling isolated when you need help.\n• Put aside pride, reach out to mend frayed ties, and rebuild honest trust."
        }
      }
    },
    xiaoxu: {
      1: {
        name: "Emerging",
        text: "Recognizing that conditions ahead are not yet mature, turning back to your original, proper path is the wisest choice. Do not force progress blindly or chase premature glory; quietly tending to yourself brings no blame and ensures lasting peace.",
        guide: "Turning back to your true path without forcing progress brings great good fortune.",
        focus: {
          "感情": "• When paces feel out of sync, step back to a comfortable boundary without pressure.\n• Focus on living your life well, interacting with relaxed, grounded ease.",
          "事業": "• If proposal timing is off, withdraw and refine it calmly to avoid hitting a wall.\n• Return to your core duties, handling everyday preparation with care.",
          "健康": "• Ease off overly intense workout experiments; return to simple, consistent rhythms.\n• Maintain inner calm, allowing tense nerves to soften and unwind.",
          "財運": "• Exit unclear investment positions early to preserve your existing capital.\n• Return to baseline savings plans, keeping your cash flow balanced and steady.",
          "人際": "• Step away gracefully if a gathering's vibe feels off, avoiding drama.\n• Maintain comfortable social boundaries, returning to pure, simple intent."
        }
      },
      2: {
        name: "Rooting",
        text: "Though forward motion is held back by the broader environment, walking hand in hand with aligned companions allows you to return safely to the right track. This mutual support and self-discipline checks the urge to rush, bringing grounded peace.",
        guide: "Walk with companions along the proper path; mutual discipline brings good fortune.",
        focus: {
          "感情": "• Establish healthy shared principles with your partner, keeping each other grounded.\n• Walk hand in hand through everyday life, building deep mutual understanding.",
          "事業": "• Stay in step with your team members, handling outside limits together.\n• Practice shared team discipline, advancing small, steady milestones.",
          "健康": "• Find a fitness buddy to check in with daily, keeping habits consistent.\n• Remind each other to eat well, cutting back on late nights and junk food.",
          "財運": "• Agree on budget discipline with family or partners to eliminate waste.\n• Participate in steady, conservative mutual funds or recurring savings plans.",
          "人際": "• Surround yourself with grounded friends who encourage you, staying away from hype.\n• Foster a positive, practical, and supportive atmosphere in your circle."
        }
      },
      3: {
        name: "Testing",
        text: "The wagon spokes have come loose and cannot roll; husband and wife turn away in sharp disagreement. Forcing your way forward right now will only fracture structures and break connections. Stop rushing, look closely at internal cracks, and mend them calmly.",
        guide: "Forcing progress brings breakdown; pause to heal internal friction and cracks.",
        focus: {
          "感情": "• Standoffs flare between partners; avoid speaking cutting, hurtful words.\n• Pause the argument and step back to reflect honestly on your own blind spots.",
          "事業": "• Project momentum stalls amid sharp internal disagreements within the team.\n• Pause expansion and hold internal alignment meetings to resolve friction.",
          "健康": "• Watch for headaches, chest tightness, or stomach pain caused by anger and worry.\n• Use deep breathing and solitude to settle emotions, keeping anger from flaring.",
          "財運": "• Guard against financial plans stalling due to disagreements with partners.\n• Pause contested capital moves, taking time to balance books clearly first.",
          "人際": "• Interpersonal friction grows; avoid making impulsive breakups in the heat of anger.\n• Put yourself in the other person's shoes, looking for a way to make peace."
        }
      },
      4: {
        name: "Choosing",
        text: "Anchored in genuine sincerity, all doubt, fear, and danger dissolve away naturally. When you drop defensiveness and meet friction with open, selfless goodwill, tight situations ease and safety returns.",
        guide: "Dissolve fear with pure sincerity; walking openly clears away danger.",
        focus: {
          "感情": "• Share your deep fears and vulnerabilities openly, clearing away suspicion.\n• Use authentic love to bridge distance, restoring deep emotional trust.",
          "事業": "• Speak with open transparency during reviews, earning the understanding of leadership.\n• Meet clients with professional honesty to resolve contract misunderstandings.",
          "健康": "• Fear and anxiety melt away, allowing physical tension to release.\n• Well-suited for deep emotional healing to clear out old stored stress.",
          "財運": "• Settle debts or disputes with honesty, avoiding legal complications.\n• Manage funds transparently, earning the full trust and backing of partners.",
          "人際": "• Reach out to clear up old misunderstandings with friends, healing the bond.\n• Treat others with heartfelt honesty; turning friction into peace comes naturally."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding deep integrity and noble character, you share resources and wealth generously with neighbors and companions. Instead of keeping gains to yourself, you lift everyone up together. This generous spirit draws wide support, uniting others around you.",
        guide: "Unite others with integrity and share wealth generously for shared flourishing.",
        focus: {
          "感情": "• Give selflessly to your partner, enjoying a deeply close, intimate bond.\n• Build a warm, abundant home life together, nourishing each other.",
          "事業": "• Create win-win team incentives to share the fruits of project success.\n• Enjoy strong support from partners across the board; work flows smoothly.",
          "健康": "• Body and mind rest in an abundant, joyful state; optimism boosts vitality.\n• Well-suited for group wellness activities or volunteering to lift the spirit.",
          "財運": "• Wealth flows in; shared collaboration unlocks much larger value.\n• Give back generously to partners and community, attracting more abundance.",
          "人際": "• Generous and well-loved, you serve as a warm pillar for your friends.\n• Maintain deep bonds with neighbors and peers; helpful allies appear everywhere."
        }
      },
      6: {
        name: "Completing",
        text: "The sweet rain has finally fallen, and gathered energy has reached full abundance. Now is the hour to enjoy what you have built and hold your gains, rather than chasing more. Like the moon at its fullest, pushing further invites decline. Knowing when enough is enough is true wisdom.",
        guide: "When accumulation is full, practice contentment; avoid overreaching at the full moon.",
        focus: {
          "感情": "• Love has reached a steady stage; cherish your happiness and avoid picking fights.\n• Avoid being overly demanding; contentment keeps peace in the home.",
          "事業": "• Phase goals are complete; focus on securing results rather than expanding blindly.\n• Quit while you are ahead, avoiding risky new bets born of overconfidence.",
          "健康": "• Wellness routines have worked well; stick to your current pace without overdoing remedies.\n• Guard against burning out your vitality through late nights or overindulgence.",
          "財運": "• Take profits and lock in returns; avoid chasing the very top of the market.\n• Guard your current wealth carefully, avoiding reckless reinvestments.",
          "人際": "• Keep a modest, quiet posture, avoiding boasting about your success.\n• Remember to thank those who supported you, staying humble at the peak."
        }
      }
    },
    lu: {
      1: {
        name: "Emerging",
        text: "Stepping forward with a simple, pure, and unpretentious heart brings no blame whatsoever. You seek no empty vanity, focusing solely on walking each step with care. When you navigate life with simple intent, even a long road feels solid and secure.",
        guide: "Walk with simple, pure intent; free of vanity, advancing brings no blame.",
        focus: {
          "感情": "• Connect with simple honesty, free from material calculation or games.\n• Enjoy quiet, unpretentious companionship; love grows steadily on its own.",
          "事業": "• Do basic tasks well with your feet on the ground, without chasing quick fame.\n• Keep pure enthusiasm for your craft, building reputation through real skill.",
          "健康": "• Return to simple, natural meals to reduce stress on your digestion.\n• Well-suited for walking, hiking, or simple calisthenics to stay active.",
          "財運": "• Embrace a clean, simple lifestyle, cutting unnecessary spending and desires.\n• Earn honest income through solid work, ignoring flashy get-rich schemes.",
          "人際": "• Make friends with an honest, down-to-earth manner, keeping ties clean.\n• Steer clear of superficial social circles, enjoying simple, true bonds."
        }
      },
      2: {
        name: "Rooting",
        text: "The road ahead is smooth and wide, and you walk it like a quiet hermit with calm ease. You avoid chasing noisy worldly vanity, protecting your inner peace and balance. This calm stability, untouched by outside turbulence, will bring lasting good fortune.",
        guide: "Walk the smooth road with quiet calm, avoiding empty chases to stay fortunate.",
        focus: {
          "感情": "• Savor quiet, relaxed time together, untouched by outside gossip.\n• Respect each other's independence, feeling deep mutual understanding.",
          "事業": "• Focus on deepening your expertise, staying clear of office politics.\n• Keep a steady, unhurried work pace, hitting targets step by step.",
          "健康": "• Body and mind rest in quiet peace, allowing nerves to restore deeply.\n• Well-suited for meditation, Tai Chi, or slow walks to calm the mind.",
          "財運": "• Finances are steady and comfortable; stick to your balanced strategy.\n• Stay cool during market hype, protecting the safety of your assets.",
          "人際": "• Keep friendships light and clean like clear water, easy and unburdened.\n• Guard your inner space, enjoying quality solitude and heartfelt talks."
        }
      },
      3: {
        name: "Testing",
        text: "A one-eyed person strains to see, and a lame person struggles to walk; pushing ahead recklessly and stepping on a tiger's tail brings sharp harm. Do not overestimate yourself or act on foolish bravado. Know your limits and avoid forcing your way forward in danger.",
        guide: "Know your limits and do not push blindly; acting beyond your strength brings harm.",
        focus: {
          "感情": "• Forcing a connection with an unaligned person only brings heartbreak.\n• Avoid putting on a false front in love; be honest about your real life.",
          "事業": "• Avoid taking on massive projects beyond your capacity to prevent collapse.\n• Know your real strength; do not fight strong competitors on ego alone.",
          "健康": "• Watch for eye strain, ankle sprains, or accidental bumps and falls.\n• Steer clear of extreme sports that exceed your fitness limits; stay safe.",
          "財運": "• Avoid following trends into high-leverage investments you do not understand.\n• Say no to heavy borrowing or impulsive spending to save face.",
          "人際": "• Drop vanity and showing off to avoid bringing trouble to your door.\n• Stay out of conflicts beyond your depth, keeping a low, safe profile."
        }
      },
      4: {
        name: "Choosing",
        text: "Stepping on the tiger's tail, you feel deep alertness and caution in your heart. It is precisely this profound respect and careful footwork that keeps your mind crystal clear on the edge of risk. Moving with mindful steps will resolve danger, bringing a safe, favorable close.",
        guide: "Move with deep caution and respect; careful steps turn danger into safety.",
        focus: {
          "感情": "• Handle delicate relationship moments with care, honoring their feelings.\n• Think before you speak, treating shared commitments with mindful respect.",
          "事業": "• Check every detail when handling high-risk or complex projects.\n• Meet demanding clients or leaders with refined professionalism and care.",
          "健康": "• Watch for stomach tightness or muscle tension caused by high alertness.\n• Stay alert while weaving in brief deep breathing pauses to relax.",
          "財運": "• Review contract terms strictly when handling major funds to catch traps.\n• Build defensive asset allocations step by step, keeping capital safe.",
          "人際": "• Watch your words and stay balanced in complex social environments.\n• Treat different groups with polite respect, steering clear of traps."
        }
      },
      5: {
        name: "Manifesting",
        text: "Making bold decisions requires courage, but pushing ahead with stubborn self-will hides danger even on a righteous path. Stay watchful and reflective; do not act autocratically simply because you hold authority. Listening to wise counsel keeps your footing secure and safe.",
        guide: "Stay alert when making bold decisions; listen widely and avoid stubborn pride.",
        focus: {
          "感情": "• Avoid acting autocratically; consult and respect your partner's views.\n• Talk through major household decisions together, avoiding one-sided moves.",
          "事業": "• Leaders must listen to team input when making calls, avoiding stubbornness.\n• Keep risk in mind during execution, staying ready to adjust plans.",
          "健康": "• Watch for blood pressure spikes or head tension caused by stress and temper.\n• Learn to soften and relax, avoiding staying wound up for too long.",
          "財運": "• Verify data from multiple angles before big moves; do not bet on gut alone.\n• Track market risk indicators closely, fine-tuning your positions in time.",
          "人際": "• Avoid acting overbearing in groups, which sparks pushback from peers.\n• Show receptive leadership, welcoming diverse perspectives with grace."
        }
      },
      6: {
        name: "Completing",
        text: "Look back over the full journey you have walked, reviewing the cause and effect of every step. If you have conducted yourself with upright respect and complete integrity throughout, supreme good fortune arrives. Carrying things through with virtue brings lasting fulfillment.",
        guide: "Review your journey; carrying things through with integrity brings supreme fortune.",
        focus: {
          "感情": "• Having walked through trials together, love reaches a sweet, mature peak.\n• Cherish and thank each other for the long road shared, keeping joy alive.",
          "事業": "• The project reaches a polished close; careful effort earns top praise.\n• You have built an undeniable professional reputation; the work is complete.",
          "健康": "• Long-term healthy habits bear fruit; body and mind feel vibrant and clear.\n• Enjoy the quiet energy that comes from living in balance and ease.",
          "財運": "• Steady investments enter a full harvest period, hitting your targets.\n• Manage funds cleanly from start to finish, enjoying long-term yields.",
          "人際": "• Your character earns wide respect; your reputation is rich and solid.\n• Fulfill every promise cleanly, winning deep and lasting trust."
        }
      }
    },
    tai: {
      1: {
        name: "Emerging",
        text: "Pulling up a single stalk of thatch grass brings its intertwined roots and fellow plants along with it. When you advance on the right path, like-minded companions naturally gather to support you. Step forward boldly and advance with your peers; great good fortune will open the way.",
        guide: "Kindred allies unite to advance together; move forward in collective strength.",
        focus: {
          "感情": "• Romance enjoys the warm support and blessings of friends and family.\n• Singles can naturally meet a good match through gatherings or hobby groups.",
          "事業": "• Gather aligned teammates to launch projects together, multiplying strength.\n• Team morale is high; work together to bring new initiatives to fruition.",
          "健康": "• Join outdoor sports or group workouts with friends to stay motivated.\n• Circulation flows smoothly; energy is buoyant and vitality is strong.",
          "財運": "• Well-suited for joint ventures or co-founding projects with trusted allies.\n• Open new revenue channels through shared resources and mutual network help.",
          "人際": "• Settle easily into high-quality, positive communities where you uplift each other.\n• Show strong teamwork, building deep friendships within the group."
        }
      },
      2: {
        name: "Rooting",
        text: "Show sweeping magnanimity to embrace the unrefined, holding the courage to cross rushing rivers on foot. Do not forget distant friends or form biased cliques, always holding to the balanced center. When you possess such generous, fair, and courageous character, great achievements naturally follow.",
        guide: "Embrace the unrefined with courage; balanced fairness achieves great works.",
        focus: {
          "感情": "• Embrace your partner's background differences and quirks with spacious grace.\n• Face practical challenges honestly, crossing rough waters together.",
          "事業": "• Welcome diverse viewpoints and overlooked resources to open new markets.\n• Manage teams with fair, impartial leadership, winning universal respect.",
          "健康": "• Physical stamina and endurance are strong; take on wholesome fitness goals.\n• Digestion works smoothly; keep an open, cheerful mind to nourish health.",
          "財運": "• Broad, long-term vision makes this ideal for investing in emerging niches.\n• Manage money transparently and fairly, building strong capital capacity.",
          "人際": "• Avoid exclusive cliques; treat everyone with equal, genuine respect.\n• Welcome diverse talents, building a broad and deeply rooted network."
        }
      },
      3: {
        name: "Testing",
        text: "There is no plain without a slope, and no departure without a return. In seasons of smooth abundance, remember that change and challenge are natural parts of life. Stay pure and steady without borrowing worry over future ups and downs; keeping this clarity keeps you safe.",
        guide: "Stay mindful in peace and remember life's cycles; holding to truth brings peace.",
        focus: {
          "感情": "• Cherish sweet moments while being ready for everyday routines and adjustments.\n• Trust your shared commitment, unmoved by brief emotional fluctuations.",
          "事業": "• Build backup plans while business is smooth to handle future market shifts.\n• Stay humble and diligent, avoiding complacency during successful runs.",
          "健康": "• Maintain healthy habits during good times; avoid late-night binges.\n• Schedule regular checkups to catch and balance minor physical shifts early.",
          "財運": "• Set aside emergency funds during high earnings; avoid reckless expansion.\n• Balance your portfolio, holding both growth and defensive assets.",
          "人際": "• Treat friends going through rough patches with kindness; avoid being fair-weather.\n• Understand life's natural shifts, viewing changing relationships with calm."
        }
      },
      4: {
        name: "Choosing",
        text: "Like birds fluttering down with ease, set aside pride and status to connect with neighbors and peers in true sincerity. Drop suspicion and calculation, helping each other with a pure, unpretentious heart. When you join the community as an equal, you will receive the warmest trust and support.",
        guide: "Drop your pride and join others as equals; connect with pure sincerity.",
        focus: {
          "感情": "• Set aside pride over background, loving your partner with equal honesty.\n• Step into each other's families and circles with warmth and humility.",
          "事業": "• Leaders should walk the floor, sharing the work and listening to frontline staff.\n• Break down department walls, driving cross-team projects with open honesty.",
          "健康": "• Join accessible, community-based fitness activities to relax your body.\n• Keep your mind clear and untangled, supporting balance across body and spirit.",
          "財運": "• Well-suited for community mutual aid or purpose-driven shared economy projects.\n• Hold an easy, generous mindset with wealth, growing value through sharing.",
          "人際": "• Approachable and down-to-earth, you are widely loved by peers and neighbors.\n• Treat others with a clean heart; avoiding fake networking builds deep ties."
        }
      },
      5: {
        name: "Manifesting",
        text: "Like an ancient sovereign marrying a noble princess to a worthy minister, setting aside status to honor virtue and wisdom. Fostering a beautiful union with deep humility, sincerity, and grace brings supreme good fortune. The noble leader who steps down with care receives the richest blessings.",
        guide: "Marry with humility and honor virtue; aligning with goodness brings great blessings.",
        focus: {
          "感情": "• Bridging background differences with true love to forge a beautiful partnership.\n• Put aside pride to embrace your partner, welcoming deep marital happiness.",
          "事業": "• Established brands partner humbly with young startups to build fresh terrain.\n• Appoint the worthy with respect, drawing top talent to champion the mission.",
          "健康": "• Circulation is smooth; body and mind radiate an elegant, healthy glow.\n• Enjoy quality wellness routines and peaceful living, supporting longevity.",
          "財運": "• Form powerful alliances or family unions that unlock massive shared value.\n• Invest in high-integrity projects that do social good, winning both wealth and honor.",
          "人際": "• Embody generous leadership that earns the heartfelt love of people from all walks.\n• Serve as a vital bridge between different communities, gaining deep respect."
        }
      },
      6: {
        name: "Completing",
        text: "The city walls crumble back into the protective moat; the peak of peace and flourishing is about to turn toward stagnation. Do not resort to force or try to hold back the turning tide. Pull in your edges, issue peaceful guidance within your sphere, and tend to your own base. Settle your spirit in peace.",
        guide: "Flourishing turns to stillness; avoid forced moves and tend quietly to your base.",
        focus: {
          "感情": "• Love enters a quiet or tricky transition; avoid demanding or picking fights.\n• Tend to your own growth and reflect calmly, accepting changes with grace.",
          "事業": "• A flourishing project faces its natural slowdown; avoid pouring in bad money.\n• Pull back your lines, secure internal defense, and preserve core strength.",
          "健康": "• Watch for sleep issues, anxiety, or gradual fatigue caused by shifts.\n• Reduce heavy exertion, returning to quiet wellness care and rest.",
          "財運": "• The boom cycle is cooling; pull back loose funds and avoid buying more.\n• Shift into defensive asset setups to protect capital from shrinking.",
          "人際": "• Your social circle may naturally shift; do not force people to stay.\n• Keep a quiet, modest presence in your own circle, staying clear of disputes."
        }
      }
    },
    pi: {
      1: {
        name: "Emerging",
        text: "At the onset of stagnation and blockage, pulling up a single stalk of thatch grass brings its intertwined roots along. The wise person chooses to step back alongside aligned companions, guarding personal integrity. Refusing to compromise with worldly noise and retreating quietly preserves pure virtue, ensuring long-term good fortune.",
        guide: "Recognize the standstill early and retreat with peers to protect integrity; long-term fortune follows.",
        focus: {
          "感情": "• Sense cooling relationship vibes early and cool down, avoiding forced friction.\n• Offer each other space to reflect, holding fast to the original purity of love.",
          "事業": "• When workplace climate turns toxic, protect yourself and stay clear of factions.\n• Encourage aligned colleagues, building quiet capability as you wait for the turn.",
          "健康": "• Cut back on draining social engagements, focusing on home rest and recovery.\n• Keep simple meals and regular sleep to preserve your vital energy intact.",
          "財運": "• Spot early economic chills and pull back on non-essential spending and deals.\n• Agree on lean budgeting with family, securing basic living emergency reserves.",
          "人際": "• Step away from murky social gatherings, keeping close ties with a few true friends.\n• Hold to your ethical standards, refusing to follow compromising crowd trends."
        }
      },
      2: {
        name: "Rooting",
        text: "While superficial opportunists flatter and scheme, the person of true character chooses quiet patience, enduring the standstill with dignity. Do not sell out your principles for fleeting perks; bear the temporary coldness with calm grace. Holding to balanced integrity keeps you safe from chaotic storms.",
        guide: "Endure standstill with patience instead of flattering; holding to balance brings safety and peace.",
        focus: {
          "感情": "• Facing emotional coldness or misunderstandings, stay upright without groveling.\n• Let time and honesty prove your worth, refusing to sacrifice self-respect.",
          "事業": "• Refuse to play flattering office politics, quietly fulfilling your duties well.\n• Endure temporary marginalization, protecting your professional standards.",
          "健康": "• Watch for chest tightness or low mood caused by grievances; express your feelings.\n• Journal or meditate to release heavy emotions, protecting your mental balance.",
          "財運": "• Reject flashy, high-return schemes that violate your ethical compass.\n• Live simply within your means, sustaining your baseline through honest income.",
          "人際": "• Keep healthy distance from flattering sycophants, refusing to join their ways.\n• Cultivate noble character in solitude, winning the deep respect of the wise."
        }
      },
      3: {
        name: "Testing",
        text: "Those who harbor hidden dishonor or blindly attach themselves to petty forces will eventually face deep inner shame and public disgrace. If you realize your past actions strayed from what is right, feel that remorse and correct your path immediately. Severing ties with errors is your only way to avert greater trouble.",
        guide: "Acknowledge shame and reform mistakes promptly; walk away from dishonor to stop disgrace.",
        focus: {
          "感情": "• Face past selfishness or secrecy in love honestly, offering a sincere apology.\n• Cut off toxic, deceptive, or triangulated dynamics, returning to clean ground.",
          "事業": "• Step away immediately if you realize you were drawn into questionable practices.\n• Take responsibility and correct errors swiftly before your credibility breaks.",
          "健康": "• Watch for insomnia or nervous exhaustion triggered by guilt and anxiety.\n• Make honest amends and realign your lifestyle, lifting heavy burdens from the heart.",
          "財運": "• Cease all corner-cutting, exploitative, or compromising ways of making money.\n• Accept losses from past greed, cleaning up problematic assets with discipline.",
          "人際": "• Exit manipulative social circles, admitting mistakes with humble honesty.\n• Rebuild your personal integrity, establishing clean, trustworthy relationships."
        }
      },
      4: {
        name: "Choosing",
        text: "Answering the call of destiny and duty by stepping forward brings no blame whatsoever. When you act with noble mission and selfless character, aligned companions will rally to your side, sharing in the turning of the tide. The standstill is about to break; step forward with courage to lead the renewal.",
        guide: "Answer the call to step forward; unite with allies to break the standstill and share blessings.",
        focus: {
          "感情": "• Take the initiative to break long cold wars, expressing your commitment.\n• Walk out of emotional valleys together, greeting an exciting new chapter.",
          "事業": "• Step up to lead restructuring initiatives when conditions ripen, breaking deadlocks.\n• Rally passionate talent to your side, securing major project breakthroughs.",
          "健康": "• Vitality returns across the body; circulation flows and fatigue falls away.\n• Well-suited for launching a fresh, active wellness routine to rebuild strength.",
          "財運": "• The stagnant period clears, welcoming fresh and healthy investment avenues.\n• Share profits from new initiatives with great partners, reopening wealth channels.",
          "人際": "• Step forward as the inspiring voice leading everyone out of difficulty.\n• Draw companions of expansive vision to your side, co-creating a new future."
        }
      },
      5: {
        name: "Manifesting",
        text: "The great leader ends the era of stagnation through resolute wisdom and courage, bringing supreme good fortune and flourishing. Yet even in victory, the mind stays vigilant, asking 'What if everything collapses again?'—tying the enterprise securely to a grove of deep-rooted mulberry trees. Guarding against complacency keeps your foundation secure forever.",
        guide: "Break the standstill into great fortune; stay vigilant like tying to mulberry roots to secure peace.",
        focus: {
          "感情": "• Love emerges from the shadows into sweet harmony; treasure each other deeply.\n• Tend to your bond with daily care, letting love grow deep roots like a mulberry tree.",
          "事業": "• Lead the team through crisis to a new summit, turning the tide with mastery.\n• Build enduring defense systems and sound policies, making your success solid.",
          "健康": "• Body and mind achieve exceptional balance; vitality is vibrant and robust.\n• Keep up preventive health habits to protect your wellness before issues arise.",
          "財運": "• Financial pressures lift completely, bringing substantial asset growth.\n• Allocate wealth into resilient, defensive core assets for lasting security.",
          "人際": "• Leadership and influence reach their peak, earning universal, heartfelt respect.\n• Build unshakeable strategic alliances; your network foundation is solid."
        }
      },
      6: {
        name: "Completing",
        text: "The period of blockage and standstill has completely overturned and drawn to an end. Things turn at their extremes: hardship turns to peace. Past trials, constraints, and delays vanish like mist, and the light of joy warms the landscape once more. Welcome the bright new cycle with gratitude and joy.",
        guide: "Hardship overturns into peace as stagnation ends; celebrate rebirth and welcome great joy.",
        focus: {
          "感情": "• Long-standing emotional distance and trials clear away; love is restored.\n• Enter a joyful, refreshing season of shared life, complete and harmonious.",
          "事業": "• Long-stalled obstacles are removed; projects experience an explosive rebound.\n• The workplace welcomes fresh breakthroughs and bright prospects; advance freely.",
          "健康": "• Lingering ailments and accumulated exhaustion completely fade away.\n• Body and mind feel refreshed and vibrant, greeting a healthy new chapter.",
          "財運": "• Financial bottlenecks reverse; cash flow runs clear and wealth channels reopen.\n• Welcome unexpected returns and a fresh golden window for investments.",
          "人際": "• Interpersonal friction and misunderstandings clear up, restoring warm ties.\n• Social life is bright and active; celebrate the victory of the new turn together."
        }
      }
    },
    tongren: {
      1: {
        name: "Emerging",
        text: "Stepping out of the doorway into the open public square, connecting with all people in complete openness and transparency. Free from selfish calculation or closed, exclusive cliques. Aligning with an impartial, public-minded heart right from the start brings no blame, laying a clean foundation for great partnership.",
        guide: "Meet people openly in the public square; connecting without bias brings no blame.",
        focus: {
          "感情": "• Build romance with openness and honesty; a healthy relationship wins wide support.\n• Singles should join public gatherings to meet sincere, aligned companions.",
          "事業": "• Launch projects with fair, open principles, communicating stakeholder interests clearly.\n• Avoid backroom deals; advance collaboration through transparent processes.",
          "健康": "• Keep an open heart; spend time outdoors breathing fresh, clean air.\n• Build basic workout routines, keeping body and mind light and unburdened.",
          "財運": "• Ensure investment information is fully public and transparent, avoiding gray deals.\n• Earn honest income through open, compliant market channels for peace of mind.",
          "人際": "• Treat everyone equally without prejudice, building an authentic reputation in groups.\n• Reach out to connect with friends across diverse fields; your network will grow."
        }
      },
      2: {
        name: "Rooting",
        text: "Seeking connection only within narrow family circles or closed, factional cliques is a sign of small vision and artificial limits. While this insular approach may feel safe at first, it invites criticism and regret later. Have the courage to step outside your comfort circle into the wider world.",
        guide: "Beware the narrow bias of insular cliques; step outside closed circles to avoid regret.",
        focus: {
          "感情": "• Avoid isolating yourselves entirely in a couple's bubble; connect with the wider world.\n• Guard against letting family prejudice get in the way of a healthy relationship.",
          "事業": "• Avoid forming exclusive office factions that alienate you from the wider team.\n• Break through departmental silos to build collaborative cross-functional bridges.",
          "健康": "• Watch for sluggish circulation caused by an overly sedentary or insular routine.\n• Step into new environments to breathe fresh vitality into your mental space.",
          "財運": "• Avoid limiting your investment view to close friends; guard against informal loans.\n• Diversify your financial assets rather than keeping all your eggs in one basket.",
          "人際": "• Step out of your cozy circle to meet people of diverse backgrounds and mindsets.\n• Drop narrow prejudices, welcoming diverse talent with a spacious heart."
        }
      },
      3: {
        name: "Testing",
        text: "Lacking trust, you hide troops in dense thickets and climb the high hill to spy secretly on others, not daring to advance for three long years. Deep-seated suspicion, fear, and over-defensiveness trap you in an exhausting standoff. Lay down baseless paranoia; only mutual trust can break the gridlock.",
        guide: "Drop suspicion and excessive defense; spying in secret drains you, while trust breaks the deadlock.",
        focus: {
          "感情": "• Stop endless second-guessing, testing, or checking your partner's private messages.\n• Defensive walls push love away; open, honest dialogue is the only way to rebuild trust.",
          "事業": "• Team members are guarding against each other in secret rivalry, stalling work.\n• End wasteful internal friction and discuss shared goals with open honesty.",
          "健康": "• Watch for insomnia and stomach tension caused by chronic stress and suspicion.\n• Practice deep relaxation, lowering excessive defense mechanisms against the world.",
          "財運": "• Fear and overthinking cause you to miss great long-term investment windows.\n• Assess risks with objective data instead of letting subjective fear make the call.",
          "人際": "• Stop imagining hidden enemies and putting up guards in your friendships.\n• Treat others with sincerity; dropping calculations will dissolve the standoff."
        }
      },
      4: {
        name: "Choosing",
        text: "Climbing the city wall ready to attack, you pull back in the nick of time, choosing self-reflection over conflict. Knowing when to pause and master your impulses brings great good fortune. Yielding the fight out of wisdom and moral clarity protects your highest interests and dignity.",
        guide: "Halt before the clash and master the urge to fight; returning to peace brings great fortune.",
        focus: {
          "感情": "• Stop hurtful words right on the edge of an argument, stepping back with care.\n• Release the need to win every point, protecting your bond with peaceful yielding.",
          "事業": "• Weigh the costs and walk away from destructive commercial rivalry to seek peace.\n• Step back to widen your view, channeling energy into your core advantages.",
          "健康": "• Quelling anger keeps blood pressure and internal heat in check, preserving calm.\n• Use deep breathing and quiet meditation to settle intense, agitated emotions.",
          "財運": "• Walk away from high-risk commercial disputes or lawsuits, saving heavy costs.\n• Protect your own assets securely without making aggressive moves on others.",
          "人際": "• Defuse explosive conflicts proactively, showing mature, poised restraint.\n• Win the respect of opponents, turning friction into peace and restoring harmony."
        }
      },
      5: {
        name: "Manifesting",
        text: "Meeting with like-minded soul companions at last; though the road began with hardship, tears, and misunderstandings, moving through trials brings shared triumph, joyful laughter, and a warm embrace. This deep bond of shared purpose, refined by fire, reaches a brilliant, heartfelt reunion.",
        guide: "Overcome trials to break through obstacles; weeping turns to joy in complete, triumphant union.",
        focus: {
          "感情": "• Clear away obstacles and misunderstandings, embracing your true love in joy.\n• A bond that has weathered storms is unshakeable; share in sweet victory together.",
          "事業": "• Overcome major crises alongside key partners, securing brilliant project success.\n• Team unity reaches an absolute peak, co-creating an industry milestone.",
          "健康": "• Releasing bottled-up tears brings deep emotional relief and healing.\n• Mental clarity returns and circulation flows freely, radiating fresh vitality.",
          "財運": "• Hard work and perseverance yield rich returns on investments and partnerships.\n• Share prosperity with companions who stood by you, building lasting success.",
          "人際": "• Heal past friction with close friends, forging bonds of unshakeable loyalty.\n• Your team shares deep understanding and alignment after overcoming trials together."
        }
      },
      6: {
        name: "Completing",
        text: "Seeking like-minded companions out in the quiet suburbs; though the vision is noble, few answer the call. While you may not spark a mass following, you rest content in this serene, refined simplicity. Your heart is clear and selfless, leaving no regret or fault. Let things be natural.",
        guide: "Fellowship in the suburbs brings no mass echo, but holding noble purpose leaves no regret.",
        focus: {
          "感情": "• Savor a quiet, unhurried partnership without chasing dramatic displays of romance.\n• Even if you have not met your match yet, enjoy fulfilling and peaceful solitude.",
          "事業": "• The project vision may be ahead of its time or niche; hold its unique value.\n• Stay true to your distinct, boutique identity without catering to shallow trends.",
          "健康": "• Well-suited for resting in tranquil countryside settings, breathing in fresh air.\n• Keep an unhurried, detached mindset, far from the noisy rush of city life.",
          "財運": "• Invest in quiet, niche markets that carry dependable, long-term intrinsic value.\n• Keep a contented relationship with money, avoiding the chase for empty scale.",
          "人際": "• Maintain an elegant, unhurried presence, connecting with a few kindred souls.\n• Do not force everyone to understand you; enjoy inner peace in quiet grace."
        }
      }
    },
    dayou: {
      1: {
        name: "Emerging",
        text: "Standing at the threshold of great abundance without having formed any harmful connections. Keep your original purity intact, staying mindful of responsibilities and potential hurdles. This clear self-discipline keeps you free from fault, laying a clean foundation for lasting wealth.",
        guide: "Remaining free of harmful ties brings no blame; stay clear-headed to build clean foundations.",
        focus: {
          "感情": "• Early romance is clean and pure, free from lingering emotional baggage.\n• Value this simple, beautiful beginning, building love with grounded care.",
          "事業": "• Launch projects free from questionable interests, starting on clean ground.\n• Keep a dedicated, careful mindset, laying firm ethical baselines for the long run.",
          "健康": "• Physical vitality is strong and clear of ailments; focus on daily prevention.\n• Stay clear of poor habits and heavy foods, keeping your body light and clean.",
          "財運": "• Finances are clear and unencumbered, free from bad debts or messy disputes.\n• Keep a clear, rational mind, building steady, compliant investments from day one.",
          "人際": "• Steer clear of murky crowds and drama, keeping your social circle refined.\n• Present yourself with honest integrity, winning immediate respect from others."
        }
      },
      2: {
        name: "Rooting",
        text: "Possessing the broad, sturdy capacity of a great wagon capable of bearing heavy loads and missions forward. You hold ample strength and resources to take on major responsibility, moving forward without obstacle to fulfill your goals. Step up boldly with strength.",
        guide: "A great wagon carries heavy loads; with ample strength and clear purpose, advance safely.",
        focus: {
          "感情": "• Possess the love and material foundation to carry family duties, offering safety.\n• Shoulder the future together with your partner; your bond stands solid as rock.",
          "事業": "• Capable of orchestrating large projects and key resources with smooth execution.\n• Step up as a core pillar of strength, guiding the team toward clear milestones.",
          "健康": "• Physical constitution is solid and energy is high, showing excellent resilience.\n• Well-suited for strength conditioning or endurance training to build stamina.",
          "財運": "• Asset base is solid and diversified, offering strong resistance against risk.\n• Ideal for taking on tangible, quality investments with long-term horizons.",
          "人際": "• Stand as a dependable pillar on your team, trusted with major undertakings.\n• Hold broad capacity and diplomacy, harmonizing diverse relationships with ease."
        }
      },
      3: {
        name: "Testing",
        text: "A noble leader presents wealth and honors selflessly to the sovereign and community, while small minds hoard selfishly, bringing trouble. When you hold abundant resources, only a spacious heart that serves the greater good can preserve them. Use your gifts to lift others up; that is true nobility.",
        guide: "The noble leader offers gifts to the whole, while small minds hoard; selfless service preserves wealth.",
        focus: {
          "感情": "• Give your time, energy, and care selflessly to your partner and family.\n• Release selfish calculations in love, finding rich joy in shared generosity.",
          "事業": "• Dedicate project success and resources to the broader team and mission.\n• Avoid hoarding credit, winning executive trust through selfless teamwork.",
          "健康": "• Maintain a generous, spacious spirit; a broad heart supports lasting longevity.\n• Join volunteer work or community service, healing body and mind through service.",
          "財運": "• Give back through charitable donations or employee bonuses; sharing gathers wealth.\n• Hold an expansive wealth mindset; using gains to serve society builds lasting merit.",
          "人際": "• Be generous and supportive, winning the heartfelt respect and love of others.\n• Steer clear of selfish crowds, deepening ties in purpose-driven circles."
        }
      },
      4: {
        name: "Choosing",
        text: "Holding high status and great strength, you remain clear and self-disciplined, neither flaunting wealth nor chasing empty glory. Softening your shine and avoiding competition for the spotlight with your peers keeps you safe from jealousy and fault.",
        guide: "Rich without arrogance and free of boastful display; modesty keeps you secure and blame-free.",
        focus: {
          "感情": "• Avoid showing off or acting superior in front of your partner.\n• Treat each other as equals with gentle respect, guarding quiet intimacy.",
          "事業": "• Stay low-key when holding key seats, avoiding pride over accomplishments.\n• Avoid stealing the spotlight from colleagues; share recognition with the team.",
          "健康": "• Embrace simple, wholesome dining habits, avoiding overeating or rich excess.\n• Keep your lifestyle light and uncluttered, protecting against metabolic strain.",
          "財運": "• Manage wealth quietly without flashing possessions, keeping unwanted attention away.\n• Focus on steady preservation rather than showy returns, guarding your gains.",
          "人際": "• Treat others with humble warmth, disarming envy with unpretentious grace.\n• Maintain an elegant posture of non-competition, enjoying steady friendships."
        }
      },
      5: {
        name: "Manifesting",
        text: "Leading with deep sincerity and natural dignity—authentic yet authoritative, commanding yet filled with kindness. Your integrity radiates like light, and people gather around your character with heartfelt devotion. This is a golden season of authority and goodness in harmony, bringing great good fortune.",
        guide: "Integrity inspires devotion while dignity commands respect; lead with virtue for great fortune.",
        focus: {
          "感情": "• Treat each other with complete sincerity, combining deep affection with mutual respect.\n• Radiate mature, dependable presence, earning your partner's admiration.",
          "事業": "• Lead with charismatic authority, balancing high standards with care to achieve milestones.\n• Stand tall on integrity at the top of your field, winning universal respect.",
          "健康": "• Energy is full and presence is grounded; body, mind, and spirit are aligned.\n• Keep confident, unhurried calm, maintaining a vibrant, resilient body.",
          "財運": "• Draw substantial wealth through exceptional commercial credibility and leadership.\n• Investment calls combine vision with courage, bringing prosperous, steady returns.",
          "人際": "• Stand as an admired leader and moral compass in your community, widely loved.\n• Treat every partner with genuine honesty, expanding your network to its peak."
        }
      },
      6: {
        name: "Completing",
        text: "Aligned with the light of heaven, you receive divine favor and protection. Good fortune shines on all paths, and all things advance smoothly. Because you have consistently walked in humility, truth, respect for wisdom, and service to others, the universe supports your every step. Step forward into complete, blessed fulfillment.",
        guide: "Blessed by heaven, all things advance with ease; virtue brings complete fulfillment and triumph.",
        focus: {
          "感情": "• Romance reaches a blessed, soulmate harmony; treasure each other with gratitude.\n• Step together into a sacred partnership of lasting happiness and mutual peace.",
          "事業": "• Your career enjoys perfect timing and complete support, reaching the very top.\n• Every effort brings rich fruition, setting an unshakeable industry benchmark.",
          "健康": "• Body and spirit achieve exceptional clarity and wellness, vibrant and long-lived.\n• Rest in the warm glow of gratitude and unconditional love, enjoying deep ease.",
          "財運": "• Welcome abundant, blessed wealth and complete returns, leaving lasting security.\n• Channel prosperity into noble social value, enriching generations to come.",
          "人際": "• Revered and loved by people everywhere, you find help and goodwill at every turn.\n• Complete your work with integrity from start to finish, leaving an inspiring name."
        }
      }
    },
    qian_modest: {
      1: {
        name: "Emerging",
        text: "A truly humble person can cross rushing rivers and treacherous depths with ease through pure modesty and self-discipline. Make humility your first principle, refusing to push ahead of others, and yield with grace when facing obstacles. This brings great good fortune and smooth paths on all endeavors.",
        guide: "The humble leader crosses great rivers safely; extreme modesty dissolves all friction.",
        focus: {
          "感情": "• Show polite humility in early love, leaving a wonderful, respectful impression.\n• Put your partner first in everyday matters, easing friction with gentle yielding.",
          "事業": "• Stay humble and inquisitive when stepping into unfamiliar teams or new projects.\n• Build steady preparation, easing initial friction through a cooperative approach.",
          "健康": "• Keep your heart calm and steady, avoiding muscle strain from rushing into workouts.\n• Start with gentle, foundational stretching and walking to condition the body.",
          "財運": "• Use conservative, modest financial strategies without chasing high-risk bets.\n• Build baseline capital steadily to establish a solid foundation for the future.",
          "人際": "• Be open, polite, and grounded, settling easily into new teams and winning hearts.\n• Seek advice from experienced mentors with a humble heart; support will flow."
        }
      },
      2: {
        name: "Rooting",
        text: "The beauty of humility radiates naturally from within, inspiring genuine resonance and praise from everyone around you. This modesty is not empty etiquette, but the natural expression of an honest, spacious heart. Hold fast to this quiet virtue; good fortune will walk with you like a shadow.",
        guide: "Inner humility resonates outward, winning universal praise; holding to truth brings fortune.",
        focus: {
          "感情": "• Your gentle, authentic humility touches your partner, deepening harmony.\n• Treat each other with honest nature, enjoying love built on mutual respect.",
          "事業": "• Your professional skill is widely recognized by peers and leaders, earning praise.\n• Keep an unhurried, steady work style, advancing core tasks with quiet focus.",
          "健康": "• Inner peace brings balanced circulation; body and mind rest in healthy equilibrium.\n• Keep regular daily habits and light meals, letting your body feel clear and easy.",
          "財運": "• A stellar personal reputation brings more high-quality, profitable partnerships.\n• Manage funds with structure and care, watching assets grow with steady ease.",
          "人際": "• Polite, humble manners win praise everywhere, making you welcome in all circles.\n• Attract inspiring mentors and true friends, building deep and heartfelt bonds."
        }
      },
      3: {
        name: "Testing",
        text: "The hardworking and humble leader who accomplishes great deeds while remaining modest carries all things through to a successful completion. Even under heavy burdens and intense trials, you never boast or become proud. People yield willingly to your character, bringing a prosperous, fulfilling close.",
        guide: "The diligent, humble leader sees things through; free of pride, all people follow willingly.",
        focus: {
          "感情": "• Give quietly to your family without boasting or complaining, earning deep love.\n• Share daily chores together, harvesting lasting happiness through diligent care.",
          "事業": "• Deliver challenging, high-stakes projects successfully while staying modest.\n• Win the heartfelt admiration of your team, becoming a truly trusted leader.",
          "健康": "• Balance hard work with rest, avoiding chronic exhaustion from overworking.\n• Schedule non-negotiable pauses to keep your physical stamina strong.",
          "財運": "• Earn solid income through hard, honest work, growing steady wealth.\n• Protect hard-earned capital with care, growing your assets through steady discipline.",
          "人際": "• Stand as the most dedicated and humble contributor in your group, holding high respect.\n• Others gladly support your plans; collaboration runs smoothly and easily."
        }
      },
      4: {
        name: "Choosing",
        text: "Expressing humility with skill to coordinate the bigger picture brings smooth success on all paths. When bridging gaps and balancing resources, using gentle, humble communication resolves friction and helps all initiatives move ahead. Align with balanced fairness, and all things prosper.",
        guide: "Use humble wisdom to coordinate the whole; moving with balance brings success everywhere.",
        focus: {
          "感情": "• Express your needs with gentle humility; your partner will listen with warmth.\n• Act as a peacemaker in family matters, smoothing over differences with care.",
          "事業": "• Well-suited for mid-level coordination or project management, bridging communications.\n• Drive cross-team collaboration with a humble approach to secure needed resources.",
          "健康": "• Mental resilience is strong, adapting flexibly to changing environments and stress.\n• Keep your breathing deep and stretch regularly to keep joints and muscles supple.",
          "財運": "• Earn mediation or partnership fees through flexible, diplomatic coordination.\n• Balance risk and safety in your investments, keeping capital dynamic and secure.",
          "人際": "• Diplomatic yet authentic, you serve as the soothing bridge in your social circle.\n• Settle disputes with grace, earning the shared respect of all parties involved."
        }
      },
      5: {
        name: "Manifesting",
        text: "Humility does not mean yielding without principles or accepting abuse. When facing uncooperative disruption or boundary violations, even a noble leader must take decisive action to restore order. Balance firmness with gentleness; taking a clear stand to defend what is right brings complete success.",
        guide: "Humility must keep its backbone; take decisive action when needed to restore order.",
        focus: {
          "感情": "• Combine warm patience with clear, firm boundaries, refusing to enable bad behavior.\n• Stand firm on core relationship principles, protecting the health of your bond.",
          "事業": "• Balance empathy with accountability; address disruption firmly to protect standards.\n• Defend the team's rightful interests with courage, showing decisive leadership.",
          "健康": "• Take decisive steps to break harmful lifestyle habits, setting non-negotiable boundaries.\n• Boost immune defenses, protecting your system against outside pathogens.",
          "財運": "• Use legal or protective means to recover debts, safeguarding your assets.\n• Implement strict risk management to block potential financial leaks decisively.",
          "人際": "• Say no with courage to those who overstep or exploit your kindness.\n• Show your resolute strength, setting clear boundaries that command respect."
        }
      },
      6: {
        name: "Completing",
        text: "The virtue of humility has reached its highest expression, winning wide resonance and praise. Now is the ideal moment to turn this humility inward to discipline personal desires and pride. Achieving self-mastery through quiet self-reflection brings complete, enduring fulfillment.",
        guide: "Humility reaches its peak; look within to master self-will and achieve true fulfillment.",
        focus: {
          "感情": "• Reflect deeply on your own shortcomings in love, growing your capacity to care.\n• Reach a profound heart-to-heart harmony with your partner, walking together in peace.",
          "事業": "• Focus on internal optimization and refining team culture, aiming for excellence.\n• Transcend past limits, building an exceptional team grounded in solid character.",
          "健康": "• Deepen internal wellness and mindfulness, achieving complete harmony from within.\n• Keep your heart pure and untangled, enjoying the serene blessings of vibrant longevity.",
          "財運": "• Wealth management reaches effortless mastery, with balanced income and stability.\n• Channel prosperity into generous community benefit, lifting up the wider world.",
          "人際": "• Highly respected and loved by all, you stand as an inspiring moral example.\n• In the quiet realm of non-striving, harvest the purest and most enduring love."
        }
      }
    },
    yu: {
      1: {
        name: "Emerging",
        text: "At the very start or upon achieving a minor early success, you cannot resist boasting and loudly broadcasting your delight. This indulgence in superficial vanity and self-satisfaction will quickly invite trouble and misfortune. Reign in restless pride early; avoid turning early joy into sorrow.",
        guide: "Boasting over early pleasure invites trouble; rein in restless pride early to avoid sorrow.",
        focus: {
          "感情": "• Avoid showing off new romance everywhere, protecting connection from outside noise.\n• Focus on real, grounded moments together, letting go of superficial vanity.",
          "事業": "• Do not become complacent over early wins; stay alert to competitors moving in.\n• Work with quiet, steady focus, avoiding boasting about results in public.",
          "健康": "• Avoid late-night partying or overeating driven by fleeting excitement, guarding vitality.\n• Keep your emotional state balanced, preventing extreme highs and lows from straining energy.",
          "財運": "• Avoid reckless shopping or adding high-risk bets after minor early gains.\n• Protect small early returns, keeping tight discipline on spending to prevent waste.",
          "人際": "• Curb boasting and showing off to avoid stirring up unnecessary envy and drama.\n• Stay modest and low-key, enjoying personal happiness without making a spectacle."
        }
      },
      2: {
        name: "Rooting",
        text: "Your mind stands firm as bedrock, unmoved by fleeting indulgence and noisy crowds. You discern subtle early trends and respond within a single day without waiting for the day to end. Holding fast to this clear, balanced self-discipline brings exceptional good fortune and smooth success.",
        guide: "Firm as stone without waiting a day; clear self-discipline and early discernment bring great fortune.",
        focus: {
          "感情": "• Stand firm on relationship principles, unmoved by temporary outside temptations.\n• Notice your partner's subtle needs promptly, responding with caring warmth.",
          "事業": "• Keep independent, clear judgment without getting swept away by team hype.\n• Spot emerging market shifts early and adjust tactics quickly to seize the advantage.",
          "健康": "• Manage your lifestyle with disciplined care, avoiding bad habits.\n• Adjust routines at the first sign of minor physical fatigue to keep strong vitality.",
          "財運": "• Stay calm during market bubbles and feverish hype, taking profits in time.\n• Stick to independent financial rules; your assets stand solid as rock against turbulence.",
          "人際": "• Refuse to follow shallow crowd revelry, keeping your clear personal boundaries.\n• Make friends with disciplined, clear-minded peers, avoiding indulgent crowds."
        }
      },
      3: {
        name: "Testing",
        text: "Looking up and depending on others' approval for joy, hesitating and losing initiative, will only bring deep regret. If you awaken early and turn back decisively, ending people-pleasing and dependent behavior, you will prevent lingering pain. Reclaim full ownership of your own life.",
        guide: "Hesitation and depending on others bring regret; awaken early and stand independent to avoid sorrow.",
        focus: {
          "感情": "• Stop losing yourself in people-pleasing just to win your partner's validation.\n• Step into independent self-respect; your connection will regain genuine honor.",
          "事業": "• Break dependency on single mentors or resources; build your own core skills.\n• Stop dragging your feet on key decisions; seize current windows to act boldly.",
          "健康": "• Break free from dependent anxiety, taking proactive charge of your daily health.\n• Rebuild physical and mental autonomy through independent workouts and routines.",
          "財運": "• Stop blindly following so-called expert tips; take full responsibility for your money.\n• Clean up compromised financial ties that depend on others, managing money independently.",
          "人際": "• Step away from shallow relationships where you must flatter to fit in.\n• Build balanced, self-respecting friendships, no longer looking up to others for approval."
        }
      },
      4: {
        name: "Choosing",
        text: "Standing as the true fountain of joy and cohesion, your charisma and generous spirit ignite enthusiasm across the community. Step forward boldly without harboring the slightest doubt. Aligned companions will gather around you like a hairpin gathering strands of hair, co-creating great works.",
        guide: "Great gains flow from authentic joy; harbor no doubt, as allies gather around your warmth.",
        focus: {
          "感情": "• Serve as a joyful source of warmth in love; your connection feels lively and sweet.\n• Drop doubts and give your whole heart to love, trusting each other completely.",
          "事業": "• Radiate core leadership charisma, rallying team morale and diverse resources.\n• Advance grand visions with resolve, drawing top talent to join the mission.",
          "健康": "• Radiate vibrant energy and high spirits; body and mind feel inspiringly healthy.\n• Lead friends in group fitness and sports, enjoying the fun of healthy living.",
          "財運": "• Create substantial commercial value through strong leadership and resource synergy.\n• Well-suited for heading major investment initiatives, sharing rich dividends with all.",
          "人際": "• Become the unifying soul of your group, drawing allies with easy warmth.\n• Treat others with open generosity, winning heartfelt trust and loyalty."
        }
      },
      5: {
        name: "Manifesting",
        text: "Surrounded by heavy indulgence and external temptation, you feel constrained like living with a chronic ailment. Yet, it is precisely this persistent alert awareness and outer boundary that keeps you vigilant, preventing reckless mistakes and sustaining long-term survival. Turn limits into practice.",
        guide: "Persistent alertness amid temptation preserves life; turn boundaries into lasting safety.",
        focus: {
          "感情": "• Face lingering relationship friction or outside temptations with self-disciplined alertness.\n• Do not run from practical issues, guarding core commitments through continuous care.",
          "事業": "• Keep calm composure in hyped or frothy industries, refusing to rush blindly.\n• Endure temporary constraints and pressure, preserving long-term survival vitality.",
          "健康": "• Take chronic imbalances or sub-health conditions seriously; do not drop your guard.\n• Follow health routines carefully, sustaining steady vitality through moderation.",
          "財運": "• Control risks strictly during market turbulence, avoiding all-or-nothing gambles.\n• Use defensive, conservative strategies, keeping liquidity safe over the long haul.",
          "人際": "• Keep a clear, observant mind amid noisy and restless social environments.\n• Avoid both over-attachment and hostility, maintaining safe boundaries for long-term peace."
        }
      },
      6: {
        name: "Completing",
        text: "Indulgence in sensory pleasure and distraction has reached a blinding extreme. However, if you awaken at this final threshold and transform your lifestyle completely, this timely awakening will wipe away all past faults. Drop empty revelry and return to a clear, purposeful path.",
        guide: "Awaken in time from blinding indulgence; turning your life around clears away all blame.",
        focus: {
          "感情": "• Say goodbye to shallow dating games and ambiguous triangles, returning to devotion.\n• Cherish the companion who truly stands by you, rebuilding healthy relationship habits.",
          "事業": "• Regain clarity after project hype, disciplining operations and realigning focus.\n• Stop burning cash on vanity expansion, returning to grounded profitability.",
          "健康": "• Decisively break habits of late nights, heavy drinking, or digital overindulgence.\n• Reset your daily rhythms completely, allowing your exhausted body to recover.",
          "財運": "• Stop impulsive, hedonistic spending in time to head off financial trouble.\n• Take stock of remaining funds, returning to modest, grounded saving habits.",
          "人際": "• Walk away from shallow drinking buddies that drain resolve, keeping your circle clean.\n• Present a clear, grounded presence to the world, earning back genuine respect."
        }
      }
    },
    sui: {
      1: {
        name: "Emerging",
        text: "Circumstances are shifting, and original positions and targets need to adapt with the times. Step outside your private door, reaching out to connect with people across diverse fields. Holding to what is right without clinging to rigid forms will bring exceptional results and accomplishments.",
        guide: "Embrace good changes readily; step out to make diverse connections for great fortune.",
        focus: {
          "感情": "• Break out of rigid dating habits, exploring fresh and creative date ideas.\n• Open your heart to the outside world; singles should join social events to expand options.",
          "事業": "• Adjust tactics flexibly as project goals shift; avoid clinging to outdated plans.\n• Connect across teams with an open mind, opening up exciting new work chapters.",
          "健康": "• Adjust fitness and nutrition plans promptly as seasons change to sustain energy.\n• Try fresh, uplifting lifestyle habits, infusing new vitality into your daily routine.",
          "財運": "• Shift investment strategies alongside market trends without clinging to one asset.\n• Look flexibly for emerging revenue streams, opening balanced new earnings.",
          "人際": "• Connect with friends of varied skills and backgrounds, expanding your social horizon.\n• Show an easygoing, friendly presence, winning the warmth of new companions."
        }
      },
      2: {
        name: "Rooting",
        text: "Clinging closely to immature, short-sighted companions will cause you to miss the chance to follow mature, wise leaders. Facing choices of value, recognize who can truly help you grow. Do not compromise higher life directions just for temporary ease and shallow flattery.",
        guide: "Clinging to the immature loses the wise mentor; choose who you follow wisely.",
        focus: {
          "感情": "• Beware of staying in immature, casual flings that cost you genuine, mature love.\n• Choose to walk alongside a responsible partner with whom you can grow together.",
          "事業": "• Avoid spending time and energy on petty, unproductive, or immature tasks.\n• Choose to follow visionary, seasoned mentors to elevate your professional scope.",
          "健康": "• Break free from childish bad habits like binge eating or late-night gaming.\n• Follow grounded, professional health advice, building mature self-discipline.",
          "財運": "• Stay away from petty, speculative get-rich traps; focus on steady long-term assets.\n• Drop wasteful micro-spending habits, building real capital for your future.",
          "人際": "• Choose your daily inner circle with care, avoiding friends who drain ambition.\n• Align with wise, uplifting mentors and friends, learning from their example."
        }
      },
      3: {
        name: "Testing",
        text: "Let go of attachment to immature connections and choose to walk alongside capable, visionary leaders. Following the guidance of the noble will help you achieve the growth and success you seek. Hold to balanced principles and stay grounded in your seat; moving forward brings clear gains.",
        guide: "Leave the immature to follow the wise, securing what you seek with good fortune.",
        focus: {
          "感情": "• Part with draining, unready dynamics, choosing a mature partner ready to build.\n• Set long-term shared goals together, moving forward step by step on solid ground.",
          "事業": "• Let go of peripheral tasks, pouring energy into core strategic business and teams.\n• Receive dedicated coaching from senior leaders, unlocking major career breakthroughs.",
          "健康": "• Drop unhealthy routines, following structured, professional wellness plans.\n• Physical stamina improves steadily, restoring mental clarity and buoyant energy.",
          "財運": "• Align with professional institutions or seasoned advisors for structured investing.\n• Focus capital into high-quality market leaders, ensuring stable and forward-looking gains.",
          "人際": "• Your social circle upgrades naturally, connecting you with mentors who lift you higher.\n• Grow quickly under the guidance of respected leaders, forging deep alliances."
        }
      },
      4: {
        name: "Choosing",
        text: "Adapting to the times has brought followers and popularity, but harboring selfish ambition and chasing petty gain hides danger even amid success. Keep pure integrity in your heart and walk in the clear light of day. Recognizing traps behind easy perks ensures complete safety without blame.",
        guide: "Gains come from following, but avoid selfish greed; walk in the open light safely.",
        focus: {
          "感情": "• Avoid letting material calculations or chasing external perks cloud your love.\n• Treat each other with pure sincerity, standing strong against worldly temptations.",
          "事業": "• Enjoy project wins while avoiding cutting corners or grabbing improper gains.\n• Maintain open professional ethics, avoiding messy disputes over interests.",
          "健康": "• Beware of risks from unverified quick-fix remedies or extreme supplements.\n• Return to simple, wholesome nutrition and living, sustaining natural balance.",
          "財運": "• Hold strict compliance baselines during profits, rejecting gray-market income.\n• Stay clear-headed; avoid letting greed cloud your mind and lead you into traps.",
          "人際": "• Share profits openly and fairly during collaborations without taking advantage.\n• Show clean, honorable character, dissolving suspicion and jealousy around you."
        }
      },
      5: {
        name: "Manifesting",
        text: "Aligning with high virtue and truth with complete sincerity brings supreme good fortune. Your integrity and goodness flow like sweet spring water, effortlessly drawing all worthy and beautiful things toward you. Flowing with natural universal laws along the right path brings supreme joy and blessings.",
        guide: "Aligning with high virtue with pure sincerity brings complete, abundant blessings.",
        focus: {
          "感情": "• Love is pure, sweet, and deeply aligned; enjoy profound soul resonance together.\n• Treat each other with total sincerity, stepping together into lifelong commitment.",
          "事業": "• Lead projects to complete victory through exceptional virtue and trust, winning praise.\n• Teams pull together in unity, lifting operational results to a brilliant peak.",
          "健康": "• Body, mind, and spirit are aligned; vitality is high, complexion is glowing, and energy flows.\n• Savor a healthy, wholesome lifestyle, radiating uplifting and positive energy.",
          "財運": "• Honest business practices yield rich and sustainable returns; abundance flows in.\n• Well-suited for holding long-term, socially responsible, high-reputation assets.",
          "人際": "• Highly respected for noble character, you draw supportive mentors and allies.\n• Stand as a trusted role model and inspiring center within your community."
        }
      },
      6: {
        name: "Completing",
        text: "The highest expression of following and commitment is forming an unbreakable, lifelong bond of devotion. Like binding kindred spirits together with sturdy cords, even the sovereign honors this devotion with solemn ceremonies on the western mountain. This unshakeable loyalty and promise achieves enduring fulfillment.",
        guide: "Bound together in unshakeable alliance; total devotion touches the highest realms.",
        focus: {
          "感情": "• Seal a lifelong, enduring commitment of shared devotion, growing old together.\n• Love transcends worldly trials, becoming the most reliable shelter in life.",
          "事業": "• Build an unshakeable bond of shared purpose and shared value with core teams.\n• Receive top industry honors and lifetime achievement recognition for your work.",
          "健康": "• Long-practiced wellness habits bear rich fruit, ensuring lasting vitality and peace.\n• Achieve complete harmony with natural rhythms, resting in deep inner calm.",
          "財運": "• Establish an enduring wealth foundation that passes down lasting security.\n• Invest in noble endeavors carrying multi-generational value, securing lasting success.",
          "人際": "• Forge friendships of absolute trust and loyalty that withstand every test.\n• Your reputation for character is celebrated widely, setting an inspiring example."
        }
      }
    },
    gu: {
      1: {
        name: "Emerging",
        text: "Shouldering the responsibility of remedying decay left behind by predecessors; with a capable, caring successor to take up the work, no blame falls on the past. Facing accumulated legacy issues brings initial growing pains, but stepping up boldly to reform brings good fortune.",
        guide: "Take responsibility to heal legacy decay; brave reform clears away past fault.",
        focus: {
          "感情": "• Heal relationship baggage from family history, breaking unhelpful cycles.\n• Work through past relationship friction together, rebuilding healthy foundations.",
          "事業": "• Take over messy, stalled projects and showcase your exceptional turnaround skills.\n• Honor past foundations while updating workflows boldly to give projects new life.",
          "健康": "• Address hereditary sub-health tendencies proactively, taking preventive steps early.\n• Break long-standing poor habits, breathing fresh energy into your system.",
          "財運": "• Clear legacy debts and fix financial leaks, restructuring your balance sheet.\n• Revitalize dormant assets and projects, unlocking fresh revenue potential.",
          "人際": "• Step up to heal old family or social divides, clearing lingering misunderstandings.\n• Win high praise from elders and peers through your accountable, mature posture."
        }
      },
      2: {
        name: "Rooting",
        text: "When tending to subtle, emotionally rooted issues left by the past, adopt a gentle, flexible, and considerate approach rather than heavy-handed force. Meet emotional entanglements and domestic friction with empathy and patience, holding to balanced fairness to heal without wounding.",
        guide: "Use gentle warmth to heal subtle, internal decay, finding the balanced path.",
        focus: {
          "感情": "• Avoid harsh blaming when untangling emotional friction; offer gentle care.\n• Empathize with your partner's vulnerabilities, easing home tension with soft grace.",
          "事業": "• Use gentle coaching when smoothing internal interpersonal friction and team habits.\n• Avoid aggressive administrative mandates, building consensus for change through dialogue.",
          "健康": "• Care for digestion or hormonal shifts caused by stress using gentle, warm foods.\n• Release emotional vulnerability through gentle counseling and open sharing.",
          "財運": "• Prioritize harmony when resolving family financial disputes, offering fair give-and-take.\n• Optimize spending structures gradually rather than making abrupt, disruptive cuts.",
          "人際": "• Point out mistakes to close friends tactfully, protecting their dignity.\n• Smooth over social awkwardness with thoughtful care, protecting valued bonds."
        }
      },
      3: {
        name: "Testing",
        text: "In reforming old neglect, your methods may have been slightly sharp and rushed, causing minor complaints and brief regret. However, because your core intent aligns fully with justice and the greater good, no lasting harm will occur, and your reform goals will succeed.",
        guide: "Small regrets from slightly rushed reform do not spoil the righteous direction.",
        focus: {
          "感情": "• Tone may have been sharp when discussing changes; soothe things with warmth afterward.\n• Minor friction was worth enduring, as it resolved core chronic relationship knots.",
          "事業": "• Organizational reforms were swift; short-term friction cleared out root problems.\n• Hold firm to core principles, letting real progress quiet temporary doubts.",
          "健康": "• Minor initial discomfort during a strict detox or fitness routine leads to long-term health.\n• Stick to disciplined health habits, moving past the early adaptation phase.",
          "財運": "• Cleaning out poor assets caused small short-term losses, but prevented bigger bleed.\n• Cut ineffective expenses decisively; brief tightening leaves finances far healthier.",
          "人際": "• Disciplining team rules caused slight pushback, but protected overall team interests.\n• Move with upright honesty; time will show your good intentions clearly."
        }
      },
      4: {
        name: "Choosing",
        text: "Tolerating inherited decay with passive neglect and turning a blind eye will only let problems fester, inviting future shame and hardship. Indulgence feeds corruption, and running away solves nothing. If you do not resolve to clean things up now, you will find yourself cornered later.",
        guide: "Tolerating decay brings future shame; passive neglect will only worsen the situation.",
        focus: {
          "感情": "• Tolerating chronic issues in relationships only deepens the pain over time.\n• Break the silence and face reality courageously; stop deceiving yourself.",
          "事業": "• Overlooking project flaws or protocol breaches invites disaster; correct them early.\n• Stop delaying and start systematic review and cleanup processes immediately.",
          "健康": "• Ignoring warning signs or enabling bad habits invites serious illness later.\n• Schedule medical checkups and break harmful habits promptly without delay.",
          "財運": "• Leaving bad debts and financial leaks unattended will break your cash flow.\n• Stop funding bottomless, ineffective investments immediately to cut losses.",
          "人際": "• Constantly enabling a friend's destructive behavior will drag you down in shame.\n• Draw clear lines and set boundaries; stop paying for others' irresponsible mistakes."
        }
      },
      5: {
        name: "Manifesting",
        text: "The endeavor to heal and reform past neglect achieves outstanding success and wide praise. Using balanced wisdom, skillful diplomacy, and noble character, you resolved crises, reversed decline, and earned universal admiration. Accomplishments are fulfilled with lasting honor.",
        guide: "Reforming decay with balanced wisdom earns great praise and lasting honor.",
        focus: {
          "感情": "• Successfully resolve long-standing family friction, creating a warm, fresh home life.\n• Love grows richer through shared trials, earning the warm praise of elders.",
          "事業": "• Complete organizational turnaround, lifting revenue and winning industry awards.\n• Recognized as a transformative leader, with management talent widely admired.",
          "健康": "• Systematic wellness routines succeed; chronic issues clear and vitality is renewed.\n• Body and mind feel light, balanced, and radiant with healthy energy.",
          "財運": "• Asset restructuring and debt recovery succeed, yielding rich returns.\n• Establish a healthy, efficient wealth-growth cycle that delivers satisfying gains.",
          "人際": "• Settle historical conflicts smoothly, winning heartfelt gratitude and respect from all.\n• Build an unshakeable reputation for integrity, becoming a trusted leader."
        }
      },
      6: {
        name: "Completing",
        text: "Choosing not to serve kings and princes, pursuing instead a higher spiritual vision and personal transcendence. Having fulfilled worldly responsibilities and healed past decay, step back into an unhurried, elevated life focused on noble, spiritual aims. This elevated character embodies the highest nobility.",
        guide: "Transcend worldly titles to pursue higher ideals; hold your noble purpose high.",
        focus: {
          "感情": "• Love transcends material conditions, reaching deep soul companionship.\n• Respect each other's noble aspirations, living in mutual care and gentle reverence.",
          "事業": "• Step down from leadership without clinging to power, focusing on purpose-driven work.\n• Serve as a lifetime honorary advisor or spiritual mentor with elevated vision.",
          "健康": "• Leave worldly career stresses behind; body, mind, and spirit find serene peace.\n• Focus on spiritual mindfulness and quiet meditation, enjoying long, peaceful vitality.",
          "財運": "• Money mindset reaches complete inner freedom, no longer bound by numbers.\n• Channel assets into education, culture, spirituality, or charitable foundations.",
          "人際": "• Respected for noble, unhurried character, admired by leaders everywhere.\n• Step away from shallow networking, bonding with a few high-minded soul friends."
        }
      }
    },
    lin: {
      1: {
        name: "Emerging",
        text: "Leading others forward with deep sincerity and inspiring presence; holding to what is right brings great good fortune. At the first arrival of opportunity, advance hand in hand with aligned companions, starting with pure, upright intent. The positive energy you radiate unites powerful strength, opening a bright path.",
        guide: "Inspire allies with deep sincerity to advance together; holding to truth brings great fortune.",
        focus: {
          "感情": "• Attracted to each other with genuine sincerity; romance begins sweet and aligned.\n• Understand each other's hearts, building the relationship with care and honesty.",
          "事業": "• Unite team consensus at launch, driving the mission forward in harmony.\n• Uphold upright, fair principles in business, achieving smooth, triumphant starts.",
          "健康": "• Vitality returns across the body; ideal for building consistent workout habits.\n• Keep an open, optimistic mindset, filling body and mind with buoyant energy.",
          "財運": "• Launch new investment initiatives with trustworthy partners; returns look bright.\n• Stick to transparent, compliant revenue channels, steadily growing earned income.",
          "人際": "• Radiate genuine, warm charisma, quickly connecting with aligned, high-caliber peers.\n• Inspire positive momentum within your circle; popularity rises swiftly."
        }
      },
      2: {
        name: "Rooting",
        text: "Inspiring others with generous, selfless sincerity brings good fortune on all paths. Though circumstances are smooth, you stay anchored in balanced humility, neither arrogant nor rushed. Offering hands-on leadership with warm, steady strength allows all initiatives to flourish and succeed under your care.",
        guide: "Lead with generous balance and hands-on care; all paths advance with great fortune.",
        focus: {
          "感情": "• Nourish your partner with deep, steady love; romance enters a sweet, harmonious peak.\n• Trust each other deeply, laying solid foundations for your shared future.",
          "事業": "• Provide hands-on guidance on the frontlines; workflows move ahead smoothly.\n• Lead with approachable warmth; high team morale drives consistent wins.",
          "健康": "• Circulation is abundant and body feels light; health sits at a wonderful baseline.\n• Maintain healthy workouts and meal rhythms, staying vibrant and resilient.",
          "財運": "• Investment vision is sharp and aligned with trends, bringing steady asset gains.\n• Cash flow is exceptionally healthy, ideal for mid-to-long-term strategic growth.",
          "人際": "• Treat others with generous sincerity, earning deep trust and affection.\n• Relations with leaders and teams are harmonious; support arrives from all sides."
        }
      },
      3: {
        name: "Testing",
        text: "Approaching others with sweet, flattering words while lacking real sincerity and responsibility brings no lasting benefit. However, if you recognize this shallow people-pleasing early, feel healthy remorse, and correct your ways, no blame will follow. Realignment is your wisest move.",
        guide: "Sweet talk brings no gain; early remorse and reform clear away fault.",
        focus: {
          "感情": "• Stop relying only on sweet talk without following through on real actions.\n• Replace hollow promises with genuine care and accountability to rebuild trust.",
          "事業": "• Stop superficial flattery at work; focus on leveling up your real competence.\n• Address proposal flaws proactively, quieting doubts with solid results.",
          "健康": "• Watch for sugar overconsumption or binge eating that strains metabolism.\n• Adjust dietary habits promptly, returning to clean eating to protect health.",
          "財運": "• Beware of tempting investment pitches that lack real operational substance.\n• Exit flashy speculative schemes promptly, returning to grounded money management.",
          "人際": "• Step away from flattering, insincere social habits; treat people with honesty.\n• Own up to past mistakes with courage, rebuilding an authentic personal reputation."
        }
      },
      4: {
        name: "Choosing",
        text: "Visiting the frontline in person to guide with humility, working closely alongside capable talent without blame. Lay down status to take action personally, stepping into the community to gain first-hand clarity and the deepest public support.",
        guide: "Lead on the ground and empower talent humbly; united efforts bring complete safety.",
        focus: {
          "感情": "• Step into your partner's real daily world, offering attentive, full presence.\n• Share daily chores personally, showing authentic love through helpful action.",
          "事業": "• Leaders should visit the frontline to resolve practical challenges on the ground.\n• Treat skilled specialists with respect, ensuring smooth, unblocked execution.",
          "健康": "• Put daily wellness plans into action yourself rather than putting things off.\n• The body stays strong and resilient through consistent everyday workouts.",
          "財運": "• Review financial statements and contract terms personally to keep accounts clean.\n• Manage personal assets with grounded care, avoiding unmonitored blind delegations.",
          "人際": "• Approachable and free of pretensions, loved by teams and frontline staff.\n• Build direct, deep partnerships with exceptional talent, succeeding together."
        }
      },
      5: {
        name: "Manifesting",
        text: "Guiding and overseeing with sovereign wisdom, understanding the art of empowering the capable—this is the noble style of a great ruler, bringing great good fortune. You do not micromanage every detail, but design brilliant structures and delegate with trust, guiding flourishing growth through effortless wisdom.",
        guide: "Empower the capable with sovereign wisdom; visionary leadership brings great fortune.",
        focus: {
          "感情": "• Offer your partner full trust and personal breathing room, growing in wisdom.\n• Nurture home and relationship with wisdom, enjoying peaceful harmony.",
          "事業": "• Show broad vision, building excellent structures and empowering your best talent.\n• Lead your organization into flourishing prosperity as an admired leader.",
          "健康": "• Master balanced, holistic wellness wisdom, tuning body and mind with ease.\n• Keep an unhurried, clear mental state, supporting vibrant longevity and energy.",
          "財運": "• Allocate capital with strategic long-term vision, yielding rich returns.\n• Build sustainable wealth cycles through sound systems and teams, securing lasting gains.",
          "人際": "• Admired widely for wisdom and leadership, serving as a trusted mentor to many.\n• Integrate top-tier talent and resources, building a powerful network."
        }
      },
      6: {
        name: "Completing",
        text: "Treating all life and people with profound generosity, compassion, and sincerity brings great good fortune without blame. Even at the pinnacle of success or as projects conclude, you maintain that original deep care. This lifelong, heartfelt generosity will gather lasting blessings and merit.",
        guide: "Carry through with deep generosity and compassion; lasting blessings follow.",
        focus: {
          "感情": "• Love stays fresh over time; walk together through life with deep devotion.\n• Step into lasting marital harmony, enjoying blessings that inspire all.",
          "事業": "• Fulfill historic missions, earning lifetime acclaim for your noble leadership.\n• Build solid, enduring institutions and succession systems with lasting success.",
          "健康": "• Body and mind rest in compassionate, peaceful harmony, holding deep vitality.\n• Keep your heart clean and selfless, enjoying a healthy, peaceful, and long life.",
          "財運": "• Wealth reaches full abundance, transforming into enduring family legacy.\n• Give back to society through generous service, enjoying rich spiritual fulfillment.",
          "人際": "• Revered and loved by all, your generous leadership is remembered for years.\n• Social connections are effortless and unblocked, surrounded by universal respect."
        }
      }
    },
    guan: {
      1: {
        name: "Emerging",
        text: "Viewing the world with the short-sighted vision of a child, lacking broad perspective. For the uninitiated, this narrow view brings no immediate fault, but for a noble leader seeking greatness, such limited vision is a regrettable flaw. Step beyond the narrow view of the frog in the well and widen your horizon.",
        guide: "Break through narrow, short-sighted views and widen your broad perspective.",
        focus: {
          "感情": "• Avoid bickering over petty everyday trifles with your partner.\n• Look at the shared future from a long-term lens with mature patience.",
          "事業": "• Drop the short-sighted urge for quick gains; learn to track broad trends.\n• Expand your mindset, understanding the whole organization and industry.",
          "健康": "• Recognize the compound effect of small daily habits over time.\n• Avoid chasing surface wellness fads; look at health from a balanced view.",
          "財運": "• Avoid frequent day-trading over minor price swings that eat away capital.\n• Build a long-term value mindset, ignoring daily market chatter.",
          "人際": "• Avoid gossiping about others with narrow bias; keep a spacious heart.\n• Connect with broad-minded mentors who can expand your worldview."
        }
      },
      2: {
        name: "Rooting",
        text: "Peering at the world through a narrow crack in the door, your view remains confined by a closed entrance. This limited vantage point suits private domestic duties and quiet personal devotion, but proves inadequate for stepping into the wide public arena. Open the door boldly to see the vast landscape.",
        guide: "Break out of narrow private views and step out into the wide open world.",
        focus: {
          "感情": "• Cherishing cozy home life is wonderful, but engage with the outside world too.\n• Expand your horizons together, keeping isolation from dulling relationship joy.",
          "事業": "• Honing your specialty is vital, but guard against departmental silos.\n• Look beyond your own desk to understand the wider market and industry.",
          "健康": "• Step outdoors and look into the far distance to relax your eyes and mind.\n• Watch for eye strain, near-sightedness, and poor circulation from sitting.",
          "財運": "• Avoid limiting your investment view to familiar, narrow sectors.\n• Study cross-industry and global market trends to expand your portfolio.",
          "人際": "• Step out of your cozy circle to meet people from diverse walks of life.\n• Drop narrow prejudices, welcoming diverse viewpoints with an open mind."
        }
      },
      3: {
        name: "Testing",
        text: "Examining the ebb and flow of your own life journey and past choices to decide whether to advance or retreat. This is deep self-reflection in action. Rather than drifting with the crowd, adjust your steps based on self-knowledge and objective reality to ensure steady, lasting progress.",
        guide: "Reflect honestly on personal progress, advancing or stepping back with wisdom.",
        focus: {
          "感情": "• Review past relationship habits honestly to correct personal blind spots.\n• Set the pace of your relationship based on where you both truly stand.",
          "事業": "• Evaluate current capabilities, resources, and limits with clear eyes.\n• Advance or step back as appropriate, keeping the initiative through self-knowledge.",
          "健康": "• Tune into how your body responds to food and exercise, adjusting routines.\n• Move within your actual physical capacity without pushing beyond your limits.",
          "財運": "• Review past investment wins and losses to refine your decision-making.\n• Adjust portfolio allocations flexibly based on your cash flow situation.",
          "人際": "• Reflect on your words in social interactions, improving communication.\n• Know when to advance or step back in social dynamics to stay safe."
        }
      },
      4: {
        name: "Choosing",
        text: "Gaining deep insight into the culture, customs, and broader tides of the land, demonstrating exceptional vision and wisdom. One with such panoramic insight is well-suited to serve as a revered guest and trusted advisor to the sovereign. Answer the call of the times and bring your vision to life.",
        guide: "Understand the broader tides of the era, bringing exceptional foresight to light.",
        focus: {
          "感情": "• Bring broad life wisdom to guide your partner and family over the long run.\n• Walk together toward meaningful life goals with shared values and respect.",
          "事業": "• Spot industry trends and policy shifts early, becoming a vital advisor.\n• Earn the trust and respect of industry leaders, fulfilling your ambitions.",
          "健康": "• Adopt forward-looking, evidence-based wellness principles to support longevity.\n• Align your daily rhythms with the natural seasons, keeping vitality high.",
          "財運": "• Spot major economic and technological trends to capture long-term growth.\n• Invest in foundational future assets that compound alongside broad tailwinds.",
          "人際": "• Build friendships with visionary thinkers, elevating your social circle.\n• Earn wide respect for your insights, serving as an influential mentor."
        }
      },
      5: {
        name: "Manifesting",
        text: "The noble leader continuously examines their own conduct and real impact upon the community. When you lead by example and live with upright character, you walk without blame. People are naturally inspired by your integrity, aligning willingly like grass bending before a gentle wind.",
        guide: "Set a living example of integrity, inspiring and uplifting others through virtue.",
        focus: {
          "感情": "• Lead by example with maturity and care, deeply touching your partner.\n• Stand as a dependable anchor of inspiration in the home, fostering harmony.",
          "事業": "• Radiate exceptional leadership, inspiring the team through personal integrity.\n• Set industry standards of excellence, earning wide acclaim for your work.",
          "健康": "• Body and mind reflect deep inner discipline, radiating grounded vitality.\n• Maintain balanced habits with care, keeping body and spirit free of strain.",
          "財運": "• Build substantial wealth through exceptional integrity and real value.\n• Manage assets with transparent honesty, creating positive community impact.",
          "人際": "• Highly respected as an inspiring leader, your word carries natural weight.\n• Guide others with generous mentorship, earning widespread affection.",
          "其他/不確定": "【Clear Contemplation】 Examine your own life and lead by example; inspiring others through noble character brings complete safety.",
          "未選": "【Clear Contemplation】 Examine your own life and lead by example; inspiring others through noble character brings complete safety."
        }
      },
      6: {
        name: "Completing",
        text: "Transcend personal gain and loss, looking upon the essence of all living things with quiet, universal compassion. Holding the welfare of all in your heart and observing the dance of life with selfless clarity brings no blame. This elevated peace and boundless goodwill fulfills your journey.",
        guide: "Transcend the ego to observe life with compassion, reaching the highest peace.",
        focus: {
          "感情": "• Love reaches an expansive, unconditional depth beyond possessiveness.\n• Walk together as soul companions, sharing a peaceful and compassionate life.",
          "事業": "• Career purpose transcends personal ambition, dedicated to serving the whole.\n• Serve as a revered mentor and guiding light, leaving a lasting legacy.",
          "健康": "• Body and spirit achieve serene clarity, enjoying peaceful longevity.\n• Release worldly worries, savoring lasting mental stillness and health.",
          "財運": "• Channel wealth into charitable foundations and cultural causes that uplift all.\n• Enjoy deep inner abundance and freedom beyond material attachment.",
          "人際": "• Revered and loved by generations, your moral presence warms all around you.\n• Walk with unblocked grace, touching every soul you meet with kindness."
        }
      }
    },
    shike: {
      1: {
        name: "Emerging",
        text: "Feet are fitted with wooden stocks to cover the toes, symbolizing timely correction and restraint when a minor fault first appears. This early discipline prevents greater mistakes down the road. Learning the lesson early and checking your steps brings complete safety from future harm.",
        guide: "Early discipline corrects small faults; checking mistakes early brings safety.",
        focus: {
          "感情": "• Set clear boundaries at the first sign of friction, correcting bad habits early.\n• Welcome your partner's feedback with an open mind before issues grow.",
          "事業": "• Catch small operational misalignments promptly, upholding quality standards.\n• Take responsibility for early mistakes, learning lessons to build skill.",
          "健康": "• Address minor fatigue or symptoms immediately rather than ignoring them.\n• Watch for ankle and foot sprains, taking care during daily movement.",
          "財運": "• Patch small budget leaks right away, paying fees and bills promptly.\n• Check impulsive spending urges early, sticking to disciplined budgets.",
          "人際": "• Accept sincere feedback from friends, adjusting your words and actions.\n• Respect social boundaries, avoiding careless words that spark friction."
        }
      },
      2: {
        name: "Rooting",
        text: "Biting into tender meat, the bite is so deep that the nose sinks in. When correcting obvious faults, your approach may seem sharp and direct, but because your stance is fair and your motives align with justice, no blame falls upon you. Enforce boundaries firmly to restore order.",
        guide: "Enforce boundaries with firmness and justice; though sharp, fair intent leaves no blame.",
        focus: {
          "感情": "• Address core relationship issues directly; though uncomfortable, it clears the air.\n• Hold your boundaries with care, guiding the relationship onto healthy ground.",
          "事業": "• Address team slackness or rule breaches decisively, setting standards.\n• Follow through on corrective steps, using strong execution to deliver results.",
          "健康": "• Follow a disciplined nutritional reset, clearing digestive heaviness.\n• Care for your nasal passages and skin, keeping your routine clean and fresh.",
          "財運": "• Take decisive steps to recover overdue funds, defending legitimate returns.\n• Cut unprofitable activities decisively, accepting small fees to stop bleeding.",
          "人際": "• Decline unreasonable demands firmly, stating your boundaries with clarity.\n• Act with open fairness without playing favorites, earning deep respect."
        }
      },
      3: {
        name: "Testing",
        text: "Biting into tough, dried meat, you encounter something bitter and unwholesome, causing minor discomfort and embarrassment. When resolving deep-seated, legacy friction, you may meet stubborn resistance or pushback. Yet as long as you walk with integrity, this minor bump will cause no real harm.",
        guide: "Face stubborn resistance with resolve; walking in integrity clears obstacles safely.",
        focus: {
          "感情": "• Touching past wounds may spark defensiveness; meet it with patience.\n• Endure short-term growing pains without abandoning necessary growth.",
          "事業": "• Meet pushback from old habits with calm resolve during reforms.\n• Tackle technical bottlenecks steadily, holding focus through the struggle.",
          "健康": "• Watch for food sensitivities, digestive upset, or reactions to medication.\n• Drink plenty of water to assist your body through natural detox cycles.",
          "財運": "• Settle old accounts or bad debts; minor losses clear away hidden risks.\n• Review contract clauses for hidden legacy issues with professional help.",
          "人際": "• Handle past friction with composure, even if minor criticism arises.\n• Stand on principle, refusing to let temporary misunderstandings shake you."
        }
      },
      4: {
        name: "Choosing",
        text: "Biting through tough meat on the bone, you uncover a sharp metal arrow. When facing hardened obstacles and complex situations, the journey is demanding, but holding to resolute, arrow-straight clarity of purpose will lead to complete triumph and good fortune.",
        guide: "Overcome hard obstacles with resolute grit; persevere through difficulty for victory.",
        focus: {
          "感情": "• Face challenging practical tests together, breaking through side by side.\n• Love grows stronger through shared trials, cementing a lasting commitment.",
          "事業": "• Tackle the toughest project challenges, showing exceptional problem-solving skill.\n• Secure key technical breakthroughs or permissions, winning decisive progress.",
          "健康": "• Healing bones, teeth, and joints takes patient, long-term dedication.\n• Overcome fatigue and laziness with a structured, progressive fitness plan.",
          "財運": "• Recover long-contested assets successfully, marking a major financial win.\n• Navigate complex commercial negotiations skillfully to secure solid returns.",
          "人際": "• Win the respect of tough counterparts through unyielding character and ethics.\n• Untangle complex factional knots, establishing exceptional credibility."
        }
      },
      5: {
        name: "Manifesting",
        text: "Biting into dried meat, you uncover precious gold, holding fast to the balanced path as you make key calls. When navigating complex challenges, staying clear, cautious, and fair leaves no room for error. Exercising authority with benevolent balance wins the trust of all.",
        guide: "Decide with balanced, golden fairness; cautious integrity brings great good fortune.",
        focus: {
          "感情": "• Resolve family matters with mature wisdom, earning your partner's respect.\n• Balance firmness with kindness, sustaining high-quality harmony over time.",
          "事業": "• Exercise key decision-making authority with balanced, fair judgment.\n• Settle the most delicate organizational disputes, earning wide praise.",
          "健康": "• Vital circulation and internal systems find harmonious, balanced flow.\n• Maintain an unhurried, calm mindset, enjoying vibrant health and peace.",
          "財運": "• Win valuable asset opportunities and partnerships through exceptional fairness.\n• Financial structures are clean, preserving capital securely like gold.",
          "人際": "• Stand as a respected arbiter and moral compass in your community.\n• Treat people with balanced fairness, building a broad and trusted network."
        }
      },
      6: {
        name: "Completing",
        text: "A heavy wooden cangue covers the neck, and the ears are stopped so that wise counsel cannot enter—extreme misfortune. If one remains obstinate and ignores clear early warnings, problems will compound into disaster. Halt stubborn self-will immediately and listen humbly to wise advice.",
        guide: "Ignoring wise advice brings disaster; stop stubborn pride and reform immediately.",
        focus: {
          "感情": "• Refusing to listen to your partner's pain pushes the connection to the brink.\n• Drop defensive pride immediately, listening with sincere, open humility.",
          "事業": "• Ignoring team risk warnings puts the entire project in jeopardy.\n• Halt non-compliant or high-risk moves, embracing thorough review.",
          "健康": "• Watch for ear pressure, ringing, head tension, or sudden cardiovascular strain.\n• Stop pushing past your physical limits; seek professional medical care.",
          "財運": "• Ignoring market risk warnings and doubling down invites heavy losses.\n• Cut risky positions to protect baseline capital; avoid gambling to break even.",
          "人際": "• Stubborn arrogance risks alienating your supporters and leaving you isolated.\n• Humble yourself to apologize sincerely, working to rebuild broken trust."
        }
      }
    },
    bi_adorn: {
      1: {
        name: "Emerging",
        text: "Adorning the feet at the outset, choosing to leave the carriage behind and walk on foot. This symbolizes an upright character that refuses empty vanity in favor of grounded steps. Relying on your own feet may lack flashy fanfare, but it carries you forward with unshakeable authenticity and safety.",
        guide: "Leave the carriage to walk on foot; stay grounded in simplicity to advance safely.",
        focus: {
          "感情": "• Connect with simple honesty, refusing to put on a show of false status.\n• Savor quiet, unpretentious dates; genuine care touches the heart.",
          "事業": "• Master foundational skills on the frontline without chasing flashy credit.\n• Deliver solid everyday work, building a reputation through real competence.",
          "健康": "• Well-suited for walking, hiking, or foot care to improve circulation.\n• Build simple, healthy lifestyle habits, lightening physical burdens.",
          "財運": "• Avoid taking on debt for luxury goods or showy cars; live within your means.\n• Focus on earning honest income through steady work, building your baseline.",
          "人際": "• Build friendships with grounded, sincere people for lasting connection.\n• Show quiet self-discipline, winning the genuine respect of your peers."
        }
      },
      2: {
        name: "Rooting",
        text: "Adorning the beard, which must follow the chin to move naturally. This symbolizes that outward refinement must rest upon a solid, inner foundation. Recognize your supporting role, follow the guidance of core leadership and real value, and avoid stealing the spotlight to achieve true harmony.",
        guide: "Align outward grace with core substance; support the main foundation with care.",
        focus: {
          "感情": "• Support your partner's pace, acting as a thoughtful companion in daily life.\n• Ground romantic gestures in genuine trust, avoiding empty showmanship.",
          "事業": "• Provide quality design, planning, and packaging to support core business.\n• Embrace your supportive role, helping the team succeed together.",
          "健康": "• Care for facial skin, hair, and jaw tension with thoughtful hygiene.\n• Keep your daily rhythm aligned with natural biological cycles.",
          "財運": "• Invest in quality branding, marketing, or design supporting solid businesses.\n• Enhance your core assets thoughtfully without detaching from fundamentals.",
          "人際": "• Help highlight your teammates' strengths, serving as a trusted partner.\n• Walk alongside wise mentors, refining your character through observation."
        }
      },
      3: {
        name: "Testing",
        text: "Refinement and elegance reach a radiant, glistening height, glowing with polished charm. While enjoying this beauty and thoughtful grace, stay anchored in inner clarity and dedication; do not let external glamour intoxicate your mind. Holding fast to inner truth brings lasting good fortune.",
        guide: "Stay true to your center amid elegance and charm; grounded virtue brings lasting fortune.",
        focus: {
          "感情": "• Enjoy romantic passion while keeping your core commitments clear.\n• Savor shared elegance while building a grounded, practical future.",
          "事業": "• Branding and marketing shine brightly, winning strong market interest.\n• Stay clear-headed amid praise, continuing to hone core product quality.",
          "健康": "• Body and mind feel refreshed and glowing; circulation and skin thrive.\n• Enjoy high-quality self-care and spa relaxation to nurture the spirit.",
          "財運": "• Creative and premium brand investments yield satisfying returns.\n• Keep a balanced financial mindset, avoiding lavish overspending.",
          "人際": "• Radiate graceful social charm, welcomed in refined gatherings.\n• Stay authentic in your friendships, never letting prestige distance you."
        }
      },
      4: {
        name: "Choosing",
        text: "Choosing between elaborate ornamentation and pure, unadorned simplicity. Riding a pure white horse that seems to fly on wings, what lies ahead is no raiding bandit, but a sincere suitor seeking a true union. Lay down suspicion and drop heavy pretense; unite in pure, authentic sincerity.",
        guide: "Drop artificial pretense to seek sincere union; pure honesty brings great fortune.",
        focus: {
          "感情": "• Look past superficial status, touched by pure, unpretentious sincerity.\n• Embrace a heartfelt commitment, building a clean and beautiful bond.",
          "事業": "• Return projects to their clean, functional core, stripping away excess fluff.\n• Welcome dedicated, capable partners to open an inspiring new chapter.",
          "健康": "• Choose natural, wholesome nutrition to keep your body feeling light.\n• Enjoy outdoor cycling, running, or activities that connect with nature.",
          "財運": "• Keep investing simple, focusing on assets with clear, solid fundamentals.\n• Step away from overly complex derivatives, keeping capital secure.",
          "人際": "• Connect with genuine friends who value honest character over status.\n• Present your simple, authentic self, drawing true companions who understand you."
        }
      },
      5: {
        name: "Manifesting",
        text: "Refining character in a quiet mountain garden, the bundle of silk offered as a gift may seem modest and small, carrying a hint of shy reserve, yet this deep sincerity touches heaven and earth. Release concern over lavish displays; genuine care brings supreme good fortune.",
        guide: "A modest gift carried by deep sincerity touches hearts, bringing great fortune.",
        focus: {
          "感情": "• Modest gestures filled with deep love warm your partner's heart.\n• Savor quiet, simple moments together, enjoying pure relationship fulfillment.",
          "事業": "• Win clients through dedicated craftsmanship and honesty, even with lean budgets.\n• Projects build an exceptional reputation in boutique niches, achieving success.",
          "健康": "• Retreat to quiet gardens or nature to refresh body and mind.\n• Enjoy simple, wholesome foods, keeping digestion calm and spirits clear.",
          "財運": "• Live with mindful moderation, building steady wealth through simple living.\n• Invest in green, sustainable, or wellness spaces for enduring value.",
          "人際": "• Approach elders and mentors with sincere modesty, earning warm guidance.\n• Step away from flashy scenes, nurturing heartfelt bonds in quiet circles."
        }
      },
      6: {
        name: "Completing",
        text: "The highest stage of refinement is shedding all artificial coloring to return to pure, unadorned white. Supreme beauty needs no decoration. When you transcend outward packaging to meet the world with pure, unadorned truth, no blame remains. Simplicity is the ultimate completion.",
        guide: "Shed all artificial pretense and return to pure simplicity, reaching highest fulfillment.",
        focus: {
          "感情": "• Love moves past surface glamour into deep, simple companionship for life.\n• Cherish each other for who you truly are, enjoying lasting peace.",
          "事業": "• Products and services achieve effortless simplicity, leading the field.\n• Strip away red tape and pretense, building success on pure capability.",
          "健康": "• Body, mind, and spirit achieve clean clarity, vibrant and refreshed.\n• Embrace a minimalist, natural lifestyle, supporting lasting longevity.",
          "財運": "• Wealth mindset reaches true inner freedom, untangled from material cravings.\n• Asset setups are clean and steady, offering real peace of mind.",
          "人際": "• Character shines with unadorned authenticity, admired by all.\n• Treat people without hidden agendas, harvesting life's purest friendships."
        }
      }
    },
    bo: {
      1: {
        name: "Emerging",
        text: "Decay begins at the very base of the bed frame, undermining its foundation; clinging blindly to old ways invites misfortune. When early signs of structural decay appear, do not ignore them or force a fragile hold. Spot the risk early and prepare your retreat to stay safe.",
        guide: "The foundation is undermined; recognize early decay and avoid forcing a hold.",
        focus: {
          "感情": "• Notice early cracks in mutual trust; do not delay addressing them.\n• Face core differences honestly, preparing your heart to handle shifts calmly.",
          "事業": "• Baseline systems or team foundations are wavering; guard against cascading issues.\n• Pause aggressive new rollouts, focusing on auditing foundational risks.",
          "健康": "• Watch for foot, ankle, or leg fatigue and poor lower-body circulation.\n• Avoid heavy impact sports; keep your feet warm and get deep rest.",
          "財運": "• Spot early signs of cash flow leaks, tightening budgets immediately.\n• Audit baseline assets for vulnerabilities to prevent capital erosion.",
          "人際": "• Notice early signs of distance among team members, staying alert.\n• Keep a low profile, avoiding bottom-level disputes that could draw you in."
        }
      },
      2: {
        name: "Rooting",
        text: "Decay creeps upward into the bed frame's edges, stripping away solid support and deepening danger. Resources and allies around you are gradually pulling back; now is not the time to show off or fight. Stay vigilant, release wishful thinking, and pull back to safe ground.",
        guide: "Support is crumbling; lose false hope and pull back quickly to protect yourself.",
        focus: {
          "感情": "• Relationship supports weaken as friction grows; avoid fighting force with force.\n• Take a temporary pause to cool down, keeping arguments from escalating.",
          "事業": "• Core partners or middle management waver; workflows stall.\n• Pull back your lines, protecting core technical assets and your central crew.",
          "健康": "• Watch for knee strain, lower-body stiffness, or worsening fatigue.\n• Keep strict sleep hours, avoiding late nights that drain your energy.",
          "財運": "• Assets face downside risk; avoid catching falling knives with leverage.\n• Enforce strict stop-losses, protecting remaining capital from larger drops.",
          "人際": "• Distance grows in social circles; observe shifts with calm composure.\n• Avoid sharing sensitive thoughts with unreliable people during vulnerable times."
        }
      },
      3: {
        name: "Testing",
        text: "Standing in an environment where everyone is drifting along with decay, you choose to break clean away from the wrong path, walking without blame. Refusing to follow destructive crowd trends and holding to your inner truth may feel lonely at first, but it keeps your integrity and safety intact.",
        guide: "Break away from the wrong path; refusing to drift with the crowd brings safety.",
        focus: {
          "感情": "• Refuse toxic relationship dynamics, standing firm against unhealthy behavior.\n• Hold to your self-respect and boundaries, earning long-term honor.",
          "事業": "• Keep professional ethics clean when teams cut corners or slack off.\n• Speak up with constructive dissent, drawing clear lines against wrongdoing.",
          "健康": "• Decline late-night partying and unhealthy habits with peers, keeping discipline.\n• Stick to wholesome nutrition and sleep, keeping immune strength steady.",
          "財運": "• Refuse to follow crowd hype into risky, speculative bubbles, protecting capital.\n• Exit shared investment projects that carry compliance risks to protect credit.",
          "人際": "• Step away from negative, drama-filled circles, willing to accept brief solitude.\n• Protect your good name, connecting with people of genuine character."
        }
      },
      4: {
        name: "Choosing",
        text: "Decay has reached the very skin of the bed's occupant—imminent danger and misfortune. Crisis is at your doorstep, and old structures are collapsing completely. There is no room left for compromise or hesitation; let go of all baggage and escape danger immediately.",
        guide: "Direct danger strikes; collapse is at hand, so make a decisive clean break.",
        focus: {
          "感情": "• If a relationship causes real, recurring harm, end it cleanly to cut losses.\n• Leave draining dynamics decisively, protecting your wellbeing and self-respect.",
          "事業": "• A venture or project faces collapse; staying only invites greater disaster.\n• Step down or wind down initiatives cleanly, preparing for a fresh start.",
          "健康": "• Seek immediate medical attention for acute symptoms or injuries.\n• Drop work burdens completely, dedicating all energy to rest and recovery.",
          "財運": "• Facing market collapse or fraud, exit positions cleanly to cut losses.\n• Accept realized losses, protecting baseline survival capital to prevent ruin.",
          "人際": "• Cut ties completely when facing malicious betrayal or slander.\n• Stay far away from hostile environments, seeking proper professional protection."
        }
      },
      5: {
        name: "Manifesting",
        text: "Like court ladies lined up in graceful order to receive favor, guiding people back to the right path with gentle wisdom brings success on all fronts. In the closing stage of decline, guide the community with spacious care and calm order, leading everyone safely across into favorable renewal.",
        guide: "Guide others with gentle order; leading people to safety turns peril into peace.",
        focus: {
          "感情": "• Soothe family worries with warm care, calming anxiety during transitions.\n• Guide your partner through life challenges; love deepens through the storm.",
          "事業": "• Manage team morale during restructuring, handling transitions with care.\n• Guide the core team through smooth acquisitions and shifts, advancing safely.",
          "健康": "• The body enters a gentle recovery phase; energy returns with mindful care.\n• Follow structured wellness plans, restoring vitality step by step.",
          "財運": "• Manage remaining assets with order, preventing further capital drain.\n• Secure safe financial backing or mentorship, riding out the economic chill.",
          "人際": "• Show exceptional coordination and warmth, earning the deep trust of teams.\n• Stand as a unifying anchor during uncertain times, drawing wide goodwill."
        }
      },
      6: {
        name: "Completing",
        text: "A single large fruit remains uneaten at the top of the tree, serving as the final seed of new life. The noble leader wins the support of the people and rides in carriages of honor, while the petty person only hastens their own collapse. Guard the pure seed of life within; winter will pass, and spring will bloom.",
        guide: "Guard the seed of renewal; enduring the winter brings spring flourishing.",
        focus: {
          "感情": "• After weathering every storm, you have protected the pure core of true love.\n• Love experiences rebirth, opening an inspiring and happy new life chapter.",
          "事業": "• Core expertise and technical capabilities survive, winning fresh market respect.\n• Win the loyalty of your team, stepping up to lead the new cycle of recovery.",
          "健康": "• Having weathered illness, the body's vital seed revives; full recovery is near.\n• Body, mind, and spirit complete deep renewal, glowing with resilient life.",
          "財運": "• Core quality assets survive the winter, becoming your strongest growth engine.\n• Prepare for explosive returns in the next economic cycle, building lasting wealth.",
          "人際": "• Reputation reaches its peak after enduring trials, widely admired by all.\n• Walk hand in hand with true companions who stood by you, greeting the bright dawn."
        }
      }
    },
    fu: {
      1: {
        name: "Emerging",
        text: "Not straying far before turning back to the right path, avoiding deep regret, brings supreme good fortune. You possess sharp self-awareness, correcting course the moment a minor misstep appears. This timely return and clear discipline will bring enduring peace and good fortune.",
        guide: "Turning back early leaves no room for regret; self-correcting promptly brings supreme fortune.",
        focus: {
          "感情": "• Apologize promptly at the first sign of bickering, never letting friction linger overnight.\n• Take back impulsive, sharp words quickly, guarding your connection with warmth.",
          "事業": "• Adjust plans the moment you spot deviations, preventing wasted resources.\n• Stay sharp and correct errors early, steering the project back onto solid tracks.",
          "健康": "• Catch up on sleep immediately after a late night to restore energy quickly.\n• Return to clean, light eating at the first sign of digestive heaviness.",
          "財運": "• Close minor miscalculated positions promptly to preserve core capital.\n• Check impulsive spending urges right away, returning to steady savings.",
          "人際": "• Apologize right away if you misspeak, clearing away potential social friction.\n• Hold to clear integrity in small matters, proving yourself trustworthy."
        }
      },
      2: {
        name: "Rooting",
        text: "Returning to the right path with grace, humility, and joy brings great good fortune. Lean in to learn from wise, compassionate mentors around you, refining your character with benevolence. Lay down stubborn pride and return cheerfully to pure truth; your gentle approach ensures smooth success.",
        guide: "Returning with gentle grace aligns with goodness; walking the true path brings great fortune.",
        focus: {
          "感情": "• Reach out to your partner with genuine affection, rekindling sweet romance.\n• Treat each other with gentle kindness, enjoying the beauty of starting fresh.",
          "事業": "• Consult seasoned mentors and talented peers with humility; collaboration flows.\n• Restart projects in a warm, aligned atmosphere, securing satisfying milestones.",
          "健康": "• Body and mind rest in a pleasant recovery rhythm; energy is balanced and high.\n• Enjoy gentle yoga, easy walks, or calming music to nurture the spirit.",
          "財運": "• Finances recover smoothly in an orderly fashion, with steady improvements.\n• Well-suited for purpose-driven, ethical investments carrying solid long-term value.",
          "人際": "• Humble and approachable, you are warmly supported by elders and peers alike.\n• Heal social divides proactively, rebuilding deep friendships with warmth."
        }
      },
      3: {
        name: "Testing",
        text: "Repeatedly hesitating between wandering off and returning to the path brings moments of anxiety and difficulty, yet as long as you ultimately find your way back each time, no lasting harm will fall upon you. Use continuous self-correction to forge unshakeable inner resolve.",
        guide: "Frequent course corrections bring anxiety, but returning to truth keeps you free of blame.",
        focus: {
          "感情": "• Though minor friction recurs, both are willing to communicate and repair.\n• Break unpredictable mood swings, building stable understanding through practice.",
          "事業": "• Projects face minor adjustments and iterations, but the overall course is right.\n• Maintain patient resilience, hitting targets through continuous optimization.",
          "健康": "• Habit changes may see minor slip-ups; do not get discouraged or give up.\n• Keep tuning your daily rhythm, building a resilient body through consistency.",
          "財運": "• Investment confidence may waver with volatility, but logic helps you reset.\n• Stick to your established investment rules, unmoved by short-term noise.",
          "人際": "• Friendships learn to respect boundaries after working through a few bumps.\n• Face your shortcomings honestly, sustaining bonds through genuine effort to grow."
        }
      },
      4: {
        name: "Choosing",
        text: "Walking among peers who drift along with the crowd, you choose to stand independent, turning back alone to the true path. Refusing to compromise with mediocrity or poor habits, you answer your inner moral compass. This quiet courage to return home alone reveals extraordinary strength.",
        guide: "Walking in the middle while returning alone; follow truth instead of drifting with the crowd.",
        focus: {
          "感情": "• Ignore cynical dating attitudes around you, holding to authentic love.\n• Keep an independent, clear spirit in romance, guiding your partner with maturity.",
          "事業": "• Keep your head while teams jump on bandwagons, holding to the right strategy.\n• Step up to lead independent innovation, breaking away from bland uniformity.",
          "健康": "• Break away from poor social dining habits, sticking to your personal fitness plan.\n• Enjoy quality solo workouts and quiet meditation, feeling deeply fulfilled.",
          "財運": "• Refuse to follow crowd hype, sticking to independent, disciplined value investing.\n• Execute your asset allocation rules strictly, capturing rewarding long-term gains.",
          "人際": "• Step away from toxic crowds with courage, protecting your personal integrity.\n• Attract independent, clear-minded companions who share your values."
        }
      },
      5: {
        name: "Manifesting",
        text: "Returning to the right path with deep generosity, honesty, and noble character brings complete freedom from regret. Reflecting deeply on yourself, you make returning to core truth an effortless, natural instinct. Walking with balance and an open heart, your character gathers enduring blessings and good fortune.",
        guide: "Return to truth with generous nobility and deep reflection; great good fortune follows.",
        focus: {
          "感情": "• Reconnect with deep generosity and honesty; love enters a mature, sweet peak.\n• Care for each other with gratitude, creating a warm, harmonious, lasting home.",
          "事業": "• Radiate mature, steady leadership, guiding the team to reclaim brilliance.\n• Build upon honesty and integrity, winning deep trust across the market.",
          "健康": "• Vitality restores solidly; energy is abundant, and the body feels strong.\n• Keep a spacious, grounded mindset, enjoying the natural rhythm of vibrant health.",
          "財運": "• Financial health is fully restored; earned income and long-term assets grow.\n• Manage wealth with generous, balanced wisdom, keeping asset roots solid.",
          "人際": "• Treat others with generous warmth; your character is widely trusted.\n• Social connections are clean and harmonious, backed by loyal allies."
        }
      },
      6: {
        name: "Completing",
        text: "Losing your way and obstinately refusing to turn back, missing the golden moment to return brings grave misfortune. If blind pride continues to drive your actions, it will lead to heavy defeat and setbacks that take a decade to heal. Wake up completely and pull back from the cliff while there is still time.",
        guide: "Obstinate refusal to turn back brings disaster; awaken and pull back before the cliff.",
        focus: {
          "感情": "• Stubborn refusal to change is pushing the relationship toward total collapse.\n• Stop destructive words immediately and reform with sincerity to heal the bond.",
          "事業": "• Forcing a flawed strategy invites total project collapse.\n• Halt reckless expansion immediately, taking full accountability to restructure.",
          "健康": "• Ignoring serious physical warning signs while overindulging invites acute illness.\n• Seek clinical care immediately and break destructive lifestyle habits.",
          "財運": "• Gambling on desperate bets breaks your liquidity, risking heavy debts.\n• Drop all-or-nothing leveraged hopes; restructure finances with discipline.",
          "人際": "• Stubborn arrogance risks alienating everyone, leaving you isolated.\n• Drop pride and apologize sincerely to make amends and seek a fresh start."
        }
      }
    },
    wuwang: {
      1: {
        name: "Emerging",
        text: "Advancing with a pure, honest heart free of scheming calculation brings great good fortune. At the beginning of your journey, hold no improper greed or transactional motives, acting purely in tune with conscience and natural flow. This pristine intent wins divine support, ensuring smooth success on all fronts.",
        guide: "Advance in pure sincerity; moving with natural truth brings great good fortune.",
        focus: {
          "感情": "• Approach early romance with pure sincerity; connection blooms naturally.\n• Show your true, unmasked self, winning deep affection through honesty.",
          "事業": "• Launch projects with pure purpose, focusing on creating authentic value.\n• Advance business on solid ground without tricks, earning lasting client trust.",
          "健康": "• Keep body and mind relaxed in pure ease; systems rest in healthy balance.\n• Build natural, consistent daily habits, enjoying abundant vitality and peace.",
          "財運": "• Earn clean income through professional skill, enjoying steady, honest earnings.\n• Invest with clear, rational intent, ignoring hype and building steady wealth.",
          "人際": "• Treat others with open, selfless warmth, winning immediate support and trust.\n• Social connections are clean and pure, free from transactional calculations."
        }
      },
      2: {
        name: "Rooting",
        text: "Do not calculate the autumn harvest while plowing, nor count the year's yield while clearing fields. Dedicate yourself fully to the work itself without obsessing over the outcome. When you release anxiety over results and tend to each step in its proper season, moving forward brings success everywhere.",
        guide: "Focus on the work without rushing for results; moving with the process brings success.",
        focus: {
          "感情": "• Savor every shared moment together without rushing for instant commitments.\n• Tend to love with everyday care; connection will bloom in its natural season.",
          "事業": "• Hone product details and workflows without fixating on instant revenue.\n• Enjoy the craft of your work; results will follow naturally and exceed hopes.",
          "健康": "• Keep up daily workouts and wholesome meals without chasing overnight fixes.\n• The body builds strong immunity through steady, patient everyday nourishment.",
          "財運": "• Practice long-term investing without obsessing over daily market swings.\n• Stick to fundamental research and recurring investments for lasting returns.",
          "人際": "• Treat friends with sincere care without expecting immediate favors in return.\n• Fulfill duties quietly on your team, earning deep, enduring praise over time."
        }
      },
      3: {
        name: "Testing",
        text: "Meeting with an unexpected mishap: like a traveler who untethers an ox tied by the road, while innocent villagers end up under suspicion for the loss. When facing blameless setbacks or misunderstandings in life, stay calm and poised without bitterness. Let things resolve in their natural course.",
        guide: "Stay calm when facing unexpected losses; accept blameless setbacks with poise.",
        focus: {
          "感情": "• Facing outside misunderstandings or family gossip, do not overthink.\n• Trust each other and communicate with calm; time will make truth clear.",
          "事業": "• Projects hit temporary delays from outside shifts; this is not your fault.\n• Handle aftermath with professional calm, keeping your composure steady.",
          "健康": "• Watch for minor scrapes, bumps, or seasonal colds from sudden weather shifts.\n• Keep your mind peaceful, avoiding emotional stress that strains your system.",
          "財運": "• Accept minor unexpected expenses calmly as a natural part of life.\n• Guard against informal loans or others' mistakes dragging you down; ring-fence assets.",
          "人際": "• If drawn into outside disputes, let your clean integrity speak for itself.\n• Avoid getting dragged into endless arguments; let objective facts reveal the truth."
        }
      },
      4: {
        name: "Choosing",
        text: "Holding fast to balanced authenticity without swaying for external gain brings complete freedom from blame. When you know you are walking in natural truth, keep your resolve unmoved by trends. Guarding your core principles ensures no storm can shake your footing.",
        guide: "Stand firm in pure authenticity; holding to truth leaves you unshakeable and safe.",
        focus: {
          "感情": "• Stand faithful to your partner, unmoved by fleeting outside novelties.\n• Guard the quiet purity of your home life; your bond stands solid as rock.",
          "事業": "• Hold to ethical standards and sound models, rejecting questionable shortcuts.\n• Deepen core expertise with resolve, securing an unshakeable market position.",
          "健康": "• Stick to science-based health habits, ignoring extreme wellness fads.\n• Maintain inner harmony; vitality stays high and mind remains clear.",
          "財運": "• Follow conservative allocation rules, unmoved by market hype and bubbles.\n• Protect core capital securely, keeping finances safe and free of hidden risks.",
          "人際": "• Move with clear principles, winning the deep respect and trust of all.\n• Maintain an elegant, clean presence, far from self-serving circles."
        }
      },
      5: {
        name: "Manifesting",
        text: "Meeting with an unexpected ailment, there is no need for harsh remedies; letting things recover naturally will bring joyful healing. When unforeseen worries crop up, drop anxious over-control. Trust life's natural capacity to restore balance, and things will turn out well on their own.",
        guide: "Unexpected imbalances need no harsh force; release worry and trust natural healing.",
        focus: {
          "感情": "• When your partner feels down, avoid anxious interrogation or pressure.\n• Give space to rest; warmth will naturally return sweet and clear.",
          "事業": "• Projects hit minor hiccups; avoid panic and rash overhauls; observe calmly.\n• Trust your team's self-correcting ability; issues will untangle naturally.",
          "健康": "• Treat minor fatigue with rest and gentle care rather than over-medicating.\n• Drink water and sleep well; the body restores vitality quickly on its own.",
          "財運": "• Stay calm during short-term market dips; avoid panic-selling or over-trading.\n• Hold steady; investments will return to their natural track, bringing gains.",
          "人際": "• Settle small friend misunderstandings with natural ease rather than grand speeches.\n• Time will clear away small clouds, restoring warm ties on its own."
        }
      },
      6: {
        name: "Completing",
        text: "Authenticity has reached its full state; forcing action right now invites unintended mistakes and misfortune, offering no benefit. Know when to pause and rest in quiet contentment. Staying still at completion without stirring up restless desires preserves all your good fortune.",
        guide: "When authenticity is complete, avoid restless action; stay still to keep fortune safe.",
        focus: {
          "感情": "• Love is peaceful and steady; avoid picking fights or testing each other.\n• Value current contentment; quiet companionship brings the sweetest fortune.",
          "事業": "• Phase goals are complete; avoid launching high-risk new bets rashly.\n• Secure achievements and recharge, preventing losses born of restless expansion.",
          "健康": "• Routines are working well; sustain your current habits without overdoing fads.\n• Avoid pushing beyond physical limits in extreme sports; keep safety first.",
          "財運": "• Gains are solid; take profits in time rather than chasing the absolute top.\n• Halt unnecessary aggressive moves, protecting your accumulated harvest.",
          "人際": "• Stay humble and mind your own duties, avoiding outside drama.\n• Savor fulfilling personal quiet, enjoying social harmony in stillness."
        }
      }
    },
    daxu: {
      1: {
        name: "Emerging",
        text: "Heavy obstacles loom ahead; the wisest move right now is to pause and halt forward motion. Forcing your way through before strength and preparation are complete invites setbacks. Pausing proactively to build energy and solid foundations is key to staying safe and succeeding.",
        guide: "Halt in time before heavy obstacles; pause to build strength and avoid setbacks.",
        focus: {
          "感情": "• When romance hits delays, do not push; step back to focus on self-growth.\n• Be patient; do not force milestones before conditions are ripe.",
          "事業": "• Projects face external limits; pause promotion to focus on internal refinement.\n• Polish technical depth and workflows, building strength for the breakthrough.",
          "健康": "• Stop high-intensity workouts when fatigue appears, resting thoroughly.\n• Avoid pushing through exhaustion; build vitality to prevent strain.",
          "財運": "• Pause new investments while market trends are unclear, keeping cash safe.\n• Postpone major capital spending, focusing on saving and building baseline funds.",
          "人際": "• Keep a quiet profile when sensing social resistance, avoiding the spotlight.\n• Focus on self-refinement, waiting for the right moment to show your talents."
        }
      },
      2: {
        name: "Rooting",
        text: "The axle-straps are removed from the wagon, bringing it to a deliberate halt. This is not a breakdown, but the conscious self-discipline of mastering your own pace. Under external constraints, step on the brakes willingly to gather deeper momentum in patient waiting, free from blame.",
        guide: "Brake the wagon deliberately; patient self-control builds momentum without fault.",
        focus: {
          "感情": "• Step on the brakes during heated arguments to stop escalation.\n• Offer each other space to cool down, protecting relationship harmony.",
          "事業": "• Slow project rollouts deliberately to conduct thorough quality audits.\n• Show strategic patience, preparing thoroughly while building momentum.",
          "健康": "• Ease off high-pressure work schedules, planning restorative time off.\n• Rebalance overtaxed nerves through quiet meditation and deep relaxation.",
          "財運": "• Lower investment leverage and exposure, parking capital in safe havens.\n• Keep ample liquidity on hand, waiting patiently for the ideal entry point.",
          "人際": "• Yield during interpersonal disputes, avoiding fighting over petty points.\n• Show strong self-restraint, earning the deep respect of your peers."
        }
      },
      3: {
        name: "Testing",
        text: "Driving fine steeds across open plains, the road ahead is full of trials, but staying alert and skilled behind the reins turns danger into safety. Hone your professional skills and defensive precautions daily; with clear targets, you will triumph over tough challenges.",
        guide: "Drive fine horses with care through trials; daily practice and clear targets bring victory.",
        focus: {
          "感情": "• Face practical life challenges together, deepening your bond through teamwork.\n• Encourage each other's growth, working toward shared home goals with resolve.",
          "事業": "• Stand out in fierce competition through solid skills and sharp execution.\n• Hone business skills and manage risks daily; project progress accelerates.",
          "健康": "• Well-suited for rigorous physical training, pushing endurance limits safely.\n• Warm up and use proper gear during workouts to prevent muscle strain.",
          "財運": "• Capture market swings through sharp judgment and disciplined execution.\n• Enforce strict stop-losses and risk controls to grow capital rapidly.",
          "人際": "• Connect with driven, skilled companions, sharpening each other's talents.\n• Act as a pioneer on your team, leading others through tough spots."
        }
      },
      4: {
        name: "Choosing",
        text: "Placing a headboard upon the young bull's horns checks danger before it can grow, bringing supreme good fortune. When managing potential risks or untamed forces, implement prevention and clear structures at the very source. This foresight secures lasting safety at the lowest cost.",
        guide: "Restrain the young bull early; prevention at the source brings supreme fortune.",
        focus: {
          "感情": "• Set clear communication ground rules early to prevent future friction.\n• Soothe your partner's minor anxieties early, caring for the bond at its root.",
          "事業": "• Build airtight error-prevention and contingency plans at project kickoff.\n• Set standardized workflows early, ensuring smooth and reliable operations.",
          "健康": "• Prioritize preventive care and checkups, catching imbalances early.\n• Break unhealthy dietary habits early, building strong immune defenses.",
          "財運": "• Conduct rigorous risk audits and diversify assets before deploying capital.\n• Automate savings and stop-loss rules, locking in systemic financial safety.",
          "人際": "• Sign clear agreements before partnering to avoid future disputes over roles.\n• Set healthy boundaries early to keep others from overstepping."
        }
      },
      5: {
        name: "Manifesting",
        text: "Cleverly blunting the tusk of a wild boar disarms its ferocious, destructive drive, bringing great good fortune. When meeting fierce opposition or hard problems, avoid head-on clashes; use skillful wisdom to disarm the core threat. Using finesse to redirect force eliminates danger and brings victory.",
        guide: "Blunt the wild boar's tusk with wisdom; skillful finesse brings complete victory.",
        focus: {
          "感情": "• Defuse a partner's temper with gentle humor and spacious patience.\n• Untangle deep home knots with finesse, welcoming warm harmony.",
          "事業": "• Neutralize fierce competitive threats using sharp strategy and diplomacy.\n• Resolve the thorniest core bottlenecks, unlocking rapid business growth.",
          "健康": "• Address chronic health issues at their root, clearing out stubborn causes.\n• Body systems achieve healthy balance; vitality is steady and clear.",
          "財運": "• Settle debt gridlocks or frozen assets with finesse, restoring revenue flows.\n• Invest in assets with high competitive moats and strong market control.",
          "人際": "• Turn rivals into allies with soft diplomacy, winning them to your side.\n• Move with polished social grace, navigating complex dynamics effortlessly."
        }
      },
      6: {
        name: "Completing",
        text: "Accumulation has reached its absolute peak; the grand highway of heaven lies open before you in supreme success. All restraint, patience, and preparation transform into immense momentum. Step forward with deep strength and noble virtue; walking with the light of heaven, you advance across the land unimpeded.",
        guide: "The grand highway of heaven opens; full accumulation leads to supreme success.",
        focus: {
          "感情": "• Romance reaches complete fulfillment; step into lifelong partnership.\n• Deep soul harmony blossoms, sharing an abundant, happy life together.",
          "事業": "• Long-gathered capability unleashes fully, lifting your career to its summit.\n• Business reaches new markets unimpeded, achieving legendary milestones.",
          "健康": "• Body and spirit achieve exceptional clarity and strength; vitality is robust.\n• Rest in healthy alignment with nature, enjoying vibrant longevity and ease.",
          "財運": "• Asset scale and earnings expand rapidly into complete abundance.\n• Wealth translates into a positive force for social good, building lasting merit.",
          "人際": "• Highly respected across the field, you enjoy broad support everywhere.\n• Lead as a visionary role model, building an expansive network of allies."
        }
      }
    },
    yi: {
      1: {
        name: "Emerging",
        text: "Letting go of your own sacred, self-sufficient inner wisdom like a spirit tortoise, looking on with greedy jaws at others' feasts, brings grave misfortune. If you lose sight of your inner treasure and envy outside allure, you will fall into lack and trouble. Return immediately to self-sufficient inner peace.",
        guide: "Looking with envy at others loses inner wisdom; return to self-sufficient truth.",
        focus: {
          "感情": "• Envying others' romances and criticizing your partner spoils current joy.\n• Cherish the one who truly loves you, tending to your own relationship.",
          "事業": "• Ignoring your core strengths to chase outside fads brings quick failure.\n• Deepen your unique gifts instead of comparing yourself to others.",
          "健康": "• Watch for digestive sluggishness and weight gain from binge eating junk foods.\n• Return to simple, clean meals, honoring your body's natural healing power.",
          "財運": "• Avoid chasing high-risk speculation out of envy for others' quick wins.\n• Protect your baseline capital, earning steady income through real capability.",
          "人際": "• Drop envy, comparison, and taking petty advantages; hold self-respect.\n• Present an independent, confident presence, earning genuine respect."
        }
      },
      2: {
        name: "Rooting",
        text: "Inverting the natural laws of nourishment by demanding support from below instead of relying on yourself, or seeking food improperly from high hills, brings misfortune. Seeking nourishment must follow proper order and truth; relying on manipulative or improper means brings bitter fruit.",
        guide: "Seeking support through inverted, improper paths invites misfortune; return to truth.",
        focus: {
          "感情": "• Demanding love through needy people-pleasing or manipulation breaks bonds.\n• Build balanced self-respect, nourishing each other in healthy, positive ways.",
          "事業": "• Chasing resources through improper shortcuts or breaking ethics cannot last.\n• Follow proper business practices, ensuring your work endures on solid ground.",
          "健康": "• Extreme crash diets or unnatural weight-loss fads damage metabolism.\n• Follow balanced nutrition and regular meals, supporting your digestive health.",
          "財運": "• Seeking money through gray or questionable avenues invites legal penalties.\n• Earn wealth through clean, honest work; avoiding quick money protects safety.",
          "人際": "• Stop demanding unfair favors or exploiting team members below you.\n• Hold your ethical lines, connecting with others in open and honest integrity."
        }
      },
      3: {
        name: "Testing",
        text: "Turning away from true nourishment and indulging in empty sensory cravings and improper sustenance brings misfortune if continued. If you persist in this for ten years without change, you will face severe setbacks and loss. Make a resolute break from destructive sources of nourishment immediately.",
        guide: "Indulging in harmful nourishment brings severe setbacks; cut ties decisively.",
        focus: {
          "感情": "• Clinging to toxic codependency or messy love triangles destroys intimacy.\n• Cut off draining, unhealthy dynamics, restoring your emotional peace.",
          "事業": "• Projects relying on unsustainable models face obsolescence.\n• Shut down unprofitable operations, restructuring to build real value.",
          "健康": "• Long-term bad habits, drinking, and late nights exhaust physical vitality.\n• Schedule health checkups and break addictions, resetting your lifestyle.",
          "財運": "• Relying on high-interest loans to cover spending invites debt collapse.\n• Stop taking on toxic debt immediately, cutting spending to clear obligations.",
          "人際": "• Wasting energy in shallow partying crowds damages reputation and drive.\n• Break away from bad influences, rebuilding a clean, supportive circle."
        }
      },
      4: {
        name: "Choosing",
        text: "Reaching downward to seek capable talent to nourish the world, gazing with the focused intent of a stalking tiger, driven by an urgent desire for wisdom, brings great good fortune. Leaders who humble themselves to recruit the worthy to serve the community walk without blame, building great success.",
        guide: "Recruit talent with focused humility; nourishing the community brings great fortune.",
        focus: {
          "感情": "• Show devoted, focused care, nurturing your partner's growth and dreams.\n• Treat each other with dedicated focus, building a fulfilling home life together.",
          "事業": "• Leaders recruit top-tier talent with urgency, strengthening the core team.\n• Focus fully on project goals, unlocking major operational breakthroughs.",
          "健康": "• Follow a dedicated, high-quality wellness plan, supplementing nutrients with care.\n• Focus is sharp and energy is high; overall physical vitality improves.",
          "財運": "• Invest strategically in top talent and quality assets for rich returns.\n• Scale assets by hiring skilled operators, building strong financial health.",
          "人際": "• Approach talent with humility, winning the loyalty of top industry minds.\n• Build high-level platforms, uniting skilled allies for shared success."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding authority while recognizing your own limits, choosing to stay grounded in quiet dedication brings great good fortune. Do not cross great rivers recklessly or force massive changes on your own. Know your seat, rely on capable mentors, and enjoy blessings in quiet stability.",
        guide: "Know your limits and rely on capable talent; quiet stability brings good fortune.",
        focus: {
          "感情": "• Fulfill your role at home, honoring your partner's guidance in their strengths.\n• Support each other with clear teamwork, sustaining lasting family harmony.",
          "事業": "• Recognize blind spots and empower professional teams; avoid micromanaging.\n• Postpone risky cross-industry expansions, securing core business safely.",
          "健康": "• Follow the guidance of trusted health specialists, resting and recovering quietly.\n• Avoid high-risk extreme sports, keeping everyday physical safety first.",
          "財運": "• Entrust assets to reputable, professional institutions instead of trading blind.\n• Use defensive investment strategies, protecting existing wealth to enjoy gains.",
          "人際": "• Listen humbly to trusted advisors around you, honoring professional input.\n• Keep a modest, quiet profile, winning trust through harmonious teamwork."
        }
      },
      6: {
        name: "Completing",
        text: "Standing as the fountainhead and pillar of nourishment for all things, shouldering the noble duty of sustaining the community. Though holding an arduous and high-stakes position, persevering in selfless benevolence brings supreme good fortune. Cross great waters with resolve; your service will bless the whole world.",
        guide: "Shoulder the duty of nourishing all; selfless service brings supreme blessings.",
        focus: {
          "感情": "• Stand as a dependable, loving anchor for your family, offering full shelter.\n• Guide your household toward abundant harmony, enjoying lasting happiness.",
          "事業": "• Step up to the noble mission of industry leadership, guiding shared prosperity.\n• Step forward during crises to cross great waters, leading teams into new eras.",
          "健康": "• Body and spirit achieve expansive strength; vital energy is rich and deep.\n• Hold a benevolent, generous heart; energy stays high, and health is robust.",
          "財運": "• Steward large capital resources to benefit society, earning wealth and honor.\n• Build sustainable business ecosystems that uplift many, creating lasting abundance.",
          "人際": "• Revered for generous virtue, recognized widely as a benevolent leader.\n• Share blessings generously, finding complete fulfillment in service to others."
        }
      }
    },
    daguo: {
      1: {
        name: "Emerging",
        text: "Placing a mat of white thatch grass beneath precious offerings, moving with extreme care, meticulous attention, and deep reverence brings no blame whatsoever. When embarking on an extraordinary undertaking or major transition, build your foundation with exquisite caution and foresight. Preparing thoroughly at the start ensures a smooth, secure journey throughout.",
        guide: "Place white thatch beneath your work; exquisite care at the beginning keeps all paths free of blame.",
        focus: {
          "感情": "• Treat your partner with gentle delicacy in early love, honoring subtle feelings.\n• Build thoughtful respect, laying a solid and pure cornerstone for lasting trust.",
          "事業": "• Conduct comprehensive research and contingency planning before launching major projects.\n• Review initial contracts and workflows with precision, eliminating latent risks.",
          "健康": "• Warm up and stretch thoroughly before workouts to prevent joint and tendon strain.\n• Mind daily hygiene, nutrition, and warmth, taking delicate care of physical energy.",
          "財運": "• Perform rigorous due diligence and risk analysis before committing capital.\n• Maintain a substantial cash buffer to guard against sudden liquidity shocks.",
          "人際": "• Move with refined etiquette and mindful boundaries, leaving an exceptional impression.\n• Speak with grounded discretion, earning deep trust through dependable conduct."
        }
      },
      2: {
        name: "Rooting",
        text: "A withered willow tree sprouts fresh green shoots, and an older man takes a young maiden as his bride; all endeavors move forward favorably. In circumstances that appeared exhausted, stalled, or overburdened, fresh, supple vitality is breathed into the system. New life blossoms from dry wood, bringing an unexpected and prosperous turning point.",
        guide: "Fresh shoots sprout from dry willow; new vitality enters stagnant ground, bringing universal favor.",
        focus: {
          "感情": "• Love transcends conventional expectations, sparking fresh passion and creative joy.\n• A routine relationship finds its second spring, rekindling romantic warmth.",
          "事業": "• Infuse traditional workflows with fresh talent or technology, revitalizing the project.\n• Take bold, creative steps during stagnant phases, turning deadlocks into rapid growth.",
          "健康": "• Physical vitality rebounds after chronic fatigue, restoring youthful stamina.\n• Explore innovative restorative therapies, bringing renewed lightness to body and mind.",
          "財運": "• Revitalize dormant assets or legacy holdings, unlocking surprising returns.\n• Invest in upgrading traditional sectors or cross-industry innovation for solid yields.",
          "人際": "• Connect with dynamic, younger peers who bring fresh perspectives to your circle.\n• Cross-generational dialogue flows smoothly, succeeding through wisdom and innovation."
        }
      },
      3: {
        name: "Testing",
        text: "The main ridgepole bends and sags under excessive weight—grave danger. Clinging obstinately to self-will and shouldering burdens far beyond your structural capacity without adequate support invites catastrophic collapse. You must immediately seek external reinforcement and decisively offload excess weight.",
        guide: "The beam bends under overload; stubborn pride brings collapse, so offload excess weight immediately.",
        focus: {
          "感情": "• The relationship carries excessive practical pressure and emotional strain, nearing a breaking point.\n• Stop stubborn standoffs; seek external guidance and share the load to relieve strain.",
          "事業": "• Project scope far exceeds the team's operational bandwidth, risking total breakdown.\n• Halt overreach immediately, scaling back non-essential goals while bringing in help.",
          "健康": "• Watch for spinal compression, lumbar disc strain, or acute stress-induced burnout.\n• Cease overworking immediately; prioritize clinical rest and somatic decompression.",
          "財運": "• Excessive financial leverage and heavy debt burdens create extreme liquidity vulnerability.\n• Take aggressive steps to de-leverage, selling assets to reduce debt and prevent default.",
          "人際": "• Bearing all burdens alone causes exhaustion; you can no longer carry everyone's demands.\n• Communicate your limits clearly and delegate responsibilities instead of toughing it out."
        }
      },
      4: {
        name: "Choosing",
        text: "The ridgepole is fortified and arches upward with strength—great good fortune. However, if selfish motives or improper alliances creep in, minor regret will follow. Maintain upright inner fortitude and rely on noble, proper support to resolve the crisis; you will stand rock-solid beneath heavy weight.",
        guide: "The beam is fortified with strength; lean on proper support to weather the storm with good fortune.",
        focus: {
          "感情": "• The relationship receives strong support from family or practical resources, easing crisis.\n• Guard devotion with care, avoiding ambiguous entanglements that spark outside gossip.",
          "事業": "• Core resources and strong institutional backing fortify the project structure securely.\n• Keep collaborations transparent and ethical, avoiding backroom deals.",
          "健康": "• Core muscle stability and spinal alignment strengthen, improving physical resilience.\n• Maintain structured rehabilitation and strength training, keeping the body sturdy.",
          "財運": "• Secure strategic investment or low-interest funding, resolving capital bottlenecks.\n• Focus on core, quality assets, staying clear of speculative side-bets.",
          "人際": "• Earn the steadfast backing of respected mentors, anchoring your position in crisis.\n• Collaborate with integrity across all parties, winning widespread trust and alignment."
        }
      },
      5: {
        name: "Manifesting",
        text: "A withered willow tree bursts into full, vibrant bloom, and an older woman takes a young man as her husband; though there is no blame, it is difficult to sustain indefinitely. Outwardly dazzling, the situation has reached its absolute peak. Savor this brilliant moment while staying realistic and clear-headed, avoiding illusions of permanence.",
        guide: "The dry willow blooms brilliantly; cherish the fleeting blossom while staying clear and grounded.",
        focus: {
          "感情": "• Savor sweet, passionate romance while facing practical realities with clear discernment.\n• Avoid chasing superficial relationship status; ground your connection in genuine daily life.",
          "事業": "• Projects enjoy a brief, brilliant spotlight, securing notable revenue and market acclaim.\n• Lock in gains without getting carried away, planning your strategic transition early.",
          "健康": "• Bursts of high energy may mask underlying exhaustion; avoid burning through reserves.\n• Prioritize deep nourishment and restorative stillness to support your core vitality.",
          "財運": "• Take advantage of high asset valuations to take profits and secure your holdings.\n• Avoid chasing tops at the tail end of market rallies to protect against sudden pullbacks.",
          "人際": "• Enjoy social prominence while remembering that all worldly gatherings naturally ebb.\n• Keep an unhurried, detached mindset, remaining grounded amid flattering praise."
        }
      },
      6: {
        name: "Completing",
        text: "Wading courageously across the deep river, the water rises over the head—perilous indeed, yet this devotion to a noble mission carries no blame whatsoever. In extraordinary times, answering the call of a higher purpose requires supreme courage and sacrifice. This steadfast spirit of holding the line embodies timeless nobility.",
        guide: "Wading deep over the head carries peril, yet answering a noble mission leaves no blame.",
        focus: {
          "感情": "• Standing by your love through everything touches the heart with profound devotion.\n• Love transcends worldly calculations, forging an unbreakable soul vow.",
          "事業": "• Step forward during organizational crisis to bear responsibility; honorable and brave.\n• Show heroic fortitude, commanding lifelong professional respect across your industry.",
          "健康": "• Guard against extreme exhaustion or sudden physical strain; enforce safety boundaries.\n• After navigating peak trials, dedicate ample time to deep, restorative healing.",
          "財運": "• Absorb a calculated financial sacrifice to protect the larger foundation with courage.\n• Though capital faces trials, your unshakeable integrity seeds a powerful future rebound.",
          "人際": "• Sacrificing personal comfort for the collective good earns timeless, universal honor.\n• Your moral courage shines as an inspiring example for everyone in your circle."
        }
      }
    },
    kan: {
      1: {
        name: "Emerging",
        text: "Successive chasms deepen, and one falls into a sunken pit within the abyss—extreme misfortune. At the onset of trials, lacking vigilance and preparation leaves you trapped in a vulnerable position. Do not struggle blindly; center yourself, hold your ground, and avoid sinking deeper into the pit.",
        guide: "Falling into the sunken chasm; avoid blind thrashing, staying centered to prevent sinking deeper.",
        focus: {
          "感情": "• Romance enters a standoff or cold silence; avoid mutual blaming and attacks.\n• Step back to reflect with calm, holding boundaries to keep friction from escalating.",
          "事業": "• Projects hit early hurdles or missteps; avoid passing blame in panic.\n• Pause aggressive action, assess the landscape, and establish defensive measures.",
          "健康": "• Watch for joint aches from cold and dampness, or sudden urinary discomfort.\n• Keep your environment warm and dry, resting thoroughly to prevent overexertion.",
          "財運": "• Early investments face paper losses; avoid borrowing to average down rashly.\n• Enforce strict stop-losses, protecting baseline cash to prevent liquidity crunches.",
          "人際": "• If caught in complicated social politics, choose quiet silence immediately.\n• Avoid taking polarizing sides, keeping a low profile to steer clear of drama."
        }
      },
      2: {
        name: "Rooting",
        text: "Standing in the chasm amidst danger, this is not the time for grand ambitions or oversized expectations; seek only small gains and modest steps forward. Recognize present constraints, solving immediate friction step by step to build your way out of the depths.",
        guide: "Danger in the chasm calls for modest gains; advance steadily through small steps to emerge safely.",
        focus: {
          "感情": "• Romance is in a delicate adjustment phase; mend the connection through small gestures.\n• Do not demand immediate sweeping vows; treasure quiet, everyday care.",
          "事業": "• Projects face operational constraints; focus on clearing the smallest current bottlenecks.\n• Moderate expectations, hitting incremental milestones to preserve team momentum.",
          "健康": "• Addressing chronic ailments requires steady consistency rather than quick fixes.\n• Build vitality through small daily habits like proper hydration and regular sleep.",
          "財運": "• Focus on securing small cash inflows rather than dreaming of overnight windfalls.\n• Settle fragmented debts methodically, gradually lightening your financial load.",
          "人際": "• Build small points of consensus during social standoffs, breaking the ice slowly.\n• Keep in close contact with a few trusted allies, supporting one another."
        }
      },
      3: {
        name: "Testing",
        text: "Advancing leads to a chasm, and retreating leads to an abyss; trapped between depths, one must refrain from all outward action. Facing complete gridlock, forcing movement only walks you deeper into the snare. Stand still with supreme composure, waiting for the landscape to shift toward renewal.",
        guide: "Chasms lie before and behind; hold still in complete composure to wait for the turn.",
        focus: {
          "感情": "• Relationship dynamics hit an impasse; arguing only deepens the wound.\n• Pause dialogue and step back, allowing heated emotions to settle into quiet.",
          "事業": "• Operations face constraints from above and below; forcing moves invites breakdown.\n• Maintain strategic composure, preserving core assets while waiting for market clarity.",
          "健康": "• Watch for insomnia, tinnitus, or nervous exhaustion triggered by deep worry.\n• Release mental burdens completely, allowing physical rest to support recovery.",
          "財運": "• Trapped by extreme market volatility where buying or selling incurs loss.\n• Refrain from impulsive trades; remain still until healthy liquidity returns.",
          "人際": "• Caught between two warring camps; refuse to take either side.\n• Maintain neutral silence, giving no one an excuse to draw you into conflict."
        }
      },
      4: {
        name: "Choosing",
        text: "A jug of simple wine and two humble bowls of grain, served in unadorned earthen vessels and passed quietly through the window. In times of steep trials, strip away all superficial pretense, communicating with pure, unvarnished sincerity. Connecting with transparent truth turns difficulty into peace without blame.",
        guide: "Humble vessels and simple sincerity cross steep depths; transparent truth brings safety.",
        focus: {
          "感情": "• Weather tough seasons together, warming each other with unadorned love.\n• Share real vulnerabilities openly, forging a deep soul bond through trials.",
          "事業": "• Present a focused, minimalist proposal to win over clients during lean times.\n• Strip away formal fluff, earning support through pure professional substance.",
          "健康": "• Return to simple, wholesome whole grains, lightening digestive stress.\n• Keep the mind clear of cluttered desires, restoring vitality in simplicity.",
          "財運": "• Adopt a minimalist spending lifestyle, weathering financial winters with ease.\n• Negotiate settlements with honest transparency, resolving funding bottlenecks.",
          "人際": "• Approach mentors with unpretentious authenticity, touching hearts with sincerity.\n• Bond with allies who stand with you through hardship; your friendship is solid."
        }
      },
      5: {
        name: "Manifesting",
        text: "The chasm is not filled to overflowing; the treacherous waters have leveled out into calm, smooth flow. After enduring long trials, the danger is reaching its end, opening into level ground. Hold to balanced fairness without rushing; flow naturally with the river to emerge safely with good fortune.",
        guide: "The waters level out as danger passes; flow naturally with truth to welcome good fortune.",
        focus: {
          "感情": "• Relationship trials draw to a close; misunderstandings melt into harmony.\n• Treasure hard-won peace, stepping together into stable, comfortable daily life.",
          "事業": "• The toughest project bottlenecks are resolved; workflows proceed with ease.\n• Operations return to smooth rhythm, with success clearly in sight.",
          "健康": "• Lingering ailments and fatigue subside; physical systems steady.\n• Maintain balanced, unhurried wellness rhythms, locking in recovery gains.",
          "財運": "• Financial pressure eases significantly as cash flow resumes healthy circulation.\n• Asset performance climbs out of the valley, building structural stability.",
          "人際": "• Social friction and drama subside, restoring smooth, friendly connections.\n• Tempered by shared trials, your team collaborates with effortless trust."
        }
      },
      6: {
        name: "Completing",
        text: "Bound securely with thick cords and imprisoned within a dense thicket of thorns, unable to find freedom for three long years—extreme misfortune. Persisting in delusion and sinking deeper into dangerous paths leads to total loss of freedom and vitality. You must reflect deeply and break negative cycles to reclaim life.",
        guide: "Bound in thorns for three years; deep delusion brings misfortune, so break destructive cycles.",
        focus: {
          "感情": "• Relationship dynamics become controlling, toxic, or suffocating, bringing pain.\n• Break emotional bonds of codependency with courage, seeking outside support.",
          "事業": "• Flawed or non-compliant operations reach a dead end, trapping the venture.\n• Stop futile resistance; embrace formal audits and restructure completely.",
          "健康": "• Watch for chronic relapses, extended bed rest, or severe depressive isolation.\n• Seek clinical medical care without delay, breaking out of isolation.",
          "財運": "• Overwhelming debt and frozen assets create severe financial gridlock.\n• Execute formal restructuring and clean up liabilities to start fresh.",
          "人際": "• Trapped in manipulative, damaging social circles with no easy exit.\n• Use firm boundaries and legal protection to break free, reclaiming your peace."
        }
      }
    },
    li: {
      1: {
        name: "Emerging",
        text: "At the dawn of the journey when the first steps are taken, keeping an attitude of profound reverence, caution, and mindfulness leaves no room for blame. Do not rush to display fiery brilliance; walk each step with grounded decorum. A mindful start lays a clear, pristine foundation for luminous success.",
        guide: "Tread with mindful reverence at the start; grounded care keeps early steps free of blame.",
        focus: {
          "感情": "• Approach early romance with deep respect and sincerity, avoiding flippancy.\n• Keep a poised, courteous pace, making an exceptional first impression.",
          "事業": "• Launch projects with dedication and care, reviewing every detail thoroughly.\n• Seek advice from experienced mentors, mastering core protocols for a smooth start.",
          "健康": "• Warm up with care before exercise to prevent ankle and muscle sprains.\n• Build early-rising habits, keeping morning vitality bright and focused.",
          "財運": "• Research potential investments with care and caution, avoiding impulsive moves.\n• Walk an upright, compliant path, laying a clean foundation for lasting wealth.",
          "人際": "• Move with humble courtesy in social settings, winning genuine respect.\n• Honor every commitment carefully, building an early reputation for reliability."
        }
      },
      2: {
        name: "Rooting",
        text: "Like the warm, golden glow of the midday sun, shining with balanced radiance and illuminating all life with great good fortune. Yellow symbolizes balance, and fire represents clarity and culture. When you hold to balanced moderation and anchor to noble systems, your gifts shine warmly, welcoming supreme blessings.",
        guide: "Golden light holds the balanced center; gentle alignment with virtue brings supreme fortune.",
        focus: {
          "感情": "• Treat each other with balanced warmth; love is mature, sweet, and steady.\n• Offer spacious, considerate care, co-creating a peaceful, joyful home.",
          "事業": "• Operations enter a golden growth phase, guided by balanced wisdom.\n• Work milestones combine innovation with stability, winning broad acclaim.",
          "健康": "• Digestive and cardiovascular systems function in harmonious flow; skin glows.\n• Keep inner serenity, enjoying vibrant wellness and wholesome living.",
          "財運": "• Earn strong income through respected expertise and steady operations.\n• Balance your portfolio between growth and preservation, achieving harmony.",
          "人際": "• Approachable, modest, and fair-minded, widely loved and respected by all.\n• Serve as a trusted, balanced role model within your professional community."
        }
      },
      3: {
        name: "Testing",
        text: "The sun descends toward the western horizon; facing the natural close of a cycle, if one does not beat the earthen drum and sing with joy, one will only sink into the mournful sighs of old age—misfortune follows. In the face of impermanence, release sorrow and meet transitions with an open, philosophical spirit.",
        guide: "Sing with the setting sun; embrace natural cycles with ease rather than mournful sighs.",
        focus: {
          "感情": "• Romance enters a quiet plateau or meets practical shifts; avoid bitter sighs.\n• Bring playful humor to daily routines, rekindling shared joy together.",
          "事業": "• Projects face natural cyclical slowdowns; avoid checking out or complaining.\n• Accept present realities calmly, planning transitions and new ventures with optimism.",
          "健康": "• Watch for chest tightness or sluggish circulation linked to low moods.\n• Cultivate a cheerful spirit, enjoying creative and musical arts to stay vibrant.",
          "財運": "• Asset valuations face cyclical pullbacks; avoid panic-selling at the bottom.\n• Maintain defensive composure, navigating market troughs with patience.",
          "人際": "• Steer clear of negative circles that dwell on complaints, keeping an upbeat mindset.\n• Warm those around you with easygoing optimism, bringing joy to your circle."
        }
      },
      4: {
        name: "Choosing",
        text: "Flaring up suddenly like a fierce blaze—dazzling and consuming everything in its path—only to be swiftly extinguished and discarded. Impulsive aggression and sharp arrogance only bring self-destruction. Curb the urge for quick recognition and fiery temper, avoiding fleeting brilliance that costs everything.",
        guide: "Sudden flaring brings swift burnout; curb reckless aggression to prevent destruction.",
        focus: {
          "感情": "• Master quick tempers; never act recklessly or speak in fiery anger.\n• Avoid chasing fleeting, unstable passion; seek deep, enduring partnership.",
          "事業": "• Avoid burning cash recklessly or overextending teams, preventing sudden collapse.\n• Soften sharp personal arrogance, avoiding friction with peers and leadership.",
          "健康": "• Guard against sudden fevers, cardiovascular spikes, burns, or acute strain.\n• Calm fiery emotions, hydrating well and using quiet rest to cool the system.",
          "財運": "• Beware of get-rich-quick speculative hype; buying tops leads to sharp losses.\n• Refrain from high-leverage gambles, ensuring capital safety over the long haul.",
          "人際": "• Avoid sharp, cutting words, preventing unnecessary animosity and clashes.\n• Learn to yield with grace, disarming social hostility through gentle warmth."
        }
      },
      5: {
        name: "Manifesting",
        text: "Tears stream like a flowing torrent, accompanied by deep sighs of sorrow and care, yet this selfless, compassionate heart brings great good fortune. Holding authority while keeping the welfare of all in your heart, leading with profound empathy and vigilance touches heaven and earth, ensuring complete victory.",
        guide: "Tears flow from compassionate vigilance; leading with empathy brings great good fortune.",
        focus: {
          "感情": "• Share vulnerabilities and heartfelt tears openly, deepening emotional bonds.\n• Weather life's storms together, cherishing your bond for enduring happiness.",
          "事業": "• Leaders maintain deep crisis awareness, guiding teams through trials with care.\n• Rally team commitment through human-centered leadership, securing breakthroughs.",
          "健康": "• Releasing pent-up grief brings profound emotional relief and physical ease.\n• Keep your spirit clear and open, restoring smooth circulation and peace.",
          "財運": "• Maintain sober risk awareness amidst market hype, locking in returns early.\n• Allocate capital defensively against external shocks, securing lasting abundance.",
          "人際": "• Hold deep empathy and compassion, earning universal, heartfelt devotion.\n• Stand as an inspiring spiritual pillar for your team, with unshakeable unity."
        }
      },
      6: {
        name: "Completing",
        text: "The sovereign marches forth to discipline wrongdoing, executing the ringleaders with decisive strength while graciously pardoning their followers—completely free of blame. In the final stage of establishing order, strike at root issues with precision while showing wide mercy to the community, fulfilling your mission.",
        guide: "Strike down the ringleaders and pardon followers; precise justice brings complete success.",
        focus: {
          "感情": "• Remove third-party interference or toxic habits decisively, restoring purity.\n• Forgive unintentional missteps with spacious grace, welcoming relationship renewal.",
          "事業": "• Eliminate operational bottlenecks or bad actors, restoring organizational order.\n• Show generous understanding toward general team missteps, leading with vision.",
          "健康": "• Address root physical causes with precision therapies, restoring vitality.\n• Break destructive core lifestyle habits, greeting complete renewal.",
          "財運": "• Liquidate chronic losing assets decisively, eliminating financial risks.\n• Establish clean, robust financial structures, entering a long-term growth phase.",
          "人際": "• Draw firm boundaries with malicious troublemakers, holding upright dignity.\n• Embrace your broader circle with generous forgiveness, winning universal respect."
        }
      }
    },
    xian: {
      1: {
        name: "Emerging",
        text: "Resonance begins in the big toe, subtle and newly born. This symbolizes that connection is in its earliest stage; an intention has stirred within the mind, but outward action has not yet taken shape. There is no need to rush declarations; allow natural resonance to flow quietly.",
        guide: "Resonance stirs in the toe; intention begins quietly, so let things flow naturally.",
        focus: {
          "感情": "• Subtle mutual attraction begins to stir; savor this pure early spark.\n• Avoid rushing milestones; give each other space to connect naturally.",
          "事業": "• Creative inspiration is budding; conduct thorough research and validation.\n• Avoid premature announcements; focus on refining the core concept quietly.",
          "健康": "• Keep toes and feet warm, encouraging smooth circulation throughout the body.\n• Stay relaxed, listening to the subtle intuitive signals your body offers.",
          "財運": "• Sense emerging market opportunities early, tracking trends through observation.\n• Refrain from large capital deployments; begin with small, calculated tests.",
          "人際": "• Early impressions are warm and positive; engage with natural courtesy.\n• Build rapport through subtle, considerate interactions, laying good ground."
        }
      },
      2: {
        name: "Rooting",
        text: "Resonance rises into the calves; the calves twitch with the urge to move with the feet, but holding still brings great good fortune, while rushing forward invites misfortune. When meeting external temptation or internal restlessness, master impulsive urges, keeping your center still to welcome fortune.",
        guide: "Restlessness stirs in the calves; curb impulsive rushing and stay still for good fortune.",
        focus: {
          "感情": "• Curb the impulse to rush declarations or demand instant commitments.\n• Maintain calm, unhurried poise, letting love warm up through steady interaction.",
          "事業": "• Avoid jumping on market bandwagons or caught in team restlessness.\n• Hold to your professional positioning, building strength on solid ground.",
          "健康": "• Watch for calf cramps, muscle stiffness, or lower-body fluid retention.\n• Stretch your calves thoroughly before workouts, avoiding sudden sprinting.",
          "財運": "• Curb the restless urge to chase market rallies out of fear of missing out.\n• Stick to your established investment rules, guarding capital in quiet stillness.",
          "人際": "• Refuse to follow crowd hype, keeping your clear, independent judgment.\n• Show steady self-possession, earning the deep trust of those around you."
        }
      },
      3: {
        name: "Testing",
        text: "Resonance rises into the thighs, moving entirely at the whim of others and following their steps blindly—advancing invites regret. If you surrender your autonomy to chase and please others, you will find yourself compromised and humiliated. Pull back your steps and reclaim ownership of your path.",
        guide: "Following others blindly invites regret; stop dependent chasing and stand on your own.",
        focus: {
          "感情": "• Stop losing yourself in pleasing your partner, avoiding needy dynamics.\n• Reclaim your independent dignity and boundaries, earning equal respect.",
          "事業": "• Avoid letting projects get dragged along by domineering partners.\n• Stand firm on core requirements and bottom lines, refusing weak compromises.",
          "健康": "• Care for thighs, hip alignment, and sciatic nerve health with daily stretches.\n• Avoid prolonged sitting; take regular breaks to keep lower-body energy flowing.",
          "財運": "• Blindly following tips from self-styled gurus leads to avoidable losses.\n• Build an independent analytical framework, taking responsibility for your money.",
          "人際": "• Step away from relationships where you must play follower to be included.\n• Think independently without dancing to others' tunes, holding self-respect."
        }
      },
      4: {
        name: "Choosing",
        text: "Holding to what is right brings great good fortune, and all regret fades away. However, if the mind wanders in anxious restlessness, fixated only on making companions follow personal desires, resonance will remain narrow and weak. Release selfish calculations and connect with an open heart; the world will align naturally.",
        guide: "Hold fast to integrity and drop selfish calculation; broad sincerity touches the world.",
        focus: {
          "感情": "• Release anxious overthinking and scorekeeping; love with total sincerity.\n• Trust each other completely, enjoying lasting harmony in pure devotion.",
          "事業": "• Avoid second-guessing strategic directions, executing established plans with resolve.\n• Unite the team with pure purpose, winning steadfast support across all fronts.",
          "健康": "• Watch for chest tightness, heart palpitations, or sleep issues from overthinking.\n• Clear distracting thoughts through deep breathing and meditation, restoring calm.",
          "財運": "• Avoid over-trading out of restlessness; hold quality assets with patience.\n• Stand on transparent value investing, enjoying rewarding, peaceful returns.",
          "人際": "• Treat people with open honesty without plotting; win broad social trust.\n• Show expansive vision, drawing like-minded companions to your side."
        }
      },
      5: {
        name: "Manifesting",
        text: "Resonance reaches the flesh of the spine, steady and quiet, unmoved by external distractions, leaving no room for regret. Resonating in the spine symbolizes deep inner resolve and centered balance, untouched by superficial vanity. Inspiring others through grounded character, your influence is deep and lasting without fault.",
        guide: "Still as bedrock in the spine; deep character inspires hearts without regret.",
        focus: {
          "感情": "• Love is deep and understated, finding richness in quiet companionship.\n• Serve as a dependable, loving anchor for your partner, offering full safety.",
          "事業": "• Radiate composed leadership, standing firm amidst complex dynamics.\n• Deepen core business capabilities, guiding projects to success on real merit.",
          "健康": "• Care for spinal alignment, neck health, and core back muscle conditioning.\n• Keep your posture tall and grounded, letting vitality flow through the spine.",
          "財運": "• Asset allocations stand solid as rock, untouched by short-term market noise.\n• Commit to long-term wealth preservation, enjoying sustainable, compounding gains.",
          "人際": "• Quiet, dependable, and true to your word, deeply respected by those around you.\n• Commit carefully and fulfill faithfully, building an unshakeable network."
        }
      },
      6: {
        name: "Completing",
        text: "Resonance lingers only upon the cheeks, jaws, and tongue, moving only the mouth to utter sweet, flattering words. Superficial speech lacking deep substance and practical action is shallow and hollow. Release empty talk and express resonance through authentic, helpful action.",
        guide: "Resonance on the lips is empty show; replace talk with authentic, helpful action.",
        focus: {
          "感情": "• Stop relying on empty sweet talk; show genuine care through real action.\n• Help with practical life responsibilities, earning back deep trust.",
          "事業": "• Avoid relying on empty presentations; focus on delivering real results.\n• Let verified operational data speak for your work, building true credibility.",
          "健康": "• Watch for mouth sores, sore throat, gum inflammation, or dry mouth.\n• Hydrate adequately and choose clean meals, conserving vitality in silence.",
          "財運": "• Beware of smooth-talking sales pitches for opaque investment schemes.\n• Manage personal finances with grounded care, ignoring verbal promises.",
          "人際": "• Break habits of gossiping or superficial networking; treat others with honesty.\n• Speak with integrity and align words with deeds, sustaining lasting bonds."
        }
      }
    },
    heng: {
      1: {
        name: "Emerging",
        text: "Demanding deep and lasting results right at the very start will only invite misfortune and disappointment. True constancy grows through natural everyday accumulation, not forced haste. Release impatience and build solid roots from the ground up; advancing step by step ensures lasting success.",
        guide: "Avoid demanding depth too early; advance step by step to build lasting constancy.",
        focus: {
          "感情": "• Avoid pressuring your partner for lifelong vows right at the beginning; haste breaks momentum.\n• Give love time to unfold naturally, letting connection deepen through everyday care.",
          "事業": "• Set realistic initial targets rather than overreaching, building firm foundations.\n• Focus on executing daily workflows with care, avoiding the chase for instant wins.",
          "健康": "• Avoid jumping into extreme high-intensity workouts immediately, preventing muscle strain.\n• Start with foundational conditioning, building sustainable fitness habits over time.",
          "財運": "• Avoid chasing high returns with all-in bets early on, guarding against losses.\n• Build baseline capital through steady savings, waiting patiently for compound growth.",
          "人際": "• Avoid being overly familiar too quickly with new acquaintances; keep healthy boundaries.\n• Savor gentle, genuine friendships, allowing trust to deepen over time."
        }
      },
      2: {
        name: "Rooting",
        text: "Holding to the balanced center to sustain constancy clears away all regret. Avoid extremes—neither forcing momentum nor slacking off—holding your inner poise in a changing world. This balanced discipline keeps you unshakeable over time, ensuring smooth, lasting good fortune.",
        guide: "Hold to the balanced center to sustain constancy; balanced discipline clears away regret.",
        focus: {
          "感情": "• Keep a comfortable relationship pace—neither clingy nor distant—enjoying long harmony.\n• Protect gentle balance in everyday routines, sustaining steady and sweet happiness.",
          "事業": "• Advance workflows at a steady pace, avoiding both reckless rush and complacency.\n• Stand firm on core business and balanced ethics, seeing project results emerge steadily.",
          "健康": "• Maintain balanced daily habits; avoid both binge eating and extreme dietary restrictions.\n• Physical energy sustains lasting vitality and health through balanced moderation.",
          "財運": "• Allocate assets with balance, pairing safety with steady, reliable returns.\n• Keep income and spending in smooth balance, growing wealth steadily over time.",
          "人際": "• Treat others with fair, gentle grace, enjoying lasting and harmonious friendships.\n• Maintain comfortable, dependable partnerships with all allies, earning deep trust."
        }
      },
      3: {
        name: "Testing",
        text: "Failing to sustain virtue and bouncing unpredictably in mood and conduct invites shame and criticism from others, making it impossible to endure. Lacking inner resolve and constantly shifting course destroys trust and stability. Reflect deeply and reclaim firm, unshakeable principles.",
        guide: "Unpredictable wavering invites shame; rebuild firm resolve and stay true to principles.",
        focus: {
          "感情": "• Break habits of running hot and cold in love, stabilizing your emotional presence.\n• Hold fast to loyalty and responsibility, rebuilding foundational relationship trust.",
          "事業": "• Avoid shifting strategies constantly and confusing your team; set a clear course.\n• Maintain focus and execution, avoiding job-hopping or giving up halfway.",
          "健康": "• Break inconsistent workout habits, cultivating steady everyday self-discipline.\n• Keep consistent daily sleep hours, protecting your natural biological clock.",
          "財運": "• Stop chasing market hype and over-trading without discipline, which burns capital.\n• Stick to long-term investment rules, unmoved by short-term volatility.",
          "人際": "• Keep your word and match actions to words, never losing credibility with others.\n• Protect your reputation, winning back friends' respect through dependable character."
        }
      },
      4: {
        name: "Choosing",
        text: "Waiting for game in a barren field yields nothing after long waiting. True constancy must be rooted in the right direction and objective reality; persisting obstinately in the wrong place only wastes life and energy. Look up to clarify your bearings and adjust your position to achieve real results.",
        guide: "Clinging to the wrong place brings no gains; adjust your bearings and adapt flexibly.",
        focus: {
          "感情": "• Persisting with an unaligned person who offers no care only wastes your youth.\n• Let go with courage to seek mutual, genuine love meant for you.",
          "事業": "• When market demand disappears, do not cling obstinately to outdated products.\n• Pivot flexibly toward promising niche markets, using your skills in the right space.",
          "健康": "• If a wellness or workout method shows no results over time, consult experts to adjust.\n• Find lifestyle habits that truly fit your constitution rather than following fads blindly.",
          "財運": "• Clinging to deteriorating assets with poor fundamentals only sinks you deeper.\n• Rebalance your portfolio decisively, deploying funds into genuine growth assets.",
          "人際": "• Step away from cold social circles that drain you without offering true warmth.\n• Rebuild a healthy network where you find genuine nourishment and support."
        }
      },
      5: {
        name: "Manifesting",
        text: "Sustaining virtue brings good fortune to a supportive homemaker, but clinging rigidly to tradition brings limitation to a pioneering leader. True constancy lies in holding core virtue while adapting flexibly to change. Balancing firmness with supple adaptability achieves lasting success.",
        guide: "Balance constancy with flexible adaptability; avoid rigid, outdated attachment.",
        focus: {
          "感情": "• Hold fast to loyalty and tenderness while bringing fresh vitality into the bond.\n• Understand each other's roles, nurturing a lasting and harmonious home together.",
          "事業": "• Guard core values while innovating business models boldly to match the times.\n• Manage teams by pairing firm policies with human care, sustaining long-term growth.",
          "健康": "• Maintain good wellness habits while fine-tuning routines for age and season.\n• Balance physical stability with supple agility, staying vibrant and resilient.",
          "財運": "• Hold core quality assets for the long term while allocating flexibly to new sectors.\n• Manage wealth with steady adaptability, letting assets compound through the cycles.",
          "人際": "• Hold to ethical baselines while using diplomatic grace to keep connections alive.\n• Stand as a trusted leader who combines steady resolve with visionary foresight."
        }
      },
      6: {
        name: "Completing",
        text: "Pursuing constancy in restless agitation invites grave misfortune. As an endeavor nears completion, tossing and turning in anxious overhaul will only unravel established achievements. Halt restless agitation and return to calm stillness to preserve enduring success.",
        guide: "Restless agitation brings failure; return to calm stillness to protect achievements.",
        focus: {
          "感情": "• Stop stirring up unnecessary friction out of restlessness; cherish present peace.\n• Return to simple devotion, enjoying lasting happiness in quiet companionship.",
          "事業": "• As projects near delivery, avoid unnecessary overhauls; keep execution steady.\n• Secure achievements and review details with care, ensuring a polished finish.",
          "健康": "• Watch for cardiovascular strain and sleep issues caused by restlessness and anxiety.\n• Halt aggressive wellness fads, soothing body and mind through quiet meditation.",
          "財運": "• Gains are stable; avoid over-trading that chips away at long-term returns.\n• Hold steady like bedrock, protecting assets patiently to enjoy compound growth.",
          "人際": "• Keep a calm, steady presence, avoiding stirring up drama in social circles.\n• Enjoy fulfilling personal quiet, savoring enduring social harmony in peace."
        }
      }
    },
    dun: {
      1: {
        name: "Emerging",
        text: "Retreating at the very tail of the line leaves one exposed on the edge of danger; taking active action right now invites trouble. Sensing unfavorable circumstances with nowhere to withdraw, avoid frantic moves. Stand still, fulfill your duties, and avoid stirring up drama to stay completely safe.",
        guide: "Treading on the tail of retreat; avoid blind moves and stay still to prevent trouble.",
        focus: {
          "感情": "• When atmosphere feels tense, hold still rather than interrogating or pushing.\n• Manage your own emotions calmly, avoiding impulsive, extreme relationship choices.",
          "事業": "• Keep a quiet, low profile during organizational shake-ups without stepping out.\n• Fulfill daily duties quietly; avoid proposing radical reforms right now.",
          "健康": "• Halt high-intensity workouts when feeling exhausted, resting quietly.\n• Care for ankles, calves, and muscle fatigue, taking proper safety precautions.",
          "財運": "• Pause new capital allocations when holdings are in vulnerable spots; observe calmly.\n• Tighten daily spending and hold cash to prevent cash-flow pinches.",
          "人際": "• Stay neutral and avoid taking sides during social controversies, keeping quiet.\n• Speak with discretion, avoiding careless comments that make you an easy target."
        }
      },
      2: {
        name: "Rooting",
        text: "Binding resolve securely as with tough yellow oxhide, so that no force can shake it. This symbolizes unshakeable resolve and clear principles when deciding to step back. Unmoved by shallow worldly temptations or hollow promises, holding fast to your retreat brings great good fortune.",
        guide: "Bound with yellow oxhide; hold fast to retreat with unshakeable resolve for good fortune.",
        focus: {
          "感情": "• Stand faithful to your partner, unmoved by fleeting outside novelties.\n• Hold firm on relationship boundaries, protecting long-term health with clarity.",
          "事業": "• Execute strategic retrenchment plans with resolve, ignoring short-term hype.\n• Protect core technical assets and culture, gathering strength in quiet focus.",
          "健康": "• Follow your disciplined daily rhythms and health plans, keeping steady habits.\n• Digestive health strengthens; mental resilience stands solid as rock.",
          "財運": "• Execute asset preservation plans decisively, avoiding speculative lures.\n• Hold core quality assets for the long term, keeping wealth solid as a fortress.",
          "人際": "• Hold to your social principles, building an unshakeable bond with kindred allies.\n• Show resolute character, winning the deep and genuine respect of others."
        }
      },
      3: {
        name: "Testing",
        text: "Seeking to retreat but held back by emotional entanglements or personal attachments brings anxiety like a lingering illness. However, channeling this attachment into properly caring for and settling dependents turns peril into safety. Cut through messy entanglements and handle closure responsibly.",
        guide: "Entangled retreat brings worry; cut through attachments and settle closure responsibly.",
        focus: {
          "感情": "• Beware of staying in draining dynamics out of guilt or emotional dependence.\n• Settle practical matters cleanly and draw clear lines to end chronic exhaustion.",
          "事業": "• Settle personal obligations and hand over responsibilities cleanly when exiting.\n• Care for team members and resources responsibly, completing your transition.",
          "健康": "• Watch for digestive tension or sleep issues caused by emotional worry and guilt.\n• Release mental baggage through emotional detox, reclaiming lightness of spirit.",
          "財運": "• Guard against financial loss from informal loans or co-signing for others.\n• Untangle messy personal financial ties, drawing clear asset boundaries.",
          "人際": "• Decline unreasonable emotional demands, saying no to overstepping requests.\n• Treat loyal assistants with care, handling parting arrangements with grace."
        }
      },
      4: {
        name: "Choosing",
        text: "A truly noble leader retreats with graceful restraint, giving up attachments to welcome great good fortune, while a petty person clings to immediate gains and falls into blockage. Knowing how to let go of desire and step away gracefully at the right time embodies great vision.",
        guide: "Let go of attachment and retreat gracefully; the noble leader welcomes great fortune.",
        focus: {
          "感情": "• Keep clear self-discipline in love, avoiding clinging to temporary pleasure.\n• Give each other healthy personal space, sustaining lasting harmony with maturity.",
          "事業": "• Step down gracefully when projects peak before risks mount, pivoting to new fields.\n• Give up petty short-term gains to protect the larger vision, showing strategic foresight.",
          "健康": "• Break habits of overindulging in rich foods, keeping clean self-discipline.\n• Savor a light, disciplined lifestyle; body, mind, and spirit glow with balance.",
          "財運": "• Take profits decisively at market peaks, locking in gains gracefully.\n• Reject greedy temptations, protecting accumulated capital from sharp reversals.",
          "人際": "• Stay clear-headed even when praised in social circles, stepping back to reflect.\n• Walk away from vanity-driven名利場, guarding pure inner peace."
        }
      },
      5: {
        name: "Manifesting",
        text: "Retreating with exquisite grace, dignity, and unhurried composure while holding to what is right brings great good fortune. Choosing to step back at the perfect moment preserves your character and standing while leaving room for the next generation. This gracious wisdom wins universal praise.",
        guide: "Retreat gracefully at the right moment; poised withdrawal brings praise and fortune.",
        focus: {
          "感情": "• Handle relationship transitions with gentle dignity, wishing each other well.\n• Love reaches mature, spacious depth, enjoying happiness in mutual respect.",
          "事業": "• Pass the torch to rising talent after great achievements, transitioning to advisory roles.\n• Leave an inspiring career legacy, earning timeless respect across your industry.",
          "健康": "• Body and mind relax deeply after setting down worldly burdens; vitality is high.\n• Enjoy quality wellness routines and nature retreats, supporting long-term health.",
          "財運": "• Asset holdings transition smoothly to passive income and estate planning, ensuring ease.\n• Step away from high-risk fields, enjoying steady dividends and capital safety.",
          "人際": "• Highly respected for knowing when to step back, loved across diverse circles.\n• Social life is refined and peaceful, sharing meaningful time with kindred souls."
        }
      },
      6: {
        name: "Completing",
        text: "Transcending all worldly entanglements and doubts, soaring freely like a great bird in full ease, bringing universal favor. Free of lingering regret or hesitation, achieving complete spiritual liberation. This ultimate, expansive retreat reaches supreme fulfillment.",
        guide: "Soar freely without doubt or attachment; complete liberation achieves supreme fulfillment.",
        focus: {
          "感情": "• Love transcends possessiveness, reaching an expansive realm of soul companionship.\n• Walk together as free, equal souls, sharing lasting devotion and peace.",
          "事業": "• Transcend worldly pursuit of titles and wealth, dedicating yourself to pure ideals.\n• Leave an enduring legacy and noble example, serving as an inspiring beacon.",
          "健康": "• Body, mind, and spirit achieve pristine clarity, resting in full vitality.\n• Release all worldly anxieties, enjoying spiritual stillness and long-lived health.",
          "財運": "• Reach complete inner freedom with wealth, untethered from material numbers.\n• Wealth transforms into lasting family legacy and social goodwill, flowing endlessly.",
          "人際": "• Revered by all for timeless virtue, radiating warmth without obstacle.\n• Far from noisy social scenes, resting in timeless peace and harmony."
        }
      }
    },
    dazhuang: {
      1: {
        name: "Emerging",
        text: "Great strength gathers at the big toe; pushing forward recklessly on raw momentum brings misfortune. At the earliest stage when position and foundation are still young, avoid acting on impulsive pride. Restrain the urge to charge ahead; building strength quietly ensures safety and success.",
        guide: "Strength in the toes brings failure if forced; curb raw pride and build strength quietly.",
        focus: {
          "感情": "• Avoid acting overbearing in early romance, preventing unnecessary friction.\n• Stay humble and gentle, avoiding rushing milestones or demanding control.",
          "事業": "• Avoid showing off or making enemies when newly starting; work quietly.\n• Master core fundamentals without resting on early skill, preventing early setbacks.",
          "健康": "• Care for toes, feet, and lower-body joints, avoiding reckless sprinting.\n• Advance workouts gradually, preventing ligament strain from sudden force.",
          "財運": "• Avoid taking on large speculative investments with lean funds, preventing capital loss.\n• Build baseline savings steadily without chasing get-rich-quick gambles.",
          "人際": "• Stay modest and polite, avoiding boasting over minor knowledge.\n• Respect mentors and peers, making a solid first impression through quiet diligence."
        }
      },
      2: {
        name: "Rooting",
        text: "Holding to the balanced center to channel great strength brings great good fortune. Neither aggressive nor impulsive, guiding abundant energy along upright, measured lines. This balanced discipline keeps you invulnerable as your capability grows, welcoming solid blessings.",
        guide: "Hold to the center to guide strength; disciplined balance brings great good fortune.",
        focus: {
          "感情": "• Show grounded strength while offering your partner deep respect and warmth.\n• Keep balanced moderation in love, nurturing lasting harmony through open dialogue.",
          "事業": "• Project momentum is strong; manage teams and workflows with fair balance.\n• Keep an unhurried, steady pace, expanding business scope with solid results.",
          "健康": "• Physical energy is robust and well-managed; balance internal systems with care.\n• Maintain regular exercise and balanced meals, staying vibrant and strong.",
          "財運": "• Financial growth is steady and allocations are balanced, delivering reliable returns.\n• Stick to compliant, steady principles, balancing risk and reward with care.",
          "人際": "• Upright yet approachable, winning the deep respect and trust of your team.\n• Act with fair neutrality, building a broad and deeply rooted network of allies."
        }
      },
      3: {
        name: "Testing",
        text: "A petty person relies purely on brute force to ram ahead, while a noble leader uses wisdom and boundaries to master strength. Like an aggressive ram butting against a hedge, only to get its horns hopelessly tangled, caught in gridlock. Drop reckless aggression; avoid stubborn bravado that brings trouble.",
        guide: "The ram entangles its horns in the hedge; avoid brute force and reckless ramming.",
        focus: {
          "感情": "• Stop meeting force with force or issuing ultimatums, avoiding relationship gridlock.\n• Drop pride and ego, dissolving emotional walls with gentle wisdom.",
          "事業": "• When projects hit institutional or contract walls, avoid ramming head-on.\n• Respect industry rules and processes, using strategy to navigate around obstacles.",
          "健康": "• Watch for head bumps, eye strain, or fractures from aggressive contact sports.\n• Settle angry and impatient emotions promptly, keeping stress from straining health.",
          "財運": "• Fighting market trends with heavy leverage leads to severe losses and locked funds.\n• Stop impulsive trading immediately; avoid gambling to break even.",
          "人際": "• Avoid aggressive, cutting words that back you into a corner of hostility.\n• Learn to compromise and yield with grace, defusing conflicts before they flare."
        }
      },
      4: {
        name: "Choosing",
        text: "Holding fast to what is right brings great good fortune, and all regret fades away. The hedge is broken through without entanglement, and the wagon axle is strong and unshakeable. When you drop brute force and advance with upright virtue and skill, all barriers dissolve into open highways, carrying you to the peak.",
        guide: "The hedge yields and the axle holds strong; advance smoothly into great good fortune.",
        focus: {
          "感情": "• Real-world obstacles dissolve; romance advances smoothly into sweet harmony.\n• Step together into lasting commitment, building a happy shared life.",
          "事業": "• Project roadblocks clear completely; backed by resources, business surges ahead.\n• Show unstoppable drive, leading your team to victory and remarkable milestones.",
          "健康": "• Physical vitality flows freely; muscles and joints feel strong and agile.\n• Well-suited for ambitious fitness goals, enjoying the flow of vibrant health.",
          "財運": "• Financial bottlenecks clear away, with investment projects yielding rich returns.\n• Assets roll forward like a sturdy wagon, scaling capital with solid momentum.",
          "人際": "• Interpersonal friction melts away, winning the full support of powerful allies.\n• Radiate inspiring leadership; companions pull together to succeed seamlessly."
        }
      },
      5: {
        name: "Manifesting",
        text: "Losing a ram easily in the open fields without the slightest regret. This symbolizes letting go of aggressive, combative postures at the height of strength, returning to gentle, receptive balance. Using gentle yielding to master force, dropping confrontation brings supreme good fortune.",
        guide: "Release aggressive fighting to embrace gentle yielding; softness preserves supreme fortune.",
        focus: {
          "感情": "• Drop competitive scorekeeping, treating your partner with boundless tenderness.\n• Avoid bickering over petty points, harvesting deep and lasting love through care.",
          "事業": "• Possess formidable strength while adopting an approachable, collaborative style.\n• Look past petty gains, integrating resources with vision to lead your industry.",
          "健康": "• Body and mind shift from tight strain to relaxed ease; circulation is smooth.\n• Enjoy gentle yoga, walking, and stretching, nurturing inner supple vitality.",
          "財運": "• Keep an unhurried, generous wealth mindset, untroubled by minor daily swings.\n• Use steady, balanced asset allocation, enjoying lasting peace and financial safety.",
          "人際": "• Approachable and free of sharp edges, widely loved by everyone around you.\n• Master the art of yielding to turn rivals into allies, building a strong network."
        }
      },
      6: {
        name: "Completing",
        text: "A ram butts against a hedge, unable to advance or retreat, caught in awkward gridlock. Yet if one recognizes the mistake of reckless force and accepts hardship with quiet self-reflection, good fortune will arrive. Halt in time and reflect honestly to untangle the knot.",
        guide: "Unable to advance or retreat; awaken through trials and reflect honestly to find fortune.",
        focus: {
          "感情": "• Trapped in relationship gridlock; stop trying to win by hurting each other.\n• Own your mistakes and apologize sincerely, breaking deadlocks with gentle care.",
          "事業": "• Forcing initiatives has stalled progress; halt useless struggling immediately.\n• Accept short-term discomfort, re-evaluating strategy to find a fresh breakthrough.",
          "健康": "• Watch for muscle cramps, locked joints, or nervous fatigue from over-straining.\n• Give yourself restorative rest, allowing tissues time to heal naturally.",
          "財運": "• Trapped in stubborn market positions; avoid doubling down out of pride.\n• Accept present realities and prepare for the long haul, waiting for the cycle to turn.",
          "人際": "• Stubborn pride has frozen social relationships; stop butting heads with others.\n• Drop your ego to offer an olive branch, regaining respect through self-reflection."
        }
      }
    },
    jin: {
      1: {
        name: "Emerging",
        text: "Meeting setbacks right at the start of advancement; holding fast to what is right brings good fortune. Facing doubt, coldness, or lack of trust from outside, keep an expansive, spacious heart without rushing to prove yourself. Prepare your skills quietly; the morning light will break through.",
        guide: "Early advancement meets delays; hold to truth and spacious grace, as light will shine.",
        focus: {
          "感情": "• When trust is young or early friction appears, stay patient and sincere.\n• Give each other time to understand, showing generous poise in daily life.",
          "事業": "• Early promotions or proposals meet delays; avoid bitterness or fighting.\n• Polish your capabilities quietly, letting time and solid results prove your value.",
          "健康": "• Keep an unhurried, calm mindset, avoiding stress-induced heat or anxiety.\n• Maintain daily foundational workouts, building a resilient physical base.",
          "財運": "• Early investments show slow growth or minor dips; stick to disciplined plans.\n• Maintain ample liquidity, waiting patiently for returns to rebound.",
          "人際": "• Meet coldness with polite calm, avoiding rushing into defensive arguments.\n• Show generous character, earning deep recognition through the test of time."
        }
      },
      2: {
        name: "Rooting",
        text: "Advancing amidst sorrow and trials, yet holding fast to the balanced center brings great good fortune. This steadfast integrity wins supreme blessings and protection, like receiving favor from a royal matriarch. Weathering the storm with virtue brings vast, lasting rewards.",
        guide: "Enduring sorrow with integrity wins supreme blessings and lasting protection.",
        focus: {
          "感情": "• Weathering trials together makes relationship devotion deeper and more resilient.\n• Receive the warm blessings and support of family elders, enjoying deep harmony.",
          "事業": "• Uphold professional standards in tough times, earning the deep trust of leaders.\n• Receive major resource backing and mentorship, unlocking breakthrough career growth.",
          "健康": "• Moving past sub-health recovery, physical systems regain steady strength.\n• Digestion is smooth and circulation flows, enjoying deep internal vitality.",
          "財運": "• Enduring market troughs yields rich, explosive investment returns.\n• Secure funding support from mentors or institutions, expanding financial capacity.",
          "人際": "• Hard times reveal true companions, connecting you with powerful, generous mentors.\n• Upright character wins wide respect, building a solid foundation of allies."
        }
      },
      3: {
        name: "Testing",
        text: "Advancement wins the heartfelt trust, agreement, and support of the community, clearing away all regret. When your forward steps align with collective interests, everyone pulls together to lift you forward. Release feelings of isolation and unite with the group to advance with ease.",
        guide: "Win collective trust to advance together; united efforts clear away all regret.",
        focus: {
          "感情": "• Romance receives the warm approval and blessings of friends and family.\n• Settle into each other's circles, enjoying sweet joy backed by community support.",
          "事業": "• Proposals win consensus across teams and departments, advancing smoothly.\n• Possess strong public backing and charisma, bringing projects to life quickly.",
          "健康": "• Join team sports or group fitness activities, staying cheerful and vibrant.\n• Body and mind rest in an active, positive cycle; energy is high and unburdened.",
          "財運": "• Generate strong revenue through team ventures, partnerships, or co-creation.\n• Earnings grow through shared incentives, expanding wealth through win-win cooperation.",
          "人際": "• Deeply trusted by your team, standing as a popular and respected leader.\n• Welcome goodwill and resources from all sides, reaching peak social harmony."
        }
      },
      4: {
        name: "Choosing",
        text: "Scrambling for advancement and wealth like a greedy marmot, moving through questionable and secretive paths—holding to this brings danger. Using status for selfish gain or taking shortcuts will lead to exposure and ruin. Stop immediately and return to the open, honorable light of day.",
        guide: "Advancing like a greedy rodent brings danger; drop shady moves and return to the light.",
        focus: {
          "感情": "• Stop playing two-faced games or hiding secrets in romance; return to honesty.\n• Treat your partner with open sincerity; avoid destroying trust through greed.",
          "事業": "• Refuse to misuse authority for personal perks or steal others' credit; hold ethics.\n• Stop gray-area shortcuts, earning promotions through solid capability.",
          "健康": "• Watch for nervous exhaustion and chronic stomach tension born of guilt and fear.\n• Live with an open conscience; a clear mind restores true health and peace.",
          "財運": "• Steer clear of insider trading, illegal fundraising, or shady schemes to prevent ruin.\n• Clean up questionable financial gains, earning wealth through open, honest work.",
          "人際": "• Stay away from manipulative cliques that scheme in the dark; keep integrity clean.\n• Rebuild your credibility, repairing a damaged reputation through honesty."
        }
      },
      5: {
        name: "Manifesting",
        text: "Regret fades away completely; do not worry over petty gains and losses. Step forward boldly with great good fortune and universal favor. Release anxious scorekeeping, moving with broad vision along the wider current; all life will make way for your bright future.",
        guide: "Worry not over minor gains and losses; advance boldly into universal favor and fortune.",
        focus: {
          "感情": "• Release petty scorekeeping and overthinking, pouring your heart into love.\n• Build a beautiful shared life hand in hand, enjoying sweet, abundant happiness.",
          "事業": "• View project development from a grand lens, untroubled by minor short-term swings.\n• Advance grand visions with courage, winning wide support to reach new heights.",
          "健康": "• An open, spacious heart releases anxiety, bringing systems into harmony.\n• Savor an unhurried, healthy pace, radiating grounded confidence and vitality.",
          "財運": "• Maintain long-term investment vision, untroubled by daily noise; returns are rich.\n• Wealth compounds through spacious, long-term holdings, achieving financial ease.",
          "人際": "• Show expansive generosity, earning the deep admiration of all.\n• Avoid petty bickering, gathering allies and high standing through graciousness."
        }
      },
      6: {
        name: "Completing",
        text: "Advancement and discipline reach their peak, using horns of resolve to discipline your own city. Though the process is arduous, using this resolve to correct internal faults brings no blame. Strict self-reflection and internal governance preserve lasting, complete achievements.",
        guide: "Discipline internal faults with resolve; rigorous self-reflection secures completion.",
        focus: {
          "感情": "• Face and correct personal shortcomings in love, continuing to grow.\n• Heal internal household vulnerabilities together, guarding shared happiness.",
          "事業": "• Focus on internal optimization and workflow audits after success, preventing issues.\n• Enforce team discipline, consolidating achievements into an enduring business.",
          "健康": "• Take decisive steps to break lingering bad habits and clear root health issues.\n• Follow health disciplines with care, locking in a resilient, strong constitution.",
          "財運": "• Audit asset systems to seal leaks and eliminate wasteful spending, guarding wealth.\n• Secure your solid asset base without reckless outside expansion; holdings stand strong.",
          "人際": "• Practice strict self-discipline and correct unhealthy trends in your core circle.\n• Carry character through to the finish, earning timeless and deep respect."
        }
      }
    },
    mingyi: {
      1: {
        name: "Emerging",
        text: "At the onset of darkness and injury, flying low like a bird with drooping wings. The noble person chooses to retreat and step away as night falls, fasting for three days without regret. Though forward movement meets minor gossip, holding fast to your noble purpose turns early hardship into blameless fortune.",
        guide: "Recognize darkness early and retreat with care; holding to core conviction leaves no blame.",
        focus: {
          "感情": "• When romance meets heavy outside resistance, keep a low profile to avoid the storm.\n• Guard love's pure intention; endure brief misunderstandings without giving up.",
          "事業": "• Step back into the background when workplace politics sour, avoiding target zones.\n• Endure temporary marginalization, protecting your skills and professional standards.",
          "健康": "• Watch for low appetite, physical fatigue, or weakness caused by sudden stress.\n• Keep hope alive within, giving your body ample quiet rest to restore vital energy.",
          "財運": "• Spot market risks early and exit positions with discipline, absorbing minor dips.\n• Tighten spending and live simply, protecting baseline savings to weather the winter.",
          "人際": "• Keep silent when facing misunderstandings; avoid debating with shallow minds.\n• Protect your good name, seeking shelter among trusted mentors who understand you."
        }
      },
      2: {
        name: "Rooting",
        text: "Wounded in the left thigh during chaotic darkness, yet finding deliverance through the strength of a swift, robust horse—great good fortune. Though circumstances bring physical or practical setbacks, as long as your inner resolve and drive remain unbroken, decisive action will turn peril into renewed life.",
        guide: "Though wounded in trials, rescue yourself with vigor; strong resolve brings great good fortune.",
        focus: {
          "感情": "• Face practical setbacks together, breaking through adversity side by side.\n• Endure relationship trials; shared perseverance builds an unshakeable bond.",
          "事業": "• When projects suffer heavy hits, mobilize core resources decisively to rescue operations.\n• Show exceptional crisis management, leading your team to safety against the odds.",
          "健康": "• Watch for leg injuries, muscle strains, or acute flare-ups; seek medical care promptly.\n• Hold a strong recovery mindset; physical systems rebound rapidly with proper care.",
          "財運": "• Cut losses swiftly during financial shocks, deploying reserve funds to bridge gaps.\n• Execute bold restructuring plans, turning around liquidity crunches successfully.",
          "人際": "• Receive the timely backing of strong, loyal allies during critical moments.\n• Remember those who stood by you in hardship, forging lifelong bonds of loyalty."
        }
      },
      3: {
        name: "Testing",
        text: "Hunting across the southern plains, successfully capturing the chief architect of darkness. Yet in correcting old wrongs and clearing away disorder, one must avoid reckless haste. Eradicating deep-seated problems requires the patience of an enduring campaign; advance methodically to clear the shadows.",
        guide: "Capture the root cause without rushing; patient perseverance clears away disorder completely.",
        focus: {
          "感情": "• Pinpoint core misunderstandings or third-party interference, resolving them firmly.\n• Give each other time to heal; do not expect intimacy to normalize overnight.",
          "事業": "• Resolve root operational bottlenecks decisively, securing a major victory.\n• Design thorough post-crisis workflows to prevent old problems from recurring.",
          "健康": "• Target chronic health roots with precise treatment, eliminating underlying issues.\n• Recovery takes time; avoid rushing back into heavy exertion as symptoms improve.",
          "財運": "• Recover contested assets or resolve major debt bottlenecks, recouping past losses.\n• Restructure finances with steady discipline; avoid rushing into fresh market risks.",
          "人際": "• Cut ties decisively with troublemakers who stir gossip, keeping your circle clean.\n• Handle legacy interpersonal disputes with calm objectivity, prioritizing harmony."
        }
      },
      4: {
        name: "Choosing",
        text: "Entering deep into the belly of darkness, perceiving the hidden corruption at the very center, then stepping out the door and walking away quietly. Possessing sharp discernment and courage, seeing through structural decay without lingering to fight. Stepping away in time preserves your pure character and safety.",
        guide: "Discern the core of corruption and step away quietly; timely exit ensures complete safety.",
        focus: {
          "感情": "• Recognize toxic patterns and unbridgeable value divides, parting with resolve.\n• Let go of false hopes, walking away from unaligned dynamics to reclaim freedom.",
          "事業": "• Recognize irreversible organizational decay or violations, resigning with poise.\n• Step away safely before collapse, avoiding liability and protecting your name.",
          "健康": "• Care for digestive organs and abdominal health; examine deep root causes promptly.\n• Remove yourself from toxic, draining environments; body and mind heal naturally.",
          "財運": "• Spot investment traps or insolvency early, withdrawing capital safely in time.\n• Cut off potential financial black holes, protecting core assets from contamination.",
          "人際": "• See through manipulative social circles, quietly exiting groups and cutting ties.\n• Guard your integrity and character, staying far away from drama to enjoy peace."
        }
      },
      5: {
        name: "Manifesting",
        text: "Like Prince Jizi feigning madness under tyranny while keeping his sacred integrity alive within. Standing in a dark, hostile environment, using supreme understatement and quiet wisdom to preserve the sacred spark of truth brings great good fortune. Keeping inner light hidden beneath a gentle exterior ensures final triumph.",
        guide: "Practice wise understatement during dark seasons; inner clarity and outer gentleness bring fortune.",
        focus: {
          "感情": "• Practice gentle humility and avoid arguing over pride during domestic friction.\n• Hold fast to deep love within, protecting family peace with patient wisdom.",
          "事業": "• Under difficult management, work quietly without showing off sharp edges.\n• Avoid direct clashes with power, gathering strength while waiting for the turn.",
          "健康": "• Let go of petty disputes; an easy mind shields health from outside stress.\n• Keep optimistic clarity within, sustaining vital essence through mental peace.",
          "財運": "• Keep financial holdings discreet and unpublicized, avoiding unwanted attention.\n• Hold a conservative baseline during economic winters, protecting capital seeds.",
          "人際": "• Navigate complex social environments with polished grace, protecting yourself.\n• Earn the quiet admiration of the wise, standing as a clear-eyed keeper of light."
        }
      },
      6: {
        name: "Completing",
        text: "At first rising to illuminate the heavens, then plunging deep into the dark abyss. Darkness and oppression have reached their absolute peak; things turn at their extremes, and destructive forces are about to collapse. The long night is completing its final watch, and the dawn of renewal is about to break.",
        guide: "Darkness reaches its peak and begins to break; the long night ends as dawn approaches.",
        focus: {
          "感情": "• Romance moves past its darkest trials; emotional shadows clear completely.\n• Welcome reconciliation or a joyful fresh start as the dawn of love returns.",
          "事業": "• Oppressive barriers collapse completely, opening a dramatic turnaround.\n• The long waiting period ends; business steps back into the light of growth.",
          "健康": "• Chronic illness or exhaustion reaches a turning point; recovery begins.\n• Body and mind emerge from the dark, glowing with renewed life and vigor.",
          "財運": "• The long financial winter closes; market troughs turn into bull momentum.\n• Protected wealth seeds yield rapid growth, turning hardship into rich harvest.",
          "人際": "• Unfair criticism fades away as truth emerges, restoring your true standing.\n• Weathered trials bring the respect of your peers, celebrating the dawn together."
        }
      }
    },
    jiaren: {
      1: {
        name: "Emerging",
        text: "Establishing clear household boundaries and guidelines right from the start clears away all regret. When forming a relationship or building a team, set clear principles, boundaries, and shared roles early on. Mindful rules established in advance serve as the ultimate shield for lasting peace and purity.",
        guide: "Set clear rules at the beginning to prevent issues; early order clears away regret.",
        focus: {
          "感情": "• Set healthy boundaries and mutual ground rules early, preventing future friction.\n• Clarify expectations with honesty, building a strong base for shared happiness.",
          "事業": "• Define team charters and protocols at project kickoff, eliminating confusion.\n• Build structured operational checks, ensuring workflows advance with stability.",
          "健康": "• Follow consistent meal and sleep schedules from day one without slacking.\n• Build strong immune habits early, keeping poor lifestyle routines away.",
          "財運": "• Set strict budgeting and accounting habits, sealing small financial leaks.\n• Follow established savings rules, steadily building baseline family reserves.",
          "人際": "• Keep clear personal boundaries in social settings, preventing overstepping.\n• Move with grounded, principled conduct, winning the deep respect of others."
        }
      },
      2: {
        name: "Rooting",
        text: "Focusing on tending to domestic nourishment and managing household affairs with quiet devotion brings great good fortune. Rather than rushing outward for recognition, manage internal foundations and logistical support with structured care. This quiet, nurturing presence becomes an unshakeable anchor for all.",
        guide: "Focus on domestic nourishment and internal care; quiet devotion brings great good fortune.",
        focus: {
          "感情": "• Tend to everyday home life with care, nourishing your partner with warmth.\n• Focus on domestic harmony; love grows sweeter through dedicated presence.",
          "事業": "• Provide administrative, operational, and logistical support to back the frontline.\n• Polish internal product quality with quiet focus before expanding marketing.",
          "健康": "• Nourish digestive wellness with wholesome, balanced home-cooked meals.\n• Savor cooking and organizing the home, finding restorative peace in simplicity.",
          "財運": "• Manage daily household spending with care, putting every dollar to good use.\n• Focus on safe, capital-preserving asset setups, keeping family funds solid.",
          "人際": "• Welcome close friends with warm hospitality, offering sincere comfort.\n• Serve as a dependable, gentle pillar in your circle, trusted by everyone."
        }
      },
      3: {
        name: "Testing",
        text: "When managing the household with strict discipline, minor complaints and brief regret may arise, yet the home remains upright and fortunate; whereas indulgent chaos and endless partying lead to ruin. It is far better to bear minor complaints from strict standards than to invite decay through lax indulgence.",
        guide: "Strict governance brings minor complaints but good fortune; avoid reckless indulgence.",
        focus: {
          "感情": "• Stand on principles and boundaries; do not compromise them for brief peace.\n• Address bad habits firmly; though uncomfortable, it ensures long-term health.",
          "事業": "• Enforce performance standards strictly; avoid compromise without principles.\n• Correct team slackness firmly, upholding discipline to ensure final success.",
          "健康": "• Enforce strict wellness self-discipline, cutting out late nights, sugar, and alcohol.\n• Push through early adaptation discomfort; structured habits restore vitality.",
          "財運": "• Restrain large, non-essential spending firmly, avoiding luxury and waste.\n• Manage funds with strict compliance; minor complaints keep capital secure.",
          "人際": "• Point out mistakes to close allies with honest clarity, acting as a true friend.\n• Avoid joining low-brow, chaotic gatherings, protecting your upright standing."
        }
      },
      4: {
        name: "Choosing",
        text: "The household prospers in wealth and harmony, bringing great good fortune. Built on clear internal order and mutual alignment, family resources and blessings manifest in rich abundance. Guard this prosperity with humility, letting generous love flow through the home to enjoy lasting peace.",
        guide: "The household prospers with natural order; harmonious governance brings great fortune.",
        focus: {
          "感情": "• Shared life is rich and fulfilled, achieving deep harmony in mind and heart.\n• Build family wealth together, creating a high-quality, joyful life.",
          "事業": "• Team cohesion is strong and resources are full; projects yield rich gains.\n• Build healthy internal incentives, creating an empowering workplace community.",
          "健康": "• Physical energy is abundant and balanced; circulation flows with ease.\n• Enjoy a healthy, comfortable home environment, free of illness and stress.",
          "財運": "• Family asset holdings scale steadily, with strong returns on work and holdings.\n• Build secure multi-generational wealth systems, keeping reserves abundant.",
          "人際": "• Share family joy and resources with generosity, praised by neighbors and peers.\n• Stand as an inspiring example of a happy household, gathering goodwill."
        }
      },
      5: {
        name: "Manifesting",
        text: "The sovereign graces the household with noble virtue and deep affection; there is no need for anxiety, as supreme good fortune unfolds. As head of the home or core leader, inspire members through selfless love and character rather than intimidation. Others unite around your warmth in joyful harmony.",
        guide: "Lead with sovereign benevolence and love; harmony in the home brings supreme fortune.",
        focus: {
          "感情": "• Lead with mature, spacious care, offering your partner safety and warmth.\n• Treat each other with deep affection; home overflows with joy and laughter.",
          "事業": "• Leaders show human-centered charisma, uniting the team in shared purpose.\n• Foster a warm, empowering company culture, achieving remarkable milestones.",
          "健康": "• Mind is cheerful and untroubled by worry; body systems rest in balance.\n• Keep a compassionate heart, enjoying family joy and vibrant longevity.",
          "財運": "• Finances are managed with transparency, growing steadily through harmony.\n• Care for family and team welfare; flowing goodwill brings more abundance.",
          "人際": "• Respected and approachable, deeply loved by everyone in your circle.\n• Serve as a revered, steady pillar for family and friends in all seasons."
        }
      },
      6: {
        name: "Completing",
        text: "Holding deep integrity alongside natural authority, carrying things through to the end brings great good fortune. The pinnacle of home leadership combines clear, respected boundaries with authentic, caring devotion. Lead by example; your character ensures the household endures in prosperity.",
        guide: "Balance authority with sincere integrity; self-reflection ensures lasting fortune.",
        focus: {
          "感情": "• Love matures through the years with quiet dignity, growing old in mutual honor.\n• Set an inspiring family standard, revered as a role model by future generations.",
          "事業": "• Establish unshakeable professional authority and leadership, finishing strong.\n• Build enduring governance and cultural systems, ensuring lasting success.",
          "健康": "• Character and mindfulness reach mastery; presence is dignified and healthy.\n• Follow disciplined wellness habits, enjoying quiet peace and vibrant longevity.",
          "財運": "• Family wealth is solid as rock, passed down safely across generations.\n• Wealth transforms into lasting social good, creating enduring value for all.",
          "人際": "• Conduct yourself with balanced authority; your word carries weight and respect.\n• Serve as an inspiring moral beacon, guiding rising talent on the path."
        }
      }
    },
    kui: {
      1: {
        name: "Emerging",
        text: "At the onset of divergence and misunderstanding, all regret fades away. If a horse runs off, do not chase it in haste; it will return on its own. Seeing ill-disposed people, maintain upright self-discipline without plotting revenge, leaving no room for fault. Meet differences with calm ease; things will resolve naturally.",
        guide: "Do not chase lost horses; meet ill-disposed people with calm to stay blameless.",
        focus: {
          "感情": "• If your partner feels distant, do not interrogate; offer breathing room.\n• Stay centered with calm; they will naturally return with warmth once cool.",
          "事業": "• Stay poised if projects hit small differences or clients drift temporarily.\n• Keep polite distance from difficult rivals, focusing on sharpening your craft.",
          "健康": "• Watch for mild blood pressure spikes or restlessness from impatience; relax.\n• Nourish your system naturally, avoiding panic over minor temporary shifts.",
          "財運": "• Avoid over-trading to recover minor dips; wait patiently for conditions to settle.\n• Stick to sound asset allocations; capital returns naturally after the pullback.",
          "人際": "• Avoid rushing into defensive debates over small misunderstandings; let time speak.\n• Maintain polite courtesy with difficult figures, avoiding unnecessary feuds."
        }
      },
      2: {
        name: "Rooting",
        text: "Meeting the aligned leader unexpectedly in a narrow lane brings no blame whatsoever. During seasons of division and awkward barriers, step outside rigid formal protocols to engage in pragmatic, heartfelt dialogue. Aligning on shared goals in private dissolves friction and unlocks breakthrough progress.",
        guide: "Meet in the narrow lane through practical dialogue; breaking formality clears fault.",
        focus: {
          "感情": "• Step away from public awkwardness to share heartfelt talk in a cozy, private setting.\n• Speak authentic vulnerability and love, dissolving cold silences swiftly.",
          "事業": "• Resolve commercial deadlocks through informal meetings and private dialogue.\n• Adapt flexibly to complex dynamics, aligning with key leaders on mutual wins.",
          "健康": "• Explore personalized, holistic wellness methods with promising results.\n• Untangle inner emotional knots through confidential counseling and rest.",
          "財運": "• Discover quality partnership opportunities in quiet, specialized niche markets.\n• Resolve financial disagreements through pragmatic private negotiation.",
          "人際": "• Connect with key mentors unexpectedly, striking an immediate rapport.\n• Use private, discreet diplomacy to untangle interpersonal deadlocks with ease."
        }
      },
      3: {
        name: "Testing",
        text: "The wagon is dragged backward, the ox is halted in its tracks, and one's hair and nose are shorn in humiliation and obstruction. Yet, though the beginning is steeped in hardship and misunderstanding, holding fast to truth will bring a harmonious finish in the end. Patient endurance leads to complete fulfillment.",
        guide: "The wagon is dragged back and hardship is heavy, yet enduring with integrity wins in the end.",
        focus: {
          "感情": "• Romance faces outside opposition or painful misunderstandings; do not give up.\n• Stand faithful through trials together; your bond will win universal blessings.",
          "事業": "• Project momentum faces heavy pushback and unfair criticism, moving slowly.\n• Endure with resilient grit; real milestones will clear away every grievance.",
          "健康": "• Care for facial skin, nose, hair vitality, or fatigue from chronic stress.\n• Push through early recovery discomfort; physical strength restores fully over time.",
          "財運": "• Investments face heavy paper drops and locked funds; avoid panic-selling.\n• Wait out the dark cycle with patience; holdings will rebound strongly in time.",
          "人際": "• Endure petty gossip and marginalization with dignity, refusing to trade insults.\n• Time reveals true character; facts will win you profound and lasting respect."
        }
      },
      4: {
        name: "Choosing",
        text: "Standing isolated amidst opposition, you fortunately meet an upright, noble companion. Joining together in complete mutual trust to navigate the perilous terrain leaves no room for blame. Finding an ally who truly understands you amid division allows you to break through together.",
        guide: "Isolated amidst division, unite with an upright ally; mutual trust dissolves peril.",
        focus: {
          "感情": "• Meet an aligned soulmate in lonely seasons, loving each other with sincerity.\n• Face outside criticism together; your bond grows unshakeable in mutual trust.",
          "事業": "• Bring on a capable partner when isolated, breaking through hurdles together.\n• Build deep trust with key allies, overcoming major technical bottlenecks.",
          "健康": "• Partner with a trusted health specialist or coach to build a wellness plan.\n• Break free of social isolation, healing emotional wounds in authentic dialogue.",
          "財運": "• Secure funding from trustworthy strategic investors, breaking capital isolation.\n• Launch joint investments with quality partners, sharing risks and rewards.",
          "人際": "• Make loyal, upright friends in hardship, forging unshakeable lifelong bonds.\n• Step out of isolation to align with positive peers, revitalizing your network."
        }
      },
      5: {
        name: "Manifesting",
        text: "Regret fades away completely as kindred companions bite through soft meat with ease, breaking all barriers to unite in purpose. Step forward boldly; how could there be any fault? All past misunderstandings and differences dissolve into complete alignment; advance without obstacle.",
        guide: "Regret dissolves as kindred allies unite; breaking barriers brings smooth progress.",
        focus: {
          "感情": "• Break through emotional defenses and misunderstandings, reuniting in sweet love.\n• Step into deep mutual alignment, co-creating an inspiring new life together.",
          "事業": "• Team friction clears completely; core members pull together with immense drive.\n• Projects surge ahead with momentum, winning acclaim from leaders and market.",
          "健康": "• Energy and circulation flow freely; digestion and jaw tension ease naturally.\n• Vitality is high and spirits are clear; overall physical wellness improves.",
          "財運": "• Partnership divides clear up; joint investment projects pay rich dividends.\n• Cash flow circulates with ease, scaling capital rapidly through teamwork.",
          "人際": "• Clear the air with close friends, enjoying deeper and closer camaraderie.\n• Show strong charisma and unifying warmth; united strength overcomes every hurdle."
        }
      },
      6: {
        name: "Completing",
        text: "Clouded by suspicion, one at first mistakes the other for a mud-stained beast or a cart of demons, drawing a bow to strike; yet lowering the bow reveals a sincere partner arriving for sacred marriage. Releasing suspicion invites sweet rain and supreme good fortune.",
        guide: "Drop suspicion to welcome noble union; clearing doubts brings rain and great fortune.",
        focus: {
          "感情": "• Release lingering suspicions and defensiveness, seeing your partner's true love.\n• Tears turn to joyful celebration, sealing a lifelong vow of enduring devotion.",
          "事業": "• Clear misunderstandings with partners, realizing you are ideal complementary allies.\n• Sign key strategic agreements, achieving brilliant success by turning rivals into friends.",
          "健康": "• Suspicion, fear, and anxiety melt away, soothing body and mind like sweet rain.\n• The nervous system unwinds deeply, enjoying lasting peace and vibrant health.",
          "財運": "• See through market panic to acquire quality, undervalued assets during selloffs.\n• Hardships reverse into unexpected abundance, harvesting complete financial success.",
          "人際": "• Heal old suspicions with friends, turning past friction into lifelong loyalty.\n• Show sweeping, gracious understanding, winning universal respect and blessings."
        }
      }
    },
    jian: {
      1: {
        name: "Emerging",
        text: "Advancing leads to steep obstacles, while halting in time and stepping back brings honor and praise. Sensing unfavorable terrain at the onset, avoid charging ahead on raw impulse. Knowing when to halt and cultivate yourself aligns with great wisdom, earning the respect of all.",
        guide: "Halt before obstacles; knowing when to step back to cultivate virtue earns praise.",
        focus: {
          "感情": "• Avoid rushing declarations when timing is off; step back into friendly comfort.\n• Maintain poised grace and give space, winning their natural affection and respect.",
          "事業": "• Pause proposals upon spotting regulatory or market walls, refining plans.\n• Show cool-headed strategic judgment, preventing wasteful investments for the team.",
          "健康": "• Halt strenuous workouts at the first sign of fatigue, resting quietly.\n• Avoid pushing through pain; catch issues early to protect long-term health.",
          "財運": "• Pause trades when market risks rise, holding cash to prevent capital losses.\n• Follow risk-management rules strictly, securing long-term financial initiative.",
          "人際": "• Stay quiet and low-key when social dynamics feel complex, avoiding the spotlight.\n• Show thoughtful poise in advancing or stepping back, winning praise from mentors."
        }
      },
      2: {
        name: "Rooting",
        text: "As a dedicated leader, shouldering heavy trials for the greater mission rather than personal ambition. Even when navigating arduous and steep adversity, persevering in selfless duty with a clean conscience will ultimately win the blessings and honors of heaven and earth.",
        guide: "Shoulder trials selflessly for the whole; serving duty with integrity leaves no regret.",
        focus: {
          "感情": "• Bear life's heavy pressures selflessly for the family's long-term happiness.\n• Show quiet, devoted responsibility, earning your partner's deep love and gratitude.",
          "事業": "• Take on the toughest turnaround tasks during crisis, serving the collective good.\n• Fulfill duties without personal ego, earning the deep trust of leaders and teams.",
          "健康": "• Balance hard work with rest, avoiding over-depleting your physical vitality.\n• Hold a clear, noble purpose, meeting fatigue with strong mental resilience.",
          "財運": "• Shoulder short-term financial burdens to protect core family assets with honor.\n• Stand on ethical, honest wealth baselines; virtue yields lasting prosperity.",
          "人際": "• Step up to protect collective interests during crises, showing steadfast loyalty.\n• Stand as a dependable anchor in your group, holding unshakeable respect."
        }
      },
      3: {
        name: "Testing",
        text: "Advancing brings greater obstacles, while turning back to internal foundations brings joyful reunion with loved ones. When outward expansion hits a wall, do not ram blindly; pivot to protect your home base and core team. Resting in the warmth of loved ones brings deep joy and peace.",
        guide: "Turn back from outward obstacles; protecting the home base brings joyful peace.",
        focus: {
          "感情": "• Return to the warm harbor of home after outside setbacks, comforted by love.\n• Guard your private world together, enjoying sweet comfort in each other's arms.",
          "事業": "• Pull back when outside expansion stalls, focusing on deepening core business.\n• Fortify internal team structures, gathering strength in quiet preparation.",
          "健康": "• Cut down on travel and social obligations, spending restful time at home.\n• Enjoy wholesome home routines; physical energy and immunity recover rapidly.",
          "財運": "• Halt risky foreign or speculative investments, returning capital to safe assets.\n• Protect steady household cash reserves, keeping finances secure as rock.",
          "人際": "• Step away from shallow outside networking, returning to your trusted inner circle.\n• Spend quality time with family and close friends, enjoying authentic warmth."
        }
      },
      4: {
        name: "Choosing",
        text: "Advancing blindly leads into steep depths, while stepping back to form alliances brings powerful support. Lone-wolf tactics cannot break through current bottlenecks; set aside individual pride and unite closely with aligned peers. Harnessing collective strength allows you to cross obstacles safely.",
        guide: "Unite with allies rather than fighting alone; collective strength clears obstacles.",
        focus: {
          "感情": "• Discuss major challenges openly with your partner instead of carrying it alone.\n• Lean on shared family wisdom and resources, solving practical tests together.",
          "事業": "• Seek cross-functional or cross-industry partnerships when projects hit walls.\n• Build win-win strategic alliances, overcoming major technical challenges together.",
          "健康": "• Consult multiple medical specialists when managing complex chronic ailments.\n• Join fitness communities or wellness groups, staying motivated alongside peers.",
          "財運": "• Ease liquidity pinches through syndicated financing or joint partnerships.\n• Pool quality resources for shared investment, spreading risk while growing gains.",
          "人際": "• Step out of isolation, building steady, long-term collaboration networks.\n• Integrate social resources with care, winning strong support through mutual aid."
        }
      },
      5: {
        name: "Manifesting",
        text: "Standing in the midst of severe adversity, loyal companions and benefactors arrive in numbers to offer powerful support. Because you hold to the balanced center and live with noble virtue, your trials inspire support from all sides. Allies rally around you, dissolving hardship into triumphant breakthrough.",
        guide: "Support rallies from all sides in severe trials; united allies turn hardship to victory.",
        focus: {
          "感情": "• Romance weathers storms with full support, arriving at a lasting commitment.\n• Receive warm blessings and practical help from all sides, enjoying family joy.",
          "事業": "• Leaders show inspiring charisma during crises, drawing top talent to join the fight.\n• Backed by core resources and strong allies, projects break through to success.",
          "健康": "• Connect with skilled specialists and cutting-edge therapies, healing ailments.\n• Body and mind recover fully under caring support, glowing with renewed vitality.",
          "財運": "• Receive major strategic capital or policy support during critical moments.\n• Share prosperity with strong partners, unlocking explosive growth in returns.",
          "人際": "• Highly respected and loved by all; allies rally at your call in challenging times.\n• Build an unshakeable alliance of top-tier peers; influence reaches its peak."
        }
      },
      6: {
        name: "Completing",
        text: "Advancing blindly leads to dead ends, while stepping back to seek the guidance of wise elders brings great good fortune. As an endeavor nears its close, avoid rushing for credit; humble yourself to seek wise counsel and support the larger mission. This complete wisdom achieves noble greatness.",
        guide: "Step back to seek wise counsel and support the whole; humility brings great completion.",
        focus: {
          "感情": "• Drop pride and listen to wise counsel from elders or mentors, finding peace.\n• Love reaches mature, spacious depth, co-creating lasting and stable happiness.",
          "事業": "• Consult recognized industry authorities after breakthroughs to secure wins.\n• Support capable leaders selflessly, guiding the team into an elevated new era.",
          "健康": "• Body, mind, and spirit achieve serene clarity, free of obstacles and healthy.\n• Follow time-tested wellness wisdom, enjoying a high-quality, long-lived life.",
          "財運": "• Entrust assets to top professional institutions, scaling wealth steadily.\n• Invest in endeavors of enduring cultural and social value, winning wealth and honor.",
          "人際": "• Forge deep bonds with revered spiritual mentors, earning universal respect.\n• Finish with complete integrity, standing as an inspiring role model for all."
        }
      }
    },
    jie: {
      1: {
        name: "Emerging",
        text: "At the moment deliverance and release first arrive, all things proceed without blame. Like ice just melting into spring waters, heaven and earth rest in tranquil peace. What is needed most right now is to rest, replenish vital energy, and restore composure, avoiding restless over-activity and enjoying the pure relief of renewal.",
        guide: "Rest quietly as gridlocks first dissolve; replenishing body and mind brings complete freedom from blame.",
        focus: {
          "感情": "• Misunderstandings have just cleared; offer each other quiet, tender presence without dredging up old debts.\n• Savor peaceful moments together, allowing connection to mend naturally in comfort.",
          "事業": "• Immediate crises have eased; resume daily operations steadily to rest and regroup.\n• Avoid rushing into new campaigns immediately; focus on refining workflows and consolidating order.",
          "健康": "• Prioritize deep sleep and clean, gentle nutrition following recovery from illness or burnout.\n• Avoid jumping into intense workouts; give your body ample time for natural self-repair.",
          "財運": "• Financial strain has just eased; manage cash flow conservatively without making sudden moves.\n• Postpone major new capital commitments, protecting newly unlocked liquidity safely.",
          "人際": "• Keep courteous, gentle interactions after friction settles, avoiding forced intimacy.\n• Enjoy a clean, peaceful social environment, rebuilding trust through quiet ease."
        }
      },
      2: {
        name: "Rooting",
        text: "Hunting in the field, one captures three cunning foxes and secures a straight, golden arrow; persevering on the true path brings great good fortune. In the process of untangling difficulties, eliminate hidden opportunists and deceptive forces with precision. Upholding upright, golden justice ensures total triumph.",
        guide: "Capture the cunning foxes and secure the golden arrow; upholding upright justice brings complete victory.",
        focus: {
          "感情": "• Uncover and cut through deceptive half-truths or third-party interference firmly.\n• Stand faithful to loyalty, holding fast to pure, golden sincerity with your partner.",
          "事業": "• Eliminate operational loopholes and double-dealing from the team, cleaning up the work culture.\n• Demonstrate exceptional problem-solving and decisive enforcement; workflows advance rapidly.",
          "健康": "• Identify hidden, underlying causes of sub-health accurately, clearing them at their root.\n• Circulation and digestion thrive; physical systems radiate strong, resilient vitality.",
          "財運": "• Uncover and recover misappropriated or defrauded assets, securing rightful financial gains.\n• Anchor investments in lawful, compliant value assets, growing wealth securely like gold.",
          "人際": "• Clear out flattering, divisive influences decisively, keeping your circle clean.\n• Win the deep respect and trust of all through an upright, unshakeable moral backbone."
        }
      },
      3: {
        name: "Testing",
        text: "A humble porter carrying a heavy burden rides arrogantly in an ornate carriage, which will inevitably draw highway bandits to attack; persisting in this invites shame. Status unbacked by character and flashy arrogance only bring unprovoked trouble. Curb vanity and pride immediately, returning to humble duty to stay safe.",
        guide: "Status unbacked by character invites robbery; curb vanity and return to humble duty.",
        focus: {
          "感情": "• Drop vanity and putting on false airs in love, avoiding hollow pretense.\n• Treat your partner with unadorned honesty; avoid letting showiness ruin a good bond.",
          "事業": "• Recognize your actual bandwidth; avoid grasping at high-stakes roles beyond your grasp.\n• Work with low-key humility; avoid flashing results that spark resentment from colleagues.",
          "健康": "• Watch for injuries caused by vanity-driven extreme fitness or showing off.\n• Return to simple, natural lifestyle habits, lightening unnecessary physical burdens.",
          "財運": "• Avoid taking on loans for luxury status symbols or vanity spending beyond your means.\n• Keep assets quiet without flashing wealth, preventing opportunistic scams and borrowing requests.",
          "人際": "• Break habits of boasting in social circles, maintaining a modest, grounded presence.\n• Level up your real capabilities steadily, earning enduring respect through true substance."
        }
      },
      4: {
        name: "Choosing",
        text: "Untie and release the bonds from your big toes, and aligned companions will arrive with sincere trust to offer their support. Decisively cut off draining habits, outworn beliefs, or improper social entanglements. When you take the initiative to break free from self-imposed limits, true mentors and allies will rally to your side.",
        guide: "Release the bonds on your toes; cut off unhealthy ties and true allies will gather in trust.",
        focus: {
          "感情": "• Cut off lingering ambiguous ties from the past, dedicating yourself fully to true love.\n• Treat each other with complete trust; love warms up sweetly in pure devotion.",
          "事業": "• Eliminate dragging, ineffective workflows or unqualified contractors decisively.\n• Attract capable, high-integrity partners to join, driving projects forward swiftly.",
          "健康": "• Break free from lingering bad habits that hold your health back, enjoying total ease.\n• Care for toes and lower-body circulation, keeping your extremities warm and flexible.",
          "財運": "• Liquidate chronic losing investments decisively, freeing up capital liquidity.\n• Form investment partnerships with trustworthy, capable allies, growing wealth steadily.",
          "人際": "• Exit draining social circles decisively, rebuilding a clean, uplifting network.\n• Connect with trustworthy, positive companions who share your values, empowering each other."
        }
      },
      5: {
        name: "Manifesting",
        text: "The noble leader untangles all constraints with exceptional resolve—great good fortune—whereupon petty influences withdraw in surrender. Righteous truth is restored; using noble character and decisive choices, you guide the landscape into complete clarity and flourishing, welcoming supreme fortune.",
        guide: "The noble leader untangles constraints; petty influences withdraw as great fortune unfolds.",
        focus: {
          "感情": "• Resolve long-standing family friction and crises, welcoming a sweet, fresh relationship chapter.\n• Show mature, grounded responsibility, offering your partner boundless safety and joy.",
          "事業": "• Leaders carry out bold organizational transformation and clearing, unlocking breakthroughs.\n• Establish unshakeable professional authority, guiding the team to new industry heights.",
          "健康": "• Chronic ailments and fatigue melt away completely; body and mind feel thoroughly liberated.\n• Circulation is rich and vitality is high, enjoying vibrant, radiant physical wellness.",
          "財運": "• Financial crises clear away and liabilities are settled, unlocking rapid wealth growth.\n• Investment allocations are precise and effective, rapidly scaling capital in a clean environment.",
          "人際": "• Authority reaches its peak as petty gossip fades, earning universal, heartfelt respect.\n• Stand as an admired, trusted leader in your community, enjoying a clean, harmonious network."
        }
      },
      6: {
        name: "Completing",
        text: "The prince shoots from high atop the city wall, striking down the predatory hawk with a single arrow—everything moves forward with universal favor. In the final phase of resolving difficulty, possess sharp insight and resolute courage to eliminate the core obstacle perched on high. Complete success and victory follow.",
        guide: "Strike down the hawk from the high wall; precise action eliminates the root obstacle in complete victory.",
        focus: {
          "感情": "• Resolve the core practical obstacle holding back marriage, bringing love to fruition.\n• Step hand in hand into a joyful, harmonious marriage, sharing lifelong happiness.",
          "事業": "• Conquer the most critical technical bottleneck or business obstacle, achieving instant renown.\n• Demonstrate mastery in leadership decision-making, guiding the enterprise to historic success.",
          "健康": "• Eradicate root causes of illness through precise medical or lifestyle care, restoring full health.\n• Body, mind, and spirit achieve pristine clarity and vigor, enjoying long-lived vitality.",
          "財運": "• Capture once-in-a-generation investment opportunities with precision, reaping exceptional returns.\n• Secure critical core assets successfully, achieving complete, abundant wealth.",
          "人際": "• Resolve major collective crises with decisive courage during critical moments, widely celebrated.\n• Finish with complete integrity, standing as an admired and inspiring leader for all."
        }
      }
    },
    sun: {
      1: {
        name: "Emerging",
        text: "Setting aside your own tasks to rush forward to help others brings no blame, yet one must evaluate personal capacity carefully, decreasing personal comfort with mindful balance. Helping others is a noble virtue, but avoid overextending past your limits; achieve beautiful harmony by acting within your means.",
        guide: "Help others promptly while evaluating your capacity; balanced decrease leaves no blame.",
        focus: {
          "感情": "• Offer practical help the moment your partner needs it, while maintaining healthy boundaries.\n• Avoid bottomless self-sacrifice in love; enjoy happiness through balanced mutual care.",
          "事業": "• Step up to support cross-functional teams in urgent moments, showing great teamwork.\n• Assess team bandwidth realistically, avoiding over-promising that delays your core tasks.",
          "健康": "• Balance hard work with rest when helping others, avoiding physical exhaustion.\n• Maintain moderate exercise and rest, keeping bodily systems in healthy balance.",
          "財運": "• Offer modest financial help to friends in real emergencies within your safe means.\n• Avoid co-signing loans or making large commitments beyond your capacity, protecting capital.",
          "人際": "• Helpful generosity wins a wonderful reputation; set firm boundaries on unreasonable asks.\n• Show poise and mature boundaries, cultivating genuine, healthy friendships through mutual aid."
        }
      },
      2: {
        name: "Rooting",
        text: "Holding fast to the true path brings great good fortune; advancing recklessly right now invites misfortune, while preserving your core strength without diminishing yourself ultimately enriches the whole. Stand firm on your foundations; offering sustainable support without harming your roots ensures lasting success.",
        guide: "Protect your core without harming your roots; holding to truth brings great good fortune.",
        focus: {
          "感情": "• Guard your independent dignity and self-respect; avoid people-pleasing that lowers self-worth.\n• Nourish each other as equals, sustaining lasting relationship harmony in mutual respect.",
          "事業": "• Stand firm on core competencies and business boundaries; avoid unprofitable price-cutting.\n• Protect the organization's core capability, creating social value through steady operations.",
          "健康": "• Protect your sleep and wellness boundaries strictly, refusing health-damaging overwork.\n• Vital energy is fortified through steady self-discipline, keeping your body strong and resilient.",
          "財運": "• Make capital safety your first rule, avoiding high-risk ventures that risk your foundation.\n• Generate steady profits from core business, growing wealth without diminishing your baseline.",
          "人際": "• Stand on principles rather than drifting with crowds; never compromise values to fit in.\n• Move with principled self-respect, winning the deep and universal admiration of others."
        }
      },
      3: {
        name: "Testing",
        text: "When three travel together, differences in opinion will inevitably cause one to drop away; while walking alone, one will surely meet a true, kindred companion. In partnerships, overly complex multi-party arrangements only breed friction and doubt; simplicity, focus, and dedicated depth form the strongest alliance.",
        guide: "Three traveling together loses one, while one alone finds a true friend; focus on simple depth.",
        focus: {
          "感情": "• Devote yourself to pure exclusivity in love, cutting off all ambiguous multi-party ties.\n• Focus fully on each other, harvesting deep soul resonance in pure partnership.",
          "事業": "• Streamline the core leadership structure, removing redundant voices to sharpen execution.\n• Focus on one-on-one deep strategic alliances; projects advance swiftly in close alignment.",
          "健康": "• Focus on one workout modality suited to your constitution rather than trying too many.\n• Clear cluttered mental noise, finding physical and mental harmony through focused calm.",
          "財運": "• Focus capital into the single core asset you understand best, avoiding over-diversification.\n• Streamline partnership structures, defining equity shares clearly to ensure profitable returns.",
          "人際": "• Prune superficial social circles, stepping away from lukewarm crowds to cultivate true friends.\n• Connect with loyal, trustworthy soul companions who stand by you through thick and thin."
        }
      },
      4: {
        name: "Choosing",
        text: "Decreasing one's own faults and shortcomings prompts others to arrive swiftly with joy—completely free of blame. Face your weaknesses and reform them with courage, laying down stubborn pride. When you show the resolve to self-correct, helpful mentors and allies will rally to support you with delight.",
        guide: "Correct your faults with courage; self-renewal draws supportive allies swiftly with joy.",
        focus: {
          "感情": "• Correct bad habits and short tempers pointed out by your partner; warmth returns quickly.\n• Express love through sincere self-adjustment, winning full acceptance and affection.",
          "事業": "• Fix project flaws and workflow bottlenecks swiftly, winning high praise from clients.\n• Reflect on team weaknesses with courage and reform them, securing strong leadership backing.",
          "健康": "• Treat chronic physical ailments with decisive care, welcoming joyful recovery.\n• Break destructive lifestyle habits completely; physical systems rebound rapidly with strength.",
          "財運": "• Eliminate losing assets and budget leaks from your portfolio; financial health improves.\n• Correct flawed money habits, opening fresh, high-quality avenues for profitable growth.",
          "人際": "• Accept constructive feedback from friends with humility and reform, rebuilding your reputation.\n• Show the noble character of honest self-correction, drawing exceptional partners to collaborate."
        }
      },
      5: {
        name: "Manifesting",
        text: "Receiving a magnificent blessing equal to ten pairs of sacred tortoises, which no opposing force can resist—supreme good fortune. Because you have long practiced the noble virtue of giving selflessly to enrich others, the universe returns blessings a hundredfold. Welcome this abundance in alignment with truth; prosperity flows without end.",
        guide: "Blessed by sacred tortoises, heaven bestows immense abundance; supreme good fortune unfolds.",
        focus: {
          "感情": "• Romance welcomes a blessed, soulmate harmony; treasure each other with deep devotion.\n• Step hand in hand into a joyful, sacred marriage, sharing an abundant, harmonious home.",
          "事業": "• The enterprise receives major policy tailwinds or top-tier strategic capital, rising unstoppably.\n• Projects achieve explosive, transformative growth, becoming a celebrated industry benchmark.",
          "健康": "• Body, mind, and spirit achieve pristine vitality and harmony; health is robust and long-lived.\n• Rest in the warm glow of gratitude and peace, enjoying exceptional life vitality and joy.",
          "財運": "• Asset holdings expand with unstoppable momentum; wealth flows in like rising tides.\n• Harvest extraordinary investment returns, securing lasting abundance for future generations.",
          "人際": "• Revered for noble virtue, you find goodwill, help, and deep respect from all sides.\n• Build an unshakeable reputation of honor, standing as an admired role model in your field.",
          "其他/不確定": "【Yielding to Gain】 Selfless giving returns ten pairs of sacred tortoises; sincere service wins immense divine abundance.",
          "未選": "【Yielding to Gain】 Selfless giving returns ten pairs of sacred tortoises; sincere service wins immense divine abundance."
        }
      },
      6: {
        name: "Completing",
        text: "Enriching the whole without diminishing oneself brings no blame; holding fast to the true path brings great good fortune, making it favorable to launch grand endeavors. You have earned the heartfelt support of the community, looking beyond narrow domestic boundaries. Dedicate yourself to the greater good, achieving supreme fulfillment.",
        guide: "Enriching the whole without loss brings great fortune; serving the collective achieves supreme completion.",
        focus: {
          "感情": "• Love reaches an elevated depth beyond selfish interest, walking hand in hand with universal care.\n• Serve the community together, harvesting lasting happiness in selfless devotion.",
          "事業": "• Business scope transcends petty competition, guiding the entire industry ecosystem to win-win growth.\n• Win the devoted loyalty of exceptional talent, building an enduring, legendary enterprise.",
          "健康": "• Body and spirit achieve complete, serene transcendence; life energy is balanced and vibrant.\n• Hold a benevolent, spacious heart, radiating vitality and enjoying long, peaceful wellness.",
          "財運": "• Wealth transforms into philanthropic and community foundations, building enduring merit.\n• Reach complete material and spiritual abundance, leaving an honorable, lasting legacy.",
          "人際": "• Revered and celebrated across generations, your moral presence inspires all around you.\n• Move with unhindered grace, guiding others toward a brighter future with expansive vision."
        }
      }
    },
    yi_increase: {
      1: {
        name: "Emerging",
        text: "Favorable to seize the momentum of abundance to launch grand, pioneering endeavors—supreme good fortune without blame. In the early stage of receiving supportive conditions, avoid timidity or hesitation. Step up boldly with responsibility, translating this powerful expanding momentum into tangible success.",
        guide: "Undertake grand works during seasons of increase; seizing momentum boldly brings supreme fortune.",
        focus: {
          "感情": "• Seize the perfect window of deepening affection to express feelings or make marriage vows.\n• Map out an inspiring family future together, stepping hand in hand into a joyful chapter.",
          "事業": "• Capitalize on policy and resource tailwinds, launching major core pioneering projects boldly.\n• Lead your team to conquer new markets with decisive courage, seizing the strategic high ground.",
          "健康": "• Take advantage of high physical vitality to launch a structured fitness plan, boosting stamina.\n• Keep an ambitious, positive mental state, letting buoyant energy nourish bodily meridians.",
          "財運": "• Seize growth tailwinds to make strategic investments; future returns look exceptionally bright.\n• Integrate quality resources to scale capital, laying strong cornerstones for future growth.",
          "人際": "• Connect with high-caliber, visionary partners, uniting in purpose to achieve great things.\n• Show bold, accountable leadership, winning the deep trust and loyalty of your peers."
        }
      },
      2: {
        name: "Rooting",
        text: "Receiving a magnificent blessing equal to ten pairs of sacred tortoises, which no opposing force can resist; persevering on the true path brings enduring good fortune. The sovereign offers solemn prayers to heaven, moving in harmony with divine will without obstacle. Protected by deep blessings, holding to truth ensures smooth success in all things.",
        guide: "Blessed by sacred tortoises, heaven protects your path; holding to truth brings enduring fortune.",
        focus: {
          "感情": "• Romance enjoys deep, soulmate blessings; heart-to-heart alignment brings lasting devotion.\n• Guard loyalty and integrity together, enjoying a harmonious home protected by divine grace.",
          "事業": "• Projects receive unshakeable institutional backing and policy tailwinds, advancing smoothly.\n• Uphold core professional ethics, leading your team steadily to the top of your field.",
          "健康": "• Body and mind achieve exceptional harmony and balance; immunity is robust and circulation flows.\n• Maintain gratitude and reverence, enjoying a healthy, peaceful, and high-quality life.",
          "財運": "• Asset holdings expand in alignment with natural growth; long-term returns are rich.\n• Manage wealth with steady, ethical discipline; assets stand solid as rock.",
          "人際": "• Character earns deep reverence, meeting helpful mentors and generous support at every turn.\n• Build an enduring, top-tier network of allies, enjoying unshakeable prestige and success."
        }
      },
      3: {
        name: "Testing",
        text: "Channeling the momentum of abundance to bring rescue during times of distress and calamity brings no blame. Anchor in supreme sincerity, walk along the balanced path of truth, and present the jade scepter of authority to leadership. Using resources to relieve suffering during crises dissolves all danger through justice.",
        guide: "Use abundance to relieve distress and calamity; walk the center with sincerity to dissolve peril.",
        focus: {
          "感情": "• Offer total support and presence when your partner meets setbacks; true devotion shines in trials.\n• Overcome practical hurdles together; love grows deeper and stronger through hardship.",
          "事業": "• Step up to deploy resources and rescue distressed projects, turning adversity into triumph.\n• Report to leadership with transparent compliance, demonstrating exceptional crisis leadership.",
          "健康": "• Deploy precise, effective medical care for acute health flare-ups, recovering swiftly.\n• Maintain a strong, resolute recovery mindset; bodily systems rebound quickly with care.",
          "財運": "• Allocate capital to acquire undervalued distressed assets during downturns for outsized gains.\n• Deploy counter-cyclical investments during market panic, turning crisis into massive profit.",
          "人際": "• Extend generous help to friends in hardship, forging lifelong bonds of loyalty.\n• Show noble, chivalrous generosity, earning the deep respect and love of your community."
        }
      },
      4: {
        name: "Choosing",
        text: "Walking the balanced middle path, advising leadership with sincerity and winning full agreement. Favorable to use this trust to guide major relocations, structural shifts, and institutional renewal. Standing at the central hub with a selfless, public-minded heart, guide the whole organization into a prosperous new land.",
        guide: "Guide major transformation through sincere advice; selfless leadership brings great success.",
        focus: {
          "感情": "• Communicate major life transitions openly, reaching full alignment in total trust.\n• Lead major family relocations or home improvements together, upgrading happiness.",
          "事業": "• Present visionary strategic proposals to leadership and win full backing to execute.\n• Guide corporate relocation, structural reorganization, or major pivots to great success.",
          "健康": "• Well-suited for relocating to environments with cleaner air and nature for wellness.\n• Transform unhealthy living routines completely, breathing fresh vitality into body and mind.",
          "財運": "• Capitalize on regional development or relocation policies for strategic real estate moves.\n• Secure policy or institutional funding support; investment initiatives expand rapidly.",
          "人際": "• Serve as a vital bridge connecting leadership with frontline teams, deeply trusted by both.\n• Harmonize stakeholder interests during collective transformation, earning wide loyalty."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding deep sincerity and compassion, blessing the world with benevolent kindness—there is no need to ask or divine, as supreme good fortune unfolds. People everywhere respond to your virtue with heartfelt devotion. Selfless service achieves supreme charisma; all hearts align, bringing complete, abundant blessings.",
        guide: "Bless the world with sincere benevolence; universal devotion brings supreme good fortune.",
        focus: {
          "感情": "• Love each other with selfless sincerity; romance reaches the peak of sweet harmony.\n• Co-create a family filled with love and compassion, enjoying blessings that inspire all.",
          "事業": "• The enterprise leads with social responsibility and purpose, winning fervent public love.\n• Leaders inspire their teams through virtue; employees give their all to build greatness.",
          "健康": "• Body and spirit achieve pristine clarity and compassion; vitality is rich and radiant.\n• Keep a pure, loving heart, enjoying vibrant longevity and profound inner peace.",
          "財運": "• Business credibility reaches an unshakeable peak; wealth flows in like a surging river.\n• Share prosperity generously with team and society, unlocking boundless, lasting wealth.",
          "人際": "• Revered and loved by all, standing as an admired moral compass for the era.\n• Warm everyone with unconditional love, harvesting life's purest and deepest respect."
        }
      },
      6: {
        name: "Completing",
        text: "Refusing to enrich others while grasping selfishly will inevitably draw harsh attacks from all sides; lacking constancy in virtue brings grave misfortune. Holding status while hoarding resources selfishly will lead to total abandonment. Curb greed immediately; learn to share to avert disaster.",
        guide: "Selfish greed invites harsh attacks; curb selfishness and share wealth to avert disaster.",
        focus: {
          "感情": "• Break habits of taking without giving in love, preventing relationship collapse.\n• Learn to care and give selflessly, rebuilding fragile trust through sincerity.",
          "事業": "• Avoid hoarding all credit and gains after success, preventing team rebellion.\n• Establish fair profit-sharing mechanisms immediately, soothing internal discontent.",
          "健康": "• Watch for cardiovascular spikes, strokes, or stress caused by greedy anxiety.\n• Release mental fixations; practice generosity and relaxation to soothe internal heat.",
          "財運": "• Hoarding profits stubbornly invites commercial lawsuits and partner pushback.\n• Share dividends and donate charitably; distributing wealth preserves your foundation.",
          "人際": "• Selfishness alienates your circle, leaving you cornered and under attack.\n• Drop pride and apologize sincerely to the community, learning to treat others with care."
        }
      }
    },
    guai: {
      1: {
        name: "Emerging",
        text: "Strength gathers in the forward toes; rushing ahead before capability is mature will only lead to failure and blame. In the early stage of resolving corruption, avoid acting rashly on righteous anger or overconfidence. Recognize your limits, building adequate strength before taking action.",
        guide: "Advancing prematurely on weak footing brings blame; gather strength before acting.",
        focus: {
          "感情": "• Avoid pressuring your partner for instant decisions in early romance, preventing pushback.\n• Stay gentle and unhurried; do not force relationship milestones before conditions are ripe.",
          "事業": "• Avoid pushing radical reforms or challenging old structures when newly starting.\n• Master core operational basics quietly, avoiding early setbacks born of overconfidence.",
          "健康": "• Warm up with care before workouts to prevent toe and ankle ligament sprains.\n• Advance physical training gradually, avoiding tissue strain from sudden force.",
          "財運": "• Avoid making large speculative all-in bets with lean capital, preventing losses.\n• Build baseline savings and conduct thorough research, ignoring impulsive urges.",
          "人際": "• Avoid clashing publicly with others on impulse, keeping a low, composed profile.\n• Respect mentors and rules, building your voice steadily through quiet accumulation."
        }
      },
      2: {
        name: "Rooting",
        text: "Keeping vigilant alarm and mindful care, one can meet night raids with calm composure without worry—great good fortune. When driving major reforms and breakthroughs, stay prepared with crisis awareness. Establish thorough contingency plans; unexpected attacks from the dark will not shake you.",
        guide: "Stay vigilant and prepared for night raids; mindful readiness brings great good fortune.",
        focus: {
          "感情": "• Spot subtle relationship concerns early and resolve them through dialogue, preventing issues.\n• Build a firm foundation of mutual trust, untouched by outside gossip or rumors.",
          "事業": "• Build structured risk controls and contingency plans during project execution.\n• Respond to sudden competitive threats with cool composure, turning risk into victory.",
          "健康": "• Maintain good preventive habits, adjusting clothing promptly as weather shifts.\n• Wind down before sleep; the nervous system enjoys deep, restorative rest in calm.",
          "財運": "• Enforce stop-loss rules and defensive allocations to withstand market black swans.\n• Capital safety lines stand solid as rock, weathering market swings with ease.",
          "人際": "• Move with thorough discretion, guarding against hidden manipulation by bad actors.\n• Show steady composure under pressure, earning the deep trust of your allies."
        }
      },
      3: {
        name: "Testing",
        text: "Displaying resolute tension in the cheekbones while walking alone through pouring rain, splashed with mud and facing outside misunderstanding, yet walking without blame. Endure temporary loneliness, criticism, and grievance to uphold righteous purpose; persevering on the true path will reveal your innocence.",
        guide: "Endure mud and misunderstanding while walking alone; holding to truth reveals your innocence.",
        focus: {
          "感情": "• Endure temporary outside opposition to guard true love, walking forward together.\n• Stand faithful through storms together; love grows deeper through shared trials.",
          "事業": "• Hold to the right reform direction despite pushback from vested interests.\n• Push key projects forward through isolation, answering doubts with real results.",
          "健康": "• Watch for facial nerve tension, jaw clenching, or colds from rain and chill.\n• Take warm baths to clear coldness, releasing emotional frustration to protect health.",
          "財運": "• Stick to independent value investing, even if ridiculed by the crowd in the short term.\n• Weather short-term market dips and volatility, capturing extraordinary strategic gains.",
          "人際": "• Meet temporary misunderstandings with quiet poise, refusing to trade insults.\n• Show independent, fearless character; time will prove your visionary foresight."
        }
      },
      4: {
        name: "Choosing",
        text: "Skin is grazed on the thighs, making walking slow and arduous; following behind the flock of sheep would dissolve regret, yet one obstinately refuses to believe wise counsel. Facing setbacks and wounds, drop stubborn pride, listen to wise advice, and yield with grace to emerge safely.",
        guide: "Walking is slow with grazed thighs; drop pride and heed wise counsel to clear regret.",
        focus: {
          "感情": "• Stop stubborn fighting after relationship wounds; listen to your partner's heart.\n• Drop pride and apologize with humility; connection will find fresh life.",
          "事業": "• Avoid forcing stalled initiatives on ego; seek guidance from experienced veterans.\n• Align with the broader team's plan, stepping into a supportive role to rebuild strength.",
          "健康": "• Watch for thigh strains, sciatic discomfort, or mobility issues from lower-body strain.\n• Follow clinical advice and rest quietly, avoiding pushing through physical pain.",
          "財運": "• Halt trading immediately after heavy losses, consulting seasoned wealth advisors.\n• Accept realized losses, using conservative strategies to rebuild capital steadily.",
          "人際": "• Break habits of stubborn refusal to listen, seeking counsel from wise peers.\n• Show a teachable attitude, regaining the trust and support of your allies."
        }
      },
      5: {
        name: "Manifesting",
        text: "Uprooting tough weeds from dry soil with balanced resolve brings complete freedom from blame. Facing deep-seated contradictions, avoid both rash haste and weak compromise; hold to balanced, resolute action to eradicate corruption, ushering in complete clarity and good fortune.",
        guide: "Uproot stubborn weeds with balanced resolve; precise action clears corruption without blame.",
        focus: {
          "感情": "• Eliminate destructive habits or third-party interference firmly, leaving no doubt.\n• Guard family principles with gentle firmness, welcoming a fresh, peaceful chapter.",
          "事業": "• Lead from the center with decisive resolve, eradicating organizational corruption.\n• Resolve core operational bottlenecks, advancing business rapidly in a clean space.",
          "健康": "• Eradicate chronic health roots with targeted medical care, clearing them completely.\n• Circulation flows freely and systems find balance, sustaining robust wellness.",
          "財運": "• Liquidate toxic assets and non-compliant contracts decisively, closing financial holes.\n• Financial structures are clean and transparent, growing wealth steadily.",
          "人際": "• Draw firm boundaries against unrepentant bad actors, fostering clean social circles.\n• Act with impartial fairness, earning the deep respect and loyalty of your team."
        }
      },
      6: {
        name: "Completing",
        text: "At the final threshold of breakthrough, moving in silence without clear alarm or vigilance brings ultimate misfortune. In the closing phase of victory, becoming complacent and dropping your guard invites sudden counter-attacks from residual shadows. Finish with vigilant care to preserve your triumph.",
        guide: "Moving without alarm brings misfortune; stay vigilant in the final phase to prevent reversal.",
        focus: {
          "感情": "• Avoid dropping your guard after resolving conflicts; nurture connection with care.\n• Maintain gentle attentiveness, keeping small cracks from taking root in neglect.",
          "事業": "• Review final deliverables strictly as projects near completion, preventing missteps.\n• Maintain high risk awareness, clearing residual issues to ensure a polished close.",
          "健康": "• Avoid reckless lifestyle habits after recovery, preventing relapses.\n• Maintain disciplined wellness routines, locking in complete recovery gains.",
          "財運": "• Lock in gains and take profits after investment wins, avoiding greedy reversals.\n• Monitor settlement details strictly, preventing late-stage counterparty defaults.",
          "人際": "• Stay humble and low-key during victory, avoiding boasting that sparks envy.\n• Treat every ally with care from start to finish, protecting your enduring standing."
        }
      }
    },
    gou: {
      1: {
        name: "Emerging",
        text: "Braking the wheels securely with a bronze brake, holding fast to truth brings great good fortune; letting the cart roll blindly invites disaster, like a lean pig kicking about in restlessness. When negative influences or temptations first sprout, apply the brakes with firm resolve to prevent trouble at its root.",
        guide: "Brake the wheels with bronze; apply firm restraint early to prevent trouble at its source.",
        focus: {
          "感情": "• Brake immediately when unhealthy temptations appear, holding firm to boundaries.\n• Stand faithful to your partner, quenching small sparks that could harm connection.",
          "事業": "• Halt questionable shortcuts or compliance risks the moment they appear.\n• Follow operating protocols strictly, keeping small errors from growing into major crises.",
          "健康": "• Rest immediately at the first sign of fatigue or chills, stopping illness early.\n• Break unhealthy dietary impulses early, building strong immune defenses.",
          "財運": "• Cut losses immediately when market risks appear or investments deviate.\n• Reject tempting, unregulated high-yield pitches firmly, protecting baseline capital.",
          "人際": "• Stay alert when meeting disingenuous figures, stepping back to keep safe distance.\n• Hold to your principles, giving manipulative individuals no room to overstep."
        }
      },
      2: {
        name: "Rooting",
        text: "A fresh fish rests in the kitchen basket—completely free of blame—yet it is unfavorable to offer it to outside guests. When coming into valuable opportunities, resources, or creative ideas unexpectedly, keep them sheltered internally rather than broadcasting them prematurely, protecting your rightful interests.",
        guide: "Fish rests in the basket; protect gains internally without premature public display.",
        focus: {
          "感情": "• Cherish sweet, private moments together without needing to show off to outsiders.\n• Guard shared intimacy and safety; love deepens in quiet devotion.",
          "事業": "• Guard core proprietary tech and trade secrets within the team, preventing leaks.\n• Polish products with quiet focus, launching them when timing is completely mature.",
          "健康": "• Nourish internal vitality with clean, nutrient-dense wholesome foods.\n• Savor restful home recovery, gathering abundant energy in quiet comfort.",
          "財運": "• Keep sudden financial windfalls or opportunities discreet without flashing wealth.\n• Guard against informal borrowing or hasty partnerships, keeping funds secure.",
          "人際": "• Share resources with trusted inner allies, avoiding showy displays with outsiders.\n• Keep a discreet, modest presence, steering clear of unwanted attention and envy."
        }
      },
      3: {
        name: "Testing",
        text: "Skin is grazed on the thighs, making walking slow and arduous; though in danger, holding to what is right leaves no room for major blame. Wanting to pursue external allure but held back by objective barriers, this constraint actually serves as protection, keeping you from sinking into mud.",
        guide: "Thighs are grazed and walking is slow; outward barriers serve as protection to keep you safe.",
        focus: {
          "感情": "• Hitting barriers while pursuing unaligned connections helps you let go in time.\n• Be grateful for practical delays that kept you from making wrong relationship choices.",
          "事業": "• Projects hit temporary delays in new fields; pause and reflect to avoid greater loss.\n• Protect core operations, rebuilding professional depth amidst obstacles.",
          "健康": "• Care for sciatic discomfort, leg strains, or muscle fatigue; rest quietly.\n• Avoid rushing to travel when exhausted, giving your body time to heal naturally.",
          "財運": "• Capital limits kept you from chasing speculative bubbles, saving you from market crashes.\n• Value the barriers that protected your baseline funds, returning to conservative investing.",
          "人際": "• Meeting coldness in unaligned circles helps you step away, protecting your reputation.\n• Guard noble character in solitude, earning enduring respect through patient integrity."
        }
      },
      4: {
        name: "Choosing",
        text: "The kitchen basket is completely empty of fish, which will inevitably stir public discontent and misfortune. Detached from the grassroots and having lost public goodwill and core resources, you find yourself cornered in scarcity. Drop status immediately and reconnect with the community.",
        guide: "An empty basket stirs discontent; reconnect with the grassroots to restore support.",
        focus: {
          "感情": "• Neglecting your partner's emotional needs breeds cold distance, sparking crisis.\n• Offer practical care and quality time, warming their heart with sincere presence.",
          "事業": "• Losing touch with real customer needs or frontline teams risks project failure.\n• Step into the field to listen to feedback, realigning business offerings.",
          "健康": "• Depleted nutrition or chronic exhaustion weakens vitality; replenish systems promptly.\n• Supplement with clean protein and wholesome nutrients, restoring digestive vitality.",
          "財運": "• Investments lacking real cash flows and asset backing face depreciation.\n• Liquidate hollow assets, returning capital to quality projects with solid fundamentals.",
          "人際": "• Aloof pride alienates you from friends, leaving you isolated; reflect with humility.\n• Drop your ego to care for companions, rebuilding warm, supportive friendships."
        }
      },
      5: {
        name: "Manifesting",
        text: "Wrapping a sweet melon in lush medlar leaves, keeping noble gifts quietly hidden within, one naturally receives supreme blessings descending from heaven. Rather than flaunting brilliance, cultivate virtue with humility and spacious wisdom. Align with natural timing, welcoming supreme fulfillment.",
        guide: "Wrap the sweet melon and conceal brilliance; natural alignment brings heaven's blessings.",
        focus: {
          "感情": "• Treat each other with understated devotion; love is sweet and rich like ripe melon.\n• Step into soulmate harmony, enjoying a blessed, joyful home protected by grace.",
          "事業": "• Lead from high status with unhurried wisdom, empowering teams with spacious vision.\n• Projects achieve natural, brilliant success, setting an enduring benchmark in the field.",
          "健康": "• Body and mind rest in radiant harmony; skin glows and vital energy flows.\n• Enjoy a refined, wholesome lifestyle, savoring long-lived vitality in peace.",
          "財運": "• Asset holdings experience natural, explosive compounding growth; abundance flows.\n• Forward-looking allocations bear fruit, delivering steady, long-term yields.",
          "人際": "• Highly revered for unpretentious wisdom, loved and admired by people of all walks.\n• Embrace all with spacious generosity, serving as a trusted mentor to many."
        }
      },
      6: {
        name: "Completing",
        text: "Using horns to butt and confront others; though isolated and facing difficulty, there is no blame. In the final phase of chance encounters, when facing improper entanglements, hold firm to your unyielding principles. Though appearing aloof, you completely protect your personal dignity and purity.",
        guide: "Hold firm with horns against entanglement; though aloof, holding boundaries brings no blame.",
        focus: {
          "感情": "• State your boundaries firmly against persistent, unaligned pursuers, rejecting ambiguity.\n• Though appearing strict, you completely safeguard your emotional clarity and peace.",
          "事業": "• Say no with resolve to non-compliant proposals or unreasonable demands.\n• Protect long-term corporate reputation and compliance, even if a few take offense.",
          "健康": "• Watch for head tension or headaches caused by an unyielding, intense mindset.\n• Hold firm to wellness self-discipline, rejecting social demands that harm health.",
          "財運": "• Reject gray-market get-rich pitches decisively, protecting baseline capital.\n• Forgo petty short-term gains rather than exposing assets to regulatory risk.",
          "人際": "• Draw clear lines with unaligned figures, staying aloof rather than compromising values.\n• Show unshakeable moral backbone, earning the deep respect of noble companions."
        }
      }
    },
    cui: {
      1: {
        name: "Emerging",
        text: "Holding sincerity but failing to sustain it to the end leads to confusion and scattered momentum. Yet with one sincere, rallying call, aligned companions will break into smiles and gather in close unity, leaving no blame. Release doubt and speak your authentic truth; sincerity unites powerful strength.",
        guide: "One call brings laughter and unity; speak with authentic truth to rally allies safely.",
        focus: {
          "感情": "• Clear away hesitation and doubt, expressing your true feelings openly.\n• Communicate with transparent vulnerability; laughter returns, and love deepens.",
          "事業": "• Reconnect a scattered team at project kickoff by communicating a clear shared vision.\n• Rebuild team trust with sincerity, aligning execution for a smooth start.",
          "健康": "• Watch for chest tightness or digestive sluggishness caused by emotional worry.\n• Clear emotional heaviness through honest sharing, restoring internal balance.",
          "財運": "• Clarify profit-sharing rules with partners transparently, removing hidden doubts.\n• Pool scattered funds into core ventures, co-creating greater commercial value.",
          "人際": "• Break social distance and chilliness, rallying friends with warm enthusiasm.\n• Radiate genuine, open charisma, gathering allies in joyful harmony."
        }
      },
      2: {
        name: "Rooting",
        text: "Yielding to wise guidance and gathering in unity brings great good fortune without blame. As long as you hold deep sincerity within, even offering humble, simple gifts touches heaven and earth. Strip away formal pretense; uniting in unadorned sincerity ensures lasting good fortune.",
        guide: "Unite with sincere guidance; simple offerings touch heaven and bring great fortune.",
        focus: {
          "感情": "• Move closer to your partner with sincere love, treating them with pure honesty.\n• Modest gestures filled with deep love touch the heart, rooting connection deeply.",
          "事業": "• Step into the core project team willingly, contributing your key skills.\n• Polish product substance with dedicated craftsmanship, winning client trust.",
          "健康": "• Choose simple, wholesome, and natural meals, easing digestive and organ stress.\n• Keep your heart pure and reverent, enjoying health and ease in simple routines.",
          "財運": "• Launch business initiatives through lean, high-trust collaboration models.\n• Deploy funds pragmatically without waste, earning steady returns from a small start.",
          "人際": "• Accept invitations with a warm heart, connecting with others in authentic honesty.\n• Bond with genuine friends who value honest character, enjoying lasting ties."
        }
      },
      3: {
        name: "Testing",
        text: "Seeking to unite but falling into sighs and frustration brings no benefit. However, stepping forward decisively to align with a strong, balanced leadership core leaves no lasting blame, despite minor initial awkwardness. Drop useless sighs and seek worthy alignment with courage.",
        guide: "Drop sighs and seek worthy alignment; turning to a balanced core leaves no blame.",
        focus: {
          "感情": "• Stop sighing over unaligned dynamics; step forward to seek genuine love.\n• Drop pride and make the first move; minor awkwardness saves a treasured bond.",
          "事業": "• When projects feel sidelined, seek guidance and resources from senior leadership.\n• Overcome hesitation to integrate into the core team, giving the venture new life.",
          "健康": "• Watch for fatigue, shallow breathing, or low immunity caused by chronic sighing.\n• Step into outdoor sunshine and social warmth, clearing away mental clouds.",
          "財運": "• Seek strategic partnership with established, quality platforms to ease capital limits.\n• Accept minor concessions to secure core asset safety, benefiting over the long haul.",
          "人際": "• Step out of isolated thinking, moving closer to inspiring mentors and circles.\n• Accept guidance with humility, reclaiming your unique value within the group."
        }
      },
      4: {
        name: "Choosing",
        text: "Great good fortune without blame. Holding status and responsibility to unite the community, remaining selfless without seeking private gain, and supporting leadership and the broader mission with devotion. This pure loyalty and spacious spirit dissolves jealousy, bringing supreme fortune.",
        guide: "Unite the community with selfless loyalty; great good fortune clears away all fault.",
        focus: {
          "感情": "• Serve as a selfless, dependable anchor in the family, sheltering loved ones.\n• Treat each other with open trust; love finds fulfillment in selfless devotion.",
          "事業": "• Integrate cross-departmental resources and top talent, achieving major victories.\n• Support leadership selflessly without boasting, earning universal admiration.",
          "健康": "• Body and mind rest in balanced harmony; energy is buoyant and presence is strong.\n• Maintain an expansive spirit, enjoying deep inner joy through service to others.",
          "財運": "• Lead capital integration and restructuring initiatives, creating massive value.\n• Distribute gains fairly, winning complete partner trust and exceptional returns.",
          "人際": "• Stand as a trusted, respected organizer, gathering allies with easy warmth.\n• Welcome diverse talents to achieve great works, building an unshakeable network."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding status to unite the community brings no blame. Yet if full public trust is not yet established, continue to cultivate enduring, pure virtue to inspire hearts, and all regret will vanish. Leading with sincere benevolence, people will unite willingly around your character.",
        guide: "Unite through enduring virtue when trust is young; sincere benevolence dissolves regret.",
        focus: {
          "感情": "• Rebuild partner trust through steady, enduring love and reliable accountability.\n• Stand by each other with virtue; home life flourishes in deep mutual trust.",
          "事業": "• Leaders lead by example with integrity, gradually winning the team's devotion.\n• Hold fast to noble corporate values, guiding the organization to the industry peak.",
          "健康": "• Body and spirit achieve deep compassion and harmony; vitality is rich and radiant.\n• Keep a peaceful, loving mindset, enjoying long-lived vitality and high energy.",
          "財運": "• Build wealth on exceptional business credibility and brand charisma, securing legacy.\n• Allocate assets with vision; wealth grows sustainably through serving others.",
          "人際": "• Revered as a benevolent leader, earning the heartfelt devotion of all.\n• Welcome talent with spacious grace, building a powerful, unified community."
        }
      },
      6: {
        name: "Completing",
        text: "Sighing with deep sorrow and shedding tears, though feeling isolated at the peak, there is no blame. As gathering reaches its conclusion, standing at the summit without fully integrating with the crowd brings profound sorrow. Yet this sorrow stems from deep care; honest self-reflection preserves safety.",
        guide: "Deep care brings sorrow at the peak; honest self-reflection keeps you free of blame.",
        focus: {
          "感情": "• Share inner loneliness and vulnerability openly; your partner responds with warm care.\n• Savor the warmth of companionship after trials, elevating love to new depth.",
          "事業": "• Reflect on shortcomings as projects conclude, capturing valuable lessons.\n• Stay humble and introspective, laying a mature foundation for fresh beginnings.",
          "健康": "• Releasing bottled-up tears brings emotional detox and nervous system relief.\n• Settle the spirit through quiet meditation, restoring inner peace and calm.",
          "財運": "• Audit revenue and expenses after major events, learning from financial choices.\n• Keep a clear, rational money mindset, protecting assets without reckless moves.",
          "人際": "• Express authentic character and deep feelings, earning the empathy of true friends.\n• Finish with complete integrity, maintaining noble presence in quiet peace."
        }
      }
    },
    sheng: {
      1: {
        name: "Emerging",
        text: "Rising with the sincere trust and joyful support of the community brings great good fortune. In the early stage of ascent, your talents and character are widely recognized across all levels, and the path ahead is clear. Advance boldly in tune with shared goodwill to welcome a brilliant opening.",
        guide: "Ascend with community trust; advancing in alignment with goodwill brings great fortune.",
        focus: {
          "感情": "• Romance enjoys the warm blessing of family and friends, confirming your bond.\n• Treat each other with honest trust; love warms up quickly amid shared joy.",
          "事業": "• Proposals win unanimous approval from leadership and teams, launching smoothly.\n• Ascend with strong goodwill and skill, stepping into a season of career growth.",
          "健康": "• Vitality is budding and energy is buoyant; launch structured health routines.\n• Keep an optimistic, cheerful mindset, letting positive momentum nourish vitality.",
          "財運": "• Investment initiatives receive partner backing and funding, starting strong.\n• Earned income shows steady growth; advance asset accumulation plans.",
          "人際": "• Approachable and well-loved, welcomed and supported wherever you go.\n• Build a solid reputation in your group, watching your network expand with ease."
        }
      },
      2: {
        name: "Rooting",
        text: "Holding deep sincerity within, even offering humble, simple gifts touches the divine without blame. In your journey of advancement, there is no need for flashy pretense or flattery; speak with pure professional dedication and solid results to win leadership trust naturally.",
        guide: "Sincere devotion touches leadership; unadorned dedication rises safely without blame.",
        focus: {
          "感情": "• Express love through simple everyday actions, touching your partner deeply.\n• Set aside superficial comparisons, building solid family foundations in true love.",
          "事業": "• Deliver solid operational results, winning executive trust through true competence.\n• Avoid superficial workplace flattery, earning promotions through undeniable skill.",
          "健康": "• Return to simple, wholesome meals, keeping digestion strong and balanced.\n• Keep your heart pure and peaceful, enjoying vibrant health in simple routines.",
          "財運": "• Follow grounded value investing principles, ignoring flashy, hyped bubbles.\n• Accumulate assets steadily with low overhead, building a deep wealth foundation.",
          "人際": "• Treat others with unvarnished honesty, making friends who value character.\n• Move with dependable pragmatism, earning high praise from peers and leaders."
        }
      },
      3: {
        name: "Testing",
        text: "Advancing smoothly as if stepping into an empty, unobstructed city, moving forward without doubt. Past obstacles and competition have naturally cleared away, opening a broad highway ahead. Step forward with confidence and courage, embracing the open horizon meant for you.",
        guide: "Advance into the open city without doubt; obstacles clear away for confident steps.",
        focus: {
          "感情": "• Real-world hurdles holding back romance clear away; love progresses smoothly.\n• Release lingering worries and doubts, savoring harmonious, sweet love.",
          "事業": "• Business expands into an uncrowded blue-ocean market, surging ahead with ease.\n• Seize historic openings to capture market space, scaling operations rapidly.",
          "健康": "• Circulation flows unblocked; energy is buoyant, and mental clarity is sharp.\n• Well-suited for long-distance hiking or outdoor adventures, enjoying vibrant nature.",
          "財運": "• Capture exceptional investment windows with minimal competition, reaping gains.\n• Financial operations flow smoothly; asset scale leaps forward on open ground.",
          "人際": "• Social environment is warm and welcoming, free of petty drama and friction.\n• Connect widely with friends, building deep collaboration across an open network."
        }
      },
      4: {
        name: "Choosing",
        text: "Like the sovereign ascending Mount Qi to offer sacred prayers, aligning with heaven's blessings brings great good fortune without blame. Ascent reaches a revered position of responsibility, moving in harmony with universal laws. Give back with noble virtue, securing lasting blessings and honor.",
        guide: "Ascend the sacred mountain in harmony with heaven; noble virtue receives great blessings.",
        focus: {
          "感情": "• Romance matures into deep honor and respect, stepping into sacred marriage.\n• Treat each other with noble reverence, enjoying a blessed, joyful home.",
          "事業": "• Step into strategic executive leadership, guiding major corporate transformation.\n• Earn top industry honors, leading your field toward sustainable prosperity.",
          "健康": "• Body and spirit achieve complete harmony; vital energy is rich and long-lived.\n• Enjoy refined wellness living, nurturing deep life vitality in quiet peace.",
          "財運": "• Steward core capital allocations with wisdom; investment returns are rich.\n• Channel wealth into positive social impact, building lasting family security.",
          "人際": "• Revered for noble virtue, standing as an inspiring role model for the community.\n• Build a high-level network of top-tier allies, succeeding with ease.",
          "其他/不確定": "【Steadfast Ascent】 Ascend the sacred mountain in harmony with heaven; lead with noble virtue for supreme fortune.",
          "未選": "【Steadfast Ascent】 Ascend the sacred mountain in harmony with heaven; lead with noble virtue for supreme fortune."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding fast to the true path brings great good fortune, climbing the grand staircase step by step into full success. Your ascent aligns fully with natural order, steady and dependable like climbing solid stairs. Advance without rushing; reach your life's peak on a bright, beautiful path.",
        guide: "Climb the staircase step by step on the true path, achieving grand success and fortune.",
        focus: {
          "感情": "• Romance advances through healthy, mature milestones, stepping naturally into marriage.\n• Build your life together with steady care, co-creating a joyful, happy home.",
          "事業": "• Career climbs steadily up clear operational ladders, achieving exceptional wins.\n• Show masterful management, leading the team to new peaks step by step.",
          "健康": "• Vitality restores steadily under structured care; strength is dependable and high.\n• Keep a consistent, disciplined lifestyle, enjoying radiant physical vitality.",
          "財運": "• Assets scale steadily along a healthy growth curve; returns compound continuously.\n• Stick to long-term allocation strategies, keeping your wealth foundation solid.",
          "人際": "• Grounded, steady conduct wins universal praise; influence climbs daily.\n• Expand your network of quality peers, finding supportive mentors everywhere."
        }
      },
      6: {
        name: "Completing",
        text: "Continuing to push upward in blind ambition requires turning this drive into persistent virtue and self-reflection to endure. Having reached the summit, avoid letting blind ambition cloud your mind. Channel upward momentum into inner cultivation and sharing wealth to preserve complete fulfillment.",
        guide: "Blind ascent must turn to persistent virtue; curb ambition and cultivate within for completion.",
        focus: {
          "感情": "• Cherish existing happiness; avoid picking faults or chasing unrealistic fantasies.\n• Return to quiet, tender devotion, savoring complete love in lifelong companionship.",
          "事業": "• Avoid reckless expansion at the peak, focusing on internal refinement and depth.\n• Channel energy into mentoring rising talent and social impact, leaving a lasting legacy.",
          "健康": "• Halt overtraining and heavy physical exhaustion, resting quietly to preserve vitality.\n• Keep an unhurried, calm mindset, enjoying long-lived health in serene peace.",
          "財運": "• Take profits from high-risk investments at the peak, transitioning to legacy planning.\n• Curb greedy impulses, protecting accumulated wealth for generations to come.",
          "人際": "• Maintain humble, modest poise without boasting of status, sharing blessings.\n• Move with unhindered grace, serving as an admired, respected mentor for all."
        }
      }
    },
    kun_exhaust: {
      1: {
        name: "Emerging",
        text: "Trapped upon a bare tree stump, wandering into a gloomy valley and seeing no light for three long years—extreme misfortune. At the onset of adversity, giving up or retreating into self-isolation traps you in deep shadows. Break through self-isolation immediately and seek the light with courage.",
        guide: "Trapped on a bare stump in gloomy valleys; break self-isolation and seek the light.",
        focus: {
          "感情": "• Avoid shutting down or giving the silent treatment after relationship hurt.\n• Share real vulnerabilities openly, seeking counseling to break through deadlocks.",
          "事業": "• Avoid slacking or running from duties when early obstacles hit; do not stay stuck.\n• Report challenges to leadership proactively, seeking external resources to restart.",
          "健康": "• Watch for sciatic strain, chronic fatigue, or low immunity from depressive isolation.\n• Step into outdoor sunshine and nature, clearing away internal coldness and heaviness.",
          "財運": "• Avoid ignoring early investment losses with an ostrich mindset; clean up assets.\n• Cut costs and restructure finances actively, avoiding long-term debt traps.",
          "人際": "• Refuse negative social isolation, reaching out to friends who truly care for you.\n• Step out of your shell, reclaiming social warmth and support through engagement."
        }
      },
      2: {
        name: "Rooting",
        text: "Trapped amidst abundant wine and food, yet the noble leader in crimson robes arrives to offer support; favorable to offer sincere prayers, though advancing rashly brings danger without blame. When materially full but spiritually trapped, seek higher wisdom with sincerity to break through.",
        guide: "Trapped amidst rich feasts; seek higher wisdom with sincere reverence to transform hardship.",
        focus: {
          "感情": "• Material life is comfortable but emotional depth is lacking; seek soul resonance.\n• Pursue meaningful life values together, renewing love through spiritual connection.",
          "事業": "• Trapped in comfortable corporate plateaus, receiving mentorship and transition openings.\n• Step outside your comfort zone boldly, unlocking major turning points through growth.",
          "健康": "• Watch for fatty liver, blood sugar spikes, or digestive strain from rich feasts.\n• Return to clean, light eating, clearing out excess toxins through mindful stillness.",
          "財運": "• Capital is ample but lacks growth avenues; seek expert advice to restructure assets.\n• Invest in socially impactful, cultural, or purpose-driven projects for rich returns.",
          "人際": "• Connect with visionary mentors, inspired by their noble example and wisdom.\n• Step away from shallow dining circles, elevating yourself in purpose-driven communities."
        }
      },
      3: {
        name: "Testing",
        text: "Leaning trapped against cold rocks and grasping at sharp thorns, entering the home only to find one's spouse missing—extreme misfortune. Sinking into isolation because of leaning on cold, unsupportive dependencies leaves you compromised. Drop false illusions and cut toxic dependencies immediately.",
        guide: "Trapped against rocks and thorns; cut toxic dependencies immediately to end misfortune.",
        focus: {
          "感情": "• Clinging to an unloving, abusive partner destroys the home, causing deep pain.\n• Leave toxic relationships decisively, cutting losses to protect your self-respect.",
          "事業": "• Leaning on callous or failing partners puts the entire venture at risk.\n• Terminate dead contracts immediately, stepping away cleanly to rebuild elsewhere.",
          "健康": "• Watch for skin tears, infection, bone fractures, or chest pain from severe distress.\n• Seek clinical medical care immediately, giving yourself a safe space to heal.",
          "財運": "• Capital is locked in illiquid, declining junk assets, compounding losses.\n• Accept realized losses and exit positions cleanly, saving baseline funds from ruin.",
          "人際": "• Betrayed by callous, untrustworthy individuals, leaving you isolated in trials.\n• See through toxic friends and cut ties cleanly, reclaiming clarity from the lesson."
        }
      },
      4: {
        name: "Choosing",
        text: "Assistance arrives slowly, trapped within a golden carriage; though minor shame arises, the journey ends in complete fulfillment. Though rescue is delayed by formal bureaucracy and rigid structures, holding to the true path with patience will see powerful support arrive in the end.",
        guide: "Rescue arrives slowly in a golden carriage; wait with patience to reach a fulfilled finish.",
        focus: {
          "感情": "• Relationship reconciliation moves slowly, yet both partners are putting in effort.\n• Give each other ample time and patience; love finds its sweet fulfillment in waiting.",
          "事業": "• Funding approvals move slowly through red tape, leaving operations in waiting.\n• Stay composed and prepared; once resources arrive, execution will surge to victory.",
          "健康": "• Chronic recovery takes time; avoid rushing or abandoning wellness routines.\n• Follow clinical guidance steadily; physical systems will restore full health in time.",
          "財運": "• Large accounts receivable or returns face delays, but capital safety is solid.\n• Manage short-term liquidity buffers, waiting patiently for long-term yields to land.",
          "人際": "• Mentors are delayed by busy schedules, but remain dedicated to supporting you.\n• Maintain patient trust; strong support will arrive at the critical moment to help."
        }
      },
      5: {
        name: "Manifesting",
        text: "Nose and feet suffer harsh oppression, trapped in deep humiliation, yet the leader in crimson robes arrives slowly with deliverance; favorable to offer sincere prayers. Passing through extreme trials, you receive official vindication and rescue, turning sorrow to joy.",
        guide: "Deliverance arrives after extreme trials; rescue and vindication bring great good fortune.",
        focus: {
          "感情": "• Weather severe life blows and hardships together, welcoming relationship rebirth.\n• Deep devotion transcends suffering, stepping into a happy, harmonious new life.",
          "事業": "• Receive official vindication and major promotion from top leadership after long trials.\n• Show resilient fortitude, leading the team through crisis to reclaim career peaks.",
          "健康": "• Make a breakthrough recovery after major surgery or severe illness, gaining new life.\n• Maintain gratitude and quiet care, restoring a strong and vibrant constitution.",
          "財運": "• Receive major institutional funding or policy rescue during financial distress.\n• Financial difficulties reverse completely; restructured assets surge in value.",
          "人際": "• Truth is revealed and grievances are cleared, winning profound public admiration.\n• Connect with loyal, influential leaders, establishing unshakeable status and prestige."
        }
      },
      6: {
        name: "Completing",
        text: "Trapped in creeping vines and swaying on a precarious edge, believing that every move brings regret; yet resolving to reform and stepping forward boldly brings great good fortune. Hardship has reached its absolute end; break free from inner fear and take action to escape.",
        guide: "Trapped in vines on the edge; break free from fear and act decisively to escape.",
        focus: {
          "感情": "• Break free from self-imposed emotional cages, pursuing authentic love with courage.\n• Untangle lingering relationship knots, welcoming a bright, joyful fresh chapter.",
          "事業": "• Lingering operational obstacles clear away; advance boldly to capture complete victory.\n• Leave the long period of containment behind; business experiences an explosive breakthrough.",
          "健康": "• Break free of chronic anxiety and mental strain, enjoying total ease of spirit.\n• Lingering ailments clear completely; energy is high, greeting health and renewal.",
          "財運": "• Financial constraints end; cash flow unfreezes and circulates freely.\n• Seize market turning points to invest boldly, capturing exceptional wealth expansion.",
          "人際": "• Cut off draining, entangled social relationships cleanly, reclaiming light freedom.\n• Present a confident, renewed presence, earning the applause and respect of all."
        }
      }
    },
    jing: {
      1: {
        name: "Emerging",
        text: "The well bottom is choked with mud, rendering the water undrinkable; the abandoned old well draws no birds to rest, symbolizing hidden potential buried beneath neglect. Launch deep internal cleansing and skill upgrades immediately; clearing away old sediment allows sweet springs to flow once more.",
        guide: "Clear away internal sediment from the old well; deepen capability to unlock sweet springs.",
        focus: {
          "感情": "• Romance feels stagnant or routine; avoid passive complaining or checking out.\n• Clear out old grievances and bad habits together, infusing fresh romance into daily life.",
          "事業": "• Business models feel outdated and lack market appeal, facing risk of obsolescence.\n• Upgrade technical architecture and workflows, removing obsolete and inefficient systems.",
          "健康": "• Care for sluggish digestion, toxic buildup, or lack of exercise; reset health habits.\n• Launch structured dietary resets and hydration routines, promoting healthy metabolism.",
          "財運": "• Holdings have become illiquid, yielding minimal cash flow; avoid letting capital sit idle.\n• Liquidate non-performing assets decisively, shifting capital into vibrant, quality sectors.",
          "人際": "• Social circles feel stagnant and uninspiring, lacking positive intellectual sharing.\n• Elevate your personal depth and communication, expanding into inspiring social horizons."
        }
      },
      2: {
        name: "Rooting",
        text: "Spring water flows in the well pool, but is squandered on shooting small fish, while the leaking bucket fails to store water. This symbolizes possessing talent and resources yet wasting them on trivial matters or unaligned companions. Patch structural and operational leaks, elevating your vision to nourish grand works.",
        guide: "Elevate your vision and patch operational leaks; avoid wasting resources on trivial matters.",
        focus: {
          "感情": "• Avoid exhausting emotional energy bickering over petty, trivial daily details.\n• Fix emotional communication leaks, focusing love on building meaningful shared goals.",
          "事業": "• Core talent or tech is trapped in minor peripheral tasks, wasting precious bandwidth.\n• Reallocate team resources and patch workflow leaks, taking on major projects.",
          "健康": "• Care for fluid loss, kidney vitality, frequent urination, or nutrient malabsorption.\n• Fortify physical systems and patch wellness leaks, locking in deep vital essence.",
          "財運": "• Strong earning capability is undermined by budget leaks and impulsive spending.\n• Build structured savings barriers and budget rules, sealing all daily spending leaks.",
          "人際": "• Avoid wasting valuable time and energy on low-level social drama or petty arguments.\n• Elevate your social horizon, offering your gifts to worthy, high-value collaborations."
        }
      },
      3: {
        name: "Testing",
        text: "The well has been dredged clean, yet no one draws water to drink, stirring deep inner sorrow and disappointment. Yet when wise leadership arrives to draw from the well, all people will share in its nourishment with great good fortune. Guard your depth in seasons of waiting; when recognized, your brilliance will shine brightly.",
        guide: "The well is clean but unvisited; preserve your craft quietly until recognized for great fortune.",
        focus: {
          "感情": "• Your genuine virtues are not yet fully recognized by your partner; stay patient and true.\n• Time reveals true character; your deep devotion will win your partner's full appreciation.",
          "事業": "• Products are refined with excellence but temporarily lack marketing visibility and reach.\n• Maintain core quality, actively seeking visionary leadership to showcase your work.",
          "健康": "• Physical systems have been cleansed to a healthy baseline; circulation is clear and vibrant.\n• Maintain disciplined wellness habits, storing strong vitality for upcoming responsibilities.",
          "財運": "• Invest in high-value, overlooked assets that the broader market has yet to discover.\n• Wait patiently for value to be realized; recognition by mainstream capital brings surges.",
          "人際": "• Maintain refined character without compromising to fit into shallow social scenes.\n• You will connect with mentors who truly recognize your worth, building great works together."
        }
      },
      4: {
        name: "Choosing",
        text: "Lining the well walls with solid stone masonry brings complete freedom from blame. This symbolizes taking the initiative to pause operations to reinforce internal structures, systems, and protocols. Pausing outward supply to conduct foundational reinforcement ensures long-term stability and clean, endless flow.",
        guide: "Reinforce well walls with masonry; pause outward activity to strengthen systems safely.",
        focus: {
          "感情": "• Pause outside social obligations to focus on deep domestic communication and alignment.\n• Fortify mutual relationship agreements, building a solid cornerstone for lasting harmony.",
          "事業": "• Pause operations proactively to conduct code refactoring, system audits, and SOP upgrades.\n• Solid internal infrastructure provides an unshakeable launchpad for future explosive growth.",
          "健康": "• Schedule dedicated physical resets, comprehensive health checkups, and rehabilitation.\n• Strengthen core muscles, bones, and immune defenses, locking in robust physical health.",
          "財運": "• Pause aggressive capital expansion, auditing internal financial security systems.\n• Upgrade asset insurance, trust structures, and risk controls, keeping wealth secure.",
          "人際": "• Review and prune your contact list, deepening connections with core trusted allies.\n• Formalize partnership agreements, ensuring long-term collaborative stability."
        }
      },
      5: {
        name: "Manifesting",
        text: "The well overflows with pure, sweet, ice-cold spring water, inviting all people to drink freely—great good fortune. Your talents, wisdom, and character have achieved pristine purity, nourishing all living things like sweet spring waters. Blessing the community with selfless generosity welcomes supreme fulfillment and abundance.",
        guide: "Sweet ice-cold springs nourish all; blessing the community brings supreme good fortune.",
        focus: {
          "感情": "• Romance is pure and sweet like cool spring water; enjoy deeply nourishing happiness.\n• Co-create a warm, harmonious family atmosphere, admired by everyone around you.",
          "事業": "• Product and service quality reaches the industry peak, celebrated widely by global markets.\n• Operations create extraordinary social value, becoming a widely recognized benchmark.",
          "健康": "• Body and spirit achieve pristine clarity; circulation flows and complexion glows.\n• Fluid metabolism operates in perfect balance, enjoying long-lived vitality and ease.",
          "財運": "• Build sustainable business ecosystems that generate massive, high-quality cash flow.\n• Earnings are rich and resilient across market cycles, securing lasting abundance.",
          "人際": "• Character nourishes everyone like sweet springs, earning universal reverence and love.\n• Stand as an inexhaustible mentor and guide, expanding your network to its absolute peak."
        }
      },
      6: {
        name: "Completing",
        text: "Drawing water from the well reaches completion; keep the well open without a cover in open sincerity—supreme good fortune. Abundant spring waters flow endlessly and are shared openly with all people without selfish hoarding. This selfless service achieves ultimate completion and mastery.",
        guide: "Keep the well open and share its waters; selfless service achieves supreme completion.",
        focus: {
          "感情": "• Love reaches an expansive realm of total openness and devotion, growing old together.\n• Stand by each other in complete trust and unconditional love, blessing generations.",
          "事業": "• Build open, sustainable platform ecosystems that empower global communities continuously.\n• Business achievements transcend commercial metrics, creating an enduring historic legacy.",
          "健康": "• Body, mind, and spirit achieve complete harmony; the fountain of life flows endlessly.\n• Release all physical and mental attachments, enjoying pristine clarity and vibrant longevity.",
          "財運": "• Wealth transforms into open philanthropic and sustainable foundations, building merit.\n• Achieve total material and spiritual freedom, leaving an enduring legacy for generations.",
          "人際": "• Revered with lifelong gratitude by the community; your moral presence inspires all.\n• Move with unhindered grace, nourishing every soul you meet with boundless wisdom."
        }
      }
    },
    ge: {
      1: {
        name: "Emerging",
        text: "Binding resolve securely with tough yellow oxhide; avoid rushing into action. At the earliest stage of transformation, conditions and timing are not yet ripe, and forcing reform invites setbacks. Restrain impulsive urges, steady your center, and prepare foundational steps quietly while waiting for the right window.",
        guide: "Bound with yellow oxhide; conditions are unripe, so restrain action and prepare quietly.",
        focus: {
          "感情": "• Avoid demanding radical changes or breakup ultimatums during friction; stay calm.\n• Give each other time to settle; do not force transitions before timing is ripe.",
          "事業": "• Avoid rushing to overturn old workflows when starting; conduct thorough research.\n• Follow existing standards while preparing transformation strength for the right opening.",
          "健康": "• Avoid jumping into radical cleanses or extreme workout regimes abruptly.\n• Start with gentle, foundational lifestyle adjustments, building physical adaptability.",
          "財運": "• Hold cash and avoid major portfolio overhauls while trends are unclear.\n• Enforce strict financial discipline, avoiding impulsive investment shifts.",
          "人際": "• Keep quiet when group dynamics feel unaligned, avoiding initiating controversy.\n• Show steady self-possession, observing situational developments from a calm space."
        }
      },
      2: {
        name: "Rooting",
        text: "Waiting for the appointed day of ripeness to launch transformation boldly—advancing brings great good fortune without blame. After thorough preparation, public consensus aligns with the times. Take decisive steps to break through old constraints; moving forward achieves brilliant success.",
        guide: "Launch reform when the time is ripe; advancing boldly brings great good fortune.",
        focus: {
          "感情": "• Implement fresh relationship habits and agreements after thorough communication.\n• Begin an inspiring shared chapter together; love warms up sweetly in renewal.",
          "事業": "• Launch project restructuring and strategic pivots boldly when timing is ripe.\n• Guide your team into new terrain, executing transformation plans to total victory.",
          "健康": "• Launch a structured health transformation plan, breaking harmful old habits cleanly.\n• Physical vitality rebounds swiftly under healthy routines, glowing with energy.",
          "財運": "• Seize the optimal window to rebalance portfolios, deploying capital into growth sectors.\n• Investment transformation yields rich returns, upgrading asset structures with strength.",
          "人際": "• Break through stale social distance, presenting a fresh presence to make quality friends.\n• Lead team peers through collective upskilling, winning full support and loyalty."
        }
      },
      3: {
        name: "Testing",
        text: "Rushing ahead impulsively invites misfortune, while clinging rigidly to the old hides danger; when reform plans have been debated and confirmed three times, execute with trust for great success. Transformation meets heavy friction; avoid rashness, deliberating thoroughly to build consensus.",
        guide: "Deliberate three times before executing reform; thorough consensus brings smooth success.",
        focus: {
          "感情": "• Avoid acting autocratically on major family decisions; communicate repeatedly.\n• Execute changes after reaching deep consensus; relationships grow stronger in mutual care.",
          "事業": "• Review reform proposals through team simulations and audits, patching flaws.\n• Listen widely to input and align consensus, ensuring flawless execution.",
          "健康": "• Seek second opinions from multiple specialists before undergoing major therapies.\n• Assess physical capacity carefully, mapping out a scientific recovery plan.",
          "財運": "• Conduct rigorous due diligence and risk reviews before major asset restructuring.\n• Ensure contract terms are airtight, deploying capital with high confidence.",
          "人際": "• Listen more and speak less during complex disputes, dissolving doubt through dialogue.\n• Show thoughtful maturity, winning the complete trust and support of all parties."
        }
      },
      4: {
        name: "Choosing",
        text: "Regret fades away completely; holding deep sincerity, transforming the old order brings great good fortune. The righteousness of reform has earned heaven's favor; you possess the authority and strength to break old constraints. Reshape the order with noble purpose; all hearts align with universal favor.",
        guide: "Transform the order with sincere conviction; aligning with truth brings great fortune.",
        focus: {
          "感情": "• Leave past dysfunctional relationship patterns behind, welcoming destined true love.\n• Reshape your family vision together, enjoying joyful happiness in fresh trust.",
          "事業": "• Execute fundamental transformation across core corporate systems and models.\n• Secure board and market backing, guiding the organization into an inspiring new era.",
          "健康": "• Transform your physical constitution, breaking free of chronic ailments for new life.\n• Body and spirit achieve pristine clarity and strength, glowing with renewed vitality.",
          "財運": "• Strategic transformation secures decisive victory; asset scale multiplies rapidly.\n• Capture core asset windfalls from macro shifts, elevating your financial tier.",
          "人際": "• Establish unshakeable authority as a transformative leader, widely admired by all.\n• Gather top-tier industry talent to co-create epoch-making, historic endeavors.",
          "其他/不確定": "【Sacred Metamorphosis】 Transform the order in harmony with truth; noble virtue brings supreme fortune.",
          "未選": "【Sacred Metamorphosis】 Transform the order in harmony with truth; noble virtue brings supreme fortune."
        }
      },
      5: {
        name: "Manifesting",
        text: "The great leader guides transformation like a tiger transforming its coat—vibrant, brilliant, and commanding—winning universal trust without needing divination, bringing great good fortune. Your reforms are magnificent and transparent, inspiring the world through irresistible leadership to achieve complete success.",
        guide: "Transform like a tiger with brilliant majesty; open leadership wins universal trust and victory.",
        focus: {
          "感情": "• Romance radiates mature, brilliant harmony; deep devotion shines with inspiring warmth.\n• Co-create an admirable, joyful household, standing as an inspiring role model for all.",
          "事業": "• Leaders execute grand transformation with mastery; corporate strength surges like a tiger.\n• Project milestones inspire the industry, winning passionate market loyalty.",
          "健康": "• Body and spirit radiate robust, commanding vitality like a tiger; energy is boundless.\n• Maintain peak physical stamina and confidence, enjoying vibrant, long-lived wellness.",
          "財運": "• Rebuild business empires successfully; wealth flows in like endless rivers.\n• Secure pricing power over core assets, multiplying returns in rapid geometric growth.",
          "人際": "• Prestige reaches its zenith; allies rally at your call with heartfelt admiration.\n• Build an unshakeable network of global influence, standing as an epochal leader."
        }
      },
      6: {
        name: "Completing",
        text: "The noble leader refines transformation like a leopard's sleek coat, while the community adapts its countenance; advancing further right now invites misfortune, while holding to what is right brings great good fortune. Broad transformation is complete; focus on consolidating details and institutionalizing order.",
        guide: "Consolidate details after broad reform is complete; holding to truth brings good fortune.",
        focus: {
          "感情": "• Return to cozy everyday routines after major relationship transitions, tending to details.\n• Cherish hard-won harmony, fulfilling your shared commitment for lasting happiness.",
          "事業": "• Broad pivots are complete; avoid over-tinkering and focus on precision management.\n• Consolidate milestones and optimize systems, ensuring the new order runs smoothly.",
          "健康": "• Maintain current healthy routines after major lifestyle resets; avoid over-exertion.\n• Keep body and mind peaceful and relaxed, enjoying long-lived vitality in quiet stability.",
          "財運": "• Lock in gains after asset restructuring, shifting to conservative wealth preservation.\n• Halt aggressive speculation, guarding accumulated wealth for lasting security.",
          "人際": "• Maintain humble, spacious poise, treating team members who supported change with care.\n• Finish with complete integrity, sustaining admired standing in serene harmony."
        }
      }
    },
    ding: {
      1: {
        name: "Emerging",
        text: "Overturning the sacred cauldron to clear out accumulated dross and taking a concubine for offspring brings no blame whatsoever. At the inception of building the new, clear away legacy residue, corruption, and clutter boldly. Cleansing out past baggage and stagnant air prepares the vessel to receive fresh, sacred nourishment.",
        guide: "Overturn the cauldron to clear legacy dross; cleansing the old brings renewal safely.",
        focus: {
          "感情": "• Clear away past emotional wounds and unhealthy habits, stepping into renewal unburdened.\n• Open your hearts to release old grievances, creating spacious room for pure love.",
          "事業": "• Audit legacy issues and obsolete workflows at project kickoff, clearing obstacles.\n• Introduce fresh talent and cross-disciplinary resources, infusing the team with vitality.",
          "健康": "• Launch a thorough digestive cleanse, clearing out accumulated internal toxins and cold.\n• Break unhealthy lifestyle routines completely, laying a clean foundation for health.",
          "財運": "• Liquidate bad debts and underperforming assets, resetting a clean balance sheet.\n• Reallocate freed capital into high-quality new sectors, opening fresh revenue potential.",
          "人際": "• Walk away from draining, negative social circles decisively, clearing social stagnation.\n• Connect with new companions in open authenticity; social environments refresh with joy."
        }
      },
      2: {
        name: "Rooting",
        text: "The sacred cauldron is filled with solid, rich nourishment; though rivals harbor envy, they cannot harm you—great good fortune. You possess solid core competencies and authentic talent, moving with upright integrity. Grounded in deep substance, outside envy and criticism cannot shake you.",
        guide: "The cauldron is filled with solid substance; holding to truth brings great good fortune.",
        focus: {
          "感情": "• Relationship foundations are deep and sweet, enjoying rich emotional nourishment.\n• Untouched by outside gossip or jealousy; your private bond stands solid as rock.",
          "事業": "• Projects possess irreplaceable core tech and solid metrics, holding great leverage.\n• Meet competitor pressure with cool composure, winning total victory on real strength.",
          "健康": "• Circulation is rich and nutrient absorption is strong; immunity fends off imbalances.\n• Maintain physical fullness and mental joy, enjoying high-quality, vibrant living.",
          "財運": "• Capital base is solid and cash flow is abundant, holding strong resilience against risk.\n• Generate sustainable profits through core capability, keeping wealth solid as a fortress.",
          "人際": "• Gifted in character and capability, earning the deep respect of true companions.\n• Maintain low-key poise, naturally dissolving latent social jealousy and friction."
        }
      },
      3: {
        name: "Testing",
        text: "The ears of the sacred cauldron are shifted, making it difficult to move, and the rich pheasant stew remains uneaten, bringing brief frustration; yet waiting for rain will clear all regret, leading to great fortune in the end. Stay patient during temporary stalls; conditions will ripen.",
        guide: "Temporary delays bring brief frustration; wait for sweet rain to welcome great fortune.",
        focus: {
          "感情": "• Communication meets temporary misalignment; offer each other space to adjust.\n• Wait out emotional storms with patience; sweet rain will restore warmth and harmony.",
          "事業": "• Management restructuring meets brief operational friction, causing temporary stalls.\n• Maintain focus and polish product quality; market recovery will trigger explosive growth.",
          "健康": "• Care for hearing, ear pressure, neck stiffness, or brief digestive imbalances.\n• Settle body and mind through gentle nourishment and relaxation, restoring health.",
          "財運": "• Quality assets face temporary liquidity delays or dividend pauses; avoid panic-selling.\n• Wait out cyclical pullbacks with patience; thawing cash flow brings rich yields.",
          "人際": "• Communications with key partners face temporary delays; avoid forcing talks with pressure.\n• Re-engage when the timing is right; cleared misunderstandings build tighter collaboration."
        }
      },
      4: {
        name: "Choosing",
        text: "The legs of the cauldron break, spilling the royal feast and soiling one's clothes in public disgrace—grave misfortune. Shouldering heavy missions beyond your capacity without proper character and foundation leads to sudden collapse and ruined credibility. Recognize your limits, offloading excess weight immediately and bringing in strong support.",
        guide: "The cauldron legs break and the feast spills; overreach brings ruin, so recognize limits.",
        focus: {
          "感情": "• Making hollow promises beyond your capacity breaks trust and causes collapse.\n• Face your limits honestly, rebuilding your partner's trust through grounded reality.",
          "事業": "• Taking on projects that far exceed team bandwidth risks total operational collapse.\n• Halt overreach and restructure immediately, bringing in capable partners to rescue the work.",
          "健康": "• Watch for leg injuries, ankle fractures, acute stomach spasms, or sudden burnout.\n• Cease overworking immediately, seeking medical care and deep restorative bed rest.",
          "財運": "• Over-leveraging beyond risk tolerance invites sudden liquidation and collapse.\n• Execute bold measures to cut debt immediately, protecting core survival funds.",
          "人際": "• Boasting beyond your capability destroys credibility; reflect on mistakes deeply.\n• Drop pride and apologize with sincerity, rebuilding reputation on grounded honesty."
        }
      },
      5: {
        name: "Manifesting",
        text: "The sacred cauldron is fitted with noble yellow handles and sturdy golden carrying rings; holding fast to the true path brings great good fortune and universal favor. Yellow symbolizes balance, and gold represents steadfast integrity. Guiding the mission with balanced wisdom and spacious character allows you to shoulder great weight into lasting prosperity.",
        guide: "Yellow handles and golden rings carry great weight; balanced humility brings supreme fortune.",
        focus: {
          "感情": "• Romance matures into noble golden depth, honoring and supporting each other for life.\n• Co-create an inspiring, dignified home atmosphere, enjoying complete happiness in mutual care.",
          "事業": "• Lead from central executive status, guiding overall prosperity with balanced wisdom.\n• Projects win universal acclaim from leadership and market, setting an enduring benchmark.",
          "健康": "• Body and mind achieve exceptional balance and flow; circulation is clear and spirits are high.\n• Keep a serene, clear mental state, enjoying vibrant wellness and long-lived stamina.",
          "財運": "• Build substantial wealth on exceptional credibility and solid structures; prosperity flows.\n• Balance growth and preservation in your allocations; assets preserve value like gold.",
          "人際": "• Revered and humble, deeply loved by leaders and peers across high-level circles.\n• Integrate exceptional talent and top-tier resources, building an unshakeable alliance."
        }
      },
      6: {
        name: "Completing",
        text: "The sacred cauldron is fitted with jade carrying rings—great good fortune with universal favor on all endeavors. Jade symbolizes gentle warmth, balanced strength, and complete perfection. Character, wisdom, and mastery have achieved effortless, flawless refinement. Nurture all life in harmony with universal truth, enjoying supreme fulfillment and blessings.",
        guide: "Jade rings balance strength with gentle grace; flawless refinement achieves supreme completion.",
        focus: {
          "感情": "• Love reaches the highest soulmate harmony, growing old together in lasting devotion.\n• Stand by each other with gentle warmth; family blessings flow down to future generations.",
          "事業": "• Career achievements reach legendary mastery, standing tall in industry history.\n• Build enduring institutions that nurture rising talent across generations, leaving a legacy.",
          "健康": "• Body, mind, and spirit achieve complete harmony; life energy flows endlessly.\n• Release all worldly anxieties, enjoying spiritual stillness and vibrant longevity.",
          "財運": "• Achieve complete material and spiritual abundance, passing wealth safely across generations.\n• Wealth transforms into lasting social and community merit, blessing the world.",
          "人際": "• Revered by generations for gentle virtue; your moral presence illuminates all.\n• Move with unhindered grace, warming every soul you meet with boundless wisdom."
        }
      }
    },
    zhen: {
      1: {
        name: "Emerging",
        text: "Resounding thunder strikes with terrifying shock at first, but turns to laughter and joyful celebration afterward—great good fortune. When sudden turbulence and trials arrive, keeping alert vigilance and examining yourself transforms fear into discipline, turning danger into supreme blessings.",
        guide: "Thunder brings shock that turns to laughter; mindful self-reflection welcomes great fortune.",
        focus: {
          "感情": "• Sudden friction brings brief alarm, but open communication restores sweet harmony.\n• Cherish each other more after the storm; tears turn to laughter and deeper trust.",
          "事業": "• Maintain sharp vigilance during sudden crises, activating contingency plans promptly.\n• Turn crisis into opportunity, achieving remarkable project breakthroughs after the shake-up.",
          "健康": "• Sudden minor physical warnings spark vigilance; adjust daily habits to restore balance.\n• Follow disciplined wellness routines, strengthening physical resilience through awareness.",
          "財運": "• Protect capital during market shocks, capturing rich returns after turbulence clears.\n• Seize oversold market rebound opportunities, scaling assets rapidly during recovery.",
          "人際": "• Clear the air openly after sudden misunderstandings; friendships grow deeper.\n• Show calm composure under pressure, earning the deep respect and trust of your peers."
        }
      },
      2: {
        name: "Rooting",
        text: "Thunder strikes with severe danger; drop your treasure coins decisively and climb the ninefold hills to seek refuge. There is no need to chase the lost wealth; it will return on its own in seven days. In major crises, release external possessions to protect life and foundation, waiting patiently for the turn.",
        guide: "Drop treasure to climb the hills and seek refuge; wait for lost wealth to return on its own.",
        focus: {
          "感情": "• Release wounded pride and material calculations during relationship crises to save love.\n• Give each other space to cool down; true devotion will return safely after the storm.",
          "事業": "• Cut non-essential operations decisively during industry shifts to preserve core assets.\n• Retreat to safe ground to gather strength; markets and business will rebound fully in time.",
          "健康": "• Drop work burdens completely during acute illness, prioritizing hospital rest.\n• Follow clinical care and rest quietly; physical systems restore full strength over time.",
          "財運": "• Cut losses cleanly to preserve core capital during extreme market crashes.\n• Wait out the panic cycle with patience; asset values will recover fully in the rebound.",
          "人際": "• Step back from fierce social feuds, refusing to fight over immediate gains.\n• Maintain noble character in safe retreat; peers will naturally understand your stance later."
        }
      },
      3: {
        name: "Testing",
        text: "Frequent thunder tremors leave the mind restless and startled, yet taking action in harmony with the shake-up to examine yourself leaves no lasting fault. When meeting continuous external shifts and disruption, avoid freezing in passive panic. Take active, flexible steps to adapt to the changing terrain, dissolving peril.",
        guide: "Shake-ups bring startle, but flexible action leaves no fault; adapt to change.",
        focus: {
          "感情": "• Take proactive steps to improve relationship dynamics amidst frequent fluctuations.\n• Adapt communication styles flexibly, easing your partner's inner anxiety through action.",
          "事業": "• Adjust business tactics swiftly amidst shifting markets, avoiding rigid attachment.\n• Demonstrate agile, flexible execution, seizing fresh business openings amidst turbulence.",
          "健康": "• Watch for nervous fatigue, restless sleep, or anxiety triggered by environmental shifts.\n• Release tension through regular aerobic exercise, clearing somatic stress through movement.",
          "財運": "• Fine-tune investment allocations flexibly with market swings; avoid holding risks passively.\n• Capture structural opportunities amidst volatility, keeping capital liquidity secure.",
          "人際": "• Maintain diplomatic flexibility in shifting circles, resolving friction proactively.\n• Stay connected through open communication, preserving a stable and supportive network."
        }
      },
      4: {
        name: "Choosing",
        text: "Thunder settles into the mud, unable to burst forth with resounding clarity. This symbolizes that strong momentum has sunk into material desires, procrastination, or external resistance, losing its sharp edge. Break free from sluggish habits and low-level desires immediately, shaking off the mud to advance with vigor.",
        guide: "Thunder sinks into mud unable to roar; break free of sluggish habits and advance with vigor.",
        focus: {
          "感情": "• Romance feels stuck in a sluggish, uninspired rut; avoid passive neglect.\n• Discover fresh shared goals and romantic experiences, reigniting the spark of love.",
          "事業": "• Operations stall due to bloated red tape or team slackness, dragging productivity down.\n• Leaders must lead by example to break through sluggishness, reigniting team drive.",
          "健康": "• Watch for heavy dampness, sluggish digestion, bodily fatigue, or lack of exercise.\n• Push through laziness to exercise and sweat, restoring a light, vibrant body.",
          "財運": "• Capital is locked in illiquid, zero-yield muddy assets, dragging overall returns down.\n• Liquidate low-efficiency holdings decisively, shifting funds into dynamic, quality sectors.",
          "人際": "• Step away from shallow, unproductive partying crowds that drain your ambition.\n• Return to ambitious, positive circles, re-awakening your drive to achieve."
        }
      },
      5: {
        name: "Manifesting",
        text: "Thunder surges back and forth with imminent danger, yet holding to the balanced center and fulfilling your core duties leaves no loss, achieving great success. In the midst of extreme turbulence, stand firm on balanced principles and core business, winning total victory through unshakeable composure.",
        guide: "Hold to the center amidst shaking danger; steadfast composure wins victory without loss.",
        focus: {
          "感情": "• Stand together firmly to guard your home when outside storms and crises strike.\n• Show mature, pillar-like composure in trials; love grows deeper and unshakeable.",
          "事業": "• Stand firm on core business and compliant ethics amidst fierce industry shake-ups.\n• Guide the team through the storm with stability, expanding market share without loss.",
          "健康": "• Body and mind show exceptional resilience through balanced care, unbothered by change.\n• Keep a calm, grounded spirit, enjoying high-quality health and buoyant energy.",
          "財運": "• Asset allocations are balanced and solid, withstanding multiple market shocks safely.\n• Core wealth remains completely unharmed, surging in value after the industry shakeout.",
          "人際": "• Composed under pressure with leader-like poise, deeply trusted and relied upon by allies.\n• Stand as an unshakeable anchor during crises; authority reaches its peak."
        }
      },
      6: {
        name: "Completing",
        text: "Thunder reaches extreme agitation, causing people to look about in panic and anxiety; advancing blindly right now invites misfortune. Yet if the shock has not yet hit you and only shakes the neighborhood, spotting it early and retreating leaves no blame. Discern early signs in the closing phase of turbulence to preserve safety.",
        guide: "Extreme thunder brings startle; discern early signs and retreat to preserve safety.",
        focus: {
          "感情": "• Reflect on family habits upon seeing relationship crises in friends, preventing issues.\n• Postpone major marriage decisions during emotional agitation, settling in calm.",
          "事業": "• Audit operations upon seeing competitors fail, pulling back on risky expansion.\n• Halt aggressive expansion, protecting core cash flow and proprietary assets safely.",
          "健康": "• Watch for eye twitches, dizziness, or palpitations caused by extreme anxiety.\n• Step away from stress-inducing environments, resting quietly to calm the nervous system.",
          "財運": "• Spot systemic market risks early, liquidating positions to lock in profits.\n• Avoid bottom-fishing or using leverage right now; protecting capital is what matters.",
          "人際": "• Step away before social disputes explode, staying clear of unnecessary drama.\n• Maintain clear, cool observation, guarding personal safety and upright standing."
        }
      }
    },
    gen: {
      1: {
        name: "Emerging",
        text: "Stopping at the very first step, the big toe, before taking a false move—completely free of blame and favorable for enduring self-discipline. At the initial inception of an idea or action, knowing when to halt and check yourself prevents missteps. This mindful awareness keeps your path secure and peaceful.",
        guide: "Stop at the big toe before moving; timely restraint brings safety and lasting discipline.",
        focus: {
          "感情": "• Exercise careful restraint in early romance, avoiding hasty or pushy moves.\n• Uphold clean, dignified boundaries, giving each other comfortable space to grow."
        }
      },
      2: {
        name: "Rooting",
        text: "Stopping at the calf while the thighs move forward, unable to follow smoothly and bringing inner unease. When supporting leadership that pushes ahead blindly while your own position is constrained, hold fast to your boundaries. Protect your peace and refuse to follow reckless momentum.",
        guide: "Stop at the calf while action pulls ahead; hold your boundaries despite inner unease.",
        focus: {
          "事業": "• When teams push aggressive projects that feel risky, hold your ground on safety baselines.\n• Fulfill your specific scope with integrity, refusing to be swept into unaligned ventures."
        }
      },
      3: {
        name: "Testing",
        text: "Forcing stillness at the waist, splitting the spine, and causing severe internal strain that burns the heart—extreme danger. Extreme rigidity and unnatural suppression of natural human needs bring breakdown. Release obsessive, inflexible stubbornness and return to natural flexibility.",
        guide: "Forcing stillness at the waist strains the spine; extreme rigidity brings breakdown.",
        focus: {
          "健康": "• Watch for lower back strain, spinal stiffness, or severe stress-induced tension.\n• Release mental rigidity and perfectionism, embracing flexible somatic relaxation."
        }
      },
      4: {
        name: "Choosing",
        text: "Keeping the torso in mindful stillness, maintaining complete composure and freedom from blame. You hold master control over your body, words, and desires, resting in centered stability. Unmoved by outside distractions, your inner peace remains absolute and faultless.",
        guide: "Keep the torso in mindful stillness; inner composure brings complete freedom from blame.",
        focus: {
          "財運": "• Keep core capital safely stationed in steady assets, unmoved by market noise.\n• Maintain strict budgetary self-sufficiency and discipline, keeping finances secure."
        }
      },
      5: {
        name: "Manifesting",
        text: "Stopping at the jaw, keeping speech measured, orderly, and precise, clearing away all regret. Master your tongue, speaking only with proper timing and structured wisdom. This mindful speech dissolves interpersonal friction and brings great good fortune.",
        guide: "Keep speech measured and orderly at the jaw; mindful words clear away regret.",
        focus: {
          "人際": "• Speak with measured grace and clear boundaries, avoiding careless words.\n• Earn deep trust through reliable communication and strict confidentiality."
        }
      },
      6: {
        name: "Completing",
        text: "Reaching the pinnacle of stillness with profound, honest, and unshakeable dignity—great good fortune. The highest mastery of stopping is integrating stillness into your very character, resting in timeless peace. Aligned with universal rhythm, you protect all things in serene stability.",
        guide: "Reach the pinnacle of honest stillness; profound dignity brings great good fortune.",
        focus: {
          "其他/不確定": "【Mountain Stillness】 Master profound stillness with honest dignity; inner peace achieves complete fulfillment."
        }
      }
    },
    jian_progress: {
      1: {
        name: "Emerging",
        text: "Wild geese gradually approach the river bank; the young bird faces minor peril and outside gossip, but holding to truth brings no blame. At the start of an endeavor, young and inexperienced, you may encounter minor skepticism. Keep steady composure and build solid fundamentals to quiet outside noise.",
        guide: "Geese reach the river bank; early skepticism requires steady composure and truth.",
        focus: {
          "感情": "• Early romance may face outside questions; stay steady and unaffected.\n• Build trust through everyday actions, letting time dissolve outside gossip."
        }
      },
      2: {
        name: "Rooting",
        text: "Wild geese gradually reach the solid rock, enjoying rich food and harmonious joy—great good fortune. You have found a stable, secure footing on your path. Savor this peaceful environment, sharing steady growth with companions as you prepare for higher flights.",
        guide: "Geese reach solid rock and feast in harmony; stable footing brings great good fortune.",
        focus: {
          "事業": "• Projects secure a stable operational base, enjoying smooth momentum and team joy.\n• Operations run on solid ground, delivering reliable profits and stable performance."
        }
      },
      3: {
        name: "Testing",
        text: "Wild geese advance onto dry land; the husband goes on a distant expedition and does not return, while the wife is pregnant but cannot raise the child—extreme danger. Avoid blind expansion or leaving your core base unprotected. Return to defensible ground to protect your family and base.",
        guide: "Geese advance onto dry land; avoid blind expansion and protect your core base.",
        focus: {
          "財運": "• Avoid risky overseas or unfamiliar speculative bets that lock up liquidity.\n• Protect household cash reserves securely, guarding against heavy capital loss."
        }
      },
      4: {
        name: "Choosing",
        text: "Wild geese gradually reach the tree branches, finding a stable perch on a flat bough—completely free of blame. Amid shifting or transitional environments, show flexible adaptability. Find a secure temporary perch, ensuring safety through nimble adjustments.",
        guide: "Geese reach the tree branches and find a perch; flexible adaptation brings safety.",
        focus: {
          "事業": "• Adapt flexibly during corporate transitions, securing a stable interim position.\n• Navigate market shifts with nimble adjustments, keeping operations secure."
        }
      },
      5: {
        name: "Manifesting",
        text: "Wild geese gradually reach the mountain summit; though a wife does not conceive for three years, in the end no force can break her devotion—supreme good fortune. Long trials and waiting are overcome by unshakeable loyalty, harvesting supreme happiness.",
        guide: "Geese reach the mountain summit; unshakeable loyalty through trials brings great fortune.",
        focus: {
          "感情": "• Long-distance or delayed commitments reach a triumphant, blessed marriage.\n• Unshakeable devotion through years of trials culminates in deep soul harmony."
        }
      },
      6: {
        name: "Completing",
        text: "Wild geese gradually reach the high clouds; their feathers can be used as sacred ceremonial ornaments—great good fortune. Character and spirit transcend worldly fame, reaching a sublime state of purity. Leave an inspiring legacy of noble virtue that uplifts future generations.",
        guide: "Geese reach the high clouds; feathers become sacred ornaments of sublime completion.",
        focus: {
          "其他/不確定": "【Gradual Progress】 Geese soar into the high clouds; step-by-step accumulation achieves sublime spiritual completion."
        }
      }
    },
    guimei: {
      1: {
        name: "Emerging",
        text: "A younger sister married off as a secondary concubine, walking with a limp yet still able to advance—favorable. Recognize your secondary status and limitations, staying humble and diligent in a supporting role to achieve success.",
        guide: "The concubine walks with a limp yet advances; humble support achieves success.",
        focus: {
          "事業": "• Play a supporting role in early project stages, backing primary teams with dedication.\n• Overcome resource gaps with diligent effort, earning trust through solid execution."
        }
      },
      2: {
        name: "Rooting",
        text: "A person with impaired vision can still see dimly, maintaining the pure, secluded chastity of a hermit—favorable. In unideal environments, do not complain or compromise your core principles. Guard your inner purity and simplicity, harvesting enduring blessings.",
        guide: "Impaired vision maintains hermit chastity; hold to inner purity for enduring favor.",
        focus: {
          "人際": "• Stay clear of noisy, superficial social circles, guarding your inner peace.\n• Keep humble, quiet standards, winning the deep respect of wise mentors."
        }
      },
      3: {
        name: "Testing",
        text: "A maiden hoping to marry as the primary wife ends up only a secondary concubine due to impatience—humiliating. Chasing status through impatience backfires, lowering your dignity. Return to self-respect immediately, shedding restless vanity.",
        guide: "Impatience turns the bride into a concubine; shed restless vanity and return to dignity.",
        focus: {
          "感情": "• Avoid desperate, clingy attempts to force commitment, keeping your self-respect.\n• Cultivate inner dignity; true value draws natural, genuine affection."
        }
      },
      4: {
        name: "Choosing",
        text: "Marriage misses its original date, but waiting patiently for the right time brings a harmonious match eventually. Practice patience and refuse to settle for unaligned compromises; the right timing unlocks perfect fulfillment.",
        guide: "Missed dates find timely fulfillment; patient waiting unlocks perfect marriage.",
        focus: {
          "財運": "• Hold cash patiently when market timing is off, waiting for the golden entry point.\n• Refuse to chase hyped bubbles, securing massive gains when the cycle turns."
        }
      },
      5: {
        name: "Manifesting",
        text: "The sovereign weds out a royal princess, whose simple unadorned gown outshines the lavish garments of her attendants, like the moon nearly at its full—great good fortune. Noble virtue needs no flashy show; true simplicity wins supreme blessings.",
        guide: "The princess's simple gown shines like the near-full moon; unadorned virtue brings great fortune.",
        focus: {
          "感情": "• Romance values unadorned truth over flashy displays, enjoying pure devotion.\n• Elegant humility and inner grace create a blessed, radiant home life."
        }
      },
      6: {
        name: "Completing",
        text: "The woman carries a ceremonial basket that is completely empty, and the man slaughters a sacrificial ram with no blood drawn—hollow rituals bring no gain. Surface show without genuine substance leads to empty results; return immediately to sincere reality.",
        guide: "Empty baskets and bloodless rams bring no gain; strip away hollow pretense.",
        focus: {
          "事業": "• Avoid superficial marketing that lacks core product substance, preventing collapse.\n• Return to solid engineering and customer service, building real value."
        }
      }
    },
    feng: {
      1: {
        name: "Emerging",
        text: "Meeting an equal and capable partner of matching brilliance, spending ten days together without fault and advancing into joyful acclaim. At the dawn of abundance, find aligned, capable allies to build momentum together.",
        guide: "Meet a matching brilliant partner; spend ten days in smooth alignment and advance to acclaim.",
        focus: {
          "事業": "• Find capable, like-minded co-founders or partners, multiplying team strength.\n• Projects surge ahead in powerful synergy, capturing market share rapidly."
        }
      },
      2: {
        name: "Rooting",
        text: "Abundance is veiled in deep shadow, like seeing the North Star shining at midday; advancing brings suspicion, but holding to sincere truth unlocks breakthrough light. When misunderstood amidst success, stay grounded with integrity until truth shines.",
        guide: "Midday darkness meets suspicion; hold to sincere truth to break through to the light.",
        focus: {
          "事業": "• Projects face temporary outside doubt or political shadowing; stay steady.\n• Prove your innocence and capability through unyielding professional results."
        }
      },
      3: {
        name: "Testing",
        text: "Abundance is shrouded in thick curtains, revealing tiny stars at midday; the right arm is broken, rendering one unable to act, yet free of blame. Facing sudden, unavoidable trials that paralyze operations, accept limitations and defend your core safely.",
        guide: "Thick curtains and a broken arm at midday; accept constraints to protect your core.",
        focus: {
          "健康": "• Watch for arm fractures, shoulder dislocation, or sudden acute injury.\n• Rest thoroughly and halt heavy physical exertion, allowing tissues time to heal."
        }
      },
      4: {
        name: "Choosing",
        text: "Abundance is veiled in shadow, yet at midday you meet a brilliant, matching leader—great good fortune. In dark, confusing seasons, finding a visionary, powerful ally clears away the fog and unlocks breakthrough success.",
        guide: "Meet a brilliant leader amidst shadowed abundance; finding your match brings great good fortune.",
        focus: {
          "事業": "• Secure strategic backing from top-tier partners when facing market fog.\n• Redefine business direction with strong leadership, turning crisis into triumph."
        }
      },
      5: {
        name: "Manifesting",
        text: "Summoning brilliant talent and cultural excellence, welcoming joyful celebration and praise—great good fortune. Open your doors to exceptional minds, leading your enterprise to an unprecedented peak of brilliant prosperity.",
        guide: "Summon brilliant talent and celebrate success; open leadership brings great good fortune.",
        focus: {
          "事業": "• Recruit top-tier industry experts and masterminds, scaling innovation to its peak.\n• Win national or global awards for creative excellence, achieving historic acclaim."
        }
      },
      6: {
        name: "Completing",
        text: "Building an extravagant, towering mansion with thick curtains sealing the home; peeking inside reveals an empty, deserted hall where no one has been seen for three years—extreme danger. Arrogance, isolation, and self-sealing detachment invite total collapse. Break down the walls and reconnect with the world.",
        guide: "Luxurious isolation leads to an empty hall; arrogance and self-sealing bring disaster.",
        focus: {
          "財運": "• Avoid sinking massive capital into dead luxury real estate or empty vanity assets.\n• Liquidate low-efficiency fixed holdings, keeping liquid cash secure."
        }
      }
    },
    lv: {
      1: {
        name: "Emerging",
        text: "Fretting over petty, trivial details at the start of your journey, showing a narrow and petty spirit that invites disaster and humiliation. When stepping into unfamiliar environments, avoid petty stinginess or arguing over small change. Maintain a broad, generous character to protect your safety and standing.",
        guide: "Petty stinginess during travel invites humiliation; maintain a broad, generous spirit.",
        focus: {
          "感情": "• Avoid nitpicking over small slights in a new relationship; petty complaints can sour first impressions.\n• Lead with generosity and warmth rather than keeping score.",
          "事業": "• Stepping into a new role, resist quibbling over minor perks or credit.\n• A generous, big-picture attitude earns early goodwill from colleagues.",
          "健康": "• Minor discomforts shouldn't spiral into anxious fixation; keep perspective.\n• Adapt calmly to unfamiliar routines rather than resisting small inconveniences.",
          "財運": "• Don't haggle over trivial expenses while missing the bigger financial picture.\n• A generous, unhurried approach to new financial ground serves you better than pinching pennies.",
          "人際": "• In unfamiliar social settings, petty remarks can damage your standing quickly.\n• Broad-mindedness wins more allies than nitpicking ever will."
        }
      },
      2: {
        name: "Rooting",
        text: "Arriving at a comfortable lodging during travel, carrying ample funds safely, and winning the loyal support of a young, capable servant—steadfast virtue brings good fortune. You find a secure haven in unfamiliar territory, with resources and help close at hand. Protect this stability and advance with ease.",
        guide: "Find a secure lodging with ample funds and loyal help; steadfast virtue brings good fortune.",
        focus: {
          "感情": "• A steady, dependable partner or ally offers real security right now.\n• Protect this stability by showing the same loyalty in return.",
          "事業": "• You're finding solid footing with resources and support close at hand.\n• Nurture the loyal colleagues who back you rather than taking them for granted.",
          "健康": "• Settling into a stable, well-supported routine restores your energy.\n• Lean on trusted help rather than pushing through alone.",
          "財運": "• Resources are secure for now; use this calm to consolidate rather than gamble.\n• Reliable support—financial or otherwise—is close at hand if you look for it.",
          "人際": "• A capable, loyal ally is proving their worth; value them openly.\n• Building trust in unfamiliar circles pays off when you need it most."
        }
      },
      3: {
        name: "Testing",
        text: "The traveler's lodging catches fire and burns down, losing the loyal servant as well—extreme danger. Arrogant, harsh behavior or abrasive treatment of allies destroys your safe harbors and isolates you. Reign in aggressive tempers immediately and reflect deeply to rebuild security.",
        guide: "The lodging burns down and loyal help is lost; abrasive arrogance brings severe danger.",
        focus: {
          "感情": "• Harsh or arrogant words can burn down trust that took time to build.\n• Reflect on any abrasive behavior before it costs you a valued bond.",
          "事業": "• A prized resource or ally may suddenly be lost through your own high-handedness.\n• Rein in aggressive posturing before it isolates you at a critical moment.",
          "健康": "• Reckless intensity right now risks a real setback; ease off before it burns you out.\n• Treat your body's warning signs with humility, not bravado.",
          "財運": "• Overconfidence can destroy a hard-won financial safety net in an instant.\n• Avoid rash moves driven by pride; rebuild caution before pressing forward.",
          "人際": "• Abrasive treatment of allies can isolate you fast in unfamiliar territory.\n• Repair the damage of harsh words quickly and humbly."
        }
      },
      4: {
        name: "Choosing",
        text: "Finding a temporary resting place along the journey, securing defensive weapons and supplies, yet keeping an anxious and unsettled heart. Material security is temporarily achieved, but your spirit remains on guard. Stay alert while navigating transitions, seeking your true, permanent home.",
        guide: "Secure a temporary resting place with defensive gear, but keep watch with an unsettled heart.",
        focus: {
          "感情": "• This connection may feel temporary or provisional; stay present without over-committing yet.\n• It's normal to feel unsettled while you figure out where you truly belong.",
          "事業": "• A stopgap role or arrangement gives you footing, but stay alert for something more permanent.\n• Keep your guard up even as you settle into short-term stability.",
          "健康": "• A quick fix eases immediate discomfort, but don't mistake it for full recovery.\n• Stay watchful of your body while you search for a lasting solution.",
          "財運": "• Temporary financial footing is welcome, but keep contingency plans ready.\n• An unsettled feeling about money is a cue to keep building toward real security.",
          "人際": "• You may feel like a guest rather than a full member of the group for now.\n• Stay open and alert as you look for where you truly fit."
        }
      },
      5: {
        name: "Manifesting",
        text: "Hunting during travel and striking a pheasant with a single arrow, losing the arrow yet ultimately winning royal honors and a noble title. Showcasing exceptional talent and refined character in unfamiliar lands brings the highest recognition from leadership.",
        guide: "Strike the pheasant cleanly; showcasing talent in foreign lands wins noble honors.",
        focus: {
          "感情": "• A moment of genuine connection brings recognition and warmth from someone who matters.\n• Let your authentic character shine rather than performing for approval.",
          "事業": "• Showcasing your true talent in unfamiliar territory earns recognition from those above you.\n• One well-aimed effort can win you standing far beyond what you expected.",
          "健康": "• A focused, well-aimed effort—one good habit done well—brings a noticeable win.\n• Precision matters more than force right now.",
          "財運": "• A single well-timed, well-judged move brings a satisfying gain.\n• Let skill and precision guide this opportunity rather than volume or luck.",
          "人際": "• Your genuine talent earns you respect and honor in circles that once felt foreign.\n• Let your character, not self-promotion, do the talking."
        }
      },
      6: {
        name: "Completing",
        text: "A bird's nest catches fire and burns down; the traveler laughs at first, then cries aloud in bitter grief, losing their ox in the open plains—extreme danger. Growing arrogant and reckless at the peak of travel invites complete disaster. Stay humble and cautious to the very end.",
        guide: "The nest burns down, turning laughter into bitter tears; reckless arrogance brings disaster.",
        focus: {
          "感情": "• Growing complacent or arrogant at a high point can turn joy into sudden loss.\n• Stay humble and attentive even when things feel secure.",
          "事業": "• Overconfidence at the peak of success risks an abrupt, painful fall.\n• Guard against carelessness just when everything seems to be going well.",
          "健康": "• Ignoring your limits at a peak of energy invites a harder crash later.\n• Stay humble about your body's needs even when you feel invincible.",
          "財運": "• A careless, overconfident move at the height of good fortune can wipe out your gains.\n• Protect what you've built with the same care that earned it.",
          "人際": "• Recklessness or arrogance at the top can turn admiration into resentment fast.\n• Stay humble and cautious, especially when you feel most secure."
        }
      }
    },
    xun: {
      1: {
        name: "Emerging",
        text: "Hesitating between advancing and retreating, caught in doubt and indecision; adopting the resolute, martial discipline of a soldier brings steady advantage. At the start of gentle penetration, avoid swaying back and forth. Set your mind with unshakeable resolve, breaking hesitation through disciplined action.",
        guide: "Hesitation calls for martial resolve; break indecision with disciplined focus.",
        focus: {
          "感情": "• Going back and forth on a decision is straining the relationship; commit with clear resolve.\n• Gentle indecision needs to give way to a firm, honest choice.",
          "事業": "• Wavering between two paths is costing you momentum; choose with disciplined resolve.\n• A little decisive structure now prevents bigger stalls later.",
          "健康": "• Hesitating over a needed lifestyle change keeps you stuck; commit to one clear step.\n• Discipline, not more deliberation, is what moves you forward.",
          "財運": "• Indecision about a financial move is its own kind of risk; set a clear plan and act.\n• A disciplined, resolute approach beats endless second-guessing.",
          "人際": "• Wavering on where you stand socially reads as uncertainty to others.\n• A clear, steady stance earns more respect than trying to please everyone."
        }
      },
      2: {
        name: "Rooting",
        text: "Penetrating deep beneath the bed, employing numerous scribes and shamans in frantic prayer—great good fortune without blame. Drop all superficial pride, going straight to the grassroots to uncover root realities, communicating with total sincerity to resolve issues.",
        guide: "Penetrate deep beneath the bed with sincere rituals; humble thoroughness brings good fortune.",
        focus: {
          "感情": "• Going deep with sincere, humble effort—not surface gestures—strengthens this bond.\n• Total honesty about the root issue resolves more than performative gestures ever could.",
          "事業": "• Thorough, humble groundwork—not shortcuts—wins real, lasting results.\n• Getting to the root of a problem beats a quick surface fix.",
          "健康": "• Real progress comes from addressing root causes, not surface symptoms.\n• A humble, thorough approach to self-care pays off more than quick fixes.",
          "財運": "• Digging into the real numbers, however tedious, brings good fortune here.\n• Thoroughness now prevents costly surprises later.",
          "人際": "• Sincere, humble effort to understand others' real concerns deepens trust.\n• Skip the superficial gestures and address what actually matters to them."
        }
      },
      3: {
        name: "Testing",
        text: "Repeatedly and excessively submissive, descending into hollow flattery that brings humiliation and exhaustion. True gentle influence must be rooted in genuine capability and principles; groveling weakness strips away your dignity. Stand up with self-respect.",
        guide: "Excessive, hollow submission brings humiliation; hold to self-respect instead of groveling.",
        focus: {
          "感情": "• Constantly deferring or flattering to keep the peace is costing you self-respect.\n• Real intimacy needs your honest voice, not endless accommodation.",
          "事業": "• Excessive people-pleasing at work is eroding your standing, not building it.\n• Competence and self-respect earn more trust than constant deference.",
          "健康": "• Bending over backwards for others at your own expense is wearing you down.\n• Reclaim some boundaries before exhaustion catches up with you.",
          "財運": "• Overextending yourself financially to please others invites regret.\n• Hold a firmer line rather than constantly giving in.",
          "人際": "• Groveling for approval is costing you the respect you're trying to win.\n• Stand on your own principles rather than flattering your way into a group."
        }
      },
      4: {
        name: "Choosing",
        text: "Regret fades away completely; hunting in the fields yields a threefold harvest. Operating from a central, balancing role, you harmonize diverse dynamics with soft wisdom, harvesting substantial practical success.",
        guide: "Regret vanishes as the hunt yields a triple harvest; soft coordination brings rich success.",
        focus: {
          "感情": "• Past regrets are fading; your gentle, coordinating touch is bringing real harmony now.\n• Soft, patient mediation between differing needs pays off richly.",
          "事業": "• Playing a balancing, coordinating role—rather than pushing hard—yields substantial results.\n• Old setbacks dissolve as your diplomatic approach starts paying off.",
          "健康": "• A gentle, balanced approach is finally yielding real, tangible improvement.\n• Trust the process; the results are becoming visible.",
          "財運": "• A patient, well-coordinated strategy is starting to pay off handsomely.\n• Past losses fade as balanced planning bears fruit.",
          "人際": "• Your quiet skill at bringing people together is earning real appreciation.\n• Soft diplomacy is achieving what force could not."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding to the true path brings good fortune and dissolves regret, leaving no obstacle. Prepare thoroughly three days before taking action and review outcomes three days after, executing policies with meticulous and comprehensive care.",
        guide: "Hold to truth with meticulous planning before and after; flawless execution brings good fortune.",
        focus: {
          "感情": "• Careful, considerate planning—thinking ahead and reflecting afterward—deepens trust.\n• Thoroughness in how you show up brings good fortune to this bond.",
          "事業": "• Meticulous preparation before and careful review after set this apart as flawless work.\n• Comprehensive care in execution is exactly what earns recognition now.",
          "健康": "• A well-planned, carefully reviewed routine is the key to real progress.\n• Consistency and attention to detail bring the results you're after.",
          "財運": "• Thorough planning before committing, and careful review afterward, safeguards your gains.\n• Meticulous care with money brings steady, worry-free good fortune.",
          "人際": "• Thoughtful preparation before engaging with others earns lasting goodwill.\n• Careful follow-through on your word builds a flawless reputation."
        }
      },
      6: {
        name: "Completing",
        text: "Penetrating deep beneath the bed, losing defensive resources and tools—persistence brings danger. Over-submitting to the point of completely stripping away your own boundaries and defenses invites peril. Reclaim your core strength and backbone immediately.",
        guide: "Submitting deep beneath the bed loses self-defense; holding this extreme brings danger.",
        focus: {
          "感情": "• Giving up all your boundaries to keep someone happy leaves you exposed and depleted.\n• Reclaim your voice before total self-sacrifice becomes dangerous.",
          "事業": "• Total, unguarded deference at work strips away your influence—reclaim your footing.\n• Holding this extreme of compliance for too long invites real setbacks.",
          "健康": "• Ignoring your own needs entirely for others' sake has gone too far—recover your boundaries.\n• Ongoing self-neglect at this extreme is a genuine health risk.",
          "財運": "• Giving away too much financial ground leaves you dangerously exposed—hold a firmer line.\n• It's time to protect your own resources before this extreme costs you dearly.",
          "人際": "• Losing yourself entirely to please a group leaves you without real standing.\n• Reclaim your core identity before over-accommodation becomes a real vulnerability."
        }
      }
    },
    dui: {
      1: {
        name: "Emerging",
        text: "Connecting with unadorned, harmonious joy, completely free of hidden motives or selfish calculation—great good fortune. At the dawn of joyful alignment, keep your heart pure and treat others with authentic sincerity.",
        guide: "Harmonious joy free of hidden motives; pure sincerity brings great good fortune.",
        focus: {
          "感情": "• A connection built on pure, unguarded sincerity brings real happiness now.\n• Let this joy stay simple and genuine, free of hidden agendas.",
          "事業": "• Collaborations built on genuine goodwill—not calculation—are thriving right now.\n• Approach new partnerships with an open, sincere heart.",
          "健康": "• Simple, joyful activities done for their own sake genuinely nourish you now.\n• Let go of over-analyzing; ease and enjoyment are good medicine.",
          "財運": "• Transparent, straightforward dealings bring good fortune right now.\n• Avoid overcomplicating what's actually a simple, favorable situation.",
          "人際": "• Warm, unguarded connection is flowing easily in your circle right now.\n• Sincerity, not strategy, is what's winning people over."
        }
      },
      2: {
        name: "Rooting",
        text: "Holding to deep, trustworthy sincerity and harmonious joy brings good fortune, dissolving all regret. Stay grounded in upright balance, refusing to pander to cheap entertainment, anchoring joy in genuine character.",
        guide: "Trustworthy sincerity brings joyful good fortune; upright character dissolves regret.",
        focus: {
          "感情": "• Deep, dependable sincerity—not fleeting excitement—is what's making this relationship thrive.\n• Anchor your happiness in genuine character rather than surface pleasures.",
          "事業": "• A reputation for trustworthy, upright dealings is bringing steady good fortune.\n• Stay grounded in your principles rather than chasing quick wins.",
          "健康": "• Consistent, grounded habits—not fads—are the real source of your wellbeing.\n• Trust the steady approach over anything flashy or extreme.",
          "財運": "• Trustworthy, principled financial habits are dissolving old worries.\n• Steady integrity, not clever shortcuts, is building real security.",
          "人際": "• Your consistent, trustworthy character is earning deep, lasting respect.\n• Genuine standing, not popularity contests, is what matters here."
        }
      },
      3: {
        name: "Testing",
        text: "Chasing after low-brow flattery, superficial pleasures, and external stimulation—extreme misfortune. Indulging in shallow thrills at the expense of your principles invites swift regret and trouble. Return to pristine clarity.",
        guide: "Chasing low-brow flattery and shallow thrills brings disaster; return to clear truth.",
        focus: {
          "感情": "• Chasing excitement or flattery outside the relationship risks real damage.\n• Return to what's genuine before superficial thrills cost you something real.",
          "事業": "• Chasing shallow wins or empty praise at work is a costly distraction right now.\n• Refocus on substantial work rather than surface-level validation.",
          "健康": "• Indulging in short-term pleasures at the expense of real wellbeing invites trouble.\n• Step back from empty indulgence and return to what genuinely sustains you.",
          "財運": "• Chasing flashy, low-substance opportunities risks real financial loss.\n• Return to sound, unglamorous fundamentals before it's too late.",
          "人際": "• Seeking approval through shallow flattery or gossip will backfire quickly.\n• Return to honest, substantial connection instead of chasing cheap validation."
        }
      },
      4: {
        name: "Choosing",
        text: "Weighing whether to pursue noble harmony or low-brow indulgence, feeling unsettled until making the sharp choice to sever ties with harmful influences, bringing joyful relief. Decide with moral clarity, choosing the higher path.",
        guide: "Weigh choices and sever ties with low-brow habits; cutting away harm brings joy.",
        focus: {
          "感情": "• A clear choice to walk away from a draining influence brings real relief.\n• Choosing depth over distraction restores joy to this relationship.",
          "事業": "• Cutting ties with an unproductive habit or association brings welcome clarity.\n• Choosing the higher, more disciplined path pays off in relief and momentum.",
          "健康": "• Deciding to cut out an unhealthy habit, even reluctantly, brings real relief.\n• The discomfort of choosing well beats the cost of continuing to indulge.",
          "財運": "• Severing ties with a costly, low-value habit frees up real resources.\n• A clear-eyed decision now brings welcome financial relief.",
          "人際": "• Distancing yourself from a negative influence brings a genuine sense of relief.\n• Choosing better company, even if it feels hard, restores your joy."
        }
      },
      5: {
        name: "Manifesting",
        text: "Placing trust in compromised, eroding influences; staying entangled with bad actors carries latent danger. Stay clear-headed when holding authority, watching out for subtle corruption that eats away at success.",
        guide: "Trusting eroding influences carries latent danger; stay vigilant against subtle corruption.",
        focus: {
          "感情": "• Be alert to a subtly corrosive influence or dynamic before it erodes your trust.\n• Vigilance now protects a bond that could quietly unravel.",
          "事業": "• Stay watchful of a compromised colleague or arrangement that could quietly undermine you.\n• Authority here calls for vigilance, not blind trust.",
          "健康": "• A habit that seems harmless may be subtly undermining your wellbeing—stay alert.\n• Watch closely for small warning signs before they become bigger problems.",
          "財運": "• A seemingly stable investment or partner may carry hidden risk—stay vigilant.\n• Subtle erosion of your resources is easier to catch early than late.",
          "人際": "• Someone close may not have your best interests at heart—watch carefully.\n• Stay clear-headed rather than naively trusting every influence around you."
        }
      },
      6: {
        name: "Completing",
        text: "Radiating and drawing others upward into harmonious joy. Joy reaches its sublime peak, inspiring people through bright presence while keeping inner self-discipline intact. Share happiness gracefully to achieve complete fulfillment.",
        guide: "Draw others upward into harmonious joy; balanced self-discipline achieves fulfillment.",
        focus: {
          "感情": "• Your warmth is lifting the people around you—share it while keeping your own balance.\n• Joy shared generously, without losing yourself, brings deep fulfillment.",
          "事業": "• Your positive energy is inspiring the whole team—lead by bright example.\n• Balanced enthusiasm, not excess, brings this success to full completion.",
          "健康": "• A joyful, balanced approach to wellbeing is finally paying off fully.\n• Keep the discipline that got you here even as you enjoy the results.",
          "財運": "• Shared success and generosity, balanced with discipline, bring lasting satisfaction.\n• Enjoy this abundance without losing the discipline that built it.",
          "人際": "• You're becoming a genuine source of joy and inspiration for those around you.\n• Grace and self-discipline, not excess, complete this cycle well."
        }
      }
    },
    huan: {
      1: {
        name: "Emerging",
        text: "Rescuing a crisis at its onset with the strength of a robust, swift horse—great good fortune. When stagnation or division first appears, act decisively with strong remedial measures to restore stability immediately.",
        guide: "Rescue early with the strength of a swift horse; decisive action brings great good fortune.",
        focus: {
          "感情": "• Address a small rift decisively now, before it grows into real distance.\n• Swift, caring action at the first sign of trouble brings excellent results.",
          "事業": "• Act quickly and decisively on an early warning sign at work—it prevents a bigger crisis.\n• Strong, prompt remedial action now brings great results later.",
          "健康": "• Address a health concern the moment it appears rather than waiting it out.\n• Swift, decisive action on early symptoms leads to a strong recovery.",
          "財運": "• Catching a financial problem early and acting decisively saves you real trouble.\n• Prompt, strong action now prevents a much bigger loss later.",
          "人際": "• Repair a budding misunderstanding right away, while it's still easy to mend.\n• Decisive kindness now stops a small rift from becoming a real divide."
        }
      },
      2: {
        name: "Rooting",
        text: "Fleeing from turbulence and dispersion to find a secure, unshakeable support base, dissolving regret. Amid shifting environments, seek out dependable organizations or mentors as your safe harbor, securing peace.",
        guide: "Flee dispersion to find a secure support base; seeking reliable refuge dissolves regret.",
        focus: {
          "感情": "• If things feel scattered right now, seek out one steady, trustworthy person to lean on.\n• Finding a secure emotional anchor dissolves the unease you've been feeling.",
          "事業": "• Amid a chaotic or shifting work situation, find a dependable mentor or team to anchor you.\n• Seeking reliable support now dissolves the instability you've felt.",
          "健康": "• When routines feel scattered, anchor yourself in one dependable, grounding habit.\n• A reliable support system helps steady you through this shift.",
          "財運": "• In an uncertain financial climate, move your resources toward the most reliable, stable option.\n• Seeking a dependable anchor now dissolves lingering financial worry.",
          "人際": "• If your circle feels fragmented, seek out the few people you can truly rely on.\n• A dependable support base brings real peace amid the scattering."
        }
      },
      3: {
        name: "Testing",
        text: "Dissolving personal ego completely, sacrificing self-interest for the collective good—free of regret. Facing institutional or team fragmentation, step forward with selfless courage to heal the division.",
        guide: "Sacrifice personal ego to heal division; selfless devotion leaves no room for regret.",
        focus: {
          "感情": "• Setting aside your pride to repair a rift is exactly what's needed now.\n• Selfless effort to mend the divide leaves no room for regret.",
          "事業": "• Stepping up selflessly to heal a divided team, without seeking personal credit, serves everyone well.\n• Putting the collective good ahead of your ego resolves the friction.",
          "健康": "• Letting go of stubborn pride about your habits opens the door to real healing.\n• Selfless, honest self-care—not ego—moves you toward recovery.",
          "財運": "• Setting aside personal gain for the sake of a shared goal pays off here.\n• A selfless approach to a joint financial matter resolves tension.",
          "人際": "• Setting your ego aside to mend a group rift earns lasting respect.\n• Selfless courage in the face of division brings genuine goodwill."
        }
      },
      4: {
        name: "Choosing",
        text: "Breaking through narrow factional cliques and clan biases, achieving supreme good fortune; viewing the landscape from a grand, elevated peak that ordinary minds miss. Unite diverse groups with macro vision.",
        guide: "Break narrow cliques and view from an elevated peak; macro vision brings supreme fortune.",
        focus: {
          "感情": "• Rise above petty grievances or old grudges to see the bigger picture together.\n• A broader, more generous perspective dissolves narrow conflict.",
          "事業": "• Breaking away from narrow office politics and taking the long view brings real advantage.\n• A macro perspective now sets you apart from those stuck in petty rivalry.",
          "健康": "• Step back from small, obsessive worries and look at your overall wellbeing.\n• A broader perspective on health serves you better than fixating on details.",
          "財運": "• Rising above short-term, narrow thinking to see the whole financial picture brings real gains.\n• Broad, strategic vision outperforms cliquish, small-scale thinking now.",
          "人際": "• Rise above small factions and unite people around a shared, bigger vision.\n• Broad-minded leadership earns far more goodwill than narrow loyalty."
        }
      },
      5: {
        name: "Manifesting",
        text: "Issuing inspiring proclamations like flowing sweat that cannot be recalled, uniting the community's scattered hearts; the leader dwells in proper authority without blame. Inspire the whole with clear, grand vision.",
        guide: "Proclamations flow like sweat to unite scattered hearts; visionary leadership brings no blame.",
        focus: {
          "感情": "• Speaking your heart openly and clearly can reunite feelings that have drifted apart.\n• Clear, heartfelt communication brings everyone back together.",
          "事業": "• A clear, inspiring message from you can unite a team that's felt scattered.\n• Visionary, heartfelt leadership right now brings people back on the same page.",
          "健康": "• A clear, committed intention—stated plainly to yourself—helps unify scattered habits into one healthy rhythm.\n• Clarity of purpose now brings your wellbeing efforts together.",
          "財運": "• A clear, well-communicated plan brings scattered resources or partners back into alignment.\n• Transparent, confident communication about money resolves confusion.",
          "人際": "• Your genuine, clear words can bring a divided group back together.\n• Speak with heartfelt clarity; it's exactly what your community needs to hear."
        }
      },
      6: {
        name: "Completing",
        text: "Dispelling bloodshed and danger, stepping out cleanly into wide-open spaces—completely free of blame. All turbulence and conflict dissolve entirely, stepping forward into an expansive, unhindered horizon.",
        guide: "Dispense with danger and step into wide-open spaces; total resolution brings no blame.",
        focus: {
          "感情": "• The tension has genuinely cleared—step forward into this relationship with fresh openness.\n• You're free to move ahead without the old conflict weighing on you.",
          "事業": "• A difficult chapter is fully resolved—move confidently into the open opportunity ahead.\n• You're free to expand without the old obstacles holding you back.",
          "健康": "• A health worry has genuinely passed—step forward into renewed vitality with confidence.\n• You're free to embrace a more open, active phase now.",
          "財運": "• Past financial danger has fully cleared—you're free to move forward with confidence.\n• A clean slate is yours; step into new opportunity without old baggage.",
          "人際": "• Old conflict has genuinely dissolved—step into this fresh, open chapter with your circle.\n• You're free to build new connections without past tension holding you back."
        }
      }
    },
    jie_restraint: {
      1: {
        name: "Emerging",
        text: "Remaining quietly inside the courtyard doors without stepping out, maintaining mindful self-discipline—completely free of blame. At the onset of restraint, the wisest strategy is to draw inward, avoiding exposure to outside turbulence. Discern early signs and stay quietly composed, securing safety through self-containment.",
        guide: "Remain inside the courtyard doors; quiet self-containment brings freedom from blame.",
        focus: {
          "感情": "• Stay close to home to enjoy cozy privacy early on, avoiding restless social outings.\n• Build deep trust in quiet companionship, protecting the peaceful sanctity of private life.",
          "事業": "• Keep early initiatives low-key without public display, focusing on internal refinement.\n• Guard trade secrets and responsibilities strictly, avoiding exposure to premature friction.",
          "健康": "• Stay indoors to rest during harsh weather or physical fatigue, avoiding exposure to chills.\n• Build disciplined home wellness habits, nourishing vital energy in quiet peace.",
          "財運": "• Hold cash and avoid stepping out into uncertain markets; stay sidelined safely.\n• Enforce strict limits on travel and non-essential spending, keeping capital secure.",
          "人際": "• Cut back on shallow social banquets, preserving your energy for yourself and family.\n• Watch your words and stay grounded, avoiding outside drama through quiet discipline."
        }
      },
      2: {
        name: "Rooting",
        text: "Remaining trapped inside the outer courtyard gate, missing the opportune window to act—extreme misfortune. Restraint must never become rigid isolation; when timing is ripe and pathways are open, clinging stubbornly to inaction invites trouble. Seize the moment and step forward with agility.",
        guide: "Trapped inside the courtyard gate; missing the open window brings misfortune, so act in time.",
        focus: {
          "感情": "• When your partner signals a desire to make peace, drop pride and step out to meet them.\n• Take the initiative to communicate, avoiding missing a great opportunity through hesitation.",
          "事業": "• When market tailwinds open up, stop hesitating and launch products to seize the lead.\n• Overcome closed-door habits, leading your team outward to capture new ground.",
          "健康": "• Step outdoors for fresh air and movement after recovering, avoiding isolation.\n• Embrace nature and community activity, letting dynamic movement restore physical stamina.",
          "財運": "• When golden asset entry points appear, act decisively without missing the window.\n• Step past excessive conservatism, capturing high-probability yields with confidence.",
          "人際": "• Accept friendly invitations warmly, stepping out of isolation into vibrant networks.\n• Show welcoming enthusiasm, seizing great opportunities to make valuable alliances."
        }
      },
      3: {
        name: "Testing",
        text: "Failing to practice self-restraint leads to bitter sighs of regret and hardship, with no one else to blame but your own lack of discipline. Unbridled indulgence always invites harsh consequences. Wake up immediately, restoring strict personal boundaries and self-governance.",
        guide: "Lack of restraint brings bitter sighs; self-indulgence invites consequences, so restore discipline.",
        focus: {
          "感情": "• Drop indulgent, selfish habits or emotional outbursts that damage trust.\n• Practice rigorous emotional self-discipline, earning back your partner's trust through accountability.",
          "事業": "• Projects suffer heavy delays and budget overruns from undisciplined oversight.\n• Enforce strict milestone checks and operational accountability, clearing out sloppy workflows.",
          "健康": "• Watch for acute flare-ups from overindulging in rich foods, alcohol, or late nights.\n• Enforce strict dietary and sleep discipline immediately to rescue your physical balance.",
          "財運": "• Reckless spending and credit card over-leveraging trigger debt distress.\n• Implement an emergency austerity budget, cutting all non-essential outflows instantly.",
          "人際": "• Careless words and loose boundaries offend friends, causing social isolation.\n• Own your faults with humble sincerity, apologizing to mend frayed relationships."
        }
      },
      4: {
        name: "Choosing",
        text: "Practicing cheerful, relaxed self-restraint, aligning smoothly with natural principles and achieving smooth success. Discipline does not have to be painful; when integrated as a natural lifestyle rhythm, it brings effortless flow. Manage resources and desires with balanced grace, securing lasting peace.",
        guide: "Practice relaxed, cheerful self-restraint; aligning with natural balance brings smooth success.",
        focus: {
          "感情": "• Enjoy comfortable, natural relationship boundaries—neither suffocating nor distant.\n• Respect each other's independence, sustaining sweet and enduring family harmony.",
          "事業": "• Establish smooth, well-designed operating protocols that teams follow with ease.\n• Balance high performance with sustainable pacing, ensuring long-term operational health.",
          "健康": "• Maintain natural, wholesome diet and sleep habits that feel effortless and nourishing.\n• Body and mind rest in balanced moderation, enjoying vibrant longevity and calm.",
          "財運": "• Manage household finances with effortless discipline, keeping steady monthly savings.\n• Compound assets through steady, low-stress investing, growing wealth with peace of mind.",
          "人際": "• Show polished etiquette and gracious boundaries, winning universal affection.\n• Keep clean, wholesome social habits, surrounded by supportive and uplifting friends."
        }
      },
      5: {
        name: "Manifesting",
        text: "Practicing sweet, pleasant self-restraint brings great good fortune, advancing boldly to win universal acclaim. Leaders set the standard by embodying fair, inspiring discipline that others follow with cheerful hearts. Exceptional governance achieves complete success.",
        guide: "Lead with sweet, inspiring self-restraint; advancing with fair rules brings great fortune.",
        focus: {
          "感情": "• Voluntarily restrain personal desires out of deep love, nourishing family harmony.\n• Co-create a high-quality, disciplined home life, enjoying blessed, lasting happiness.",
          "事業": "• Leaders set fair, empowering standards that inspire total team dedication.\n• Operational efficiency reaches peak industry levels; projects triumph effortlessly.",
          "健康": "• Savor the deep physical vitality and mental clarity that come from disciplined health habits.\n• Maintain an optimistic, calm spirit, enjoying robust wellness and long life.",
          "財運": "• Financial management achieves master-level precision; asset allocations yield rich returns.\n• Accumulate massive wealth through disciplined consistency, securing multi-generational security.",
          "人際": "• Revered for fair and inspiring leadership, earning the heartfelt devotion of all.\n• Stand as a trusted role model in your community, building an unshakeable network."
        }
      },
      6: {
        name: "Completing",
        text: "Extreme, bitter, and rigid self-restraint invites misfortune; yet recognizing this over-austerity and finding release brings relief. Pushing discipline into punishing extremes leads to burnout and rebellion. Soften rigid rules and embrace human-centered flexibility to restore peace.",
        guide: "Extreme, bitter discipline brings misfortune; soften rigid rules to restore peace and ease.",
        focus: {
          "感情": "• Avoid imposing overly harsh, rigid expectations on your partner, preventing burnout.\n• Soften rules with gentle forgiveness and warm care, restoring life to the home.",
          "事業": "• Abolish overly punitive or bureaucratic internal policies that drain team morale.\n• Introduce human-centered empowerment and support, reigniting team engagement.",
          "健康": "• Stop extreme crash diets, punishing workouts, or ascetic regimens that exhaust the body.\n• Return to balanced, nourishing care, pampering your physical system with gentle ease.",
          "財運": "• Avoid pathological miserliness or extreme penny-pinching that harms quality of life.\n• Balance financial discipline with reasonable lifestyle enjoyment, keeping funds healthy.",
          "人際": "• Stop holding others to impossibly rigid standards, practicing gracious tolerance.\n• Show compassionate warmth and forgiveness, healing frayed social bonds."
        }
      }
    },
    zhongfu: {
      1: {
        name: "Emerging",
        text: "Holding fast to pristine inner truth brings good fortune, while entertaining wandering thoughts or depending on others brings inner unrest. At the start of sincerity, keep your character pure, independent, and focused. Avoid calculating tricks or ungrounded alliances, walking forward in pure truth.",
        guide: "Hold fast to pristine inner truth; pure focus brings good fortune while wavering brings unrest.",
        focus: {
          "感情": "• Be completely devoted and honest in early love, avoiding wandering eyes or backup options.\n• Show your authentic self, winning your partner's full trust through pure transparency.",
          "事業": "• Focus 100% on your core mission, avoiding spreading yourself thin across unaligned fads.\n• Uphold strict professional ethics and contract integrity, building an unshakeable foundation.",
          "健康": "• Keep your mind clear of cluttered mental noise, avoiding stress-induced insomnia.\n• Maintain clean, pure lifestyle habits, supporting physical vitality through inner calm.",
          "財運": "• Focus capital into the single asset class you understand best, avoiding speculative hype.\n• Earn clean income through honest work, building stable wealth on true integrity.",
          "人際": "• Treat people with unvarnished honesty, avoiding two-faced social calculations.\n• Build a reputation for pristine reliability right from the start of your journey."
        }
      },
      2: {
        name: "Rooting",
        text: "The crane calls out from the deep shade, and its chick echoes the call in harmonious resonance; I have fine wine to share, and you match my spirit with joy. True sincerity creates a powerful, magnetic heart-to-heart bond across any distance. Radiating truth from within naturally draws kindred spirits to your side.",
        guide: "The crane calls in the shade and its chick echoes; authentic sincerity draws kindred souls.",
        focus: {
          "感情": "• Soulmate resonance is deep and magnetic; distance only strengthens mutual devotion.\n• Share all of life's beauty with your partner, enjoying deep wine-and-song intimacy.",
          "事業": "• Exceptional professional competence and craft attract widespread industry resonance.\n• Establish win-win partnership frameworks, drawing top talent to join your mission.",
          "健康": "• Body and mind achieve deep resonance and flow; circulation and vitality thrive.\n• Enjoy nourishing art, music, and nature retreats, elevating your holistic wellbeing.",
          "財運": "• Stellar market reputation draws abundant, high-quality clients and opportunities.\n• Share investment gains with trusted partners, compounding wealth through synergy.",
          "人際": "• Draw high-caliber, virtuous mentors and friends naturally through your character.\n• Forge unshakeable, soul-deep friendships that withstand every test of time."
        }
      },
      3: {
        name: "Testing",
        text: "Meeting a fierce opponent or severe trial, swinging between beating the drum, resting in exhaustion, weeping in sorrow, and singing in joy. When sincerity is tested by severe turbulence, do not let emotional mood swings dictate your actions. Anchor your center in unshakeable truth, rising above emotional turmoil.",
        guide: "Facing trials brings emotional swings; anchor your center in truth to rise above turbulence.",
        focus: {
          "感情": "• Avoid running hot and cold or staging dramatic emotional rollercoasters in love.\n• Maintain a stable, mature emotional presence, soothing friction with quiet reason.",
          "事業": "• Avoid panicking or shifting strategies wildly when facing fierce market competition.\n• Hold your strategic footing with steady resolve, outlasting rivals through calm focus.",
          "健康": "• Watch for blood pressure spikes or heart strain caused by emotional volatility.\n• Settle your nervous system through deep breathing and grounding meditation.",
          "財運": "• Avoid chasing short-term market swings out of fear or greed during volatility.\n• Stick to disciplined investment rules, keeping your portfolio safe from emotional trades.",
          "人際": "• Avoid emotional outbursts or venting in public social settings; keep poise.\n• Respond to opposition with grounded dignity, winning respect through steady grace."
        }
      },
      4: {
        name: "Choosing",
        text: "Like the moon approaching its full splendor, the mounted horseman loses his companion, yet there is no blame. To pursue a higher, purer plane of truth, you must release narrow attachments and unaligned companions. Rising above personal ties to anchor in universal truth brings complete fulfillment.",
        guide: "The moon nears fullness and the horse runs free; transcend personal ties to embrace truth.",
        focus: {
          "感情": "• Release selfish possessiveness and insecurity, loving your partner with pure freedom.\n• Romance reaches a mature, radiant peak of deep, harmonious maturity.",
          "事業": "• Step beyond factional politics and petty ties, serving the team's broader mission.\n• Earn the complete trust and backing of executive leadership through pure integrity.",
          "健康": "• Release mental burdens completely; body and mind feel full, light, and radiant.\n• Savor a clean, mindful lifestyle, enjoying buoyant physical vitality and peace.",
          "財運": "• Cut ties with messy, unaligned financial entanglements, keeping capital secure.\n• Focus resources into broad, high-integrity core assets, capturing steady long-term gains.",
          "人際": "• Move past superficial social cliques, connecting widely with honorable minds.\n• Stand as an inspiring, luminous presence in your community, widely respected."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding fast to pristine inner truth like an unbreakable cord binding all people together—completely free of blame and bringing great good fortune. Lead with absolute sincerity and kept promises; truth anchors your authority. People unite willingly around your genuine character, achieving grand success.",
        guide: "Bind all hearts with the unshakeable cord of truth; absolute sincerity brings great fortune.",
        focus: {
          "感情": "• Bound together by unshakeable trust and deep devotion, growing old together.\n• Co-create a warm, deeply bonded home life overflowing with love and safety.",
          "事業": "• Leaders unite the entire organization through authentic trust, achieving unbeatable synergy.\n• Corporate credibility reaches an industry peak, guiding the market forward.",
          "健康": "• Body and spirit achieve pristine clarity and harmony; vital energy is rich and radiant.\n• Keep a compassionate, peaceful heart, enjoying vibrant longevity and deep ease.",
          "財運": "• Commercial credibility drives massive, sustainable revenue and capital inflows.\n• Asset allocations expand robustly, compounding wealth securely through trust.",
          "人際": "• Revered as an authentic, trusted leader, winning the heartfelt devotion of all.\n• Build an unshakeable network of top-tier allies, succeeding with effortless unity."
        }
      },
      6: {
        name: "Completing",
        text: "Cock-crows echo up to the high heavens in empty, boastful noise—persisting in this hollow show brings danger and cannot last. Sincerity must be backed by real substance, not flashy publicity or empty words. Drop superficial showmanship immediately and return to grounded, quiet authenticity.",
        guide: "Boastful cock-crows echo to the sky; empty show cannot last, so return to true substance.",
        focus: {
          "感情": "• Stop making empty romantic promises or flashy public displays without real care.\n• Win your partner's trust back through quiet, practical daily actions.",
          "事業": "• Avoid relying on PR hype and flashy presentations that lack core deliverables.\n• Halt empty marketing campaigns, focusing all energy on upgrading product substance.",
          "健康": "• Watch for throat strain, ringing ears, or high blood pressure from nervous stress.\n• Settle internal heat with clean diet and quiet rest, restoring physical grounding.",
          "財運": "• Beware of hyped speculative concepts and promotional bubbles; avoid buying in.\n• Liquidate hollow asset positions immediately, returning to safe, solid value holdings.",
          "人際": "• Stop boasting and name-dropping in social circles, keeping a low profile.\n• Earn genuine respect through real deeds rather than loud words, building true standing."
        }
      }
    },
    xiaoguo: {
      1: {
        name: "Emerging",
        text: "The flying bird attempts to soar before its wings are grown, inviting disaster and catastrophe. When position and strength are still in their infancy, avoid overreaching ambitions or reckless leaps. Stay close to the ground and build skills step by step to secure safety.",
        guide: "The bird flies too early and courts disaster; stay grounded and build skills slowly.",
        focus: {
          "感情": "• Avoid pushing for heavy commitments too early in new romance; take it slow.\n• Keep interactions humble and unhurried, building comfort step by step.",
          "事業": "• Beginners should focus on mastering basics rather than taking on massive projects.\n• Acknowledge your current limits, building competence quietly to prevent early failure.",
          "健康": "• Avoid extreme, high-impact workouts that risk joint and bone injury.\n• Build fitness gradually from simple, foundational walking and stretching.",
          "財運": "• Avoid taking on large speculative bets with lean funds, preventing capital loss.\n• Build baseline savings steadily, resisting the urge to chase get-rich schemes.",
          "人際": "• Stay humble and polite, avoiding boasting over minor knowledge in public.\n• Respect senior mentors, making a solid early impression through quiet diligence."
        }
      },
      2: {
        name: "Rooting",
        text: "Surpassing the father to meet the grandmother, missing the sovereign while meeting the minister—completely free of blame. In detailed, careful times, avoid forcing direct contact with the highest authorities. Follow proper hierarchy, working with accessible, practical allies to advance steadily without fault.",
        guide: "Meet practical allies instead of forcing high-level access; step-by-step work brings no blame.",
        focus: {
          "感情": "• Address family friction by connecting first with approachable relatives or partners.\n• Settle for practical, steady relationship steps rather than demanding perfection.",
          "事業": "• Coordinate with direct management and frontline peers rather than bypassing them.\n• Deliver reliable execution on mid-level tasks, ensuring smooth operational flow.",
          "健康": "• Follow gentle, wholesome dietary and herbal remedies rather than harsh cleanses.\n• Respect your body's recovery pace, healing step by step without rushing.",
          "財運": "• Focus on secure, mid-term investments with dependable, steady yields.\n• Manage daily cash flow with meticulous care, building savings step by step.",
          "人際": "• Build strong ties with everyday colleagues, winning their support and trust.\n• Follow social protocols respectfully, keeping interactions harmonious and smooth."
        }
      },
      3: {
        name: "Testing",
        text: "Failing to maintain vigilant defenses allows hostile forces to launch sudden attacks from behind, bringing severe danger. In delicate and vulnerable seasons, never drop your guard or neglect security. Maintain rigorous vigilance across every detail, fortifying defenses to fend off hidden risks.",
        guide: "Lacking vigilance invites sudden attack; maintain rigorous defense across every detail.",
        focus: {
          "感情": "• Watch for subtle relationship drift or outside interference; protect your bond.\n• Communicate with open honesty to clear away hidden misunderstandings early.",
          "事業": "• Audit project security, compliance, and legal terms to prevent competitor ambushes.\n• Execute a thorough risk review immediately, plugging latent operational leaks.",
          "健康": "• Care for minor wounds or lingering symptoms promptly, preventing acute flare-ups.\n• Maintain strict hygiene and safety precautions in public environments.",
          "財運": "• Guard account security and contractual terms carefully against fraud or leaks.\n• Enforce strict risk management, protecting baseline assets from unexpected hits.",
          "人際": "• Watch out for unverified gossip or disingenuous individuals trying to exploit you.\n• Maintain healthy boundaries, keeping private information secure and protected."
        }
      },
      4: {
        name: "Choosing",
        text: "Free of blame, avoiding reckless overreach by meeting opportunities with balanced care; advancing requires deep caution, so do not persist in aggressive expansion. Restrain ambitious drives, adapting flexibly to current limits to preserve safety.",
        guide: "Avoid reckless overreach and meet opportunities with care; caution preserves safety.",
        focus: {
          "感情": "• Drop competitive ego and win-lose debates in love, choosing gentle compromise.\n• Keep a watchful, caring presence, protecting relationship harmony through quiet tact.",
          "事業": "• Scale back aggressive expansion plans, focusing on consolidating current operations.\n• Move with calculated caution, avoiding stepping outside established safety lines.",
          "健康": "• Avoid pushing physical limits in intense workouts; prioritize safe conditioning.\n• Keep the nervous system calm and balanced through restorative rest and pacing.",
          "財運": "• Keep a defensive portfolio stance, avoiding aggressive long-shot bets.\n• Protect core accumulated capital with strict risk controls, keeping wealth safe.",
          "人際": "• Move with balanced, diplomatic tact, avoiding sharp words or public disputes.\n• Earn the deep trust of peers through calm, reliable, and unpretentious grace."
        }
      },
      5: {
        name: "Manifesting",
        text: "Dense clouds gather across the western sky yet fail to release rain; the noble archer shoots an arrow into a mountain cave to capture game—great good fortune in small matters. Operating in a constrained environment where broad momentum is blocked, you triumph by mastering minute details and solving precise, localized problems.",
        guide: "Clouds gather without rain, but precise archery in the cave brings great success in small things.",
        focus: {
          "感情": "• Overcome external life pressures together by solving specific, practical challenges.\n• Express love through thoughtful, detailed care, bringing warmth to home life.",
          "事業": "• Overcome macro market slowdowns by conquering precise technical bottlenecks.\n• Capture brilliant success in niche, specialized sub-markets through mastery of detail.",
          "健康": "• Treat complex, localized chronic ailments with precise medical care successfully.\n• Restore holistic physical wellness through meticulous daily health routines.",
          "財運": "• Spot undervalued, overlooked micro-assets in bear markets for rewarding gains.\n• Manage finances with meticulous precision, maximizing returns on lean budgets.",
          "人際": "• Solve critical operational problems for your team, earning deep admiration.\n• Serve as an indispensable tactical expert, highly valued for your precise skills."
        }
      },
      6: {
        name: "Completing",
        text: "Failing to meet conditions and flying recklessly upward, the bird passes safe limits and falls into traps and nets—disaster and catastrophe. Blind arrogance and refusal to recognize real limits invites total destruction. Descend immediately from dangerous heights, stepping back to safety.",
        guide: "Flying recklessly past safe limits invites disaster; descend immediately to safety.",
        focus: {
          "感情": "• Avoid holding unrealistic, perfectionist expectations of your partner, preventing splits.\n• Drop pride immediately and make peace, returning to grounded, simple daily love.",
          "事業": "• Pushing aggressive expansion during a market winter invites total venture collapse.\n• Halt risky ventures instantly, pulling back lines to secure baseline survival.",
          "健康": "• Watch for injuries from extreme sports or overreaching physical stunts.\n• Cease overexertion immediately, resting quietly to protect physical safety.",
          "財運": "• Chasing market tops with heavy leverage leads to catastrophic liquidation.\n• Cut losses decisively to protect surviving capital; avoid desperate gambling.",
          "人際": "• Arrogance and over-stepping alienate you completely, leaving you isolated.\n• Humble yourself and apologize sincerely, rebuilding reputation from the ground up."
        }
      }
    },
    jiji: {
      1: {
        name: "Emerging",
        text: "Dragging the wheel-brakes to stop motion, the fox gets its tail wet while crossing—completely free of blame. At the threshold of complete success, maintain high caution, slowing your pace to prevent late-stage accidents. Cautious braking ensures a safe and polished finish.",
        guide: "Brake the wheels and cross with care; cautious slowing secures a blameless finish.",
        focus: {
          "感情": "• Maintain calm stability as romance reaches commitment; avoid rushing milestones.\n• Care for newly established bonds with delicate attention, ensuring smooth progress."
        }
      },
      2: {
        name: "Rooting",
        text: "A woman loses the carriage curtain, but there is no need to chase it anxiously; it will return on its own in seven days. Amid completed success, minor unexpected losses may occur; do not panic or overreact. Trust natural cycles and hold your center; stability restores itself.",
        guide: "Lose the carriage curtain and do not chase; calm trust allows it to return naturally.",
        focus: {
          "事業": "• Minor hiccups appear as projects close; stay calm and handle them steadily.\n• Avoid reactive overhauls over small snags, trusting established systems."
        }
      },
      3: {
        name: "Testing",
        text: "King Wu of Zhou campaigns against the hostile forces of the Gui, taking three years to secure complete victory—appoint the worthy and avoid small minds. Guarding completed success requires enduring resilience and strict vetting of character.",
        guide: "Campaign for three years to secure victory; appoint the worthy and guard against small minds.",
        focus: {
          "財運": "• Long-term investments require patient holding through cycles to secure full yields.\n• Vet business partners strictly, keeping unprincipled individuals away from money."
        }
      },
      4: {
        name: "Choosing",
        text: "Fine garments turn into frayed rags, requiring all-day watchfulness and戒備. At the height of prosperity, anticipate hidden decay and wear-and-tear, reinforcing defenses before minor faults become crises.",
        guide: "Fine garments fray into rags; maintain all-day vigilance to patch wear and tear.",
        focus: {
          "健康": "• Watch for signs of wear and tear in joints, teeth, or chronic fatigue.\n• Schedule preventive maintenance for your body, addressing minor issues early."
        }
      },
      5: {
        name: "Manifesting",
        text: "The neighbor to the east sacrificing an ox in lavish display is not as blessed as the neighbor to the west offering a simple, unadorned spring sacrifice (Yue)—true substance receives real blessings. Honor completion with heartfelt simplicity over flashy show.",
        guide: "Simple spring sacrifices outshine lavish ox feasts; true sincerity receives blessings.",
        focus: {
          "人際": "• Celebrate success with sincere, unpretentious gratitude rather than flashy banquets.\n• Win deep, lasting respect through authentic humility and grounded character."
        }
      },
      6: {
        name: "Completing",
        text: "Wading across the river and getting the head soaked—extreme danger if prolonged. Sinking into self-indulgence and arrogance at completion invites sudden failure. Wake up immediately, practicing humility and safe exit strategies.",
        guide: "Wading across and getting the head soaked carries peril; avoid prolonged indulgence and exit safely.",
        focus: {
          "其他/不確定": "【After Completion】 Success brings danger if prolonged; stay vigilant, humble, and ready for the next turn."
        }
      }
    },
    weiji: {
      1: {
        name: "Emerging",
        text: "The young fox wets its tail while crossing the river—a touch of awkwardness at the start. Stepping into a brand-new cycle brings initial stumbles or minor missteps; do not be discouraged. Learn from experience, pace yourself, and build momentum steadily.",
        guide: "The young fox wets its tail at the start; initial stumbles lead to steady growth.",
        focus: {
          "感情": "• New romantic chapters begin with clumsy moments; laugh it off and enjoy the start.\n• Build mutual understanding patiently, allowing the relationship time to blossom."
        }
      },
      2: {
        name: "Rooting",
        text: "Dragging the wheel-brakes to hold firm, maintaining the balanced center brings good fortune. In exploring uncharted territory, exercise strong self-discipline and cautious brakes, keeping your advance safe and steady.",
        guide: "Brake the wheels with balanced discipline; steady self-control brings good fortune.",
        focus: {
          "事業": "• Explore new markets with cautious brakes, avoiding reckless over-expansion.\n• Keep operational liquidity secure, laying down sturdy building blocks for growth."
        }
      },
      3: {
        name: "Testing",
        text: "Before completion is achieved, advancing rashly brings danger, yet favorable for crossing great rivers with proper preparation and allies. Facing transitional bottlenecks, do not rush blindly; seek strategic backing and cross the threshold with care.",
        guide: "Before completion, rash advance brings danger, but prepared crossing brings success.",
        focus: {
          "財運": "• Major strategic investments require robust funding and careful timing to cross safely.\n• Secure strategic partnerships before launching into unchartered commercial ventures."
        }
      },
      4: {
        name: "Choosing",
        text: "Holding fast to truth brings good fortune and dissolves regret, using resolute force to conquer hostile challenges like the Gui tribe, winning rewards after three years of struggle. Overcoming major transitional barriers requires unyielding grit and long-term perseverance.",
        guide: "Hold to truth and persevere through trials; conquering challenges brings rich rewards.",
        focus: {
          "事業": "• Conquer complex technical or market barriers through long-term resilience and grit.\n• Win historic milestones and industry recognition after years of pioneering work."
        }
      },
      5: {
        name: "Manifesting",
        text: "Holding to truth brings good fortune and freedom from regret, shining with the noble light of a wise leader. Your clear vision and radiant integrity illuminate the path forward, drawing universal devotion and success into a new era.",
        guide: "Shine with the radiant light of truth; noble leadership brings universal good fortune.",
        focus: {
          "人際": "• Stand as an inspiring, luminous pioneer, guiding others into the future with wisdom.\n• Radiate authentic integrity, drawing exceptional talent to join your mission."
        }
      },
      6: {
        name: "Completing",
        text: "Celebrating success with authentic trust and joyful drinking—free of blame; yet if one overindulges and gets the head soaked in wine, trust and truth are lost. Celebrate milestones with mindful moderation, staying clear-headed to prepare for the next infinite cycle.",
        guide: "Celebrate milestones with mindful moderation; stay clear-headed to embrace new cycles.",
        focus: {
          "其他/不確定": "【Before Completion】 Celebrate achievements with mindful moderation; keep a clear head as life's infinite journey renews itself."
        }
      }
    }
  };

  // 注意：64卦全數到齊；但 lv、xun、dui、huan 這4卦的爻辭focus欄位仍是空物件佔位，需要補實際內容
  // 補完後請合併進 window.HEXAGRAMS_EN / window.LINES_EN

  if (typeof window !== "undefined") {
    window.HEXAGRAMS_EN = HEXAGRAMS_EN;
    window.LINES_EN = LINES_EN;
  }
})();
