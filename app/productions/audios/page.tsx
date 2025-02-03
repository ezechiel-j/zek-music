import { FaDeezer, FaSpotify } from "react-icons/fa";
import { SiAmazonmusic, SiApplemusic, SiTidal } from "react-icons/si";
import styles from "./page.module.scss";
import { lexend } from "../../fonts";

const audios = [
  {
    slug: "slug1",
    thumbnailSrc: "clip-sevenProd.jpg",
    thumbnailAlt: "Zek",
    title: "Wak Up Windn (BIG Jam Competition 2025 Best OST OST ATS)",
    type: "Single ou Album",
    artist: "Zek",

    links: [
      { title: "Spotify", href: "", icon: <FaSpotify />, slug: "spotify" },
      { title: "Tidal", href: "", icon: <SiTidal />, slug: "tidal" },
      { title: "Deezer", href: "", icon: <FaDeezer />, slug: "deezer" },
      {
        title: "Apple Music",
        href: "",
        icon: <SiApplemusic />,
        slug: "applemusic",
      },
      {
        title: "Amazon Music",
        href: "",
        icon: <SiAmazonmusic />,
        slug: "amazonmusic",
      },
    ],
  },
  {
    slug: "slug2",
    thumbnailSrc: "clip-sevenProd.jpg",
    thumbnailAlt: "Zek",
    title: "Wak Up Windn (BIG Jam Competition 2025 Best OST OST ATS)",
    type: "Single ou Album",
    artist: "Zek",

    links: [
      { title: "Spotify", href: "", icon: <FaSpotify />, slug: "spotify" },
      { title: "Tidal", href: "", icon: <SiTidal />, slug: "tidal" },
      { title: "Deezer", href: "", icon: <FaDeezer />, slug: "deezer" },
      {
        title: "Apple Music",
        href: "",
        icon: <SiApplemusic />,
        slug: "applemusic",
      },
      {
        title: "Amazon Music",
        href: "",
        icon: <SiAmazonmusic />,
        slug: "amazonmusic",
      },
    ],
  },
  {
    slug: "slug3",
    thumbnailSrc: "clip-sevenProd.jpg",
    thumbnailAlt: "Zek",
    title: "Wak Up Windn (BIG Jam Competition 2025 Best OST OST ATS)",
    type: "Single ou Album",
    artist: "Zek",

    links: [
      { title: "Spotify", href: "", icon: <FaSpotify />, slug: "spotify" },
      { title: "Tidal", href: "", icon: <SiTidal />, slug: "tidal" },
      { title: "Deezer", href: "", icon: <FaDeezer />, slug: "deezer" },
      {
        title: "Apple Music",
        href: "",
        icon: <SiApplemusic />,
        slug: "applemusic",
      },
      {
        title: "Amazon Music",
        href: "",
        icon: <SiAmazonmusic />,
        slug: "amazonmusic",
      },
    ],
  },
  {
    slug: "slug4",
    thumbnailSrc: "clip-sevenProd.jpg",
    thumbnailAlt: "Zek",
    title: "Wak Up Windn (BIG Jam Competition 2025 Best OST OST ATS)",
    type: "Single ou Album",
    artist: "Zek",

    links: [
      { title: "Spotify", href: "", icon: <FaSpotify />, slug: "spotify" },
      { title: "Tidal", href: "", icon: <SiTidal />, slug: "tidal" },
      { title: "Deezer", href: "", icon: <FaDeezer />, slug: "deezer" },
      {
        title: "Apple Music",
        href: "",
        icon: <SiApplemusic />,
        slug: "applemusic",
      },
      {
        title: "Amazon Music",
        href: "",
        icon: <SiAmazonmusic />,
        slug: "amazonmusic",
      },
    ],
  },
];

const page = () => {
  return (
    <ul id={styles.audiosList}>
      {audios.map((audio) => (
        <li key={audio.slug} className={styles.audio}>
          <div className={styles.audioInfo}>
            <img
              src={`/backgrounds/${audio.thumbnailSrc}`}
              alt={audio.thumbnailAlt}
            />
            <div className={styles.audioDescription}>
              <h2 className={lexend.className}>{audio.title}</h2>
              <span>{audio.type}</span>
              <span>{audio.artist}</span>
            </div>
          </div>

          <footer>
            <ul>
              {audio.links.map((link) => (
                <li key={link.slug}>
                  <a href={link.href} title={link.title} target="_blank">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </li>
      ))}
    </ul>
  );
};

export default page;
