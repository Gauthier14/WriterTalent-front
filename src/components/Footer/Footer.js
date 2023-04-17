import Button from "../Button/Button";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Button
        label="Mentions Légales"
        link="/MentionsLegales"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
      <Button
        label="Qui sommes-nous ?"
        link="/QuiSommesNous"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
      <Button
        label="Nous contacter"
        link="/NousContacter"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
    </footer>
  );
}

export default Footer;
