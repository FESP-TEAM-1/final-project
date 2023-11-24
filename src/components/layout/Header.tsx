import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore } from "stores/useThemeStore";
import {
  faArrowLeft,
  faMoon,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import styles from "styles/layout/Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isViewSearchBar, setIsViewSearchBar] = useState(false);
  const [input, setInput] = useState("");
  const { darkMode, setDarkMode } = useThemeStore();

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("search 검색 결과 창으로 이동");
    if (input.trim() !== "") navigate(`/search?title=${input}`);
  };

  const hanldeViewSearchBar = () => {
    console.log("search bar 토글");
    setIsViewSearchBar((prev) => !prev);
  };

  return (
    <>
      {!isViewSearchBar ? (
        <header className={styles["header"]}>
          {/* header left */}
          <div className={styles["header-left"]}>
            {location.pathname !== "/" && (
              <button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
                className={styles["back-button"]}
              >
                <span className="a11y-hidden">뒤로가기</span>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: `var(--icon-color)` }}
                />
              </button>
            )}
            <h1>
              <Link to="/" className={styles["header-logo"]}>
                <img src={"/logo-477tube.svg"} />
                <span>477Tube</span>
              </Link>
            </h1>
          </div>

          {/* header center (search bar) */}
          <form
            className={`${styles["header-center"]} ${styles["search-bar"]}`}
            onSubmit={handleSubmitSearch}
          >
            <input
              type="text"
              className={styles["search__input"]}
              placeholder="제목으로 검색"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles["search__button"]}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

          {/* header right */}
          <div className={styles["header-right"]}>
            <button
              className={styles["search__button"]}
              onClick={hanldeViewSearchBar}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={styles["theme-button"]}
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                style={{ color: darkMode ? "#cccccc" : "#5e5e5e" }}
              />
            </button>
          </div>
          {/* </ div> */}
        </header>
      ) : (
        <>
          {/* search bar (full version) */}
          <header className={`${styles["header"]} ${styles["narrow"]}`}>
            <button type="button" onClick={hanldeViewSearchBar}>
              <span className="a11y-hidden">뒤로가기</span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: `var(--icon-color)` }}
              />
            </button>
            <form
              className={`${styles["header-full"]} ${styles["search-bar"]}`}
              onSubmit={handleSubmitSearch}
            >
              <input
                type="text"
                className={styles["search__input"]}
                placeholder="제목으로 검색"
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className={styles["search__button"]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <div className="dim" onClick={hanldeViewSearchBar}></div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
