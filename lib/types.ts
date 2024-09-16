export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: Date;
  content: string;
};

export type JournalPost = {
  slug: string;
  month: string;
  title: string;
  content: string;
};
