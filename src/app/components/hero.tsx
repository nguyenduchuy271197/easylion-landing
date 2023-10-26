import { Title } from "@/components/ui/title";
import Image from "next/image";
import HeroButton from "./buttons/hero-button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
  return (
    <section className="bg-[url('/background/hero-bg.avif')] bg-right bg-cover pt-[var(--navbar-height)]">
      <div className="container">
        <div className="relative">
          <div className="lg:h-[calc(100vh-var(--navbar-height))] flex items-center max-w-3xl py-10 max-h-[700px]">
            <div className="space-y-8 max-w-xl mx-auto text-center lg:text-left">
              <div className="space-y-8">
                <Title
                  variant="h1"
                  className="animate-in fade-in slide-in-from-top-4 duration-700"
                >
                  <span className="text-gradient">초저가 초단기</span>
                  <br />
                  <span>웹/앱 개발</span>
                </Title>
                <p className="text-foreground/80 text-xl sm:text-2xl animate-in fade-in slide-in-from-top-5 duration-700 fill-mode-backwards delay-300">
                  <span className="lg:hidden">Web App 외주개발</span>
                  <span className="hidden lg:block">
                    이지라이언은 단순한 비지니스 파트너가 아닙니다. 우리는 함께
                    성장하는 동반자 입니다.
                  </span>
                </p>
              </div>
              <div className="animate-in fade-in slide-in-from-top-5 duration-700 fill-mode-backwards delay-700">
                <HeroButton />
              </div>
            </div>
          </div>
          <div className="lg:absolute bottom-0 left-[50%] lg:w-[600px]">
            <AspectRatio
              ratio={1 / 1}
              className="w-full mx-auto max-w-[300px] sm:max-w-[400px]"
            >
              <Image
                alt="Woman Hero"
                src="/woman-hero.png"
                className="mx-auto object-contain animate-in fade-in slide-in-from-left-8 duration-1000"
                sizes="(min-width: 640px) 100vw, 50vw"
                fill
                priority
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
