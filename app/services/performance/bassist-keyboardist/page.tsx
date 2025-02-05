import { lexend } from "../../../fonts";
import styles from "./page.module.scss";

const page = () => {
  return (
    <div id={styles.performancePage}>
      <div id={styles.services}>
        <div className={styles.service}>
          <header>
            <h2 className={lexend.className}>Performance scénique</h2>
            <div className={styles.priceContainer}>
              <span className={lexend.className}>350 &euro;</span>
              <span>l&apos;unité</span>
            </div>
          </header>

          <div>
            <span>Définition</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              atque ex accusantium repellendus alias.
            </span>
          </div>

          <div>
            <span>Définition</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              atque ex accusantium repellendus alias.
            </span>
          </div>
        </div>
        <div className={styles.service}>
          <header>
            <h2 className={lexend.className}>Répétition</h2>
            <div className={styles.priceContainer}>
              <span className={lexend.className}>50 &euro;</span>
              <span>l&apos;unité</span>
            </div>
          </header>
        </div>
        <div className={styles.service}>
          <header>
            <h2 className={lexend.className}>Piste audio</h2>
            <div className={styles.priceContainer}>
              <span className={lexend.className}>450 &euro;</span>
              <span>l&apos;unité</span>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default page;
