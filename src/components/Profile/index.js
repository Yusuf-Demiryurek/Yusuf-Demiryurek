import React from "react";
import styles from "./styles.module.css";

const presentation = {
  text: "Développeur Fullstack et intégrateur ESB, je dispose d’une double compétence en développement web et en analyse de données. Actuellement en reconversion, je recherche un poste plus concret, orienté technique, terrain ou maintenance. Curieux, rigoureux et passionné par les environnements techniques, j’aime résoudre les problèmes de façon efficace.",
};

export default function Profile() {
  return (
    <section className={styles.profile} id="presentation">
      <h2>Presentation 😎</h2>
      <div className="col col--11">
        <p className={styles.text}>{presentation.text}</p>
      </div>
    </section>
  );
}
