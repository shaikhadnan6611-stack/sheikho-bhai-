export type SocialPlatformId = 'facebook' | 'youtube' | 'tiktok' | 'instagram';

export interface SocialProfile {
  id: SocialPlatformId;
  name: string;
  handle: string;
  tagline: string;
  url: string;
  ctaLabel: string;
  verifiedPrimary?: boolean;
}

export interface VideoRelease {
  id: string;
  title: string;
  category: 'Lifestyle & Travel' | 'Studio Talks' | 'Highlights';
  duration: string;
  publishedDate: string;
  location: string;
  thumbnail: string;
  description: string;
  watchUrl: string;
  platformName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  location: string;
  date: string;
  aspect: 'portrait' | 'landscape';
  src: string;
  alt: string;
}

export interface HighlightItem {
  id: string;
  index: string;
  platform: string;
  title: string;
  summary: string;
  date: string;
  actionLabel: string;
  actionUrl: string;
}

export interface ContactLine {
  id: string;
  label: string;
  region: string;
  number: string;
  displayNumber: string;
  whatsappUrl: string;
  telUrl: string;
}

/**
 * ============================================================================
 * CENTRALIZED PROFILE & WEBSITE CONFIGURATION
 * Edit any social media URL, handle, or contact detail here in one place.
 * ============================================================================
 */
export const siteConfig = {
  brand: {
    name: 'Shaikho Bhai',
    urduName: 'شیخو بھائی',
    fullName: 'Shaikh Adnan',
    heroHeading: 'Welcome to the Official Website of Shaikho Bhai',
    heroDescription: 'Connect with Shaikho Bhai across all social media platforms.',
    heroPortrait: '/src/assets/images/hero_shaikho_portrait_1795162215948.jpg',
    studioPhoto: '/src/assets/images/about_creator_studio_1795162216904.jpg',
    canonicalUrl: 'https://shaikhobhai.com/',
  },

  /**
   * Editable Social Media Links
   * Update the `url` and `handle` values below whenever a channel URL changes.
   */
  socialProfiles: [
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Shaikho Bhai Official',
      tagline: 'Daily posts, live community updates, and flagship video premieres.',
      url: 'https://www.facebook.com/share/19v13viguX/',
      ctaLabel: 'Open Facebook Page',
      verifiedPrimary: true,
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@ShaikhoBhaiOfficial',
      tagline: 'Full-length vlogs, travel episodes between Pakistan and Dubai, and studio talks.',
      // Replace with your exact YouTube channel URL when ready, e.g. "https://www.youtube.com/@YourHandle"
      url: 'https://www.youtube.com/',
      ctaLabel: 'Visit YouTube Channel',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@shaikhobhai',
      tagline: 'Short-form stories, behind-the-scenes clips, and everyday moments.',
      // Replace with your exact TikTok profile URL when ready, e.g. "https://www.tiktok.com/@YourHandle"
      url: 'https://www.tiktok.com/',
      ctaLabel: 'Open TikTok Profile',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@shaikhobhai',
      tagline: 'Curated photography, reels, event appearances, and daily stories.',
      // Replace with your exact Instagram profile URL when ready, e.g. "https://www.instagram.com/YourHandle/"
      url: 'https://www.instagram.com/',
      ctaLabel: 'Follow on Instagram',
    },
  ] satisfies SocialProfile[],

  contact: {
    email: 'shaikhadnan6611@gmail.com',
    mailtoUrl: 'mailto:shaikhadnan6611@gmail.com?subject=Inquiry%20for%20Shaikho%20Bhai',
    phones: [
      {
        id: 'pk-primary',
        label: 'Phone 1 · Pakistan',
        region: 'Pakistan Direct Line',
        number: '+923001200734',
        displayNumber: '+92 300 1200734',
        whatsappUrl: 'https://wa.me/923001200734',
        telUrl: 'tel:+923001200734',
      },
      {
        id: 'pk-secondary',
        label: 'Phone 2 · WhatsApp & Desk',
        region: 'Pakistan Business & Booking',
        number: '+923001200734',
        displayNumber: '+92 300 1200734',
        whatsappUrl: 'https://wa.me/923001200734',
        telUrl: 'tel:+923001200734',
      },
      {
        id: 'uae-line',
        label: 'UAE Phone · Dubai',
        region: 'United Arab Emirates Direct',
        number: '+971505007201',
        displayNumber: '+971 50 500 7201',
        whatsappUrl: 'https://wa.me/971505007201',
        telUrl: 'tel:+971505007201',
      },
    ] satisfies ContactLine[],
  },

  biography: {
    headline: 'A Voice Connecting Pakistan and the Gulf Through Authentic Storytelling',
    paragraphs: [
      'Known widely to his audience as Shaikho Bhai (شیخو بھائی), Shaikh Adnan is a contemporary social media personality and digital content creator celebrated for his warm presence, candid commentary, and cross-cultural storytelling.',
      'Dividing his creative life between Pakistan and the United Arab Emirates, Shaikho Bhai crafts lifestyle vlogs, conversations with entrepreneurs and creators, and grounded reflections that resonate with families and young audiences alike.',
      'This official portal brings together every verified social channel, visual release, and direct business contact in one place so supporters, media partners, and collaborators can always reach the real Shaikho Bhai.',
    ],
    pillars: [
      {
        index: '01',
        title: 'Authentic Digital Voice',
        detail: 'Unscripted conversations, cultural pride, and relatable everyday perspectives shared in Urdu and English.',
      },
      {
        index: '02',
        title: 'Pakistan & UAE Presence',
        detail: 'Documenting journeys, community gatherings, and creative projects across Lahore, Karachi, and Dubai.',
      },
      {
        index: '03',
        title: 'Partnerships & Appearances',
        detail: 'Collaborating with respected lifestyle brands, media houses, and community events across the region.',
      },
    ],
  },

  videos: [
    {
      id: 'vid-dubai-golden-hour',
      title: 'Evening Walk Along Dubai Boulevard & Community Reflections',
      category: 'Lifestyle & Travel',
      duration: '12:40',
      publishedDate: 'November 2026',
      location: 'Dubai, UAE',
      thumbnail: '/src/assets/images/video_dubai_lifestyle_1795162215868.jpg',
      description:
        'A cinematic golden-hour walk through downtown Dubai sharing behind-the-scenes thoughts on upcoming creative projects and community meetups.',
      watchUrl: 'https://www.facebook.com/share/19v13viguX/',
      platformName: 'Facebook Watch',
    },
    {
      id: 'vid-studio-sessions',
      title: 'Studio Session: Building a Meaningful Personal Brand Online',
      category: 'Studio Talks',
      duration: '18:15',
      publishedDate: 'October 2026',
      location: 'Creator Studio',
      thumbnail: '/src/assets/images/video_studio_session_1795162216408.jpg',
      description:
        'An intimate studio conversation on consistency, staying rooted in your values, and connecting genuinely with followers across borders.',
      watchUrl: 'https://www.facebook.com/share/19v13viguX/',
      platformName: 'Facebook & YouTube',
    },
    {
      id: 'vid-evening-terrace',
      title: 'Late Night Q&A: Answering Questions From Pakistan & UAE Fans',
      category: 'Highlights',
      duration: '09:50',
      publishedDate: 'October 2026',
      location: 'Dubai & Lahore',
      thumbnail: '/src/assets/images/gallery_editorial_night_1795162217051.jpg',
      description:
        'Shaikho Bhai responds directly to audience messages, travel questions, and upcoming collaboration announcements.',
      watchUrl: 'https://www.facebook.com/share/19v13viguX/',
      platformName: 'Facebook & TikTok',
    },
  ] satisfies VideoRelease[],

  gallery: [
    {
      id: 'gal-portrait',
      title: 'Official Studio Portrait',
      caption: 'Formal editorial portrait session in tailored black and warm gold lighting.',
      location: 'Dubai Studio',
      date: '2026',
      aspect: 'portrait',
      src: '/src/assets/images/hero_shaikho_portrait_1795162215948.jpg',
      alt: 'Shaikho Bhai official studio portrait in black blazer',
    },
    {
      id: 'gal-dubai-skyline',
      title: 'Golden Hour Boulevard',
      caption: 'Filming on location during sunset in downtown Dubai.',
      location: 'Dubai, UAE',
      date: '2026',
      aspect: 'landscape',
      src: '/src/assets/images/video_dubai_lifestyle_1795162215868.jpg',
      alt: 'Dubai boulevard skyline at golden hour sunset',
    },
    {
      id: 'gal-studio-desk',
      title: 'Inside the Production Suite',
      caption: 'Editing and recording setup for long-form episodes and social highlights.',
      location: 'Production Studio',
      date: '2026',
      aspect: 'landscape',
      src: '/src/assets/images/about_creator_studio_1795162216904.jpg',
      alt: 'Modern content creation studio with cinema camera and editing desk',
    },
    {
      id: 'gal-night-terrace',
      title: 'Twilight City Terrace',
      caption: 'Evening appearance overlooking the illuminated skyline.',
      location: 'Evening Appearance',
      date: '2026',
      aspect: 'landscape',
      src: '/src/assets/images/gallery_editorial_night_1795162217051.jpg',
      alt: 'Shaikho Bhai evening editorial portrait overlooking city lights',
    },
    {
      id: 'gal-mic-session',
      title: 'On the Microphone',
      caption: 'Recording candid voiceovers and late-night studio talks.',
      location: 'Broadcast Booth',
      date: '2026',
      aspect: 'landscape',
      src: '/src/assets/images/video_studio_session_1795162216408.jpg',
      alt: 'Creator speaking into studio broadcast microphone',
    },
  ] satisfies GalleryPhoto[],

  highlights: [
    {
      id: 'hl-1',
      index: '01',
      platform: 'Facebook Official Page',
      title: 'Official Community Hub & Live Streams',
      summary:
        'Follow verified posts, community discussions, and direct video updates straight from Shaikho Bhai on Facebook.',
      date: 'Updated Weekly',
      actionLabel: 'View on Facebook',
      actionUrl: 'https://www.facebook.com/share/19v13viguX/',
    },
    {
      id: 'hl-2',
      index: '02',
      platform: 'Cross-Border Series',
      title: 'Pakistan to Dubai Lifestyle Diaries',
      summary:
        'Visual stories capturing everyday hospitality, entrepreneurship, and memorable moments shared between both countries.',
      date: 'Ongoing Series',
      actionLabel: 'Watch Highlights',
      actionUrl: '#videos',
    },
    {
      id: 'hl-3',
      index: '03',
      platform: 'Direct Media & Booking',
      title: 'Brand Collaborations & Guest Appearances',
      summary:
        'Dedicated Pakistan and UAE phone lines plus direct email access for event invitations and commercial partnerships.',
      date: 'Open for Inquiries',
      actionLabel: 'Contact Desk',
      actionUrl: '#contact',
    },
  ] satisfies HighlightItem[],
};
