// app/api/spotify/singles/route.ts
import { NextResponse } from "next/server";

const ARTIST_ID = "2OAe5vTueXJySE7CXJJpaA"; // Replace with your actual artist ID

export async function GET() {
  try {
    // Get a valid Spotify access token
    const tokenRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/token`
    );
    const tokenData = await tokenRes.json();

    if (!tokenData.accessToken) {
      return NextResponse.json(
        { error: "Failed to retrieve Spotify token" },
        { status: 500 }
      );
    }

    // Fetch singles from Spotify API
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single&market=US`,
      {
        headers: { Authorization: `Bearer ${tokenData.accessToken}` },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch singles from Spotify" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data.items); // Return singles directly
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
