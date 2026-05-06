import LegalPage, { LegalSection } from "./LegalPage";
import { COMPANY } from "@/data/site";

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="June 2025">
      <p>These Terms & Conditions ("Terms") govern your access to and use of the website and services provided by <strong>{COMPANY.name}</strong> (CIN: {COMPANY.cin}) ("Company", "we", "us", "our"). By accessing this website or engaging our services, you agree to be bound by these Terms.</p>

      <LegalSection title="1. Acceptance of Terms">
        <p>By using our website or services, you confirm that you are at least 18 years of age and have the legal capacity to enter into a binding contract under the Indian Contract Act, 1872.</p>
      </LegalSection>

      <LegalSection title="2. Use of Website">
        <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit the use of the site by any third party. Unauthorized use may give rise to a claim for damages or be a criminal offence.</p>
      </LegalSection>

      <LegalSection title="3. Service Agreements & Scope">
        <p>All services rendered are subject to a separate written Service Agreement or Statement of Work (SOW), which shall define the scope, deliverables, timeline, and acceptance criteria. In the event of a conflict between these Terms and an SOW, the SOW shall prevail.</p>
      </LegalSection>

      <LegalSection title="4. Payment Terms & Refund Policy">
        <p>Invoices are payable within the timelines stated in the SOW. Late payments may attract interest at 1.5% per month. Advance payments are non-refundable once project work has commenced, except as expressly provided in the SOW.</p>
      </LegalSection>

      <LegalSection title="5. Intellectual Property Rights">
        <p>All pre-existing tools, frameworks, and proprietary materials remain the property of the Company. Custom deliverables created under an SOW shall transfer to the client upon full payment, subject to the Company retaining a perpetual license to its underlying components.</p>
      </LegalSection>

      <LegalSection title="6. Confidentiality">
        <p>Both parties agree to maintain the confidentiality of non-public information disclosed during the engagement and to use such information solely for the purpose of performance under the agreement.</p>
      </LegalSection>

      <LegalSection title="7. Disclaimer of Warranties">
        <p>The website and services are provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.</p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>To the maximum extent permitted by applicable law, the Company's total liability arising out of or relating to these Terms shall not exceed the fees paid by the client for the specific service in the three (3) months preceding the claim.</p>
      </LegalSection>

      <LegalSection title="9. Indemnification">
        <p>You agree to indemnify and hold harmless the Company, its directors, employees, and partners against any claims, damages, or expenses arising from your breach of these Terms or your unlawful use of the services.</p>
      </LegalSection>

      <LegalSection title="10. Governing Law & Jurisdiction">
        <p>These Terms shall be governed by and construed in accordance with the laws of India. The courts at Jaipur, Rajasthan and the Hon'ble High Court of Rajasthan shall have exclusive jurisdiction over any disputes.</p>
      </LegalSection>

      <LegalSection title="11. Dispute Resolution">
        <p>Any dispute arising out of or in connection with these Terms shall be referred to arbitration under the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Jaipur, Rajasthan, and proceedings shall be conducted in English by a sole arbitrator.</p>
      </LegalSection>

      <LegalSection title="12. Amendments">
        <p>The Company reserves the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last Updated" date.</p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>For any questions regarding these Terms, contact us at <a className="text-primary font-semibold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or {COMPANY.phone}.</p>
      </LegalSection>
    </LegalPage>
  );
}
