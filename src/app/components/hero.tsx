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
            <div className="space-y-8 max-w-xl">
              <div className="space-y-8">
                <Title
                  variant="h1"
                  className="animate-in fade-in slide-in-from-top-4 duration-700"
                >
                  <span className="text-gradient">초단기간</span>
                  <br />
                  합리적인 <span className="text-gradient">개발 가격</span>
                </Title>
                <p className="text-foreground/80 text-xl sm:text-2xl animate-in fade-in slide-in-from-top-5 duration-700 fill-mode-backwards delay-300">
                  EASYLION은 단순한 비지니스 파트너가 아닙니다. <br /> 우리는
                  함께 성장하는 동반자 입니다.
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
