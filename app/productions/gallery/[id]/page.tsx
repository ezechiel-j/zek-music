import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import styles from "./page.module.scss";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async (props: Props) => {
  const { id } = await props.params;

  const galleryItem = await prisma.galleryImage.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  // Find previous and next images based on createdAt timestamp
  const [previousImage, nextImage] = await Promise.all([
    prisma.galleryImage.findFirst({
      where: { createdAt: { lt: galleryItem!.createdAt } },
      orderBy: { createdAt: "desc" },
      select: { id: true },
    }),

    prisma.galleryImage.findFirst({
      where: { createdAt: { gt: galleryItem!.createdAt } },
      orderBy: { createdAt: "asc" },
      select: { id: true },
    }),
  ]);

  const collaborators = await prisma.collaborator.findMany({
    where: {
      photos: {
        some: {
          galleryImageId: parseInt(id),
        },
      },
    },
  });

  return (
    <div id={styles.galleryItemPage}>
      <figure id={styles.galleryItemContainer}>
        {previousImage && (
          <Link href={`/productions/gallery/${previousImage.id}`}>
            <IoIosArrowDropleftCircle />
          </Link>
        )}
        <Image
          src={`/gallery/${galleryItem!.imgSrc}`}
          alt={galleryItem!.imgAlt}
          width={200}
          height={200}
          layout="responsive"
          priority
        />
        {nextImage && (
          <Link href={`/productions/gallery/${nextImage.id}`}>
            <IoIosArrowDroprightCircle />
          </Link>
        )}
      </figure>

      <div id={styles.galleryItemInfo}>
        <p id={styles.galleryItemDescription}>{galleryItem!.description}</p>
        {collaborators.length > 0 && (
          <div id={styles.galleryItemTagsContainer}>
            <h2>Collaborateurs :</h2>
            <ul id={styles.galleryItemTags}>
              {collaborators.map((collaborator) => (
                <li key={collaborator.id}>
                  <Link href={`/productions/collaborators/${collaborator.id}`}>
                    {collaborator.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
