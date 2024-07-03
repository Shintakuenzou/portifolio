export function Contect() {
  return (
    <section className="flex flex-col justify-start mt-10 p-28">
      <h3 className="text-6xl text-[#c5b297] font-medium font-BonaNovaSC">Contact Us</h3>

      <form action="" className="mt-10 flex gap-52">
        <div className="flex flex-col max-w-lg gap-10 flex-1">
          <input
            type="text"
            className="bg-transparent border-b outline-none placeholder:text-[#c5b297] text-lg text-[#c5b297] pb-1"
            placeholder="Nome"
          />
          <input
            type="text"
            className="bg-transparent border-b outline-none placeholder:text-[#c5b297] text-lg text-[#c5b297] pb-1"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-transparent border-b outline-none placeholder:text-[#c5b297] text-lg text-[#c5b297] pb-1"
            placeholder="Message"
          />
          <button className="bg-[#c5b297] p-3 font-medium font-sans hover:bg-[#d7bfa0] text-zinc-800 transition-colors duration-500 rounded-md">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
