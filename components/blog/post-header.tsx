import { BlogPost } from "@/lib/types";
import { format, formatDistanceToNow } from "date-fns";
import { ShowViews } from "./show-views";

export function PostHeader({ post }: { post: BlogPost }) {
  const formattedDate = format(post.date, "MMMM d, yyyy");
  const relativeTime = formatDistanceToNow(post.date, { addSuffix: true });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {post.title}
        </h1>
        <div className="flex justify-start gap-2 items-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            {formattedDate} ({relativeTime})
          </p>
          <p> - </p>
          <ShowViews slug={post.slug} />
        </div>
      </div>
    </div>
  );
}
