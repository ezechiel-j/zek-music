"use client";

import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { lexend } from "../../fonts";
import styles from "./singles.module.scss";

type Single = {
  id: string;
  images: { url: string }[];
  name: string;
  album_type: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
};

export default function Singles() {
  const [singles, setSingles] = useState<Single[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingles = async () => {
      try {
        // Fetch token first
        const tokenRes = await fetch("/api/spotify/token");
        const { accessToken } = await tokenRes.json();

        if (!accessToken) {
          console.error("No access token available");
          return;
        }

        // Fetch singles after getting the token
        const res = await fetch("/api/spotify/singles");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setSingles(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSingles();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (singles.length === 0) return <p>Loading singles...</p>;

  return singles.map((single) => (
    <li key={single.id} className={styles.audio}>
      <div className={styles.audioInfo}>
        <img src={single.images[1].url} alt={single.name} />
        <div className={styles.audioDescription}>
          <h2 className={lexend.className}>{single.name}</h2>
          <span>{single.album_type}</span>
          <span>{single.artists[0].name}</span>
        </div>
      </div>

      <footer>
        <ul>
          <li>
            <a
              href={single.external_urls.spotify}
              title="Spotify"
              target="_blank"
            >
              <FaSpotify />
            </a>
          </li>
        </ul>
      </footer>
    </li>
  ));
}
