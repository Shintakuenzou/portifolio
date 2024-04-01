import { motion } from "framer-motion";
import { navLinks } from "../../constants";

interface NavigationProps {
  type: "row" | "column";
}

export function Navigation({ type }: NavigationProps) {
  const navAnimation = {
    initial: {
      opacity: 0,
      x: "220%",
    },
    animate: (index: number) => ({
      x: 0,
      transition: {
        duration: 0.5 * index + 1,
        type: "spring",
        bounce: 0.3,
        delay: 0.1 * index,
      },
      opacity: 1,
    }),
  };

  return (
    <motion.nav
      className={`${type === "row" ? "flex h-20 w-full items-center justify-center" : "flex justify-center items-start mt-20"}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul
        className={`${type === "row" ? "flex items-center gap-5" : "flex flex-col items-center justify-center gap-5"}`}
      >
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <motion.a
                variants={type === "column" ? navAnimation : undefined}
                custom={index}
                initial="initial"
                animate="animate"
                whileHover={{ scale: type === "column" ? 1.2 : undefined }}
                href={navLink.path}
                className={`group rounded-md p-1 outline-none block
                ${
                  type === "row"
                    ? "text-[#dac5a7] font-semibold focus:ring-4 focus:ring-[#dac5a7] text-base hidden md:block"
                    : "text-[#1D1E1F] text-3xl lg:text-4xl xl:text-6xl font-Merriweather tracking-wider focus:ring-4 focus:ring-[#1D1E1F]"
                }`}
              >
                {navLink.title}

                <div
                  className={
                    type === "row"
                      ? "h-px w-0 transition-all duration-300 group-hover:w-full bg-[#dac5a7]"
                      : ""
                  }
                />
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
