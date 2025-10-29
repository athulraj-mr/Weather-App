import water from '../assets/image/water.png'
import wind from '../assets/image/wind.png'


function AddInfo() {
    return (
        <div id="addinfo" className="flex flex-row w-75 h-18 border mb-3 rounded-xl justify-between pr-2.5 pl-2.5 
            lg:pl-3.75 lg:pr-3.75 border-[#0000001A] bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040] items-center md:mb-0 md:w-95 md:h-27.5 md:rounded-3xl lg:rounded-xl lg:w-85.25 lg:h-19.5">
            <div id="frame-4" className="flex flex-row w-fit h-fit gap-2 items-center">
                <div id="water" className="h-10 w-10 md:w-15.5 md:h-15.5 lg:w-11.75 lg:h-11.75">
                    <img src={water} alt="water-img" className='w-fit h-fit'/>
                </div>
                <div id='frame-3' className='flex flex-col w-17.5 h-fit gap-0.5 md:w-fit lg:gap-px lg:items-center lg:pt-1'>
                    <span className='h-5.5 md:h-6.75 lg:w-17.5 lg:h-6.5 font-semibold text-[20px] md:text-2xl lg:text-2xl lg:leading-6 text-[#FFFFFF]'>83%</span>
                    <span className='text-[13px] lg:w-17.5 lg:h-4.5 font-normal md:text-[16px] lg:leading-4 lg:text-[16px] text-[#FFFFFF]'>Humidity</span>
                </div>
            </div>
            <div id="frame-6" className='flex flex-row h-fit w-fit gap-2 items-center'>
                <div id='wind' className='h-10 w-10 md:h-15.5 md:w-15.5 lg:w-12 lg:h-12 rotate-180'>
                    <img src={wind} alt="wind-img"  className='w-fit h-fit'/>
                </div>
                <div id='frame-5' className='flex flex-col w-fit h-fit gap-0.5 lg:w-24 lg:gap-px lg:pt-1'>
                    <span className='h-5.5 md:h-6.75 lg:w-17.5 lg:h-6.5 font-semibold text-[20px] md:text-2xl lg:text-2xl lg:leading-6 text-[#FFFFFF]'>6km/h</span>
                    <span className='text-[13px] w-fit lg:h-4.5 font-normal md:text-[16px] lg:leading-4 lg:text-[16px] text-[#FFFFFF]'>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}

export default AddInfo