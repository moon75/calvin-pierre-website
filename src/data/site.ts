export const brand = {
  firmName: 'Pierre Vanguard Law',
  attorneyName: 'Calvin Pierre, Esq.',
  phone: '(551) 414-1069',
  phoneHref: 'tel:+15514141069',
  textHref: 'sms:+15514141069',
  whatsappHref: 'https://wa.me/15514141069',
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
  },
  {
    title: 'Appeals',
    slug: 'appeals',
    image: assets.appeals,
    summary: 'Strategic immigration appeals and case reviews after difficult decisions, denials, or removal orders.',
  },
  {
    title: 'Bond Hearings',
    slug: 'bond-hearings',
    image: assets.bond,
    summary: 'Urgent support for detained immigrants and families seeking release options and hearing preparation.',
  },
  {
    title: 'Citizenship',
    slug: 'citizenship',
    image: assets.citizenship,
    summary: 'Guidance through naturalization, eligibility review, filings, and interview preparation.',
  },
  {
    title: 'Deportation Defense & Removal Proceedings',
    slug: 'deportation-defense-removal-proceedings',
    image: assets.hero,
    summary: 'Court-focused defense for clients facing removal proceedings, ICE pressure, and urgent deadlines.',
  },
  {
    title: 'Green Card / Permanent Residence',
    slug: 'green-card-permanent-residence',
    image: assets.about,
    summary: 'Family, humanitarian, and adjustment pathways for permanent residence.',
  },
  {
    title: 'Habeas Corpus',
    slug: 'habeas-corpus',
    image: assets.logoSquare,
    summary: 'Federal action options for unlawful or prolonged immigration detention.',
  },
  {
    title: 'Temporary Protected Status',
    slug: 'temporary-protected-status',
    image: assets.hero,
    summary: 'TPS eligibility, filings, renewals, and work authorization support.',
  },
  {
    title: 'Visas',
    slug: 'visas',
    image: assets.visas,
    summary: 'Legal support for visa strategy, documentation, and application preparation.',
  },
  {
    title: 'Work Visas & Employment Authorization',
    slug: 'work-visas-employment-authorization',
    image: assets.visas,
    summary: 'Employment-based immigration and work permit guidance for workers and employers.',
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
    name: 'V. Cimih',
    text: 'Calvin Pierre was extremely helpful. He helped us with our asylum. Five stars.',
  },
  {
    name: 'I. Mohammed',
    text: 'Calvin Pierre goes above and beyond. I was detained for two months before I hired him. He got me out on parole.',
  },
  {
    name: 'A. Demir',
    text: 'From the first consultation, Calvin Pierre made me feel at ease and worked tirelessly to resolve my legal matters.',
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
