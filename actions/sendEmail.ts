"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/services/email/contact-form-email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as string);

export const sendEmail = async (formData: FormData) => {
  const fullname = formData.get("fullname") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const city = formData.get("city") as string;
  const intake = formData.get("intake") as string;
  const contacttime = formData.get("contacttime") as string;
  const terms = formData.get("terms") as string;

  // Get all selected destinations
  const destinations: string[] = [];
  formData.forEach((value, key) => {
    if (key === "destination") {
      destinations.push(value as string);
    }
  });

  // Validations
  const errors = [];
  if (!validateString(fullname, 100)) {
    console.log("Invalid fullname:", fullname);
    errors.push("Invalid fullname");
  }

  if (!validateString(phone, 12)) {
    console.log("Invalid phone:", phone);
    errors.push("Invalid phone");
  }

  if (!validateString(email, 100)) {
    console.log("Invalid email:", email);
    errors.push("Invalid email");
  }

  if (!validateString(city, 100)) {
    console.log("Invalid city:", city);
    errors.push("Invalid city");
  }

  if (!validateString(intake, 100)) {
    console.log("Invalid intake:", intake);
    errors.push("Invalid intake");
  }

  if (!validateString(contacttime, 8)) {
    console.log("Invalid contacttime:", contacttime);
    errors.push("Invalid contacttime");
  }

  if (!validateString(terms, 5)) {
    console.log("Terms not accepted:", terms);
    errors.push("Terms not accepted");
  }

  if (destinations.length === 0) {
    console.log("No destinations selected");
    errors.push("No destinations selected");
  }

  if (errors.length > 0) {
    return {
      error: errors.join(", "),
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form Submission <onboarding@resend.dev>",
      to: "stallionoverseas.co@gmail.com",
      subject: "Mail from website contact form",
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        fullname,
        phone,
        email,
        city,
        intake,
        contacttime,
        destinations: destinations.join(", "),
        terms,
      }),
    });
  } catch (error: unknown) {
    console.log("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
