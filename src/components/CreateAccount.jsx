import { AuthContext } from "@/contexts/AuthContext";
import React, { useContext, useState } from "react";

const CreateAccount = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleCreateAccount = () => {
    login(email); // Simulate login with email
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
