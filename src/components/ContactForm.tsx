"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-teal/10 border border-teal/20 rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for contacting Pacific Northwest X-Ray. We&apos;ll respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-colors ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-teal"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-colors ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-teal"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-teal transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company / Organization
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-teal transition-colors"
            placeholder="Your organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-teal transition-colors"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition-colors resize-none ${
            errors.message
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-teal"
          }`}
          placeholder="Tell us about your equipment needs..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors shadow-sm"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}
