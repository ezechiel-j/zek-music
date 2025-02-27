import Image from "next/image";
import Link from "next/link";
import { lexend } from "../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";
import { months } from "@/lib/months";

interface NewsPost {
  id: number;
  title: string;
  teaser: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  thumbnailCaption: string;
  body: string;
  createdAt: Date;
  readTime: number;
  categoryId: number;
}

const page = async () => {
  const newsPosts: NewsPost[] = await prisma.newsPost.findMany();

  return (
    <ul id={styles.newsPosts}>
      {newsPosts.length > 0 ? (
        newsPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/news/${post.id}`}>
              <Image
                src={`/thumbnails16_9/${post.thumbnailSrc}`}
                alt="Zek"
                width={200}
                height={200}
                layout="responsive"
              />
              <div>
                <h3 className={lexend.className}>{post.title}</h3>
                <p>{post.teaser}</p>
                <footer>
                  <span>{`${post.createdAt.getDate()} ${months[post.createdAt.getMonth()]} ${post.createdAt.getFullYear()}`}</span>
                </footer>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p>Aucun actualité n&apos;a été publiée</p>
      )}
    </ul>
  );
};

export default page;
