import React from "react";
import { WhiteButton } from "@/components/Button/Button";
import Image from "next/image";

export default function ErrorPages() {
  return (
    <div className="section-all-item-center">
      <Image width={100} height={100} className="error-bg-img" src='/img/bg/errorPagesBg.png' alt="errorBg" />
      <div className="border-comming-soon-colum-right drop-anim-gallery h-full"></div>
      <div className="border-comming-soon-top"></div>
      <div className="container mx-auto md:px-6 px-4 text-center">
        <h2 className="item-title-number">404</h2>
        <h2 className="item-title">Sorry! The Page isn&apos;t Found Here</h2>
        <p className="item-subtext">
          Fortunately, since it is mainly a client-side issue, it is relatively
          easy for website owners to fix the 404 error. This article will
          explain the possible causes of error 404 and show four effective
          methods to resolve it.Fortunately, since it is mainly a client-side
          issue, it is relatively easy for website owners to fix the 404 error.
        </p>
        <div className="mt-5">
          <WhiteButton to={"/"}> Back to Home</WhiteButton>
        </div>
      </div>
      <div className="border-comming-soon-colum-left drop-anim-gallery h-full"></div>
      <div className="border-comming-soon-bottom w-full"></div>
    </div>
  );
}
