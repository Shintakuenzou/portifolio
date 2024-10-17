import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { NavButtonToggle } from "./nav-button-toggle";
import { NavItemList } from "./nav-item-list";
import { NavLinkSocialMidia } from "./nav-link-social-midia";

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Nav() {
  const [isActive, setIsActive] = useState(false);

  function handleOpen() {
    setIsActive(!isActive);
  }

  return (
    <nav className="flex justify-end items-center h-10 fixed right-0 top-0 z-50">
      <NavButtonToggle onClick={handleOpen}>
        <div className={`w-full h-px ${isActive ? "bg-zinc-100" : "bg-zinc-950"} transition-all group-hover:w-3`} />
        <div className={`w-3 h-px  ${isActive ? "bg-zinc-100" : "bg-zinc-950"} transition-all group-hover:w-full`} />
        <div className={`w-full h-px ${isActive ? "bg-zinc-100" : "bg-zinc-950"} transition-all group-hover:w-3`} />
      </NavButtonToggle>

      <AnimatePresence>
        {isActive && (
          <motion.aside variants={menuSlide} initial="initial" animate="enter" exit="exit" className="fixed right-0 top-0 h-screen w-60 bg-zinc-950 z-40">
            <div className="flex flex-col p-[100px] items-center justify-center w-full h-full gap-10 space-y-20">
              <NavItemList />

              <div className="flex gap-5">
                <NavLinkSocialMidia href="https://www.linkedin.com/in/felipe-enzou/">
                  <Linkedin />
                </NavLinkSocialMidia>

                <NavLinkSocialMidia href="https://github.com/Shintakuenzou">
                  <Github />
                </NavLinkSocialMidia>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}
