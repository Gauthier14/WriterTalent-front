/* eslint-disable max-len */
import { Container } from "react-bootstrap";
import "./Main.scss";

function Main() {
  return (
    <Container fluid>
      <article className="container">
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
          lire la Charte d'utilisation du site.
        </p>
        <p>
          Nous vous souhaitons une bonne visite sur notre site 'WriterTalent' et
          une excellente lecture !
        </p>
      </article>
      <button type="button" className="surprise">Surprenez-moi !</button>
      <div className="container-main">
        <section className="left">
          <div className="slogan">Lisez, Ecrivez, Aimez !</div>
        </section>
        <section className="right">
        
          <div className="bestRead">
            <h2 >Les plus lus</h2>
          </div>
          <ul>
            <h3>Un cadeau de deux mains</h3>
            <span className="genre">Roman</span>
            <span className="style">Policier</span>
            <span>
              <img src="" alt="Logo like" />
            </span>
            <span className="nbLikes">986</span>
          </ul>

          <ul>
            <h3>Un cadeau de deux mains</h3>
            <span className="genre">Roman</span>
            <span className="style">Policier</span>
            <span>
              <img src="" alt="Logo like" />
            </span>
            <span className="nbLikes">986</span>
          </ul>

          <ul>
            <h3>Un cadeau de deux mains</h3>
            <span className="genre">Roman</span>
            <span className="style">Policier</span>
            <span>
              <img src="" alt="Logo like" />
            </span>
            <span className="nbLikes">986</span>
          </ul>

          <ul>
            <h3>Un cadeau de deux mains</h3>
            <span className="genre">Roman</span>
            <span className="style">Policier</span>
            <span>
              <img src="" alt="Logo like" />
            </span>
            <span className="nbLikes">986</span>
          </ul>

          <ul>
            <h3>Un cadeau de deux mains</h3>
            <span className="genre">Roman</span>
            <span className="style">Policier</span>
            <span>
              <img src="" alt="Logo like" />
            </span>
            <span className="nbLikes">986</span>
          </ul>

          <button type="button">Voir plus</button>
        </section>
      </div>
    </Container>
  );
}

export default Main;
