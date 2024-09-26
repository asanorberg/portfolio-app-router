import Card from "./Card";
import cat from "@/app/assets/cat.jpg";
import apple_quiz from "@/app/assets/apple_quiz.png";

function CardSection() {
  return (
    <div className="flex text-center">
      <div className="grid grid-cols-1 gap-5 max-w-[1200px] mx-4 my-12">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-normal">RECENT PROJECTS</h1>
          <div className="w-[100px] h-1 bg-purple-800 mb-4"></div>
        </div>

        <Card imgSrc={apple_quiz} siteUrl="https://www.google.com">
          This app is a quiz platform built with Redux and Next.js, allowing
          users to test their knowledge with a series of questions. It features
          an admin login where you can easily add, edit, or remove quiz
          questions. The app also includes a scoring system and dark mode.
        </Card>
        <Card imgSrc={cat}>
          {" "}
          This app is a quiz platform built with Redux and Next.js, allowing
          users to test their knowledge with a series of questions. It features
          an admin login where you can easily add, edit, or remove quiz
          questions. The app also includes a scoring system and dark mode.
        </Card>
        <Card imgSrc={cat}>Some information about my project.</Card>
        <Card imgSrc={cat}>Some information about my project.</Card>
      </div>
    </div>
  );
}

export default CardSection;
