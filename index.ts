import fs from 'fs';

import {
  createCSSImportTemplate,
  parseUnicodeSet,
  createSubset,
  parseGlyph,
  createSubsetTextFile,
} from './modules';

import * as config from './config';


const main = () => {
  const { unicodes } = parseGlyph(config.Paths.base);
  const { baseFont, charset, unicodeRange } = parseUnicodeSet(
    config.BaseGoogleFont,
    unicodes,
  );

  // create CSS File for import webfont
  const cssTemplates: string[] = [];

  charset.forEach(async (str, index) => {
    cssTemplates[index] = createCSSImportTemplate(
      config.FontData,
      index,
      baseFont.unicodeRange[`[${index}]`],
    );

    await createSubset({
      index,
      font: config.FontData,
      paths: config.Paths,
    });
  });

  const css = cssTemplates.join('');
  fs.writeFileSync(`${config.Paths.subset}/${config.FontData.fileName}.css`, css);
  fs.writeFileSync(
    `./${config.FontData.family}.json`,
    JSON.stringify({ charset, unicodeRange }, null, 2),
  );
};


main();
