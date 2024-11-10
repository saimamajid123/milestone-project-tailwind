import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover'
    style={{backgroundSize: "35%" ,backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className=''>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-around mt-16'>
        <div>
            <Image 
            src={'/profile.jpg'}
            alt=''
            width={300}
            height={300}
            />
          </div>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Saima</p>
            <p data-aso="zoom-in-up">Majid</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
