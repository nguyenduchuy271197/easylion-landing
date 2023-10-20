import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";

export default function Navbar() {
  return (
    <header className="absolute w-full">
      <div className="container">
        <div className="h-[var(--navbar-height)] flex items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <div className="hidden lg:block">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
