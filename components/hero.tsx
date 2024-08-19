import Image from "next/image";

const socialLinks = [
  {
    href: "https://x.com/jakmaz_dev",
    alt: "X",
    src: "/images/icons/x.svg",
  },
  {
    href: "https://github.com/jakmaz",
    alt: "Github",
    src: "/images/icons/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/jakub-mazur-b58951261/",
    alt: "Linkedin",
    src: "/images/icons/linkedin.svg",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col">
      <h1 className="font-medium text-gray-900 text-xl font-heading">
        Jakub Mazur
      </h1>
      <p className="text-gray-500">Student &amp; Coding Passionate</p>
      <div className="flex flex-row gap-3 mt-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              alt={link.alt}
              src={link.src}
              width={24}
              height={24}
              priority={true}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
