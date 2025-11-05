import { createContext, useReducer, useEffect} from "react";
import type { ReactNode } from "react";
import type { weatherData, weatherAction, weatherState } from "./weatherTypes";
import axios from "axios";

const initialState: weatherState = {
    weather: null,
    loading: false,
    error: null
};

const WeatherContext = createContext <{
    state: weatherState;
    fetchWeather: (city: string) => void;
}> ({
    state: initialState,
    fetchWeather: () => {}
});

const weatherReducer = (state: weatherState, action: weatherAction): weatherState => {
    switch (action.type) {
        case 'fetch_Start':
            return { ...state, loading:true, error:null };
        case 'fetch_Success':
            return { loading:false, weather: action.payload, error:null };
        case 'fetch_Error':
            return { loading: false, error: action.payload, weather: state.weather };
        default:
            return state;
    }
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    const fetchWeather = async (city: string) => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        dispatch({ type: 'fetch_Start' });

        try {
            const response = await axios.get<weatherData>(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
            );
            dispatch({ type: 'fetch_Success', payload: response.data });
        } catch {
            dispatch({
                type: 'fetch_Error', payload: 'City Not found'
            });
        }

    };

    useEffect(() => {
        fetchWeather('Kalpetta')
    },[]);

    return (
        <WeatherContext.Provider value={{ state, fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;