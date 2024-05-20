import React from 'react'
import HeroSection from './HeroSection'
import AllJobs from './BrowseCompanies'

const index = () => {
  return (
    <>
    <div className=' bg-lightPink'>
    <HeroSection/>
    </div>

    <div>
        <AllJobs/>
    </div>
   
    </>
  )
}

export default index