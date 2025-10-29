
function DayToggle() {
    return (
        <div id="day-toggle" className="flex flex-row w-fit h-fit lg:ml-0 gap-4 lg:gap-6.5">
            <span className="w-17.75 h-7.5 font-semibold text-[20px] lg:text-2xl leading-6 text-[#FFFFFF80]">Today</span>
            <span className="w-16.75 h-7.5 font-semibold text-[20px] lg:text-2xl leading-6 underline decoration-wavy underline-offset-[30%] decoration-[15%] text-[#FFFFFF]">Week</span>
        </div>
    )
}

export default DayToggle