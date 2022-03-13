import { Fragment } from "react";

import coverImg from "../../assets/cover.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FeedMe</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={coverImg} alt="A table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
