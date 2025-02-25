import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div id={styles.galleryItemPage}>
      <figure id={styles.galleryItemContainer}>
        <IoIosArrowDropleftCircle />
        <Image
          src="/galleryItems/shofukan-hear.png"
          alt="Zek"
          width={200}
          height={200}
          layout="responsive"
          priority
        />
        <IoIosArrowDroprightCircle />
      </figure>

      <div id={styles.galleryItemInfo}>
        <p id={styles.galleryItemDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
          laboriosam neque, labore nobis natus at totam fuga eum doloribus iste
          eaque omnis facere dignissimos tenetur molestias qui blanditiis eius.
        </p>
        <div id={styles.galleryItemTagsContainer}>
          <h2>Collaborations :</h2>
          <ul id={styles.galleryItemTags}>
            <li>
              <Link href="" target="_blank">
                Naj B fit
              </Link>
            </li>
            <li>
              <Link href="" target="_blank">
                Eliot
              </Link>
            </li>
            <li>
              <Link href="" target="_blank">
                Zek
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
