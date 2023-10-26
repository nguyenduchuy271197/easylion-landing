"use client";

import { Button } from "@/components/ui/button";
import { StickyButtonContext } from "@/providers/stick-button-provider";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CTAButton() {
  const { onCtaBtnVisible } = useContext(StickyButtonContext);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    onCtaBtnVisible(inView);
  }, [inView, onCtaBtnVisible]);

  return (
    <Button size="lg" variant="secondary" asChild ref={ref}>
      <Link href="/apply">견적 요청하기</Link>
    </Button>
  );
}
