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

export default async function JournalPost(props: { params: Promise<Params> }) {
  const params = await props.params;
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

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
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
