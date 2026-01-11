import React from "react";
import Link from "next/link";
import CommonHero from "@/components/CommonHero/CommonHero";

import protfoliList from "@/lib/dataJson/protfolilists.json";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <CommonHero title={"Portfolio"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <section className="container mx-auto md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {protfoliList?.map((elem, index) => (
            <div className="col" key={index}>
              <Link
                href={`/portfolio/${elem.id}`}
                className="ak-card ak-style-1"
              >
                <div className="ak-card-img">
                  <Image className="rounded-[30px]" width={1000} height={1000} src={elem.img} alt="..." />
                </div>
                <div className="card-info rounded-2xl">
                  <div className="card-text style-1">
                    <h5 className="card-title">{elem.title}</h5>
                    <div className="card-subtitle">{elem.subtitle}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
