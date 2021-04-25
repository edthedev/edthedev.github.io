module.exports = eleventyConfig => {


  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("slides");

  eleventyConfig.setTemplateFormats([
    "md",
    "njk"
  ]);

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setWatchThrottleWaitTime(500); // in milliseconds
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  }
};