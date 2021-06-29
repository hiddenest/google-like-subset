# google-like-subset

Font subset generator based on Korean Google Fonts.  
> ⚠️ DISCLAMER: Made this with very ✕ ∞ exhausted mental state, so the codes are not in a good quailty.

## Why
Korean fonts are very heavy because there are many default glyphs.  
Minimum is 2,350 characters, it could be more if the font supports Korean Completed or CJK Compatible.

So, [Google Fonts runs Machine Learning]((https://googlefonts.github.io/korean/)) to minimize and optimize korean fonts for the better online webfont experience.

Base concept of Google Fonts:
- **Split fonts it with many-small sizes, combining in client-side**
- Use `font-display: swap` to show only the glyph is needed (if browser supports)
- Split font file into very small subsets

It could be useful for other korean fonts, so made this.

## How to start
Clone this repository into your local and make three folders:
- `subset` - where created subset files are stored.
- `charset` - where Google font parsing results are stored.
- `base` - store font file you want to make subset.

after store your font file at `base` folder, open `config.ts`.  
- `BaseGoogleFont` - Korean Google Font that you want to parse unicode sets.
- `FontData` - the data of font that you're making as a subset.
- `Paths` - folders... only change `base` with your stored file name.

Run `yarn install --frozen-lockfile` ...
and just run `yarn start`.

