import { Link } from "react-router-dom";
import { MdPublishedWithChanges } from "react-icons/md"; // published
import { GrInProgress } from "react-icons/gr"; // awaiting
import { RiDraftFill } from "react-icons/ri"; // draft
import { FaPenNib } from "react-icons/fa"; // write
import { FcReading } from "react-icons/fc"; // read
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";

import "./ProfileScripts.scss";

function ProfileScripts() {
  return (
    <section className="profile-scripts">
      <h1>Mes écrits</h1>
      <div className="all-scripts">
        <div className="published-scripts">
          <MdPublishedWithChanges size={40} />
          <h2> Mes écrits publiés</h2>
          <ul>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 1<FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>

              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 2 <FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>

              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 3<FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 3<FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 3<FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 3<FcReading size={35} />
              </h3>
              <div className="views-likes">
                <span className="nbViews">
                  <BsFillHandThumbsUpFill />
                  59
                </span>
                <span className="nbLikes">
                  <BsEyeFill />
                  56
                </span>
              </div>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
          </ul>
        </div>
        <div className="awating-scripts">
          <GrInProgress size={40} />
          <h2>Mes écrits soumis</h2>
          <ul>
            <li>
              <h3>Titre à rallonge pour tester le rendu 1</h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>

            <li>
              <h3>Titre à rallonge pour tester le rendu 2</h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>

            <li>
              <h3>Titre à rallonge pour tester le rendu 3</h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>

            <li>
              <h3>Titre à rallonge pour tester le rendu 4</h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
          </ul>
        </div>
        <div className="draft-scripts">
          <RiDraftFill size={40} />
          <h2>En cours d'écriture</h2>
          <ul>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 1<FaPenNib size={35} />
              </h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 2<FaPenNib size={35} />
              </h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 3 <FaPenNib size={35} />
              </h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 4 <FaPenNib size={35} />
              </h3>
              <span className="genre">Roman</span>
              <span className="category">Aventure</span>
              <span className="category">Drame</span>
            </li>
            <li>
              <h3>
                Titre à rallonge pour tester le rendu 5<FaPenNib size={35} />
              </h3>
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

export default ProfileScripts;
