import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion"
// Card Architecture

/**
 * icon
 * text
 * footer
 *      upper part -> text(left) and download (right)
 *      element -> can be a status bar or download button 
 * 
 */

// instead of sending data from props , we are desctructuring it by using {data} which avoids us from props.data 

function Card({ data , reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}  dragTransition={{ bounceStiffness: 700, bounceDamping: 18}} className='relative flex-shrink-0 h-72 w-64  p-8 rounded-3xl bg-zinc-900/90 overflow-hidden'>
            
            {/* Icon component */}
            <FaRegFileAlt className='size-[30px] text-white/20' />
            
            <p className='text-sm py-6 text-zinc-300 leading-snug font-semibold'>{data.desc}</p>

            <div className=' footer absolute left-0 bottom-0 w-full' >

                {/* Upper part of footer */}
                <div className='flex p-5 mx-2 items-center justify-between'>
                    <div className='text-l  text-white/70' >{data.filesize}</div>
                    <span className='h-7 w-7 rounded-full flex items-center justify-center bg-zinc-500'>
                        {data.close ? <IoClose /> : <MdFileDownload />}
                    </span>
                </div>

                {
                    // This means that when the value of isOpen is true then only it will return this component
                    data.tag.isOpen && (
                        /* Bottom footer element which shows download and progress button */
                        < div className={`elem py-3 ${data.tag.tagColor=="blue" ? "bg-blue-600" : "bg-green-600"} w-full flex items-center justify-center`}>
                            <h3 className='text-sm text-white font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }

            </div>

        </motion.div >

    )
}

export default Card