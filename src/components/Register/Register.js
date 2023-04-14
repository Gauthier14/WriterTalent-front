/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import Button from "../Button/Button";
import "./Register.scss";

function Register() {
  return (
    <main className="register">
      <section className="container">
        <div className="form-container">
          <h2>FORMULAIRE D'INSCRIPTION</h2>
          <form>
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              id="nom"
              name="nom"
              required
            />

            <label htmlFor="prenom">Prénom :</label>
            <input
              type="text"
              placeholder="Entrez votre prénom"
              id="prenom"
              name="prenom"
              required
            />

            <label htmlFor="prenom">Nom d'auteur:</label>
            <input
              type="text"
              placeholder="Entrez votre nom d'auteur"
              id="authorName"
              name="authorName"
              required
            />

            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Entrez une adresse mail valide"
              id="email"
              name="email"
              required
            />

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
              name="password"
              required
            />
            <span className="password-errors">
              <span data-criterion="length">
                Doit contenir au moins 10 caractères
              </span>
              <br />
              <span data-criterion="lowercase">
                Doit contenir au moins une lettre minuscule
              </span>
              <br />
              <span data-criterion="uppercase">
                Doit contenir au moins une lettre majuscule
              </span>
              <br />
              <span data-criterion="number">
                Doit contenir au moins un chiffres
              </span>
              <br />
              <span data-criterion="special">
                Doit contenir au moins un caractère spécial
              </span>
              <br />
            </span>
            <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <p className="info" />
            <Button label="S'inscrire" link="#" width="100%" />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
