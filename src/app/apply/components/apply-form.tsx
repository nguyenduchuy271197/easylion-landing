"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import ApplyConfirmEmail from "@/emails";
import { render } from "@react-email/render";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { Email } from "@/app/api/apply/send-email/route";
import {
  BUDGET_OPTIONS,
  CONSULTANTS,
  CONTACT_OPTIONS,
  PROGRESS_OPTIONS,
  SERVICES,
} from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const applyFormSchema = z.object({
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  email: z.string().email(),
  content: z.string().max(160, {
    message: "Message must not be longer than 30 characters.",
  }),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one service.",
  }),
  consultants: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one consultant.",
    }),
  contact: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "You need to select a contact type.",
  }),
  progress: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "You need to select a progress type.",
  }),
  budget: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "You need to select a budget type.",
  }),
});

export default function ApplyForm() {
  const form = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      company: "",
      name: "",
      phone: "",
      email: "",
      services: [],
      consultants: [],
    },
  });

  const { mutate: mutateSendEmail } = useMutation({
    mutationFn: (data: Email) => axios.post("/api/apply/send-email", data),
    onMutate: () => {
      form.reset();
      toast.success("Form submitted!");
    },
  });

  function onSubmit(data: z.infer<typeof applyFormSchema>) {
    const html = render(
      <ApplyConfirmEmail
        company={data.company}
        name={data.name}
        email={data.email}
        phone={data.phone}
        content={data.content}
        services={data.services}
        consultants={data.consultants}
        contact={data.contact}
        progress={data.progress}
        budget={data.budget}
      />
    );

    mutateSendEmail({
      from: "huynguyen@likelion.net",
      to: "easylion@likelion.net",
      subject: "New application for HR - LIKELION",
      html: html,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>회사명</FormLabel>
                <FormControl>
                  <Input placeholder="이지라이언" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름 / 포지션</FormLabel>
                <FormControl>
                  <Input placeholder="박홍길 / 마케팅팀장" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="easylion@likelion.net" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input placeholder="01019865432" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>기타 문의 사항</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="무엇이든 물어보세요."
                    className="resize-none h-44"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto border-t pt-8">
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-base">희망 소통 방식</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row sm:items-center gap-6"
                  >
                    {CONTACT_OPTIONS.map((option) => (
                      <FormItem
                        className="flex items-center gap-2 space-y-0"
                        key={option.id}
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="progress"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-base">기획서 완성률</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-6"
                  >
                    {PROGRESS_OPTIONS.map((option) => (
                      <FormItem
                        className="flex items-center gap-2 space-y-0"
                        key={option.id}
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="space-y-4 col-span-full">
                <div>
                  <FormLabel className="text-base">예산</FormLabel>
                  <FormDescription>
                    설명 - 예산내에서 퀄리티 200%의 웹사이트를 만들기 위한
                    최선의 방법을 제안해드리겠습니다.
                  </FormDescription>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <FormItem
                        className="flex items-center gap-2 space-y-0"
                        key={option.id}
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <Button type="submit" size="lg" className="w-full">
            문의하기
          </Button>
        </div>
      </form>
    </Form>
  );
}
