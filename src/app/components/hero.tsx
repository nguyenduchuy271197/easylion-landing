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
                <div>
                  <Button variant="outline" size="sm">
                    Get your ticket
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-8">
                  <Title
                    variant="h1"
                    style={{
                      lineHeight: 1.2,
                    }}
                  >
                    세상에서{" "}
                    <span className="text-gradient">
                      가장 빠르고 가장 저렴한
                    </span>{" "}
                    개발 이지라이언이 함께 하겠습니다
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
            <div className="lg:absolute bottom-0 left-[60%]">
              <Image
                width={500}
                height={500}
                alt=""
                src="/background/woman-hero.png"
                className="mx-auto w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {!inView && <StickyButton />}
    </>
  );
}
