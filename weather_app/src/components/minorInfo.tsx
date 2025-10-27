import icon1 from '../assets/image/Icon1.png'
import temp from '../assets/image/temp.png'
import temp2 from '../assets/image/temp2.png'


function MinorInfo() {
    return (
        <div id='minor-info' className='flex flex-col h-fit w-89.5'>
            <div id='frame-8' className='flex flex-row w-fit h-fit gap-2.5 items-center'>
              <div id='cloud-Rain' className='w-6 h-6'>
                <img src={icon1} alt="icon-light" className='w-4.5 h-4.8 top-0.6 left-0.75 border-0.5 border-[#FFFFFF]'/>
              </div>
              <span className='w-fit h-9 font-medium text-[17px] leading-9 text-[#FFFFFF]'>Light Rain</span>
            </div>
            <div id='frame-9' className='flex flex-row w-fit h-fit gap-2.5 items-center'>
              <div id='temp' className='w-6 h-6'>
                <img src={temp} alt="icon-temp" className='w-3.9 h-4.8 top-0.6 left-1.05 border-0.5 border-[#FFFFFF]'/>
              </div>
              <span className='w-fit h-9 font-medium text-[17px] leading-9 text-[#FFFFFF]'>Min Temperature - 28°C</span>
            </div>
            <div id='frame-10' className='flex flex-row w-fit h-fit gap-2.5 items-center'>
              <div id='temp-2' className='w-6 h-6'>
                <img src={temp2} alt="temp" className='w-3.6 h-4.8 top-0.6 left-1.2 border-0.5 border-[#ffffff]'/>
              </div>
              <span className='w-fit h-9 font-medium text-[17px] leading-9 text-[#ffffff]'>Max Temperature - 31°C</span>
            </div>
        </div>
    )
}

export default MinorInfo