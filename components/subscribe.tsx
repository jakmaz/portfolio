"use client";

import { addNewsletterSubscriber } from "@/lib/actions";
import { MailOpen } from "lucide-react";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Subscribe() {
  type NewsletterResponse = {
    message: string;
  };

  const [respose, formAction, isPending] = useActionState(
    addNewsletterSubscriber,
    undefined,
  );
  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input name="email" type="email" placeholder="Email Address" />
        <Button className="bg-gray-800" disabled={isPending}>
          Subscribe <MailOpen height={17} width={17} className="ml-2" />
        </Button>
      </div>
      <p className="text-gray-600"> {respose?.message} </p>
    </form>
  );
}
