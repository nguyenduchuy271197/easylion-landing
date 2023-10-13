"use client";

import { Title } from "@/components/ui/title";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/carousel";

const reviews = [
  {
    name: "김OO 수석",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "S사",
    emphasis: "함께 가고 싶은 최고의 파트너입니다",
    description:
      "1년 넘게 EASYLION과 협업을 하고 있습니다. 언제나 친절의 응대해주시고 업데이트가 있을 땐 요청드리자마자 정확하게 처리해주시더라구요. 이전에는 외주라는 말만들어도 힘들었는데 EASY LION과 협업을 시작한 이후로 외주로 인한 스트레스가 사라졌습니다.",
  },
  {
    name: "이OO 리드",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "N사",
    emphasis: "비지니스의 혁신적인 변화",
    description:
      "EASYLION에게 외주를 요청하기 전에 조금 광범위하게 기획안을 전달드렸는데, 우리 비지니스에 대해 자체적으로 찾아보시고 여러 경쟁사 분석까지 해주신 이후에 개발을 진행하시더라구요. 덕분에 다른 업무에 더욱 몰두할 수 있어 운영 비용을 많이 절감할 수 있었습니다. 벌써 3번째 의뢰군요.",
  },
  {
    name: "최OO 매니저",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "L사",
    emphasis: "누구보다 빠르게 누구보다 정확하게",
    description:
      "마감기한보다 훨씬 더 빠르게 전달 주셔서 보다 구체적인 피드백을 주고 받을 수 있었던 점이 가장 인상깊었습니다. 타 외주 업체는 마감 기한 이후엔 나 몰라라 하지만 EASY LION 에선 계약 종료이후에도 프로덕트 운영에 대해 꾸준히 물어봐주신 점에 대해 프로는 다르구나 라는 점을 느꼈습니다. 당연히 다음번 개발도 EASYLION에 맡길 생각입니다.",
  },
  {
    name: "김OO 대표",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "M사",
    emphasis: "개발? 몰라도 괜찮아!",
    description:
      "개발이라곤 전혀 모르는 저에게도 기획자 분께서 하나씩 기술에 대해 쉽게 설명해주셨고 서비스에 대한 고민도 함께 나눠주셔서 동업자라는 기분이 들었습니다. 고객이 원하는 서비스를 구현하는 것 뿐만 아니라, 제가 미처 생각하지 못한 부분까지 세심하게 고민해주시면 기능을 추가해주시는 모습을 보며, 이번 사업 성공의 절반 이상은 EASYLION의 지분이라 생각합니다. 강력 추천합니다!",
  },
  {
    name: "김OO 파트장",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "B사",
    emphasis:
      "우리 비즈니스를 완벽하게 이해하고 홈페이지를 만들어 주셨어요,! 정말 감사합니다",
    description:
      "베트남과 무역하는 회사입니다, 현지와 소통하며 발주관리를 하는데 늘 애먹었는데 완벽하게 비즈니스를 이해해주시고,현지 사람들이 발주 관리를 가능하게 서비스를 제작해주셨어요. 만족도가 상당합니다. 고맙습니다. 다음번 업데이트도 잘 부탁드릴게요.",
  },
  {
    name: "심OO 대표",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "P사",
    emphasis: "늘 말썽이던 홈페이지를 고쳐주셨어요",
    description:
      "작은 회사를 운영 중인데요, 홈페이지를 개발했었으나, 무슨 문제가 생겼는지 고객사들이 확인하려고 하면 늘 접속이 안되거나 말썽이였습니다. 이지라이언에 문의 했더니, 저렴한 가격에 보수를 잘해주셨어요. 이제 접속안되는 일은 없다고 합니다. 고맙습니다.",
  },
  {
    name: "한OO 님",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "개인 사업자",
    emphasis: "쉽게 잘 만들어주시네요",
    description:
      "홈페이지는 필요하고 제대로 만드려면 돈천만원씩 들던대 그리고, 설명은 왜 이렇게 어렵습니까. 이지라이언은 달랐어요. 상담해주시는 분이 쉽게 해주시더라고요, IT 교육회사라더니 다르긴 다릅니다. 쉽더라고요. 그리고 가격도 정말 싸게 잘 만들었습니다. 고맙습니다~",
  },
  {
    name: "조OO 님",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "하남 소재 맛집",
    emphasis:
      "손님이 끊겨서 망할 뻔 했다가 , 이지라이언 덕분에 다시 잘되고 있어요",
    description:
      "나름 동네에서 알아주는 알아주는 맛집이었는데요, 웨이팅이 꽤 있어서 사업을 확장시키면서 고객들이 사용할 앱을 만들었는데 만들고 나니 갑자기 잘 되지 않더라구요. 저는 모르는 이유를 이지라이언에서 같이 조사 해줘서, 다시 잘 판매하고 있어요.",
  },
];

interface Review {
  name: string;
  avatar: string;
  profession: string;
  description: string;
  emphasis?: string;
}

function ReviewCard({
  name,
  avatar,
  profession,
  description,
  emphasis,
}: Review) {
  return (
    <div className="max-w-4xl mx-auto bg-muted p-8 rounded-xl">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center gap-4 border-b border-foreground/40 pb-4">
          <div className="w-16 h-16 bg-primary rounded-full shrink-0 flex items-end justify-center overflow-hidden">
            <Image
              src="/human/businesswoman.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div className="space-y-1">
            <div className="text-foreground/80">{profession}</div>
            <h3 className="text-xl font-bold capitalize">{name}</h3>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gradient font-bold text-lg">{emphasis}</p>
          <p className="text-lg font-medium leading-relaxed">
            <span className="text-2xl">“</span>
            {description}
            <span className="text-2xl">”</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">고객리뷰 ❤️</Title>
          <Carousel>
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
