import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./QuiSommesNous.scss";

function QuiSommesNous() {
  return (
    <Header />
    <section>
    <p>
      Bienvenue sur notre site dédié à la lecture et à l'écriture ! Nous sommes
      une équipe de développeurs web juniors passionnée de lecture et
      d’écriture, et nous avons créé cet espace pour partager notre amour des
      livres et de l'écriture avec d’autres lecteurs et écrivains en herbe.
    </p>
    <p>
      L'équipe du site est constituée de quatre développeurs qui maintiennent ce
      site à jour et veillent à ce que les conditions générales d'utilisation
      soient respectées. L'objectif de ce site est de permettre à tous de lire
      les écrits de chacun, chaque écrit pouvant être composés directement sur
      notre site.
    </p>
    <p>
      Nous avons créé ce site pour permettre aux lecteurs de découvrir de
      nouveaux auteurs et de nouveaux livres, mais aussi pour leur donner
      l’opportunité de discuter et de partager leurs propres réflexions et
      opinions sur la littérature, tout en respectant les conditions générales
      d'utilisation.
    </p>
    <p>
      Notre objectif est de créer une communauté de lecteurs passionnés et
      curieux, prêts à explorer toutes les facettes de la littérature, de la
      poésie à la fiction en passant par les essais et les romans graphiques.
    </p>
    <p>
      Nous espérons que vous apprécierez notre site et que vous rejoindrez notre
      communauté de lecteurs passionnés. Si vous avez des suggestions ou des
      commentaires, n’hésitez pas à nous contacter. Merci de votre visite !
    </p>
    </section>
    <Footer />

  );
}

export default QuiSommesNous;
