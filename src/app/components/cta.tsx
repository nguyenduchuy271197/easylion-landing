import Image from "next/image";
import CTAButton from "./buttons/cta-button";

export default function CTA() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="px-8 pt-12 md:pb-12 rounded-3xl bg-gradient-to-r from-green-400 via-green-600 to-green-600 relative flex flex-col items-end gap-4">
          <div className="flex flex-col items-center md:items-start gap-4 md:max-w-md text-center md:text-left max-w-none">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold sm:text-3xl">
                확실입니다! EASYLION을 선택하시면 신뢰 - 우정 - 성공을
                선택하시는 것입니다!
              </h3>
              <p className="text-foreground/70 text-lg">
                우리는 귀사의 비즈니스 가치를 극대화하고 함께 도전을 극복하기
                위한 열정 넘치는 &quot;같은 팀&quot;의 환경을 구축하는 것에
                최선을 다하겠습니다.
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
