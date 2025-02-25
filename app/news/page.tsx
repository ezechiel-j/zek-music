import Image from "next/image";
import Link from "next/link";
import { lexend } from "../fonts";
import styles from "./page.module.scss";

const page = () => {
  const posts = [
    {
      id: 1,
      src: "shofukan-hear.png",
      title: "Intégrer Storybook, Drupal et Vite et Drupal et Vite et Drupal",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum, sint sed iste voluptas est cumque ipsa consequatur impedit dolore quo facere corrupti fugiat! Nihil, eaque? Modi nam dicta ab.",
      date: "2 janv. 2023",
    },
  ];

  return (
    <ul id={styles.newsPosts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/news/post-1">
            <Image
              src={`/thumbnails16_9/${post.src}`}
              alt="Zek"
              width={200}
              height={200}
              layout="responsive"
            />
            <div>
              <h3 className={lexend.className}>{post.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, qui! Magni libero unde temporibus, ex et aspernatur,
                distinctio illum ipsam nihil est ea doloremque similique
                voluptatum omnis eaque sunt obcaecati?
              </p>
              <footer>
                <span>{post.date}</span>
              </footer>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
