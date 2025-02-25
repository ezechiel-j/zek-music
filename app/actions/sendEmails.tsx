"use server";

import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "../emails/ContactMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define form validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, "Quel est votre prénom ?"),
  lastName: z.string().min(1, "Quel est votre nom de famille ?"),
  organisationName: z
    .string()
    .min(1, "Quel est le nom de votre organisation ?")
    .optional(),
  email: z.string().email("Veuillez renseigner une adresse email valide"),
  subject: z.string().min(1, "Quel est le sujet de votre message ?"),
  message: z.string().min(1, "Veuillez saisir votre message"),
});

export async function sendEmail(prevState: any, formData: FormData) {
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

    // Render email using React Email
    const emailHtml = await render(<ContactEmail {...parsedData} />);

    // Send email with Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "johnstone.zek@gmail.com",
      subject: parsedData.subject,
      html: emailHtml,
    });

    if (response.error) throw new Error(response.error.message);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
