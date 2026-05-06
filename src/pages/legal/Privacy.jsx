import LegalPage, { LegalSection } from "./LegalPage";
import { COMPANY } from "@/data/site";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 2025">
      <p><strong>{COMPANY.name}</strong> ("we", "us", "our") is committed to protecting your personal information in accordance with the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and the Digital Personal Data Protection Act, 2023.</p>

      <LegalSection title="1. Information We Collect">
        <p>We collect information you provide directly (name, email, phone, company), information from your use of our website (IP, device, browser, pages visited), and project-related data shared during engagements.</p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>To deliver and improve our services, respond to inquiries, send service updates, comply with legal obligations, and prevent fraud or abuse.</p>
      </LegalSection>

      <LegalSection title="3. Data Storage & Security">
        <p>We store data on secure servers and apply industry-standard administrative, technical, and physical safeguards including encryption in transit, access controls, and routine audits.</p>
      </LegalSection>

      <LegalSection title="4. Cookies & Tracking">
        <p>We use cookies and similar technologies to enhance user experience and measure traffic. You can disable cookies in your browser, though some site features may not work as intended.</p>
      </LegalSection>

      <LegalSection title="5. Third-Party Sharing">
        <p>We do not sell your personal data. We may share data with trusted processors (cloud, analytics, payment) under strict confidentiality and only to the extent required to deliver services.</p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>Under the DPDP Act 2023, you may request access to, correction of, or deletion of your personal data, withdraw consent, and lodge a grievance with our Data Protection Officer.</p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>We retain personal data only as long as necessary for the purposes for which it was collected or as required by applicable law.</p>
      </LegalSection>

      <LegalSection title="8. Children's Privacy">
        <p>Our services are not directed to children under 18. We do not knowingly collect personal data from children without verifiable parental consent.</p>
      </LegalSection>

      <LegalSection title="9. Cross-border Transfers">
        <p>Where data is transferred outside India, we ensure adequate safeguards consistent with Indian law and applicable international frameworks.</p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. The latest version will always be available on this page.</p>
      </LegalSection>

      <LegalSection title="11. Contact Our DPO">
        <p>For privacy concerns, write to our Data Protection Officer at <a className="text-primary font-semibold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
      </LegalSection>
    </LegalPage>
  );
}
