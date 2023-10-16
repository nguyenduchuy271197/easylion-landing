import { Title } from "@/components/ui/title";
import ApplyForm from "./components/apply-form";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <div className="flex items-center justify-center pt-32 pb-16">
      <div className="max-w-screen-xl mx-auto px-8 w-full">
        <div className="space-y-8">
          <div className="space-y-6">
            <Image
              src="/question.png"
              alt="Questions"
              width={60}
              height={60}
              className="mx-auto"
            />
            <Title variant="h2" className="text-center">
              이지라이언과 함께 멋진 웹사이트를 만들어볼까요?
            </Title>
          </div>

          <ApplyForm />
        </div>
      </div>
    </div>
  );
}
