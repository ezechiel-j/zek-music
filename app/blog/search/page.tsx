import { getSearchedBlog } from "@/app/actions/searchBlog";
import { lexend } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";

interface Props {
  searchParams: Promise<{
    s: string;
  }>;
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

export default async function BlogSearch({ searchParams }: Props) {
  const posts: Post[] = await getSearchedBlog({ searchParams });

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
}
