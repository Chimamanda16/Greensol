import { useRef, useEffect } from 'react';
import styles from "../Styles/verifyEmail.module.css";

const VerifyEmail = () => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputs.current[0]?.focus(); // Autofocus first input
  }, []);

  return (
    <div className={styles.verify}>
      <h3>Verify Email</h3>
      <p>A verification code has been sent to you, Please enter the code</p>
      <div className={styles.otpCont}>
        <div className={styles.otpWrapper}>
            {[...Array(6)].map((_, i) => (
                <input
                    key={i}
                    maxLength="1"
                    type="text"
                    className={styles.otpInput}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (inputs.current[i] = el)}
                />
            ))}
        </div>

        <p className={styles.resendTime}>Resend Code in 1:30</p>
        <p className={styles.resendOtp}>
            <span>Resend OTP via Email?</span> Click here
        </p>
        <button className={styles.verifyBtn}>Verify</button> 
      </div>
      
    </div>
  );
};

export default VerifyEmail;
