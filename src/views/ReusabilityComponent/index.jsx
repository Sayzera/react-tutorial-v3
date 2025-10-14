import { Button } from "../../components/button";
import { DestructingButton } from "../../components/DestructingButtonProps";



export default function ReusabilityComponent() {

    const handleSave = (sayHello) => {
            alert(sayHello)
    }

    return (
        <>
         <Button btnText={"Kaydet"} variant="success" onClick={() => {
            handleSave('Merhaba')
         }} />
         <Button btnText={"Sil"}    variant="danger" />
         <Button btnText={"Detay"} /> 


         
         <DestructingButton btnText={"Kaydet"} variant="success" />

        </>
    )
}


/***
 * Tekrar kullanılabilir bir komponent oluşturalım türü input olsun 
 * type kısmı dinamik olsun parametre olarak text verirsek text olacak number verirsek number olacak
 * required true dersek başına yıldız işareti eklesin
 * <Input type="number" label="Kullanıcı Adı*" placeholder="Kullanıcı adı giriniz" required={true} />
 */

