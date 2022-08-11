import React from "react";
import styles from "./styles.module.css";
import certifJavaScript from "@site/static/img/certifications/javascript.jpg";
import certifPHP from "@site/static/img/certifications/php.jpg";

const certifications = [
  {
    name: "JavaScript",
    url: "https://www.codingame.com/certification/kgYhHK-Aet83uyL67ZP7wQ",
    img: certifJavaScript,
  },
  {
    name: "PHP",
    url: "https://www.codingame.com/certification/xtAfESTG9fvV8e5ZEeelcQ",
    img: certifPHP,
  },
];

const CardImg = ({ name, url, img }) => (
  <div class="card margin--md padding--sm">
    <div class="card__header">

    <a
        target="_blank"
        rel="noreferrer noopener"
        href={url}
      ><h3 className={styles.title}>Certification {name}</h3></a>
      
    </div>
    <div class="card__image">
            <a
        target="_blank"
        rel="noreferrer noopener"
        href={url}
      ><img src={img} alt={`Certification ${name}`} /></a>
    </div>
  </div>
);

export default function Certification() {
  return (
    <section className={styles.certification} id="certification">
      <h2>Certifications 🎓</h2>
      <div className={styles.certificationCards}>
        {certifications.map((certification) => (
          <CardImg {...certification} />
        ))} 
      </div>
    </section>
  );
}
