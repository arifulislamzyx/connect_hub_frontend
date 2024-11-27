import { FeatureSection } from "@/components/base/FeatureSection";
import { HeroSection } from "@/components/base/HeroSection";
import { UserReviews } from "@/components/base/UsersReview";
import { Footer } from "@/layout/Footer";
import { Navbar } from "@/layout/Navbar";
import Image from "next/image";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user={session?.user} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
