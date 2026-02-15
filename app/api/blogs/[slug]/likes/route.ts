import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { redis } from "@/lib/redis";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const visitorId = request.cookies.get("visitor_id")?.value;

    const likesKey = `blog:${slug}:likes`;
    const likedKey = `blog:${slug}:liked_by`;

    const likesCount = (await redis.get<number>(likesKey)) ?? 0;
    const hasLiked = visitorId ? await redis.sismember(likedKey, visitorId) : false;

    return NextResponse.json({ likes: likesCount, hasLiked });
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    let visitorId = request.cookies.get("visitor_id")?.value;

    if (!visitorId) {
        visitorId = uuid();
    }

    const likesKey = `blog:${slug}:likes`;
    const likedKey = `blog:${slug}:liked_by`;

    const hasLiked = await redis.sismember(likedKey, visitorId);
    let newLikes: number;

    if (hasLiked) {
        // Already liked, do nothing or return current count
        newLikes = (await redis.get<number>(likesKey)) ?? 0;
    } else {
        // Like for the first time
        newLikes = await redis.incr(likesKey);
        await redis.sadd(likedKey, visitorId);
    }

    const response = NextResponse.json({ likes: newLikes, hasLiked: true });

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
