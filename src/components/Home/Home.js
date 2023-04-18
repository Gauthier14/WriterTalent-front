/* eslint-disable max-len */
import { BsFillHandThumbsUpFill, BsArrowBarUp } from "react-icons/bs";
import Button from "../Button/Button";
import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";
import "./Home.scss";

function Home() {
  return (
    <main className="home-main">
      {/* <ButtonGoWriter /> */}
      <article>
        <p>
          Sur ce site, nous offrons l'opportunité de lire le travail des
          écrivains en herbes qui aiment partager le fruit de leur imagination
          avec une communauté dans le but d'obtenir des commentaires
          constructifs.
        </p>
        <p>
          Vous pouvez également partager vos œuvres en ligne tels que des
          essais, des romans, des nouvelles, des poèmes et d'autres genres et
          surtout lire toutes les publications. Tout est GRATUIT !
        </p>
        <p>
          Pour ajouter vos propres écrits, il vous suffit de vous inscrire et/ou
          de vous connecter.
        </p>
        <p>
          Soyez créatifs et inspirés dans vos écrits. Nous vous invitons à bien
          lire la Charte d'utilisation.
        </p>
        <p>
          Nous vous souhaitons une bonne visite sur 'WriterTalent' et une
          excellente lecture !
        </p>
      </article>

      <div className="container-main">
        <section className="left">
          <span className="slogan">Lisez,</span>
          <span className="slogan">Ecrivez,</span>
          <span className="slogan">Aimez !</span>
        </section>
        <section className="right">
          <div className="bestRead">
            <Button label="Surprenez-moi !" link="#" />
            <h2>Les plus aimés</h2>
          </div>
          <ul>
            <li>
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
            </li>
            <Button label="Lire plus d'histoires" link="#" />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Home;
