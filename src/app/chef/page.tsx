import React from "react";
import Link from "next/link";
import ChefList from "@/lib/dataJson/cheflist.json";
import CommonHero from "@/components/CommonHero/CommonHero";
import Image from "next/image";

export default function Chef() {
  return (
    <>
      <CommonHero title={"Our Chefs"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container mx-auto md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-32">
          {ChefList?.map((elem, index) => (
              <div className="chef ak-bg" key={index}>
                <Image className="rounded-[30px]" src={elem.img} alt="..." width={1000} height={1000} />
                <div className="chef-style-1 -bottom-[95px]">
                  <div className="chef-info">
                    <div className="chef-info-social">
                      {elem.Children.map((data, index) => (
                        <Link href={data.link} key={index}>
                          {data.name}
                        </Link>
                      ))}
                    </div>
                    <div className="chef-title">
                      <Link href={`/chef/${elem.id}`}>{elem.name}</Link>
                      <p>{elem.posation}</p>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
