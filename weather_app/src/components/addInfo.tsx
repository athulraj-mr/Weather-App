import water from '../assets/image/water.png'
import wind from '../assets/image/wind.png'


function AddInfo() {
    return (
        <div id="addinfo" className="flex flex-row w-85.25 h-19.5 border rounded-xl justify-between pr-3.75 pl-3.75 border-[#0000001A] bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040] items-center">
            <div id="frame-4" className="flex flex-row w-fit h-fit gap-2">
                <div id="water" className="w-11.75 h-11.75">
                    <img src={water} alt="water-img" className='w-fit h-fit'/>
                </div>
                <div id='frame-3' className='flex flex-col w-17.5 h-fit gap-px items-center pt-1'>
                    <span className='w-17.5 h-6.5 font-semibold text-2xl leading-6 text-[#FFFFFF]'>83%</span>
                    <span className='w-17.5 h-4.5 font-normal leading-4 text-[16px] text-[#FFFFFF]'>Humidity</span>
                </div>
            </div>
            <div id="frame-6" className='flex flex-row h-fit w-fit gap-2'>
                <div id='wind' className='w-12 h-12 rotate-180'>
                    <img src={wind} alt="wind-img"  className='w-fit h-fit'/>
                </div>
                <div id='frame-5' className='flex flex-col w-24 h-fit gap-px pt-1'>
                    <span className='w-24 h-6.5 text-2xl leading-6 font-bold text-[#ffffff]'>6km/h</span>
                    <span className='w-24 h-4.5 font-normal text-[16px] text-[#FFFFFF] leading-4'>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}

export default AddInfo
