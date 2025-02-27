import Link from "next/link";
import styles from "./page.module.scss";
import { lexend } from "../../fonts";
import Image from "next/image";
import Form from "next/form";
import { IoIosSearch } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrRevert } from "react-icons/gr";
import prisma from "@/prisma/client";
import { months } from "@/lib/months";

interface Props {
  params: Promise<{ id: string }>;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Post {
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
  category: Category;
}

const page = async (props: Props) => {
  const params = await props.params;

  const post: Post | null = await prisma.newsPost.findUnique({
    where: {
      id: parseInt(params.id),
    },

    include: {
      category: true,
    },
  });

  const posts: Post[] = await prisma.newsPost.findMany({
    where: {
      NOT: {
        id: parseInt(params.id),
      },
    },

    include: {
      category: true,
    },
  });

  return (
    <div id={styles.newsPostPage}>
      <section id={styles.post}>
        <header>
          <div id={styles.revertContainer}>
            <Link href="/news" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>
          </div>

          <Link href={`/news/${post!.category.slug}`} id={styles.category}>
            {post!.category.name}
          </Link>
          <h2 className={lexend.className}>{post!.title}</h2>
          <div id={styles.readDateContainer}>
            <div>
              <FaRegClock />
              <span>{`${post!.readTime} min`}</span>
            </div>
            <div>
              <span>{`${post!.createdAt.getDate()} ${months[post!.createdAt.getMonth()]} ${post!.createdAt.getFullYear()}`}</span>
            </div>
          </div>
        </header>

        <figure>
          <Image
            src={`/thumbnails16_9/${post!.thumbnailSrc}`}
            alt={post!.thumbnailAlt}
            width={400}
            height={200}
            layout="reponsive"
          />
          <figcaption>{post!.thumbnailCaption}</figcaption>
        </figure>

        <p>{post!.body}</p>

        <footer>
          <span>by Zek</span>

          <div id={styles.revertContainer}>
            <Link href="/news" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>

            <Form action="/news/search" id={styles.searchForm}>
              <input
                type="search"
                name="word"
                placeholder="Rechercher un article"
              />
              <button type="submit">
                <IoIosSearch size={30} />
              </button>
            </Form>
          </div>
        </footer>
      </section>

      <aside id={styles.postsList}>
        <ul>
          {posts.length > 0
            ? posts.map((post) => (
                <li key={post.id}>
                  <Link href={`/news/${post.id}`}>
                    <span>{post.category.name}</span>
                    <h3 className={lexend.className}>{post.title}</h3>
                    <span>{`${post.createdAt.getDate()} ${months[post.createdAt.getMonth()]} ${post.createdAt.getFullYear()}`}</span>
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </aside>
    </div>
  );
};

export default page;
