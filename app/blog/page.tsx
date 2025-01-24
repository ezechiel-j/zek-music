import Link from "next/link";
import styles from "./page.module.scss";
import { lexend } from "../fonts";

const page = () => {
  const posts = [
    {
      id: 1,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },

    {
      id: 2,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },

    {
      id: 3,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },

    {
      id: 4,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },

    {
      id: 5,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },

    {
      id: 6,
      title: "Let's go we're going out !",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      duration: "1h30",
      date: "2023-03-01",
    },
  ];

  return (
    <div id={styles.blogContainer}>
      <header id={styles.pageHeader}>
        <h2>Blog</h2>
      </header>
      <ul id={styles.blogPosts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/blog/post-1">
              <img src="/backgrounds/clip-sevenProd.jpg" alt="" />
              <h3 className={lexend.className}>{post.title}</h3>
              <p>{post.description}</p>
              <footer>
                <span>{post.duration}</span>
                <span>{post.date}</span>
              </footer>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
