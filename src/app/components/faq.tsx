import { Title } from "@/components/ui/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/constants";
import Markdown from "react-markdown";
import Image from "next/image";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="max-w-4xl mx-auto px-8 text-lg">
        <div className="space-y-16">
          <div className="space-y-6">
            <Image
              src="/icons/qa.png"
              alt="Questions"
              width={60}
              height={60}
              className="mx-auto"
            />
            <Title variant="h2" className="text-center">
              <span className="text-gradient">자주 묻는</span> 질문
            </Title>
          </div>

          <div className="">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQs.map((faq) => (
                <AccordionItem
                  value={faq.id}
                  className="border rounded-md px-8 py-2 bg-muted"
                  key={faq.id}
                >
                  <AccordionTrigger className="text-xl text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
