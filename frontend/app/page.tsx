"use client";

import { useState, useEffect } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "Builder", label: "automation systems, not scripts" },
  { value: "2+", label: "years solving real QA problems" },
  { value: "0→1", label: "framework ownership mindset" },
  { value: "AI", label: "exploring next-gen testing" },
  { value: "Reliable", label: "focus on stable execution" },
  { value: "Focused", label: "quality over shortcuts" }
];

const EXPERIENCES = [
  {
    role: "Automation Engineer",
    company: "QualityKiosk Technologies Pvt. Ltd",
    location: "Mumbai",
    period: "Dec 2024 – Present",
    tech: "Java · RestAssured · TestNG · Jenkins · Git",
    bullets: [
      "Designed and implemented a scalable API Automation Framework from scratch using Java, RestAssured, and TestNG, enabling reliable large-scale regression execution.",
      "Developed a custom SMS Reading Application to handle OTP-based authentication flows, eliminating manual intervention in critical test scenarios.",
      "Integrated automation suite into CI/CD pipeline using Jenkins and Git, improving release velocity, execution visibility, and pipeline stability.",
      "Built reusable utilities, helper components, and data-driven test strategies, significantly reducing test development time and code duplication.",
      "Reduced flaky tests through targeted environment integration, bug isolation, and robust test design practices.",
    ],
  },
  {
    role: "Automation Engineer Intern",
    company: "QualityKiosk Technologies Pvt. Ltd",
    location: "Mumbai",
    period: "Jan 2024 – Dec 2024",
    tech: "Selenium WebDriver · Java · Page Object Model",
    bullets: [
      "Automated end-to-end insurance workflows including policy generation, user login, form validation, and dashboard navigation using Selenium WebDriver.",
      "Enhanced and optimized existing automation scripts, improving execution speed and long-term maintainability.",
      "Designed data-driven test cases with modular code structure to support scalability across evolving test requirements.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI-Powered Test Recorder & Code Generator",
    status: "In Progress",
    type: "AI / Automation",
    tech: ["Java", "Selenium", "Python", "Groq LLaMA 3.1", "ChromaDB", "TestNG", "Maven"],
    description:
      "Building an intelligent system that records manual browser interactions and auto-generates production-ready Java Selenium TestNG test cases using AI, eliminating hand-written boilerplate entirely.",
    bullets: [
      "Architected a 4-phase pipeline: framework setup → browser recording → AI action-to-method mapping → TestNG class generation.",
      "Uses ChromaDB + LLaMA 3.1 to ensure POM-aligned, hallucination-free code output.",
      "Bridges manual exploratory testing and automated code generation for non-technical testers.",
    ],
    github: "https://github.com/RedSkull5143/demoqa-ai-recorder",
    featured: true,
  },
  {
    title: "RAG-Based Framework Intelligence Assistant",
    status: "Public",
    type: "AI / RAG",
    tech: ["Python", "ChromaDB", "Groq LLaMA 3.1", "SentenceTransformers", "RAG"],
    description:
      "Built a Retrieval-Augmented Generation (RAG) system that makes LLMs answer questions strictly based on your automation framework's actual source code — eliminating hallucinated methods and incorrect POM assumptions.",
    bullets: [
      "Implemented method-level chunking of Java framework files with semantic embeddings using SentenceTransformers (all-MiniLM-L6-v2).",
      "Integrated Groq's LLaMA 3.1 with strict grounding constraints — responds 'Not implemented' instead of fabricating answers.",
      "Designed clean RAG pipeline: source code → chunking → embeddings → Top-K retrieval → grounded LLM response.",
    ],
    github: "https://github.com/RedSkull5143/framework-ai-assistant",
    featured: true,
  },
  {
    title: "Zero-Touch OTP Automation System",
    type: "Automation + Mobile + Backend",
    status: "Production Ready",
    featured: true,
    github: "#",
    description: "Built a fully autonomous OTP handling system eliminating manual intervention in authentication-heavy workflows. Designed a real-time pipeline integrating Android SMS capture, Firebase sync, and Selenium execution to enable uninterrupted test flows across banking and insurance applications.",
    bullets: [
      "Engineered a 5-stage pipeline: UI trigger → SMS capture → Firebase push → Web retrieval → auto-injection",
      "Eliminated 100% manual OTP dependency in automation suites",
      "Handled real-time synchronization between mobile and web layers",
      "Designed retry + fallback mechanisms for delayed or missing OTPs",
      "Enabled stable execution for authentication-heavy enterprise flows",
      "Reduced execution breaks caused by OTP delays and flakiness"
    ],
    tech: ["Java", "Selenium", "Android", "Firebase", "TestNG"]
  },
  {
  title: "Geofencing-Based Hospitality Experience System",
  type: "Location Intelligence + Web App",
  status: "Completed",
  featured: true,
  github: "#",
  description: "Developed a geofencing-based system to deliver personalized, location-aware services within a hotel ecosystem. Enabled automated guest engagement using GPS-triggered events to enhance user experience and operational efficiency.",
  bullets: [
    "Designed GPS-based geofence triggers for automated check-in/check-out reminders",
    "Delivered real-time promotional alerts and nearby facility recommendations",
    "Built a role-based admin panel to manage geofence zones and user activity",
    "Implemented live tracking and event logging for monitoring guest movement",
    "Improved customer engagement through context-aware notifications"
  ],
  tech: ["JavaScript", "GPS", "Geofencing", "Web App", "Admin Dashboard"]
}
];

const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Test Automation",
    items: ["Selenium WebDriver", "Karate", "RestAssured", "TestNG", "Postman", "Page Object Model", "Data-Driven Testing", "API Testing"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Git", "GitHub Actions", "Jenkins", "AWS", "Firebase", "Maven", "Gradle"],
  },
  {
    category: "AI & GenAI",
    items: ["GitHub Copilot", "LLM APIs", "RAG", "ChromaDB", "Groq LLaMA 3.1", "SentenceTransformers"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
];

const AWARDS = [
  {
    title: "Customer Champion",
    org: "QualityKiosk Technologies",
    year: "2025",
    desc: "Recognized for exceptional delivery on the ICICI Lombard General Insurance project — specifically for building a scalable API Automation Framework from scratch that directly improved client confidence, regression reliability, and release velocity.",
  },
  {
    title: "Infant Spotlight",
    org: "QualityKiosk Technologies",
    year: "2024",
    desc: "Awarded as a standout new joiner for exceptional ramp-up speed, proactive contributions to test automation, and demonstrating ownership of real-time project deliverables within the first months of joining.",
  },
];

/* ─────────────────────────── ICONS ─────────────────────────── */

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 1043.63 592.71" fill="currentColor">
      <g>
        <path d="M588.67 296.35c0 163.69-131.61 296.36-294.34 296.36C131.6 592.71 0 460.04 0 296.35 0 132.66 131.6 0 294.33 0c162.73 0 294.34 132.66 294.34 296.35z"/>
        <ellipse cx="780.54" cy="296.35" rx="122.28" ry="296.35"/>
        <ellipse cx="965.89" cy="296.35" rx="77.74" ry="296.35"/>
      </g>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #27272a" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#ededed" }}>
            Om<span style={{ color: "#3b82f6" }}>Shinde</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <a href="/Om_Shinde_Resume.pdf" target="_blank" className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
            Resume
          </a>
          <a href="mailto:omshinde5143@gmail.com" className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
            Email Me
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section
      id="top"
      className="section-inner"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Pill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }} className="animate-fade-in-up">
        {["SDET", "Test Automation", "AI-Powered Testing", "Java & Selenium"].map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Name */}
      <h1
        className="animate-fade-in-up delay-100 hero-name"
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(3rem, 8vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
        }}
      >
        Om
        <br />
        <span className="gradient-text">Shinde</span>
      </h1>

      {/* Tagline */}
      <p
        className="animate-fade-in-up delay-200"
        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "#a1a1aa", maxWidth: "600px", lineHeight: 1.7, marginBottom: "2.5rem" }}
      >
        Results-driven SDET building automated testing frameworks with Java, Selenium, and AI tools. Passionate about eliminating manual effort through intelligent automation — from OTP handling to AI-powered code generation.
      </p>

      {/* Specialty chips */}
      <div className="animate-fade-in-up delay-300" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2.5rem" }}>
        {["Java · Selenium · TestNG", "API Automation · RestAssured", "RAG & LLM Integration", "CI/CD · Jenkins · GitHub Actions", "AI-Powered Test Generation"].map((s) => (
          <span key={s} style={{ fontSize: "0.8rem", color: "#71717a", background: "rgba(255,255,255,0.03)", border: "1px solid #27272a", borderRadius: "6px", padding: "0.3rem 0.75rem" }}>{s}</span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="animate-fade-in-up delay-400 hero-cta"style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, auto))", gap: "1rem", maxWidth: "100%", margin: "0 auto 2.5rem" }} >        
        <a href="https://github.com/RedSkull5143" target="_blank" rel="noreferrer" className="btn-outline">
          <GithubIcon /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/shindeom" target="_blank" rel="noreferrer" className="btn-outline">
          <LinkedinIcon /> LinkedIn
        </a>
        <a href="https://medium.com/@omshinde5143" target="_blank" rel="noreferrer" className="btn-outline">
          <MediumIcon /> Medium
        </a>
        <a href="/Om_Shinde_Resume.pdf" target="_blank" className="btn-outline">
          Resume
        </a>
        <a href="#experience" className="btn-outline">
          View Experience 
        </a>
        <a href="#projects" className="btn-outline">
          View Projects
        </a>
      </div>

      {/* Stats */}
      <div
        className="animate-fade-in-up delay-500 stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: "1px",
          background: "#27272a",
          border: "1px solid #27272a",
          borderRadius: "12px",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        {STATS.map((s) => (
          <div key={s.value} style={{ background: "#0a0a0a", padding: "1.25rem 1.5rem" }}>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#ededed", marginBottom: "0.25rem" }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "#71717a" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Current work banner */}
      <div
        className="animate-fade-in-up delay-500"
        style={{
          marginTop: "2rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          background: "rgba(59, 130, 246, 0.08)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          borderRadius: "8px",
          fontSize: "0.8rem",
          color: "#93c5fd",
          maxWidth: "100%",
          flexWrap: "wrap",
        }}
      >
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
        Currently building: AI-Powered Test Recorder & Code Generator
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="about" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>About</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "2rem" }}>
        Building reliable automation with intelligent depth
      </h2>

      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            I&apos;m an Automation Engineer at QualityKiosk Technologies, Mumbai — focused on building automation frameworks that are scalable, intelligent, and production-ready. My work sits at the intersection of test automation, AI tooling, and CI/CD engineering.
          </p>
          <p style={{ color: "#a1a1aa", lineHeight: 1.8 }}>
            I graduated with a B.Tech in Computer Science (CGPA 8.9) from D. Y. Patil College of Engineering &amp; Technology, Kolhapur in 2024. I enjoy solving hard automation problems and exploring how LLMs can make testers more productive.
          </p>
        </div>

        <div>
          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>What I care about</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Scalable, reusable automation frameworks",
              "AI-driven test generation & code quality",
              "CI/CD integration and pipeline reliability",
              "Eliminating manual effort through smart tooling",
              "RAG systems for developer productivity",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#a1a1aa", fontSize: "0.9rem" }}>
                <span style={{ color: "#3b82f6", marginTop: "3px", flexShrink: 0 }}><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <div style={{ marginTop: "3rem", padding: "1.5rem", background: "#111111", border: "1px solid #27272a", borderRadius: "12px" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>Education</p>
        <div>
          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "1rem" }}>B.Tech — Computer Science</div>
          <div style={{ color: "#71717a", fontSize: "0.875rem", marginTop: "0.25rem" }}>D. Y. Patil College of Engineering &amp; Technology, Kolhapur</div>
          <div style={{ color: "#71717a", fontSize: "0.85rem", marginTop: "0.25rem" }}>2020 – 2024 &nbsp;·&nbsp; CGPA: 8.9</div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
function Experience() {
  return (
    <section id="experience" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>Experience</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "3rem" }}>
        Roles where I built impact at scale
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="card" style={{ position: "relative", overflow: "hidden" }}>
            {i === 0 && (
              <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.2rem 0.6rem", background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "99px" }}>
                  Current
                </span>
              </div>
            )}

            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="timeline-dot" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.25rem", paddingRight: i === 0 ? "4rem" : "0" }}>{exp.role}</div>
                <div style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.25rem" }}>{exp.company}</div>
                <div style={{ color: "#71717a", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                  {exp.period} &nbsp;·&nbsp; {exp.location}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#a1a1aa", background: "rgba(255,255,255,0.03)", padding: "0.35rem 0.75rem", borderRadius: "6px", display: "inline-block", marginBottom: "1rem", maxWidth: "100%", wordBreak: "break-word" }}>
                  {exp.tech}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#a1a1aa", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      <span style={{ color: "#3b82f6", marginTop: "4px", flexShrink: 0 }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
function Projects() {
  return (
    <section id="projects" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>Projects</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "3rem" }}>
        Flagship work across automation and AI
      </h2>

      {/* Featured */}
      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", marginBottom: "1.25rem" }}>
        {PROJECTS.filter((p) => p.featured).map((proj, i) => (
          <div key={i} className="card gradient-border" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {proj.type} · {proj.status === "In Progress" ? "🔨 In Progress" : "Public"}
              </span>
              <a href={proj.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ flexShrink: 0, fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}>
            <GithubIcon /> GitHub
          </a>
            </div>

            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{proj.title}</h3>
            <p style={{ color: "#a1a1aa", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>{proj.description}</p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {proj.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#71717a", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  <span style={{ color: "#3b82f6", marginTop: "3px", flexShrink: 0 }}><CheckIcon /></span>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {proj.tech.map((t) => (
                <span key={t} className="skill-chip" style={{ fontSize: "0.7rem" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Other projects */}
      {PROJECTS.filter((p) => !p.featured).map((proj, i) => (
        <div key={i} className="card exp-project-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}>{proj.title}</h3>
              <span style={{ fontSize: "0.7rem", color: "#71717a", background: "rgba(255,255,255,0.04)", padding: "0.15rem 0.5rem", borderRadius: "4px", border: "1px solid #27272a" }}>{proj.status}</span>
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>{proj.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {proj.tech.map((t) => (
                <span key={t} className="skill-chip" style={{ fontSize: "0.7rem" }}>{t}</span>
              ))}
            </div>
          </div>
          <a href={proj.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ flexShrink: 0, fontSize: "0.8rem", padding: "0.45rem 0.9rem" }}>
            <GithubIcon /> GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

/* ─── SKILLS ─── */
function Skills() {
  return (
    <section id="skills" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>Skills</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "3rem" }}>
        Tools, systems, and capabilities
      </h2>

      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {SKILLS.map((group) => (
          <div key={group.category} className="card">
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── AWARDS ─── */
function Awards() {
  return (
    <section id="awards" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>Awards</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "3rem" }}>
        Signals of excellence and ownership
      </h2>

      <div className="awards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
        {AWARDS.map((award, i) => (
          <div key={i} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{award.title}</div>
                <div style={{ color: "#3b82f6", fontSize: "0.85rem", marginTop: "0.2rem" }}>{award.org}</div>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#71717a", fontWeight: 600, flexShrink: 0, marginLeft: "1rem" }}>{award.year}</span>
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "0.875rem", lineHeight: 1.7 }}>{award.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="section-inner" style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label" style={{ marginBottom: "1rem" }}>Contact</p>
      <h2 className="section-heading" style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "1rem" }}>
        Open to new opportunities
      </h2>
      <p style={{ color: "#a1a1aa", fontSize: "1rem", maxWidth: "520px", lineHeight: 1.7, marginBottom: "3rem" }}>
        Reach out for roles in automation engineering, AI testing, or simply a conversation about intelligent test frameworks and developer tooling.
      </p>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Email", value: "omshinde5143@gmail.com", href: "mailto:omshinde5143@gmail.com" },
          { label: "Phone", value: "+91 8625971620", href: "tel:+918625971620" },
          { label: "Location", value: "Mumbai, India", href: null },
        ].map((item) => (
          <div key={item.label} className="card">
            <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{item.label}</p>
            {item.href ? (
              <a href={item.href} style={{ color: "#ededed", fontSize: "0.875rem", textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}>{item.value}</a>
            ) : (
              <span style={{ color: "#ededed", fontSize: "0.875rem", fontWeight: 500 }}>{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, auto))", gap: "1rem", marginBottom: "2rem" }}>
      <a href="https://www.linkedin.com/in/shindeom" target="_blank" rel="noreferrer" className="btn-outline">
          <LinkedinIcon /> LinkedIn
        </a>
        <a href="https://github.com/RedSkull5143" target="_blank" rel="noreferrer" className="btn-outline">
          <GithubIcon /> GitHub
        </a>
        <a href="mailto:omshinde5143@gmail.com" className="btn-outline">
          Email Me
        </a>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #27272a", padding: "2rem 1.5rem", textAlign: "center" }}>
      <p style={{ color: "#52525b", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Om Shinde · Automation Engineer · Mumbai
      </p>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
