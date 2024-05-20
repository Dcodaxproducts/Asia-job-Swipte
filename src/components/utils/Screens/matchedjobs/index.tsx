import React from 'react'
import HeroSection from './HeroSection'
import MatchedJobs from './MatchedJobs'

const index = () => {
  return (
    <>
    <div className=' bg-lightPink'>
    <HeroSection/>
    </div>

    <div>
        <MatchedJobs/>
    </div>
   
    </>
  )
}

export default index