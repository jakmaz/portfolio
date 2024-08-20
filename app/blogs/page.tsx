import { getAllPosts } from "@/lib/postsUtils";
import Link from "next/link";

export default async function Blogs() {
  const posts = getAllPosts(); // Fetch all posts directly in the component

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/blogs/${post.slugTitle}`} key={post.slugTitle}>
          <div className="block p-6 mb-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
