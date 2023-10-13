import { Title } from "@/components/ui/title";

interface Step {
  title: string;
  description: string;
  src: string;
}

const steps: Step[] = [
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
];

export default function Process() {
  return (
    <section className="bg-center bg-cover" id="process">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">What we do</Title>
          <div className="">
            <ul className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col max-w-4xl gap-2 p-8 border-2 rounded-lg sm:flex-row sm:items-center sm:gap-8 bg-muted/50"
                  // style={{
                  //   marginLeft: `${index * 4}rem`,
                  // }}
                >
                  <div className="font-bold text-red-300/40 text-8xl shrink-0">
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
          </div>
        </div>
      </div>
    </section>
  );
}
