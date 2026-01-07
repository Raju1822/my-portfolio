
// src/data.js
import pic from "./profile.jpg"

export const profile = {
  name: "Raju Sahu",
  role: "Software Engineer — Full‑stack (Node.js • React.js • SQL Server)",
  summary:
    "I build scalable, secure web applications with modern JavaScript and robust data layers. I’ve delivered role‑based dashboards, secure REST APIs, file uploads, dynamic PDF generation, and interactive data visualization—always focusing on performance, security, and user experience.",
  phone: "+91 9399217325",
  email: "rajusahu2n23@gmail.com",
  linkedin: "https://www.linkedin.com/in/raju-sahu-3baa95176/",
  github: "https://github.com/Raju1822",
  photo: pic, // Place your image in public/profile.jpg
};

export const about =
  "Full‑stack Software Engineer with hands‑on experience designing and developing scalable web apps using Node.js, React.js, and SQL Server. Comfortable with secure REST APIs, role‑based dashboards, data visualization (Chart.js), file uploads (Multer), and PDF generation (PDFKit). I write clean, maintainable code and collaborate in Agile environments to deliver high‑quality solutions.";

export const experiences = [
  {
    title: "Software Engineer — Optum (UnitedHealth Group), Gurugram",
    period: "Jun 2023 – Present",
    bullets: [
      "Developed and maintained full‑stack web apps with Node.js, React.js, and SQL Server.",
      "Designed secure REST APIs and implemented SQL transactions for reliable data operations.",
      "Integrated file uploads, dynamic PDF generation, and interactive dashboards with Chart.js.",
      "Collaborated in Agile teams with best coding practices.",
    ],
  },
  {
    title: "Technology Development Program — Optum",
    period: "Jun 2022 – Jun 2023",
    bullets: [
      "Worked on SQL‑based reporting and automation; gained experience in Python, Power BI, and data workflows.",
      "Contributed to migration of legacy reports using GitHub for version control.",
    ],
  },
];

export const projects = [
  {
    name: "Team Productivity Platform",
    desc:
      "Full‑stack app for tasks, skills, leave requests, and performance reviews.",
    bullets: [
      "30+ REST APIs with auth, parameterized queries, and SQL transactions.",
      "File uploads with Multer; dynamic PDF certificates via PDFKit.",
      "Responsive dashboards using Chart.js with role‑based routing.",
    ],
    linkText: "View Project",
    link: "https://github.com/Raju1822/myapp",
  },
  {
    name: "Portfolio Website",
    desc: "Responsive personal portfolio using HTML, CSS, and JavaScript.",
    bullets: [],
    linkText: "View Project",
    link: "https://github.com/Raju1822/I-m-RS",
  },
];

export const skills = {
  languages: ["JavaScript (ES6+)", "Node.js", "React.js", "C++", "SQL", "Python (Basic)"],
  webFrameworks: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "RESTful APIs",
    "Spring Boot",
    "Chart.js",
    "PDFKit",
    "Multer",
  ],
  databases: ["MS SQL Server", "PostgreSQL", "MySQL"],
  toolsConcepts: [
    "Git/GitHub",
    "Postman",
    "CI/CD Pipelines",
    "OOP",
    "API Security",
    "Data Modeling",
    "Responsive UI",
  ],
};

export const education = [
  {
    school: "National Institute of Technology, Raipur",
    details: "B.Tech — Computer Science & Engineering (CGPA: 9.14/10)",
    period: "2018 – 2022",
  },
  {
    school: "HSM Global Public H S School, Bilaspur",
    details: "Class 12th — 93.80%",
    period: "2016 – 2017",
  },
  {
    school: "Govt H S School Nariyara Sakti",
    details: "Class 10th — 91.84%",
    period: "2015",
  },
];
