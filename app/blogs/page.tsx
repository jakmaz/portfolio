import BlogPreview from "@/components/blog-preview";
import { getAllPosts } from "@/lib/postsLoaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Blogs() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <BlogPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
