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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { Email } from "@/app/api/apply/send-email/route";

export const SERVICES = [
  {
    id: "web",
    label: "Web",
  },
  {
    id: "app",
    label: "App",
  },
  {
    id: "system_program",
    label: "System / Program",
  },
  {
    id: "etc",
    label: "Etc.",
  },
] as const;

export const CONSULTANTS = [
  {
    id: "9am_to_12am",
    label: "9am to 12am",
  },
  {
    id: "2pm_to_4pm",
    label: "2pm to 4pm",
  },
  {
    id: "4pm_to_6pm",
    label: "4pm to 6pm",
  },
  {
    id: "6pm_to_8pm",
    label: "6pm to 8pm",
  },
] as const;

export const applyFormSchema = z.object({
  company: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one service.",
  }),
  consultants: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one consultants.",
    }),
});

export default function ApplyForm() {
  const form = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      company: "",
      name: "",
      position: "",
      email: "",
      services: [],
      consultants: [],
    },
  });

  const { isLoading: isSending, mutate: mutateSendEmail } = useMutation({
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
        position={data.position}
        email={data.email}
        services={data.services}
        consultants={data.consultants}
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Services</FormLabel>
                <FormDescription>
                  Select the services you want to use.
                </FormDescription>
              </div>
              {SERVICES.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="services"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consultants"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Consultant Time</FormLabel>
                <FormDescription>
                  Select the time you want to consult.
                </FormDescription>
              </div>
              {CONSULTANTS.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="consultants"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
