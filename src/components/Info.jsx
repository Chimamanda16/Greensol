import styles from "../Styles/info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
        <h3>Let's get to know you better</h3>
        <p>Please enter your real information, the same details on your ID.</p>
        <form className={styles.infoForm}>
          <select className={styles.infoInputSelect} name="Country">
            <option value="Country" disabled>Gender</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
            <option value="South Africa">South Africa</option>
          </select>
          <div className={styles.phoneInputWrapper}>
            <select className={styles.countryCode}>
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select>
            <input type="tel" className={styles.phoneNumber} placeholder="Phone number" />
          </div>
          <select name="State" id="" className={styles.infoInputSelect}>
            <option value="State" disabled>Gender</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Ibadan">Ibadan</option>
          </select>
          <input className={styles.infoInput} type="text" placeholder="Home Address"/>
          <input className={styles.infoInput} type="text" placeholder="Postal Code"/>
          <button className={styles.infoBtn}>Continue</button>
        </form>
    </div>
  )
}

export default Info