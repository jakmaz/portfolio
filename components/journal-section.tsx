import Subscribe from "./subscribe";

export default function JournalSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="section-title">Journal</h2>
      <p className="page-description mb-4">
        A monthly glimpse into my development journey progress, challenges, and
        insights as I grow in both tech and life.
      </p>
      <Subscribe />
    </div>
  );
}
