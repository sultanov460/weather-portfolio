interface WeatherDetail {
  id: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  country: string;
  weather: string;
  description: string;
  wind: {
    speed: number;
    deg: number;
  };
  maxTemp: number;
  minTemp: number;
  city: string;
}

interface WeatherContextType {
  weather: WeatherDetail | null;
  loading: boolean;
  error: string | null;
}
