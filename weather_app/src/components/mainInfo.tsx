import { logos } from '../data/weatherLogos';
import { useWeather } from '../hooks/useWeather';

function MainInfo() {
  const { state } = useWeather();
  const { weather, loading, error } = state;

  const getDay = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long'});
  };

  if (loading) return <p className='w-fit h-fit text-[#ffffff]'> Loading..</p>
  if (error) return <p className='w-fit h-fit text-[#ffffff]'>{error}</p>
  if(!weather) return null;

  const condition = weather.current.condition.text;

  const logo = logos[condition] || logos['default'];

    return (
        <div id='main-info' className='flex flex-col w-fit h-fit gap-12.25 md:items-center lg:gap-7'>
            <div id='main-info-in' className='flex flex-col w-fit h-fit gap-5 justify-center items-center md:gap-8 lg:gap-7'>
              <div>
                <img src={logo} alt="weather-logo" className='w-70.5 h-fit md:w-120 lg:w-50 lg:h-50'/>
              </div>
              <div id='main-info-inner' className=' flex flex-row md:h-fit lg:w-51.25 lg:h-9 lg:justify-center'>
                <span className='font-bold text-7xl text-[#FFFFFF] text-center md:text-8xl md:leading-8 lg:text-5xl lg:leading-9'>{Math.round(weather.current.temp_c)}<sup className='top-[-0.25em]'>°C</sup></span>
              </div>
            </div>
            <div id='frame-2' className='flex flex-row justify-between w-70 h-fit 
              border-b border-[#C2D4D3] md:pt-2 md:w-90.5 lg:px-1.25 lg:py-5 lg:w-[260px] lg:pb-0'>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal md:text-2xl md:h-9 lg:w-40 lg:h-9 lg:text-[20px] lg:leading-5'>{weather.location.name}</span>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal text-right md:text-2xl md:h-9 lg:w-24 lg:h-9 lg:text-[20px] lg:leading-5'>{getDay(weather.location.localtime)}</span>
            </div>
        </div>
    )
}

export default MainInfo