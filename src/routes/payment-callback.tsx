import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/payment-callback")({
  head: () => ({
    meta: [
      { title: "Payment Callback — CareSeva™" },
    ],
  }),
  component: PaymentCallbackPage,
});

function PaymentCallbackPage() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const orderId = params.get("order_id");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
        <div className="size-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="size-10" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">Payment Processed</h1>
        <p className="text-xs text-slate-500 mt-2">
          Your payment attempt has been recorded.
        </p>
        {orderId && (
          <div className="mt-4 bg-slate-50 rounded-lg p-3 text-xs font-mono text-slate-600 border border-slate-100">
            Order ID: {orderId}
          </div>
        )}
        <div className="mt-6">
          <a
            href="careseva://payment-status"
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
          >
            Return to CareSeva App
          </a>
        </div>
      </div>
    </div>
  );
}
