import image from '../assets/image/logo1.png'


function MainInfo() {
    return (
        <div id='main-info' className='flex flex-col w-fit h-fit gap-12.25'>
            <div id='main-info-in' className='flex flex-col w-fit h-fit gap-12.25 justify-center items-center'>
              <div>
                <img src={image} alt="main-info-weather-image" className='w-79 h-79'/>
              </div>
              <div id='main-info-inner' className='w-51.25 h-9 flex flex-row'>
                <span className='font-bold text-8xl leading-9 text-[#FFFFFF] text-center'>30<sup className='top-[-0.25em]'>°C</sup></span>
              </div>
            </div>
            <div id='frame-2' className='flex flex-row justify-between w-85.25 h-fit 
              px-1.25 py-5 border-b border-[#C2D4D3]'>
              <span className='w-40 h-9 text-[25px] leading-9 text-[#ffffff] font-normal'>Kuala Lumpur</span>
              <span className='w-24 h-9 text-[25px] leading-9 text-[#ffffff] font-normal text-right'>Monday</span>
            </div>
        </div>
    )
}

export default MainInfo
