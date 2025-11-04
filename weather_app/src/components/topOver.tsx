import { useWeather } from "../hooks/useWeather"
import TodayCard from "./TodayCard"
import airPollutionIcon from '../assets/image/air-pollution.png'
import uvIcon from '../assets/image/uv.png'
import pressureIcon from '../assets/image/barometer.png'


function TopOver() {
    const { state } = useWeather();
    const { weather, loading, error } = state;

    if (loading || error || !weather) return null;

    const aqi = 53;
    const aqiStatus = aqi <= 50 ? 'Good' : aqi <= 100 ? 'Moderate' : 'Poor';
    const uv = weather.current.uv || 7;
    const uvStatus = uv <= 2 ? "Low" : uv <= 5 ? "Moderate" : uv <= 7 ? "High" : "VeryHigh";
    const pressure = weather.current.pressure_mb;
    const pressureStatus = pressure >= 1013 ? "Normal" : "Low"

    return (
        <div id="topover" className="flex flex-col h-55.25 gap-5 md:h-fit w-fit lg:flex-row max-w-211 lg:w-[592px] lg:justify-center">
            <TodayCard
                title="Air Quality Index"
                value={aqi}
                status={aqiStatus}
                icon={airPollutionIcon} />
            <TodayCard 
                title="UV Index"
                value={uv}
                status={uvStatus}
                icon={uvIcon} />
            <TodayCard 
                title="Pressure"
                value={pressure}
                status={pressureStatus}
                icon={pressureIcon} />
        </div>
    )
}

export default TopOver