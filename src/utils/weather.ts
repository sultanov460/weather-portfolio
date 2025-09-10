import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherData() {
  try {
    const res = await axios.get(
      `${BASE_URL}?q=Baku&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (e: unknown) {
    console.log(e);
  }
}
