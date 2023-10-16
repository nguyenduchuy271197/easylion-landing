import { Title } from "@/components/ui/title";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="mx-auto max-w-screen-lg px-8">
        <div className="space-y-16">
          <div className="space-y-6">
            <Image
              src="/book.png"
              alt="Book"
              width={60}
              height={60}
              className="mx-auto"
            />
            <Title variant="h2" className="text-center">
              최근 포트폴리오
            </Title>
          </div>

          <div className="p-4 csm:p-6 bg-gradient-to-r from-green-600 via-green-600 to-green-400 rounded-lg">
            {/* <video autoPlay className="w-full rounded-sm" muted>
              <source src="/portfolio.gif" type="video/mp4" />
              Sorry, your browser doesn&apos;t support videos.
            </video> */}
            <div className="relative w-full aspect-[16/9] rounded-sm">
              <Image src="/portfolio.gif" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
