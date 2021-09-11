module.exports = eleventyConfig => {


  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("presentations");
  eleventyConfig.addPassthroughCopy("keybase.txt");
  eleventyConfig.addPassthroughCopy("AnsibleIL.html");

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