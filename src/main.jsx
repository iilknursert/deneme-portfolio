import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // App bileşenini import ettik
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element bulunamadı! index.html dosyanı kontrol et.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
