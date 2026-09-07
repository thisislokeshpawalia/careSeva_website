import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
              <img src="/logo.png" alt="CareSeva Logo" className="h-8 w-auto" />
              <span>Care<span className="text-primary">Seva</span><span className="text-xs text-primary font-bold ml-1">™</span></span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
              CareSeva is an integrated healthcare & OPD queue management platform connecting patients with hospitals, verified doctors, and digital health records.
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Legal Entity: </span>
              Softkrest Infotech (Proprietor: Sarthak Srivastava)
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">MSME / Udyam Reg: </span>
              UDYAM-UP-75-0200308
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground transition-colors hover:text-primary">
                  Pricing & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground">Policies & Compliance</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-muted-foreground transition-colors hover:text-primary">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-foreground">Registered Office</h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-primary mt-0.5" />
                <span>
                  Srivastava Niwas, Churamanpur, Bhullanpur, Kashi Vidyapeeth, Varanasi, UP - 221108
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:softkrestinfotech@gmail.com" className="hover:text-primary transition-colors">
                  softkrestinfotech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+919369309644" className="hover:text-primary transition-colors">
                  +91 9369309644
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} CareSeva™. All rights reserved. CareSeva is owned and operated by Softkrest Infotech.
          </span>
          <span className="inline-flex items-center gap-2 font-medium">
            <ShieldCheck className="size-4 text-primary" aria-hidden /> Secure Payments Powered by Cashfree | ABDM Ready
          </span>
        </div>
      </div>
    </footer>
  );
}
