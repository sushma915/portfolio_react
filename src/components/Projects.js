export default function Projects() {
  const BASE = process.env.PUBLIC_URL;

  const projects = [
    
    {
      title: "Responsive Landing Page",
      desc: "A clean and responsive landing page built using modern HTML, CSS, and Tailwind CSS with mobile-first design principles.",
      img: `${BASE}/projects/landing.jpeg`,
      status: "Completed",
      tags: ["HTML", "CSS", "Tailwind CSS"],
      github: "https://github.com/sushma915/Landing-page",
      live: "#",
    },
    {
      title: "Car Price Prediction System",
      desc: "A machine learning project that predicts car prices based on features using regression models and data preprocessing techniques.",
      img: `${BASE}/projects/price.jpeg`,
      status: "Completed",
      tags: ["Python", "Machine Learning", "Regression"],
      github: "https://github.com/sushma915/Car-Price-Prediction",
      live: "#",
    },
    {
      title: "Personal Portfolio Website",
      desc: "My premium portfolio built with React, showcasing skills, internships, and projects.",
      img: `${BASE}/projects/portfolio.jpg`,
      status: "Completed",
      tags: ["React", "CSS", "Design"],
      github: "https://github.com/sushma915/React_portfolio.git",
      live: "#",
    },
    {
      title:
        "Human Activity Recognition",
      desc: "An ongoing data science project focused on recognizing human activities using sensor data and machine learning techniques.",
      img: null,
      status: "In Progress",
      tags: ["Python", "Data Science", "Machine Learning"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="section projBento" id="projects">
      <div className="pb-head">
        <h2 className="pb-title">
          My <span>Projects</span>
        </h2>
        <p className="pb-sub">Some of my best academic + personal projects.</p>
      </div>

      <div className="pb-grid">
        {projects.map((p, i) => (
          <div key={i} className={`pb-card ${i === 3 ? "wide" : ""}`}>
            {p.img ? (
              <div className="pb-media">
                <img src={p.img} className="pb-img" alt={p.title} />
                <span
                  className={`pb-status ${
                    p.status === "Completed" ? "done" : "prog"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ) : (
              <div className="pb-wip">
                <div className="pb-wipTag">Ongoing Project</div>
                <div className="pb-wipTitle">{p.title}</div>
                <div className="pb-wipText">{p.desc}</div>
              </div>
            )}

            {p.img && (
              <div className="pb-body">
                <div className="pb-top">
                  <div>
                    <h3 className="pb-name">{p.title}</h3>
                    <p className="pb-short">{p.desc}</p>
                  </div>

                  <div className="pb-links">
                    {p.github !== "#" && (
                      <a
                        className="pb-ic"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        ⛓
                      </a>
                    )}
                    {p.live !== "#" && (
                      <a
                        className="pb-ic pb-ic2"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        title="Live"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>

                <div className="pb-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pb-blob b1"></div>
      <div className="pb-blob b2"></div>
    </section>
  );
}
