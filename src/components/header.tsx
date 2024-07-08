import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./button";

export function Header() {
  const words = [
    {
      text: "Front",
      className: "dark:text-[#dac5a7] text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px]",
    },
    {
      text: "End",
      className: "dark:text-[#dac5a7] text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px]",
    },
    {
      text: "Developer",
      className: "dark:text-[#dac5a7] text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px]",
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

  const buttonVariants = {
    initial: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: index,
      },
    }),
  };

  return (
    <header className="relative top-[150px] xl:top-[200px] flex w-full flex-col items-center justify-center gap-5">
      <div className="relative flex flex-col justify-start lg:w-[348px] xl:w-[450px]">
        <motion.h3
          className="flex max-w-[348px] max-sm:w-[278px] md:w-[331px] items-center gap-1 text-base font-medium text-[#c5b297] xl:ml-0 xl:text-2xl"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <div className="h-5 w-px bg-[#c5b297]" /> */}
          Olá, Meu Nome é Felipe
        </motion.h3>

        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} className="" />
        </div>
        <motion.div
          custom={words.length}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          className="flex gap-5 items-center justify-center mt-5"
        >
          <Button variant="left">Download CV</Button>
        </motion.div>

        <a
          href="#about"
          className="flex justify-center items-center relative top-[150px] animate-bounce rounded-md focus:ring-4 focus:ring-[#c5b297] w-10 m-auto cursor-pointer"
        >
          <ArrowDown color="#c5b297" />
        </a>
      </div>
    </header>
  );
}
