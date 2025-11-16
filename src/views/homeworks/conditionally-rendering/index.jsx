import React, { useState } from "react";
import { Home } from "./home";

function ConditionallyRendering() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setIsLogin(true)
    setMessage("Hoş geldin!")
  }

  // !isLogin
  if (isLogin === false) {
    return (
      <div>
        Lütfen giriş yapmak için{" "}
        <span
          style={{
            textDecoration: "underline",
          }}

          onClick={handleLogin}
        >
          tıklayınız
        </span>
      </div>
    );
  }

  return <Home message={message} />;
}

export default ConditionallyRendering;
