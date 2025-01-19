module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/posts/");
  eleventyConfig.addPassthroughCopy("src/Images/");
  /*eleventyConfig.addPassthroughCopy({ "/src/favicons": "/" });*/
  eleventyConfig.addPassthroughCopy("/bundle.css");
  eleventyConfig.addPassthroughCopy("src/filters.js")

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