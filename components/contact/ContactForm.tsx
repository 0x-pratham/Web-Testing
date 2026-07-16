"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
  };

  const inputClass = `
    w-full rounded-xl border border-neutral-200 bg-[#FCFAF8] px-5 py-4 md:px-6 md:py-[18px] 
    body transition-all duration-500 placeholder:text-neutral-400 
    focus:border-[#E87830]/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#E87830]/5 
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="rounded-[32px] border border-neutral-200/60 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-8 md:p-10 lg:p-12"
    >
      <div className="mb-8 md:mb-10 lg:mb-12">
        <span className="label uppercase text-[#E87830]">
          Start A Conversation
        </span>
        <h2 className="hero-title mt-6 tracking-tight text-neutral-950">
          Let's build something <br /> exceptional.
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="label text-neutral-600">Full Name</label>
            <input {...register("name", { required: true })} id="name" type="text" placeholder="Your Name" autoComplete="name" className={inputClass} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="label text-neutral-600">Work Email</label>
            <input {...register("email", { required: true })} id="email" type="email" placeholder="your@company.com" autoComplete="email" className={inputClass} required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="label text-neutral-600">Company</label>
          <input {...register("company")} id="company" type="text" placeholder="Your Organization" autoComplete="organization" className={inputClass} />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="label text-neutral-600">Required Service</label>
          <select {...register("service", { required: true })} id="service" className={`${inputClass} appearance-none cursor-pointer`} required>
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="label text-neutral-600">Project Details</label>
          <textarea {...register("message", { required: true })} id="message" placeholder="How can we help?" rows={5} autoComplete="off" className={inputClass} required />
        </div>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-neutral-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#E87830] hover:shadow-lg md:w-auto md:px-10"
        >
          <span>Send Enquiry</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.div>
  );
}