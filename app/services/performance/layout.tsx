import styles from "../subLayout.module.scss";
import PerformanceNav from "./performanceNav";

const ServiceCategoryLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.container}>
      <nav>
        <PerformanceNav />
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ServiceCategoryLayout;
