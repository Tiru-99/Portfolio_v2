import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { redis } from "@/lib/redis";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    let visitorId = request.cookies.get("visitor_id")?.value;
    const viewKey = `blog:${slug}:views`;
    const viewedKey = `blog:${slug}:viewed_by`;

    let views: number;

    if (!visitorId) {
        visitorId = uuid();
        // First time visitor to the site
        views = await redis.incr(viewKey);
        await redis.sadd(viewedKey, visitorId);
    } else {
        // Check if this visitor has viewed this specific blog
        const hasViewed = await redis.sismember(viewedKey, visitorId);
        if (!hasViewed) {
            views = await redis.incr(viewKey);
            await redis.sadd(viewedKey, visitorId);
        } else {
            views = (await redis.get<number>(viewKey)) ?? 0;
        }
    }

    const response = NextResponse.json({ views });

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
