import { Button } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
    <footer
      className="d-flex justify-content-evenly align-items-center flex-wrap p-3 gap-2"
      style={{
        backgroundImage: `url(${require("/src/assets/images/banniere2.jpeg")})`,
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: "8em"
      }}
    >
    
      <Button href="#" style={{backgroundColor: "#b6b6c4", color:"black", border:"none"}}>Mentions Légales</Button>
      <Button href="#" style={{backgroundColor: "#b6b6c4", color:"black", border:"none"}}>Qui sommes-nous ?</Button>
      <Button href="#" style={{backgroundColor: "#b6b6c4", color:"black", border:"none"}}>Nous contacter</Button>

      
    </footer>
  );
}

export default Footer;
