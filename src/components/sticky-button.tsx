"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useContext } from "react";
import { StickyButtonContext } from "@/providers/stick-button-provider";

export default function StickyButton() {
  const { visible } = useContext(StickyButtonContext);

  if (!visible) return null;

  return (
    <div className="fixed left-1/2 bottom-4 -translate-x-1/2 max-w-[300px] sm:max-w-xs w-full z-50 px-8">
      <Button size="lg" className="w-full" asChild>
        <Link href="/apply">견적 요청하기</Link>
      </Button>
    </div>
  );
}
