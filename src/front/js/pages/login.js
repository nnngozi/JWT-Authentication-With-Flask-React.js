import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  // const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify({
        email: "email",
        password: "password",
      }),
    };
    fetch(
      "https://3001-nnngozi-jwtauthenticati-xxtn590swxu.ws-us46.gitpod.io/api/token"
    );
  };
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
