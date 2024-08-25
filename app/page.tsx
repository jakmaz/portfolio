import { Experience } from "@/components/experience";
import LatestBlogs from "@/components/latest-blogs";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <p>
        Driven by a passion for technology and development, dedicated to
        creating impactful software that makes a difference in people’s lives.
      </p>
      <Experience />
      <Projects />
      <LatestBlogs />
    </div>
  );
}
