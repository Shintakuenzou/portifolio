import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./navigation";
import { socialMedia } from "../../constants";
import { SocialMedia } from "../social-media";
import { LogoColorContext } from "../../context/global-context";

export function NavigationToggleButton() {
  const { isActive, setIsActive } = useContext(LogoColorContext);

  const menuSlide = {
    initial: { x: "100%" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  function handleOpen() {
    setIsActive(!isActive);
  }

  return (
    <>
      <button
        className="fixed right-0 m-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full z-50 border border-[#1D1E1F]"
        onClick={handleOpen}
      >
        <div
          className={`w-full before:relative before:top-[5px] before:m-auto before:block before:h-px before:w-[40%] before:transition-transform 
          before:content-[''] after:relative after:-top-[5px] after:m-auto after:block after:h-px after:w-[40%] after:transition-transform 
          after:content-['']
          ${
            isActive
              ? "before:top-px before:-rotate-45 after:-top-px after:rotate-45 before:bg-[#1D1E1F] after:bg-[#1D1E1F] "
              : "before:bg-[#dac5a7] after:bg-[#dac5a7] "
          }`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.aside
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-full bg-[#dac5a7] z-40"
          >
            <div className="flex flex-col p-[100px] items-center justify-center w-full h-full gap-10">
              <Navigation type="column" />

              <div className="flex gap-5 m-auto justify-center items-center mt-10">
                {socialMedia.map((item, index) => {
                  return (
                    <SocialMedia key={index} href={item.link}>
                      {item.icon}
                    </SocialMedia>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
