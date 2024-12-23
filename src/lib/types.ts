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
