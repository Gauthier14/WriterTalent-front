import "./NavMenu.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenresInState,
  setCategoriesInState,
  setToggleMenu,
} from "../../actions/menu";
import LoginForm from "../LoginForm/LoginForm";

function NavMenu() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);
  const menuVisibility = useSelector((state) => state.menu.visible);
  const isLogged = useSelector((state) => state.user.logged);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/genres")
      .then((response) => {
        dispatch(setGenresInState(response.data));
      })
      .catch((error) => {
        // le serveur nous retourne 401 si les identifiants ne sont pas bons
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => {
        dispatch(setCategoriesInState(response.data));
      })
      .catch((error) => {
        // le serveur nous retourne 401 si les identifiants ne sont pas bons
        console.log(error);
      });
  }, []);

  return (
    <nav className={!menuVisibility ? "menu-wrap" : "menu-wrap menu-wrap-hide"}>
      <ImCross
        className="close-btn"
        size={30}
        onClick={() => {
          dispatch(setToggleMenu());
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
