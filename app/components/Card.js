import Image from "next/image";

function Card({ href, siteUrl, gitUrl, imgAlt, imgSrc, children }) {
  return (
    <div className="card max-w-[600px] md:max-w-[600px] lg:max-w-none flex shadow-lg p-8 border-solid border-[0.5px] border-slate-400">
      <div className="min-w-full flex flex-col lg:flex-row items-center gap-6">
        <div className="flex w-full justify-center lg:justify-normal">
          <Image
            className="max-w-[90%] h-auto lg:w-[450px] shadow-lg"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
        <div className="flex flex-col justify-between h-full md:w-full text-left">
          <div className="w-full flex flex-col lg:items-start  lg:text-start gap-4 leading-6 font-light">
            {" "}
            {children}{" "}
          </div>
          <div className="flex-col space-x-8 text-sm mt-6">
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline visited:text-black px-2 py-1 border-solid border-[0.5px] cursor-pointer"
            >
              See site
            </a>
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline visited:text-black px-2 py-1 border-solid border-[0.5px] cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
