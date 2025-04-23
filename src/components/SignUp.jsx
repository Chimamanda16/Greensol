import styles from "../Styles/SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <h3>Create a new account</h3>
      <p>Ready to power up your bill management? Enter your details to continue</p>
      <form className={styles.signupForm}>
        <div className={styles.nameContainer}>
          <div className={styles.firstNameContainer}>
            <img className={styles.formIcon} src="../images/user.svg" alt="User Icon" />
            <input type="text" placeholder="First Name" className={styles.nameInput} />
          </div>
          <div className={styles.lastNameContainer}>
            <img className={styles.formIcon} src="../images/user.svg" alt="User Icon" />
            <input type="text" placeholder="Last Name" className={styles.nameInput} />
          </div>
        </div>
        <div className={styles.emailContainer}>
          <img className={styles.formIcon} src="../images/email.svg" alt="Email Icon" />
          <input type="text" placeholder="Email Address" className={styles.emailInput} />
        </div>
        <div className={styles.passwordContainer}>
          <img className={styles.formIcon} src="../images/lock.svg" alt="Password Icon" />
          <input type="text" placeholder="Password" className={styles.passwordInput} />
          <img className={styles.formIconEye} src="../images/eye-slash.svg" alt="" />
        </div>
        <p>By creating an account, you agree to our Terms and Policies</p>
        <button className={styles.signupBtn}>Continue</button>
        <p className={styles.loginPage}>
          Already have an account? <span>Log in</span>
        </p>
        <p>OR</p>
        <div className={styles.socialWrapper}>
          <div className={styles.socialContainer}>
            <img src="../images/facebook.svg" alt="" />
            <button className={styles.socialBtn}>Continue with Google</button>
          </div>
          <div className={styles.socialContainer}>
            <img src="../images/google.svg" alt="" />
            <button className={styles.socialBtn}>Continue with Google</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
