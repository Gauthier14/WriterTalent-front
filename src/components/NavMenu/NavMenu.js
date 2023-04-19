/* eslint-disable comma-dangle */
import "./NavMenu.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsPerCategoryOrGenreFromApi } from "../../actions/posts";
import {
  setGenresInState,
  setCategoriesInState,
  setToggleMenu,
} from "../../actions/menu";
import { getTextFieldLogin, loginUser, logout } from "../../actions/user";
import LoginForm from "../LoginForm/LoginForm";
import MenuItem from "./MenuItem";

function NavMenu() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);
  const menuVisibility = useSelector((state) => state.menu.visible);
  const isLogged = useSelector((state) => state.user.logged);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
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
        <MenuItem>
          <Link to="/"> Accueil </Link>
        </MenuItem>
        <MenuItem
          className="menu-item"
          onClick={() => {
            dispatch(setToggleMenu());
          }}
        >
          <Link to="/charte"> Charte du site </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/nouveautes"> Nouveautés </Link>
        </MenuItem>
        <li className="menu-item">
          <Link> Genre </Link>
          <ul className="drop-menu">
            {genres.map((genre) => (
              <MenuItem className="drop-menu-item" key={genre.id}>
                <Link
                  to={`/genre/${genre.id}/posts`}
                  onClick={() => {
                    dispatch(setToggleMenu());
                    dispatch(
                      getAllPostsPerCategoryOrGenreFromApi("genre", genre.id)
                    );
                  }}
                >
                  {genre.name}
                </Link>
              </MenuItem>
            ))}
          </ul>
        </li>
        <li className="menu-item">
          <Link> Univers </Link>
          <ul className="drop-menu">
            {categories.map((category) => (
              <MenuItem className="drop-menu-item" key={category.id}>
                <Link
                  to={`/category/${category.id}/posts`}
                  onClick={() => {
                    dispatch(
                      getAllPostsPerCategoryOrGenreFromApi(
                        "category",
                        category.id
                      )
                    );
                  }}
                >
                  {category.name}
                </Link>
              </MenuItem>
            ))}
          </ul>
        </li>
        <MenuItem>
          <Link to="/authors"> Auteurs </Link>
        </MenuItem>
        {isLogged ? (
          <li className="menu-item">
            <Link to="#"> Profil </Link>
            <ul className="drop-menu">
              <MenuItem className="drop-menu-item">
                <Link>Favoris</Link>
              </MenuItem>
              <MenuItem className="drop-menu-item">
                <Link>Mes écrits</Link>
              </MenuItem>
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
        {isLogged ? (
          <MenuItem
            onClick={() => {
              dispatch(logout());
            }}
          >
            <Link to="/register"> Déconnexion </Link>
          </MenuItem>
        ) : (
          <MenuItem>
            <Link to="/register"> Inscription </Link>
          </MenuItem>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
