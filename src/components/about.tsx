import Prfile from "../assets/profile.jpeg";
import { biographys } from "../constants";

export function About() {
  return (
    <section className="flex flex-col justify-start mt-10 px-16 py-16 max-md:p-10" id="about">
      <div className="mb-5">
        <h3 id="#about" className="text-[#AED9E0] text-2xl max-md:text-xl font-semibold max-md:mb-5">
          &lt; About Me &gt;
        </h3>
      </div>

      <div className="flex gap-5 relative">
        <img src={Prfile} alt="" className="size-96 max-lg:hidden" />

        <div className="flex flex-col gap-10 max-md:gap-5">
          {biographys.map((biography, index) => {
            return (
              <p key={index} className="text-zinc-200 font-medium text-sm tracking-wide text-justify max-md:text-xs">
                {biography.bio}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end mb-5">
        <h3 id="#about" className="text-[#AED9E0] text-2xl max-md:text-xl font-semibold font-Merriweather  max-md:mt-5">
          &lt; / プロフィール &gt;
        </h3>
      </div>
    </section>
  );
}

// #6BA8BF ou #AED9E0
