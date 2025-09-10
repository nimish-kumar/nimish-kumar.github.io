import { Card } from "@components";
import { Navbar } from "../../components";
import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.left}></div>
      <div className={`${styles.right} ${styles.cardContainer}`}>
        <Card />
      </div>
    </div>
  );
}

export default Home;
