/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import { useLocation } from "react-router";

/**
 * @param {Array} recipes - List of recipes
 * @return {string} - Welcome Message
 */
export function emptyResults() {
  const location = useLocation().pathname;
  const second = String(location).indexOf("/", 1);
  const value = String(location).substring(1, second);
  let textMessage = "";
  switch (value) {
    case "category":
      textMessage = "Pas d'écrits pour cette catégorie";
      break;
    case "genre":
      textMessage = "Pas d'écrits pour ce genre";
      break;
    case "nouveautes":
      textMessage = "Pas de nouveautés cette semaine";
      break;
    default:
      break;
  }
  return textMessage;
}

export function errorMessage() {
  let message;

  return message;
}
