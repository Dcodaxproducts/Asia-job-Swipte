import React from 'react'
import HeroComponent from '@/components/repeatComponents/Hero'
const HeroSection: React.FC = () => {
  return (
    <>
   
      <HeroComponent
        title="Find the best job!"
       
        suggestionText="Suggestion: Designer, Programming, Digital Marketing, Video, Animation"
        titleClassName="text-3xl md:text-7xl md:pt-8 text-center font-bold text-darkGrey" // Custom title style for Page1
        spanClassName="text-blue" // Custom span style for Page1
      />
      {/* Other content for Page2 */}
    </>
  )
}

export default HeroSection
