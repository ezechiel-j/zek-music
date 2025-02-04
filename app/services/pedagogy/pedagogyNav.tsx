"use client";

import Link from "next/link";
import styles from "./pedagogyNav.module.scss";
import { usePathname } from "next/navigation";

const pedagogyLinks = [
  {
    name: "Solfège",
    href: "/services/pedagogy/solfege",
    slug: "solfege",
  },
  {
    name: "Basse",
    href: "/services/pedagogy/bass",
    slug: "bass",
  },
];

const PedagogyNav = () => {
  const pathname = usePathname();

  return (
    <ul id={styles.pedagogyList}>
      {pedagogyLinks.map((link) => (
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

export default PedagogyNav;
