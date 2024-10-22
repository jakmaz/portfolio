import { PostHeader } from "@/components/blog/post-header";
import markdownStyles from "@/components/markdown-styles.module.css";
import markdownToHtml from "@/lib/markdown";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/postsLoaders";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export default async function Post(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

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

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
