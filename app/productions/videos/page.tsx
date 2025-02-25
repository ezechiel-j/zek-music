import Image from "next/image";
import { lexend } from "../../fonts";
import styles from "./page.module.scss";

const videos = [
  {
    slug: "slug1",
    href: "",
    thumbnail: "shofukan-hear.png",
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
              <Image
                src={`/thumbnails16_9/${video.thumbnail}`}
                alt="Zek"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className={lexend.className}>{video.title}</h2>
            </a>
            <a
              href={video.collaborationLink}
              className={styles.collaboration}
              target="_blank"
            >
              {video.collaboration}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
