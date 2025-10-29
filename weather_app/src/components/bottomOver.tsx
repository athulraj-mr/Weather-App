import Precipitation from "./precipitation"
import Sun from "./sun"


function BottomOver() {
    return (
        <div id="bottom-over" className="flex flex-col mt-95.75 ml-5 lg:flex-row lg:max-w-211.25 lg:h-55.25 gap-5">
            <Precipitation />
            <Sun />
        </div>
    )
}

export default BottomOver