/* eslint-disable comma-dangle */
import "./NavMenu.scss";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import {
  setToggleMenu,
  getCategoriesFromApi,
  getGenresFromApi,
} from "../../actions/menu";
import { setEditPostInState } from "../../actions/editor";
import MenuItem from "./MenuItem";
import DropMenuItem from "./DropMenuItem";
import { manageSessionStorage } from "../../selectors/user";
import WriterButton from "../WriterButton/WriterButton";
import { logout } from "../../actions/user";

function NavMenu() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);
  const menuVisibility = useSelector((state) => state.menu.visible);
  const checkLogin = useSelector((state) => state.user.checkLogin);
  const isLogged = Boolean(manageSessionStorage("get", "logged"));

  useEffect(() => {
    dispatch(getGenresFromApi());
  }, [checkLogin]);
  useEffect(() => {
    dispatch(getCategoriesFromApi());
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
        <MenuItem>
          <Link to="/charte"> Charte du site </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/nouveautes">Nouveautés</Link>
        </MenuItem>
        <li className="menu-item">
          <Link> Genre </Link>
          <ul className="drop-menu">
            {genres.map((genre) => (
              <DropMenuItem
                key={genre.id}
                pathname={`/genre/${genre.id}/posts`}
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
                label={category.name}
                pathname={`/category/${category.id}/posts`}
              />
            ))}
          </ul>
        </li>
        <MenuItem>
          <Link to="/authors">Auteurs</Link>
        </MenuItem>
        {isLogged ? (
          <li className="menu-item">
            <Link to="#"> Profil </Link>
            <ul className="drop-menu">
              <DropMenuItem label="Favoris" pathname="/user/posts/favorites" />
              <DropMenuItem
                label="Mes écrits"
                pathname="/user/posts/my-posts"
              />
              <DropMenuItem
                label="Lire plus tard"
                pathname="/user/posts/to-read"
              />
            </ul>
          </li>
        ) : (
          <MenuItem>
            <Link to="/login"> Se connecter </Link>
          </MenuItem>
        )}
        {/* TODO Route API pour la deconexion Déconnexion */}
        {isLogged ? (
          <MenuItem>
            <Link
              to="/"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Déconnexion
            </Link>
          </MenuItem>
        ) : (
          <MenuItem>
            <Link to="/register"> Inscription </Link>
          </MenuItem>
        )}
      </ul>

      {isLogged && pathname !== "/edit" && <WriterButton />}
    </nav>
  );
}

export default NavMenu;
