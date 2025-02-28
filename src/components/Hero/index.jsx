import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='py-20 lg:py-[120px] px-5 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center'>
                <div className='max-w-[552px]'>
                    <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-thr'>Speed ​​Coaching: Become the final boss of your life in 3 weeks!</h1>
                    <p className='text-for text-xl md:text-2xl lg:text-3xl font-medium mt-[60px]'>Overcome fears, increase your self-confidence and live your full potential - in just 3 weeks. Start now with our intensive speed coaching and experience immediate success.</p>

                    <button className='h-[56px] flex justify-center items-center px-6 text-white bg-blue rounded-lg text-lg mt-[120px]'>Get Free Consultant</button>
                </div>

                <div className='grid grid-cols-2 gap-8'>
                    <img src="/assets/hero1.png" alt="hero" className='' />
                    <img src="/assets/hero2.png" alt="hero" className='' />
                    <img src="/assets/hero3.png" alt="hero" className='' />
                    <img src="/assets/hero4.png" alt="hero" className='' />

                </div>


            </div>
            <div className='bg-yellow py-20 lg:py-[120px] px-5'>

                <div className=' container mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
                    <div className='flex gap-3 items-center'>
                        <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-white'>1,000+</h1>
                        <p className='text-xl lg:text-2xl max-w-[154px] text-wrap'>Lives Transformed</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-white'>95%</h1>
                        <p className='text-xl lg:text-2xl max-w-[154px] text-wrap'>Clients Satisfied</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-white'>Top 10 </h1>
                        <p className='text-xl lg:text-2xl max-w-[154px] text-wrap'>Mental Health Center</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
