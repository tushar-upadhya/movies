import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login(email);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Login</h2>
      <input
        type="email"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="px-4 py-2 mt-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
