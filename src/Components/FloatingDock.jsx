import { useState, useEffect } from "react";
import { IconCube, IconHome } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { FaBuffer, FaRoad, FaUser, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export function FloatingDockDemo() {
  const [dockVisible, setDockVisible] = useState(false);

  // Update visibility based on scroll position
  const handleScroll = () => {
    if (window.scrollY >= 270) {
      setDockVisible(true);
    } else {
      setDockVisible(false);
    }
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="w-full h-full text-neutral-300 " />,
      href: "home",
    },
    {
      title: "My Journey",
      icon: <FaRoad className="w-full h-full text-neutral-300 " />,
      href: "journey",
    },
    {
      title: "About Me",
      icon: <FaUser className="w-full h-full text-neutral-300 " />,
      href: "about",
    },

    {
      title: "My Services",
      icon: <FaBuffer className="w-full h-full text-neutral-300" />,
      href: "services",
    },
    {
      title: "My Projects",
      icon: <IconCube className="w-full h-full text-neutral-300" />,
      href: "projects",
    },
    {
      title: "Contact",
      icon: <FaWhatsapp className="w-full h-full text-neutral-300" />,
      href: "contact",
    },
  ];

  return (
    <div
      className={`fixed bottom-0 w-full mx-auto flex-col items-center flex justify-end md:justify-center mb-3 z-[1000] transition-transform duration-500 ${
        dockVisible ? "translate-y-0" : "translate-y-28"
      }`}
    >
      <button className="relative p-0.5 rounded-full bg-violet-600/90 top-5">
        {" "}
        <IoIosArrowDropdownCircle
          onClick={() => setDockVisible(false)}
          className="w-9 h-9 text-[#D4D4D4]"
        />{" "}
      </button>
      <FloatingDock items={links} mobileClassName="translate-y-0" />
    </div>
  );
}
