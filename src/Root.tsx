import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "components/layout/Header";
import {useThemeStore} from "stores/useThemeStore";

function Root() {
  const location = useLocation();
  const {darkMode} = useThemeStore()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.dataset.theme = darkMode ? 'dark' : 'light';
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
