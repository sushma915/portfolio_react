export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent! (Demo)");
  };

  return (
    <section className="section contactLite" id="contact">
      <div className="cl-head">
        <h2 className="cl-title">
          Contact <span>Me</span>
        </h2>
        <p className="cl-sub">
          I’m always open to learning opportunities, internships, and meaningful discussions.
        </p>
      </div>

      <div className="cl-card">
        {/* LEFT */}
        <div className="cl-left">
          <h3>Let’s Connect ✨</h3>
          <p>
            I’m a learner exploring web development and data science, and I’m happy to connect
  for internships, projects, or knowledge sharing.
          </p>

          <div className="cl-info">
           
            <div className="cl-row">
              <span className="cl-ic">📧</span>
              <div>
                <div className="cl-key">Email</div>
                <a 
                href="mailto:thotasushma15@gamil.com"
                className="cl-link"
                title="Send Email"
                >Mail me</a>
              </div>
            </div>

            <div className="cl-row">
              <span className="cl-ic">📍</span>
              <div>
                <div className="cl-key">Location</div>
                <div className="cl-val">AP, India</div>
              </div>
            </div>

            <div className="cl-row">
              <span className="cl-ic">💼</span>
              <div>
                <div className="cl-key">LinkedIn</div>
                <a
                  className="cl-link"
                  href="https://www.linkedin.com/in/thota-sushma"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile →
                </a>
              </div>
            </div>
            <div className="cl-row">
              <span className="cl-ic">🐙</span>
              <div>
                <div className="cl-key">LinkedIn</div>
                <a
                  className="cl-link"
                  href="https://github.com/sushma915"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form className="cl-form" onSubmit={onSubmit}>
          <h3>Send a Message</h3>

          <div className="cl-fields">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message..." required />
          </div>

          <button className="cl-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
