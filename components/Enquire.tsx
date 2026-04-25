"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  candidates: string;
  location: string;
  domain: string;
  delivery: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const DOMAINS = [
  "Data Science & AI",
  "Full Stack Development",
  "Product Management",
  "Cloud & DevOps",
  "Cybersecurity",
  "Business Analytics",
  "Leadership & Management",
  "Other",
];

const DELIVERIES = [
  "Online — Live Sessions",
  "Online — Self-Paced",
  "Hybrid",
  "On-Site / Classroom",
];

const STEP_LABELS = ["Contact", "Company", "Program"];

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  candidates: "",
  location: "",
  domain: "",
  delivery: "",
};

const ENQUIRE_OPEN_EVENT = "open-enquire-modal";

export const openEnquireModal = () =>
  window.dispatchEvent(new Event(ENQUIRE_OPEN_EVENT));

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 19l-7-7 7-7" />
  </svg>
);

const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// ─── Floating Label Input ─────────────────────────────────────────────────────

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  hasPrefix = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  hasPrefix?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className={[
          "peer w-full rounded-xl border-[1.5px] bg-white py-[14px] pr-10 text-sm text-slate-900 outline-none transition-all duration-200",
          hasPrefix ? "pl-28" : "pl-4",
          error
            ? "border-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
            : focused
            ? "border-blue-600 shadow-[0_0_0_3px_rgba(0,102,255,0.08)]"
            : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute bg-white px-1 transition-all duration-150",
          hasPrefix ? "left-[112px]" : "left-4",
          lifted
            ? "-top-[10px] text-[11px] font-semibold"
            : "top-[14px] text-sm text-slate-400",
          lifted && focused
            ? "text-blue-600"
            : lifted
            ? "text-slate-500"
            : "",
        ].join(" ")}
      >
        {label}
      </label>
      {value.length > 0 && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 text-[9px] font-black text-white">
          ✓
        </div>
      )}
      {error && (
        <p className="mt-1 ml-1 text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}

// ─── Phone Input ──────────────────────────────────────────────────────────────

function PhoneInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 flex items-center gap-1 border-r-[1.5px] border-slate-200 px-3 text-[13px] font-semibold text-slate-600">
        🇮🇳
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 9l-7 7-7-7" />
        </svg>
        <span>+91</span>
      </div>
      <input
        id="phone"
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className={[
          "w-full rounded-xl border-[1.5px] bg-white py-[14px] pl-[112px] pr-10 text-sm text-slate-900 outline-none transition-all duration-200",
          error
            ? "border-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
            : focused
            ? "border-blue-600 shadow-[0_0_0_3px_rgba(0,102,255,0.08)]"
            : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      />
      <label
        htmlFor="phone"
        className={[
          "pointer-events-none absolute bg-white px-1 transition-all duration-150",
          lifted
            ? "left-[112px] -top-[10px] text-[11px] font-semibold"
            : "left-[112px] top-[14px] text-sm text-slate-400",
          lifted && focused ? "text-blue-600" : lifted ? "text-slate-500" : "",
        ].join(" ")}
      >
        Phone Number
      </label>
      {value.length > 0 && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 text-[9px] font-black text-white">
          ✓
        </div>
      )}
      {error && (
        <p className="mt-1 ml-1 text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}

// ─── Custom Select ────────────────────────────────────────────────────────────

function SelectField({
  placeholder,
  label,
  value,
  options,
  onSelect,
  error,
}: {
  placeholder: string;
  label: string;
  value: string;
  options: string[];
  onSelect: (val: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "flex w-full items-center justify-between rounded-xl border-[1.5px] bg-white px-4 py-[14px] text-left text-sm outline-none transition-all duration-200",
          error
            ? "border-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
            : open
            ? "border-blue-600 shadow-[0_0_0_3px_rgba(0,102,255,0.08)]"
            : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      >
        <div className="flex flex-col">
          {value && (
            <span className="mb-0.5 text-[10px] font-semibold leading-none text-slate-400">
              {label}
            </span>
          )}
          <span className={value ? "text-slate-900" : "text-slate-400"}>
            {value || placeholder}
          </span>
        </div>
        <span className={`text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronDown />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-56 overflow-y-auto rounded-2xl border-[1.5px] border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
          style={{ animation: "dropIn 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onSelect(opt); setOpen(false); }}
              className={[
                "flex w-full items-center justify-between px-4 py-[11px] text-left text-[13px] text-slate-700 transition-colors hover:bg-slate-50",
                value === opt ? "bg-blue-50 font-semibold !text-blue-600" : "",
              ].join(" ")}
            >
              {opt}
              {value === opt && <Check size={14} />}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-1 ml-1 text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}

// ─── Step Indicator ───────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mt-5 flex items-center gap-2">
      {STEP_LABELS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div
              className={[
                "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300",
                i < current
                  ? "bg-blue-600 text-white"
                  : i === current
                  ? "bg-blue-600 text-white shadow-[0_0_0_4px_rgba(0,102,255,0.12)]"
                  : "bg-slate-100 text-slate-400",
              ].join(" ")}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={[
                "text-xs font-medium",
                i === current ? "text-slate-800" : "text-slate-400",
              ].join(" ")}
            >
              {label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div
              className={[
                "h-px w-7 transition-colors duration-300",
                i < current ? "bg-blue-300" : "bg-slate-200",
              ].join(" ")}
            />
          )}
        </div>
      ))}
    </div>
  );
}


function EnquireModalDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({ ...EMPTY_FORM });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData) => (val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = useCallback((): boolean => {
    const newErrors: Errors = {};
    if (step === 0) {
      if (!form.name.trim()) newErrors.name = "Name is required";
      if (!form.email.includes("@")) newErrors.email = "Valid email required";
      if (form.phone.replace(/\D/g, "").length < 10)
        newErrors.phone = "Valid phone number required";
    }
    if (step === 1) {
      if (!form.company.trim()) newErrors.company = "Company name required";
      if (!form.candidates) newErrors.candidates = "Number of candidates required";
    }
    if (step === 2) {
      if (!form.domain) newErrors.domain = "Please select a domain";
      if (!form.delivery) newErrors.delivery = "Please select a delivery mode";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [step, form]);

  const handleNext = () => {
    if (!validate()) return;
    if (step < 2) setStep((s) => s + 1);
    else setSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-[520px]" style={{ animation: "modalIn 0.35s cubic-bezier(0.16,1,0.3,1) both" }}>
      {/* Glow ring */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[20px]"
        style={{
          background: "linear-gradient(135deg, rgba(0,102,255,0.2), transparent 50%, rgba(139,92,246,0.15))",
          filter: "blur(4px)",
        }}
      />

      <div className="relative overflow-hidden rounded-[20px] bg-white shadow-[0_32px_80px_rgba(0,0,0,0.18),0_8px_24px_rgba(0,0,0,0.08)]">
        {/* Top accent */}
        <div
          className="h-[3px]"
          style={{ background: "linear-gradient(90deg, #0066ff, #00b4ff, #8b5cf6)" }}
        />

        {/* Header */}
        <div className="border-b border-slate-100 px-8 pb-5 pt-7">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-[10px] text-white">
                  ✓
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  Enterprise
                </span>
              </div>
              <h2
                className="text-[26px] font-bold text-slate-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Enquire Now
              </h2>
              <p className="mt-0.5 text-[13px] text-slate-400">
                We'll craft a program roadmap for your team.
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-600"
            >
              <XIcon />
            </button>
          </div>
          {!submitted && <StepIndicator current={step} />}
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {submitted ? (
            <div className="py-8 text-center" style={{ animation: "fadeUp 0.4s ease both" }}>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                ✓
              </div>
              <h3
                className="mb-2 text-[22px] font-bold text-slate-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                You're on our radar.
              </h3>
              <p className="mx-auto mb-5 max-w-[300px] text-[13px] leading-relaxed text-slate-500">
                Our enterprise team will reach out within 24 hours with a custom program
                roadmap for{" "}
                <strong className="text-slate-700">{form.company || "your company"}</strong>.
              </p>
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {[
                  form.domain,
                  form.delivery,
                  form.candidates ? `${form.candidates} learners` : "",
                ]
                  .filter(Boolean)
                  .map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <button
                onClick={onClose}
                className="text-[13px] text-slate-400 transition-colors hover:text-slate-600"
              >
                Close window
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5">
              {/* Step 0 — Contact */}
              {step === 0 && (
                <>
                  <FloatingInput id="name" label="Full Name" value={form.name} onChange={set("name")} error={errors.name} />
                  <FloatingInput id="email" label="Work Email" type="email" value={form.email} onChange={set("email")} error={errors.email} />
                  <PhoneInput value={form.phone} onChange={set("phone")} error={errors.phone} />
                </>
              )}

              {/* Step 1 — Company */}
              {step === 1 && (
                <>
                  <FloatingInput id="company" label="Company Name" value={form.company} onChange={set("company")} error={errors.company} />
                  <FloatingInput id="candidates" label="Number of Candidates" type="number" value={form.candidates} onChange={set("candidates")} error={errors.candidates} />
                  <FloatingInput id="location" label="Location (optional)" value={form.location} onChange={set("location")} />
                </>
              )}

              {/* Step 2 — Program */}
              {step === 2 && (
                <>
                  <SelectField
                    placeholder="Select Domain"
                    label="Domain"
                    value={form.domain}
                    options={DOMAINS}
                    onSelect={set("domain")}
                    error={errors.domain}
                  />
                  <SelectField
                    placeholder="Mode of Delivery"
                    label="Delivery Mode"
                    value={form.delivery}
                    options={DELIVERIES}
                    onSelect={set("delivery")}
                    error={errors.delivery}
                  />
                  <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3.5">
                    <strong className="mb-1 block text-[12px] text-blue-600">
                      ✦ What happens next?
                    </strong>
                    <p className="text-[12px] leading-relaxed text-slate-500">
                      Our enterprise team reviews your requirements and sends a custom
                      program roadmap within 24 hours — no commitment required.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="flex items-center justify-between gap-3 px-8 pb-7">
            {step === 0 ? (
              <span className="text-[12px] text-slate-400">Step 1 of 3</span>
            ) : (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-medium text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-700"
              >
                <ChevronLeft />
                Back
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="ml-auto flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 px-7 py-3 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(0,102,255,0.3)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,102,255,0.4)] active:translate-y-0"
            >
              {step === 2 ? (
                <>Submit Enquiry <Check size={14} /></>
              ) : (
                <>Continue <ChevronRight /></>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Enquire() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);

  const handleOpen = () => {
    setKey((k) => k + 1); // reset modal state on each open
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    window.addEventListener(ENQUIRE_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(ENQUIRE_OPEN_EVENT, handleOpen);
  }, []);

  return (
    <>
      {/* Keyframe animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,500&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Overlay + Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <EnquireModalDialog key={key} onClose={handleClose} />
        </div>
      )}
    </>
  );
}
