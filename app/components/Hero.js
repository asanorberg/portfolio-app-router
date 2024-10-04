"use client";

import Image from "next/image";
import IMG_0996 from "../assets/IMG_0996.jpeg";
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <div className="w-full max-w-[1200px] my-[200px]">
      <div className="flex h-[400px] w-auto mt-[200px]  md:px-36 px-16">
        <div className="flex h-full w-fit">
          <Image
            src={IMG_0996}
            className="hidden lg:flex rounded-full h-[360px] w-auto shadow-lg opacity-70"
          />
        </div>

        <div className="flex flex-col justify-center md:ml-10">
          <h1 className="purple-text text-5xl md:text-6xl font-normal mb-4 text-purple-800">
            Welcome.
          </h1>
          <p className="font-thin text-[2rem] md:text-[3rem]">
            My name is{" "}
            <a
              className="name-link no-underline active:text-black visited:text-black text-black"
              href="https://www.youtube.com/watch?v=y6dSVXLfzgo"
            >
              Åsa
            </a>
            ,<br></br> I'm a frontend developer.
          </p>
          <TechStack />
        </div>
      </div>
    </div>
  );
}
