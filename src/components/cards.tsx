export function Cards() {
  return (
    <div className="rounded-3xl flex-wrap p-px bg-gradient-to-b from-[#6BA8BF] to-[#c5b297]">
      <a href="" className="rounded-[calc(1.5rem-1px)] p-10 bg-[#1D1E1F] space-y-5 block hover:bg-zinc-800 transition-colors">
        <div className="bg-zinc-900 w-full h-48"></div>
        <div className="flex gap-2">
          <span className="text-sm bg-gray-300/10 px-3 py-px rounded-2xl text-zinc-300 tracking-wide">HTML</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur voluptates, repudiandae tempore nostrum, dolorem deserunt,
            temporibus qui inventore ut animi vel quibusdam consequuntur a laudantium. Voluptate laboriosam dolorem iste?
          </p>
        </div>
      </a>
    </div>
  );
}
