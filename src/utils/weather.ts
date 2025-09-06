const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
import axios from "axios";

export async function getWeatherData() {
  try {
    const res = await axios.get(
      `${BASE_URL}?q=Baku&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }&units=metric`
    );
    console.log(res.data);
    return res.data;
  } catch (e: unknown) {
    console.log(e);
  }
}
