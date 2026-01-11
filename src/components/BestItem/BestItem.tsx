'use client'
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import Image from "next/image";

type BestItemType = {
  title: string;
  textWhite: string;
  imgOne: string;
  imgTwo: string;
  details: string;
};

const bestItem: BestItemType = {
  title: "Specialties",
  textWhite: "Our",
  imgOne: "https://elegencia-react-ejev.vercel.app/assets/img/bestItem/bestItem1.jpg",
  imgTwo: "https://elegencia-react-ejev.vercel.app/assets/img/bestItem/bestItem2.jpg",
  details:
    " Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.",
};

export default function BestItem() {
  const { imgOne, imgTwo, details, title } = bestItem;
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container mx-auto md:px-6 px-4">
        <div className="ak-best-item">
          <div className="best-item-section-1">
            <SectionTitle title={title} textWhite={"Our"} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p>{details}</p>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="img-one">
              <ImgesOverlay image={imgTwo} imagesZoom={null} />
            </div>
          </div>
          <div className="best-item-section-2 flex justify-center items-start" data-speed="1.1" data-lag="1">
            <Image className="dark:block hidden" width={30} height={30} src="/img/icon/star_line.svg" alt="..." />
            <Image className="dark:hidden block" width={30} height={30} src="/img/icon/star_line_light.svg" alt="..." />
          </div>
          <div className="best-item-section-3">
            <div className="img-two">
              <ImgesOverlay image={imgOne} imagesZoom={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
