/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useOutsideClick } from "../../utils/use-outside-click";
import { Link } from "react-router-dom";
import { LinkPreview } from "./link-preview";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full mx-auto max-w-7xl">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-4   scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%]  md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="w-6 h-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-4 lg:mx-auto bg-black/50 border border-neutral-700 h-fit  z-[60] my-10 pt-5  rounded-2xl font-sans relative"
            >
              <button
                className="sticky flex items-center justify-center w-8 h-8 ml-auto mr-5 bg-white rounded-full top-4 "
                onClick={handleClose}
              >
                <IconX className="w-6 h-6 text-neutral-800 " />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="px-5 text-base font-medium text-white "
              >
                {card.category}
              </motion.p>
              {/* <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="px-5 mt-4 text-2xl font-semibold text-white md:text-5xl"
              >
                {card.title}
              </motion.p> */}
              <div className="pt-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-2xl border  border-neutral-600 h-64 w-64 md:w-72 md:h-72 lg:h-[18rem] lg:w-[400px] overflow-hidden flex flex-col items-center justify-end relative z-10"
      >
        <div className="absolute inset-x-0 top-0 z-30 h-full pointer-events-none bg-black/50 " />
        <div className="relative z-40 p-8">
          <Link
            to={card.Link}
            target="blank"
            className="px-4 py-1.5 text-white text-xs md:text-base mb-8 lg:mb-14 rounded-full bg-violet-600"
          >
            See Preview
          </Link>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-center [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <Blurimg
          src={card.image}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover w-full h-full"
        />
      </motion.button>
    </>
  );
};

export const Blurimg = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      className={cn(
        "transition object-cover duration-300",
        isLoading ? "blur-" : "blur-0 bg-transparent",
        className
      )}
      src={src}
      decoding="async"
      alt={alt ? alt : "Project"}
      {...rest}
    />
  );
};
