import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/videos/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
