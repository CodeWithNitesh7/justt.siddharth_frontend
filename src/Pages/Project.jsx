import React, { useEffect, useState } from "react";
import { Github, ExternalLink, Code2, Layers } from "lucide-react";
import { getProject } from "../api/projects.api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackProject = [
    {
      _id: "default-1",
      name: "Codexnitesh",
      stack: ["MERN Stack"],
      desc: "A premium full-stack portfolio and project showcase platform.",
      git: "https://github.com/codexnitesh",
      liveLink: "https://codexnitesh.com",
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProject();

        if (res.data.success && res.data.data.length > 0) {
          setProjects(res.data.data); // ✅ Correct matching
        } else {
          setProjects(fallbackProject);
        }
      } catch (err) {
        console.error("API Error, showing fallback:", err);
        setProjects(fallbackProject);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Work and experiments in web development.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 bg-slate-200 animate-pulse rounded-3xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="group bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Code2 size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 uppercase tracking-wide">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex items-start gap-2 mb-6">
                    <Layers size={16} className="text-slate-400 mt-1" />
                    <span className="text-xs font-medium text-slate-500 italic">
                      {project.stack?.join(", ")} {/* ✅ stack is array */}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-semibold"
                  >
                    <Github size={18} /> Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;