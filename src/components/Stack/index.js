import React from "react";
import styles from "./styles.module.css";

import FeatureList from "@site/src/components/FeatureList";

import html from "@site/static/img/icon/html.png";
import css from "@site/static/img/icon/css.png";
import javascript from "@site/static/img/icon/javascript.png";
import react from "@site/static/img/icon/react.png";
import npm from "@site/static/img/icon/npm.png";
import yarn from "@site/static/img/icon/yarn.png";
import nodejs from "@site/static/img/icon/nodejs.png";
import mongodb from "@site/static/img/icon/mongodb.png";
import bootstrap from "@site/static/img/icon/bootstrap.png";
import github from "@site/static/img/icon/github.png";
import redux from "@site/static/img/icon/redux.png";
import php from "@site/static/img/icon/php.png";
import laravel from "@site/static/img/icon/laravel.png";
import mysql from "@site/static/img/icon/mysql.png";
import expressjs from "@site/static/img/icon/expressjs.png";

function gridItem(title, src) {
  return {
    title: title,
    src: src,
  };
}

const featuresAlreadyUse = [
  gridItem("JavaScipt", javascript),
  gridItem("React", react),
  gridItem('Redux', redux),
  gridItem('PHP', php),
  gridItem('Laravel', laravel),
  gridItem('MySql', mysql),
  gridItem('GitHub', github),
  gridItem("NPM", npm),
  gridItem("Yarn", yarn),
  gridItem("HTML", html),
  gridItem("CSS", css),
  gridItem('Bootstrap', bootstrap),
];

const featuresToLearn = [
  gridItem('React Native', react),
  gridItem("Node.js", nodejs),
  gridItem('Express.js', expressjs),
  gridItem("MongoDB", mongodb),
];

export default function Stack() {
  return (
    <section className={styles.stack} id="competence">
      <h2>Langages et outils 🖥️</h2>
      <h3>Utilisés</h3>

      <FeatureList data={featuresAlreadyUse} />

      <h3>En cours d'apprentissage</h3>

      <FeatureList data={featuresToLearn} />

    </section>
  );
}
