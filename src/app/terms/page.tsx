import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Arhbit",
  description: "Arhbit Terms of Service. The rules and guidelines for using the Arhbit app and website.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 14, 2026">
      <Section>
        <P>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Arhbit
          mobile application (the &ldquo;App&rdquo;) and the website located at arhbit.com (the
          &ldquo;Website&rdquo;), operated by Arhbit (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). Together, the App and Website are referred to as the
          &ldquo;Service.&rdquo;
        </P>
        <P>
          By downloading, installing, or using the Service, you agree to be bound by these Terms.
          If you do not agree to these Terms, do not use the Service.
        </P>
      </Section>

      <Section title="1. Eligibility">
        <P>
          You must be at least 13 years of age (or 16 in the European Economic Area) to use the
          Service. By using the Service, you represent and warrant that you meet the applicable age
          requirement. If you are under the age of 18, you represent that your parent or legal
          guardian has reviewed and agreed to these Terms on your behalf.
        </P>
      </Section>

      <Section title="2. Account Registration">
        <UL>
          <li>
            You may create an account using your email address or by signing in with Google or
            Apple.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activities that occur under your account.
          </li>
          <li>
            You agree to provide accurate, current, and complete information during registration
            and to update such information as necessary.
          </li>
          <li>
            You must notify us immediately at{" "}
            <a href="mailto:support@arhbit.com" className="text-lavender hover:underline">
              support@arhbit.com
            </a>{" "}
            if you suspect unauthorized access to your account.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate these Terms or that
            have been inactive for an extended period, with prior notice where feasible.
          </li>
        </UL>
      </Section>

      <Section title="3. Use of the Service">
        <H3>3.1 License</H3>
        <P>
          Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to download, install, and use the App on a device
          that you own or control, and to access the Website, solely for your personal,
          non-commercial use.
        </P>

        <H3>3.2 Acceptable Use</H3>
        <P>You agree not to:</P>
        <UL>
          <li>
            Use the Service for any unlawful purpose or in violation of any applicable laws or
            regulations.
          </li>
          <li>
            Impersonate another person or entity, or falsely represent your affiliation with any
            person or entity.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Service, other accounts,
            computer systems, or networks connected to the Service.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Service or the data
            contained therein.
          </li>
          <li>
            Reverse engineer, decompile, disassemble, or attempt to derive the source code of the
            App, except as permitted by applicable law.
          </li>
          <li>
            Use the Service to send unsolicited communications, spam, or harass other users.
          </li>
          <li>
            Use automated means (bots, scrapers, crawlers) to access or interact with the Service
            without our prior written consent.
          </li>
          <li>
            Upload or transmit viruses, malware, or other harmful code through the Service.
          </li>
        </UL>

        <H3>3.3 Accountability Partner Feature</H3>
        <P>
          When you invite an accountability partner, you represent that you have the right to
          provide their email address and that they consent to receiving emails from the Service on
          your behalf. You are solely responsible for the email addresses you provide. We send
          accountability-related emails only — we do not use partner email addresses for marketing.
        </P>
      </Section>

      <Section title="4. User Content">
        <UL>
          <li>
            <strong>Ownership:</strong> You retain ownership of all content you create within the
            Service, including habit names, notes, and descriptions (&ldquo;User Content&rdquo;).
          </li>
          <li>
            <strong>License to us:</strong> By creating User Content, you grant us a limited,
            non-exclusive, royalty-free license to store, process, and display your User Content
            solely as necessary to provide and improve the Service.
          </li>
          <li>
            <strong>Responsibility:</strong> You are solely responsible for your User Content. You
            agree not to create content that is illegal, offensive, defamatory, or that infringes
            on the rights of others.
          </li>
        </UL>
      </Section>

      <Section title="5. Subscriptions and Payments">
        <H3>5.1 Premium Features</H3>
        <P>
          Certain features of the Service may require a paid subscription or one-time purchase
          (&ldquo;Premium Features&rdquo;). Pricing and available plans are displayed within the
          App.
        </P>

        <H3>5.2 Billing</H3>
        <UL>
          <li>
            All purchases are processed through the Apple App Store or Google Play Store
            (collectively, &ldquo;App Stores&rdquo;). Your purchase is subject to the terms and
            conditions of the respective App Store.
          </li>
          <li>
            Subscription fees are billed in advance on a recurring basis (monthly or annually,
            depending on the plan you select).
          </li>
          <li>
            Your subscription automatically renews unless you cancel at least 24 hours before the
            end of the current billing period.
          </li>
        </UL>

        <H3>5.3 Cancellation and Refunds</H3>
        <UL>
          <li>
            You may cancel your subscription at any time through your App Store account settings.
            Cancellation takes effect at the end of the current billing period.
          </li>
          <li>
            Refunds are handled by the respective App Store in accordance with their refund
            policies. We do not process refunds directly.
          </li>
          <li>
            Upon cancellation, you will retain access to Premium Features until the end of your
            current billing period, after which your account will revert to the free tier.
          </li>
        </UL>

        <H3>5.4 Price Changes</H3>
        <P>
          We reserve the right to change subscription prices. We will provide you with reasonable
          advance notice of any price changes. Continued use of Premium Features after a price
          change constitutes acceptance of the new price.
        </P>
      </Section>

      <Section title="6. Intellectual Property">
        <UL>
          <li>
            The Service, including all software, design, text, graphics, logos, icons, images, and
            the compilation thereof, is the property of Arhbit and is protected by copyright,
            trademark, and other intellectual property laws.
          </li>
          <li>
            The Arhbit name, logo, and all related names, logos, product and service names,
            designs, and slogans are trademarks of Arhbit. You may not use these marks without our
            prior written permission.
          </li>
          <li>
            All third-party trademarks, service marks, logos, and trade names referenced in the
            Service are the property of their respective owners.
          </li>
        </UL>
      </Section>

      <Section title="7. Third-Party Services">
        <P>
          The Service integrates with third-party services including Clerk (authentication), Google
          Calendar, Microsoft Calendar, and Apple and Google sign-in. Your use of these third-party
          services is governed by their respective terms and privacy policies. We are not
          responsible for the practices of these third parties.
        </P>
      </Section>

      <Section title="8. Disclaimers">
        <UL>
          <li>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </li>
          <li>
            We do not warrant that the Service will be uninterrupted, error-free, secure, or free
            of viruses or other harmful components.
          </li>
          <li>
            Arhbit is a habit tracking tool. It is not a substitute for professional medical,
            psychological, or health advice. We do not guarantee any specific health, behavioral,
            or lifestyle outcomes from using the Service.
          </li>
          <li>
            The companion pet feature is for entertainment and motivational purposes only. The
            virtual companion does not provide therapeutic, medical, or psychological guidance.
          </li>
        </UL>
      </Section>

      <Section title="9. Limitation of Liability">
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ARHBIT, ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
          LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </P>
        <UL>
          <li>Your access to or use of (or inability to access or use) the Service;</li>
          <li>Any conduct or content of any third party on the Service;</li>
          <li>Any content obtained from the Service;</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or content.
          </li>
        </UL>
        <P>
          OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE
          TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID US IN
          THE TWELVE (12) MONTHS PRIOR TO THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS ($100).
        </P>
      </Section>

      <Section title="10. Indemnification">
        <P>
          You agree to indemnify, defend, and hold harmless Arhbit and its officers, directors,
          employees, agents, and affiliates from and against any claims, liabilities, damages,
          losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any
          way connected with:
        </P>
        <UL>
          <li>Your access to or use of the Service;</li>
          <li>Your violation of these Terms;</li>
          <li>Your violation of any third-party right, including any intellectual property or privacy right;</li>
          <li>
            Any email addresses you provide for the accountability partner feature, including if
            you provide an address without the recipient&apos;s consent.
          </li>
        </UL>
      </Section>

      <Section title="11. Termination">
        <UL>
          <li>
            <strong>By you:</strong> You may stop using the Service and delete your account at any
            time from within the App settings.
          </li>
          <li>
            <strong>By us:</strong> We may suspend or terminate your access to the Service at any
            time, with or without cause, with or without notice, including if we reasonably believe
            you have violated these Terms. Where feasible, we will provide notice before
            termination.
          </li>
          <li>
            <strong>Effect of termination:</strong> Upon termination, your right to use the
            Service ceases immediately. Sections that by their nature should survive termination
            (including Disclaimers, Limitation of Liability, Indemnification, and Governing Law)
            will continue to apply.
          </li>
        </UL>
      </Section>

      <Section title="12. Governing Law and Dispute Resolution">
        <UL>
          <li>
            These Terms are governed by and construed in accordance with the laws of the State of
            Texas, United States, without regard to its conflict of law provisions.
          </li>
          <li>
            Any dispute arising out of or relating to these Terms or the Service shall first be
            attempted to be resolved through good-faith negotiation. If the dispute cannot be
            resolved within 30 days, either party may pursue resolution through binding
            arbitration administered by the American Arbitration Association in accordance with its
            rules, or through the courts located in the State of Texas.
          </li>
          <li>
            You agree that any dispute resolution proceedings will be conducted on an individual
            basis and not as a class action, collective action, or representative action.
          </li>
        </UL>
      </Section>

      <Section title="13. Changes to These Terms">
        <P>
          We reserve the right to modify these Terms at any time. We will notify you of material
          changes by posting the updated Terms in the App and on our Website, and by updating the
          &ldquo;Last updated&rdquo; date. For significant changes, we will provide notice through
          the App or via email. Your continued use of the Service after any changes constitutes
          your acceptance of the updated Terms.
        </P>
      </Section>

      <Section title="14. General Provisions">
        <UL>
          <li>
            <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy,
            constitute the entire agreement between you and Arhbit regarding the Service.
          </li>
          <li>
            <strong>Severability:</strong> If any provision of these Terms is found to be
            unenforceable, the remaining provisions will continue in full force and effect.
          </li>
          <li>
            <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms
            will not constitute a waiver of that right or provision.
          </li>
          <li>
            <strong>Assignment:</strong> You may not assign or transfer your rights under these
            Terms without our prior written consent. We may assign our rights and obligations
            without restriction.
          </li>
          <li>
            <strong>Force majeure:</strong> We shall not be liable for any failure or delay in
            performance due to causes beyond our reasonable control, including natural disasters,
            war, terrorism, pandemics, strikes, government actions, or Internet or utility
            failures.
          </li>
        </UL>
      </Section>

      <Section title="15. Apple and Google App Store Terms">
        <H3>15.1 Apple App Store</H3>
        <P>
          If you downloaded the App from the Apple App Store, the following additional terms apply:
        </P>
        <UL>
          <li>
            These Terms are between you and Arhbit only, not with Apple Inc.
            (&ldquo;Apple&rdquo;). Arhbit, not Apple, is solely responsible for the App and its
            content.
          </li>
          <li>
            The license granted to you is limited to a non-transferable license to use the App on
            any Apple-branded device that you own or control, as permitted by the Usage Rules set
            forth in the Apple Media Services Terms of Service.
          </li>
          <li>
            Arhbit, not Apple, is responsible for providing maintenance and support for the App.
            Apple has no obligation to furnish any maintenance or support services.
          </li>
          <li>
            In the event of any failure of the App to conform to any applicable warranty, you may
            notify Apple, and Apple will refund the purchase price (if any). To the maximum extent
            permitted by applicable law, Apple has no other warranty obligation with respect to the
            App.
          </li>
          <li>
            Arhbit, not Apple, is responsible for addressing any claims relating to the App,
            including product liability claims, any claim that the App fails to conform to any
            applicable legal or regulatory requirement, and claims arising under consumer
            protection or similar legislation.
          </li>
          <li>
            In the event of any third-party claim that the App or your possession and use of the
            App infringes that third party&apos;s intellectual property rights, Arhbit, not Apple,
            will be solely responsible for the investigation, defense, settlement, and discharge of
            any such claim.
          </li>
          <li>
            Apple and its subsidiaries are third-party beneficiaries of these Terms. Upon your
            acceptance of these Terms, Apple will have the right (and will be deemed to have
            accepted the right) to enforce these Terms against you as a third-party beneficiary.
          </li>
        </UL>

        <H3>15.2 Google Play Store</H3>
        <P>
          If you downloaded the App from the Google Play Store, the following additional terms
          apply:
        </P>
        <UL>
          <li>
            These Terms are between you and Arhbit only, not with Google LLC
            (&ldquo;Google&rdquo;). Arhbit, not Google, is solely responsible for the App and its
            content.
          </li>
          <li>
            Your use of the App must comply with Google Play&apos;s Terms of Service.
          </li>
          <li>
            Google is not responsible for providing maintenance, support, or handling any claims
            related to the App.
          </li>
        </UL>
      </Section>

      <Section title="16. Contact Us">
        <P>
          If you have questions about these Terms, please contact us:
        </P>
        <UL>
          <li>
            <strong>Email:</strong>{" "}
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
