"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const tabs = [
  { title: "About", href: "/" },
  { title: "Uses", href: "/uses" },
  { title: "Blogs", href: "/blogs" },
  { title: "Journal", href: "/journal" },
  { title: "Contact", href: "/contact" },
];

interface TabProps {
  text: string;
  href: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, href, selected, setSelected }: TabProps) => {
  return (
    <Link href={href}>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="tab"
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute inset-0 z-0 bg-gray-800 rounded-md"
          ></motion.span>
        )}
      </button>
    </Link>
  );
};

export default function Navbar() {
  const [selected, setSelected] = useState<string>(tabs[0].title);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <Tab
          text={tab.title}
          href={tab.href}
          selected={selected === tab.title}
          setSelected={setSelected}
          key={tab.title}
        />
      ))}
    </div>
  );
}
