// app/api/spotify/token/route.ts
import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

const clientId = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const TOKEN_URL = "https://accounts.spotify.com/api/token";

// Function to fetch a new token
async function fetchNewToken() {
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }).toString(),
  });

  if (!res.ok) throw new Error("Failed to fetch Spotify token");

  const data = await res.json();
  const accessToken = data.access_token;
  const expiresIn = data.expires_in * 1000; // Convert seconds to milliseconds
  const expirationTime = Date.now() + expiresIn - 60000; // Expire cache 1 min before token expiration

  return { accessToken, expiresAt: expirationTime };
}

// Cache the token using Next.js unstable_cache
const getCachedToken = unstable_cache(fetchNewToken, [], {
  revalidate: 60 * 59, // Cache revalidates every 59 minutes
});

export async function GET() {
  try {
    const { accessToken, expiresAt } = await getCachedToken();
    return NextResponse.json({ accessToken, expiresAt });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get Spotify token" },
      { status: 500 }
    );
  }
}
