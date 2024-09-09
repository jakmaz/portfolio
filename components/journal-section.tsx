import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function JournalSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="section-title">Journal</h2>
      <p className="page-description">
        A monthly glimpse into my development journey progress, challenges, and
        insights as I grow in both tech and life.
      </p>
      <div className="flex gap-2">
        <Input type="email" placeholder="Email Address" />
        <Button className="bg-gray-800">Subscribe</Button>
      </div>
    </div>
  );
}
