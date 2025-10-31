import sunrise from '../assets/image/sun-rise.png'
import sunset from '../assets/image/sunset.png'

function Sun() {
    return (
        <div id="sun" className="flex flex-col w-67.25 h-55.25 md:w-91 rounded-[20px] pt-3.75 pr-5 pb-3.75 pl-5 
            gap-2.5 bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040] lg:w-[180px] lg:h-50">
            <div id='sun-text' className="w-34 h-9 md:w-45 md:relative lg:w-[138px]">
                <span className="h-fit w-fit font-medium text-[17px] md:text-[20px] leading-9 text-[rgb(255,255,255)] 
                    md:absolute md:top-1.5 md:left-2.5 lg:text-[14px] lg:top-[-5px] lg:-left-0.5">Sunrise & Sunset</span>
            </div>
            <div id="sun-rise" className="flex flex-row w-57.25 h-[67.5px] rounded-[5px] p-2.5 gap-5 lg:w-[148px] lg:p-0 lg:gap-[35px]">
                <div className='w-12 h-12 relative'>
                    <div id="rise-in" className="w-12 h-12 absolute top-2 lg:w-[92px]">
                        <img src={sunrise} alt="sun-rise" className='w-11 h-10'/>
                    </div>
                </div>
                <div id="frame-23" className='flex flex-col w-35.25 h-[47.5px]'>
                    <div id='rise-text' className='w-10.75 h-5'>
                        <span className='font-medium text-[12px] leading-5 text-[#6A6969]'>Sunrise</span>
                    </div>
                    <div id='rise-time' className='w-16.75 h-9'>
                        <span className='font-medium text-[17px] leading-9 text-[#FFFFFF]'>7:06 AM</span>
                    </div>
                </div>
            </div>
            <div id="sun-set" className='flex flex-row w-57.25 h-[67.5px] rounded-[5px] p-2.5 gap-5 lg:w-[148px] lg:p-0 lg:gap-[35px]'>
                <div className='w-12 h-12 relative'>
                    <div id="set-in" className="w-12 h-12 absolute top-2 lg:w-[92px]">
                        <img src={sunset} alt="sun-set" className='w-11 h-10'/>
                    </div>
                </div>
                <div id="frame-23" className='flex flex-col w-35.25 h-[47.5px]'>
                    <div id='set-text' className='w-10.75 h-5'>
                        <span className='font-medium text-[12px] leading-5 text-[#6A6969]'>Sunset</span>
                    </div>
                    <div id='set-text' className='w-16.75 h-9'>
                        <span className='font-medium text-[17px] leading-9 text-[#FFFFFF]'>7:03 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sun