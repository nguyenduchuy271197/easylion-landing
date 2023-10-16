import { Title } from "@/components/ui/title";
import { STEPS } from "@/constants";
import Image from "next/image";

export default function Process() {
  return (
    <section className="bg-center bg-cover" id="process">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">
            우리는 <span className="text-gradient">이렇게</span> 함께합니다
          </Title>
          <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            <ul className="flex flex-col gap-8">
              {STEPS.map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-4 p-8 border-2 rounded-lg sm:flex-row sm:items-center sm:gap-8 bg-muted/50"
                >
                  <div className="font-bold text-green-300/10 text-7xl sm:text-8xl shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-lg text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block w-full h-full relative rounded-lg overflow-hidden">
              <Image
                src="/process.avif"
                alt="Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
