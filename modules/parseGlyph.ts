import fs from 'fs';
import fontkit from 'fontkit';


const parseGlyph = (path: string) => {
  const font = fontkit.openSync(path);

  const unicodes: string[] = [];
  const charset: string[] = [];

  font.characterSet.forEach((value) => {
    if (!font.hasGlyphForCodePoint(value)) {
      return;
    }

    const unicode = value.toString(16).padStart(4, '0');
    unicodes.push(unicode);
    charset.push(String.fromCodePoint(value));
  });

  const results = { unicodes, charset };
  fs.writeFileSync('./parsed-glyph.json', JSON.stringify(results, null, 2), 'utf-8');

  console.log('Glyph parsed!');
  return results;
};

export default parseGlyph;
