import './App.css'
import MainInfo from './components/mainInfo'
import MinorInfo from './components/minorInfo'
import Search from './components/search'
import AddInfo from './components/addInfo'
import DayToggle from './components/dayToggle'


function App() {

  return (
    <div id='outer' className='w-360 h-256 p-[15px] bg-[#191B1F] mx-auto flex flex-row'>
      <div id='main-frame' className='flex flex-row gap-5 w-fit h-fit opacity-100 mx-auto'>
        <div id='left-frame' className='flex flex-col font-plus gap-12.25 w-113 h-248.5 
          rounded-2xl border border-[#FFFFFF1A] pt-10 pr-11.75 pb-10 pl-11.75 opacity-100'>
          <Search />
          <MainInfo />
          <MinorInfo />
          <AddInfo />
        </div>
        <div id='right-frame' className='flex flex-col font-plus gap-12.25 w-234.5 h-248.5
          rounded-7 border border-[#FFFFFF1A] pt-10 pr-11.75 pb-10 pl-11.75 opacity-100'>
          <DayToggle />
        </div>
      </div>
    </div>
  )
}

export default App