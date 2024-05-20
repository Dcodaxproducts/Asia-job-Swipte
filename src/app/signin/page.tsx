import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="md:flex  ">
        <div className="relative w-1/2 h-[100] ">
          {" "}
          {/* Set the desired height */}
          <Image
            src="/images/signupimage.png"
            alt="young lady"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="w-1/2 my-16">
          <div className="flex justify-center">
            <Tabs defaultValue="jobseeker" className="w-[550px]">
              <TabsList className="  flex justify-center   w-full">
                <TabsTrigger value="jobseeker" className="w-1/3">
                  Job Seeker
                </TabsTrigger>
                <TabsTrigger value="employer" className="w-1/3">
                  Employer
                </TabsTrigger>
              </TabsList>
              <TabsContent value="jobseeker">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="flex mb-5 justify-center text-darkGrey md:text-3xl">
                      Get more opportunities
                    </CardTitle>
                    <CardDescription>
                      <div className=" ">
                        <Button
                          className="w-full text-darkGrey "
                          variant="outline"
                        >
                          <FcGoogle size={25} className="mr-2  " /> Sign In with
                          Google
                        </Button>
                      </div>
                    </CardDescription>

                    <CardDescription>
                      <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <Button
                          variant="link"
                          className="mx-4 text-signinemail"
                        >
                          Or Sign In with email
                        </Button>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-1">
                      <Label
                        htmlFor="email"
                        className="text-signininput text-base"
                      >
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="text-signininput3 text-base"
                        defaultValue="Enter email address"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label
                        htmlFor="new"
                        className="text-signininput text-base"
                      >
                        Password
                      </Label>
                      <Input
                        id="new"
                        type="password"
                        className="text-signininput3 text-base"
                        defaultValue="Enter Password"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm signininput font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <Button
                        asChild
                        variant="outline"
                        size={"lg"}
                        className="bg-blue w-full text-white"
                      >
                        <Link href="/signup">Continue</Link>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-signinemail text-base">
                        Don’t have an account?
                      </h1>
                      <Button asChild variant="link" className="text-blue">
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="link"
                      className=" w-full text-blue"
                    >
                      <Link href="/home">
                        <FaArrowLeft size={20} className="mr-2" /> Back to Home
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="employer">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="flex mb-5 justify-center text-darkGrey md:text-3xl">
                      Get more opportunities
                    </CardTitle>
                    <CardDescription>
                      <div className=" ">
                        <Button
                          className="w-full text-darkGrey "
                          variant="outline"
                        >
                          <FcGoogle size={25} className="mr-2  " /> Sign In with
                          Google
                        </Button>
                      </div>
                    </CardDescription>

                    <CardDescription>
                      <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <Button
                          variant="link"
                          className="mx-4 text-signinemail"
                        >
                          Or Sign In with email
                        </Button>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-1">
                      <Label
                        htmlFor="email"
                        className="text-signininput text-base"
                      >
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="text-signininput3 text-base"
                        defaultValue="Enter email address"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label
                        htmlFor="new"
                        className="text-signininput text-base"
                      >
                        Password
                      </Label>
                      <Input
                        id="new"
                        type="password"
                        className="text-signininput3 text-base"
                        defaultValue="Enter Password"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm signininput font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <Button
                        asChild
                        variant="outline"
                        size={"lg"}
                        className="bg-blue w-full text-white"
                      >
                        <Link href="/signup">Continue</Link>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-signinemail text-base">
                        Don’t have an account?
                      </h1>
                      <Button asChild variant="link" className="text-blue">
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="link"
                      className=" w-full text-blue"
                    >
                      <Link href="/home">
                        <FaArrowLeft size={20} className="mr-2" /> Back to Home
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
