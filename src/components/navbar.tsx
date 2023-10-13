import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./logo";

const routes = [
  {
    id: "reasons",
    path: "#reasons",
    label: "EASYLION 소개",
  },
  {
    id: "elementors",
    path: "#elementors",
    label: "개발 현황",
  },
  {
    id: "portfolio",
    path: "#portfolio",
    label: "포트폴리오",
  },
  {
    id: "process",
    path: "#process",
    label: "진행 과정",
  },
  {
    id: "reviews",
    path: "#reviews",
    label: "고객 리뷰",
  },
  {
    id: "faq",
    path: "#faq",
    label: "FAQ",
  },
];

export default function Navbar() {
  return (
    <header className="absolute w-full">
      <div className="container">
        <div className="h-[var(--navbar-height)] flex items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {routes.map((route) => (
                  <li
                    key={route.id}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    <Link href={route.path}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center ml-8 gap-4">
              {/* <Button className="hidden sm:flex">Tham gia ngay</Button> */}
              {/* <ModeToggle className="hidden sm:flex" /> */}
              {/* <Button variant="ghost" size="icon" className="md:hidden">
                <AlignRight className="w-6 h-6" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
