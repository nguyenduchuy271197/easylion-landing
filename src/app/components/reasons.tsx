import { Title } from "@/components/ui/title";
import { Code, LucideIcon } from "lucide-react";

const reasons = [
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
  {
    title: "Lightning fast",
    description:
      "Starts in seconds with turbocharged networking, smooth Rosetta x86 emulation, VirtioFS file sharing, and other optimizations for some workloads.",
    icon: Code,
  },
];

interface ReasonProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function ReasonCard({ title, description, icon: Icon }: ReasonProps) {
  return (
    <div className="p-8 sm:p-12 space-y-4 rounded-lg bg-muted/50">
      <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-lg text-foreground/70">{description}</p>
    </div>
  );
}

export default function Reasons() {
  return (
    <section id="reasons">
      <div className="container">
        <div className="space-y-16">
          <div className="space-y-4">
            <Title variant="h2">Why choose PeopleForce?</Title>
            <p className="text-xl text-foreground/70">
              Whether you’re new to PeopleForce, or back to see what’s new,
              we’ll have you set up and ready to do your best work in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((solution) => (
              <ReasonCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
