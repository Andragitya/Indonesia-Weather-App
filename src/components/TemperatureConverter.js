import React, { useState } from 'react';

    function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit(value ? (value * 9 / 5 + 32).toFixed(2) : '');
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(value ? ((value - 32) * 5 / 9).toFixed(2) : '');
    };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
    </div>
  );
}

export default TemperatureConverter;