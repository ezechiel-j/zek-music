import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

const page = async () => {
  const collaborators = await prisma.collaborator.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div>
      <ul id={styles.collaborations}>
        {collaborators.map((collaborator) => (
          <li key={collaborator.id}>
            <Link
              href={`/productions/collaborators/${collaborator.id}`}
              className={styles.collaboratorPictureLink}
            >
              <Image
                src={`/collaborators/${collaborator.pictureSrc}`}
                alt={collaborator.pictureAlt}
                width={150}
                height={150}
                layout="responsive"
                className={styles.collaboratorPicture}
              />
            </Link>
            <Link
              href={`/productions/collaborators/${collaborator.id}`}
              className={styles.collaboratorName}
            >
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
