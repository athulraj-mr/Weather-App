import TodayCard from "./TodayCard"


function TopOver() {
    return (
        <div id="topover" className="flex flex-col w-fit ml-5 lg:ml-0 lg:flex-row max-w-211 h-55.25 gap-5">
            <TodayCard />
            <TodayCard />
            <TodayCard />
        </div>
    )
}

export default TopOver