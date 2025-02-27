import Image from "next/image";
import { lexend } from "../../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";

const page = async () => {
  const videos = await prisma.video.findMany();

  return (
    <div>
      <ul id={styles.videosList}>
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={video.videoExternalLink}
              target="_blank"
              className={styles.video}
            >
              <Image
                src={`/thumbnails16_9/${video.thumbnailSrc}`}
                alt={video.thumbnailAlt}
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className={lexend.className}>{video.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
