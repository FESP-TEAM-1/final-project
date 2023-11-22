import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "Router";
import GlobalStyle from "styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
