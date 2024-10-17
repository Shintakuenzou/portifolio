import { Nav } from "./components/navigation/nav";
import { Header } from "./components/header/header";
import { About } from "./components/sections/about/about";
import { Project } from "./components/sections/project/project";

export function App() {
  return (
    <div className="space-y-20">
      <Nav />
      <Header />
      <main className="flex flex-col justify-center space-y-10">
        <About />
        <Project />
        <section className="p-10 bg-zinc-950 space-y-5">
          <h3 className="font-semibold text-3xl text-white">Contact</h3>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente error iusto, maiores totam placeat rerum animi possimus consectetur, sed
            earum similique porro a dignissimos pariatur eaque nobis eius. Repellat.
          </div>
        </section>
      </main>
    </div>
  );
}
