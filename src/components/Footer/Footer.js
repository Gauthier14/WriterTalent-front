import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const [showLinks, setShowLinks] = useState(false);
  const handleClick = () => {
    setShowLinks(!showLinks);
  };
  return (
    <footer>
      <div className={showLinks ? 'link-group' : 'link-group-hide'}>
        <Link to="/mentions-legales" onClick={handleClick}>
          Mentions Légales
        </Link>
        <Link label="" to="/qui-sommes-nous" onClick={handleClick}>
          Qui sommes-nous ?
        </Link>
        <Link to="/nous-contacter" onClick={handleClick}>
          Nous contacter
        </Link>
      </div>
      <span onClick={handleClick}>Liens utiles</span>
      <div className="copy-social">
        <span>© WriterTalent, 2023</span>
        <Link to="https://discord.gg/3mr9nudVQj" target="_blank">
          <FaDiscord size={30} color="#fff" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
