"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const menuLinks = [
  { name: "Productions", href: "/productions/videos", slug: "productions" },
  {
    name: "Services",
    href: "/services/performance/bassist-keyboardist",
    slug: "services",
  },
  { name: "News", href: "/news", slug: "news" },
  { name: "Agenda", href: "/agenda", slug: "agenda" },
  { name: "Blog", href: "/blog", slug: "blog" },
  { name: "Setup", href: "/setup", slug: "setup" },
  { name: "Contact", href: "/contact/mail", slug: "contact" },
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
                <span>{link.name}</span>
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
