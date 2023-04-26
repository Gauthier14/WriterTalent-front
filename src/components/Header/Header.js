import "./Header.scss";
// import axios from "axios";
import { GiBookshelf } from "react-icons/gi";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToggleMenu } from "../../actions/menu";
import logo from "../../assets/images/logo.png";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo représentant une main qui tient une plume et qui écrit Write Talent. La pointe de la plume brille comme une étoile."
          />
        </Link>
      </div>
      <div className="title">
        <Link to="/">
          <h1> WriterTalent </h1>
        </Link>
      </div>
      <div className="contain-toggle">
        <GiBookshelf
          size={40}
          className="show-btn"
          onClick={() => {
            dispatch(setToggleMenu());
          }}
        />
      </div>
      <NavMenu />
    </header>
  );
}
export default Header;
