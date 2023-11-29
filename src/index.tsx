import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "Router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import { YoutubeApiProvider } from "context/YoutubeApiContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </YoutubeApiProvider>
  </React.StrictMode>
);

reportWebVitals();
