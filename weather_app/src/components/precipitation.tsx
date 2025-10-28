import vector1 from '../assets/image/Vector 1.png'
import vector2 from '../assets/image/Vector 2.png'


function Precipitation() {
    return (
        <div id="precipitation" className="flex flex-col w-139 h-55.25 gap-1.25 bg-[#252222A6] rounded-[20px] shadow-[2px_4px_5px_0px_#00000040] relative">
            <div id="title" className="flex flex-row pt-4 w-139 max-h-16.5 top-3.75 right-5 bottom-3.75 left-5 gap-2.5 items-center">
                <span className="w-26.5 h-9 font-medium text-[17px] leading-9 ml-5 text-[#FFFFFF]">Precipitation</span>
            </div>
            <div id="line-chart" className="flex flex-row max-w-[531px] h-32.75 gap-1.25 relative">
                <div id="frame-19" className="flex flex-col max-w-5 ml-5 max-h-39.25 top-2.75 bottom-2.75 text-[7px] leading-9 text-[#6A6969] justify-between items-end">
                    <div id="100" className="w-5 h-6.75">
                        <span className="font-medium">100%</span>
                    </div>
                    <div className="w-4.25 h-6.75">
                        <span className="font-medium">80%</span>
                    </div>
                    <div className="w-4.25 h-6.75">
                        <span className="font-medium">60%</span>
                    </div>
                    <div className="w-4.25 h-6.75">
                        <span className="font-medium">40%</span>
                    </div>
                    <div className="w-4.25 h-6.75">
                        <span className="font-medium">20%</span>
                    </div>
                </div>
                <div id="group-26" className="w-122.25 h-25.875 relative">
                    <img src={vector1} alt="" className='w-[486px] h-12.68 top-10.5 -left-px absolute'/>
                    <img src={vector2} alt="" className='w-[486px] h-25.875 top-10.5 absolute'/>
                </div>
                <div id='dotted' className='w-122.25 h-27 ml-11 absolute'>
                    <div id='line-22' className='w-[486px] h-0 top-4 border border-dashed border-[#6A696980] absolute'></div>
                    <div id='line-21' className='w-[486px] h-0 top-10.75 border border-dashed border-[#6A696980] absolute'></div>
                    <div id='line-20' className='w-[486px] h-0 top-17.75 border border-dashed border-[#6A696980] absolute'></div>
                    <div id='line-19' className='w-[486px] h-0 top-24.25 border border-dashed border-[#6A696980] absolute'></div>
                    <div id='line-18' className='w-[486px] h-0 top-31 border border-dashed border-[#6A696980] absolute'></div>
                </div>
            </div>
            <div id='frame-16' className='flex flex-row max-w-121.5 max-h-2.25 gap-12.5 ml-11 font-semibold text-[7px] leading-1.75 text-[#6A6969] justify-between'>
                <div className='w-7.75 h-2.25'>
                    <span className='h-fit w-fit'>10AM</span>
                </div>
                <div className='w-7 h-2.25'>
                    <span className='h-fit w-fit'>11AM</span>
                </div>
                <div className='w-7.25 h-2.25'>
                    <span className='w-fit h-fit'>12AM</span>
                </div>
                <div className='w-5.75 h-2.25'>
                    <span className='w-fit h-fit'>1PM</span>
                </div>
                <div className='w-6 h-2.25'>
                    <span className='h-fit w-fit'>2PM</span>
                </div>
                <div className='w-6.25 h-2.25'>
                    <span className='w-fit h-fit'>3PM</span>
                </div>
                <div className='w-6.5 h-2.25'>
                    <span className='w-fit h-fit'>4PM</span>
                </div>
            </div>
        </div>
    )
}

export default Precipitation