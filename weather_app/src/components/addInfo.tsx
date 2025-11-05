import water from '../assets/image/water.png'
import wind from '../assets/image/wind.png'
import { useWeather } from '../hooks/useWeather'


function AddInfo() {

    const { state } = useWeather();
    const { weather, error, loading } = state;

    if(!weather || error || loading ) return null;

    const Humidity = Math.round(weather.current.humidity);
    const windSpeed = Math.round(weather.current.wind_kph);

    return (
        <div id="addinfo" className="flex flex-row w-75 h-18 border mb-3 rounded-xl justify-between pr-2.5 pl-2.5 border-[#0000001A] bg-[#252222A6] 
            shadow-[2px_4px_5px_0px_#00000040] items-center lg:pl-2.5 lg:pr-3.75 md:mb-0 md:w-95 md:h-27.5 md:rounded-2xl
             lg:rounded-xl lg:w-[263px] lg:h-19.5 lg:gap-2">
            <div id="frame-4" className="flex flex-row w-fit h-fit gap-2 items-center">
                <div id="water" className="h-10 w-10 md:w-15.5 md:h-15.5 lg:w-9 lg:h-9">
                    <img src={water} alt="water-img" className='w-fit h-fit'/>
                </div>
                <div id='frame-3' className='flex flex-col w-17.5 h-fit gap-0.5 md:w-fit lg:gap-px lg:items-center lg:pt-1'>
                    <span className='h-5.5 text-[#FFFFFF] font-semibold text-[20px] md:h-6.75 md:text-2xl lg:w-17.5 lg:h-4 lg:text-[18px] lg:leading-[18px]'>{ Humidity }%</span>
                    <span className='text-[13px] font-normal text-[#FFFFFF] md:text-[16px] lg:w-17.5 lg:h-3.75 lg:leading-4 lg:text-[13px]'>Humidity</span>
                </div>
            </div>
            <div id="frame-6" className='flex flex-row h-fit w-fit gap-2 items-center'>
                <div id='wind' className='h-10 w-10 rotate-180 md:h-15.5 md:w-15.5 lg:w-9 lg:h-9'>
                    <img src={wind} alt="wind-img"  className='w-fit h-fit'/>
                </div>
                <div id='frame-5' className='flex flex-col w-fit h-fit gap-0.5 lg:w-24 lg:gap-px lg:pt-1'>
                    <span className='h-5.5 text-[#FFFFFF] font-semibold text-[20px] md:text-2xl md:h-6.75 lg:w-17.5 lg:h-4 lg:text-[18px] lg:leading-[18px]'>{ windSpeed }km/h</span>
                    <span className='text-[13px] text-[#FFFFFF] w-fit font-normal md:text-[16px] lg:leading-4 lg:h-3.75 lg:text-[13px]'>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}

export default AddInfo