import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Docker", icon: "docker" },
  { name: "Node.js", icon: "nodejs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "PostreSQL", icon: "postgresql" },
  { name: "Java", icon: "java" },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="section-title">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 justfy">
            <Image
              src={`/images/icons/${tech.icon}.svg`}
              alt={tech.name}
              width={24}
              height={24}
            />
            <p className="text-lg text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
