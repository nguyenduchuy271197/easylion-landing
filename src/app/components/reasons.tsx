import { Title } from "@/components/ui/title";
import { REASONS } from "@/constants";
import { cn, groupArray } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import Markdown from "react-markdown";

interface Reason {
  title: string;
  description: string;
  highlight: boolean;
  src: string;
}

type ReasonCardProps = HTMLAttributes<HTMLDivElement> & Reason;

function ReasonCard({
  title,
  description,
  src,
  highlight,
  className,
  ...props
}: ReasonCardProps) {
  return (
    <div
      className={cn(
        "relative p-8 sm:p-12 rounded-lg bg-muted/50",
        highlight ? "md:bg-muted/90" : "md:bg-muted/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-12 pb-44">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
          <p
            className="text-lg text-foreground/70"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="relative w-[330px] sm:w-[400px] aspect-[16/9] self-end">
            <Image src={src} alt={title} fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReasonLayout({ reasons }: { reasons: Reason[] }) {
  const groups = groupArray(reasons, 2);

  return (
    <div className="space-y-8">
      {groups.map((reasons, index) => (
        <div
          key={index}
          className={cn(
            "grid gap-8",
            index % 2 === 0
              ? "md:grid-cols-[2fr_3fr]"
              : "md:grid-cols-[3fr_2fr]"
          )}
        >
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Reasons() {
  return (
    <section id="reasons">
      <div className="container">
        <div className="space-y-16">
          <div className="space-y-4">
            <Title variant="h2">
              왜 <span className="text-gradient">EASYLION</span> 인가요?
            </Title>
            <p className="text-xl text-foreground/70">
              EASYLION은 프로젝트의 A-Z 전 과정을 함께 합니다.
            </p>
          </div>

          <ReasonLayout reasons={REASONS} />
        </div>
      </div>
    </section>
  );
}
