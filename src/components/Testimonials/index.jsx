import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className='py-20 lg:py-[120px] px-5 bg-[#3F9FBFB]'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div className='max-w-[667px]'>

                    <h2 className="text-sm font-bold  text-yellow ">
                        Testimonials
                    </h2>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none text-thr mb-10">
                        Experience of Our Clients
                    </h1>
                    <img src="/assets/test.png" alt="" />
                </div>
                <div className=''>
                    <div className='text-[#FDCF09] text-2xl flex items-center gap-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    </div>
                    <p className='text-3xl text-for mt-2 max-w-[530px]'>“I booked the program to overcome my fears. After the first day, I felt a positive change in my life.”</p>
                        <h1 className='text-2xl text-thr mt-16'>Sarah Michels</h1>
                        <h1 className='text-lg font-semibold text-thr '>Client</h1>
               
               
                </div>
            </div>
        </div>
    )
}

export default Testimonials
