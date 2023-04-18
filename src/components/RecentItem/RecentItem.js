/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const RecentItem = ({ title, genre, category, nbLikes }) => (
  <li>
    <h3>{title}</h3>
    <p>
      <span className="genre">{genre}</span>
      <span className="Category">{category}</span>
      <BsFillHandThumbsUpFill size={30} color="#42D11F" />
      <span className="nbLikes">{nbLikes}</span>
    </p>
  </li>
);

RecentItem.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  genre: PropTypes.string,
  nbLikes: PropTypes.number,
};

RecentItem.defaultProps = {
  title: "Le loir est cher",
  genre: "Roman",
  category: "Fantastique",
  nbLikes: 50,
};

export default RecentItem;
/* <li>
  <h3>Le loir est cher</h3>
  <p>
    <span className="genre">Poésie</span>
    <span className="style">Aventure</span>
    <BsFillHandThumbsUpFill size={30} color="#42D11F" />
    <span className="nbLikes">986</span>
  </p>
</li>
<li>
  <h3>Un cadeau de deux mains</h3>
  <p>
    <span className="genre">Roman</span>
    <span className="style">Policier</span>
    <BsFillHandThumbsUpFill size={30} color="#42D11F" />
    <span className="nbLikes">979</span>
  </p>
</li>
<li>
  <h3>J'aime (pas) les choux de bruxelles !</h3>
  <p>
    <span className="genre">Conte</span>
    <span className="style">Humour</span>
    <BsFillHandThumbsUpFill size={30} color="#42D11F" />
    <span className="nbLikes">814</span>
  </p>
</li>
<li>
  <h3>Je t'épate ! L'eusses-tu cru ?</h3>
  <p>
    <span className="genre">Théâtre</span>
    <span className="style">Humour</span>
    <BsFillHandThumbsUpFill size={30} color="#42D11F" />
    <span className="nbLikes">783</span>
  </p>
</li> */
