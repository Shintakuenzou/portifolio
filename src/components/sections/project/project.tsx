import { useEffect, useRef, useState } from "react";
import { projects } from "../../../constants";
import { Modal } from "./modal";
import gsap from "gsap";
import { CursorModal } from "./cursor-modal";

export function Project() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
    const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

    const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      moveContainerX(pageX);
      moveContainerY(pageY);

      moveCursorX(pageX);
      moveCursorY(pageY);

      moveCursorLabelX(pageX);
      moveCursorLabelY(pageY);
    });
  }, []);

  return (
    <>
      <section className="flex flex-col items-center space-y-5 justify-evenly">
        <h3 className="text-zinc-800 text-4xl font-semibold px-10">My Works</h3>

        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center border-t border-t-zinc-950 w-full px-10 py-10 group hover:opacity-40 transition-all duration-200 ease-linear"
              onMouseEnter={() => setModal({ active: true, index: index })}
              onMouseLeave={() => setModal({ active: false, index: index })}
            >
              <h2 className="text-2xl font-medium m-0 group-hover:-translate-x-3 transition-all duration-200 ease-linear uppercase">{project.title}</h2>
              <p className="group-hover:translate-x-3 transition-all duration-200 ease-linear">Development</p>
            </div>
          );
        })}
      </section>

      <Modal container={container} modal={modal} />

      <CursorModal cursor={cursor} cursorLabel={cursorLabel} modal={modal} />
    </>
  );
}
