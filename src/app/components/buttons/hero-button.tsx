"use client";

import { Button } from "@/components/ui/button";
import { StickyButtonContext } from "@/providers/stick-button-provider";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HeroButton() {
  const { onHeroBtnVisible } = useContext(StickyButtonContext);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    onHeroBtnVisible(inView);
  }, [inView, onHeroBtnVisible]);

  return (
    <Button size="lg" asChild ref={ref}>
      <Link href="/apply">사업 성공하기</Link>
    </Button>
  );
}
