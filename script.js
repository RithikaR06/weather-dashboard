const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const response = await fetch(
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
  );

  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = <p>City not found!</p>;
  }
}