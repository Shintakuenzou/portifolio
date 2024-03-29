import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SocialMedia } from "./social-media";

export function Header() {
  const words = [
    {
      text: "Front",
      className: "dark:text-[#dac5a7] text-3xl lg:text-[38px] xl:text-[48px]",
    },
    {
      text: "End",
      className: "dark:text-[#dac5a7] text-3xl lg:text-[38px] xl:text-[48px]",
    },
    {
      text: "Developer",
      className: "dark:text-[#dac5a7] text-3xl lg:text-[38px] xl:text-[48px]",
    },
  ];

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.9,
      },
    },
  };

  return (
    <header className="-mt-20 flex h-full w-full flex-col items-center justify-center gap-5">
      <div className="relative flex flex-col justify-start lg:w-[348px] xl:w-[450px]">
        <motion.h3
          className="flex max-w-[348px] items-center gap-1 text-base font-medium text-[#c5b297] xl:ml-0 xl:text-xl"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="h-5 w-px bg-[#c5b297]" />
          Hi! I'am Felipe
        </motion.h3>

        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} className="" />
        </div>
      </div>

      <SocialMedia transition={words.length} />

      <button
        type="button"
        className="absolute top-[600px] animate-bounce rounded-md focus:ring-4 focus:ring-[#c5b297]"
      >
        <ArrowDown color="#c5b297" />
      </button>
    </header>
  );
}
