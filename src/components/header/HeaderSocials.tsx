import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/0parus0/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/0Parus0" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/0Parus0" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
