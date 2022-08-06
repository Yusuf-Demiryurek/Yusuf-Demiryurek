import React from 'react';
import styles from './styles.module.css';
import cv from '@site/static/pdf/CV-Yusuf-DEMIRYUREK.pdf';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.h1}>Yusuf Demiryurek</h1>
        <p className={styles.p}>Développeur Web <strong className={styles.color}>Full-Stack&nbsp;</strong>
        <a style={{display:'none'}} target="\_blank" href={cv}> Mon CV </a>
        </p>
      </div>
    </header>
  )
}

export default Header