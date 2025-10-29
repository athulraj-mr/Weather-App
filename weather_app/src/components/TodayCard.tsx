import airPolution from '../assets/image/air-pollution.png' 

function TodayCard() {
    return (
        <div id="todaycard" className="flex flex-col w-67 h-55.25 rounded-[20px] justify-center top-3.75
            right-5 bottom-3.75 left-5 gap-2.5 bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040]">
            <div id="air" className="w-fit mt-5 lg:w-32.75 h-9 flex flex-row items-center ml-5">
                <span className="font-medium text-[17px] leading-4.25 text-[#FFFFFF]">Air Quality Index</span>
            </div>
            <div id="frame-26" className="flex flex-row w-57 h-36.25 gap-2.5 ml-5 items-end">
                <div id="frame-25" className="flex flex-col w-37 h-36.25 gap-2.5 justify-center">
                    <div className="w-14.75 h-15">
                        <span className="w-fit h-fit font-semibold text-5xl leading-12 text-[#FFFFFF]">53</span>
                    </div>
                    <div className="w-12 h-9">
                        <span className="font-bold text-[17px] leading-4.25 text-[#009966]">Good</span>
                    </div>
                </div>
                <div className="w-17.5 h-36.25 flex items-end justify-center">
                    <img src={airPolution} alt="airPolution"  className='w-fit h-fit'/>
                </div>
            </div>
        </div>
    )
}

export default TodayCard