import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Parus
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/0parus0/" target="_blank">
          <BsLinkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=00923325574731"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
        <a href="https://www.instagram.com/__raja_yasir__/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/0Parus0" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Parus UI/UX developer </small>
      </div>
    </footer>
  );
};

export default Footer;
