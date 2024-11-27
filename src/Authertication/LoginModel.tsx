"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleLogin = async () => {
    signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Start Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let's Chat with your Favorite Person</DialogTitle>
          <DialogDescription>
            Connect your Contact on Real Time
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            alt="google_logo"
            width={25}
            height={25}
            className="mr-4"
          ></Image>
          Continue With Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
