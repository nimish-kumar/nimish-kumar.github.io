import { QRCode, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Typewriter from "../Typewriter";
import styles from "./card.module.css";

const socials = [
  {
    name: "Email",
    url: "mailto:nimishk246@gmail.com",
    icon: <BiLogoGmail size="2rem" color="white" />,
    tooltipText: "nimishk246@gmail.com",
  },
  {
    name: "Github",
    url: "https://github.com/nimish-kumar",
    icon: <BiLogoGithub size="2rem" color="white" />,
    tooltipText: "github.com/nimish-kumar",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nimishk642",
    icon: <BiLogoLinkedin size="2rem" color="white" />,
    tooltipText: "linkedin.com/in/nimishk642",
  },
  {
    name: "X",
    url: "https://twitter.com/nimish7",
    icon: <BsTwitterX size="2rem" color="white" />,
    tooltipText: "twitter.com/nimish7",
  },
];

export default function Card({ skew = true }) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoFlipTimeoutRef = useRef(null);

  // Auto-flip back to front after 5 seconds when showing the back and not hovered
  useEffect(() => {
    if (isFlipped && !isHovered) {
      // Clear any existing timeout
      if (autoFlipTimeoutRef.current) {
        clearTimeout(autoFlipTimeoutRef.current);
      }

      // Set new timeout for 5 seconds
      autoFlipTimeoutRef.current = setTimeout(() => {
        const element = cardRef.current;
        if (element) {
          // Restore original tilted position after auto-flip
          setTimeout(() => {
            element.style.setProperty("--rotateX", "20deg");
            element.style.setProperty("--rotateY", "-20deg");
          }, 300);
        }
        setIsFlipped(false);
      }, 1000);
    } else {
      // Clear timeout when flipped back to front or hovered
      if (autoFlipTimeoutRef.current) {
        clearTimeout(autoFlipTimeoutRef.current);
        autoFlipTimeoutRef.current = null;
      }
    }

    // Cleanup timeout on unmount
    return () => {
      if (autoFlipTimeoutRef.current) {
        clearTimeout(autoFlipTimeoutRef.current);
      }
    };
  }, [isFlipped, isHovered]);

  const rotateCard = (event) => {
    // Prevent 3D rotation effect when card is flipped
    if (isFlipped) return;

    // Get mouse position
    const x = event?.clientX;
    const y = event?.clientY;

    const element = cardRef.current;
    const middleX = element.offsetWidth / 2;
    const middleY = element.offsetHeight / 2;

    const offsetX =
      ((x - (element?.offsetLeft + middleX)) /
        (element?.offsetLeft + middleX)) *
      45;
    const offsetY =
      ((y - (element?.offsetTop + middleY)) / (element?.offsetTop + middleY)) *
      45;

    // Set faster transition for 3D rotation effect
    element.style.transition = "transform 0.1s ease-in-out";
    element.style.setProperty("--rotateX", `${-1 * offsetY}deg`);
    element.style.setProperty("--rotateY", `${offsetX}deg`);
  };

  const resetRotate = () => {
    // Prevent 3D rotation effect when card is flipped
    if (isFlipped) return;

    const element = cardRef.current;
    // Set faster transition for 3D rotation effect
    element.style.transition = "transform 0.1s ease-in-out";
    element.style.setProperty("--rotateX", "20deg");
    element.style.setProperty("--rotateY", "-20deg");
  };

  const handleCardClick = (event) => {
    const element = cardRef.current;
    // Reset to flip transition speed
    element.style.transition = "transform 0.6s ease-in-out";

    if (!isFlipped) {
      // Flipping to back - determine rotation direction based on click position
      const rect = element.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const cardWidth = element.offsetWidth;

      // Determine rotation direction based on click position
      // If clicked in the right 50% portion, rotate from left to right, otherwise right to left
      const threshold = cardWidth * 0.5;

      if (clickX > threshold) {
        // Clicked on right 50% - rotate from left to right
        element.style.setProperty("--rotateDirection", "1");
      } else {
        // Clicked elsewhere - rotate from right to left
        element.style.setProperty("--rotateDirection", "-1");
      }
    } else {
      // Flipping back to front - restore original tilted position
      setTimeout(() => {
        element.style.setProperty("--rotateX", "20deg");
        element.style.setProperty("--rotateY", "-20deg");
      }, 300); // Wait for flip animation to be halfway through
    }

    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${skew ? styles.wrapper : ""} ${
        isFlipped ? styles.flipped : ""
      }`}
      onMouseMove={rotateCard}
      onMouseLeave={(e) => {
        resetRotate(e);
        handleMouseLeave();
      }}
      onMouseEnter={handleMouseEnter}
      ref={(node) => (cardRef.current = node)}
    >
      <div className={styles.card} onClick={(e) => handleCardClick(e)}>
        <span className={styles.cardContent}>
          <Typewriter
            text={"nimish kumar;"}
            interval={200}
            delay={2000}
            className={styles.fullName}
            infinite
          />
          <a
            href="https://www.google.com/maps/dir//Pune,+Maharashtra/@18.524545,73.6981553,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8567437!2d18.5204303!3e0?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.location}
            onClick={(e) => e.stopPropagation()}
          >
            <FaLocationDot color="white" size={"2rem"} />
            <span
              style={{
                fontSize: "1.5rem",
                marginLeft: "1rem",
                textShadow: "0px 0px 5px #000",
                fontWeight: 700,
                textDecoration: "none",
                color: "white",
              }}
            >
              Pune, India
            </span>
          </a>
          <h3 className={styles.designation}>FullStack developer</h3>
          <span className={styles.skills}>
            #react #typescript #node #python #django #graphql #GCP #AWS
          </span>
          <div className={styles.socials}>
            {socials.map((social, index) => (
              <Tooltip
                key={index}
                title={social.tooltipText}
                placement="bottom"
                arrow
              >
                <div className={styles.social}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {social.icon}
                  </a>
                </div>
              </Tooltip>
            ))}
          </div>
        </span>
        <div className={styles.cardBack}>
          <a
            href={socials[2].url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={styles.url}
          >
            <QRCode value={socials[2].url} size={200} color="white" />
          </a>
        </div>
        <div className={styles.bgImage} />
        <div className={styles.blurBgImage} />
      </div>
    </div>
  );
}
