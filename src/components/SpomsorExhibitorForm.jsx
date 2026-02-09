import React, { useMemo, useState } from "react";
import { BadgeCheck, Building2, DollarSign, Mail, User2 } from "lucide-react";

/**
 * SponsorForm.jsx (Theme: #11b3d4 + white)
 * - Validations: required + email format
 * - Amount auto-updates by Sponsorship Level
 * - Submit shows loading + logs final data to console
 */

export default function SponsorForm() {
  const THEME = "#11b3d4";

  const sponsorshipLevels = useMemo(
    () => [
      { label: "Platinum", value: "platinum", amount: 5000 },
      { label: "Gold", value: "gold", amount: 3000 },
      { label: "Silver", value: "silver", amount: 1500 },
      { label: "Bronze", value: "bronze", amount: 500 },
    ],
    []
  );

  const [form, setForm] = useState({
    sponsorName: "",
    sponsorEmail: "",
    sponsorshipLevel: "",
  });

  const [touched, setTouched] = useState({
    sponsorName: false,
    sponsorEmail: false,
    sponsorshipLevel: false,
  });

  const [loading, setLoading] = useState(false);

  const selected = useMemo(
    () => sponsorshipLevels.find((x) => x.value === form.sponsorshipLevel) || null,
    [form.sponsorshipLevel, sponsorshipLevels]
  );

  const amount = selected?.amount ?? 0;

  const emailOk = useMemo(() => {
    const v = form.sponsorEmail.trim();
    if (!v) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
  }, [form.sponsorEmail]);

  const errors = useMemo(() => {
    const e = {};
    if (!form.sponsorName.trim()) e.sponsorName = "Sponsor name is required.";
    if (!form.sponsorEmail.trim()) e.sponsorEmail = "Email is required.";
    else if (!emailOk) e.sponsorEmail = "Please enter a valid email address.";
    if (!form.sponsorshipLevel) e.sponsorshipLevel = "Please select a level.";
    return e;
  }, [form, emailOk]);

  const isValid = Object.keys(errors).length === 0;

  const onChange = (key) => (e) => {
    const val = e.target.value;
    setForm((p) => ({ ...p, [key]: val }));
  };

  const onBlur = (key) => () => setTouched((p) => ({ ...p, [key]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ sponsorName: true, sponsorEmail: true, sponsorshipLevel: true });

    if (!isValid) return;

    setLoading(true);

    // simulate submit
    setTimeout(() => {
      const payload = {
        ...form,
        sponsorshipLevelLabel: selected?.label || "",
        sponsorshipAmountUSD: amount,
        submittedAt: new Date().toISOString(),
      };

      console.log("Sponsor Registration Submitted:", payload);

      setLoading(false);
      alert("Submitted successfully (check console for data).");

      setForm({ sponsorName: "", sponsorEmail: "", sponsorshipLevel: "" });
      setTouched({ sponsorName: false, sponsorEmail: false, sponsorshipLevel: false });
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      {/* Page Heading */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl text-white" style={{ color: THEME }}>
          Sponsor Registration Form
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
        {/* Top bar */}
        <div className="px-6 sm:px-8 py-4" style={{ backgroundColor: THEME }}>
          <div className="flex items-center gap-3 text-white">
            <BadgeCheck className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Sponsor Registration Form</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-8">
          

          <div className="space-y-5">
            {/* Sponsor Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Sponsor Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={form.sponsorName}
                  onChange={onChange("sponsorName")}
                  onBlur={onBlur("sponsorName")}
                  placeholder="Enter sponsor name"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white outline-none transition
                    ${touched.sponsorName && errors.sponsorName ? "border-red-300 ring-2 ring-red-100" : "border-slate-200 focus:ring-2 focus:ring-sky-100 focus:border-sky-300"}
                  `}
                />
              </div>
              {touched.sponsorName && errors.sponsorName && (
                <p className="mt-2 text-xs text-red-600">{errors.sponsorName}</p>
              )}
            </div>

            {/* Sponsor Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Sponsor Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={form.sponsorEmail}
                  onChange={onChange("sponsorEmail")}
                  onBlur={onBlur("sponsorEmail")}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white outline-none transition
                    ${touched.sponsorEmail && errors.sponsorEmail ? "border-red-300 ring-2 ring-red-100" : "border-slate-200 focus:ring-2 focus:ring-sky-100 focus:border-sky-300"}
                  `}
                />
              </div>
              {touched.sponsorEmail && errors.sponsorEmail && (
                <p className="mt-2 text-xs text-red-600">{errors.sponsorEmail}</p>
              )}
            </div>

            {/* Sponsorship Level */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Sponsorship Level <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={form.sponsorshipLevel}
                  onChange={onChange("sponsorshipLevel")}
                  onBlur={onBlur("sponsorshipLevel")}
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border bg-white outline-none transition appearance-none
                    ${touched.sponsorshipLevel && errors.sponsorshipLevel ? "border-red-300 ring-2 ring-red-100" : "border-slate-200 focus:ring-2 focus:ring-sky-100 focus:border-sky-300"}
                  `}
                >
                  <option value="">Select Sponsorship Level</option>
                  {sponsorshipLevels.map((lvl) => (
                    <option key={lvl.value} value={lvl.value}>
                      {lvl.label}
                    </option>
                  ))}
                </select>

                {/* dropdown caret */}
                <svg
                  className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {touched.sponsorshipLevel && errors.sponsorshipLevel && (
                <p className="mt-2 text-xs text-red-600">{errors.sponsorshipLevel}</p>
              )}
            </div>

            {/* Amount bar */}
            <div
              className="rounded-xl px-4 py-4 border"
              style={{
                backgroundColor: `${THEME}22`,
                borderColor: `${THEME}55`,
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <DollarSign className="w-4 h-4" style={{ color: THEME }} />
                  <span>Sponsorship Amount:</span>
                </div>
                <div className="text-lg font-extrabold" style={{ color: THEME }}>
                  ${amount}
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Amount updates based on the selected sponsorship level.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-xl py-3.5 font-bold text-white transition shadow-sm
                ${loading ? "opacity-80 cursor-not-allowed" : "hover:opacity-95"}
              `}
              style={{ backgroundColor: THEME }}
            >
              <span className="inline-flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </span>
            </button>

            {/* helper */}
            <p className="text-center text-xs text-slate-500">
              Submit will work only after all required fields are valid.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
