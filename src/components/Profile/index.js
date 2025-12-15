import React from "react";
import styles from "./styles.module.css";

const presentation = {
  text: "Technicien polyvalent orienté systèmes, électrotechnique et maintenance, issu d’un parcours initial en développement informatique et intégration applicative. Actuellement en reconversion vers des fonctions plus concrètes et terrain, j’apprécie les environnements techniques où le diagnostic, la rigueur et la résolution de problèmes sont essentiels.",
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
