import FilterForm from "./setupFilter";
import styles from "./layout.module.scss";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.setupContainer}>
      <aside id={styles.filters}>
        <FilterForm />
      </aside>

      {children}
    </div>
  );
};

export default ServiceLayout;
