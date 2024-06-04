"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { registerJobSeeker, registerCompanyRole } from '../../store/slices/authSlice';
import { Button } from "@/components/ui/button";
import { FaGoogle, FaArrowLeft } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
const SignUpPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (auth.user) {
      router.push('/');
    }
  }, [auth.user, router]);

   const handleSignUp = async (role: string) => {
    if (role === 'jobseeker') {
      await dispatch(registerJobSeeker({ email, password, firstName, lastName, otp }));
    } else if (role === 'employer') {
      await dispatch(registerCompanyRole({ email, password, firstName, lastName, role: 'company' }));
    }
  };

  return (
    <div className="md:flex ">
      <div className="hidden md:flex md:w-1/2 w-full min-h-screen  bg-cover  bg-center" style={{ backgroundImage: "url('/images/signupimage.png')" }}>
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-center min-h-screen py-8">
        <div className="w-[550px]">
          <Tabs defaultValue="jobseeker" className="w-full">
            <TabsList className="flex justify-center w-full mb-4">
              <TabsTrigger value="jobseeker" className="w-1/3">Job Seeker</TabsTrigger>
              <TabsTrigger value="employer" className="w-1/3">Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="jobseeker">
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex mb-5 justify-center text-darkGrey md:text-3xl">
                    Get more opportunities
                  </CardTitle>
                  <CardDescription>
                    <Button className="w-full text-darkGrey" variant="outline">
                      <FcGoogle  size={25} className="mr-2" /> Sign Up with Google
                    </Button>
                  </CardDescription>
                  <CardDescription>
                    <div className="flex items-center justify-center">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <Button variant="link" className="mx-4 text-signinemail">
                        Or Sign Up with email
                      </Button>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="text-signininput text-base">First Name</Label>
                    <Input
                      id="firstName"
                      className="text-signininput3"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="text-signininput text-base">Last Name</Label>
                    <Input
                      id="lastName"
                      className="text-signininput3"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-signininput text-base">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      className="text-signininput3 text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-signininput text-base">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      className="text-signininput3 text-base"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      size={"lg"}
                      className="bg-blue w-full text-white"
                      onClick={() => handleSignUp('jobseeker')}
                    >
                      Continue
                    </Button>
                  </div>
                  {auth.error && <p className="text-red-500">{auth.error}</p>}
                  <div className="flex items-center">
                    <h1 className="text-signinemail text-base">Already have an account?</h1>
                    <Button asChild variant="link" className="text-blue">
                      <Link href="/signin">Login</Link>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-signininput4 text-base">
                      By clicking 'Continue', you acknowledge that you have
                      read and accept the{" "}
                      <span className="text-blue">Terms of Service</span> and{" "}
                      <span className="text-blue">Privacy Policy</span>.
                    </h1>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="w-full text-blue">
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
                    <Button className="w-full text-darkGrey" variant="outline">
                      <FcGoogle  size={25} className="mr-2" /> Sign Up with Google
                    </Button>
                  </CardDescription>
                  <CardDescription>
                    <div className="flex items-center justifycenter">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <Button variant="link" className="mx-4 text-signinemail">
                        Or Sign Up with email
                      </Button>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="text-signininput text-base">First Name</Label>
                    <Input
                      id="firstName"
                      className="text-signininput3"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="text-signininput text-base">Last Name</Label>
                    <Input
                      id="lastName"
                      className="text-signininput3"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-signininput text-base">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      className="text-signininput3 text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-signininput text-base">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      className="text-signininput3 text-base"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      size={"lg"}
                      className="bg-blue w-full text-white"
                      onClick={() => handleSignUp('employer')}
                    >
                      Continue
                    </Button>
                  </div>
                  {auth.error && <p className="text-red-500">{auth.error}</p>}
                  <div className="flex items-center">
                    <h1 className="text-signinemail text-base">Already have an account?</h1>
                    <Button asChild variant="link" className="text-blue">
                      <Link href="/signin">Login</Link>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-signininput4 text-base">
                      By clicking 'Continue', you acknowledge that you have
                      read and accept the{" "}
                      <span className="text-blue">Terms of Service</span> and{" "}
                      <span className="text-blue">Privacy Policy</span>.
                    </h1>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="w-full text-blue">
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
  );
};

export default SignUpPage;
