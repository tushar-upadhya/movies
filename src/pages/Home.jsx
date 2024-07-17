import MovieSearch from "@/components/MovieSearch";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow-md">
          {user ? <Logout /> : <Login />}
        </div>
      </div> */}
      <MovieSearch />
      {/* <div className="p-4 mt-8 bg-white rounded-lg shadow-md">
        <Watchlist />
      </div> */}
    </div>
  );
};

export default Home;
