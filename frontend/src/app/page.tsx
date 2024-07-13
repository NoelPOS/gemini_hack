"use client";

import landingRobot from "./assets/img/landingRobot.png";
import Icon from "./assets/icon/Icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-purple-600 to-blue-100">
      <nav className="w-[90%] py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-3xl">Logo</h2>
          <div className="flex items-center justify-between gap-2 ">
            <button className="bg-purple-960 py-2 px-4 rounded-lg text-white">
              Log in
            </button>
            <button className="bg-purple-960 py-2 px-4 rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={landingRobot}
          width={300}
          height={300}
          alt="Landing Page Img"
        />
        <div className="flex flex-col items-center justify-center mt-2">
          <h2 className="text-3xl text-purple-200">Online English 4 Skills </h2>
          <h2 className="text-2xl text-white">Learning Platform</h2>
        </div>

        <div className="bg-white flex items-center justify-center mt-5 rounded-xl">
          <p className="text-center p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing <br />
            elit. Veniam, modi?
          </p>
        </div>

        <button
          className="bg-blue-200 p-2 rounded-lg text-white mt-5 flex items-center gap-1 "
          onClick={() => {
            router.push("/learn");
          }}
        >
          Get Started
          <Image src={Icon} width={15} height={15} alt="Landing Page Img" />
        </button>
      </div>
    </main>
  );
}
