export const brand = {
  firmName: 'Pierre Vanguard Law',
  attorneyName: 'Calvin Pierre, Esq.',
  phone: '551-414-2050',
  phoneHref: 'tel:+15514142050',
  textHref: 'sms:+15514142050',
  whatsappHref: 'https://wa.me/15514142050',
  email: 'attorney@pierrevanguardlaw.com',
  address: '3 Gateway Center, Suite 1229 Newark, NJ 07102',
  bar: 'NJ Bar #381512023',
  rating: '4.9/5 (150+ Reviews)',
  consultation: 'Free Consultation',
  languages: ['English', 'Haitian Creole', 'Spanish', 'French'],
  colors: {
    navy: '#001F54',
    navyAlt: '#082658',
    blue: '#001F54',
    gold: '#C9AB69',
    bronze: '#B68C5A',
    paper: '#F9F7F3',
  },
};

export const assets = {
  logo: '/assets/legacy/Pierre_Vanguard_Law_PC_Logo_4-removebg-preview-e1769976318198.png',
  logoMain: '/assets/legacy/main logo.webp',
  logoFooter: '/assets/legacy/logo footer 1.webp',
  logoFooterStacked: '/assets/legacy/logo footer two.webp',
  logoSquare: '/assets/legacy/Pierre_Vanguard_Law_PC_Logo_4-1024x1024.jpg',
  attorneyLogo: '/assets/legacy/CALVIN-PIERRE-ESQ-12.webp',
  portrait: '/assets/legacy/539253779_17844571212558853_2228919632589370962_n.jpg',
  hero: '/assets/legacy/New-Banner-for-Website-2048x1365.png',
  slide2: '/assets/legacy/slide-2-image.webp',
  slide3: '/assets/legacy/slide-3-image.webp',
  about: '/assets/legacy/EMMYLIA-15.png',
  office: '/assets/legacy/aa.jpg',
  team: '/assets/legacy/33.jpg',
  desk: '/assets/legacy/EMMYLIA-15.png',
  asylum: '/assets/legacy/file-20181108-74787-4pc1fq-1024x654.jpg',
  appeals: '/assets/legacy/Screenshot-2025-08-26-at-11.23.32-AM-1024x673.png',
  bond: '/assets/legacy/Screenshot-2025-08-25-at-9.43.07-PM-1024x639.png',
  citizenship: '/assets/legacy/tt-1024x683.jpg',
  visas: '/assets/legacy/3d8521f84a2efaec55ad4b9970a461d3-1024x640.jpg',
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/practice-areas/', hasDropdown: true },
  { label: 'Emergency Services', href: '/emergency-services/', hasDropdown: true },
  { label: 'Testimonial', href: '/testimonials/' },
  { label: 'Book Now', href: '/book-now/' },
  { label: 'Contact Us', href: '/contact/' },
  { label: 'News', href: '/news/' },
  { label: 'About Us', href: '/about/' },
];

export const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '250+', label: 'Satisfied Clients' },
  { value: '153+', label: 'Service Categories' },
];

export const services = [
  {
    title: 'Asylum',
    slug: 'asylum',
    image: assets.asylum,
    summary: 'Protection-focused representation for people seeking safety, stability, and legal protection in the United States.',
    detail: {
      headline: 'Asylum – Protection For Those In Danger',
      intro:
        "Thousands of people come to the United States every year seeking protection from persecution. Asylum is designed to give safety to those who fear harm because of their race, religion, nationality, political opinion, or membership in a particular social group. For many, applying for asylum is not just a legal matter—it's a matter of survival.",
      subhead: 'What Should I Do If I Need Asylum?',
      points: [
        {
          lead: 'Act Quickly',
          body: 'You generally have one year from your arrival in the U.S. to apply for asylum. Waiting too long can hurt your chances.',
        },
        {
          lead: 'Gather Evidence',
          body: 'Documentation of past threats, medical records, or country reports can make your case stronger.',
        },
        {
          lead: 'Tell Your Story Clearly',
          body: 'Your personal statement is critical. The way you explain your fear and past persecution will be carefully reviewed.',
        },
        {
          lead: 'Work with a Lawyer',
          body: 'Having an experienced attorney by your side greatly improves your chances of success.',
        },
      ],
      closing:
        'The asylum process includes interviews, court hearings, and strict documentation requirements. Our firm helps clients prepare every step of the way—ensuring that their application is complete, their evidence is persuasive, and their voice is heard.',
    },
  },
  {
    title: 'Appeals',
    slug: 'appeals',
    image: assets.appeals,
    summary: 'Strategic immigration appeals and case reviews after difficult decisions, denials, or removal orders.',
    detail: {
      headline: 'Appeals – Fighting for a Second Chance',
      intro:
        'An immigration denial can feel devastating, but it does not always mean the end. Many cases can be challenged through appeals or motions to reopen. Appeals require precise legal arguments and a clear understanding of complex immigration procedures. Without strong representation, many people miss their chance at a better outcome.',
      subhead: 'What Should I Do If My Immigration Case Was Denied?',
      points: [
        {
          lead: 'Read the Denial Carefully',
          body: 'Understanding why your case was denied is the first step in deciding the next move.',
        },
        {
          lead: 'Know Your Deadlines',
          body: 'Appeals must be filed quickly, often within 30 days of receiving the denial notice.',
        },
        {
          lead: 'Gather Additional Evidence',
          body: 'New documentation or testimony can significantly strengthen an appeal.',
        },
        {
          lead: 'Hire an Experienced Lawyer',
          body: 'Appeals are complicated, and professional legal guidance is essential for the best outcome.',
        },
      ],
      closing:
        'The firm carefully reviews each denial and identifies the best path forward. Attorneys prepare strong appeals and represent clients before the Board of Immigration Appeals or in federal court when necessary, because everyone deserves a fair chance.',
    },
  },
  {
    title: 'Bond Hearings',
    slug: 'bond-hearings',
    image: assets.bond,
    summary: 'Urgent support for detained immigrants and families seeking release options and hearing preparation.',
    detail: {
      headline: 'Bond Hearings – Securing Freedom for the Detained',
      intro:
        'When someone is detained by immigration authorities, it can be one of the most stressful experiences for both the individual and their family. In many cases, you can request a bond hearing—a chance to be released from custody while your immigration case is ongoing. A judge will review whether the detainee poses a danger to the community or is likely to flee before deciding on release and setting the bond amount.',
      subhead: 'What Should I Do If My Loved One Is Detained?',
      points: [
        {
          lead: 'Request a Bond Hearing Immediately',
          body: 'The sooner a request is made, the faster the case can be reviewed.',
        },
        {
          lead: 'Collect Evidence of Good Standing',
          body: 'Proof of employment, community ties, or family support can show the judge you deserve release.',
        },
        {
          lead: 'Hire an Attorney to Represent You',
          body: 'The government will argue against release. Having a skilled lawyer makes a big difference.',
        },
        {
          lead: 'Plan for the Case Ahead',
          body: "Winning a bond hearing doesn't end the immigration process. You'll still need strong legal defense moving forward.",
        },
      ],
      closing:
        'We fight hard for our detained clients, presenting strong arguments and evidence to secure their release. Being reunited with your family during this process makes preparing your defense easier—and gives you peace of mind.',
    },
  },
  {
    title: 'Citizenship',
    slug: 'citizenship',
    image: assets.citizenship,
    summary: 'Guidance through naturalization, eligibility review, filings, and interview preparation.',
    detail: {
      headline: 'Citizenship – Achieving the American Dream',
      intro:
        'For many immigrants, becoming a U.S. citizen is the ultimate goal. Citizenship brings important benefits: the right to vote, stronger protections, and the ability to petition for family members. But the naturalization process is not always easy. Applications can be denied for reasons ranging from paperwork mistakes to past criminal issues.',
      subhead: 'What Should I Do If I Want to Apply for Citizenship?',
      points: [
        {
          lead: 'Confirm Eligibility',
          body: 'Make sure you meet residency requirements and have maintained good moral character.',
        },
        {
          lead: 'File the N-400 Application',
          body: 'This is the main form required for naturalization. Accuracy is essential.',
        },
        {
          lead: 'Study for the Civics Exam',
          body: 'While the test is straightforward, preparation builds confidence.',
        },
        {
          lead: 'Be Honest About Your History',
          body: 'Failing to disclose past issues can cause delays or even denials.',
        },
      ],
      closing:
        'Our firm helps clients navigate every part of the naturalization process. From preparing your application to practicing for your interview, we make sure nothing is overlooked. Citizenship is a life-changing achievement, and we are honored to help clients take this final step in their immigration journey.',
    },
  },
  {
    title: 'Deportation Defense & Removal Proceedings',
    slug: 'deportation-defense-removal-proceedings',
    image: assets.hero,
    summary: 'Court-focused defense for clients facing removal proceedings, ICE pressure, and urgent deadlines.',
    detail: {
      headline: 'Deportation Defense – Protect Your Family, Stay in America',
      intro:
        'Facing deportation is frightening, but you have rights and real legal options to fight removal. The firm has successfully defended families in immigration court, stopping deportations through a range of relief mechanisms. With 24-hour response capabilities, attorneys provide aggressive courtroom advocacy for anyone threatened with removal from the United States.',
      subhead: 'What Should I Do If I Receive a Notice to Appear?',
      points: [
        {
          lead: 'Seek Legal Help Immediately',
          body: 'Contact an immigration attorney within 24–48 hours of receiving removal documents to preserve your rights.',
        },
        {
          lead: 'Gather Documentation Quickly',
          body: 'Collect proof of U.S. residence, family relationships, employment, and community ties to support relief.',
        },
        {
          lead: 'Attend Every Court Hearing',
          body: 'Missing even one scheduled hearing results in an automatic deportation order — your presence is required.',
        },
        {
          lead: 'Evaluate Relief Options',
          body: 'Determine eligibility for cancellation of removal, asylum, adjustment of status, or other defenses.',
        },
        {
          lead: 'Build Your Defense Strategy',
          body: 'Work with counsel to develop a strong evidence packet and legal arguments tailored to the case.',
        },
      ],
      closing:
        'The firm provides step-by-step representation from initial consultation through appeals, handling master calendar hearings, individual trials, and post-decision matters. Flexible payment plans accommodate financial hardship — case outcomes depend on quality legal representation, not financial resources alone.',
    },
  },
  {
    title: 'Green Card / Permanent Residence',
    slug: 'green-card-permanent-residence',
    image: assets.about,
    summary: 'Family, humanitarian, and adjustment pathways for permanent residence.',
    detail: {
      headline: 'Green Card – Your Foundation for Building a Life in America',
      intro:
        'A green card provides lawful permanent residence, letting you work anywhere, live permanently, travel freely, and eventually pursue citizenship. The firm guides clients through every green card pathway with both legal expertise and personal understanding. Multiple routes exist — family-based, employment-based, humanitarian, and special categories — each with different timelines and requirements.',
      subhead: 'What Should I Know About Getting a Green Card?',
      points: [
        {
          lead: 'Identify Your Pathway',
          body: 'Determine which green card categories you qualify for — family sponsorship, employment, asylum adjustment, or specialized programs.',
        },
        {
          lead: 'Gather Strategic Evidence',
          body: 'Build a persuasive case with the right documents, including alternative evidence when traditional records are missing.',
        },
        {
          lead: 'Navigate Common Obstacles',
          body: 'Overcome complications like unlawful presence, financial requirements, relationship authenticity concerns, and past violations.',
        },
        {
          lead: 'Prepare Thoroughly',
          body: 'Extensive interview coaching and proactive RFE response strategies maximize approval chances.',
        },
        {
          lead: 'Achieve Permanent Status',
          body: 'From filing through green card receipt, every step is managed — including the eventual path to citizenship.',
        },
      ],
      closing:
        'The firm develops customized strategies rather than one-size-fits-all approaches. With flat-fee pricing, transparent communication, and rapid response via WhatsApp, clients move steadily toward permanent residence and the American dream their families deserve.',
    },
  },
  {
    title: 'Habeas Corpus',
    slug: 'habeas-corpus',
    image: assets.logoSquare,
    summary: 'Federal action options for unlawful or prolonged immigration detention.',
    detail: {
      headline: 'Habeas Corpus – Constitutional Relief From Unlawful Detention',
      intro:
        'Habeas corpus is a constitutional remedy that challenges illegal ICE detention directly in federal court, demanding either release or legal justification. When immigration bonds are denied, set impossibly high, or detainees face indefinite holding without proper hearings, this federal litigation strategy can secure immediate freedom. The firm has filed habeas petitions across the country to bring families home from detention.',
      subhead: 'What Happens When ICE Holds a Loved One Indefinitely?',
      points: [
        {
          lead: 'Emergency Assessment',
          body: 'Within 24 hours, evaluate detention legality, review facility records, and decide whether habeas corpus is the right strategy.',
        },
        {
          lead: 'Evidence Gathering',
          body: 'Compile community ties, employment records, family affidavits, and medical documentation to support release.',
        },
        {
          lead: 'Federal Court Petition',
          body: 'Draft comprehensive habeas filings citing constitutional violations and controlling Supreme Court precedent.',
        },
        {
          lead: 'Aggressive Litigation',
          body: 'Argue cases before federal judges, challenge government responses, and present compelling evidence for release.',
        },
        {
          lead: 'Release Coordination',
          body: 'On a successful petition, coordinate with detention facilities for prompt release and post-release guidance.',
        },
      ],
      closing:
        'The firm fights prolonged detention, excessive bonds, and due process violations by moving cases directly into federal court rather than staying in immigration proceedings. Every day matters — the team works around the clock to reunite families through constitutional litigation.',
    },
  },
  {
    title: 'Temporary Protected Status',
    slug: 'temporary-protected-status',
    image: assets.hero,
    summary: 'TPS eligibility, filings, renewals, and work authorization support.',
    detail: {
      headline: 'Temporary Protected Status – Legal Protection & Work Authorization',
      intro:
        'Temporary Protected Status (TPS) shields qualifying individuals from deportation while providing work authorization. The firm handles TPS applications, renewals, and complex cases involving missed deadlines or prior immigration history. With experience serving clients from Haiti, Venezuela, Honduras, Nicaragua, and other designated nations, the team has secured protection for hundreds of people seeking safety and work rights in America.',
      subhead: 'What Steps Should I Take to Secure TPS Protection?',
      points: [
        {
          lead: 'Verify Your Eligibility',
          body: 'Confirm your country is TPS-designated, your arrival date qualifies, and identify anything that could affect approval.',
        },
        {
          lead: 'Gather Documentation',
          body: 'Collect identity, nationality, and residence proof — using alternative evidence like utility bills or employer letters when needed.',
        },
        {
          lead: 'File Forms I-821 & I-765',
          body: 'Submit the TPS application and work authorization request before the registration window closes.',
        },
        {
          lead: 'Attend Biometrics & Processing',
          body: 'Prepare for fingerprinting and monitor the case through USCIS, responding immediately to any requests.',
        },
        {
          lead: 'Renew On Time',
          body: 'Track redesignation announcements to ensure timely re-registration and uninterrupted work authorization.',
        },
      ],
      closing:
        'The firm provides transparent, flat-fee representation with flexible payment plans and a strong track record of approvals. Deadline compliance and proactive communication mean clients never miss a critical window for protection or renewal.',
    },
  },
  {
    title: 'Visas',
    slug: 'visas',
    image: assets.visas,
    summary: 'Legal support for visa strategy, documentation, and application preparation.',
    detail: {
      headline: 'Visas – Navigate Your Immigration Journey With Expert Guidance',
      intro:
        'The visa application process involves strict requirements, detailed documentation, and tight deadlines that can overwhelm applicants. The firm provides professional guidance to help individuals, families, and businesses navigate visa pathways tailored to their unique circumstances. Whether you are applying initially, extending your stay, or pursuing long-term residency, personalized support streamlines the process and reduces costly delays.',
      subhead: 'How Can Professional Legal Help Simplify Your Visa Application?',
      points: [
        {
          lead: 'Understand Your Options',
          body: 'Get clear advice on the best visa pathway based on your specific goals and situation.',
        },
        {
          lead: 'Prepare Documentation',
          body: 'Ensure all required paperwork is accurate, complete, and submitted on time.',
        },
        {
          lead: 'Review & Verify',
          body: 'Have an attorney examine every application before submission to catch errors and weaknesses.',
        },
        {
          lead: 'Interview Support',
          body: 'Receive coaching for visa interviews and guidance on handling follow-up requests.',
        },
        {
          lead: 'Reduce Uncertainty',
          body: 'Work with an advocate who explains each stage so you always know what to expect.',
        },
      ],
      closing:
        'The firm combines deep knowledge of immigration regulations with practical experience handling complex applications. By partnering with experienced counsel, you can focus on your future plans while the legal team manages procedural complexity and improves your chances of approval.',
    },
  },
  {
    title: 'Work Visas & Employment Authorization',
    slug: 'work-visas-employment-authorization',
    image: assets.visas,
    summary: 'Employment-based immigration and work permit guidance for workers and employers.',
    detail: {
      headline: 'Work Visas – Build Your Career Without Fear',
      intro:
        'Secure legal employment authorization across all major visa categories — H-1B, L-1, O-1, TN, and EAD. The firm helps professionals and employers navigate complex work authorization pathways with transparent guidance and strategic career planning. Whether you are a foreign professional seeking your first U.S. role or an employer hiring international talent, the team handles the complexity so you can focus on the work itself.',
      subhead: 'What Should I Know About Working Legally in the U.S.?',
      points: [
        {
          lead: 'Identify Your Pathway',
          body: 'Match your education, experience, and employer relationship to the optimal visa category and timeline.',
        },
        {
          lead: 'Build Your Case',
          body: 'Gather comprehensive evidence — credentials, job documentation, industry surveys — to convince USCIS of eligibility.',
        },
        {
          lead: 'File Strategically',
          body: 'Use premium processing where helpful, handle RFE responses, and monitor case status continuously.',
        },
        {
          lead: 'Prepare for Interviews',
          body: 'Walk into consulate meetings or border processing with full document checklists and strategic guidance.',
        },
        {
          lead: 'Plan Your Green Card Path',
          body: 'Treat work visas as stepping stones with a long-term strategy toward permanent residence.',
        },
      ],
      closing:
        'The firm does more than file forms — it builds strategic career plans that protect livelihoods and open doors to permanent residence. Whether navigating lottery systems, proving specialty occupations, or demonstrating extraordinary ability, the team finds the path that fits your unique situation.',
    },
  },
];

export const emergencyServices = [
  {
    title: 'ICE Detention Help',
    slug: 'ice-detention-help',
    summary: 'Immediate action for families dealing with detention, transfer, or urgent hearings.',
  },
  {
    title: 'Deportation Order',
    slug: 'deportation-order',
    summary: 'Urgent review of removal orders, appeal windows, stays, and reopen options.',
  },
  {
    title: 'ICE Raid Rights',
    slug: 'ice-raid-rights',
    summary: 'Practical legal guidance before and after workplace, home, or community enforcement.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Personalized Approach',
    text: "Every client's story is unique, and so are their legal needs. We take the time to understand your background, your goals, and the challenges you are facing. This allows us to create a personalized legal strategy that is tailored specifically to you, rather than a one-size-fits-all solution.",
  },
  {
    number: '02',
    title: 'Proven Experience',
    text: 'With years of practice in immigration law, we have successfully represented individuals, families, and businesses across the United States. Our deep knowledge of the legal system, combined with hands-on experience in complex cases, allows us to anticipate challenges and find practical solutions.',
  },
  {
    number: '03',
    title: 'Nationwide Representation',
    text: 'No matter where you live, we can represent you. Immigration law is federal, which means we are able to serve clients in all 50 states. Whether you need help with asylum, family petitions, citizenship, or appeals, our firm has the ability to assist you wherever you are.',
  },
];

export const testimonials = [
  {
    title: 'Exceptional service, highly recommended!',
    text: 'From the first consultation, Calvin Pierre made me feel at ease. He understood the difficulties of my situation and worked tirelessly to resolve my legal matters in the best way possible.',
    stars: 5,
  },
  {
    title: 'Trustworthy, efficient, and highly professional!',
    text: 'The team provided exceptional legal support, guiding me through a complex case with professionalism, clarity, and outstanding results.',
    stars: 4,
  },
  {
    title: 'Above and beyond — got me out on parole!',
    text: 'Calvin Pierre goes above and beyond. I was detained for two months before I hired Calvin Pierre. He got me out on Parole! Thank you Calvin Pierre!',
    stars: 5,
  },
];

export const faqs = [
  {
    question: 'What types of immigration cases do you handle?',
    answer:
      'We handle a wide range of cases, including asylum, family petitions, adjustment of status, bond hearings, citizenship, appeals, and more.',
  },
  {
    question: 'Do you represent clients outside of your state?',
    answer:
      'Yes. Because immigration law is federal, we can represent clients in all 50 states, no matter where you live.',
  },
  {
    question: 'How do I schedule a consultation?',
    answer:
      'You can book a consultation directly through our website or call our office. We’ll review your case and discuss the best path forward.',
  },
  {
    question: 'Do you offer services in other languages?',
    answer:
      'Yes. In addition to English, we offer services in Haitian Creole, Spanish, and French to better serve our diverse clients.',
  },
];

export const campaignPages = [
  {
    title: 'Emergency Immigration Lawyer',
    slug: 'emergency-immigration-lawyer',
    service: 'Detention, deportation, and urgent immigration defense',
  },
  {
    title: 'Asylum Lawyer Consultation',
    slug: 'asylum-lawyer-consultation',
    service: 'Asylum case review and filing strategy',
  },
  {
    title: 'Bond Hearing Lawyer',
    slug: 'bond-hearing-lawyer',
    service: 'Detention release strategy and hearing preparation',
  },
];
