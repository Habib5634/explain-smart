import React from 'react'

const Benefit = () => {
    return (
        <div className='py-20 lg:py-[120px] px-5 bg-[#3F9FBFB]'>
            <div className='container mx-auto flex justify-between items-center gap-20 lg:gap-28 flex-col lg:flex-row'>
                <div className='max-w-[704px]'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none text-thr">
                        The Benefits You Get
                    </h1>
                    <ul className="mt-5 text-for text-2xl flex flex-col gap-12">
                        <li>• 3 weeks of Intensive Support- <span className='font-bold'>targeted, focused and highly efficient..</span></li>
                        <li>• Weekly coaching sessions: <span className='font-bold'>live and interactive, with space for all questions and deep work.</span></li>
                        <li>• Direct access to Ali: <span className='font-bold'>for individual support, whether in a group or 1:1.</span></li>
                    </ul>

                    <button className="mt-12 bg-blue text-white min-w-[200px] felx justify-center items-center py-2 rounded-lg">Secure Your Place</button>
                </div>
                <img src="/assets/benefit.png" alt="alt" className='w-full h-auto max-w-[424px]' />

            </div>

        </div>
    )
}

export default Benefit
