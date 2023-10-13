import { Title } from "@/components/ui/title";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="mx-auto max-w-screen-lg px-8">
        <div className="space-y-16">
          <div className="space-y-6">
            <Image
              src="/books.png"
              alt="Books"
              width={60}
              height={60}
              className="mx-auto"
            />
            <Title variant="h2" className="text-center">
              최근 포트폴리오
            </Title>
          </div>

          <div className="md:p-12 p-6 bg-gradient-to-r from-green-600 via-green-600 to-green-400 rounded-lg">
            <video autoPlay className="w-full rounded-lg" muted>
              <source src="/assets/likelion.mp4" type="video/mp4" />
              Sorry, your browser doesn&apos;t support videos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
