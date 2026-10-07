import { SermonItem, EventItem, ResourceItem, MinistryPillar, TestimonialItem, SocialLink } from '../types';

/**
 * FORMSPREE CONTACT FORM CONFIGURATION
 * Replace "YOUR_FORMSPREE_ENDPOINT" with your real Formspree endpoint ID or full URL later.
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT";

/**
 * BRAND & PASTOR PROFILE
 * All fields are centralized and easily editable.
 * Placeholders are maintained until verified biographical data is provided.
 */
export const ministryProfile = {
  name: "PROPHET JOHN LORD",
  shortName: "Prophet John Lord",
  honorific: "Prophet",
  tagline: "Prophetic Voice. Kingdom Impact. Transforming Lives.",
  subTagline: "Equipping people to discover purpose, walk in faith and make kingdom impact across the nations.",
  
  // Official placeholders - DO NOT invent biographical facts
  introduction: "[Insert official introduction for Prophet John Lord here.]",
  biography: "[Insert official biography here.]",
  
  subsections: {
    background: "[Insert official background details here.]",
    calling: "[Insert official calling narrative here.]",
    vision: "[Insert official ministry vision statement here.]",
    mission: "[Insert official ministry mission statement here.]",
    ministry: "[Insert official ministry scope and international mandate here.]",
  },
  
  ministryDescription: "[Insert official ministry description here.]",
  givingMessage: "[Insert official ministry giving message here.]",
  
  heroImagePlaceholderNote: "REPLACE WITH PROPHET JOHN LORD PHOTO",
  portraitPlaceholderNote: "REPLACE WITH PROPHET JOHN LORD PHOTO",
};

/**
 * CONTACT DETAILS (Centralized Placeholders)
 * Strictly using placeholders as requested.
 */
export const contactInfo = {
  email: "[Insert official email]",
  phone: "[Insert official phone]",
  location: "[Insert official location]",
  officeHours: "[Insert official office hours]",
  prayerLine: "[Insert official prayer line]",
  partnershipEmail: "[Insert official partnership email]",
  whatsappNumber: "+1234567890", // Replace with Prophet John Lord's official WhatsApp number
};

/**
 * WHATSAPP CHAT INTEGRATION CONFIGURATION
 * Direct click-to-chat with Prophet John Lord Ministry Desk
 */
export const whatsappConfig = {
  // Replace with the real international number without '+' or symbols for wa.me link: e.g., '1234567890' or '233XXXXXXXXX'
  phoneNumber: "1234567890",
  displayNumber: "+1 (800) 555-LORD",
  officialTitle: "Prophet John Lord Ministries",
  statusSubtitle: "Online • Ministry Desk Typically Replies in Minutes",
  welcomeMessage: "Shalom and Kingdom blessings! Welcome to Prophet John Lord Ministries. How can our team pray with you or assist your spiritual journey today?",
  defaultMessage: "Shalom Prophet John Lord Ministries, I am connecting from the official website.",
  quickOptions: [
    { label: "🙏 Submit a Prayer Request", message: "Shalom Prophet John Lord, I would like to submit an urgent prayer request for:" },
    { label: "📅 Inquire about Upcoming Events", message: "Shalom, I would like more details regarding upcoming conferences and services." },
    { label: "🤝 Ministry Partnership", message: "Shalom, I would like to partner with Prophet John Lord Ministries to impact nations." },
    { label: "📖 Prophetic Guidance & Counseling", message: "Shalom, I am seeking prophetic guidance and pastoral counseling." },
    { label: "👋 Send Warm Shalom Greetings", message: "Shalom Prophet John Lord, sending warm blessings and greetings!" },
  ],
};

/**
 * SOCIAL MEDIA CHANNELS (Centralized Placeholders)
 */
export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    platform: "YouTube",
    url: "https://youtube.com",
    handle: "@prophetjohnlord",
  },
  {
    name: "Instagram",
    platform: "Instagram",
    url: "https://instagram.com",
    handle: "@prophetjohnlord",
  },
  {
    name: "Facebook",
    platform: "Facebook",
    url: "https://facebook.com",
    handle: "ProphetJohnLordMinistry",
  },
  {
    name: "TikTok",
    platform: "TikTok",
    url: "https://tiktok.com",
    handle: "@prophetjohnlord",
  },
  {
    name: "X",
    platform: "X",
    url: "https://x.com",
    handle: "@prophetjohnlord",
  },
];

/**
 * MINISTRY PILLARS
 * The six core mandates of Prophet John Lord's ministry.
 */
export const ministryPillars: MinistryPillar[] = [
  {
    id: "prophecy",
    number: "01",
    title: "PROPHECY",
    subtitle: "Divine Direction & Supernatural Clarity",
    description: "Releasing timely prophetic words that align hearts with heaven's agenda, bringing precision, breakthrough, and spiritual alignment to individuals and territories.",
    scriptureReference: "Amos 3:7 · 1 Corinthians 14:3",
    keyInitiatives: [
      "Prophetic Consultation & Prayer",
      "Territorial Intercession Assemblies",
      "Prophetic School of Ministry"
    ]
  },
  {
    id: "teaching",
    number: "02",
    title: "TEACHING",
    subtitle: "Doctrinal Depth & Biblical Revelation",
    description: "Unfolding the uncompromised Word of God with revelation depth to build firm faith, establish spiritual maturity, and destroy doctrinal error in the body of Christ.",
    scriptureReference: "2 Timothy 2:15 · Ephesians 4:11-13",
    keyInitiatives: [
      "Kingdom Wisdom Masterclasses",
      "Weekly Revelation Expositions",
      "Leadership Discipleship Track"
    ]
  },
  {
    id: "prayer",
    number: "03",
    title: "PRAYER",
    subtitle: "Apostolic Altar & Intercession",
    description: "Cultivating unceasing prayer altars that birth revival, dismantle strongholds, heal the brokenhearted, and provoke supernatural encounters across continents.",
    scriptureReference: "James 5:16 · Luke 18:1",
    keyInitiatives: [
      "Midnight Watch Intercessory Network",
      "Global Virtual Prayer Altars",
      "Healing & Deliverance Clinics"
    ]
  },
  {
    id: "evangelism",
    number: "04",
    title: "EVANGELISM",
    subtitle: "Harvesting Souls for Jesus Christ",
    description: "Taking the authentic gospel of Jesus Christ to every village, city, and nation with demonstration of the Holy Spirit's power and compassionate soul winning.",
    scriptureReference: "Mark 16:15 · Acts 1:8",
    keyInitiatives: [
      "Frontier Gospel Crusades",
      "Campus & Youth Revival Outreaches",
      "Community Gospel Missions"
    ]
  },
  {
    id: "leadership",
    number: "05",
    title: "LEADERSHIP",
    subtitle: "Mentoring Next-Generation Pioneers",
    description: "Mentoring emerging ministers, marketplace leaders, and spiritual stewards to lead with uncompromised integrity, spiritual discernment, and excellence.",
    scriptureReference: "Proverbs 27:17 · Titus 1:5",
    keyInitiatives: [
      "Prophetic Ministers Roundtable",
      "Marketplace Kingdom Ambassadors",
      "Youth Leadership Mentorship"
    ]
  },
  {
    id: "kingdom-impact",
    number: "06",
    title: "KINGDOM IMPACT",
    subtitle: "Transforming Society & Humanitarian Relief",
    description: "Demonstrating the love of Christ tangibly through community empowerment, humanitarian outreach, youth education initiatives, and social upliftment.",
    scriptureReference: "Matthew 25:35-40 · Micah 6:8",
    keyInitiatives: [
      "Kingdom Hope Foundation Initiatives",
      "Education & Student Scholarships",
      "Emergency Relief & Compassion Drives"
    ]
  }
];

/**
 * SERMON MESSAGES (Editable CMS Placeholders)
 * Structured for easy future connection to WordPress REST API (`/wp-json/wp/v2/sermons`).
 */
export const placeholderSermons: SermonItem[] = [
  {
    id: "sermon-1",
    title: "Walking in Purpose",
    description: "A foundational prophetic teaching on discerning divine assignment, overcoming spiritual stagnation, and stepping courageously into God's prepared paths.",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Latest Release",
    category: "Prophetic Direction",
    duration: "1h 14m",
    scripture: "Jeremiah 29:11 · Proverbs 16:9"
  },
  {
    id: "sermon-2",
    title: "Faith for Your Next Season",
    description: "Understanding the spiritual mechanics of transition, supernatural trust, and how prophetic alignment unlocks breakthrough when visible circumstances resist.",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Recent Broadcast",
    category: "Faith & Dominion",
    duration: "58m",
    scripture: "Hebrews 11:1 · Isaiah 43:18-19"
  },
  {
    id: "sermon-3",
    title: "Understanding Your Calling",
    description: "Deep revelation on the distinction between giftings and mandates, cultivating spiritual character, and standing firm in your high calling in Christ Jesus.",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Recent Broadcast",
    category: "Kingdom Purpose",
    duration: "1h 22m",
    scripture: "Romans 11:29 · 2 Timothy 1:9"
  },
  {
    id: "sermon-4",
    title: "The Altar of Prayer & Power",
    description: "How to maintain an active, fire-filled altar of intercession that dismantles demonic resistance and brings down heaven's authority into earthly circumstances.",
    thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Archive Message",
    category: "Spiritual Warfare",
    duration: "1h 05m",
    scripture: "Leviticus 6:13 · 1 Thessalonians 5:17"
  },
  {
    id: "sermon-5",
    title: "Breaking Generational Limitations",
    description: "Prophetic keys to identifying invisible spiritual barriers, applying the blood of Jesus Christ, and entering into total territorial and family deliverance.",
    thumbnail: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Archive Message",
    category: "Deliverance & Freedom",
    duration: "1h 31m",
    scripture: "Galatians 3:13-14 · Colossians 2:14"
  },
  {
    id: "sermon-6",
    title: "The Atmosphere of the Miraculous",
    description: "Cultivating honor, expectancy, and sensitivity to the Holy Spirit that transforms ordinary gatherings into arenas of supernatural signs and wonders.",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    date: "Archive Message",
    category: "Supernatural Encounters",
    duration: "1h 10m",
    scripture: "Acts 2:1-4 · 1 Corinthians 2:4"
  }
];

/**
 * UPCOMING EVENTS (Editable Placeholders)
 * Clearly marked as placeholder schedules ready to update.
 */
export const placeholderEvents: EventItem[] = [
  {
    id: "event-1",
    title: "Annual Prophetic Convocation",
    date: "November 14 - 17, 2026",
    time: "6:00 PM Daily (GMT)",
    location: "[Insert official venue / International Auditorium]",
    venueDetails: "Main Sanctuary & Worldwide Live Stream",
    description: "A consecrated four-day encounter of intense worship, apostolic decree, and divine instructions for the upcoming season.",
    category: "Conference",
    registrationOpen: true
  },
  {
    id: "event-2",
    title: "Global Ministers & Leaders Summit",
    date: "December 05, 2026",
    time: "9:00 AM - 4:00 PM (GMT)",
    location: "[Insert official venue / Executive Hall]",
    venueDetails: "Executive Ministry Center (In-person & VIP Webcast)",
    description: "A specialized intensive equipping session for pastors, apostles, evangelists, and marketplace leaders seeking supernatural leverage.",
    category: "Leadership",
    registrationOpen: true
  },
  {
    id: "event-3",
    title: "All-Night Prophetic Breakthrough Vigil",
    date: "December 31, 2026",
    time: "8:00 PM till Dawn",
    location: "[Insert official venue / Cross-over Arena]",
    venueDetails: "Main Stadium & Global Broadcast",
    description: "Crossing over into the new year under an open heaven with prophetic declarations, breakthrough prayer, and prophetic impartation.",
    category: "Revival Night",
    registrationOpen: true
  },
  {
    id: "event-4",
    title: "School of the Prophets Intensive",
    date: "January 22 - 24, 2027",
    time: "5:00 PM Daily",
    location: "[Insert official venue / Ministry Center]",
    venueDetails: "Classroom Block A & Online Portal",
    description: "Rigorous biblical training on hearing God accurately, discerning spiritual voices, and moving in clean prophetic ministry.",
    category: "Training",
    registrationOpen: true
  }
];

/**
 * EDITORIAL RESOURCES (Placeholders)
 */
export const placeholderResources: ResourceItem[] = [
  {
    id: "res-1",
    title: "The Voice of the Seer: Discerning Divine Frequency",
    type: "Book",
    author: "Prophet John Lord",
    description: "An in-depth literary exploration of biblical prophetic ministry, spiritual senses, and maintaining pure motives before God's altar.",
    format: "Hardcover & Digital eBook",
    pagesOrDuration: "248 Pages",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "res-2",
    title: "21 Days Prophetic Decree Devotional",
    type: "Devotional",
    author: "Prophet John Lord",
    description: "A daily prayer and scriptural guide designed to calibrate your spiritual focus, command your morning, and unlock breakthroughs.",
    format: "Print & Downloadable PDF",
    pagesOrDuration: "112 Pages",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "res-3",
    title: "Dimensions of Apostolic Authority",
    type: "Audio Series",
    author: "Prophet John Lord",
    description: "A 6-part audio masterclass systematically examining spiritual warfare, territorial gates, and the believer's legal right in Christ.",
    format: "Digital Audio Bundle (MP3)",
    pagesOrDuration: "7.5 Hours Audio",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "res-4",
    title: "Foundations of Spiritual Discernment",
    type: "Study Guide",
    author: "Prophet John Lord",
    description: "Comprehensive curriculum workbook designed for personal study groups, church leadership tracks, and Bible institutes.",
    format: "Downloadable PDF Workbook",
    pagesOrDuration: "84 Pages",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
  }
];

/**
 * TESTIMONIALS (Placeholders - Never fabricated)
 */
export const placeholderTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "[Insert genuine testimony here. Awaiting official verified testimony from ministry archives.]",
    name: "[Partner Name]",
    location: "[Location / Country]",
    category: "Divine Direction & Healing"
  },
  {
    id: "test-2",
    quote: "[Insert genuine testimony here. Awaiting official verified testimony from ministry archives.]",
    name: "[Partner Name]",
    location: "[Location / Country]",
    category: "Financial Breakthrough"
  },
  {
    id: "test-3",
    quote: "[Insert genuine testimony here. Awaiting official verified testimony from ministry archives.]",
    name: "[Partner Name]",
    location: "[Location / Country]",
    category: "Family Restoration & Deliverance"
  }
];

/**
 * GIVING INITIATIVES (Placeholders ready for payment gateway integration)
 */
export const givingInitiatives = [
  {
    id: "general",
    title: "Kingdom Advancement Fund",
    description: "Supports global gospel crusades, media broadcast outreach, and worldwide prophetic gatherings.",
    badge: "Primary Mandate"
  },
  {
    id: "media",
    title: "Media & Television Broadcast",
    description: "Funding satellite, streaming, and studio equipment to broadcast the uncompromised Word to nations.",
    badge: "Media Outreach"
  },
  {
    id: "compassion",
    title: "Compassion & Humanitarian Relief",
    description: "Providing food relief, educational support for underprivileged youths, and community aid.",
    badge: "Humanitarian Impact"
  },
  {
    id: "church-planting",
    title: "Prophetic Centers & Mission Hubs",
    description: "Establishing prayer altars, missionary training centers, and regional hubs for revival.",
    badge: "Apostolic Expansion"
  }
];

/**
 * FUTURE CMS ADAPTER PATTERN
 * Enables seamless switch from local mock data to WordPress REST API:
 * 
 * Example:
 * export async function fetchWordPressSermons() {
 *   const res = await fetch("https://your-wordpress-domain.com/wp-json/wp/v2/sermons?_embed");
 *   return res.json();
 * }
 */
export const cmsAdapterConfig = {
  isWordPressEnabled: false,
  wordPressEndpoint: "https://example.com/wp-json/wp/v2",
};
