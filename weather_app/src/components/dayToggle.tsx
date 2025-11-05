
function DayToggle() {

    return (
        <div id="day-toggle" className="flex flex-row w-fit h-fit gap-4 md:gap-8 md:w-73.5 md:justify-center lg:ml-0 lg:gap-1 lg:justify-start">
            <span className="w-17.75 h-7.5 font-semibold text-[20px] leading-6 text-[#FFFFFF80] md:text-3xl md:w-22 lg:text-[22px]">Today</span>
            <span className="w-16.75 h-7.5 font-semibold text-[20px] leading-6 underline decoration-wavy underline-offset-[30%] decoration-[15%] text-[#FFFFFF] md:text-3xl md:w-20.5 lg:text-[22px]">Week</span>
        </div>
    )
}

export default DayToggle