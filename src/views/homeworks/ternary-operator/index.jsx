import React, { useState } from "react";
import { ControlInput } from "./control-input";

// age adında bir state oluştur.

// Yaş 18 veya üzeri ise “Erişim izni verildi” mesajı; değilse “Erişim reddedildi” mesajı göster.

// Yaşı değiştirebileceğin bir input alanı ekle (örneğin sayı tipi input).

// 4- Koşullu Liste Render Etme

// tasks adında bir görev listesi oluştur:

function TernaryOperator() {
  const [age, setAge] = useState(0);

  return (
    <div>
      <ControlInput setAge={setAge} />
      {age > 18 ? <p>Erişim izni verildi</p> : <p>Erişim Reddedildi</p>}
    </div>
  );
}

export default TernaryOperator;
