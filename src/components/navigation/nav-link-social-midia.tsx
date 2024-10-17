import { ComponentProps } from "react";

interface NavLinkSocialMidiaProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}

export function NavLinkSocialMidia({ children, ...props }: NavLinkSocialMidiaProps) {
  return (
    <a {...props} className="text-zinc-300">
      {children}
    </a>
  );
}
