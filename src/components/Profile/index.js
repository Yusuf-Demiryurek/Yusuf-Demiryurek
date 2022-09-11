import React from "react";
import styles from "./styles.module.css";

const presentation = {
  text: "Nouvellement développeur Web et anciennement Data Analyst. Je suis un accro des algorithmes, une partie de mon temps libre est consacrée sur CodinGame. J'ai fait des études en statistiques et après l’obtention de mon master, j'ai travaillé pendant six ans dans le domaine de la data. Je me suis rendu compte que finalement, ce qui m'intéressait le plus dans mon précédent métier, c'était toute la partie programmation et les algorithmes. A la suite de la liquidation de l'entreprise où je travaillais, j'ai saisi l'opportunité de suivre une formation chez O’clock afin de me reconvertir en tant que développeur. Je suis un développeur passionné qui réalisera tous vos projets avec enthousiasme !",
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
