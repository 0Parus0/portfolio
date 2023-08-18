import { BiCheck } from "react-icons/bi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Excellent verbal, written, and visual communication skills</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience with prototyping and design tools such as Adobe
                Creative Suite (Illustrator, Photoshop, InDesign), Figma,
                InVision, Sketch etc.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conceptual sketching</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience of working with UX Designers and developers to build
                awesome products or services
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ability to create UI assets that are reusable components</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience working with development teams to implement and
                refine designs
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop efficient and reusable front-end components</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with UI/UX designers to translate design mock-ups
                into responsive web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement responsive designs and ensure compatibility across
                different devices and browsers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Optimize application performance and ensure high-quality code
                through code reviews and testing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with back-end developers and integrate front-end
                components with server-side logic.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Stay updated on emerging technologies and industry best
                practices to enhance development processes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Troubleshoot and debug front-end issues and provide timely
                resolutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control using git and github.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create content that is consistent, timely, and accurate</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Guarantee realistic deadlines and outcomes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proactively plan for common roadblocks in content planning and
                launches
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Clearly establish how every team member fits in the big picture
                of creating the content
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Every piece of content goes through a standard quality control
                process
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content is distributed and promoted well</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
