import Button from '../Button/Button';

function NousContacter() {
  return (
    <section className="contact">
      <h1>Nous contacter</h1>
      <p>Une question ? Une suggestion ? Une règle de la charte enfreinte ?</p>
      <p>Vous pouvez nous contacter ici !</p>
      <p>
        Il vous suffit simplement de vous rendre sur ce salon Discord, et chercher le salon
        correspondant à votre demande !
      </p>
      <p>Au plaisir de vous aider !</p>
      <Button
        link="https://discord.gg/3mr9nudVQj"
        label='Discord "WriterTalent"'
        linkTarget="_blank"
      />
    </section>
  );
}

export default NousContacter;
