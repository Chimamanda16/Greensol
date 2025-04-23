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
        <h3>Proof of Identity</h3>
        <p>Let's get to know you better, please upload the following documents.</p>
        <div className={styles.proofFormWrapper}>
            <form className={styles.proofForm}>
                <div className={styles.proofContainer}>
                    <select className={styles.idTypeInput} >
                        <option value="Male">Female</option>
                        <option value="Female">Male</option>
                    </select>
                </div>
                <div className={styles.idContainer}>
                    <input type="text" placeholder="ID Number" className={styles.IdInput} />
                </div>
                <p className={styles.uploadInfo}>Upload Front and Back Side of your ID</p>
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