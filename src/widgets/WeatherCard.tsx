import { RiCelsiusFill } from "react-icons/ri";
import { SideBar } from "./SideBar";

export const WeatherCard = () => {
  return (
    <div className="bg-weather">
      <div className="flex flex-col items-center gap-1 text-white pt-20 pb-12 md:flex-row md:gap-3 md:p-0 md:absolute md:bottom-4 md:left-8">
        <div className="flex gap-0.5 items-center">
          <span className="font-bold text-4xl md:text-5xl">27</span>{" "}
          <RiCelsiusFill size={32} />
        </div>
        <div className="flex flex-col -gap-2.5">
          <span className="font-bold text-5xl md:text-3xl lg:text-4xl">
            Shamkir
          </span>
          <span className="text-gray-300 text-center ">Monday</span>
        </div>
      </div>
      <SideBar />
    </div>
  );
};
