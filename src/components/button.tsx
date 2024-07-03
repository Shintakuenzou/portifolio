import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  variant: "right" | "left";
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <a
      className="bg-[#dac5a7] outline-8 outline-[#1D1E1F] text-xs max-sm:py-3 max-md:py-4 max-md:px-6 max-sm:px-5 py-[18px] relative px-8 inline-flex xl:text-sm font-bold tracking-widest items-center gap-5 uppercase 
       after:absolute after:w-full after:h-full after:-z-10 after:right-2 after:top-2 
      after:bg-[#1D1E1F] after:border-l-4 after:border-l-[#dac5a7] after:border-b-4 after:border-b-[#dac5a7] after:hover:top-0 
      after:hover:right-0 after:transition-all after:duration-300 cursor-pointer"
      {...props}
    >
      {props.children}
    </a>
  );
}
