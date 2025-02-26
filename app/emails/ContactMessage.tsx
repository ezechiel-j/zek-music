import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from "@react-email/components";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  organisationName: string;
  subject: string;
  message: string;
}

export default function ContactMessage({
  firstName,
  lastName,
  email,
  organisationName,
  subject,
  message,
}: Props) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Heading>Zek music - User message</Heading>
          <Text>
            <strong>Prénom et nom:</strong> {firstName} {lastName}
          </Text>
          <Text>
            <strong>Email :</strong> {email}
          </Text>
          {organisationName && (
            <Text>
              <strong>Organisation :</strong> {organisationName}
            </Text>
          )}

          <Text>
            <strong>Sujet :</strong> {subject}
          </Text>
          <Text>
            <strong>Message :</strong> {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
