//react
import React from "react";
import ReactDOM from "react-dom/client";
//style
import "./index.css";
//app
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//react=query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//react-router
import { BrowserRouter } from "react-router-dom";
//recoil
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
