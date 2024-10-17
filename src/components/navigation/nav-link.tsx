interface NavLinkProps {
  title: string;
}

export function NavLink({ title }: NavLinkProps) {
  return (
    <li className="text-zinc-300 text-lg font-medium group">
      <a href={`#${title}`}>{title}</a>
      <div className="w-0 h-px bg-zinc-300 group-hover:w-full transition-all active:w-full"></div>
    </li>
  );
}
