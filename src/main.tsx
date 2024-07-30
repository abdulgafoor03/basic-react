import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CounterContextProvider from "./hooks/CounterContextProvider.tsx";
import ReduxProvider from "./redux/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
