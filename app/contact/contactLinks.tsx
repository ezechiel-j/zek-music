"use client";

import Link from "next/link";
import styles from "./contactLink.module.scss";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Par mail", href: "/contact/mail", slug: "mail" },
  { name: "Planifier un entretien", href: "/contact/meeting", slug: "meeting" },
];

const ContactLinks = () => {
  const pathname = usePathname();

  return (
    <ul id={styles.contactLinks}>
      {navLinks.map((link) => (
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

export default ContactLinks;
