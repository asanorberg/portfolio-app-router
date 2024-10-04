export default function About() {
  return (
    <div className="flext text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-normal">ABOUT</h1>
        <div className="w-[100px] h-1 bg-purple-800 mb-4"></div>
      </div>

      <div className="max-w-[1200px] flex border-solid border-[0.5px] border-slate-400 min-w-fit mx-4 my-4">
        <div className="flex-col text-left justify-center items-center px-12 py-8 max-w-[1200px]">
          <p className="leading-6 font-light tracking-wide">
            I'm a second-year{" "}
            <span className="font-semibold">Frontend Developer</span> student at
            Chas Academy in Stockholm, seeking an internship (LIA) starting
            November 18 (with some flexibility). In addition to coding, I have a
            strong eye for design, creating visually appealing and user-friendly
            UIs.
            <br />
            <br />I also bring{" "}
            <span className="font-semibold">
              10 years of CX and E-commerce experience
            </span>
            , where I worked on various tasks including Social Media,
            Marketplaces, Online Merchandising, copywriting, and CRM, alongside
            customer interaction. I'm a quick learner, comfortable navigating
            new systems, and have experience working both in teams and
            independently on projects.
          </p>
        </div>
      </div>
    </div>
  );
}
