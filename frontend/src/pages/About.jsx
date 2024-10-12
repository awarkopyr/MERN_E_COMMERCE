import React from 'react'
import Title from '../components/title/Title'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-start'>
          <p>🌀The voice of Gen Z, printed on a tee. Bold designs, unapologetic vibes, and trending styles for the ones who keep it real. Wear your mood, express your truth, and rep the culture.🌀</p>
          <p>🌀 #GenZFashion #StayBold #WearYourStory 🌀</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Who said we are creating ideas? Please give him a maddle.</p>
        </div>
      </div>
    </div>
  )
}

export default about