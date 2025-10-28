import Precipitation from "./precipitation"
import Sun from "./sun"


function BottomOver() {
    return (
        <div id="bottom-over" className="flex flex-row max-w-211.25 h-55.25 gap-5">
            <Precipitation />
            <Sun />
        </div>
    )
}

export default BottomOver