import { Button } from "./components/button";
import HomePage from "./views/home";

export default function App() {
  const handleSave = () => {
    console.log("Başarıyla kaydedildi");
  };

  const handleInfo = () => {
    console.log("uyarı verildi");
  };

  const handleDanger = () => {
    console.log("Başarıyla silindi");
  };
  return (
    <>
      {/* <HomePage /> */}
      {/* <JSXRules /> */}
      {/* <Button btnText="Kaydet" /> */}
      <Button btnText="Kaydet" variant="success" handleClick={handleSave} />
      <Button btnText="Düzenle" variant="info" handleClick={handleInfo} />
      <Button btnText="Sil" variant="danger" handleClick={handleDanger} />
      <Button btnText="Bilgi" />
    </>
  );
}
