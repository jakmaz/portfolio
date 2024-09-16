import Link from "next/link";

interface JournalPreviewProps {
  slug: string;
  date: string;
  title: string;
}

export default function JournalPreview({
  slug,
  date,
  title,
}: JournalPreviewProps) {
  return (
    <Link href={`/journal/${slug}`}>
      <div className="flex flex-col w-full rounded-lg p-3 border border-gray-200">
        <p className="text-gray-500 text-sm tracking-tight ">{date}</p>
        <h3 className="text-gray-900 text-lg">{title}</h3>
      </div>
    </Link>
  );
}
