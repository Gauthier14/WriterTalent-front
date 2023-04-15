import "./NavMenu.scss";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

function NavMenu() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const isLogged = false;
  const genres = [
    {
      id: 26,
      name: "Roman",
      slug: "roman",
    },
    {
      id: 27,
      name: "Poésie",
      slug: "poesie",
    },
    {
      id: 28,
      name: "Théatre",
      slug: "theatre",
    },
    {
      id: 29,
      name: "Conte",
      slug: "conte",
    },
    {
      id: 30,
      name: "Nouvelle",
      slug: "nouvelle",
    },
    {
      id: 33,
      name: "TEST",
      slug: "test",
    },
  ];
  const categories = [
    {
      id: 26,
      name: "Fantastique",
      slug: "fantastique",
    },
    {
      id: 27,
      name: "S. F",
      slug: "science-fiction",
    },
    {
      id: 28,
      name: "Aventure",
      slug: "aventure",
    },
    {
      id: 29,
      name: "Policier",
      slug: "policier",
    },
    {
      id: 30,
      name: "Historique",
      slug: "historique",
    },
    {
      id: 33,
      name: "Scientifique",
      slug: "scientifique",
    },
  ];
  return (
    <nav className={toggleMenu ? "menu-wrap" : "menu-wrap menu-wrap-hide"}>
      <ImCross
        className="close-btn"
        size={30}
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      />
      <ul className="menu">
        <li
          className="menu-item"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Link to="/"> Accueil </Link>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Link to="/charte"> Charte du site </Link>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Link to="/nouveautes"> Nouveautés </Link>
        </li>
        <li className="menu-item">
          <Link> Genre </Link>
          <ul className="drop-menu">
            {genres.map((genre) => (
              <li
                className="drop-menu-item"
                key={genre.id}
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <Link to={genre.slug}> {genre.name} </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="menu-item">
          <Link> Univers </Link>
          <ul className="drop-menu">
            {categories.map((category) => (
              <li
                className="drop-menu-item"
                key={category.id}
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <Link to={category.slug}> {category.name} </Link>
              </li>
            ))}
          </ul>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Link to="#"> Auteurs </Link>
        </li>
        {isLogged ? (
          <li className="menu-item">
            <Link to="#"> Profil </Link>
            <ul className="drop-menu">
              <li
                className="drop-menu-item"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <Link>Favoris</Link>
              </li>
              <li
                className="drop-menu-item"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                <Link>Mes écrits</Link>
              </li>
            </ul>
          </li>
        ) : (
          <li className="menu-item">
            <Link to="#"> Se connecter </Link>
            <ul className="drop-menu">
              <LoginForm />
            </ul>
          </li>
        )}
        {isLogged ? (
          <li
            className="menu-item"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <Link to="/register"> Déconnexion </Link>
          </li>
        ) : (
          <li
            className="menu-item"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <Link to="/register"> Inscription </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
