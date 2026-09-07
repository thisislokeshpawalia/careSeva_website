import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck, Loader2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "CareSeva™ Secure Checkout" },
      { name: "description", content: "Pay securely for your CareSeva healthcare appointment." },
    ],
  }),
  component: CheckoutPage,
});

declare global {
  interface Window {
    Cashfree?: (config: { mode: "production" | "sandbox" }) => {
      checkout: (options: { paymentSessionId: string; redirectTarget: "_self" | "_blank" | "_modal" }) => Promise<void>;
    };
  }
}

function CheckoutPage() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    const env = (params.get("env") || "production").toLowerCase();

    if (!sessionId) {
      setStatus("error");
      setErrorMessage("Missing payment session ID. Please restart the payment from the CareSeva app.");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;

    script.onload = () => {
      try {
        if (window.Cashfree) {
          const cashfree = window.Cashfree({
            mode: env === "sandbox" ? "sandbox" : "production",
          });

          cashfree.checkout({
            paymentSessionId: sessionId,
            redirectTarget: "_self",
          });
          setStatus("ready");
        } else {
          throw new Error("Cashfree SDK failed to initialize.");
        }
      } catch (err: any) {
        setStatus("error");
        setErrorMessage(err?.message || "Failed to initialize payment gateway.");
      }
    };

    script.onerror = () => {
      setStatus("error");
      setErrorMessage("Could not load Cashfree security SDK. Please check your internet connection.");
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-indigo-600 p-6 text-white text-center">
          <h1 className="text-xl font-bold tracking-tight">CareSeva™ Secure Checkout</h1>
          <p className="text-xs text-indigo-100 mt-1">256-Bit SSL Encrypted & RBI Compliant</p>
        </div>

        {/* Content */}
        <div className="p-8 text-center" id="payment-drop-container">
          {status === "loading" && (
            <div className="flex flex-col items-center justify-center py-6">
              <Loader2 className="size-10 text-primary animate-spin mb-4" />
              <h2 className="text-base font-semibold text-slate-800">Opening Payment Gateway...</h2>
              <p className="text-xs text-slate-500 mt-2 max-w-xs">
                Connecting to Cashfree secure portal. Select UPI, Cards, or NetBanking on the next screen.
              </p>
            </div>
          )}

          {status === "ready" && (
            <div className="flex flex-col items-center justify-center py-4">
              <div className="size-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="text-sm font-semibold text-slate-800">Payment Window Open</h2>
              <p className="text-xs text-slate-500 mt-1">
                Please complete your transaction. Return to the CareSeva mobile app once finished.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center justify-center py-4">
              <div className="size-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                <AlertCircle className="size-6" />
              </div>
              <h2 className="text-sm font-bold text-rose-600">Payment Initialization Failed</h2>
              <p className="text-xs text-slate-600 mt-2">{errorMessage}</p>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-medium text-emerald-600">
            <ShieldCheck className="size-4" />
            Official Cashfree Payments Integration
          </div>
        </div>
      </div>
    </div>
  );
}
