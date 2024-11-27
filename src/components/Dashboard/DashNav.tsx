import Link from "next/link";
import React from "react";
import LoginModel from "@/Authertication/LoginModel";
import { Button } from "@/components/ui/button";
import ProfileMenu from "./ProfileMenu";

const DashNav = ({ image, name }: { image?: string; name: string }) => {
  return (
    <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="#features">Features</Link>
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
};

export default DashNav;
