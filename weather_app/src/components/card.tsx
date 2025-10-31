import sunWind from '../assets/image/sun-wind.png'

function Card() {
    return (
        <div id="card" className="w-75 items-center justify-center rounded-md flex gap-3 md:w-93.5 md:rounded-2xl lg:gap-0 lg:w-[70px] lg:h-37 lg:rounded-lg lg:flex-col
             border border-[#0000001A] bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040]">
            <div id='day' className='w-12.405 h-7.5 font-semibold text-2xl leading-6 text-[#FFFFFF] md:text-3xl lg:text-[22px]'>Sun</div>
            <div id="img" className="w-14 h-14">
                <img src={sunWind} alt="sun-wind" className='h-fit w-fit'/>
            </div>
            <div id='degree' className='w-11.84 h-7.5 top-32.25 left-7.25'>
                <span className='font-semibold text-2xl leading-6 text-[#FFFFFF] md:text-3xl lg:text-2xl'>32°</span>
            </div>
        </div>
    )
}

export default Card