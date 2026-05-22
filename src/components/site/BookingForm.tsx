import { useState, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Form = {
  parentName: string;
  studentName: string;
  grade: string;
  country: string;
  whatsapp: string;
  email: string;
  timezone: string;
  topic: string;
  message: string;
};

const initial: Form = {
  parentName: "",
  studentName: "",
  grade: "",
  country: "",
  whatsapp: "",
  email: "",
  timezone: "",
  topic: "",
  message: "",
};

export function BookingForm() {
  const [data, setData] = useState<Form>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!data.parentName.trim()) e.parentName = "Required";
    if (!data.studentName.trim()) e.studentName = "Required";
    if (!data.grade) e.grade = "Select a class";
    if (!data.country.trim()) e.country = "Required";
    if (!data.whatsapp.trim() || data.whatsapp.replace(/\D/g, "").length < 7)
      e.whatsapp = "Valid number required";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: connect to Supabase / email / Google Sheets later
    console.log("Trial booking:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-card border border-border shadow-card p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-success/15 text-success grid place-items-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">Thank you!</h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          MathSpark will contact you soon to schedule your free trial class.
        </p>
        <button
          onClick={() => {
            setData(initial);
            setSubmitted(false);
          }}
          className="mt-6 text-primary font-semibold underline-offset-4 hover:underline"
        >
          Submit another booking
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  const field = (k: keyof Form) =>
    `${inputBase} ${errors[k] ? "border-destructive" : "border-border"}`;

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1.5 block">Parent Name *</label>
          <input className={field("parentName")} value={data.parentName} onChange={update("parentName")} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Student Name *</label>
          <input className={field("studentName")} value={data.studentName} onChange={update("studentName")} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Student Grade / Class *</label>
          <select className={field("grade")} value={data.grade} onChange={update("grade")}>
            <option value="">Select class</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={`Class ${n}`}>
                Class {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Country *</label>
          <input
            className={field("country")}
            placeholder="USA, Canada, UK..."
            value={data.country}
            onChange={update("country")}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">WhatsApp Number *</label>
          <input
            className={field("whatsapp")}
            placeholder="+1 555 123 4567"
            value={data.whatsapp}
            onChange={update("whatsapp")}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Email *</label>
          <input
            type="email"
            className={field("email")}
            placeholder="you@example.com"
            value={data.email}
            onChange={update("email")}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Preferred Time Zone</label>
          <input
            className={field("timezone")}
            placeholder="EST, PST, GMT, IST..."
            value={data.timezone}
            onChange={update("timezone")}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Maths Topic Help Needed</label>
          <input
            className={field("topic")}
            placeholder="Fractions, algebra, geometry..."
            value={data.topic}
            onChange={update("topic")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium mb-1.5 block">Message</label>
          <textarea
            rows={4}
            className={field("message")}
            placeholder="Tell us about your child's learning needs..."
            value={data.message}
            onChange={update("message")}
          />
        </div>
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="mt-4 text-sm text-destructive">Please fill the required fields correctly.</p>
      )}

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow"
      >
        Book Free Trial Class <Send className="w-4 h-4" />
      </button>
      <p className="mt-3 text-xs text-center text-muted-foreground">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
