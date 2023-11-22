import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
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
    ],
  },
]);

export default router;
