import MovieSearch from "@/components/MovieSearch";
import Sidebar from "@/components/Sidebar";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static lg:block`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto lg:ml-auto">
        <div className="block p-4 lg:hidden">
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={24} />
          </Button>
        </div>
        <MovieSearch />
      </div>
    </div>
  );
};

export default Home;
