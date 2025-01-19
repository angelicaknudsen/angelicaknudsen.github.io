module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/Posts/");
  eleventyConfig.addPassthroughCopy("src/Images/");
  /*eleventyConfig.addPassthroughCopy({ "/src/favicons": "/" });*/
  eleventyConfig.addPassthroughCopy("/bundle.css");

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