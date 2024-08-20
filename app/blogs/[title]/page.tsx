import markdownToHtml from "@/lib/markdown";
import markdownStyles from "@/components/markdown-styles.module.css";
import { getAllPosts, getPostByTitle } from "@/lib/postsUtils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { title: string } }) {
  const post = getPostByTitle(params.title);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col gap-2">
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={markdownStyles["markdown"]}
      />
    </div>
  );
}

export function generateMetadata({
  params,
}: {
  params: { title: string };
}): Metadata {
  const post = getPostByTitle(params.title);

  if (!post) {
    return notFound();
  }

  const title = "Blog post";

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    title: post.title,
  }));
}
