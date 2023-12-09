import { useEffect, useState } from "react";
import styles from "./typewriter.module.css";
export default function Typewriter({
  text,
  infinite = true,
  interval = 500,
  delay = 0,
  ...typewriterProps
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    let pauseTimeout;
    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + (text.at(currentIndex) ?? ""));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);
    } else if (infinite) {
      if (delay) {
        pauseTimeout = setTimeout(() => {
          setCurrentIndex(0);
          setCurrentText("");
        }, delay);
      } else {
        setCurrentIndex(0);
        setCurrentText("");
      }
    }

    return () => {
      clearTimeout(timeout);
      if (delay) {
        clearTimeout(pauseTimeout);
      }
    };
  }, [currentIndex, interval, infinite, text, delay]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div {...typewriterProps}>{currentText ? currentText : <>&nbsp;</>}</div>
      <div className={styles.blinkingCursor} />
    </div>
  );
}
