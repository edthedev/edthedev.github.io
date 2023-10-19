const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = eleventyConfig => {

  // Static content
  eleventyConfig.addPassthroughCopy("css");  // Static files
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("slides");  // My slide decks
  eleventyConfig.addPassthroughCopy("art/live");  // JavaScript
  eleventyConfig.addPassthroughCopy("pdf");   // My Resume as a PDF file
  eleventyConfig.addPassthroughCopy(".well-known");  // security.txt
  eleventyConfig.addPassthroughCopy("data"); //  .json files
  eleventyConfig.addPassthroughCopy("examples"); //  example files
  eleventyConfig.addPassthroughCopy("dotfiles"); //  my dotfiles repository
  eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });  // Please Firefox, I provided the file, okay? Stop warning me.

  eleventyConfig.setTemplateFormats([
    "md",
    "njk"
  ]);

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setWatchThrottleWaitTime(500); // in milliseconds
  eleventyConfig.setUseGitIgnore(false);


  // Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // RSS
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);

  // In page Nav Anchors

  // npm install --save-dev markdown-it-anchor slugify
// Import prior to `module.exports` within `.eleventy.js`
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
// If not already added from previous tip
const slugify = require("slugify");

const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
  class: "anchor",
  symbol: "<span hidden>#</span>",
  style: "aria-labelledby",
});
const markdownItAnchorOptions = {
  level: [1, 2, 3],
  slugify: (str) =>
    slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
  tabIndex: false,
  permalink(slug, opts, state, idx) {
    state.tokens.splice(
      idx,
      0,
      Object.assign(new state.Token("div_open", "div", 1), {
        // Add class "header-wrapper [h1 or h2 or h3]"
        attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
        block: true,
      })
    );

    state.tokens.splice(
      idx + 4,
      0,
      Object.assign(new state.Token("div_close", "div", -1), {
        block: true,
      })
    );

    linkAfterHeader(slug, opts, state, idx + 1);
  },
};

/* Markdown Overrides */
let markdownLibrary = markdownIt({
  html: true,
}).use(markdownItAnchor, markdownItAnchorOptions);

// This is the part that tells 11ty to swap to our custom config
eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  }
};
