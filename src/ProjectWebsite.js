import React from "react";
import "./ProjectWebsite.css";

export default function ProjectWebsite() {
  const teamMembers = [
    { name: "Arvind Iyer", subtitle: "Team Leader & Back-End AI Devloper", img: "/arvind.jpg" },
    { name: "Nabeel Faridi", subtitle: "Front-End Developer & Tester", img: "/nabeel.jpg" },
    { name: "Isha Minocha", subtitle: "UI/UX Designer & Tester", img: "/isha.jpg" },
    { name: "Ethan Barnes", subtitle: "OpenAI & Cloud Developer", img: "/ethan.jpg" },
    { name: "Shammah Charles", subtitle: "UI/UX Designer", img: "/shammah.jpg" },
  ];

  return (
    <div className="page-container">
      <nav className="header">
        <div className="logo">HeartSpeak AI</div>
      </nav>

      <main id="home" className="content">
        <h1 className="title">14 — T1 — Sentiment Analysis</h1>
        <p className="subtitle">CS4850 — Spring 2025</p>

        <section id="team" className="section">
          <h2 className="section-title">Meet the Team:</h2>
          <div className="card-grid">
            {teamMembers.map((member, index) => (
              <div className="fade-in-up" style={{ animationDelay: `${0.2 + index * 0.2}s` }} key={member.name}>
                <div className="card">
                  <img src={member.img} alt={member.name} className="avatar" />
                  <p className="member-name">{member.name}</p>
                  <p className="member-subtitle">{member.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="section">
          <h2 className="section-title">Project Documents:</h2>
          <h3 className="section-subtitle">📄 Documents:</h3>
          <ul>
            <li>
              <a href="/14-T1-Sentiment Analysis-FinalReport.pdf" target="_blank" rel="noopener noreferrer">
                Final Report Document
              </a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h3 className="section-subtitle">🔗 Links:</h3>
          <ul>
            <li>
              <a href="https://github.com/KSU-Sentiment-Analysis/sentiment-analysis-Integration" target="_blank" rel="noopener noreferrer">
                View Project on GitHub
              </a>
            </li>
            <li>
              <a href="/final-presentation.mp4" target="_blank" rel="noopener noreferrer">
                Final Presentation Video
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 HeartSpeak AI | CS4850 — Spring 2025</p>
        <p className="footer-note">Isha Minocha, Nabeel Faridi, Ethan Barnes, Arvind Iyer & Shammah Charles</p>
      </footer>
    </div>
  );
}