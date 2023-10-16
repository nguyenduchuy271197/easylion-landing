import { NETWORKS } from "@/constants";
import Image from "next/image";

export default function Networks() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="flex flex-wrap items-center justify-center gap-20 gap-y-6 py-28">
          {NETWORKS.map((company) => (
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
