import { NextRequest, NextResponse } from "next/server";

// Simple in-memory store for development
// In production, replace with Vercel KV or database
const reactionsStore: Record<string, { love: number; clap: number; dislike: number }> = {};

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    const reactions = reactionsStore[slug] || { love: 0, clap: 0, dislike: 0 };
    return NextResponse.json(reactions);
  } catch (error) {
    console.error("Error fetching reactions:", error);
    return NextResponse.json({ love: 0, clap: 0, dislike: 0 });
  }
}

export async function POST(req: NextRequest) {
  const { slug, reaction, previousReaction } = await req.json();

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    if (!reactionsStore[slug]) {
      reactionsStore[slug] = { love: 0, clap: 0, dislike: 0 };
    }

    if (previousReaction) {
      reactionsStore[slug][previousReaction as keyof typeof reactionsStore[string]] = Math.max(
        0,
        reactionsStore[slug][previousReaction as keyof typeof reactionsStore[string]] - 1
      );
    }

    if (reaction) {
      reactionsStore[slug][reaction as keyof typeof reactionsStore[string]]++;
    }

    return NextResponse.json(reactionsStore[slug]);
  } catch (error) {
    console.error("Error updating reactions:", error);
    return NextResponse.json({ error: "Failed to update reactions" }, { status: 500 });
  }
}
