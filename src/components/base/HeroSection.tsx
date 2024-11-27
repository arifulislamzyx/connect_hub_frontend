import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroImage from "../../../public/images/conversation.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Instant Chat Links for Seamless Conversations
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        QuickChat makes it effortless to create secure chat links and start
        conversations in seconds.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          Start Chatting
        </Button>
      </Link>

      <div className=" flex justify-center">
        <Image src={heroImage} alt="Illustration" width={300} height={300} />
      </div>
    </section>
  );
};