import JournalPreview from "@/components/journal/journal-preview";
import Subscribe from "@/components/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
};

export default function Journal() {
  return (
    <div className="flex flex-col gap-8">
      <p className="page-description">
        A monthly glimpse into my development journey progress, challenges, and
        insights as I grow in both tech and life.
      </p>
      <Subscribe />
      <div className="flex flex-col gap-2">
        <p>Past Issues</p>
        <JournalPreview
          slug="september-2024"
          date="September 2024"
          title="Story begins"
        />
      </div>
    </div>
  );
}
