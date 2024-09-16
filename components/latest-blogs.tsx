import BlogPreview from "@/components/blog-preview";
import { getAllBlogPosts } from "@/lib/postsLoaders";
import Link from "next/link";

export default async function LatestBlogs() {
  const posts = getAllBlogPosts().slice(0, 2); // Display the latest two blogs

  return (
    <section className="flex flex-col gap-4">
      <h2 className="section-title">Latest Blogs</h2>
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
      <Link href="/blogs">
        <span className="link text-gray-700 text-sm hover:text-black ">
          Read More
        </span>
      </Link>
    </section>
  );
}
