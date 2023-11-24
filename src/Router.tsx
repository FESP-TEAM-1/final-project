import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import SearchPage from "pages/SearchPage";
import ErrorPage from "pages/ErrorPage";
import Root from "Root";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/videos",
        element: <DetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
