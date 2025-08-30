import '../../CSSFiles/AboutPage.css'
import HomePageHeader from './HomePageHeader';

function AboutPage() {
  return (
    <>         
     <HomePageHeader/>
    <div id="about-page" className="about-container">
      <section className="card fade-in">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / React</li>
          <li>Python / Machine Learning Basics</li>
          <li>C# / .NET Clean Architecture</li>
          <li>SQL & Database Management</li>
          <li>Linux & Networking</li>
        </ul>
      </section>

      <section className="card fade-in delay-1">
        <h2>Contact</h2>
        <p>📞 Phone: +40 712 345 678</p>
        <p>📧 Email: example@email.com</p>
        <p>📘 Facebook: <a href="https://facebook.com/username">facebook.com/username</a></p>
        <p>📷 Instagram: <a href="https://instagram.com/username">@username</a></p>
      </section>

      <section className="card fade-in delay-2">
        <h2>Profiles</h2>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/username">linkedin.com/in/username</a></p>
        <p>🐙 GitHub: <a href="https://github.com/username">github.com/username</a></p>
      </section>
    </div>
    </>
  );
}

export default AboutPage;
