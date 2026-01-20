function SkillIcon({ name }) {
const icons = {
  HTML5: "🌐",
  CSS3: "🎨",
  JavaScript: "⚡",
  "React.js": "⚛️",
  "Tailwind CSS": "💨",
  Bootstrap: "🅱️",
  MySQL: "🗄️",
  Python: "🐍",
  Java: "☕",

  "Gen AI": "🧠",
  "Agentic AI": "🤖",

  Git: "🔧",
  GitHub: "🐙",
  "VS Code": "💻",
};

  return <span className="ss-icon">{icons[name] || "⭐"}</span>;
}

export default function Skills() {
 const coreSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "Python",
  "Java",
  "Gen AI"
];


  const tools = ["Git", "GitHub", "VS Code"];

  return (
    <section className="section skillShowcase" id="skills">
      <div className="ss-head">
        <h2 className="ss-title">
          My <span>Skills</span>
        </h2>

        <p className="ss-sub">
  Technologies and tools I am learning and applying in web development and data science.
</p>

      </div>

      <div className="ss-board">
        <div className="ss-two">
          {/* LEFT: Core skills */}
          <div className="ss-col">
            <div className="ss-colTop">
              <h3>Core Skills</h3>
              <span className="ss-badge ss-badge1">Development</span>
            </div>

            <div className="ss-grid">
              {coreSkills.map((skill, i) => (
                <div className="ss-tile" key={i}>
                  <div className="ss-tileIcon">
                    <SkillIcon name={skill} />
                  </div>
                  <div className="ss-tileText">
                    <h4>{skill}</h4>
                    <p>Learning and implementation</p>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Tools */}
          <div className="ss-col">
            <div className="ss-colTop">
              <h3>Tools & Technologies</h3>
              <span className="ss-badge ss-badge2">Workspace</span>
            </div>

            <div className="ss-grid">
              {tools.map((tool, i) => (
                <div className="ss-tile" key={i}>
                  <div className="ss-tileIcon ss-tileIcon2">
                    <SkillIcon name={tool} />
                  </div>
                  <div className="ss-tileText">
                    <h4>{tool}</h4>
                    <p>Used during development</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="ss-footer">
          <div className="ss-glowDot"></div>
          <p>
  I enjoy writing clean code, solving problems, and continuously learning
  web development, data science, and AI technologies.
</p>

        </div>
      </div>

      {/* Background glow */}
      <div className="ss-blob ss1"></div>
      <div className="ss-blob ss2"></div>
    </section>
  );
}
