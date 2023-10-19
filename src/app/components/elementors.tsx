import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import CountUp from "@/components/count-up";
import { ELEMENTORS } from "@/constants";
import Balancer from "react-wrap-balancer";

interface Elementor {
  value: number;
  label: string;
  postfix?: string;
}

function Elementor({ value, label, postfix }: Elementor) {
  return (
    <div className="space-y-2">
      <h4 className="text-4xl font-bold sm:text-5xl">
        <CountUp
          start={0}
          end={value}
          suffix={postfix}
          enableScrollSpy
          scrollSpyOnce
        />
      </h4>
      <p className="text-xl text-foreground/80">{label}</p>
    </div>
  );
}

export default function Elementors() {
  return (
    <section
      className="bg-[url('/background/elementor-bg.avif')] bg-cover"
      id="elementors"
    >
      <div className="container">
        <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row lg:items-center lg:[&>div]:flex-1 py-28">
          <div className="space-y-12 text-center lg:text-left">
            <Title
              variant="h2"
              className="mx-auto lg:text-left sm:max-w-xl lg:mx-0 space-y-2"
            >
              <Balancer>
                각 분야 <span className="text-gradient">전문 개발자</span>로
                구성된 팀
              </Balancer>

              <Balancer>
                <span className="text-gradient">전세계 고객</span>
                에게 뛰어난 고객경험
              </Balancer>
            </Title>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
              {ELEMENTORS.map((elementor) => (
                <Elementor key={elementor.label} {...elementor} />
              ))}
            </div>
          </div>
          <div>
            <AspectRatio
              ratio={16 / 9}
              className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg lg:max-w-none"
            >
              <Image
                src="/discussion.jpg"
                alt="Advance your journey with expertise around the world"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
