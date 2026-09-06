import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Lock, ShieldCheck, EyeOff, Database, CreditCard, UserCheck } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CareSeva™" },
      {
        name: "description",
        content: "Privacy policy and patient data security guidelines for CareSeva, operated by Softkrest Infotech.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">
        <div className="mb-8 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
            <Lock className="size-3.5" /> Data Security & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: August 2026 | Compliant with Digital Personal Data Protection Act (DPDP) & ABDM Standards
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-500" /> 1. Commitment to Patient Privacy
            </h2>
            <p className="text-muted-foreground">
              <strong>Softkrest Infotech</strong> ("we", "us", "our"), the operating entity of <strong>CareSeva™</strong> (https://careseva.co.in), is committed to safeguarding the privacy and electronic health records of all users, patients, and healthcare providers who utilize our digital health ecosystem.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Database className="size-4 text-primary" /> 2. Information We Collect
            </h2>
            <p className="text-muted-foreground">To facilitate medical consultations and hospital queue bookings, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Patient Identity Details:</strong> Full name, phone number, gender, date of birth / age, and city.</li>
              <li><strong>Appointment Data:</strong> Doctor name, hospital / department selected, appointment slot, token number, and visit history.</li>
              <li><strong>Digital Health Records (Optional):</strong> Electronic prescriptions, diagnostic reports, and medical notes uploaded or generated during consultation.</li>
              <li><strong>Device & Log Information:</strong> IP address, device model, operating system, and session tokens for secure authentication.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <CreditCard className="size-4 text-primary" /> 3. Payment Processing & Financial Data Safety
            </h2>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-muted-foreground">
                All financial transactions and online payments for appointments are processed exclusively through our authorized payment aggregator, <strong>Cashfree Payments India Pvt. Ltd.</strong>
              </p>
              <p className="mt-2 text-muted-foreground font-medium">
                <strong>Crucial Note:</strong> CareSeva and Softkrest Infotech <u>do NOT</u> collect, view, or store your sensitive financial data (such as complete debit/credit card numbers, CVV codes, bank account passwords, or UPI PINs). All payment interactions comply strictly with RBI Payment Aggregator guidelines and PCI-DSS standards.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <EyeOff className="size-4 text-primary" /> 4. Data Sharing & Zero Commercial Selling Policy
            </h2>
            <p className="text-muted-foreground">
              We uphold a strict zero-tolerance policy against commercial data monetisation:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>We NEVER sell or rent your personal health data to pharmaceutical companies, advertisers, or third-party brokers.</strong></li>
              <li>Data is shared strictly with the specific hospital, doctor, or clinic you book an appointment with, solely for providing clinical healthcare.</li>
              <li>Data may be disclosed if required by law enforcement or government authorities pursuant to a valid legal order or court mandate.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <UserCheck className="size-4 text-primary" /> 5. User Consent & Data Rights
            </h2>
            <p className="text-muted-foreground">
              Under Indian data protection laws, you retain full ownership of your data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Access & Correction:</strong> You can review and update your profile and health records at any time.</li>
              <li><strong>Account & Data Deletion:</strong> You have the right to request deletion of your account and personal records by emailing our Grievance Officer at <a href="mailto:softkrestinfotech@gmail.com" className="text-primary underline">softkrestinfotech@gmail.com</a>.</li>
            </ul>
          </section>

          <section className="space-y-2 border-t border-border pt-6">
            <h2 className="text-base font-bold text-foreground">6. Grievance Redressal Officer</h2>
            <p className="text-muted-foreground">
              In accordance with the Information Technology Act 2000 and the DPDP Act 2023:
              <br />
              <strong>Grievance Officer:</strong> Sarthak Srivastava
              <br />
              <strong>Entity:</strong> Softkrest Infotech
              <br />
              <strong>Email:</strong> <a href="mailto:softkrestinfotech@gmail.com" className="text-primary underline">softkrestinfotech@gmail.com</a>
              <br />
              <strong>Address:</strong> Srivastava Niwas, Churamanpur, Bhullanpur, Kashi Vidyapeeth, Varanasi, UP - 221108
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
