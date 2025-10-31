import airPolution from '../assets/image/air-pollution.png' 

function TodayCard() {
    return (
        <div id="todaycard" className="flex flex-col w-67 h-55.25 rounded-[20px] justify-center
             gap-2.5 bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040] md:w-92.5 md:pl-4 md:mt-4 lg:w-45 lg:h-40">
            <div id="air" className="w-fit mt-5 h-9 flex flex-row items-center ml-5 md:ml-3.5 lg:m-0 lg:w-32.75">
                <span className="font-medium text-[17px] leading-4.25 text-[#FFFFFF] md:text-[20px] lg:text-[14px] lg:leading-3.5">Air Quality Index</span>
            </div>
            <div id="frame-26" className="flex flex-row w-57 h-36.25 gap-2.5 ml-5 items-end md:w-76 md:ml-3.5 lg:m-0 lg:h-[90px]">
                <div id="frame-25" className="flex flex-col w-37 h-36.25 gap-2.5 justify-center lg:h-22 lg:w-[90px]">
                    <div className="w-14.75 h-15 lg:h-7">
                        <span className="w-fit h-fit font-semibold leading-12 text-[#FFFFFF] text-5xl md:text-6xl lg:text-4xl lg:leading-9">53</span>
                    </div>
                    <div className="w-12 h-9 lg:pt-1.5">
                        <span className="font-bold text-[17px] leading-4.25 text-[#009966] md:text-[20px] lg:text-[13px] lg:leading-3">Good</span>
                    </div>
                </div>
                <div id='logo' className="w-17.5 h-36.25 flex items-end justify-center md:justify-end md:w-41.5 lg:w-[52px]">
                    <img src={airPolution} alt="airPolution"  className='w-fit h-fit'/>
                </div>
            </div>
        </div>
    )
}

export default TodayCard