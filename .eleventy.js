module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("/src/css/");
  eleventyConfig.addWatchTarget("/src/css/");
  eleventyConfig.addPassthroughCopy("/src/images/");
  eleventyConfig.addPassthroughCopy({ "/src/favicons": "/" });
  eleventyConfig.addPassthroughCopy("bundle.css");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}


/*
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
};*/