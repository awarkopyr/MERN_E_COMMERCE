import React from 'react'
import Title from '../components/title/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"Contact"} text2={"Us"} />
        <div className="flex flex-col gap-10 border border-gray-300 bg-slate-200 sm:flex-row justify-between my-6 py-6 px-2 mx-2">
          <div className='border-y border-gray-600'>
            Via Phone
            <div className='flex items-center justify-center py-6 my-6'>
              <p className='text-sm sm:text-2xl'>+8801966649031</p>
            </div>
          </div>
          <div className='border-y border-gray-600'>
            Via Mail
            <div className='flex items-center justify-center py-6 my-6'>
              <p className='text-sm sm:text-2xl'>awarkohm2002@gmail</p>
            </div>
          </div>
          <div className='border-y border-gray-600'>
            Via Facebook
            <div className='flex items-center justify-center py-6 my-6'>
              <p className='text-sm sm:text-2xl'>facebook.com/fashion.zen.g</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact