import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header";
import { NavigationToggleButton } from "./components/navigation/navigation-toggle-button";
import { LogoColorContext } from "./context/global-context";
import { useContext } from "react";

export function App() {
  const { isActive } = useContext(LogoColorContext);

  return (
    <div className="relative h-screen w-full">
      <div className="flex items-center">
        <a
          href="/"
          className={`font-lato fixed z-50 m-5 text-lg font-bold ${isActive ? "text-[#1D1E1F] hover:text-[#1D1E1F]" : "text-[#dac5a7] hover:text-[#b4a18c]"} `}
        >
          SE
        </a>

        <Navigation type="row" />

        <NavigationToggleButton />
      </div>

      <Header />
    </div>
  );
}
