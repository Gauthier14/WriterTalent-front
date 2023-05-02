import { convertStringDate, renderedContent, convertDraftToHtml, convertHtmlToText } from 'src/selectors/viewer.js';

describe('convertStringDate', () => {
  test('should convert string date to French format', () => {
    const stringDate = '2022-05-01T15:00:00.000Z';
    const expected = 'lundi 2 mai 2022';
    const result = convertStringDate(stringDate);
    expect(result).toEqual(expected);
  });
});

describe('renderedContent', () => {
  test('should return the correct page words for the current page', () => {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla odio. Fusce nec nulla varius, sodales magna at, malesuada quam.';
    const wordsPerPage = 10;
    const currentPage = 2;
    const expected = 'adipiscing elit. Sed ac nulla odio. Fusce nec nulla varius, sodales magna at, malesuada quam.';
    const result = renderedContent(content, wordsPerPage, currentPage);
    expect(result).toEqual(expected);
  });

  test('should join the last word with the beginning of the next word if the last word is cut off', () => {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla odio. Fusce nec nulla varius, sodales magna at, malesuada quam.';
    const wordsPerPage = 10;
    const currentPage = 1;
    const expected = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla odio. Fusce';
    const result = renderedContent(content, wordsPerPage, currentPage);
    expect(result).toEqual(expected);
  });
});

describe('convertDraftToHtml', () => {
  test('should convert Draft.js JSON object to HTML', () => {
    const draftJsonObject = '{"entityMap":{},"blocks":[{"key":"4i4jr","text":"Hello world!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}';
    const expected = '<div><p>Hello world!</p></div>';
    const result = convertDraftToHtml(draftJsonObject);
    expect(result.props.dangerouslySetInnerHTML.__html).toEqual(expected);
  });
});

describe('convertHtmlToText', () => {
  test('should convert HTML code to plain text', () => {
    const htmlCode = '<div><p>Hello world!</p></div>';
    const expected = 'Hello world!';
    const result = convertHtmlToText(htmlCode);
    expect(result).toEqual(expected);
  });
});
