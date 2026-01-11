import BlogConatiner from "@/components/BlogCard/BlogConatiner";
import CommonHero from "@/components/CommonHero/CommonHero";
import React from "react";


export default function Blog() {
  return (
    <>
      <CommonHero title={"Blog"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <BlogConatiner />
    </>
  );
}
