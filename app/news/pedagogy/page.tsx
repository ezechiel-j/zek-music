import { lexend } from "@/app/fonts";
import { months } from "@/lib/months";
import styles from "../page.module.scss";
import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";

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
  const newsPosts: NewsPost[] = await prisma.newsPost.findMany({
    where: {
      categoryId: 2,
    },
  });

  return (
    <ul id={styles.newsPosts}>
      {newsPosts.map((post) => (
        <li key={post.id}>
          <Link href={`news/${post.id}`}>
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
      ))}
    </ul>
  );
};

export default page;
