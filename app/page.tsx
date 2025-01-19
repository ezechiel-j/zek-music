import Link from "next/link";
import { lexend } from "./fonts";
import styles from "./page.module.scss";

const page = () => {
  return (
    <>
      <div id={styles.background}></div>
      <div id={styles.pageContainer}>
        <h2>
          Ma <span className={lexend.className}>vie</span>
          <br></br>par mon <span className={lexend.className}>art</span>
        </h2>
        <div id={styles.knowMe}>
          <Link href="/">Me connaître</Link>
        </div>
      </div>
    </>
  );
};

export default page;
