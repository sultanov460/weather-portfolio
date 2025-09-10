import { useEffect } from "react";
import { WeatherCard } from "./widgets/WeatherCard";
import { getWeatherData } from "./utils/weather";

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await getWeatherData();
      console.log("API DATA:", data);
    }

    fetchData();
  }, []);
  return (
    <>
      <WeatherCard />
    </>
  );
};

export default App;
