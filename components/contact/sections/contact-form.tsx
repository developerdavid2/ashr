// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

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
    .max(1000, "Message too long"),
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
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Thank you! We'll respond within 24 hours.", {
          icon: "Success",
          style: {
            borderRadius: "12px",
            background: "#000",
            color: "#fff",
            fontWeight: "500",
          },
        });
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        icon: "Error",
        style: {
          borderRadius: "12px",
          background: "#fee",
          color: "#c33",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-kapital text-5xl lg:text-7xl leading-none">
            Send Us a <span className="text-[#C9A961]">Message</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            We typically respond within a few hours
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl text-lg focus-visible:ring-[#C9A961]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl text-lg focus-visible:ring-[#C9A961]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+234 800 000 0000"
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl text-lg focus-visible:ring-[#C9A961]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Subsidiary */}
            <FormField
              control={form.control}
              name="subsidiary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">
                    Which business are you contacting?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-14 bg-white/10 border-white/20 text-white rounded-xl text-lg">
                        <SelectValue placeholder="Select a subsidiary" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subsidiaries.map((sub) => (
                        <SelectItem key={sub} value={sub} className="text-base">
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl text-lg resize-none focus-visible:ring-[#C9A961]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="pt-8 text-center">
              <Button
                type="submit"
                disabled={isLoading}
                className="px-16 py-8 text-xl font-bold bg-[#C9A961] hover:bg-[#b89750] text-black rounded-xl shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
