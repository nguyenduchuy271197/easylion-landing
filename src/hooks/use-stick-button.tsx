"use client";

import { StickyButtonContext } from "@/providers/stick-button-provider";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useStickyButton() {
  const { visible, onHeroBtnVisible } = useContext(StickyButtonContext);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
    } else {
    }
  }, [inView]);
  return { ref };
}
