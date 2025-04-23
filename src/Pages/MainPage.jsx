import styles from "../Styles/MainPage.module.css";
import BvnForm from "../components/Bvn";
import Gender from "../components/Gender"
import Info from "../components/Info";
import Navbar from "../components/Navbar"
import SignUp from "../components/SignUp"
import VerifyEmail from "../components/VerifyEmail";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
        <Navbar />
        {/* <SignUp /> */}
        {/* <Gender /> */}
        {/* <BvnForm /> */}
        {/* <Info /> */}
        <VerifyEmail />
    </div>
  )
}

export default MainPage