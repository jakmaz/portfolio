"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// logofa.st, no padding, 400 px size, 2 px border radius
const ProjectsData = [
  {
    name: "Roadwise",
    description: "Gather user feedback and ideas for your project.",
    link: "https://roadwiseapp.vercel.app",
    image: "/images/projects/roadwise.svg",
  },
  {
    name: "SafeScan",
    description: "Check text for safety and moderation issues instantly.",
    link: "https://safescan.jakmaz.com",
    image: "/images/projects/safescan.svg",
  },
  {
    name: "Albumfy",
    description: "Create and print custom posters from Spotify albums.",
    link: "https://albumfy.jakmaz.com",
    image: "/images/projects/albumfy.svg",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.name}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <div></div>
                <Image
                  src={project.image}
                  width={32}
                  height={32}
                  className="mb-3 rounded-md"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
