import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Login</h2>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default Login;
