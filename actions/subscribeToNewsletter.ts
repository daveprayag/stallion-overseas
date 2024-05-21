"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_NEWSLETTER_API_KEY);
const newsLetterID = process.env.NEXT_PUBLIC_RESEND_NEWSLETTER_ID as string;

export const subscribeToNewsletter = async (formData: FormData) => {
  const email = formData.get("email") as string;

  if (!validateString(email, 500)) {
    console.log("Invalid email:", email);
    return {
      error: "Invalid email",
    };
  }

  let data;
  try {
    data = await resend.contacts.create({
      audienceId: newsLetterID,
      email: email,
    });
  } catch (error: unknown) {
    console.log("Error subscribing to newsletter:", error);
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
