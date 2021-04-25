module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy("./static/*.html");
  //eleventyConfig.setTemplateFormats([
  //  "md"
  //]);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  }
};