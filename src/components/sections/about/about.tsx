import { aboutDescription } from "../../../constants";
import profile from "../../../assets/profile.jpeg";

export function About() {
  return (
    <section id="about" className="p-10 shadow-box flex-1 space-y-10 bg-zinc-900 w-full h-full">
      <h3 className="text-zinc-200 text-2xl font-semibold">About Me</h3>
      <div className="flex flex-col gap-5 xl:flex-row justify-center items-center">
        <div className="flex flex-col max-w-72 w-full gap-4 justify-center items-center xl:justify-center xl:flex-row">
          <img src={profile} className="size-64 rounded-lg" alt="" />
        </div>

        <div className="flex flex-col justify-between">
          {aboutDescription.map((about, index) => {
            return (
              <p
                key={index}
                className="text-sm text-justify md:text-base leading-relaxed text-zinc-300 font-normal tracking-wide"
              >
                {about.description}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
