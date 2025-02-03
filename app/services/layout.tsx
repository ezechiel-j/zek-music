import styles from "./layout.module.scss";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.servicesContainer}>
      <nav id={styles.servicesNav}>
        <CategoryNav
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ServiceLayout;
