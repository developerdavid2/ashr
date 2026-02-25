// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const subsidiaries = [
  "General Inquiry",
  "ASHR Run and Drive",
  "ASHR Designs",
  "High Taste Ceramics",
  "Simtex Manhole Cover",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number too short"),
  subsidiary: z.enum(subsidiaries, {
    required_error: "Please select a subsidiary",
  }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subsidiary: undefined,
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        from_number: values.phone,
        subsidiary: values.subsidiary,
        message: values.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
      );

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        icon: <CheckCircle2 className="h-5 w-5 text-lime-600" />,
        style: {
          background: "rgba(255, 254, 253, 0.95)",
          backdropFilter: "blur(12px)",
          color: "#000",
        },
        duration: 5000,
      });
      form.reset();
    } catch {
      toast.error("Failed to send message", {
        description: "Please try again or reach us via WhatsApp.",
        icon: <XCircle className="h-5 w-5 text-red-400" />,
        style: {
          background: "rgba(254, 242, 242, 0.95)",
          backdropFilter: "blur(12px)",
          color: "#000",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-poppins mx-auto w-full max-w-full overflow-hidden">
      {" "}
      {/* Controls max width perfectly */}
      {/* Glassmorphic Card */}
      <div className="bg-main/5 relative overflow-hidden rounded-2xl border border-white/20 p-8 shadow-2xl shadow-black/30 backdrop-blur-lg sm:p-10 lg:p-12">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-linear-to-br from-[#C9A961]/10 via-transparent to-[#A9802C]/5 opacity-60" />

        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-12 text-start">
            <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl">
              Send Us a{" "}
              <span className="font-bold text-[#C9A961]">Message</span>
            </h2>
            <p className="font-poppins mt-4 max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
              We typically respond within a few hours
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="h-10 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white transition-all placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent sm:h-14 sm:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="h-10 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white transition-all placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent sm:h-14 sm:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-400" />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+234 800 000 0000"
                        className="h-10 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white transition-all placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent sm:h-14 sm:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-400" />
                  </FormItem>
                )}
              />

              {/* Subsidiary */}
              <FormField
                control={form.control}
                name="subsidiary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Which business are you contacting?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      key={field.value || "empty"}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="h-14 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white data-placeholder:text-gray-500">
                          <SelectValue placeholder="Select a subsidiary" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-white/20 bg-white/10 backdrop-blur-xl">
                        {subsidiaries.map((sub) => (
                          <SelectItem
                            key={sub}
                            value={sub}
                            className={cn(
                              "cursor-pointer bg-transparent text-white",
                            )}
                          >
                            {sub}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm text-red-400" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message (max 1000 characters)"
                        className="h-32 resize-none rounded-xl border-white/30 bg-white/5 text-white placeholder:font-normal placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#C9A961] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-400" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="w-full pt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="before:bg-[linear-gradient(45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%)]/45 relative flex w-full items-center justify-center rounded-xl bg-linear-to-br from-[#E4C777]/70 via-[#A9802D] via-30% to-[#A9802C] py-6 text-sm font-medium whitespace-nowrap text-white/90 shadow transition-all duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-[1.015] hover:brightness-105 hover:before:bg-position-[-100%_0,0_0] hover:before:duration-1400"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-3 h-7 w-7 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
