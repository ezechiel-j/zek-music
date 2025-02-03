import styles from "./page.module.scss";
import { lexend } from "../fonts";
import Link from "next/link";
import Form from "next/form";
import { IoIosSearch } from "react-icons/io";

const page = () => {
  return (
    <div id={styles.blogContainer}>
      <header id={styles.blogHeader}>
        <Form action="/blog/search" id={styles.searchForm}>
          <input
            type="search"
            name="title"
            placeholder="Rechercher un article"
          />
          <button type="submit">
            <IoIosSearch size={30} />
          </button>
        </Form>
      </header>
      <ul id={styles.blogList}>
        <li>
          <Link href="">
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
            <div>
              <h4>Sleep & hygiene</h4>
              <h3 className={lexend.className}>Ma recherche d'alternance</h3>
              <span>13 min</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="">
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
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
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
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
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
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
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
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
            <img src="/backgrounds/clip-sevenProd.jpg" alt="Zek" />
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
    </div>
  );
};

export default page;
