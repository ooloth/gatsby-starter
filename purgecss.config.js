module.exports = {
  content: [`public/index.html`, `src/**/*.js`],
  css: [`src/styles/builds/after-postcss/output.css`],
  extractors: [
    {
      // custom extractor to allow special characters in class names (see: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss)
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:/]+/g) || []
        }
      },
      extensions: [`html`, `js`]
    }
  ],
  whitelist: [`carousel-cell`, `cursor-not-allowed`, `filter-label`, `o-50`],
  // Add plugin prefixes here:
  whitelistPatterns: [
    /body/,
    /flickity/,
    /headroom/,
    /ReactModal/,
    /ril/,
    /slick/,
    /textarea/
  ]
}
