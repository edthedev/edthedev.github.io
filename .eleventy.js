module.exports = eleventyConfig => {


  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.setTemplateFormats([
    "md",
    "njk"
  ]);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  }
};