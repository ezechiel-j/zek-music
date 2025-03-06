import Image from "next/image";
import { lexend } from "../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";

const page = async () => {
  const setupItems = await prisma.setupItem.findMany();

  return (
    <ul id={styles.setupList}>
      {setupItems.map((setupItem) => (
        <li key={setupItem.id}>
          <Image
            src={`/setup/${setupItem.thumbnailSrc}`}
            alt={setupItem.thumbnailAlt}
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <span>{setupItem.constructor}</span>
            {setupItem.series && <span>{setupItem.series}</span>}
            <h4 className={lexend.className}>{setupItem.model}</h4>
          </div>
          <a href={setupItem.externalLink} target="_blank">
            Détails
          </a>
        </li>
      ))}
    </ul>
  );
};

export default page;
