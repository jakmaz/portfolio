import { getViewCount } from "@/lib/actions/viewCount";

export async function ShowViews({ slug }: { slug: string }) {
  const { views } = await getViewCount(slug);

  return <div>{views} views</div>;
}
