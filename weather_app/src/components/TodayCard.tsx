import airPolution from '../assets/image/air-pollution.png' 

function TodayCard() {
    return (
        <div id="todaycard" className="flex flex-col w-67 h-55.25 rounded-[20px] justify-center
             gap-2.5 bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040] md:w-92.5 md:pl-4 md:mt-4 lg:w-67 lg:h-55.25">
            <div id="air" className="w-fit mt-5 lg:m-0 lg:w-32.75 h-9 flex flex-row items-center ml-5 md:ml-3.5">
                <span className="font-medium text-[17px] leading-4.25 text-[#FFFFFF] md:text-[20px] lg:text-[17px] lg:leading-9">Air Quality Index</span>
            </div>
            <div id="frame-26" className="flex flex-row w-57 h-36.25 gap-2.5 ml-5 items-end md:w-76 md:ml-3.5 lg:m-0">
                <div id="frame-25" className="flex flex-col w-37 h-36.25 gap-2.5 justify-center">
                    <div className="w-14.75 h-15">
                        <span className="w-fit h-fit font-semibold text-5xl md:text-6xl leading-12 text-[#FFFFFF]">53</span>
                    </div>
                    <div className="w-12 h-9">
                        <span className="font-bold text-[17px] md:text-[20px] leading-4.25 text-[#009966]">Good</span>
                    </div>
                </div>
                <div id='logo' className="w-17.5 h-36.25 flex items-end justify-center md:justify-end md:w-41.5 lg:w-17.5">
                    <img src={airPolution} alt="airPolution"  className='w-fit h-fit'/>
                </div>
            </div>
        </div>
    )
}

export default TodayCard