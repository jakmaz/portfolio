"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    name: "LogEly",
    description: "Logging middleware for Bun's Elysia web framework.",
    link: "https://github.com/jakmaz/logely",
    image: "/images/projects/logely.svg",
  },
  {
    name: "AchieveMate",
    description: "Steam achievemnt tracker for real completionists.",
    link: "https://github.com/jakmaz/achieve-mate",
    image: "/images/projects/achievemate.svg",
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
                  width={30}
                  height={30}
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
