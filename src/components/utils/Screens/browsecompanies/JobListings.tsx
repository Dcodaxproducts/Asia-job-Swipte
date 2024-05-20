import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBookmarkDash } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import PaginationComponent from "./Pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MdGridView } from "react-icons/md";
import Image from "next/image";
// Define an interface for the shape of each job object
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  job: string;
  logo: string;
  tags: string[];
  categories?: string[];
}

// Specify the type of the jobs parameter using the Job interface
const JobListings: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <div className="md:w-full p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold ">All Jobs</h2>
        </div>
        <div className="flex  items-center  gap-3">
          <div>
            <p>Sort by: </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger> Most relevant</AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="h-5 border border-black hidden md:block"></div>
          <div className="hidden md:block">
            <MdGridView />
          </div>
        </div>
      </div>
      <div className="md:mb-10">
        <p>Showing 73 results</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
      {jobs.map((job) => (
       
        <Card className="px-5 py-8">
          <div className="" key={job.id}>
            <div className=" bg-white  ">
              <div className="flex justify-between mb-5 md:mb-2">
                <div className=" ">
                  <Image
                    width={61}
                    height={61}
                    src={job.logo}
                    alt={job.company}
                    className=" mr-4"
                  />
                  
                </div>

                <div className="md:mt-3">
                  
                  <p className="md:text-xl text-md bg-lightPink p-2 font-bold">{job.job}</p>
                </div>
                </div>
                <div>
                    <h3 className="md:text-xl text-lg font-bold">
                      {job.title}
                    </h3>
                    <div className="flex md:gap-3 items-center">
                      <p className="text-sm text-gray-600">
                        {job.company} • {job.location}
                      </p>
                     
                    </div>
                  </div>
               
              
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-   items-center mt-2">
                  {/* Render buttons for different categories */}
                  <Button asChild className="rounded-[30px] " >
                    <Link
                      className="border text-blue text-sm md:px-4 md:py-2"
                      href="/signin"
                    >
                      Business Service
                    </Link>
                  </Button>
                  
                </div>

                
              </div>
            </div>
          </div>
        </Card>
       
      ))}
 </div>
      <PaginationComponent />
    </div>
  );
};

export default JobListings;
