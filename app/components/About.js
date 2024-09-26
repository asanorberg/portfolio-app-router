export default function About() {
  return (
    <div className="flext text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-normal">About</h1>
        <div className="w-[100px] h-1 bg-purple-800 mb-4"></div>
      </div>

      <div className="max-w-[1200px] flex border-solid border-[0.5px] border-slate-400 min-w-fit mx-4 my-4">
        <div className="flex-col text-left justify-center items-center px-12 py-8 max-w-[1200px]">
          <p className="leading-6">
            I am a second year{" "}
            <span className="font-bold text-purple-800">
              Frontend Developer
            </span>{" "}
            student at Chas Academy in Stockholm, now on the lookout for an
            internship (LIA) starting{" "}
            <span className="font-bold text-purple-800">November 18</span> (some
            flexibility can be applied!). Aside from knowing how to code I have
            a keen eye for design and love to create UIs that are pleasing to
            the while being user friendly.
            <br />
            <br />I have 10 years of experience within{" "}
            <span className="font-bold text-purple-800">CX </span> and{" "}
            <span className="font-bold text-purple-800">E-commerce </span> from
            a company and E-com department that grew rapidly. This meant getting
            to do la LOT of different things. During my time in E-com I have
            dabbled in{" "}
            <span className="font-bold text-purple-800">Social Media </span>,
            <span className="font-bold text-purple-800">Marketplaces </span>,
            <span className="font-bold text-purple-800">
              Online Merchandising{" "}
            </span>
            , <span className="font-bold text-purple-800">copywriting </span>{" "}
            and <span className="font-bold text-purple-800">CRM </span>{" "}
            alongside my main focus of customer interaction. I’m a fast learner
            and I enjoy finding new and optimized ways of working.
            <br />
            <br />
            I’m used to working project based and in collaboration with a team,
            but am no stranger to hunker down with my noise cancelling
            headphones for deep focus.
          </p>
        </div>
      </div>
    </div>
  );
}
