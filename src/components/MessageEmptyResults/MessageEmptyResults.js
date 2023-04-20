/* eslint-disable quotes */
import "./MessageEmptyResults.scss";
import { emptyResults } from "../../selectors/message";

function MessageEmptyResults() {
  return (
    <main className="empty-results">
      <div className="container-message">
        <p>{emptyResults()}</p>
      </div>
    </main>
  );
}

export default MessageEmptyResults;
