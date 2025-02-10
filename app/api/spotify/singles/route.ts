// app/api/spotify/singles/route.ts
import { NextResponse } from "next/server";

const ARTIST_ID = "2OAe5vTueXJySE7CXJJpaA"; // Replace with your actual artist ID

export async function GET() {
  try {
    let tokenRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/token`
    );
    let tokenData = await tokenRes.json();

    if (!tokenData.accessToken) {
      console.warn("No access token, retrying...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
      tokenRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/token`
      );
      tokenData = await tokenRes.json();
    }

    if (!tokenData.accessToken)
      throw new Error("Failed to retrieve valid token");

    const res = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single`,
      {
        headers: { Authorization: `Bearer ${tokenData.accessToken}` },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch singles");

    const data = await res.json();
    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
