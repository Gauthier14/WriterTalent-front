/* eslint-disable quotes */
import "./MessageEmptyResults.scss";
import { useParams } from "react-router";

function MessageEmptyResults() {
  const { param } = useParams();
  let textMessage = "";
  switch (param) {
    case "category":
      textMessage = "cette catégorie";
      break;
    case "genre":
      textMessage = "ce genre";
      break;
    default:
      break;
  }
  return (
    <main className="empty-results">
      <div className="container-message">
        <p> Pas d'écrits pour {textMessage}</p>
      </div>
    </main>
  );
}

export default MessageEmptyResults;
