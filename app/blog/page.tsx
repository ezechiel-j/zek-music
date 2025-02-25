import Image from "next/image";
import Link from "next/link";
import { lexend } from "../fonts";
import styles from "./page.module.scss";

const page = () => {
  return (
    <ul id={styles.blogList}>
      <li>
        <Link href="/blog/1">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Sleep & hygiene</h4>
            <h3 className={lexend.className}>Ma recherche d&apos;alternance</h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>

      <li>
        <Link href="">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Category</h4>
            <h3 className={lexend.className}>
              Blog article title title title title title title title title
            </h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>

      <li>
        <Link href="">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Category</h4>
            <h3 className={lexend.className}>
              Blog article title title title title title title title title
            </h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>

      <li>
        <Link href="">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Category</h4>
            <h3 className={lexend.className}>
              Blog article title title title title title title title title
            </h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>

      <li>
        <Link href="">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Category</h4>
            <h3 className={lexend.className}>
              Blog article title title title title title title title title
            </h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>

      <li>
        <Link href="">
          <Image
            src="/backgrounds/clip-sevenProd.jpg"
            alt="Zek"
            width={200}
            height={200}
            layout="responsive"
          />
          <div>
            <h4>Category</h4>
            <h3 className={lexend.className}>
              Blog article title title title title title title title title
            </h3>
            <span>13 min</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default page;
