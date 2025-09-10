import { Card, Navbar } from "@components";
import { FaHeart } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.left}>
        <span style={{ marginBottom: "4rem", fontWeight: 400 }}>
          {`Hello there! I'm a`}&nbsp;
          <strong style={{ fontWeight: 1000 }}>fullstack developer</strong> with
          love and passion for crafting robust and innovative digital
          experiences.
        </span>
        <span className={styles.tag}>
          #&nbsp;
          <FaHeart color="red" size="2rem" className={styles.heart} />
          &nbsp;to build
        </span>
        <span className={styles.tag}>
          #&nbsp;Open to work
          <MdOutlineWork color="white" size="2rem" />
        </span>
      </div>
      <div className={`${styles.right} ${styles.cardContainer}`}>
        <Card />
      </div>
    </div>
  );
}

export default Home;
