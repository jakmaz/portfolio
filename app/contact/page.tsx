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
          href="mailto:jakmaz.dev@icloud.com"
          className="text-black hover:text-gray-500"
        >
          jakmaz.dev@icloud.com
        </a>
        <br />
        Or use one of the social media links on the top!
      </p>
    </div>
  );
}
