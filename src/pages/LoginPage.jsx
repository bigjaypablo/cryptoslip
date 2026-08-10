import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message || "Something went wrong. Please try again.");
    } else {
      setStatus("sent");
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block cs-focus">
            <span className="cs-serif text-2xl font-medium tracking-tight text-[var(--ink)]">
              Crypto Slip
            </span>
          </Link>
        </div>

        <div className="bg-white border border-[var(--line)] rounded-sm p-8 shadow-[0_2px_8px_rgba(18,21,28,0.05),0_16px_32px_-16px_rgba(18,21,28,0.15)]">
          {status === "sent" ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#F1F5F2" }}>
                <CheckCircle2 size={22} style={{ color: "var(--sage-bright)" }} />
              </div>
              <h1 className="cs-serif text-xl font-medium text-[var(--ink)] mb-2">Check your email</h1>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                We sent a sign-in link to <span className="text-[var(--ink)] font-medium">{email}</span>.
                Click it to continue.
              </p>
            </div>
          ) : (
            <>
              <h1 className="cs-serif text-xl font-medium text-[var(--ink)] mb-2 text-center">
                Sign in to Crypto Slip
              </h1>
              <p className="text-sm text-[var(--slate)] text-center mb-7">
                We'll email you a link to sign in — no password needed.
              </p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-xs font-medium text-[var(--slate)] mb-2">
                  Email address
                </label>
                <div className="relative mb-4">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--slate)]" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-sm border border-[var(--line)] text-sm text-[var(--ink)] outline-none focus:border-[var(--ink)] transition-colors cs-focus"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm mb-4" style={{ color: "#A3492F" }}>
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="cs-btn-refined w-full inline-flex items-center justify-center gap-2 text-[var(--paper)] font-medium px-6 py-3 rounded-sm cs-focus disabled:opacity-60"
                  style={{ background: "var(--ink)" }}
                >
                  {status === "loading" ? "Sending..." : "Continue with email"}
                  {status !== "loading" && <ArrowRight size={16} />}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-xs text-[var(--slate)] mt-6">
          By continuing, you agree to Crypto Slip's{" "}
          <Link to="/terms" className="underline hover:text-[var(--ink)] cs-focus">Terms</Link> and{" "}
          <Link to="/privacy" className="underline hover:text-[var(--ink)] cs-focus">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}
