// components/contact/sections/email-template.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subsidiary: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  subsidiary,
  message,
}) => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>New inquiry from {name} - ASHR Group</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Main Card */}
          <Section style={card}>
            {/* Header */}
            <Section style={header}>
              <Heading style={h1}>New Inquiry</Heading>
              <Text style={subtitle}>
                A new contact form submission has been received
              </Text>
            </Section>

            <Hr style={divider} />

            {/* Form Fields - Two Column Layout */}
            <Section style={formSection}>
              {/* Row 1: Name & Email */}
              <Section style={row}>
                <Section style={column}>
                  <Text style={label}>FULL NAME</Text>
                  <Text style={fieldValue}>{name}</Text>
                </Section>
                <Section style={column}>
                  <Text style={label}>EMAIL ADDRESS</Text>
                  <Text style={emailLink}>
                    <span style={emailIcon}>✉</span> {email}
                  </Text>
                </Section>
              </Section>

              {/* Row 2: Phone & Business Unit */}
              <Section style={row}>
                <Section style={column}>
                  <Text style={label}>PHONE NUMBER</Text>
                  <Text style={phoneLink}>
                    <span style={phoneIcon}>📞</span> {phone}
                  </Text>
                </Section>
                <Section style={column}>
                  <Text style={label}>BUSINESS UNIT</Text>
                  <Section style={businessUnitBadge}>
                    <span style={buildingIcon}>🏢</span> {subsidiary}
                  </Section>
                </Section>
              </Section>

              {/* Message Section */}
              <Section style={messageSection}>
                <Text style={label}>MESSAGE</Text>
                <Section style={messageBox}>
                  <Text style={messageText}>{message}</Text>
                </Section>
              </Section>

              {/* Metadata Row */}
              <Section style={metadataRow}>
                <Text style={metadata}>
                  <span style={clockIcon}>🕐</span> Received:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at{" "}
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </Text>
                <Text style={metadata}>
                  <span style={globeIcon}>🌐</span> Source: ashrgroup.com.ng
                </Text>
              </Section>

              {/* Reply Button */}
              <Section style={buttonSection}>
                <Text style={replyButton}>Reply to Inquiry: {email}</Text>
              </Section>
            </Section>

            {/* Footer */}
            <Hr style={divider} />
            <Section style={footer}>
              <Text style={footerText}>Sent from ashrgroup.com.ng</Text>
              <Text style={footerText}>
                © {new Date().getFullYear()} ASHR Group Nigeria Ltd. All rights
                reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// ============ STYLES ============

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  padding: "40px 20px",
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #C9A961",
  boxShadow: "0 4px 16px rgba(201, 169, 97, 0.08)",
  overflow: "hidden",
};

const header = {
  padding: "48px 40px 32px",
  textAlign: "center" as const,
};

const h1 = {
  margin: "0 0 12px",
  fontSize: "36px",
  fontWeight: "700",
  color: "#C9A961",
  letterSpacing: "-0.5px",
  lineHeight: "1.2",
};

const subtitle = {
  margin: 0,
  fontSize: "15px",
  fontWeight: "400",
  color: "#666666",
  lineHeight: "1.5",
};

const divider = {
  borderColor: "#C9A961",
  borderWidth: "1px",
  margin: "0",
  opacity: 0.2,
};

const formSection = {
  padding: "40px 40px 32px",
};

const row = {
  width: "100%",
  marginBottom: "32px",
};

const column = {
  display: "inline-block",
  width: "48%",
  verticalAlign: "top",
  paddingRight: "2%",
};

const label = {
  margin: "0 0 8px",
  fontSize: "11px",
  fontWeight: "600",
  color: "#999999",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const fieldValue = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "400",
  color: "#1a1a1a",
  lineHeight: "1.5",
};

const emailLink = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "400",
  color: "#C9A961",
  textDecoration: "none",
  lineHeight: "1.5",
};

const emailIcon = {
  marginRight: "8px",
  fontSize: "16px",
};

const phoneLink = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "400",
  color: "#C9A961",
  textDecoration: "none",
  lineHeight: "1.5",
};

const phoneIcon = {
  marginRight: "8px",
  fontSize: "16px",
};

const businessUnitBadge = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#FFF9F0",
  padding: "8px 16px",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#C9A961",
  border: "1px solid #C9A961",
  marginTop: "4px",
};

const buildingIcon = {
  marginRight: "8px",
  fontSize: "16px",
};

const messageSection = {
  marginTop: "40px",
};

const messageBox = {
  backgroundColor: "#FAFAFA",
  borderLeft: "4px solid #C9A961",
  padding: "20px 24px",
  borderRadius: "4px",
  marginTop: "8px",
};

const messageText = {
  margin: "0",
  fontSize: "15px",
  fontWeight: "400",
  color: "#333333",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const metadataRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "32px",
  paddingTop: "24px",
  borderTop: "1px solid #eeeeee",
};

const metadata = {
  margin: "0",
  fontSize: "13px",
  fontWeight: "400",
  color: "#999999",
  display: "inline-flex",
  alignItems: "center",
};

const clockIcon = {
  marginRight: "6px",
  fontSize: "14px",
};

const globeIcon = {
  marginRight: "6px",
  fontSize: "14px",
};

const buttonSection = {
  textAlign: "center" as const,
  marginTop: "32px",
};

const replyButton = {
  display: "inline-block",
  backgroundColor: "#C9A961",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "500",
  padding: "14px 32px",
  borderRadius: "4px",
  textDecoration: "none",
  textAlign: "center" as const,
  letterSpacing: "0.3px",
};

const footer = {
  padding: "24px 40px 32px",
  textAlign: "center" as const,
};

const footerText = {
  margin: "4px 0",
  fontSize: "13px",
  fontWeight: "400",
  color: "#999999",
  lineHeight: "1.5",
};

export default EmailTemplate;
