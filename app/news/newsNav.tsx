"use client";

import Link from "next/link";
import styles from "./newsNav.module.scss";
import { usePathname } from "next/navigation";

const newsCategories = [
  {
    name: "Performance",
    slug: "performance",
    href: "/news/performance",
  },
  { name: "Pédagogie", slug: "pedagogy", href: "/news/pedagogy" },
  { name: "Hardware", slug: "hardware", href: "/news/hardware" },
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
