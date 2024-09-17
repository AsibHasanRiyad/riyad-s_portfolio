/* eslint-disable react/prop-types */
import { Carousel, Card } from "../Components/ui/apple-card-carousel";
// import CleanCarCo from "../assets/cleancarco.png";
// import Connectopia from "../assets//connectopia.png";
// import Gadget from "../assets/gadget.png";
// import Learnify from "../assets/learnify.png";
// import SolArt from "../assets/solart.png";
import Header from "../utils/Header";
export function MyProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 lg:py-16">
      <Header header={"My Projects"} />
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        className="w-full h-full rounded-b-3xl"
        alt="Project mockup"
      />
    </div>
  );
};

const data = [
  {
    title: "CleanCarCo",
    Client: "https://github.com/AsibHasanRiyad/car-washing-system-client",
    Server: "https://github.com/AsibHasanRiyad/car-wash-system",
    Live: "https://cleancarco.vercel.app/",
    src: "https://i.ibb.co.com/GdC9ynR/screencapture-cleancarco-vercel-app-2024-09-17-00-59-52.png",
    content: (
      <DummyContent
        src={
          "https://i.ibb.co.com/GdC9ynR/screencapture-cleancarco-vercel-app-2024-09-17-00-59-52.png"
        }
      />
    ),
  },
  {
    title: "Connectopia",
    Client: "https://github.com/AsibHasanRiyad/connectopia-client",
    Server: "https://github.com/AsibHasanRiyad/connectopia-server",
    Live: "https://connectopia-9e807.web.app/",
    src: "https://i.ibb.co.com/4p59v8B/screencapture-connectopia-9e807-web-app-2024-09-17-11-10-48.png",
    content: (
      <DummyContent src="https://i.ibb.co.com/4p59v8B/screencapture-connectopia-9e807-web-app-2024-09-17-11-10-48.png" />
    ),
  },
  {
    title: "Learnify",
    Client: "https://github.com/AsibHasanRiyad/learnify-client",
    Server: "https://github.com/AsibHasanRiyad/learnify-server",
    Live: "https://horrible-root.surge.sh/",
    src: "https://i.ibb.co.com/bL1ZsvW/screencapture-horrible-root-surge-sh-2024-09-17-11-21-58.png",
    content: (
      <DummyContent
        src={
          "https://i.ibb.co.com/bL1ZsvW/screencapture-horrible-root-surge-sh-2024-09-17-11-21-58.png"
        }
      />
    ),
  },
  {
    title: "Gadget Junction",
    Client: "https://github.com/AsibHasanRiyad/gadget-junction-client",
    Server: "https://github.com/AsibHasanRiyad/gadget-junction-server",
    Live: "https://gadget-junction.web.app/",
    src: "https://i.ibb.co.com/1QqSLfG/screencapture-gadget-junction-web-app-2024-09-17-11-21-30.png",
    content: (
      <DummyContent
        src={
          "https://i.ibb.co.com/1QqSLfG/screencapture-gadget-junction-web-app-2024-09-17-11-21-30.png"
        }
      />
    ),
  },
  {
    title: "SloArt",
    Client: "https://github.com/AsibHasanRiyad/solArt",
    Server: "",
    Live: "https://boisterous-pithivier-736086.netlify.app/",
    src: "https://i.ibb.co.com/GpJhWGj/solart.png",
    content: <DummyContent src={"https://i.ibb.co.com/GpJhWGj/solart.png"} />,
  },
  {
    title: "WpPool",
    Client: "https://github.com/AsibHasanRiyad/wppool",
    Server: "",
    Live: "https://rwppool.netlify.app/",
    src: "https://i.ibb.co.com/51gt8jJ/screencapture-rwppool-netlify-app-2024-09-17-12-09-45.png",
    content: (
      <DummyContent
        src={
          "https://i.ibb.co.com/51gt8jJ/screencapture-rwppool-netlify-app-2024-09-17-12-09-45.png"
        }
      />
    ),
  },
];
