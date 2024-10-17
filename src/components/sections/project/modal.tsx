import { motion } from "framer-motion";
import { projects } from "../../../constants";
import { scaleAnimation } from "../../../constants/animation";
import Avatar from "../../../assets/portifolio.png";

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  container: React.MutableRefObject<null>;
}

export function Modal({ modal, container }: ModalProps) {
  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={modal.active ? "open" : "closed"}
      className="w-[400px] h-[350px] flex justify-center items-center absolute overflow-hidden pointer-events-none rounded-2xl"
    >
      <div className="h-full w-full absolute" style={{ top: modal.index * -100 + "%", transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)" }}>
        {projects.map((project, index) => {
          return (
            <div key={`modal___${index}`} className={`relative h-full flex justify-center items-center`} style={{ backgroundColor: `${project.color}` }}>
              <img src={Avatar} alt="" className="h-auto w-[300px]" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
