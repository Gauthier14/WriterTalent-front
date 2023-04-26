/* eslint-disable max-len */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import LikedItem from "../LikedItem/LikedItem";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";
import "./Home.scss";
import { getAllMostLikedPostsFromApi } from "../../actions/posts";
import Message from "../Message/Message";

function Home() {
  const dispatch = useDispatch();
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);
  const mostLikedPosts = useSelector((state) => state.posts.mostLikedPosts);
  const likedPosts = mostLikedPosts.filter((post, index) => index < 3);
  useEffect(() => {
    dispatch(getAllMostLikedPostsFromApi());
  }, [mostLikedPosts]);
  return (
    <main className="home-main">
      {/* <ButtonGoWriter /> */}
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
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
            {likedPosts.map((post) => (
              <LikedItem key={post.id} {...post} />
            ))}
            <Button label="Lire plus d'histoires" link="/nouveautes" />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Home;
