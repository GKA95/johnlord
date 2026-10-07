export type PageId = 
  | 'home' 
  | 'about' 
  | 'ministry' 
  | 'sermons' 
  | 'events' 
  | 'resources' 
  | 'contact' 
  | 'give';

export interface SermonItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  youtubeId?: string;
  date: string;
  category: string;
  duration: string;
  scripture?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  registrationOpen: boolean;
  venueDetails?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Book' | 'Devotional' | 'Teaching' | 'Article' | 'Download' | 'Audio Series' | 'Study Guide';
  description: string;
  format: string;
  author: string;
  downloadUrl?: string;
  pagesOrDuration?: string;
  coverImage?: string;
}

export interface MinistryPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  scriptureReference: string;
  keyInitiatives: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  category: string;
}

export interface SocialLink {
  name: string;
  platform: 'YouTube' | 'Instagram' | 'Facebook' | 'TikTok' | 'X';
  url: string;
  handle: string;
}
