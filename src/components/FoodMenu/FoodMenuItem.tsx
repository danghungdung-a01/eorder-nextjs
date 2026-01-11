'use client'
import React, { useLayoutEffect, useRef } from "react";
import { foodMenuHr, overImageShows } from "../../lib/helper/main";
import Image from "next/image";

type Props = {
  data: {
    title: string;
    price: string;
    image: string;
    subTitle: string;
    priceSubTitle: string;
  };
};

export default function FoodMenuItem({ data }: Props) {
  const menuListSection = useRef(null);
  const border = useRef(null);
  const bordertwo = useRef(null);

  const { title, price, image, subTitle, priceSubTitle } = data;

  useLayoutEffect(() => {
    overImageShows(menuListSection.current);
    foodMenuHr(border.current);
    foodMenuHr(bordertwo.current);
  }, []);
  return (
    <div className="ak-menu-list-section-1" ref={menuListSection}>
      <div className="w-[100px] h-[100px]">
        <Image  width={100} height={100} src={image} alt="..." />
      </div>
      <div className="food-menu style-1">
        <div className="food-menu-section-1">
          <div className="food-menu-title">
            <p>{title}</p>
          </div>
          <div className="food-menu-hr hidden xl:block">
            <div className="food-menu-hr style-1" ref={border}></div>
            <div className="food-menu-hr style-1" ref={bordertwo}></div>
          </div>
          <div className="food-menu-price">
            <p>{price}</p>
          </div>
        </div>
        <div className="food-menu-section-2">
          <div className="food-menu-subsitle">
            <p>{subTitle}</p>
          </div>
          <div className="food-menu-price-subsitle">
            <p>{priceSubTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
