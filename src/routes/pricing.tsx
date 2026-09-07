import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, Shield, Zap, Building2, User } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Services — CareSeva™" },
      {
        name: "description",
        content: "Transparent pricing for patient OPD bookings, consultations, and hospital HMS subscriptions on CareSeva.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <Zap className="size-3.5" /> Transparent Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Simple, Transparent Healthcare Pricing</h1>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Clear fees for patients and affordable management plans for healthcare providers. No hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Patient Booking Plan */}
          <div className="rounded-3xl border border-primary/40 bg-card p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              For Patients
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <User className="size-4" /> OPD Consultation Booking
              </div>
              <div className="text-3xl font-extrabold text-foreground">
                Doctor Fee <span className="text-sm font-normal text-muted-foreground">(Direct Hospital Rate)</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Zero platform markup. Pay consultation fees directly to verified hospitals and clinics.
              </p>

              <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Flexible Payment Options:</strong> Pay 100% full fee or 20% advance token fee online.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Live OPD Queue Tracking:</strong> Real-time token alerts on your phone.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Digital Prescriptions:</strong> Lifetime secure cloud access to your medical records.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Full Refund Guarantee:</strong> 100% refund for eligible cancellations prior to consultation.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="/"
                className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-xs font-bold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Book a Doctor Now
              </a>
            </div>
          </div>

          {/* Hospital Partner Plan */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-2">
                <Building2 className="size-4 text-primary" /> Hospital Management System (HMS)
              </div>
              <div className="text-3xl font-extrabold text-foreground">
                Custom Plans <span className="text-sm font-normal text-muted-foreground">/ per clinic or hospital</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Complete digital reception, doctor dashboard, queue displays, and admissions system.
              </p>

              <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Smart Queue Management:</strong> OPD token screens & live WhatsApp/SMS alerts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Doctor & Staff Dashboards:</strong> Instant prescription writing & patient history.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Counter Payment Settlement:</strong> Seamless 80% balance counter collection.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>24/7 Dedicated Support:</strong> Priority onboarding & technical assistance.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-3 text-xs font-bold text-foreground hover:bg-muted transition-colors"
              >
                Contact for Hospital Demo
              </a>
            </div>
          </div>
        </div>

        {/* Security / Payment Partner Badge */}
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
          <Shield className="size-5 text-primary shrink-0" />
          <span>
            Online transactions are securely encrypted and handled via <strong>Cashfree Payment Gateway</strong>. We do not store card details or banking credentials.
          </span>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
