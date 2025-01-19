"use client";

import Link from "next/link";
import styles from "./header.module.scss";

const menuLinks = [
  { name: "Productions", href: "/productions", slug: "productions" },
  { name: "Services", href: "/services", slug: "services" },
  { name: "Actualités", href: "/news", slug: "news" },
  { name: "Agenda", href: "/agenda", slug: "agenda" },
  { name: "Blog", href: "/blog", slug: "blog" },
  { name: "Contact", href: "/contact", slug: "contact" },
];

const Header = () => {
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
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <span></span>
    </header>
  );
};

export default Header;
