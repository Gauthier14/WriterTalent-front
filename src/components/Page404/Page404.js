import img404 from 'src/assets/images/livre404.png';
import Button from '../Button/Button';

import './Page404.scss';

function Page404() {
  return (
    <main className="page-404">
      <div>
        <section>
          <img src={img404} alt="Livre ouvert posé à l'horizontale, les pages sont feuilletées" />
        </section>
        <section className="text">
          <div>
            <p className="text-404">4 0 4</p>
            <p>Consolez-vous en lisant les dernières nouveautés !!</p>
            <Button label="Nouveautés" link="/nouveautes" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page404;
