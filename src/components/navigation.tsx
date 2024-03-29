import { motion } from "framer-motion";
import { navLinks } from "../constants";

export function Navigation() {
  return (
    <motion.nav
      className="flex h-20 w-full items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="flex items-center gap-10">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <a
                href={navLink.path}
                className="group hidden rounded-md p-1 text-base font-semibold text-[#dac5a7] outline-none focus:ring-4 focus:ring-[#dac5a7] md:block"
              >
                {navLink.title}
                <div className="h-px w-0 bg-[#dac5a7] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
