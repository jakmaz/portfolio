import { PostHeader } from "@/components/blog/post-header";
import markdownStyles from "@/components/markdown-styles.module.css";
import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/postsLoaders";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export default async function Post({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col gap-2">
      <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
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
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
