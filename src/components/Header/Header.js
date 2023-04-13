import "./Header.scss";
import banner from "../../assets/images/banniere1.jpeg";

function Header() {
  return (
    <header
      className="navbar mb-5 rounded-bottom p-3 w-100"
      style={{
        background: `url(${banner}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <nav className="menu-wrap">
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
