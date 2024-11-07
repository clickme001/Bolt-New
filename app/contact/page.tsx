"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-[#C5A572]" />,
      title: "Address",
      details: ["123 Education Street", "Knowledge City, KN 12345"]
    },
    {
      icon: <Phone className="h-6 w-6 text-[#C5A572]" />,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 765-4321"]
    },
    {
      icon: <Mail className="h-6 w-6 text-[#C5A572]" />,
      title: "Email",
      details: ["info@excellence.edu", "admissions@excellence.edu"]
    },
    {
      icon: <Clock className="h-6 w-6 text-[#C5A572]" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-[#C5A572] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  {info.icon}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" {...register("name", { required: "Name is required" })} aria-invalid={errors.name ? "true" : "false"} />
                  {errors.name && <p role="alert" className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input type="email" id="email" {...register("email", { required: "Email is required" })} aria-invalid={errors.email ? "true" : "false"} />
                  {errors.email && <p role="alert" className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" {...register("subject", { required: "Subject is required" })} aria-invalid={errors.subject ? "true" : "false"} />
                {errors.subject && <p role="alert" className="text-red-500 mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" rows={6} {...register("message", { required: "Message is required" })} aria-invalid={errors.message ? "true" : "false"} />
                {errors.message && <p role="alert" className="text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-[#C5A572] hover:bg-[#B39362]">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="h-[400px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwNC44Ik4gNzPCsDU5JzA2LjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
