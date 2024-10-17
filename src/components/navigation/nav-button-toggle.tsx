import { ComponentProps } from "react";

interface NavButtonToggle extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function NavButtonToggle({ children, ...props }: NavButtonToggle) {
  return (
    <button {...props} type="button" className="flex flex-col justify-end gap-1 rounded-full w-5 group z-50 mr-5">
      {children}
    </button>
  );
}
