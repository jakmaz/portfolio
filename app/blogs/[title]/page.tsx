import markdownToHtml from "@/lib/markdown";
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
    <main>
      <h1>{post.title}</h1>
    </main>
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
