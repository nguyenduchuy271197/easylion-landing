import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="px-8 py-12 rounded-3xl bg-gradient-to-r from-green-400 via-green-600 to-green-600 relative flex flex-col items-end gap-4">
          <div className="flex flex-col items-center md:items-start gap-4 md:max-w-md text-center md:text-left max-w-none">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Choose PeopleForce as your way to creating a culture of
                engagement
              </h3>
              <p className="text-foreground/70 text-lg">
                Our main goal is to automate routine and time-consuming tasks so
                you can free up your time for focusing on the talent itself.
              </p>
            </div>

            <Button size="lg" variant="secondary" asChild>
              <Link href="/apply">Liên hệ ngay</Link>
            </Button>
          </div>
          <Image
            src="https://i.imgur.com/kHR4oTC.png"
            alt="Woman CTA"
            className="md:absolute right-[60%] bottom-0 mx-auto"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
