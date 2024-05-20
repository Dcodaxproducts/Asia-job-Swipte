import React from 'react'
import HeroSection from './HeroSection'
import SavedJobs from './SavedJobs'

const index = () => {
  return (
    <>
    <div className=' bg-lightPink'>
    <HeroSection/>
    </div>

    <div>
        <SavedJobs/>
    </div>
   
    </>
  )
}

export default index