import { Link } from "react-router-dom";
import {BsBalloonHeartFill} from "react-icons/bs"; 
import { FcReading } from "react-icons/fc"; // read
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";


import "./ProfileFavorites.scss";

function ProfileFavorites() {
  return (
    <section className="favorites-scripts">
      <h1>Mes coups de coeur</h1>
      <div className="all-favorites-scripts">
        <div className="my-favorites-scripts">
          <BsBalloonHeartFill size={40}/>
          <ul>
            <li>
              <h3>Ecrit 1 <FcReading size={30}  /></h3>
              <div className="views-likes">
              <span className="nbViews"><BsFillHandThumbsUpFill />59</span>
              <span className="nbLikes"><BsEyeFill />56</span>
            
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>Ecrit 2 <FcReading size={30}  /></h3>
              <div className="views-likes">
              <span className="nbViews"><BsFillHandThumbsUpFill />59</span>
              <span className="nbLikes"><BsEyeFill />56</span>
            
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>Ecrit 3 <FcReading size={30}  /></h3>
              <div className="views-likes">
              <span className="nbViews"><BsFillHandThumbsUpFill />59</span>
              <span className="nbLikes"><BsEyeFill />56</span>
            
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>Ecrit 4 <FcReading size={30}  /></h3>
              <div className="views-likes">
              <span className="nbViews"><BsFillHandThumbsUpFill />59</span>
              <span className="nbLikes"><BsEyeFill />56</span>
            
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default ProfileFavorites;
