"use server";

import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";
import ContactMessage from "../emails/ContactMessage";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define form validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, "Quel est votre prénom ?"),
  lastName: z.string().min(1, "Quel est votre nom de famille ?"),
  organisationName: z.string().optional(),
  email: z.string().email("Veuillez renseigner une adresse email valide"),
  subject: z.string().min(1, "Quel est le sujet de votre message ?"),
  message: z.string().min(1, "Veuillez saisir votre message"),
});

export default async function sendEmail(prevState: any, formData: FormData) {
  try {
    // Parse and validate form data
    const parsedData = formSchema.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      organisationName: formData.get("organisation") || "",
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    // Ensure that optional string fields have default values
    const parsedDataWithDefaults = {
      ...parsedData,
      organisationName: parsedData.organisationName || "",
    };

    // Render email using React Email
    const emailHtml = await render(
      React.createElement(ContactMessage, parsedDataWithDefaults)
    );

    // Send email with Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "johnstone.zek@gmail.com",
      subject: parsedData.subject,
      html: emailHtml,
    });

    if (response.error) throw new Error(response.error.message);

    return { success: true, error: null };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
