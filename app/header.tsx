"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import styles from "./header.module.scss";
import { useState } from "react";

const menuLinks = [
  { name: "Productions", href: "/productions/videos", slug: "productions" },
  {
    name: "Services",
    href: "/services/performance/bassist-keyboardist",
    slug: "services",
  },
  { name: "Agenda", href: "/agenda", slug: "agenda" },
  { name: "News", href: "/news", slug: "news" },
  { name: "Blog", href: "/blog", slug: "blog" },
  { name: "Setup", href: "/setup", slug: "setup" },
  { name: "Contact", href: "/contact", slug: "contact" },
];

const Header = () => {
  const path = usePathname();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <header id={styles.header}>
      <h1>
        <Link href="/">
          <img src="/logos/white-transparent.svg" alt="" />
        </Link>
      </h1>

      <nav className={isClicked ? styles.active : ""}>
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
      <div
        id={styles.responsiveMenuButton}
        onClick={() => setIsClicked(!isClicked)}
      >
        <IoMenu />
      </div>
    </header>
  );
};

export default Header;
