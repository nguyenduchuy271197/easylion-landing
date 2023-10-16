import { Title } from "@/components/ui/title";
import { REASONS } from "@/constants";
import { cn, groupArray } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Reason {
  title: string;
  description: string;
  highlight: boolean;
}

type ReasonCardProps = HTMLAttributes<HTMLDivElement> & Reason;

function ReasonCard({
  title,
  description,
  className,
  ...props
}: ReasonCardProps) {
  return (
    <div
      className={cn("p-8 sm:p-12 space-y-4 rounded-lg bg-muted/50", className)}
      {...props}
    >
      <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-lg text-foreground/70">{description}</p>
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
            <ReasonCard
              key={reason.title}
              {...reason}
              className={cn(
                reason.highlight ? "md:bg-muted/90" : "md:bg-muted/50"
              )}
            />
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
              EasyLion가 제공하는 것과 우리의 신뢰성은 당신이 생각하는 것
              이상으로 나아갈 것입니다.
            </p>
          </div>

          <ReasonLayout reasons={REASONS} />
        </div>
      </div>
    </section>
  );
}
