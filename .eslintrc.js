module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    // For now, we're exporting to static HTML and not using any loader, so
    //  we want to use <img> - when we start using Next SSR or a loader, we
    //  can turn this rule back on.
    "@next/next/no-img-element": "off",
  },
  ignorePatterns: [".next", "out"],
}
