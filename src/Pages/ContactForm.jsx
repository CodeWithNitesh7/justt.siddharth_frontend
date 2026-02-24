import React, { useState } from "react";
import { submitContact } from "../api/contact.api";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    setErrors({});
    setLoading(true);

    const res = await submitContact(form); // ✅ Directly send form

    if (res.data.success) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  } catch (error) {
    console.error("Submission Error:", error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 p-6">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl p-8 transition-all hover:shadow-cyan-200/50">

        {success ? (
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-cyan-800">
              Message Sent Successfully 🎉
            </h2>
            <p className="text-cyan-700/70 mt-2">
              I’ll get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-all"
            >
              Send Another
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-cyan-900 tracking-tight">
                Stay Cool, <span className="font-bold">Reach Out</span>
              </h2>
              <p className="text-cyan-700/60 text-sm mt-2">
                I'll get back to you faster than ice melts.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-1 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jon snow"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                    errors.name ? "border-red-400" : "border-cyan-100"
                  } focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-1 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jonsnow@gmail.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                    errors.email ? "border-red-400" : "border-cyan-100"
                  } focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-1 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your cool project..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                    errors.message ? "border-red-400" : "border-cyan-100"
                  } focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 font-bold rounded-xl shadow-lg transition-all transform ${
                  loading
                    ? "bg-cyan-400 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-600 hover:-translate-y-1 active:scale-95 text-white"
                }`}
              >
                {loading ? "Sending..." : "Send Message ❄️"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
