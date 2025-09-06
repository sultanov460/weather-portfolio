import { useEffect } from "react";
import { WeatherCard } from "./widgets/WeatherCard";
import { getWeatherData } from "./utils/weather";

const App = () => {
  useEffect(() => {
    getWeatherData(); // 👈 вызываем функцию, тогда сработает console.log
  }, []);
  return (
    <>
      <WeatherCard />
    </>
  );
};

export default App;
