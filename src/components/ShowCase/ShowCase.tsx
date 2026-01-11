'use client';
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_1.jpg",
    thumbnail: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_1.jpg",
    caption: "Image 1",
    title: "Paella Valencene",
    desp: "Italian",
  },
  {
    src: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_2.jpg",
    thumbnail: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_2.jpg",
    caption: "Image 2",
    title: "Paella Valencene",
    desp: "Italian",
  },
  {
    src: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_3.jpg",
    thumbnail: "http://elegencia-react-ejev.vercel.app/assets/img/gallery/gallery_3.jpg",
    caption: "Image 4",
    title: "Paella Valencene",
    desp: "Italian",
  },
];

export default function ShowCase() {
  const ClassOption = classNames(
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
  );
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container mx-auto md:px-6 px-4" id="foodItems">
        <SectionTitle
          title={"Food Items"}
          subTitle={"Food Showcase"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={ClassOption}
        >
          {galleryItems?.map((image, index) => (
            <Link href={image.thumbnail} key={index}>
              <div className="gallery-hover rounded-[30px]">
                <Image width={1000} height={1000} className="h-100 w-full" src={image.src} alt={image.caption} />
                <div className="gallery-img-overlay">
                  <div className="images-info">
                    <div className="gallery-img-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <rect
                          x="0.507812"
                          y="19.7305"
                          width="40"
                          height="1"
                          fill="#FFD28D"
                        />
                        <rect
                          x="20.0078"
                          y="0.730469"
                          width="1"
                          height="40"
                          fill="#FFD28D"
                        />
                      </svg>
                    </div>
                    <div className="gallery-hover-info">
                      <div>
                        <h6>{image.title}</h6>
                        <p>{image.desp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
