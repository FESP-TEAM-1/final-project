import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import Header from "components/layout/Header";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/videos" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
