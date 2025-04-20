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
      <nav className="navbar">
        <div className="logo">HeartSpeak AI</div>
      </nav>



      <main id="home" className="content">
        <h1 className="title">14 — T1 — Sentiment Analysis </h1>
        <p className="subtitle">CS4850 — Spring 2025</p>

        <section id="team" className="section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="card-grid">
            {teamMembers.map((member) => (
              <div className="card" key={member.name}>
                <img src={member.img} alt={member.name} className="avatar" />
                <p className="member-name">{member.name}</p>
                <p className="member-subtitle">{member.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="section">
          <h2 className="section-title">Project Documents</h2>
          <h3 classname= "subtitle">Documents</h3>
          <a href="/docs/14-T1-Sentiment Analysis-FinalReport.pdf" target="_blank" rel="noopener noreferrer">Final Report Document</a><br />
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Project Plan Document</a><br />
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Requirements Document (SRS)</a>
          <a> & </a>
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Design Document (SDD)</a><br />
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Devlopment Document</a><br />
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Test Plan Document</a>
          <a> & </a>
          <a href="/docs/requirements.pdf" target="_blank" rel="noopener noreferrer">Test Report Document</a><br />
        </section>

        <section className="section">
        <h3 classname= "subtitle">Links</h3>
          <a id="github" href="https://github.com/KSU-Sentiment-Analysis/sentiment-analysis-Integration" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a><br />
          <a id="video" href="/videos/final-presentation.mp4" target="_blank" rel="noopener noreferrer">
            Final Presentation Video
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 HeartSpeak AI | CS4850 — Spring 2025</p>
        <p>Project Members: Isha Minocha, Nabeel Faridi, Arvind Iyer, Ethan Barnes, and Shammah Charles</p>
        <p className="footer-note">For academic use only.</p>
      </footer>
    </div>
  );
}