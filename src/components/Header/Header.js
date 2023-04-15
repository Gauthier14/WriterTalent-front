import "./Header.scss";
// import axios from "axios";
import { useState, useEffect } from "react";
import { GiBookshelf } from "react-icons/gi";
import logo from "../../assets/images/logo.png";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  /* const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/genres").then((response) => {
      setGenres([...response]);
    });
  }, []); */
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo writerTalent" />
      </div>
      <div className="title">
        <h1> WriterTalent </h1>
      </div>
      <div className="contain-toggle">
        <GiBookshelf
          size={40}
          className="show-btn"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </div>
      <NavMenu />
    </header>
  );
}
export default Header;
