
const del = require("del").sync;

module.exports = eleventyConfig => {
  // Clean the output directory.
  del("./www/");

  eleventyConfig.addPassthroughCopy("./static/");
  //eleventyConfig.setTemplateFormats([
  //  "md"
  //]);

  return {
    dir: {
      input: "",
      output: "www"
    }
  }
};