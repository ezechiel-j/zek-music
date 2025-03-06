import Image from "next/image";
import Link from "next/link";
import { lexend } from "../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";

const page = async () => {
  const posts = await prisma.blogPost.findMany({
    include: {
      category: true,
    },
  });

  return (
    <ul id={styles.blogList}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <Image
              src={`/blog/${post.thumbnailSrc}`}
              alt={post.thumbnailAlt}
              width={200}
              height={200}
              layout="responsive"
            />
            <div>
              <h4>{post.category.name}</h4>
              <h3 className={lexend.className}>{post.title}</h3>
              <span>{`${post.readTime} min`}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
