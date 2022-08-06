import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";


export default function GridList({
  data }) {
  return (
    <div className={styles.flex}>
      {data.map((item) => {
        return (
          <div key={item.title} className={clsx(styles.cardWrapper)}>
              <img
                src={item.src}
                className={clsx(styles.image)}
                alt={item.title}
              />
            <div className={styles.title}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}