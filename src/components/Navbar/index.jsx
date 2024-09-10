import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a
        href={
          "https://drive.google.com/file/d/15w3E84Wd9owgPUfw6LcQgxxrr11zpvQ4/view?usp=sharing"
        }
        download="nimish_kumar_fullstack_developer.pdf"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button
          type="link"
          shape="round"
          icon={<DownloadOutlined />}
          size={"large"}
          className={styles.downloadBtn}
        >
          Download resume
        </Button>
      </a>
    </nav>
  );
}
