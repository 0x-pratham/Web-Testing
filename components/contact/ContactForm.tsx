"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { services } from "../../data/services"; 

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const inputClass = `
    w-full rounded-xl border border-neutral-200 bg-[#FCFAF8] px-5 md:px-6 py-4 md:py-[18px] 
    text-[16px] md:text-[17px] text-neutral-900 placeholder:text-neutral-400 transition-all duration-500 
    focus:border-[#E87830]/50 focus:bg-white focus:ring-4 focus:ring-[#E87830]/5 
    focus:outline-none
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="rounded-[32px] border border-neutral-200/60 bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
    >
      <div className="mb-8 md:mb-10 lg:mb-12">
        <span className="text-[15px] md:text-[16px] uppercase tracking-[0.18em] text-[#E87830] font-semibold">
          Start A Conversation
        </span>
        <h2 className="mt-6 text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.05] text-neutral-950 font-[var(--font-sora)]">
          Let's build something <br/> exceptional.
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input {...register("name")} placeholder="Full Name" className={inputClass} required />
          <input {...register("email")} type="email" placeholder="Work Email" className={inputClass} required />
        </div>
        
        <input {...register("company")} placeholder="Company" className={inputClass} />
        
        <select {...register("service")} className={`${inputClass} appearance-none cursor-pointer`} required>
           <option value="">Select a Service</option>
           {services.map((service) => (
             <option key={service.slug} value={service.slug}>
               {service.title}
             </option>
           ))}
        </select>

        <textarea {...register("message")} placeholder="Project Details" rows={5} className={inputClass} required />

        <button
          type="submit"
          className="group w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-neutral-900 px-8 md:px-10 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#E87830] hover:shadow-lg"
        >
          <span>Send Enquiry</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </form>
    </motion.div>
  );
}