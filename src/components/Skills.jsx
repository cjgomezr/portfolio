import React from 'react'

import Uipath from '../assets/uipath.png';
import PowerAutomate from '../assets/power-automate.png';
import Vb from '../assets/vb.png';
import Workato from '../assets/workato.png';
import GitHub from '../assets/github.png';
import Git from '../assets/git.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-500'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Uipath} alt="Uipath icon" />
                    <p className='my-4'>Uipath</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PowerAutomate} alt="HTML icon" />
                    <p className='my-4'>Power Automate</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Vb} alt="HTML icon" />
                    <p className='my-4'>VB.NET</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-[10px] pb-[23.1px]' src={Workato} alt="HTML icon" />
                    <p className='my-4'>Workato</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                    <p className='my-4'>Git</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills