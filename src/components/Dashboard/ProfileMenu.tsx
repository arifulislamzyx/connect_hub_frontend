"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";
import dynamic from "next/dynamic";
const LogoutModel = dynamic(() => import("../../Authertication/LogoutModel"));
const ProfileMenu = ({ name, image }: { name: string; image?: string }) => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  return (
    <DropdownMenu>
      {logoutOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <LogoutModel open={logoutOpen} setOpen={setLogoutOpen} />
        </Suspense>
      )}
      <DropdownMenuTrigger>
        <UserAvatar name={name} image={image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLogoutOpen(true)}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
