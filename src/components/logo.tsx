"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/" className="relative flex items-center h-5 aspect-[8/1]">
      {theme && theme !== "dark" ? (
        <Image src="/logo-black.svg" alt="" fill className="object-contain" />
      ) : (
        <Image src="/logo.svg" alt="" fill className="object-contain" />
      )}
    </Link>
  );
}
