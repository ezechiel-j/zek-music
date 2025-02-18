import Form from "next/form";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import { lexend } from "../fonts";
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
      <Form action="" id={styles.mailForm}>
        <div className={styles.formLine}>
          <div className={styles.inputContainer}>
            <label htmlFor="firstName" className={lexend.className}>
              Prénom
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              placeholder="John"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lastName" className={lexend.className}>
              Nom
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Doe"
            />
          </div>
        </div>
        <div className={styles.formLine}>
          <div className={styles.inputContainer}>
            <label htmlFor="email" className={lexend.className}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="nom.prenom@mail.com"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="organisation" className={lexend.className}>
              Nom de l&apos;organisation
            </label>
            <input
              type="text"
              name="organisation"
              id="organisation"
              placeholder="(nom d'entreprise, d'association, etc...)"
            />
          </div>
        </div>
        <div className={styles.formLine}>
          <div className={styles.inputContainer}>
            <label htmlFor="subject" className={lexend.className}>
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Quel est le sujet de votre message ?"
            />
          </div>
        </div>
        <div className={styles.formLine}>
          <div className={styles.inputContainer}>
            <label htmlFor="message" className={lexend.className}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              autoCapitalize="on"
              spellCheck="true"
              autoCorrect="on"
              rows={9}
              required
              placeholder="Écrivez votre message ici"
            ></textarea>
          </div>
        </div>
        <button type="submit">Envoyer</button>
      </Form>
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
