export type Beat = {
  slug: string;
  name: string;
  tagline: string;
};

export const beats: Beat[] = [
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Runways, red carpets, and what we choose to wear it for.",
  },
  {
    slug: "health-beauty",
    name: "Health & Beauty",
    tagline: "The science and self-mythology of looking after yourself.",
  },
  {
    slug: "art-culture",
    name: "Art & Culture",
    tagline: "Exhibitions, festivals, and the ideas moving through them.",
  },
  {
    slug: "food-travel",
    name: "Food & Travel",
    tagline: "Where to eat, where to go, and why it matters.",
  },
];

export type Article = {
  title: string;
  publication: string;
  url: string;
  beat: string; // matches Beat.slug
  excerpt: string;
  date?: string;
  image?: string;
};

export const articles: Article[] = [
  // Fashion
  {
    title: "Why We Steal Our Boyfriend's Clothes",
    publication: "ELLE",
    url: "https://elle.in/why-we-steal-our-boyfriends-clothes/",
    beat: "fashion",
    excerpt:
      "An investigation into the oversized shirt as borrowed intimacy, comfort, and quiet rebellion.",
    image:
      "https://img-cdn.publive.online/fit-in/1200x675/elle-india/media/post_attachments/wp-content/uploads/2024/07/Untitled-design-21.png",
  },
  {
    title:
      "These Indians Pulled Out All The Stops To Wear Their Heritage On Their Sleeve At The 2025 Met Gala",
    publication: "Harper's Bazaar",
    url: "https://www.harpersbazaar.in/fashion/story/these-indians-pulled-out-all-the-stops-to-wear-their-heritage-on-their-sleeve-at-the-2025-met-gala-1209426-2025-05-06",
    beat: "fashion",
    excerpt:
      "Tracking the Indian contingent at the 2025 Met Gala and how heritage tailoring made its case on fashion's biggest stage.",
    date: "May 2025",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202505/681a0b2062622-indian-heritage-met-2025-061403299-16x9.jpg",
  },
  {
    title: "8 Fashion Experts On What Working In The Fashion Industry Is Really Like",
    publication: "Cosmopolitan",
    url: "https://www.cosmopolitan.in/fashion/features/story/8-fashion-experts-on-what-working-in-the-fashion-industry-is-really-like-1138525-2024-12-16",
    beat: "fashion",
    excerpt:
      "Eight insiders on the gap between the glamour and the grind — and why they stay anyway.",
    date: "Dec 2024",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/cosm/images/story/202412/67602c3cf0546-emily-paris-163343215-16x9.jpg",
  },
  // Health & Beauty
  {
    title: "#BodyTalkWithCosmo: Training Based On Your Menstrual Cycle Is The Future Of Fitness, Period",
    publication: "Cosmopolitan",
    url: "https://www.cosmopolitan.in/life/advice/story/bodytalkwithcosmo-training-based-on-your-menstrual-cycle-is-the-future-of-fitness-period-1223543-2025-06-04",
    beat: "health-beauty",
    excerpt:
      "Cycle syncing, explained without the pseudoscience — what training with your hormones actually looks like.",
    date: "Jun 2025",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/cosm/images/story/202506/683fe99641deb-women-in-yoga-pose-04370594-16x9.jpg",
  },
  {
    title: "A Nutritionist's Wellness Tips Worth Actually Following",
    publication: "Be Beautiful",
    url: "https://www.bebeautiful.in/wellbeing/nutrition/nutritionist-wellness-tips",
    beat: "health-beauty",
    excerpt:
      "Cutting through wellness noise with the advice a practicing nutritionist actually gives their clients.",
  },
  {
    title: "#BodyTalkWithCosmo: Why Gaining Or Losing Three Kilos A Month Is Totally Normal",
    publication: "Cosmopolitan",
    url: "https://www.cosmopolitan.in/life/story/bodytalkwithcosmo-why-gaining-or-losing-three-kilos-a-month-is-totally-normal-1223497-2025-06-04",
    beat: "health-beauty",
    excerpt:
      "A case for weight fluctuation as biology, not failure — and why the scale lies more than you think.",
    date: "Jun 2025",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/cosm/images/story/202506/683fe4e6b404d-women-on-weightscale-041705642-16x9.jpg",
  },
  // Art & Culture
  {
    title: "Tribeca Film Festival: The 2026 Winners",
    publication: "CULTURED",
    url: "https://www.culturedmag.com/article/2026/06/12/film-tribeca-film-festival-winners-2026/",
    beat: "art-culture",
    excerpt: "Dispatches from this year's Tribeca winners circle, and the films worth chasing down.",
    date: "Jun 2026",
    image:
      "https://culturedmag.nyc3.digitaloceanspaces.com/uploads/2026/06/12160210/Ben-Kronengold-Rebecca-Shaw-1-e1781294559781.jpg",
  },
  {
    title: "Performa Turns 20: A Variety Show",
    publication: "CULTURED",
    url: "https://www.culturedmag.com/article/2026/06/12/parties-performa-20-years-a-variety-show/",
    beat: "art-culture",
    excerpt: "Two decades of the performance biennial, marked in one suitably theatrical night.",
    date: "Jun 2026",
    image:
      "https://culturedmag.nyc3.digitaloceanspaces.com/uploads/2026/06/11152022/20260610_Performa_LiveOnBroadway_Highlights_ElyseMertz-24-scaled-e1781205658577.jpg",
  },
  {
    title: "Cultural Credit Is Now Commercial Strategy — Is Your Brand Ready?",
    publication: "Kulfi Collective",
    url: "https://blog.kulficollective.com/cultural-credit-is-now-commercial-strategy-is-your-brand-ready/",
    beat: "art-culture",
    excerpt:
      "On brands borrowing cultural capital, and the difference between participation and extraction.",
    image: "https://blog.kulficollective.com/content/images/2025/08/f1-1.png",
  },
  // Food & Travel
  {
    title: "In Defense Of Slow, Dramatic Cooking (No, I Don't Want Your 10-Minute Pasta)",
    publication: "Harper's Bazaar",
    url: "https://www.harpersbazaar.in/travel-food/story/no-i-dont-want-your-10-minute-pasta-in-defense-of-slow-dramatic-cooking-1237590-2025-07-03",
    beat: "food-travel",
    excerpt:
      "A rebuttal to convenience-cooking culture, and a case for letting dinner take all evening.",
    date: "Jul 2025",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202507/686390e3db873-indias-vibrant-dining-rooms-014014803-16x9.png",
  },
  {
    title: "This Gurgaon Restaurant Brings A Slice Of Bangkok Right To Your Doorstep",
    publication: "Harper's Bazaar",
    url: "https://www.harpersbazaar.in/travel-food/story/this-gurgaon-restaurant-brings-a-slice-of-bangkok-right-to-your-doorstep-1159929-2025-01-24",
    beat: "food-travel",
    excerpt: "A review of the Bangkok import reshaping Gurgaon's idea of a night out.",
    date: "Jan 2025",
    image:
      "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202501/679371007b30e-food-245243616-16x9.jpg",
  },
  {
    title: "Here's Why Singapore Is Becoming A Skate Paradise",
    publication: "Travel+Leisure",
    url: "https://www.travelandleisureasia.com/in/trips/heres-why-singapore-is-becoming-a-skate-paradise/",
    beat: "food-travel",
    excerpt: "Inside the skate parks and subculture turning Singapore into an unlikely destination.",
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/06/24123313/GettyImages-855284264-1-1600x900.jpg",
  },
];

export type Publication = {
  name: string;
  url: string;
  /** Tailwind classes for the typographic fallback wordmark. */
  logotype: string;
  /** Path to the outlet's real logo file in /public, when available. */
  logo?: string;
  /** Rendered logo height relative to the others, since source files vary in proportion. */
  logoHeightClass?: string;
  /** Logo file is white/light — needs a dark chip behind it to stay visible. */
  logoOnDark?: boolean;
};

export const publications: Publication[] = [
  {
    name: "Harper's Bazaar",
    url: "https://www.harpersbazaar.in/authors/mokshaa-shivlani",
    logotype: "font-display text-xl font-bold uppercase tracking-tight not-italic",
    logo: "/logos/harpers-bazaar.svg",
    logoHeightClass: "h-6",
  },
  {
    name: "ELLE",
    url: "https://elle.in/author/mokshaa-shivlani",
    logotype: "font-sans text-lg font-light uppercase tracking-[0.3em]",
  },
  {
    name: "Cosmopolitan",
    url: "https://www.cosmopolitan.in/authors/mokshaa-shivlani",
    logotype: "font-display text-2xl font-black uppercase tracking-tight not-italic",
    logo: "/logos/cosmopolitan.png",
    logoHeightClass: "h-5",
  },
  {
    name: "MensXP",
    url: "https://www.mensxp.com/author/805-mokshaa-shivlani.html",
    logotype: "font-sans text-xl font-extrabold tracking-tight",
  },
  {
    name: "Be Beautiful",
    url: "https://www.bebeautiful.in/authors/mokshaa-shivlani",
    logotype: "font-display text-xl font-medium italic tracking-tight",
  },
  {
    name: "CULTURED",
    url: "https://www.culturedmag.com/@/mokshaa-shivlani/",
    logotype: "font-sans text-lg font-bold uppercase tracking-[0.24em]",
    logo: "/logos/cultured.png",
    logoHeightClass: "h-5",
  },
  {
    name: "Vogue",
    url: "https://youtu.be/yTfiFtOCaq0?is=o73b5vDCsT8iRzIX",
    logotype: "font-display text-3xl font-black uppercase tracking-[-0.02em] not-italic",
    logo: "/logos/vogue.svg",
    logoHeightClass: "h-6",
  },
  {
    name: "Travel+Leisure",
    url: "https://www.travelandleisureasia.com/in/trips/heres-why-singapore-is-becoming-a-skate-paradise/",
    logotype: "font-sans text-lg font-semibold uppercase tracking-widest",
  },
  {
    name: "GQ",
    url: "https://youtu.be/O5mn7kyV-iI?is=f6N2AwDPSsaGxXrB",
    logotype: "font-display text-2xl font-black uppercase tracking-tight not-italic",
    logo: "/logos/gq.svg",
    logoHeightClass: "h-5",
    logoOnDark: true,
  },
  {
    name: "Architectural Digest",
    url: "https://youtu.be/qfD5KRxOfOc?is=zgMwUMnSQtnY56-j",
    logotype: "font-sans text-base font-semibold uppercase tracking-[0.15em]",
    logo: "/logos/architectural-digest.svg",
    logoHeightClass: "h-9",
  },
  {
    name: "Condé Nast Traveller",
    url: "https://youtu.be/zi5e8ox6RIQ?is=Z41AyWk7ZbmU3rov",
    logotype: "font-sans text-base font-semibold uppercase tracking-[0.1em]",
    logo: "/logos/cnt.svg",
    logoHeightClass: "h-6",
    logoOnDark: true,
  },
];

export const substack = {
  name: "Fashionably Lost",
  eyebrow: "From Me To You",
  tagline: "How to experience a city if fashion is the way you understand the world.",
  url: "https://ihaveaclothingproblem.substack.com/",
};

export type SubstackPost = {
  title: string;
  url: string;
  excerpt: string;
  date: string;
};

export const substackPosts: SubstackPost[] = [
  {
    title: "100% Silk Is So Back!!!!",
    url: "https://ihaveaclothingproblem.substack.com/p/100-silk-is-so-back",
    excerpt: "Lately I'm just walking into vintage stores and reading the composition on cute Cavalli tops.",
    date: "Jul 10, 2026",
  },
  {
    title: "The Muse of my Rhyme",
    url: "https://ihaveaclothingproblem.substack.com/p/the-muse-of-my-rhyme",
    excerpt: "A poem I wrote when I was too young.",
    date: "Jul 3, 2026",
  },
  {
    title: "I'm just an NYC girl low-key obsessed with Boston",
    url: "https://ihaveaclothingproblem.substack.com/p/im-just-an-nyc-girl-low-key-obsessed",
    excerpt: "I swear nothing is wrong with me, and please read to see how I make my case.",
    date: "Jun 26, 2026",
  },
  {
    title: "Have you been to Rhode Island yet?",
    url: "https://ihaveaclothingproblem.substack.com/p/have-you-been-to-rhode-island-yet",
    excerpt: "A fashion journalist's guide to travelling for the aesthetic.",
    date: "Jun 16, 2026",
  },
];

export function articlesByBeat(beatSlug: string): Article[] {
  return articles.filter((a) => a.beat === beatSlug);
}

const beatColors: Record<string, { text: string; bg: string; ring: string }> = {
  fashion: { text: "text-accent", bg: "bg-accent", ring: "ring-accent/30" },
  "health-beauty": { text: "text-moss", bg: "bg-moss", ring: "ring-moss/30" },
  "art-culture": { text: "text-plum", bg: "bg-plum", ring: "ring-plum/30" },
  "food-travel": { text: "text-ochre", bg: "bg-ochre", ring: "ring-ochre/30" },
};

export function beatColor(slug: string) {
  return beatColors[slug] ?? beatColors.fashion;
}

export function beatName(slug: string): string {
  return beats.find((b) => b.slug === slug)?.name ?? slug;
}

export function initialsMark(publication: string): string {
  return publication
    .split(/\s|\+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const resumeContact = {
  phone: "+1 (929) 685-5291",
  location: "New York City, New York",
  email: "mokshaashivlani@gmail.com",
};

export const resumeSummary =
  "I'm a fashion writer and creative strategist drawn to the stories behind what people wear, buy, and care about. My work sits at the intersection of fashion, culture, travel, and identity, translating trends and cultural shifts into compelling narratives. With experience across editorial, public relations, and brand storytelling, I bring both a journalist's curiosity and a strategist's perspective to every project.";

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "PR & Substack Intern",
    org: "Anthology of Style",
    dates: "May 2026 – August 2026",
    bullets: [
      "Launching and running the company Substack",
      "Covering topics around fashion anthropology, vintage resale, Chanel expertise and more",
      "Maintaining press relations and actively pitching to journalists/editors",
    ],
  },
  {
    role: "Editorial Intern",
    org: "CULTURED Magazine",
    dates: "January 2026 – August 2026",
    bullets: [
      "Daily editorial tasks like transcribing, research and writing articles for print and digital",
      "Attending and covering events for CULTURED's parties section",
      "Helped launch CULT100 2026",
    ],
  },
  {
    role: "Freelance Fashion & Lifestyle Writer",
    org: "Harper's Bazaar, Cosmopolitan, MensXP, Brides, Travel+Leisure, Sorbet, Candle, Be Beautiful",
    dates: "December 2024 – present",
    bullets: [],
  },
  {
    role: "Fashion & Lifestyle Writer",
    org: "ELLE",
    dates: "April 2024 – December 2024",
    bullets: [
      "Focusing on high-end fashion and luxury lifestyle content with regular contributions to print and digital",
      "Attending all events and maintaining PR relations",
      "Organising CMS systems and SEO optimisation",
    ],
  },
  {
    role: "Creative Associate",
    org: "Condé Nast",
    dates: "May 2023 – April 2024",
    bullets: [
      "Creative strategy for branded content from pre to post-production",
      "Worked across Vogue, GQ, Condé Nast Traveller & Architectural Digest",
      "Creatively directed IPs for editorial use, including the IP Vogue Intern across 2 seasons",
      "Created content for events like Men Of The Year & Restaurant Awards",
      "Worked on What's In My Bag? from a branded content perspective",
    ],
  },
  {
    role: "Production Assistant",
    org: "Netflix",
    dates: "October 2021",
    bullets: [
      "Consulting as a production assistant on the Netflix show Social Currency",
    ],
  },
  {
    role: "Fashion Model",
    org: "Toabh Agency",
    dates: "August 2020 – March 2022",
    bullets: ["Modelled for various brands", "Styling for test shoots & other models"],
  },
];

export type EducationEntry = {
  school: string;
  program: string;
  dates: string;
  gpa?: string;
  extra?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "Parsons School of Design",
    program: "MPS in Fashion Management",
    dates: "Class of 2026",
    gpa: "3.92/4",
    extra: ["Fashion Head — choreographing, designing & putting up fashion shows"],
  },
  {
    school: "Jai Hind College",
    program: "Bachelor's in Mass Media (Journalism)",
    dates: "2020 – 2023",
    gpa: "3.84/4",
  },
];

export const projects: string[] = [
  "ELLE: Launched a print IP called GRWM Playlists",
  "ELLE: Attended and covered Paris Haute Couture Week in 2024 as a journalist",
  "Condé Nast: Worked on the launch of video IP — Secret Homestays",
  'Cosmopolitan: Founding writer on the popular column "Body Talk"',
  "Vogue: Built original IPs with brands like Burberry, Lakme, Tresemme, Obeetee & more",
  "GQ: Built original IPs with brands like Mercedes, Audi, Rolex, Rayban, Chandon, Don Julio & more",
  "Covered Lakme Fashion Week consecutively for 3 years across 6 seasons",
  "Solo-authored a 30-page research paper on a Cultural Credit Label System",
];

export const author = {
  book: "Rainbows & Sunshine",
  note: "Published poetry collection",
};

export const skills: string[] = [
  "Creative Writing",
  "Fashion Styling",
  "Creative Strategy",
  "Organisation",
  "Leadership",
  "Problem-Solving",
  "Adobe InDesign",
  "Digital Marketing",
  "Strong Communication",
  "Fashion Modelling",
  "Travel Writing",
  "Food Writing",
  "Content Creation",
  "Social Media",
  "CMS Systems",
  "Wordpress",
  "Adobe Photoshop",
  "Adobe PremierPro",
  "SEO Writing",
  "Commerce Writing",
  "Branded Content",
];
