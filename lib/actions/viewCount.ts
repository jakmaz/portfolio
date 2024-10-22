"use server";

import crypto from "crypto";
import { headers } from "next/headers";
import redis from "../redis";

export async function getViewCount(slug: string) {
  console.log("Getting view count for", slug);
  const viewKey = ["pageviews", "blogs", slug].join(":");
  const viewCount = (await redis.get<number>(viewKey)) ?? 0;

  return { views: viewCount };
}

export async function recordViewCount(slug: string) {
  console.log("Recording view count for", slug);
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  const ipSource = forwardedFor || realIp || "localhost";
  const ip = ipSource.split(",")[0].trim();
  const hashedIp = crypto.createHash("sha256").update(ip).digest("hex");

  const viewKey = ["pageviews", "blogs", slug].join(":");
  const ipViewKey = ["ip", hashedIp, "views", slug].join(":");

  const hasViewed = await redis.get(ipViewKey);

  if (!hasViewed) {
    const pipeline = redis.pipeline();
    pipeline.incr(viewKey);
    pipeline.set(ipViewKey, "1");
    await pipeline.exec();

    return { message: "View Added", status: 202 };
  } else {
    return { message: "Already viewed", status: 200 };
  }
}
