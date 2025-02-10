import styles from "../subLayout.module.scss";
import PedagogyNav from "./pedagogyNav";

const ServiceCategoryLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.container}>
      <nav>
        <PedagogyNav />
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ServiceCategoryLayout;
