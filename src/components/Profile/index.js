import React from "react";
import styles from "./styles.module.css";

const presentation = {
  text: "Nouvellement développeur Web et anciennement Data Analyst. J'ai 6 années d'expériences dans le domaine de la data qui seront un atout dans mes futurs missions en tant que développeur Web. Je suis un accro des algorithmes, une partie de mon temps libre est consacré sur CodinGame. Je suis un développeur passionné qui réalisera tous vos projets avec enthousiasme.",
};

export default function Profile() {
  return (
    <section className={styles.profile} id="presentation">
      <h2>Presentation 😎</h2>
      <div className="col col--11">
        <p>{presentation.text}</p>
      </div>
    </section>
  );
}
