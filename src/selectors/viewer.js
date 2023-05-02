/* eslint-disable brace-style */
/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
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

/**
 * @param {String} content text content of post
 * @param {Number} wordsPerPage number of words for one page
 * @param {Number} currentPage number of current page
 * @returns pages for viewer post
 */
export const renderedContent = (content, wordsPerPage, currentPage) => {
  // const newContent = JSON.stringify(draftToHtml(convertFromRaw(JSON.parse(content))));
  const words = newContent.split('</p>');
  const startIndex = (currentPage - 1) * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;
  const pageWords = words.slice(startIndex, endIndex);
  // Check if the last word on the current page is cut off
  const lastWord = pageWords[pageWords.length - 1];
  const isLastWordCut = !lastWord.endsWith('.') && !lastWord.endsWith(',');
  if (isLastWordCut) {
    // If it is cut off, find the beginning of the next word
    const nextWordIndex = content.indexOf(lastWord, startIndex + wordsPerPage);
    if (nextWordIndex !== -1) {
      const nextWord = content.slice(nextWordIndex, content.indexOf(' ', nextWordIndex));
      pageWords[pageWords.length - 1] += nextWord;
    }
  }
  return pageWords.join(' ');
};

export const convertDraftToHtml = (draftJsonObject) => {
  const htmlContent = draftToHtml(JSON.parse(draftJsonObject));
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  /* import {
    convertToRaw,
  } from 'draft-js';
  const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
  const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n'); */
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
