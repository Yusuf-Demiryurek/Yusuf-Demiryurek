import React from "react";
import styles from "./styles.module.css";

const presentation = {
  text: "Développeur et intégrateur d'applications, avec deux ans et demi d'expérience sur une plateforme iPaaS, couvrant la conception, le développement et la mise en production de flux au sein d'un système d'information multi-applicatif, ainsi que le support applicatif et le traitement des incidents associés. Fort de six années d'expérience en informatique décisionnelle et d'une formation de développeur web, je suis en mesure d'intervenir aussi bien sur le développement d'applications que sur le diagnostic et la résolution d'anomalies en production.",
};

export default function Profile() {
  return (
    <section className={styles.profile} id="presentation">
      <h2>Présentation 😎</h2>
      <div className="col col--11">
        <p className={styles.text}>{presentation.text}</p>
      </div>
    </section>
  );
}
