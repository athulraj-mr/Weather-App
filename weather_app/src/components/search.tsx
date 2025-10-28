

function Search() {
    return (
      <div id="search-00" className="w-85.25 h-13.5 relative">
        <input type="text" id="search" placeholder="Search city..." className="w-85.25 h-13.5 rounded-[25px] px-5 py-2.5 bg-[#C2D4D3] 
          pl-16 placeholder:text-[#7E7C7C] text-4 leading-9 font-normal"/>
        <div id='frame-1' className='flex flex-row items-center gap-6.25 w-fit h-fit absolute top-3.75 left-6'>
          <div id='search-01' className='h-6 w-6 content-center'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className='w-[16.8px] h-[16.8px] opacity-100'>
              <path d="M14.3269 14.44L17.8 17.8M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z" stroke="#7E7C7C" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    )
}

export default Search