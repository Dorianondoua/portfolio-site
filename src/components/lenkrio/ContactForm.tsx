import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: <Phone className="h-5 w-5" />,   label: "Call Us",   value: "+1 (800) 123-4567" },
  { icon: <Mail className="h-5 w-5" />,    label: "Email",     value: "support@gmail.com" },
  { icon: <MapPin className="h-5 w-5" />,  label: "Location",  value: "123 Support Toronto, Canada" },
];

export function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="contact"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-white">LET'S TALK</span>
          <br />
          <span style={{ color: "#4efdfd" }}>SUPPORT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-md"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Create, customize, and track your links in just a few clicks.
        </motion.p>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row"
        >
          {contactInfo.map((info) => (
            <div key={info.label} className="flex flex-col items-center gap-2">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  border: "1.5px solid #4efdfd",
                  color: "#4efdfd",
                }}
              >
                {info.icon}
              </div>
              <span className="text-sm font-semibold text-white">{info.label}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {info.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-2xl p-6 text-left md:p-8"
          style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                }}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                }}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                }}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">Phone</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone"
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-white">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full resize-y rounded-lg px-4 py-2.5 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 w-full rounded-lg py-3 text-sm font-semibold text-[#080f1a] transition-opacity hover:opacity-90"
            style={{ background: "#4efdfd" }}
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}
