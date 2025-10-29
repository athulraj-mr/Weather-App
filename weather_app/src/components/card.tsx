import sunWind from '../assets/image/sun-wind.png'

function Card() {
    return (
        <div id="card" className="w-75 gap-3 md:w-93.5 md:rounded-2xl lg:gap-0 lg:w-26.5 lg:h-44 flex lg:flex-col items-center justify-center rounded-md
             border border-[#0000001A] bg-[#252222A6] shadow-[2px_4px_5px_0px_#00000040]">
            <div id='day' className='w-12.405 h-7.5 font-semibold text-2xl md:text-3xl leading-6 text-[#FFFFFF]'>Sun</div>
            <div id="img" className="w-18.5 h-18.5">
                <img src={sunWind} alt="sun-wind" className='h-fit w-fit'/>
            </div>
            <div id='degree' className='w-11.84 h-7.5 top-32.25 left-7.25'>
                <span className='font-semibold text-2xl md:text-3xl leading-6 text-[#FFFFFF]'>32°</span>
            </div>
        </div>
    )
}

export default Card