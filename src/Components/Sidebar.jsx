import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            {/* Top Navigation */}
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.home_icon} alt='Home' className='w-6' />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.search_icon} alt='Search' className='w-6' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>

            {/* Library Section */}
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} alt="" className='w-8' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img src={assets.arrow_icon} alt="" className='w-5' />
                        <img src={assets.plus_icon} alt="" className='w-5' />
                    </div>
                </div>

                {/* Create Playlist Box */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4'>
                    <h3 className='font-bold text-sm'>Create your first playlist</h3>
                    <p className='font-light text-xs'>It's easy we will help you</p>
                    <button className='bg-white rounded-full text-black px-4 py-1.5 text-[15px] mt-4'>Create playlist</button>
                </div>

                {/* Podcasts Box */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4'>
                    <h3 className='font-bold text-sm'>Let's find some podcasts to follow</h3>
                    <p className='font-light text-xs'>we'll keep you updated on new episodes</p>
                    <button className='bg-white rounded-full text-black px-4 py-1.5 text-[15px] mt-4'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar