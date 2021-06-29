export const getIndex = (index: string) => {
  const pureNumeric = index.replace(/[\[\]]/g, '');
  return parseFloat(pureNumeric);
};

export const formatAsUnicode = (value: string) => (
  parseInt(value, 16).toString(16).padStart(4, '0')
);

const getSubsetFileName = (i: number, fileName: string) => (
  `${fileName}.subset.${i}`
);

export const getSubsetFileUrl = (font: Font, i: number) => (
  `./subset/${font.type}/${getSubsetFileName(i, font.fileName)}.${font.type}`
)
