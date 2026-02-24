import React from "react";
import { Layers, Monitor, ShieldCheck, Database, Zap, Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "01",
    icon: <Layers className="w-7 h-7" />,
    title: "Full Stack Web Development",
    desc: "Custom web applications built for scalability and performance using the MERN stack.",
    items: ["Admin Panel", "Dashboard", "LMS (Learning Management)"],
    tech: "MongoDB, Express, React, Node, TypeScript"
  },
  {
    id: "02",
    icon: <Monitor className="w-7 h-7" />,
    title: "Frontend Development",
    desc: "Pixel-perfect, highly interactive, and responsive user interfaces.",
    items: ["Responsive UI", "Landing Pages", "API Integration"],
    tech: "React.js, Tailwind, Next.js"
  },
  {
    id: "03",
    icon: <Zap className="w-7 h-7" />,
    title: "Backend & API Development",
    desc: "Secure and scalable server-side architecture.",
    items: ["REST APIs", "JWT Auth", "DB Design"],
    tech: "Node.js, Express, MongoDB"
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Auth & Security Systems",
    desc: "Advanced security systems to protect user data.",
    items: ["OTP", "Password Reset", "Session Mgmt"],
    tech: "Bcrypt, JWT, OAuth"
  },
  {
    id: "05",
    icon: <Database className="w-7 h-7" />,
    title: "Database Architecture",
    desc: "Optimized database structure for high performance.",
    items: ["Schema Design", "Normalization", "CRUD Optimization"],
    tech: "SQL & NoSQL, PostgreSql , Firebase"
  },
  {
    id: "06",
    icon: <Bug className="w-7 h-7" />,
    title: "Bug Fixing & Optimization",
    desc: "Improve performance & clean existing codebases.",
    items: ["API Debugging", "Re-render Optm.", "Performance Tuning"],
    tech: "Clean Code & Debugging"
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-600 rounded-full mb-6">
            My Expertise
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Digital Solutions
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              I Deliver
            </span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            Building scalable systems with clean architecture and modern design principles.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* ID */}
              <span className="absolute top-6 right-6 text-slate-100 font-black text-5xl">
                {service.id}
              </span>

              {/* Icon */}
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-2 mb-6 flex-grow">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-slate-600">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  {service.tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
}
