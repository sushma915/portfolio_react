export default function About() {
  // ✅ Internships info kept for FUTURE use (not displayed now)
  // const internships = [
  //   {
  //     role: "Full Stack Development Intern",
  //     company: "SureTrust ProEd",
  //     mode: "Ongoing",
  //   },
  //   {
  //     role: "AI/ML Intern",
  //     company: "SkillDzire Technologies",
  //     mode: "Remote",
  //   },
  // ];

  return (
    <section className="section about" id="about">
      <div className="about-grid">
        {/* Left Side */}
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

         <p className="about-intro">
  I’m <span className="about-name">Thota Sushma</span>, a{" "}
  <b>final-year Computer Science student</b> specializing in{" "}
  <b>Artificial Intelligence</b>, with a strong interest in developing
  practical and impactful software solutions.
</p>

<p className="about-line">
  I focus on <span className="about-highlight2">Full Stack Web Development</span>{" "}
  and <span className="about-highlight">Artificial Intelligence</span>, where I enjoy
  transforming ideas into functional and intuitive applications.
</p>


          <p className="about-line">
  I actively work on improving my technical skills by exploring new tools,
  building projects, and gaining hands-on experience through internships
  and self-driven learning.
</p>


          {/* Removed Projects + Skills + Internship section UI as you asked */}
        </div>

        {/* Right Side */}
        <div className="about-right">
          <div className="about-cards">
            <div className="about-card">
              <span>🎓</span>
              <h3>Final Year</h3>
              <p>CSE – AI</p>

            </div>

            <div className="about-card">
              <span>💻</span>
             <h3>Developer</h3>
              <p>Web & Full Stack</p>

            </div>

            <div className="about-card">
              <span>🤖</span>
              <h3>AI / ML</h3>
              <p>Learning & Projects</p>

            </div>

            <div className="about-card">
              <span>🧠</span>
              <h3>Problem Solver</h3>
              <p>Logical Thinking & Coding Skills</p>
            </div>
          </div>

          <div className="about-strengths">
            <h3>Strengths</h3>
            <ul>
              <li>✅Quick Learner</li>
              <li>✅ Consistency in Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
