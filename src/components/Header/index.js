import React from 'react';
import styles from './styles.module.css';
import cv from '@site/static/pdf/CV-Yusuf-DEMIRYUREK.pdf';
import photo from '@site/static/img/Yusuf_profil.jpg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
      {/* <img className={styles.img}
        src={photo} /> */}
        <h1 className={styles.h1}>Yusuf Demiryurek</h1>
      </div>
      <p className={styles.p}>Développeur Web <strong className={styles.color}>Full-Stack&nbsp;</strong>
        <a style={{display:'none'}} target="\_blank" href={cv}> Mon CV </a>
        </p>
    </header>
  )
}

export default Header