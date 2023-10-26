"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    id: "reasons",
    path: "#reasons",
    label: "이지라이언 소개",
  },
  {
    id: "elementors",
    path: "#elementors",
    label: "개발 팀",
  },
  {
    id: "portfolio",
    path: "#portfolio",
    label: "포트폴리오",
  },
  {
    id: "process",
    path: "#process",
    label: "개발 과정",
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

export default function NavLinks() {
  const pathname = usePathname();
  const matches = !pathname.startsWith("/apply");

  if (!matches) return null;

  return (
    <ul className="flex items-center gap-8">
      {routes.map((route) => (
        <li key={route.id} className="text-foreground/80 hover:text-foreground">
          <Link href={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}
