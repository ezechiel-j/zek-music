"use client";

import Form from "next/form";
import { useActionState } from "react";
import sendEmail from "@/app/actions/sendEmails";
import { lexend } from "../fonts";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
  const [state, formAction] = useActionState(sendEmail, {
    success: false,
    error: null,
  });

  return (
    <Form action={formAction} id={styles.mailForm}>
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
      {state.success && (
        <p id={styles.successMessage}>Message envoyé avec succès !</p>
      )}

      {state.error && (
        <p id={styles.errorMessage}>Une erreur est survenue : {state.error}</p>
      )}
    </Form>
  );
};

export default ContactForm;
