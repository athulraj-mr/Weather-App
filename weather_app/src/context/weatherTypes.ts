export interface ForecastDay {
    date: string;
    day: {
        avgtemp_c: number;
        condition: {
            text: string;
        };
    };
}

export interface Forecast {
    forecastday: ForecastDay[];
}

export interface weatherCondition {
    text: string;
}

export interface weatherData {
    location: {
        name: string;
        country: string;
        localtime: string
    };
    current: {
        temp_c: number;
        condition: weatherCondition;
        feelslike_c: number;
        humidity: number;
        wind_kph: number;
        uv: number;
        pressure_mb: number
    };
    forecast: Forecast;
}

export interface weatherState {
    weather: weatherData | null;
    loading: boolean;
    error: string | null;
}

export type weatherAction = | { type: 'fetch_Start' } 
    | { type: 'fetch_Success'; payload: weatherData }
    | { type: 'fetch_Error'; payload: string }