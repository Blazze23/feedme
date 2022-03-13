import logo from "../../assets/logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Powered by</h2>
      <img src={logo} className={styles.logo} alt="logo" />
    </footer>
  );
};

export default Footer;
