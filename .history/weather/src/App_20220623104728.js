import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherButton } from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  // const searchByCity = (cityName) => {
  //   setCity(cityName)
  //   let url = 'api'
  // }

  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=985cb6eb52cf2db6fbc6ae7a2bbc73e5&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getWeatherByCity = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=985cb6eb52cf2db6fbc6ae7a2bbc73e5&units=metric`
    let res = await fetch(url)
    let data = await res.json();
    console.log("data", data)
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getWeatherByCity()
  }, [city]);
  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
