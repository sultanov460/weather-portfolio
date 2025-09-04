import { IoSearch } from "react-icons/io5";
import { RiCelsiusFill } from "react-icons/ri";
export const SideBar = () => {
  return (
    <div className=" bg-white/10 backdrop-blur-lg p-4  w-full h-screen md:w-[45%] lg:w-[40%] shadow-lg md:rounded-xl absolute right-0">
      <form className="flex items-center justify-center py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-300 rounded-xl w-88 py-2 pl-3 outline-none pr-10 text-slate-800 mx-3 lg:mx-0 "
          />
          <span className="absolute top-1.5 right-4 lg:right-2 cursor-pointer">
            <IoSearch size={25} color="#FFF" />
          </span>
        </div>
      </form>
      <div>
        <h5 className="text-center font-medium tracking-[2px] uppercase mb-4 text-gray-300">
          WEATHER DETAILS
        </h5>
        <div className="flex flex-col gap-3 text-gray-300 ">
          <div className="flex justify-between items-center">
            <span className="font-medium">Feels like</span>
            <span className="flex items-center font-semibold gap-0.5">
              29
              <RiCelsiusFill />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Humidity</span>
            <span className="flex items-center font-semibold gap-0.5">29</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Pressure</span>
            <span className="flex items-center font-semibold gap-0.5">29</span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3 text-gray-300 ">
          <div className="flex justify-between items-center">
            <span className="font-medium">Country</span>
            <span className="flex items-center font-semibold gap-0.5">AZ</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Weather</span>
            <span className="flex items-center font-semibold gap-0.5">
              Clouds
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Description</span>
            <span className="flex items-center font-semibold gap-0.5">S</span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3 text-gray-300 ">
          <div className="flex justify-between items-center">
            <span className="font-medium">Wind</span>
            <span className="flex items-center font-semibold gap-0.5">
              S km/h
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3 text-gray-300 ">
          <div className="flex justify-between items-center">
            <span className="font-medium">Max Temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              AZ <RiCelsiusFill />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Min Temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              Clouds
              <RiCelsiusFill />
            </span>
          </div>
          <hr className="border-t border-gray-300 my-4" />
        </div>
      </div>
    </div>
  );
};
