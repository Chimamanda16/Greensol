import React from 'react'
import styles from "../Styles/Gender.module.css";

const Gender = () => {
  return (
    <div className={styles.gender} >
        <h3>Let's get to know you better</h3>
        <p>Please enter your real information, the same details on your ID</p>
        <div className={styles.genderFormCont}>
            <form className={styles.genderForm}>
                <div className={styles.genderContainer}>
                    <img className={styles.genderIcon} src="../images/user.svg" alt="User Icon" />
                    <select className={styles.genderInput} defaultValue="Gender">
                        <option value="Gender" disabled>Gender</option>
                        <option value="Male">Female</option>
                        <option value="Female">Male</option>
                    </select>
                </div>
                <div className={styles.dobContainer}>
                    <img className={styles.genderIcon} src="../images/dob.svg" alt="User Icon" />
                    <input type="text" placeholder="Date of birth" className={styles.dobInput} />
                </div>
                <button className={styles.genderBtn}>Continue</button>
            </form>
        </div>
    </div>

  )
}

export default Gender
