import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Support — CareSeva™" },
      {
        name: "description",
        content: "Contact CareSeva and Softkrest Infotech support, registered office address, and customer care.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <Mail className="size-3.5" /> We're Here to Help
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Have questions about doctor bookings, hospital partnerships, or payments? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-foreground">Official Business & Registered Office</h2>
              <p className="text-xs text-muted-foreground mt-1">Softkrest Infotech (Owner & Operator of CareSeva™)</p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Registered Address</div>
                  <div className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                    Srivastava Niwas, Churamanpur, Bhullanpur,<br />
                    Kashi Vidyapeeth, Varanasi, Uttar Pradesh - 221108
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Official Support Email</div>
                  <a href="mailto:softkrestinfotech@gmail.com" className="text-primary hover:underline text-xs">
                    softkrestinfotech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Customer Support & Helpline</div>
                  <a href="tel:+919369309644" className="text-primary hover:underline text-xs">
                    +91 9369309644
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="size-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Support Hours</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 text-xs text-muted-foreground">
              <div className="font-semibold text-foreground mb-1">Grievance Redressal Officer</div>
              <div>Mr. Sarthak Srivastava</div>
              <div>Email: softkrestinfotech@gmail.com</div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-foreground mb-4">Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 className="size-10 text-emerald-500 mx-auto mb-2" />
                <h3 className="font-bold text-foreground">Message Received!</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Thank you for contacting CareSeva. Our team will get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Your Name</label>
                  <input
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Subject / Inquiry Type</label>
                  <select className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary">
                    <option>Appointment / Booking Inquiry</option>
                    <option>Payment & Refund Support</option>
                    <option>Hospital / Doctor Partnership</option>
                    <option>Technical Support / App Issue</option>
                    <option>Other Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2 transition-opacity"
                >
                  <Send className="size-3.5" /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
