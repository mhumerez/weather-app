export interface Weather {
    weather: WeatherInfo[],
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      country: string
    };
    name: string;
}

interface WeatherInfo {
    main: string;
    icon: string;
  }
