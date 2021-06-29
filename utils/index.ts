import * as types from '../types';

export const getIndex = (index: string) => {
  const pureNumeric = index.replace(/[\[\]]/g, '');
  return parseFloat(pureNumeric);
};

export const formatAsUnicode = (value: string) => (
  parseInt(value, 16).toString(16).padStart(4, '0')
);

const getSubsetFileName = (name: number | string, fileName: string) => (
  `${fileName}.subset.${name}`
);

export const getSubsetFileUrl = (font: types.Font, name: number | string) => (
  `./subset/${getSubsetFileName(name, font.fileName)}.${font.type}`
)
