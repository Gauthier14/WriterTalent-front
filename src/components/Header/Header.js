import "./Header.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { GiBookshelf } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/genres").then((response) => {
      setGenres([...response]);
    });
  }, []);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo writerTalent" />
      </div>
      <div className="title">
        <h1>WriterTalent</h1>
      </div>
      <div className="contain-toggle">
        <GiBookshelf
          size={40}
          className="show-btn"
          onClick={() => {
            setToggleMenu(!toggleMenu);
            console.log(toggleMenu);
          }}
        />
      </div>
      <nav className={toggleMenu ? "menu-wrap" : "menu-wrap menu-wrap-hide"}>
        <ImCross
          className="close-btn"
          size={30}
          onClick={() => {
            setToggleMenu(!toggleMenu);
            console.log(toggleMenu);
          }}
        />
        <ul className="menu">
          <li className="menu-item">Accueil</li>
          <li className="menu-item">Charte du site</li>
          <li className="menu-item">Nouveautés</li>
          <li className="menu-item">
            Genre
            <ul className="drop-menu">
              {genres.map((genre) => {
                <li className="drop-menu-item" key={genre.id}>
                  <Link to={genre.name.toLowercase()}>Roman</Link>
                </li>;
              })}
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
          <li className="menu-item">Auteurs</li>
          <li className="menu-item">Se connecter</li>
          <li className="menu-item">Inscription</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
