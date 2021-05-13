
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

const pluginTOC = require('eleventy-plugin-toc')

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(pluginTOC)

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("slides");
  eleventyConfig.addPassthroughCopy("art/live");
  eleventyConfig.addPassthroughCopy("pdf");

  eleventyConfig.setTemplateFormats([
    "md",
    "njk"
  ]);

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setWatchThrottleWaitTime(500); // in milliseconds
  eleventyConfig.setUseGitIgnore(false);

  // Ensure anchors/ids for TOC use
  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor)
  )
  // configure TOC
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'div'
  })

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  }
};