import { NavLink } from "./nav-link";

export function NavItemList() {
  return (
    <ul className="flex flex-col items-center gap-5">
      <NavLink title="Home" />
      <NavLink title="About" />
      <NavLink title="Projects" />
      <NavLink title="Contacts" />
    </ul>
  );
}
