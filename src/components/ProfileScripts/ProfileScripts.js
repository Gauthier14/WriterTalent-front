import { Link } from "react-router-dom";
import { MdPublishedWithChanges } from "react-icons/md"; // published
import { GrInProgress } from "react-icons/gr"; // awaiting
import { RiDraftFill } from "react-icons/ri"; // draft
import { FaPenNib } from "react-icons/fa"; // write
import { FcReading } from "react-icons/fc"; // read

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
        <div className="awating-scripts">
          <GrInProgress size={40} />
          <h2>Mes écrits soumis</h2>
          <ul>
            <li>Ecrit 1</li>
            <li>Ecrit 2</li>
            <li>Ecrit 3</li>
            <li>Ecrit 4</li>
          </ul>
        </div>
        <div className="draft-scripts">
          <RiDraftFill size={40} />
          <h2>En cours d'écriture</h2>
          <ul>
            <li>
              Ecrit 1 <FaPenNib size={30}  />
            </li>
            <li>
              Ecrit 2 <FaPenNib size={30}  />
            </li>
            <li>
              Ecrit 3 <FaPenNib size={30}  />
            </li>
            <li>
              Ecrit 4 <FaPenNib size={30}  />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfileScripts;
