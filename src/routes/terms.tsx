import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FileText, Shield, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — CareSeva™" },
      {
        name: "description",
        content: "Terms and conditions of service for CareSeva, owned and operated by Softkrest Infotech.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">
        <div className="mb-8 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <FileText className="size-3.5" /> Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026 | Effective immediately</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <h2 className="text-base font-bold text-primary flex items-center gap-2">
              <Shield className="size-4" /> 1. Operating Entity & Scope
            </h2>
            <p className="mt-2 text-foreground/90">
              This digital platform, application, and website (<strong>careseva.co.in</strong>) is owned, managed, and operated by <strong>Softkrest Infotech</strong> (Proprietor: Mr. Sarthak Srivastava), having its principal place of business at <em>Srivastava Niwas, Churamanpur, Bhullanpur, Kashi Vidyapeeth, Varanasi, Uttar Pradesh - 221108</em> (MSME Udyam Registration: UDYAM-UP-75-0200308).
            </p>
            <p className="mt-2 text-foreground/90">
              By accessing or using the CareSeva mobile applications, website, or Hospital Management System (HMS), you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Healthcare Facilitation & Services</h2>
            <p className="text-muted-foreground">
              CareSeva provides technology infrastructure connecting patients with independent registered hospitals, clinics, and doctors. Services provided include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>Online OPD appointment discovery and time-slot scheduling.</li>
              <li>Live queue token tracking for outpatient consultations.</li>
              <li>Digital patient registration and medical record storage.</li>
              <li>Advance and full payment processing for medical consultations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Medical Disclaimer & Emergency Situations</h2>
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <span>
                <strong>CareSeva is NOT an emergency medical service.</strong> In case of medical emergencies, trauma, or life-threatening conditions, please contact your nearest hospital emergency department or dial 108 / 112 immediately.
              </span>
            </div>
            <p className="text-muted-foreground">
              CareSeva does not provide direct medical advice. Clinical decisions, prescriptions, diagnoses, and medical advice are the sole responsibility of the consulting healthcare professionals and hospitals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Appointment Bookings & Payments</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>
                <strong>Payment Methods:</strong> Online payments are securely processed through RBI-authorized payment aggregators (Cashfree Payments). We accept UPI, Debit Cards, Credit Cards, and Net Banking.
              </li>
              <li>
                <strong>Token Fee / Advance Payment:</strong> Users may choose to pay 100% full consultation fees upfront or a 20% advance token fee online, with the remaining 80% balance collected directly at the hospital reception counter during physical check-in.
              </li>
              <li>
                <strong>Accurate Information:</strong> Patients agree to provide accurate name, contact details, and age during booking to ensure accurate electronic health record maintenance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Intellectual Property Rights</h2>
            <p className="text-muted-foreground">
              The trademark <strong>CareSeva™</strong> (Application No. under TM-A), logos, software code, UI interfaces, and visual assets are the exclusive intellectual property of Softkrest Infotech. Unauthorized copying, reverse engineering, or reproduction is strictly prohibited under the Copyright Act, 1957 and Trade Marks Act, 1999.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">6. Governing Law and Dispute Jurisdiction</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of or in connection with CareSeva services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Varanasi, Uttar Pradesh, India</strong>.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-6">
            <h2 className="text-base font-bold text-foreground">7. Contact Information</h2>
            <p className="text-muted-foreground">
              For legal inquiries or questions regarding these Terms, contact us at:
              <br />
              <strong>Softkrest Infotech</strong>
              <br />
              Email: <a href="mailto:softkrestinfotech@gmail.com" className="text-primary underline">softkrestinfotech@gmail.com</a>
              <br />
              Phone: +91 9369309644
              <br />
              Address: Srivastava Niwas, Churamanpur, Bhullanpur, Kashi Vidyapeeth, Varanasi, UP - 221108
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
