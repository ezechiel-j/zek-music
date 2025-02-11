"use client";

import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { lexend } from "../../fonts";
import styles from "./singles.module.scss";
import { SiTidal } from "react-icons/si";
import { FaDeezer } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiAmazonmusic } from "react-icons/si";

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
          <li>
            <a
              href="https://tidal.com/browse/track/395971255"
              title="Tidal"
              target="_blank"
            >
              <SiTidal />
            </a>
          </li>
          <li>
            <a
              href="https://deezer.page.link/8XgDQr9qnSR4UW4F7"
              title="Deezer"
              target="_blank"
            >
              <FaDeezer />
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241"
              title="Apple Music"
              target="_blank"
            >
              <SiApplemusic />
            </a>
          </li>
          <li>
            <a
              href="https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK"
              title="Amazon Music"
              target="_blank"
            >
              <SiAmazonmusic />
            </a>
          </li>
        </ul>
      </footer>
    </li>
  ));
}
