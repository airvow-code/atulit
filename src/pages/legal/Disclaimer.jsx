import LegalPage, { LegalSection } from "./LegalPage";
import { COMPANY } from "@/data/site";

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" lastUpdated="June 2025">
      <p>The information provided by <strong>{COMPANY.name}</strong> ("Company", "we", "us") on this website is for general informational purposes only.</p>

      <LegalSection title="1. General Information Disclaimer">
        <p>All information on the site is provided in good faith. We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy or completeness of any information.</p>
      </LegalSection>

      <LegalSection title="2. No Professional Advice">
        <p>The content does not constitute professional or legal advice. You should consult appropriate professionals before acting on any information found on this website.</p>
      </LegalSection>

      <LegalSection title="3. Accuracy & Completeness of Content">
        <p>While we strive to keep information up to date, we make no warranties as to its completeness, accuracy, reliability or availability.</p>
      </LegalSection>

      <LegalSection title="4. Technology & Service Limitations">
        <p>Software, services and demos are subject to inherent technological limitations. Outcomes depend on multiple factors including the client's environment and inputs.</p>
      </LegalSection>

      <LegalSection title="5. External Links">
        <p>This website may contain links to third-party websites. We do not endorse and are not responsible for the content or practices of any linked sites.</p>
      </LegalSection>

      <LegalSection title="6. No Warranty on Uptime / Availability">
        <p>We do not guarantee uninterrupted, secure or error-free access to the website or any of our services.</p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>Under no circumstance shall we have liability for any loss or damage of any kind incurred as a result of the use of the site or reliance on its content.</p>
      </LegalSection>

      <LegalSection title="8. Indemnification">
        <p>You agree to indemnify and hold us harmless from any claims arising from your misuse of the website or breach of this disclaimer.</p>
      </LegalSection>

      <LegalSection title="9. Changes to Disclaimer">
        <p>We reserve the right to change this disclaimer at any time without prior notice. Continued use of the site constitutes acceptance of the updated disclaimer.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>Questions? Email <a className="text-primary font-semibold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
      </LegalSection>
    </LegalPage>
  );
}
