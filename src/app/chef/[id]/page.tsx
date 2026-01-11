'use client';
import React from "react";
import { useParams } from "next/navigation";
import CommonHero from "@/components/CommonHero/CommonHero";
import { ButtonCommon } from "@/components/Button/Button";

import ChefList from "@/lib/dataJson/cheflist.json";
import Image from "next/image";

export default function Chefdetails() {
  const params = useParams();
  const id = params?.id;

  const findChef = id ? ChefList?.find((product) => String(product.id) === String(id)) : undefined;

  console.log("findChef", findChef);
  console.log("id", id);
  
  return (
    <>
      <CommonHero title={"About Chef"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container mx-auto md:px-6 px-4">
        <div className="meet-the-content-about-section">
          <div className="about-info">
            <div className="ak-section-heading ak-style-1 ak-color-1">
              <p>{findChef?.posation}</p>
              <h2 className="ak-section-title ">{findChef?.name}</h2>
            </div>
            <div className="ak-height-25 ak-height-lg-25"></div>
            <p>{findChef?.desp}</p>
            <div className="ak-height-25 ak-height-lg-25"></div>
            <p>{findChef?.shortDesp}</p>
            <div className="ak-height-45 ak-height-lg-30"></div>
            <ButtonCommon to={findChef?.videolink}>View Expertise</ButtonCommon>
          </div>
          <div className="about-img">
            {findChef?.img && (
              <Image width={100} height={100} src={findChef?.img} className="imagesZoom" alt="meetAbout" />
            )}
          </div>
          <div className="about-social">
            {findChef?.Children?.map((data, i) => (
              <a href={data?.link} key={i}>
                {data?.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
