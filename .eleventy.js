module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/posts/");
  eleventyConfig.addPassthroughCopy("src/images/");
  /*eleventyConfig.addPassthroughCopy({ "/src/favicons": "/" });*/
  eleventyConfig.addPassthroughCopy("src/bundle.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/birds.csv");
  eleventyConfig.addPassthroughCopy('src/.birds')

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