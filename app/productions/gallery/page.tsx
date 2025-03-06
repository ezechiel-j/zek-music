import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import prisma from "@/prisma/client";
import { TbZoomInFilled } from "react-icons/tb";

const page = async () => {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <ul id={styles.imagesList}>
      {images.map((image) => (
        <li key={image.id}>
          <Link href={`/productions/gallery/${image.id}`}>
            <Image
              src={`/gallery/${image.imgSrc}`}
              alt={image.imgAlt}
              width={200}
              height={200}
              layout="responsive"
            />
            <TbZoomInFilled />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
