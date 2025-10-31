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
    <div id='outer' className='bg-[#191B1F] flex flex-col lg:p-3.75 lg:flex-row lg:w-full lg:min-h-screen lg:flex lg:justify-center lg:items-center'>
      <div id='main-frame' className='lg:gap-5 flex flex-col lg:flex lg:flex-row lg:h-full lg:w-fit'>
        <div id='left-frame' className='flex flex-col h-fit items-center font-plus gap-8 pt-7 md:gap-10 lg:gap-[35px] lg:w-1/3 lg:h-full 
          lg:rounded-2xl lg:border border-[#FFFFFF1A] bg-[#CCCCCC1A] lg:pt-10 lg:pr-9.75 md:pt-14 lg:pb-10 lg:pl-9.75'>
          <Search />
          <MainInfo />
          <MinorInfo />
          <AddInfo />
        </div>
        <div id='right-frame' className='flex flex-col font-plus gap-8 lg:gap-6.25 h-fit lg:w-2/3 lg:h-fit
          lg:rounded-[28px] lg:border border-[#FFFFFF1A] bg-[#CCCCCC1A] pt-10 md:pb-14 pb-10 lg:pl-7 lg:pb-4 items-center lg:items-start'>
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