"use client";

import Link from "next/link";
import styles from "./blogNav.module.scss";
import { usePathname } from "next/navigation";

const newsCategories = [
  {
    name: "Entrepreneuriat",
    slug: "entrepreneurship",
    href: "/blog/entrepreneurship",
  },
  { name: "Sagesse", slug: "wisdom", href: "/blog/wisdom" },
];

const BlogNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul id={styles.blogNav}>
        {newsCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={category.href}
              className={pathname.includes(category.slug) ? styles.active : ""}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogNav;
