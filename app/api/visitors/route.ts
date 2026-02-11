import { NextRequest , NextResponse } from "next/server";
import { v4 as uuid} from "uuid"; 
import { redis } from "@/lib/redis";

export async function GET(request: NextRequest) {
  let visitorId = request.cookies.get("visitor_id")?.value;

  let uniqueCount: number;

  if (!visitorId) {
    visitorId = uuid();
    uniqueCount = await redis.incr("unique-visitors");
  } else {
    uniqueCount = (await redis.get<number>("unique-visitors")) ?? 0;
  }

  const response = NextResponse.json({
    uniqueVisitors: uniqueCount,
  });

  if (!request.cookies.get("visitor_id")) {
    response.cookies.set("visitor_id", visitorId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}
