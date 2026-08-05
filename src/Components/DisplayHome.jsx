import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongsData from './SongsData'

const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        {/* album data */}

        <div className='mb-4'>
          <h3 className='font-bold text-2xl my-5 flex items-start'>Featured Charts</h3>
          <div className='flex overflow-auto'>
          {
              albumsData.map((item,index)=>
                (<AlbumItem key={index} 
                  name={item.name}
                   desc={item.desc} 
                   id={item.id}
                    image={item.image}/>))
             }    
          </div>
             
        </div>

      {/* songs data */}

         <div className='mb-4'>
          <h3 className='font-bold text-2xl my-5 flex items-start'>Today's biggest hits</h3>
          <div className='flex overflow-auto'>
          {
            songsData.map((item,index)=>(
              <SongsData key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>
            ))
              
          }
          </div>
             
        </div>
    </>
  )
}

export default DisplayHome