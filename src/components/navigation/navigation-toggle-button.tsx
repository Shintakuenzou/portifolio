import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NavigationToggleButton() {
  const [isActive, setIsActive] = useState(false);
  const menuSlide = {
    initial: { x: "100%" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <button
      className="fixed right-0 m-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full"
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`w-full before:relative before:top-[5px] before:m-auto before:block before:h-px before:w-[40%] before:bg-[#dac5a7] before:transition-transform before:content-[''] after:relative
        after:-top-[5px] after:m-auto after:block after:h-px after:w-[40%] after:bg-[#dac5a7] after:transition-transform after:content-['']
        ${isActive ? "before:top-px before:-rotate-45 before:bg-[#1D1E1F] after:-top-px after:rotate-45 after:bg-[#1D1E1F] " : ""}`}
      />
      <AnimatePresence>
        {isActive && (
          <motion.aside
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-full bg-[#dac5a7] text-black"
          >
            <div className="flex justify-between p-[100px]">
              <nav className="mt-20 flex flex-col gap-3">
                <ul>
                  <li>a</li>
                  <li>a</li>
                  <li>a</li>
                  <li>a</li>
                  <li>a</li>
                </ul>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </button>
  );
}
