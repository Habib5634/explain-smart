
export default function ThreeWeekProgram() {
    return (
        <div className="py-20 lg:py-[120px] px-5 container mx-auto">
            <div className='max-w-[667px]'>

                <h2 className="text-sm font-bold  text-yellow   ">
                    What We Offer
                </h2>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none text-thr">
                    The <span className="font-bold">3 Week</span> Program in Detail:
                </h1>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-[45px]">
                {/* Week 1 */}
                <div className=" p-6 max-w-[510px] ">
                    <img src="/assets/clarity.png" alt="" />
                    <h3 className="text-2xl text-thr mt-5">WEEK 1: <span className="font-bold">Self-Confidence & Clarity</span></h3>
                    <ul className="mt-5 text-for text-lg">
                        <li>• Meditation: Start with inner peace and mental clarity.</li>
                        <li>• Hypnosis: Strengthen self-confidence, release blockages, build self-love.</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2">(Integrated techniques such as Reiki and quantum healing work subtly in hypnosis.)</p>
                    <p className="text-gray-600 text-sm mt-2"><span className="text-blueish">➡️</span> Take the first step and feel how you immediately gain more self-confidence</p>
                    <button className="mt-12 bg-yellow text-white min-w-[200px] felx justify-center items-center py-2 rounded-lg">Start Now</button>
                </div>



                {/* Week 3 */}
                <div className=" p-6 max-w-[510px] ">
                    <img src="/assets/fear.png" alt="" />

                    <h3 className="text-2xl text-thr mt-5">WEEK 3: <span className="font-bold">Action & Implementation</span></h3>
                    <ul className="mt-5 text-for text-lg">
                        <li>• Meditation: Manifest your goals and feel the power of your vision.</li>
                        <li>• Hypnosis: Develop concrete steps to put your goals into action.</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2">(The energetic transformation from hypnosis supports you in acting sustainably.)</p>
                    <p className="text-gray-600 text-sm mt-2"><span className="text-blueish">➡️</span>  Free yourself from fears and experience new lightness. Book now!</p>
                    <button className="mt-12 bg-yellow text-white min-w-[200px] felx justify-center items-center py-2 rounded-lg">Achieve Goals</button>
                </div>

                {/* Week 2 */}
                <div className=" p-6 max-w-[510px] ">
                    <img src="/assets/action.png" alt="" />

                    <h3 className="text-2xl text-thr mt-5">WEEK 2: <span className="font-bold">Letting go of fears</span></h3>
                    <ul className="mt-5 text-for text-lg">
                        <li>• Meditation: Focus on change and letting go of negativity.</li>
                        <li>• Hypnosis: Liberation from deep-seated fears and beliefs.</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2">(Here, profound techniques help to realign you energetically.)</p>
                    <p className="text-gray-600 text-sm mt-2"><span className="text-blueish">➡️</span> Take action and achieve your goals – sign up today.</p>
                    <button className="mt-12 bg-yellow text-white min-w-[200px] felx justify-center items-center py-2 rounded-lg">Secure Your Place</button>
                </div>

                {/* Coaching */}
                <div className=" p-6 max-w-[510px] ">
                    <img src="/assets/lock.png" alt="" />

                    <h3 className="text-2xl text-thr mt-5">GROUP COACHING or 1:1 - You decide!</h3>
                    <ul className="mt-5 text-for text-lg">
                        <li>• Group coaching: Learn through interaction with others.</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2"><span className="text-blueish">➡️</span> Secure your place in the group now – limited and sought after!</p>
                    <ul className="mt-5 text-for text-lg">
                        <li>• 1:1 coaching: Your very own personal journey, tailored to your needs.</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2"><span className="text-blueish">➡️</span> Get your exclusive 1:1 session with Ali – limited places available!!</p>
                    
                </div>
            </div>
        </div>
    );
}
