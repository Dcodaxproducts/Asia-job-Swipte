"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { signIn } from '../../store/slices/authSlice';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      router.push('/');
    }
  }, [auth.user, router]);

  const handleSignIn = async () => {
    await dispatch(signIn({ email, password }));
  };

  return (
    <div className="md:flex md:overflow-hidden h-screen">
      <div className="hidden md:block relative md:w-1/2 w-full h-full">
        <Image
          src="/images/signupimage.png"
          alt="young lady"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 my-16">
        <div className="flex justify-center">
          <Tabs defaultValue="jobseeker" className="w-[550px]">
            <TabsList className="flex justify-center w-full">
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
                      <FcGoogle size={25} className="mr-2" /> Sign In with Google
                    </Button>
                  </CardDescription>
                  <CardDescription>
                    <div className="flex items-center justify-center">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <Button variant="link" className="mx-4 text-signinemail">
                        Or Sign In with email
                      </Button>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
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
                      variant="outline"
                      size={"lg"}
                      className="bg-blue w-full text-white"
                      onClick={handleSignIn}
                    >
                      Continue
                    </Button>
                  </div>
                  {auth.error && <p className="text-red-500">{auth.error}</p>}
                  <div className="flex items-center">
                    <h1 className="text-signinemail text-base">Don’t have an account?</h1>
                    <Button asChild variant="link" className="text-blue">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
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
                      <FcGoogle size={25} className="mr-2" /> Sign In with Google
                    </Button>
                  </CardDescription>
                  <CardDescription>
                    <div className="flex items-center justify-center">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <Button variant="link" className="mx-4 text-signinemail">
                        Or Sign In with email
                      </Button>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
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
                      variant="outline"
                      size={"lg"}
                      className="bg-blue w-full text-white"
                      onClick={handleSignIn}
                    >
                      Continue
                    </Button>
                  </div>
                  {auth.error && <p className="text-red-500">{auth.error}</p>}
                  <div className="flex items-center">
                    <h1 className="text-signinemail text-base">Don’t have an account?</h1>
                    <Button asChild variant="link" className="text-blue">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
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

export default SignInPage;
