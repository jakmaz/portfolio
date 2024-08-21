import { Experience } from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-gray-500">
        Driven by a passion for technology and development, dedicated to
        creating impactful software that makes a difference in people’s lives.
      </p>
      <Experience />
      <Projects />
    </div>
  );
}
