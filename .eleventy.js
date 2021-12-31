const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");


  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
     dir: {
        output: "public"
      },
  };
  

};