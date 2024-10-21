import JournalPreview from "@/components/journal/journal-preview";
import Subscribe from "@/components/subscribe";
import { getAllJournalPosts } from "@/lib/postsLoaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
};

export default function Journal() {
  const posts = getAllJournalPosts();

  return (
    <div className="flex flex-col gap-8">
      <p className="page-description">
        A monthly glimpse into my development journey progress, challenges, and
        insights as I grow in both tech and life.
      </p>
      <Subscribe />
      <div className="flex flex-col gap-2">
        <p>Past Issues</p>
        {posts.map((post) => (
          <JournalPreview
            key={post.slug}
            slug={post.slug}
            date={post.month}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}
