import "./about.css";
// import ME from "../../assets/me_sitting_no_bg.png";
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
            {/* <img src={ME} alt="About Image" /> */}
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
            I'm a ReactJS Frontend Developer with four years of experience
            crafting web applications that seamlessly blend aesthetics and
            functionality. Proficient in HTML, CSS/Sass-Scss, and JavaScript, I
            leverage frameworks like Tailwind CSS, Styled Components, Bootstrap,
            and Material UI. In addition to frontend development, I have strong
            backend expertise, including Node.js, Express.js, MongoDB, Mongoose
            ODM, and SupabaseDB. I excel in developing REST APIs for robust
            backend functionality. Navigating complex state management, I use
            tools like ReduxJS, Redux Toolkit, Redux Toolkit Query, React Query,
            and Redux Thunks. Ensuring code quality, I focus on TypeScript and
            React TypeScript, conducting rigorous testing with React Testing
            Library and Jest. Fluent in English, with expertise in Linux, I
            bring adaptability to diverse development environments. Committed to
            continuous learning, I stay ahead of industry trends for innovative
            solutions. Known for seamless collaboration within teams, I look
            forward to exploring how my expertise in both frontend and backend
            technologies can contribute to your projects. Whether you need a
            skilled developer or insightful discussions, I'm ready to
            collaborate.
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
