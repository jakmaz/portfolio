import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conact",
};

export default function Contact() {
  return (
    <div>
      <p className="page-description">
        Let&apos;s work on something together, drop me a message here:{" "}
        <a
          href="mailto:contact@jakmaz.com"
          className="text-black hover:text-gray-500"
        >
          contact@jakmaz.com
        </a>
        <br />
        Or use one of the social media links on the top!
      </p>
    </div>
  );
}
