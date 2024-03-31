import Image from "next/image";
import IMG_0996 from "./assets/IMG_0996.jpeg";

export default function Home() {
  return (
    <main className="min-h-[790px] max-w-[1200px] flex flex-col items-center justify-center px-36">
      <div className="flex h-[400px] w-auto md:space-x-16 mb-16">
        <div className="flex h-full w-fit items-center justify-center">
          <Image
            src={IMG_0996}
            className="hidden md:flex rounded-full h-[360px] w-auto shadow-lg opacity-70"
          />
        </div>

        <div className="flex flex-col justify-center text-6xl w-fit ">
          <h1 className="text-6xl font-normal mb-4">Welcome.</h1>
          <p className="font-thin text-5xl">
            My name is{" "}
            <a
              className="name-link no-underline active:text-black visited:text-black text-black"
              href="https://www.youtube.com/watch?v=y6dSVXLfzgo"
            >
              Åsa
            </a>
            , I'm a junior front end developer.
          </p>
        </div>
      </div>

      <div></div>
    </main>
  );
}
