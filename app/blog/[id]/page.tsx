import Form from "next/form";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import { GrRevert } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { lexend } from "../../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";

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
  thumbnailSrc: string;
  thumbnailAlt: string;
  title: string;
  readTime: number;
  body: string;
  category: Category;
}

const page = async (props: Props) => {
  const params = await props.params;

  const post: Post | null = await prisma.blogPost.findUnique({
    where: {
      id: parseInt(params.id),
    },

    include: {
      category: true,
    },
  });

  const posts: Post[] = await prisma.blogPost.findMany({
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
    <div id={styles.blogPostPage}>
      <section id={styles.post}>
        <header>
          <div id={styles.revertContainer}>
            <Link href="/blog" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>
          </div>

          <Link href={`/blog/${post!.category.slug}`} id={styles.category}>
            {post!.category.name}
          </Link>
          <h2 className={lexend.className}>{post!.title}</h2>
          <div id={styles.readTime}>
            <FaRegClock />
            <span>{`${post!.readTime} min`}</span>
          </div>
        </header>

        <p>{post!.body}</p>

        <footer>
          <div id={styles.revertContainer}>
            <Link href="/blog" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>

            <Form action="/blog/search" id={styles.searchForm}>
              <input
                type="search"
                name="s"
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
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <span>{post.category.name}</span>
                <h3 className={lexend.className}>{post.title}</h3>
                <span>{`${post.readTime} min`}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default page;
