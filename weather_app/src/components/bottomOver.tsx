import { useWeather } from "../hooks/useWeather"
import Precipitation from "./precipitation"
import Sun from "./sun"


function BottomOver() {

    const { state } = useWeather();
    const { loading } = state;

    if(loading) return null;

    return (
        <div id="bottom-over" className="flex flex-col mt-110 gap-5 md:w-fit md:h-fit md:gap-7 md:mt-0 lg:flex-row lg:w-[592px] lg:justify-center lg:h-55.25 lg:gap-5">
            <Precipitation />
            <Sun />
        </div>
    )
}

export default BottomOver