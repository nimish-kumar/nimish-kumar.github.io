import { Card } from "@components";
import { FaHeart } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <span style={{ marginBottom: "4rem", fontWeight: 400 }}>
          {`Hello there! I'm a`}&nbsp;
          <strong style={{ fontWeight: 1000 }}>fullstack developer</strong> with
          love and passion for crafting robust and innovative digital
          experiences.
        </span>
        <span className={styles.tag}>
          <span>#&nbsp;</span>
          <FaHeart color="red" size="2rem" className={styles.heart} />
          <span>&nbsp;to build</span>
        </span>
        <span className={styles.tag}>
          <span>#&nbsp;Open</span>
          <span>&nbsp;to work</span>
          <MdOutlineWork color="white" size="2rem" />
        </span>
      </div>
      <div className={styles.card}>
        <Card />
      </div>
    </div>
  );
}
