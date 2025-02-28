import React from 'react';

const WellnessServices = () => {
  return (
    <div className="py-20 lg:py-[120px] px-5 container mx-auto">
      <div className='max-w-[667px]'>

        <h2 className="text-sm font-bold  text-yellow ">
          What We Offer
        </h2>
    
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none text-thr">
            Explore Our Comprehensive Wellness Services
          </h1>
          <p className='mt-10 text-[16px] md:text-2xl text-for'>Under the guidance of <span className='font-bold'>Ali Jamil Malik,</span> one of the leading success coaches in Germany, you will overcome your fears and develop your true potential in just 3 weeks with the help of hypnosis, meditation and conscious transformation.</p>
       
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[100px]">
          <div className="bg-blue p-10 rounded-[24px] relative">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 max-w-[312px]">
              Personalized Mental Health Plans
            </h3>
            <button className='h-10 px-6 border border-black rounded-lg bg-white text-blue flex justify-center items-center font-semibold mt-[101px]' >Read More</button>
            <img src="/assets/mental.png" alt="card img" className='absolute bottom-0 right-0 lg:right-0 2xl:right-10' />
          </div>
          <div className="bg-blue p-10 rounded-[24px] relative">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 max-w-[312px]">
              Compassionate & Professional Support
            </h3>
            <button className='h-10 px-6 border border-black rounded-lg bg-white text-blue  flex justify-center items-center font-semibold mt-[101px]' >Read More</button>
            <img src="/assets/medicine.png" alt="card img" className='absolute bottom-0 right-0 lg:right-0 2xl:right-10' />
          </div>
          <div className="bg-blue p-10 rounded-[24px] relative">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 max-w-[312px]">
              Compassionate & Professional Support
            </h3>
            <button className='h-10 px-6 border border-black rounded-lg bg-white text-blue  flex justify-center items-center font-semibold mt-[101px]' >Read More</button>
            <img src="/assets/peace-mind.png" alt="card img" className='absolute bottom-0 right-0 lg:right-0 2xl:right-10' />
          </div>
        </div>
     
    </div>
  );
};

export default WellnessServices;