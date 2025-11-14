import React from "react";

function WeatherInfoCard({ temperature, message = "Hava Sıcak" }) {
  
  return (
    <>
    <div>
        Seçilen Sıcaklık Değeri: {temperature}
    </div>
      {temperature >= 25 ? (
        <div> {message} </div>
      ) : temperature > 15 && temperature < 25 ? (
        <div>{message}</div>
      ) : temperature > 10 && temperature < 15 ? (
        <div>{message}</div>
      ) : (
        <div>{message}</div>
      )}
    </>
  );
}

export default WeatherInfoCard;
