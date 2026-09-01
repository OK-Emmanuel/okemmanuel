import { NextRequest, NextResponse } from "next/server";

// Simple in-memory store for development
// In production, replace with Vercel KV or database
const readsStore: Record<string, number> = {};

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    if (!readsStore[slug]) {
      readsStore[slug] = 200; // Base count
    }
    readsStore[slug]++;

    return NextResponse.json({ totalReads: readsStore[slug] });
  } catch (error) {
    console.error("Error recording read:", error);
    return NextResponse.json({ error: "Failed to record read" }, { status: 500 });
  }
}
