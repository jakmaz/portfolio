import JournalPreview from "@/components/journal/journal-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <div className="flex gap-2">
        <Input type="email" placeholder="Email Address" />
        <Button className="bg-gray-800">Subscribe</Button>
      </div>
      <div>Posts</div>
      <JournalPreview
        slug="september-2024"
        date="September 2024"
        title="Story begins"
      />
    </div>
  );
}
