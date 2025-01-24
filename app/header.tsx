"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const menuLinks = [
  { name: "Productions", href: "/productions", slug: "productions" },
  { name: "Services", href: "/services", slug: "services" },
  { name: "Actualités", href: "/news", slug: "news" },
  { name: "Agenda", href: "/agenda", slug: "agenda" },
  { name: "Blog", href: "/blog", slug: "blog" },
  { name: "Contact", href: "/contact", slug: "contact" },
];

const Header = () => {
  const path = usePathname();

  return (
    <header id={styles.header}>
      <h1>
        <Link href="/">
          <img src="/logos/white-transparent.svg" alt="" />
        </Link>
      </h1>

      <nav>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.slug}>
              <Link
                href={link.href}
                className={path.includes(link.slug) ? styles.active : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <span></span>
    </header>
  );
};

export default Header;
