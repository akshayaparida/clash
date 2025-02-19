import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const login = () => {
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className="w-[550px] bg-white rounded-xl px-10 shadow-md">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold  text-center bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">
          Clash
        </h1>
        <h1 className="text-xl md:text-3xl lg:text-4xl mt-2  font-bold">
          Login
        </h1>
        <p>Welcome Back</p>
        <form>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your  Password"
            />
          </div>

          <div className="text-right font-bold">
            <Link href="forget-password"> Forget Password</Link>
          </div>

          <div className="mt-4">
            <Button className="w-full">Submit</Button>
          </div>

          <p className="text-center mt-2">
            Don't have an account ?{" "}
            <strong>
              {" "}
              <Link href="/register">Register</Link>{" "}
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
