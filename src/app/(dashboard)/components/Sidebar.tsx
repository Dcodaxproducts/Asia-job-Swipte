"use client";
import { useCommonData } from "@/context/commonData";
import { menu } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoBriefcaseOutline, IoSettingsOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Sidebar = () => {
  const pathname = usePathname();
  const { changeActivePage } = useCommonData();
  const isActive = (path: string): string => {
    return (path === "/" ? pathname === path : pathname.includes(path))
      ? "bg-signature text-white"
      : "hover:text-signature";
  };

  return (
    <>
      <div className="w-68 h-screen sticky top-0 bg-background shadow px-4 border-r-2">
        <div className="h-20 flex justify-center items-center border-b border-blue text-signature text-3xl font-bold">
          Asia&nbsp;<span className="text-primary">Jobs</span>Swipe
        </div>
        <div className=" flex flex-col gap-4 my-8">
          {menu.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`${isActive(
                path
              )} flex items-center gap-2 font-bold text-sm p-4 transition-colors cursor-pointer rounded-lg`}
            >
              <Icon size={20} />
              <p>{name}</p>
            </Link>
          ))}

          <div className="text-black  border-t  border-blue"></div>

          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" flex gap-5 justify-start rounded-xl text-white py-7 bg-darkGrey"><FaPlus /> Post a New Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
         
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
              <div className="absolute bottom-0 w-56">
                <hr  className="border w-full "/>
              <Link
            href={"/settings"}
            className={`
               
              flex items-center gap-2 font-bold text-sm p-4 transition-colors cursor-pointer  rounded-lg`}
          >
            <IoSettingsOutline size={20} />
            <p>Setting</p>
          </Link>
              </div>
          
          
        </div>
      
      </div>
    </>
  );
};

export default Sidebar;
