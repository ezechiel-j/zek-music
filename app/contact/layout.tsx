import ContactLinks from "./contactLinks";
import styles from "./layout.module.scss";

const ContactLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.contactContainer}>
      <nav>
        <ContactLinks />
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ContactLayout;
