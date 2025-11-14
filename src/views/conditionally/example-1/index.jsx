import React, { useState } from "react";
import { Login } from "./login";

function ConditionallyView() {
  const [isLoggin, setIsLoggin] = useState(false);

  const loginAction = (durum) => {
    setIsLoggin(durum);
  };

  return (
    <div>
      <Login isLoggin={isLoggin} />

      {isLoggin === false && (
        <button
          onClick={() => {
            loginAction(true);
          }}
        >
          Giriş yapmak için tıklayınız
        </button>
      )}

      {isLoggin === true && (
        <button
          onClick={() => {
            loginAction(false);
          }}
        >
          Çıkış yapmak için tıklayınız
        </button>
      )}
    </div>
  );
}

export default ConditionallyView;
