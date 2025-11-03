/* eslint-disable react/prop-types */
import { Carousel, Card } from "../Components/ui/apple-card-carousel";
import Header from "../utils/Header";
import dtech from "../assets/dtech.jpg";
import xolaren from "../assets/xolaren.jpg";
import rla from "../assets/r.jpg";
import zums from "../assets/zums.jpg";
import jora from "../assets/jora.jpg";

export function MyProject() {
  // Map cards to only include the simplified structure
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 lg:py-16">
      <Header header={"My Projects"} />
      <Carousel items={cards} />
    </div>
  );
}

// Simplified data without GitHub
const data = [
  {
    name: "Dtech Online",
    category: "React js",
    image: dtech,
    details:
      "Technologies Used: React.js, Tailwind CSS, Framer Motion, Stripe, Node.js, Express.js, Mongoose, Firebase, GitHub.",
    Link: "https://dtechonline.dev/",
  },
  {
    name: "ZNRF University of Management Sciences",
    category: "React js",
    image: zums,
    details:
      "Technologies Used: React.js, Tailwind CSS, React PDF, Node.js, Express.js, MongoDB, Firebase, GitHub.",
    Link: "https://zums.edu.bd/",
  },
  {
    name: "XOLAREN",
    category: "React js",
    image: xolaren,
    details:
      "Technologies Used: React.js, Tailwind CSS, AOS Animation, Node.js, Express.js, MongoDB, Firebase, GitHub.",
    Link: "https://xolaren.vercel.app/",
  },
  {
    name: "Rahman Law Associates",
    category: "React js",
    image: rla,
    details:
      "Technologies Used: React.js, Tailwind CSS, Daisy UI, Firebase, GitHub.",
    Link: "https://beta.rahmanlaw.net/",
  },
  {
    name: "JORA",
    category: "React js",
    image: jora,
    details:
      "Technologies Used: React.js, Tailwind CSS, Daisy UI, Firebase, GitHub.",
    Link: "https://jora-frontend.vercel.app/",
  },
];
