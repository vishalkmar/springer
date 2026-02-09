// src/components/PaperSubmitForm.jsx
import React, { useMemo, useState } from "react";
import {
  FileText,
  User,
  Tags,
  Upload,
  ShieldCheck,
  HelpCircle,
  Phone,
  Info,
  Plus,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

/**
 * PaperSubmitForm.jsx (Theme: #11b3d4)
 * ✅ Single complete form (no duplicates)
 * ✅ Responsive + sectioned like your screenshots
 * ✅ Proper validation (required, email, urls, ORCID, file types, word counts)
 * ✅ Add co-authors (dynamic)
 * ✅ Submit -> validate -> loading -> console.log(payload)
 */

export default function PaperSubmitForm() {
  const THEME = "#11b3d4";

  // --- Options (edit as needed)
  const CONFERENCES = useMemo(() => ["ICSCPSIA", "ICSCPSIA"], []);
  const VENUES = useMemo(
    () => [
      "India International Centre, Lodhi Estate, New Delhi, India (22–23 January 2026)",
      "Tentative: 2–3 July 2026 (Venue to be announced)",
    ],
    []
  );

  const PRIMARY_AREAS = useMemo(
    () => [
      "Cyber-Physical & Smart Systems",
      "AI & Machine Learning for Systems",
      "Intelligent Analytics & Data-Driven Modeling",
      "Control, Automation & Robotics",
      "Energy, Transportation & Infrastructure Systems",
      "Interdisciplinary & Emerging Applications",
    ],
    []
  );

  const ADDITIONAL_AREAS = useMemo(
    () => [
      "Artificial Intelligence",
      "Data Science",
      "Cybersecurity",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Optimization",
      "Statistics",
      "Operations Research",
      "Business Analytics",
      "Information Systems",
    ],
    []
  );

  // --- Helpers
  const wc = (t) =>
    String(t || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const isPhone = (v) => /^[0-9+\-\s()]{7,20}$/.test(String(v).trim());
  const isORCID = (v) => {
    if (!String(v).trim()) return true; // optional
    return /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(String(v).trim());
  };
  const isURL = (v) => {
    if (!String(v).trim()) return true; // optional
    try {
      new URL(String(v).trim());
      return true;
    } catch {
      return false;
    }
  };

  const fileErr = (file, { required = false, types = [], maxMB = 20 } = {}) => {
    if (!file) return required ? "This file is required." : undefined;
    if (types.length && !types.includes(file.type))
      return "Invalid file type.";
    if (file.size > maxMB * 1024 * 1024) return `Max size: ${maxMB}MB.`;
    return undefined;
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-slate-900 bg-white outline-none transition-all";
  const focusOk = `focus:border-[var(--t)] focus:ring-2 focus:ring-[var(--t)]/20`;
  const borderOk = "border-slate-200";
  const borderErr = "border-red-300 ring-2 ring-red-100";

  const Section = ({ icon: Icon, title, subtitle, children }) => (
    <div className="pt-7">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${THEME}14`, color: THEME }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-extrabold text-slate-900">{title}</h3>
          {subtitle ? (
            <p className="text-xs text-slate-600 mt-0.5">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 h-px w-full" style={{ backgroundColor: `${THEME}55` }} />
      <div className="mt-6">{children}</div>
    </div>
  );

  const Field = ({ label, error, children, hint }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-600">
          {label}
        </label>
        {error ? (
          <span className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" /> {error}
          </span>
        ) : null}
      </div>
      {children}
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );

  const FileRow = ({ label, required, value, onChange, error, accept, note }) => (
    <Field label={`${label}${required ? " *" : ""}`} error={error} hint={note}>
      <div className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${error ? borderErr : borderOk}`}>
        <div className="flex items-center gap-2 text-slate-700 min-w-0">
          <Upload className="h-4 w-4 shrink-0" style={{ color: THEME }} />
          <span className="text-sm truncate">{value ? value.name : "Choose file"}</span>
        </div>
        <label
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-extrabold text-white shrink-0"
          style={{ backgroundColor: THEME }}
        >
          Browse
          <input
            type="file"
            className="hidden"
            accept={accept}
            onChange={(e) => onChange(e.target.files?.[0] || null)}
          />
        </label>
      </div>
    </Field>
  );

  // --- Form state
  const [form, setForm] = useState({
    // Conference Info
    conference: "ICSCPSIA",
    venueDate: VENUES[0],

    // Title & Abstract
    paperTitle: "",
    paperSubTitle: "",
    abstract: "",
    keywords: "",

    // Author Info (primary)
    primaryAuthor: {
      fullName: "",
      email: "",
      institutionName: "",
      institutionAddress: "",
      affiliationUniversity: "",
      biography: "",
      country: "India",
      orcid: "",
      corresponding: true,
    },
    coAuthors: [], // { fullName, email, institution, country, orcid }

    // Subject Areas
    primaryArea: "",
    additionalAreas: [],

    // Uploads
    paperPdf: null,
    paperDoc: null,
    video: null,
    supplementary: null,
    sourceCode: null,

    // Declarations (checkboxes)
    declarations: {
      ethics: false,
      dataset: false,
      conflicts: false,
    },

    // Supplementary Questions
    supplementaryQ: {
      preprint: false,
      submittedElsewhere: false,
      serveAsReviewer: false,
      aiGenerated: false,
      studentPaper: false,
    },

    // Agreement to terms
    agreements: {
      policies: false,
      present: false,
      copyright: false,
      peerReview: false,
      anonymizedData: false,
    },

    // Contact Info
    phone: "",
    additionalComments: "",
    referralCode: "",
  });

  const setValue = (path, value) => {
    setForm((p) => {
      const next = structuredClone(p);
      const keys = path.split(".");
      let cur = next;
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
      cur[keys[keys.length - 1]] = value;
      return next;
    });
    setErrors((p) => ({ ...p, [path]: undefined }));
    setSubmitted(false);
  };

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const addCoAuthor = () => {
    setForm((p) => ({
      ...p,
      coAuthors: [
        ...p.coAuthors,
        { fullName: "", email: "", institution: "", country: "", orcid: "" },
      ],
    }));
  };
  const removeCoAuthor = (idx) => {
    setForm((p) => ({
      ...p,
      coAuthors: p.coAuthors.filter((_, i) => i !== idx),
    }));
  };

  const abstractWords = wc(form.abstract);
  const bioWords = wc(form.primaryAuthor.biography);

  // --- Validation
  const validate = () => {
    const e = {};

    // Conference
    if (!form.conference) e["conference"] = "Select a conference.";
    if (!form.venueDate) e["venueDate"] = "Select conference place & date.";

    // Title & Abstract
    if (!form.paperTitle.trim()) e["paperTitle"] = "Paper title is required.";
    if (!form.abstract.trim()) e["abstract"] = "Abstract is required (250–500 words).";
    if (form.abstract.trim()) {
      if (abstractWords < 250) e["abstract"] = "Minimum 250 words required.";
      if (abstractWords > 500) e["abstract"] = "Maximum 500 words allowed.";
    }
    if (!form.keywords.trim()) e["keywords"] = "Keywords are required.";
    if (form.keywords.trim()) {
      const parts = form.keywords
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);
      if (parts.length < 3) e["keywords"] = "Enter at least 3 keywords (comma separated).";
    }

    // Primary Author
    const A = form.primaryAuthor;
    if (!A.fullName.trim()) e["primaryAuthor.fullName"] = "Full name is required.";
    if (!A.email.trim()) e["primaryAuthor.email"] = "Email is required.";
    if (A.email.trim() && !isEmail(A.email)) e["primaryAuthor.email"] = "Enter a valid email.";
    if (!A.institutionName.trim()) e["primaryAuthor.institutionName"] = "Institution name is required.";
    if (!A.institutionAddress.trim()) e["primaryAuthor.institutionAddress"] = "Institution address is required.";
    if (!A.affiliationUniversity.trim()) e["primaryAuthor.affiliationUniversity"] = "Affiliation university is required.";
    if (!A.biography.trim()) e["primaryAuthor.biography"] = "Author biography is required (50–200 words).";
    if (A.biography.trim()) {
      if (bioWords < 50) e["primaryAuthor.biography"] = "Minimum 50 words required.";
      if (bioWords > 200) e["primaryAuthor.biography"] = "Maximum 200 words allowed.";
    }
    if (!A.country.trim()) e["primaryAuthor.country"] = "Country is required.";
    if (!isORCID(A.orcid)) e["primaryAuthor.orcid"] = "ORCID format: 0000-0000-0000-0000";

    // Co-authors (optional, but if row exists validate filled fields)
    form.coAuthors.forEach((c, idx) => {
      const base = `coAuthors.${idx}`;
      const anyFilled =
        c.fullName.trim() || c.email.trim() || c.institution.trim() || c.country.trim() || c.orcid.trim();
      if (!anyFilled) return;
      if (!c.fullName.trim()) e[`${base}.fullName`] = "Name required.";
      if (!c.email.trim()) e[`${base}.email`] = "Email required.";
      if (c.email.trim() && !isEmail(c.email)) e[`${base}.email`] = "Invalid email.";
      if (!c.institution.trim()) e[`${base}.institution`] = "Institution required.";
      if (!c.country.trim()) e[`${base}.country`] = "Country required.";
      if (!isORCID(c.orcid)) e[`${base}.orcid`] = "Invalid ORCID.";
    });

    // Subject areas
    if (!form.primaryArea) e["primaryArea"] = "Select primary subject area.";

    // Uploads
    const pdfE = fileErr(form.paperPdf, {
      required: true,
      types: ["application/pdf"],
      maxMB: 20,
    });
    if (pdfE) e["paperPdf"] = "Paper file (PDF) is required. (PDF only, ≤20MB)";

    const docE = fileErr(form.paperDoc, {
      required: true,
      types: [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      maxMB: 20,
    });
    if (docE) e["paperDoc"] = "Paper file (DOC/DOCX) is required. (DOC/DOCX only, ≤20MB)";

    const videoE = fileErr(form.video, { required: false, maxMB: 200 });
    if (videoE) e["video"] = "Video too large / invalid.";

    const suppE = fileErr(form.supplementary, { required: false, maxMB: 50 });
    if (suppE) e["supplementary"] = "Supplementary file too large / invalid.";

    const srcE = fileErr(form.sourceCode, { required: false, maxMB: 50 });
    if (srcE) e["sourceCode"] = "Source code file too large / invalid.";

    // Agreements (required)
    const Ag = form.agreements;
    const requiredAg = ["policies", "present", "copyright", "peerReview", "anonymizedData"];
    requiredAg.forEach((k) => {
      if (!Ag[k]) e[`agreements.${k}`] = "Required";
    });

    // Contact
    if (!form.phone.trim()) e["phone"] = "Phone is required.";
    if (form.phone.trim() && !isPhone(form.phone)) e["phone"] = "Enter a valid phone number.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));

    const payload = {
      ...form,
      abstractWordCount: abstractWords,
      biographyWordCount: bioWords,
      files: {
        paperPdf: form.paperPdf ? { name: form.paperPdf.name, type: form.paperPdf.type, size: form.paperPdf.size } : null,
        paperDoc: form.paperDoc ? { name: form.paperDoc.name, type: form.paperDoc.type, size: form.paperDoc.size } : null,
        video: form.video ? { name: form.video.name, type: form.video.type, size: form.video.size } : null,
        supplementary: form.supplementary
          ? { name: form.supplementary.name, type: form.supplementary.type, size: form.supplementary.size }
          : null,
        sourceCode: form.sourceCode
          ? { name: form.sourceCode.name, type: form.sourceCode.type, size: form.sourceCode.size }
          : null,
      },
      submittedAt: new Date().toISOString(),
    };

    console.log("✅ Paper Submission Payload:", payload);

    setSubmitting(false);
    setSubmitted(true);
  };

  // --- UI
  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-8 py-6 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Online Paper Submission
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Submit your conference papers using the form below. All required fields must be valid to submit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-10">
            {/* Conference Information */}
            <Section icon={Info} title="Conference Information">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Select Conference *" error={errors["conference"]}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["conference"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.conference}
                    onChange={(e) => setValue("conference", e.target.value)}
                  >
                    {CONFERENCES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Conference Place & Date *" error={errors["venueDate"]}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["venueDate"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.venueDate}
                    onChange={(e) => setValue("venueDate", e.target.value)}
                  >
                    {VENUES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </Section>

            {/* Title & Abstract */}
            <Section icon={FileText} title="Title and Abstract">
              <div className="space-y-6">
                <Field label="Paper Title *" error={errors["paperTitle"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["paperTitle"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.paperTitle}
                    onChange={(e) => setValue("paperTitle", e.target.value)}
                    placeholder="Enter the full title of your paper"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Use a clear, descriptive title that reflects your research.
                  </p>
                </Field>

                <Field label="Paper Sub-title" error={errors["paperSubTitle"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["paperSubTitle"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.paperSubTitle}
                    onChange={(e) => setValue("paperSubTitle", e.target.value)}
                    placeholder="Enter the full sub-title of your paper (optional)"
                  />
                </Field>

                <Field
                  label="Abstract * (250–500 words)"
                  error={errors["abstract"]}
                  hint={`Word count: ${abstractWords}/500`}
                >
                  <textarea
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["abstract"] ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                    rows={7}
                    value={form.abstract}
                    onChange={(e) => setValue("abstract", e.target.value)}
                    placeholder="Provide a comprehensive summary including background, objectives, methodology, results, and conclusions (250–500 words)"
                  />
                </Field>

                <Field
                  label="Keywords *"
                  error={errors["keywords"]}
                  hint="Enter 3–8 keywords separated by commas (e.g., machine learning, data science, algorithms)."
                >
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["keywords"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.keywords}
                    onChange={(e) => setValue("keywords", e.target.value)}
                    placeholder="Enter keywords separated by commas"
                  />
                </Field>
              </div>
            </Section>

            {/* Author Information */}
            <Section icon={User} title="Author Information" subtitle="Primary author details">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Primary Author Full Name *" error={errors["primaryAuthor.fullName"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.fullName"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.fullName}
                    onChange={(e) => setValue("primaryAuthor.fullName", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </Field>

                <Field label="Primary Author Email Address *" error={errors["primaryAuthor.email"]}>
                  <input
                    type="email"
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.email"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.email}
                    onChange={(e) => setValue("primaryAuthor.email", e.target.value)}
                    placeholder="Enter your email address"
                  />
                </Field>

                <Field label="Institution Name *" error={errors["primaryAuthor.institutionName"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.institutionName"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.institutionName}
                    onChange={(e) => setValue("primaryAuthor.institutionName", e.target.value)}
                    placeholder="Enter your institution/organization"
                  />
                </Field>

                <Field label="Institution Address *" error={errors["primaryAuthor.institutionAddress"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.institutionAddress"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.institutionAddress}
                    onChange={(e) => setValue("primaryAuthor.institutionAddress", e.target.value)}
                    placeholder="Enter your institution address"
                  />
                </Field>

                <Field label="Affiliation University *" error={errors["primaryAuthor.affiliationUniversity"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.affiliationUniversity"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.affiliationUniversity}
                    onChange={(e) => setValue("primaryAuthor.affiliationUniversity", e.target.value)}
                    placeholder="Enter your affiliation university"
                  />
                </Field>

                <Field label="Country *" error={errors["primaryAuthor.country"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.country"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.country}
                    onChange={(e) => setValue("primaryAuthor.country", e.target.value)}
                    placeholder="Country"
                  />
                </Field>

                <Field label="ORCID ID (Optional)" error={errors["primaryAuthor.orcid"]} hint="Format: 0000-0000-0000-0000">
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryAuthor.orcid"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryAuthor.orcid}
                    onChange={(e) => setValue("primaryAuthor.orcid", e.target.value)}
                    placeholder="e.g., 0000-0000-0000-0000"
                  />
                </Field>

                <div className="md:col-span-2">
                  <Field
                    label="Author Biography * (50–200 words)"
                    error={errors["primaryAuthor.biography"]}
                    hint={`Word count: ${bioWords}/200`}
                  >
                    <textarea
                      style={{ ["--t"]: THEME }}
                      className={`${inputBase} ${errors["primaryAuthor.biography"] ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                      rows={5}
                      value={form.primaryAuthor.biography}
                      onChange={(e) => setValue("primaryAuthor.biography", e.target.value)}
                      placeholder="Write your biography (50–200 words)"
                    />
                  </Field>
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.primaryAuthor.corresponding}
                      onChange={(e) => setValue("primaryAuthor.corresponding", e.target.checked)}
                      className="h-4 w-4"
                      style={{ accentColor: THEME }}
                    />
                    Corresponding Author
                  </label>
                </div>
              </div>

              {/* Co-authors */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-extrabold text-slate-900">Co-authors (Optional)</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Add up to 5 co-authors. Each co-author will receive a submission confirmation.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addCoAuthor}
                    disabled={form.coAuthors.length >= 5}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-extrabold text-white disabled:opacity-60"
                    style={{ backgroundColor: THEME }}
                  >
                    <Plus className="h-4 w-4" />
                    Add Co-author
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {form.coAuthors.map((c, idx) => (
                    <div key={idx} className="rounded-2xl bg-white border border-slate-200 p-4">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="font-extrabold text-slate-900">Co-author #{idx + 1}</p>
                        <button
                          type="button"
                          onClick={() => removeCoAuthor(idx)}
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-100"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Field label="Full Name" error={errors[`coAuthors.${idx}.fullName`]}>
                          <input
                            style={{ ["--t"]: THEME }}
                            className={`${inputBase} ${errors[`coAuthors.${idx}.fullName`] ? borderErr : `${borderOk} ${focusOk}`}`}
                            value={c.fullName}
                            onChange={(e) => {
                              const next = [...form.coAuthors];
                              next[idx] = { ...next[idx], fullName: e.target.value };
                              setValue("coAuthors", next);
                            }}
                            placeholder="Full name"
                          />
                        </Field>
                        <Field label="Email" error={errors[`coAuthors.${idx}.email`]}>
                          <input
                            type="email"
                            style={{ ["--t"]: THEME }}
                            className={`${inputBase} ${errors[`coAuthors.${idx}.email`] ? borderErr : `${borderOk} ${focusOk}`}`}
                            value={c.email}
                            onChange={(e) => {
                              const next = [...form.coAuthors];
                              next[idx] = { ...next[idx], email: e.target.value };
                              setValue("coAuthors", next);
                            }}
                            placeholder="Email"
                          />
                        </Field>
                        <Field label="Institution" error={errors[`coAuthors.${idx}.institution`]}>
                          <input
                            style={{ ["--t"]: THEME }}
                            className={`${inputBase} ${errors[`coAuthors.${idx}.institution`] ? borderErr : `${borderOk} ${focusOk}`}`}
                            value={c.institution}
                            onChange={(e) => {
                              const next = [...form.coAuthors];
                              next[idx] = { ...next[idx], institution: e.target.value };
                              setValue("coAuthors", next);
                            }}
                            placeholder="Institution"
                          />
                        </Field>
                        <Field label="Country" error={errors[`coAuthors.${idx}.country`]}>
                          <input
                            style={{ ["--t"]: THEME }}
                            className={`${inputBase} ${errors[`coAuthors.${idx}.country`] ? borderErr : `${borderOk} ${focusOk}`}`}
                            value={c.country}
                            onChange={(e) => {
                              const next = [...form.coAuthors];
                              next[idx] = { ...next[idx], country: e.target.value };
                              setValue("coAuthors", next);
                            }}
                            placeholder="Country"
                          />
                        </Field>
                        <Field label="ORCID (Optional)" error={errors[`coAuthors.${idx}.orcid`]} hint="0000-0000-0000-0000">
                          <input
                            style={{ ["--t"]: THEME }}
                            className={`${inputBase} ${errors[`coAuthors.${idx}.orcid`] ? borderErr : `${borderOk} ${focusOk}`}`}
                            value={c.orcid}
                            onChange={(e) => {
                              const next = [...form.coAuthors];
                              next[idx] = { ...next[idx], orcid: e.target.value };
                              setValue("coAuthors", next);
                            }}
                            placeholder="ORCID"
                          />
                        </Field>
                      </div>
                    </div>
                  ))}

                  {form.coAuthors.length === 0 ? (
                    <div className="text-sm text-slate-600">
                      No co-authors added.
                    </div>
                  ) : null}
                </div>
              </div>
            </Section>

            {/* Subject Areas */}
            <Section icon={Tags} title="Subject Areas / Topics">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Primary Subject Area *" error={errors["primaryArea"]}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["primaryArea"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.primaryArea}
                    onChange={(e) => setValue("primaryArea", e.target.value)}
                  >
                    <option value="">Choose the primary subject area</option>
                    {PRIMARY_AREAS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-2">
                    This will be used for full review assignment and session planning.
                  </p>
                </Field>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    Additional Subject Areas (Optional)
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Select all that apply to your research.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ADDITIONAL_AREAS.map((x) => {
                      const checked = form.additionalAreas.includes(x);
                      return (
                        <label
                          key={x}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm cursor-pointer transition-all ${
                            checked ? "bg-white" : "bg-slate-50"
                          }`}
                          style={{
                            borderColor: checked ? `${THEME}66` : "#e2e8f0",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              const next = e.target.checked
                                ? [...form.additionalAreas, x]
                                : form.additionalAreas.filter((a) => a !== x);
                              setValue("additionalAreas", next);
                            }}
                            className="h-4 w-4"
                            style={{ accentColor: THEME }}
                          />
                          <span className="text-slate-700">{x}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>

            {/* File Upload */}
            <Section
              icon={Upload}
              title="File Upload"
              subtitle="Ensure files are properly formatted and within size limits."
            >
              <div className="grid md:grid-cols-2 gap-6">
                <FileRow
                  label="Paper File (PDF Only)"
                  required
                  value={form.paperPdf}
                  onChange={(f) => setValue("paperPdf", f)}
                  error={errors["paperPdf"]}
                  accept="application/pdf,.pdf"
                  note="Upload your paper in PDF format only (max 20MB)."
                />

                <FileRow
                  label="Paper File (DOC/DOCX Only)"
                  required
                  value={form.paperDoc}
                  onChange={(f) => setValue("paperDoc", f)}
                  error={errors["paperDoc"]}
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  note="Upload your paper in DOC/DOCX format only (max 20MB)."
                />

                <FileRow
                  label="Upload Zip Folder"
                  required={false}
                  value={form.video}
                  onChange={(f) => setValue("video", f)}
                  error={errors["video"]}
                  accept=".zip,application/zip,application/x-zip-compressed"
                  note="Optional: Upload ZIP if you have additional materials (max 200MB)."
                />

                <FileRow
                  label="Supplementary Material (Optional)"
                  required={false}
                  value={form.supplementary}
                  onChange={(f) => setValue("supplementary", f)}
                  error={errors["supplementary"]}
                  accept=".pdf,.zip,.rar,.doc,.docx,.csv,.xlsx,.png,.jpg,.jpeg"
                  note="Additional data, code, appendices, or extended results (max 50MB)."
                />

                <div className="md:col-span-2">
                  <FileRow
                    label="Source Code / Reproducibility Artifacts (Optional)"
                    required={false}
                    value={form.sourceCode}
                    onChange={(f) => setValue("sourceCode", f)}
                    error={errors["sourceCode"]}
                    accept=".zip,.rar,.7z,.tar,.gz,.pdf,.md"
                    note="Optional: Source code, dataset, scripts, and reproducibility files (max 50MB)."
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-extrabold" style={{ color: THEME }}>
                  File Requirements:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-600">
                  <li>All files should be properly named and virus-free.</li>
                  <li>Large files may take longer to upload.</li>
                  <li>Ensure your paper is properly formatted and includes all sections.</li>
                </ul>
              </div>
            </Section>

            {/* Additional Declarations */}
            <Section icon={ShieldCheck} title="Additional Declarations" subtitle="Select for 'Yes' and leave blank for 'No'">
              <div className="space-y-3">
                {[
                  { k: "ethics", t: "I confirm that this research complies with ethical standards and guidelines, including data privacy and human subject protection where applicable." },
                  { k: "dataset", t: "I confirm that datasets and code used in this research are available for reproducibility (if applicable)." },
                  { k: "conflicts", t: "I declare that there are no conflicts of interest related to this submission." },
                ].map((x) => (
                  <label key={x.k} className="flex items-start gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.declarations[x.k]}
                      onChange={(e) => setValue(`declarations.${x.k}`, e.target.checked)}
                      className="mt-1 h-4 w-4"
                      style={{ accentColor: THEME }}
                    />
                    <span>{x.t}</span>
                  </label>
                ))}
              </div>
            </Section>

            {/* Supplementary Questions */}
            <Section icon={HelpCircle} title="Supplementary Questions" subtitle="Select for 'Yes' and leave blank for 'No'">
              <div className="space-y-3">
                {[
                  { k: "preprint", t: "Has this work been previously published as a preprint (e.g., arXiv, bioRxiv, etc.)?" },
                  { k: "submittedElsewhere", t: "Has this paper been previously submitted to another conference or journal?" },
                  { k: "serveAsReviewer", t: "Are you willing to serve as a reviewer for this conference?" },
                  { k: "aiGenerated", t: "Does this submission include any AI-generated content?" },
                  { k: "studentPaper", t: "Is this a student paper (primary author is a student)?" },
                ].map((x) => (
                  <label key={x.k} className="flex items-start gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.supplementaryQ[x.k]}
                      onChange={(e) => setValue(`supplementaryQ.${x.k}`, e.target.checked)}
                      className="mt-1 h-4 w-4"
                      style={{ accentColor: THEME }}
                    />
                    <span>{x.t}</span>
                  </label>
                ))}
              </div>
            </Section>

            {/* Agreement to Terms */}
            <Section icon={ShieldCheck} title="Agreement to Terms" subtitle="All items below are required">
              <div className="space-y-4">
                {[
                  { k: "policies", t: "I agree to the submission policies, deadlines, and formatting rules of ICSCPSIA." },
                  { k: "present", t: "I confirm that if accepted, at least one author will present the paper at the conference." },
                  { k: "copyright", t: "I agree to the publication terms and copyright transfer if the paper is accepted." },
                  { k: "peerReview", t: "I understand that my paper will undergo peer review and I agree to address reviewer comments if requested." },
                  { k: "anonymizedData", t: "I agree to share anonymized data and code for reproducibility purposes if requested by reviewers." },
                ].map((x) => (
                  <div key={x.k} className="flex items-start justify-between gap-4">
                    <label className="flex items-start gap-3 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={form.agreements[x.k]}
                        onChange={(e) => setValue(`agreements.${x.k}`, e.target.checked)}
                        className="mt-1 h-4 w-4"
                        style={{ accentColor: THEME }}
                      />
                      <span>{x.t}</span>
                    </label>

                    {errors[`agreements.${x.k}`] ? (
                      <span className="text-xs font-extrabold text-red-600 shrink-0">
                        Required
                      </span>
                    ) : null}
                  </div>
                ))}

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  <p className="font-extrabold">Important:</p>
                  <p className="mt-1">
                    By submitting this form, you acknowledge that all information provided is accurate and complete.
                    False or misleading information may result in rejection of your submission.
                  </p>
                </div>
              </div>
            </Section>

            {/* Contact Information */}
            <Section icon={Phone} title="Contact Information">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Phone Number *" error={errors["phone"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["phone"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.phone}
                    onChange={(e) => setValue("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </Field>

                <Field label="Referral Code (Optional)" error={errors["referralCode"]}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors["referralCode"] ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.referralCode}
                    onChange={(e) => setValue("referralCode", e.target.value)}
                    placeholder="Enter referral code (if you have one)"
                  />
                </Field>

                <div className="md:col-span-2">
                  <Field label="Additional Comments (Optional)" error={errors["additionalComments"]}>
                    <textarea
                      style={{ ["--t"]: THEME }}
                      className={`${inputBase} ${errors["additionalComments"] ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                      rows={4}
                      value={form.additionalComments}
                      onChange={(e) => setValue("additionalComments", e.target.value)}
                      placeholder="Any additional information or special requests..."
                    />
                  </Field>
                </div>
              </div>

              {/* Tips box */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${THEME}14`, color: THEME }}
                  >
                    <Info className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <p className="font-extrabold text-slate-900">Submission Tips</p>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-600">
                      <li>Paper title must be clear and descriptive.</li>
                      <li>Abstract should be between 250–500 words.</li>
                      <li>Upload PDF and DOC/DOCX (both required).</li>
                      <li>Use a stable internet connection for uploads.</li>
                      <li>If submission fails, try refreshing and re-submitting.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>

            {/* Submit */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl px-10 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: THEME,
                  boxShadow: "0 14px 30px rgba(17,179,212,0.28)",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Paper / Abstract"
                )}
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-extrabold text-slate-900">Submitted Successfully</p>
                  <p className="text-sm text-slate-700">
                    Form data has been logged in console (payload).
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
