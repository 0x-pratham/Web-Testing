"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormValues,
} from "@/lib/validations/contact";
import { sendContactEmail } from "@/actions/contact";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const result = await sendContactEmail(data);

    if (result.success) {
      setSubmitted(true);
    }
  };

  const inputClass = `
    w-full
    rounded-2xl
    border
    border-neutral-200
    bg-white
    px-5
    py-[18px]
    text-neutral-900
    placeholder:text-neutral-400
    transition-all
    duration-300
    focus:border-[#E87830]/40
    focus:ring-4
    focus:ring-[#E87830]/8
    focus:outline-none
  `;

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-neutral-200/60 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-center">
        <div
          className="
            mx-auto
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#E87830]/10
          "
        >
          ✓
        </div>

        <h3 className="text-3xl font-semibold tracking-[-0.03em]">
          Message Received
        </h3>

        <p className="mt-4 text-neutral-600 leading-relaxed">
          Thank you for reaching out. Our team will review your enquiry
          and get back to you shortly.
        </p>

        <p className="mt-3 text-sm text-neutral-500">
          Typical response time: within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-[32px]
        border
        border-neutral-200/60
        bg-white
        p-8
        md:p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.03)]
      "
    >
      <div className="mb-10">
        <span className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#E87830]/15
          px-4
          py-2
          text-[11px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-[#E87830]
        ">
          Start A Conversation
        </span>

        <h2
          className="
            mt-6
            text-4xl
            md:text-5xl
            font-semibold
            tracking-[-0.06em]
            leading-[0.95]
          "
        >
          Let's discuss your<br />next project.
        </h2>

        <p className="
          mt-5
          max-w-xl
          text-neutral-600
          leading-relaxed
        ">
          Whether you're building a new product, modernizing infrastructure
          or strengthening security, we're ready to help.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Your Name"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-400 text-xs font-medium mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Work Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Work Email"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-400 text-xs font-medium mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Company
          </label>
          <input
            type="text"
            {...register("company")}
            placeholder="Company / Organization"
            className={inputClass}
          />
          {errors.company && (
            <p className="text-red-400 text-xs font-medium mt-2">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Service
          </label>
          <div className="relative">
            <select
              {...register("service")}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Select a Service</option>
              <option>Software Engineering</option>
              <option>Cloud & SaaS</option>
              <option>Cyber Security</option>
              <option>AI & Machine Learning</option>
              <option>Digital Transformation</option>
              <option>Enterprise Solutions</option>
            </select>
            <div
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                pointer-events-none
                text-neutral-400
              "
            >
              ⌄
            </div>
          </div>
          {errors.service && (
            <p className="text-red-400 text-xs font-medium mt-2">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Project Details
          </label>
          <textarea
            {...register("message")}
            placeholder="Tell us about your project, goals or challenges..."
            rows={5}
            className={inputClass}
          />
          {errors.message && (
            <p className="text-red-400 text-xs font-medium mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <div className="pt-2">
            <button
              type="submit"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-[#181411]
                bg-[#181411]
                px-8
                py-[16px]
                text-sm
                font-medium
                tracking-[0.01em]
                text-white
                transition-all
                duration-300
                hover:bg-[#231b16]
                hover:border-[#231b16]
              "
            >
              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#E87830]
                "
              />
              <span>Send Enquiry</span>
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>
          </div>
          
          <p className="
            mt-4
            text-sm
            text-neutral-500
          ">
            No obligations. We'll review your requirements and get back to you shortly.
          </p>
        </div>
      </form>
    </div>
  );
}