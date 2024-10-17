import { Download } from "lucide-react";

export function Header() {
  return (
    <header id="home" className="flex space-y-10">
      <div className="flex-1 mt-20 p-10  space-y-5 relative">
        <h1 className="font-semibold text-5xl max-w-lg">
          HI! I am Shintaku{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 leading-tight">FrontEnd Developer</span>
        </h1>
        <p className="text-zinc-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, neque deleniti. Quidem necessitatibus vel</p>
        <div className="relative">
          <button
            type="button"
            className="bg-zinc-200 outline-8 outline-zinc-950 text-lg max-sm:py-3 max-md:py-4 max-md:px-6 max-sm:px-5 relative xl:text-sm   
              after:absolute after:w-full after:h-full after:-z-10 after:left-2 after:top-2 
            after:bg-zinc-950 after:border-l-4 after:border-l-zinc-950 after:border-b-4 after:border-b-zinc-950 after:hover:top-0 
              after:hover:left-0 after:transition-all after:duration-300 cursor-pointer py-5 px-20 border border-zinc-900 flex items-center gap-3 font-medium"
          >
            More Information <Download size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
