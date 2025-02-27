import { getSearchedNews } from "@/app/actions/searchNews";
import { lexend } from "@/app/fonts";
import { months } from "@/lib/months";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.scss";

interface Props {
  searchParams: Promise<{
    s: string;
  }>;
}

export default async function NewsSearch({ searchParams }: Props) {
  const posts = await getSearchedNews({ searchParams });

  return (
    <ul id={styles.newsPosts}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/news/${post.id}`}>
              <Image
                src={`/thumbnails16_9/${post.thumbnailSrc}`}
                alt={post.thumbnailAlt}
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
}
