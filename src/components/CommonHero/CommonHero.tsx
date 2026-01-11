'use client'
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { commonTitleAnimation } from "../../lib/helper/main";
import Image from "next/image";
// import bgimg from "/img/bg/banner_top_all.png";

type Props = {
  link: string;
  title: string;
};

export default function CommonHero({ link, title }: Props) {
  const titles = useRef(null);

  useLayoutEffect(() => {
    commonTitleAnimation(titles.current);
  }, []);

  return (
    <section>
      <div className="ak-commmon-hero ak-style1 ak-bg">
        <Image
          src="/img/bg/banner_top_all.png"
          alt="Banner Top"
          className="commmon-hero-img"
          width={1920}
          height={1080}
          priority={false}
        />
        <div className="ak-commmon-heading">
          <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
            <div className="ak-section-subtitle">
              <Link href={`${link}`}>Home</Link> / {title}
            </div>
            <h2 className="ak-section-title page-title-anim" ref={titles}>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
