import styles from "./layout.module.scss";
import PedagogyNav from "./pedagogyNav";

const ServiceCategoryLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.pedagogyContainer}>
      <nav>
        <PedagogyNav />
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ServiceCategoryLayout;
