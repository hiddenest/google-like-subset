import { getSubsetFileUrl } from "../utils";

const createCSSImportTemplate = (
  font: Font,
  i: number,
  unicodeRange: string,
) => {
  const url = getSubsetFileUrl(font, i);

  return `
/* [${i}] */
@font-face {
  font-family: '${font.family}';
  font-style: normal;
  font-display: swap;
  font-weight: ${font.weight};
  src: url(${url}) format('${font.type}');
  unicode-range: ${unicodeRange};
}`;
};


export default createCSSImportTemplate;
