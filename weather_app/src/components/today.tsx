import { useWeather } from "../hooks/useWeather"

function Today() {

    const { state } = useWeather();
    const { loading } = state;

    if(loading) return null;

    return (
        <div id="today" className="w-51.75 h-7.5 md:w-65 lg:pl-0">
            <span className="font-semibold text-[21px] text-[#FFFFFF] md:text-3xl lg:text-[22px]">Today’s Overview</span>
        </div>
    )
}

export default Today