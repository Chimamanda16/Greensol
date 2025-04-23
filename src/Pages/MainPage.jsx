import styles from "../Styles/MainPage.module.css";
import BvnForm from "../components/Bvn";
import Gender from "../components/Gender"
import Info from "../components/Info";
import Navbar from "../components/Navbar"
import ProofOfAddress from "../components/Poi";
import SignUp from "../components/SignUp"
import VerifyEmail from "../components/VerifyEmail";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
        <Navbar />
        <img src="../images/back.svg" className={styles.backBtn}/>
        {/* <SignUp />  */}
        <Gender />
        {/* <BvnForm /> */}
        {/* <Info /> */}
        {/* <VerifyEmail /> */}
        {/* <ProofOfAddress /> */}
    </div>
  )
}

export default MainPage