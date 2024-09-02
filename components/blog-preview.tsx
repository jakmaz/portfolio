import Link from "next/link";

interface BlogPreviewProps {
  slug: string;
  title: string;
  excerpt: string;
}

export default function BlogPreview({
  slug,
  title,
  excerpt,
}: BlogPreviewProps) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="flex flex-col w-full rounded-lg p-3 border border-gray-200">
        <h3 className="text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-500 text-sm tracking-tight ">{excerpt}</p>
      </div>
    </Link>
  );
}
