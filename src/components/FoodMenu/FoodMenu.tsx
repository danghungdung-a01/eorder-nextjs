'use client'
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FoodMenuItem from "./FoodMenuItem";
import { ButtonCommon } from "../Button/Button";
import Image from "next/image";

const foodMenu = [
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spaghetti alla Carbonara",
    price: "$49",
    image: "https://elegencia-react-ejev.vercel.app/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "Extra free juice",
  },
];

type FoodMenuHomeProps = {
  styleTwo?: boolean;
};

export default function FoodMenuHome({ styleTwo }: FoodMenuHomeProps) {
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container mx-auto md:px-6 px-4">
        <SectionTitle
          title={"Appetizers"}
          subTitle={"Appetizers"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        {styleTwo == true ? (
          <div className="flex justify-between items-center flex-wrap gap-5 lg:flex-nowrap">
            <div className="ak-menu-list style-2 lg:max-w-[650px]">
              {foodMenu?.slice(0, 5).map((item, index) => {
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
            <div>
              <Image className='rounded-[30px]' width={1000} height={1000} src='https://elegencia-react-ejev.vercel.app/assets/img/itemShow/food-menu.png' alt="..." />
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <FoodMenuItem key={index} data={item} />;
            })}
          </div>
        )}

        <div className="ak-height-20 ak-height-lg-20"></div>

        <div className="md:text-center">
          <ButtonCommon to="/menu">View more</ButtonCommon>
        </div>
      </div>
    </section>
  );
}
