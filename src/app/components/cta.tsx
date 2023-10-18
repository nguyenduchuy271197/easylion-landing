import Image from "next/image";
import CTAButton from "./buttons/cta-button";

export default function CTA() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="px-8 pt-12 md:pb-12 rounded-3xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-600 relative flex flex-col items-end gap-4">
          <div className="flex flex-col items-center md:items-start gap-4 md:max-w-md text-center md:text-left max-w-none">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold sm:text-3xl">
                아직 망설여지시나요? <br />
                언제든 편하게 상담 받으시고 <br />
                프로젝트 성공을 빠르게 이끌어보세요
              </h3>
              <p className="text-foreground/70 text-lg">
                EASYLION은 단순한 외주가 아닙니다. <br /> 함께 비지니스 가치를
                극대화 하는 사업 &apos;동반자&apos; 입니다. <br />
                함께 갈 여정에 대해 EASYLION이 가장 큰 힘이 되겠습니다.
              </p>
            </div>

            <CTAButton />
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
