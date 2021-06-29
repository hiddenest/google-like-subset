import fs from 'fs';

import shell from './shell';

import { getSubsetFileUrl } from '../utils';
import * as types from '../types';


type CreateSubSetParameter = {
  index: number | string;
  font: types.Font;
  paths: {
    charset: string;
    base: string;
  };
};

const createSubset = async ({
  index,
  font,
  paths,
}: CreateSubSetParameter) => {
  const textFilePath = `${paths.charset}/${index}.txt`;

  await shell(`pyftsubset "${paths.base}" \
--output-file="${getSubsetFileUrl(font, index)}" \
--text-file="${textFilePath}" \
--flavor="woff" \
--layout-features='*' \
--glyph-names \
--symbol-cmap \
--legacy-cmap \
--notdef-glyph \
--notdef-outline \
--recommended-glyphs \
--name-legacy \
--drop-tables= \
--name-IDs='*' \
--name-languages='*'`);

  console.log(`[${index}] font was created.`);
};

export default createSubset;
