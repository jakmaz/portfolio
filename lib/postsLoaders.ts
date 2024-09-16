import { compareDesc } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { BlogPost, JournalPost } from "./types";

// Define base directories for blog and journal posts
const blogDirectory = join(process.cwd(), "posts/blog");
const journalDirectory = join(process.cwd(), "posts/journal");

// Methods for handling BlogPost

export function getBlogPostSlugs() {
  return fs.readdirSync(blogDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    excerpt: data.excerpt,
    date: new Date(data.date),
    content,
  } as BlogPost;
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const posts = slugs.map((slug) => getBlogPostBySlug(slug));

  posts.sort((post1, post2) =>
    compareDesc(new Date(post1.date), new Date(post2.date)),
  );

  return posts;
}

// Methods for handling JournalPost

export function getJournalPostSlugs() {
  return fs.readdirSync(journalDirectory);
}

export function getJournalPostBySlug(slug: string): JournalPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(journalDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    month: data.month,
    title: data.title,
    content,
  } as JournalPost;
}

export function getAllJournalPosts(): JournalPost[] {
  const slugs = getJournalPostSlugs();
  const posts = slugs.map((slug) => getJournalPostBySlug(slug));

  // Optional: Sort by month (you can implement custom sorting logic based on the month if needed)
  return posts;
}

// Optional function to combine and retrieve both BlogPost and JournalPost (if needed)

export function getAllBlogPostsCombined(): (BlogPost | JournalPost)[] {
  const blogPosts = getAllBlogPosts();
  const journalPosts = getAllJournalPosts();

  const allPosts = [...blogPosts, ...journalPosts];

  // If you want a unified sorting mechanism, add your sorting logic here based on date or month
  return allPosts;
}
