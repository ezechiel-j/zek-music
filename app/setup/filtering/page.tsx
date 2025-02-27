import { getFilteredSetup } from "@/app/actions/filterSetup";
import styles from "../page.module.scss";
import Image from "next/image";
import { lexend } from "@/app/fonts";

interface Props {
  searchParams: Promise<{
    type: string[] | string;
    place: string[] | string;
    role: string[] | string;
  }>;
}

const page = async ({ searchParams }: Props) => {
  const filteredSetupItems = await getFilteredSetup({
    searchParams,
  });

  return (
    <ul id={styles.setupList}>
      {filteredSetupItems.map((setupItem) => (
        <li key={setupItem.id}>
          <Image
            src={`/thumbnails16_9/${setupItem.thumbnailSrc}`}
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
