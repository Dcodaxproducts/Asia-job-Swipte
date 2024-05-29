"use client";
import React from "react";
import { Slash } from "lucide-react";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBookmarkDash } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define an interface for the shape of each job object
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  tags: string[];
  categories?: string[];
}

const jobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    salary: "$15k/Monthly",
    logo: "/images/66.png",
    tags: ["Full-Time", "Marketing", "Design"],
  },
];
const HeroSection = () => {
  return (
    <>
      <div className="bg-lightPink">
        <div className=" mx-3 md:container ">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="py-3 md:py-10">
            {jobs.map((job) => (
              <Card className="my-5 bg-white p-4">
                <div className="" key={job.id}>
                  <div className="   ">
                    <div className="flex justify-between mb-5 md:mb-2">
                      <div className="flex items-center">
                        <Image
                          width={61}
                          height={61}
                          src={job.logo}
                          alt={job.company}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3 className="md:text-xl text-lg font-bold">
                            {job.title}
                          </h3>
                          <div className="flex md:gap-3 items-center">
                            <p className="text-sm text-gray-600">
                              {job.company} • {job.location}
                            </p>
                            <div className="md:block hidden">
                              <IoCheckmarkDoneSharp className="text-blue" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:mt-3">
                        <div className="md:hidden mb-2 flex justify-end">
                          <IoShareSocialOutline
                            className="text-blue "
                            size={20}
                          />
                        </div>
                        <p className="md:text-xl text-md font-bold">
                          {job.salary}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-wrap gap-3 md:ml-20  items-center ">
                        {/* Render buttons for different categories */}
                        <Button
                          asChild
                          className="rounded-[30px] "
                      
                        >
                          <Link
                            className="bg-sky-300 text-blue text-sm md:px-4 md:py-2"
                            href="/signin"
                          >
                            Full-Time
                          </Link>
                        </Button>
                        <div className="hidden md:block h-5 border border-lightgrey"></div>
                        <Button
                          asChild
                          className="rounded-[30px]"
                      
                        >
                          <Link
                            className="border border-darkGrey text-darkGrey text-sm px-4 py-2"
                            href="/signin"
                          >
                            Marketing
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="rounded-[30px]"
                      
                        >
                          <Link
                            className="border border-darkGrey text-darkGrey text-sm px-4 py-2"
                            href="/signin"
                          >
                            Design
                          </Link>
                        </Button>
                        <div className="md:block hidden">
                          <IoShareSocialOutline
                            className="text-blue "
                            size={30}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col mt-2">
                        <Dialog>
                          <DialogTrigger>
                            <Button className="bg-blue text-white text-sm px-8 py-2 rounded-md">
                              Apply
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white ">
                            <DialogHeader className="bg-blue px-16 py-5 flex text-center ">
                              <DialogTitle className="text-white text-3xl">
                                Your Profile Is Incomplete
                              </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="px-16 ">
                              <h1 className="modaltext text-2xl">
                                Complete your Profile to Apply for job!
                              </h1>
                              <p className="text-signininput4">
                                Click on button to complete your profile.
                              </p>
                            </DialogDescription>
                            <div className="px-16 pb-10">
                              <Button
                                className="w-full px-24 py-6"
                                asChild
                                size={"custom"}
                              >
                                <Link
                                  className="bg-blue text-white text-sm  rounded-md"
                                  href="/myprofile"
                                >
                                  Go to My Profile
                                </Link>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
