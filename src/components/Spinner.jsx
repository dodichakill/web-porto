"use client";
import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
    </div>
  </div>
);

export default Spinner;
