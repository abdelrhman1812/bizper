export interface BlogPost {
  id: string;
  date: {
    day: number;
    month: string;
  };
  image: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  slug: string;
}

export interface RecentPost {
  id: string;
  date: string;
  title: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface QuickLink {
  title: string;
  href: string;
}
