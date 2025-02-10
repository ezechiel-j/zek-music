import styles from "./page.module.scss";
import Singles from "./Singles";

export default function page() {
  return (
    <ul id={styles.audiosList}>
      <Singles />
    </ul>
  );
}
