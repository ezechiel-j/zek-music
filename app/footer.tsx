import Link from "next/link";
import styles from "./footer.module.scss";

const footerlinks = [
  { name: "Accessibilité", href: "/accessibility", slug: "accessibility" },
];

const Footer = () => {
  return (
    <footer>
      <ul id={styles.footerLinks}>
        {footerlinks.map((link) => (
          <li key={link.slug}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
