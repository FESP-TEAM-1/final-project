import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "components/layout/Header";

function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
