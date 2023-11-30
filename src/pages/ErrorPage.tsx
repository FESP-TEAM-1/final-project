import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/error/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <section className={styles["error-wrapper"]}>
      <h1 className={styles["error__title"]}>
        죄송합니다. 이 페이지는 사용할 수 없습니다.
      </h1>
      <Link to="/" className={styles["error__content"]}>
        <img
          src={"https://fesp-team-1.github.io/final-project/logo-477tube.svg"}
        />
        <span>477Tube</span>
      </Link>
    </section>
  );
};

export default ErrorPage;
