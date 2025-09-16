import { RiCelsiusFill } from "react-icons/ri";
import { SideBar } from "./SideBar";
import { useWeather } from "../context/weatherContext";
import { useEffect, useState } from "react";

export const WeatherCard = () => {
  const { weather, error } = useWeather();

  const [currentDay, setCurrentDay] = useState<string>("NO Day");

  useEffect(() => {
    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[currentDate.getDay()];
    setCurrentDay(day);
  }, []);

  return (
    <div className="bg-weather">
      <div className="flex flex-col items-center gap-1 text-white pt-20 pb-12 md:flex-row md:gap-3 md:p-0 md:absolute md:bottom-4 md:left-8">
        <div className="flex gap-0.5 items-center">
          {weather ? (
            <>
              <span className="font-bold text-4xl md:text-5xl">
                {weather?.main.temp}
              </span>{" "}
              <RiCelsiusFill size={32} />
            </>
          ) : (
            <>
              <h5 className="text-3xl  font-semibold mb-10">
                Please enter your city
              </h5>
            </>
          )}
        </div>
        <div className="flex flex-col -gap-2.5">
          <span className="font-bold text-5xl md:text-3xl lg:text-4xl">
            {weather ? weather?.name : error}
          </span>
          <span className="text-gray-300 text-center ">{currentDay}</span>
        </div>
      </div>
      <SideBar />
    </div>
  );
};
