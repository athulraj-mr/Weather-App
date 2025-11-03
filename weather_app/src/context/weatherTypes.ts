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
        condition: weatherCondition
    };
}

export interface weatherState {
    weather: weatherData | null;
    loading: boolean;
    error: string | null;
}

export type weatherAction = | { type: 'fetch_Start' } 
    | { type: 'fetch_Success'; payload: weatherData }
    | { type: 'fetch_Error'; payload: string }