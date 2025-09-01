import React, { useState } from "react";
import "../../CSSFiles/HomePageBody.css";
import profilePic from "../../assets/vlad_luca.jpg"; 

function HomePage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="home-container">
      <div className="home-intro">
        <img
          src={profilePic} 
          alt="Luca Vladut"
          className="profile-pic"
        />
        <h1 className="home-name">Luca Vladut</h1>
        <p className="home-description">
          Computer Science graduate with a strong interest in software development and machine learning. Experienced in C#, .NET, Python, SQL, and React. Skilled in problem-solving, teamwork, and quickly adapting to new technologies. Passionate about creating efficient applications and continuously improving my skills through real-world projects.
        </p>
      </div>

      <div
        className="contact-container"
        onMouseEnter={() => setShowContact(true)}
        onMouseLeave={() => setShowContact(false)}
      >
        <button className="contact-btn">Contact</button>

        {showContact && (
          <div className="contact-popup">
            <ul>
              <li>
                🐙 GitHub: <a href="https://github.com/vladluca70?tab=repositories" target="_blank" rel="noreferrer">github.com/vladluca70</a>
              </li>
              <li>
                💼 LinkedIn: <a href="https://www.linkedin.com/in/lucavladut2003/" target="_blank" rel="noreferrer">linkedin.com/in/lucavladut2003</a>
              </li>
              <li>📞 Phone: +40 762 599 503</li>
              <li>📧 Email: vladluca70@gmail.com</li>
              <li>
                📷 Instagram: <a href="https://www.instagram.com/vladut.luca/" target="_blank" rel="noreferrer">@vladut.luca</a>
              </li>
                <li>
                📘 Facebook: <a href="https://www.facebook.com/vlad.luca.73" target="_blank" rel="noreferrer">@vlad.luca.73</a>
              </li>            
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
