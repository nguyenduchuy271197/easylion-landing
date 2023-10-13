import {
  CONSULTANTS,
  SERVICES,
  applyFormSchema,
} from "@/app/apply/components/apply-form";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import z from "zod";

export default function ApplyConfirmEmail({
  company = "LIKELION",
  name = "Huy",
  position = "Dev",
  email = "nguyenduchuy27111997@gmail.com",
  services = ["app", "web"],
  consultants = ["9am_to_12am"],
}: z.infer<typeof applyFormSchema>) {
  const previewText = `New HR application!!!! - LIKELION`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/92bd1fdf7b89d3f671703c123f6489fb.png"
                width="200"
                height="100"
                alt="Vercel"
                className="object-contain mx-auto my-0"
              />
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Company</Column>
                <Column>{company}</Column>
              </Row>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Name</Column>
                <Column>{name}</Column>
              </Row>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Position</Column>
                <Column>{position}</Column>
              </Row>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Email</Column>
                <Column>{email}</Column>
              </Row>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Services</Column>
                <Column>
                  {SERVICES.filter((_service) =>
                    services.includes(_service.id)
                  ).map((service) => (
                    <Row key={service.id}>{service.label}</Row>
                  ))}
                </Column>
              </Row>
              <Row className="mb-4">
                <Column className="w-40 font-bold">Consultants</Column>
                <Column>
                  {CONSULTANTS.filter((_consultant) =>
                    consultants.includes(_consultant.id)
                  ).map((consultant) => (
                    <Row key={consultant.id}>{consultant.label}</Row>
                  ))}
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              harum facere sapiente eveniet dicta laudantium quae error
              provident impedit consequatur reiciendis quidem voluptatibus
              minima in magnam delectus dolore earum architecto excepturi iste.
              Eaque magnam voluptatibus maxime fugiat voluptatum ipsam dicta?
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
