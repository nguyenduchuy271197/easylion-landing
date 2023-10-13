import { Title } from "@/components/ui/title";
import { Code, LucideIcon } from "lucide-react";

const solutions = [
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

interface SolutionProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function SolutionCard({ title, description, icon: Icon }: SolutionProps) {
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

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="container">
        <div className="space-y-16">
          <div className="space-y-4 max-w-3xl">
            <Title variant="h2">
              Designed with{" "}
              <span className="text-gradient">every team member</span> in mind
            </Title>
            <p className="text-xl text-foreground/70">
              Thousands of businesses of all sizes – from startups to large
              enterprises – use PeopleForces software and APIs to accept
              payments, send payouts, and manage their businesses online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
