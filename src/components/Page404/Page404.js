/* eslint-disable quotes */
import img404 from "src/assets/images/livre404.png";
import Button from "../Button/Button";

import "./Page404.scss";

function Page404() {
  return (
    <main className="page-404">
      <section>
        <img src={img404} alt="Livre ouvert" />
      </section>
      <section className="text">
        <div>
          <p className="text-404">4 0 4</p>
          <p>Consolez-vous en lisant les dernières nouveautés !!</p>
          <Button label="Accueil" link="/" />
        </div>
      </section>
    </main>
  );
}

export default Page404;
