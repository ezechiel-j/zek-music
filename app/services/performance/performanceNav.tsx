"use client";

import Link from "next/link";
import styles from "../subNav.module.scss";
import { usePathname } from "next/navigation";

const performanceLinks = [
  {
    name: "Basse et clavier",
    href: "/services/performance/bassist-keyboardist",
    slug: "bassist-keyboardist",
  },
  {
    name: "Composition",
    href: "/services/performance/composition",
    slug: "composition",
  },
];

const PerformanceNav = () => {
  const pathname = usePathname();

  return (
    <ul id={styles.navList}>
      {performanceLinks.map((link) => (
        <li key={link.slug}>
          <Link
            href={link.href}
            className={pathname.includes(link.slug) ? styles.active : ""}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PerformanceNav;
