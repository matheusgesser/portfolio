import "./styles.scss";
import ProfilePic from "../../assets/profile.jpg";
import { RxDownload } from "react-icons/rx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { skills } from "./skills";

export function About({ theme, t }) {
  return (
    <article id="about" className={theme}>
      <section className="profile">
        <img src={ProfilePic} alt="Matheus front picture" />
        <a href={t("pdf")} target="_blank" rel="noreferrer">
          <RxDownload />
          {t("resume")}
        </a>
        <section className="skills">
          {skills.map(({ label, icon, major }) => (
            <Tippy
              key={label}
              placement="top"
              content={label}
              className={theme}
            >
              <img src={icon} className={major && "major"} />
            </Tippy>
          ))}
        </section>
      </section>
      <section className="content">
        {t("lang") == "br" ? (
          <p>
            Transformando código em <del data-bg="blue">páginas</del>{" "}
            <ins>experiências digitais marcantes</ins>
          </p>
        ) : (
          <p>
            Turning code into <del data-bg="blue">pages</del>{" "}
            <ins>outstanding digital experiences</ins>
          </p>
        )}
      </section>
    </article>
  );
}
