import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { WatchlistProvider } from "./contexts/WatchlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <WatchlistProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WatchlistProvider>
  </AuthProvider>
);
