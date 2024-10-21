import { PostHeader } from "@/components/journal/post-header";
import markdownStyles from "@/components/markdown-styles.module.css";
import markdownToHtml from "@/lib/markdown";
import { getAllJournalPosts, getJournalPostBySlug } from "@/lib/postsLoaders"; // Adjust to import the correct journal functions
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export default async function JournalPost({ params }: { params: Params }) {
  const post = getJournalPostBySlug(params.slug); // Use the correct function for journal posts

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col gap-2">
      <Link href="/journal" className="text-gray-600 hover:text-gray-900">
        Back
      </Link>
      <PostHeader post={post} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={markdownStyles["markdown"]}
      />
    </div>
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getJournalPostBySlug(params.slug); // Use journal-specific function

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllJournalPosts(); // Fetch all journal posts

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
