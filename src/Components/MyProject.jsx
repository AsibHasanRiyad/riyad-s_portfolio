import { Carousel, Card } from "../Components/ui/apple-card-carousel";

import img from "../assets/screencapture-cleancarco-vercel-app-2024-09-17-00_59_52.png";
export function MyProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="pl-4 mx-auto font-sans text-xl font-bold max-w-7xl md:text-5xl text-neutral-800 ">
        My Project
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
      <img
        src={img}
        className="w-full h-full "
        alt="Macbook mockup from Aceternity UI"
      />
    </div>
  );
};

const data = [
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://i.ibb.co.com/GdC9ynR/screencapture-cleancarco-vercel-app-2024-09-17-00-59-52.png",
    content: <DummyContent />,
  },
];
