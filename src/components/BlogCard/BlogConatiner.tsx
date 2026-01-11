import React from "react";
import Link from "next/link";

import blogData from "@/lib/dataJson/bloglist.json";
import Image from "next/image";

type Props = {
  styleTypleTwo?: boolean;
};

const BlogConatiner = ({ styleTypleTwo }: Props) => {
  const data = styleTypleTwo ? blogData.slice(0, 3) : blogData;

  return (
    <div className="container mx-auto md:px-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((data, i) => (
          <div
            key={i}
            className={`col b-none ${
              i < 6 ? (styleTypleTwo ? " " : "ak-border  p-0") : " "
            } ${i == 2 || i == 5 || i == 8 ? " " : " drop-anim-gallery"}`}
          >
            <div className="blog h-full md:p-4">
              <Image width={1000} height={1000} src={data.img} className="blog-img-top rounded-[30px]" alt="..." />
              <div className="blog-body">
                <p className="blog-time">{data.time}</p>
                <Link href={`/blog/${data.id}`}>
                  <h6 className="blog-title">{data.title}</h6>
                </Link>
                <Link href={`/blog/${data.id}`} className="blog-text">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogConatiner;
