import { JournalPost } from "@/lib/types";

export function PostHeader({ post }: { post: JournalPost }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {post.title}
        </h1>
        <div className="flex justify-start gap-2 items-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>{post.month}</p>
        </div>
      </div>
    </div>
  );
}
