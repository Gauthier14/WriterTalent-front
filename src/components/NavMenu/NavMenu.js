import "./NavMenu.scss";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginForm from "../LoginForm/LoginForm";

function NavMenu() {
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const toggleMenu = useSelector((state) => state.menu.visible);
  const isLoaded = useSelector((state) => state.posts.allUserPosts);
  const isLogged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:8000/api/genres").then((response) => {
      setGenres([...response.data]);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/api/categories").then((response) => {
      setCategories([...response.data]);
    });
  }, []);
  const isLogged = false;
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
                <Link to={`/genre/${genre.id}`}> {genre.name} </Link>
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
                <Link to={`/category/${category.id}`}> {category.name} </Link>
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
          <Link to="/authors"> Auteurs </Link>
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
