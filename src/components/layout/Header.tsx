import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore} from "stores/useThemeStore";
import { faArrowLeft, faMoon  } from "@fortawesome/free-solid-svg-icons";
import { faSun  } from "@fortawesome/free-regular-svg-icons";
import styles from "styles/layout/Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

const { darkMode, setDarkMode } = useThemeStore();

  return (
    <header className={styles["header"]}>
      <div className={styles['header-left']}>
      {location.pathname !== "/" && (
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <span className="a11y-hidden">뒤로가기</span>
          <FontAwesomeIcon icon={faArrowLeft} style={darkMode ? {color: "#fff"} : {color: "initial"}}/>
        </button>
      )}
      <h1>
        <Link to="/" className={styles["header-logo"]}>
          <img src={"/logo-477tube.svg"} />
          <span>477Tube</span>
        </Link>
      </h1>
      </div>
      <button type="button"  onClick={()=>setDarkMode(!darkMode)}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} style={darkMode ? {color: "#cccccc"} : {color: "#5e5e5e"}}/>
      </button>
    </header>
  );
};

export default Header;
