import React, { useState } from "react";
import WeatherInfoCard from "./weather-info-card";

function WeatherInfoView() {
  const [temperature, setTemperature] = useState(25);
  const [message, setMessage] = useState("");

  const handleChangeTemperature = (sicaklik, _message) => {
    const _confirm = confirm('Onaylamak istediğinize emin misiniz?')
    if(!_confirm) return
    setTemperature(sicaklik);
    setMessage(_message)
  };

  

  return (
    <div>
      <WeatherInfoCard temperature={temperature} message={message} />
      <div>
        <button
          onClick={() => {
            handleChangeTemperature(26, 'Hava Sıcak');
          }}
        >
          26 Derece
        </button>
        <button
          onClick={() => {
            handleChangeTemperature(17, 'Hava Ilık');
          }}
        >
          17 Derece
        </button>
        <button
          onClick={() => {
            handleChangeTemperature(12, 'Hava Soğuk');
          }}
        >
          12 Derece
        </button>
        <button
          onClick={() => {
            handleChangeTemperature(8, "Hava çok soğuk");
          }}
        >
          8 Derece
        </button>
      </div>
    </div>
  );
}

export default WeatherInfoView;
