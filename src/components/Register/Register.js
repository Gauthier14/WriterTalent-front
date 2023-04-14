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
            
            <label fothtml="nom">Nom :</label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              id="nom"
              name="nom"
              required
            />

            <label forhtml="prenom">Prénom :</label>
            <input
              type="text"
              placeholder="Entrez votre prénom"
              id="prenom"
              name="prenom"
              required
            />

            <label fothtml="prenom">Nom d'auteur:</label>
            <input
              type="text"
              placeholder="Entrez votre nom d'auteur"
              id="authorName"
              name="authorName"
              required
            />

            <label fothtml="email">Email :</label>
            <input
              type="email"
              placeholder="Entrez une adresse mail valide"
              id="email"
              name="email"
              required
            />

            <label fothtml="password">Mot de passe :</label>
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
            <label fothtml="confirmPassword">Confirmez le mot de passe :</label>
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <p className="info"></p>
            <Button label="S'inscrire" link="#" className="btn-register"/>
          </form>
        </div>
       
      </section>
    </main>
  );
}

export default Register;
