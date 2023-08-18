import "./about.css";
import ME from "../../assets/me_sitting_no_bg.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ complete</small>
            </article>
          </div>

          <p>
            I'm an experienced Frontend Software Engineer focused on crafting
            user-friendly web applications. Proficient in HTML, CSS3, SASS/SCSS,
            and JavaScript, I have a track record of creating dynamic interfaces
            using React and Redux Toolkit. I enhance user experiences through
            React Router, React Query, and Redux Toolkit Query. With React
            Testing Library and Jest, I ensure reliable app functionality. I
            prioritize clean code using TypeScript and React TypeScript, and I
            excel in creating visually appealing UI/UX with tools like Styled
            Components, Material UI, Bootstrap, and Tailwind CSS. I'm skilled in
            Webpack, Vite, and have a solid grasp of backend concepts like
            Node.js and Express. Additionally, I'm well-versed in the Linux
            operating system.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
