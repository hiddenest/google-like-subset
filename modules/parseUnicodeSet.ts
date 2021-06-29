import { APIv2 as fonts } from 'google-font-metadata';

import { formatAsUnicode, getIndex } from '../utils';
import createSubsetTextFile from './createSubsetTextFile';


const parseUnicodeSet = (
  baseFontName: string,
  allowedUnicodes = [] as string[],
) => {
  const baseFont = fonts[baseFontName];
  if (!baseFont) {
    throw new Error("There is no font you've requested.");
  }

  const characterSet = new Set<string>(allowedUnicodes);

  const orders = Object.keys(baseFont.unicodeRange)
    .sort((a, b) => getIndex(a) - getIndex(b));

  const unicodeRanges = orders.reduce<string[][]>((arr, key) => {
    let targets = baseFont.unicodeRange[key]
      .replace(/\U\+/g, '')
      .split(', ');

    targets = targets.reduce<typeof targets>((arr, str) => {
      const chars: string[] = [];

      if (!str.includes('-')) {
        chars.push(str);
      } else {
        const [startUnicode = '', endUnicode = ''] = str.split('-');

        const start = parseInt(startUnicode, 16);
        const end = parseInt(endUnicode, 16);

        [...new Array(end - start + 1).keys()].forEach((i) => {
          chars.push((start + i).toString(16));
        });
      }

      const stringRange = chars
        .map(value => formatAsUnicode(value))
        .filter(item => !characterSet.size || characterSet.has(item));

      if (!stringRange.length) {
        return arr;
      }

      return arr.concat(stringRange);
    }, []);

    if (!targets.length) {
      return arr;
    }

    return [...arr, targets];
  }, []);

  const charsetByRanges = unicodeRanges.map(rows => (
    rows.map(item => String.fromCodePoint(parseInt(item, 16))).join('')
  ));

  createSubsetTextFile(charsetByRanges);

  return {
    baseFont,
    charset: charsetByRanges,
    unicodeRange: unicodeRanges,
  };
};


export default parseUnicodeSet;
