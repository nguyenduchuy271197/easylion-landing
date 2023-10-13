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
                  <Title variant="h1">
                    All-In-One{" "}
                    <span className="text-gradient">HR platform</span> to manage
                    your entire employee experience
                  </Title>
                  <p className="text-foreground/80 text-xl">
                    PeopleForce is the modern all-in-one HR platform that
                    ideally meets your business’s needs. Say goodbye to
                    time-consuming routine tasks and focus on people.
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
