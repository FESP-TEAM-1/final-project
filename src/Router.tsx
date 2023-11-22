import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import Header from "components/layout/Header";

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/videos" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default Router;
