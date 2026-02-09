import React, { useMemo, useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Mic,
  Lightbulb,
  Globe,
  Upload,
  Info,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

/**
 * KeynoteRegistrationForm (Theme: #11b3d4)
 * ✅ Single form (no duplicates)
 * ✅ Sectioned layout like your screenshots
 * ✅ Required validation + email/url + number checks
 * ✅ Keynote abstract word count (100–500)
 * ✅ File inputs (CV required, photo optional, sample optional)
 * ✅ Submit -> validates -> loading -> console.log(all data)
 */

export default function KeynoteRegistrationForm() {
  const THEME = "#11b3d4";

  const EXPERTISE = useMemo(
    () => [
      "AI & Machine Learning",
      "Cyber-Physical Systems",
      "Intelligent Analytics",
      "IoT & Sensor Networks",
      "Robotics & Automation",
      "Smart Grid & Energy Systems",
      "Healthcare & Bioinformatics",
      "Security & Privacy",
      "Data Science & Big Data",
      "Other",
    ],
    []
  );

  const SESSION_TIMES = useMemo(
    () => ["Morning", "Afternoon", "Evening", "Flexible"],
    []
  );

  const YES_NO = useMemo(() => ["Yes", "No"], []);

  const initial = {
    // Personal
    fullName: "",
    email: "",
    phone: "",
    country: "",

    // Professional
    designation: "",
    institution: "",
    department: "",
    experienceYears: "",
    expertiseArea: "",
    specialization: "",

    // Academic
    highestDegree: "",
    university: "",
    publications: "",
    achievements: "",

    // Speaking
    previousKeynotes: "",
    speeches: "",
    notableConferences: "",

    // Proposed Topic
    keynoteTitle: "",
    keynoteAbstract: "",
    audienceOutcomes: "",

    // Online Presence
    linkedin: "",
    website: "",
    orcid: "",
    scholar: "",

    // Docs
    cvFile: null,
    photoFile: null,
    sampleFile: null,

    // Additional
    preferredSessionTime: "",
    accommodation: "",
    dietary: "",
    comments: "",
    agreeTerms: false,
    agreeUpdates: false,
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setValue = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
    setSubmitted(false);
  };

  const wordCount = (text) =>
    String(text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

  const abstractWords = wordCount(form.keynoteAbstract);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const isPhone = (v) => /^[0-9+\-\s()]{7,20}$/.test(String(v).trim());
  const isURL = (v) => {
    if (!String(v).trim()) return true; // optional
    try {
      new URL(String(v).trim());
      return true;
    } catch {
      return false;
    }
  };
  const isORCID = (v) => {
    if (!String(v).trim()) return true; // optional
    return /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(String(v).trim());
  };

  const validateFile = (file, required = false) => {
    if (!file) return required ? "This file is required." : undefined;

    const okTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];
    if (!okTypes.includes(file.type)) return "Allowed: PDF, DOC, DOCX, JPG, PNG.";

    const maxMB = 10;
    if (file.size > maxMB * 1024 * 1024) return `File must be ≤ ${maxMB}MB.`;
    return undefined;
  };

  const validate = () => {
    const e = {};

    // Required fields
    const required = [
      ["fullName", "Full name is required."],
      ["email", "Email is required."],
      ["phone", "Phone is required."],
      ["country", "Country is required."],

      ["designation", "Current designation is required."],
      ["institution", "Institution/Organization is required."],
      ["experienceYears", "Years of experience is required."],
      ["expertiseArea", "Select area of expertise."],
      ["specialization", "Specialization/Research area is required."],

      ["highestDegree", "Highest degree is required."],

      ["keynoteTitle", "Proposed keynote title is required."],
      ["keynoteAbstract", "Keynote abstract is required (100–500 words)."],

      ["preferredSessionTime", "Preferred session time is required."],
      ["accommodation", "Accommodation requirement is required."],
    ];

    required.forEach(([k, msg]) => {
      if (!String(form[k] ?? "").trim()) e[k] = msg;
    });

    if (form.email.trim() && !isEmail(form.email)) e.email = "Enter a valid email.";
    if (form.phone.trim() && !isPhone(form.phone)) e.phone = "Enter a valid phone number.";

    if (form.experienceYears.trim()) {
      const n = Number(form.experienceYears);
      if (!Number.isFinite(n) || n < 0 || n > 80) e.experienceYears = "Enter valid years (0–80).";
    }

    if (form.publications.trim()) {
      const p = Number(form.publications);
      if (!Number.isFinite(p) || p < 0 || p > 5000) e.publications = "Enter valid number.";
    }

    if (form.keynoteAbstract.trim()) {
      if (abstractWords < 100) e.keynoteAbstract = "Minimum 100 words required.";
      if (abstractWords > 500) e.keynoteAbstract = "Maximum 500 words allowed.";
    }

    // Optional URLs
    if (!isURL(form.linkedin)) e.linkedin = "Enter a valid URL (include https://).";
    if (!isURL(form.website)) e.website = "Enter a valid URL (include https://).";
    if (!isURL(form.scholar)) e.scholar = "Enter a valid URL (include https://).";

    // ORCID optional pattern
    if (!isORCID(form.orcid)) e.orcid = "ORCID format: 0000-0000-0000-0000";

    // Files
    const cvErr = validateFile(form.cvFile, true);
    if (cvErr) e.cvFile = cvErr;

    const photoErr = validateFile(form.photoFile, false);
    if (photoErr) e.photoFile = photoErr;

    const sampleErr = validateFile(form.sampleFile, false);
    if (sampleErr) e.sampleFile = sampleErr;

    if (!form.agreeTerms) e.agreeTerms = "You must accept terms to submit.";

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
      cvFile: form.cvFile ? { name: form.cvFile.name, type: form.cvFile.type, size: form.cvFile.size } : null,
      photoFile: form.photoFile ? { name: form.photoFile.name, type: form.photoFile.type, size: form.photoFile.size } : null,
      sampleFile: form.sampleFile ? { name: form.sampleFile.name, type: form.sampleFile.type, size: form.sampleFile.size } : null,
      abstractWordCount: abstractWords,
      submittedAt: new Date().toISOString(),
    };

    console.log("✅ Keynote Registration Payload:", payload);

    setSubmitting(false);
    setSubmitted(true);
  };

  const Section = ({ icon: Icon, title, children }) => (
    <div className="pt-6">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${THEME}14`, color: THEME }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-extrabold text-slate-900">{title}</h3>
      </div>
      <div className="mt-3 h-px w-full" style={{ backgroundColor: `${THEME}55` }} />
      <div className="mt-6">{children}</div>
    </div>
  );

  const Field = ({ label, error, children }) => (
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
    </div>
  );

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-slate-900 bg-white outline-none transition-all";

  const focusOk = `focus:border-[var(--t)] focus:ring-2 focus:ring-[var(--t)]/20`;
  const borderOk = "border-slate-200";
  const borderErr = "border-red-300 ring-2 ring-red-100";

  const FileRow = ({ label, required, value, onChange, error }) => (
    <Field
      label={`${label}${required ? " *" : ""}`}
      error={error}
    >
      <div className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${error ? borderErr : borderOk}`}>
        <div className="flex items-center gap-2 text-slate-700 min-w-0">
          <Upload className="h-4 w-4 shrink-0" style={{ color: THEME }} />
          <span className="text-sm truncate">
            {value ? value.name : "Choose file"}
          </span>
        </div>
        <label
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-extrabold text-white shrink-0"
          style={{ backgroundColor: THEME }}
        >
          Browse
          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
            onChange={(e) => onChange(e.target.files?.[0] || null)}
          />
        </label>
      </div>
      <p className="text-xs text-slate-500">Allowed: PDF, DOC, DOCX, JPG, PNG (max 10MB)</p>
    </Field>
  );

  // Quick disable for submit button
  const submitDisabled = submitting || !form.agreeTerms;

  return (
    <div className="bg-slate-50 py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Keynote Registration Form
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Please complete the details below. All required fields must be valid to submit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8">
            {/* Personal Information */}
            <Section icon={User} title="Personal Information">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name *" error={errors.fullName}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.fullName ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.fullName}
                    onChange={(e) => setValue("fullName", e.target.value)}
                    placeholder="Full Name"
                  />
                </Field>

                <Field label="Email Address *" error={errors.email}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.email ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.email}
                    onChange={(e) => setValue("email", e.target.value)}
                    placeholder="Email Address"
                    type="email"
                  />
                </Field>

                <Field label="Phone Number *" error={errors.phone}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.phone ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.phone}
                    onChange={(e) => setValue("phone", e.target.value)}
                    placeholder="Phone Number"
                  />
                </Field>

                <Field label="Country *" error={errors.country}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.country ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.country}
                    onChange={(e) => setValue("country", e.target.value)}
                    placeholder="Country"
                  />
                </Field>
              </div>
            </Section>

            {/* Professional Information */}
            <Section icon={Briefcase} title="Professional Information">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Current Designation *" error={errors.designation}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.designation ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.designation}
                    onChange={(e) => setValue("designation", e.target.value)}
                    placeholder="Current Designation"
                  />
                </Field>

                <Field label="Institution/Organization *" error={errors.institution}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.institution ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.institution}
                    onChange={(e) => setValue("institution", e.target.value)}
                    placeholder="Institution/Organization"
                  />
                </Field>

                <Field label="Department/Faculty" error={errors.department}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.department ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.department}
                    onChange={(e) => setValue("department", e.target.value)}
                    placeholder="Department/Faculty"
                  />
                </Field>

                <Field label="Years of Experience *" error={errors.experienceYears}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.experienceYears ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.experienceYears}
                    onChange={(e) => setValue("experienceYears", e.target.value)}
                    placeholder="Years of Experience"
                    inputMode="numeric"
                  />
                </Field>

                <Field label="Select Area of Expertise *" error={errors.expertiseArea}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.expertiseArea ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.expertiseArea}
                    onChange={(e) => setValue("expertiseArea", e.target.value)}
                  >
                    <option value="">Select Area of Expertise</option>
                    {EXPERTISE.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Specialization/Research Area *" error={errors.specialization}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.specialization ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.specialization}
                    onChange={(e) => setValue("specialization", e.target.value)}
                    placeholder="Specialization/Research Area"
                  />
                </Field>
              </div>
            </Section>

            {/* Academic Credentials */}
            <Section icon={GraduationCap} title="Academic Credentials">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Highest Degree *" error={errors.highestDegree}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.highestDegree ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.highestDegree}
                    onChange={(e) => setValue("highestDegree", e.target.value)}
                    placeholder="Highest Degree"
                  />
                </Field>

                <Field label="University/Institution" error={errors.university}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.university ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.university}
                    onChange={(e) => setValue("university", e.target.value)}
                    placeholder="University/Institution"
                  />
                </Field>

                <Field label="Number of Publications" error={errors.publications}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.publications ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.publications}
                    onChange={(e) => setValue("publications", e.target.value)}
                    placeholder="Number of Publications"
                    inputMode="numeric"
                  />
                </Field>

                <Field label="Notable Achievements/Awards" error={errors.achievements}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.achievements ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.achievements}
                    onChange={(e) => setValue("achievements", e.target.value)}
                    placeholder="Notable Achievements/Awards"
                  />
                </Field>
              </div>
            </Section>

            {/* Speaking Experience */}
            <Section icon={Mic} title="Speaking Experience">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Previous Keynote" error={errors.previousKeynotes}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.previousKeynotes ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.previousKeynotes}
                    onChange={(e) => setValue("previousKeynotes", e.target.value)}
                    placeholder="Previous Keynote"
                  />
                </Field>

                <Field label="Notable Conferences Spoken At" error={errors.notableConferences}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.notableConferences ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.notableConferences}
                    onChange={(e) => setValue("notableConferences", e.target.value)}
                    placeholder="Notable Conferences Spoken At"
                  />
                </Field>

                <Field label="Speeches" error={errors.speeches}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.speeches ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.speeches}
                    onChange={(e) => setValue("speeches", e.target.value)}
                    placeholder="Speeches"
                  />
                </Field>
              </div>
            </Section>

            {/* Proposed Keynote Topic */}
            <Section icon={Lightbulb} title="Proposed Keynote Topic">
              <div className="space-y-6">
                <Field label="Proposed Keynote Title *" error={errors.keynoteTitle}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.keynoteTitle ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.keynoteTitle}
                    onChange={(e) => setValue("keynoteTitle", e.target.value)}
                    placeholder="Proposed Keynote Title"
                  />
                </Field>

                <Field label="Keynote Abstract (100–500 words) *" error={errors.keynoteAbstract}>
                  <textarea
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.keynoteAbstract ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                    rows={6}
                    value={form.keynoteAbstract}
                    onChange={(e) => setValue("keynoteAbstract", e.target.value)}
                    placeholder="Keynote Abstract (100–500 words)"
                  />
                  <div className="text-xs text-slate-500 mt-2">
                    <span
                      className={`font-semibold ${
                        abstractWords < 100 || abstractWords > 500 ? "text-red-600" : ""
                      }`}
                    >
                      {abstractWords} words
                    </span>
                  </div>
                </Field>

                <Field label="Target Audience & Learning Outcomes" error={errors.audienceOutcomes}>
                  <textarea
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.audienceOutcomes ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                    rows={4}
                    value={form.audienceOutcomes}
                    onChange={(e) => setValue("audienceOutcomes", e.target.value)}
                    placeholder="Target Audience & Learning Outcomes"
                  />
                </Field>
              </div>
            </Section>

            {/* Online Presence */}
            <Section icon={Globe} title="Online Presence">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="LinkedIn Profile URL" error={errors.linkedin}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.linkedin ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.linkedin}
                    onChange={(e) => setValue("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                  />
                </Field>

                <Field label="Personal/Professional Website" error={errors.website}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.website ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.website}
                    onChange={(e) => setValue("website", e.target.value)}
                    placeholder="https://example.com"
                  />
                </Field>

                <Field label="ORCID ID" error={errors.orcid}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.orcid ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.orcid}
                    onChange={(e) => setValue("orcid", e.target.value)}
                    placeholder="0000-0000-0000-0000"
                  />
                </Field>

                <Field label="Google Scholar Profile" error={errors.scholar}>
                  <input
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.scholar ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.scholar}
                    onChange={(e) => setValue("scholar", e.target.value)}
                    placeholder="https://scholar.google.com/..."
                  />
                </Field>
              </div>
            </Section>

            {/* Supporting Documents */}
            <Section icon={Upload} title="Supporting Documents">
              <div className="grid md:grid-cols-2 gap-6">
                <FileRow
                  label="CV/Resume"
                  required
                  value={form.cvFile}
                  onChange={(f) => setValue("cvFile", f)}
                  error={errors.cvFile}
                />
                <FileRow
                  label="Professional Photo"
                  required={false}
                  value={form.photoFile}
                  onChange={(f) => setValue("photoFile", f)}
                  error={errors.photoFile}
                />
              </div>

              <div className="mt-6">
                <FileRow
                  label="Sample Presentation (Optional)"
                  required={false}
                  value={form.sampleFile}
                  onChange={(f) => setValue("sampleFile", f)}
                  error={errors.sampleFile}
                />
              </div>
            </Section>

            {/* Additional Information */}
            <Section icon={Info} title="Additional Information">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Preferred Session Time *" error={errors.preferredSessionTime}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.preferredSessionTime ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.preferredSessionTime}
                    onChange={(e) => setValue("preferredSessionTime", e.target.value)}
                  >
                    <option value="">Preferred Session Time</option>
                    {SESSION_TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Accommodation Required? *" error={errors.accommodation}>
                  <select
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.accommodation ? borderErr : `${borderOk} ${focusOk}`}`}
                    value={form.accommodation}
                    onChange={(e) => setValue("accommodation", e.target.value)}
                  >
                    <option value="">Accommodation Required?</option>
                    {YES_NO.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6 space-y-6">
                <Field label="Dietary Restrictions / Special Requirements" error={errors.dietary}>
                  <textarea
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.dietary ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                    rows={4}
                    value={form.dietary}
                    onChange={(e) => setValue("dietary", e.target.value)}
                    placeholder="Dietary Restrictions / Special Requirements"
                  />
                </Field>

                <Field label="Additional Comments or Questions" error={errors.comments}>
                  <textarea
                    style={{ ["--t"]: THEME }}
                    className={`${inputBase} ${errors.comments ? borderErr : `${borderOk} ${focusOk}`} resize-none`}
                    rows={4}
                    value={form.comments}
                    onChange={(e) => setValue("comments", e.target.value)}
                    placeholder="Additional Comments or Questions"
                  />
                </Field>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.agreeTerms}
                    onChange={(e) => setValue("agreeTerms", e.target.checked)}
                    className="mt-1 h-4 w-4"
                    style={{ accentColor: THEME }}
                  />
                  <p className="text-sm text-slate-700">
                    I agree to the terms and conditions and give permission to use my information for conference purposes.
                    I understand that my keynote proposal will be reviewed by the conference committee.{" "}
                    <span className="font-extrabold" style={{ color: THEME }}>
                      *
                    </span>
                  </p>
                </div>
                {errors.agreeTerms ? (
                  <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errors.agreeTerms}
                  </p>
                ) : null}

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.agreeUpdates}
                    onChange={(e) => setValue("agreeUpdates", e.target.checked)}
                    className="mt-1 h-4 w-4"
                    style={{ accentColor: THEME }}
                  />
                  <p className="text-sm text-slate-700">
                    I agree to receive updates and marketing communications about ICSCPSIA and related events.
                  </p>
                </div>
              </div>
            </Section>

            {/* Submit */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                disabled={submitDisabled}
                className="inline-flex items-center justify-center rounded-xl px-10 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: THEME,
                  boxShadow: "0 14px 30px rgba(17,179,212,0.30)",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "SUBMIT REGISTRATION"
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
