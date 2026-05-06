import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageHero from "@/components/PageHero";
import { COMPANY, SERVICES } from "@/data/site";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  useEffect(() => { document.title = "Contact | Atulit Baldhama Digital Solutions"; }, []);
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Thanks! We'll get back to you within 24 hours.");
    reset();
  };
  return (
    <>
      <PageHero title="Get in Touch" subtitle="Tell us about your project — we'll reply within one business day."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Contact</>} />
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-brand space-y-4">
            <h3 className="text-2xl text-primary mb-2">Send a Message</h3>
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name", { required: "Name is required" })} className={inputCls} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} className={inputCls} />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone", { required: "Phone is required" })} className={inputCls} />
            </Field>
            <Field label="Service Interested In">
              <select {...register("service")} className={inputCls}>
                {SERVICES.map(s => <option key={s.slug}>{s.title}</option>)}
              </select>
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea rows={4} {...register("message", { required: "Message is required" })} className={inputCls} />
            </Field>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>

          <div className="space-y-6">
            <div className="card-brand">
              <h3 className="text-2xl text-primary mb-4">Reach Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3"><MapPin className="text-primary shrink-0 mt-1" /><span className="text-sm">{COMPANY.address}</span></li>
                <li className="flex gap-3"><Phone className="text-primary shrink-0 mt-1" /><a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-primary">{COMPANY.phone}</a></li>
                <li className="flex gap-3"><Mail className="text-primary shrink-0 mt-1" /><a href={`mailto:${COMPANY.email}`} className="text-sm hover:text-primary">{COMPANY.email}</a></li>
              </ul>
              <div className="flex gap-3 mt-5 text-gold">
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="Facebook"><Facebook /></a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-gold-light h-72">
              <iframe title="Map" src="https://www.google.com/maps?q=Jhotwara+Jaipur+Rajasthan&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-lg border-2 border-gold-light bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </label>
  );
}
