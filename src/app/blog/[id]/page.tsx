'use client'
import React from "react";
import CommonHero from "@/components/CommonHero/CommonHero";
import SideBarBlogDetails from "@/components/BlogDetails/SideBarBlogDetails";
import BlogDetailsContainerAround from "@/components/BlogDetails/BlogDetailsContainerAround";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import BlogConatiner from "@/components/BlogCard/BlogConatiner";
import { useParams } from "next/navigation";

import BlogUser from "@/lib/dataJson/bloguser.json";

export default function Blogdetails() {
  const params = useParams();
  const id = params?.id;
  
  const findBlog = id ? BlogUser?.find((blog) => String(blog.id) === String(id)) : undefined;
  return (
    <>
      <CommonHero title={"Single Blog"} link={"/"} />
      <section className="container mx-auto md:px-6 px-4">
        <div className="ak-height-150 ak-height-lg-60"></div>
        <div className="blog-details">
          <h3 className="anim-title-3">{findBlog?.title}</h3>
          <div className="blog-details-subtitle">
            <p>{findBlog?.data}</p>
            <p className="blog-details-date"></p>
            <p>{findBlog?.postUser}</p>
          </div>
        </div>
        <div className="row flex justify-center items-start space-x-5" id="containerAround">
          <div className="md:w-8/12">
            <div className="blog-content" id="scrollGaleria">
              <BlogDetailsContainerAround props={findBlog} />
            </div>
          </div>
          <div className="md:w-4/12">
            <div id="infoProduto">
              <SideBarBlogDetails props={findBlog} />
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-60"></div>
        <SectionTitle
          title={"Similar News"}
          subTitle={"Similar News"}
          tyle={"center"}
        />

        <div className="ak-height-65 ak-height-lg-30"></div>
        <BlogConatiner styleTypleTwo={true} />
      </section>
    </>
  );
}
