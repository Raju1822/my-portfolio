
import React, { useEffect, useMemo, useState } from 'react'

/**
 * Single-page Resume in React (no external components).
 * - Dark/Light theme toggle via Bootstrap v5.3 color modes (data-bs-theme on <html>)
 * - Inline PDF viewer with Open & Download buttons (expects public/resume.pdf)
 * - Clean sections: Hero, Skills, Experience, Projects, Education, Contact
 *
 * Optional: If you deploy under a subpath, use import.meta.env.BASE_URL for assets.
 */
export default function App() {
  // --- Resume data (edit here or replace with your own source) ---
  const profile = useMemo(() => ({
    name: 'Raju Sahu',
    role: 'Software Engineer',
    title: 'Full-Stack (React, Node.js, SQL)',
    location: 'Gurugram, India',
    summary:
      'Full-stack Software Engineer experienced in building scalable web apps using React.js, Node.js, and SQL Server. Focused on secure REST APIs, data visualization, file uploads, and PDF generation, with a strong emphasis on performance, security, and user experience.',
    contact: {
      email: 'rajusahu2n23@gmail.com',
      phone: '9399217325',
      linkedin: 'https://www.linkedin.com/in/raju-sahu-3baa95176/',
      github: 'https://github.com/Raju1822',
    },
    skills: [
      'JavaScript (ES6+)',
      'React.js',
      'Node.js',
      'SQL',
      'MS SQL Server',
      'PostgreSQL',
      'MySQL',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'RESTful APIs',
      'Git',
      'Chart.js',
      'PDFKit',
      'Multer',
      'CI/CD',
      'OOP',
      'API Security',
      'Data Modeling',
      'Responsive UI',
    ],
    experience: [
      {
        role: 'Software Engineer',
        company: 'Optum (UnitedHealth Group)',
        period: 'Jun 2023 – Present',
        bullets: [
          'Built and maintained full-stack web apps using Node.js, React.js, and SQL Server.',
          'Designed secure REST APIs and implemented SQL transactions for reliability.',
          'Added file uploads, dynamic PDF generation, and dashboards with Chart.js.',
          'Worked in Agile teams, ensuring delivery and best practices.',
        ],
      },
      {
        role: 'Technology Development Program (TDP)',
        company: 'Optum (UnitedHealth Group)',
        period: 'Jun 2022 – Jun 2023',
        bullets: [
          'SQL-based reporting and automation with Python/Power BI.',
          'Migrated legacy reports and used GitHub for version control.',
        ],
      },
    ],
    projects: [
      {
        name: 'Team Productivity Platform',
        desc: 'Manage tasks, skills, leave requests, and performance reviews.',
        stack: ['Node.js', 'React.js', 'SQL Server', 'Multer', 'PDFKit', 'Chart.js'],
        highlights: [
          '30+ REST APIs with auth and SQL transactions.',
          'File uploads and dynamic PDF certificate generation.',
          'Role-based routing with responsive dashboards.',
        ],
        link: 'https://github.com/Raju1822/myapp',
      },
      {
        name: 'Portfolio Website',
        desc: 'Responsive personal portfolio using HTML/CSS/JS.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        highlights: ['Clean UI and responsive design'],
        link: 'https://github.com/Raju1822/I-m-RS',
      },
    ],
    education: [
      {
        school: 'National Institute of Technology, Raipur',
        degree: 'B.Tech - Computer Science & Engineering',
        period: '2018 - 2022',
        grade: '9.14/10',
      },
      {
        school: 'HSM Global Public H S School, Bilaspur',
        degree: 'Class 12th',
        period: '2016 - 2017',
        grade: '93.80%',
      },
      {
        school: 'Govt H S School Nariyara Sakti',
        degree: 'Class 10th',
        period: '2015',
        grade: '91.84%',
      },
    ],
  }), [])

  // --- Theme toggle (Bootstrap 5.3 color modes) ---
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  // --- Base-aware PDF URL (works for root or subpath hosting) ---
  const resumeUrl = import.meta?.env?.BASE_URL ? `${import.meta.env.BASE_URL}resume.pdf` : '/resume.pdf'

  // --- Small helpers for UI ---
  const Card = ({ children }) => (
    <div className="card border-0 shadow-sm" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="card-body">{children}</div>
    </div>
  )

  const SectionTitle = ({ children }) => <h2 className="h5 mb-3">{children}</h2>

  return (
    <div className="container py-4">
      {/* Header / Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom rounded-3 px-3 mb-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <span
            className="d-inline-block rounded-2"
            style={{
              width: 28,
              height: 28,
              backgroundImage: 'linear-gradient(135deg,#6610f2,#0d6efd)',
            }}
          />
          <strong>{profile.name}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                <i className="bi bi-brightness-high me-1" /> {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-4">
        <Card>
          <h1 className="h3 fw-bold mb-1">{profile.role}</h1>
          <p className="text-secondary mb-2">{profile.title} · {profile.location}</p>
          <p className="mb-3">{profile.summary}</p>
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-primary" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin me-2" /> LinkedIn
            </a>
            <a className="btn btn-primary" href={profile.contact.github} target="_blank" rel="noreferrer">
              <i className="bi bi-github me-2" /> GitHub
            </a>
            <a className="btn btn-outline-secondary" href={`mailto:${profile.contact.email}`}>
              <i className="bi bi-envelope me-2" /> Email
            </a>
          </div>
        </Card>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-4">
        <Card>
          <SectionTitle>Technical Skills</SectionTitle>
          <div>
            {profile.skills.map((s, i) => (
              <span key={i} className="badge text-bg-primary me-2 mb-2">{s}</span>
            ))}
          </div>
        </Card>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-4">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="row g-3">
          {profile.experience.map((e, i) => (
            <div className="col-12 col-md-6" key={i}>
              <Card>
                <h3 className="h6 mb-1">{e.role} · {e.company}</h3>
                <div className="text-secondary mb-2">{e.period}</div>
                <ul className="mb-0">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="row g-3">
          {profile.projects.map((p, i) => (
            <div className="col-12 col-md-6" key={i}>
              <Card>
                <h3 className="h6 mb-1">{p.name}</h3>
                <p className="text-secondary mb-2">{p.desc}</p>
                <div className="mb-2">
                  {p.stack.map((s, j) => (
                    <span key={j} className="badge text-bg-info me-2 mb-2">{s}</span>
                  ))}
                </div>
                <ul className="mb-3">
                  {p.highlights.map((h, k) => <li key={k}>{h}</li>)}
                </ul>
                {p.link && (
                  <a className="btn btn-outline-secondary" href={p.link} target="_blank" rel="noreferrer">
                    View Repo →
                  </a>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-4">
        <SectionTitle>Education</SectionTitle>
        <div className="row g-3">
          {profile.education.map((e, i) => (
            <div className="col-12 col-md-6" key={i}>
              <Card>
                <h3 className="h6 mb-1">{e.school}</h3>
                <div className="text-secondary">{e.degree} · {e.period}</div>
                {e.grade && <div className="mt-2">Grade: <strong>{e.grade}</strong></div>}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Resume viewer */}
      <section id="resume" className="mb-4">
        <Card>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <SectionTitle>Resume</SectionTitle>
            <div className="btn-group">
              <a className="btn btn-outline-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
                <i className="bi bi-box-arrow-up-right me-2" /> Open in new tab
              </a>
              <a className="btn btn-primary" href={resumeUrl} download>
                <i className="bi bi-download me-2" /> Download PDF
              </a>
            </div>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              className="border-0"
              src={`${resumeUrl}#toolbar=1&navpanes=0`}
              title="Resume PDF"
            />
          </div>
          <p className="text-secondary mt-2 mb-0">If the inline viewer doesn’t load, use “Open in new tab”.</p>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-4">
        <Card>
          <SectionTitle>Contact</SectionTitle>
          <ul className="list-unstyled d-grid gap-2 mb-0">
            <li><i className="bi bi-envelope me-2" /><a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></li>
            <li><i className="bi bi-telephone me-2" /><span>{profile.contact.phone}</span></li>
            <li><i className="bi bi-linkedin me-2" /><a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><i className="bi bi-github me-2" /><a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-secondary">
        © {new Date().getFullYear()} · Built with React & Bootstrap · Designed by M365 Copilot
      </footer>
    </div>
  )
}
