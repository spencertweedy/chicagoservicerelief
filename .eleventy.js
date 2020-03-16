module.exports = function(eleventyConfig) {
  // Pass through the static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("social.png");
};