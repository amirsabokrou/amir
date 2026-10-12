// ── Image helper ──────────────────────────────────────────────
const img = (id, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// ── Studio config ──────────────────────────────────────────────
export const config = {
  studioName: 'TEEN STUDIO',
  showreelUrl: null, // Set to a video URL to enable the showreel modal player
  whatsapp: 'https://wa.me/989332856442',
  whatsappNumber: '+98 933 285 6442',
  whatsappPrefill: 'Hello TEEN STUDIO! I\'d like to discuss a new project.',
  instagram: 'https://www.instagram.com/amirsabokrou/',
  instagramHandle: '@amirsabokrou',
  telegram: 'https://t.me/amirsabokrouu',
  telegramHandle: '@amirsabokrouu',
}

// ── Navigation ─────────────────────────────────────────────────
export const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#work' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CONTACT', href: '#contact' },
]

// ── Hero ────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'STORIES WORTH TELLING',
  headlineLines: ['WE FRAME', 'EMOTIONS.', 'YOU FEEL', 'THE STORY.'],
  highlightLine: 'THE STORY.',
  descriptor: 'FILMMAKING · STORYTELLING · VISUAL PRODUCTION',
  intro:
    'We turn ideas into powerful visual stories, crafted with intention and finished with cinematic precision.',
  image: img('1625690303837-654c9666d2d0', 1920),
  statements: [
    { title: 'CINEMATIC VISUALS', sub: 'BUILT WITH PURPOSE' },
    { title: 'STORIES', sub: 'THAT MOVE PEOPLE' },
    { title: 'DETAILS', sub: 'THAT MAKE THE DIFFERENCE' },
  ],
}

// ── About ───────────────────────────────────────────────────────
export const about = {
  label: 'BEHIND THE LENS',
  heading: 'WE DON\u2019T JUST MAKE VIDEOS.\nWE CRAFT EXPERIENCES.',
  body: [
    'TEEN STUDIO is a creative production studio focused on cinematic storytelling, distinctive visuals, and meaningful content.',
    'From concept development to the final edit, we bring ideas to life through thoughtful direction, precise cinematography, and a commitment to visual quality.',
    'Every project is an opportunity to create something that feels different, looks exceptional, and stays with its audience.',
  ],
  image: img('1500648767791-00dcc994a43e', 1200),
  bgImage: img('1506905925346-21bda4d32df4', 800),
  highlights: [
    { title: 'CREATIVE DIRECTION', desc: 'A clear vision behind every frame.' },
    { title: 'VISUAL STORYTELLING', desc: 'Ideas shaped into compelling narratives.' },
    { title: 'ATTENTION TO DETAIL', desc: 'Every shot, cut, and color has a purpose.' },
    { title: 'END-TO-END PRODUCTION', desc: 'One creative process, from concept to delivery.' },
  ],
}

// ── Services ────────────────────────────────────────────────────
export const services = [
  { num: '01', title: 'VIDEO PRODUCTION', desc: 'From concept to final cut, we produce compelling videos built around your vision, audience, and goals.', icon: 'video' },
  { num: '02', title: 'CINEMATOGRAPHY', desc: 'Carefully composed frames, intentional camera movement, and cinematic lighting that bring every story to life.', icon: 'camera' },
  { num: '03', title: 'COMMERCIAL & BRAND FILMS', desc: 'Premium visual content that communicates your brand\u2019s identity, values, and ambition.', icon: 'brand' },
  { num: '04', title: 'MUSIC VIDEOS', desc: 'Distinctive visual concepts, atmospheric imagery, and expressive storytelling for artists and musicians.', icon: 'music' },
  { num: '05', title: 'SOCIAL MEDIA CONTENT', desc: 'High-quality reels, promotional videos, and short-form content designed for modern digital platforms.', icon: 'social' },
  { num: '06', title: 'EDITING & COLOR GRADING', desc: 'Precise editing, thoughtful pacing, cinematic color, and polished finishing that unify every frame.', icon: 'edit' },
]

// ── Portfolio ───────────────────────────────────────────────────
export const portfolio = [
  { id: 1, title: 'BEYOND THE FRAME', category: 'Cinematic Film', image: img('1506905925346-21bda4d32df4', 800), desc: 'A cinematic exploration of boundaries and the spaces in between.' },
  { id: 2, title: 'STORIES IN MOTION', category: 'Brand Film', image: img('1542204165-65bf26472b9b', 800), desc: 'A brand film capturing the essence of movement and purpose.' },
  { id: 3, title: 'AFTER THE LIGHT', category: 'Visual Storytelling', image: img('1494790108377-be9c29b29330', 800), desc: 'A visual narrative shaped by natural light and quiet moments.' },
  { id: 4, title: 'CITY OF SILENCE', category: 'Commercial Film', image: img('1480714378408-67cf0d13bc1b', 800), desc: 'An atmospheric commercial set in the stillness of urban night.' },
  { id: 5, title: 'SOUND & VISION', category: 'Music Video', image: img('1493225457124-a3eb161ffa5f', 800), desc: 'A music video blending expressive sound with striking imagery.' },
  { id: 6, title: 'THE HUMAN MOMENT', category: 'Documentary Film', image: img('1500530855697-b586d89ba3ee', 800), desc: 'A documentary capturing authentic human connection and emotion.' },
]

// ── Process ────────────────────────────────────────────────────
export const processSteps = [
  { num: '01', title: 'DISCOVER', desc: 'We learn about your vision, audience, goals, and creative direction.' },
  { num: '02', title: 'CONCEPTUALIZE', desc: 'We shape the idea into a clear visual concept, treatment, and production plan.' },
  { num: '03', title: 'PRODUCE', desc: 'We bring the concept to life through cinematography, lighting, direction, and production.' },
  { num: '04', title: 'EDIT & REFINE', desc: 'We shape the footage through editing, sound design, color grading, and detailed refinement.' },
  { num: '05', title: 'DELIVER', desc: 'We prepare the final content in the agreed formats, ready for its intended platform.' },
]

export const process = {
  image: img('1485846234645-a62644f84728', 1000),
}

// ── Why Choose ──────────────────────────────────────────────────
export const whyChoose = [
  { num: '01', title: 'A CLEAR CREATIVE VISION', desc: 'Every project starts with a direction, not just a camera.' },
  { num: '02', title: 'CINEMATIC ATTENTION TO DETAIL', desc: 'We pay attention to composition, light, movement, pacing, and atmosphere.' },
  { num: '03', title: 'COLLABORATIVE BY DESIGN', desc: 'Your ideas and objectives remain central throughout the creative process.' },
  { num: '04', title: 'QUALITY THROUGH EVERY FRAME', desc: 'From the first concept to the final export, every stage contributes to the finished experience.' },
]

// ── Testimonials ───────────────────────────────────────────────
export const testimonials = [
  { quote: 'Working with TEEN STUDIO made the creative process feel clear, collaborative, and focused on the final vision.', author: '[Client Name]', role: '[Client Role / Brand]', isPlaceholder: true },
  { quote: 'The attention to detail and cinematic quality exceeded what we imagined for our project.', author: '[Client Name]', role: '[Client Role / Brand]', isPlaceholder: true },
  { quote: 'A creative team that truly understands how to tell a story through visuals.', author: '[Client Name]', role: '[Client Role / Brand]', isPlaceholder: true },
]

// ── Contact form options ───────────────────────────────────────
export const projectTypes = [
  'Commercial Video', 'Brand Film', 'Music Video', 'Social Media Content',
  'Event Filmmaking', 'Cinematography', 'Editing & Color Grading', 'Photography', 'Other',
]

export const budgetOptions = [
  "Let's Discuss", 'Entry-Level Project', 'Mid-Range Project', 'Premium Production', 'Custom Budget',
]
