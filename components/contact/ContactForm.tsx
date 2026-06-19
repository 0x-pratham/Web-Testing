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

  if (submitted) {
    return (
      <div className="bg-white shadow-sm p-12 text-center">
        <h3 className="text-2xl font-bold">
          Thank You
        </h3>

        <p className="mt-4">
          Your enquiry has been received.
        </p>

        <p className="mt-2 text-neutral-500">
          We typically respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className="w-full bg-white shadow-sm p-4 outline-none focus:ring-1 focus:ring-[#E87830]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-2">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Email Address"
          className="w-full bg-white shadow-sm p-4 outline-none focus:ring-1 focus:ring-[#E87830]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          {...register("company")}
          placeholder="Company"
          className="w-full bg-white shadow-sm p-4 outline-none focus:ring-1 focus:ring-[#E87830]"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-2">
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <select
          {...register("service")}
          className="w-full bg-white shadow-sm p-4 outline-none focus:ring-1 focus:ring-[#E87830]"
        >
          <option>AI & ML</option>
          <option>Software Development</option>
          <option>IT Services</option>
          <option>Training</option>
          <option>Tender Solutions</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm mt-2">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Tell us about your project..."
          rows={6}
          className="w-full bg-white shadow-sm p-4 outline-none focus:ring-1 focus:ring-[#E87830]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="
          w-full
          bg-[#E87830]
          text-white
          p-4
          font-semibold
          hover:bg-[#cf6624]
          transition-colors
        "
      >
        Send Message
      </button>
    </form>
  );
}