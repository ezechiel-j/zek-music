import styles from "./layout.module.scss";
import ServiceCategories from "./servicesCategoriesNav";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.servicesContainer}>
      <nav id={styles.servicesNav}>
        <ServiceCategories />
      </nav>

      <div id={styles.servicesContent}>{children}</div>
    </div>
  );
};

export default ServiceLayout;
