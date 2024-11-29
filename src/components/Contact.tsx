import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from "react-icons/bs";


const Contact =() => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aso="zoom-in-up">get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aso="zoom-in-up">
                    Drop me a line, give me a call or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aso="zoom-in-up">
                    <AiOutlineMail size={30} /> saimamajid618@gmail.com 
                </div> 
                <div className='flex gap-3 items-center' data-aso="zoom-in-up">
                <BsFillTelephoneFill size={30} /> (021) 000-0000    
                </div>
            </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aso="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40pxl bg-transparent border-accent border rounded-lg'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aso="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40pxl bg-transparent border-accent border rounded-lg'
            id='email'/>
        </div>
        <div className='flex flex-col gap-1' data-aso="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
            className='h-[40pxl bg-transparent border-accent border rounded-lg'
            id='msg' rows={8}>
            </textarea>
        </div>
        <button className='bg-accent p-2 px-6' data-aso="zoom-in-up">Send</button>


        
        </div>
      
    </div>
    </div>
  )
}

export default Contact
