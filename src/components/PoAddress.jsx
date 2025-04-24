import { useRef } from 'react';
import React from 'react'
import styles from "../Styles/poAddress.module.css";

const ProofOfAddress = () => {
    
    const fileInputRef = useRef();
    const handleClick = () => {
        fileInputRef.current.click();
    };

  return (
    <div className={styles.proof} >
        <h3>Proof of Address</h3>
        <p>Let's get to know you better, please upload the following documents.</p>
        <div className={styles.proofFormWrapper}>
            <p className={styles.skip}>Skip</p>
            <form className={styles.proofForm}>
                <div className={styles.proofContainer}>
                    <select className={styles.idTypeInput} >
                        <option value="Male" disabled>Home Address</option>
                        <option value="Male" disabled>Address</option>
                    </select>
                </div>
                
                <p className={styles.uploadInfo}>Upload Utiltity Bill</p>
                <div className={styles.uploadCont}>
                    <div>
                        <img src="../images/upload.svg" alt="" />
                        <input
                            type="file"
                            ref={fileInputRef}
                            className={styles.uploadInput}
                            style={{ display: "none" }}
                        />
                        <p>Drag your images here or select</p>
                        <p className={styles.uploadText} onClick={handleClick}>
                            Click to browse
                        </p>
                    </div>
                </div>
                <button className={styles.proofBtn}>Continue</button>
            </form>
        </div>
    </div>

  )
}

export default ProofOfAddress;