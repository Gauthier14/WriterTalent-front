import './Header.scss';

function Header() {
  return (
    <header>
      <img src="" alt="Logo WriterTalent" />
      <h1>WriterTalent</h1>
      <button type="button">Accueil</button>
      <button type="button">Charte du site</button>
      <button type="button">Nouveautés</button>
      <button type="button">Genres</button>
      <button type="button">Univers</button>
      <button type="button">Auteurs</button>
      <button type="button">Se connecter</button>
      <button type="button">S'inscrire</button>
      <button type="button">Ecrire un texte</button>
      {/* The button 'Ecrire' should only appear when the user is logged in */}
    </header>
  );
}

export default Header;
