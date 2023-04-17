/* eslint-disable quotes */
import Button from "../Button/Button";

import "./Page404.scss";

function Page404() {
  return (
    <main>
      <section className="image">
        <img src="src/assets/images/livre404.png" alt="Livre ouvert" />
      </section>
      <section className="text">
        <div>
          <p className="page404">4 0 4</p>
          <p>Consolez-vous en lisant les dernières nouveautés !!</p>
          <Button label="Accueil" link="/" />
        </div>
      </section>
    </main>
  );
}

export default Page404;
