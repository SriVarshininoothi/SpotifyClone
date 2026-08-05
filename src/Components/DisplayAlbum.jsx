import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];

    return (
        <>
            <Navbar />

            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt='' />
                <div className='flex flex-col items-start'>
                    <p>Playlist</p>
                    <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img src={assets.spotify_logo} className='inline-block w-5 mr-1' />
                        <b> Spotify </b>
                        &#8226; 1,323,154 likes
                        &#8226; <b> 50 songs, </b>
                        about 2 hr 30 min
                    </p>

                </div>
            </div>
            
                <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] '>

                    <p><b className='mr-4'>#</b>Title</p>
                    <p>Album</p>
                    <p className='hidden sm:block hidden md:block'>Date Added</p>
                    <img className='w-4 m-auto' src={assets.clock_icon} />
                </div>
                <hr className='text-[grey]'></hr>
                {
                    songsData.map((item,index)=>(
                        <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]'>
                            <div className='flex items-center text-white'>
                                <b className='mr-4 min-w-[20px] text-[#a7a7a7]'>{index+1}</b>
                                <img className='w-10 h-10 rounded mr-5 object-cover' src={item.image} alt=''/>
                               <span className='truncate text-[14px]'>{item.name}</span>
                            </div>
                            <p className='text-[15px]'>{albumData.name}</p>
                            <p className='text-[15px] hidden sm:block hidden md:block'>5 days ago</p>
                            <p className='text-[15px] text-center'>{item.duration}</p>
                        </div>
                    ))
                }
            

        </>
    )
}

export default DisplayAlbum