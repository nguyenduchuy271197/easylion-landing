import Image from "next/image";

interface Network {
  title: string;
  src: string;
}

export const networks: Network[] = [
  {
    title: "BMS Global",
    src: "/assets/workspaces/bms.svg",
  },
  {
    title: "OCB Bank",
    src: "/assets/workspaces/ocb.svg",
  },
  {
    title: "AllGrow Labo",
    src: "/assets/workspaces/allgrow.svg",
  },
  {
    title: "Cafe24",
    src: "/assets/workspaces/cafe24.svg",
  },
  {
    title: "GL",
    src: "/assets/workspaces/gl.svg",
  },
  {
    title: "Nam A Bank",
    src: "/assets/workspaces/nama.svg",
  },
  {
    title: "FPT",
    src: "/assets/workspaces/fpt.svg",
  },
];

export default function Networks() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="flex flex-wrap items-center justify-center gap-20 gap-y-6 py-28">
          {networks.map((company) => (
            <div className="relative h-[80px] aspect-[2/1]" key={company.title}>
              <Image
                src={company.src}
                alt={company.title}
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
