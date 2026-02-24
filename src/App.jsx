import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Project";
import Pre from "./components/Pre";
import AdminLogin from "./Dashboard/Login";
import Dashboard from "./Dashboard/Dashboard";
import Services from "./Pages/Services";
import ContactForm from "./Pages/ContactForm";
import ProtectedRoute from "./components/ProtectedRoutes";

function AppContent() {
  const [load, setLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoad(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Login page pe Navbar & Footer hide 
  const hideLayout = location.pathname === "/admin" || location.pathname === "/dashboard" ;

  if (!load) return <Pre />;

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
          } />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
