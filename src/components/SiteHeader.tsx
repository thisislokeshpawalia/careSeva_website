import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-foreground">
          <span>Care<span className="text-primary">Seva</span><span className="text-xs text-primary ml-0.5">™</span></span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft className="size-4" /> Home
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
          >
            Get App
          </Link>
        </nav>
      </div>
    </header>
  );
}
