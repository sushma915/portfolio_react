import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const BASE = process.env.PUBLIC_URL;

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-img">
          <div className="hero-ring">
            <img src={`${BASE}/profile.jpg`} alt="Sushma" />
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I’m <span>Thota Sushma</span>
        </h1>

        <p className="hero-subtitle">
  Aspiring AI Engineer and Web Developer passionate about building{" "}
  <span className="hl">modern</span>, scalable web applications with a strong interest in <span className="hl2">Machine Learning & AI</span>.
</p>


        {/* ✅ Social Icons */}
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/thota-sushma"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/sushma915"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:thotasushma15@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
