import { getAllPosts } from "@/lib/postsLoaders";
import Link from "next/link";

export default async function Blogs() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <Link href={`/blogs/${post.slug}`} key={post.slug}>
          <div className="flex flex-col w-full space-y-1 rounded-lg bg-gray-50/50 hover:bg-white py-3 pl-3 border border-gray-200">
            <h2 className="text-gray-900 text-lg font-heading tracking-tight">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm tracking-tight mt-1">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
