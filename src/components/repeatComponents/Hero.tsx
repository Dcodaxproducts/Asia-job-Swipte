// components/Hero.tsx
import React from 'react';
import { Input } from '@/components/ui/input';
import { FiSearch } from 'react-icons/fi';
import { TiLocationOutline } from 'react-icons/ti';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string; // Optional prop
  suggestionText?: string; // Optional prop
  showSuggestions?: boolean; // Optional prop with a default value
  backgroundImage?: string; // Optional prop for background image
  titleClassName?: string; // Optional prop for custom title styles
  spanText?: string; // Optional prop for span text
  afterSpanText?: string;
  spanClassName?: string; // Optional prop for custom span styles
  showSearchBar?: boolean; // New prop to control search bar visibility
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  suggestionText = 'Suggestion: Designer, Programming, Digital Marketing, Video, Animation',
  showSuggestions = true,
  backgroundImage, // No default value
  titleClassName = 'text-3xl md:text-7xl md:pt-8 text-center font-bold text-darkGrey', // Default title styles
  spanText,
  afterSpanText,
  spanClassName = 'text-blue', // Default span styles
  showSearchBar = true, // Default value for showSearchBar prop
}) => {
  return (
    <div className="md:max-w-4xl md:mx-auto mx-5">
      <div className="py-8">
        {backgroundImage && (
          <div
            className="bg-cover bg-center md:py-10 bg-no-repeat"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: '600px 200px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <h1 className={titleClassName}>
              {title} {spanText && <span className={spanClassName}>{spanText}</span>}{afterSpanText}
            </h1>
          </div>
        )}
        {!backgroundImage && (
          <h1 className={titleClassName}>
            {title} {spanText && <span className={spanClassName}>{spanText}</span>}
          </h1>
        )}
        {subtitle && (
          <div className="md:py-8">
            <p className="text-lg md:text-2xl text-center text-paragraphBlue">
              {subtitle}
            </p>
          </div>
        )}
        {showSearchBar && (
          <div className="max-w-4xl bg-white justify-between rounded-lg p-3 flex flex-col md:flex-row gap-5 items-center mt-8 mx-auto">
            <div className="relative flex items-center">
              <FiSearch size={35} className="absolute inset-y-1 text-blue left-0 pl-3 pointer-events-none" />
              <Input
                type="text"
                placeholder="Job title, Keyword..."
                className="pl-10 text-inputGrey text-lg md:border-none md:outline-none"
              />
            </div>
            <div className="md:border-l relative flex items-center">
              <TiLocationOutline size={35} className="absolute text-blue inset-y-1 left-0 pl-3 pointer-events-none" />
              <Input
                type="text"
                placeholder="Your Location"
                className="pl-10 md:border-none text-inputGrey text-lg md:outline-none"
              />
            </div>
            <Button asChild>
              <Link className="bg-blue text-white text-sm px-4 py-3 rounded-md" href="/signin">
                Find Jobs
              </Link>
            </Button>
          </div>
        )}
        {showSuggestions && (
          <div className="max-w-4xl flex md:justify-start text-center mt-4">
            <p>{suggestionText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;