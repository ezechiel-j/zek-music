import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import ContactForm from "./contactForm";
import styles from "./page.module.scss";

const socials = [
  {
    title: "Compte instagram",
    slug: "instagram",
    href: "https://www.instagram.com/zek.songs/",
    icon: <FaInstagram />,
  },
  {
    title: "Compte linkedin",
    slug: "linkedin",
    href: "https://www.linkedin.com/in/ezechiel-johnstone/",
    icon: <FaLinkedin />,
  },
  {
    title: "Page facebook",
    slug: "facebook",
    href: "https://www.facebook.com/JohnstoneEzechielZek",
    icon: <FaFacebookSquare />,
  },
];

const page = () => {
  return (
    <div id={styles.contentContainer}>
      <div id={styles.message}>
        <p>Vous pouvez me contacter par message, via mes réseaux sociaux, ou</p>
        <a
          id={styles.calendlyButton}
          href="https://calendly.com/johnstone-zek/entretien"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Planifier un entretien</span>
        </a>
      </div>

      <ContactForm />

      <ul id={styles.socials}>
        {socials.map((social) => (
          <li key={social.slug}>
            <a
              id={styles.social}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
            <span>{social.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
