import { Metadata } from "next";

const toolkit: { [key: string]: Item[] } = {
  Desk: [
    {
      title: "MacBook Air M2",
      description: "Probably one of the best investments I have ever made!",
      link: "https://www.apple.com/macbook-air/",
    },
    {
      title: "Glorious Model D Minus",
      description:
        "Bought it for gaming, but it is perfect for productivity too!",
      link: "https://www.gloriousgaming.com/products/model-d-minus-wired-mouse",
    },
    {
      title: "Keychron K3 Low Profile",
      description: "This keyboard is a joy to type on",
      link: "https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard",
    },
  ],
  Tools: [
    {
      title: "Zed",
      description: "Favorite code editor",
      link: "https://github.com/jakmaz/zed",
    },
    {
      title: "Raycast",
      description: "Spotlight search replacement",
      link: "https://www.raycast.com/",
    },
    {
      title: "Arc",
      description: "Browser of choice",
      link: "https://arc.net/",
    },
    {
      title: "Notion",
      description: "For notes and personal planner",
      link: "https://www.notion.so/",
    },
    {
      title: "Shottr",
      description: "For taking screenshots",
      link: "https://shottr.cc/",
    },
    {
      title: "Excalidraw",
      description: "Sketch diagrams like a pro.",
      link: "https://excalidraw.com/",
    },
  ],
  Technologies: [
    {
      title: "Shadcn/ui",
      description: "Cool UI components for web apps.",
      link: "https://ui.shadcn.com/",
    },
    {
      title: "Aceternity",
      description: "Awesome animated UI stuff.",
      link: "https://ui.aceternity.com/",
    },
  ],
};

type Item = {
  title: string;
  description: string;
  link?: string;
};

export const metadata: Metadata = {
  title: "Uses",
};

export default function Toolkit() {
  return (
    <div>
      <p className="page-description">
        My ever-evolving toolkit, comprising both hardware and software. I try
        to keep this list updated as much as possible.
      </p>
      {Object.entries(toolkit).map(([sectionTitle, items], sectionIndex) => (
        <div key={sectionIndex}>
          <p className="capitalize font-medium text-lg mt-5">{sectionTitle}</p>
          <ul className="list-disc text-gray-400 ml-5">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="space-x-1 my-3">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-gray-900 hover:text-gray-500"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="font-medium text-sm text-gray-900">
                    {item.title}
                  </span>
                )}{" "}
                <span>-</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
