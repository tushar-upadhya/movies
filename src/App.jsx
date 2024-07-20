import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Watchlist from "./pages/Watchlist";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/movie/:imdbID"
          element={<PrivateRoute element={MovieDetailsPage} />}
        />
        <Route
          path="/watchlist"
          element={<PrivateRoute element={Watchlist} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
