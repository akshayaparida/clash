import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import  Link  from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image
          src="/hfoodvsffood.svg"
          width={600}
          height={600}
          alt="healthy food vs fast food"
        />
          </div>
          <div className=" text-center  mt-4">
      <h1 className="text-xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">
        Clash
          </h1>
              <p className="text-sm md:text-xl  lg:text-2xl font-bold text-center">Discover the better choice, together</p>
              <Link href="/login">
              <Button className="mt-2">Start Free</Button>
              </Link>
       
              </div>
    </div>
  );
}
