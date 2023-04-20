/* eslint-disable comma-dangle */
import "./NavMenu.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFavoriteUserPostsFromApi,
  getAllMostLikedPostsFromApi,
  getAllUserPublishedPostsFromApi,
  getRecentPostsFromApi,
} from "../../actions/posts";
import {
  setGenresInState,
  setCategoriesInState,
  setToggleMenu,
} from "../../actions/menu";
import {
  getAllAuthors,
  getTextFieldLogin,
  loginUser,
  logout,
} from "../../actions/user";
import LoginForm from "../LoginForm/LoginForm";
import MenuItem from "./MenuItem";
import DropMenuItem from "./DropMenuItem";

function NavMenu() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);
  const menuVisibility = useSelector((state) => state.menu.visible);
  const isLogged = localStorage.getItem("token");
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const userId = useSelector((state) => state.user.id);
  useEffect(() => {
    axios
      .get("http://kyllian-g-server.eddi.cloud:8443/api/genres")
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
      .get("http://kyllian-g-server.eddi.cloud:8443/api/categories")
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
        <MenuItem dispatchMethod={getAllMostLikedPostsFromApi}>
          <Link to="/"> Accueil </Link>
        </MenuItem>
        <li
          className="menu-item"
          onClick={() => {
            dispatch(setToggleMenu());
          }}
        >
          <Link to="/charte"> Charte du site </Link>
        </li>
        <MenuItem dispatchMethod={getRecentPostsFromApi}>
          <Link to="/nouveautes">Nouveautés</Link>
        </MenuItem>
        <li className="menu-item">
          <Link> Genre </Link>
          <ul className="drop-menu">
            {genres.map((genre) => (
              <DropMenuItem
                key={genre.id}
                param="genre"
                id={genre.id}
                label={genre.name}
              />
            ))}
          </ul>
        </li>
        <li className="menu-item">
          <Link> Univers </Link>
          <ul className="drop-menu">
            {categories.map((category) => (
              <DropMenuItem
                key={category.id}
                param="category"
                id={category.id}
                label={category.name}
              />
            ))}
          </ul>
        </li>
        <MenuItem dispatchMethod={getAllAuthors}>
          <Link to="/authors">Auteurs</Link>
        </MenuItem>
        {isLogged ? (
          <li className="menu-item">
            <Link to="#"> Profil </Link>
            <ul className="drop-menu">
              <li
                className="drop-menu-item"
                onClick={() => {
                  dispatch(setToggleMenu());
                  dispatch(getAllFavoriteUserPostsFromApi(userId));
                }}
              >
                <Link>Favoris</Link>
              </li>
              <li
                className="drop-menu-item"
                onClick={() => {
                  dispatch(setToggleMenu());
                  dispatch(getAllUserPublishedPostsFromApi(userId));
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
              <LoginForm
                changeField={(inputValue, inputName) => {
                  dispatch(getTextFieldLogin(inputValue, inputName));
                }}
                email={email}
                password={password}
                handleLogin={() => {
                  dispatch(loginUser());
                }}
              />
            </ul>
          </li>
        )}
        {/* TODO Route API pour la deconexion Déconnexion */}
        {isLogged ? (
          <MenuItem dispatchMethod={logout} className="menu-item">
            <Link to="/" />
            Déconnexion
          </MenuItem>
        ) : (
          <li
            className="menu-item"
            onClick={() => {
              dispatch(setToggleMenu());
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
