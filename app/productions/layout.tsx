import styles from "./layout.module.scss";
import ProductionNav from "./productionNav";

const ProductionLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.productionPage}>
      <nav id={styles.productionNav}>
        <ProductionNav />
      </nav>

      {children}
    </div>
  );
};

export default ProductionLayout;
