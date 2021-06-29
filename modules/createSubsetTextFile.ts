import fs from 'fs';

import * as config from '../config';


const createSubsetTextFile = (charset: string[]) => {
  if (fs.existsSync(config.Paths.charset)) {
    fs.rmdirSync(config.Paths.charset, { recursive: true });
    fs.mkdirSync(config.Paths.charset);
  }

  charset.forEach((str, index) => {
    fs.writeFileSync(`${config.Paths.charset}/${index}.txt`, str, 'utf-8');
  });

  fs.writeFileSync(
    `${config.Paths.charset}/subset.txt`,
    charset.join('\n'),
    'utf-8',
  );
};

export default createSubsetTextFile;
