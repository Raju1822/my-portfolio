
import React from "react";

import {
  profile,
  about,
  experiences,
  projects,
  skills,
  education,
} from "./data";

export default function App() {
  const Chip = ({ children }) => (
    <span className="badge text-bg-light border me-2 mb-2">{children}</span>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="h4 fw-bold mb-3">{children}</h2>
  );

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            {profile.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map(
                (section) => (
                  <li className="nav-item" key={section}>
                    <a className="nav-link" href={`#${section.toLowerCase()}`}>
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="home" className="py-5 text-center bg-light">
        <img
          src={profile.photo}
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: 150,height: 150, border: "4px solid #0d6efd" }}
        />
        <h1 className="fw-bold">{profile.name}</h1>
        <p className="lead">{profile.role}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-sm">
            <i className="bi bi-envelope-fill me-1"></i>Email
          </a>
          <a href={profile.linkedin} className="btn btn-outline-primary btn-sm">
            <i className="bi bi-linkedin me-1"></i>LinkedIn
          </a>
          <a href={profile.github} className="btn btn-outline-dark btn-sm">
            <i className="bi bi-github me-1"></i>GitHub
          </a>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-5">
        <div className="container">
          <SectionTitle>About Me</SectionTitle>
          <p>{about}</p>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-5 bg-light">
        <div className="container">
          <SectionTitle>Experience</SectionTitle>
          {experiences.map((exp, idx) => (
            <div className="card mb-3" key={idx}>
              <div className="card-body">
                <h5 className="fw-bold">{exp.title}</h5>
                <p className="text-muted">{exp.period}</p>
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-5">
        <div className="container">
          <SectionTitle>Projects</SectionTitle>
          <div className="row g-3">
            {projects.map((p, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold">
                      <i className="bi bi-code-slash me-2"></i>
                      {p.name}
                    </h5>
                    <p>{p.desc}</p>
                    <ul>
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <a
                      href={p.link}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                      {p.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <SectionTitle>Technical Skills</SectionTitle>
          <p className="fw-semibold">Languages</p>
          {skills.languages.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          <p className="fw-semibold mt-3">Frameworks</p>
          {skills.webFrameworks.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          <p className="fw-semibold mt-3">Databases</p>
          {skills.databases.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          <p className="fw-semibold mt-3">Tools & Concepts</p>
          {skills.toolsConcepts.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="py-5">
        <div className="container">
          <SectionTitle>Education</SectionTitle>
          {education.map((e, idx) => (
            <div className="mb-2" key={idx}>
              <strong>{e.school}</strong> — {e.details} ({e.period})
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
          <SectionTitle>Contact</SectionTitle>
          <p>Email: {profile.email} | Phone: {profile.phone}</p>
          <div className="d-flex justify-content-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary btn-sm">
              <i className="bi bi-envelope-fill me-1"></i>Email
            </a>
            <a href={profile.linkedin} className="btn btn-outline-primary btn-sm">
              <i className="bi bi-linkedin me-1"></i>LinkedIn
            </a>
            <a href={profile.github} className="btn btn-outline-dark btn-sm">
              <i className="bi bi-github me-1"></i>GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-4 border-top text-center text-muted">
        © {new Date().getFullYear()} {profile.name} • Built with React & Bootstrap
      </footer>
    </div>
  );
}
