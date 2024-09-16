import BlogPreview from "@/components/blog-preview";
import { getAllBlogPosts } from "@/lib/postsLoaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function Blogs() {
  const posts = getAllBlogPosts();

  return (
    <div className="flex flex-col gap-2">
      <p className="page-description mb-4">
        Grab a coffee, kick back, and dive into some cool reads. I&apos;ve got a
        little something for everyone.
      </p>
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
