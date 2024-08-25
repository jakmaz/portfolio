import { playfair } from "@/app/layout";
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
      <div className="flex flex-col w-full space-y-1 rounded-lg bg-gray-50/50 hover:bg-white py-3 pl-3 border border-gray-200">
        <h3
          className={
            playfair.className + " text-gray-900 text-2xl tracking-tight"
          }
        >
          {title}
        </h3>
        <p className="text-gray-500 text-sm tracking-tight mt-1">{excerpt}</p>
      </div>
    </Link>
  );
}
