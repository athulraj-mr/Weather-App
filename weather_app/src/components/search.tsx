

function Search() {
  return (
    <div id="search-00" className="w-85 h-13 flex flex-row justify-center relative md:w-144.5 lg:w-30 lg:h-13.5">
      <input type="text" id="search" placeholder="Search city..." className="h-13 w-fit md:w-131 md:h-17
        pl-16 placeholder:text-[#7E7C7C] md:text-[20px] text-4 leading-9 font-normal rounded-[25px] px-5 pb-2.75 py-2.5 bg-[#C2D4D3] lg:text-[13px] lg:leading-[13px] lg:font-normal lg:w-60 lg:h-12.5 lg:pl-[54px]"/>
      <div id='frame-1' className='flex flex-row items-center gap-6.25 w-fit h-fit absolute left-12.5 top-3.25 md:top-4.5 lg:top-4.5 lg:left-[-35px]'>
        <div id='search-01' className='h-6 w-6 content-center md:h-8 md:w-8 lg:w-fit lg:h-fit'>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:w-3 lg:h-3 md:h-fit md:w-fit'>
            <path d="M14.3269 14.44L17.8 17.8M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z" stroke="#7E7C7C" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Search