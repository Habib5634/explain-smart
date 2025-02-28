'use client'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
      const cardData = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        title: 'Hypnosis on Anxiety',
        author: 'By Pedagang Asongan',
        date: 'December 25, 2024',
        image: '/assets/Union.png',
        profile: '/assets/prof.png'
      }));
    return (
        <>
            <div className='py-20 lg:py-[120px] px-5 bg-yellow'>
                <div className='container mx-auto '>
                    <h1 className='text-[70px] md:text-[80px]  lg:text-[90px] font-bold text-center font-sans'>Blogs</h1>
                </div>
            </div>

            <div className='py-20 lg:py-[120px] px-5 container mx-auto '>
                <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-thr text-center'>Healing and Strength</h1>
                <div className="mt-12">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className='px-2'>
            <div className='bg-card w-auto bg-cover overflow-hidden rounded-2xl h-[450px] relative p-6 flex flex-col justify-end'>
              <img src={card.image} alt="" className='w-full  h-full max-h-[250px]' />
              <div className='absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col justify-center text-center'>
                <img src={card.profile} alt="prof" className='mx-auto' />
                <h1 className='text-lg font-medium'>{card.title}</h1>
                <p className='text-for mt-3 text-sm'>{card.author}</p>
                <p className='font-semibold mt-[45%] text-thr'>{card.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

            </div>

            <div className='py-20 lg:py-[120px] px-5 container mx-auto '>
                <h1 className='text-5xl font-semibold lg:text-[55px] 2xl:text-[64px] text-thr text-center'>Over Coming Fears</h1>
                <div className="mt-12">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className='px-2'>
            <div className='bg-card w-auto bg-cover overflow-hidden rounded-2xl h-[450px] relative p-6 flex flex-col justify-end'>
              <img src={card.image} alt="" className='w-full  h-full max-h-[250px]' />
              <div className='absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col justify-center text-center'>
                <img src={card.profile} alt="prof" className='mx-auto' />
                <h1 className='text-lg font-medium'>{card.title}</h1>
                <p className='text-for mt-3 text-sm'>{card.author}</p>
                <p className='font-semibold mt-[45%] text-thr'>{card.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

            </div>
        </>
    )
}

export default Blog
