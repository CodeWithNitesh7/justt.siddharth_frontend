import React, { useState, useEffect } from "react";
import {
  getProject,
  deleteProject,
  create,
} from "../api/projects.api";
import { getContact } from "../api/contact.api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    stack: "",
    git: "",
    liveLink: "",
    desc: "",
  });

  // ================= FETCH PROJECTS =================
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await getProject();
      setProjects(res.data.data);
    } catch (error) {
      console.log("Project fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ================= FETCH CONTACTS =================
  const fetchContacts = async () => {
    try {
      const res = await getContact();
      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (error) {
      console.log("Contact fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchContacts();
  }, []);

  // ================= CREATE PROJECT =================
  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await createProject({
        ...formData,
        stack: formData.stack.split(","),
      });

      setFormData({
        name: "",
        stack: "",
        git: "",
        liveLink: "",
        desc: "",
      });

      fetchProjects();
    } catch (error) {
      console.log("Create error:", error);
    }
  };

  // ================= DELETE PROJECT =================
  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-3xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold">Codexnitesh
        </h1>
        <p className="opacity-80 mt-1">Manage your portfolio & messages</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500 text-sm">Total Projects</h2>
          <p className="text-2xl font-bold text-indigo-600">
            {projects.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500 text-sm">Total Messages</h2>
          <p className="text-2xl font-bold text-blue-600">
            {contacts.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500 text-sm">Status</h2>
          <p className="text-green-600 font-semibold">Active</p>
        </div>
      </div>

      {/* ADD PROJECT FORM */}
      <div className="bg-white p-8 rounded-3xl shadow mb-10">
        <h2 className="text-xl font-bold mb-6 text-indigo-600">
          Add New Project
        </h2>

        <form
          onSubmit={handleCreateProject}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Project Name"
            className="border p-3 rounded-xl"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Tech Stack (comma separated)"
            className="border p-3 rounded-xl"
            value={formData.stack}
            onChange={(e) =>
              setFormData({ ...formData, stack: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="GitHub URL"
            className="border p-3 rounded-xl"
            value={formData.git}
            onChange={(e) =>
              setFormData({ ...formData, git: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Live URL"
            className="border p-3 rounded-xl"
            value={formData.liveLink}
            onChange={(e) =>
              setFormData({ ...formData, liveLink: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            className="border p-3 rounded-xl md:col-span-2"
            value={formData.desc}
            onChange={(e) =>
              setFormData({ ...formData, desc: e.target.value })
            }
          />

          <button className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition md:col-span-2">
            Create Project
          </button>
        </form>
      </div>

      {/* PROJECT LIST */}
      <div className="bg-white p-8 rounded-3xl shadow mb-10">
        <h2 className="text-xl font-bold mb-6 text-indigo-600">
          All Projects
        </h2>

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p._id}
              className="border p-5 rounded-2xl hover:shadow-lg transition relative"
            >
              <button
                onClick={() => handleDelete(p._id)}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg text-indigo-700">
                {p.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {p.stack?.join(", ")}
              </p>

              <p className="text-gray-600 mt-3">{p.desc}</p>

              <div className="flex gap-3 mt-4">
                <a
                  href={p.git}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm font-semibold"
                >
                  Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT LIST */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow">
        <h2 className="text-xl font-bold mb-6">Recent Messages</h2>

        <div className="space-y-4">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition"
            >
              <h4 className="font-semibold text-blue-400">
                {c.name}
              </h4>
              <p className="text-sm text-gray-400">{c.email}</p>
              <p className="text-gray-300 mt-2">{c.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
