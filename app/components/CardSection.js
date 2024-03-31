import Card from "./Card";
import cat from "@/app/assets/cat.jpg";

function CardSection() {
  return (
    <div className="max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-16">
      <Card imgSrc={cat}>Some information about my project.</Card>
      <Card imgSrc={cat}>Some information about my project.</Card>
      <Card imgSrc={cat}>Some information about my project.</Card>
      <Card imgSrc={cat}>Some information about my project.</Card>
      <Card imgSrc={cat}>Some information about my project.</Card>
      <Card imgSrc={cat}>Some information about my project.</Card>
    </div>
  );
}

export default CardSection;
