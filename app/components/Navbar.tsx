import React from 'react'
import Image from 'next/image';

function Navbar() {
  return (
    <nav className='bg-[#1313139d] hover:bg-[#131313] transition-all duration-300 backdrop-blur-sm text-[#f1f1f1] rounded-full  w-[90%]  mx-auto md:h-16 h-[2.5rem] flex px-4 justify-between items-center shadow-sm'>
        {/* <RiMenu4Fill size={32} className='cursor-pointer' onClick={() => setVisibility(true)}  /> */}
        <Image src='/assets/logo.png' alt='SuperteamNG Logo' width={150} height={50}  quality={80} className='md:w-[4rem] md:h-[4rem] h-[2rem] w-[2rem]'/>
      <div className='flex justify-center gap-x-2 items-center'>

      <h1 className='font-bold md:text-3xl text-xl'>SupeateamNg</h1>
      <Image src='/assets/nigeria-apple.png' alt='SuperteamNG Logo' width={150} height={50}  quality={80} className='md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem]'/>
      
       <h1 className='font-bold md:text-3xl text-xl'>Enugu</h1>
      </div>


      {/* <div className='md:py-2 md:px-4 py-1 px-2 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300'>Book.</div> */}
      <Image src='/assets/logo.png' alt='SuperteamNG Logo' width={150} height={50}  quality={80} className='md:w-[4rem] md:h-[4rem] h-[2rem] w-[2rem] md:block hidden'/>

    </nav>
  )
}

export default Navbar