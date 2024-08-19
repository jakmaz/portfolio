"use client";

import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    name: "LogEly",
    description: "Ready-to-use UI elements designed for rapid development.",
    link: "https://syntaxui.com",
    image: "https://ansubkhan.com/images/projects/syntaxUI.svg",
  },
  {
    id: 2,
    name: "ElyNext",
    description: "A curated collection of portfolios for inspiration.",
    link: "https://prettyfolio.com",
    image: "https://ansubkhan.com/images/projects/prettyfolio.png",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="capitalize font-medium text-lg my-2">Projects</h1>
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
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <div></div>
                {/* <Image */}
                {/*   src={project.image} */}
                {/*   width={30} */}
                {/*   height={30} */}
                {/*   className="mb-3 rounded-lg border-gray-400 dark:border" */}
                {/*   alt={project.name} */}
                {/* /> */}
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
