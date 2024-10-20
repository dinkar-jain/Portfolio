"use client";

import Publications from './components/Publications';
import Contact from './components/Contact';
import Work from './components/Work';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-gray-200 bg-opacity-20 rounded-lg shadow-md z-10 flex justify-center pl-6 text-sm sm:text-md">
        <ul className="flex items-center space-x-6 text-gray-800">
          {['Home', 'Work', 'Contact'].map((item) => (
            <li key={item}>
              <button onClick={() => {
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}>{item}</button>
            </li>
          ))}
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-xl">
              <a href='https://drive.google.com/file/d/1CARCQPScyQf2nODTpKGSP3wrofMUx7kF/view' target='_blank'>
                View Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div id='home'>
          <Hero />
        </div>
        <div id='work' className='mt-24'>
          <Work />
        </div>
        <div id='publications' className='mt-20 lg:mt-36'>
          <Publications />
        </div>
        <div id='contact' className='my-20 lg:my-36'>
          <Contact />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-between px-4 py-4 sm:px-6 lg:px-8 text-gray-500 text-sm sm:text-base">
        <div className="hidden lg:block font-semibold">
          Design and Developed <br /> by Dinkar
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/dinkar-jain" target='_blank' className="border border-gray-500 rounded-full px-6 py-1 hover:bg-gray-500 hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/dinkar-jain" target='_blank' className="border border-gray-500 rounded-full px-6 py-1 hover:bg-gray-500 hover:text-white">
            GitHub
          </a>
          <a href="https://x.com/DinkarJain5" target='_blank' className="border border-gray-500 rounded-full px-6 py-1 hover:bg-gray-500 hover:text-white">
            Twitter
          </a>
        </div>
        <div className="hidden lg:block font-semibold">
          © 2024 - All Rights Reserved <br />
          <button onClick={() => { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className='flex items-center justify-end space-x-2'>
            Back to Top
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
            </svg>
          </button>
        </div>
      </div>
    </div >
  );
}