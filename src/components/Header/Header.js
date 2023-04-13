import "./Header.scss";
import logo from '../../assets/images/logo.png'
import { useState } from "react";
import {GiBookshelf} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <div className="logo"><img src={logo}/></div>
      <div className="title">
        <h1>WriterTalent</h1>
      </div>
      <div className="contain-toggle">
        <GiBookshelf size={30} className="toggle-btn"/>
      </div>
      <nav className="menu-wrap">
        <ImCross/>
        <ul className="menu">
          <li className="menu-item">Accueil</li>
          <li className="menu-item">Charte du site</li>
          <li className="menu-item">Nouveautés</li>
          <li className="menu-item">
            Genre
            <ul className="drop-menu">
              <li className="drop-menu-item">
                <a href="#">Roman</a>
              </li>
              <li className="drop-menu-item">
                <a href="#">Policier</a>
              </li>
              <li className="drop-menu-item">
                <a href="#">Théâtre</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            Univers
            <ul className="drop-menu">
              <li className="drop-menu-item">
                <a href="#">Aventure</a>
              </li>
              <li className="drop-menu-item">
                <a href="#">Policier</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">Profil</li>
          <li className="menu-item">Se connecter</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
