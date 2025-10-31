import TodayCard from "./TodayCard"


function TopOver() {
    return (
        <div id="topover" className="flex flex-col h-55.25 gap-5 md:h-fit w-fit lg:flex-row max-w-211 lg:w-[592px] lg:justify-center">
            <TodayCard />
            <TodayCard />
            <TodayCard />
        </div>
    )
}

export default TopOver