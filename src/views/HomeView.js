import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      The PhoneBook
      {/* <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span> */}
    </h1>
  </div>
);

export default HomeView;
