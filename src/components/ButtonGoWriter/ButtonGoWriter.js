/* eslint-disable react/require-default-props */

import "./ButtonGoWriter.scss";
import Button from "../Button/Button";

function ButtonGoWriter() {
  return (
    <main>
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
        <Button label="Ecrire une histoire" link="#" className="btn-story" />
      </div>
      
    </main>
  );
}

export default ButtonGoWriter;
