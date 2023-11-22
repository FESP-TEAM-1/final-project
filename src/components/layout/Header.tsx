import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/layout/Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles["header"]}>
      {location.pathname !== "/" && (
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <span className="a11y-hidden">뒤로가기</span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
      <h1>
        <Link to="/" className={styles["header-logo"]}>
          <img src={"/logo-477tube.svg"} />
          <span>477Tube</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
