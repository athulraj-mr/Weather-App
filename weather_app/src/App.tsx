import './App.css'
import MainInfo from './components/mainInfo'
import MinorInfo from './components/minorInfo'
import Search from './components/search'
import AddInfo from './components/addInfo'
import DayToggle from './components/dayToggle'
import Cards from './components/cards'
import Today from './components/today'
import TopOver from './components/topOver'
import BottomOver from './components/bottomOver'


function App() {

  return (
    <div id='outer' className='bg-[#191B1F] flex flex-col lg:p-3.75 lg:flex-row lg:w-360 lg:h-256'>
      <div id='main-frame' className='lg:gap-5 flex flex-col lg:flex-row lg:max-h-248.5 lg:max-w-352.5'>
        <div id='left-frame' className='flex flex-col h-fit items-center font-plus gap-8 pt-7 md:gap-10 lg:gap-12.25 lg:w-113  lg:h-248.5 
          lg:rounded-2xl lg:border border-[#FFFFFF1A] bg-[#CCCCCC1A] lg:pt-10 lg:pr-11.75 md:pt-14 lg:pb-10 lg:pl-11.75'>
          <Search />
          <MainInfo />
          <MinorInfo />
          <AddInfo />
        </div>
        <div id='right-frame' className='flex flex-col font-plus gap-8 lg:gap-12.25 h-fit lg:w-234.5 lg:h-248.5
          lg:rounded-[28px] lg:border border-[#FFFFFF1A] bg-[#CCCCCC1A] pt-10 lg:pr-11.75 md:pb-14 pb-10 lg:pl-11.75 items-center lg:items-start'>
          <DayToggle />
          <Cards />
          <Today />
          <TopOver />
          <BottomOver />
        </div>
      </div>
    </div>
  )
}

export default App