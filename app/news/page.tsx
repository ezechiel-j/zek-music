import Form from "next/form";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { lexend } from "../fonts";
import NewsNav from "./newsNav";
import styles from "./page.module.scss";

const page = () => {
  const posts = [
    {
      id: 1,
      title: "Intégrer Storybook, Drupal et Vite et Drupal et Vite et Drupal",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2 janv. 2023",
    },

    {
      id: 2,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2023-03-01",
    },

    {
      id: 3,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2023-03-01",
    },

    {
      id: 4,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2023-03-01",
    },

    {
      id: 5,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2023-03-01",
    },

    {
      id: 6,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2023-03-01",
    },
  ];

  return (
    <div id={styles.newsContainer}>
      <header id={styles.pageHeader}>
        <div id={styles.headerTop}>
          <Form action="/news/search" id={styles.searchForm}>
            <input
              type="search"
              name="title"
              placeholder="Rechercher un article"
            />
            <button type="submit">
              <IoIosSearch size={30} />
            </button>
          </Form>

          <NewsNav />

          <select name="" id={styles.dateSort}>
            <option value="latest">Les plus récents</option>
            <option value="oldest">Les plus anciens</option>
          </select>
        </div>
      </header>

      <ul id={styles.newsPosts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/news/post-1">
              <img src="/backgrounds/clip-sevenProd.jpg" alt="" />
              <div>
                <h3 className={lexend.className}>{post.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, qui! Magni libero unde temporibus, ex et
                  aspernatur, distinctio illum ipsam nihil est ea doloremque
                  similique voluptatum omnis eaque sunt obcaecati?
                </p>
                <footer>
                  <span>{post.date}</span>
                </footer>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
