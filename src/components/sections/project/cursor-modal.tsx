import { motion } from "framer-motion";
import { scaleAnimation } from "../../../constants/animation";

interface CursorModalProps {
  modal: {
    active: boolean;
  };
  cursor: React.MutableRefObject<null>;
  cursorLabel: React.MutableRefObject<null>;
}

export function CursorModal({ cursor, cursorLabel, modal }: CursorModalProps) {
  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={modal?.active ? "open" : "closed"}
        ref={cursor}
        className="w-20 h-20 bg-zinc-900 absolute pointer-events-none rounded-full"
      />
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={modal?.active ? "open" : "closed"}
        ref={cursorLabel}
        className="w-20 h-20 bg-transparent absolute pointer-events-none rounded-full flex justify-center items-center text-white"
      >
        View
      </motion.div>
    </>
  );
}
