import { Project, Service, ExperienceItem, StatItem } from '../types';
import bajajPulsarImage from '../assets/images/regenerated_image_1789027689172.png';
import dominarImage from '../assets/images/regenerated_image_1789028261629.jpg';
import ktmImage from '../assets/images/regenerated_image_1789028257617.png';
import jehangirImage from '../assets/images/regenerated_image_1789028567818.jpg';

export const PERSONAL_INFO = {
  name: 'Jay Ladva',
  monogram: 'JL.',
  location: 'Mumbai, India',
  timezone: 'Asia/Kolkata',
  title: 'Digital Business & Marketing Student',
  headline: 'I build social media and digital marketing ideas that connect brands with their audiences through content, strategy, and performance.',
  roles: [
    'Digital Marketing',
    'Social Media',
    'Performance Marketing',
  ],
  bio: [
    "I'm a Digital Business student specializing in Digital Marketing, with hands-on experience across social media, content strategy, influencer tracking, SEO, and campaign execution.",
    "I currently work on brands including Bajaj Pulsar, Dominar, KTM, and Jehangir Art Gallery, supporting content planning, social media execution, influencer tracking, trend research, and campaign coordination.",
    "I enjoy understanding what makes people engage with content and how brands can turn those insights into meaningful digital communication.",
  ],
  email: 'jayladva12345@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/jayladva30',
  currentYear: '2026',
};

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Social Media Strategy',
    description: 'Content planning, trend research, platform strategy, competitor analysis and social media execution.',
    deliverables: ['Editorial Calendar', 'Trend Forecasting', 'Community Growth', 'Competitor Auditing'],
    iconName: 'Share2',
  },
  {
    number: '02',
    title: 'Content Marketing',
    description: 'Content ideation, reel concepts, copywriting and campaign ideas designed around brand objectives.',
    deliverables: ['Short-Form Video Hooks', 'Narrative Copywriting', 'Scriptwriting', 'Content Architecture'],
    iconName: 'Sparkles',
  },
  {
    number: '03',
    title: 'Performance Marketing',
    description: 'Google Ads, Meta Ads, campaign tracking, analytics and performance-focused marketing.',
    deliverables: ['Meta Ads Manager', 'Google Search Ads', 'Funnel Tracking', 'CPA Optimization'],
    iconName: 'Target',
  },
  {
    number: '04',
    title: 'SEO & Analytics',
    description: 'Keyword research, competitor analysis, SEO strategy and performance reporting.',
    deliverables: ['Keyword Mapping', 'On-Page Architecture', 'Competitor Gap Analysis', 'Search Console Metrics'],
    iconName: 'BarChart3',
  },
  {
    number: '05',
    title: 'Influencer Marketing',
    description: 'Influencer research, creator tracking, social monitoring and campaign support.',
    deliverables: ['Creator Outreach', 'Affiliate Tracking', 'Brief Alignment', 'Engagement Benchmarking'],
    iconName: 'Users',
  },
  {
    number: '06',
    title: 'Creative Direction',
    description: 'Visual communication, creative concepts, Canva design and digital brand storytelling.',
    deliverables: ['Moodboards & Concepting', 'Brand Identity Systems', 'Social Asset Design', 'Visual Guidelines'],
    iconName: 'Layers',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'mio',
    date: 'Jun 2026 — Present',
    company: 'Mio Design',
    role: 'Digital Marketing Intern',
    description: 'Supporting social media, content, campaign coordination, trend research and influencer marketing across multiple brands.',
    highlights: [
      'Managing multi-brand daily social calendars and real-time trend hijacking',
      'Coordinating influencer discovery and outreach for automotive and culture brands',
      'Assisting creative reviews, copywriting, and post-campaign performance reporting'
    ],
    current: true,
  },
  {
    id: 'merisha',
    date: 'Nov 2025 — Feb 2026',
    company: 'Merisha Films',
    role: 'Digital Marketing Intern',
    description: 'Worked on Instagram and Facebook content, trend research, competitor analysis, content strategy and creative ideation.',
    highlights: [
      'Curated engaging behind-the-scenes reels and festive visual communication',
      'Monitored audience sentiment and engagement patterns across social handles',
      'Contributed to entertainment campaign storytelling and teaser launches'
    ],
    current: false,
  },
  {
    id: 'peakfactory',
    date: 'Jul 2025 — Oct 2025',
    company: 'Peakfactory',
    role: 'SEO Strategy Project',
    description: 'Developed an SEO strategy using keyword research, competitor analysis and on-page/off-page optimization.',
    highlights: [
      'Conducted exhaustive keyword intent clustering across high-converting search queries',
      'Built a structured competitor content gap analysis roadmap',
      'Formulated actionable recommendations for technical meta structures and site visibility'
    ],
    current: false,
  },
];

export const BRANDS = [
  'Bajaj Pulsar',
  'Dominar',
  'KTM',
  'Jehangir Art Gallery',
  'Merisha Films',
  'Peakfactory',
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'bajaj-pulsar',
    number: '01',
    title: 'Bajaj Pulsar',
    client: 'Bajaj Auto / Mio Design',
    category: 'Social Media',
    filterTag: 'social',
    description: 'Social media content and campaign support focused on motorcycle communication, product features, riding experiences and brand storytelling.',
    longDescription: 'Developed high-octane social content designed to ignite the Pulsar enthusiast community. Structured around pulse-racing motorcycle lifestyle clips, performance breakdown carousels, and rider-first storytelling across Instagram and digital channels.',
    deliverables: [
      'Social Media Content Planning',
      'Feature Spotlight Copywriting',
      'Rider Community Engagement',
      'Visual Moodboarding'
    ],
    metrics: [
      { label: 'Brand Reach', value: 'Enthusiast Scale' },
      { label: 'Channel Focus', value: 'Instagram & Reels' }
    ],
    tags: ['Automotive', 'Social Content', 'Storytelling', 'Reels'],
    theme: 'dark',
    media: {
      type: 'image',
      url: bajajPulsarImage,
      caption: 'High-performance street motorcycle aesthetic with dramatic low-key editorial lighting'
    }
  },
  {
    id: 'dominar',
    number: '02',
    title: 'Dominar',
    client: 'Bajaj Auto / Mio Design',
    category: 'Content Strategy',
    filterTag: 'content',
    description: 'Content requirements and creative ideas built around touring, adventure and motorcycle lifestyle communication.',
    longDescription: 'Created a comprehensive touring-led content blueprint tailored for long-distance motorcyclists and adventurers. Emphasized open highway freedom, rugged durability, and experiential journey stories.',
    deliverables: [
      'Touring Content Architecture',
      'Adventure Lifestyle Briefs',
      'Road-Trip Journey Concepts',
      'Platform Narrative Strategy'
    ],
    metrics: [
      { label: 'Content Focus', value: 'Highway & Adventure' },
      { label: 'Format', value: 'Editorial & Motion' }
    ],
    tags: ['Touring', 'Content Strategy', 'Adventure', 'Lifestyle'],
    theme: 'sand',
    media: {
      type: 'image',
      url: dominarImage,
      caption: 'Adventure touring motorcycle in mountain landscapes representing pure exploration'
    }
  },
  {
    id: 'ktm',
    number: '03',
    title: 'KTM',
    client: 'KTM India / Mio Design',
    category: 'Influencer Marketing',
    filterTag: 'influencer',
    description: 'Influencer research and creator tracking, including monitoring content, campaign participation and social activity.',
    longDescription: 'Built creator tracking and performance monitoring matrices for high-energy motorcycling influencers and stunt riders. Analyzed creator engagement ratios, brand alignment, and campaign deliverable turnaround.',
    deliverables: [
      'Creator Scouting & Vetting',
      'Content Delivery Tracking',
      'Engagement Ratio Benchmarking',
      'Community Resonance Audits'
    ],
    metrics: [
      { label: 'Creator Network', value: 'High-Engagement Riders' },
      { label: 'Monitoring', value: 'Real-time KPIs' }
    ],
    tags: ['Influencer Marketing', 'Creator Tracking', 'Motorsport', 'Auditing'],
    theme: 'warm',
    media: {
      type: 'image',
      url: ktmImage,
      caption: 'Dynamic track-ready orange performance motorcycle capturing raw adrenaline'
    }
  },
  {
    id: 'jehangir-art-gallery',
    number: '04',
    title: 'Jehangir Art Gallery',
    client: 'Jehangir Art Gallery / Mio Design',
    category: 'Creative Communication',
    filterTag: 'creative',
    description: 'Social media and creative communication supporting exhibitions, artwork and cultural experiences.',
    longDescription: 'Crafted elegant, respectful cultural communication elevating exhibitions, contemporary artists, and heritage visits. Balanced historical reverence with modern aesthetic curation to welcome both seasoned collectors and the youth art demographic.',
    deliverables: [
      'Exhibition Promotional Copy',
      'Artist Spotlight Formats',
      'Cultural Storytelling',
      'Event Visual Communication'
    ],
    metrics: [
      { label: 'Audience Segment', value: 'Art Connoisseurs & Youth' },
      { label: 'Tone', value: 'Sophisticated & Cultural' }
    ],
    tags: ['Art & Culture', 'Exhibitions', 'Heritage', 'Creative Direction'],
    theme: 'dark',
    media: {
      type: 'image',
      url: jehangirImage,
      caption: 'Minimalist contemporary art gallery space with curated exhibition lighting'
    }
  },
  {
    id: 'merisha-films',
    number: '05',
    title: 'Merisha Films',
    client: 'Merisha Films',
    category: 'Social Media',
    filterTag: 'social',
    description: 'Instagram and Facebook content, festive posts, promotional communication and behind-the-scenes content.',
    longDescription: 'Spearheaded visual engagement for film production and creative storytelling. Produced engaging behind-the-scenes glimpses, festive greetings, and theatrical promotion strategies across Meta platforms.',
    deliverables: [
      'Behind-the-Scenes Reel Formats',
      'Festive Campaign Designs',
      'Production Announcements',
      'Social Sentiment Monitoring'
    ],
    metrics: [
      { label: 'Platforms', value: 'Instagram & Facebook' },
      { label: 'Focus', value: 'Cinema & Storytelling' }
    ],
    tags: ['Cinema', 'Behind the Scenes', 'Meta Social', 'Video'],
    theme: 'sand',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop',
      caption: 'Cinematic film production camera setup behind the scenes on a movie set'
    }
  },
  {
    id: 'peakfactory',
    number: '06',
    title: 'Peakfactory',
    client: 'Peakfactory Project',
    category: 'SEO Strategy',
    filterTag: 'seo',
    description: 'SEO strategy project involving keyword research, competitor analysis and search visibility improvement.',
    longDescription: 'End-to-end organic growth blueprint addressing search architecture, semantic content gaps, search intent alignment, and on-page structural optimization to elevate brand authority and organic query rankings.',
    deliverables: [
      'Target Keyword Intent Mapping',
      'Competitor Serp Gap Analysis',
      'On-Page Metadata Recommendations',
      'Technical Crawl Hygiene Guidance'
    ],
    metrics: [
      { label: 'Keyword Growth', value: '+30% Ranking Gain' },
      { label: 'Traffic Lift', value: '+40% Organic Traffic' }
    ],
    tags: ['SEO', 'Search Console', 'Keyword Research', 'Growth Analytics'],
    theme: 'dark',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
      caption: 'Analytical search metrics dashboard showing upward organic growth curves'
    }
  }
];

export const SEO_STATS: StatItem[] = [
  {
    number: '30%',
    label: 'Keyword Ranking Improvement',
    detail: 'Targeted high-intent search queries achieving first-page presence.'
  },
  {
    number: '25%',
    label: 'Organic Visibility',
    detail: 'Expanded search impression footprint across competitive industry terms.'
  },
  {
    number: '40%',
    label: 'Website Traffic',
    detail: 'Sustained month-over-month qualified inbound session growth.'
  }
];
