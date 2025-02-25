import { lexend } from "../../../fonts";
import ServiceCard from "../../serviceCard";
import styles from "../../pageContent.module.scss";

const page = () => {
  return (
    <div id={styles.pageContent}>
      <section id={styles.services}>
        <ServiceCard
          name="Cours particulier"
          price={30}
          unit="heure"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque ex accusantium repellendus alias."
        />
      </section>
    </div>
  );
};

export default page;
