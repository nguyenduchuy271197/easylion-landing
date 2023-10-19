"use client";

import { Title } from "@/components/ui/title";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/carousel";
import { REVIEWS } from "@/constants";

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
          <div className="w-16 h-16 bg-foreground rounded-full shrink-0 flex items-end justify-center overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              width={60}
              height={60}
              className="h-auto w-auto"
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
          <Title variant="h2">고객리뷰 💙</Title>
          <Carousel>
            {REVIEWS.map((review, index) => (
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
