/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

interface GlobalContextProps {
  children: React.ReactNode;
}

export const LogoColorContext = createContext({
  isActive: false,
  setIsActive: (_value: boolean) => {},
});

export function GlobalContext({ children }: GlobalContextProps) {
  const [isActive, setIsActive] = useState(false);

  return <LogoColorContext.Provider value={{ isActive, setIsActive }}>{children}</LogoColorContext.Provider>;
}
