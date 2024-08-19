const deskItems: Item[] = [
  {
    title: "MacBook Air M2",
    description: "Probably one of the best investments I have ever made!",
    link: "https://www.apple.com/macbook-air/",
  },
  {
    title: "Glorious Model D-",
    description: "If you have not used this mouse, you are missing out",
    link: "https://www.gloriousgaming.com/products/model-d-minus-wired-mouse",
  },
  {
    title: "Keychron K3 Low Profile",
    description: "This keyboard is a joy to type on",
    link: "https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard",
  },
];

const toolsItems: Item[] = [
  {
    title: "NeoVim",
    description: "Favorite code editor",
    link: "https://github.com/jakmaz/nvim",
  },
  {
    title: "Raycast",
    description: "Spotlight search replacement",
    link: "https://www.raycast.com/",
  },
  { title: "Arc", description: "Browser of choice", link: "https://arc.net/" },
  {
    title: "Notion",
    description: "For notes and personal planner",
    link: "https://www.notion.so/",
  },
  {
    title: "Figma",
    description: "For wireframing & prototyping",
    link: "https://www.figma.com/",
  },
  {
    title: "Shottr",
    description: "For taking screenshots",
    link: "https://shottr.cc/",
  },
];

type Item = {
  title: string;
  description: string;
  link?: string;
};

const Section = ({ title, items }: { title: string; items: Item[] }) => (
  <div>
    <h1 className="capitalize font-medium text-lg mt-5">{title}</h1>
    <ul className="list-disc text-gray-400 ml-5">
      {items.map((item, index) => (
        <li key={index} className="space-x-1 my-3">
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
          <span className="text-sm text-gray-500">{item.description}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Toolkit() {
  return (
    <div>
      <p className="text-gray-500">
        My ever-evolving toolkit, comprising both hardware and software. I try
        to keep this list updated as much as possible.
      </p>
      <Section title="Desk" items={deskItems} />
      <Section title="Tools" items={toolsItems} />
    </div>
  );
}
