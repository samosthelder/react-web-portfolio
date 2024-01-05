import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#022c43]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ffd700]'> //Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Sam Anderson
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm an Aspiring Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m continuously learning and developing my front end skills whenever I can meanwhile working fulltime
        </p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffd700] hover:border-[#ffd700]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
           
               <Link to='work' smooth={true} duration={500}>
               <HiArrowNarrowRight className='ml-3 ' />
               </Link>
            
          
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
