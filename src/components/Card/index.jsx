import { Tooltip } from "antd";
import { useRef } from "react";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
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
    tooltipText: "/nimish-kumar",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nimishk642",
    icon: <BiLogoLinkedin size="2rem" color="white" />,
    tooltipText: "/nimishk642",
  },
];

export default function Card({ skew = true }) {
  const cardRef = useRef(null);
  const rotateCard = (event) => {
    // get mouse position
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
    element.style.setProperty("--rotateX", `${-1 * offsetY}deg`);
    element.style.setProperty("--rotateY", `${offsetX}deg`);
  };
  const resetRotate = () => {
    const element = cardRef.current;
    element.style.setProperty("--rotateX", "20deg");
    element.style.setProperty("--rotateY", "-20deg");
  };

  return (
    <div
      className={skew ? styles.wrapper : ""}
      onMouseMove={rotateCard}
      onMouseLeave={resetRotate}
      ref={(node) => (cardRef.current = node)}
    >
      <div className={styles.card}>
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
                  >
                    {social.icon}
                  </a>
                </div>
              </Tooltip>
            ))}
          </div>
        </span>
        <div className={styles.bgImage} />
        <div className={styles.blurBgImage} />
      </div>
    </div>
  );
}
