import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import{ login} from '../api/auth.api'

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data ={
        email,password
      }
     const res = await login(data);
    if(res.data.success){
    // if(res.status === 200){
      console.log("Admin Logged In");
      navigate("/dashboard")
    }else{
      alert("Login failed ");
    }
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data?.message || "Invalid Credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] relative overflow-hidden font-sans px-4">

      {/* Background Blur Effects */}
      <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-sm p-6 bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-3xl">

        {/* Logo + Heading */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-black mx-auto mb-3">
            A
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Admin Login
          </h2>

          <p className="text-blue-500 font-medium text-xs mt-1">
            Secure Gateway to Dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 bg-slate-50 border-0 p-3 rounded-xl focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none text-slate-700 shadow-inner text-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">
              Security Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 bg-slate-50 border-0 p-3 rounded-xl focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all outline-none text-slate-700 shadow-inner text-sm"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-70 flex justify-center items-center text-sm"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </span>
            ) : (
              "Authorize & Enter"
            )}
          </button>
        </form>

        {/* Footer Text */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.3em]">
            Protected Environment v1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
