import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RefreshCw, Clock, CheckCircle2, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — CareSeva™" },
      {
        name: "description",
        content: "Cancellation and Refund Policy for doctor appointments and services on CareSeva (Softkrest Infotech).",
      },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">
        <div className="mb-8 border-b border-border pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            <RefreshCw className="size-3.5" /> Transparent Billing & Returns
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Cancellation & Refund Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            CareSeva is committed to a seamless, fair, and transparent cancellation and refund process for all healthcare bookings.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          {/* Quick Summary Box */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <Clock className="size-4 text-primary" /> Cancellation Window
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Free cancellation up to <strong>2 hours prior</strong> to the scheduled doctor consultation slot.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle2 className="size-4 text-emerald-500" /> Refund Turnaround
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Refunds processed in <strong>5 to 7 business days</strong> directly to your original payment method.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Appointment Cancellation by Patient</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>
                <strong>Cancellations 2+ Hours in Advance:</strong> If a patient cancels an appointment at least 2 hours before the scheduled appointment time, a <strong>100% full refund</strong> of the amount paid online (both advance token fee or full consultation amount) will be initiated automatically.
              </li>
              <li>
                <strong>Late Cancellations (Under 2 Hours):</strong> Cancellations made within 2 hours of the slot time may be subject to a nominal hospital scheduling fee depending on individual hospital partner policy.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Doctor Unavailability or Hospital Cancellation</h2>
            <p className="text-muted-foreground">
              If a booked doctor is unavailable due to an emergency or if the hospital reschedules/cancels the OPD session:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>The patient will be notified immediately via SMS/App notification.</li>
              <li>The patient will be offered a free reschedule to another available slot, OR</li>
              <li>A <strong>100% instant full refund</strong> will be initiated without any deduction.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Mode & Timelines of Refund (Payment Gateway)</h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-foreground/90 font-medium">
                All refunds are processed through our payment partner <strong>Cashfree Payments</strong> back to the original source of payment:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground text-xs">
                <li><strong>UPI (Google Pay, PhonePe, Paytm):</strong> 24 to 48 hours.</li>
                <li><strong>Debit / Credit Cards:</strong> 5 to 7 business days (depending on your issuing bank).</li>
                <li><strong>Net Banking:</strong> 3 to 7 business days.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Advance Payment (20%) Adjustment</h2>
            <p className="text-muted-foreground">
              When booking with the 20% advance token fee option, the 20% online payment is deducted from the total consultation fee. The remaining 80% is payable at the hospital counter. In case of an eligible cancellation, the 20% online advance is refunded in full.
            </p>
          </section>

          <section className="space-y-2 border-t border-border pt-6">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="size-4" /> 5. Need Help with a Refund?
            </h2>
            <p className="text-muted-foreground">
              If you have not received your refund within 7 working days or have any questions, please write to our support desk with your Booking ID / PID:
              <br />
              <strong>Softkrest Infotech Support Desk</strong>
              <br />
              Email: <a href="mailto:softkrestinfotech@gmail.com" className="text-primary underline">softkrestinfotech@gmail.com</a>
              <br />
              Helpline: +91 9369309644 (10:00 AM – 7:00 PM, Mon–Sat)
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
