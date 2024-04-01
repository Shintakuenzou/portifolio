import { motion } from "framer-motion";

interface SocialMediaProps {
  transition?: number;
  children: React.ReactNode;
  href: string;
}

export function SocialMedia({ transition, children, href }: SocialMediaProps) {
  return (
    <>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: transition },
        }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#1D1E1F] rounded-lg outline-none focus:ring-4 focus:ring-[#1D1E1F]"
      >
        {children}
      </motion.a>
    </>
  );
}
