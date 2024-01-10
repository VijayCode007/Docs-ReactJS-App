import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref_FG=useRef(null);

    const data =[
        {
            desc :" data is changed now , from here ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, officia.",
            filesize : "0.5mb",
            close : true,
            tag : { isOpen : true , tagTitle : "Download" , tagColor : "green"}
        }, 
        {
          desc :" data is changed now , from here ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, officia.",
          filesize : "0.5mb",
          close : true,
          tag : { isOpen : false , tagTitle : "Download" , tagColor : "green"}
        },
        {
          desc :" data is changed now , from here ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, officia.",
          filesize : "0.5mb",
          close : false,
          tag : { isOpen : true , tagTitle : "Download" , tagColor : "blue"}
        },
        {
          desc :" data is changed now , from here ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, officia.",
          filesize : "0.5mb",
          close : true,
          tag : { isOpen : true , tagTitle : "Download" , tagColor : "green"}
      },
      {
        desc :" data is changed now , from here ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, officia.",
        filesize : "0.5mb",
        close : false,
        tag : { isOpen : false , tagTitle : "Download" , tagColor : "green"}
    }

    ];

  return (
    <div ref={ref_FG} className='absolute z-3 p-5 w-full h-screen flex gap-10 flex-wrap overflow-hidden'>
      {data.map((item , index )=>(
        <Card data={item}  reference={ref_FG} />
      ))
      }
    </div>
  )
}

export default Foreground
