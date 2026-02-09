import React, { useMemo, useState } from "react";

/**
 * Reviewer / Session Chair Registration Form (Theme: #11b3d4 + white)
 * - Full validation
 * - File upload (PDF/DOC/DOCX)
 * - Submit -> console.log(payload)
 * - Loading state
 * - Clear button resets
 */

const THEME = "#11b3d4";

const ROLE_OPTIONS = [
  { value: "", label: "Select role" },
  { value: "Reviewer", label: "Reviewer" },
  { value: "Session Chair", label: "Session Chair" },
  { value: "Reviewer & Session Chair", label: "Reviewer & Session Chair" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const countWords = (s = "") =>
  s
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-rose-600">{msg}</p>;
}

export default function ReviewerSessionChairForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentJobTitle: "",
    institution: "",
    role: "",
    education: "",
    subjectAreas: "",
    methodologicalExpertise: "",
    researchInterests: "",
    peerReviewExperience: "",
    conflictOfInterest: "",
    cvFile: null, // File
  });

  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const e = {};

    // Required
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email.";

    if (!form.phone.trim()) e.phone = "Phone is required.";
    else if (form.phone.replace(/\D/g, "").length < 8)
      e.phone = "Enter a valid phone number.";

    if (!form.currentJobTitle.trim()) e.currentJobTitle = "Current job title is required.";
    if (!form.institution.trim()) e.institution = "Institution/Organization is required.";
    if (!form.role) e.role = "Please select a role.";

    // Helpful minimums (not too strict)
    if (!form.education.trim()) e.education = "Education details are required.";
    if (!form.subjectAreas.trim()) e.subjectAreas = "Subject areas are required.";
    if (!form.methodologicalExpertise.trim())
      e.methodologicalExpertise = "Methodological expertise is required.";
    if (!form.researchInterests.trim())
      e.researchInterests = "Research/subject interests are required.";

    // File (optional but validated if chosen)
    if (form.cvFile) {
      const okTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxBytes = 10 * 1024 * 1024; // 10MB
      if (!okTypes.includes(form.cvFile.type)) e.cvFile = "Upload only PDF/DOC/DOCX.";
      else if (form.cvFile.size > maxBytes) e.cvFile = "File must be under 10MB.";
    }

    return e;
  }, [form]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const setValue = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  const markTouched = (key) => setTouched((p) => ({ ...p, [key]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();

    // mark all as touched to show errors
    setTouched({
      name: true,
      email: true,
      phone: true,
      currentJobTitle: true,
      institution: true,
      role: true,
      education: true,
      subjectAreas: true,
      methodologicalExpertise: true,
      researchInterests: true,
      peerReviewExperience: true,
      conflictOfInterest: true,
      cvFile: true,
    });

    if (!isValid) return;

    setLoading(true);

    // Simulate submit
    setTimeout(() => {
      const payload = {
        ...form,
        cvFile: form.cvFile
          ? { name: form.cvFile.name, type: form.cvFile.type, size: form.cvFile.size }
          : null,
        meta: {
          educationWords: countWords(form.education),
          researchInterestsWords: countWords(form.researchInterests),
        },
      };

      console.log("Reviewer/Session Chair Form Submission:", payload);
      setLoading(false);

      // Reset
      setForm({
        name: "",
        email: "",
        phone: "",
        currentJobTitle: "",
        institution: "",
        role: "",
        education: "",
        subjectAreas: "",
        methodologicalExpertise: "",
        researchInterests: "",
        peerReviewExperience: "",
        conflictOfInterest: "",
        cvFile: null,
      });
      setTouched({});
    }, 900);
  };

  const onClear = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      currentJobTitle: "",
      institution: "",
      role: "",
      education: "",
      subjectAreas: "",
      methodologicalExpertise: "",
      researchInterests: "",
      peerReviewExperience: "",
      conflictOfInterest: "",
      cvFile: null,
    });
    setTouched({});
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Top Bar */}
          <div
            className="px-6 sm:px-10 py-6 text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(17,179,212,1) 0%, rgba(15,160,195,1) 70%, rgba(15,160,195,1) 100%)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Reviewer / Session Chair Details
                </h2>
                <p className="mt-1 text-white/90 text-sm">
                  Please fill your details to register as a Reviewer or Session Chair.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M4 10h16" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="px-6 sm:px-10 py-8">
            {/* Grid: top fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Name <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setValue("name", e.target.value)}
                  onBlur={() => markTouched("name")}
                  placeholder="Your full name"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.name && errors.name ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Please enter your title/honours and surname.
                </p>
                <FieldError msg={touched.name ? errors.name : ""} />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setValue("email", e.target.value)}
                  onBlur={() => markTouched("email")}
                  placeholder="you@example.com"
                  type="email"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.email && errors.email ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  We will contact you if we receive applications suitable for your skills and experience.
                </p>
                <FieldError msg={touched.email ? errors.email : ""} />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Phone <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => setValue("phone", e.target.value)}
                  onBlur={() => markTouched("phone")}
                  placeholder="e.g. +91 9876543210"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.phone && errors.phone ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  We will contact you if we receive applications suitable for your skills and experience.
                </p>
                <FieldError msg={touched.phone ? errors.phone : ""} />
              </div>

              {/* Current Job Title */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Current Job Title <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.currentJobTitle}
                  onChange={(e) => setValue("currentJobTitle", e.target.value)}
                  onBlur={() => markTouched("currentJobTitle")}
                  placeholder="e.g. Associate Professor"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.currentJobTitle && errors.currentJobTitle ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <FieldError msg={touched.currentJobTitle ? errors.currentJobTitle : ""} />
              </div>

              {/* Institution */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Institution / Organization <span className="text-rose-600">*</span>
                </label>
                <input
                  value={form.institution}
                  onChange={(e) => setValue("institution", e.target.value)}
                  onBlur={() => markTouched("institution")}
                  placeholder="Your institution / organization"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.institution && errors.institution ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <FieldError msg={touched.institution ? errors.institution : ""} />
              </div>

              {/* Role */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  You want to Register As <span className="text-rose-600">*</span>
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setValue("role", e.target.value)}
                  onBlur={() => markTouched("role")}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.role && errors.role ? "border-rose-300" : "border-slate-200"}
                  `}
                >
                  {ROLE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-slate-500">
                  Choose whether you wish to serve as a Reviewer or as a Session Chair.
                </p>
                <FieldError msg={touched.role ? errors.role : ""} />
              </div>
            </div>

            {/* Long text fields */}
            <div className="mt-8 grid grid-cols-1 gap-6">
              {/* Education */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Education <span className="text-rose-600">*</span>
                </label>
                <textarea
                  value={form.education}
                  onChange={(e) => setValue("education", e.target.value)}
                  onBlur={() => markTouched("education")}
                  rows={3}
                  placeholder="List degrees (comma separated) e.g., PhD in CS, MSc AI"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.education && errors.education ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  List your undergraduate and postgraduate degrees and specify whether you have completed a doctorate.
                </p>
                <FieldError msg={touched.education ? errors.education : ""} />
              </div>

              {/* Subject Areas */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Subject Areas <span className="text-rose-600">*</span>
                </label>
                <textarea
                  value={form.subjectAreas}
                  onChange={(e) => setValue("subjectAreas", e.target.value)}
                  onBlur={() => markTouched("subjectAreas")}
                  rows={3}
                  placeholder="e.g., Cybersecurity, Artificial Intelligence, IoT, Machine Learning, Organizational Behavior"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.subjectAreas && errors.subjectAreas ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  For example: Cybersecurity, Artificial Intelligence, IoT, Machine Learning.
                </p>
                <FieldError msg={touched.subjectAreas ? errors.subjectAreas : ""} />
              </div>

              {/* Methodological Expertise */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Methodological Expertise <span className="text-rose-600">*</span>
                </label>
                <textarea
                  value={form.methodologicalExpertise}
                  onChange={(e) => setValue("methodologicalExpertise", e.target.value)}
                  onBlur={() => markTouched("methodologicalExpertise")}
                  rows={3}
                  placeholder="e.g., Quantitative research, Qualitative research"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.methodologicalExpertise && errors.methodologicalExpertise ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  For example: quantitative research, qualitative research.
                </p>
                <FieldError msg={touched.methodologicalExpertise ? errors.methodologicalExpertise : ""} />
              </div>

              {/* Research Interests */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Research / Subject Interests <span className="text-rose-600">*</span>
                </label>
                <textarea
                  value={form.researchInterests}
                  onChange={(e) => setValue("researchInterests", e.target.value)}
                  onBlur={() => markTouched("researchInterests")}
                  rows={3}
                  placeholder="Comma-separated values or a short description"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.researchInterests && errors.researchInterests ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Please include details of your research and/or teaching interests.
                </p>
                <FieldError msg={touched.researchInterests ? errors.researchInterests : ""} />
              </div>

              {/* Previous Peer Review Experience */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Previous Peer Review Experience
                </label>
                <textarea
                  value={form.peerReviewExperience}
                  onChange={(e) => setValue("peerReviewExperience", e.target.value)}
                  onBlur={() => markTouched("peerReviewExperience")}
                  rows={3}
                  placeholder="Briefly describe any review experience"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.peerReviewExperience && errors.peerReviewExperience ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Not essential; if applicable briefly detail any experience (e.g., grants, journal articles, student projects).
                </p>
              </div>

              {/* Conflict of Interest */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Conflict of Interest
                </label>
                <textarea
                  value={form.conflictOfInterest}
                  onChange={(e) => setValue("conflictOfInterest", e.target.value)}
                  onBlur={() => markTouched("conflictOfInterest")}
                  rows={3}
                  placeholder="List institutions/organizations that could be conflicts"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 bg-white outline-none transition resize-y
                    focus:ring-2 focus:ring-[rgba(17,179,212,.25)]
                    ${touched.conflictOfInterest && errors.conflictOfInterest ? "border-rose-300" : "border-slate-200"}
                  `}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Do not act as a reviewer if a conflict exists. Also list any such institutions/organizations.
                </p>
              </div>

              {/* Upload */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  Upload your CV (PDF/DOC/DOCX)
                </label>

                <div
                  className={`mt-2 rounded-xl border bg-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3
                    ${touched.cvFile && errors.cvFile ? "border-rose-300" : "border-slate-200"}
                  `}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setValue("cvFile", e.target.files?.[0] || null)}
                    onBlur={() => markTouched("cvFile")}
                    className="block w-full text-sm text-slate-600
                      file:mr-4 file:rounded-lg file:border-0 file:px-4 file:py-2
                      file:text-xs file:font-extrabold file:uppercase file:tracking-widest
                      file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                  />
                  {form.cvFile ? (
                    <span className="text-xs font-semibold text-slate-700">
                      {form.cvFile.name}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500">No file chosen</span>
                  )}
                </div>

                <p className="mt-1 text-[11px] text-slate-500">Accepted formats: PDF, DOC, DOCX (Max 10MB).</p>
                <FieldError msg={touched.cvFile ? errors.cvFile : ""} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="submit"
                disabled={!isValid || loading}
                className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold
                  transition shadow-sm
                  ${!isValid || loading ? "opacity-60 cursor-not-allowed" : "hover:brightness-95"}
                `}
                style={{
                  backgroundColor: THEME,
                  color: "white",
                  boxShadow: "0 10px 25px rgba(17,179,212,.18)",
                }}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-white animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Form"
                )}
              </button>

              <button
                type="button"
                onClick={onClear}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold
                  border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
              >
                Clear
              </button>

              {!isValid && (
                <p className="sm:ml-auto text-xs text-slate-500">
                  Please complete required fields to enable submission.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
