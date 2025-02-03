"use client";

import Link from "next/link";
import styles from "./newsNav.module.scss";
import { usePathname } from "next/navigation";

const newsCategories = [
  {
    name: "Entrepreneuriat",
    slug: "entrepreneurship",
    href: "/news/entrepreneurship",
  },
  { name: "Développement", slug: "development", href: "/news/development" },
  { name: "Carrière", slug: "carrière", href: "/news/carreer" },
  {
    name: "Collaboration",
    slug: "collaboration",
    href: "/news/collaboration",
  },
];

const NewsNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul id={styles.newsNav}>
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

export default NewsNav;
