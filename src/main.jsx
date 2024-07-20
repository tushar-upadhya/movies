import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { WatchlistProvider } from "./contexts/WatchlistContext.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <WatchlistProvider>
      <SearchProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SearchProvider>
    </WatchlistProvider>
  </AuthProvider>
);
