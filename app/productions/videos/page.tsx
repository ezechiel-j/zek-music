import { lexend } from "../../fonts";
import styles from "./page.module.scss";

const videos = [
  {
    slug: "slug1",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
  {
    slug: "slug2",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
  {
    slug: "slug3",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
  {
    slug: "slug4",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
  {
    slug: "slug5",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
  {
    slug: "slug6",
    href: "",
    thumbnail: "clip-sevenProd.jpg",
    title: "Shofukan - Snarky Puppy",
    collaboration: "Eliot Foltz",
    collaborationLink: "",
  },
];

const page = () => {
  return (
    <div>
      <ul id={styles.videosList}>
        {videos.map((video) => (
          <li key={video.slug}>
            <a href={video.href} className={styles.video}>
              <img src={`/backgrounds/${video.thumbnail}`} alt="Zek" />
              <h2 className={lexend.className}>{video.title}</h2>
            </a>
            <a href={video.collaborationLink} className={styles.collaboration}>
              {video.collaboration}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
