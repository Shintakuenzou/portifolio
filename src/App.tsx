import { Navigation } from "./components/navigation";
import { CustomCursor } from "./components/ui/custom-cursor";
import { Header } from "./components/header";
import { NavigationToggleButton } from "./components/navigation/navigation-toggle-button";

export function App() {
  return (
    <div className="relative h-screen w-full">
      <CustomCursor />

      <div className="flex items-center">
        <a
          href="/"
          className="font-lato fixed m-5 text-lg font-bold text-[#c5b297] hover:text-[#b4a18c]"
        >
          SE
        </a>

        <Navigation />

        <NavigationToggleButton />
      </div>

      <Header />
    </div>
  );
}
