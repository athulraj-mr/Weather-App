import { logos } from "../data/weatherLogos";
import { useWeather } from "../hooks/useWeather"
import Card from "./card"


const Cards = () => {
    const { state } = useWeather();
    const { weather } = state;

    if(!weather) return null;

    const forecastDays = weather.forecast.forecastday;

    const getDay = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    return (
        <div id="cards" className="flex flex-col gap-5 w-fit h-fit pt-3.75 pr-1.5 pb-3.75 pl-1.5 md:gap-6 lg:flex-row lg:gap-3.75 lg:mr-5">
            { forecastDays.map((day, index) => {
                const dayName = getDay(day.date);
                const temp = Math.round(day.day.avgtemp_c);
                const condition = day.day.condition.text;
                const logo = logos[condition] || logos['default'];

                return (
                    <Card
                        key = {index}
                        day = {dayName}
                        temp = {temp}
                        logo = {logo}
                     />
                )
            })}
        </div>
    )
}

export default Cards
