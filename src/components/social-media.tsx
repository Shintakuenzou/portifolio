import { motion } from "framer-motion";
import { socialMedia } from "../constants";

interface SocialMediaProps {
  transition: number;
}

export function SocialMedia({ transition }: SocialMediaProps) {
  return (
    <div className="absolute top-[500px] flex gap-5">
      {socialMedia.map((app) => {
        return (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: transition },
            }}
            key={app.title}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#dac5a70d] p-3 shadow-lg outline-none transition-colors duration-300
                hover:bg-[#877a680d] focus:ring-4 focus:ring-[#c5b297]"
          >
            {app.icon}
          </motion.a>
        );
      })}
    </div>
  );
}
