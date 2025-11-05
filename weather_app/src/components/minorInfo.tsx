import icon1 from '../assets/image/Icon1.png'
import temp from '../assets/image/temp.png'
import temp2 from '../assets/image/temp2.png'
import { useWeather } from '../hooks/useWeather'


function MinorInfo() {

  const { state } = useWeather();
  const { weather, loading, error } = state;

  if(loading || error || !weather) return null;

  const conditionText = weather.current.condition.text;
  const minTemp = Math.round(weather.current.feelslike_c);
  const maxTemp = Math.round(weather.current.temp_c);

    return (
      <div id='minor-info' className='flex flex-col w-70 h-fit md:gap-3 md:w-90.5 lg:w-[263px] lg:gap-2'>
          <div id='frame-8' className='flex flex-row w-fit h-fit gap-2.5 md:gap-5 items-center'>
            <div id='cloud-Rain' className='w-6 h-6'>
              <img src={icon1} alt="icon-light" className='w-4.5 h-4.8 border-0.5 border-[#FFFFFF] md:w-6 md:h-6 lg:h-5.5 lg:w-5.5'/>
            </div>
            <span className='w-fit h-9 text-[15px] font-medium leading-9 text-[#FFFFFF] md:text-[18px] lg:text-[16px]'>{ conditionText }</span>
          </div>
          <div id='frame-9' className='flex flex-row w-fit h-fit gap-2.5 md:gap-5 items-center'>
            <div id='temp' className='w-6 h-6'>
              <img src={temp} alt="icon-temp" className='w-3.9 h-4.8 border-0.5 border-[#FFFFFF] md:w-6 md:h-6 lg:w-5.5 lg:h-5.5'/>
            </div>
            <span className='w-fit h-9 font-medium text-[15px] leading-9 text-[#FFFFFF] md:text-[18px] lg:text-[16px]'>Min Temperature - { minTemp }°C</span>
          </div>
          <div id='frame-10' className='flex flex-row w-fit h-fit gap-2.5 md:gap-5 items-center'>
            <div id='temp-2' className='w-6 h-6'>
              <img src={temp2} alt="temp" className='w-3.6 h-4.8 border-0.5 border-[#ffffff] md:w-6 md:h-6 lg:w-5.5 lg:h-5.5'/>
            </div>
            <span className='w-fit h-9 font-medium text-[15px] leading-9 text-[#ffffff] md:text-[18px] lg:text-[16px]'>Max Temperature - { maxTemp }°C</span>
          </div>
      </div>
    )
}

export default MinorInfo