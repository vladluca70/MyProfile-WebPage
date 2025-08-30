import '../../CSSFiles/HomePageHeader.css';
import { Link } from 'react-router-dom';

function HomePageHeader({option}) {
  if(option==="1"){
    return (
      <div id="home-header">
        <Link to="/about-page">About</Link>
        <Link to="/technical-skills">Technical Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education&achievements">Education & Achievements</Link>
        <Link to="/usa&germany-experience">USA & Germany Experience</Link>
        <Link to="/publications">Publications</Link>
      </div>
    );
  }
  else{
        return (
      <div id="home-header">
        <Link to="/">Home</Link>
        <Link to="/about-page">About</Link>
        <Link to="/technical-skills">Technical Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education&achievements">Education & Achievements</Link>
        <Link to="/usa&germany-experience">USA & Germany Experience</Link>
        <Link to="/publications">Publications</Link>
      </div>
    );
  }
}

export default HomePageHeader;
