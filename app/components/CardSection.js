import Card from "./Card";
import cat from "@/app/assets/cat.jpg";
import apple_quiz from "@/app/assets/apple_quiz.png";
import fairytailor_desktop from "@/app/assets/fairytailor_desktop.png";
import zoom from "@/app/assets/zoom.png";
import moviesite from "@/app/assets/moviesite_preview.png";

import Badge from "./Badge";

function CardSection() {
  return (
    <div className="flex text-center">
      <div className="grid grid-cols-1 gap-5 max-w-[1200px] mx-4 my-12">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-normal">RECENT PROJECTS</h1>
          <div className="w-[100px] h-1 bg-purple-800 mb-4"></div>
        </div>

        <Card
          imgSrc={fairytailor_desktop}
          siteUrl="https://www.youtube.com/watch?v=D9DHxaZ7ksA"
          gitUrl="https://github.com/EmelieJohanna/FairyTailor"
        >
          {" "}
          Fairytailor is an interactive storytelling app designed for children,
          developed as a team contribution to a school challenge. Logged in
          users can save their favorite stories for another read, continue where
          you left off or delete stories entirely. <br></br>
          To enhance the storytelling experience, Fairytailor also features
          AI-generated images that bring the stories to life.
          <span className="flex space-x-1">
            <Badge>Next.js</Badge> <Badge>Express.js</Badge>
            <Badge>OpenAI</Badge>
            <Badge>MySQL</Badge>
          </span>
        </Card>
        <Card
          imgSrc={moviesite}
          siteUrl="https://movie-site-orpin.vercel.app/"
          gitUrl="https://github.com/asanorberg/movie-site/"
        >
          {" "}
          An interactive web application that allows users to explore a wide
          range of popular movies using TMDb API. You can search for movies,
          mark them as watched, or save them as favorites.
          <span className="flex space-x-1">
            <Badge>Vite</Badge> <Badge>Redux</Badge> <Badge>API</Badge>{" "}
            <Badge>Tailwind</Badge>
          </span>
        </Card>
        <Card
          imgSrc={apple_quiz}
          siteUrl="https://asa-norberg-portfolio-quiz.vercel.app/"
          gitUrl="https://github.com/asanorberg/quiz"
        >
          This app is a quiz platform built with Redux and Next.js, allowing
          users to test their knowledge with a series of questions. It features
          an admin login where you can easily add, edit, or remove quiz
          questions. The app also includes a scoring system and dark mode.
          <span className="flex space-x-1">
            <Badge>Next.js</Badge> <Badge>Redux</Badge> <Badge>Tailwind</Badge>
          </span>
        </Card>
        <Card
          imgSrc={zoom}
          siteUrl="https://asa-norberg-portfolio-zoom.vercel.app/"
          gitUrl="https://github.com/asanorberg/zoom-redesign"
        >
          This was my first project using Tailwind and built with Vite, where I
          aimed to recreate and simplify a section of Zoom's official website.
          <br></br>
          Zoom’s site is dense with information and content so I had to
          thoughtfully decide which elements to retain or omit, while
          incorporating some of my own design ideas.
          <span className="flex space-x-1">
            <Badge>Vite</Badge> <Badge>Tailwind</Badge>
          </span>
        </Card>
      </div>
    </div>
  );
}

export default CardSection;
