import Typewriter from "../Typewriter";
import styles from "./card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <span className={styles.cardContent}>
        <Typewriter
          text={"nimish_kumar;"}
          interval={200}
          delay={2000}
          className={styles.fullName}
        />
        <h3 className={styles.designation}>FullStack developer</h3>
        <span className={styles.skills}>
          #react #typescript #node #python #django #GCP #AWS
        </span>
      </span>
      <div className={styles.blurBgImage} />
      <div className={styles.bgImage} />
    </div>
  );
}
