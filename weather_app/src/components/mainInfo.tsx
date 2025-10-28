import image from '../assets/image/logo1.png'


function MainInfo() {
    return (
        <div id='main-info' className='flex flex-col w-fit h-fit gap-12.25'>
            <div id='main-info-in' className='flex flex-col w-fit h-fit gap-5 justify-center items-center lg:gap-12.25'>
              <div>
                <img src={image} alt="main-info-weather-image" className='w-70.5 h-fit lg:w-79 lg:h-79'/>
              </div>
              <div id='main-info-inner' className=' flex flex-row lg:w-51.25 lg:h-9'>
                <span className='font-bold text-7xl text-[#FFFFFF] text-center lg:text-8xl lg:leading-9'>30<sup className='top-[-0.25em]'>°C</sup></span>
              </div>
            </div>
            <div id='frame-2' className='flex flex-row justify-between w-70 h-fit 
              border-b border-[#C2D4D3] lg:px-1.25 lg:py-5 lg:w-85.25'>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal lg:w-40 lg:h-9 lg:text-[25px] lg:leading-9'>Kuala Lumpur</span>
              <span className='text-[20px] h-7 text-[#ffffff] font-normal text-right lg:w-24 lg:h-9 lg:text-[25px] lg:leading-9'>Monday</span>
            </div>
        </div>
    )
}

export default MainInfo
