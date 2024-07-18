import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Watchlist from "./components/Watchlist";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
