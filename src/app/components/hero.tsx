"use client";

import StickyButton from "@/components/sticky-button";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <>
      <section className="dark:bg-[url('/background/hero-bg.avif')] bg-right bg-cover pt-[var(--navbar-height)]">
        <div className="container">
          <div className="relative">
            <div className="lg:h-[calc(100vh-var(--navbar-height))] flex items-center max-w-3xl py-10">
              <div className="space-y-8">
                <div className="space-y-8">
                  <Title variant="h1">
                    <span className="text-gradient">초단기간</span>
                    <br />
                    합리적인 <span className="text-gradient">개발 가격</span>
                  </Title>
                  <p className="text-foreground/80 text-xl">
                    EASYLION은 단순한 비지니스 파트너가 아닙니다. 우리는 함께
                    성장하는 동반자 입니다.
                  </p>
                </div>
                <div>
                  <Button size="lg" ref={ref} asChild>
                    <Link href="/apply">사업 성공하기</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:absolute bottom-0 left-[70%]">
              <Image
                width={300}
                height={300}
                alt="Woman Hero"
                src="https://i.imgur.com/ygqY4L0.png"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {!inView && <StickyButton />}
    </>
  );
}
