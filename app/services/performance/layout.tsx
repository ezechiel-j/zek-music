import styles from "./layout.module.scss";
import PerformanceNav from "./performanceNav";

const ServiceCategoryLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.performanceContainer}>
      <nav>
        <PerformanceNav />
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default ServiceCategoryLayout;
