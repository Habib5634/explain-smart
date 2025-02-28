import React from 'react'

const Healing = () => {
  return (
    <div className='py-20 lg:py-[120px] px-5 container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center bg-white'>
      <div className='max-w-[636px]'>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-none text-thr">
      Start Your Healing Today
          </h1>
          <p className='text-2xl text-for mt-10'>It’s never too early or too late to seek help. Our specialists are here to guide you every step of the way.</p>
      </div>
      <button className="mt-12 bg-yellow text-white min-w-[200px] felx justify-center items-center py-2 rounded-lg max-w-[250px] mx-auto">Scheduled</button>
    </div>
  )
}

export default Healing
