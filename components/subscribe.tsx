import { addNewsletterSubscriber } from "@/lib/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Subscribe() {
  return (
    <form action={addNewsletterSubscriber} className="flex gap-2">
      <Input name="email" type="email" placeholder="Email Address" />
      <Button className="bg-gray-800">Subscribe</Button>
    </form>
  );
}
