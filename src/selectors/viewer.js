/* eslint-disable prefer-template */

import { convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

/**
 * @param {String} Date - Email of new user to register a new account
 * @return {Boolean}
 */

export const convertStringDate = (stringDate) => {
  const date = new Date(Date.parse(stringDate));
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('fr-FR', options);
};

export const convertDraftToHtml = (draftJsonObject) => {
  const htmlContent = draftToHtml(JSON.parse(draftJsonObject));
  return htmlContent;
  // return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export const convertHtmlToText = (htmlCode) => htmlCode.textContent;

/* export function splitHtmlString(htmlString, charLimit) {
  JSON.stringify(draftToHtml(convertFromRaw(JSON.parse(content)))
  const result = [];
  let startIndex = 0;
  while (startIndex < htmlString.length) {
    let endIndex = startIndex + charLimit;
    let partialHtml = htmlString.substring(startIndex, endIndex);
    const lastTagIndex = partialHtml.lastIndexOf('>');
    if (lastTagIndex !== -1 && lastTagIndex >= endIndex - 10) {
      endIndex = lastTagIndex + 1;
      partialHtml = htmlString.substring(startIndex, endIndex);
    }
    result.push(partialHtml);
    startIndex = endIndex;
  }
  return result;
} */

export function splitHTML(html) {
  // Utiliser une expression régulière pour diviser le code HTML après chaque balise </p>
  const parts = html.split(/<\/p>/);

  // Supprimer la dernière partie si elle est vide (car la balise </p> est souvent
  // suivie d'une ligne vide)
  if (parts[parts.length - 1] === '') {
    parts.pop();
  }

  // Ajouter la balise </p> à chaque partie, car elle a été supprimée lors du découpage
  return parts.map((part) => part + '</p>');
}

export function groupByFive(array) {
  const groupedArray = [];
  for (let i = 0; i < array.length; i += 10) {
    // Utiliser la méthode slice pour extraire un groupe de 5 éléments du tableau
    const group = array.slice(i, i + 10);
    // Ajouter le groupe au nouveau tableau
    // group.join('');
    groupedArray.push(group.join(''));
  }
  return groupedArray;
}
