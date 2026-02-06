import React, { useMemo, useState } from "react";
import {
  User,
  Mail,
  Phone,
  ClipboardList,
  Building2,
  Globe,
  CreditCard,
  Upload,
  Loader2,
  CheckCircle2,
} from "lucide-react";

/**
 * ✅ Registration Form (Theme = your website primary)
 * - Uses bg-primary / text-primary (same as your navbar theme)
 * - Full validation
 * - Submit shows loading
 * - On success: console.log(fullData)
 *
 * NOTE:
 * - Replace `bg-primary` etc. with your existing theme utilities (already in your project).
 */

export default function RegistrationFormSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    category: "Student - Abstract Presentation",
    registrationFee: "USD 400",
    firstName: "",
    lastName: "",
    email: "",
    joiningMode: "",
    paperId: "",
    phone: "",
    institution: "",
    country: "India",
    transactionId: "",
    receipt: null, // File
  });

  const [errors, setErrors] = useState({});

  const categories = useMemo(
    () => [
      { label: "Student - Abstract Presentation", fee: "USD 400" },
      { label: "Regular - Abstract Presentation", fee: "USD 500" },
      { label: "Non-Member - Abstract Presentation", fee: "USD 600" },
      { label: "Listener / Attendee", fee: "USD 250" },
    ],
    []
  );

  const countries = useMemo(
    () => [
      "India",
      "United States",
      "United Kingdom",
      "Canada",
      "Germany",
      "France",
      "Turkey",
      "Saudi Arabia",
      "UAE",
      "Oman",
      "Qatar",
      "Malaysia",
      "Singapore",
      "China",
      "Taiwan",
      "Japan",
      "South Korea",
      "Australia",
      "Other",
    ],
    []
  );

  const setValue = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validate = () => {
    const e = {};

    const isEmail = (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
    const isPhone = (v) =>
      /^[0-9+\-\s()]{7,20}$/.test(String(v || "").trim());

    if (!form.category) e.category = "Please select a category.";
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim() || !isEmail(form.email)) e.email = "Enter a valid email address.";
    if (!form.joiningMode) e.joiningMode = "Please select joining mode.";
    if (!form.phone.trim() || !isPhone(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.institution.trim()) e.institution = "Institution/Organization is required.";
    if (!form.country) e.country = "Please select your country.";

    // Paper ID only for presenter categories (not listener)
    const isListener = form.category.toLowerCase().includes("listener");
    if (!isListener && !form.paperId.trim()) e.paperId = "Paper ID is required for presenters.";

    if (!form.transactionId.trim()) e.transactionId = "Transaction ID is required.";

    if (!form.receipt) e.receipt = "Please upload payment receipt (PDF/JPG/PNG).";
    if (form.receipt) {
      const okTypes = ["application/pdf", "image/jpeg", "image/png"];
      if (!okTypes.includes(form.receipt.type)) e.receipt = "Only PDF/JPG/PNG allowed.";
      const maxMB = 5;
      if (form.receipt.size > maxMB * 1024 * 1024)
        e.receipt = `File must be ≤ ${maxMB}MB.`;
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onCategoryChange = (value) => {
    const found = categories.find((c) => c.label === value);
    setForm((p) => ({
      ...p,
      category: value,
      registrationFee: found?.fee || p.registrationFee,
    }));
    setErrors((p) => ({ ...p, category: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      // scroll to first error
      const firstKey = Object.keys(errors)[0];
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    // simulate submit
    await new Promise((r) => setTimeout(r, 1200));

    const payload = {
      ...form,
      receipt: form.receipt
        ? {
            name: form.receipt.name,
            type: form.receipt.type,
            size: form.receipt.size,
          }
        : null,
      submittedAt: new Date().toISOString(),
    };

    console.log("✅ Registration Form Payload:", payload);

    setSubmitting(false);
    setSubmitted(true);

    // optional: reset
    // setForm((p) => ({ ...p, firstName:"", lastName:"", email:"", joiningMode:"", paperId:"", phone:"", institution:"", transactionId:"", receipt:null }));
  };

  const Field = ({ label, icon: Icon, error, children, hint }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-600">
          {label}
        </label>
        {error ? (
          <span className="text-xs font-semibold text-red-600">{error}</span>
        ) : null}
      </div>

      <div
        className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm transition-all ${
          error
            ? "border-red-300 ring-2 ring-red-100"
            : "border-slate-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20"
        }`}
      >
        {Icon ? <Icon className="h-5 w-5 text-[#11b3d4] shrink-0" /> : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header like your theme */}
        <div className="overflow-hidden rounded-[2rem] border border-primary/30 bg-white shadow-xl">
          <div className="bg-[#11b3d4] px-6 py-8 text-center text-white">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Conference Registration Form
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Fill in your details and upload your payment receipt to submit registration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            {/* Registration details */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-extrabold text-slate-900 mb-4">
                  Registration Details
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div data-field="category">
                    <Field
                      label="Category"
                      icon={ClipboardList}
                      error={errors.category}
                    >
                      <select
                        value={form.category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full bg-transparent outline-none text-slate-900"
                      >
                        {categories.map((c) => (
                          <option key={c.label} value={c.label}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div>
                    <Field label="Registration Fee" icon={CreditCard}>
                      <input
                        value={form.registrationFee}
                        readOnly
                        className="w-full bg-transparent outline-none font-bold text-[#11b3d4]"
                      />
                    </Field>
                  </div>
                </div>
              </div>

              {/* quick note */}
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 h-fit">
                <p className="text-sm font-extrabold text-slate-900">Quick Note</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Presenters must provide a Paper ID. Listeners can submit without Paper ID.
                  Please upload payment receipt (PDF/JPG/PNG).
                </p>
              </div>
            </div>

            {/* Personal information */}
            <div className="mt-10">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4">
                Personal Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div data-field="firstName">
                  <Field label="First Name" icon={User} error={errors.firstName}>
                    <input
                      value={form.firstName}
                      onChange={(e) => setValue("firstName", e.target.value)}
                      placeholder="First name"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="lastName">
                  <Field label="Last Name" icon={User} error={errors.lastName}>
                    <input
                      value={form.lastName}
                      onChange={(e) => setValue("lastName", e.target.value)}
                      placeholder="Last name"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="email">
                  <Field label="Email Address" icon={Mail} error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setValue("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="joiningMode">
                  <Field
                    label="Conference Joining Mode"
                    icon={ClipboardList}
                    error={errors.joiningMode}
                  >
                    <select
                      value={form.joiningMode}
                      onChange={(e) => setValue("joiningMode", e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-900"
                    >
                      <option value="">Select joining mode</option>
                      <option value="In-person">In-person</option>
                      <option value="Online">Online</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </Field>
                </div>

                <div data-field="paperId">
                  <Field
                    label="Paper ID"
                    icon={ClipboardList}
                    error={errors.paperId}
                    hint="Required for presenters. Not required for listeners."
                  >
                    <input
                      value={form.paperId}
                      onChange={(e) => setValue("paperId", e.target.value)}
                      placeholder="e.g., 2511022"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="phone">
                  <Field label="Phone Number" icon={Phone} error={errors.phone}>
                    <input
                      value={form.phone}
                      onChange={(e) => setValue("phone", e.target.value)}
                      placeholder="+91 98xxxxxxx"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* Institution */}
            <div className="mt-10">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4">
                Institution Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div data-field="institution">
                  <Field
                    label="Institution / Organization"
                    icon={Building2}
                    error={errors.institution}
                  >
                    <input
                      value={form.institution}
                      onChange={(e) => setValue("institution", e.target.value)}
                      placeholder="University / Company name"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="country">
                  <Field label="Country" icon={Globe} error={errors.country}>
                    <select
                      value={form.country}
                      onChange={(e) => setValue("country", e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-900"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10">
              <h3 className="text-sm font-extrabold text-slate-900 mb-4">
                Payment Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div data-field="transactionId">
                  <Field
                    label="Transaction ID"
                    icon={CreditCard}
                    error={errors.transactionId}
                    hint="Enter reference/UTR from your payment."
                  >
                    <input
                      value={form.transactionId}
                      onChange={(e) => setValue("transactionId", e.target.value)}
                      placeholder="UTR / Transaction reference"
                      className="w-full bg-transparent outline-none text-slate-900"
                    />
                  </Field>
                </div>

                <div data-field="receipt">
                  <Field
                    label="Upload Payment Receipt"
                    icon={Upload}
                    error={errors.receipt}
                    hint="Accepted: PDF, JPG, PNG (max 5MB)."
                  >
                    <input
                      type="file"
                      accept="application/pdf,image/jpeg,image/png"
                      onChange={(e) => setValue("receipt", e.target.files?.[0] || null)}
                      className="w-full text-sm"
                    />
                  </Field>

                  {form.receipt ? (
                    <p className="mt-2 text-xs text-slate-600">
                      Selected: <span className="font-semibold">{form.receipt.name}</span>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="
                  inline-flex w-full sm:w-auto items-center justify-center gap-3
                  rounded-2xl bg-[#11b3d4] px-8 py-4
                  font-extrabold text-white
                  shadow-lg shadow-primary/25
                  hover:bg-primary/90 hover:shadow-xl
                  transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                  
                    Submit Registration
                  </>
                )}
              </button>

   
              <p className="text-sm text-slate-600">
                On submit, validated data will be logged in console.
              </p>
            </div>

            {/* Success banner */}
            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-200 bg-[#11b3d4] p-5 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-extrabold text-slate-900">Submitted successfully</p>
                  <p className="text-sm text-slate-700">
                    Your registration data has been received. Please check console for payload.
                  </p>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
