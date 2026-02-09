import React, { useMemo, useState } from "react";
import { Loader2, Upload, CheckCircle2, AlertCircle } from "lucide-react";

/**
 * Award Nomination Form (Theme: #11b3d4 + White)
 * ✅ Validations (required fields + email + phone)
 * ✅ Word count for achievements (20–50 words)
 * ✅ Submit disabled until T&C checked + valid
 * ✅ Loading effect + console.log payload on submit
 */

export default function AwardNominationForm() {
  const THEME = "#11b3d4";

const categories = useMemo(
  () => [
    "Research Excellence Awards",
    "Teaching & Academic Excellence Awards",
    "Student Achievement Awards",
    "Institutional & Leadership Excellence Awards",
    "Social Impact & Professional Contribution Awards",
    "Technology & Digital Transformation Awards",
    "International Collaboration & Global Impact Awards",
    "Diversity, Inclusion & Capacity Building Awards",
    "Women in Research & Education Excellence Award",
  ],
  []
);


  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    designation: "",
    organization: "",
    sector: "",
    country: "",
    email: "",
    phone: "",
    category: "",
    achievements: "",
    contributions: "",
    awards: "",
    supportingDoc: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const wordCount = (text) => {
    const words = String(text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return words.length;
  };

  const achievementsCount = wordCount(form.achievements);

  const setValue = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const e = {};
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const phoneOk = /^[0-9+\-\s()]{7,20}$/.test(form.phone.trim());

    const required = [
      ["fullName", "Full Name is required."],
      ["designation", "Designation is required."],
      ["organization", "Organization/Company is required."],
      ["sector", "Industry/Sector is required."],
      ["country", "Country is required."],
      ["email", "Email is required."],
      ["phone", "Phone number is required."],
      ["category", "Please select an award category."],
      ["achievements", "Brief description is required (20–50 words)."],
    ];

    required.forEach(([key, msg]) => {
      if (!String(form[key] ?? "").trim()) e[key] = msg;
    });

    if (form.email.trim() && !emailOk) e.email = "Enter a valid email address.";
    if (form.phone.trim() && !phoneOk) e.phone = "Enter a valid phone number.";

    // Achievements word count 20–50
    if (form.achievements.trim()) {
      if (achievementsCount < 20) e.achievements = "Minimum 20 words required.";
      if (achievementsCount > 50) e.achievements = "Maximum 50 words allowed.";
    }

    // Supporting doc optional, but if provided validate type/size
    if (form.supportingDoc) {
      const okTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!okTypes.includes(form.supportingDoc.type)) {
        e.supportingDoc = "Allowed: PDF, DOC, DOCX, JPG, PNG.";
      }
      const maxMB = 10;
      if (form.supportingDoc.size > maxMB * 1024 * 1024) {
        e.supportingDoc = `File must be ≤ ${maxMB}MB.`;
      }
    }

    if (!form.agree) e.agree = "You must accept Terms & Conditions to submit.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const isFormValid = useMemo(() => {
    // quick live validity check for disabling button
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const phoneOk = /^[0-9+\-\s()]{7,20}$/.test(form.phone.trim());
    const requiredOk =
      form.fullName.trim() &&
      form.designation.trim() &&
      form.organization.trim() &&
      form.sector.trim() &&
      form.country.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.category.trim() &&
      form.achievements.trim() &&
      form.agree;

    const wcOk = achievementsCount >= 20 && achievementsCount <= 50;
    return Boolean(requiredOk && emailOk && phoneOk && wcOk);
  }, [form, achievementsCount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));

    const payload = {
      ...form,
      supportingDoc: form.supportingDoc
        ? {
            name: form.supportingDoc.name,
            type: form.supportingDoc.type,
            size: form.supportingDoc.size,
          }
        : null,
      achievementsWordCount: achievementsCount,
      submittedAt: new Date().toISOString(),
    };

    console.log("✅ Award Nomination Payload:", payload);

    setSubmitting(false);
    setSubmitted(true);
  };

  const Input = ({ label, value, onChange, placeholder, error, type = "text" }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
          {label}
        </label>
        {error ? (
          <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" /> {error}
          </span>
        ) : null}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 text-slate-900 outline-none transition-all ${
          error
            ? "border-red-300 ring-2 ring-red-100"
            : "border-slate-200 focus:border-[var(--t)] focus:ring-2 focus:ring-[var(--t)]/20"
        }`}
        style={{ ["--t"]: THEME }}
      />
    </div>
  );

  const TextArea = ({ label, value, onChange, placeholder, error, rows = 4, footer }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
          {label}
        </label>
        {error ? (
          <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" /> {error}
          </span>
        ) : null}
      </div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-xl border px-4 py-3 text-slate-900 outline-none transition-all resize-none ${
          error
            ? "border-red-300 ring-2 ring-red-100"
            : "border-slate-200 focus:border-[var(--t)] focus:ring-2 focus:ring-[var(--t)]/20"
        }`}
        style={{ ["--t"]: THEME }}
      />
      {footer ? <div className="text-xs text-slate-500">{footer}</div> : null}
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-14"
      style={{ backgroundColor: THEME }}
    >
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center text-white mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Nominate for ICSCPSIA 2026</h1>
          <p className="mt-2 text-sm text-white/90">
            Submit your nomination for the International Research Innovation and Excellence Awards 2026
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/30">
          <div className="px-6 py-5 border-b border-slate-200 text-center">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              Nomination Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Top grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                value={form.fullName}
                onChange={(e) => setValue("fullName", e.target.value)}
                placeholder="Your full name"
                error={errors.fullName}
              />
              <Input
                label="Designation"
                value={form.designation}
                onChange={(e) => setValue("designation", e.target.value)}
                placeholder="Your designation"
                error={errors.designation}
              />

              <Input
                label="Organization / Company Name"
                value={form.organization}
                onChange={(e) => setValue("organization", e.target.value)}
                placeholder="Organization name"
                error={errors.organization}
              />
              <Input
                label="Industry / Sector"
                value={form.sector}
                onChange={(e) => setValue("sector", e.target.value)}
                placeholder="e.g., Academia, Healthcare, AI"
                error={errors.sector}
              />

              <Input
                label="Country"
                value={form.country}
                onChange={(e) => setValue("country", e.target.value)}
                placeholder="Country"
                error={errors.country}
              />
              <Input
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setValue("email", e.target.value)}
                placeholder="name@example.com"
                error={errors.email}
              />

              <Input
                label="Phone Number"
                value={form.phone}
                onChange={(e) => setValue("phone", e.target.value)}
                placeholder="+91 98xxxxxxx"
                error={errors.phone}
              />

              {/* Category */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                    Award Category
                  </label>
                  {errors.category ? (
                    <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.category}
                    </span>
                  ) : null}
                </div>
                <select
                  value={form.category}
                  onChange={(e) => setValue("category", e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-slate-900 outline-none transition-all bg-white ${
                    errors.category
                      ? "border-red-300 ring-2 ring-red-100"
                      : "border-slate-200 focus:border-[var(--t)] focus:ring-2 focus:ring-[var(--t)]/20"
                  }`}
                  style={{ ["--t"]: THEME }}
                >
                  <option value="">Select a category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Achievements (20–50 words with counter) */}
            <TextArea
              label="Brief Description of Achievements (20–50 words)"
              value={form.achievements}
              onChange={(e) => setValue("achievements", e.target.value)}
              placeholder="Write a short description of achievements (20–50 words)."
              rows={5}
              error={errors.achievements}
              footer={
                <span className={`${achievementsCount < 20 || achievementsCount > 50 ? "text-red-600 font-semibold" : ""}`}>
                  {achievementsCount} words
                </span>
              }
            />

            {/* Two textareas */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextArea
                label="Key Contributions and Impact"
                value={form.contributions}
                onChange={(e) => setValue("contributions", e.target.value)}
                placeholder="Key contributions, impact, or outcomes."
                rows={4}
              />
              <TextArea
                label="Awards and Recognitions (if any)"
                value={form.awards}
                onChange={(e) => setValue("awards", e.target.value)}
                placeholder="List notable awards/recognitions."
                rows={4}
              />
            </div>

            {/* Supporting doc */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                  Supporting Documents (if any)
                </label>
                {errors.supportingDoc ? (
                  <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.supportingDoc}
                  </span>
                ) : null}
              </div>

              <div
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${
                  errors.supportingDoc ? "border-red-300 ring-2 ring-red-100" : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2 text-slate-700">
                  <Upload className="h-4 w-4" />
                  <span className="text-sm">
                    {form.supportingDoc ? form.supportingDoc.name : "Choose file"}
                  </span>
                </div>

                <label
                  className="cursor-pointer rounded-lg px-3 py-2 text-sm font-bold text-white"
                  style={{ backgroundColor: THEME }}
                >
                  Browse
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                    onChange={(e) => setValue("supportingDoc", e.target.files?.[0] || null)}
                  />
                </label>
              </div>

              <p className="text-xs text-slate-500">
                Allowed: PDF, DOC, DOCX, JPG, PNG (max 10MB)
              </p>
            </div>

            {/* Agree */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setValue("agree", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--t)]"
                  style={{ ["--t"]: THEME }}
                />
                <p className="text-sm text-slate-700">
                  I agree to the{" "}
                  <span className="font-bold" style={{ color: THEME }}>
                    Terms and Conditions
                  </span>{" "}
                  and confirm that all information provided is accurate and complete.
                </p>
              </div>
              {errors.agree ? (
                <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> {errors.agree}
                </p>
              ) : null}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || submitting}
              className="
                w-full rounded-xl py-4 font-extrabold
                transition-all duration-300
                disabled:opacity-60 disabled:cursor-not-allowed
                shadow-lg
              "
              style={{
                backgroundColor: isFormValid ? THEME : "#9CA3AF",
                color: "white",
                boxShadow: isFormValid ? "0 14px 30px rgba(17,179,212,0.35)" : "none",
              }}
            >
              {submitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Submit Nomination"
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              Submit button will enable after you accept terms and all required fields are valid.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-extrabold text-slate-900">Nomination Submitted</p>
                  <p className="text-sm text-slate-700">
                    Data has been logged in console (payload).
                  </p>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
