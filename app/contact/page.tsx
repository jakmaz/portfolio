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
          href="mailto:j.mazur.nl@gmail.com"
          className="text-black hover:text-gray-500"
        >
          j.mazur.nl@gmail.com
        </a>
      </p>
    </div>
  );
}
