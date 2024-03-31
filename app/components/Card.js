import Image from "next/image";

function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="card rounded-lg w-[360px] mb-10 flex-shrink-0 border shadow-lg overflow-hidden">
      <div className="h-60 w-full">
        <Image
          className="h-full w-full object-cover"
          src={imgSrc}
          alt={imgAlt}
          href={href}
        />
      </div>
      <div className="h-28 p-8 pt-4 text-sm"> {children} </div>
      <div className=" px-8 pb-6 flex justify-between text-sm">
        {" "}
        <a href={href}>See site</a> <a href={href}>Code</a>{" "}
      </div>
    </div>
  );
}

export default Card;
