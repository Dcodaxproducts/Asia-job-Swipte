"use client";
import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        <div className="flex gap-5">
          <div className="w-2/3">
            <div className="border rounded-lg border-gray-400">
              <div className="flex rounded-lg p-5 bg-darkGrey">
                <div className="w-1/3">
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className=" w-2/3">
                  <div className="flex text-white justify-between">
                    <div>
                      <h1>Profile Completion</h1>
                    </div>
                    <div>
                      <h1>50%</h1>
                    </div>
                  </div>

                  <Progress value={progress} className="w-[100%]" />
                </div>
              </div>

              <div className="flex p-5 ">
                <div className="flex flex-col items-center w-1/3 space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">OPEN FOR OPPORTUNITIESe</Label>
                </div>
                <div className=" w-2/3">
                  <div className="flex justify-between">
                    <div>
                    <div>
                      <h1>Jake Gyll</h1>
                    </div>
                    <div>
                      <p>Product Designer at Twitter</p>
                    </div>
                    <div>
                      <p>Manchester, UK</p>
                    </div>
                    </div>
                    <div className="">
                  <Button variant={"outline"}>Edit Profile</Button>
                </div>
                  </div>
                  
                </div>

                
              </div>
            </div>
          </div>
          <div className="w-1/3">hello</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
