import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Arhbit",
  description: "Arhbit Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 14, 2026">
      <Section>
        <P>
          Arhbit (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Arhbit
          mobile application (the &ldquo;App&rdquo;) and the website located at arhbit.com (the
          &ldquo;Website&rdquo;). This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our App and Website (collectively, the
          &ldquo;Service&rdquo;).
        </P>
        <P>
          By using the Service, you agree to the collection and use of information in accordance
          with this policy. If you do not agree with this policy, please do not use the Service.
        </P>
      </Section>

      <Section title="1. Information We Collect">
        <H3>1.1 Information You Provide Directly</H3>
        <UL>
          <li>
            <strong>Account information:</strong> When you create an account, we collect your name
            and email address. You may also sign in using Google or Apple, in which case we receive
            your name, email address, and profile identifier from those services.
          </li>
          <li>
            <strong>Habit data:</strong> The names, descriptions, frequencies, and categories of
            habits you create within the App.
          </li>
          <li>
            <strong>Completion data:</strong> Records of when you complete, skip, or miss habits,
            including timestamps and any notes you attach.
          </li>
          <li>
            <strong>Accountability partner information:</strong> If you invite an accountability
            partner, we collect the email address you provide for that person. We send them
            transactional emails on your behalf.
          </li>
          <li>
            <strong>Calendar data:</strong> If you connect your Google Calendar or Microsoft
            Calendar, we access your calendar solely to create catch-up events related to your
            accountability habits. We do not read, store, or access any of your existing calendar
            events.
          </li>
          <li>
            <strong>Support communications:</strong> If you contact us for support, we collect the
            content of your messages along with your email address.
          </li>
        </UL>

        <H3>1.2 Information Collected Automatically</H3>
        <UL>
          <li>
            <strong>Device information:</strong> Device type, operating system version, and unique
            device identifiers for delivering push notifications.
          </li>
          <li>
            <strong>Push notification tokens:</strong> If you enable notifications, we store a
            push notification token to send you habit reminders and accountability alerts.
          </li>
        </UL>

        <H3>1.3 Information We Do NOT Collect</H3>
        <UL>
          <li>We do <strong>not</strong> collect precise geolocation data.</li>
          <li>We do <strong>not</strong> use analytics or advertising SDKs.</li>
          <li>We do <strong>not</strong> track you across other apps or websites.</li>
          <li>We do <strong>not</strong> sell, rent, or trade your personal data to third parties.</li>
          <li>We do <strong>not</strong> use your data for advertising or ad targeting.</li>
        </UL>
      </Section>

      <Section title="2. How We Use Your Information">
        <P>We use the information we collect for the following purposes:</P>
        <UL>
          <li>
            <strong>Providing the Service:</strong> To create and manage your account, track your
            habits, calculate streaks, generate heatmaps, and manage your companion.
          </li>
          <li>
            <strong>Accountability features:</strong> To send progress reports and nudge emails to
            your designated accountability partner, and to schedule calendar events when habits go
            off track.
          </li>
          <li>
            <strong>Notifications:</strong> To send you habit reminders, streak alerts, and
            accountability notifications that you have opted into.
          </li>
          <li>
            <strong>Improving the Service:</strong> To understand how features are used and to fix
            bugs and improve performance.
          </li>
          <li>
            <strong>Customer support:</strong> To respond to your inquiries and resolve issues.
          </li>
          <li>
            <strong>Legal compliance:</strong> To comply with applicable laws, regulations, and
            legal processes.
          </li>
        </UL>
      </Section>

      <Section title="3. How We Share Your Information">
        <P>
          We do not sell your personal information. We share your information only in the following
          limited circumstances:
        </P>
        <UL>
          <li>
            <strong>Accountability partners:</strong> If you add an accountability partner, we
            share your habit name, completion status, and streak information with them via email.
            You control which habits have accountability partners and can remove a partner at any
            time.
          </li>
          <li>
            <strong>Service providers:</strong> We use the following third-party services to
            operate the App:
            <UL>
              <li>
                <strong>Clerk</strong> (authentication) — processes your sign-in credentials.
                See{" "}
                <ExtLink href="https://clerk.com/privacy">Clerk&apos;s Privacy Policy</ExtLink>.
              </li>
              <li>
                <strong>Convex</strong> (backend and database) — stores and processes your habit
                data. See{" "}
                <ExtLink href="https://www.convex.dev/privacy">Convex&apos;s Privacy Policy</ExtLink>.
              </li>
              <li>
                <strong>Resend</strong> (email delivery) — sends transactional emails such as
                accountability reports. See{" "}
                <ExtLink href="https://resend.com/legal/privacy-policy">
                  Resend&apos;s Privacy Policy
                </ExtLink>.
              </li>
              <li>
                <strong>Expo / EAS</strong> (push notifications and app distribution) — delivers
                push notifications to your device. See{" "}
                <ExtLink href="https://expo.dev/privacy">Expo&apos;s Privacy Policy</ExtLink>.
              </li>
            </UL>
          </li>
          <li>
            <strong>Legal requirements:</strong> We may disclose your information if required to do
            so by law or in response to valid requests by public authorities.
          </li>
        </UL>
      </Section>

      <Section title="4. Data Storage and Security">
        <UL>
          <li>
            Your data is stored on servers operated by Convex, located in the United States.
          </li>
          <li>
            Calendar OAuth refresh tokens are encrypted at rest using AES-256-GCM encryption before
            storage.
          </li>
          <li>
            All data transmitted between your device and our servers is encrypted using TLS
            (Transport Layer Security).
          </li>
          <li>
            We implement reasonable administrative, technical, and physical safeguards to protect
            your data. However, no method of transmission over the Internet or electronic storage
            is 100% secure, and we cannot guarantee absolute security.
          </li>
        </UL>
      </Section>

      <Section title="5. Data Retention">
        <UL>
          <li>
            <strong>Account data:</strong> We retain your account information and habit data for as
            long as your account is active.
          </li>
          <li>
            <strong>Deleted accounts:</strong> When you delete your account, we delete all
            associated personal data within 30 days, except where we are required to retain it by
            law.
          </li>
          <li>
            <strong>Accountability emails:</strong> Transactional emails sent through our email
            provider are retained according to the provider&apos;s retention policies and are not
            stored separately by Arhbit.
          </li>
        </UL>
      </Section>

      <Section title="6. Your Rights and Choices">
        <H3>6.1 All Users</H3>
        <UL>
          <li>
            <strong>Access and portability:</strong> You can request a copy of your personal data
            at any time by contacting us at{" "}
            <a href="mailto:privacy@arhbit.com" className="text-lavender hover:underline">
              privacy@arhbit.com
            </a>.
          </li>
          <li>
            <strong>Correction:</strong> You can update your account information within the App at
            any time.
          </li>
          <li>
            <strong>Deletion:</strong> You can delete your account and all associated data from
            within the App settings or by contacting us.
          </li>
          <li>
            <strong>Notifications:</strong> You can disable push notifications at any time through
            your device settings or the App settings.
          </li>
          <li>
            <strong>Calendar access:</strong> You can disconnect your calendar at any time from
            the App settings. We will delete the stored OAuth tokens immediately.
          </li>
          <li>
            <strong>Accountability partners:</strong> You can remove accountability partners at
            any time, which immediately stops all data sharing with that person.
          </li>
        </UL>

        <H3>6.2 European Economic Area (EEA) Residents — GDPR</H3>
        <P>
          If you are located in the EEA, you have additional rights under the General Data
          Protection Regulation (GDPR):
        </P>
        <UL>
          <li>
            <strong>Legal basis for processing:</strong> We process your data based on (a) your
            consent (e.g., enabling notifications), (b) performance of a contract (providing the
            Service), and (c) our legitimate interests (improving the Service and preventing
            fraud).
          </li>
          <li>
            <strong>Right to object:</strong> You may object to processing based on legitimate
            interests.
          </li>
          <li>
            <strong>Right to restriction:</strong> You may request that we restrict processing of
            your data in certain circumstances.
          </li>
          <li>
            <strong>Right to erasure:</strong> You may request deletion of your personal data.
          </li>
          <li>
            <strong>Data portability:</strong> You may request your data in a structured,
            commonly-used, machine-readable format.
          </li>
          <li>
            <strong>Supervisory authority:</strong> You have the right to lodge a complaint with
            your local data protection authority.
          </li>
        </UL>

        <H3>6.3 California Residents — CCPA / CPRA</H3>
        <P>
          If you are a California resident, the California Consumer Privacy Act (CCPA) and
          California Privacy Rights Act (CPRA) provide you with specific rights:
        </P>
        <UL>
          <li>
            <strong>Right to know:</strong> You may request that we disclose the categories and
            specific pieces of personal information we have collected about you.
          </li>
          <li>
            <strong>Right to delete:</strong> You may request deletion of your personal
            information.
          </li>
          <li>
            <strong>Right to opt-out of sale:</strong> We do not sell personal information. We do
            not share personal information for cross-context behavioral advertising.
          </li>
          <li>
            <strong>Non-discrimination:</strong> We will not discriminate against you for
            exercising your CCPA rights.
          </li>
        </UL>
        <P>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@arhbit.com" className="text-lavender hover:underline">
            privacy@arhbit.com
          </a>. We will respond within 45 days.
        </P>
      </Section>

      <Section title="7. Children's Privacy">
        <P>
          The Service is not directed to children under the age of 13 (or 16 in the EEA). We do
          not knowingly collect personal information from children under these ages. If we become
          aware that we have collected personal information from a child under the applicable age
          without parental consent, we will take steps to delete that information promptly. If you
          believe a child has provided us with personal information, please contact us at{" "}
          <a href="mailto:privacy@arhbit.com" className="text-lavender hover:underline">
            privacy@arhbit.com
          </a>.
        </P>
      </Section>

      <Section title="8. International Data Transfers">
        <P>
          Your information may be transferred to and processed in the United States, where our
          service providers operate. If you are located outside the United States, please be aware
          that data protection laws in the United States may differ from those in your
          jurisdiction. By using the Service, you consent to the transfer of your information to
          the United States.
        </P>
        <P>
          For EEA residents, we ensure appropriate safeguards are in place for international
          transfers, including standard contractual clauses approved by the European Commission.
        </P>
      </Section>

      <Section title="9. Third-Party Links">
        <P>
          The Service may contain links to third-party websites or services. We are not responsible
          for the privacy practices of those third parties. We encourage you to read the privacy
          policies of any third-party services you access.
        </P>
      </Section>

      <Section title="10. Changes to This Privacy Policy">
        <P>
          We may update this Privacy Policy from time to time. We will notify you of material
          changes by posting the updated policy in the App and on our Website, and by updating the
          &ldquo;Last updated&rdquo; date. Your continued use of the Service after any changes
          constitutes your acceptance of the updated policy.
        </P>
      </Section>

      <Section title="11. Contact Us">
        <P>If you have questions or concerns about this Privacy Policy, please contact us:</P>
        <UL>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@arhbit.com" className="text-lavender hover:underline">
              privacy@arhbit.com
            </a>
          </li>
          <li>
            <strong>General support:</strong>{" "}
            <a href="mailto:support@arhbit.com" className="text-lavender hover:underline">
              support@arhbit.com
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://arhbit.com" className="text-lavender hover:underline">
              https://arhbit.com
            </a>
          </li>
        </UL>
      </Section>

      <Section title="12. Apple App Store and Google Play Additional Disclosures">
        <H3>12.1 Apple App Tracking Transparency</H3>
        <P>
          Arhbit does <strong>not</strong> track you across other companies&apos; apps or websites.
          We do not participate in the Apple advertising ecosystem and do not use the IDFA
          (Identifier for Advertisers). The App does not request App Tracking Transparency
          permission because tracking is not performed.
        </P>

        <H3>12.2 Apple Privacy Nutrition Labels</H3>
        <P>The data we collect, as disclosed in the App Store privacy labels:</P>
        <UL>
          <li>
            <strong>Contact Info (Email, Name):</strong> Used for account creation and app
            functionality. Linked to your identity.
          </li>
          <li>
            <strong>Identifiers (User ID):</strong> Used for app functionality. Linked to your
            identity.
          </li>
        </UL>
        <P>Data <strong>not</strong> collected: Location, health, fitness, financial, browsing history, search history, contacts, photos, audio, gameplay, advertising data, diagnostics.</P>

        <H3>12.3 Google Play Data Safety</H3>
        <P>As disclosed in the Google Play Data Safety section:</P>
        <UL>
          <li><strong>Data shared with third parties:</strong> None.</li>
          <li>
            <strong>Data collected:</strong> Name, email address (account management and app
            functionality).
          </li>
          <li><strong>Data encrypted in transit:</strong> Yes.</li>
          <li><strong>Data deletion available:</strong> Yes. Users can request account and data deletion.</li>
        </UL>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      {title && (
        <h2 className="text-2xl font-bold text-text mb-4 mt-10">{title}</h2>
      )}
      {children}
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-text mb-2 mt-6">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-text-secondary leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-2 text-text-secondary leading-relaxed">
      {children}
    </ul>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lavender hover:underline"
    >
      {children}
    </a>
  );
}
