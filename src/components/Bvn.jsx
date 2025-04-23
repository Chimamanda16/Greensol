import React from "react";
import styles from "../Styles/Bvn.module.css";

const BvnForm = () => {
  return (
    <div className={styles.bvnContainer}>
      <div className={styles.header}>
        <h2>Enter your BVN</h2>
        <p>To further secure your account please add your BVN</p>
      </div>

      <form>
        <div className={styles.inputGroup}>
          <p className={styles.skip}>Skip</p>
          <input className={styles.bvnInput} type="text" placeholder="BVN" required />
        </div>

        <div className={styles.helperLinks}>
          <a href="#">Why we need your BVN</a>
        </div>

        <button class={styles.bvnBtn}>Continue</button>
      </form>
    </div>
  );
};

export default BvnForm;
