'use client';
import React, { useLayoutEffect, useRef } from "react";
import CommonHero from "@/components/CommonHero/CommonHero";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import FoodMenuItem from "@/components/FoodMenu/FoodMenuItem";
import { imageZoomInOut } from "@/lib/helper/main";
import foodmenulist from "@/lib/dataJson/foodmenulist.json";
import Image from "next/image";

export default function Menu() {
    const imageContainers = useRef<(HTMLDivElement | null)[]>([]);
    const imageZoomIns = useRef<(HTMLImageElement | null)[]>([]);

    useLayoutEffect(() => {
        foodmenulist.forEach((item, index) => {
            imageZoomInOut(
                imageContainers.current[index],
                imageZoomIns.current[index]
            );
        });
    }, []);
    return (
        <div>
            <CommonHero title={"Our Menu"} link={"/"} />
            {foodmenulist?.map((item, i) => (
                <div
                    key={i}
                    className="set-bg-img-section"
                    ref={(el) => { imageContainers.current[i] = el; }}
                >
                    <Image
                    width={1000} height={1000}
                        src={`${item.bgImgShow}`}
                        alt="..."
                        className="imagesZoom bg-img ak-bg dark:block hidden"
                        ref={(el) => { imageZoomIns.current[i] = el; }}
                    />

                    <div className="ak-height-150 ak-height-lg-60"></div>
                    <div className="container mx-auto md:px-6 px-4">
                        <SectionTitle
                            title={item.headingtext.title}
                            subTitle={item.headingtext.subTitle}
                            tyle={item.headingtext.tyle}
                        />
                        <div className="ak-height-65 ak-height-lg-30"></div>
                        <div className="ak-menu-list">
                            {item.foodMenu?.map((item, index) => {
                                return <FoodMenuItem key={index} data={item} />;
                            })}
                        </div>
                    </div>

                    <div className="ak-height-150 ak-height-lg-0 dark:block hidden"></div>
                    <div className="ak-height-150 ak-height-lg-60 dark:block hidden"></div>
                </div>
            ))}
        </div>
    );
}
