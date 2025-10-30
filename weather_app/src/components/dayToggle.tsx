
function DayToggle() {
    return (
        <div id="day-toggle" className="flex flex-row w-fit h-fit md:w-73.5 md:justify-center lg:ml-0 md:gap-8 gap-4 lg:gap-6.5">
            <span className="w-17.75 h-7.5 font-semibold text-[20px] md:text-3xl md:w-22 lg:text-2xl leading-6 text-[#FFFFFF80]">Today</span>
            <span className="w-16.75 h-7.5 font-semibold text-[20px] md:text-3xl md:w-20.5 lg:text-2xl leading-6 underline decoration-wavy underline-offset-[30%] decoration-[15%] text-[#FFFFFF]">Week</span>
        </div>
    )
}

export default DayToggle