import { useWeather } from "../hooks/useWeather"
import TodayCard from "./TodayCard"
import visibilityIcon from '../assets/image/air-pollution.png'
import uvIcon from '../assets/image/uv.png'
import pressureIcon from '../assets/image/barometer.png'


function TopOver() {
    const { state } = useWeather();
    const { weather, error, loading } = state;

    if ( error || !weather || loading ) return null;

    const visibility = weather.current.vis_km;
    const visibilityStatus = visibility >= 6 ? 'Good' : visibility >= 4 ? 'Moderate' : 'Poor';
    const uv = weather.current.uv || 7;
    const uvStatus = uv <= 2 ? "Low" : uv <= 5 ? "Moderate" : uv <= 7 ? "High" : "VeryHigh";
    const pressure = weather.current.pressure_mb;
    const pressureStatus = pressure >= 1013 ? "Normal" : "Low"

    return (
        <div id="topover" className="flex flex-col h-55.25 gap-5 md:h-fit w-fit lg:flex-row max-w-211 lg:w-[592px] lg:justify-center">
            <TodayCard
                title="Visibility"
                value={visibility}
                status={visibilityStatus}
                icon={visibilityIcon} />
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