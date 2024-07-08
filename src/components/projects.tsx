// import axios from "axios";
// import { useEffect, useState } from "react";
import { Cards } from "./cards";

// async function getGitReposData() {
//   const response = await axios.get("https://api.github.com/users/Shintakuenzou/repos");
// }

export function Projects() {
  // const [gitData, setGitData] = useState();

  // useEffect(() => {
  //   getGitReposData();
  // }, []);

  return (
    <section className="flex flex-col justify-start mt-10 " id="about">
      <div className="mb-10 flex justify-center">
        <h3 id="#about" className="text-[#c5b297] text-2xl font-semibold">
          &lt; My Works &gt;
        </h3>
      </div>

      <div className="grid xl:grid-cols-2 flex-wrap gap-5 items-center justify-center px-12 grid-cols-1">
        <Cards />
        <Cards />
      </div>
    </section>
  );
}
