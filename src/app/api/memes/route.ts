import { NextResponse, NextRequest } from "next/server";
import memes from "../../(data)/database";

export async function GET() {
  return NextResponse.json(memes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  memes.unshift(body);

  return NextResponse.json(memes);
}