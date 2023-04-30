import { BsArrowBarUp } from "react-icons/bs";
import Button from "../Button/Button";
import "./Footer.scss";
import { scrollToTop } from "../../selectors/pages";

function Footer() {
  return (
    <footer>
      <Button
        label="Mentions Légales"
        link="/mentions-legales"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
      <Button
        label="Qui sommes-nous ?"
        link="/qui-sommes-nous"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
      <Button
        label="Nous contacter"
        link="/nous-contacter"
        bgColor="rgba(255, 255, 255, 0.466)"
        color="#000"
      />
      <BsArrowBarUp
        className="scroll-button"
        onClick={() => {
          scrollToTop();
        }}
      />
    </footer>
  );
}

export default Footer;
