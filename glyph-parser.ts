import { parseGlyph } from './modules';

import * as config from './config';


const glyphParser = () => {
  parseGlyph(config.Paths.base);
};

glyphParser();
