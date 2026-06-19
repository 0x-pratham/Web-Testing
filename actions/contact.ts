"use server";

import { resend } from "@/lib/resend";

export async function sendContactEmail(
  formData: {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
  }
) {
  try {
    await resend.emails.send({
      from:
        "Cosmolix Website <onboarding@resend.dev>",

      to: [
        process.env.CONTACT_EMAIL!,
      ],

      subject: `New Lead: ${formData.name}`,

      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Service:</strong> ${formData.service}</p>

        <hr/>

        <p>${formData.message}</p>
      `,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}