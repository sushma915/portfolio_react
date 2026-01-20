export default function Internships() {
  const internships = [
   {
  role: "Full Stack Development Intern",
  company: "SureTrust ProEd",
  mode: "Online",
  status: "Ongoing",
  domain: "Full Stack Development",
  gradient: "g3",
  points: [
    "Learning full stack development concepts through guided sessions",
    "Practicing frontend development using Bootstrap and Gulp CSS",
    "Understanding real-world development workflows and tools",
  ],
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Gulp CSS",
    "React.js",
    "Git",
  ],
},
{
  role: "Data Science Intern",
  company: "Global Quest Technologies",
  mode: "Online",
  status: "Ongoing",
  domain: "Data Science",
  gradient: "g4",
  points: [
    "Currently learning data science concepts through structured training",
    "Working on Python-based data analysis and problem-solving tasks",
    "Understanding fundamentals of machine learning and data handling",
  ],
  tech: ["Python", "Data Science Basics", "Machine Learning"],
},

  {
  role: "AI / Machine Learning Intern",
  company: "SkillDzire Technologies",
  mode: "Remote",
  status: "Completed",
  domain: "AI / Machine Learning",
  gradient: "g2",
  points: [
    "Learned fundamentals of machine learning and data handling",
    "Worked with Python on basic AI and ML tasks",
    "Gained practical exposure to ML concepts through guided exercises",
  ],
  tech: ["Python", "Machine Learning", "Data Handling"],
},
{
  role: "Web Development Intern",
  company: "Oasis Infobyte",
  mode: "Remote",
  status: "Completed",
  domain: "Web Development",
  gradient: "g1",
  points: [
    "Developed responsive web pages using HTML, CSS, and JavaScript",
    "Worked on small frontend projects to improve practical skills",
    "Improved understanding of real-world web development workflow",
  ],
  tech: ["HTML5", "CSS3", "JavaScript"],
},

  ];

  return (
    <section className="section internSpotlight" id="internships">
      <div className="internS-head">
        <h2 className="internS-title">
          Internships <span>& Experience</span>
        </h2>
        <p className="internS-sub">
  Hands-on training and internship experiences that support my growth in web development, data science, and AI.
</p>

      </div>

      <div className="internS-grid">
        {internships.map((it, idx) => (
          <article className={`internS-card ${it.gradient}`} key={idx}>
            {/* gradient strip */}
            <div className="internS-strip"></div>

            {/* header */}
            <div className="internS-top">
              <div className="internS-left">
                <div className="internS-badge">{idx + 1}</div>
                <div>
                  <h3 className="internS-role">{it.role}</h3>
                  <p className="internS-company">{it.company}</p>
                </div>
              </div>

              <div className="internS-status">
                <span className={`statusDot ${it.status === "Ongoing" ? "on" : "off"}`}></span>
                {it.status}
              </div>
            </div>

            {/* quick facts */}
            <div className="internS-facts">
              <div className="fact">
                <span className="factKey">Domain</span>
                <span className="factVal">{it.domain}</span>
              </div>
              <div className="fact">
                <span className="factKey">Mode</span>
                <span className="factVal">{it.mode}</span>
              </div>
            </div>

            {/* highlights */}
            <div className="internS-mid">
              <h4>Highlights</h4>
              <ul>
                {it.points.map((p, i) => (
                  <li key={i}>✨ {p}</li>
                ))}
              </ul>
            </div>

            {/* tech */}
            <div className="internS-tech">
              {it.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* glow background */}
      <div className="internS-blob b1"></div>
      <div className="internS-blob b2"></div>
    </section>
  );
}
