import styles from "./serviceCard.module.scss";
import { lexend } from "../fonts";

interface Props {
  name: string;
  price: number;
  unit: string;
  description: string;
}

const ServiceCard = ({ name, price, unit, description }: Props) => {
  return (
    <div className={styles.service}>
      <header>
        <h2 className={lexend.className}>{name}</h2>
        <div className={styles.priceContainer}>
          <span className={lexend.className}>{price} &euro;</span>
          <span>/{unit}</span>
        </div>
      </header>

      <div className={styles.serviceDescription}>
        <div className={styles.serviceInfo}>
          <span>Description :</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
