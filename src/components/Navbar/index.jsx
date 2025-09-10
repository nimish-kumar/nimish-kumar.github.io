import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a
        href={
          "https://drive.google.com/file/d/1psr7xWQXsFkmZW_P_Rmu7lwwiPVkzfiw/view?usp=sharing"
        }
        download="NIMISH_KUMAR_4YOE_FRONTEND.pdf"
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
