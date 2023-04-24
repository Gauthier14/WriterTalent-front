import { Link } from "react-router-dom";
import {BsBalloonHeartFill} from "react-icons/bs"; 
import { FcReading } from "react-icons/fc"; // read


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
              Ecrit 1 <FcReading size={30}  />
            </li>
            <li>
              Ecrit 2 <FcReading size={30}  />
            </li>
            <li>
              Ecrit 3 <FcReading size={30}  />
            </li>
            <li>
              Ecrit 4 <FcReading size={30}  />
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default ProfileFavorites;
