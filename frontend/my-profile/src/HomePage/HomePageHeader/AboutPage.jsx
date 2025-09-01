import '../../CSSFiles/AboutPage.css'
import HomePageHeader from './HomePageHeader';

function AboutPage() {
  return (
    <>         
     <HomePageHeader option="2"/>
    <div id="about-page" className="about-container">
      <section className="card fade-in">
        <h2>Soft Skills</h2>
        <ul>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Quick Adaptability</li>
          <li>Problem Solving</li>
          <li>Critical Thinking</li>
          <li>Creativity</li>
          <li>Attention To Detail</li>
          <li>Continuous Learning</li>
          <li>Project Planning</li>
          <li>Workflow</li>
        </ul>
      </section>

      <section className="card fade-in delay-2">
        <h2>Profiles</h2>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/lucavladut2003/" target='_blank'>linkedin.com/in/lucavladut2003</a></p>
        <p>🐙 GitHub: <a href="https://github.com/vladluca70?tab=repositories" target='_blank'>github.com/vladluca70</a></p>
      </section>

      <section className="card fade-in delay-1">
        <h2>Contact</h2>
        <p>📞 Phone: +40 762 599 503</p>
        <p>📧 Email: vladluca70@gmail.com</p>
        <p>📘 Facebook: <a href="https://www.facebook.com/vlad.luca.73" target='_blank'>facebook.com/vlad.luca.73</a></p>
        <p>📷 Instagram: <a href="https://www.instagram.com/vladut.luca/" target='_blank'>@vladut.luca</a></p>
      </section>
    </div>
    </>
  );
}

export default AboutPage;
