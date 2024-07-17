import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" component={<Auth />} />
        <Route path="/movie/:imdbID" component={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
