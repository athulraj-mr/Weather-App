import image from '../assets/image/logo1.png'


function MainInfo() {
    return (
        <div id='main-info' className='flex flex-col w-fit h-fit gap-12.25 md:items-center'>
            <div id='main-info-in' className='flex flex-col w-fit h-fit gap-5 justify-center items-center md:gap-8 lg:gap-12.25'>
              <div>
                <img src={image} alt="main-info-weather-image" className='w-70.5 h-fit md:w-120 lg:w-79 lg:h-79'/>
              </div>
              <div id='main-info-inner' className=' flex flex-row md:h-fit lg:w-51.25 lg:h-9'>
                <span className='font-bold text-7xl text-[#FFFFFF] text-center md:text-8xl md:leading-8 lg:text-8xl lg:leading-9'>30<sup className='top-[-0.25em]'>°C</sup></span>
              </div>
            </div>
            <div id='frame-2' className='flex flex-row justify-between w-70 h-fit 
              border-b border-[#C2D4D3] md:pt-2 md:w-90.5 lg:px-1.25 lg:py-5 lg:w-85.25'>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal md:text-2xl md:h-9 lg:w-40 lg:h-9 lg:text-[25px] lg:leading-9'>Kuala Lumpur</span>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal text-right md:text-2xl md:h-9 lg:w-24 lg:h-9 lg:text-[25px] lg:leading-9'>Monday</span>
            </div>
        </div>
    )
}

export default MainInfo
