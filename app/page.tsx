import { Experience } from "@/components/experience";
import JournalSection from "@/components/journal-section";
import LatestBlogs from "@/components/latest-blogs";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 mb-6">
      <p className="page-description">
        Driven by a passion for technology and development, dedicated to
        creating impactful software that makes a difference in people&apos;s
        lives.
      </p>
      <TechStack />
      <Experience />
      <Projects />
      <LatestBlogs />
      <JournalSection />
    </div>
  );
}
