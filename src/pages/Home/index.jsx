import { Card } from "@components";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <span>I am fullstack developer.</span>
      </div>
      <div className={styles.card}>
        <Card />
      </div>
    </div>
  );
}
