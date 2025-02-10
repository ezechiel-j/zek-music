// app/api/spotify/singles/route.ts
import { NextResponse } from "next/server";

const ARTIST_ID = "2OAe5vTueXJySE7CXJJpaA"; // Replace with your actual artist ID

export async function GET() {
  try {
    // Get access token from our API route
    const tokenRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/token`
    );
    const { accessToken } = await tokenRes.json();

    if (!accessToken) throw new Error("No access token available");

    // Fetch singles
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch singles");

    const data = await res.json();
    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
