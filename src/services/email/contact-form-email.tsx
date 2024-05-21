import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  fullname: string;
  phone: string;
  email: string;
  city: string;
  intake: string;
  contacttime: string;
  destinations: string;
  terms: string;
}

export default function ContactFormEmail({
  fullname,
  phone,
  email,
  city,
  intake,
  contacttime,
  destinations,
  terms,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New email from your site</Preview>
      <Tailwind>
        <Body className="bg-zinc-100  text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Img
                src="https://cloud.appwrite.io/v1/storage/buckets/65d5959e686de65fbff8/files/664cf8b4001b71abe66d/view?project=65ce4a623b4b3033c9e0&mode=admin"
                alt="Logo"
                className="w-100 h-20 items-center justify-center mx-auto"
              />
              <Text className="leading-tight text-2xl">
                New contact form submission
              </Text>
              <Hr className="my-4" />
              <Text>Full Name: {fullname}</Text>
              <Text>Phone: {phone}</Text>
              <Text>Email: {email}</Text>
              <Text>City: {city}</Text>
              <Text>Intake: {intake}</Text>
              <Text>Contact Time: {contacttime}</Text>
              <Text>Destinations: {destinations}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
